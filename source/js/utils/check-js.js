const checkJs = () => {
  const jsList = document.querySelectorAll('.no-js');
  jsList.forEach((item) => {
    item.classList.remove('no-js');
  });
};

const burgerMenu = document.querySelector('.main-nav--header');

const addTransition = () => {
  if (burgerMenu) {
    burgerMenu.classList.add('main-nav--transition');
  }
};

export {checkJs, addTransition};
