// jest.unmock('../day.js'); // unmock to use the actual implementation of sum

import React from 'react';
import * as writing from '../writing';

describe('Writing actions', () => {

  it('should create an action to change the affirmation', () => {
    const anArray = ['I am strong'];
    const index = 0;
    const sectionName = 'affirmation';
    const expectedAction = {
      type: 'CHANGE_ROUTINE_SECTION',
      anArray,
      index,
      sectionName
    }
    expect(writing.changeRoutineSection(anArray, index, sectionName)).toEqual(expectedAction)
  })

  it('should create an action to change the amazingThings', () => {
    const anArray = ['Smelled a flower', 'ran a marathon', 'ate an apple'];
    const index = 0;
    const sectionName = 'amazingThings'
    const expectedAction = {
      type: 'CHANGE_ROUTINE_SECTION',
      anArray,
      index,
      sectionName
    }
    expect(writing.changeRoutineSection(anArray, index, sectionName)).toEqual(expectedAction)
  })

  it('should create an action to change the amazingThings', () => {
    const anArray = ['Smelled a flower', 'ran a marathon', 'ate an apple'];
    const index = 0;
    const sectionName = 'amazingThings'
    const expectedAction = {
      type: 'CHANGE_ROUTINE_SECTION',
      anArray,
      index,
      sectionName
    }
    expect(writing.changeRoutineSection(anArray, index, sectionName)).toEqual(expectedAction)
  })

  it('should create an action to change the affirmation', () => {
    const anArray = ['Eat less junkfood']
    const index = 0;
    const sectionName = 'improve'
    const expectedAction = {
      type: 'CHANGE_ROUTINE_SECTION',
      anArray,
      index,
      sectionName
    }
    expect(writing.changeRoutineSection(anArray, index, sectionName)).toEqual(expectedAction)
  })

  it('should create an action to change the affirmation', () => {
    const anArray = ['10 push-ups']
    const index = 0;
    const sectionName = 'makesGreat'
    const expectedAction = {
      type: 'CHANGE_ROUTINE_SECTION',
      anArray,
      index,
      sectionName
    }
    expect(writing.changeRoutineSection(anArray, index, sectionName)).toEqual(expectedAction)
  })
})
