let myBtn = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName(){
let myName = prompt("请输入你的名字");
localStorage.setItem("name",myName);
myHeading.textContent="hahahah,"+myName;
}


myBtn.onclick=function() {
setUserName();
}