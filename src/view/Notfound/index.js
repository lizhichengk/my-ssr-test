import React, { Component } from 'react';
class NotFound extends Component {
  componentWillMount () {
    const { staticContext } = this.props;
    staticContext && (staticContext.NotFound = true);
  }
  render() {
    return (
      <div className='NotFound'>
        404
      </div>
    )
  }

}


export default NotFound;