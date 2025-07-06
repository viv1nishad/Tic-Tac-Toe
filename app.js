let boxes= document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO=true;
let count = 0;

const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [2,4,6],
    [6,7,8],
];

const resetGame =()=>{
    turnO=true;
    count=0;
    enableBox();
    msgContainer.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
       
        if(turnO){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X" ;
            turnO=true;
        }
        box.disabled =true;

       let isWinner= cheakWinner();
       if(count === 9 &&  isWinner != true){
         gameOver();
       }       
    });
});

const gameOver=()=>{
    msg.innerText="Game was Draw";
    msgContainer.classList.remove("hide");
    disableBox();
}

const disableBox =()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableBox =()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner =(winner)=>{
    msg.innerText=`Congratulation, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBox();
}

const cheakWinner=()=>{
     count++;
    for(let pattern of winPattern){
      
          let pos1Val= boxes[pattern[0]].innerText;
          let pos2Val= boxes[pattern[1]].innerText;
          let pos3Val= boxes[pattern[2]].innerText;

          if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){     
                showWinner(pos1Val);
                return true;
            }
          }

    }
};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);



