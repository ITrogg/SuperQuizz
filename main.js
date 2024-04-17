//  Tableau questions 
const questions = [
  { 
    question : "Le club de volley de Dylan s'appel VLAM, cela signifie :",
    goodanswer : "Volley Loisir Association de Montaudran",
    wronganswer1 : "Vitesse, Lucidité, Amour et Mobilité",
    wronganswer2 : "Vertical Line Array Measurement",
    wronganswer3 : "Volley Ligue Amateur de Montauban"
  },
  {
    question: "Bastien adore manger ses frites avec :",
    goodanswer : "Une sauce vinaigre échalote",
    wronganswer1 : "Du ketchup",
    wronganswer2 : "Rien, nature et sans sel",
    wronganswer3 : "Sa copine"
  },
  {
    question: "Oresti arrive en retard le matin car il joue toutes les nuits à :",
    goodanswer : "Valorant",
    wronganswer1 : "League of Legends",
    wronganswer2 : "Snake sur Nokia 3310",
    wronganswer3 : "Blocky Games"
  },
  {
    question: "AnneDo est une sacrée danseuse ! Quelle danse pratique-t-elle ?",
    goodanswer : "La Salsa",
    wronganswer1 : "Le Tango Argentin",
    wronganswer2 : "La Capoeira",
    wronganswer3 : "Le Twerk"
  },
  {
    question: "Lequel des ces groupes/artiste Imanol n'a jamais vu en concert ?",
    goodanswer : "Metallica",
    wronganswer1 : "Black Eyed Peas",
    wronganswer2 : "Goran Bregovic",
    wronganswer3 : "Kompromat"
  },
  {
    question: "Kathalina regarde une fois par sermaine un des trois films de la trilogie :",
    goodanswer : "Batman",
    wronganswer1 : "Le seigneur des anneaux",
    wronganswer2 : "Matrix",
    wronganswer3 : "Star Wars"
  },
]


let score = 0;
document.querySelector(".quizz-containner").style.display = "none"; //! A enlever directement de l'HTML 


/* Fonction de randomisation des réponses */ 
//const shuffle = arrayShuffle();

function arrayShuffle(good, bads) {
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

/* Fonction de vérification de la réponse du joueur */
// déclarer une variable globale avec comme valeur true



/* Fonction jeu */
const displayQuizz = (table) => {

  let index = 0; // pour remplacer boucle for  
  
  /** Fonction Timer */
  const startTimer = (departSecondes) => {
    let temps = departSecondes
    const timerElement = document.getElementById("timer")
    const timer = setInterval(() => { // Diminuer temps ttes les secondes
      let secondes = parseInt(temps, 10) // Afficher deux chiffres quand < 10
      secondes = secondes < 10 ? "0" + secondes : secondes 
      timerElement.innerText = `${secondes}` // Display
      if (temps <= 0) {
        clearInterval(timer);
        nextQuestion();
      }
    }, 1000)
  }

  /** FONCTION DE VERIFICATION */
  const isTrue = (reponse, numeroQuestion, buttonId) => {

      // si variable globale === true alors jouer
    
      // Récupérer le bouton
      const button = document.getElementById(buttonId)    
    
      // Dans ma data, récupérer la question via son numero
      const myQuestion = questions[numeroQuestion] //MyQuestion: Object
    
      // Vérifier si la réponse === question récuperée , goodanswer
      if (reponse === myQuestion.goodanswer) {
        console.log("Tu as gagné")
        button.style.backgroundColor = 'green';
      } else {
        button.style.backgroundColor = 'red';
        console.log("Tu as perdu")
      }
    nextQuestion();
      // changer la valeur de la variable globale à false
    
      // Sinon, afficher une alert précisant que la réponse est donnée
      
    }
    /** Fonction d'affichage  */

const nextQuestion = () => { 
  if (index < table.length) {
    const mixedAnswers = arrayShuffle(table[index].goodanswer, [table[index].wronganswer1, table[index].wronganswer2, table[index].wronganswer3]);

    document.querySelector("section").remove();
    document.querySelector("main").innerHTML = `<section class="quizz-containner">
      <div id = "question">
        <p> QUESTION ${index+1}:</p>
        <p>${questions[index].question}</p>
      </div>
            
      <article>
        <button onclick="isTrue(${mixedAnswers[0]}, ${index})" class= "answer">${mixedAnswers[0]}</button>
        <button onclick="isTrue(${mixedAnswers[1]}, ${index})" class= "answer">${mixedAnswers[1]}</button>
        <button onclick="isTrue(${mixedAnswers[2]}, ${index})" class="answer">${mixedAnswers[2]}</button>
        <button onclick="isTrue(${mixedAnswers[3]}, ${index})" class= "answer">${mixedAnswers[3]}</button>
      </article> 
    </section>`;

      console.log(`Question ${index+1}`); 
      startTimer(60);   /// Lancement du timer 

      const buttons = document.querySelectorAll(".answer"); 
      for (let i=0; i<buttons.length; i++){
        console.log(buttons[i]);
        buttons[i].addEventListener("click", () => isTrue(buttons[i], index));
      }
      index++;
    } else {
      console.log ("c'est fini")
      document.querySelector("section").remove();
      let message = "";
      if (score <=4 ){
        message = "😖 Wow c'est nul 😖 <br> On a rarement vu quelqu'un d'aussi mauvais"
      } else if (score <= 8) {
        message = "😕Bien tenté 😕 <br> Tu as encore beaucoup choses à apprendre sur tes camarades "
      } else if (score <= 12) {
        message = "👏 C'est une belle performance 👏 <br> Impressionnant !"
      } else {
        message = "🤩 Niquel ! Tu déchires tout 🤩 <br> On va construire un autel à ta gloire !"
      }
      document.querySelector("main").innerHTML = ` <section class="home-containner final">
      <h2>Quizz Terminé</h2>
      <p id="score">Ton score : <span>${score}</span> </p>
      <p id="comment"> ${message} </p>
      <p id="replay">Rafraichit la page pour rejouer &#128512;</p>
      </section>`
    }
  }
  nextQuestion();  
}

