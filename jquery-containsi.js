/*!
 * jQuery containsi v0.1.0 - http://github.com/robloach/jquery-containsi
 * @license MIT
 *   http://opensource.org/licenses/MIT
 * @author Rob Loach
 */

/**
 * Universal Module Definition
 *
 * @see {@link http://github.com/umdjs/umd}
 */
(function (factory) {
  'use strict';

  if (typeof exports === 'object') {
    // CommonJS
    factory(require('jquery'));
  } else if (typeof define === 'function' && define.amd) {
    // AMD
    /* globals define */
    define(['jquery'], factory);
  } else {
    // Global object
    /* globals jQuery, window */
    factory(jQuery || window.jQuery);
  }
})(function ($) {
  'use strict';

  /**
   * Case-insensitive :contains() pseudo selector for jQuery.
   *
   * @example
   * $("div:containsi('john')").css("text-decoration", "underline");
   */
  $.expr[":"].containsi = function(element, index, match) {
    // Retrieve the text contents of the element.
    var textContents = element.textContent || element.innerText || ''

    // Normalize to lowercase to match correctly.
    return textContents.toLowerCase().indexOf((match[3] || '').toLowerCase()) > -1;
  };

});
