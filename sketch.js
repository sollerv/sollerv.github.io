//2016 08 05 viernes
//p5hs udd
//vamos a hacer una elipse
//que siga el mouse




//veamos variables
//el computador es capaz de almacenar datos
//lo podemos hacer en variables
//primero hay que crearlas
//esto se llama DECLARAR
//asi se hace en javascript
var x;

//solo de despues de DECLARAR
//pueden darle un valor
//esto se llama ASIGNAR
diametro = 2;

//hay dos sabores de variables
//existen variables locales y globales
//GLOBALES: DECLARADAS FUERA DE FUNCION
//LOCALES: DECLARADAS DENTRO DE FUNCION

//globales: se pueden usar en cualquier parte
//locales: solo dentro de la funcion
//las funciones tambien se declaran
//luego de declarse, pueden llamarse
//asi se declara una funcion en javascript
function miFuncionBacan() {
  //esto es lo que hace la funcion
  //se le llama cuerpo
}

//ejecutar o llamar la funcion
//miFuncionBacan();




//setup()se ejecuta una vez
//al principio de los tiempos

function setup() {
  //camelCase, UPPERCASE, lowercase
  //(dimensionesHori , dimensiones Ver)
  //dimensiones en px
  createCanvas(windowWidth,windowHeight);
  
  //pintar el fondo
  // background (color)
  // 1:grayscale, 0 es negro, 255 es blanco
  //2: grayscale + alpha
  //3: rgb, redgreenblue, 0 nada, 2555 todo
  //4: rgb + alpha
  //alpha: 0 es transparente, 255 es solido

  background(0, 255, 0);
  
  //variable local x
  var x;
  x = 10;
  
  //variables local y 
  //modo rapido de DECLARAR
  //y asignarle valor inmediatamente
  var y = 10;
  //asignar otro valor
  y = 100;
  
}
  //draw () corre justo despues de setup ()
  //draw se ejecuta 60 veces por segundo
function draw() {
  
  //pintar el fondo
  background(0, 255, 0);
  //dibujamos la elipse
  //miElipse();
  
  //dibujamos muchas elipses
  muchasElipses();
  
}

//declarar funcion nueva
//para dibujar elipse a mi gusto
function miElipse() {
   //definir ancho de figura
  //stroke Weidht(px);
  strokeWeight(10); 

  //definir color del borde
  //stroke(color);
  stroke(0, 0, 255, 255/3);

  //definir color del relleno
  //fill(color);
  //el mio es rojo semitransparente
  fill(255, random(100), 0, 100);
  
  //dibujemos elpise
  //ellipse(posX, posY, width, height)
  //medidas en pixeles
  //usamos variables de p5.js
  //mouseX, mouseY que sabe posMouse
  ellipse(mouseX, mouseY, diametro, diametro);

  //asignarle nuevo valor a diametro
  diametro = diametro + 1;
  diametro = random(100);
  
}

//declarar funcion nueva
//funcion para hacer muchar elipses
//en lugares aleatorios
//de colores aleatorios
function muchasElipses()  {
  
  //for loop
  //for(inicio; condicion; refresco) {}
  for(var i= 0; i < 100; i++) {
    //elipse en posicion aleatoria
    ellipse(random(width), random(height), 100, 100);
  }
  
  
  
  
}