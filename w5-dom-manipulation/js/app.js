const print = () => {
    const input = document.getElementById('favchap').value;

    if(input.replace(/\s/g, '') !== ''){
        const listItem = document.createElement("li"); 
        const list = document.getElementById("list")
        const deleteButton = document.createElement('button');
        deleteButton.innerText = '❌';
        const textnode = document.createTextNode(input); 
        listItem.appendChild(textnode); 
        list.appendChild(listItem);
        listItem.appendChild(deleteButton);

        document.getElementById('favchap').value = ''
        
        deleteButton.addEventListener('click', () => {
            list.removeChild(listItem)
            document.getElementById('favchap').focus()
        })

        document.getElementById('favchap').focus()
    } else {
        alert('Please enter a chapter')
    }
}