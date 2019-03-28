import { FETCH_USER } from "../actions/types";

// Here state is null, because when the page loads its takes time
// so first there is null
// after checking if logged in return the payload
// if not return false
export default function(state = null, action) {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
}
