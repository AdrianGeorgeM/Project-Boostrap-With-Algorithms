// Helper function to add dropdown options
const addDropdownOption = (category, name) => {
	const dropdown = document.querySelector(`#${category}Dropdown .dropdown-body`);
	if (dropdown) {
		dropdown.innerHTML += `<a href="#" onclick='categoryClick(this, "${category}")'>${name}</a>`;
	}
};

const addNewCategory = (nameCat) => {
	const categoriesContainer = document.querySelector('#categoriesContainer');
	if (categoriesContainer) {
		categoriesContainer.insertAdjacentHTML(
			'beforeend',
			`<li class="categoryRecipes">
                <span class="nameCat">${nameCat}</span>
                <span onclick="removeCategory(this)" class="btnRemove bold">
                    <i class="fas fa-times"></i>
                </span>
            </li>`
		);
		functionSearch();
	}
};

const removeCategory = (e) => {
	const tagName = e.parentElement.querySelector('.nameCat').innerText;
	const tagIndex = tags.findIndex((x) => x.name === tagName);

	if (tagIndex !== -1) {
		const tag = tags[tagIndex];
		addDropdownOption(tag.category, tag.name);
		tags.splice(tagIndex, 1);
	}

	e.parentElement.remove();
	functionSearch();
};
