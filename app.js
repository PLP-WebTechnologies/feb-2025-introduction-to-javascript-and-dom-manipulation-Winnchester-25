const navLinks = document.querySelectorAll("li a");
navLinks.forEach(link => {
    link.style.color = "blue";
});

const upper = document.querySelector(".upper")
const click = document.querySelector(".click");
click.addEventListener("click",() =>{
upper.textContent = "Welcome To Javascript World"

});



  let boxColors = ["green", "yellow", "blue", "red"];
  let currentColor = 0;


  const coloredBox = document.querySelector(".coloredBox");
    const color_Changer = document.querySelector(".color_changer");

    color_Changer.addEventListener("click", () => {
        coloredBox.style.backgroundColor = boxColors[currentColor]; 
        currentColor = (currentColor + 1) % boxColors.length; // Loop back to 0
        coloredBox.style.width = "200px"; // Updates width to 200px
        coloredBox.style.height = "200px"; // Updates height to 200px
        coloredBox.style.borderRadius = "10px"; // Updates border radius to 10px
        coloredBox.style.margin = "20px"; // Updates margin to 20px
    });



    

const append = document.querySelector(".append");
const connect = document.querySelector(".connect");

connect.addEventListener("click", () =>{
    append.textContent = "We are a team of passionate developers and educators committed to helping you master JavaScript. Our mission is to make learning fun and accessible for everyone, regardless of their background or experience level. Whether you're a complete beginner or an experienced programmer, we have the resources and support you need to succeed. Join us on this exciting journey and let's learn together!"; // Updates text
append.style.fontSize = "20px"; // Updates font size

});
