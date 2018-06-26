var repeatString = require('./repeatString')

describe('repeatString', function () {
  it('repeats the string', function () {
    expect(repeatString('hey', 3)).toEqual('heyheyhey');
  });
  it('repeats the string many times', function () {
    expect(repeatString('hey', 10)).toEqual('heyheyheyheyheyheyheyheyheyhey');
  });
  it('repeats the string 1 times', function () {
    expect(repeatString('hey', 1)).toEqual('hey');
  });
  it('repeats the string 0 times', function () {
    expect(repeatString('hey', 0)).toEqual('');
  });
  it('returns ERROR with negative numbers', function () {
    expect(repeatString('hey', -1)).toEqual('ERROR');
  });
});