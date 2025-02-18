function add() {
    let getInp = document.getElementById('inp');

    let getValue = getInp.value
    if (getValue === "") {
        alert('Please Enter an word')
        return;
    }

    let createParent = document.createElement('ul');

    let createChild = document.createElement('li');
    createParent.appendChild(createChild)
 
    createChild.innerHTML = `<span>${getValue}</span><button onclick="edit()" class="edit">Edit</button><button onclick="del()" class="del">Del</button> `   
    
   

    console.log(createChild);
    

    let getId = document.getElementById('list');
    getId.appendChild(createParent)

    console.log(getId);

    getInp.value = ""
    
}

function edit() {
    let changeWord = prompt("Enter word")
    let inp = document.getElementById('inp')
    let value = inp.value

   if(value == ""){
   let change = value = changeWord
   document.body.childNodes[3].lastChild.childNodes[0].childNodes[0].innerText = change;
   console.log(change);
   
   }else{
    alert('Side issues')
   }

   
   
}

function del() {
   let delId = document.getElementById('list')
   delId.remove()
}