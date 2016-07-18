import AppDispatcher from '../dispatcher/dispatcher';
import { Constants } from '../constants/Constants';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

let _store = {
  daata:[
    {
      "userId": 5,
      "id": 0,
      "title": "title",
      "body": "body"
    }
  ],
  iid: 0,
  y: "show title",
  flag: false,
};

class StoreClass extends EventEmitter {

  addChangeListener(cb) {
    this.on(CHANGE_EVENT, cb);
  }

  removeChangeListener(cb) {
    this.removeListener(CHANGE_EVENT, cb);
  }

  getList() {
    return _store;
  }
}

const Store = new StoreClass();

AppDispatcher.register((payload) => {

  const action = payload.action;
  switch (action.actionType) {

  case Constants.NEW_CALL:
    _store.flag = false;
    Store.emit(CHANGE_EVENT);
    break;

  case Constants.SAVE_DATA:
  console.log(action.response.id);
    _store.daata.push(action.response);
    _store.flag = false;
    Store.emit(CHANGE_EVENT);
    break;

  case Constants.GET_RANDOM:
    break;

  case Constants.SHOW_TITLE:
    _store.iid = _store.daata.id;
    _store.y = _store.daata[1].title;
    Store.emit(CHANGE_EVENT);
    break;
  default:
    return true;
  }

});

export default Store;
