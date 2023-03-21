const queryString = location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url = "https://mindhub-xj03.onrender.com/api/amazing";
/*const url = "./scripts/amazing.json";*/

loadEvents = async () => {
    const response = await fetch(url);
    const data = await response.json();

    const currentDate = setDate(data.currentDate);
    const card = data.events.find((event) => event._id == id);
    const assistance = assistanceEvent(card.date, currentDate, card);
    showCard(card, assistance);
}
loadEvents()

const cardContainer = document.getElementById("container");

function setDate(date) {
    const reg = /[-]/g;
    const dateOk = new Date(date.replace(reg, ','));
    return dateOk.getTime();
}

function assistanceEvent(eventDate, currentDate, card) {
    if (currentDate > setDate(eventDate)) {
        return `<b>Assistence:</b> ${card.assistance}`;
    } else {
        return `<b>Estimate Assistence:</b> ${card.estimate}`;
    }
}

function showCard(card, assistance) {
    let templateCard = `<div class="card mb-3 mt-5 mx-auto" style="max-width: 1000px;">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="${card.image}" class="details-img" alt="detail image">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${card.name}</h5>
                    <p class="card-text">${card.description}</p>
                    <table class="table table-borderless">
                        <tr>
                            <td><b>Category:</b> ${card.category}</td>
                            <td><b>Date:</b> ${card.date}</td>
                        </tr>
                        <tr>
                            <td><b>Place:</b> ${card.place}</td>
                            <td><b>Capacity:</b> ${card.capacity}</td>
                        </tr>
                        <tr>
                            <td>${assistance}</td>
                            <td><b>Price:</b> $${card.price}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>`;

    cardContainer.innerHTML = templateCard;
}

const btnback = document.getElementById('btn-back');
btnback.addEventListener('click', () => history.back())

