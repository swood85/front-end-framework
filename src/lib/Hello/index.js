import React from 'react';
import PropTypes from 'prop-types';

class Hello extends React.Component {
  render() {
    return <div>{this.props.hello}</div>;
  }
}
// In React v16, it is mandatory to add prop types in order to avoid type confusion
Hello.propTypes = {
  hello: PropTypes.string
}
export default Hello;
