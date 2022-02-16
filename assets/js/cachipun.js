let n1 = parseInt(prompt("ingrese la cantidad de veces a jugar"));

 //Genera un número aleatorio entre un rango de enteros
 for (let i = 1; i <= n1; i++){
function patito(minimo, maximo)
{
    let numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );
    return numero;
}

let piedra = 0;
let papel = 1;
let tijera = 2;

let opciones = ["Piedra", "Papel", "Tijera"];

let OpUsuario;
let OpMaquina = patito(0,2);

OpUsuario = prompt("Eliga una opción\nPiedra: 0\nPapel: 1\nTijera: 2", 0);

alert("Elegiste " + opciones[OpUsuario]);
alert("La máquina eligió " + opciones[OpMaquina]);

if(OpUsuario == piedra)
{
    if(OpMaquina == piedra)
    {
        alert("Empate!! Intenta de nuevo");
    }
    else if(OpMaquina == papel)
    {
        alert("Perdiste!! Siga participando ");
    }
    else if(OpMaquina == tijera)
    {
        alert("Ganaste!! ");
    }
}
else if(OpUsuario == papel)
{
    if(OpMaquina == piedra)
    {
        alert("Ganaste!!");
    }
    else if(OpMaquina == papel)
    {
        alert("Empate!! Intenta de nuevo");
    }
    else if(OpMaquina == tijera)
    {
        alert("Perdiste!! Siga participando");
    }
}
else if(OpUsuario == tijera)
{
    if(OpMaquina == piedra)
    {
        alert("Perdiste!! Siga participando");
    }
    else if(OpMaquina == papel)
    {
        alert("Ganaste!!");
    }
    else if(OpMaquina == tijera)
    {
        alert("Empate!! Intenta de nuevo");
    }
}
else
{
    alert("¿Error en su respuesta? intente de nuevo recargando la página");
}
}