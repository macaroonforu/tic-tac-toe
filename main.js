let board = []; 

function initializeBoard(){
    let board = document.querySelector(".Board"); 
    for(let i=0; i<9; i++){
        let square = document.createElement("div"); 
        square.classList.add("square"); 
        square.id = i; 
        square.addEventListener("click", addMark); 
        board.appendChild(square); 
    }
}

function addMark(e){
    let text = document.createElement("p");
    text.innerText = 'X'; //board[e.srcElement.id]; 
    e.srcElement.appendChild(text); 
    e.srcElement.removeEventListener("click", addMark); 
    e.srcElement.classList.add("Pressed"); 
    console.log(e.srcElement); 
    console.log("Adding Mark"); 
}

function clearPage(){
    document.querySelector("body").innerHTML = ''; 
}

initializeBoard(); 
