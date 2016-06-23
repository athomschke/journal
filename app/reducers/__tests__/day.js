// jest.unmock('../day.js'); // unmock to use the actual implementation of sum

import React from 'react';
import day from '../day';

let action = (routineName, value) => {
  return {
    type: 'CHANGE_ROUTINE_SECTION',
    index: 0,
    anArray: value,
    sectionName: routineName
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
      let state = [];
      let newState = day(state, action(routineName, value));
      expect(newState[0][routineName]).toEqual(value);
    });

    it('changes existing value', () => {
      let value = sampleValue(useTriple);;
      let state = [{}];
      state[0][routineName] = sampleNewValue;
      let newState = day(state, action(routineName, value));
      expect(newState[0][routineName]).toEqual(value);
    });

    it('preserves other routines', () => {
      let value = ['I am a strong woman'];
      let state = [{ foo: ['bar'] }];
      state[0][routineName] = sampleNewValue;
      let newState = day(state, action(routineName, value));
      expect(newState[0].foo).toEqual(['bar']);
      expect(newState[0][routineName]).toEqual(value);
    });

  });

}

runForRoutineNamed('affirmation');
runForRoutineNamed('amazingThings', true);
runForRoutineNamed('grateful', true);
runForRoutineNamed('improve');
runForRoutineNamed('makesGreat');
