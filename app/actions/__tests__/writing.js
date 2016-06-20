// jest.unmock('../day.js'); // unmock to use the actual implementation of sum

import React from 'react';
import * as writing from '../writing';

describe('Writing actions', () => {

  it('should create an action to change the affirmation', () => {
    const anArray = ['I am strong'];
    const index = 0;
    const expectedAction = {
      type: 'CHANGE_AFFIRMATION',
      anArray,
      index
    }
    expect(writing.changeAffirmation(anArray, index)).toEqual(expectedAction)
  })

  it('should create an action to change the amazingThings', () => {
    const anArray = ['Smelled a flower', 'ran a marathon', 'ate an apple'];
    const index = 0;
    const expectedAction = {
      type: 'CHANGE_AMAZING_THINGS',
      anArray,
      index
    }
    expect(writing.changeAmazingThings(anArray, index)).toEqual(expectedAction)
  })

  it('should create an action to change the amazingThings', () => {
    const anArray = ['Smelled a flower', 'ran a marathon', 'ate an apple'];
    const index = 0;
    const expectedAction = {
      type: 'CHANGE_GRATEFUL',
      anArray,
      index
    }
    expect(writing.changeGrateful(anArray, index)).toEqual(expectedAction)
  })

  it('should create an action to change the affirmation', () => {
    const anArray = ['Eat less junkfood']
    const index = 0;
    const expectedAction = {
      type: 'CHANGE_IMPROVE',
      anArray,
      index
    }
    expect(writing.changeImprove(anArray, index)).toEqual(expectedAction)
  })

  it('should create an action to change the affirmation', () => {
    const anArray = ['10 push-ups']
    const index = 0;
    const expectedAction = {
      type: 'CHANGE_MAKES_GREAT',
      anArray,
      index
    }
    expect(writing.changeMakesGreat(anArray, index)).toEqual(expectedAction)
  })
})
