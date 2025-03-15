const submit=document.querySelector('.register-submit');
let isregistered=false;
if (!localStorage.getItem('student')) {
    let student = {};
    localStorage.setItem('student', JSON.stringify(student));
  
}

const sname=document.querySelector('.name');
const htno=document.querySelector('.hallticketregister');
const course=document.querySelector('.course');
const branch=document.querySelector('.branch');
const year=document.querySelector('.year');
const semester=document.querySelector('.semester');
const email=document.querySelector('.email');
const rpasswords=document.querySelector('.rpassword');
const login=document.querySelector('.loginsubmit');

const registersubmit=document.querySelector('.register-submit');
const form=document.querySelector('.form');


sname.addEventListener('input',(e)=>{
   if(localStorage.getItem('student').sname===null){
   const snameuser=e.target.value;
   const studentobj=JSON.parse(localStorage.getItem('student'));
   studentobj.sname=snameuser;
   localStorage.setItem('student',JSON.stringify(studentobj));
   }
   else{
      isregistered=true;
   }
})

htno.addEventListener('input',(e)=>{
   if(localStorage.getItem('student').htno===null){
    const htuser=e.target.value;
    const studentobj=JSON.parse(localStorage.getItem('student'));
    studentobj.htno=htuser;
    localStorage.setItem('student',JSON.stringify(studentobj));
   }
 })
  
 course.addEventListener('input',(e)=>{
   if(localStorage.getItem('student').course===null){
    const courseuser=e.target.value;
    const studentobj=JSON.parse(localStorage.getItem('student'));
    studentobj.course=courseuser;
    localStorage.setItem('student',JSON.stringify(studentobj));
   }
 })

 branch.addEventListener('input',(e)=>{
   if(localStorage.getItem('student').branch===null){
    const branchuser=e.target.value;
    const studentobj=JSON.parse(localStorage.getItem('student'));
    studentobj.branch=branchuser;
    localStorage.setItem('student',JSON.stringify(studentobj));
   }
 })


 year.addEventListener('input',(e)=>{
   if(localStorage.getItem('student').year===null){
    const yearuser=e.target.value;
    const studentobj=JSON.parse(localStorage.getItem('student'));
    studentobj.year=yearuser;
    localStorage.setItem('student',JSON.stringify(studentobj));
   }
 })


 semester.addEventListener('input',(e)=>{
   if(localStorage.getItem('student').semester===null){
    const semesteruser=e.target.value;
    const studentobj=JSON.parse(localStorage.getItem('student'));
    studentobj.semester=semesteruser;
    localStorage.setItem('student',JSON.stringify(studentobj));
   }
 })


 email.addEventListener('input',(e)=>{
   if(localStorage.getItem('student').email===null){
    const emailuser=e.target.value;
    const studentobj=JSON.parse(localStorage.getItem('student'));
    studentobj.email=emailuser;
    localStorage.setItem('student',JSON.stringify(studentobj));
   }
 })

 rpasswords.addEventListener('input',(e)=>{
   if(localStorage.getItem('student').rpassword===null){
    const rpassworduser=e.target.value;
    const studentobj=JSON.parse(localStorage.getItem('student'));
    studentobj.rpassword=rpassworduser;
    localStorage.setItem('student',JSON.stringify(studentobj));
    localStorage.setItem('fine',0);
   }
 })


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    // if(isregistered===true){
    // const message=document.createElement('h3');
    // message.innerText="You have already registered on this device.Try to Login instead..";
    // message.style.color="brown";
    // const container=document.querySelector('.container');
    // container.appendChild(message);
    // }
    // else{
    window.location="index.html";
   // }
}
)




