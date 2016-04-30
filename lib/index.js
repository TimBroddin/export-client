'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var exportClient = exports.exportClient = function exportClient(input) {
  if (typeof window !== 'undefined') {
    Object.assign(window, input);
  }
};