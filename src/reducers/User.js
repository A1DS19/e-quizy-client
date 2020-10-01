import { FETCH_USER, FETCH_ADDRESSES } from '../actions/types';

const INITIAL_STATE = {
  currentUser: '',
  userAddresses: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USER:
      return { ...state, currentUser: action.payload };

    case FETCH_ADDRESSES:
      return { ...state, userAddresses: action.payload };

    default:
      return state;
  }
};
