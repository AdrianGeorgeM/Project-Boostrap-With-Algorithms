let tags = [];

const searchFilter = document.getElementById('searchFilter');
const items = document.getElementById('items');

const filterByCategory = (category, recipeProp) => {
	let tagArray = tags.filter((tag) => tag.category === category).map((r) => r.name);
	for (let i = 0; i < recipes.length; i++) {
		if (cards[i].classList.contains('hide') === false) {
			let matchs = [];
			for (let tag of tagArray) {
				matchs.push(recipes[i][recipeProp].includes(tag));
			}
			if (matchs.includes(false)) {
				cards[i].classList.add('hide');
			}
		}
	}
};

const functionSearch = () => {
	const filter = searchFilter.value.toUpperCase();
	const cards = items.getElementsByClassName('card');

	for (let card of cards) {
		card.classList.remove('hide');
	}

	if (searchFilter.value.length > 2) {
		for (let card of cards) {
			let cardBody = card.querySelector('.card-body');
			if (cardBody.innerText.toUpperCase().indexOf(filter) === -1) {
				card.classList.add('hide');
			}
		}
	}

	// Filter by categories
	filterByCategory('ingredient', 'ingredients');
	filterByCategory('appliance', 'appliance');
	filterByCategory('ustensils', 'ustensils');
};
