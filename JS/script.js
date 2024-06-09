let videoBtn = document.querySelectorAll('.vid-btn');
let formBtn = document.querySelector('#login-btn');
 let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');

formBtn.addEventListener('click', () =>{
  loginForm.classList.add('active');
});

formClose.addEventListener('click', () =>{
  loginForm.classList.remove('active');
});

videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});


var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
});

function subcribe(){
                
  const email = document.getElementById("emailSub").value;
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  if (!emailPattern.test(email)) {
      showpopup("Vui lòng nhập địa chỉ email hợp lệ");
      return;
  }

  showpopup("Cảm ơn bạn đã theo dõi");
  document.getElementById("emailSub").value="";
}

function showpopup(mess){
  const popup = document.getElementById("popup");
  popup.textContent = mess;
  popup.classList.add("show");
  setTimeout(() => {
      popup.classList.remove('show');
  }, 5000);
}