const initState = [];

const taskReducer = (state = initState, action) => {
   console.log("reducer", state, action);
   if (action.type === 'ADD_TASK') {
      return [...state, action.payload];
   }
   return state;
}

export default taskReducer;