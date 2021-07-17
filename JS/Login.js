let correos=["juanito@certus.edu.pe","silvia@certus.edu.pe",];
let contraseñas=["juanito2021","silvia2021",];
let bot=document.getElementById("boton");

function mensaje(){
    let corr=document.getElementById("correo").value;
    let cont=document.getElementById("contraseña").value;
    for(let i in correos){
        if(correos.includes( corr ) && contraseñas.includes( cont )){
            if(corr==correos[i] && cont==contraseñas[i]){
                alert("Bienvenido " + corr + " , usted ingresado de manera correcta")
                window.location="Docentes.html"
                break;
            }
        }else{
            alert("Usted ha ingresado una contraseña o correo incorrecto")
        }
    }
}
bot.addEventListener("click",mensaje)