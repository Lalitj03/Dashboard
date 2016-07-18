import { receiveRandom } from '../actions/serverActions';
import Request from 'request';

export function getRandomApi() {
  let data = [];
  Request('http://jsonplaceholder.typicode.com/posts/1', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      data = JSON.parse(body);
      receiveRandom(data);
    }
  });
}
