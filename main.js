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
const isTrue = (element) => {
      console.log (element);
      console.log ("istrue");
      return true;
}


/* Fonction d'affichage des questions */
const displayQuizz = (table) => {
  for (let i=0; i < table.length; i++){
    document.querySelector("section").remove();

    // donne et recupère un tableau , fonction à faire 
    const mixedAnswers = arrayShuffle(table[i].goodanswer, [table[i].wronganswer1, table[i].wronganswer2, table[i].wronganswer3]); 

    document.querySelector("main").innerHTML = `<section class="quizz-containner">
        <div id = "question">
          <p> QUESTION ${i+1}:</p>
          <p>${questions[i].question}</p>
        </div>
        <article>
          <div class= "answer">
            <p>${mixedAnswers[0]}</p>
          </div>
          <div class= "answer">
            <p>${mixedAnswers[1]}</p>
          </div>
          <div class="answer">
            <p>${mixedAnswers[2]}</p>
          </div>
          <div class= "answer">
            <p>${mixedAnswers[3]}</p>
          </div>
        </article> 
      </section>`;
    console.log(`Question ${i+1}`); 
            
    // const buttons = document.querySelectorAll(".answer");
    // console.log(buttons);
    // for (let j=0; j<buttons.length; j++){
    //       console.log(buttons[j]);
    //       buttons[j].addEventListener("click", () => isTrue(buttons[j]));
    // }
  }   
}

displayQuizz(questions);