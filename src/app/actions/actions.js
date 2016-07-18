import AppDispatcher from '../dispatcher/dispatcher';
import { Constants } from '../constants/Constants';
import { getRandomApi } from '../api/api';


export function addItem() {
  AppDispatcher.handleViewAction({
    actionType: Constants.NEW_CALL,
  });
}

export function getRandom() {
  AppDispatcher.handleViewAction({
    actionType: Constants.GET_RANDOM,
  });
  getRandomApi();
}

export function showTitle() {
  AppDispatcher.handleViewAction({
    actionType: Constants.SHOW_TITLE,
  });
}
