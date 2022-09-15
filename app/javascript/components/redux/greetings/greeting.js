const GETRANDOMGREETING = 'src/redux/greeting/GETRANDOMGREETING';

export const getgreeting = (message) => ({
  type: GETRANDOMGREETING,
  message,
});

const initialState = {
    greeting: '',
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case GETRANDOMGREETING:
      return {
        ...state,
        greeting: action.message,
      };
    default:
      return state;
  }
};

export const fetchgreeting = () => (dispatch) => {
  fetch('http://127.0.0.1:3000/api/greetings')
    .then((response) => response.json())
    .then((data) => {
      dispatch(getgreeting(data.greeting));
  });
};

export default Reducer;