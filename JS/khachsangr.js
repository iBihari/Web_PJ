function selecthn(){
    var hnclick=document.getElementById("hn");
    var hpclick=document.getElementById("hp");
    var hdclick=document.getElementById("hd");


    hnclick.classList.add("hnclicked");
    hpclick.classList.remove("hpclicked");
    hdclick.classList.remove("hdclicked");

    var ehanoi = document.getElementById("hanoi");
    var ehaiphong = document.getElementById("haiphong");
    var ehaiduong = document.getElementById("haiduong");
    ehanoi.classList.remove("none")
    ehaiphong.classList.add("none"); 
    ehaiduong.classList.add("none"); 

}
function selecthp(){
    var hpclick=document.getElementById("hp");
    var hnclick=document.getElementById("hn");
    var hdclick=document.getElementById("hd");

    hpclick.classList.add("hpclicked");
    hnclick.classList.remove("hnclicked");
    hdclick.classList.remove("hdclicked");

    var ehanoi = document.getElementById("hanoi");
    var ehaiphong = document.getElementById("haiphong");
    var ehaiduong = document.getElementById("haiduong");
    ehanoi.classList.add("none")
    ehaiphong.classList.remove("none"); 
    ehaiduong.classList.add("none"); 
}
function selecthd(){
    var hdclick=document.getElementById("hd");
    var hnclick=document.getElementById("hn");
    var hpclick=document.getElementById("hp");

    hdclick.classList.remove("hdclicked");
    hpclick.classList.remove("hpclicked");
    hnclick.classList.add("hnclicked");

    var ehanoi = document.getElementById("hanoi");
    var ehaiphong = document.getElementById("haiphong");
    var ehaiduong = document.getElementById("haiduong");
    ehanoi.classList.add("none")
    ehaiphong.classList.add("none"); 
    ehaiduong.classList.remove("none"); 
}

function removeClas(id, className) {
    const element = document.getElementById(id);
    
    if (element && element.classList.contains(className)) {
        
        element.remove();
    }
}
function addClas(id, className) {
    var element = document.getElementById(id);
    element.classList.add(className);   

}