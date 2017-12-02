$(document).ready(function() {

var characters = {
  'luke': {
      name: 'Luke Skywalker',
      health: 150,
      attackPow: 8,
      counterAtk: 20
  },
  'boba': {
      name: 'Boba Fett',
      health: 180,
      attackPow: 7,
      counterAtk: 20
  },
  'rey': {
      name: 'Rey',
      health: 100,
      attackPow: 14,
      counterAtk: 5
  },
  'kylo': {
      name: 'Kylo Ren',
      health: 120,
      attackPow: 8,
      counterAtk: 15
  }
};

var attacker;
var atkHealth;
var attackPow;
var basePow;
var defender;
var defHealth;
var counterAtk;
var selectedDefender;

function fight() {
  attacker = false;
  atkHealth ='';
  attackPow = '';
  basePow = '',
  defender = false;
  defHealth ='';
  counterAtk = '';

  $('').empty();
};

// Attachers ON/OFF

// if your warrior is luke
$('#lukeWar').on('click', function() {
  $('#bobaWar').hide();
  $('#reyWar').hide();
  $('#kyloWar').hide();
  $('.initialOther').show();
  $('#lukeOther').hide();
  attacker = true;
  atkHealth = characters.luke.health;
  attackPow = characters.luke.attackPow;
  basePow = characters.luke.attackPow;
});

// if your warrior is boba fett
$('#bobaWar').on('click', function() {
  $('#lukeWar').hide();
  $('#reyWar').hide();
  $('#kyloWar').hide();
  $('.initialOther').show();
  $('#bobaOther').hide();
  attacker = true;
  atkHealth = characters.boba.health;
  attackPow = characters.boba.attackPow;
  basePow = characters.boba.attackPow;
});

// if your warrior is rey
$('#reyWar').on('click', function() {
  $('#bobaWar').hide();
  $('#lukeWar').hide();
  $('#kyloWar').hide();
  $('.initialOther').show();
  $('#reyOther').hide();
  attacker = true;
  atkHealth = characters.rey.health;
  attackPow = characters.rey.attackPow;
  basePow = characters.rey.attackPow;
});

// if your warrior is kylo
$('#kyloWar').on('click', function() {
  $('#bobaWar').hide();
  $('#reyWar').hide();
  $('#lukeWar').hide();
  $('.initialOther').show();
  $('#kyloOther').hide();
  attacker = true;
  atkHealth = characters.kylo.health;
  attackPow = characters.kylo.attackPow;
  basePow = characters.kylo.attackPow;
});


// Challangers ON/OFF

// if your challanger is luke
$('#lukeOther').on('click', function() {
  $('#lukeOther').hide();
  $('#lukeChal').show();
  defender = true;
  selectedDefender = $('#LukeChal');
  defHealth = characters.luke.health;
  counterAtk = characters.luke.counterAtk;
});

// if your challanger is boba
$('#bobaOther').on('click', function() {
  $('#bobaOther').hide();
  $('#bobaChal').show();
  defender = true;
  selectedDefender = $('#bobaChal');
  defHealth = characters.boba.health;
  counterAtk = characters.boba.counterAtk;
});

// if your challanger is rey
$('#reyOther').on('click', function() {
  $('#reyOther').hide();
  $('#reyChal').show();
  defender = true;
  selectedDefender = $('#reyChal')
  defHealth = characters.rey.health;
  counterAtk = characters.rey.counterAtk;
});

// if your challanger is kylo
$('#kyloOther').on('click', function() {
  $('#kyloOther').hide();
  $('#kyloChal').show();
  defender = true;
  selectedDefender = $('#kyloChal');
  defHealth = characters.kylo.health;
  counterAtk = characters.kylo.counterAtk;
});

//attack button mechanics
$('#attack').on('click', function(){
  if (defender && attacker && defHealth > 0 && atkHealth > 0) {
    defHealth = defHealth - attackPow;
    atkHealth = atkHealth - counterAtk;

//displaying the results of the attack
    $('#resultsArea').html(
      'You attacked for: ' + attackPow +
      ' You were countered for: ' + counterAtk
      );
      attackPow = attackPow + basePow;
    };

    if (defHealth <= 0) {
      defender = false;
      selectedDefender.hide();
      $('#resultsArea').html('You Defeted the enemy! Chose a new opponent!');
      defHealth = '';
      };

    if (atkHealth <= 0) {
      attacker = false;
      $('#resultsArea').html('You lose! Click retreat to try again!');
      };

      //getting the warriors health to change
      $('#lukeWarHealth').html('Health: ' + atkHealth);
      $('#bobaWarHealth').html('Health: ' + atkHealth);
      $('#reyWarHealth').html('Health: ' + atkHealth);
      $('#kyloWarHealth').html('Health: ' + atkHealth);

      //getting the challangers health to change
      $('#lukeChalHealth').html('Health: ' + defHealth);
      $('#bobaChalHealth').html('Health: ' + defHealth);
      $('#reyChalHealth').html('Health: ' + defHealth);
      $('#kyloChalHealth').html('Health: ' + defHealth);

});

// retreat button mechanics aka reset
$('#retreat').on('click', function(){
  location.reload();
});
});
