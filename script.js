let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let btn = document.querySelector("#new-btn");
let msg_container = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let ture0 = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]
const resetgame =() => {
    ture0 = true;
    enableBox();
    msg_container.classList.add("hide")
}

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        console.log("hrllo");
        if (ture0){
            box.innerText = "0";
            ture0 = false;
        }else {
            box.innerText = "X";
            ture0 = true;
        }
        box.ariaDisabled = true;

        checkWinner();
    });
});
const dDisabledBox =() =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBox =() =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner =() =>{
    msg.innerText = 'Congratulations, Winner ';
    msg_container.classList.remove("hide");
    dDisabledBox();
}

const checkWinner = () =>{
    for (let patterns of winPatterns) {
        let pos1val = boxes[patterns[0]].innerText;
        let pos2val = boxes[patterns[1]].innerText;
        let pos3val = boxes[patterns[2]].innerText;

        if (pos1val !="" && pos2val !="" && pos3val !=""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("winner");
                showWinner(pos1val);
            }
        }
    };
};
reset.addEventListener("click", resetgame);
btn.addEventListener("click", resetgame);