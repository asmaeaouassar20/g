var modeBtn=document.querySelector("#modeBtn"),
    body=document.querySelector("body"),
    addBtn=document.querySelector("#addBtn"),
    head=document.querySelector(".head"),
    btnSortName=document.querySelector("#btnSortName"),
    btnSortBonus=document.querySelector("#btnSortBonus"),
    tbody=document.querySelector("tbody"),
    fullname=document.querySelector("#fullname"),
    phonenumber=document.querySelector("#phonenumber"),
    slvl=document.querySelector("#slvl"),
    btnsearch=document.querySelector("#btnsearch");


var mode="light";


   
//cliquer sur le bouton dark mode toggle
function darkmode(){
    console.log("mode= ",mode);
    console.log("cliquer sur le boutton darkmodetoggle");
    if(mode==="light"){
        body.style.backgroundColor="#121212";
        body.style.color="#fff";
       head.style.backgroundColor="#000";
        fullname.style.backgroundColor="#fff";
        phonenumber.style.backgroundColor="#fff";
        slvl.style.backgroundColor="#fff";
        btnsearch.style.backgroundColor="#fff";
    
        addBtn.style.backgroundColor="rgb(69, 114, 0)";
        addBtn.style.color="#fff";
        btnSortName.style.backgroundColor= "rgb(69, 114, 0)";
        btnSortName.style.color= "#fff";
        btnSortBonus.style.backgroundColor= "rgb(69, 114, 0)";
        btnSortBonus.style.color= "#fff";
    
        tbody.style.backgroundColor="#fff"
        tbody.style.color="#000";
        mode="dark";
    }
    if(mode==="dark"){
        body.style.backgroundColor="#f00";
    }
}

//styler le couleur du contenu du bouton d'ajout
// addBtn.addEventListener("mouseover", ()=>{
//     addBtn.style.color="red";
// })
// addBtn.addEventListener("mouseout", ()=>{
//     addBtn.style.color="yellow";
// })  
