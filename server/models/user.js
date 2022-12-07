let users = [
  {
      firstname:"sriLakshmi",
      lastname:"Seelamneni",
      emailid: "srilakshmi0216@gmailcom",
       pwd: "12345"
  },
  {
      user: "sriLakshmi1",
       password: "12345"
    
  },
];


const con = require("./db_connect");


async function createTable() {
let sql=`CREATE TABLE IF NOT EXISTS users (
  userID INT NOT NULL AUTO_INCREMENT,
  firstname VARCHAR(255) NOT NULL,
  lastname VARCHAR(255) NOT NULL,
  emailid VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  CONSTRAINT userPK PRIMARY KEY(userID)
); `
await con.query(sql);
}
createTable();

async function register(user) {
let cUser = await getUser(user.email);
console.log(user)
if(cUser.length > 0) throw error("email already in use");

const sql = `INSERT INTO users (firstname,lastname,email,password )
  VALUES ("${user.firstname}", "${user.lastname}","${user.email}","${user.password}");
`
await con.query(sql);
return await login(user);
}


async function getAllUsers() {
 const sql = "SELECT * FROM users;";
 let users = await con.query(sql);
 console.log(users)
 return users;
}


async function getUser(user) {
  let sql;
  
  if(user.userID) {
    sql = `
      SELECT * FROM users
       WHERE userID = ${user.userID}
    `
  } else {
    sql = `
    SELECT * FROM users 
      WHERE email = "${user.email}"
  `;
  }
  return await con.query(sql);  
  }


async function login(user) { 
  console.log(user.email);
let cUser = await getUser(user); 

if(!cUser[0]) throw Error(user.email+" email not found");
if(cUser[0].password !== user.password) throw Error("Password incorrect");
console.log(cUser[0]);

return cUser[0];
}

async function updateUser(user) {
  let sql = `UPDATE users 
    SET email = "${user.email}"
    WHERE userID = ${user.userID}
  `;
  
  await con.query(sql);
  let updatedUser = await getUser(user);
  return updatedUser[0];
  }

async function deleteUser(user) {
  let sql = `DELETE FROM users
    WHERE userID = ${user.userID}
  `
  await con.query(sql);
  }


module.exports = { getAllUsers, login, register, deleteUser, updateUser};