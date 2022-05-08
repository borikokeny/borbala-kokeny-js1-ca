const resultContainer = document.querySelector(".result");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

console.log(id);

const burgerUrl = "https://burgers1.p.rapidapi.com/burgers/" + id;
const burgerOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'burgers1.p.rapidapi.com',
		'X-RapidAPI-Key': 'dc51b191d2msha6a10125422b4a3p1527dajsn63787a84857a'
	}
};

async function getBurgers() {

    try {
        const response = await fetch(burgerUrl, burgerOptions);

        const details = await response.json()
        
        resultContainer.innerHTML = "";
       
        resultContainer.innerHTML += `<div class="results">
                                                <h2>${details.name}</h2>
                                                <h3>${details.description}</h3>    
                                                <h4>Ingredients: ${details.ingredients}</h4>
                                                <h5>Restaurant: ${details.restaurant}</h5></div>`;
    }
    catch(error) {
        console.log("An error occured");
        resultContainer.innerHTML = errorMessage("Sorry, it is an error on our side:(");
    }
}

getBurgers(); 
