// jest.unmock('../day.js'); // unmock to use the actual implementation of sum

import React from 'react';
import day from '../day';

let action = (routineName, value) => {
  let typeSuffix =  routineName === 'makesGreat' ? 'MAKES_GREAT' :
                    routineName === 'amazingThings' ? 'AMAZING_THINGS' :
                    routineName.toUpperCase();
  return {
    type: 'CHANGE_' + typeSuffix,
    anArray: value
  };
}

let sampleValue = (useTriple) => {
  return useTriple ? [
    'Smelling a flower',
    'Doing 10 push-ups',
    'Calling mom'
  ] : [
    'I can run'
  ];
}

let sampleNewValue = () => {
  return ['~'];
}

let runForRoutineNamed = (routineName, useTriple) => {

  describe('Reducing ' + routineName, () => {

    it('handles initial state', () => {
      let value = sampleValue(useTriple);
      let state = {};
      let newState = day(state, action(routineName, value));
      expect(newState[routineName]).toEqual(value);
    });

    it('changes existing value', () => {
      let value = sampleValue(useTriple);;
      let state = {};
      state[routineName] = sampleNewValue;
      let newState = day(state, action(routineName, value));
      expect(newState[routineName]).toEqual(value);
    });

    it('preserves other routines', () => {
      let value = ['I am a strong woman'];
      let state = { foo: ['bar'] };
      state[routineName] = sampleNewValue;
      let newState = day(state, action(routineName, value));
      expect(newState.foo).toEqual(['bar']);
      expect(newState[routineName]).toEqual(value);
    });

  });

}

runForRoutineNamed('affirmation');
runForRoutineNamed('amazingThings', true);
runForRoutineNamed('grateful', true);
runForRoutineNamed('improve');
runForRoutineNamed('makesGreat');
