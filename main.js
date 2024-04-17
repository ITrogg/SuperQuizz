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

let score = 13;
document.querySelector(".quizz-containner").style.display = "none"; //! A enlever directement de l'HTML 


/* Fonction de randomisation des réponses */ 
//const shuffle = arrayShuffle();

function arrayShuffle(good, bads) {
  console.log(good, bads)
  const rand = Math.floor(Math.random() * 4);
  console.log(rand)
  bads.splice(rand, 0, good);
  console.log(bads);
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

const isTrue = (reponse, numeroQuestion) => {
      // Dans ma data, récupérer la question via son numero

      // Vérifier si la réponse === question récuperée , goodanswer
      // Si oui, gagné
      // Si non, perdu
      console.log(reponse)
      console.log(numeroQuestion)

      console.log ("istrue");
      return true;

      }

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
      temps = temps <= 0 ? 0 : temps - 1 // pour stopper le timer à 0 sinon négatif
      if (temps <= 0) {
        clearInterval(timer);
        nextQuestion();
      }
    }, 1000)
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
      startTimer(1);   /// Lancement du timer 
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


