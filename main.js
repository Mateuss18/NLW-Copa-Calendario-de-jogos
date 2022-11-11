function createGame(player1, hour, player2) {
    return `
        <li>
            <img
                src="./assets/icon-${player1}.svg"
                alt="Bandeira do ${player1}"
            />
            <strong>${hour}</strong>
            <img
                src="./assets/icon-${player2}.svg"
                alt="Bandeira da ${player2}"
            />
        </li>
    `
}

function createCard(date, day, games) {
    return `
        <div class="card">
            <h2>${date} <span>${day}</span></h2>

            <ul>
                ${games}
            </ul>
        </div>
    `
}

document.querySelector('#cards').innerHTML =
    createCard('20/11', 'domingo', createGame('qatar', '13:00', 'ecuador')) +
    createCard(
        '21/11',
        'segunda',
        createGame('qatar', '13:00', 'ecuador') +
            createGame('qatar', '13:00', 'ecuador')
    ) +
    createCard('24/11', 'quinta', createGame('brazil', '16:00', 'serbia')) +
    createCard(
        '28/11',
        'segunda',
        createGame('switzerland', '13:00', 'brazil') +
            createGame('portugal', '16:00', 'cameroon')
    ) +
    createCard('02/12', 'sexta', createGame('brazil', '16:00', 'serbia'))

$('#cards').slick({
    rows: 2,
    gap: 10,
    dots: false,
    arrows: true,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2
})
