var count = 0;

function functionlist(){
    
    count ++;
    
    var textField = document.getElementById("item");
    
    var textNode = document.createTextNode(textField.value);
    // textNode è il testo del nodo, il quale ha come valore ciò che inseriamo nel campo input
    
    var listElements = document.createElement("li");

    var menu = document.getElementById("menu");// id=menu is the UL where our items will appear


// Each listElementss (li) gets an ID made of the "count" number
    
    listElements.setAttribute("id", count);


// Resetting the placeholder after each submission
    
    document.getElementById("item").value = '';


//Creating BUTTONS

    var DoneButton = document.createElement("button");

    var EditButton = document.createElement("button");

    var CancelButton = document.createElement("button");


    CancelButton.setAttribute("class", count);
    EditButton.setAttribute("class", count);

//LI ELEMENTS
    
    listElements.appendChild(textNode);
    menu.appendChild(listElements);
    listElements.className = "lielements";

//BUTTONS
    
//Green Button  (Select/Deselect)
    
    listElements.appendChild(DoneButton);
    DoneButton.innerHTML = "DoneButton";

        DoneButton.onclick = function(){
        listElements.classList.toggle("DoneButtonPressed");
        }

//Blue Button (Edit Button)
    
    listElements.appendChild(EditButton);
    EditButton.innerHTML = "EditButton";

    var buttonSave = document.createElement("button");
    buttonSave.innerHTML = "ButtonSave";
    var target2 = textNode.nodeValue;
    
        
        EditButton.onclick = function(){
            console.log(target2);
            textField.value = target2;
                      
            var inputcontainer = document.getElementById("formdiv");
            buttonSave.setAttribute("class", count);
            inputcontainer.appendChild(buttonSave);

            
            /*console.log(textNode);*/

            //If uncommmented, this line will allow the "Li" item to persist on the UL list
            //till the change has been made on the input line.
            /*textField.onchange = function(){
            var cancel = document.getElementById(CancelButton.className);
            cancel.remove();
            }*/
            
    }
    
    

//Save Button (it saves the changes we made to the list item) BUTTONSAVE 

    buttonSave.onclick = function(){
        let newValue = textField.value;
        
        textNode.nodeValue = newValue;
        this.remove();
        document.getElementById("item").value = '';

    };

//Red Button (Cancel Entry Button)
    
    listElements.appendChild(CancelButton);
    CancelButton.innerHTML = "CancelButton";
        
        CancelButton.onclick = function(){
        var cancel = document.getElementById(CancelButton.className);
        cancel.remove();
        }
}
