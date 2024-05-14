fetch("data.json").then(res => res.json()).then(data => {
    console.log(data);
    data.forEach(country => {
        CreateCard(country);
    })
})
function CreateCard(country) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
    <div class="flag">
        <img src="${country.flag}" alt="">
    </div>
    <div class="info">
        <h1>${country.name}</h1>
        <p><strong>Native Name:</strong> ${country.nativeName}</p>
        <p><strong>Population:</strong> ${country.population}</p>
        <p><strong>Region:</strong> ${country.region}</p>
        <p><strong>Sub Region:</strong> ${country.subregion}</p>
        <p><strong>Capital:</strong> ${country.capital}</p>
        <p><strong>Top Level Domain:</strong> ${country.topLevelDomain}</p>
        <p><strong>Currencies:</strong> ${country.currencies}</p>
        <p><strong>Languages:</strong> ${country.languages}</p>
    </div>
    `;
    document.querySelector(".countries").appendChild(card);
}