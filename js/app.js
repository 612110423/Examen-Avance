const cardsMusic = document.getElementById("cards")
const discoArtist = document.getElementById("localizacion").content
const fragment = document.createDocumentFragment()

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4befa23202msh1c9afdcf0351523p1fac96jsnf982fc74322c',
		'X-RapidAPI-Host': 'ip-geo-location.p.rapidapi.com'
	}
};

fetch('https://ip-geo-location.p.rapidapi.com/ip/check?format=json', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));