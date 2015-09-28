import React from 'react';
import Demo from './demo';

main()
function main() {
  let container;

  container = document.createElement('div');
  container.setAttribute('id', 'container');
  document.body.appendChild(container);

  React.render(<Demo />, container);
}
