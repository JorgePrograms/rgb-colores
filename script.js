
const inputRojo=document.getElementById('rojo');
const inputVerde=document.getElementById('verde');
const inputAzul=document.getElementById('azul');


const textoRojo=document.getElementById('texto-rojo');
const textoVerde=document.getElementById('texto-verde');
const textoAzul=document.getElementById('texto-azul');

let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;


textoRojo.textContent = inputRojo.value;
textoVerde.textContent = inputVerde.value;
textoAzul.textContent = inputAzul.value;

const colorear=(rojo,verde,azul)=>{
    const colorRGB=`rgb(${rojo},${verde},${azul})`;
    document.body.style.backgroundColor=colorRGB;
}

inputRojo.addEventListener('change',(e)=>{
    rojo=e.target.value;
    textoRojo.textContent=rojo;
    colorear(rojo,verde,azul);
})
inputVerde.addEventListener('change',(e)=>{
    verde=e.target.value;
    textoVerde.textContent=verde;
    colorear(rojo,verde,azul);
})
inputAzul.addEventListener('change',(e)=>{
    azul=e.target.value;
    textoAzul.textContent=azul;
    colorear(rojo,verde,azul);
})
