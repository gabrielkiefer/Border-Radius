let enviar = document.querySelector(".btn-enviar");
let resetar = document.querySelector(".btn-resetar");

enviar.onclick = function mudarValores(){

    let TopLeft = document.getElementById("top-left").value;
    let TopRight = document.getElementById("top-right").value;
    let BottomLeft = document.getElementById("bottom-left").value;
    let BottomRight = document.getElementById("bottom-right").value;
    let quadrado = document.getElementById("quadrado");

    let change_tl = quadrado.style.borderTopLeftRadius = TopLeft + "px";
    let change_tr = quadrado.style.borderTopRightRadius = TopRight + "px";
    let change_bl = quadrado.style.borderBottomLeftRadius = BottomLeft + "px";
    let change_br = quadrado.style.borderBottomRightRadius = BottomRight + "px";

    return change_bl, change_br, change_tr, change_tl;
}

resetar.onclick = function resetarValores(){

    let reset = quadrado.style.borderRadius = "0px";

    document.getElementById("top-left").value = "0";
    document.getElementById("top-right").value = "0";
    document.getElementById("bottom-left").value = "0";
    document.getElementById("bottom-right").value = "0";


    return reset;

}

