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
  const startTimer = (duration) => {
    const countdown = setInterval(() => {
      duration --;
      console.log(duration);
      if (duration <= 0) {
        clearInterval(countdown);
        console.log("Temps écoulé !");
        nextQuestion();
      }
    }, 1000);
  };
    /** Fonction d'affichage  */
const nextQuestion = () => { 
  if (index < table.length) {
    const mixedAnswers = arrayShuffle(table[index].goodanswer, [table[index].wronganswer1, table[index].wronganswer2, table[index].wronganswer3]);

    document.querySelector("section").remove();
    document.querySelector("main").innerHTML = `<section class="quizz-containner">
      <div id = "question">
        <p> QUESTION ${i+1}:</p>
        <p>${questions[i].question}</p>
      </div>
            
      <article>
        <button onclick="isTrue(${mixedAnswers[i]}, ${i})" class= "answer">${mixedAnswers[0]}</button>
        <button onclick="isTrue(${mixedAnswers[i]}, ${i})" class= "answer">${mixedAnswers[1]}</button>
        <button onclick="isTrue(${mixedAnswers[i]}, ${i})" class="answer">${mixedAnswers[2]}</button>
        <button onclick="isTrue(${mixedAnswers[i]}, ${i})" class= "answer">${mixedAnswers[3]}</button>
      </article> 
    </section>`;

console.log(`Question ${index+1}`); 
startTimer(1000);   /// Lancement du timer 
const buttons = document.querySelectorAll(".answer"); 
  for (let i=0; i<buttons.length; i++){
    console.log(buttons[i]);
    buttons[i].addEventListener("click", () => isTrue(buttons[i], index));
    }
    index++;
    } else {
      document.querySelector("section").remove();
      // affichage fin du jeu 
      console.log ("c'est fini")
    }
  }
  nextQuestion();  
}


