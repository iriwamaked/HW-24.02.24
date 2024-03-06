const questions = [
  ['How many letters are there in the worls "Hello"', [5, 2], 5],
  ['How many letters are there in the worls "World"', [4, 5], 5],
  ['How many letters are there in the worls "Congratulations"', [15, 13], 15],
];

console.log(questions);
let countAns = 0;
const answeredQ = new Array(questions.length).fill(false);

document.addEventListener("DOMContentLoaded", AddQuestions(questions));

function AddQuestions(questions) {
  for (let i = 0; i < questions.length; i++) {
    const divQ = document.createElement("div");

    const q = document.createElement("h2");
    q.innerHTML = questions[i][0];

    const rgroup = document.createElement("div");
    rgroup.classList.add("rgroup");

    const var1 = document.createElement("input");
    var1.type = "radio";
    var1.id = "var1" + i;
    var1.name = "radioButtons" + i;
    var1.value = questions[i][1][0];

    const label1 = document.createElement("label");
    label1.innerHTML = questions[i][1][0];
    label1.setAttribute("for", "var1" + i);

    rgroup.appendChild(var1);
    rgroup.appendChild(label1);

    const rgroup2 = document.createElement("div");
    rgroup2.classList.add("rgroup");
    const var2 = document.createElement("input");
    var2.type = "radio";
    var2.id = "var2" + i;
    var2.name = "radioButtons" + i;
    var2.value = questions[i][1][1];

    const label2 = document.createElement("label");
    label2.innerHTML = questions[i][1][1];
    label2.setAttribute("for", "var2" + i);

    rgroup2.appendChild(var2);
    rgroup2.appendChild(label2);

    divQ.appendChild(q);
    divQ.appendChild(rgroup);
    divQ.appendChild(rgroup2);

    const btn = document.createElement("button");
    btn.innerText = "Next";
    if (i === questions.length - 1) {
      btn.innerText = "Finish";
    }
    divQ.appendChild(btn);

    btn.addEventListener(
      "click",
      (function (index) {
        return function () {
          console.log("Clicked on div with index:", index);
          //   const radioButtons = document.querySelectorAll(
          //     'input[name="radioButtons' + i + '"]'
          //   );
          //   let radioButtonChecked = false;
          //   radioButtons.forEach((radioButton) => {
          //     if (radioButton.checked) {
          //       radioButtonChecked = true;
          //     }
          //   });
          //   if (radioButtonChecked) {
          //     const checkedRadioBtn = document.querySelector(
          //       'input[name="radioButtons' + i + '"]:checked'
          //     ).value;
          //     const correctAnswer = questions[index][2];
          //     if (checkedRadioBtn == correctAnswer) {
          //       countAns++;
          //       if (index === questions.length - 1) {
          //         const divRes = document.createElement("div");
          //         const results = document.createElement("p");
          //         results.innerText = `Results: ${countAns} correct answers to ${questions.length} questions`;
          //         divRes.appendChild(results);
          //         document.body.appendChild(divRes);
          //         countAns = 0;
          //       }
          //     }
          //   }
          answeredQ[index] = true;
          DisableRadioButtons(index);
          CheckAnswer(index);
          if (index === questions.length - 1) {
                    const divRes = document.createElement("div");
                    const results = document.createElement("p");
                    results.innerText = `Results: ${countAns} correct answers to ${questions.length} questions`;
                    divRes.appendChild(results);
                    document.body.appendChild(divRes);
                    countAns = 0;
                  }
        };
      })(i)
    );

    // [var1, var2].forEach((radioButton) => {
    //   radioButton.addEventListener("change", function () {
    //     CheckAnswer(i);
    //   });
    // });

    document.body.appendChild(divQ);
  }
}

// function CheckAnswer(questionIndex) {
//   const checkedRadioButton = document.querySelector(
//     'input[name="radioButtons' + questionIndex + '"]:checked'
//   );

//   if (checkedRadioButton) {
//     const checkedValue = parseInt(checkedRadioButton.value);
//     const correctAnswer = questions[questionIndex][2];

//     if (checkedValue === correctAnswer) {
//       countAns++;
//     } else {
//       console.log("Ответ неверный");
//     }
//   }
// }

function CheckAnswer(questionIndex) {
    const checkedRadioButton = document.querySelector(
      'input[name="radioButtons' + questionIndex + '"]:checked'
    );
  
    if (checkedRadioButton) {
      const checkedValue = parseInt(checkedRadioButton.value);
      const correctAnswer = questions[questionIndex][2];
  
      if (checkedValue === correctAnswer) {
        console.log("Ответ верный");
        countAns++;
      } else {
        console.log("Ответ неверный");
      }
    }
  }
  
  function DisableRadioButtons(questionIndex) {
    const radioButtons = document.getElementsByName("radioButtons" + questionIndex);
    radioButtons.forEach(radioButton => {
      radioButton.disabled = true;
    });
  }
