export function to_signup() {
  return {
    type: 'TO_SIGNUP',
  };
}
export function to_add_info() {
  return {
    type: 'TO_ADD_INFO',
  };
}
export function to_home() {
  return {
    type: 'TO_HOME',
  };
}

export default {to_signup, to_add_info, to_home};
