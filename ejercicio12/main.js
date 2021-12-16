const contraseña="Spiderman";
   
        let INTENTOS = 3;
         
        
        let acierto=false;
  
        let password;
        for (let i=0;i<3 && !acierto;i++){
            password=prompt("Introduce una contraseña");
  
            
            if (password == contraseña){
                document.write("Enhorabuena");
                console.log("Enhorabuena");
                acierto=true;
            }
          }