'use strict';
goog.require('Blockly.Blocks');
goog.require('Blockly');
goog.provide('Blockly.Blocks.HaskChar');

Blockly.Blocks['haskchar'] = {
    init: function() {
        this.appendValueInput('VALUE')
            .setCheck('Char')
            .appendField("t");
       this.setOutput(true, 'Char');
       this.setColour('#41913b');
    }
};

Blockly.Blocks['haskstring'] = {
    init: function() {
        this.appendValueInput('VALUE')
            .setCheck('String')
            .appendField("words");
       this.setOutput(true, 'String');
       this.setColour('#41913b');
    }
};
