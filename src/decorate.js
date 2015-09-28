import Compose from './compose';

export default (Component) => {
  class ComposedComponent extends Component {
    _mediaQueryListenersByQuery: {};
    state = {
      _media: {}
    };

    constructor(props) {
      super(props);
      this.state = this.state || {};
    }

    componentDidMount() {
      if(super.componentDidMount) {
        super.componentDidMount();
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

    componentWillUpdate(nextProps, nextState) {
      return (nextState._media !== this.state._media);
    }

    render() {
      return Compose(this, super.render());
    }
  }
  ComposedComponent.displayName = 'Block';

  return ComposedComponent;
}
