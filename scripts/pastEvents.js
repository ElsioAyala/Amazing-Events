const cardsContainer = document.getElementById("cards");
const currentDate = setDate(data.currentDate);
const cardsGenerated = createCards(data.events);
cardsContainer.innerHTML = cardsGenerated;


function setDate(date) {
    const reg = /[-]/g;
    const dateOk = new Date(date.replace(reg, ','));
    return dateOk.getTime();
}


function createCards(arrayDataEvents) {
    let cardContent = ``;
    for (const event of arrayDataEvents) {
        const eventDate = setDate(event.date);
        if (eventDate < currentDate) {
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
        }
    }
    return cardContent;
}


