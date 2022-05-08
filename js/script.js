const url = "https://burgers1.p.rapidapi.com/burgers";
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'burgers1.p.rapidapi.com',
		'X-RapidAPI-Key': 'dc51b191d2msha6a10125422b4a3p1527dajsn63787a84857a'
	}
};

const container = document.querySelector(".results");

async function getBurger() {

    try {
        const response = await fetch(url, options);
        const burgers = await response.json()

        console.log(burgers);

        container.innerHTML = "";

        burgers.forEach(function(burger) {
            container.innerHTML += `<a href="details.html?id=${burger.id}" class="results">
            <h1>${burger.name}</h1>
            <h3>${burger.description}</h3>    
            <h4>Ingredients: ${burger.ingredients}</h4>
            <h5>Restaurant: ${burger.restaurant}</h5>
            </a>`;
        });
        
    }
    catch(error) {
        console.log(error);
        container.innerHTML = errorMessage("Sorry, it is an error on our side:(");
    }
}

getBurger();