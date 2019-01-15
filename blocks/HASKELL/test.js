'use strict';
goog.require('Blockly.Blocks');
goog.require('Blockly');
goog.provide('Blockly.Blocks.HaskTest');

// Booleans
Blockly.Blocks['hasktrue'] = {
    init: function() {
        this.appendValueInput('VALUE')
            .setCheck('Null')
            .appendField("true");
       this.setOutput(true, 'Boolean');
       this.setColour('#4315af');
    }
};

Blockly.Blocks['haskfalse'] = {
    init: function() {
        this.appendValueInput('VALUE')
            .setCheck('Null')
            .appendField("false");
       this.setOutput(true, 'Boolean');
       this.setColour('#4315af');
    }
};

//Numerics

Blockly.Blocks['haskint'] = {
    init: function() {
        this.appendValueInput('VALUE')
            .setCheck('Null')
            .appendField("13");
       this.setOutput(true, 'Int');
       this.setColour('#f44b42');
    }
};

Blockly.Blocks['haskdouble'] = {
    init: function() {
        this.appendValueInput('VALUE')
            .setCheck('Null')
            .appendField("3.14");
       this.setOutput(true, 'Double');
       this.setColour('#14a8a0');
    }
};

//Strings
Blockly.Blocks['haskchar'] = {
    init: function() {
        this.appendValueInput('VALUE')
            .setCheck('Null')
            .appendField("t");
       this.setOutput(true, 'Char');
       this.setColour('#22e23b');
    }
};

Blockly.Blocks['haskstring'] = {
    init: function() {
        this.appendValueInput('VALUE')
            .setCheck('Null')
            .appendField("words");
       this.setOutput(true, 'String');
       this.setColour('#22e23b');
    }
};
