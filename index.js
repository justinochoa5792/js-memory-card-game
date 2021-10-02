const section = document.querySelector("section");
const playLivesCount = document.querySelector("span");
let playerLives = 6;

playLivesCount.textContent = playerLives;

const cardGenerator = () => {
  let cardData = [
    { imgSrc: "./images/beatles.jpeg", id: 1, name: "beatles" },
    { imgSrc: "./images/blink182.jpeg", id: 2, name: "blink 182" },
    { imgSrc: "./images/fkatwigs.jpeg", id: 3, name: "fka twigs" },
    { imgSrc: "./images/fleetwood.jpeg", id: 4, name: "fleetwood" },
    { imgSrc: "./images/joy-division.jpeg", id: 5, name: "joy division" },
    { imgSrc: "./images/ledzep.jpeg", id: 6, name: "lep zeppelin" },
    { imgSrc: "./images/metallica.jpeg", id: 7, name: "metallica" },
    { imgSrc: "./images/pinkfloyd.jpeg", id: 8, name: "pink floyd" },
    { imgSrc: "./images/beatles.jpeg", id: 9, name: "beatles" },
    { imgSrc: "./images/blink182.jpeg", id: 10, name: "blink 182" },
    { imgSrc: "./images/fkatwigs.jpeg", id: 11, name: "fka twigs" },
    { imgSrc: "./images/fleetwood.jpeg", id: 12, name: "fleetwood" },
    { imgSrc: "./images/joy-division.jpeg", id: 13, name: "joy division" },
    { imgSrc: "./images/ledzep.jpeg", id: 14, name: "led zeppelin" },
    { imgSrc: "./images/metallica.jpeg", id: 15, name: "metallica" },
    { imgSrc: "./images/pinkfloyd.jpeg", id: 16, name: "pink floyd" },
  ];

  cardData.sort(() => Math.random() - 0.5);

  cardData.forEach((item) => {
    const card = document.createElement("div");
    const face = document.createElement("img");
    const back = document.createElement("div");
    card.classList = "card";
    face.classList = "face";
    back.classList = "back";

    face.src = item.imgSrc;
    card.setAttribute("name", item.name);

    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);

    card.addEventListener("click", (e) => {
      card.classList.toggle("toggleCard");
      checkCard(e);
    });
  });

  const checkCard = (e) => {
    const clickedCard = e.target;
    clickedCard.classList.add("flipped");
    const flippedCards = document.querySelectorAll(".flipped");
    const toggleCard = document.querySelectorAll(".toggleCard");

    if (flippedCards.length === 2) {
      if (
        flippedCards[0].getAttribute("name") ===
        flippedCards[1].getAttribute("name")
      ) {
        flippedCards.forEach((card) => {
          card.classList.remove("flipped");
          card.style.pointerEvents = "none";
        });
      } else {
        flippedCards.forEach((card) => {
          card.classList.remove("flipped");
          setTimeout(() => {
            card.classList.remove("toggleCard");
          }, 1000);
        });
        playerLives--;
        playLivesCount.textContent = playerLives;
        if (playerLives === 0) {
          restart("You Lose");
        }
      }
    }
    if (toggleCard.length === 16) {
      restart("You Won!");
    }
  };
  const restart = (text) => {
    const faces = document.querySelectorAll(".face");
    const cards = document.querySelectorAll(".card");
    section.style.pointerEvents = "none";

    cardData.forEach((item, index) => {
      cards[index].classList.remove("toggleCard");
      setTimeout(() => {
        cards[index].style.pointerEvents = "all";
        faces[index].src = item.imgSrc;
        cards[index].setAttribute("name", item.name);
        section.style.pointerEvents = "all";
      }, 1000);
    });

    playerLives = 6;
    playLivesCount.textContent = playerLives;
    window.alert(text);
  };
};

cardGenerator();
