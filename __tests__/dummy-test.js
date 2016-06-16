jest.unmock('../app/components/JournalTextInput'); // unmock to use the actual implementation of sum

describe('Test environment', () => {

  it('can run tests', () => {
    expect(true).toBe(true);
  });

  it('can require modules', () => {
    const JournalTextInput = require('JournalTextInput');
    expect(JournalTextInput).toExist();
  });

});
