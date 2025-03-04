
let getValue = document.getElementById('inp');
let store = JSON.parse(localStorage.getItem('todo')) || [];

function rander(){
    let list = document.getElementById('list');
    list.innerHTML = "";
    for (let i = 0; i < store.length; i++) {
        list.innerHTML += `
            <li>
                <span>${store[i]}</span> 
                <button  class="edit" onclick="editItem(${i})">Edit</button> 
                <button  class="del" onclick="deleteItem(${i})">Del</button>
            </li>`;
    }
}

function add(){
    if (getValue.value.trim() !== "") {
        store.push(getValue.value);
        localStorage.setItem('todo', JSON.stringify(store));
        rander();
        getValue.value = "";
    } else {
        alert("Input field is empty!");
    }
}

function deleteItem(index) {
    store.splice(index, 1);
    localStorage.setItem('todo', JSON.stringify(store));
    rander();
}

function editItem(index) {
    let newValue = prompt("Edit your item:", store[index]);
    if (newValue !== null && newValue.trim() !== "") {
        store[index] = newValue;
        localStorage.setItem('todo', JSON.stringify(store));
        rander();
    }
}
rander();