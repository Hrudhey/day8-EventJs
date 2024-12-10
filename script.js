// DOM - The tree like structure of the html document is DOM. It's always created in the browser.
  /* Tree of nodes / elements. JS can be used to read/write/manipulate to the DOM. object oriented Representation. 
  */ 
 /* DOM Manipulation in JS
 1. Access the Elements
 2. Store or Map that element in a local variable
 3. Use JS DOM properties to alter/change    */

 /*  #. Access the Elements
 1.Access using id - getElementsById()
 2. Acess using class- getElementsByClass()
 3. Access using tags- getElementByTags
 4. querySelector -returns the first element that matches the specified CSS selector in the document */

 var d1= document.getElementById('d1');
 d1.style.color= "red";
 // d1.style.backgroundColor= "azure";
 // d1.style.fontFamily= "arial";  

 // d1.innerText="Getting started with DOM";
 // d1.innerHTML= `<h3>Welcome to ICT Academy</h3>`;
 var hop= document.getElementById("dean");
 hop.innerHTML= `<h2>Session TimedOut</h2>`;
// dean.innerHTML= `<img  src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-1.2.1&w=1000&q=80" alt="no image">`;

let group= document.getElementsByClassName("grp");
console.log(group);
group[0].style.backgroundColor= "orange";
group[0].innerText="lorem";
group[1].innerHTML=`<h4>BlueLock</h4>`;

let para= document.getElementsByTagName("p");
para[0].style.color= "black";
para[0].style.fontFamily= "arial";
para[0].style.backgroundColor= "red";
para[0].style.fontStyle= "italic";

let q1= document.querySelector("#dean");
q1.style.textAlign= "center";
let q2= document.querySelector('input[type="date"]');
q2.style.backgroundColor= "green";

let p1= document.querySelector(".grp");
p1.style.backgroundColor= "yellow";     //query selector has more preference than getElementsByClassName

let ka= document.querySelectorAll(".deer");

ka[0].innerText= "Merry Christmas";

let lastitem= document.querySelector('.lichild:last-child');
lastitem.style.color= 'blue';

let seconditem= document.querySelector(".lichild:nth-child(2)");
seconditem.style.color= "green";

function display(){
    alert("I am clicked!!");    // alert is for pop-up
}

function change1(){
    d1.style.color= "blue";
}
function change2(){
    d1.style.color= "red";
}
/*function press(e) {
   console.log(e.target.value);    // the value of e never changes, whatever may be the event
}*/

/* function value1(e) {
     console.log(e.target.value);
 } */

/*function value2(e) {
    console.log(e.target.value);
}*/

let t1= document.getElementById("txt1");
t1.addEventListener("keypress",function value1(e){
    console.log(e.target.value);
})