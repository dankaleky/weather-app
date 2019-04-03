let fetchedCaracters = []

const addOptions = peopleObjs => {
  console.log( peopleObjs )
  let select = document.getElementById("characters")

  peopleObjs.forEach( (person, index) => {
    let option = document.createElement("option")
    option.value = index
    option.innerText = person.name
    select.appendChild( option )
  })
}

fetch("https://swapi.co/api/people")
  .then( res => res.json() )
  .then( data => {
    addOptions(data.results)
    fetchedCaracters = data.results
  })

// --------------- Show character info on select (change)
const showCharacter = event => {
  let section = document.querySelector("section:last-of-type")
section.children[0].innerHTML = ""

  let attrs = ["name", "birth_year", "eye_color", "hair_color", "height"]
  let character = fetchedCaracters[event.target.value]
  let dl = document.querySelector("dl")

  attrs.forEach( attr => {
    let dt = document.createElement("dt")
    dt.style.textTransform = "capitalize"
    let dd = document.createElement("dd")
    dt.innerText = attr.replace("_", " ")
    dd.innerText = character.[attr]
    dl.appendChild( dt )
    dl.appendChild( dd )
  })

  section.classList.remove("d-none")
}

let select = document.getElementById("characters")
select.addEventListener("change", showCharacter )

//   <dl>
//     <dt>Name:</dt>
//     <dd>Leia</dd>
//   </dl>
