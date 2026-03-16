  function agregar(){
                   
                    const fila=document.getElementById("tabla").insertRow();
                    const celda1=fila.insertCell(0);
                    const celda2=fila.insertCell(1);
                    celda1.innerText=document.getElementById("nombre").value;
                    celda2.innerText=document.getElementById("edad").value;
                    document.getElementById("nombre").value="";
                    document.getElementById("edad").value="";
            }