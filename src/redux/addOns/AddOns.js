// Write action and reducer to handle plans

const ADD_ADD_ONS = 'MSFM/src/redux/confirmOrder/addAddOns';
const REMOVE_ADD_ONS = 'MSFM/src/redux/confirmOrder/removeAddOns';

const defaultAddOnsState = [];

// action creators for add and remove addOns

export const addAddOns = (payload) => ({
  type: ADD_ADD_ONS,
  id: payload.id,
  name: payload.name,
  amount: payload.amount,
  value: payload.value,
});

export const removeAddOns = (payload) => ({
  type: REMOVE_ADD_ONS,
  id: payload.id,
});

export default function addOnsReducer(state = defaultAddOnsState, action) {
  switch (action.type) {
    default: return state;
    case ADD_ADD_ONS:
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          amount: action.amount,
          value: action.value,
        },
      ];
    case REMOVE_ADD_ONS:
      return [
        state.filter((addOn) => addOn.id !== action.id),
      ];
  }
}
