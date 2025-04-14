document.addEventListener('DOMContentLoaded', function () {
    const quizForm = document.getElementById('quizForm');
    const resultDiv = document.getElementById('result');
    const careerResult = document.getElementById('careerResult');
    const btnKQ = document.querySelector('.btn-xkq');
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
    
    const resetAnswers = () => {
        // Bỏ chọn tất cả checkbox
        const checkboxes = quizForm.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.checked = false;
        });
    };

    window.addEventListener('DOMContentLoaded', function () {
        // Chỉ chạy khi lần đầu vào trang trong session hiện tại
        if (!sessionStorage.getItem('hasVisited')) {
            localStorage.removeItem('careerType');
            sessionStorage.setItem('hasVisited', 'true');
        }
    });

    btnKQ.addEventListener('click', function (e) {
        e.preventDefault();

        const answers = {
            Realistic: 0,
            Investigative: 0,
            Artistic: 0,
            Social: 0,
            Enterprising: 0,
            Conventional: 0
        };

        // Lặp qua tất cả checkbox được chọn trong form
        const selectedCheckboxes = quizForm.querySelectorAll('input[type="checkbox"]:checked');
        selectedCheckboxes.forEach(checkbox => {
            const value = checkbox.value;
            if (answers.hasOwnProperty(value)) {
                answers[value]++;
            }
        });

        // Tìm nhóm có số điểm cao nhất
        let highestValue = 0;
        let careerType = '';

        for (let key in answers) {
            if (answers[key] > highestValue) {
                highestValue = answers[key];
                careerType = key;
            }
        }

        // Lưu và chuyển trang
        localStorage.setItem('careerType', careerType);
        window.location.href = '../more-html/nghe.html';
    });

    resetAnswers();
});
