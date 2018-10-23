'use strict';

import Coins from '../coins';

describe('Coins View', function() {

  beforeEach(() => {
    this.coins = new Coins();
  });

  it('Should run a few assertions', () => {
    expect(this.coins);
  });

});
