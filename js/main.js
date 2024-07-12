// Menu start
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
// Menu end
//Footer start
  document.getElementById("tw").innerHTML = "TAYDOEDU - CHINH PHỤC THPT";
  document.getElementById("dvql").innerHTML = "Trường THPT Tây Đô";
  document.getElementById("dc").innerHTML = "<a style='color: #fff; text-decoration: none;' href='https://maps.app.goo.gl/bfW6VKETVL6A2tDv7'>" + "&nbsp"+"Ấp 1 - Thị trấn Vĩnh Viễn - Huyện Long Mỹ - Hậu Giang";
  document.getElementById("sdt").innerHTML = "<a style='color: #fff; text-decoration: none;' href='tel://0334288374'>" + "&nbsp"+"0334288374"  ;
  document.getElementById("mailtruong").innerHTML = "<a style='color: #fff; text-decoration: none;' href='mailto:edutaydo@gmail.com?subject=Liên hệ&body='>" + "&nbsp"+"edutaydo@gmail.com"  ;
  document.getElementById("lh").innerHTML = "<a style='color: #fff; text-decoration: none;' href='https://m.me/thanhloc.huynh.5249'><img src='Assets/mes.png' style='width: 35px'></a>&ensp;<a style='color: #fff; text-decoration: none;' href='https://www.facebook.com/profile.php?id=61561071201517'><img src='Assets/facebook.png' style='width: 35px'></a>&ensp;<a style='color: #fff; text-decoration: none;' href='https://www.tiktok.com/@edutaydo'><img src='Assets/tiktok.png' style='width: 35px'></a>";
  document.getElementById("tkhd").innerHTML = " <a style='color: #fff; text-decoration: none;' href='https://github.com'>" + "&nbsp"+"Github</a>" ;
//Footer end
// Ẩn hiện thi kiểm tra
  var acc = document.getElementsByClassName("accordion");
          var i;
          for (i = 0; i < acc.length; i++) {
              acc[i].addEventListener("click", function() {
                  this.classList.toggle("active1");
                  var panel = this.nextElementSibling;
                  if (panel.style.maxHeight) {
                      panel.style.maxHeight = null;
                  } else {
                      panel.style.maxHeight = panel.scrollHeight + "px";
                  }
              });
          }
          
//Tab Khóa học
var buttons = document.getElementsByClassName('tablinks');
var contents = document.getElementsByClassName('tabcontent');
function showContent(id) {
    for (var i = 0; i < contents.length; i++) {
        contents[i].style.display = 'none';
    }
    var content = document.getElementById(id);
    content.style.display = 'block';

    // Add code to set the first button as active by default
    buttons[0].classList.add("active");
}
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        var id = this.textContent;
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove("active");
        }
        this.classList.add("active");
        showContent(id);
    });
}




