const functions = require('./functions');

test('summation of two number',() =>{
    expect(functions.add(2,5)).toBe(7);
});

test('summation of two number with not',() =>{
    expect(functions.add(2,5)).not.toBe(8);
});
test('That must be null',() =>{
    expect(functions.isNULL()).toBeNull();
});