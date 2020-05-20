const { generateProbabilityDecision } = require('../db/initializer/helpers');

describe('Test helper function that generates a truthy / falsy decision for a given probability', () => {
  test('Should generate decision true for a probability of 1', () => {
    const decision = generateProbabilityDecision(1);
    expect(decision).toBe(true);
  });

  test('Should generate decision false for a probability of 0', () => {
    const decision = generateProbabilityDecision(0);
    expect(decision).toBe(false);
  });

  test('Should generate truthy/falsy decision for a probability of 0.5', () => {
    const test = [];

    for (let i = 0; i < 100; i += 1) {
      test.push(generateProbabilityDecision(0.5));
    }

    expect(test).toContain(true);
    expect(test).toContain(false);
  });
});
