'use strict';

function Thermostat(){
  this.MINIMUM_TEMPERATURE = 10;
  this.MAXIMUM_TEMPERATURE = 32;
  this.MAXIMUM_TEMPERATURE_PSM = 25;

  this.temperature = 20;
  this.powerSavingMode = true;

  this.MEDIUM_USE_TEMP = 18;
};

// ============== TEMPERATURE SETTINGS ======================

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

  // ============== PREDICATE MIN AND MAX TEMPERATURE ======================

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

  // ============== POWER SAVING MODE ON AND OFF ======================

Thermostat.prototype.isPowerSavingModeOn = function(){
  return this.powerSavingMode === true;
};

Thermostat.prototype.switchPowerSavingModeOn = function(){
  this.powerSavingMode = true;
};

Thermostat.prototype.switchPowerSavingModeOff = function(){
  this.powerSavingMode = false;
};

// ============== ENERGY USAGE ======================

Thermostat.prototype.energyUsage = function(){
  if(this.temperature < this.MEDIUM_USE_TEMP){
    return "low_usage";
  }
  if(this.temperature >= this.MEDIUM_USE_TEMP && this.temperature <= this.MAXIMUM_TEMPERATURE_PSM) {
    return "medium_usage";
  }
  return "high_usage";

};

// ============== RESET ======================

Thermostat.prototype.reset = function(){
  this.temperature = 20;
};
