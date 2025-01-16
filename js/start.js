function checkConnectionAndRedirect() {
    // Kiểm tra kết nối mạng
    if (navigator.onLine) {
    } else {
     // Không có kết nối mạng
     alert("Thiết bị không có kết nối mạng, vui lòng truy cập lại sau.");
     return;
    }
   
    // Lấy thông tin về thiết bị
    let device = navigator.userAgent;
   
    // Nếu là điện thoại Android
    if (device.includes("Android")) {
     // Chuyển hướng sau 5 giây
     setTimeout(() => {
       window.location = "sign-in.html";
     }, 1000);
    }
   /*
    // Nếu là máy tính Windows
    else if (device.includes("Windows")) {
     // Chuyển hướng sau 5 giây
     setTimeout(() => {
       window.location = "sign-in.html";
     }, 3000);
    }
   */
    // Nếu không phải là hai trường hợp trên
    else {
     // Chuyển hướng sau 5 giây
     setTimeout(() => {
       window.location = "sign-in.html";
     }, 1000);
    }
   }
   checkConnectionAndRedirect();