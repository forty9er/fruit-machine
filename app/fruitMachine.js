"use strict";

var FruitMachine = function() {
  this.results = ['black', 'white', 'green', 'yellow'];
  this.slots = ['', '', '', ''];
  this.coinBox = 0;
};

FruitMachine.prototype.resultPicker = function() {
  var result = this.results[Math.floor(Math.random()*(this.results.length))];
  return result;
};

FruitMachine.prototype.play = function() {
  var i;
  for (i=0; i<4; i++) {
    this.slots[i] = this.resultPicker();
  }
};

FruitMachine.prototype.jackpot = function() {
  var result = this.coinBox;
  this.coinBox = 0;
  return result;
};

FruitMachine.prototype.checkIfJackpot = function() {

};

module.exports = FruitMachine;
