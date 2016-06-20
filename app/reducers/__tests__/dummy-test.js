jest.unmock('../day'); // unmock to use the actual implementation of sum

describe('Test environment', () => {

  it('can run tests', () => {
    expect(true).toBe(true);
  });

  it('can require modules', () => {
    const day = require('../day');
    expect(day).toBeDefined();
  });

});
