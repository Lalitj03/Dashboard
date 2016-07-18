import React, {Component} from 'react';
import Request from 'request';
import { addItem, getRandom } from './actions/actions.js';
import Store from './appStore/appStore.js';

export class Hello extends Component {
  constructor(props) {
      super(props);
      this.state = {  xyz: "Hello how are you" };
      this._onChange = this._onChange.bind(this);
      this.state = Store.getList();
  }

  componentDidMount() {
    Store.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    Store.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState(Store.getList());
  }

  _add() {
    addItem();
  }

  _random() {
    getRandom();
  }


  render() {
    return (
      <div>
        <button type="button" onClick={this._add} className="btn btn-link btn-block btn-lg">
          <span className="glyphicon glyphicon-plus" aria-hidden="true">
          </span>&nbsp;New Call
        </button>
        <button type="button" onClick={this._random} className="btn btn-link btn-block btn-lg">
          <span className="glyphicon glyphicon-plus" aria-hidden="true">
          </span>&nbsp;From Server
        </button>
        {this.state.daata[0].title}
      </div>

    );
  }
}
