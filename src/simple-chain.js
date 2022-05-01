const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (arguments.length === 0) {
      this.chain.push(' ');
      return this;
    } else {
      this.chain.push(value);
      return this;
    }
  },
  removeLink(position) {
    if (position < 1 || position >  this.chain.length || !Number.isInteger(position)) {
      this.chain = [];
      throw new Error('You can\'t remove incorrect link!');
    } else {
      this.chain.splice(position-1,1);
      return this;
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let result = '';
    for (let i = 0; i < this.chain.length; i++) {
      result += `~~( ${this.chain[i]} )`;
    }
    this.chain = [];
    return result.substring(2);
  }
};

module.exports = {
  chainMaker
};
