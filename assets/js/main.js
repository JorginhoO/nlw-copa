function createGame(player1, hour, player2,) {
    return `
    <li>
        <img src="./assets/img/icon-${player1}.svg" title=${player1} alt="Bandeira do ${player1}">
        <strong>${hour}</strong>
        <img src="./assets/img/icon-${player2}.svg" title= ${player2} alt="Bandeira da ${player2}">
    </li>
    
    `
}

let delay = -0.4;
function createCard(date, day, games) {
    delay = delay + 0.4;
    return `
        <div class="card" style="animation-delay: ${delay}s">
            <h2>${date} <span>${day}</span></h2>
            <ul>
                ${games}
            </ul>
        </div>
    `
}


document.querySelector("#cards").innerHTML =
    createCard(
            "24/11",
            "quinta",
            createGame("brazil", "18:00", "serbia")
       ) +
      createCard(
           "28/11",
           "segunda",
           createGame("brazil", "18:00", "serbia")
       ) +
      createCard(
           "02/12",
           "sexta",
           createGame("brazil", "18:00", "serbia") +
           createGame("brazil", "18:00", "serbia") +
           createGame("brazil", "18:00", "serbia")
        ) + 
       createCard(
            "02/12",
            "sexta",
            createGame("brazil", "18:00", "serbia") +
            createGame("brazil", "18:00", "serbia") +
            createGame("brazil", "18:00", "serbia")
        )  
 