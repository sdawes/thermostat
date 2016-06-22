$(document).ready(function() {

    // ================== SET TEMPERATURE =====================

    var thermostat = new Thermostat();
    updateTemperature();

    $('#increaseTemperature').on('click', function() { // event listener
        thermostat.increaseTemperature(); // update model
        updateTemperature();
    });

    $('#decreaseTemperature').on('click', function() { // event listener
        thermostat.decreaseTemperature(); // update model
        updateTemperature();
    });

    // ================== RESET =====================

    $('#reset').on('click', function() {
        thermostat.reset();
        updateTemperature();
    });

    // ================== PSM ON AND OFF =====================

    $('#powerSavingModeOff').on('click', function() {
        thermostat.switchPowerSavingModeOff();
        $('#power-saving-status').text("OFF");
    });

    $('#powerSavingModeOn').on('click', function() {
        thermostat.switchPowerSavingModeOn();
        $('#power-saving-status').text("ON");
    });

    // ================== HELPERS =====================

    function updateTemperature() {
        $('#temperature').text(thermostat.temperature);
        $('#temperature').attr('class', thermostat.energyUsage());
    };

    $('#current-city').change(function() {
      var city = $('#current-city').val();
      var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
      var token = '&appid=3cfa1cf4fde7836547442f43ea2013c7';
      var units = '&units=metric';
      $.get(url + token + units, function(data) {
        $('#current-temperature').text(data.main.temp);
      })
    })



});
