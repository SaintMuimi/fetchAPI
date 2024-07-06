const root = document.getElementById("root")

fetch('https://cat-fact.herokuapp.com/facts/')
    .then(res => res.json())
    .then(data => {

        for(let i=0; i<data.length; i++){
            const paragraph = document.createElement("p")
            paragraph.textContent = data[i].text
            const label = document.createElement('label');
            const  checkbox = document.createElement('input');
            root.appendChild(paragraph)
            root.appendChild(checkbox)

            checkbox.type = "checkbox";
            checkbox.name = "name";
            checkbox.value = data[i].status.verified;
            checkbox.id = "id";
            checkbox.checked = data[i].status.verified;
            
            label.textContent = "verified" ;
            root.appendChild(label);
            
        }
    } )

    console.log(root)



console.log(root)