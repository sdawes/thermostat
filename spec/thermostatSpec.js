'use strict';

describe('Thermostat', function(){

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('PSM is on by default', function(){
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  it('PSM can be turned off', function(){
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
  });

  it('PSM can be turned back on', function(){
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
    thermostat.switchPowerSavingModeOn();
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  it ('has a starting temperature of 20 degrees', function(){
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it('raises by 1 degree on up button',function(){
    thermostat.increaseTemperature();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  it('decreases by 1 degree on down button',function(){
    thermostat.decreaseTemperature();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });

  it('has a minimum temperature of 10 degrees', function(){
    for (var i = 0; i < 11; i++ ){
      thermostat.decreaseTemperature();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });

  describe('Power saving mode is ON', function(){

    it('the maximum temperature is 25 degrees', function(){
      for (var i = 0; i < 6; i++ ){
        thermostat.increaseTemperature();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(25);
    });

  });

  describe('Power saving mode is OFF', function(){

    it('the maximum temperature is 32 degrees', function(){
      thermostat.switchPowerSavingModeOff();
      for (var i = 0; i < 13; i++ ){
        thermostat.increaseTemperature();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(32);
    });

  });







});
