document.addEventListener('DOMContentLoaded', function() {
    const quizForm = document.getElementById('quizForm');
    const resultDiv = document.getElementById('result');
    const careerResult = document.getElementById('careerResult');
    const btnKQ = document.querySelector('.btn-xkq');

    const resetAnswers = () => {
        // Reset tất cả các radio buttons về trạng thái chưa chọn
        for (let i = 1; i <= 23; i++) {
            const radio = quizForm.querySelector(`input[name="q${i}"]`);
            if (radio) {
                radio.checked = false;
            }
        }
    };

    window.addEventListener('DOMContentLoaded', function () {
        // Kiểm tra nếu đây là lần đầu truy cập trong phiên hiện tại
        if (!sessionStorage.getItem('hasVisited')) {
            localStorage.removeItem('careerType'); // reset đáp án cũ
            sessionStorage.setItem('hasVisited', 'true'); // đánh dấu đã vào rồi
        }
    });    
    
    btnKQ.addEventListener('click', function(e) {
        e.preventDefault();

        const answers = {
            Realistic: 0,
            Investigative: 0,
            Artistic: 0,
            Social: 0,
            Enterprising: 0,
            Conventional: 0
        };

        const formElements = quizForm.elements;
        for (let i = 1; i <= 23; i++) {
            const selectedAnswer = quizForm.querySelector(`input[name="q${i}"]:checked`);

            if (selectedAnswer) {
                answers[selectedAnswer.value]++;
            }

        }

        let highestValue = 0;
        let careerType = '';

        for (let key in answers) {
            if (answers[key] > highestValue) {
                highestValue = answers[key];
                careerType = key;
            }
        }

        localStorage.setItem('careerType', careerType);

        window.location.href = '../more-html/nghe.html'; 
    });

    resetAnswers();
    
});
