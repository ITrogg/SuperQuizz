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

// Fonction d'affichage des questions 
window.onload = ()=>{
      document.querySelector(".quizz-containner").style.display = "none"; 
      document.querySelector(".go-button").addEventListener("click", quizzdisplay) 
}

const quizzdisplay = () => {
      document.querySelector(".home-containner").style.display = "none"; 
      document.querySelector(".quizz-containner").style.display = "";     
}
/* Fonction d'affichage d'une question */ 
    // doit afficher les réponses dans un ordre aléatoire


/* Fonction de vérification de la réponse du joueur */
      // lire la réponse
      //retourner vrai ou faux


/* Fonction fin de temps de réponse */
      // là je sais vraiment pas 


/* Fonction d'affichage fin de quizz */
      // Affiche le score 
      // Affiche un message personnalisé avec le prénom en fonction du score obtenu 


/* Boucle */
//  affiche question 
//  vérifie réponse
//  incrémente score
