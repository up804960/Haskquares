'use strict';
goog.require('Blockly.Blocks');
goog.require('Blockly');
goog.provide('Blockly.Blocks.HaskNum');
/* neutral type numbers "Num", to be used when recursive type check function is working*/
Blockly.Blocks['haskNum1'] = {
    init: function() {
        this.appendValueInput('VALUE')
            .setCheck('Num')
            .appendField("5");
       this.setOutput(true, 'Num');
       this.setColour('#919191');
    }
};

Blockly.Blocks['haskNum2'] = {
    init: function() {
        this.appendValueInput('VALUE')
            .setCheck('Num')
            .appendField("12");
       this.setOutput(true, 'Num');
       this.setColour('#919191');
    }
};

Blockly.Blocks['haskint'] = {
    init: function() {
        this.appendValueInput('VALUE')
            .setCheck('Int')
            .appendField("13");
       this.setOutput(true, 'Int');
       this.setColour('#f44b42');
    }
};

Blockly.Blocks['haskdouble'] = {
    init: function() {
        this.appendValueInput('VALUE')
            .setCheck('Double')
            .appendField("3.14");
       this.setOutput(true, 'Double');
       this.setColour('#14a8a0');
    }
};

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
