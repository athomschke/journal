// jest.unmock('../day.js'); // unmock to use the actual implementation of sum

import React from 'react';
import day from '../day';

let action = (routineName, value) => {
  let typeSuffix =  routineName === 'makesGreat' ? 'MAKES_GREAT' :
                    routineName === 'amazingThings' ? 'AMAZING_THINGS' :
                    routineName.toUpperCase();
  return {
    type: 'CHANGE_' + typeSuffix,
    anArray: ['I am a strong woman']
  };
}

let runForRoutineNamed = (routineName) => {

  describe('Reducing ' + routineName, () => {
    it('handles initial state', () => {
      let value = ['I am a strong woman'];
      let state = {};
      state[routineName] = undefined
      let newState = day(state, action(routineName, value));
      expect(newState[routineName]).toEqual(value);
    });

    it('changes existing value', () => {
      let value = ['I am a strong woman'];
      let state = {};
      state[routineName] = ['I am a strong man'];
      let newState = day(state, action(routineName, value));
      expect(newState[routineName]).toEqual(value);
    });

    it('preserves other routines', () => {
      let value = ['I am a strong woman'];
      let state = { foo: ['bar'] };
      state[routineName] = ['I am a strong man'];
      let newState = day(state, action(routineName, value));
      expect(newState.foo).toEqual(['bar']);
      expect(newState[routineName]).toEqual(value);
    });

  });
}

runForRoutineNamed('affirmation');
runForRoutineNamed('improve');
runForRoutineNamed('makesGreat');
