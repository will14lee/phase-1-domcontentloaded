// Your code goes here
document.addEventListener("DOMContentLoaded", function(){
    const changeText= document.querySelector(`p`)
    console.log("The DOM has loaded");
    changeText.textContent= "This is really cool!"
})
console.log("This console.log() fires when index.js loades - before DOMContentLoaded is triggered")
// const clickMe= document.querySelector(`button`)
// document.addEventListener("click", function(){
//     const changeText= document.querySelector(`p`)
//     console.log("The DOM has loaded");
//     changeText.textContent= "You clicked on me! Congrats!"
// })
// document.addEventListener('DOMContentLoaded', () => {
//     const changeText= document.querySelector(`p`)
//     console.log("The DOM has loaded");
//     changeText.textContent= "This is really cool!"
// });