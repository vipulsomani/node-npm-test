 const functions = require('./functions');

test('summation of two number',() =>{
    expect(functions.add(2,5)).toBe(7);
});

test('summation of two number with not',() =>{
    expect(functions.add(2,5)).not.toBe(8);
});
// for to be null
test('That must be null',() =>{
    expect(functions.isNULL()).toBeNull();
});
//for to be falsy value
test('Expecting a false value',() =>{
        expect(functions.checkValue(undefined)).toBeFalsy();
});
//toEqual 
test('User must be Vipul Somani',() =>{
    expect(functions.createUser()).toEqual({
        firstname : 'Vipul',
        lastname : 'Somani'
    });
});
//less than and greater than

test('Should be under 1500',() => {
    const val1 = 900;
    const val2 = 600;
    expect(val1+val2).toBeLessThanOrEqual(1500);
})

//regex
test('No m in Vipul',() => {
    expect('Vipul').not.toMatch(/m/);
})

//Arrays

test('vipul should be username', () => {
    username = ['vipul','yash', 'yashi'];
    expect(username).toContain('vipul');
})

//Workin with data
test('User name Leanne Grahm', () => {
    expect.assertions();
    return functions.fetchUser().then( data => {
        expect(data.name).toEqual('Leanne Graham');
    })

})
