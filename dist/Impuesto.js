"use strict";

require("core-js/modules/es.symbol.description.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// Impuesto.js
var Impuesto = /*#__PURE__*/function () {
  function Impuesto(montoBrutoAnual, deducciones) {
    _classCallCheck(this, Impuesto);
    this.montoBrutoAnual = montoBrutoAnual;
    this.deducciones = deducciones;
  }

  // Getters
  return _createClass(Impuesto, [{
    key: "getMontoBrutoAnual",
    value: function getMontoBrutoAnual() {
      return this.montoBrutoAnual;
    }
  }, {
    key: "getDeducciones",
    value: function getDeducciones() {
      return this.deducciones;
    }

    // Setters
  }, {
    key: "setMontoBrutoAnual",
    value: function setMontoBrutoAnual(nuevoMontoBrutoAnual) {
      this.montoBrutoAnual = nuevoMontoBrutoAnual;
    }
  }, {
    key: "setDeducciones",
    value: function setDeducciones(nuevasDeducciones) {
      this.deducciones = nuevasDeducciones;
    }
  }]);
}(); // Exportar la clase Impuesto
var _default = exports["default"] = Impuesto;