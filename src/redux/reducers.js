

const initialState = {
    task: '',
    todos: [],
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'CHANGE_TASK':
        return {
          ...state,
          task: action.payload,
        };
      case 'ADD_TODO':
        return {
          ...state,
          todos: [...state.todos, action.payload],
        };
      case 'DELETE_TODO':
        return {
          ...state,
          todos: state.todos.filter((_, index) => index !== action.payload),
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  