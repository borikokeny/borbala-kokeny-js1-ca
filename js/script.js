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

    for(let i = 0; i < burgers.length; i++) {
        console.log(burgers[i].name);

        // if(i === 5) {
        //     break;
        // }

        container.innerHTML += `<div class="results">
                                        <h1>${burgers[i].name}</h1>
                                        <h3>${burgers[i].description}</h3>    
                                        <h4>Ingredients: ${burgers[i].ingredients}</h4>
                                        <h5>Restaurant: ${burgers[i].restaurant}</h5>
                                        </div>`;
        }
    }
    catch(error) {
               console.log("An error occured");
               container.innerHTML = errorMessage("Sorry, it is an error on our side:(");
           }
}

getBurger();