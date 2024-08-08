/*Name this external file gallery.js*/

function upDate(previewPic){
    
    //  1) CCambia la url para la imgen de fonfo del div con el id = "image"

     document.getElementById('image').style.backgroundImage = "url("+ previewPic.src + ")"; 

     
      //2) cambia el texto para el div con la id = "image" 
     
      document.getElementById ('image').innerHTML = previewPic.alt;
    
    
      }
  
      function unDo(){
        document.getElementById('image').style.backgroundImage  = "url('')";
        

      
      //1) Actualiza la url para la imgen de fondo del div con la id = "image" 
     // vuelve a la imagen original.  

      document.getElementById('image').style.backgroundImage  = "url('')";

     // 2) cambia el texto del div con id ="image" 
      

    document.getElementById('image').innerHTML = "Hover over an image below to display here."
          
      }