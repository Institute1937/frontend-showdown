export default {
  add: ({ num }) => ({ num: num + 1 }),
  addColour: (state, actions, {colour})  => {


    return {[colour]: state[colour] +1 }
  },
  // ({ colour: colour + 1 }),
  sub: ({ num }) => ({ num: num - 1 }),
  move: (state, actions, { heightFactor, lean }) => {
    debugger
      return { heightFactor, lean }
    },
};
