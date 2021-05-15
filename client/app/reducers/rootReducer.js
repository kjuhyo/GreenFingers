import {ActionSheet} from 'native-base';

const SET_STATUS = 'SET_STATUS';

export const setStatus = status => ({
  type: SET_STATUS,
  status,
});

let statusState = {
  isLoading: true,
};

export default function root(state = statusState, action) {
  switch (action.type) {
    case 'SET_STATUS':
      return {
        isLoading: action.status,
      };
    default:
      return state;
  }
}
