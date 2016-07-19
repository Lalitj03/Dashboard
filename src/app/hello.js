import React, {Component} from 'react';
import Request from 'request';
import { addItem, getRandom, showTitle } from './actions/actions.js';
import Store from './appStore/appStore.js';
import Abc from './api/api.js';

export class Hello extends Component {
  constructor(props) {
      super(props);
      //this.state = {  x: 0 };
      this._onChange = this._onChange.bind(this);
      this.increment = this.increment.bind(this);
      this.state = Store.getList();
      this.state = Abc.seti();
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

  _show(){
    showTitle();
  }

  increment(){
    this.setState(Abc.seti());
  }

  getid(){
    return id;
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
        <button type="button" onClick={this.increment} className="btn btn-link btn-block btn-lg">
          <span className="glyphicon glyphicon-plus" aria-hidden="true">
          </span>&nbsp;+
        </button>Object No. :
        <hr/>
        <div onClick={this._show}>
        Click: {this.state.y}
        </div>
      </div>

    );
  }
}
