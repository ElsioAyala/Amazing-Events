(function(dataEvents) {

    const cardContainer = document.getElementById("container");
    const currentDate = setDate(data.currentDate);

    function setDate(date) {
        const reg = /[-]/g;
        const dateOk = new Date(date.replace(reg, ','));
        return dateOk.getTime();
    }

    const queryString = location.search;
    const params = new URLSearchParams(queryString);
    const id = params.get("id");
 
    const card = dataEvents.find((event) => event._id == id);
    
    function assistenceEvent(){
        if (currentDate > setDate(card.date)){
            return `<b>Assistence:</b> ${card.assistance}`;
        }else{
            return `<b>Estimate Assistence:</b> ${card.estimate}`;
        }
    }
    const assistence = assistenceEvent()

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
                            <td>${assistence}</td>
                            <td><b>Price:</b> $${card.price}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>`;

    cardContainer.innerHTML = templateCard;

    const btnback = document.getElementById('btn-back');
    btnback.addEventListener('click', () => history.back())

})(data.events)