const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser')
const fs= require('fs');
const path = require('path');
const path = require('path')

//this is update

const app =express();
app.use(cors());
app.use(bodyParser.json({type:'application/json'}))
app.use(bodyParser.urlencoded({extended:true}))

const DB = mysql.createConnection({
    host:"localhost",
    port:3305,
    user:"root",
    password:"",
    database:"yasa_final_test",

    queryFormat: function(query, values){
        if(!values) return query;
        return query.replace(
            /\:(\w+)/g,
            function(txt,key){
                if(values.hasOwnProperty(key)){
                    return this.escape(values[key]);
                }
                return txt
            }.bind(this)
        )
    }
})

app.get('/', (req,res)=>{
    return res.json("from backend side");
})



const blobToImage = (blob)=>{

}


//======================================================
//lawyer page

app.get('/lawyer',(req,res)=>{
    const sql="SELECT * FROM lawyer_page WHERE availability=1 ORDER BY RAND()";
    DB.query(sql,(err,dataa)=>{
        if(err) return res.json(err);
        
        return res.json(dataa)
    })
})


// =====================================================
// lawyers in home page


app.get('/lawyer-home', (req, res) => {
    const sql = "SELECT * FROM lawyer_page WHERE availability=1 ORDER BY id DESC LIMIT 3";
    DB.query(sql, (err, dataa) => {
        if (err) return res.json(err);

        return res.send(dataa);
    });
});




// =====================================================
// lawyers filtered by city in home


app.get('/lawyers-fbch', (req, res) => {
  const {city} = req.query;
  const sql = `SELECT * FROM lawyer_page WHERE availability=1 AND city='${city}'`;
  DB.query(sql, (err, dataa) => {
      if (err) return res.json(err);

      return res.send(dataa);
  });
});

//======================================================
//prsyara bawakan page

app.get('/popular_question-page', (req, res) => {
    const sql = "SELECT * FROM popular_question WHERE availability=1 ORDER BY id DESC";
    DB.query(sql, (err, dataa) => {
        if (err) return res.json(err);

        return res.send(dataa);
    });
});



//======================================================
//prsyara bawakan home

app.get('/popular_question-home', (req, res) => {
    const sql = "SELECT * FROM popular_question WHERE availability=1 ORDER BY id DESC LIMIT 3";
    DB.query(sql, (err, dataa) => {
        if (err) return res.json(err);

        return res.send(dataa);
    });
});


//======================================================
//research uni page

app.get('/research_uni-page', (req, res) => {
    const sql = "SELECT * FROM research_uni WHERE availability=1 ORDER BY id DESC";
    DB.query(sql, (err, dataa) => {
        if (err) return res.json(err);

        return res.send(dataa);
    });
});



//======================================================
//research uni home

app.get('/research_uni-home', (req, res) => {
    const sql = "SELECT * FROM research_uni WHERE availability=1 ORDER BY id DESC LIMIT 3";
    DB.query(sql, (err, dataa) => {
        if (err) return res.json(err);

        return res.send(dataa);
    });
});


//======================================================
//renmayakan page

app.get('/inst_publish', (req, res) => {
  const sql = "SELECT * FROM instuction_publish WHERE availability=1 ORDER BY id DESC";
  DB.query(sql, (err, dataa) => {
      if (err) return res.json(err);

      return res.send(dataa);
  });
});

//======================================================
//renmayakani sandika page

app.get('/sendicate_intruction', (req, res) => {
  const sql = "SELECT * FROM sendicate_instruction WHERE availability=1 ORDER BY id DESC";
  DB.query(sql, (err, dataa) => {
      if (err) return res.json(err);

      return res.send(dataa);
  });
});


//======================================================
//lawyers category 

// app.get('/lawyer-category', (req, res) => {

//     const sql = `
//     SELECT
//       lawyer_page.id AS lawyer_id,
//       lawyer_page.name AS lawyer_name,
//       GROUP_CONCAT(category.type) AS categories
//     FROM
//       lawyer_page
//     LEFT JOIN
//       lawyer_category ON lawyer_page.id = lawyer_category.lawyer_id
//     LEFT JOIN
//       category ON lawyer_category.category_id = category.id
//     GROUP BY
//       lawyer_page.id, lawyer_page.name
//   `;


//     DB.query(sql, (err, dataa) => {
//         if (err) return res.json(err);

//         return res.send(dataa);
//     });
// });

app.get('/lawyer-category/:id', (req, res) => {
  const lawyerId = req.params.id;

  const sql = `
    SELECT
      lawyer_page.id AS lawyer_id,
      lawyer_page.name AS lawyer_name,
      category.type AS category_type
    FROM
      lawyer_page
    LEFT JOIN
      lawyer_category ON lawyer_page.id = lawyer_category.lawyer_id
    LEFT JOIN
      category ON lawyer_category.category_id = category.id
    WHERE
      lawyer_page.id = ${lawyerId} AND lawyer_page.availability=1;
  `;

  DB.query(sql, (err, data) => {
    if (err) return res.json(err);

    return res.send(data);
  });
});






//======================================================
//lawyers search by typing

app.get('/lawyers-search-type', (req, res) => {
    const {name} = req.query
    const sql="SELECT * FROM lawyer_page WHERE availability=1";
    DB.query(sql,(err,dataa)=>{
      if (err){ 
        return res.json(err);
      }else{
        const results = dataa.filter((item)=> item.name.includes(name))
        return res.json(results)
      }

      
    })


   
  });

//======================================================
//lawyers search by filter

app.get('/lawyers-search-filter', (req, res) => {
    
  const { city, gender, type } = req.query;

  let query =
      'SELECT DISTINCT lawyer_page.* ' +
      'FROM lawyer_page ' +
      'JOIN lawyer_category ON lawyer_page.id = lawyer_category.lawyer_id ' +
      'JOIN category ON lawyer_category.category_id = category.id ' +
      'WHERE lawyer_page.availability=1';
       if (city) query += ` AND lawyer_page.city = '${city}'`;
       if (gender) query += ` AND lawyer_page.gender = '${gender}'`;
       if (type) query += ` AND category.type = '${type}'`;

     

  DB.query(query,(err,dataa)=>{
    if (err){ 
      return res.json(err);
    }else{
      
      return res.json(dataa)
    }
  })
});









app.listen(8085,()=>{
    console.log("listening") 
})