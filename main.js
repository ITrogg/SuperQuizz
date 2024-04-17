//  Tableau questions 
const questions = [
  { 
    question : "Comment ça va ?",
    goodanswer : "niquel",
    wronganswer1 : "je sais pas",
    wronganswer2 : "pas ouf",
    wronganswer3 : "je te le dirais pas"
  },
  {
    question: "bonjour",
    goodanswer : "Javascript",
    wronganswer1 : "HTML",
    wronganswer2 : "CSS",
    wronganswer3 : "Python"
  },
  {
    question: "Quelles sont les meilleures pâtes ?",
    goodanswer : "Penne",
    wronganswer1 : "Macaroni",
    wronganswer2 : "Nouilles",
    wronganswer3 : "Fusilli"
  }
]

let score = 0;
let index = 0; 
let timer;
document.querySelector(".quizz-containner").style.display = "none"; //! A enlever directement de l'HTML 


/* Fonction de randomisation des réponses */ 

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

  /** Fonction Timer */

const startTimer = (departSecondes) => {
  let temps = departSecondes
  const timerElement = document.getElementById("timer")
  timer = setInterval(() => { // Diminuer temps ttes les secondes
    let secondes = parseInt(temps, 10) // Afficher deux chiffres quand < 10
    secondes = secondes < 10 ? "0" + secondes : secondes 
    timerElement.innerText = `${secondes}` // Display
    temps = temps <= 0 ? 0 : temps - 1 // pour stopper le timer à 0 sinon négatif
    if (temps <= 0) {
      clearInterval(timer);
      nextQuestion(questions);
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
      score ++;
      button.style.backgroundColor = 'green';
    } else {
      button.style.backgroundColor = 'red';
      console.log("Tu as perdu")
    }
    clearInterval(timer);

  nextQuestion(questions);
    // changer la valeur de la variable globale à false
  
    // Sinon, afficher une alert précisant que la réponse est donnée
    
  }
  /** Fonction d'affichage  */

const nextQuestion = (table) => { 
if (index < table.length) {
  const mixedAnswers = arrayShuffle(table[index].goodanswer, [table[index].wronganswer1, table[index].wronganswer2, table[index].wronganswer3]);

  document.querySelector("section").remove();
  document.querySelector("main").innerHTML = `<section class="quizz-containner">
    <div id = "question">
      <p> QUESTION ${index+1}:</p>
      <p>${questions[index].question}</p>
    </div>
          
    <article>
    <button class= "answer" id="answer_1" onclick="isTrue('${mixedAnswers[0]}', ${index}, 'answer_1')" >${mixedAnswers[0]}</button>
    <button class= "answer" id="answer_2" onclick="isTrue('${mixedAnswers[1]}', ${index}, 'answer_2')" >${mixedAnswers[1]}</button>
    <button class= "answer" id="answer_3" onclick="isTrue('${mixedAnswers[2]}', ${index}, 'answer_3')" >${mixedAnswers[2]}</button>
    <button class= "answer" id="answer_4" onclick="isTrue('${mixedAnswers[3]}', ${index}, 'answer_4')" >${mixedAnswers[3]}</button>
    </article> 
  </section>`;

    console.log(`Question ${index+1}`); 
    startTimer(60);   /// Lancement du timer 

    // const buttons = document.querySelectorAll(".answer"); 
    // for (let i=0; i<buttons.length; i++){
    //   console.log(buttons[i]);
    //   buttons[i].addEventListener("click", () => isTrue(buttons[i], index));
    // }
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


