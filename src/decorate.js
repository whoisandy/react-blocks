'use strict';

import React from 'react';
import Compose from './compose';

export default (Component) => {
  class ComposedComponent extends Component {
    render() {
      return Compose(this, super.render());
    }
  }
  ComposedComponent.displayName = 'Block';

  return ComposedComponent;
}
