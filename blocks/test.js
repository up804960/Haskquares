'use strict';
goog.require('Blockly.Blocks');
goog.require('Blockly');
goog.provide('Blockly.Blocks.HaskTest');

// Booleans
Blockly.Blocks['metest'] = {
    init: function() {
        this.appendValueInput('VALUE')
            .setCheck('String')
            .appendField("true");
       this.setOutput(true);
    }
};
