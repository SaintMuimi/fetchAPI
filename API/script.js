const root = document.getElementById("root")

fetch('https://cat-fact.herokuapp.com/facts/')
    .then(res => res.json())
    .then(data => {

        for(let i=0; i<data.length; i++){
            const paragraph = document.createElement("p")
            paragraph.textContent = data[i].text
            root.appendChild(paragraph)
           
        }
    })

    console.log(root)



console.log(root)