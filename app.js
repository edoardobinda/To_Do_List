var count = 0;

function functionlist(){
    
    count ++;
    var textField = document.getElementById("item");
    var textNode = document.createTextNode(textField.value);// textNode is the node title, that has a value corresp.ing to the input we give
   
if (textField.value.length !== 0){

    var listElements = document.createElement("li");
    var spanElement = document.createElement("span");
    var menu = document.getElementById("menu");// id=menu is the UL where our items will appear

// Each listElementss (li) gets an ID made of the "count" number
    
    listElements.setAttribute("id", count);

// Resetting the placeholder after each submission
    
    document.getElementById("item").value = '';

//Creating BUTTONS

    var DoneButton = document.createElement("div");

    var EditButton = document.createElement("div");

    var CancelButton = document.createElement("div");

    DoneButton.setAttribute("class", count);
    CancelButton.setAttribute("class", count);
    EditButton.setAttribute("class", count);

//LI ELEMENTS

    spanElement.appendChild(textNode);
    listElements.appendChild(spanElement); 
    menu.appendChild(listElements);
    listElements.className = "lielements";

//BUTTONS 
    
//Green Button  (Select/Deselect)
    
    listElements.appendChild(DoneButton);
    DoneButton.innerHTML = "";
    DoneButton.setAttribute("class", "checksign");

        DoneButton.onclick = function(){
            console.log(spanElement);
            this.classList.toggle("DoneButtonPressed");
            spanElement.classList.toggle("DoneButtonPressed");
        }

//Blue Button (Edit Button)
    
    listElements.appendChild(EditButton);
    EditButton.classList.add("editsign");
    
    var buttonSave = document.createElement("button");
    buttonSave.innerHTML = "ButtonSave";
    var target2 = textNode.nodeValue;
    
        EditButton.onclick = function(){
            buttonSave.setAttribute("id", "prov");
            if (document.contains(document.getElementById("prov"))){
                let thisLi = document.getElementById(this.classList[0]);
                let thisLitext = thisLi.firstChild.textContent;
                textField.value = thisLitext;
                document.getElementById("prov").remove();
                var inputcontainer = document.getElementById("formdiv");
                buttonSave.setAttribute("class", count);
                inputcontainer.appendChild(buttonSave);}
            
            else { 
            buttonSave.setAttribute("id", "prov");  
            let thisLi = document.getElementById(this.classList[0]);
            let thisLitext = thisLi.firstChild.textContent;
            textField.value = thisLitext;
                      
            var inputcontainer = document.getElementById("formdiv");
            buttonSave.setAttribute("class", count);
            inputcontainer.appendChild(buttonSave);}
            }
    
//BUTTONSAVE (update the current Li text)

    buttonSave.onclick = function(){
        let newValue = textField.value;
        textNode.nodeValue = newValue;
        this.remove();
        document.getElementById("item").value = '';
    };

//Red Button (Cancel Entry Button)
      
    listElements.appendChild(CancelButton);
    CancelButton.classList.add("cancelsign");
    
        CancelButton.onclick = function(){
        buttonSave.remove();     
        var cancel = document.getElementById(CancelButton.classList[0]);
        cancel.remove();
        document.getElementById("prov").remove();
        document.getElementById("item").value = '';
        }

}
else {
    alert("Input cannot be blank!");
}
}

// CLEAR FUNCTION TO ERASE PRESENT TO-DO-LIST
function functionclear(){
    document.getElementById("menu").innerHTML = "";
    document.getElementById("item").value = '';
    document.getElementById("prov").remove();
}
