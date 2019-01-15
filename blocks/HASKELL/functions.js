'use strict';
goog.require('Blockly.Blocks');
goog.require('Blockly');
goog.provide('Blockly.Blocks.HaskFunc');


Blockly.Blocks['hasksum'] = {
  init: function() {
    this.appendValueInput("inputL")
        .setCheck(['Int', 'Integer', 'Double', 'Float'])
        .appendField("");
    this.appendValueInput("inputR")
        .setCheck(['Int', 'Integer', 'Double', 'Float'])
        .appendField("+");
    this.setInputsInline(true);
    this.setColour('#edea9a');
  }
};

Blockly.Blocks['haskminus'] = {
  init: function() {
    this.appendValueInput("inputL")
        .setCheck(['Int', 'Integer', 'Double', 'Float'])
        .appendField("");
    this.appendValueInput("inputR")
        .setCheck(['Int', 'Integer', 'Double', 'Float'])
        .appendField("-");
    this.setInputsInline(true);
    this.setColour('#edea9a');
  }
};

Blockly.Blocks['hasktimes'] = {
  init: function() {
    this.appendValueInput("inputL")
        .setCheck(['Int', 'Integer', 'Double', 'Float'])
        .appendField("");
    this.appendValueInput("inputR")
        .setCheck(['Int', 'Integer', 'Double', 'Float'])
        .appendField("*");
    this.setInputsInline(true);
    this.setColour('#edea9a');
  }
};

Blockly.Blocks['haskdivide'] = {
  init: function() {
    this.appendValueInput("inputL")
        .setCheck(['Int', 'Integer', 'Double', 'Float'])
        .appendField("");
    this.appendValueInput("inputR")
        .setCheck(['Int', 'Integer', 'Double', 'Float'])
        .appendField("/");
    this.setInputsInline(true);
    this.setColour('#edea9a');
  }
};

Blockly.Blocks['hasklength'] = {
  init: function() {
    this.appendValueInput("input")
        .setCheck(['Int', 'Integer', 'Double', 'Float'])
        .appendField("Length");
    this.setInputsInline(true);
    this.setColour('#edea9a');
  }
};
