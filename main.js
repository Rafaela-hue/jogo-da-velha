const cells = document.querySelectorAll('.cell');
const statusDisplay = document.querySelector('.status-display');
const restartButton = document.queryElementBuId('.restart');

let gameActive = true;
let currentPlayer = 'X';
let gameState = ['', '', '', '', '', '', '', '', '',];

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const winningMessage = () => `O Jogador ${currentPlayer}` Venceu!;
const drawMessage = () => `O jogo terminou em Empate!`;
const currentPlayerTurn = () => `É a vez do Jogador`;

statusDisplay.innerHTML = currentPlayerTurn();


