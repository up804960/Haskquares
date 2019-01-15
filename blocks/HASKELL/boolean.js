'use strict';
goog.require('Blockly.Blocks');
goog.require('Blockly');
goog.provide('Blockly.Blocks.HaskBool');

// Booleans
Blockly.Blocks['hasktrue'] = {
    init: function() {
        this.appendValueInput('VALUE')
            .setCheck('Boolean')
            .appendField("true");
       this.setOutput(true, 'Boolean');
       this.setColour('#ce3ba0');
    }
};

Blockly.Blocks['haskfalse'] = {
    init: function() {
        this.appendValueInput('VALUE')
            .setCheck('Boolean')
            .appendField("false");
       this.setOutput(true, 'Boolean');
       this.setColour('#ce3ba0');
    }
};
