let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newgame= document.querySelector("#new-btn");
let msgcontainer= document.querySelector(".msg-container");
let msg= document.querySelector("#msg");


let turn = true;
let winningpattern =[[0,1,2,],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

let resetGame=()=>{
    turn = true;
    enableBoxes();
    msgcontainer.classList.add("hide");
}


boxes.forEach((box)=>{
  box.addEventListener("click",()=>{
    if(turn) {box.innerText="X"; turn= false;}
    else {box.innerText="O";
         turn=true}
    box.disabled=true;
    checkWinner();
  })
})

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner=(winner)=>{
  msg.innerText= `Congratulations Winner is ${winner}`;
  msgcontainer.classList.remove("hide");
  disableBoxes(); 
};

const checkWinner=()=>{
  for(let winner of winningpattern){
    pasval1=boxes[winner[0]].innerText;
    pasval2=boxes[winner[1]].innerText;
    pasval3=boxes[winner[2]].innerText;
  if(pasval1!="" && pasval2!="" &&pasval3!="") {
    if(pasval1 === pasval2 && pasval2===pasval3){
      console.log("Winner",pasval1);
      disableBoxes();
      showWinner(pasval1);
    }
  }
  }
}
newgame.addEventListener("click",resetGame)
resetbtn.addEventListener("click",resetGame)