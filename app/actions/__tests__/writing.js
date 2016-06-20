// jest.unmock('../day.js'); // unmock to use the actual implementation of sum

import React from 'react';
import * as writing from '../writing';

describe('Writing actions', () => {

  it('should create an action to change the affirmation', () => {
    const anArray = ['I am strong']
    const expectedAction = {
      type: 'CHANGE_AFFIRMATION',
      anArray
    }
    expect(writing.changeAffirmation(anArray)).toEqual(expectedAction)
  })

  it('should create an action to change the amazingThings', () => {
    const anArray = ['Smelled a flower', 'ran a marathon', 'ate an apple'];
    const expectedAction = {
      type: 'CHANGE_AMAZING_THINGS',
      anArray
    }
    expect(writing.changeAmazingThings(anArray)).toEqual(expectedAction)
  })

  it('should create an action to change the amazingThings', () => {
    const anArray = ['Smelled a flower', 'ran a marathon', 'ate an apple'];
    const expectedAction = {
      type: 'CHANGE_GRATEFUL',
      anArray
    }
    expect(writing.changeGrateful(anArray)).toEqual(expectedAction)
  })

  it('should create an action to change the affirmation', () => {
    const anArray = ['Eat less junkfood']
    const expectedAction = {
      type: 'CHANGE_IMPROVE',
      anArray
    }
    expect(writing.changeImprove(anArray)).toEqual(expectedAction)
  })

  it('should create an action to change the affirmation', () => {
    const anArray = ['10 push-ups']
    const expectedAction = {
      type: 'CHANGE_MAKES_GREAT',
      anArray
    }
    expect(writing.changeMakesGreat(anArray)).toEqual(expectedAction)
  })
})
