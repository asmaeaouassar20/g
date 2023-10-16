



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

var divMsgError=document.querySelector("#divMsgError");




   
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
    divMsgError.style.color="rgb(254, 132, 132)";
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
    divMsgError.style.color="rgba(207, 9, 9, 0.703)";
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

//------------------- apporter les informations à partir du localStorage s'il n'est pas vide ----------
var tab_of_members;
if(localStorage.getItem("table")!=null)
    tab_of_members=JSON.parse(localStorage.getItem("table"));
else tab_of_members=[];


// ------------  fonction qui ajoute un nouveau membre en cliquant sur le boutton add -------------------
function ajouter_membre(){
    if(validation()){
    var numero_membre_a_ajouter=tab_of_members.length;
    total_number.innerHTML=tab_of_members.length+ +1;
    var membre = {
        fullname : fullname.value,
        phonenumber : phonenumber.value,
        slvl : slvl.value,
        bonus: 0 //lorsqu'un membre s'ajoute pour la premiere fois, il a bonus=0
    }
    tab_of_members.push(membre); //ajouter le membre dans le tableau javascript
    localStorage.setItem("table",JSON.stringify(tab_of_members));
    var a_ajouter='';
    a_ajouter = `
            <tr>
                <td class="cacher">${numero_membre_a_ajouter}</td>
                <td>${membre.fullname} (<span>${membre.bonus}</span>)</td>
                <td>${membre.phonenumber}</td>
                <td>${membre.slvl}</td>
                <td><i class="fa-solid fa-trash-can iconee" style="color: #e00000;"></i></td>
                <td><i class="fa-solid fa-pen iconee" style="color: #03a800;"></i></td>
                <td><i class="fa-solid fa-star iconee" style="color: #d3d600;"></i></td>
            </tr>
    `
    tbody.innerHTML+=a_ajouter;

    //lorsque la validation des informations saisies se passe bien, on cache le div d'erreur
    divMsgError.classList.add("cacher");
    afficher();
}
}

// ------------------ fonction qui permet d'afficher les informations sur la page html -------------
function afficher(){
    total_number.innerHTML=tab_of_members.length;
    tbody.innerHTML='';
    for(let i=0 ; i<tab_of_members.length ; i++){
        tbody.innerHTML+=`
        <tr>
            <td class="cacher">${i}</td>
            <td>${tab_of_members[i].fullname} (<span>${tab_of_members[i].bonus}</span>)</td>
            <td>${tab_of_members[i].phonenumber}</td>
            <td>${tab_of_members[i].slvl}</td>
            <td><i onclick="supprimer_membre(${i})" class="fa-solid fa-trash-can iconee" style="color: #e00000;"></i></td>
            <td><i class="fa-solid fa-pen iconee" style="color: #03a800;"></i></td>
            <td><i onclick="ajouter_bonus(${i})" class="fa-solid fa-star iconee" style="color: #d3d600;"></i></td>
        </tr>
        
        `
    }
}
afficher();

//------- fonction qui permet de supprimer un membre -------------------
function supprimer_membre(i){
    tab_of_members.splice(i,1);
    localStorage.setItem("table",JSON.stringify(tab_of_members));
    afficher();
}

//-------- fonction qui permet d'ajouter des bonus -----------
function ajouter_bonus(i){
    tab_of_members[i].bonus+=1;
    localStorage.setItem("table",JSON.stringify(tab_of_members));
    afficher();
}
//----- une fonction qui vide le contenu des inputs ---------
function vider(){
    fullname.value='';
    phonenumber.value='';
    slvl.value='';
}
//---- une fonction qui permet de vérifier si un membre ajouter existe déja dans la liste -------
function existe(){
    let exist=false;
    for(let i=0 ; i<tab_of_members.length ; i++){
        if(tab_of_members[i].fullname===fullname.value){
            exist=true;
            break;
        }
    }
    return exist;
}


//---- fonction qui permet de valider les informations saisies -----
function validation(){
    let result=true;
    if(existe()){
        result=false;
        divMsgError.classList.remove("cacher");
        divMsgError.innerHTML='this name already exists';
    }
    if(fullname.value==='' || fullname.value.length>30){
        result=false;
        divMsgError.classList.remove("cacher");
        divMsgError.innerHTML='add a suitable name';
    }
    if(phonenumber.value<0 || phonenumber.value.length>12 || phonenumber.value===''){
        result=false;
        divMsgError.classList.remove("cacher");
        divMsgError.innerHTML='add a suitable phone number';
    }
    if(!result){
        vider();
    }
    return result;
}


//------- fonction qui permet de rechercher par nom --------------------
function recherche_nom(nom){
    tbody.innerHTML='';
    for(let i=0 ; i<tab_of_members.length ; i++){
        if(tab_of_members[i].fullname.includes(nom)){
            tbody.innerHTML+=`
                <tr>
                    <td class="cacher">${i}</td>
                    <td>${tab_of_members[i].fullname} (<span>${tab_of_members[i].bonus}</span>)</td>
                    <td>${tab_of_members[i].phonenumber}</td>
                    <td>${tab_of_members[i].slvl}</td>
                    <td><i onclick="supprimer_membre(${i})" class="fa-solid fa-trash-can iconee" style="color: #e00000;"></i></td>
                    <td><i class="fa-solid fa-pen iconee" style="color: #03a800;"></i></td>
                    <td><i onclick="ajouter_bonus(${i})" class="fa-solid fa-star iconee" style="color: #d3d600;"></i></td>
                </tr>
            `
        }
    }
}