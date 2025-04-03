const submit=document.querySelector('.register-submit');
let firstregistered;
if (!localStorage.getItem('student')) {
    let student = {};
    firstregistered=false;
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


sname.addEventListener('input',function(e){

   const snameuser=e.target.value;
   const studentobj=JSON.parse(localStorage.getItem('student'));
   if(studentobj.sname== null){
      studentobj.sname=snameuser;
      localStorage.setItem('student',JSON.stringify(studentobj));
      firstregistered=true;
   }
   else{
   firstregistered=false;
   }

  
  
});

htno.addEventListener('input',function(e){

    const htuser=e.target.value;
    const studentobj=JSON.parse(localStorage.getItem('student'));
    if(studentobj.htno==null){
    studentobj.htno=htuser;
    localStorage.setItem('student',JSON.stringify(studentobj));
    }
   
   
 });
  
 course.addEventListener('input',function(e){

    const courseuser=e.target.value;
    const studentobj=JSON.parse(localStorage.getItem('student'));
    if(studentobj.course==null){
    studentobj.course=courseuser;
    localStorage.setItem('student',JSON.stringify(studentobj));
    }
    
   
 });

 branch.addEventListener('input',function(e){
  
    const branchuser=e.target.value;
    const studentobj=JSON.parse(localStorage.getItem('student'));
    if(studentobj.branch==null){
    studentobj.branch=branchuser;
    localStorage.setItem('student',JSON.stringify(studentobj));
    }
   
   
 });


 year.addEventListener('input',function(e){

    const yearuser=e.target.value;
    const studentobj=JSON.parse(localStorage.getItem('student'));
    if(studentobj.year==null)
    {
    studentobj.year=yearuser;
    localStorage.setItem('student',JSON.stringify(studentobj));
    }
  
   
 });


 semester.addEventListener('input',function(e){

    const semesteruser=e.target.value;
    const studentobj=JSON.parse(localStorage.getItem('student'));
    if(studentobj.semester==null){
    studentobj.semester=semesteruser;
    localStorage.setItem('student',JSON.stringify(studentobj));
    }
    
   
 });


 email.addEventListener('input',function(e){

    const emailuser=e.target.value;
    const studentobj=JSON.parse(localStorage.getItem('student'));
    if(studentobj.email==null){
    studentobj.email=emailuser;
    localStorage.setItem('student',JSON.stringify(studentobj));
    }
   
   
 });

 rpasswords.addEventListener('input',function(e){
  
    const rpassworduser=e.target.value;
    const studentobj=JSON.parse(localStorage.getItem('student'));
    if(studentobj.rpassword==null){
    studentobj.rpassword=rpassworduser;
    localStorage.setItem('student',JSON.stringify(studentobj));
    }
   
  
   
 });


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const studentobj=JSON.parse(localStorage.getItem('student'));
    if(studentobj.sname && firstregistered==false){
    const message=document.createElement('h3');
    message.innerText="You have already registered on this device.Try to Login instead..";
    message.style.color="brown";
    const container=document.querySelector('.container');
    container.appendChild(message);
    }
    else{
    window.location="index.html";
   }
}
)




