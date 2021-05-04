const ADD_PLANT = 'ADD_PLANT';
const SET_PLANTS = 'SET_PLANTS';

export const setPlants = plants => ({
  type: SET_PLANTS,
  plants,
});

const plantsState = {
  userPlants: [],
};

export default function palnt(state = plantsState, action) {
  switch (action.type) {
    case 'SET_PLANTS':
      console.log('here iam ');
      return {
        userPlants: action.plants,
      };
    default:
      return state;
  }
}
