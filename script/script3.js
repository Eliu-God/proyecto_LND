function ocultarMostrar(){
                if(document.getElementById("color").className=="mostrar")
                {   document.getElementById("color").className="ocultar";
                    document.getElementById("boton").innerText="MOSTRAR";
                    
                }
                else
                {
                    document.getElementById("color").className="mostrar";
                    document.getElementById("boton").innerText="OCULTAR";
                }
            }