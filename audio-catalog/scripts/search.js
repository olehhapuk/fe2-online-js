const typesListElem = document.querySelector('.types-list');
const typeElements = document.querySelectorAll('.type');

// const types = ['Album', 'Artist'];

// for (const type of types) {
//   const span = document.createElement('span');
//   span.textContent = type;
// }

typesListElem.addEventListener('click', (e) => {
  const targetElem = e.target.closest('.type');

  if (targetElem === null) {
    return;
  }

  for (const typeElem of typeElements) {
    typeElem.classList.remove('type_active');
  }

  targetElem.classList.add('type_active');
});
