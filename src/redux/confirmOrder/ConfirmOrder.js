// Write action and reducer to handle plans

const ADD_PLAN = 'MSFM/src/redux/confirmOrder/addPlan';
const REMOVE_PLAN = 'book-keeper/src/redux/confirmOrder/removePlan';

// First try with hard coded plan
const defaultPlanState = [];

// action creators for add and remove plans

export const addPlan = (payload) => ({
  type: ADD_PLAN,
  id: payload.id,
  plan: payload.plan,
  amount: payload.amount,
});

export const removePlan = (payload) => ({
  type: REMOVE_PLAN,
  id: payload.id,
});

export default function planReducer(state = defaultPlanState, action) {
  switch (action.type) {
    default: return state;
    case ADD_PLAN:
      return [
        ...state,
        {
          id: action.id,
          plan: action.plan,
          amount: action.amount,
        },
      ];
    case REMOVE_PLAN:
      return [
        state.filter((plan) => plan.id !== action.id),
      ];
  }
}
