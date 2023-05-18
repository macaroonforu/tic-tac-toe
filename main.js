function initializeBoard(){
    let board = document.querySelector(".Board"); 
    for(let i=0; i<9; i++){
        let square = document.createElement("div"); 
        square.classList.add("square"); 
        square.id = i; 
        board.appendChild(square); 
    }
}

initializeBoard(); 