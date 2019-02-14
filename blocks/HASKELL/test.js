'use strict';
goog.require('Blockly.Blocks');
goog.require('Blockly');
goog.provide('Blockly.Blocks.HaskTest');

Blockly.Blocks['haskTestCoreNum'] = {
  init: function() {
	this.blockClass = TypeClass[0]
    this.appendValueInput("inputL")
        .setCheck(this.blockClass)
        .appendField("");
    this.appendValueInput("inputR")
        .setCheck(this.blockClass)
        .appendField("+");
    this.setInputsInline(true);
    this.setOutput(true, this.blockClass)
    this.setColour(this.blockClass[4]);
  }
};

Blockly.Blocks['haskTestInputNum'] = {
    init: function() {
		this.blockClass = TypeClass[0]
        this.appendValueInput('VALUE')
            .setCheck(['Null'])
            .appendField("52");
		this.setOutput(true, this.blockClass);
		this.setColour(this.blockClass[4]);
    }
};

Blockly.Blocks['haskTestCoreReal'] = {
  init: function() {
	this.blockClass = TypeClass[1]
    this.appendValueInput("inputL")
        .setCheck(this.blockClass)
        .appendField("");
    this.appendValueInput("inputR")
        .setCheck(this.blockClass)
        .appendField("+");
    this.setInputsInline(true);
    this.setOutput(true, this.blockClass)
    this.setColour(this.blockClass[4]);
  }
};


Blockly.Blocks['haskTestInputReal'] = {
    init: function() {
		this.blockClass = TypeClass[1]
        this.appendValueInput('VALUE')
            .setCheck(['Null'])
            .appendField("501");
		this.setOutput(true, this.blockClass);
		this.setColour(this.blockClass[4]);
    }
};

Blockly.Blocks['haskTestInputRealFrac'] = {
    init: function() {
		this.blockClass = TypeClass[5]
        this.appendValueInput('VALUE')
            .setCheck(['Null'])
            .appendField("255");
       this.setOutput(true, this.blockClass);
       this.setColour(this.blockClass[4]);
    }
};

Blockly.Blocks['haskTestCoreEnum'] = {
  init: function() {
	this.blockClass = TypeClass[3]
    this.appendValueInput("inputL")
        .setCheck(this.blockClass)
        .appendField("");
    this.appendValueInput("inputR")
        .setCheck(this.blockClass)
        .appendField("+");
    this.setInputsInline(true);
    this.setOutput(true, this.blockClass)
    this.setColour(this.blockClass[4]);
  }
};

Blockly.Blocks['haskTestInputEnum'] = {
    init: function() {
		this.blockClass = TypeClass[3]
        this.appendValueInput('VALUE')
            .setCheck(['Null'])
            .appendField("1047");
		this.setOutput(true, this.blockClass);
		this.setColour(this.blockClass[4]);
    }
};

Blockly.Blocks['haskTestInputIntegral'] = {
    init: function() {
		this.blockClass = TypeClass[4]
        this.appendValueInput('VALUE')
            .setCheck(['Null'])
            .appendField("404");
		this.setOutput(true, this.blockClass);
		this.setColour(this.blockClass[4]);
    }
};

Blockly.Blocks['haskTestCoreIntegral'] = {
  init: function() {
	this.blockClass = TypeClass[4]
    this.appendValueInput("inputL")
        .setCheck(this.blockClass)
        .appendField("");
    this.appendValueInput("inputR")
        .setCheck(this.blockClass)
        .appendField("+");
    this.setInputsInline(true);
    this.setOutput(true, this.blockClass)
    this.setColour(this.blockClass[4]);
  }
};

Blockly.Blocks['haskTestInputRealFloat'] = {
    init: function() {
		this.blockClass = TypeClass[7]
        this.appendValueInput('VALUE')
            .setCheck(['Null'])
            .appendField("2.66");
       this.setOutput(true, this.blockClass);
       this.setColour(this.blockClass[4]);
    }
};

Blockly.Blocks['haskTestCoreRealFloat'] = {
  init: function() {
	this.blockClass = TypeClass[7]
    this.appendValueInput("inputL")
        .setCheck(this.blockClass)
        .appendField("");
    this.appendValueInput("inputR")
        .setCheck(this.blockClass)
        .appendField("+");
    this.setInputsInline(true);
    this.setOutput(true, this.blockClass)
    this.setColour(this.blockClass[4]);
  }
};
