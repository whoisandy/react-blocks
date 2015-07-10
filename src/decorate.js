'use strict';

import React from 'react';
import Compose from './compose';

export default function Decorate(Component) {
  class ComposedComponent extends Component {
    _mediaQueryListenersByQuery = {};
    constructor() {
      super(...arguments);
      this.state = this.state || {
        _media: {}
      };
    }

    componentDidMount() {
      if(super.componentDidMount) {
        super.componentDidMount();
      }
    }

    componentDidReceiveProps() {
      if(super.componentDidReceiveProps){
        super.componentDidReceiveProps();
      }
    }

    componentWillUnmount() {
      if(super.componentWillUnmount) {
        super.componentWillUnmount();
      }

      if (this._mediaQueryListenersByQuery) {
        Object.keys(this._mediaQueryListenersByQuery).forEach(query => {
          this._mediaQueryListenersByQuery[query].remove();
        }, this);
      }
    }

    shouldComponentUpdate(nextProps, nextState) {
      if(nextState._media !== this.state._media){
        return true;
      }
      return false;
    }

    render() {
      return Compose(this, super.render());
    }
  }
  ComposedComponent.displayName = 'Block';

  return ComposedComponent;
}
