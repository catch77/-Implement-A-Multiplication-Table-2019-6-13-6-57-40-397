// const isTheNumbersValid = require('../main');
const create = require('../main');

it ('should return true when call isTheNumbersValid given 2 and 3', () => {
    expect(create.isTheNumbersValid(2, 3)).toBe(true);
});

it ('should return false when call isTheNumbersValid given -1 and 3', () => {
    expect(create.isTheNumbersValid(-1, 3)).toBe(false);
});

it ('should return false when call isTheNumbersValid given 2 and 1003', () => {
    expect(create.isTheNumbersValid(2, 1003)).toBe(false);
});

it ('should return false when call isTheNumbersValid given -1 and 1003', () => {
    expect(create.isTheNumbersValid(-1, 1003)).toBe(false);
});

it ('should return mutiply table when call craeteMutipliedTable given 2 and 3', () => {
    expect(create.createMutipliedTable(false, true,2, 3)).toBe("2x2=4\t\n2x3=6\t3x3=9\t\n");
});

