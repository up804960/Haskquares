'use strict';
goog.require('Blockly.Blocks');
goog.require('Blockly');
goog.provide('Blockly.Blocks.HaskTest');

Blockly.Blocks['haskTestCoreNum'] = {
  init: function() {
    this.appendValueInput("inputL")
        .setCheck(TypeClass[0])
        .appendField("");
    this.appendValueInput("inputR")
        .setCheck(TypeClass[0])
        .appendField("+");
    this.setInputsInline(true);
    this.setOutput(true, TypeClass[0])
    this.setColour('#4286f4');
  }
};

Blockly.Blocks['haskTestCoreReal'] = {
  init: function() {
    this.appendValueInput("inputL")
        .setCheck(TypeClass[1])
        .appendField("");
    this.appendValueInput("inputR")
        .setCheck(TypeClass[1])
        .appendField("+");
    this.setInputsInline(true);
    this.setOutput(true, TypeClass[1])
    this.setColour('#2845a3');
  }
};


Blockly.Blocks['haskTestInputNum'] = {
    init: function() {
        this.appendValueInput('VALUE')
            .setCheck(['Null'])
            .appendField("52");
       this.setOutput(true, TypeClass[0]);
       this.setColour('#7c1c6d');
    }
};

Blockly.Blocks['haskTestInputReal'] = {
    init: function() {
        this.appendValueInput('VALUE')
            .setCheck(['Null'])
            .appendField("501");
       this.setOutput(true, TypeClass[1]);
       this.setColour('#7c1111');
    }
};

Blockly.Blocks['haskTestInputRealFrac'] = {
    init: function() {
        this.appendValueInput('VALUE')
            .setCheck(['Null'])
            .appendField("255");
       this.setOutput(true, TypeClass[5]);
       this.setColour('#6a1531');
    }
};
