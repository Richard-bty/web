const progress = document.getElementById("progress");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const steps = document.querySelectorAll(".step");
const questions = document.querySelectorAll(".question");
const xemKq = document.querySelector(".btn-xkq")
const quizForm = document.getElementById('quizForm');
let currentStep = 1;

next.addEventListener("click",() => {
    changeStep(1);
})
prev.addEventListener("click",() => {
    changeStep(-1);
})

function changeStep(step){
    currentStep += step;

    update();
    updateNavigationButtons()
}
function updateNavigationButtons() {
    const allAnswers = quizForm.querySelectorAll(`input[name="q${currentStep}[]"]:checked`);

    if (currentStep < 10) {
        next.disabled = allAnswers.length === 0;
    } else {
        xemKq.disabled = allAnswers.length === 0;
    }
}
document.addEventListener('DOMContentLoaded', function () {
    const checkboxes = document.querySelectorAll('.checkbox');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            const label = document.querySelector(`label[for="${this.id}"]`);
            if (this.checked) {
                label.classList.add('selected');
            } else {
                label.classList.remove('selected');
            }
        });
    });
});
quizForm.addEventListener('change', function(event) {
    updateNavigationButtons()
});
function update(){


    steps.forEach((step, idx ) =>{    
        if(idx < currentStep){
            step.classList.add("active");
        }else{
            step.classList.remove("active");
        }
    })
    questions.forEach((question, idq) =>{
        if(idq == currentStep-1){
             question.classList.add("qs-active");
        }else{
             question.classList.remove("qs-active");
        }
    })

    
    prev.disabled = currentStep === 1;
    next.disabled = currentStep === 1;
    next.disabled = currentStep === steps.length;
    if(currentStep === steps.length) {xemKq.style.display ="block"}
    else {
        xemKq.style.display = "none"; 
    }

    progress.style.width = ((currentStep-1) / (steps.length-1)) *100 +"%";
}
document.addEventListener('DOMContentLoaded', function() {
    const questions = document.querySelectorAll('.question');
  
    questions.forEach(function(question) {
      const radioButtons = question.querySelectorAll('.checkbox');
  
      radioButtons.forEach(function(radio) {
        radio.addEventListener('change', function() {
          // Xóa class 'selected' khỏi tất cả các label trong câu hỏi hiện tại
          const labels = question.querySelectorAll('.lb-radio');
          labels.forEach(function(label) {
            label.classList.remove('selected');
          });
  
          // Thêm class 'selected' vào label được chọn
          this.nextElementSibling.classList.add('selected');
        });
      });
    });
  });


