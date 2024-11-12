const express = require ('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
port = process.env.PORT || 7000;
console.log(port)






app.use(express.json());





app.listen(port,(req,res)=>{
    console.log(`Server is running on  ${port} ....`);
});
const students = ["Fathima","Nayan","Gopika"]
const teachers = [{
    name : "Musthafa",
    subject : "Maths",
    age : 30
},
{
    name : "Jawad",
    subject : "Science",
    age : 25
},
{
    name : "Hari",
    subject : "English",
    age : 35
}]
const friends = ["Fathima","Nayan","Gopika","Musthafa","Jawad","Hari"]

app.get('/friends',(req,res)=>{
    res.send(friends)
})
app.get("/",(req,res)=>{
    console.log(req)
    res.send("Hello World")  

})
app.get("/home",(req,res)=>{
    res.send("Welcome to Home Page")
})
app.get("/students",(req,res)=>{
    res.send(students)
})
app.get("/teachers",(req,res)=>{
    res.json(teachers)
})
app.post("/addFriend",(req,res)=>{
    const newFriend = req.body.name;
    friends.push(newFriend);
    res.send(friends)
})
app.post("/addStudent",(req,res)=>{
    const newStudent = req.body.name;
    students.push(newStudent);
    res.send(students)
})
app.post("/addTeacher",(req,res)=>{
    const newTeacher = {
        name: req.body.name,
        subject: req.body.subject,
        age: req.body.age
    };



    teachers.push(newTeacher)
    res.send(teachers)
})




