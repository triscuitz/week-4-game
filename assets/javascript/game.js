$(document).ready(function() {

var characters = {
  'luke': {
      name: 'Luke Skywalker',
      health: 150,
      attackPow: 10,
      counterAtk: 5
  },
  'boba': {
      name: 'Boba Fett',
      health: 180,
      attackPow: 10,
      counterAtk: 5
  },
  'rey': {
      name: 'Rey',
      health: 100,
      attackPow: 10,
      counterAtk: 5
  },
  'kylo': {
      name: 'Kylo Ren',
      health: 120,
      attackPow: 10,
      counterAtk: 5
  }
};

var attacker;
var atkHealth;
var attackPow;
var defender;
var defHealth;
var counterAtk;

function fight() {
  attacker = false;
  atkHealth ='';
  attackPow = '';
  defender = false;
  defHealth ='',
  counterAtk = '';

  $('').empty();
};

<!-- Attachers ON/OFF -->
$('#lukeWar').on('click', function() {
  $('#bobaWar').hide();
  $('#reyWar').hide();
  $('#kyloWar').hide();
  $('.initialOther').show();
  $('#lukeOther').hide();
  attacker = true;
  atkHealth = characters.luke.health;
  attackPow = characters.luke.attackPow;
});
$('#bobaWar').on('click', function() {
  $('#lukeWar').hide();
  $('#reyWar').hide();
  $('#kyloWar').hide();
  $('.initialOther').show();
  $('#bobaOther').hide();
  attacker = true;
  atkHealth = characters.boba.health;
  attackPow = characters.boba.attackPow;
});
$('#reyWar').on('click', function() {
  $('#bobaWar').hide();
  $('#lukeWar').hide();
  $('#kyloWar').hide();
  $('.initialOther').show();
  $('#reyOther').hide();
  attacker = true;
  atkHealth = characters.rey.health;
  attackPow = characters.rey.attackPow;
});
$('#kyloWar').on('click', function() {
  $('#bobaWar').hide();
  $('#reyWar').hide();
  $('#lukeWar').hide();
  $('.initialOther').show();
  $('#kyloOther').hide();
  attacker = true;
  atkHealth = characters.kylo.health;
  attackPow = characters.kylo.counterAtk;
});


<!-- Challangers ON/OFF -->
$('#lukeOther').on('click', function() {
  $('#lukeOther').hide();
  $('#lukeChal').show();
  defender = true;
  defHealth = characters.luke.health;
  counterAtk = characters.luke.counterAtk;
});
$('#bobaOther').on('click', function() {
  $('#bobaOther').hide();
  $('#bobaChal').show();
  defender = true;
  defHealth = characters.boba.health;
  counterAtk = characters.boba.counterAtk;
});
$('#reyOther').on('click', function() {
  $('#reyOther').hide();
  $('#reyChal').show();
  defender = true;
  defHealth = characters.rey.health;
  counterAtk = characters.rey.counterAtk;
});
$('#kyloOther').on('click', function() {
  $('#kyloOther').hide();
  $('#kyloChal').show();
  defender = true;
  defHealth = characters.kylo.health;
  counterAtk = characters.kylo.counterAtk;
});
$('#attack').on('click', function(){
  if (defender) {
    console.log(defHealth);
    defHealth = defHealth - attackPow;
    console.log(defHealth);
    console.log(attackPow);
    attackPow = attackPow + attackPow;
    console.log(attackPow);
    atkHealth = atkHealth - counterAtk;
    console.log(atkHealth);
    if (defHealth <= 0) {
      defender = false;
      console.log('you won');
    };
    if (atkHealth <= 0) {
      console.log('you lose');
    }
  };

});

$('#retreat').on('click', function(){
  location.reload();
});
});
