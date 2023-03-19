const checkJs = () => {
  const jsList = document.querySelectorAll('.no-js');
  jsList.forEach((item) => {
    item.classList.remove('no-js');
  });
};

export {checkJs};
