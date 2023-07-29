let  a= document.getElementById("zeroo")
let f=document.getElementById("gon")
f.textContent="Click ON to get blub on and OFF to get it off"
f.style.color="black"
f.style.fontStyle="italic";
f.style.fontSize="30px";
function inn(){
    let b= a.textContent;
    let c= parseInt(b) + 1;
    if(c>0){
        a.style.color ="green";
    }
    else if(c<0){
        a.style.color= "red";
        
    }
    else{
        a.style.color="black";
    }
    a.textContent = c;
}
function re() {
    a.textContent = 0;
    a.style.color="black";
}
function de() {
    let b= a.textContent;
    let c= parseInt(b) - 1;
    if(c>0){
        a.style.color ="green";
    }
    else if(c<0){
        a.style.color= "red";
        
    }
    else{
        a.style.color="black";
    }
    a.textContent=c;

}