class headerTitle {
  constructor() {
    this.el = document.querySelector('.js-header__title');
    this.last_known_scroll_position = 0;
    this.ticking = false;
    this.init();
  }

  init() {
    this.onScrollFn = this.onScroll.bind(this);
    this.setOpacityFn = this.setOpacity.bind(this);
    document.addEventListener('scroll', this.onScrollFn);
  }

  onScroll() {
    this.last_known_scroll_position = window.scrollY;
    window.requestAnimationFrame(this.setOpacityFn);
  }

  setOpacity() {
    const newOpacity = this.last_known_scroll_position / 300;
    this.el.style.opacity = 1 - newOpacity;
  }
}

export default headerTitle;
