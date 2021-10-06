var count = 0;

function functionlist(){

    var a = count ++;
    var item = document.getElementById("item");
    var newItem = document.createTextNode(item.value);
    var newElement = document.createElement("li");

// Each newElements (li) gets an ID made of the "count" number
    
    newElement.setAttribute("id", count);

// Resetting the placeholder after each submission
    
    document.getElementById("item").value = '';

//Creating BUTTONS

    var button1 = document.createElement("button");

    var button2 = document.createElement("button");

    var button3 = document.createElement("button");

    button3.setAttribute("class", count);
    button2.setAttribute("class", count);

//LI ELEMENTS
    
    newElement.appendChild(newItem);
    menu.appendChild(newElement);
    newElement.className = "lielements";

//BUTTONS
    
//Green Button  (Select/Deselect)
    
    newElement.appendChild(button1);
    button1.innerHTML = "Button1";

        button1.onclick = function(){
        newElement.classList.toggle("button1Pressed");
        }

//Blue Button (Edit Button)
    
    newElement.appendChild(button2);
    button2.innerHTML = "Button2";

        button2.onclick = function(){
            target2 = newItem.nodeValue;
            item.value = target2;

            //If uncommmented, this line will allow the "Li" item to persist on the UL list
            //till the change has been made on the input line.

            /*item.onchange = function(){*/
                
            var cancel = document.getElementById(button3.className);
        cancel.remove()
        }

//Red Button (Cancel Entry Button)
    
    newElement.appendChild(button3);
    button3.innerHTML = "Button3";
        
        button3.onclick = function(){
        var cancel = document.getElementById(button3.className);
        cancel.remove();
        }
}

