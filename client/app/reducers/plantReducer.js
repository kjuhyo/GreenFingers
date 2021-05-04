import {useAnimatedReaction} from 'react-native-reanimated';

const ADD_PLANT = 'ADD_PLANT';
const UPDATE_PLANT = 'UPDATE_PLANT';
const SET_PLANTS = 'SET_PLANTS';

export const setPlants = plants => ({
  type: SET_PLANTS,
  plants,
});

export const updatePlant = (pid, plant) => ({
  type: UPDATE_PLANT,
  pid,
  plant,
});
export const addPlant = plant => ({
  type: ADD_PLANT,
  plant,
});

const plantsState = {
  userPlants: [],
};

export default function plant(state = plantsState, action) {
  switch (action.type) {
    case 'SET_PLANTS':
      return {
        userPlants: action.plants,
      };
    case 'ADD_PLANT':
      return {
        userPlants: [...state.userPlants, action.plant],
      };
    case 'UPDATE_PLANT':
      return {
        userPlants: state.userPlants.map(singlePlant => {
          if (singlePlant.pid !== action.pid) {
            return singlePlant;
          } else {
            return action.plant;
          }
        }),
      };
    default:
      return state;
  }
}
