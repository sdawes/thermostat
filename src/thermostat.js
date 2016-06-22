'use strict';

function Thermostat(){
  this.MINIMUM_TEMPERATURE = 10;
  this.MAXIMUM_TEMPERATURE = 32;
  this.MAXIMUM_TEMPERATURE_PSM = 25;
  this.temperature = 20;
  this.powerSavingMode = true;
};

Thermostat.prototype.getCurrentTemperature = function(){
  return this.temperature;
};

Thermostat.prototype.increaseTemperature = function(){
  if(this.isMaximumTemperature()){
    return;
  }
  return this.temperature += 1;
};

Thermostat.prototype.decreaseTemperature = function(){
  if(this.isMinimumTemperature()){
    return;
  }
  return this.temperature -= 1;
};

//////////////
Thermostat.prototype.isMinimumTemperature = function(){
  return this.temperature === this.MINIMUM_TEMPERATURE;
};

Thermostat.prototype.isMaximumTemperature = function(){
  if(this.isPowerSavingModeOn()){
    return this.temperature === this.MAXIMUM_TEMPERATURE_PSM;
  } else {
    return this.temperature === this.MAXIMUM_TEMPERATURE;
  }
};
///////////

Thermostat.prototype.isPowerSavingModeOn = function(){
  return this.powerSavingMode === true;
};

Thermostat.prototype.switchPowerSavingModeOn = function(){
  this.powerSavingMode = true;
};

Thermostat.prototype.switchPowerSavingModeOff = function(){
  this.powerSavingMode = false;
};
