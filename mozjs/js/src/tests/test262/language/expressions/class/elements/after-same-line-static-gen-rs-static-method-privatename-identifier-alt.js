// |reftest| skip -- class-static-methods-private,class-fields-public is not supported
// This file was procedurally generated from the following sources:
// - src/class-elements/rs-static-method-privatename-identifier-alt.case
// - src/class-elements/productions/cls-expr-after-same-line-static-gen.template
/*---
description: Valid Static Method PrivateName (field definitions after a static generator in the same line)
esid: prod-FieldDefinition
features: [class-static-methods-private, generators, class, class-fields-public]
flags: [generated]
includes: [propertyHelper.js]
info: |
    ClassElement :
      MethodDefinition
      static MethodDefinition
      FieldDefinition ;
      static FieldDefinition ;
      ;

    MethodDefinition :
      ClassElementName ( UniqueFormalParameters ){ FunctionBody }

    ClassElementName :
      PropertyName
      PrivateName

    PrivateName ::
      # IdentifierName

    IdentifierName ::
      IdentifierStart
      IdentifierName IdentifierPart

    IdentifierStart ::
      UnicodeIDStart
      $
      _
      \ UnicodeEscapeSequence

    IdentifierPart::
      UnicodeIDContinue
      $
      \ UnicodeEscapeSequence
      <ZWNJ> <ZWJ>

    UnicodeIDStart::
      any Unicode code point with the Unicode property "ID_Start"

    UnicodeIDContinue::
      any Unicode code point with the Unicode property "ID_Continue"


    NOTE 3
    The sets of code points with Unicode properties "ID_Start" and
    "ID_Continue" include, respectively, the code points with Unicode
    properties "Other_ID_Start" and "Other_ID_Continue".

---*/


var C = class {
  static *m() { return 42; } static #$(value) {
    return value;
  }
  static #_(value) {
    return value;
  }
  static #o(value) {
    return value;
  }
  static #℘(value) {
    return value;
  }
  static #ZW_‌_NJ(value) {
    return value;
  }
  static #ZW_‍_J(value) {
    return value;
  };
  static $(value) {
    return this.#$(value);
  }
  static _(value) {
    return this.#_(value);
  }
  static o(value) {
    return this.#o(value);
  }
  static ℘(value) { // DO NOT CHANGE THE NAME OF THIS FIELD
    return this.#℘(value);
  }
  static ZW_‌_NJ(value) { // DO NOT CHANGE THE NAME OF THIS FIELD
    return this.#ZW_‌_NJ(value);
  }
  static ZW_‍_J(value) { // DO NOT CHANGE THE NAME OF THIS FIELD
    return this.#ZW_‍_J(value);
  }

}

var c = new C();

assert.sameValue(C.m().next().value, 42);
assert.sameValue(Object.hasOwnProperty.call(c, "m"), false);
assert.sameValue(Object.hasOwnProperty.call(C.prototype, "m"), false);

verifyProperty(C, "m", {
  enumerable: false,
  configurable: true,
  writable: true,
});

assert.sameValue(C.$(1), 1);
assert.sameValue(C._(1), 1);
assert.sameValue(C.o(1), 1);
assert.sameValue(C.℘(1), 1); // DO NOT CHANGE THE NAME OF THIS FIELD
assert.sameValue(C.ZW_‌_NJ(1), 1); // DO NOT CHANGE THE NAME OF THIS FIELD
assert.sameValue(C.ZW_‍_J(1), 1); // DO NOT CHANGE THE NAME OF THIS FIELD


reportCompare(0, 0);
