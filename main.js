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

/* Fonction d'affichage des questions */
const displayQuizz = (table) => {
      for (let i=0; i<table.length; i++){
            document.querySelector("section").remove();
            const mixedAnswers = shuffle([table[i].goodanswer, table[i].wronganswer1, table[i].wronganswer2, table[i].wronganswer3]); // donne et recupère un tableau , fonction à faire 
            document.querySelector("main").innerHTML = `<section class="quizz-containner">
            <div id = "question">
                  <p> QUESTION ${i+1}:</p>
                  <p>${questions[i].question}</p>
            </div>
            
            <article>
                  <button onclick="isTrue(${mixedAnswers[i]}, ${i})" class= "answer">
                        <p>${mixedAnswers[0]}</p>
                  </button>
                  <button onclick="isTrue(${mixedAnswers[i]}, ${i})" class= "answer">
                        <p>${mixedAnswers[1]}</p>
                  </button>
                  <button onclick="isTrue(${mixedAnswers[i]}, ${i})" class="answer">
                        <p>${mixedAnswers[2]}</p>
                  </button>
                  <button onclick="isTrue(${mixedAnswers[i]}, ${i})" class= "answer">
                        <p>${mixedAnswers[3]}</p>
                  </button>
            </article> 
            </section>`;
            console.log(`Question ${i+1}`); 
            
            const buttons = document.querySelectorAll(".answer");
            console.log(buttons);
            for (let j=0; j<buttons.length; j++){
                  console.log(buttons[j]);
                  buttons[j].addEventListener("click", () => isTrue(buttons[j], i));
            }
      }   
}