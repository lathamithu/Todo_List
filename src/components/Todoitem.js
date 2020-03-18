
import React from 'react';
import ReactDOM from 'react-dom';

function newItem(){
    
    var item = document.getElementById("input").value;
    var ul = document.getElementById("lii");
    var li = document.createElement("lii");
    li.appendChild(document.createTextNode(item));
    ul.appendChild(li);
    document.getElementById("input").value = "";
    li.onclick = removeItem;
    
}
function removeItem(e) {
    e.target.parentElement.removeChild(e.target);
  }
 
function Item(e)
{
    document.body.onkeyup = function(e) 
    {
      if (e.keyCode == 13)
      {
          if (document.getElementById("input").value === "") 
              return;
          else
          newItem(e);
      }
    }
   
}

export default Item;