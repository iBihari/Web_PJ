function selecthn(){
    var hnclick=document.getElementById("hn");
    var hpclick=document.getElementById("hp");
    var hdclick=document.getElementById("hd");

    hnclick.classList.add("hnclicked");
    hpclick.classList.remove("hpclicked");
    hdclick.classList.remove("hdclicked");
}
function selecthp(){
    var hpclick=document.getElementById("hp");
    var hnclick=document.getElementById("hn");
    var hdclick=document.getElementById("hd");

    hpclick.classList.add("hpclicked");
    hnclick.classList.remove("hnclicked");
    hdclick.classList.remove("hdclicked");
}
function selecthd(){
    var hdclick=document.getElementById("hd");
    var hnclick=document.getElementById("hn");
    var hpclick=document.getElementById("hp");

    hdclick.classList.add("hdclicked");
    hpclick.classList.remove("hpclicked");
    hnclick.classList.remove("hnclicked");
}