let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector   ("#reset-btn");
let newGamebtn = document.querySelector("#new-btn");
let msgContain = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];


const resetGame = () =>
{ 
    msgContain.classList.add("hide");
    enableBoxes();
    turnO =true;
    
};

boxes.forEach((box)=>{
    box.addEventListener("click", () =>
    {
        
        if (turnO)
        {
            box.innerText = "O";
            turnO =false;
        }
        else
        {
            
            box.innerText = "X";
            box.classList.add("color2");
            turnO = true;
        }
        box.disabled = "true";
        checkwinner();
    });
});


const disableBoxes = () =>
{
    for (let box of boxes)
    {
        box.disabled = true;
    }
};

const enableBoxes = () =>
    {
        for (let box of boxes)
        {
            box.disabled = false;
            box.innerText = "";
        }
    }
const showWinner = (winner) =>
{
    msgContain.classList.remove("hide");
    msg.innerText = `Contgratulations , Winner is ${winner}`;
    disableBoxes();
}

const checkwinner = () => {
   for( let pattern of winPatterns )
   { 
    let val1 = boxes[pattern[0]].innerText;
    let val2 = boxes[pattern[1]].innerText;
    let val3 = boxes[pattern[2]].innerText;
    
    if(val1 != "" && val2 != "" && val3 != "")
    {
        if(val1 == val2 && val2 == val3)
        {
            showWinner(val1);
        }
   }
}}

newGamebtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click",resetGame);