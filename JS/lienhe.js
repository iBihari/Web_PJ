function guilienhe(){
                
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const content = document.getElementById("content").value;

    if (name === "" || email === "" || content === "") {
        showpopup("Vui lòng điền đầy đủ thông tin");
        return;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        showpopup("Vui lòng nhập địa chỉ email hợp lệ");
        return;
    }

    showpopup("Cảm ơn bạn đã quan tâm. Chúng tôi sẽ phản hổi sớm nhất có thể");
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("content").value = "";
}

function showpopup(mess){
    const popup = document.getElementById("popup");
    popup.textContent = mess;
    popup.classList.add("show");
    setTimeout(() => {
        popup.classList.remove('show');
    }, 5000);
}