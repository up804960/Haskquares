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
       this.setColour('#4286f4');
    }
};

Blockly.Blocks['haskTestInputReal'] = {
    init: function() {
        this.appendValueInput('VALUE')
            .setCheck(['Null'])
            .appendField("501");
       this.setOutput(true, TypeClass[1]);
       this.setColour('#2845a3');
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

Blockly.Blocks['haskTestCoreEnum'] = {
  init: function() {
    this.appendValueInput("inputL")
        .setCheck(TypeClass[3])
        .appendField("");
    this.appendValueInput("inputR")
        .setCheck(TypeClass[3])
        .appendField("+");
    this.setInputsInline(true);
    this.setOutput(true, TypeClass[3])
    this.setColour('#7d874e');
  }
};

Blockly.Blocks['haskTestInputEnum'] = {
    init: function() {
        this.appendValueInput('VALUE')
            .setCheck(['Null'])
            .appendField("1047");
       this.setOutput(true, TypeClass[3]);
       this.setColour('#7d874e');
    }
};

Blockly.Blocks['haskTestInputIntegral'] = {
    init: function() {
        this.appendValueInput('VALUE')
            .setCheck(['Null'])
            .appendField("404");
       this.setOutput(true, TypeClass[4]);
       this.setColour('#7ec962');
    }
};

Blockly.Blocks['haskTestCoreIntegral'] = {
  init: function() {
    this.appendValueInput("inputL")
        .setCheck(TypeClass[4])
        .appendField("");
    this.appendValueInput("inputR")
        .setCheck(TypeClass[4])
        .appendField("+");
    this.setInputsInline(true);
    this.setOutput(true, TypeClass[4])
    this.setColour('#7ec962');
  }
};

Blockly.Blocks['haskTestInputRealFloat'] = {
    init: function() {
        this.appendValueInput('VALUE')
            .setCheck(['Null'])
            .appendField("2.66");
       this.setOutput(true, TypeClass[7]);
       this.setColour('#42eef4');
    }
};

Blockly.Blocks['haskTestCoreRealFloat'] = {
  init: function() {
    this.appendValueInput("inputL")
        .setCheck(TypeClass[7])
        .appendField("");
    this.appendValueInput("inputR")
        .setCheck(TypeClass[7])
        .appendField("+");
    this.setInputsInline(true);
    this.setOutput(true, TypeClass[7])
    this.setColour('#42eef4');
  }
};
