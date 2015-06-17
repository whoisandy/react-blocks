'use strict';

describe('Sanity test', function () {
  it('should evaluate true to be ok', function () {
    expect(true).to.be.ok;
  });

  it('should evaluate true to be true', function(){
    expect(true).to.be.true;
  });

  it('should evaluate number to be a number', function(){
    expect(5).to.be.a.number;
  });
});
