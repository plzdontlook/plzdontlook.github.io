/*const myHeading = document.querySelector("h2");
myHeading.textContent = "Hello Frogs";

function test(str) {
	alert(str);
}
document.querySelector("img").addEventListener("click", ()=>{alert("Greetings frog lovers");});
*/

const myImage = document.querySelector("img");

myImage.onclick = ()=> {
	const mySrc = myImage.getAttribute("src");
	if(mySrc === "images/apu-hugging.png") {
		myImage.setAttribute("src","images/frog.jpg");
	} else {
		myImage.setAttribute("src", "images/apu-hugging.png");
	}
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h2");

function setUserName() {
	const myName = prompt("please enter your name");
	if (!myName) {
		setUserName();
	} else {
		localStorage.setItem("name", myName);
		myHeading.textContent = `Welcome frog lover ${myName}`;
	}
}

if(!localStorage.getItem('name')) {
	setUserName();
} else {
	const storedName = localStorage.getItem('name');
	myHeading.textContent = `Welcome frog lover ${storedName}`; // don't forget to use backticks (next to the 1 button)
}

myButton.onclick = () => {setUserName();}