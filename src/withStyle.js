import React, {Component} from 'react';

export default (Component, Style) => {
  return class NewComponent extends Component {
    componentWillMount() {
      if (this.props.staticContext) {
        this.props.staticContext.css.push(Style._getCss());
      }
    }
    render() {
      return <Component {...this.props} />
    }
  }
}