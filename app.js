let boxs = document.querySelectorAll(".box"); //class hai to dotclassname
let resetbtn = document.querySelector("#reset"); // agar id hai to #name
let newgamebtn = document.querySelector("#newbtn"); // agar id hai to #name
let msg_container = document.querySelector(".msg-container"); // agar id hai to #name
let msg = document.querySelector("#msg"); // agar id hai to #name

let turnO = true; //playerX , playerY

const winpattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];


const resetgame = () => {
    turnO = true;
    enableboxs();
    msg_container.classList.add("hide");
}

newgamebtn.addEventListener("click", () =>{
    resetgame();
})


boxs.forEach((val) => {
    val.addEventListener("click", () =>{
        // boxescount=boxescount+1;
        console.log("box was clicked");
        if(turnO == true)
        {
            val.innerText = "O";
            turnO=false;
        }
        else
        {
            val.innerText = "X";
            turnO=true; 
        }
        val.disabled = true;

        checkwinner();
    })

})

const enableboxs = () => {
    for(let val of boxs)
    {
        val.disabled = false;
        val.innerText = "";
    }
}

const disableboxs = () => {
    for(let val of boxs)
    {
        val.disabled = true;
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msg_container.classList.remove("hide");
    disableboxs();
}

const checkwinner = () => {
    for(let pattern of winpattern)
    {
        let pos1val = boxs[pattern[0]].innerText;
        let pos2val = boxs[pattern[1]].innerText;
        let pos3val = boxs[pattern[2]].innerText;
        // console.log(pos1val,pos2val,pos3val);
        if(pos1val != "" && pos2val != "" && pos3val != "")
        {
            if(pos1val == pos2val &&  pos2val == pos3val)
            {
                showWinner(pos1val);
                // console.log("winner",pos1val);
            }
        }
    }
};

resetbtn.addEventListener("click", () =>{
    resetgame();
})

