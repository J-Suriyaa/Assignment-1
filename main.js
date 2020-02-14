//Java document
function NewElement(){

    var li = document.createElement('li');
    var input = document.getElementById('input').value;
    var textNode = document.createTextNode(input);
    var removeButton = document.getElementsByClassName('close');
    li.appendChild(textNode);

    //Giving an alert message to the user to do valid inputs.
    if (input=== ''){   
        alert('The text field cannot be empty!!')
    }
    else
    {
        document.getElementById('list').appendChild(li);
    }

    //making the text field empty when a new item is added tot he list.
    document.getElementById('input').value='';

    //creating the checkbox
    var checkBox = document.createElement('INPUT');
    checkBox.setAttribute('type', 'checkbox');
    li.appendChild(checkBox);

    //inserts a line through whrn the checkbox in clicked
var listItem = document.querySelector('li');
listItem.addEventListener('click', function(event)
 {
  if (event.target.tagName === 'LI')
   {
    event.target.classList.toggle('checked');
  }
},
 false);


    
    //creating remove or delete button
    var remove = document.createElement('Button');
    var txt = document.createTextNode('Remove');
    remove.className = 'close';
    remove.appendChild(txt);
    li.appendChild(remove);

    for(i=0; i < removeButton.length; i++){
        removeButton[i].onclick = function(){
            var Div = this.parentElement;
            Div.style.display = 'none'; 

        }

    }


};


