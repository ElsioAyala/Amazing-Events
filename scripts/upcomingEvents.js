const cardsContainer = document.getElementById("cards");
const currentDate = setDate(data.currentDate);
const upcomingEvents = setUpcomingEvents(data.events);
const cardsGenerated = createCards(upcomingEvents);
cardsContainer.innerHTML = cardsGenerated;


function setDate(date) {
    const reg = /[-]/g;
    const dateOk = new Date(date.replace(reg, ','));
    return dateOk.getTime();
}

function setUpcomingEvents(arrayDataEvents) {
    let arrayUpcomingEvents = arrayDataEvents.filter(event => setDate(event.date) > currentDate);
    return arrayUpcomingEvents;
}


function createCards(arrayUpcomingEvents) {
    let cardContent = ``;
    arrayUpcomingEvents.forEach(event => {
        cardContent += `
            <div class="col">
            <div class="card h-100">
                <img src="${event.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${event.name}</h5>
                    <p class="card-text">${event.description}</p>
                </div>
                <div class="card-footer d-flex justify-content-between">
                    <div class="card-price">$${event.price}</div>
                    <a class="card-moreInfo" href="./details.html" target="_blank">More Info</a>
                </div>
            </div>
            </div>`;
    });
    return cardContent;
}




