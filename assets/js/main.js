function createGame(player1, hour, player2, grup) {
    return `
    <li>
        <img src="./assets/img/icon-${player1}.svg" title=${player1} alt="Bandeira do ${player1}">
        <strong>${hour}</strong>
        <img src="./assets/img/icon-${player2}.svg" title= ${player2} alt="Bandeira da ${player2}">
    </li>
        <h3>${grup}</h3>
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
                    "20/11",
                    "Domingo",
                    createGame("Catar", "0 x 2", "Equador", "Grupo A")
       ) +
            createCard(
                "21/11",
                "segunda",
                createGame("Inglaterra", "6 x 2", "Irã", "Grupo B") +
                createGame("Senegal", "0 x 2", "Holanda", "Grupo A ") +
                createGame("Estados-Unidos", "1 x 1", "Gales", "Grupo B")
           
       ) +
            createCard(
                "22/11",
                "terça",
                createGame("Argentina", "1 x 2", "Arábia-Saudita", "Grupo C") +
                createGame("Dinamarca", "0 x 0", "Tunísia", "Grupo D") +
                createGame("México", "0 x 0", "Polônia", "Grupo C") + 
                createGame("França", " 4 x 1", "Austrália", "Grupo D") 

        ) + 
            createCard(
                    "23/11",
                    "quarta",
                    createGame("Marrocos", "0 x 0", "Croácia", "Grupo F") +
                    createGame("Alemanha", "1 x 0", "Japão", "Grupo E") +
                    createGame("Espanha", "7 x 0", "Costa-Rica", "Grupo E") +
                    createGame("Bélgica", "1 x 0", "Canadá", "Grupo F")
        ) +
    
            createCard(
                "24/11",
                "quinta",
                createGame("Suíça", "1 x 0", "Camarões", "Grupo G") +
                createGame("Uruguai", "0 x 0", "Coreia-do-Sul", "Grupo H") +
                createGame("Portugal", "3 x 2", "Gana", "Grupo H") + 
                createGame("Brasil", "2 x 0", "Sérvia", "Grupo G")
        ) +
        
            createCard(
                "25/11",
                "sexta",
                createGame("Gales", "0 x 2", "Irã", "Grupo B") +
                createGame("Catar", "1 x 3", "Senegal", "Grupo A") +
                createGame("Holanda", "1 x 1", "Equador", "Grupo A") + 
                createGame("Inglaterra", "0 x 0", "Estados-Unidos", "Grupo B")
        ) + 
            createCard(
                "26/11",
                "sabado",
                createGame("Tunísia", "0 x 1", "Austrália", "Grupo D") +
                createGame("Polônia", "2 x 0", "Arábia-Saudita", "Grupo C") +
                createGame("França", "2 x 1", "Dinamarca", "Grupo D") + 
                createGame("Argentina", "2 x 0", "México", "Grupo C")
        ) +
            createCard(
                "27/11",
                "domingo",
                createGame("Japão", " 0 x 1", "Costa-Rica", "Grupo E") +
                createGame("Bélgica", "0 x 2", "Marrocos", "Grupo F") +
                createGame("Croácia", "4 x 1", "Canadá", "Grupo F") + 
                createGame("Espanha", "1 x 1", "Alemanha", "Grupo E")
        ) +
    
            createCard(
                "28/11",
                "segunda",
                createGame("Camarões", "3 x 3", "Sérvia", "Grupo G") +
                createGame("Coreia-do-Sul", "2 x 3", "Gana", "Grupo H") +
                createGame("Brasil", "1 x 0", "Suíça", "Grupo G") + 
                createGame("Portugal", "2 x 0", "Uruguai", "Grupo H")
        ) + 
                
            createCard(
                "29/11",
                "terça",
                createGame("Equador", "1 x 2", "Senegal", "Grupo A") +
                createGame("Holanda", "2 x 0", "Catar", "Grupo A") +
                createGame("Irã", "0 x 1", "Estados-Unidos", "Grupo B") + 
                createGame("Gales", "0 x 3", "Inglaterra", "Grupo B")
        ) +
    
            createCard(
                "30/11",
                "quarta",
                createGame("Tunísia", "12:00", "França", "Grupo D") +
                createGame("Austrália", "12:00", "Dinamarca", "Grupo D") +
                createGame("Polônia", "16:00", "Argentina", "Grupo C") + 
                createGame("Arábia-Saudita", "16:00", "México", "Grupo C")
        ) +
    
            createCard(
                "01/12",
                "quinta",
                createGame("Croácia", "12:00", "Bélgica", "Grupo F") +
                createGame("Canadá", "12:00", "Marrocos", "Grupo F") +
                createGame("Japão", "16:00", "Espanha", "Grupo E") + 
                createGame("Costa-Rica", "16:00", "Alemanha", "Grupo E")
) +
    
            createCard(
                "02/12",
                "sexta",
                createGame("Coreia-do-Sul", "12:00", "Portugal", "Grupo H") +
                createGame("Gana", "12:00", "Uruguai", "Grupo H") +
                createGame("Sérvia", "16:00", "Suíça", "Grupo G") + 
                createGame("Camarões", "16:00", "Brasil", "Grupo G")
            )

    
    
    
            
