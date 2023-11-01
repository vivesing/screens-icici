import { loadScript } from '../../scripts/lib-franklin.js';

export default function decorate(block) {
  const buttons = document.createElement('div');
  buttons.className = 'carousel-buttons';
  [...block.children].forEach((row) => {
    const classes = ['image'];
    classes.forEach((e, j) => {
      row.children[j].classList.add(`simple-looping-sequence-${e}`);
    });
  });
}
loadScript('/blocks/simple-looping-sequence/delayed.js', { type: 'text/javascript', charset: 'UTF-8' });
