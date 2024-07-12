    document.getElementById("hidden").onclick = function () {
    document.getElementById("content_study").style.display = 'none';
    document.getElementById("hidden").style.display = 'none';
    document.getElementById("presently").style.display = 'block';
    };
    document.getElementById("presently").onclick = function () {
    document.getElementById("content_study").style.display = 'block';
    document.getElementById("presently").style.display = 'none';
    document.getElementById("hidden").style.display = 'block';
    };

    // Lấy tất cả các phần tử tab và nội dung tương ứng
    const tab_box = document.querySelectorAll('.tab_box-item');
    const tabContents = document.querySelectorAll('.tab_box-pane');
    
    // Xử lý sự kiện khi người dùng chọn một tab
    tab_box.forEach((tab, index) => {
      tab.addEventListener('click', () => {
        // Ẩn tất cả nội dung tab
        tabContents.forEach(content => {
          content.classList.remove('active');
        });
    
        // Hiển thị nội dung tab được chọn
        tabContents[index].classList.add('active');
      });
    });