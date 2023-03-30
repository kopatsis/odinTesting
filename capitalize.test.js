const cap = require('./capitalize');

test('capitalizes all lowercase', () => {
    expect(cap("blahblahblah")).toBe("BLAHBLAHBLAH");
});

test('capitalizes all uppercase', () => {
    expect(cap("BLAHBLAHBLAH")).toBe("BLAHBLAHBLAH");
});

test('capitalizes mixed case', () => {
    expect(cap("BlahBlahBlah")).toBe("BLAHBLAHBLAH");
});