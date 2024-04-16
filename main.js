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
const shuffle = () => {
      return "good";
}

/* Fonction de vérification de la réponse du joueur */
const isTrue = () => {
      return true;
}


/* Fonction d'affichage des questions */
const displayQuizz = (table) => {
      for (let i=0; i<table.length; i++){
            document.querySelector("section").remove();
            document.querySelector("main").innerHTML = `<section class="quizz-containner">
            <div id = "question">
                  <p> QUESTION " ":</p>
                  <p>${questions[i].question}</p>
            </div>
            
            <article>
                  <div class= "answer">
                  <p>${questions[i].goodanswer}</div>
                  <div class= "answer">
                  <p>${questions[i].wronganswer1}</p></div>
                  <div class="answer">
                  <p>${questions[i].wronganswer2}</p></div>
                  <div class= "answer">
                  <p>${questions[i].wronganswer3}</p></div>
            </article> 
            </section>`;
      }
}