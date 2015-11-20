import Compose from './compose';

export default (Component) => {
  class ComposedComponent extends Component {
    _mediaQueryListenersByQuery: {};
    state = {
      _media: {}
    };

    constructor(props, context) {
      super(props, context);
      this.state = this.state || {};
    }

    componentDidMount() {
      if(super.componentDidMount) {
        super.componentDidMount();
      }
    }

    componentWillUpdate(nextProps, nextState) {
      return (nextState._media !== this.state._media);
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

    render() {
      return Compose(this, super.render());
    }
  }
  ComposedComponent.displayName = 'Block';
  return ComposedComponent;
}
