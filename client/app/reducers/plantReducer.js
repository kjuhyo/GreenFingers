import {useAnimatedReaction} from 'react-native-reanimated';

const ADD_PLANT = 'ADD_PLANT';
const UPDATE_PLANT = 'UPDATE_PLANT';
const SET_PLANTS = 'SET_PLANTS';
const UPDATE_PLANT_NICKNAME = 'UPDATE_PLANT_NICKNAME';
const UPDATE_PLANT_LASTDATE = 'UPDATE_PLANT_LASTDATE';
// const UPDATE_PLANT_IMAGE = 'UPDATE_PLANT_NICKNAME';

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

export const updatePlantNickname = (pid, nickname) => ({
  type: UPDATE_PLANT_NICKNAME,
  pid,
  nickname,
});
export const updatePlantLastDate = (pid, lastdate) => ({
  type: UPDATE_PLANT_LASTDATE,
  pid,
  lastdate,
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
    case 'UPDATE_PLANT_NICKNAME':
      return {
        userPlants: state.userPlants.map(singlePlant => {
          if (singlePlant.pid !== action.pid) {
            return singlePlant;
          } else {
            return {
              ...singlePlant,
              nickname: action.nickname,
            };
          }
        }),
      };
    case 'UPDATE_PLANT_LASTDATE':
      return {
        userPlants: state.userPlants.map(singlePlant => {
          if (singlePlant.pid !== action.pid) {
            return singlePlant;
          } else {
            return {
              ...singlePlant,
              lastDate: action.lastdate,
            };
          }
        }),
      };
    default:
      return state;
  }
}
