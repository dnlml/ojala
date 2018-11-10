import lerp from '../helpers/lerp';

class Cursor {
  constructor() {
    this.el = document.body;
    this.init();
  }

  init() {
    this.createPoints();
    this.onMoveFn = this.onMove.bind(this);
    this.followFn = this.follow.bind(this);
    this.el.addEventListener('mousemove', this.onMoveFn);
    window.requestAnimationFrame(this.followFn);
  }

  createPoints() {
    this.dotA = document.createElement('div');
    this.dotA.classList.add('dot--a');

    this.dotB = document.createElement('div');
    this.dotB.classList.add('dot--b');

    this.el.appendChild(this.dotA);
    this.el.appendChild(this.dotB);
  }

  onMove(e) {
    this.mouseX = e.clientX;
    this.mouseY = e.clientY;
  }

  follow() {
    const A = this.dotA.getBoundingClientRect();
    const B = this.dotB.getBoundingClientRect();
    const leftA = A.left;
    const topA = A.top;
    const leftB = B.left;
    const topB = B.top;
    const xA = lerp(leftA, this.mouseX, 0.1);
    const yA = lerp(topA, this.mouseY, 0.1);
    const xB = lerp(leftB, this.mouseX, 0.15);
    const yB = lerp(topB, this.mouseY, 0.15);
    this.dotA.style.left = `${xA + 1.2}px`;
    this.dotA.style.top = `${yA + 1.8}px`;
    this.dotB.style.left = `${xB + 2.5}px`;
    this.dotB.style.top = `${yB + 1.4}px`;

    window.requestAnimationFrame(this.followFn);
  }
}

export default Cursor;
