//  Tableau questions 
const questions = [
  { question : "Comment ça va ?",
    goodanswer : "niquel",
    wronganswer1 : "je sais pas",
    wronganswer2 : "pas ouf",
    wronganswer3 : "je te le dirais pas"
  },
  {question: "bonjour",
  goodanswer : "Javascript",
  wronganswer1 : "HTML",
  wronganswer2 : "CSS",
  wronganswer3 : "Python"
  },
  {question: "Quelles sont les meilleures pâtes ?",
  goodanswer : "Penne",
  wronganswer1 : "Macaroni",
  wronganswer2 : "Nouilles",
  wronganswer3 : "Fusilli"
  }
]

let score = 0;
document.querySelector(".quizz-containner").style.display = "none"; //! A enlever directement de l'HTML 


/* Fonction de randomisation des réponses */ 
const shuffle = (table) => {
      return table;
}

/* Fonction de vérification de la réponse du joueur */
const isTrue = (element, index) => {
      console.log (element);
      console.log ("istrue");
      return true;
}


/* Fonction pour la durée du jeu */
const displayQuizz = (table) => {
  let index = 0; // pour remplacer boucle for  
    /** Fonction Timer */
  const startTimer = (duration) => {
    const countdown = setInterval(() => {
      duration --
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
      const mixedAnswers = shuffle([table[index].goodanswer, table[index].wronganswer1, table[index].wronganswer2, table[index].wronganswer3]);
      document.querySelector("section").remove();
      document.querySelector("main").innerHTML = `<section class="quizz-containner">
      <div id = "question">
        <p> QUESTION ${index+1}:</p>
        <p>${table[index].question}</p>
      </div>
      <article>
        <div class= "answer">
        <p>${mixedAnswers[0]}</p></div>
        <div class= "answer">
        <p>${mixedAnswers[1]}</p></div>
        <div class="answer">
        <p>${mixedAnswers[2]}</p></div>
        <div class= "answer">
        <p>${mixedAnswers[3]}</p></div>
      </article> 
      </section>`;
      console.log(`Question ${index+1}`); 
      startTimer(10);   /// Lancement du timer 
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
