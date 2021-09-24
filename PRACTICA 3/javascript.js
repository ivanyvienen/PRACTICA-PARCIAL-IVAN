var lightState = true;
var textState = true;

function changeColor() {
     var elements = document.getElementsByClassName('color'); // get all elements
     

     if (lightState === false) {
          for(var i = 0; i < elements.length; i++){
               elements[i].style.color = "black";
          }

          document.getElementById('container').style.backgroundColor = "rgb(255 255 255 / 87%)";
          lightState = true;
     } else {
          for(var i = 0; i < elements.length; i++){
               elements[i].style.color = "white";
          }

          document.getElementById('container').style.backgroundColor = "rgb(0 0 0 / 87%)";
          lightState = false;
     }
}

function changeText() {
     if (textState === false) { 
          document.getElementById('model').innerHTML = 'Model S'
          document.getElementById('txt1').innerHTML = 'Máxima concentración en la conducción: sin palancas, ni cambios. El Model S es el mejor automóvil para conducir y el mejor automóvil para ser llevado.'
          document.getElementById('txt2').innerHTML = 'Con una resolución de 2200 x 1300, colores ultra brillantes y reales y una capacidad de respuesta excepcional, la nueva pantalla central es la mejor opción para ver en cualquier lugar.'
          document.getElementById('txt3').innerHTML = 'Pantalla Cinemática de 17 pulgadas'

          document.getElementById('insideImage').src='./assets/interior.jpg';
          document.getElementById('background').style.backgroundImage="url('./assets/background.jpg')";

          textState = true;
     } else {
          document.getElementById('model').innerHTML = 'Model X'
          document.getElementById('txt1').innerHTML = 'Hasta 10 teraflops de potencia de procesamiento permiten jugar a bordo del coche a la par con las consolas más nuevas disponibles en la actualidad. La compatibilidad con el mando inalámbrico te permite jugar desde cualquier asiento.'
          document.getElementById('txt2').innerHTML = 'Carga multidispositivo Bluetooth, inalámbrica y con USB-C para cada pasajero, con suficiente potencia para cargar rápidamente tabletas y computadoras portátiles.'
          document.getElementById('txt3').innerHTML = 'Mantente conectado';
          
          document.getElementById('insideImage').src='./assets/interior2.jpg';
          document.getElementById('background').style.backgroundImage="url('./assets/background2.jpg')";
          textState = false;
     }
}