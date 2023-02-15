var you = document.querySelector(".nav")
window.addEventListener('scroll', () => {
    you.classList.toggle("window-scroll", window.scrollY > 100)

})
/*............................practice of readystate...........////
const come = document.querySelector(".p");
come.addEventListener("click", ()=>{
    var u = document.readyState;
    document.getElementById("j").innerHTML = u;
})
window.addEventListener("DOMContentLoaded", (event)=>{
console.log("come here")
})
/* end of it.....................*/


/*.................js for messages start here.........*/

const icons = document.querySelectorAll(".faq");
icons.forEach(na => {
    na.addEventListener("click", () => {
        na.classList.toggle("active")
    })
})

/*..........................for student.html use....................*/
const prev = document.querySelectorAll(".prev");
const johnson = document.querySelector(".student-container").offsetWidth;
 const yo = document.querySelectorAll(".all-student-details");
 let see = function(){
    
johnson.offsetWidth;
    
 }
 let go = function() {yo.forEach( da=>{
da.scrollLeft += johnson;
 })
}
prev.forEach(prev =>{
    prev.addEventListener("click", () => {
       
        go()
        console.log(go())
       })
    })   
    

/*............................
document.querySelectorAll(".next").onclick= function(){

    const widthItem = document.querySelector(".student-container").offsetWidth;
    document.querySelector(".all-student-details").scrollLeft -= widthItem;
}

/*..........................for student.html use....................*/
const next = document.querySelectorAll(".next");
const widthItem = document.querySelector(".student-container").offsetWidth;
const rr = document.querySelectorAll(".all-student-details");
let all = function(){
    rr.forEach(rr =>{
        rr.scrollLeft -= widthItem;
    })
   
}
next.forEach(next => {
    
       
    next.addEventListener("click", () => {
        console.log(next)
        all();
    
        })
    })   
    
