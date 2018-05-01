import { Component } from 'react';

class BaseComponent extends Component {
  // constructor(props){
  //   super(props)
  // }

  _bind(...methods){
    methods.forEach((method) => {
      this[method] = this[method].bind(this);
    });
  }
}

export default BaseComponent;