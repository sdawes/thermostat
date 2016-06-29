'use strict';

describe('Thermostat', function(){

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  // ============== PSM SETTINGS ======================

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

  // ============== CHANGES TEMPERATURE ======================

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

  it('reset button resets temperature to 20', function(){
    for (var i = 0; i < 2; i++ ){
      thermostat.decreaseTemperature();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(18);
    thermostat.reset();
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });


  // ============== POWER SAVING MODE ON AND OFF ======================

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

  // ============== ENERGY USE SETTINGS ======================

  describe ('Energy Settings', function(){

    it ('if temperature < 18 deg equals low usage', function(){
      for (var i = 0; i < 3; i++ ){
        thermostat.decreaseTemperature();
      }
      expect(thermostat.energyUsage()).toEqual("low_usage");
    });

    it ('if temperature 18 - 25 deg equals medium usage', function(){
      expect(thermostat.energyUsage()).toEqual("medium_usage");
    });

    it ('if temperature anything else equals high usage', function(){
      thermostat.switchPowerSavingModeOff();
      for (var i = 0; i < 10; i++ ){
        thermostat.increaseTemperature();
      }
      expect(thermostat.energyUsage()).toEqual("high_usage");
    });

  });







});
