//  access input field
const input = document.querySelector('#add-item');

function addItem(){
    const newItemInput=document.getElementById("addItem");
    const itemText=newItemInput.value;

    if(itemText.trim() === ""){
        alert("please enter the item");
        return;
    }

    const itemList=document.getElementById("itemList");
    const li=document.createElement("li");

    li.innerHTML=`${itemText} 
    <span onclick="removeItem(this)"><button id="deleteBtn">Delete</button></span>
     `;

   itemList.append(li);
   
   // Clear the input field
   newItemInput.value="";

}

function removeItem(spanElement){
    const itemList=spanElement.parentNode;
    itemList.parentNode.removeChild(itemList);
}