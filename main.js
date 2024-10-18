const userName = document.getElementById('userName')
const inputName = document.getElementById("inputName");
const userNum = document.getElementById("userNum");
const computerNum = document.getElementById('computerNum');
const generateBtn = document.getElementById("generateBtn");
const userScoreOutput = document.getElementById("userScore");
const computerScoreOutput = document.getElementById('computerScore');
const resultDiv = document.getElementById("result");
const modal = document.getElementById('modal');
const modalContent = document.getElementById("modal-content");

let userScore = 0;
let computerScore = 0;

const cards = [
  {
      pictures: [
        'PNG-cards-1.3/6_of_clubs.png',
        'PNG-cards-1.3/6_of_diamonds.png',
        'PNG-cards-1.3/6_of_hearts.png',
        'PNG-cards-1.3/6_of_spades.png',
      ],
      cardValue: 6
  },
  {
    pictures: [
      'PNG-cards-1.3/7_of_clubs.png',
      'PNG-cards-1.3/7_of_diamonds.png',
      'PNG-cards-1.3/7_of_hearts.png',
      'PNG-cards-1.3/7_of_spades.png',
    ],
    cardValue: 7
  },
  {
    pictures: [
      'PNG-cards-1.3/8_of_clubs.png',
      'PNG-cards-1.3/8_of_diamonds.png',
      'PNG-cards-1.3/8_of_hearts.png',
      'PNG-cards-1.3/8_of_spades.png',
    ],
    cardValue: 8
  },
  {
    pictures: [
      'PNG-cards-1.3/9_of_clubs.png',
      'PNG-cards-1.3/9_of_diamonds.png',
      'PNG-cards-1.3/9_of_hearts.png',
      'PNG-cards-1.3/9_of_spades.png',
    ],
    cardValue: 9
  },
  {
    pictures: [
      'PNG-cards-1.3/10_of_clubs.png',
      'PNG-cards-1.3/10_of_diamonds.png',
      'PNG-cards-1.3/10_of_hearts.png',
      'PNG-cards-1.3/10_of_spades.png',
    ],
    cardValue: 10
  },
  {
    pictures: [
      'PNG-cards-1.3/jack_of_clubs2.png',
      'PNG-cards-1.3/jack_of_diamonds2.png',
      'PNG-cards-1.3/jack_of_hearts2.png',
      'PNG-cards-1.3/jack_of_spades2.png',
    ],
    cardValue: 2
  },
  {
    pictures: [
      'PNG-cards-1.3/queen_of_clubs2.png',
      'PNG-cards-1.3/queen_of_diamonds2.png',
      'PNG-cards-1.3/queen_of_hearts2.png',
      'PNG-cards-1.3/queen_of_spades2.png',
    ],
    cardValue: 3
  },
  {
    pictures: [
      'PNG-cards-1.3/king_of_clubs2.png',
      'PNG-cards-1.3/king_of_diamonds2.png',
      'PNG-cards-1.3/king_of_hearts2.png',
      'PNG-cards-1.3/king_of_spades2.png',
    ],
    cardValue: 4
  },
  {
    pictures: [
      'PNG-cards-1.3/ace_of_clubs.png',
      'PNG-cards-1.3/ace_of_diamonds.png',
      'PNG-cards-1.3/ace_of_hearts.png',
      'PNG-cards-1.3/ace_of_spades.png',
    ],
    cardValue: 11
  },
];
function game(){

  // Звертання до карт
  let userCard = document.getElementById('userCard');
  let computerCard = document.getElementById('computerCard');

  // Рандомний вибір карт для гравця
  const randomIndexUser = Math.floor(Math.random() * cards.length);
  const selectedImageUser = cards[randomIndexUser];
  const randPictureUser = selectedImageUser.pictures[Math.floor(Math.random() * selectedImageUser.pictures.length)]
  userScore += selectedImageUser.cardValue
  userScoreOutput.value = userScore

  // Рандомний вибір карт для комп'ютера
  const randomIndexComputer = Math.floor(Math.random() * cards.length);
  const selectedImageComputer = cards[randomIndexComputer];
  const randPictureComputer = selectedImageComputer.pictures[Math.floor(Math.random() * selectedImageComputer.pictures.length)]
  computerScore += selectedImageComputer.cardValue
  computerScoreOutput.value = computerScore

  // Створення карти гравця, якщо вона не існує
  if (!userCard){
    const userCard = document.createElement('img');
    userCard.id = "userCard";
    userCard.alt = "game card"
    userNum.appendChild(userCard)
    userCard.src = randPictureUser;
  }

  // Створення карти комп'ютера, якщо вона не існує
  if(!computerCard){
    const computerCard = document.createElement('img');
    computerCard.id = "computerCard";
    computerCard.alt = "game card"
    computerNum.appendChild(computerCard)
    computerCard.src = randPictureComputer;
  }

  // Задання стилю (розміру) картам 
  const cardPicture = document.querySelectorAll('.card img')
  cardPicture.forEach((card) => {
    card.style.width = "200px";
  });

  // Зміна картинки карти
  userCard.src = randPictureUser;
  computerCard.src = randPictureComputer;  

  if(userScore === 21 || (userScore < 21 && computerScore > 21)){
    resultDiv.innerHTML = "Ви перемогли!"
    generateBtn.disabled = true;
  }
  if(computerScore === 21 || (userScore > 21 && computerScore < 21)){
    resultDiv.innerHTML = "Комп'ютер переміг!"
    generateBtn.disabled = true;
  }
  if((userScore === 21 && computerScore === 21) || (userScore > 21 && computerScore > 21)){
    resultDiv.innerHTML = "Нічия"
    generateBtn.disabled = true;
  }
}

document.addEventListener('DOMContentLoaded', function() {
  modal.style.display = 'block';
});

document.getElementById("closeButton").addEventListener('click', closeModal);

generateBtn.addEventListener("click", game)

let isGameBlocked = false; 

document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter' && !isGameBlocked) {
    if (!modal.classList.contains('hidden')) {
      closeModal();
    } else {
      game();
      isGameBlocked = true;
      generateBtn.disabled = true;
    }
  }
});

document.addEventListener('keyup', function(event) {
  if (event.key === 'Enter' && isGameBlocked) {
      isGameBlocked = false;
      generateBtn.disabled = false
  }
});

function closeModal(){
  modal.classList.add('hidden'); 
  modalContent.classList.add('hidden'); 
  setTimeout(()=>{modal.remove()}, 1000);
  userName.textContent = inputName.value;
  if(!inputName.value || text.trim() === ""){
    userName.textContent = "АвтоматІНАТОР"
  }
}