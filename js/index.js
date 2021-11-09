const presentOrderBtn = document.querySelector('.present__order-btn');
const pageOverlayModal = document.querySelector('.page__overlay_modal');
const modalClose = document.querySelector('.modal__close');


const hendlerModal = (openBtn, modal, openSelector, closeBtn, sk) => {

  let opacity = 0;

  let speed = {
    slow: 20,
    medium: 10,
    fast: 1,
    default: 8,
  };

  openBtn.addEventListener('click', () => {
    modal.style.opacity = opacity;

    modal.classList.add(openSelector);

    const timer = setInterval(() => {
      opacity += 0.02;
      modal.style.opacity = opacity;
      if (opacity >= 1) {
        clearInterval(timer);
      }
    }, speed[sk] ? speed[sk] : speed.default);
  });
  closeBtn.addEventListener('click', () => {

    const timer = setInterval(() => {
      opacity -= 0.02;
      modal.style.opacity = opacity;
      if (opacity <= 0) {
        clearInterval(timer);
        modal.classList.remove(openSelector);
      }
    }, speed[sk] ? speed[sk] : speed.default);


  });
};

hendlerModal(
  presentOrderBtn,
  pageOverlayModal,
  'page__overlay_modal_open',
  modalClose,
  'slow'
);
