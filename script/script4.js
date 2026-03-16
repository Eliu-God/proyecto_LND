 function agregarElemento(){
                const itemText=document.getElementById("item").value;
                const listItem = document.createElement("li");
                listItem.innerText=itemText;
                document.getElementById("lista").appendChild(listItem);

                document.getElementById("item").value=""
            }