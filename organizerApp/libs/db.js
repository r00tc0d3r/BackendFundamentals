const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "127.0.0.1", // 'localhost'
  port: 3306,
  user: "tzuzul",
  password: "12345",
  database: "OrganizerApp",
}); //function

function query(sql, data) {
  const miPromesa = new Promise(function (resolve, reject) {
    connection.query(sql, data, function (error, result, fields) {
      if (error != null) {
        console.log(error);

        return reject({
          error: true,
          message: error.sqlMessage,
        });
      } else {
        return resolve(result);
      }
    });
  });

  return miPromesa;
}

// function myCreateConnection(objeto){
//     //procesar objeto

//     return {
//         info:{
//             name:"Connection personalizada",
//             status:"success"
//         },
//         query:function(){
//             console.log("Realizando consulta...")
//         }
//     }
// }

module.exports = {
  connection,
  query,
};
