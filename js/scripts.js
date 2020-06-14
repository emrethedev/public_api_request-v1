console.info("js/scripts.js is attached to index.html");

// Making the crtUsrGallery more versatile and avoiding broken images. The value will be used as a fallback if cardImgSrc is undefined. (below)
const defaultCardImg = "https://placehold.it/125x125";

/**
 * Takes passed in element, and appends it to source as child.
 * i.e. divGallery.appendChild(divCard);
 */
const appendify = (source, element) => source.appendChild(element);

/**
 * Creates a new element with the passed argument.
 * i.e. document.createElement("div");
 */
const crtElmnt = element => document.createElement(element);

/**
 * Takes passed arguments and generates cards with employee information
 */
const crtUsrGallery = (firstName, lastName, email, city, state, cardImgSrc = defaultCardImg ) => {

    // Creating & targeting Gallery Markup (index.html):
    const divGallery = document.querySelector("#gallery");

    // <div class="card">
    const divCard = crtElmnt("div");
    divCard.className = "card";
    appendify(divGallery, divCard);

    // <div class="card-img-container"> // child of divCard
    const divCardImg = crtElmnt("div");
    divCardImg.className = "card-img-container";
    appendify(divCard, divCardImg);

    /* <img class="card-img" src="https://placehold.it/90x90" alt="profile picture"> // child of divCardImg
    */
    const cardImg = crtElmnt("img");
    cardImg.className = "card-img";
    cardImg.src = `${cardImgSrc}`;
    cardImg.alt = "profile picture";
    appendify(divCardImg, cardImg);

    // <div class="card-info-container">
    const divCardInfo = crtElmnt("div");
    divCardInfo.className = "card-info-container";
    appendify(divCard, divCardInfo);

    // <h3 id="name" class="card-name cap">first last</h3> // child of divCardInfo
    const h3Name = crtElmnt("h3");
    h3Name.id = "name";
    h3Name.className = "card-name cap";
    h3Name.textContent = `${firstName} ${lastName}`;
    appendify(divCardInfo, h3Name);

    // <p class="card-text">email</p> // child of divCardInfo
    const pCardText = crtElmnt("p");
    pCardText.className = "card-text";
    pCardText.textContent = `${email}`;
    appendify(divCardInfo, pCardText);

    // <p class="card-text cap">city, state</p> // child of divCardInfo
    const pCrdTxtCap = crtElmnt("p");
    pCrdTxtCap.className = "card-text cap";
    pCrdTxtCap.textContent = `${city}, ${state}`;
    appendify(divCardInfo, pCrdTxtCap);

}

// Creating & targeting Modal Markup (index.html):
const bodyTag = document.querySelector("body");

// <div class="modal-container">
const divModalCntnr = crtElmnt("div");
divModalCntnr.className = "modal-container";
divModalCntnr.hidden = true;
appendify(bodyTag,divModalCntnr);

// <div class="modal"> // child of divModalCntnr
const divModal = crtElmnt("div");
divModal.className = "modal";
appendify(divModalCntnr, divModal);

// <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button> // child of divModal
const btnModalClose = crtElmnt("button");
btnModalClose.type = "button";
btnModalClose.id = "modal-close-btn";
btnModalClose.className = "modal-close-btn";
btnModalClose.innerHTML = `<strong>X</strong>`;
appendify(divModal, btnModalClose);

// <div class="modal-info-container"> // child of divModal
const divModalInfoCntnr = crtElmnt("div");
divModalInfoCntnr.className = "modal-info-container";
appendify(divModal, divModalInfoCntnr);

// <img class="modal-img" src="https://placehold.it/125x125" alt="profile picture"> // child of divModalInfoCntnr
const imgModalPic = crtElmnt("img");
imgModalPic.className = "modal-img";
imgModalPic.src = defaultCardImg;
imgModalPic.alt = "profile picture";
appendify(divModalInfoCntnr,imgModalPic);

// <h3 id="name" class="modal-name cap">name</h3> // child of divModalInfoCntnr
const h3NameModal = crtElmnt("h3");
h3NameModal.id = "name"
h3NameModal.className = "modal-name cap";
h3NameModal.textContent = `firstName lastName`;
appendify(divModalInfoCntnr, h3NameModal);

// <p class="modal-text">email</p> // child of divModalInfoCntnr
const pModalTxtEmail = crtElmnt("p");
pModalTxtEmail.className = "modal-text";
pModalTxtEmail.textContent = `email`;
appendify(divModalInfoCntnr, pModalTxtEmail);

// <p class="modal-text cap">city</p> // child of divModalInfoCntnr
const pModalTxtCity = crtElmnt("p");
pModalTxtCity.className = "modal-text cap";
pModalTxtCity.textContent = `city`;
appendify(divModalInfoCntnr, pModalTxtCity);

// <hr> // child of divModalInfoCntnr
const hrTag = crtElmnt("hr");
appendify(divModalInfoCntnr, hrTag);

// <p class="modal-text">(555) 555-5555</p> // child of divModalInfoCntnr
const pModalTxtPhone = crtElmnt("p");
pModalTxtPhone.className = "modal-text";
pModalTxtPhone.textContent = "(555) 555-5555";
appendify(divModalInfoCntnr, pModalTxtPhone);

// <p class="modal-text">123 Portland Ave., Portland, OR 97204</p> // child of divModalInfoCntnr
const pModalTxtAddress = crtElmnt("p");
pModalTxtAddress.className = "modal-text";
pModalTxtAddress.textContent = "123 Portland Ave., Portland, OR 97204";
appendify(divModalInfoCntnr, pModalTxtAddress);

// <p class="modal-text">Birthday: 10/21/2015</p> // child of divModalInfoCntnr
const pModalTxtBirthday = crtElmnt("p");
pModalTxtBirthday.className = "modal-text";
pModalTxtBirthday.textContent = "10-21-2015";

appendify(divModalInfoCntnr, pModalTxtBirthday);

// Event Listener for Button Close
btnModalClose.addEventListener("click", () => {
    
    divModalCntnr.hidden = true;

})

// The source where employeeNum amount/count employees will be pulled from:
let employeeNum = 12; // Default: 12
let employeeSrc = `https://randomuser.me/api/?nat=us&results=${employeeNum}`;
console.info(`To be fetched: ${employeeNum} employee(s), from ${employeeSrc}`);

// Fetching the data from employeeSrc
fetch(employeeSrc)
    .then( response => response.json() )
    .then(data => {

        console.log(data.results)
        data.results.map( employee  => {
            
            crtUsrGallery(employee.name.first, employee.name.last, employee.email, employee.location.city, employee.location.state, employee.picture.medium);
        }) 

        // Adding Event Listeners for Every Card
        const allCards = document.querySelectorAll(".card");

        for ( let i = 0; i < allCards.length; i++ ) {

            allCards[i].addEventListener("click", () => {
            
            imgModalPic.src = data.results[i].picture.large;
            h3NameModal.textContent = `${data.results[i].name.first} ${data.results[i].name.last}`;
            pModalTxtEmail.textContent = data.results[i].email;
            pModalTxtCity.textContent = data.results[i].location.city;
            pModalTxtPhone.textContent = data.results[i].phone;
            pModalTxtAddress.textContent = `${data.results[i].location.street.number} ${data.results[i].location.street.name}, ${data.results[i].location.state} ${data.results[i].location.postcode}`;

            // Processing birth date
            // i.e from 1993-07-20T09:44:18.674Z to 07-20-93
            let dob = data.results[i].dob.date;
            dob = `${dob.toString().substring(0,10)}`;
            dob = `${dob.slice(4)}-${dob.slice(2, 4)}`;
            dob = `${dob.substring(1)}`;
            pModalTxtBirthday.textContent = `Birthday: ${dob}`;

            divModalCntnr.hidden = false;

        })
        }
    });