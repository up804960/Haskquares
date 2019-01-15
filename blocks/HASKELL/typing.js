goog.require('Blockly.Blocks');
goog.require('Blockly');
goog.provide('Blockly.Blocks.HaskTyping');

Blockly.Blocks['hasksum2'] = {
  init: function() {
    this.appendValueInput("inputL")
        .setCheck(['Int', 'Integer', 'Double', 'Float'])
        .appendField("");
    this.appendValueInput("inputR")
        .setCheck(['Int', 'Integer', 'Double', 'Float'])
        .appendField("+");
    this.setInputsInline(true);
    this.setColour('#edea9a');
  },
    onchange : function() {
        this.setColour('#FFF000');
      }
    };
