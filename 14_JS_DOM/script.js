//DOM (Document Object Model) is a tree-like structure that represents your HTML document.
// using id only
document.getElementById("para").textContent = "para change using script";

//using class only
document.getElementsByClassName("class")[0].innerHTML = "<h1>This is using class</h1>";
//query selector - return only single element which have first occurrence
//Selects the first matching element from the DOM.
//You can use CSS selectors like #id, .class, or tag.
document.querySelector("h2").textContent = "this is change para";

const newPara = document.querySelector(".style1");

newPara.style.color = "orange";
document.querySelector("#pro2").textContent = "this is color changed para";

const para2 = document.querySelector(".style2");
para2.style.fontSize = "50px";

//query selector all - return nodeList not single element
//Selects all elements that match a given CSS selector.
//Returns a NodeList (like an array) — you can loop through it.

const para3 = document.querySelectorAll("p");
console.log(para3);
for (p of para3) {
    p.style.textAlign = "center"
}
//event-
//Used to add an event to an element (like click, mouseover, input, etc.).
//It allows you to attach multiple event handlers to one element (unlike onclick).
//click event

document.querySelector("#btn2").addEventListener("click", () => {
    document.getElementById("btn2").textContent = "clicked";
    alert("button clicked");
});

let button = document.querySelector("#btn3");
button.addEventListener("click", () => {
    document.querySelector("#message").textContent = "Button Clicked!";
});

//submit event
document.querySelector("#form").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log("All", { name, email, password });
})