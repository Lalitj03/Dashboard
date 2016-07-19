import AppDispatcher from '../dispatcher/dispatcher';
import { Constants } from '../constants/Constants';

export function receiveRandom(response) {
  AppDispatcher.handleServerAction({ actionType: Constants.SAVE_DATA, response });
}
