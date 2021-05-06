const SET_MBTI = 'SET_MBTI';
const SET_ANSWER = 'SET_ANSWER';

export const setMBTI = mbti => ({
  type: SET_MBTI,
  mbti,
});
export const setAnswer = (id, answer) => ({
  type: SET_ANSWER,
  id,
  answer,
});

const mbtiState = {
  mbti: [],
  answer: [],
};

export default function mbti(state = mbtiState, action) {
  switch (action.type) {
    case 'SET_MBTI':
      return {
        mbti: action.mbti,
        answer: new Array(action.mbti.length).fill('X'),
      };
    case 'SET_ANSWER':
      return {
        ...state,
        answer: state.answer.map((ans, index) => {
          if (action.id !== index + 1) {
            return ans;
          } else {
            return action.answer;
          }
        }),
      };
    default:
      return state;
  }
}
