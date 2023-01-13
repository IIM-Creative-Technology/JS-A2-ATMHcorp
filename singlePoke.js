const dexContainer = document.getElementById("milieu");
const dexleftcont  = document.getElementById("gauche");


async function getpokebyid() {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/151`);
        const data = await response.json();

        dexContainer.innerHTML = "";
            dexContainer.innerHTML +=
                `<div id="haut">
                        <h2>${data.name}</h2>
                </div>
                <div id="divImg" >
                    <div id="divImgdrag">
                    <img id="imgPokedrag${data.id}" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png" alt="">
                    </div>
                    <img id="imgPoke" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png" alt="">
                   
                </div>
                
                <div id="bas">
                    <div></div>
                    <div></div>
                    <div></div>
                </div> `;

        dexleftcont.innerHTML = "";
        dexleftcont.innerHTML +=
            `
            <div class="team_element"></div>
            <div class="team_element"></div>
            <div class="team_element"></div>
            <div class="team_element"></div>
            <div class="team_element"></div>
            <div class="team_element"></div> 
`;





            var drag = document.getElementById("divImgdrag");

            drag.draggable = "true";
            drag.addEventListener("dragstart", dragbeg);
            var team = document.querySelectorAll(".team_element");
            for(let element of team){
                element.addEventListener("dragstart", dragbeg)
                element.addEventListener("dragover", autoriserDrop);
                element.addEventListener("drop", drop);
            }



        function dragbeg(event) {
            event.dataTransfer.setData("team", event.target.id);
        }
        function autoriserDrop(event) {
            event.preventDefault();
            event.dataTransfer.dropEffect = "move";
        }
        function drop(event) {
            event.preventDefault();
            var datapoke = event.dataTransfer.getData("team");
            event.target.appendChild(document.getElementById(datapoke));


        }




    } catch (error) {
        dexContainer.innerHTML = `<p>${error.message}</p>`;
    }
}

localStorage.setItem("team_content", dexleftcont);
localStorage.setItem("team_content", JSON.stringify(dexleftcont));

console.log(localStorage)






getpokebyid()









// SHINY

