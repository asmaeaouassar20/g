



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
    btnsearch=document.querySelector("#btnsearch"),
    move=document.querySelector(".move");


var label=document.querySelector("label");

var total_number=document.querySelector("#total_number");




   
//cliquer sur le bouton dark mode toggle
// function darkmode(){
//     console.log("mode= ",mode);
//     console.log("cliquer sur le boutton darkmodetoggle");
//     if(mode==="light"){
//         body.style.backgroundColor="#121212";
//         body.style.color="#fff";
//        head.style.backgroundColor="#000";
//         fullname.style.backgroundColor="#fff";
//         phonenumber.style.backgroundColor="#fff";
//         slvl.style.backgroundColor="#fff";
//         btnsearch.style.backgroundColor="#fff";
    
//         addBtn.style.backgroundColor="rgb(69, 114, 0)";
//         addBtn.style.color="#fff";
//         btnSortName.style.backgroundColor= "rgb(69, 114, 0)";
//         btnSortName.style.color= "#fff";
//         btnSortBonus.style.backgroundColor= "rgb(69, 114, 0)";
//         btnSortBonus.style.color= "#fff";
    
//         tbody.style.backgroundColor="#fff"
//         tbody.style.color="#000";
//         mode="dark";
//     }
//     if(mode==="dark"){
//         body.style.backgroundColor="#f00";
//     }
// }
var mode_dark_or_light;
//--- fonction qui  définit le mode sombre ---
function dark_mode(){
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
    move.style.backgroundColor="#fff";
    move.style.transform="translateX(30px)";
}

//--- fonction qui  définit le mode lumiere ---
function light_mode(){
    body.style.backgroundColor="#fff";
    body.style.color="#000";
   head.style.backgroundColor="#fff";
    fullname.style.backgroundColor="rgba(210, 205, 197, 0.455)";
    phonenumber.style.backgroundColor="rgba(210, 205, 197, 0.455)";
    slvl.style.backgroundColor="rgba(210, 205, 197, 0.455)";
    btnsearch.style.backgroundColor="rgba(210, 205, 197, 0.455)";

    addBtn.style.backgroundColor="rgb(199, 227, 157)";
    addBtn.style.color="#000";
    btnSortName.style.backgroundColor= "rgb(199, 227, 157)";
    btnSortName.style.color= "#000";
    btnSortBonus.style.backgroundColor= "rgb(199, 227, 157)";
    btnSortBonus.style.color= "#000";

    tbody.style.backgroundColor="rgba(210, 205, 197, 0.455)";
    move.style.backgroundColor="#000";
    move.style.transform="translateX(0px)";
}

//------ fct qui permet de manipuler le boutton dark-light toggle ---
label.addEventListener("click",()=>{
    if(modeBtn.checked) {
        light_mode();
        mode_dark_or_light="light";
        localStorage.setItem("mode","light");
    }
    else{
        dark_mode();
        mode_dark_or_light="dark";
        localStorage.setItem("mode","dark");
    }
})
//-----------------------------------------------------------------------


//------ fonction qui permet de définir le mode (dark or light) selon la valeur du localStorage --------
function defineMode(){
    if(localStorage.getItem("mode")==="dark")
        dark_mode();
    if(localStorage.getItem("mode")==="light")
        light_mode();
}
defineMode(); //cette fonction s'applique une fois on ouvre la page

//-----------------------------------------------------------------------


//styler le couleur du contenu du bouton d'ajout
// addBtn.addEventListener("mouseover", ()=>{
//     addBtn.style.color="red";
// })
// addBtn.addEventListener("mouseout", ()=>{
//     addBtn.style.color="yellow";
// })  


var tab_of_members=[];

// ------------  fonction qui ajoute un nouveau membre en cliquant sur le boutton add -------------------
function ajouter_membre(){
    total_number.innerHTML=tab_of_members.length+ +1;
    var membre = {
        fullname : fullname.value,
        phonenumber : phonenumber.value,
        slvl : slvl.value
    }
    tab_of_members.push(membre); //ajouter le membre dans le tableau javascript
    localStorage.setItem("table",JSON.stringify(tab_of_members));
    var a_ajouter='';
    a_ajouter = `
            <tr>
                <td>${membre.fullname}</td>
                <td>${membre.phonenumber}</td>
                <td>${membre.slvl}</td>
                <td><i class="fa-solid fa-trash-can iconee" style="color: #e00000;"></i></td>
                <td><i class="fa-solid fa-pen iconee" style="color: #03a800;"></i></td>
                <td><i class="fa-solid fa-star iconee" style="color: #d3d600;"></i></td>
            </tr>
    `
    tbody.innerHTML+=a_ajouter;
}

