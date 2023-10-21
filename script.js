
 var  addBtn=document.querySelector("#addBtn"),

    body=document.querySelector("body"),
    head=document.querySelector(".head"),

    btnSortName=document.querySelector("#btnSortName"),
    btnSortBonus=document.querySelector("#btnSortBonus"),
    btnsearch=document.querySelector("#btnsearch"),

    tbody=document.querySelector("tbody"),

    fullname=document.querySelector("#fullname"),
    phonenumber=document.querySelector("#phonenumber"),
    slvl=document.querySelector("#slvl"),

    label=document.querySelector("label"),
    move=document.querySelector(".move"),

    spanAddBtn=document.querySelector('#spanAddBtn'),
    spanUpBtn=document.querySelector("#spanUpBtn"),

    total_number=document.querySelector("#total_number"),

    divMsgError=document.querySelector("#divMsgError");

 var mode_ajout_modifier="ajout";//le mode d'ajout par défaut

var mode_dark_or_light;

 defineMode(); //cette fonction s'applique une fois on ouvre la page

//--- fonction qui  définit le mode sombre ---
function dark_mode(){
    body.style.backgroundColor="#121212";
    body.style.color="#fff";
    head.style.backgroundColor="#000";
    fullname.style.backgroundColor="#fff";
    phonenumber.style.backgroundColor="#fff";
    slvl.style.backgroundColor="#fff";
    btnsearch.style.backgroundColor="#fff";
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
    define_mode();
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
    addBtn.style.color="#000";
    btnSortName.style.backgroundColor= "rgb(199, 227, 157)";
    btnSortName.style.color= "#000";
    btnSortBonus.style.backgroundColor= "rgb(199, 227, 157)";
    btnSortBonus.style.color= "#000";
    tbody.style.backgroundColor="rgba(210, 205, 197, 0.455)";
    move.style.backgroundColor="#000";
    move.style.transform="translateX(0px)";
    divMsgError.style.color="rgba(207, 9, 9, 0.703)";
    define_mode();
}

//------ fct qui permet de manipuler le boutton dark-light toggle ---
label.addEventListener("click",()=>{
    // console.log("avant: ",mode_ajout_modifier,mode_dark_or_light);
    if(mode_dark_or_light==="dark") {
        light_mode();
        mode_dark_or_light="light";
        localStorage.setItem("mode","light");
    }
    else{
        dark_mode();
        mode_dark_or_light="dark";
        localStorage.setItem("mode","dark");
    }   
    // console.log("apres: ",mode_ajout_modifier,mode_dark_or_light);
  if(mode_ajout_modifier==="ajout"){
    define_mode();
    if(mode_dark_or_light==="dark"){
        addBtn.style.backgroundColor='rgb(69, 114, 0)';
    }
  }
  if(mode_ajout_modifier==="modifier"){
    if(mode_dark_or_light==="light"){
        addBtn.style.backgroundColor='rgb(174, 174, 255)';
        addBtn.style.color='#000';
        addBtn.classList.remove('addBtnClass');
        addBtn.classList.remove('addBtnClassDarkMode');
        addBtn.classList.remove('addBtnClassDarkModeNew');
        addBtn.classList.add('addBtnClassNew');  
    }
    if(mode_dark_or_light==="dark"){
        addBtn.style.backgroundColor='rgb(0, 0, 156)';
        addBtn.classList.remove('addBtnClass');
        addBtn.classList.remove('addBtnClassNew');
        addBtn.classList.remove('addBtnClassDarkModeNew');
        addBtn.classList.add('addBtnClassDarkModeNew');  
    }
   }
})
//-----------------------------------------------------------------------


//------ fonction qui permet de définir le mode (dark or light) selon la valeur du localStorage --------
function defineMode(){
    if(localStorage.getItem("mode")==="dark"){
        dark_mode();
        mode_dark_or_light="dark";
    }
    if(localStorage.getItem("mode")==="light"){
        light_mode();
        mode_dark_or_light="light";
    }
}
  
//------------------- apporter les informations à partir du localStorage s'il n'est pas vide ----------
var tab_of_members;
if(localStorage.getItem("table")!=null)
    tab_of_members=JSON.parse(localStorage.getItem("table"));
else tab_of_members=[];


function define_mode(){
if(mode_ajout_modifier==="ajout" && mode_dark_or_light==="light"){
    addBtn.classList.remove('addBtnClassNew');
    addBtn.classList.remove('addBtnClassDarkMode');
    addBtn.classList.remove('addBtnClassDarkModeNew');
    addBtn.classList.add('addBtnClass');
}
if(mode_ajout_modifier==="modifier" && mode_dark_or_light==="light"){
    addBtn.classList.remove('addBtnClass');
    addBtn.classList.remove('addBtnClassDarkMode');
    addBtn.classList.remove('addBtnClassDarkModeNew');
    addBtn.classList.add('addBtnClassNew');  
}
if(mode_ajout_modifier==="ajout" && mode_dark_or_light==="dark"){
    addBtn.classList.remove('addBtnClass');
    addBtn.classList.remove('addBtnClassNew');
    addBtn.classList.remove('addBtnClassDarkModeNew');
    addBtn.classList.add('addBtnClassDarkMode');     
}
if(mode_ajout_modifier==="modifier" && mode_dark_or_light==="dark"){
    addBtn.classList.remove('addBtnClass');
    addBtn.classList.remove('addBtnClassNew');
    addBtn.classList.remove('addBtnClassDarkModeNew');
    addBtn.classList.add('addBtnClassDarkModeNew');  
}
}
define_mode();




var indice_de_membre_a_changer;// _ par défaut _ pour la premiere fois, si on clique, on clique dans l'intension d'ajouter un nouveau membre


// ------------  fonction qui ajoute un nouveau membre en cliquant sur le boutton add -------------------
function ajouter_membre(){
    define_mode();
    if(mode_ajout_modifier==="ajout"){
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
        //lorsque la validation des informations saisies se passe bien
        fullname.value='';// on vide les inputs
        phonenumber.value='';
        slvl.value='';
        divMsgError.classList.add("cacher");// on cache le div d'erreur
        localStorage.setItem("table",JSON.stringify(tab_of_members));
    }}
    if(mode_ajout_modifier==="modifier"){
        if(validation()){
        tab_of_members[indice_de_membre_a_changer].fullname=fullname.value;
        tab_of_members[indice_de_membre_a_changer].phonenumber=phonenumber.value;
        tab_of_members[indice_de_membre_a_changer].slvl=slvl.value;
        annuler_changes();
            //lorsque la validation des informations saisies se passe bien
        fullname.value='';// on vide les inputs
        phonenumber.value='';
        slvl.value='';
        divMsgError.classList.add("cacher");// on cache le div d'erreur
        localStorage.setItem("table",JSON.stringify(tab_of_members));
        }
    }


    afficher();
    mode_ajout_modifier="ajout"; //le mode revient à sa valeur par défaut
    if(mode_dark_or_light==="dark")
    addBtn.style.color="#fff";
    if(mode_dark_or_light==="light")
    addBtn.style.color="#000";
    define_mode();
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
            <td><i onclick="modifier_membre(${i})" class="fa-solid fa-pen iconee" style="color: #03a800;"></i></td>
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
// function vider(){
//     fullname.value='';
//     phonenumber.value='';
//     slvl.value='';
// }
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
    if(existe()){
        divMsgError.classList.remove("cacher");
        divMsgError.innerHTML='Ce nom existe déjà';
        fullname.focus();
        return false;
    }
    if(fullname.value==='' || fullname.value.length>30){
        divMsgError.classList.remove("cacher");
        divMsgError.innerHTML='ajouter un nom approprié';
        fullname.focus();
        return false;
    }
    if(phonenumber.value<0 || phonenumber.value.length>12 || phonenumber.value===''){
        divMsgError.classList.remove("cacher");
        divMsgError.innerHTML='ajouter un numéro de téléphone approprié';
        phonenumber.focus();
        return false;
    }    
    return true;
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

//------------ une fonction qui permet de faire le trie selon le nom ----------
function trier_par_nom(){
    tab_of_members.sort((a,b)=>{
        if(a.fullname>b.fullname) return 1;
        if(a.fullname<b.fullname) return -1;
        else return 0;
    })
    afficher();
}

//------------ une fonction qui permet de faire le trie selon le bonus ----------
function trier_par_bonus(){
    tab_of_members.sort((a,b)=>{
        if(a.bonus>b.bonus) return -1;
        if(a.bonus<b.bonus) return 1;
        else return 0;
    })
    afficher();
}
//------------ une fonction qui permet de modifier un memebre ---------------------

//fonctio qui effectue les modifications nécessaires dans le cas du mode: 'modifier'
function modifier_changes(){
    btnSortBonus.classList.add('cacher');
    btnSortName.classList.add('cacher');
    btnsearch.classList.add('cacher');

    spanAddBtn.classList.add('cacher');
    spanUpBtn.innerHTML='modifier';
    addBtn.style.width='64px';
    if(mode_dark_or_light==="light"){ 
        addBtn.style.backgroundColor='rgb(174, 174, 255)';
    }
    if(mode_dark_or_light==="dark"){  
        addBtn.style.backgroundColor='rgb(0, 0, 156)';
        addBtn.style.color='#fff';
    }
}
//une fonction qui annulle ces changements
function annuler_changes(){
    btnSortBonus.classList.remove('cacher');
    btnSortName.classList.remove('cacher');
    btnsearch.classList.remove('cacher');
    spanAddBtn.classList.remove('cacher');
    spanAddBtn.innerHTML='ajouter';
    spanUpBtn.classList.add('cacher');
    addBtn.style.width='55px';
    if(mode_dark_or_light==="light"){
        addBtn.style.backgroundColor='rgb(199, 227, 157)';
    }
    if(mode_dark_or_light==="dark"){
        addBtn.style.backgroundColor='rgb(69, 114, 0)';
        addBtn.style.color='#000';
    }
}
function modifier_membre(i){
    mode_ajout_modifier="modifier";
    modifier_changes();
    define_mode();
    indice_de_membre_a_changer=i; //récupérer l'indice du membre à changer
    fullname.focus();
    fullname.value=tab_of_members[i].fullname;
    phonenumber.value=tab_of_members[i].phonenumber;
    slvl.value=tab_of_members[i].slvl;
}