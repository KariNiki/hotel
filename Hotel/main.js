let ar=3600;

function arfrissi(){
    let ara=document.getElementById("ara");
    let db=document.getElementById("szam").value;
    let ej=document.getElementById("nap").value;

    ara.innerHTML = ar * db * ej + " Ft";
}
function alerti(){
    if(ara.innerHTML)
    alert('Foglalását rögzítettük!')
    else
    alert('Válassza ki a személyek és éjszakák számát!')
}