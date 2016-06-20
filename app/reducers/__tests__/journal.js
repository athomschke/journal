import React from 'react';
import journal from '../journal';

describe('Reducing a whole journal', () => {

  it('can handle the initial state', () => {
    let value = ['I am strong'];
    let state = [];
    let action = {
      type: 'CHANGE_AFFIRMATION',
      anArray: value
    }
    let newState = journal(state, action);
    expect(newState).toEqual([{
      affirmation: ['I am strong']
    }]);
  });

  it('can handle a single page', () => {
    let value = ['I am strong'];
    let state = [{
      improve: 'eat less junkfood'
    }];
    let action = {
      type: 'CHANGE_AFFIRMATION',
      anArray: value
    }
    let newState = journal(state, action);
    expect(newState).toEqual([{
      affirmation: ['I am strong'],
      improve: 'eat less junkfood'
    }]);
  });

})
