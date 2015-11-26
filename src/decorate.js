import Compose from './compose';

export default (Component) => {
  class ComposedBlock extends Component {
    _mediaQueryListenersByQuery: {};
    state = {
      _media: {}
    };

    constructor() {
      super();
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

    // TODO: Think about composing this way.
    render() {
      return Compose(this, super.render());
    }
  }
  return ComposedBlock;
}
