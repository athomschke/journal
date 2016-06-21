import React from 'react';
import journal from '../journal';

describe('Reducing a whole journal', () => {

  it('can handle the initial state', () => {
    let value = ['I am strong'];
    let state = [];
    let action = {
      type: 'CHANGE_AFFIRMATION',
      anArray: value,
      index: 0
    }
    let newState = journal(state, action);
    expect(newState).toEqual([{
      affirmation: ['I am strong']
    }]);
  });

  it('can change content on a single page', () => {
    let value = ['I am strong'];
    let state = [{
      improve: 'eat less junkfood'
    }, {}];
    let action = {
      type: 'CHANGE_AFFIRMATION',
      anArray: value,
      index: 0
    }
    let newState = journal(state, action);
    expect(newState).toEqual([{
      affirmation: ['I am strong'],
      improve: 'eat less junkfood'
    }, {}]);
  });

  it('can change content on the second page', () => {
    let value = ['eat way less junkfood'];
    let state = [{
      improve: ['eat more junkfood']
    }, {
      improve: ['eat less junkfood']
    }, {}];
    let action = {
      type: 'CHANGE_IMPROVE',
      anArray: value,
      index: 1
    }
    let newState = journal(state, action);
    expect(newState).toEqual([{
      improve: ['eat more junkfood']
    }, {
      improve: ['eat way less junkfood']
    }, {}]);
  });

})
