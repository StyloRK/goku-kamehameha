function posicaoativar(){
    goku = document.querySelector(".goku")
    goku.style.visibility = "hidden"

    setTimeout(() => {
        gokucarregando = document.getElementById("gokucarregando").style.visibility = "visible"
    }, 200);
}

function ativarkamehameha(){
    gokucarregando = document.getElementById("gokucarregando").style.visibility = "hidden"
    setTimeout(() => {
        gokucarregando1 = document.getElementById("gokucarregando1").style.visibility = "visible"
        kamehamehacharge = document.getElementById("kamehamehacharge").style.visibility = "visible"
    }, 200);
}

function ativar(){
    resetar1 = document.getElementById("resetar").style.visibility = "hidden"
    kamehamehacharge = document.getElementById("kamehamehacharge").style.visibility = "hidden"
    kamehamehacharge1 = document.getElementById("kamehamehacharge1").style.visibility = "visible"
    kamehameha = document.getElementById("kamehameha")
    kamehameha.play()
    kamehameha.currentTime = 0;
    setTimeout(() => {
        gokucarregando1 = document.getElementById("gokucarregando1").style.visibility = "hidden"
        kamehamehacharge1 = document.getElementById("kamehamehacharge1").style.visibility = "hidden"
        gokukamehameha = document.getElementById("gokukamehameha").style.visibility = "visible"
        kamehameha1 = document.querySelector(".kamehameha1")
        kamehameha1.style.visibility = "visible"
        kamehameha1.classList.add("animacao")

    }, 8000);

    setTimeout(() => {
        resetar1 = document.getElementById("resetar").style.visibility = "visible"
    }, 10000);
}

function resetar(){
    goku = document.querySelector(".goku")
    goku.style.visibility = "visible"
    gokucarregando = document.getElementById("gokucarregando").style.visibility = "hidden"
    gokukamehameha = document.getElementById("gokukamehameha").style.visibility = "hidden"
    gokucarregando1 = document.getElementById("gokucarregando1").style.visibility = "hidden"
    kamehamehacharge = document.getElementById("kamehamehacharge").style.visibility = "hidden"
    kamehameha1 = document.querySelector(".kamehameha1")
    kamehameha1.style.visibility = "hidden"
    kamehameha1.classList.remove("animacao")
    kamehameha = document.getElementById("kamehameha").pause()
    
}