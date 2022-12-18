// Write action and reducer to handle plans

const ADD_PLAN = 'MSFM/src/redux/confirmOrder/addPlan';
// const ADD_ADD_ONS = 'MSFM/src/redux/confirmOrder/addAddOns';
// const CHANGE_PLAN = 'book-keeper/src/redux/confirmOrder/changePlan';

// First try with hard coded plan
const defaultPlanState = [
  {
    id: 1,
    plan: 'Arcade',
    amount: '9',
  },
];

export default function planReducer(state = defaultPlanState, action) {
  switch (action.type) {
    default: return state;
    case ADD_PLAN:
      return [
        ...state,
        {
          id: action.id,
          plan: action.plan,
        },
      ];
    //   case REMOVE_BOOK:
    //     return state.filter((book) => book.id !== action.id);
    //   default:
    //     return state;
  }
}
