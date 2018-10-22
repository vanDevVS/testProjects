// Please complete the below exercises preferrably using JQuery

// 1. Make each item's paragraph collapse/expand when the title is clicked
function toggleText() {
	var titles = document.querySelectorAll('.title-wrapper');
	var titlesArr = Array.prototype.slice.call(titles);

	titlesArr.forEach(function(current) {
		
		current.addEventListener('click', function(event) {
			var item = event.target.parentNode.parentNode;
			var text = item.lastElementChild;
			text.classList.toggle('hidden');
		});
	}); 
}

// 2. Remove each item when we click on the closing X
function deleteItem() {
	var closeBtns = document.querySelectorAll('.close');
	var btnsArr = Array.prototype.slice.call(closeBtns);

	btnsArr.forEach(function(current) {
		
		current.addEventListener('click', function(event) {
			var item = event.target.parentNode.parentNode;
			item.remove();
		});
	});
}

// 3. Create a new item using the input field
//    The title of the new item has to match the input value
//    The new item should also have the same properties (collapse/expand and close) as the other items
		var addListItem = function(curr) {
			var html, newHtml, element, newTitle;

			var newTitle = document.querySelector('#newtitle').value;

				html = '<div class="item"><div class="title-wrapper"><h1 class="title">%no%</h1><span class="close">x</span></div><p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id scelerisque lacus, rutrum lobortis nisl. Ut dapibus, quam in auctor pharetra, nibh erat pharetra velit, vitae tristique mauris dui quis.</p></div>';

				element = '.item-list';


			newHtml = html.replace('%no%', newTitle);

			// Insert the HTML into the DOM
			document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);


		};

		document.querySelector('.add').addEventListener('click', function() {
			var resetTitle = document.querySelector('#newtitle');
			addListItem();
			deleteItem();
			toggleText();
			resetTitle.value = '';
		});

function initialize() {
	toggleText();
	deleteItem();
}

initialize();

//    Optional: 
//    If the user clicks "Add New" and the input is empty, 
//    the new item's title needs to default to Title {number} (ex: Title 6 or Title 7)
//    depending on the number of items already on the page