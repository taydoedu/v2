// Danh sách các phần tử
const questions = [
    "<a href='bthhh.html'>Bảng tuần hoàn hóa học</a>",
    "<a href='bdtbqt.html'>Bảng động từ bất quy tắc</a>",
    "<a href='alatdiali.html'>Alat địa lí Việt Nam</a>",
    "<a href='kienthuctonghop.html'>Kiến thức tổng hợp</a>",
    "<a href='sachgkdt.html'>Sách giáo khoa điện tử</a>",
    "<a href='maytinh.html'>Máy tính Online</a>",
    "<a href='huongdansudung.html'>Hướng dẫn sử dụng</a>",
    "<a href='danhgia.html'>Đánh giá, góp ý kiến</a>",
    "<a href='chiase.html'>Chia sẻ websites và tải ứng dụng</a>",
    "<a href='vechungtoi.html'>Về chúng tôi và chính sách bảo mật</a>", 
    ];
    
    // Lấy số lượng phần tử muốn hiển thị
    const numQuestionsToShow = 5;
    
    // Tạo mảng để lưu trữ các phần tử được chọn ngẫu nhiên
    const selectedQuestions = [];
    
    // Lặp lại cho đến khi có đủ số lượng phần tử được chọn
    while (selectedQuestions.length < numQuestionsToShow) {
      // Tạo số ngẫu nhiên trong phạm vi chỉ mục của danh sách
      const randomIndex = Math.floor(Math.random() * questions.length);
    
      // Kiểm tra nếu phần tử tại chỉ mục ngẫu nhiên đã được chọn
      if (!selectedQuestions.includes(questions[randomIndex])) {
        // Thêm phần tử vào mảng các phần tử được chọn
        selectedQuestions.push(questions[randomIndex]);
      }
    }
    
    // Hiển thị các phần tử được chọn
    document.write("<p>");
    for (const question of selectedQuestions) {
      document.write(`<p>${question}</p>`);
    }
    document.write("</p>");
    