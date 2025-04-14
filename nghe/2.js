document.addEventListener('DOMContentLoaded', function () {
    
    // Lấy kết quả ngành nghề từ localStorage
    const careerType = localStorage.getItem('careerType');

    if (!careerType) {
        return;
    }

    // Lấy tất cả các thẻ <a> chứa thông tin ngành nghề
    const careerCards = document.querySelectorAll('.career-card');

    // Duyệt qua tất cả các thẻ ngành nghề
    careerCards.forEach(card => {
        const cardTitles = card.querySelectorAll('h1');
        let cardMatched = false;
        
        cardTitles.forEach(title => {
            if (careerType && title.textContent.toLowerCase().includes(careerType.toLowerCase())) {
                cardMatched = true;
            }
        });

        // Ẩn thẻ nếu không khớp
        card.style.display = cardMatched ? 'block' : 'none';
    });


  const dropdown = document.getElementById('nghe');

   // Lắng nghe sự kiện thay đổi lựa chọn của dropdown
  dropdown.addEventListener('change', function() {
        const selectedValue = dropdown.value;

        // Hiển thị tất cả các ngành khi chọn "Tất cả các ngành"
        if (selectedValue === 'before') {
            careerCards.forEach(card => {
                card.style.display = 'block'; // Hiển thị tất cả các ngành
            });
        } 
        // Chỉ hiển thị các ngành phù hợp với kết quả khi chọn "Ngành phù hợp với bạn"
        else if (selectedValue === 'after' && careerType){ 
            careerCards.forEach(card => {
                const cardTitles = card.querySelectorAll('h1');
                let cardMatched = false;
                
                cardTitles.forEach(title => {
                    if (careerType && title.textContent.toLowerCase().includes(careerType.toLowerCase())) {
                        cardMatched = true;
                    }
                });

                // Ẩn thẻ nếu không khớp với ngành nghề của người dùng
                card.style.display = cardMatched ? 'block' : 'none';
            });
        }
    });

    if (careerType) {
        dropdown.value = 'after';  // "Tất cả các ngành"
      } else {
        dropdown.value = 'before'; // "Ngành phù hợp với bạn"
      }
});

window.addEventListener('load', function() {
    const dropdown = document.getElementById('subject');
    dropdown.style.width = '200px'; // Đặt chiều rộng cố định cho dropdown
    dropdown.style.padding= '10px'; // Đặt chiều rộng cố định cho dropdown
    //dropdown.style.width = '200px'; // Đặt chiều rộng cố định cho dropdown
  });
  