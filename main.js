// getUsers button 
 document.getElementById("btn-users").addEventListener('click', getUsers);

function getUsers() {
 fetch("http://localhost:3000/users/")
 .then((res)=> res.json())
  .then((data) => console.log(data))
   .catch((err)=> console.log(err))
}

class main
{
    constructor(fname,lname,uname,pwd)
    {
    this.FN=fname;
    this.LN=lname;
    this.UN=uname;
    this.Pwd=pwd;

    }
    getFN(){
        return this.FN;
    }
    getLN(){
        return this.LN;
    }
    getUN(){
        return this.UN;
    }
    getPwd()
    {
        return this.Pwd;
    }
    setFN(fname){
        this.FN=fname;
    }
    setLN(lname){
        this.LN=lname;
    }      
    setUN(uname){
        this.UN=uname;
    }
    setPwd(pwd)
    {
        this.Pwd=pwd;
    }
}
const register=document.getElementById("formreg");
if(register) register.addEventListener('submit',registertion)
function registertion(e){
    e.preventDefault();
    let firstname=document.getElementById('fname').value;
    let lastname=document.getElementById('lname').value;
    let username=document.getElementById('uname').value;
    let passwrd=document.getElementById('password').value;

    let regi= new main(firstname,lastname,username,passwrd);
    console.log(regi.FN)
    console.log(regi.LN)
    console.log(regi.UN)
    console.log(regi.Pwd)
    register.reset();
}
const loginform=document.getElementById("login");
if(loginform) loginform.addEventListener('submit', loginuser)
function loginuser(l){
    l.preventDefault();
    let user=document.getElementById('uname').value;
    let password=document.getElementById('pasword').value;
    console.log(`${user}`);
    console.log(`${password}`);
    loginform.reset();
}

const noteform=document.getElementById("note");
if(noteform) noteform.addEventListener('submit',notem)
function notem(f)
{
    f.preventDefault();
    let notetext=document.getElementById('noteid').value;
    console.log(`${notetext}`);
    noteform.reset();
}