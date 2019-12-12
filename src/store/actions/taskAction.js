export const addTask = ({ task, priority}) => {
  console.log("add task", task, priority);
  return {
    type: 'ADD_TASK',
    payload: {
      task,
      priority
    }
  };
};