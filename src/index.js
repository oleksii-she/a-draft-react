// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { App } from 'components/App';
// import './index.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Counter extends Component {
  static defaultProps = {
    step: 3,
  };

  state = {
    value: this.props.step,
  };

  newState = () => {
    this.setState(prevState => {
      return { value: prevState.value + 1 };
    });
    this.setState(prevState => {
      return { value: prevState.value + 1 };
    });
  };

  /* ... */

  render() {
    return (
      <div>
        <span>{this.state.value}</span>
        <button type="button" onClick={e => this.newState()}></button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById('root'));
