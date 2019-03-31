import {
    RM_ALL_FLIGHTS,
    ADD_FLIGHTS,
} from "./../../config/types";

const initialState = {
  inbound:[],
  outbound:[]
};
export const SearchFlightsReducer = (state = initialState, action) => {

  switch (action.type) {
    case RM_ALL_FLIGHTS:
      return {
        ...state,
        inbound:[],
        outbound:[]
      };
    break;
    case ADD_FLIGHTS:
      let inbound=state.inbound;
      let outbound=state.outbound;
      
      inbound.push(...action.newValue.inbound);
      
      outbound.push(...action.newValue.outbound);

      console.log(inbound);
      return {
        ...state,
        inbound:inbound,
        outbound:outbound
      };
    break;
    default:
      return state;
  }
};
