// Getting the id of the character through the url
const Id =  new URLSearchParams(window.location.search).get('character');
console.log(Id)
// Creating Url
const url = `http://gateway.marvel.com/v1/public/characters/${Id}?&ts=1&apikey=6d47a63ab8ed920ce1fcc082d0ac903f&hash=e02da18fd84011b0c9b6ff78ade4ec2f`

// Calling the api through url
async function char(url){
    const res = await fetch(url)
    const data = await res.json()
    // calling hte renderCharacter function to render all the details of the user
    renderCharacter(data.data.results)
}
char(url)


// Render Character function
function renderCharacter(data){

    // Character Name
    const name = document.getElementById('charName')
    name.innerHTML = data[0].name

    // Image render
    const img = document.getElementById('img')
    img.setAttribute('src',`${data[0].thumbnail.path}.jpg`)
    
    // Comics List render
    const comicsOl = document.getElementById('comicsOl')
    for(let i=0;i<data[0].comics.items.length;i++){
        let li = document.createElement('li')
        li.innerHTML = `

                    ${data[0].comics.items[i].name}

                    `
        comicsOl.append(li)
    }

    // Events List Render
    const evenetsOl = document.getElementById('eventsOl')
    for(let i=0;i<data[0].events.items.length;i++){
        let li = document.createElement('li')
        li.innerHTML = `

                ${data[0].events.items[i].name}

        `
        evenetsOl.append(li)
    }

    // Series List Render
    const seriesOl = document.getElementById('seriesOl')
    for(let i=0;i<data[0].series.items.length;i++){
        let li = document.createElement('li')
        li.innerHTML = `

                ${data[0].series.items[i].name}

        `
        seriesOl.append(li)
    }

    // Stories List Render
    const storiesOl = document.getElementById('storiesOl')
    for(let i=0;i<data[0].stories.items.length;i++){
        let li = document.createElement('li')
        li.innerHTML = `

                ${data[0].stories.items[i].name}

        `
        storiesOl.append(li)
    }
}