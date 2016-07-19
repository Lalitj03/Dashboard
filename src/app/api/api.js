import { receiveRandom } from '../actions/serverActions';
import React, {Component} from 'react';
import Request from 'request';

let _id = {
  x: 1,
};

let i = 2;

class abc extends Component {

    seti() {
      i = i+1;
      return _id;
    }
}

const Abc = new abc();

export default Abc;

export function getRandomApi() {
  let data = [];
  let url = "http://jsonplaceholder.typicode.com/posts/" + i;
  Request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      data = JSON.parse(body);
      receiveRandom(data);
    }
  });
}
