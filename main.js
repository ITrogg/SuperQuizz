  /** DECLARATIONS DES VARIABLES GLOBALES */
const questions = [
  { 
    question : "Le club de volley de Dylan s'appel VLAM, cela signifie :",
    goodanswer : "Volley Loisir Association de Montaudran",
    wronganswer1 : "Vitesse, Lucidité, Amour et Mobilité",
    wronganswer2 : "Vertical Line Array Measurement",
    wronganswer3 : "Volley Ligue Amateur de Montauban"
  },
  {
    question : "Bastien adore manger ses frites avec",
    goodanswer : "Une sauce vinaigre échalote",
    wronganswer1 : "Du ketchup",
    wronganswer2 : "Rien, nature et sans sel",
    wronganswer3 : "Sa copine"
  },
  {
    question : "Oresti arrive en retard le matin car il joue toutes les nuits à :",
    goodanswer : "Valorant",
    wronganswer1 : "League of Legends",
    wronganswer2 : "Snake sur Nokia 3310",
    wronganswer3 : "Blocky Games"
  },
  {
    question : "AnneDo est une sacrée danseuse ! Quelle danse pratique-t-elle ?",
    goodanswer : "La Salsa",
    wronganswer1 : "Le Tango Argentin",
    wronganswer2 : "La Capoeira",
    wronganswer3 : "Le Twerk"
  },
  {
    question : "Lequel des ces groupes/artiste Imanol n'a jamais vu en concert ?",
    goodanswer : "Metallica",
    wronganswer1 : "Black Eyed Peas",
    wronganswer2 : "Goran Bregovic",
    wronganswer3 : "Kompromat"
  },
  {
    question : "Kathalina regarde une fois par semaine un des trois films de la trilogie :",
    goodanswer : "Batman",
    wronganswer1 : "Le seigneur des anneaux",
    wronganswer2 : "Matrix",
    wronganswer3 : "Star Wars"
  },
  {
    question : "Jo s'est déjà retrouvé seul dans un Virgin Megastore avec une célébrité ! Mais laquelle ?",
    goodanswer : "Gad Elmaleh",
    wronganswer1 : "Kylian Mbappé",
    wronganswer2 : "Joey Star",
    wronganswer3 : "Eric et Ramzy (enfin juste Eric... ou bien Ramzy ?)"
  },
  {
    question : "Des fois Bertrand est maladroit, il s'est déjà cassé la clavicule :",
    goodanswer : "En enjambant un portail pourtant ouvert",
    wronganswer1 : "En tombant dans sa douche",
    wronganswer2 : "Au ski, apres un 360 frontflip nosegrab mal replaqué",
    wronganswer3 : "En glissant sur un plongeoir"
  },
  {
    question : "Vanessa aime voyager ! Lequel de ces pays n'a t'elle pas encore visité ?",
    goodanswer : "Le Kenya",
    wronganswer1 : "Le Ghana",
    wronganswer2 : "La Tunisie",
    wronganswer3 : "La Belgique"
  },
  {
    question: "Megane adore les tatoos et en a plusieurs, lequel a t'elle fait ?",
    goodanswer : "Un oiseau",
    wronganswer1 : "Le cerf du Jagermeister",
    wronganswer2 : "Le visage de Billie Elish",
    wronganswer3 : "Le logo HTML"
  },
  {
    question : "Nicolas est un grand gaillard mais il a une grande phobie ! De quoi s'agit-il ? ",
    goodanswer : "Des rats",
    wronganswer1 : "De JavaScript",
    wronganswer2 : "Du vide",
    wronganswer3 : "De la foule"
  },
  {
    question : "Lubin aime soigner sa chevelure ! A quand remonte sa derniere visite chez le coiffeur ?",
    goodanswer : "6 ans",
    wronganswer1 : "3 ans",
    wronganswer2 : "8 ans",
    wronganswer3 : "Hier, entre 12h30 et 14h00 pour dégager un peu la nuque"
  },
  {
    question : "Julien a dit: “J'aimerais être aussi bon formateur que j'etais ... “ :",
    goodanswer : "Entraineur de Kayak",
    wronganswer1 : "Joueur de pétanque",
    wronganswer2 : "Musicien",
    wronganswer3 : "Chômeur"
  },
]
let score = 0;
let index = 0; 
let timer;
let waitingAnswer = true;
let playerName = "";

  /** FONCTION ORDRE ALEATOIRE DES REPONSES */ 

const arrayShuffle = (good, bads) => {
  const rand = Math.floor(Math.random() * 4);
  bads.splice(rand, 0, good);
  return bads;
  // var l = a.length, t, r;
  // while (0 !== l) {
  //   r = Math.floor(Math.random() * l);
  //   l -= 1;
  //   t = a[l];
  //   a[l] = a[r];
  //   a[r] = t;
  // }
  // return a;
}

  /** FONCTION TIMER */

const startTimer = (duration) => {
  const timerElement = document.getElementById("timer")
  timerElement.innerText ="60"
  timer = setInterval(() => { // Diminuer temps ttes les secondes
    let secondes = parseInt(duration, 10) // Afficher deux chiffres quand < 10
    secondes = secondes < 10 ? "0" + secondes : secondes 
    timerElement.innerText = `${secondes}` // Display
    duration = duration - 1
    if (duration <= -1) {
      clearInterval(timer);
      nextQuestion(questions);
    }
  }, 1000)
}

  /** FONCTION DE VERIFICATION */

const isTrue = (reponse, numeroQuestion, buttonId) => {
      // si variable globale === true alors jouer
  if(waitingAnswer === true){
    // Récupérer le bouton
    const button = document.getElementById(buttonId)    
  
    // Dans ma data, récupérer la question via son numero
    const myQuestion = questions[numeroQuestion] //MyQuestion: Object
  
    // Vérifier si la réponse === question récuperée , goodanswer
    if (reponse === myQuestion.goodanswer) {
      score = score + parseInt(((parseInt(document.getElementById("timer").textContent))/59)*100); 
      button.classList.add('true');
    } else {
      button.classList.add('wrong');
    }
    // attend une tite seconde avant de passer à la question suivante
    setTimeout ( () => {
      clearInterval(timer);
      nextQuestion(questions);
    }, 3000);  
    // changer la valeur de la variable globale à false
    waitingAnswer = false;
    // Sinon, afficher une alert précisant que la réponse est donnée
  } else {
    alert("réponse déjà donnée")      
  }
}

  /** FONCTION D'AFFICHAGE  */

const nextQuestion = (table) => { 
  waitingAnswer = true; 
  if (index < table.length) {
  // mélanger les réponses 
  const mixedAnswers = arrayShuffle(table[index].goodanswer, [table[index].wronganswer1, table[index].wronganswer2, table[index].wronganswer3]);
  // suppr la question précedante et mise à jour score 
  document.querySelector("section").remove();
  document.querySelector("#score").textContent = score;
  // Affichage de la question
  document.querySelector("main").innerHTML = `<section class="quizz-containner">
    <div id = "question">
      <p> QUESTION ${index+1} :</p>
      <p>${questions[index].question}</p>
    </div>
    <article>
    <button class= "answer" id="answer_1" onclick="isTrue('${mixedAnswers[0]}', ${index}, 'answer_1')" >${mixedAnswers[0]}</button>
    <button class= "answer" id="answer_2" onclick="isTrue('${mixedAnswers[1]}', ${index}, 'answer_2')" >${mixedAnswers[1]}</button>
    <button class= "answer" id="answer_3" onclick="isTrue('${mixedAnswers[2]}', ${index}, 'answer_3')" >${mixedAnswers[2]}</button>
    <button class= "answer" id="answer_4" onclick="isTrue('${mixedAnswers[3]}', ${index}, 'answer_4')" >${mixedAnswers[3]}</button>
    </article> 
  </section>`;
  // Lancement du timer 
  startTimer(59); 
  // incrémenter l'index pour la question suivante  
  index++;
  } else {
    // Fin des question suppr dernière question et bloc score 
    document.querySelector("section").remove();
    document.querySelector(".score-background").remove();
    // création d'un message personalisé en fonction du score 
    let message = "";
    if (score <= 300 ){
      message = `😖 Wow c'est nul ${playerName} 😖 <br> On a rarement vu quelqu'un d'aussi mauvais !`
    } else if (score <= 700) {
      message = `😕 Bien tenté ${playerName} 😕 <br> Tu as encore beaucoup de choses à apprendre sur tes camarades...`
    } else if (score <= 1100) {
      message = `👏 C'est une belle performance ${playerName} 👏 <br> Impressionnant !`
    } else {
      message = `🤩 Niquel ${playerName} ! Tu déchires tout 🤩 <br> On va construire un autel à ta gloire !`
    }
    // Affichage du bloc finale
    document.querySelector("main").innerHTML = ` <section class="home-containner final">
    <h2>Quizz Terminé</h2>
    <p id="score">Ton score : <span>${score}</span> </p>
    <p id="comment"> ${message} </p>
    <p id="replay">Rafraichit la page pour rejouer &#128512;</p>
    </section>`
  }
}  

  /** FONCTION DE DEMARAGE  */

const startGame = () => {
  const firstName = document.getElementById("firstname"); // Recupère l'élement input
  playerName = firstName.value; 
  nextQuestion(questions);
}
