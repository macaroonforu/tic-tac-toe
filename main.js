let board = [0,0,0,0,0,0,0,0,0]; 
let players =[]; 
let currentPlayerIndex=0; 

function initializeBoard(){
    document.querySelector(".result").style.display='none';
    let cont = document.querySelector(".boardContainer"); 
    let board = document.createElement("div"); 
    board.classList.add("Board"); 
    for(let i=0; i<9; i++){
        let square = document.createElement("div"); 
        square.classList.add("square"); 
        square.id = i; 
        let innerImage = document.createElement("img"); 
        innerImage.setAttribute("width", "100%"); 
        innerImage.setAttribute("height", "100%");
        square.appendChild(innerImage);  
        board.appendChild(square); 
    }
    cont.appendChild(board);  
    let beginButton = document.querySelector(".begin"); 
    let resetButton = document.querySelector(".reset"); 
    resetButton.addEventListener("click", reset); 
    beginButton.addEventListener("click", initializePlayers); 
}

const playerFactory = (name, icon) =>{
    return {icon, name}; 
}

function reset(e){
    board = [0,0,0,0,0,0,0,0,0];
    players =[];
    currentPlayerIndex=0; 
    let gameBoard = document.querySelector(".boardContainer"); 
    gameBoard.innerHTML=''; 
    document.querySelector(".selectionContainer").style.display='block';
    let result = document.querySelector(".result"); 
    result.style.display = 'none'; 
    initializeBoard();
}

function playMove(e){
    index = e.srcElement.parentElement.id; 
    board[index]= players[currentPlayerIndex].icon;  
    console.log(players[currentPlayerIndex]); 
    e.srcElement.setAttribute("src", `${players[currentPlayerIndex].icon}`); 
    e.srcElement.removeEventListener("click", playMove); 
    e.srcElement.classList.add("Pressed"); 
    if(
    (board[0]==board[1] && board[1]==board[2] && board[1]!=0)||
    (board[2]==board[4]&& board[6]== board[2] && board[2]!=0)||
    (board[0]==board[4] && board[4]== board[8] && board[4] !=0)||
    (board[3]==board[4] && board[4]==board[5] && board[4]!=0)||
    (board[6]==board[7] && board[7]==board[8] && board[7]!=0)||
    (board[0]==board[3] && board[3]==board[6] && board[3]!=0)||
    (board[1]==board[4] && board[4]==board[7] && board[4]!=0)||
    (board[2]==board[5] && board[5]==board[8] && board[5]!=0)
    )
    {
        let squares = document.querySelector(".Board").childNodes; 
        for(let i=0; i<9; i++){
            squares[i].removeEventListener("click", playMove); 
        }
        let result = document.querySelector(".result");
        result.firstElementChild.textContent = (`${players[currentPlayerIndex].name} wins!`); 
        result.style.display = "block"; 
        return;  
    }

    if(currentPlayerIndex ==0){
        currentPlayerIndex =1;   
    }
    else{
        currentPlayerIndex =0; 
    }
    
    for(let i=0; i<9; i++){
        if(board[i]==0){
            break; 
        }
        if(i==8){
            let result = document.querySelector(".result");
            result.firstElementChild.textContent = ("Tie!"); 
            result.style.display = "block"; 
        }
    }
}

function initializePlayers(e){  
    const p1Menu = document.getElementById("p1");
    const p1value = p1Menu.children[p1Menu.selectedIndex].value; 
    const p2Menu = document.getElementById("p2"); 
    const p2value = p2Menu.children[p2Menu.selectedIndex].value; 
    const playerOne = playerFactory("Player One", `/assets/${p1value}.png`);
    const playerTwo = playerFactory("Player Two", `/assets/${p2value}.png`); 
    players.push(playerOne); 
    players.push(playerTwo); 
    document.querySelector(".selectionContainer").style.display='none'; 
    squares = document.querySelector(".Board").childNodes;  
    for(let i=0; i<9; i++){
        squares[i].addEventListener("click", playMove); 
    }  
}
initializeBoard(); 

