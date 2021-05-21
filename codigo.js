
const img = document.querySelector("#img");
const accesorio = document.querySelector("#accesorio");
const price = document.querySelector("#price");
let mySwitch = document.querySelector("#mySwitch");
const slider = document.querySelector("#slider");


/*Paso 2: Modificar vistas y precio por mes */

function printaccesorio(){
    if(slider.value == "0"){
        accesorio.textContent = "RASCADOR";
        price.textContent = "100";
        img.setAttribute('src', 'img/rascador.jpg');


    }else if(slider.value == "25"){
        accesorio.textContent = "BANDANA";
        price.textContent = "11";
        img.setAttribute('src', 'img/bandanaPerro.jpg');

    }else if(slider.value == "50"){
        accesorio.textContent = "GUANTE";
        price.textContent = "9";
        img.setAttribute('src', 'img/guante.jpg');

    }else if(slider.value == "75"){
        accesorio.textContent = "GORRO";
        price.textContent = "10";
        img.setAttribute('src', 'img/gorro.jpg');

    }else if(slider.value == "100"){
        accesorio.textContent = "PELOTA";
        price.textContent = "9";
        img.setAttribute('src', 'img/pelota.jpg');
    }
}

/*Paso 1: Animar fondo barra slider */

slider.addEventListener("input",function(){
    let x = slider.value;
    // let color = "linear-gradient(90deg, hsl(174, 86%, 45%) " + x + "%, hsl(0, 0%, 90%) " + x + "%);"
    let color = `linear-gradient(90deg, hsl(242, 56%, 60%) ${x}%, hsl(0, 0%, 90%) ${x}%)`;
    slider.style.background = color;

    printaccesorio()

    if(mySwitch.checked == true){
        let x = price.textContent*0.10;
        price.textContent = price.textContent - x;
        console.log(x);

    }else{
        printaccesorio()
    }
   
});





/*Paso 3: Descuento al activar el ckeckbox */

mySwitch.addEventListener("input", function(){

    if(mySwitch.checked == true){
        let x = price.textContent*0.10;
        price.textContent = price.textContent - x;
        console.log(x);

    }else{
        printaccesorio()
    }
   
});