const initScroll = () => {
  const root = document.querySelector('.marquee');
  if (!root) return;
  const ul = root.querySelector('ul');
  ul.innerHTML += ul.innerHTML;
};

const init = () => {
  initScroll();

  let maxWidth = localStorage.getItem('maxWidth') === 'true';
  if (maxWidth) {
    document.querySelector('.container').classList.add('max-width');
  }
};

addEventListener('DOMContentLoaded', init);
