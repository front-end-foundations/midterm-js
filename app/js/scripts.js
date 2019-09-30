const data = {
  recipes:
    'Recipes. Possimus labore, officia dolore! Eaque ratione saepe, alias harum laboriosam deserunt laudantium blanditiis eum explicabo placeat reiciendis labore iste sint. Consectetur expedita dignissimos, non quos distinctio, eos rerum facilis eligendi.',

  reviews:
    'Reviews. Asperiores laudantium, rerum ratione consequatur, culpa consectetur possimus atque ab tempore illum non dolor nesciunt. Neque, rerum. A vel non incidunt, quod doloremque dignissimos necessitatibus aliquid laboriosam architecto at cupiditate commodi expedita in, quae blanditiis.',

  delivery:
    'Delivery. Possimus labore, officia dolore! Eaque ratione saepe, alias harum laboriosam deserunt laudantium blanditiis eum explicabo placeat reiciendis labore iste sint. Consectetur expedita dignissimos, non quos distinctio, eos rerum facilis eligendi.'
};

// the gear icon

var gear = document.querySelector('.fa-cog');
var options = document.querySelector('.account-dropdown ul');

gear.addEventListener('click', showOptions);

function showOptions() {
  options.classList.toggle('active');
  event.preventDefault();
}

// the main menu

function clickHandler() {
  if (!event.target.matches('.site-nav a')) return;
  tabs.forEach(tab => tab.parentElement.classList.remove('active'));
  event.target.parentElement.classList.add('active');
  console.log(event.target.href);

  // uses includes string method to test for review
  // and set the HTML on the page
  if (event.target.href.includes('recipes')) {
    contentPara.innerHTML = data.recipes;
  } else if (event.target.href.includes('reviews')) {
    contentPara.innerHTML = data.reviews;
  } else if (event.target.href.includes('delivery')) {
    contentPara.innerHTML = data.delivery;
  }
  event.preventDefault();
}

function makeInactive() {
  tabs.forEach(tab => tab.classList.remove('active'));
}

var contentPara = document.querySelector('article');
var tabs = document.querySelectorAll('.site-nav a');

document.addEventListener('click', clickHandler);

contentPara.innerHTML = data.recipes;
