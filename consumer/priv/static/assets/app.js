(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __reExport = (target, module, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toModule = (module) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };

  // node_modules/luxon/build/cjs-browser/luxon.js
  var require_luxon = __commonJS({
    "node_modules/luxon/build/cjs-browser/luxon.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _extends() {
        _extends = Object.assign || function(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }
          return target;
        };
        return _extends.apply(this, arguments);
      }
      function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
        _setPrototypeOf(subClass, superClass);
      }
      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _getPrototypeOf(o);
      }
      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _setPrototypeOf(o, p);
      }
      function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _construct(Parent, args, Class) {
        if (_isNativeReflectConstruct()) {
          _construct = Reflect.construct;
        } else {
          _construct = function _construct2(Parent2, args2, Class2) {
            var a = [null];
            a.push.apply(a, args2);
            var Constructor = Function.bind.apply(Parent2, a);
            var instance = new Constructor();
            if (Class2)
              _setPrototypeOf(instance, Class2.prototype);
            return instance;
          };
        }
        return _construct.apply(null, arguments);
      }
      function _isNativeFunction(fn) {
        return Function.toString.call(fn).indexOf("[native code]") !== -1;
      }
      function _wrapNativeSuper(Class) {
        var _cache = typeof Map === "function" ? /* @__PURE__ */ new Map() : void 0;
        _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
          if (Class2 === null || !_isNativeFunction(Class2))
            return Class2;
          if (typeof Class2 !== "function") {
            throw new TypeError("Super expression must either be null or a function");
          }
          if (typeof _cache !== "undefined") {
            if (_cache.has(Class2))
              return _cache.get(Class2);
            _cache.set(Class2, Wrapper);
          }
          function Wrapper() {
            return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
          }
          Wrapper.prototype = Object.create(Class2.prototype, {
            constructor: {
              value: Wrapper,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
          return _setPrototypeOf(Wrapper, Class2);
        };
        return _wrapNativeSuper(Class);
      }
      function _objectWithoutPropertiesLoose(source, excluded) {
        if (source == null)
          return {};
        var target = {};
        var sourceKeys = Object.keys(source);
        var key, i;
        for (i = 0; i < sourceKeys.length; i++) {
          key = sourceKeys[i];
          if (excluded.indexOf(key) >= 0)
            continue;
          target[key] = source[key];
        }
        return target;
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return _arrayLikeToArray(o, minLen);
        var n2 = Object.prototype.toString.call(o).slice(8, -1);
        if (n2 === "Object" && o.constructor)
          n2 = o.constructor.name;
        if (n2 === "Map" || n2 === "Set")
          return Array.from(o);
        if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
          return _arrayLikeToArray(o, minLen);
      }
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++)
          arr2[i] = arr[i];
        return arr2;
      }
      function _createForOfIteratorHelperLoose(o, allowArrayLike) {
        var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
        if (it)
          return (it = it.call(o)).next.bind(it);
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
          if (it)
            o = it;
          var i = 0;
          return function() {
            if (i >= o.length)
              return {
                done: true
              };
            return {
              done: false,
              value: o[i++]
            };
          };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var LuxonError = /* @__PURE__ */ function(_Error) {
        _inheritsLoose(LuxonError2, _Error);
        function LuxonError2() {
          return _Error.apply(this, arguments) || this;
        }
        return LuxonError2;
      }(/* @__PURE__ */ _wrapNativeSuper(Error));
      var InvalidDateTimeError = /* @__PURE__ */ function(_LuxonError) {
        _inheritsLoose(InvalidDateTimeError2, _LuxonError);
        function InvalidDateTimeError2(reason) {
          return _LuxonError.call(this, "Invalid DateTime: " + reason.toMessage()) || this;
        }
        return InvalidDateTimeError2;
      }(LuxonError);
      var InvalidIntervalError = /* @__PURE__ */ function(_LuxonError2) {
        _inheritsLoose(InvalidIntervalError2, _LuxonError2);
        function InvalidIntervalError2(reason) {
          return _LuxonError2.call(this, "Invalid Interval: " + reason.toMessage()) || this;
        }
        return InvalidIntervalError2;
      }(LuxonError);
      var InvalidDurationError = /* @__PURE__ */ function(_LuxonError3) {
        _inheritsLoose(InvalidDurationError2, _LuxonError3);
        function InvalidDurationError2(reason) {
          return _LuxonError3.call(this, "Invalid Duration: " + reason.toMessage()) || this;
        }
        return InvalidDurationError2;
      }(LuxonError);
      var ConflictingSpecificationError = /* @__PURE__ */ function(_LuxonError4) {
        _inheritsLoose(ConflictingSpecificationError2, _LuxonError4);
        function ConflictingSpecificationError2() {
          return _LuxonError4.apply(this, arguments) || this;
        }
        return ConflictingSpecificationError2;
      }(LuxonError);
      var InvalidUnitError = /* @__PURE__ */ function(_LuxonError5) {
        _inheritsLoose(InvalidUnitError2, _LuxonError5);
        function InvalidUnitError2(unit) {
          return _LuxonError5.call(this, "Invalid unit " + unit) || this;
        }
        return InvalidUnitError2;
      }(LuxonError);
      var InvalidArgumentError = /* @__PURE__ */ function(_LuxonError6) {
        _inheritsLoose(InvalidArgumentError2, _LuxonError6);
        function InvalidArgumentError2() {
          return _LuxonError6.apply(this, arguments) || this;
        }
        return InvalidArgumentError2;
      }(LuxonError);
      var ZoneIsAbstractError = /* @__PURE__ */ function(_LuxonError7) {
        _inheritsLoose(ZoneIsAbstractError2, _LuxonError7);
        function ZoneIsAbstractError2() {
          return _LuxonError7.call(this, "Zone is an abstract class") || this;
        }
        return ZoneIsAbstractError2;
      }(LuxonError);
      var n = "numeric";
      var s = "short";
      var l = "long";
      var DATE_SHORT = {
        year: n,
        month: n,
        day: n
      };
      var DATE_MED = {
        year: n,
        month: s,
        day: n
      };
      var DATE_MED_WITH_WEEKDAY = {
        year: n,
        month: s,
        day: n,
        weekday: s
      };
      var DATE_FULL = {
        year: n,
        month: l,
        day: n
      };
      var DATE_HUGE = {
        year: n,
        month: l,
        day: n,
        weekday: l
      };
      var TIME_SIMPLE = {
        hour: n,
        minute: n
      };
      var TIME_WITH_SECONDS = {
        hour: n,
        minute: n,
        second: n
      };
      var TIME_WITH_SHORT_OFFSET = {
        hour: n,
        minute: n,
        second: n,
        timeZoneName: s
      };
      var TIME_WITH_LONG_OFFSET = {
        hour: n,
        minute: n,
        second: n,
        timeZoneName: l
      };
      var TIME_24_SIMPLE = {
        hour: n,
        minute: n,
        hourCycle: "h23"
      };
      var TIME_24_WITH_SECONDS = {
        hour: n,
        minute: n,
        second: n,
        hourCycle: "h23"
      };
      var TIME_24_WITH_SHORT_OFFSET = {
        hour: n,
        minute: n,
        second: n,
        hourCycle: "h23",
        timeZoneName: s
      };
      var TIME_24_WITH_LONG_OFFSET = {
        hour: n,
        minute: n,
        second: n,
        hourCycle: "h23",
        timeZoneName: l
      };
      var DATETIME_SHORT = {
        year: n,
        month: n,
        day: n,
        hour: n,
        minute: n
      };
      var DATETIME_SHORT_WITH_SECONDS = {
        year: n,
        month: n,
        day: n,
        hour: n,
        minute: n,
        second: n
      };
      var DATETIME_MED = {
        year: n,
        month: s,
        day: n,
        hour: n,
        minute: n
      };
      var DATETIME_MED_WITH_SECONDS = {
        year: n,
        month: s,
        day: n,
        hour: n,
        minute: n,
        second: n
      };
      var DATETIME_MED_WITH_WEEKDAY = {
        year: n,
        month: s,
        day: n,
        weekday: s,
        hour: n,
        minute: n
      };
      var DATETIME_FULL = {
        year: n,
        month: l,
        day: n,
        hour: n,
        minute: n,
        timeZoneName: s
      };
      var DATETIME_FULL_WITH_SECONDS = {
        year: n,
        month: l,
        day: n,
        hour: n,
        minute: n,
        second: n,
        timeZoneName: s
      };
      var DATETIME_HUGE = {
        year: n,
        month: l,
        day: n,
        weekday: l,
        hour: n,
        minute: n,
        timeZoneName: l
      };
      var DATETIME_HUGE_WITH_SECONDS = {
        year: n,
        month: l,
        day: n,
        weekday: l,
        hour: n,
        minute: n,
        second: n,
        timeZoneName: l
      };
      function isUndefined(o) {
        return typeof o === "undefined";
      }
      function isNumber2(o) {
        return typeof o === "number";
      }
      function isInteger(o) {
        return typeof o === "number" && o % 1 === 0;
      }
      function isString(o) {
        return typeof o === "string";
      }
      function isDate(o) {
        return Object.prototype.toString.call(o) === "[object Date]";
      }
      function hasRelative() {
        try {
          return typeof Intl !== "undefined" && !!Intl.RelativeTimeFormat;
        } catch (e) {
          return false;
        }
      }
      function maybeArray(thing) {
        return Array.isArray(thing) ? thing : [thing];
      }
      function bestBy(arr, by, compare) {
        if (arr.length === 0) {
          return void 0;
        }
        return arr.reduce(function(best, next) {
          var pair = [by(next), next];
          if (!best) {
            return pair;
          } else if (compare(best[0], pair[0]) === best[0]) {
            return best;
          } else {
            return pair;
          }
        }, null)[1];
      }
      function pick(obj, keys) {
        return keys.reduce(function(a, k) {
          a[k] = obj[k];
          return a;
        }, {});
      }
      function hasOwnProperty(obj, prop) {
        return Object.prototype.hasOwnProperty.call(obj, prop);
      }
      function integerBetween(thing, bottom, top) {
        return isInteger(thing) && thing >= bottom && thing <= top;
      }
      function floorMod(x, n2) {
        return x - n2 * Math.floor(x / n2);
      }
      function padStart(input, n2) {
        if (n2 === void 0) {
          n2 = 2;
        }
        var isNeg = input < 0;
        var padded;
        if (isNeg) {
          padded = "-" + ("" + -input).padStart(n2, "0");
        } else {
          padded = ("" + input).padStart(n2, "0");
        }
        return padded;
      }
      function parseInteger(string) {
        if (isUndefined(string) || string === null || string === "") {
          return void 0;
        } else {
          return parseInt(string, 10);
        }
      }
      function parseFloating(string) {
        if (isUndefined(string) || string === null || string === "") {
          return void 0;
        } else {
          return parseFloat(string);
        }
      }
      function parseMillis(fraction) {
        if (isUndefined(fraction) || fraction === null || fraction === "") {
          return void 0;
        } else {
          var f = parseFloat("0." + fraction) * 1e3;
          return Math.floor(f);
        }
      }
      function roundTo(number, digits, towardZero) {
        if (towardZero === void 0) {
          towardZero = false;
        }
        var factor = Math.pow(10, digits), rounder = towardZero ? Math.trunc : Math.round;
        return rounder(number * factor) / factor;
      }
      function isLeapYear(year) {
        return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
      }
      function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
      }
      function daysInMonth(year, month) {
        var modMonth = floorMod(month - 1, 12) + 1, modYear = year + (month - modMonth) / 12;
        if (modMonth === 2) {
          return isLeapYear(modYear) ? 29 : 28;
        } else {
          return [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][modMonth - 1];
        }
      }
      function objToLocalTS(obj) {
        var d = Date.UTC(obj.year, obj.month - 1, obj.day, obj.hour, obj.minute, obj.second, obj.millisecond);
        if (obj.year < 100 && obj.year >= 0) {
          d = new Date(d);
          d.setUTCFullYear(d.getUTCFullYear() - 1900);
        }
        return +d;
      }
      function weeksInWeekYear(weekYear) {
        var p1 = (weekYear + Math.floor(weekYear / 4) - Math.floor(weekYear / 100) + Math.floor(weekYear / 400)) % 7, last = weekYear - 1, p2 = (last + Math.floor(last / 4) - Math.floor(last / 100) + Math.floor(last / 400)) % 7;
        return p1 === 4 || p2 === 3 ? 53 : 52;
      }
      function untruncateYear(year) {
        if (year > 99) {
          return year;
        } else
          return year > 60 ? 1900 + year : 2e3 + year;
      }
      function parseZoneInfo(ts, offsetFormat, locale, timeZone) {
        if (timeZone === void 0) {
          timeZone = null;
        }
        var date = new Date(ts), intlOpts = {
          hourCycle: "h23",
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit"
        };
        if (timeZone) {
          intlOpts.timeZone = timeZone;
        }
        var modified = _extends({
          timeZoneName: offsetFormat
        }, intlOpts);
        var parsed = new Intl.DateTimeFormat(locale, modified).formatToParts(date).find(function(m) {
          return m.type.toLowerCase() === "timezonename";
        });
        return parsed ? parsed.value : null;
      }
      function signedOffset(offHourStr, offMinuteStr) {
        var offHour = parseInt(offHourStr, 10);
        if (Number.isNaN(offHour)) {
          offHour = 0;
        }
        var offMin = parseInt(offMinuteStr, 10) || 0, offMinSigned = offHour < 0 || Object.is(offHour, -0) ? -offMin : offMin;
        return offHour * 60 + offMinSigned;
      }
      function asNumber(value) {
        var numericValue = Number(value);
        if (typeof value === "boolean" || value === "" || Number.isNaN(numericValue))
          throw new InvalidArgumentError("Invalid unit value " + value);
        return numericValue;
      }
      function normalizeObject(obj, normalizer) {
        var normalized = {};
        for (var u in obj) {
          if (hasOwnProperty(obj, u)) {
            var v = obj[u];
            if (v === void 0 || v === null)
              continue;
            normalized[normalizer(u)] = asNumber(v);
          }
        }
        return normalized;
      }
      function formatOffset(offset2, format) {
        var hours = Math.trunc(Math.abs(offset2 / 60)), minutes = Math.trunc(Math.abs(offset2 % 60)), sign2 = offset2 >= 0 ? "+" : "-";
        switch (format) {
          case "short":
            return "" + sign2 + padStart(hours, 2) + ":" + padStart(minutes, 2);
          case "narrow":
            return "" + sign2 + hours + (minutes > 0 ? ":" + minutes : "");
          case "techie":
            return "" + sign2 + padStart(hours, 2) + padStart(minutes, 2);
          default:
            throw new RangeError("Value format " + format + " is out of range for property format");
        }
      }
      function timeObject(obj) {
        return pick(obj, ["hour", "minute", "second", "millisecond"]);
      }
      var ianaRegex = /[A-Za-z_+-]{1,256}(:?\/[A-Za-z0-9_+-]{1,256}(\/[A-Za-z0-9_+-]{1,256})?)?/;
      var monthsLong = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      var monthsShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      var monthsNarrow = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
      function months(length) {
        switch (length) {
          case "narrow":
            return [].concat(monthsNarrow);
          case "short":
            return [].concat(monthsShort);
          case "long":
            return [].concat(monthsLong);
          case "numeric":
            return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
          case "2-digit":
            return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
          default:
            return null;
        }
      }
      var weekdaysLong = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
      var weekdaysShort = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
      var weekdaysNarrow = ["M", "T", "W", "T", "F", "S", "S"];
      function weekdays(length) {
        switch (length) {
          case "narrow":
            return [].concat(weekdaysNarrow);
          case "short":
            return [].concat(weekdaysShort);
          case "long":
            return [].concat(weekdaysLong);
          case "numeric":
            return ["1", "2", "3", "4", "5", "6", "7"];
          default:
            return null;
        }
      }
      var meridiems = ["AM", "PM"];
      var erasLong = ["Before Christ", "Anno Domini"];
      var erasShort = ["BC", "AD"];
      var erasNarrow = ["B", "A"];
      function eras(length) {
        switch (length) {
          case "narrow":
            return [].concat(erasNarrow);
          case "short":
            return [].concat(erasShort);
          case "long":
            return [].concat(erasLong);
          default:
            return null;
        }
      }
      function meridiemForDateTime(dt) {
        return meridiems[dt.hour < 12 ? 0 : 1];
      }
      function weekdayForDateTime(dt, length) {
        return weekdays(length)[dt.weekday - 1];
      }
      function monthForDateTime(dt, length) {
        return months(length)[dt.month - 1];
      }
      function eraForDateTime(dt, length) {
        return eras(length)[dt.year < 0 ? 0 : 1];
      }
      function formatRelativeTime(unit, count, numeric, narrow) {
        if (numeric === void 0) {
          numeric = "always";
        }
        if (narrow === void 0) {
          narrow = false;
        }
        var units = {
          years: ["year", "yr."],
          quarters: ["quarter", "qtr."],
          months: ["month", "mo."],
          weeks: ["week", "wk."],
          days: ["day", "day", "days"],
          hours: ["hour", "hr."],
          minutes: ["minute", "min."],
          seconds: ["second", "sec."]
        };
        var lastable = ["hours", "minutes", "seconds"].indexOf(unit) === -1;
        if (numeric === "auto" && lastable) {
          var isDay = unit === "days";
          switch (count) {
            case 1:
              return isDay ? "tomorrow" : "next " + units[unit][0];
            case -1:
              return isDay ? "yesterday" : "last " + units[unit][0];
            case 0:
              return isDay ? "today" : "this " + units[unit][0];
          }
        }
        var isInPast = Object.is(count, -0) || count < 0, fmtValue = Math.abs(count), singular = fmtValue === 1, lilUnits = units[unit], fmtUnit = narrow ? singular ? lilUnits[1] : lilUnits[2] || lilUnits[1] : singular ? units[unit][0] : unit;
        return isInPast ? fmtValue + " " + fmtUnit + " ago" : "in " + fmtValue + " " + fmtUnit;
      }
      function stringifyTokens(splits, tokenToString) {
        var s2 = "";
        for (var _iterator = _createForOfIteratorHelperLoose(splits), _step; !(_step = _iterator()).done; ) {
          var token = _step.value;
          if (token.literal) {
            s2 += token.val;
          } else {
            s2 += tokenToString(token.val);
          }
        }
        return s2;
      }
      var _macroTokenToFormatOpts = {
        D: DATE_SHORT,
        DD: DATE_MED,
        DDD: DATE_FULL,
        DDDD: DATE_HUGE,
        t: TIME_SIMPLE,
        tt: TIME_WITH_SECONDS,
        ttt: TIME_WITH_SHORT_OFFSET,
        tttt: TIME_WITH_LONG_OFFSET,
        T: TIME_24_SIMPLE,
        TT: TIME_24_WITH_SECONDS,
        TTT: TIME_24_WITH_SHORT_OFFSET,
        TTTT: TIME_24_WITH_LONG_OFFSET,
        f: DATETIME_SHORT,
        ff: DATETIME_MED,
        fff: DATETIME_FULL,
        ffff: DATETIME_HUGE,
        F: DATETIME_SHORT_WITH_SECONDS,
        FF: DATETIME_MED_WITH_SECONDS,
        FFF: DATETIME_FULL_WITH_SECONDS,
        FFFF: DATETIME_HUGE_WITH_SECONDS
      };
      var Formatter = /* @__PURE__ */ function() {
        Formatter2.create = function create(locale, opts) {
          if (opts === void 0) {
            opts = {};
          }
          return new Formatter2(locale, opts);
        };
        Formatter2.parseFormat = function parseFormat(fmt) {
          var current = null, currentFull = "", bracketed = false;
          var splits = [];
          for (var i = 0; i < fmt.length; i++) {
            var c = fmt.charAt(i);
            if (c === "'") {
              if (currentFull.length > 0) {
                splits.push({
                  literal: bracketed,
                  val: currentFull
                });
              }
              current = null;
              currentFull = "";
              bracketed = !bracketed;
            } else if (bracketed) {
              currentFull += c;
            } else if (c === current) {
              currentFull += c;
            } else {
              if (currentFull.length > 0) {
                splits.push({
                  literal: false,
                  val: currentFull
                });
              }
              currentFull = c;
              current = c;
            }
          }
          if (currentFull.length > 0) {
            splits.push({
              literal: bracketed,
              val: currentFull
            });
          }
          return splits;
        };
        Formatter2.macroTokenToFormatOpts = function macroTokenToFormatOpts(token) {
          return _macroTokenToFormatOpts[token];
        };
        function Formatter2(locale, formatOpts) {
          this.opts = formatOpts;
          this.loc = locale;
          this.systemLoc = null;
        }
        var _proto = Formatter2.prototype;
        _proto.formatWithSystemDefault = function formatWithSystemDefault(dt, opts) {
          if (this.systemLoc === null) {
            this.systemLoc = this.loc.redefaultToSystem();
          }
          var df = this.systemLoc.dtFormatter(dt, _extends({}, this.opts, opts));
          return df.format();
        };
        _proto.formatDateTime = function formatDateTime(dt, opts) {
          if (opts === void 0) {
            opts = {};
          }
          var df = this.loc.dtFormatter(dt, _extends({}, this.opts, opts));
          return df.format();
        };
        _proto.formatDateTimeParts = function formatDateTimeParts(dt, opts) {
          if (opts === void 0) {
            opts = {};
          }
          var df = this.loc.dtFormatter(dt, _extends({}, this.opts, opts));
          return df.formatToParts();
        };
        _proto.resolvedOptions = function resolvedOptions(dt, opts) {
          if (opts === void 0) {
            opts = {};
          }
          var df = this.loc.dtFormatter(dt, _extends({}, this.opts, opts));
          return df.resolvedOptions();
        };
        _proto.num = function num(n2, p) {
          if (p === void 0) {
            p = 0;
          }
          if (this.opts.forceSimple) {
            return padStart(n2, p);
          }
          var opts = _extends({}, this.opts);
          if (p > 0) {
            opts.padTo = p;
          }
          return this.loc.numberFormatter(opts).format(n2);
        };
        _proto.formatDateTimeFromString = function formatDateTimeFromString(dt, fmt) {
          var _this = this;
          var knownEnglish = this.loc.listingMode() === "en", useDateTimeFormatter = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory", string = function string2(opts, extract) {
            return _this.loc.extract(dt, opts, extract);
          }, formatOffset2 = function formatOffset3(opts) {
            if (dt.isOffsetFixed && dt.offset === 0 && opts.allowZ) {
              return "Z";
            }
            return dt.isValid ? dt.zone.formatOffset(dt.ts, opts.format) : "";
          }, meridiem = function meridiem2() {
            return knownEnglish ? meridiemForDateTime(dt) : string({
              hour: "numeric",
              hourCycle: "h12"
            }, "dayperiod");
          }, month = function month2(length, standalone) {
            return knownEnglish ? monthForDateTime(dt, length) : string(standalone ? {
              month: length
            } : {
              month: length,
              day: "numeric"
            }, "month");
          }, weekday = function weekday2(length, standalone) {
            return knownEnglish ? weekdayForDateTime(dt, length) : string(standalone ? {
              weekday: length
            } : {
              weekday: length,
              month: "long",
              day: "numeric"
            }, "weekday");
          }, maybeMacro = function maybeMacro2(token) {
            var formatOpts = Formatter2.macroTokenToFormatOpts(token);
            if (formatOpts) {
              return _this.formatWithSystemDefault(dt, formatOpts);
            } else {
              return token;
            }
          }, era = function era2(length) {
            return knownEnglish ? eraForDateTime(dt, length) : string({
              era: length
            }, "era");
          }, tokenToString = function tokenToString2(token) {
            switch (token) {
              case "S":
                return _this.num(dt.millisecond);
              case "u":
              case "SSS":
                return _this.num(dt.millisecond, 3);
              case "s":
                return _this.num(dt.second);
              case "ss":
                return _this.num(dt.second, 2);
              case "uu":
                return _this.num(Math.floor(dt.millisecond / 10), 2);
              case "uuu":
                return _this.num(Math.floor(dt.millisecond / 100));
              case "m":
                return _this.num(dt.minute);
              case "mm":
                return _this.num(dt.minute, 2);
              case "h":
                return _this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12);
              case "hh":
                return _this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12, 2);
              case "H":
                return _this.num(dt.hour);
              case "HH":
                return _this.num(dt.hour, 2);
              case "Z":
                return formatOffset2({
                  format: "narrow",
                  allowZ: _this.opts.allowZ
                });
              case "ZZ":
                return formatOffset2({
                  format: "short",
                  allowZ: _this.opts.allowZ
                });
              case "ZZZ":
                return formatOffset2({
                  format: "techie",
                  allowZ: _this.opts.allowZ
                });
              case "ZZZZ":
                return dt.zone.offsetName(dt.ts, {
                  format: "short",
                  locale: _this.loc.locale
                });
              case "ZZZZZ":
                return dt.zone.offsetName(dt.ts, {
                  format: "long",
                  locale: _this.loc.locale
                });
              case "z":
                return dt.zoneName;
              case "a":
                return meridiem();
              case "d":
                return useDateTimeFormatter ? string({
                  day: "numeric"
                }, "day") : _this.num(dt.day);
              case "dd":
                return useDateTimeFormatter ? string({
                  day: "2-digit"
                }, "day") : _this.num(dt.day, 2);
              case "c":
                return _this.num(dt.weekday);
              case "ccc":
                return weekday("short", true);
              case "cccc":
                return weekday("long", true);
              case "ccccc":
                return weekday("narrow", true);
              case "E":
                return _this.num(dt.weekday);
              case "EEE":
                return weekday("short", false);
              case "EEEE":
                return weekday("long", false);
              case "EEEEE":
                return weekday("narrow", false);
              case "L":
                return useDateTimeFormatter ? string({
                  month: "numeric",
                  day: "numeric"
                }, "month") : _this.num(dt.month);
              case "LL":
                return useDateTimeFormatter ? string({
                  month: "2-digit",
                  day: "numeric"
                }, "month") : _this.num(dt.month, 2);
              case "LLL":
                return month("short", true);
              case "LLLL":
                return month("long", true);
              case "LLLLL":
                return month("narrow", true);
              case "M":
                return useDateTimeFormatter ? string({
                  month: "numeric"
                }, "month") : _this.num(dt.month);
              case "MM":
                return useDateTimeFormatter ? string({
                  month: "2-digit"
                }, "month") : _this.num(dt.month, 2);
              case "MMM":
                return month("short", false);
              case "MMMM":
                return month("long", false);
              case "MMMMM":
                return month("narrow", false);
              case "y":
                return useDateTimeFormatter ? string({
                  year: "numeric"
                }, "year") : _this.num(dt.year);
              case "yy":
                return useDateTimeFormatter ? string({
                  year: "2-digit"
                }, "year") : _this.num(dt.year.toString().slice(-2), 2);
              case "yyyy":
                return useDateTimeFormatter ? string({
                  year: "numeric"
                }, "year") : _this.num(dt.year, 4);
              case "yyyyyy":
                return useDateTimeFormatter ? string({
                  year: "numeric"
                }, "year") : _this.num(dt.year, 6);
              case "G":
                return era("short");
              case "GG":
                return era("long");
              case "GGGGG":
                return era("narrow");
              case "kk":
                return _this.num(dt.weekYear.toString().slice(-2), 2);
              case "kkkk":
                return _this.num(dt.weekYear, 4);
              case "W":
                return _this.num(dt.weekNumber);
              case "WW":
                return _this.num(dt.weekNumber, 2);
              case "o":
                return _this.num(dt.ordinal);
              case "ooo":
                return _this.num(dt.ordinal, 3);
              case "q":
                return _this.num(dt.quarter);
              case "qq":
                return _this.num(dt.quarter, 2);
              case "X":
                return _this.num(Math.floor(dt.ts / 1e3));
              case "x":
                return _this.num(dt.ts);
              default:
                return maybeMacro(token);
            }
          };
          return stringifyTokens(Formatter2.parseFormat(fmt), tokenToString);
        };
        _proto.formatDurationFromString = function formatDurationFromString(dur, fmt) {
          var _this2 = this;
          var tokenToField = function tokenToField2(token) {
            switch (token[0]) {
              case "S":
                return "millisecond";
              case "s":
                return "second";
              case "m":
                return "minute";
              case "h":
                return "hour";
              case "d":
                return "day";
              case "M":
                return "month";
              case "y":
                return "year";
              default:
                return null;
            }
          }, tokenToString = function tokenToString2(lildur) {
            return function(token) {
              var mapped = tokenToField(token);
              if (mapped) {
                return _this2.num(lildur.get(mapped), token.length);
              } else {
                return token;
              }
            };
          }, tokens = Formatter2.parseFormat(fmt), realTokens = tokens.reduce(function(found, _ref) {
            var literal = _ref.literal, val = _ref.val;
            return literal ? found : found.concat(val);
          }, []), collapsed = dur.shiftTo.apply(dur, realTokens.map(tokenToField).filter(function(t) {
            return t;
          }));
          return stringifyTokens(tokens, tokenToString(collapsed));
        };
        return Formatter2;
      }();
      var Invalid = /* @__PURE__ */ function() {
        function Invalid2(reason, explanation) {
          this.reason = reason;
          this.explanation = explanation;
        }
        var _proto = Invalid2.prototype;
        _proto.toMessage = function toMessage() {
          if (this.explanation) {
            return this.reason + ": " + this.explanation;
          } else {
            return this.reason;
          }
        };
        return Invalid2;
      }();
      var Zone = /* @__PURE__ */ function() {
        function Zone2() {
        }
        var _proto = Zone2.prototype;
        _proto.offsetName = function offsetName(ts, opts) {
          throw new ZoneIsAbstractError();
        };
        _proto.formatOffset = function formatOffset2(ts, format) {
          throw new ZoneIsAbstractError();
        };
        _proto.offset = function offset2(ts) {
          throw new ZoneIsAbstractError();
        };
        _proto.equals = function equals(otherZone) {
          throw new ZoneIsAbstractError();
        };
        _createClass(Zone2, [{
          key: "type",
          get: function get() {
            throw new ZoneIsAbstractError();
          }
        }, {
          key: "name",
          get: function get() {
            throw new ZoneIsAbstractError();
          }
        }, {
          key: "isUniversal",
          get: function get() {
            throw new ZoneIsAbstractError();
          }
        }, {
          key: "isValid",
          get: function get() {
            throw new ZoneIsAbstractError();
          }
        }]);
        return Zone2;
      }();
      var singleton$1 = null;
      var SystemZone = /* @__PURE__ */ function(_Zone) {
        _inheritsLoose(SystemZone2, _Zone);
        function SystemZone2() {
          return _Zone.apply(this, arguments) || this;
        }
        var _proto = SystemZone2.prototype;
        _proto.offsetName = function offsetName(ts, _ref) {
          var format = _ref.format, locale = _ref.locale;
          return parseZoneInfo(ts, format, locale);
        };
        _proto.formatOffset = function formatOffset$1(ts, format) {
          return formatOffset(this.offset(ts), format);
        };
        _proto.offset = function offset2(ts) {
          return -new Date(ts).getTimezoneOffset();
        };
        _proto.equals = function equals(otherZone) {
          return otherZone.type === "system";
        };
        _createClass(SystemZone2, [{
          key: "type",
          get: function get() {
            return "system";
          }
        }, {
          key: "name",
          get: function get() {
            return new Intl.DateTimeFormat().resolvedOptions().timeZone;
          }
        }, {
          key: "isUniversal",
          get: function get() {
            return false;
          }
        }, {
          key: "isValid",
          get: function get() {
            return true;
          }
        }], [{
          key: "instance",
          get: function get() {
            if (singleton$1 === null) {
              singleton$1 = new SystemZone2();
            }
            return singleton$1;
          }
        }]);
        return SystemZone2;
      }(Zone);
      RegExp("^" + ianaRegex.source + "$");
      var dtfCache = {};
      function makeDTF(zone) {
        if (!dtfCache[zone]) {
          dtfCache[zone] = new Intl.DateTimeFormat("en-US", {
            hour12: false,
            timeZone: zone,
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
          });
        }
        return dtfCache[zone];
      }
      var typeToPos = {
        year: 0,
        month: 1,
        day: 2,
        hour: 3,
        minute: 4,
        second: 5
      };
      function hackyOffset(dtf, date) {
        var formatted = dtf.format(date).replace(/\u200E/g, ""), parsed = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(formatted), fMonth = parsed[1], fDay = parsed[2], fYear = parsed[3], fHour = parsed[4], fMinute = parsed[5], fSecond = parsed[6];
        return [fYear, fMonth, fDay, fHour, fMinute, fSecond];
      }
      function partsOffset(dtf, date) {
        var formatted = dtf.formatToParts(date), filled = [];
        for (var i = 0; i < formatted.length; i++) {
          var _formatted$i = formatted[i], type = _formatted$i.type, value = _formatted$i.value, pos = typeToPos[type];
          if (!isUndefined(pos)) {
            filled[pos] = parseInt(value, 10);
          }
        }
        return filled;
      }
      var ianaZoneCache = {};
      var IANAZone = /* @__PURE__ */ function(_Zone) {
        _inheritsLoose(IANAZone2, _Zone);
        IANAZone2.create = function create(name) {
          if (!ianaZoneCache[name]) {
            ianaZoneCache[name] = new IANAZone2(name);
          }
          return ianaZoneCache[name];
        };
        IANAZone2.resetCache = function resetCache() {
          ianaZoneCache = {};
          dtfCache = {};
        };
        IANAZone2.isValidSpecifier = function isValidSpecifier(s2) {
          return this.isValidZone(s2);
        };
        IANAZone2.isValidZone = function isValidZone(zone) {
          if (!zone) {
            return false;
          }
          try {
            new Intl.DateTimeFormat("en-US", {
              timeZone: zone
            }).format();
            return true;
          } catch (e) {
            return false;
          }
        };
        function IANAZone2(name) {
          var _this;
          _this = _Zone.call(this) || this;
          _this.zoneName = name;
          _this.valid = IANAZone2.isValidZone(name);
          return _this;
        }
        var _proto = IANAZone2.prototype;
        _proto.offsetName = function offsetName(ts, _ref) {
          var format = _ref.format, locale = _ref.locale;
          return parseZoneInfo(ts, format, locale, this.name);
        };
        _proto.formatOffset = function formatOffset$1(ts, format) {
          return formatOffset(this.offset(ts), format);
        };
        _proto.offset = function offset2(ts) {
          var date = new Date(ts);
          if (isNaN(date))
            return NaN;
          var dtf = makeDTF(this.name), _ref2 = dtf.formatToParts ? partsOffset(dtf, date) : hackyOffset(dtf, date), year = _ref2[0], month = _ref2[1], day = _ref2[2], hour = _ref2[3], minute = _ref2[4], second = _ref2[5];
          var adjustedHour = hour === 24 ? 0 : hour;
          var asUTC = objToLocalTS({
            year,
            month,
            day,
            hour: adjustedHour,
            minute,
            second,
            millisecond: 0
          });
          var asTS = +date;
          var over = asTS % 1e3;
          asTS -= over >= 0 ? over : 1e3 + over;
          return (asUTC - asTS) / (60 * 1e3);
        };
        _proto.equals = function equals(otherZone) {
          return otherZone.type === "iana" && otherZone.name === this.name;
        };
        _createClass(IANAZone2, [{
          key: "type",
          get: function get() {
            return "iana";
          }
        }, {
          key: "name",
          get: function get() {
            return this.zoneName;
          }
        }, {
          key: "isUniversal",
          get: function get() {
            return false;
          }
        }, {
          key: "isValid",
          get: function get() {
            return this.valid;
          }
        }]);
        return IANAZone2;
      }(Zone);
      var singleton = null;
      var FixedOffsetZone = /* @__PURE__ */ function(_Zone) {
        _inheritsLoose(FixedOffsetZone2, _Zone);
        FixedOffsetZone2.instance = function instance(offset2) {
          return offset2 === 0 ? FixedOffsetZone2.utcInstance : new FixedOffsetZone2(offset2);
        };
        FixedOffsetZone2.parseSpecifier = function parseSpecifier(s2) {
          if (s2) {
            var r = s2.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
            if (r) {
              return new FixedOffsetZone2(signedOffset(r[1], r[2]));
            }
          }
          return null;
        };
        function FixedOffsetZone2(offset2) {
          var _this;
          _this = _Zone.call(this) || this;
          _this.fixed = offset2;
          return _this;
        }
        var _proto = FixedOffsetZone2.prototype;
        _proto.offsetName = function offsetName() {
          return this.name;
        };
        _proto.formatOffset = function formatOffset$1(ts, format) {
          return formatOffset(this.fixed, format);
        };
        _proto.offset = function offset2() {
          return this.fixed;
        };
        _proto.equals = function equals(otherZone) {
          return otherZone.type === "fixed" && otherZone.fixed === this.fixed;
        };
        _createClass(FixedOffsetZone2, [{
          key: "type",
          get: function get() {
            return "fixed";
          }
        }, {
          key: "name",
          get: function get() {
            return this.fixed === 0 ? "UTC" : "UTC" + formatOffset(this.fixed, "narrow");
          }
        }, {
          key: "isUniversal",
          get: function get() {
            return true;
          }
        }, {
          key: "isValid",
          get: function get() {
            return true;
          }
        }], [{
          key: "utcInstance",
          get: function get() {
            if (singleton === null) {
              singleton = new FixedOffsetZone2(0);
            }
            return singleton;
          }
        }]);
        return FixedOffsetZone2;
      }(Zone);
      var InvalidZone = /* @__PURE__ */ function(_Zone) {
        _inheritsLoose(InvalidZone2, _Zone);
        function InvalidZone2(zoneName) {
          var _this;
          _this = _Zone.call(this) || this;
          _this.zoneName = zoneName;
          return _this;
        }
        var _proto = InvalidZone2.prototype;
        _proto.offsetName = function offsetName() {
          return null;
        };
        _proto.formatOffset = function formatOffset2() {
          return "";
        };
        _proto.offset = function offset2() {
          return NaN;
        };
        _proto.equals = function equals() {
          return false;
        };
        _createClass(InvalidZone2, [{
          key: "type",
          get: function get() {
            return "invalid";
          }
        }, {
          key: "name",
          get: function get() {
            return this.zoneName;
          }
        }, {
          key: "isUniversal",
          get: function get() {
            return false;
          }
        }, {
          key: "isValid",
          get: function get() {
            return false;
          }
        }]);
        return InvalidZone2;
      }(Zone);
      function normalizeZone(input, defaultZone2) {
        if (isUndefined(input) || input === null) {
          return defaultZone2;
        } else if (input instanceof Zone) {
          return input;
        } else if (isString(input)) {
          var lowered = input.toLowerCase();
          if (lowered === "local" || lowered === "system")
            return defaultZone2;
          else if (lowered === "utc" || lowered === "gmt")
            return FixedOffsetZone.utcInstance;
          else
            return FixedOffsetZone.parseSpecifier(lowered) || IANAZone.create(input);
        } else if (isNumber2(input)) {
          return FixedOffsetZone.instance(input);
        } else if (typeof input === "object" && input.offset && typeof input.offset === "number") {
          return input;
        } else {
          return new InvalidZone(input);
        }
      }
      var now = function now2() {
        return Date.now();
      };
      var defaultZone = "system";
      var defaultLocale = null;
      var defaultNumberingSystem = null;
      var defaultOutputCalendar = null;
      var throwOnInvalid;
      var Settings = /* @__PURE__ */ function() {
        function Settings2() {
        }
        Settings2.resetCaches = function resetCaches() {
          Locale.resetCache();
          IANAZone.resetCache();
        };
        _createClass(Settings2, null, [{
          key: "now",
          get: function get() {
            return now;
          },
          set: function set2(n2) {
            now = n2;
          }
        }, {
          key: "defaultZone",
          get: function get() {
            return normalizeZone(defaultZone, SystemZone.instance);
          },
          set: function set2(zone) {
            defaultZone = zone;
          }
        }, {
          key: "defaultLocale",
          get: function get() {
            return defaultLocale;
          },
          set: function set2(locale) {
            defaultLocale = locale;
          }
        }, {
          key: "defaultNumberingSystem",
          get: function get() {
            return defaultNumberingSystem;
          },
          set: function set2(numberingSystem) {
            defaultNumberingSystem = numberingSystem;
          }
        }, {
          key: "defaultOutputCalendar",
          get: function get() {
            return defaultOutputCalendar;
          },
          set: function set2(outputCalendar) {
            defaultOutputCalendar = outputCalendar;
          }
        }, {
          key: "throwOnInvalid",
          get: function get() {
            return throwOnInvalid;
          },
          set: function set2(t) {
            throwOnInvalid = t;
          }
        }]);
        return Settings2;
      }();
      var _excluded = ["base"];
      var _excluded2 = ["padTo", "floor"];
      var intlLFCache = {};
      function getCachedLF(locString, opts) {
        if (opts === void 0) {
          opts = {};
        }
        var key = JSON.stringify([locString, opts]);
        var dtf = intlLFCache[key];
        if (!dtf) {
          dtf = new Intl.ListFormat(locString, opts);
          intlLFCache[key] = dtf;
        }
        return dtf;
      }
      var intlDTCache = {};
      function getCachedDTF(locString, opts) {
        if (opts === void 0) {
          opts = {};
        }
        var key = JSON.stringify([locString, opts]);
        var dtf = intlDTCache[key];
        if (!dtf) {
          dtf = new Intl.DateTimeFormat(locString, opts);
          intlDTCache[key] = dtf;
        }
        return dtf;
      }
      var intlNumCache = {};
      function getCachedINF(locString, opts) {
        if (opts === void 0) {
          opts = {};
        }
        var key = JSON.stringify([locString, opts]);
        var inf = intlNumCache[key];
        if (!inf) {
          inf = new Intl.NumberFormat(locString, opts);
          intlNumCache[key] = inf;
        }
        return inf;
      }
      var intlRelCache = {};
      function getCachedRTF(locString, opts) {
        if (opts === void 0) {
          opts = {};
        }
        var _opts = opts;
        _opts.base;
        var cacheKeyOpts = _objectWithoutPropertiesLoose(_opts, _excluded);
        var key = JSON.stringify([locString, cacheKeyOpts]);
        var inf = intlRelCache[key];
        if (!inf) {
          inf = new Intl.RelativeTimeFormat(locString, opts);
          intlRelCache[key] = inf;
        }
        return inf;
      }
      var sysLocaleCache = null;
      function systemLocale() {
        if (sysLocaleCache) {
          return sysLocaleCache;
        } else {
          sysLocaleCache = new Intl.DateTimeFormat().resolvedOptions().locale;
          return sysLocaleCache;
        }
      }
      function parseLocaleString(localeStr) {
        var uIndex = localeStr.indexOf("-u-");
        if (uIndex === -1) {
          return [localeStr];
        } else {
          var options;
          var smaller = localeStr.substring(0, uIndex);
          try {
            options = getCachedDTF(localeStr).resolvedOptions();
          } catch (e) {
            options = getCachedDTF(smaller).resolvedOptions();
          }
          var _options = options, numberingSystem = _options.numberingSystem, calendar = _options.calendar;
          return [smaller, numberingSystem, calendar];
        }
      }
      function intlConfigString(localeStr, numberingSystem, outputCalendar) {
        if (outputCalendar || numberingSystem) {
          localeStr += "-u";
          if (outputCalendar) {
            localeStr += "-ca-" + outputCalendar;
          }
          if (numberingSystem) {
            localeStr += "-nu-" + numberingSystem;
          }
          return localeStr;
        } else {
          return localeStr;
        }
      }
      function mapMonths(f) {
        var ms = [];
        for (var i = 1; i <= 12; i++) {
          var dt = DateTime2.utc(2016, i, 1);
          ms.push(f(dt));
        }
        return ms;
      }
      function mapWeekdays(f) {
        var ms = [];
        for (var i = 1; i <= 7; i++) {
          var dt = DateTime2.utc(2016, 11, 13 + i);
          ms.push(f(dt));
        }
        return ms;
      }
      function listStuff(loc, length, defaultOK, englishFn, intlFn) {
        var mode = loc.listingMode(defaultOK);
        if (mode === "error") {
          return null;
        } else if (mode === "en") {
          return englishFn(length);
        } else {
          return intlFn(length);
        }
      }
      function supportsFastNumbers(loc) {
        if (loc.numberingSystem && loc.numberingSystem !== "latn") {
          return false;
        } else {
          return loc.numberingSystem === "latn" || !loc.locale || loc.locale.startsWith("en") || new Intl.DateTimeFormat(loc.intl).resolvedOptions().numberingSystem === "latn";
        }
      }
      var PolyNumberFormatter = /* @__PURE__ */ function() {
        function PolyNumberFormatter2(intl, forceSimple, opts) {
          this.padTo = opts.padTo || 0;
          this.floor = opts.floor || false;
          opts.padTo;
          opts.floor;
          var otherOpts = _objectWithoutPropertiesLoose(opts, _excluded2);
          if (!forceSimple || Object.keys(otherOpts).length > 0) {
            var intlOpts = _extends({
              useGrouping: false
            }, opts);
            if (opts.padTo > 0)
              intlOpts.minimumIntegerDigits = opts.padTo;
            this.inf = getCachedINF(intl, intlOpts);
          }
        }
        var _proto = PolyNumberFormatter2.prototype;
        _proto.format = function format(i) {
          if (this.inf) {
            var fixed = this.floor ? Math.floor(i) : i;
            return this.inf.format(fixed);
          } else {
            var _fixed = this.floor ? Math.floor(i) : roundTo(i, 3);
            return padStart(_fixed, this.padTo);
          }
        };
        return PolyNumberFormatter2;
      }();
      var PolyDateFormatter = /* @__PURE__ */ function() {
        function PolyDateFormatter2(dt, intl, opts) {
          this.opts = opts;
          var z;
          if (dt.zone.isUniversal) {
            var gmtOffset = -1 * (dt.offset / 60);
            var offsetZ = gmtOffset >= 0 ? "Etc/GMT+" + gmtOffset : "Etc/GMT" + gmtOffset;
            if (dt.offset !== 0 && IANAZone.create(offsetZ).valid) {
              z = offsetZ;
              this.dt = dt;
            } else {
              z = "UTC";
              if (opts.timeZoneName) {
                this.dt = dt;
              } else {
                this.dt = dt.offset === 0 ? dt : DateTime2.fromMillis(dt.ts + dt.offset * 60 * 1e3);
              }
            }
          } else if (dt.zone.type === "system") {
            this.dt = dt;
          } else {
            this.dt = dt;
            z = dt.zone.name;
          }
          var intlOpts = _extends({}, this.opts);
          if (z) {
            intlOpts.timeZone = z;
          }
          this.dtf = getCachedDTF(intl, intlOpts);
        }
        var _proto2 = PolyDateFormatter2.prototype;
        _proto2.format = function format() {
          return this.dtf.format(this.dt.toJSDate());
        };
        _proto2.formatToParts = function formatToParts() {
          return this.dtf.formatToParts(this.dt.toJSDate());
        };
        _proto2.resolvedOptions = function resolvedOptions() {
          return this.dtf.resolvedOptions();
        };
        return PolyDateFormatter2;
      }();
      var PolyRelFormatter = /* @__PURE__ */ function() {
        function PolyRelFormatter2(intl, isEnglish, opts) {
          this.opts = _extends({
            style: "long"
          }, opts);
          if (!isEnglish && hasRelative()) {
            this.rtf = getCachedRTF(intl, opts);
          }
        }
        var _proto3 = PolyRelFormatter2.prototype;
        _proto3.format = function format(count, unit) {
          if (this.rtf) {
            return this.rtf.format(count, unit);
          } else {
            return formatRelativeTime(unit, count, this.opts.numeric, this.opts.style !== "long");
          }
        };
        _proto3.formatToParts = function formatToParts(count, unit) {
          if (this.rtf) {
            return this.rtf.formatToParts(count, unit);
          } else {
            return [];
          }
        };
        return PolyRelFormatter2;
      }();
      var Locale = /* @__PURE__ */ function() {
        Locale2.fromOpts = function fromOpts(opts) {
          return Locale2.create(opts.locale, opts.numberingSystem, opts.outputCalendar, opts.defaultToEN);
        };
        Locale2.create = function create(locale, numberingSystem, outputCalendar, defaultToEN) {
          if (defaultToEN === void 0) {
            defaultToEN = false;
          }
          var specifiedLocale = locale || Settings.defaultLocale;
          var localeR = specifiedLocale || (defaultToEN ? "en-US" : systemLocale());
          var numberingSystemR = numberingSystem || Settings.defaultNumberingSystem;
          var outputCalendarR = outputCalendar || Settings.defaultOutputCalendar;
          return new Locale2(localeR, numberingSystemR, outputCalendarR, specifiedLocale);
        };
        Locale2.resetCache = function resetCache() {
          sysLocaleCache = null;
          intlDTCache = {};
          intlNumCache = {};
          intlRelCache = {};
        };
        Locale2.fromObject = function fromObject2(_temp) {
          var _ref = _temp === void 0 ? {} : _temp, locale = _ref.locale, numberingSystem = _ref.numberingSystem, outputCalendar = _ref.outputCalendar;
          return Locale2.create(locale, numberingSystem, outputCalendar);
        };
        function Locale2(locale, numbering, outputCalendar, specifiedLocale) {
          var _parseLocaleString = parseLocaleString(locale), parsedLocale = _parseLocaleString[0], parsedNumberingSystem = _parseLocaleString[1], parsedOutputCalendar = _parseLocaleString[2];
          this.locale = parsedLocale;
          this.numberingSystem = numbering || parsedNumberingSystem || null;
          this.outputCalendar = outputCalendar || parsedOutputCalendar || null;
          this.intl = intlConfigString(this.locale, this.numberingSystem, this.outputCalendar);
          this.weekdaysCache = {
            format: {},
            standalone: {}
          };
          this.monthsCache = {
            format: {},
            standalone: {}
          };
          this.meridiemCache = null;
          this.eraCache = {};
          this.specifiedLocale = specifiedLocale;
          this.fastNumbersCached = null;
        }
        var _proto4 = Locale2.prototype;
        _proto4.listingMode = function listingMode() {
          var isActuallyEn = this.isEnglish();
          var hasNoWeirdness = (this.numberingSystem === null || this.numberingSystem === "latn") && (this.outputCalendar === null || this.outputCalendar === "gregory");
          return isActuallyEn && hasNoWeirdness ? "en" : "intl";
        };
        _proto4.clone = function clone3(alts) {
          if (!alts || Object.getOwnPropertyNames(alts).length === 0) {
            return this;
          } else {
            return Locale2.create(alts.locale || this.specifiedLocale, alts.numberingSystem || this.numberingSystem, alts.outputCalendar || this.outputCalendar, alts.defaultToEN || false);
          }
        };
        _proto4.redefaultToEN = function redefaultToEN(alts) {
          if (alts === void 0) {
            alts = {};
          }
          return this.clone(_extends({}, alts, {
            defaultToEN: true
          }));
        };
        _proto4.redefaultToSystem = function redefaultToSystem(alts) {
          if (alts === void 0) {
            alts = {};
          }
          return this.clone(_extends({}, alts, {
            defaultToEN: false
          }));
        };
        _proto4.months = function months$1(length, format, defaultOK) {
          var _this = this;
          if (format === void 0) {
            format = false;
          }
          if (defaultOK === void 0) {
            defaultOK = true;
          }
          return listStuff(this, length, defaultOK, months, function() {
            var intl = format ? {
              month: length,
              day: "numeric"
            } : {
              month: length
            }, formatStr = format ? "format" : "standalone";
            if (!_this.monthsCache[formatStr][length]) {
              _this.monthsCache[formatStr][length] = mapMonths(function(dt) {
                return _this.extract(dt, intl, "month");
              });
            }
            return _this.monthsCache[formatStr][length];
          });
        };
        _proto4.weekdays = function weekdays$1(length, format, defaultOK) {
          var _this2 = this;
          if (format === void 0) {
            format = false;
          }
          if (defaultOK === void 0) {
            defaultOK = true;
          }
          return listStuff(this, length, defaultOK, weekdays, function() {
            var intl = format ? {
              weekday: length,
              year: "numeric",
              month: "long",
              day: "numeric"
            } : {
              weekday: length
            }, formatStr = format ? "format" : "standalone";
            if (!_this2.weekdaysCache[formatStr][length]) {
              _this2.weekdaysCache[formatStr][length] = mapWeekdays(function(dt) {
                return _this2.extract(dt, intl, "weekday");
              });
            }
            return _this2.weekdaysCache[formatStr][length];
          });
        };
        _proto4.meridiems = function meridiems$1(defaultOK) {
          var _this3 = this;
          if (defaultOK === void 0) {
            defaultOK = true;
          }
          return listStuff(this, void 0, defaultOK, function() {
            return meridiems;
          }, function() {
            if (!_this3.meridiemCache) {
              var intl = {
                hour: "numeric",
                hourCycle: "h12"
              };
              _this3.meridiemCache = [DateTime2.utc(2016, 11, 13, 9), DateTime2.utc(2016, 11, 13, 19)].map(function(dt) {
                return _this3.extract(dt, intl, "dayperiod");
              });
            }
            return _this3.meridiemCache;
          });
        };
        _proto4.eras = function eras$1(length, defaultOK) {
          var _this4 = this;
          if (defaultOK === void 0) {
            defaultOK = true;
          }
          return listStuff(this, length, defaultOK, eras, function() {
            var intl = {
              era: length
            };
            if (!_this4.eraCache[length]) {
              _this4.eraCache[length] = [DateTime2.utc(-40, 1, 1), DateTime2.utc(2017, 1, 1)].map(function(dt) {
                return _this4.extract(dt, intl, "era");
              });
            }
            return _this4.eraCache[length];
          });
        };
        _proto4.extract = function extract(dt, intlOpts, field) {
          var df = this.dtFormatter(dt, intlOpts), results = df.formatToParts(), matching = results.find(function(m) {
            return m.type.toLowerCase() === field;
          });
          return matching ? matching.value : null;
        };
        _proto4.numberFormatter = function numberFormatter(opts) {
          if (opts === void 0) {
            opts = {};
          }
          return new PolyNumberFormatter(this.intl, opts.forceSimple || this.fastNumbers, opts);
        };
        _proto4.dtFormatter = function dtFormatter(dt, intlOpts) {
          if (intlOpts === void 0) {
            intlOpts = {};
          }
          return new PolyDateFormatter(dt, this.intl, intlOpts);
        };
        _proto4.relFormatter = function relFormatter(opts) {
          if (opts === void 0) {
            opts = {};
          }
          return new PolyRelFormatter(this.intl, this.isEnglish(), opts);
        };
        _proto4.listFormatter = function listFormatter(opts) {
          if (opts === void 0) {
            opts = {};
          }
          return getCachedLF(this.intl, opts);
        };
        _proto4.isEnglish = function isEnglish() {
          return this.locale === "en" || this.locale.toLowerCase() === "en-us" || new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us");
        };
        _proto4.equals = function equals(other) {
          return this.locale === other.locale && this.numberingSystem === other.numberingSystem && this.outputCalendar === other.outputCalendar;
        };
        _createClass(Locale2, [{
          key: "fastNumbers",
          get: function get() {
            if (this.fastNumbersCached == null) {
              this.fastNumbersCached = supportsFastNumbers(this);
            }
            return this.fastNumbersCached;
          }
        }]);
        return Locale2;
      }();
      function combineRegexes() {
        for (var _len = arguments.length, regexes = new Array(_len), _key = 0; _key < _len; _key++) {
          regexes[_key] = arguments[_key];
        }
        var full = regexes.reduce(function(f, r) {
          return f + r.source;
        }, "");
        return RegExp("^" + full + "$");
      }
      function combineExtractors() {
        for (var _len2 = arguments.length, extractors = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          extractors[_key2] = arguments[_key2];
        }
        return function(m) {
          return extractors.reduce(function(_ref, ex) {
            var mergedVals = _ref[0], mergedZone = _ref[1], cursor = _ref[2];
            var _ex = ex(m, cursor), val = _ex[0], zone = _ex[1], next = _ex[2];
            return [_extends({}, mergedVals, val), mergedZone || zone, next];
          }, [{}, null, 1]).slice(0, 2);
        };
      }
      function parse2(s2) {
        if (s2 == null) {
          return [null, null];
        }
        for (var _len3 = arguments.length, patterns = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
          patterns[_key3 - 1] = arguments[_key3];
        }
        for (var _i = 0, _patterns = patterns; _i < _patterns.length; _i++) {
          var _patterns$_i = _patterns[_i], regex = _patterns$_i[0], extractor = _patterns$_i[1];
          var m = regex.exec(s2);
          if (m) {
            return extractor(m);
          }
        }
        return [null, null];
      }
      function simpleParse() {
        for (var _len4 = arguments.length, keys = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          keys[_key4] = arguments[_key4];
        }
        return function(match2, cursor) {
          var ret = {};
          var i;
          for (i = 0; i < keys.length; i++) {
            ret[keys[i]] = parseInteger(match2[cursor + i]);
          }
          return [ret, null, cursor + i];
        };
      }
      var offsetRegex = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/;
      var isoTimeBaseRegex = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/;
      var isoTimeRegex = RegExp("" + isoTimeBaseRegex.source + offsetRegex.source + "?");
      var isoTimeExtensionRegex = RegExp("(?:T" + isoTimeRegex.source + ")?");
      var isoYmdRegex = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/;
      var isoWeekRegex = /(\d{4})-?W(\d\d)(?:-?(\d))?/;
      var isoOrdinalRegex = /(\d{4})-?(\d{3})/;
      var extractISOWeekData = simpleParse("weekYear", "weekNumber", "weekDay");
      var extractISOOrdinalData = simpleParse("year", "ordinal");
      var sqlYmdRegex = /(\d{4})-(\d\d)-(\d\d)/;
      var sqlTimeRegex = RegExp(isoTimeBaseRegex.source + " ?(?:" + offsetRegex.source + "|(" + ianaRegex.source + "))?");
      var sqlTimeExtensionRegex = RegExp("(?: " + sqlTimeRegex.source + ")?");
      function int(match2, pos, fallback) {
        var m = match2[pos];
        return isUndefined(m) ? fallback : parseInteger(m);
      }
      function extractISOYmd(match2, cursor) {
        var item = {
          year: int(match2, cursor),
          month: int(match2, cursor + 1, 1),
          day: int(match2, cursor + 2, 1)
        };
        return [item, null, cursor + 3];
      }
      function extractISOTime(match2, cursor) {
        var item = {
          hours: int(match2, cursor, 0),
          minutes: int(match2, cursor + 1, 0),
          seconds: int(match2, cursor + 2, 0),
          milliseconds: parseMillis(match2[cursor + 3])
        };
        return [item, null, cursor + 4];
      }
      function extractISOOffset(match2, cursor) {
        var local = !match2[cursor] && !match2[cursor + 1], fullOffset = signedOffset(match2[cursor + 1], match2[cursor + 2]), zone = local ? null : FixedOffsetZone.instance(fullOffset);
        return [{}, zone, cursor + 3];
      }
      function extractIANAZone(match2, cursor) {
        var zone = match2[cursor] ? IANAZone.create(match2[cursor]) : null;
        return [{}, zone, cursor + 1];
      }
      var isoTimeOnly = RegExp("^T?" + isoTimeBaseRegex.source + "$");
      var isoDuration = /^-?P(?:(?:(-?\d{1,9}(?:\.\d{1,9})?)Y)?(?:(-?\d{1,9}(?:\.\d{1,9})?)M)?(?:(-?\d{1,9}(?:\.\d{1,9})?)W)?(?:(-?\d{1,9}(?:\.\d{1,9})?)D)?(?:T(?:(-?\d{1,9}(?:\.\d{1,9})?)H)?(?:(-?\d{1,9}(?:\.\d{1,9})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,9}))?S)?)?)$/;
      function extractISODuration(match2) {
        var s2 = match2[0], yearStr = match2[1], monthStr = match2[2], weekStr = match2[3], dayStr = match2[4], hourStr = match2[5], minuteStr = match2[6], secondStr = match2[7], millisecondsStr = match2[8];
        var hasNegativePrefix = s2[0] === "-";
        var negativeSeconds = secondStr && secondStr[0] === "-";
        var maybeNegate = function maybeNegate2(num, force) {
          if (force === void 0) {
            force = false;
          }
          return num !== void 0 && (force || num && hasNegativePrefix) ? -num : num;
        };
        return [{
          years: maybeNegate(parseFloating(yearStr)),
          months: maybeNegate(parseFloating(monthStr)),
          weeks: maybeNegate(parseFloating(weekStr)),
          days: maybeNegate(parseFloating(dayStr)),
          hours: maybeNegate(parseFloating(hourStr)),
          minutes: maybeNegate(parseFloating(minuteStr)),
          seconds: maybeNegate(parseFloating(secondStr), secondStr === "-0"),
          milliseconds: maybeNegate(parseMillis(millisecondsStr), negativeSeconds)
        }];
      }
      var obsOffsets = {
        GMT: 0,
        EDT: -4 * 60,
        EST: -5 * 60,
        CDT: -5 * 60,
        CST: -6 * 60,
        MDT: -6 * 60,
        MST: -7 * 60,
        PDT: -7 * 60,
        PST: -8 * 60
      };
      function fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
        var result = {
          year: yearStr.length === 2 ? untruncateYear(parseInteger(yearStr)) : parseInteger(yearStr),
          month: monthsShort.indexOf(monthStr) + 1,
          day: parseInteger(dayStr),
          hour: parseInteger(hourStr),
          minute: parseInteger(minuteStr)
        };
        if (secondStr)
          result.second = parseInteger(secondStr);
        if (weekdayStr) {
          result.weekday = weekdayStr.length > 3 ? weekdaysLong.indexOf(weekdayStr) + 1 : weekdaysShort.indexOf(weekdayStr) + 1;
        }
        return result;
      }
      var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
      function extractRFC2822(match2) {
        var weekdayStr = match2[1], dayStr = match2[2], monthStr = match2[3], yearStr = match2[4], hourStr = match2[5], minuteStr = match2[6], secondStr = match2[7], obsOffset = match2[8], milOffset = match2[9], offHourStr = match2[10], offMinuteStr = match2[11], result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
        var offset2;
        if (obsOffset) {
          offset2 = obsOffsets[obsOffset];
        } else if (milOffset) {
          offset2 = 0;
        } else {
          offset2 = signedOffset(offHourStr, offMinuteStr);
        }
        return [result, new FixedOffsetZone(offset2)];
      }
      function preprocessRFC2822(s2) {
        return s2.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
      }
      var rfc1123 = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/;
      var rfc850 = /^(Monday|Tuesday|Wedsday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/;
      var ascii = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
      function extractRFC1123Or850(match2) {
        var weekdayStr = match2[1], dayStr = match2[2], monthStr = match2[3], yearStr = match2[4], hourStr = match2[5], minuteStr = match2[6], secondStr = match2[7], result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
        return [result, FixedOffsetZone.utcInstance];
      }
      function extractASCII(match2) {
        var weekdayStr = match2[1], monthStr = match2[2], dayStr = match2[3], hourStr = match2[4], minuteStr = match2[5], secondStr = match2[6], yearStr = match2[7], result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
        return [result, FixedOffsetZone.utcInstance];
      }
      var isoYmdWithTimeExtensionRegex = combineRegexes(isoYmdRegex, isoTimeExtensionRegex);
      var isoWeekWithTimeExtensionRegex = combineRegexes(isoWeekRegex, isoTimeExtensionRegex);
      var isoOrdinalWithTimeExtensionRegex = combineRegexes(isoOrdinalRegex, isoTimeExtensionRegex);
      var isoTimeCombinedRegex = combineRegexes(isoTimeRegex);
      var extractISOYmdTimeAndOffset = combineExtractors(extractISOYmd, extractISOTime, extractISOOffset);
      var extractISOWeekTimeAndOffset = combineExtractors(extractISOWeekData, extractISOTime, extractISOOffset);
      var extractISOOrdinalDateAndTime = combineExtractors(extractISOOrdinalData, extractISOTime, extractISOOffset);
      var extractISOTimeAndOffset = combineExtractors(extractISOTime, extractISOOffset);
      function parseISODate(s2) {
        return parse2(s2, [isoYmdWithTimeExtensionRegex, extractISOYmdTimeAndOffset], [isoWeekWithTimeExtensionRegex, extractISOWeekTimeAndOffset], [isoOrdinalWithTimeExtensionRegex, extractISOOrdinalDateAndTime], [isoTimeCombinedRegex, extractISOTimeAndOffset]);
      }
      function parseRFC2822Date(s2) {
        return parse2(preprocessRFC2822(s2), [rfc2822, extractRFC2822]);
      }
      function parseHTTPDate(s2) {
        return parse2(s2, [rfc1123, extractRFC1123Or850], [rfc850, extractRFC1123Or850], [ascii, extractASCII]);
      }
      function parseISODuration(s2) {
        return parse2(s2, [isoDuration, extractISODuration]);
      }
      var extractISOTimeOnly = combineExtractors(extractISOTime);
      function parseISOTimeOnly(s2) {
        return parse2(s2, [isoTimeOnly, extractISOTimeOnly]);
      }
      var sqlYmdWithTimeExtensionRegex = combineRegexes(sqlYmdRegex, sqlTimeExtensionRegex);
      var sqlTimeCombinedRegex = combineRegexes(sqlTimeRegex);
      var extractISOYmdTimeOffsetAndIANAZone = combineExtractors(extractISOYmd, extractISOTime, extractISOOffset, extractIANAZone);
      var extractISOTimeOffsetAndIANAZone = combineExtractors(extractISOTime, extractISOOffset, extractIANAZone);
      function parseSQL(s2) {
        return parse2(s2, [sqlYmdWithTimeExtensionRegex, extractISOYmdTimeOffsetAndIANAZone], [sqlTimeCombinedRegex, extractISOTimeOffsetAndIANAZone]);
      }
      var INVALID$2 = "Invalid Duration";
      var lowOrderMatrix = {
        weeks: {
          days: 7,
          hours: 7 * 24,
          minutes: 7 * 24 * 60,
          seconds: 7 * 24 * 60 * 60,
          milliseconds: 7 * 24 * 60 * 60 * 1e3
        },
        days: {
          hours: 24,
          minutes: 24 * 60,
          seconds: 24 * 60 * 60,
          milliseconds: 24 * 60 * 60 * 1e3
        },
        hours: {
          minutes: 60,
          seconds: 60 * 60,
          milliseconds: 60 * 60 * 1e3
        },
        minutes: {
          seconds: 60,
          milliseconds: 60 * 1e3
        },
        seconds: {
          milliseconds: 1e3
        }
      };
      var casualMatrix = _extends({
        years: {
          quarters: 4,
          months: 12,
          weeks: 52,
          days: 365,
          hours: 365 * 24,
          minutes: 365 * 24 * 60,
          seconds: 365 * 24 * 60 * 60,
          milliseconds: 365 * 24 * 60 * 60 * 1e3
        },
        quarters: {
          months: 3,
          weeks: 13,
          days: 91,
          hours: 91 * 24,
          minutes: 91 * 24 * 60,
          seconds: 91 * 24 * 60 * 60,
          milliseconds: 91 * 24 * 60 * 60 * 1e3
        },
        months: {
          weeks: 4,
          days: 30,
          hours: 30 * 24,
          minutes: 30 * 24 * 60,
          seconds: 30 * 24 * 60 * 60,
          milliseconds: 30 * 24 * 60 * 60 * 1e3
        }
      }, lowOrderMatrix);
      var daysInYearAccurate = 146097 / 400;
      var daysInMonthAccurate = 146097 / 4800;
      var accurateMatrix = _extends({
        years: {
          quarters: 4,
          months: 12,
          weeks: daysInYearAccurate / 7,
          days: daysInYearAccurate,
          hours: daysInYearAccurate * 24,
          minutes: daysInYearAccurate * 24 * 60,
          seconds: daysInYearAccurate * 24 * 60 * 60,
          milliseconds: daysInYearAccurate * 24 * 60 * 60 * 1e3
        },
        quarters: {
          months: 3,
          weeks: daysInYearAccurate / 28,
          days: daysInYearAccurate / 4,
          hours: daysInYearAccurate * 24 / 4,
          minutes: daysInYearAccurate * 24 * 60 / 4,
          seconds: daysInYearAccurate * 24 * 60 * 60 / 4,
          milliseconds: daysInYearAccurate * 24 * 60 * 60 * 1e3 / 4
        },
        months: {
          weeks: daysInMonthAccurate / 7,
          days: daysInMonthAccurate,
          hours: daysInMonthAccurate * 24,
          minutes: daysInMonthAccurate * 24 * 60,
          seconds: daysInMonthAccurate * 24 * 60 * 60,
          milliseconds: daysInMonthAccurate * 24 * 60 * 60 * 1e3
        }
      }, lowOrderMatrix);
      var orderedUnits$1 = ["years", "quarters", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds"];
      var reverseUnits = orderedUnits$1.slice(0).reverse();
      function clone$12(dur, alts, clear) {
        if (clear === void 0) {
          clear = false;
        }
        var conf = {
          values: clear ? alts.values : _extends({}, dur.values, alts.values || {}),
          loc: dur.loc.clone(alts.loc),
          conversionAccuracy: alts.conversionAccuracy || dur.conversionAccuracy
        };
        return new Duration(conf);
      }
      function antiTrunc(n2) {
        return n2 < 0 ? Math.floor(n2) : Math.ceil(n2);
      }
      function convert(matrix, fromMap, fromUnit, toMap, toUnit) {
        var conv = matrix[toUnit][fromUnit], raw = fromMap[fromUnit] / conv, sameSign = Math.sign(raw) === Math.sign(toMap[toUnit]), added = !sameSign && toMap[toUnit] !== 0 && Math.abs(raw) <= 1 ? antiTrunc(raw) : Math.trunc(raw);
        toMap[toUnit] += added;
        fromMap[fromUnit] -= added * conv;
      }
      function normalizeValues(matrix, vals) {
        reverseUnits.reduce(function(previous, current) {
          if (!isUndefined(vals[current])) {
            if (previous) {
              convert(matrix, vals, previous, vals, current);
            }
            return current;
          } else {
            return previous;
          }
        }, null);
      }
      var Duration = /* @__PURE__ */ function() {
        function Duration2(config) {
          var accurate = config.conversionAccuracy === "longterm" || false;
          this.values = config.values;
          this.loc = config.loc || Locale.create();
          this.conversionAccuracy = accurate ? "longterm" : "casual";
          this.invalid = config.invalid || null;
          this.matrix = accurate ? accurateMatrix : casualMatrix;
          this.isLuxonDuration = true;
        }
        Duration2.fromMillis = function fromMillis(count, opts) {
          return Duration2.fromObject({
            milliseconds: count
          }, opts);
        };
        Duration2.fromObject = function fromObject2(obj, opts) {
          if (opts === void 0) {
            opts = {};
          }
          if (obj == null || typeof obj !== "object") {
            throw new InvalidArgumentError("Duration.fromObject: argument expected to be an object, got " + (obj === null ? "null" : typeof obj));
          }
          return new Duration2({
            values: normalizeObject(obj, Duration2.normalizeUnit),
            loc: Locale.fromObject(opts),
            conversionAccuracy: opts.conversionAccuracy
          });
        };
        Duration2.fromDurationLike = function fromDurationLike(durationLike) {
          if (isNumber2(durationLike)) {
            return Duration2.fromMillis(durationLike);
          } else if (Duration2.isDuration(durationLike)) {
            return durationLike;
          } else if (typeof durationLike === "object") {
            return Duration2.fromObject(durationLike);
          } else {
            throw new InvalidArgumentError("Unknown duration argument " + durationLike + " of type " + typeof durationLike);
          }
        };
        Duration2.fromISO = function fromISO(text, opts) {
          var _parseISODuration = parseISODuration(text), parsed = _parseISODuration[0];
          if (parsed) {
            return Duration2.fromObject(parsed, opts);
          } else {
            return Duration2.invalid("unparsable", 'the input "' + text + `" can't be parsed as ISO 8601`);
          }
        };
        Duration2.fromISOTime = function fromISOTime(text, opts) {
          var _parseISOTimeOnly = parseISOTimeOnly(text), parsed = _parseISOTimeOnly[0];
          if (parsed) {
            return Duration2.fromObject(parsed, opts);
          } else {
            return Duration2.invalid("unparsable", 'the input "' + text + `" can't be parsed as ISO 8601`);
          }
        };
        Duration2.invalid = function invalid(reason, explanation) {
          if (explanation === void 0) {
            explanation = null;
          }
          if (!reason) {
            throw new InvalidArgumentError("need to specify a reason the Duration is invalid");
          }
          var invalid2 = reason instanceof Invalid ? reason : new Invalid(reason, explanation);
          if (Settings.throwOnInvalid) {
            throw new InvalidDurationError(invalid2);
          } else {
            return new Duration2({
              invalid: invalid2
            });
          }
        };
        Duration2.normalizeUnit = function normalizeUnit2(unit) {
          var normalized = {
            year: "years",
            years: "years",
            quarter: "quarters",
            quarters: "quarters",
            month: "months",
            months: "months",
            week: "weeks",
            weeks: "weeks",
            day: "days",
            days: "days",
            hour: "hours",
            hours: "hours",
            minute: "minutes",
            minutes: "minutes",
            second: "seconds",
            seconds: "seconds",
            millisecond: "milliseconds",
            milliseconds: "milliseconds"
          }[unit ? unit.toLowerCase() : unit];
          if (!normalized)
            throw new InvalidUnitError(unit);
          return normalized;
        };
        Duration2.isDuration = function isDuration(o) {
          return o && o.isLuxonDuration || false;
        };
        var _proto = Duration2.prototype;
        _proto.toFormat = function toFormat(fmt, opts) {
          if (opts === void 0) {
            opts = {};
          }
          var fmtOpts = _extends({}, opts, {
            floor: opts.round !== false && opts.floor !== false
          });
          return this.isValid ? Formatter.create(this.loc, fmtOpts).formatDurationFromString(this, fmt) : INVALID$2;
        };
        _proto.toHuman = function toHuman(opts) {
          var _this = this;
          if (opts === void 0) {
            opts = {};
          }
          var l2 = orderedUnits$1.map(function(unit) {
            var val = _this.values[unit];
            if (isUndefined(val)) {
              return null;
            }
            return _this.loc.numberFormatter(_extends({
              style: "unit",
              unitDisplay: "long"
            }, opts, {
              unit: unit.slice(0, -1)
            })).format(val);
          }).filter(function(n2) {
            return n2;
          });
          return this.loc.listFormatter(_extends({
            type: "conjunction",
            style: opts.listStyle || "narrow"
          }, opts)).format(l2);
        };
        _proto.toObject = function toObject() {
          if (!this.isValid)
            return {};
          return _extends({}, this.values);
        };
        _proto.toISO = function toISO() {
          if (!this.isValid)
            return null;
          var s2 = "P";
          if (this.years !== 0)
            s2 += this.years + "Y";
          if (this.months !== 0 || this.quarters !== 0)
            s2 += this.months + this.quarters * 3 + "M";
          if (this.weeks !== 0)
            s2 += this.weeks + "W";
          if (this.days !== 0)
            s2 += this.days + "D";
          if (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0)
            s2 += "T";
          if (this.hours !== 0)
            s2 += this.hours + "H";
          if (this.minutes !== 0)
            s2 += this.minutes + "M";
          if (this.seconds !== 0 || this.milliseconds !== 0)
            s2 += roundTo(this.seconds + this.milliseconds / 1e3, 3) + "S";
          if (s2 === "P")
            s2 += "T0S";
          return s2;
        };
        _proto.toISOTime = function toISOTime(opts) {
          if (opts === void 0) {
            opts = {};
          }
          if (!this.isValid)
            return null;
          var millis = this.toMillis();
          if (millis < 0 || millis >= 864e5)
            return null;
          opts = _extends({
            suppressMilliseconds: false,
            suppressSeconds: false,
            includePrefix: false,
            format: "extended"
          }, opts);
          var value = this.shiftTo("hours", "minutes", "seconds", "milliseconds");
          var fmt = opts.format === "basic" ? "hhmm" : "hh:mm";
          if (!opts.suppressSeconds || value.seconds !== 0 || value.milliseconds !== 0) {
            fmt += opts.format === "basic" ? "ss" : ":ss";
            if (!opts.suppressMilliseconds || value.milliseconds !== 0) {
              fmt += ".SSS";
            }
          }
          var str = value.toFormat(fmt);
          if (opts.includePrefix) {
            str = "T" + str;
          }
          return str;
        };
        _proto.toJSON = function toJSON() {
          return this.toISO();
        };
        _proto.toString = function toString() {
          return this.toISO();
        };
        _proto.toMillis = function toMillis() {
          return this.as("milliseconds");
        };
        _proto.valueOf = function valueOf() {
          return this.toMillis();
        };
        _proto.plus = function plus(duration) {
          if (!this.isValid)
            return this;
          var dur = Duration2.fromDurationLike(duration), result = {};
          for (var _iterator = _createForOfIteratorHelperLoose(orderedUnits$1), _step; !(_step = _iterator()).done; ) {
            var k = _step.value;
            if (hasOwnProperty(dur.values, k) || hasOwnProperty(this.values, k)) {
              result[k] = dur.get(k) + this.get(k);
            }
          }
          return clone$12(this, {
            values: result
          }, true);
        };
        _proto.minus = function minus(duration) {
          if (!this.isValid)
            return this;
          var dur = Duration2.fromDurationLike(duration);
          return this.plus(dur.negate());
        };
        _proto.mapUnits = function mapUnits(fn) {
          if (!this.isValid)
            return this;
          var result = {};
          for (var _i = 0, _Object$keys = Object.keys(this.values); _i < _Object$keys.length; _i++) {
            var k = _Object$keys[_i];
            result[k] = asNumber(fn(this.values[k], k));
          }
          return clone$12(this, {
            values: result
          }, true);
        };
        _proto.get = function get(unit) {
          return this[Duration2.normalizeUnit(unit)];
        };
        _proto.set = function set2(values) {
          if (!this.isValid)
            return this;
          var mixed = _extends({}, this.values, normalizeObject(values, Duration2.normalizeUnit));
          return clone$12(this, {
            values: mixed
          });
        };
        _proto.reconfigure = function reconfigure(_temp) {
          var _ref = _temp === void 0 ? {} : _temp, locale = _ref.locale, numberingSystem = _ref.numberingSystem, conversionAccuracy = _ref.conversionAccuracy;
          var loc = this.loc.clone({
            locale,
            numberingSystem
          }), opts = {
            loc
          };
          if (conversionAccuracy) {
            opts.conversionAccuracy = conversionAccuracy;
          }
          return clone$12(this, opts);
        };
        _proto.as = function as(unit) {
          return this.isValid ? this.shiftTo(unit).get(unit) : NaN;
        };
        _proto.normalize = function normalize() {
          if (!this.isValid)
            return this;
          var vals = this.toObject();
          normalizeValues(this.matrix, vals);
          return clone$12(this, {
            values: vals
          }, true);
        };
        _proto.shiftTo = function shiftTo() {
          for (var _len = arguments.length, units = new Array(_len), _key = 0; _key < _len; _key++) {
            units[_key] = arguments[_key];
          }
          if (!this.isValid)
            return this;
          if (units.length === 0) {
            return this;
          }
          units = units.map(function(u) {
            return Duration2.normalizeUnit(u);
          });
          var built = {}, accumulated = {}, vals = this.toObject();
          var lastUnit;
          for (var _iterator2 = _createForOfIteratorHelperLoose(orderedUnits$1), _step2; !(_step2 = _iterator2()).done; ) {
            var k = _step2.value;
            if (units.indexOf(k) >= 0) {
              lastUnit = k;
              var own = 0;
              for (var ak in accumulated) {
                own += this.matrix[ak][k] * accumulated[ak];
                accumulated[ak] = 0;
              }
              if (isNumber2(vals[k])) {
                own += vals[k];
              }
              var i = Math.trunc(own);
              built[k] = i;
              accumulated[k] = (own * 1e3 - i * 1e3) / 1e3;
              for (var down in vals) {
                if (orderedUnits$1.indexOf(down) > orderedUnits$1.indexOf(k)) {
                  convert(this.matrix, vals, down, built, k);
                }
              }
            } else if (isNumber2(vals[k])) {
              accumulated[k] = vals[k];
            }
          }
          for (var key in accumulated) {
            if (accumulated[key] !== 0) {
              built[lastUnit] += key === lastUnit ? accumulated[key] : accumulated[key] / this.matrix[lastUnit][key];
            }
          }
          return clone$12(this, {
            values: built
          }, true).normalize();
        };
        _proto.negate = function negate() {
          if (!this.isValid)
            return this;
          var negated = {};
          for (var _i2 = 0, _Object$keys2 = Object.keys(this.values); _i2 < _Object$keys2.length; _i2++) {
            var k = _Object$keys2[_i2];
            negated[k] = this.values[k] === 0 ? 0 : -this.values[k];
          }
          return clone$12(this, {
            values: negated
          }, true);
        };
        _proto.equals = function equals(other) {
          if (!this.isValid || !other.isValid) {
            return false;
          }
          if (!this.loc.equals(other.loc)) {
            return false;
          }
          function eq2(v1, v2) {
            if (v1 === void 0 || v1 === 0)
              return v2 === void 0 || v2 === 0;
            return v1 === v2;
          }
          for (var _iterator3 = _createForOfIteratorHelperLoose(orderedUnits$1), _step3; !(_step3 = _iterator3()).done; ) {
            var u = _step3.value;
            if (!eq2(this.values[u], other.values[u])) {
              return false;
            }
          }
          return true;
        };
        _createClass(Duration2, [{
          key: "locale",
          get: function get() {
            return this.isValid ? this.loc.locale : null;
          }
        }, {
          key: "numberingSystem",
          get: function get() {
            return this.isValid ? this.loc.numberingSystem : null;
          }
        }, {
          key: "years",
          get: function get() {
            return this.isValid ? this.values.years || 0 : NaN;
          }
        }, {
          key: "quarters",
          get: function get() {
            return this.isValid ? this.values.quarters || 0 : NaN;
          }
        }, {
          key: "months",
          get: function get() {
            return this.isValid ? this.values.months || 0 : NaN;
          }
        }, {
          key: "weeks",
          get: function get() {
            return this.isValid ? this.values.weeks || 0 : NaN;
          }
        }, {
          key: "days",
          get: function get() {
            return this.isValid ? this.values.days || 0 : NaN;
          }
        }, {
          key: "hours",
          get: function get() {
            return this.isValid ? this.values.hours || 0 : NaN;
          }
        }, {
          key: "minutes",
          get: function get() {
            return this.isValid ? this.values.minutes || 0 : NaN;
          }
        }, {
          key: "seconds",
          get: function get() {
            return this.isValid ? this.values.seconds || 0 : NaN;
          }
        }, {
          key: "milliseconds",
          get: function get() {
            return this.isValid ? this.values.milliseconds || 0 : NaN;
          }
        }, {
          key: "isValid",
          get: function get() {
            return this.invalid === null;
          }
        }, {
          key: "invalidReason",
          get: function get() {
            return this.invalid ? this.invalid.reason : null;
          }
        }, {
          key: "invalidExplanation",
          get: function get() {
            return this.invalid ? this.invalid.explanation : null;
          }
        }]);
        return Duration2;
      }();
      var INVALID$1 = "Invalid Interval";
      function validateStartEnd(start, end) {
        if (!start || !start.isValid) {
          return Interval.invalid("missing or invalid start");
        } else if (!end || !end.isValid) {
          return Interval.invalid("missing or invalid end");
        } else if (end < start) {
          return Interval.invalid("end before start", "The end of an interval must be after its start, but you had start=" + start.toISO() + " and end=" + end.toISO());
        } else {
          return null;
        }
      }
      var Interval = /* @__PURE__ */ function() {
        function Interval2(config) {
          this.s = config.start;
          this.e = config.end;
          this.invalid = config.invalid || null;
          this.isLuxonInterval = true;
        }
        Interval2.invalid = function invalid(reason, explanation) {
          if (explanation === void 0) {
            explanation = null;
          }
          if (!reason) {
            throw new InvalidArgumentError("need to specify a reason the Interval is invalid");
          }
          var invalid2 = reason instanceof Invalid ? reason : new Invalid(reason, explanation);
          if (Settings.throwOnInvalid) {
            throw new InvalidIntervalError(invalid2);
          } else {
            return new Interval2({
              invalid: invalid2
            });
          }
        };
        Interval2.fromDateTimes = function fromDateTimes(start, end) {
          var builtStart = friendlyDateTime(start), builtEnd = friendlyDateTime(end);
          var validateError = validateStartEnd(builtStart, builtEnd);
          if (validateError == null) {
            return new Interval2({
              start: builtStart,
              end: builtEnd
            });
          } else {
            return validateError;
          }
        };
        Interval2.after = function after(start, duration) {
          var dur = Duration.fromDurationLike(duration), dt = friendlyDateTime(start);
          return Interval2.fromDateTimes(dt, dt.plus(dur));
        };
        Interval2.before = function before(end, duration) {
          var dur = Duration.fromDurationLike(duration), dt = friendlyDateTime(end);
          return Interval2.fromDateTimes(dt.minus(dur), dt);
        };
        Interval2.fromISO = function fromISO(text, opts) {
          var _split = (text || "").split("/", 2), s2 = _split[0], e = _split[1];
          if (s2 && e) {
            var start, startIsValid;
            try {
              start = DateTime2.fromISO(s2, opts);
              startIsValid = start.isValid;
            } catch (e2) {
              startIsValid = false;
            }
            var end, endIsValid;
            try {
              end = DateTime2.fromISO(e, opts);
              endIsValid = end.isValid;
            } catch (e2) {
              endIsValid = false;
            }
            if (startIsValid && endIsValid) {
              return Interval2.fromDateTimes(start, end);
            }
            if (startIsValid) {
              var dur = Duration.fromISO(e, opts);
              if (dur.isValid) {
                return Interval2.after(start, dur);
              }
            } else if (endIsValid) {
              var _dur = Duration.fromISO(s2, opts);
              if (_dur.isValid) {
                return Interval2.before(end, _dur);
              }
            }
          }
          return Interval2.invalid("unparsable", 'the input "' + text + `" can't be parsed as ISO 8601`);
        };
        Interval2.isInterval = function isInterval(o) {
          return o && o.isLuxonInterval || false;
        };
        var _proto = Interval2.prototype;
        _proto.length = function length(unit) {
          if (unit === void 0) {
            unit = "milliseconds";
          }
          return this.isValid ? this.toDuration.apply(this, [unit]).get(unit) : NaN;
        };
        _proto.count = function count(unit) {
          if (unit === void 0) {
            unit = "milliseconds";
          }
          if (!this.isValid)
            return NaN;
          var start = this.start.startOf(unit), end = this.end.startOf(unit);
          return Math.floor(end.diff(start, unit).get(unit)) + 1;
        };
        _proto.hasSame = function hasSame(unit) {
          return this.isValid ? this.isEmpty() || this.e.minus(1).hasSame(this.s, unit) : false;
        };
        _proto.isEmpty = function isEmpty() {
          return this.s.valueOf() === this.e.valueOf();
        };
        _proto.isAfter = function isAfter(dateTime) {
          if (!this.isValid)
            return false;
          return this.s > dateTime;
        };
        _proto.isBefore = function isBefore(dateTime) {
          if (!this.isValid)
            return false;
          return this.e <= dateTime;
        };
        _proto.contains = function contains(dateTime) {
          if (!this.isValid)
            return false;
          return this.s <= dateTime && this.e > dateTime;
        };
        _proto.set = function set2(_temp) {
          var _ref = _temp === void 0 ? {} : _temp, start = _ref.start, end = _ref.end;
          if (!this.isValid)
            return this;
          return Interval2.fromDateTimes(start || this.s, end || this.e);
        };
        _proto.splitAt = function splitAt() {
          var _this = this;
          if (!this.isValid)
            return [];
          for (var _len = arguments.length, dateTimes = new Array(_len), _key = 0; _key < _len; _key++) {
            dateTimes[_key] = arguments[_key];
          }
          var sorted = dateTimes.map(friendlyDateTime).filter(function(d) {
            return _this.contains(d);
          }).sort(), results = [];
          var s2 = this.s, i = 0;
          while (s2 < this.e) {
            var added = sorted[i] || this.e, next = +added > +this.e ? this.e : added;
            results.push(Interval2.fromDateTimes(s2, next));
            s2 = next;
            i += 1;
          }
          return results;
        };
        _proto.splitBy = function splitBy(duration) {
          var dur = Duration.fromDurationLike(duration);
          if (!this.isValid || !dur.isValid || dur.as("milliseconds") === 0) {
            return [];
          }
          var s2 = this.s, idx = 1, next;
          var results = [];
          while (s2 < this.e) {
            var added = this.start.plus(dur.mapUnits(function(x) {
              return x * idx;
            }));
            next = +added > +this.e ? this.e : added;
            results.push(Interval2.fromDateTimes(s2, next));
            s2 = next;
            idx += 1;
          }
          return results;
        };
        _proto.divideEqually = function divideEqually(numberOfParts) {
          if (!this.isValid)
            return [];
          return this.splitBy(this.length() / numberOfParts).slice(0, numberOfParts);
        };
        _proto.overlaps = function overlaps(other) {
          return this.e > other.s && this.s < other.e;
        };
        _proto.abutsStart = function abutsStart(other) {
          if (!this.isValid)
            return false;
          return +this.e === +other.s;
        };
        _proto.abutsEnd = function abutsEnd(other) {
          if (!this.isValid)
            return false;
          return +other.e === +this.s;
        };
        _proto.engulfs = function engulfs(other) {
          if (!this.isValid)
            return false;
          return this.s <= other.s && this.e >= other.e;
        };
        _proto.equals = function equals(other) {
          if (!this.isValid || !other.isValid) {
            return false;
          }
          return this.s.equals(other.s) && this.e.equals(other.e);
        };
        _proto.intersection = function intersection(other) {
          if (!this.isValid)
            return this;
          var s2 = this.s > other.s ? this.s : other.s, e = this.e < other.e ? this.e : other.e;
          if (s2 >= e) {
            return null;
          } else {
            return Interval2.fromDateTimes(s2, e);
          }
        };
        _proto.union = function union(other) {
          if (!this.isValid)
            return this;
          var s2 = this.s < other.s ? this.s : other.s, e = this.e > other.e ? this.e : other.e;
          return Interval2.fromDateTimes(s2, e);
        };
        Interval2.merge = function merge2(intervals) {
          var _intervals$sort$reduc = intervals.sort(function(a, b) {
            return a.s - b.s;
          }).reduce(function(_ref2, item) {
            var sofar = _ref2[0], current = _ref2[1];
            if (!current) {
              return [sofar, item];
            } else if (current.overlaps(item) || current.abutsStart(item)) {
              return [sofar, current.union(item)];
            } else {
              return [sofar.concat([current]), item];
            }
          }, [[], null]), found = _intervals$sort$reduc[0], final = _intervals$sort$reduc[1];
          if (final) {
            found.push(final);
          }
          return found;
        };
        Interval2.xor = function xor(intervals) {
          var _Array$prototype;
          var start = null, currentCount = 0;
          var results = [], ends = intervals.map(function(i2) {
            return [{
              time: i2.s,
              type: "s"
            }, {
              time: i2.e,
              type: "e"
            }];
          }), flattened = (_Array$prototype = Array.prototype).concat.apply(_Array$prototype, ends), arr = flattened.sort(function(a, b) {
            return a.time - b.time;
          });
          for (var _iterator = _createForOfIteratorHelperLoose(arr), _step; !(_step = _iterator()).done; ) {
            var i = _step.value;
            currentCount += i.type === "s" ? 1 : -1;
            if (currentCount === 1) {
              start = i.time;
            } else {
              if (start && +start !== +i.time) {
                results.push(Interval2.fromDateTimes(start, i.time));
              }
              start = null;
            }
          }
          return Interval2.merge(results);
        };
        _proto.difference = function difference() {
          var _this2 = this;
          for (var _len2 = arguments.length, intervals = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            intervals[_key2] = arguments[_key2];
          }
          return Interval2.xor([this].concat(intervals)).map(function(i) {
            return _this2.intersection(i);
          }).filter(function(i) {
            return i && !i.isEmpty();
          });
        };
        _proto.toString = function toString() {
          if (!this.isValid)
            return INVALID$1;
          return "[" + this.s.toISO() + " \u2013 " + this.e.toISO() + ")";
        };
        _proto.toISO = function toISO(opts) {
          if (!this.isValid)
            return INVALID$1;
          return this.s.toISO(opts) + "/" + this.e.toISO(opts);
        };
        _proto.toISODate = function toISODate() {
          if (!this.isValid)
            return INVALID$1;
          return this.s.toISODate() + "/" + this.e.toISODate();
        };
        _proto.toISOTime = function toISOTime(opts) {
          if (!this.isValid)
            return INVALID$1;
          return this.s.toISOTime(opts) + "/" + this.e.toISOTime(opts);
        };
        _proto.toFormat = function toFormat(dateFormat, _temp2) {
          var _ref3 = _temp2 === void 0 ? {} : _temp2, _ref3$separator = _ref3.separator, separator = _ref3$separator === void 0 ? " \u2013 " : _ref3$separator;
          if (!this.isValid)
            return INVALID$1;
          return "" + this.s.toFormat(dateFormat) + separator + this.e.toFormat(dateFormat);
        };
        _proto.toDuration = function toDuration(unit, opts) {
          if (!this.isValid) {
            return Duration.invalid(this.invalidReason);
          }
          return this.e.diff(this.s, unit, opts);
        };
        _proto.mapEndpoints = function mapEndpoints(mapFn) {
          return Interval2.fromDateTimes(mapFn(this.s), mapFn(this.e));
        };
        _createClass(Interval2, [{
          key: "start",
          get: function get() {
            return this.isValid ? this.s : null;
          }
        }, {
          key: "end",
          get: function get() {
            return this.isValid ? this.e : null;
          }
        }, {
          key: "isValid",
          get: function get() {
            return this.invalidReason === null;
          }
        }, {
          key: "invalidReason",
          get: function get() {
            return this.invalid ? this.invalid.reason : null;
          }
        }, {
          key: "invalidExplanation",
          get: function get() {
            return this.invalid ? this.invalid.explanation : null;
          }
        }]);
        return Interval2;
      }();
      var Info = /* @__PURE__ */ function() {
        function Info2() {
        }
        Info2.hasDST = function hasDST(zone) {
          if (zone === void 0) {
            zone = Settings.defaultZone;
          }
          var proto = DateTime2.now().setZone(zone).set({
            month: 12
          });
          return !zone.isUniversal && proto.offset !== proto.set({
            month: 6
          }).offset;
        };
        Info2.isValidIANAZone = function isValidIANAZone(zone) {
          return IANAZone.isValidZone(zone);
        };
        Info2.normalizeZone = function normalizeZone$1(input) {
          return normalizeZone(input, Settings.defaultZone);
        };
        Info2.months = function months2(length, _temp) {
          if (length === void 0) {
            length = "long";
          }
          var _ref = _temp === void 0 ? {} : _temp, _ref$locale = _ref.locale, locale = _ref$locale === void 0 ? null : _ref$locale, _ref$numberingSystem = _ref.numberingSystem, numberingSystem = _ref$numberingSystem === void 0 ? null : _ref$numberingSystem, _ref$locObj = _ref.locObj, locObj = _ref$locObj === void 0 ? null : _ref$locObj, _ref$outputCalendar = _ref.outputCalendar, outputCalendar = _ref$outputCalendar === void 0 ? "gregory" : _ref$outputCalendar;
          return (locObj || Locale.create(locale, numberingSystem, outputCalendar)).months(length);
        };
        Info2.monthsFormat = function monthsFormat(length, _temp2) {
          if (length === void 0) {
            length = "long";
          }
          var _ref2 = _temp2 === void 0 ? {} : _temp2, _ref2$locale = _ref2.locale, locale = _ref2$locale === void 0 ? null : _ref2$locale, _ref2$numberingSystem = _ref2.numberingSystem, numberingSystem = _ref2$numberingSystem === void 0 ? null : _ref2$numberingSystem, _ref2$locObj = _ref2.locObj, locObj = _ref2$locObj === void 0 ? null : _ref2$locObj, _ref2$outputCalendar = _ref2.outputCalendar, outputCalendar = _ref2$outputCalendar === void 0 ? "gregory" : _ref2$outputCalendar;
          return (locObj || Locale.create(locale, numberingSystem, outputCalendar)).months(length, true);
        };
        Info2.weekdays = function weekdays2(length, _temp3) {
          if (length === void 0) {
            length = "long";
          }
          var _ref3 = _temp3 === void 0 ? {} : _temp3, _ref3$locale = _ref3.locale, locale = _ref3$locale === void 0 ? null : _ref3$locale, _ref3$numberingSystem = _ref3.numberingSystem, numberingSystem = _ref3$numberingSystem === void 0 ? null : _ref3$numberingSystem, _ref3$locObj = _ref3.locObj, locObj = _ref3$locObj === void 0 ? null : _ref3$locObj;
          return (locObj || Locale.create(locale, numberingSystem, null)).weekdays(length);
        };
        Info2.weekdaysFormat = function weekdaysFormat(length, _temp4) {
          if (length === void 0) {
            length = "long";
          }
          var _ref4 = _temp4 === void 0 ? {} : _temp4, _ref4$locale = _ref4.locale, locale = _ref4$locale === void 0 ? null : _ref4$locale, _ref4$numberingSystem = _ref4.numberingSystem, numberingSystem = _ref4$numberingSystem === void 0 ? null : _ref4$numberingSystem, _ref4$locObj = _ref4.locObj, locObj = _ref4$locObj === void 0 ? null : _ref4$locObj;
          return (locObj || Locale.create(locale, numberingSystem, null)).weekdays(length, true);
        };
        Info2.meridiems = function meridiems2(_temp5) {
          var _ref5 = _temp5 === void 0 ? {} : _temp5, _ref5$locale = _ref5.locale, locale = _ref5$locale === void 0 ? null : _ref5$locale;
          return Locale.create(locale).meridiems();
        };
        Info2.eras = function eras2(length, _temp6) {
          if (length === void 0) {
            length = "short";
          }
          var _ref6 = _temp6 === void 0 ? {} : _temp6, _ref6$locale = _ref6.locale, locale = _ref6$locale === void 0 ? null : _ref6$locale;
          return Locale.create(locale, null, "gregory").eras(length);
        };
        Info2.features = function features() {
          return {
            relative: hasRelative()
          };
        };
        return Info2;
      }();
      function dayDiff(earlier, later) {
        var utcDayStart = function utcDayStart2(dt) {
          return dt.toUTC(0, {
            keepLocalTime: true
          }).startOf("day").valueOf();
        }, ms = utcDayStart(later) - utcDayStart(earlier);
        return Math.floor(Duration.fromMillis(ms).as("days"));
      }
      function highOrderDiffs(cursor, later, units) {
        var differs = [["years", function(a, b) {
          return b.year - a.year;
        }], ["quarters", function(a, b) {
          return b.quarter - a.quarter;
        }], ["months", function(a, b) {
          return b.month - a.month + (b.year - a.year) * 12;
        }], ["weeks", function(a, b) {
          var days = dayDiff(a, b);
          return (days - days % 7) / 7;
        }], ["days", dayDiff]];
        var results = {};
        var lowestOrder, highWater;
        for (var _i = 0, _differs = differs; _i < _differs.length; _i++) {
          var _differs$_i = _differs[_i], unit = _differs$_i[0], differ = _differs$_i[1];
          if (units.indexOf(unit) >= 0) {
            var _cursor$plus;
            lowestOrder = unit;
            var delta = differ(cursor, later);
            highWater = cursor.plus((_cursor$plus = {}, _cursor$plus[unit] = delta, _cursor$plus));
            if (highWater > later) {
              var _cursor$plus2;
              cursor = cursor.plus((_cursor$plus2 = {}, _cursor$plus2[unit] = delta - 1, _cursor$plus2));
              delta -= 1;
            } else {
              cursor = highWater;
            }
            results[unit] = delta;
          }
        }
        return [cursor, results, highWater, lowestOrder];
      }
      function _diff(earlier, later, units, opts) {
        var _highOrderDiffs = highOrderDiffs(earlier, later, units), cursor = _highOrderDiffs[0], results = _highOrderDiffs[1], highWater = _highOrderDiffs[2], lowestOrder = _highOrderDiffs[3];
        var remainingMillis = later - cursor;
        var lowerOrderUnits = units.filter(function(u) {
          return ["hours", "minutes", "seconds", "milliseconds"].indexOf(u) >= 0;
        });
        if (lowerOrderUnits.length === 0) {
          if (highWater < later) {
            var _cursor$plus3;
            highWater = cursor.plus((_cursor$plus3 = {}, _cursor$plus3[lowestOrder] = 1, _cursor$plus3));
          }
          if (highWater !== cursor) {
            results[lowestOrder] = (results[lowestOrder] || 0) + remainingMillis / (highWater - cursor);
          }
        }
        var duration = Duration.fromObject(results, opts);
        if (lowerOrderUnits.length > 0) {
          var _Duration$fromMillis;
          return (_Duration$fromMillis = Duration.fromMillis(remainingMillis, opts)).shiftTo.apply(_Duration$fromMillis, lowerOrderUnits).plus(duration);
        } else {
          return duration;
        }
      }
      var numberingSystems = {
        arab: "[\u0660-\u0669]",
        arabext: "[\u06F0-\u06F9]",
        bali: "[\u1B50-\u1B59]",
        beng: "[\u09E6-\u09EF]",
        deva: "[\u0966-\u096F]",
        fullwide: "[\uFF10-\uFF19]",
        gujr: "[\u0AE6-\u0AEF]",
        hanidec: "[\u3007|\u4E00|\u4E8C|\u4E09|\u56DB|\u4E94|\u516D|\u4E03|\u516B|\u4E5D]",
        khmr: "[\u17E0-\u17E9]",
        knda: "[\u0CE6-\u0CEF]",
        laoo: "[\u0ED0-\u0ED9]",
        limb: "[\u1946-\u194F]",
        mlym: "[\u0D66-\u0D6F]",
        mong: "[\u1810-\u1819]",
        mymr: "[\u1040-\u1049]",
        orya: "[\u0B66-\u0B6F]",
        tamldec: "[\u0BE6-\u0BEF]",
        telu: "[\u0C66-\u0C6F]",
        thai: "[\u0E50-\u0E59]",
        tibt: "[\u0F20-\u0F29]",
        latn: "\\d"
      };
      var numberingSystemsUTF16 = {
        arab: [1632, 1641],
        arabext: [1776, 1785],
        bali: [6992, 7001],
        beng: [2534, 2543],
        deva: [2406, 2415],
        fullwide: [65296, 65303],
        gujr: [2790, 2799],
        khmr: [6112, 6121],
        knda: [3302, 3311],
        laoo: [3792, 3801],
        limb: [6470, 6479],
        mlym: [3430, 3439],
        mong: [6160, 6169],
        mymr: [4160, 4169],
        orya: [2918, 2927],
        tamldec: [3046, 3055],
        telu: [3174, 3183],
        thai: [3664, 3673],
        tibt: [3872, 3881]
      };
      var hanidecChars = numberingSystems.hanidec.replace(/[\[|\]]/g, "").split("");
      function parseDigits(str) {
        var value = parseInt(str, 10);
        if (isNaN(value)) {
          value = "";
          for (var i = 0; i < str.length; i++) {
            var code = str.charCodeAt(i);
            if (str[i].search(numberingSystems.hanidec) !== -1) {
              value += hanidecChars.indexOf(str[i]);
            } else {
              for (var key in numberingSystemsUTF16) {
                var _numberingSystemsUTF = numberingSystemsUTF16[key], min = _numberingSystemsUTF[0], max = _numberingSystemsUTF[1];
                if (code >= min && code <= max) {
                  value += code - min;
                }
              }
            }
          }
          return parseInt(value, 10);
        } else {
          return value;
        }
      }
      function digitRegex(_ref, append) {
        var numberingSystem = _ref.numberingSystem;
        if (append === void 0) {
          append = "";
        }
        return new RegExp("" + numberingSystems[numberingSystem || "latn"] + append);
      }
      var MISSING_FTP = "missing Intl.DateTimeFormat.formatToParts support";
      function intUnit(regex, post) {
        if (post === void 0) {
          post = function post2(i) {
            return i;
          };
        }
        return {
          regex,
          deser: function deser(_ref) {
            var s2 = _ref[0];
            return post(parseDigits(s2));
          }
        };
      }
      var NBSP = String.fromCharCode(160);
      var spaceOrNBSP = "( |" + NBSP + ")";
      var spaceOrNBSPRegExp = new RegExp(spaceOrNBSP, "g");
      function fixListRegex(s2) {
        return s2.replace(/\./g, "\\.?").replace(spaceOrNBSPRegExp, spaceOrNBSP);
      }
      function stripInsensitivities(s2) {
        return s2.replace(/\./g, "").replace(spaceOrNBSPRegExp, " ").toLowerCase();
      }
      function oneOf(strings, startIndex) {
        if (strings === null) {
          return null;
        } else {
          return {
            regex: RegExp(strings.map(fixListRegex).join("|")),
            deser: function deser(_ref2) {
              var s2 = _ref2[0];
              return strings.findIndex(function(i) {
                return stripInsensitivities(s2) === stripInsensitivities(i);
              }) + startIndex;
            }
          };
        }
      }
      function offset(regex, groups) {
        return {
          regex,
          deser: function deser(_ref3) {
            var h = _ref3[1], m = _ref3[2];
            return signedOffset(h, m);
          },
          groups
        };
      }
      function simple(regex) {
        return {
          regex,
          deser: function deser(_ref4) {
            var s2 = _ref4[0];
            return s2;
          }
        };
      }
      function escapeToken(value) {
        return value.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
      }
      function unitForToken(token, loc) {
        var one = digitRegex(loc), two = digitRegex(loc, "{2}"), three = digitRegex(loc, "{3}"), four = digitRegex(loc, "{4}"), six = digitRegex(loc, "{6}"), oneOrTwo = digitRegex(loc, "{1,2}"), oneToThree = digitRegex(loc, "{1,3}"), oneToSix = digitRegex(loc, "{1,6}"), oneToNine = digitRegex(loc, "{1,9}"), twoToFour = digitRegex(loc, "{2,4}"), fourToSix = digitRegex(loc, "{4,6}"), literal = function literal2(t) {
          return {
            regex: RegExp(escapeToken(t.val)),
            deser: function deser(_ref5) {
              var s2 = _ref5[0];
              return s2;
            },
            literal: true
          };
        }, unitate = function unitate2(t) {
          if (token.literal) {
            return literal(t);
          }
          switch (t.val) {
            case "G":
              return oneOf(loc.eras("short", false), 0);
            case "GG":
              return oneOf(loc.eras("long", false), 0);
            case "y":
              return intUnit(oneToSix);
            case "yy":
              return intUnit(twoToFour, untruncateYear);
            case "yyyy":
              return intUnit(four);
            case "yyyyy":
              return intUnit(fourToSix);
            case "yyyyyy":
              return intUnit(six);
            case "M":
              return intUnit(oneOrTwo);
            case "MM":
              return intUnit(two);
            case "MMM":
              return oneOf(loc.months("short", true, false), 1);
            case "MMMM":
              return oneOf(loc.months("long", true, false), 1);
            case "L":
              return intUnit(oneOrTwo);
            case "LL":
              return intUnit(two);
            case "LLL":
              return oneOf(loc.months("short", false, false), 1);
            case "LLLL":
              return oneOf(loc.months("long", false, false), 1);
            case "d":
              return intUnit(oneOrTwo);
            case "dd":
              return intUnit(two);
            case "o":
              return intUnit(oneToThree);
            case "ooo":
              return intUnit(three);
            case "HH":
              return intUnit(two);
            case "H":
              return intUnit(oneOrTwo);
            case "hh":
              return intUnit(two);
            case "h":
              return intUnit(oneOrTwo);
            case "mm":
              return intUnit(two);
            case "m":
              return intUnit(oneOrTwo);
            case "q":
              return intUnit(oneOrTwo);
            case "qq":
              return intUnit(two);
            case "s":
              return intUnit(oneOrTwo);
            case "ss":
              return intUnit(two);
            case "S":
              return intUnit(oneToThree);
            case "SSS":
              return intUnit(three);
            case "u":
              return simple(oneToNine);
            case "uu":
              return simple(oneOrTwo);
            case "uuu":
              return intUnit(one);
            case "a":
              return oneOf(loc.meridiems(), 0);
            case "kkkk":
              return intUnit(four);
            case "kk":
              return intUnit(twoToFour, untruncateYear);
            case "W":
              return intUnit(oneOrTwo);
            case "WW":
              return intUnit(two);
            case "E":
            case "c":
              return intUnit(one);
            case "EEE":
              return oneOf(loc.weekdays("short", false, false), 1);
            case "EEEE":
              return oneOf(loc.weekdays("long", false, false), 1);
            case "ccc":
              return oneOf(loc.weekdays("short", true, false), 1);
            case "cccc":
              return oneOf(loc.weekdays("long", true, false), 1);
            case "Z":
            case "ZZ":
              return offset(new RegExp("([+-]" + oneOrTwo.source + ")(?::(" + two.source + "))?"), 2);
            case "ZZZ":
              return offset(new RegExp("([+-]" + oneOrTwo.source + ")(" + two.source + ")?"), 2);
            case "z":
              return simple(/[a-z_+-/]{1,256}?/i);
            default:
              return literal(t);
          }
        };
        var unit = unitate(token) || {
          invalidReason: MISSING_FTP
        };
        unit.token = token;
        return unit;
      }
      var partTypeStyleToTokenVal = {
        year: {
          "2-digit": "yy",
          numeric: "yyyyy"
        },
        month: {
          numeric: "M",
          "2-digit": "MM",
          short: "MMM",
          long: "MMMM"
        },
        day: {
          numeric: "d",
          "2-digit": "dd"
        },
        weekday: {
          short: "EEE",
          long: "EEEE"
        },
        dayperiod: "a",
        dayPeriod: "a",
        hour: {
          numeric: "h",
          "2-digit": "hh"
        },
        minute: {
          numeric: "m",
          "2-digit": "mm"
        },
        second: {
          numeric: "s",
          "2-digit": "ss"
        }
      };
      function tokenForPart(part, locale, formatOpts) {
        var type = part.type, value = part.value;
        if (type === "literal") {
          return {
            literal: true,
            val: value
          };
        }
        var style = formatOpts[type];
        var val = partTypeStyleToTokenVal[type];
        if (typeof val === "object") {
          val = val[style];
        }
        if (val) {
          return {
            literal: false,
            val
          };
        }
        return void 0;
      }
      function buildRegex(units) {
        var re = units.map(function(u) {
          return u.regex;
        }).reduce(function(f, r) {
          return f + "(" + r.source + ")";
        }, "");
        return ["^" + re + "$", units];
      }
      function match(input, regex, handlers) {
        var matches = input.match(regex);
        if (matches) {
          var all = {};
          var matchIndex = 1;
          for (var i in handlers) {
            if (hasOwnProperty(handlers, i)) {
              var h = handlers[i], groups = h.groups ? h.groups + 1 : 1;
              if (!h.literal && h.token) {
                all[h.token.val[0]] = h.deser(matches.slice(matchIndex, matchIndex + groups));
              }
              matchIndex += groups;
            }
          }
          return [matches, all];
        } else {
          return [matches, {}];
        }
      }
      function dateTimeFromMatches(matches) {
        var toField = function toField2(token) {
          switch (token) {
            case "S":
              return "millisecond";
            case "s":
              return "second";
            case "m":
              return "minute";
            case "h":
            case "H":
              return "hour";
            case "d":
              return "day";
            case "o":
              return "ordinal";
            case "L":
            case "M":
              return "month";
            case "y":
              return "year";
            case "E":
            case "c":
              return "weekday";
            case "W":
              return "weekNumber";
            case "k":
              return "weekYear";
            case "q":
              return "quarter";
            default:
              return null;
          }
        };
        var zone = null;
        var specificOffset;
        if (!isUndefined(matches.z)) {
          zone = IANAZone.create(matches.z);
        }
        if (!isUndefined(matches.Z)) {
          if (!zone) {
            zone = new FixedOffsetZone(matches.Z);
          }
          specificOffset = matches.Z;
        }
        if (!isUndefined(matches.q)) {
          matches.M = (matches.q - 1) * 3 + 1;
        }
        if (!isUndefined(matches.h)) {
          if (matches.h < 12 && matches.a === 1) {
            matches.h += 12;
          } else if (matches.h === 12 && matches.a === 0) {
            matches.h = 0;
          }
        }
        if (matches.G === 0 && matches.y) {
          matches.y = -matches.y;
        }
        if (!isUndefined(matches.u)) {
          matches.S = parseMillis(matches.u);
        }
        var vals = Object.keys(matches).reduce(function(r, k) {
          var f = toField(k);
          if (f) {
            r[f] = matches[k];
          }
          return r;
        }, {});
        return [vals, zone, specificOffset];
      }
      var dummyDateTimeCache = null;
      function getDummyDateTime() {
        if (!dummyDateTimeCache) {
          dummyDateTimeCache = DateTime2.fromMillis(1555555555555);
        }
        return dummyDateTimeCache;
      }
      function maybeExpandMacroToken(token, locale) {
        if (token.literal) {
          return token;
        }
        var formatOpts = Formatter.macroTokenToFormatOpts(token.val);
        if (!formatOpts) {
          return token;
        }
        var formatter = Formatter.create(locale, formatOpts);
        var parts = formatter.formatDateTimeParts(getDummyDateTime());
        var tokens = parts.map(function(p) {
          return tokenForPart(p, locale, formatOpts);
        });
        if (tokens.includes(void 0)) {
          return token;
        }
        return tokens;
      }
      function expandMacroTokens(tokens, locale) {
        var _Array$prototype;
        return (_Array$prototype = Array.prototype).concat.apply(_Array$prototype, tokens.map(function(t) {
          return maybeExpandMacroToken(t, locale);
        }));
      }
      function explainFromTokens(locale, input, format) {
        var tokens = expandMacroTokens(Formatter.parseFormat(format), locale), units = tokens.map(function(t) {
          return unitForToken(t, locale);
        }), disqualifyingUnit = units.find(function(t) {
          return t.invalidReason;
        });
        if (disqualifyingUnit) {
          return {
            input,
            tokens,
            invalidReason: disqualifyingUnit.invalidReason
          };
        } else {
          var _buildRegex = buildRegex(units), regexString = _buildRegex[0], handlers = _buildRegex[1], regex = RegExp(regexString, "i"), _match = match(input, regex, handlers), rawMatches = _match[0], matches = _match[1], _ref6 = matches ? dateTimeFromMatches(matches) : [null, null, void 0], result = _ref6[0], zone = _ref6[1], specificOffset = _ref6[2];
          if (hasOwnProperty(matches, "a") && hasOwnProperty(matches, "H")) {
            throw new ConflictingSpecificationError("Can't include meridiem when specifying 24-hour format");
          }
          return {
            input,
            tokens,
            regex,
            rawMatches,
            matches,
            result,
            zone,
            specificOffset
          };
        }
      }
      function parseFromTokens(locale, input, format) {
        var _explainFromTokens = explainFromTokens(locale, input, format), result = _explainFromTokens.result, zone = _explainFromTokens.zone, specificOffset = _explainFromTokens.specificOffset, invalidReason = _explainFromTokens.invalidReason;
        return [result, zone, specificOffset, invalidReason];
      }
      var nonLeapLadder = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
      var leapLadder = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
      function unitOutOfRange(unit, value) {
        return new Invalid("unit out of range", "you specified " + value + " (of type " + typeof value + ") as a " + unit + ", which is invalid");
      }
      function dayOfWeek(year, month, day) {
        var js = new Date(Date.UTC(year, month - 1, day)).getUTCDay();
        return js === 0 ? 7 : js;
      }
      function computeOrdinal(year, month, day) {
        return day + (isLeapYear(year) ? leapLadder : nonLeapLadder)[month - 1];
      }
      function uncomputeOrdinal(year, ordinal) {
        var table = isLeapYear(year) ? leapLadder : nonLeapLadder, month0 = table.findIndex(function(i) {
          return i < ordinal;
        }), day = ordinal - table[month0];
        return {
          month: month0 + 1,
          day
        };
      }
      function gregorianToWeek(gregObj) {
        var year = gregObj.year, month = gregObj.month, day = gregObj.day, ordinal = computeOrdinal(year, month, day), weekday = dayOfWeek(year, month, day);
        var weekNumber = Math.floor((ordinal - weekday + 10) / 7), weekYear;
        if (weekNumber < 1) {
          weekYear = year - 1;
          weekNumber = weeksInWeekYear(weekYear);
        } else if (weekNumber > weeksInWeekYear(year)) {
          weekYear = year + 1;
          weekNumber = 1;
        } else {
          weekYear = year;
        }
        return _extends({
          weekYear,
          weekNumber,
          weekday
        }, timeObject(gregObj));
      }
      function weekToGregorian(weekData) {
        var weekYear = weekData.weekYear, weekNumber = weekData.weekNumber, weekday = weekData.weekday, weekdayOfJan4 = dayOfWeek(weekYear, 1, 4), yearInDays = daysInYear(weekYear);
        var ordinal = weekNumber * 7 + weekday - weekdayOfJan4 - 3, year;
        if (ordinal < 1) {
          year = weekYear - 1;
          ordinal += daysInYear(year);
        } else if (ordinal > yearInDays) {
          year = weekYear + 1;
          ordinal -= daysInYear(weekYear);
        } else {
          year = weekYear;
        }
        var _uncomputeOrdinal = uncomputeOrdinal(year, ordinal), month = _uncomputeOrdinal.month, day = _uncomputeOrdinal.day;
        return _extends({
          year,
          month,
          day
        }, timeObject(weekData));
      }
      function gregorianToOrdinal(gregData) {
        var year = gregData.year, month = gregData.month, day = gregData.day;
        var ordinal = computeOrdinal(year, month, day);
        return _extends({
          year,
          ordinal
        }, timeObject(gregData));
      }
      function ordinalToGregorian(ordinalData) {
        var year = ordinalData.year, ordinal = ordinalData.ordinal;
        var _uncomputeOrdinal2 = uncomputeOrdinal(year, ordinal), month = _uncomputeOrdinal2.month, day = _uncomputeOrdinal2.day;
        return _extends({
          year,
          month,
          day
        }, timeObject(ordinalData));
      }
      function hasInvalidWeekData(obj) {
        var validYear = isInteger(obj.weekYear), validWeek = integerBetween(obj.weekNumber, 1, weeksInWeekYear(obj.weekYear)), validWeekday = integerBetween(obj.weekday, 1, 7);
        if (!validYear) {
          return unitOutOfRange("weekYear", obj.weekYear);
        } else if (!validWeek) {
          return unitOutOfRange("week", obj.week);
        } else if (!validWeekday) {
          return unitOutOfRange("weekday", obj.weekday);
        } else
          return false;
      }
      function hasInvalidOrdinalData(obj) {
        var validYear = isInteger(obj.year), validOrdinal = integerBetween(obj.ordinal, 1, daysInYear(obj.year));
        if (!validYear) {
          return unitOutOfRange("year", obj.year);
        } else if (!validOrdinal) {
          return unitOutOfRange("ordinal", obj.ordinal);
        } else
          return false;
      }
      function hasInvalidGregorianData(obj) {
        var validYear = isInteger(obj.year), validMonth = integerBetween(obj.month, 1, 12), validDay = integerBetween(obj.day, 1, daysInMonth(obj.year, obj.month));
        if (!validYear) {
          return unitOutOfRange("year", obj.year);
        } else if (!validMonth) {
          return unitOutOfRange("month", obj.month);
        } else if (!validDay) {
          return unitOutOfRange("day", obj.day);
        } else
          return false;
      }
      function hasInvalidTimeData(obj) {
        var hour = obj.hour, minute = obj.minute, second = obj.second, millisecond = obj.millisecond;
        var validHour = integerBetween(hour, 0, 23) || hour === 24 && minute === 0 && second === 0 && millisecond === 0, validMinute = integerBetween(minute, 0, 59), validSecond = integerBetween(second, 0, 59), validMillisecond = integerBetween(millisecond, 0, 999);
        if (!validHour) {
          return unitOutOfRange("hour", hour);
        } else if (!validMinute) {
          return unitOutOfRange("minute", minute);
        } else if (!validSecond) {
          return unitOutOfRange("second", second);
        } else if (!validMillisecond) {
          return unitOutOfRange("millisecond", millisecond);
        } else
          return false;
      }
      var INVALID = "Invalid DateTime";
      var MAX_DATE = 864e13;
      function unsupportedZone(zone) {
        return new Invalid("unsupported zone", 'the zone "' + zone.name + '" is not supported');
      }
      function possiblyCachedWeekData(dt) {
        if (dt.weekData === null) {
          dt.weekData = gregorianToWeek(dt.c);
        }
        return dt.weekData;
      }
      function clone2(inst, alts) {
        var current = {
          ts: inst.ts,
          zone: inst.zone,
          c: inst.c,
          o: inst.o,
          loc: inst.loc,
          invalid: inst.invalid
        };
        return new DateTime2(_extends({}, current, alts, {
          old: current
        }));
      }
      function fixOffset(localTS, o, tz) {
        var utcGuess = localTS - o * 60 * 1e3;
        var o2 = tz.offset(utcGuess);
        if (o === o2) {
          return [utcGuess, o];
        }
        utcGuess -= (o2 - o) * 60 * 1e3;
        var o3 = tz.offset(utcGuess);
        if (o2 === o3) {
          return [utcGuess, o2];
        }
        return [localTS - Math.min(o2, o3) * 60 * 1e3, Math.max(o2, o3)];
      }
      function tsToObj(ts, offset2) {
        ts += offset2 * 60 * 1e3;
        var d = new Date(ts);
        return {
          year: d.getUTCFullYear(),
          month: d.getUTCMonth() + 1,
          day: d.getUTCDate(),
          hour: d.getUTCHours(),
          minute: d.getUTCMinutes(),
          second: d.getUTCSeconds(),
          millisecond: d.getUTCMilliseconds()
        };
      }
      function objToTS(obj, offset2, zone) {
        return fixOffset(objToLocalTS(obj), offset2, zone);
      }
      function adjustTime(inst, dur) {
        var oPre = inst.o, year = inst.c.year + Math.trunc(dur.years), month = inst.c.month + Math.trunc(dur.months) + Math.trunc(dur.quarters) * 3, c = _extends({}, inst.c, {
          year,
          month,
          day: Math.min(inst.c.day, daysInMonth(year, month)) + Math.trunc(dur.days) + Math.trunc(dur.weeks) * 7
        }), millisToAdd = Duration.fromObject({
          years: dur.years - Math.trunc(dur.years),
          quarters: dur.quarters - Math.trunc(dur.quarters),
          months: dur.months - Math.trunc(dur.months),
          weeks: dur.weeks - Math.trunc(dur.weeks),
          days: dur.days - Math.trunc(dur.days),
          hours: dur.hours,
          minutes: dur.minutes,
          seconds: dur.seconds,
          milliseconds: dur.milliseconds
        }).as("milliseconds"), localTS = objToLocalTS(c);
        var _fixOffset = fixOffset(localTS, oPre, inst.zone), ts = _fixOffset[0], o = _fixOffset[1];
        if (millisToAdd !== 0) {
          ts += millisToAdd;
          o = inst.zone.offset(ts);
        }
        return {
          ts,
          o
        };
      }
      function parseDataToDateTime(parsed, parsedZone, opts, format, text, specificOffset) {
        var setZone = opts.setZone, zone = opts.zone;
        if (parsed && Object.keys(parsed).length !== 0) {
          var interpretationZone = parsedZone || zone, inst = DateTime2.fromObject(parsed, _extends({}, opts, {
            zone: interpretationZone,
            specificOffset
          }));
          return setZone ? inst : inst.setZone(zone);
        } else {
          return DateTime2.invalid(new Invalid("unparsable", 'the input "' + text + `" can't be parsed as ` + format));
        }
      }
      function toTechFormat(dt, format, allowZ) {
        if (allowZ === void 0) {
          allowZ = true;
        }
        return dt.isValid ? Formatter.create(Locale.create("en-US"), {
          allowZ,
          forceSimple: true
        }).formatDateTimeFromString(dt, format) : null;
      }
      function _toISODate(o, extended) {
        var longFormat = o.c.year > 9999 || o.c.year < 0;
        var c = "";
        if (longFormat && o.c.year >= 0)
          c += "+";
        c += padStart(o.c.year, longFormat ? 6 : 4);
        if (extended) {
          c += "-";
          c += padStart(o.c.month);
          c += "-";
          c += padStart(o.c.day);
        } else {
          c += padStart(o.c.month);
          c += padStart(o.c.day);
        }
        return c;
      }
      function _toISOTime(o, extended, suppressSeconds, suppressMilliseconds, includeOffset) {
        var c = padStart(o.c.hour);
        if (extended) {
          c += ":";
          c += padStart(o.c.minute);
          if (o.c.second !== 0 || !suppressSeconds) {
            c += ":";
          }
        } else {
          c += padStart(o.c.minute);
        }
        if (o.c.second !== 0 || !suppressSeconds) {
          c += padStart(o.c.second);
          if (o.c.millisecond !== 0 || !suppressMilliseconds) {
            c += ".";
            c += padStart(o.c.millisecond, 3);
          }
        }
        if (includeOffset) {
          if (o.isOffsetFixed && o.offset === 0) {
            c += "Z";
          } else if (o.o < 0) {
            c += "-";
            c += padStart(Math.trunc(-o.o / 60));
            c += ":";
            c += padStart(Math.trunc(-o.o % 60));
          } else {
            c += "+";
            c += padStart(Math.trunc(o.o / 60));
            c += ":";
            c += padStart(Math.trunc(o.o % 60));
          }
        }
        return c;
      }
      var defaultUnitValues = {
        month: 1,
        day: 1,
        hour: 0,
        minute: 0,
        second: 0,
        millisecond: 0
      };
      var defaultWeekUnitValues = {
        weekNumber: 1,
        weekday: 1,
        hour: 0,
        minute: 0,
        second: 0,
        millisecond: 0
      };
      var defaultOrdinalUnitValues = {
        ordinal: 1,
        hour: 0,
        minute: 0,
        second: 0,
        millisecond: 0
      };
      var orderedUnits = ["year", "month", "day", "hour", "minute", "second", "millisecond"];
      var orderedWeekUnits = ["weekYear", "weekNumber", "weekday", "hour", "minute", "second", "millisecond"];
      var orderedOrdinalUnits = ["year", "ordinal", "hour", "minute", "second", "millisecond"];
      function normalizeUnit(unit) {
        var normalized = {
          year: "year",
          years: "year",
          month: "month",
          months: "month",
          day: "day",
          days: "day",
          hour: "hour",
          hours: "hour",
          minute: "minute",
          minutes: "minute",
          quarter: "quarter",
          quarters: "quarter",
          second: "second",
          seconds: "second",
          millisecond: "millisecond",
          milliseconds: "millisecond",
          weekday: "weekday",
          weekdays: "weekday",
          weeknumber: "weekNumber",
          weeksnumber: "weekNumber",
          weeknumbers: "weekNumber",
          weekyear: "weekYear",
          weekyears: "weekYear",
          ordinal: "ordinal"
        }[unit.toLowerCase()];
        if (!normalized)
          throw new InvalidUnitError(unit);
        return normalized;
      }
      function quickDT(obj, opts) {
        var zone = normalizeZone(opts.zone, Settings.defaultZone), loc = Locale.fromObject(opts), tsNow = Settings.now();
        var ts, o;
        if (!isUndefined(obj.year)) {
          for (var _iterator = _createForOfIteratorHelperLoose(orderedUnits), _step; !(_step = _iterator()).done; ) {
            var u = _step.value;
            if (isUndefined(obj[u])) {
              obj[u] = defaultUnitValues[u];
            }
          }
          var invalid = hasInvalidGregorianData(obj) || hasInvalidTimeData(obj);
          if (invalid) {
            return DateTime2.invalid(invalid);
          }
          var offsetProvis = zone.offset(tsNow);
          var _objToTS = objToTS(obj, offsetProvis, zone);
          ts = _objToTS[0];
          o = _objToTS[1];
        } else {
          ts = tsNow;
        }
        return new DateTime2({
          ts,
          zone,
          loc,
          o
        });
      }
      function diffRelative(start, end, opts) {
        var round2 = isUndefined(opts.round) ? true : opts.round, format = function format2(c, unit2) {
          c = roundTo(c, round2 || opts.calendary ? 0 : 2, true);
          var formatter = end.loc.clone(opts).relFormatter(opts);
          return formatter.format(c, unit2);
        }, differ = function differ2(unit2) {
          if (opts.calendary) {
            if (!end.hasSame(start, unit2)) {
              return end.startOf(unit2).diff(start.startOf(unit2), unit2).get(unit2);
            } else
              return 0;
          } else {
            return end.diff(start, unit2).get(unit2);
          }
        };
        if (opts.unit) {
          return format(differ(opts.unit), opts.unit);
        }
        for (var _iterator2 = _createForOfIteratorHelperLoose(opts.units), _step2; !(_step2 = _iterator2()).done; ) {
          var unit = _step2.value;
          var count = differ(unit);
          if (Math.abs(count) >= 1) {
            return format(count, unit);
          }
        }
        return format(start > end ? -0 : 0, opts.units[opts.units.length - 1]);
      }
      function lastOpts(argList) {
        var opts = {}, args;
        if (argList.length > 0 && typeof argList[argList.length - 1] === "object") {
          opts = argList[argList.length - 1];
          args = Array.from(argList).slice(0, argList.length - 1);
        } else {
          args = Array.from(argList);
        }
        return [opts, args];
      }
      var DateTime2 = /* @__PURE__ */ function() {
        function DateTime3(config) {
          var zone = config.zone || Settings.defaultZone;
          var invalid = config.invalid || (Number.isNaN(config.ts) ? new Invalid("invalid input") : null) || (!zone.isValid ? unsupportedZone(zone) : null);
          this.ts = isUndefined(config.ts) ? Settings.now() : config.ts;
          var c = null, o = null;
          if (!invalid) {
            var unchanged = config.old && config.old.ts === this.ts && config.old.zone.equals(zone);
            if (unchanged) {
              var _ref = [config.old.c, config.old.o];
              c = _ref[0];
              o = _ref[1];
            } else {
              var ot = zone.offset(this.ts);
              c = tsToObj(this.ts, ot);
              invalid = Number.isNaN(c.year) ? new Invalid("invalid input") : null;
              c = invalid ? null : c;
              o = invalid ? null : ot;
            }
          }
          this._zone = zone;
          this.loc = config.loc || Locale.create();
          this.invalid = invalid;
          this.weekData = null;
          this.c = c;
          this.o = o;
          this.isLuxonDateTime = true;
        }
        DateTime3.now = function now2() {
          return new DateTime3({});
        };
        DateTime3.local = function local() {
          var _lastOpts = lastOpts(arguments), opts = _lastOpts[0], args = _lastOpts[1], year = args[0], month = args[1], day = args[2], hour = args[3], minute = args[4], second = args[5], millisecond = args[6];
          return quickDT({
            year,
            month,
            day,
            hour,
            minute,
            second,
            millisecond
          }, opts);
        };
        DateTime3.utc = function utc() {
          var _lastOpts2 = lastOpts(arguments), opts = _lastOpts2[0], args = _lastOpts2[1], year = args[0], month = args[1], day = args[2], hour = args[3], minute = args[4], second = args[5], millisecond = args[6];
          opts.zone = FixedOffsetZone.utcInstance;
          return quickDT({
            year,
            month,
            day,
            hour,
            minute,
            second,
            millisecond
          }, opts);
        };
        DateTime3.fromJSDate = function fromJSDate(date, options) {
          if (options === void 0) {
            options = {};
          }
          var ts = isDate(date) ? date.valueOf() : NaN;
          if (Number.isNaN(ts)) {
            return DateTime3.invalid("invalid input");
          }
          var zoneToUse = normalizeZone(options.zone, Settings.defaultZone);
          if (!zoneToUse.isValid) {
            return DateTime3.invalid(unsupportedZone(zoneToUse));
          }
          return new DateTime3({
            ts,
            zone: zoneToUse,
            loc: Locale.fromObject(options)
          });
        };
        DateTime3.fromMillis = function fromMillis(milliseconds, options) {
          if (options === void 0) {
            options = {};
          }
          if (!isNumber2(milliseconds)) {
            throw new InvalidArgumentError("fromMillis requires a numerical input, but received a " + typeof milliseconds + " with value " + milliseconds);
          } else if (milliseconds < -MAX_DATE || milliseconds > MAX_DATE) {
            return DateTime3.invalid("Timestamp out of range");
          } else {
            return new DateTime3({
              ts: milliseconds,
              zone: normalizeZone(options.zone, Settings.defaultZone),
              loc: Locale.fromObject(options)
            });
          }
        };
        DateTime3.fromSeconds = function fromSeconds(seconds, options) {
          if (options === void 0) {
            options = {};
          }
          if (!isNumber2(seconds)) {
            throw new InvalidArgumentError("fromSeconds requires a numerical input");
          } else {
            return new DateTime3({
              ts: seconds * 1e3,
              zone: normalizeZone(options.zone, Settings.defaultZone),
              loc: Locale.fromObject(options)
            });
          }
        };
        DateTime3.fromObject = function fromObject2(obj, opts) {
          if (opts === void 0) {
            opts = {};
          }
          obj = obj || {};
          var zoneToUse = normalizeZone(opts.zone, Settings.defaultZone);
          if (!zoneToUse.isValid) {
            return DateTime3.invalid(unsupportedZone(zoneToUse));
          }
          var tsNow = Settings.now(), offsetProvis = !isUndefined(opts.specificOffset) ? opts.specificOffset : zoneToUse.offset(tsNow), normalized = normalizeObject(obj, normalizeUnit), containsOrdinal = !isUndefined(normalized.ordinal), containsGregorYear = !isUndefined(normalized.year), containsGregorMD = !isUndefined(normalized.month) || !isUndefined(normalized.day), containsGregor = containsGregorYear || containsGregorMD, definiteWeekDef = normalized.weekYear || normalized.weekNumber, loc = Locale.fromObject(opts);
          if ((containsGregor || containsOrdinal) && definiteWeekDef) {
            throw new ConflictingSpecificationError("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
          }
          if (containsGregorMD && containsOrdinal) {
            throw new ConflictingSpecificationError("Can't mix ordinal dates with month/day");
          }
          var useWeekData = definiteWeekDef || normalized.weekday && !containsGregor;
          var units, defaultValues, objNow = tsToObj(tsNow, offsetProvis);
          if (useWeekData) {
            units = orderedWeekUnits;
            defaultValues = defaultWeekUnitValues;
            objNow = gregorianToWeek(objNow);
          } else if (containsOrdinal) {
            units = orderedOrdinalUnits;
            defaultValues = defaultOrdinalUnitValues;
            objNow = gregorianToOrdinal(objNow);
          } else {
            units = orderedUnits;
            defaultValues = defaultUnitValues;
          }
          var foundFirst = false;
          for (var _iterator3 = _createForOfIteratorHelperLoose(units), _step3; !(_step3 = _iterator3()).done; ) {
            var u = _step3.value;
            var v = normalized[u];
            if (!isUndefined(v)) {
              foundFirst = true;
            } else if (foundFirst) {
              normalized[u] = defaultValues[u];
            } else {
              normalized[u] = objNow[u];
            }
          }
          var higherOrderInvalid = useWeekData ? hasInvalidWeekData(normalized) : containsOrdinal ? hasInvalidOrdinalData(normalized) : hasInvalidGregorianData(normalized), invalid = higherOrderInvalid || hasInvalidTimeData(normalized);
          if (invalid) {
            return DateTime3.invalid(invalid);
          }
          var gregorian = useWeekData ? weekToGregorian(normalized) : containsOrdinal ? ordinalToGregorian(normalized) : normalized, _objToTS2 = objToTS(gregorian, offsetProvis, zoneToUse), tsFinal = _objToTS2[0], offsetFinal = _objToTS2[1], inst = new DateTime3({
            ts: tsFinal,
            zone: zoneToUse,
            o: offsetFinal,
            loc
          });
          if (normalized.weekday && containsGregor && obj.weekday !== inst.weekday) {
            return DateTime3.invalid("mismatched weekday", "you can't specify both a weekday of " + normalized.weekday + " and a date of " + inst.toISO());
          }
          return inst;
        };
        DateTime3.fromISO = function fromISO(text, opts) {
          if (opts === void 0) {
            opts = {};
          }
          var _parseISODate = parseISODate(text), vals = _parseISODate[0], parsedZone = _parseISODate[1];
          return parseDataToDateTime(vals, parsedZone, opts, "ISO 8601", text);
        };
        DateTime3.fromRFC2822 = function fromRFC2822(text, opts) {
          if (opts === void 0) {
            opts = {};
          }
          var _parseRFC2822Date = parseRFC2822Date(text), vals = _parseRFC2822Date[0], parsedZone = _parseRFC2822Date[1];
          return parseDataToDateTime(vals, parsedZone, opts, "RFC 2822", text);
        };
        DateTime3.fromHTTP = function fromHTTP(text, opts) {
          if (opts === void 0) {
            opts = {};
          }
          var _parseHTTPDate = parseHTTPDate(text), vals = _parseHTTPDate[0], parsedZone = _parseHTTPDate[1];
          return parseDataToDateTime(vals, parsedZone, opts, "HTTP", opts);
        };
        DateTime3.fromFormat = function fromFormat(text, fmt, opts) {
          if (opts === void 0) {
            opts = {};
          }
          if (isUndefined(text) || isUndefined(fmt)) {
            throw new InvalidArgumentError("fromFormat requires an input string and a format");
          }
          var _opts = opts, _opts$locale = _opts.locale, locale = _opts$locale === void 0 ? null : _opts$locale, _opts$numberingSystem = _opts.numberingSystem, numberingSystem = _opts$numberingSystem === void 0 ? null : _opts$numberingSystem, localeToUse = Locale.fromOpts({
            locale,
            numberingSystem,
            defaultToEN: true
          }), _parseFromTokens = parseFromTokens(localeToUse, text, fmt), vals = _parseFromTokens[0], parsedZone = _parseFromTokens[1], specificOffset = _parseFromTokens[2], invalid = _parseFromTokens[3];
          if (invalid) {
            return DateTime3.invalid(invalid);
          } else {
            return parseDataToDateTime(vals, parsedZone, opts, "format " + fmt, text, specificOffset);
          }
        };
        DateTime3.fromString = function fromString(text, fmt, opts) {
          if (opts === void 0) {
            opts = {};
          }
          return DateTime3.fromFormat(text, fmt, opts);
        };
        DateTime3.fromSQL = function fromSQL(text, opts) {
          if (opts === void 0) {
            opts = {};
          }
          var _parseSQL = parseSQL(text), vals = _parseSQL[0], parsedZone = _parseSQL[1];
          return parseDataToDateTime(vals, parsedZone, opts, "SQL", text);
        };
        DateTime3.invalid = function invalid(reason, explanation) {
          if (explanation === void 0) {
            explanation = null;
          }
          if (!reason) {
            throw new InvalidArgumentError("need to specify a reason the DateTime is invalid");
          }
          var invalid2 = reason instanceof Invalid ? reason : new Invalid(reason, explanation);
          if (Settings.throwOnInvalid) {
            throw new InvalidDateTimeError(invalid2);
          } else {
            return new DateTime3({
              invalid: invalid2
            });
          }
        };
        DateTime3.isDateTime = function isDateTime(o) {
          return o && o.isLuxonDateTime || false;
        };
        var _proto = DateTime3.prototype;
        _proto.get = function get(unit) {
          return this[unit];
        };
        _proto.resolvedLocaleOptions = function resolvedLocaleOptions(opts) {
          if (opts === void 0) {
            opts = {};
          }
          var _Formatter$create$res = Formatter.create(this.loc.clone(opts), opts).resolvedOptions(this), locale = _Formatter$create$res.locale, numberingSystem = _Formatter$create$res.numberingSystem, calendar = _Formatter$create$res.calendar;
          return {
            locale,
            numberingSystem,
            outputCalendar: calendar
          };
        };
        _proto.toUTC = function toUTC(offset2, opts) {
          if (offset2 === void 0) {
            offset2 = 0;
          }
          if (opts === void 0) {
            opts = {};
          }
          return this.setZone(FixedOffsetZone.instance(offset2), opts);
        };
        _proto.toLocal = function toLocal() {
          return this.setZone(Settings.defaultZone);
        };
        _proto.setZone = function setZone(zone, _temp) {
          var _ref2 = _temp === void 0 ? {} : _temp, _ref2$keepLocalTime = _ref2.keepLocalTime, keepLocalTime = _ref2$keepLocalTime === void 0 ? false : _ref2$keepLocalTime, _ref2$keepCalendarTim = _ref2.keepCalendarTime, keepCalendarTime = _ref2$keepCalendarTim === void 0 ? false : _ref2$keepCalendarTim;
          zone = normalizeZone(zone, Settings.defaultZone);
          if (zone.equals(this.zone)) {
            return this;
          } else if (!zone.isValid) {
            return DateTime3.invalid(unsupportedZone(zone));
          } else {
            var newTS = this.ts;
            if (keepLocalTime || keepCalendarTime) {
              var offsetGuess = zone.offset(this.ts);
              var asObj = this.toObject();
              var _objToTS3 = objToTS(asObj, offsetGuess, zone);
              newTS = _objToTS3[0];
            }
            return clone2(this, {
              ts: newTS,
              zone
            });
          }
        };
        _proto.reconfigure = function reconfigure(_temp2) {
          var _ref3 = _temp2 === void 0 ? {} : _temp2, locale = _ref3.locale, numberingSystem = _ref3.numberingSystem, outputCalendar = _ref3.outputCalendar;
          var loc = this.loc.clone({
            locale,
            numberingSystem,
            outputCalendar
          });
          return clone2(this, {
            loc
          });
        };
        _proto.setLocale = function setLocale(locale) {
          return this.reconfigure({
            locale
          });
        };
        _proto.set = function set2(values) {
          if (!this.isValid)
            return this;
          var normalized = normalizeObject(values, normalizeUnit), settingWeekStuff = !isUndefined(normalized.weekYear) || !isUndefined(normalized.weekNumber) || !isUndefined(normalized.weekday), containsOrdinal = !isUndefined(normalized.ordinal), containsGregorYear = !isUndefined(normalized.year), containsGregorMD = !isUndefined(normalized.month) || !isUndefined(normalized.day), containsGregor = containsGregorYear || containsGregorMD, definiteWeekDef = normalized.weekYear || normalized.weekNumber;
          if ((containsGregor || containsOrdinal) && definiteWeekDef) {
            throw new ConflictingSpecificationError("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
          }
          if (containsGregorMD && containsOrdinal) {
            throw new ConflictingSpecificationError("Can't mix ordinal dates with month/day");
          }
          var mixed;
          if (settingWeekStuff) {
            mixed = weekToGregorian(_extends({}, gregorianToWeek(this.c), normalized));
          } else if (!isUndefined(normalized.ordinal)) {
            mixed = ordinalToGregorian(_extends({}, gregorianToOrdinal(this.c), normalized));
          } else {
            mixed = _extends({}, this.toObject(), normalized);
            if (isUndefined(normalized.day)) {
              mixed.day = Math.min(daysInMonth(mixed.year, mixed.month), mixed.day);
            }
          }
          var _objToTS4 = objToTS(mixed, this.o, this.zone), ts = _objToTS4[0], o = _objToTS4[1];
          return clone2(this, {
            ts,
            o
          });
        };
        _proto.plus = function plus(duration) {
          if (!this.isValid)
            return this;
          var dur = Duration.fromDurationLike(duration);
          return clone2(this, adjustTime(this, dur));
        };
        _proto.minus = function minus(duration) {
          if (!this.isValid)
            return this;
          var dur = Duration.fromDurationLike(duration).negate();
          return clone2(this, adjustTime(this, dur));
        };
        _proto.startOf = function startOf(unit) {
          if (!this.isValid)
            return this;
          var o = {}, normalizedUnit = Duration.normalizeUnit(unit);
          switch (normalizedUnit) {
            case "years":
              o.month = 1;
            case "quarters":
            case "months":
              o.day = 1;
            case "weeks":
            case "days":
              o.hour = 0;
            case "hours":
              o.minute = 0;
            case "minutes":
              o.second = 0;
            case "seconds":
              o.millisecond = 0;
              break;
          }
          if (normalizedUnit === "weeks") {
            o.weekday = 1;
          }
          if (normalizedUnit === "quarters") {
            var q = Math.ceil(this.month / 3);
            o.month = (q - 1) * 3 + 1;
          }
          return this.set(o);
        };
        _proto.endOf = function endOf(unit) {
          var _this$plus;
          return this.isValid ? this.plus((_this$plus = {}, _this$plus[unit] = 1, _this$plus)).startOf(unit).minus(1) : this;
        };
        _proto.toFormat = function toFormat(fmt, opts) {
          if (opts === void 0) {
            opts = {};
          }
          return this.isValid ? Formatter.create(this.loc.redefaultToEN(opts)).formatDateTimeFromString(this, fmt) : INVALID;
        };
        _proto.toLocaleString = function toLocaleString(formatOpts, opts) {
          if (formatOpts === void 0) {
            formatOpts = DATE_SHORT;
          }
          if (opts === void 0) {
            opts = {};
          }
          return this.isValid ? Formatter.create(this.loc.clone(opts), formatOpts).formatDateTime(this) : INVALID;
        };
        _proto.toLocaleParts = function toLocaleParts(opts) {
          if (opts === void 0) {
            opts = {};
          }
          return this.isValid ? Formatter.create(this.loc.clone(opts), opts).formatDateTimeParts(this) : [];
        };
        _proto.toISO = function toISO(_temp3) {
          var _ref4 = _temp3 === void 0 ? {} : _temp3, _ref4$format = _ref4.format, format = _ref4$format === void 0 ? "extended" : _ref4$format, _ref4$suppressSeconds = _ref4.suppressSeconds, suppressSeconds = _ref4$suppressSeconds === void 0 ? false : _ref4$suppressSeconds, _ref4$suppressMillise = _ref4.suppressMilliseconds, suppressMilliseconds = _ref4$suppressMillise === void 0 ? false : _ref4$suppressMillise, _ref4$includeOffset = _ref4.includeOffset, includeOffset = _ref4$includeOffset === void 0 ? true : _ref4$includeOffset;
          if (!this.isValid) {
            return null;
          }
          var ext = format === "extended";
          var c = _toISODate(this, ext);
          c += "T";
          c += _toISOTime(this, ext, suppressSeconds, suppressMilliseconds, includeOffset);
          return c;
        };
        _proto.toISODate = function toISODate(_temp4) {
          var _ref5 = _temp4 === void 0 ? {} : _temp4, _ref5$format = _ref5.format, format = _ref5$format === void 0 ? "extended" : _ref5$format;
          if (!this.isValid) {
            return null;
          }
          return _toISODate(this, format === "extended");
        };
        _proto.toISOWeekDate = function toISOWeekDate() {
          return toTechFormat(this, "kkkk-'W'WW-c");
        };
        _proto.toISOTime = function toISOTime(_temp5) {
          var _ref6 = _temp5 === void 0 ? {} : _temp5, _ref6$suppressMillise = _ref6.suppressMilliseconds, suppressMilliseconds = _ref6$suppressMillise === void 0 ? false : _ref6$suppressMillise, _ref6$suppressSeconds = _ref6.suppressSeconds, suppressSeconds = _ref6$suppressSeconds === void 0 ? false : _ref6$suppressSeconds, _ref6$includeOffset = _ref6.includeOffset, includeOffset = _ref6$includeOffset === void 0 ? true : _ref6$includeOffset, _ref6$includePrefix = _ref6.includePrefix, includePrefix = _ref6$includePrefix === void 0 ? false : _ref6$includePrefix, _ref6$format = _ref6.format, format = _ref6$format === void 0 ? "extended" : _ref6$format;
          if (!this.isValid) {
            return null;
          }
          var c = includePrefix ? "T" : "";
          return c + _toISOTime(this, format === "extended", suppressSeconds, suppressMilliseconds, includeOffset);
        };
        _proto.toRFC2822 = function toRFC2822() {
          return toTechFormat(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", false);
        };
        _proto.toHTTP = function toHTTP() {
          return toTechFormat(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
        };
        _proto.toSQLDate = function toSQLDate() {
          if (!this.isValid) {
            return null;
          }
          return _toISODate(this, true);
        };
        _proto.toSQLTime = function toSQLTime(_temp6) {
          var _ref7 = _temp6 === void 0 ? {} : _temp6, _ref7$includeOffset = _ref7.includeOffset, includeOffset = _ref7$includeOffset === void 0 ? true : _ref7$includeOffset, _ref7$includeZone = _ref7.includeZone, includeZone = _ref7$includeZone === void 0 ? false : _ref7$includeZone, _ref7$includeOffsetSp = _ref7.includeOffsetSpace, includeOffsetSpace = _ref7$includeOffsetSp === void 0 ? true : _ref7$includeOffsetSp;
          var fmt = "HH:mm:ss.SSS";
          if (includeZone || includeOffset) {
            if (includeOffsetSpace) {
              fmt += " ";
            }
            if (includeZone) {
              fmt += "z";
            } else if (includeOffset) {
              fmt += "ZZ";
            }
          }
          return toTechFormat(this, fmt, true);
        };
        _proto.toSQL = function toSQL(opts) {
          if (opts === void 0) {
            opts = {};
          }
          if (!this.isValid) {
            return null;
          }
          return this.toSQLDate() + " " + this.toSQLTime(opts);
        };
        _proto.toString = function toString() {
          return this.isValid ? this.toISO() : INVALID;
        };
        _proto.valueOf = function valueOf() {
          return this.toMillis();
        };
        _proto.toMillis = function toMillis() {
          return this.isValid ? this.ts : NaN;
        };
        _proto.toSeconds = function toSeconds() {
          return this.isValid ? this.ts / 1e3 : NaN;
        };
        _proto.toUnixInteger = function toUnixInteger() {
          return this.isValid ? Math.floor(this.ts / 1e3) : NaN;
        };
        _proto.toJSON = function toJSON() {
          return this.toISO();
        };
        _proto.toBSON = function toBSON() {
          return this.toJSDate();
        };
        _proto.toObject = function toObject(opts) {
          if (opts === void 0) {
            opts = {};
          }
          if (!this.isValid)
            return {};
          var base = _extends({}, this.c);
          if (opts.includeConfig) {
            base.outputCalendar = this.outputCalendar;
            base.numberingSystem = this.loc.numberingSystem;
            base.locale = this.loc.locale;
          }
          return base;
        };
        _proto.toJSDate = function toJSDate() {
          return new Date(this.isValid ? this.ts : NaN);
        };
        _proto.diff = function diff(otherDateTime, unit, opts) {
          if (unit === void 0) {
            unit = "milliseconds";
          }
          if (opts === void 0) {
            opts = {};
          }
          if (!this.isValid || !otherDateTime.isValid) {
            return Duration.invalid("created by diffing an invalid DateTime");
          }
          var durOpts = _extends({
            locale: this.locale,
            numberingSystem: this.numberingSystem
          }, opts);
          var units = maybeArray(unit).map(Duration.normalizeUnit), otherIsLater = otherDateTime.valueOf() > this.valueOf(), earlier = otherIsLater ? this : otherDateTime, later = otherIsLater ? otherDateTime : this, diffed = _diff(earlier, later, units, durOpts);
          return otherIsLater ? diffed.negate() : diffed;
        };
        _proto.diffNow = function diffNow(unit, opts) {
          if (unit === void 0) {
            unit = "milliseconds";
          }
          if (opts === void 0) {
            opts = {};
          }
          return this.diff(DateTime3.now(), unit, opts);
        };
        _proto.until = function until(otherDateTime) {
          return this.isValid ? Interval.fromDateTimes(this, otherDateTime) : this;
        };
        _proto.hasSame = function hasSame(otherDateTime, unit) {
          if (!this.isValid)
            return false;
          var inputMs = otherDateTime.valueOf();
          var adjustedToZone = this.setZone(otherDateTime.zone, {
            keepLocalTime: true
          });
          return adjustedToZone.startOf(unit) <= inputMs && inputMs <= adjustedToZone.endOf(unit);
        };
        _proto.equals = function equals(other) {
          return this.isValid && other.isValid && this.valueOf() === other.valueOf() && this.zone.equals(other.zone) && this.loc.equals(other.loc);
        };
        _proto.toRelative = function toRelative(options) {
          if (options === void 0) {
            options = {};
          }
          if (!this.isValid)
            return null;
          var base = options.base || DateTime3.fromObject({}, {
            zone: this.zone
          }), padding = options.padding ? this < base ? -options.padding : options.padding : 0;
          var units = ["years", "months", "days", "hours", "minutes", "seconds"];
          var unit = options.unit;
          if (Array.isArray(options.unit)) {
            units = options.unit;
            unit = void 0;
          }
          return diffRelative(base, this.plus(padding), _extends({}, options, {
            numeric: "always",
            units,
            unit
          }));
        };
        _proto.toRelativeCalendar = function toRelativeCalendar(options) {
          if (options === void 0) {
            options = {};
          }
          if (!this.isValid)
            return null;
          return diffRelative(options.base || DateTime3.fromObject({}, {
            zone: this.zone
          }), this, _extends({}, options, {
            numeric: "auto",
            units: ["years", "months", "days"],
            calendary: true
          }));
        };
        DateTime3.min = function min() {
          for (var _len = arguments.length, dateTimes = new Array(_len), _key = 0; _key < _len; _key++) {
            dateTimes[_key] = arguments[_key];
          }
          if (!dateTimes.every(DateTime3.isDateTime)) {
            throw new InvalidArgumentError("min requires all arguments be DateTimes");
          }
          return bestBy(dateTimes, function(i) {
            return i.valueOf();
          }, Math.min);
        };
        DateTime3.max = function max() {
          for (var _len2 = arguments.length, dateTimes = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            dateTimes[_key2] = arguments[_key2];
          }
          if (!dateTimes.every(DateTime3.isDateTime)) {
            throw new InvalidArgumentError("max requires all arguments be DateTimes");
          }
          return bestBy(dateTimes, function(i) {
            return i.valueOf();
          }, Math.max);
        };
        DateTime3.fromFormatExplain = function fromFormatExplain(text, fmt, options) {
          if (options === void 0) {
            options = {};
          }
          var _options = options, _options$locale = _options.locale, locale = _options$locale === void 0 ? null : _options$locale, _options$numberingSys = _options.numberingSystem, numberingSystem = _options$numberingSys === void 0 ? null : _options$numberingSys, localeToUse = Locale.fromOpts({
            locale,
            numberingSystem,
            defaultToEN: true
          });
          return explainFromTokens(localeToUse, text, fmt);
        };
        DateTime3.fromStringExplain = function fromStringExplain(text, fmt, options) {
          if (options === void 0) {
            options = {};
          }
          return DateTime3.fromFormatExplain(text, fmt, options);
        };
        _createClass(DateTime3, [{
          key: "isValid",
          get: function get() {
            return this.invalid === null;
          }
        }, {
          key: "invalidReason",
          get: function get() {
            return this.invalid ? this.invalid.reason : null;
          }
        }, {
          key: "invalidExplanation",
          get: function get() {
            return this.invalid ? this.invalid.explanation : null;
          }
        }, {
          key: "locale",
          get: function get() {
            return this.isValid ? this.loc.locale : null;
          }
        }, {
          key: "numberingSystem",
          get: function get() {
            return this.isValid ? this.loc.numberingSystem : null;
          }
        }, {
          key: "outputCalendar",
          get: function get() {
            return this.isValid ? this.loc.outputCalendar : null;
          }
        }, {
          key: "zone",
          get: function get() {
            return this._zone;
          }
        }, {
          key: "zoneName",
          get: function get() {
            return this.isValid ? this.zone.name : null;
          }
        }, {
          key: "year",
          get: function get() {
            return this.isValid ? this.c.year : NaN;
          }
        }, {
          key: "quarter",
          get: function get() {
            return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
          }
        }, {
          key: "month",
          get: function get() {
            return this.isValid ? this.c.month : NaN;
          }
        }, {
          key: "day",
          get: function get() {
            return this.isValid ? this.c.day : NaN;
          }
        }, {
          key: "hour",
          get: function get() {
            return this.isValid ? this.c.hour : NaN;
          }
        }, {
          key: "minute",
          get: function get() {
            return this.isValid ? this.c.minute : NaN;
          }
        }, {
          key: "second",
          get: function get() {
            return this.isValid ? this.c.second : NaN;
          }
        }, {
          key: "millisecond",
          get: function get() {
            return this.isValid ? this.c.millisecond : NaN;
          }
        }, {
          key: "weekYear",
          get: function get() {
            return this.isValid ? possiblyCachedWeekData(this).weekYear : NaN;
          }
        }, {
          key: "weekNumber",
          get: function get() {
            return this.isValid ? possiblyCachedWeekData(this).weekNumber : NaN;
          }
        }, {
          key: "weekday",
          get: function get() {
            return this.isValid ? possiblyCachedWeekData(this).weekday : NaN;
          }
        }, {
          key: "ordinal",
          get: function get() {
            return this.isValid ? gregorianToOrdinal(this.c).ordinal : NaN;
          }
        }, {
          key: "monthShort",
          get: function get() {
            return this.isValid ? Info.months("short", {
              locObj: this.loc
            })[this.month - 1] : null;
          }
        }, {
          key: "monthLong",
          get: function get() {
            return this.isValid ? Info.months("long", {
              locObj: this.loc
            })[this.month - 1] : null;
          }
        }, {
          key: "weekdayShort",
          get: function get() {
            return this.isValid ? Info.weekdays("short", {
              locObj: this.loc
            })[this.weekday - 1] : null;
          }
        }, {
          key: "weekdayLong",
          get: function get() {
            return this.isValid ? Info.weekdays("long", {
              locObj: this.loc
            })[this.weekday - 1] : null;
          }
        }, {
          key: "offset",
          get: function get() {
            return this.isValid ? +this.o : NaN;
          }
        }, {
          key: "offsetNameShort",
          get: function get() {
            if (this.isValid) {
              return this.zone.offsetName(this.ts, {
                format: "short",
                locale: this.locale
              });
            } else {
              return null;
            }
          }
        }, {
          key: "offsetNameLong",
          get: function get() {
            if (this.isValid) {
              return this.zone.offsetName(this.ts, {
                format: "long",
                locale: this.locale
              });
            } else {
              return null;
            }
          }
        }, {
          key: "isOffsetFixed",
          get: function get() {
            return this.isValid ? this.zone.isUniversal : null;
          }
        }, {
          key: "isInDST",
          get: function get() {
            if (this.isOffsetFixed) {
              return false;
            } else {
              return this.offset > this.set({
                month: 1
              }).offset || this.offset > this.set({
                month: 5
              }).offset;
            }
          }
        }, {
          key: "isInLeapYear",
          get: function get() {
            return isLeapYear(this.year);
          }
        }, {
          key: "daysInMonth",
          get: function get() {
            return daysInMonth(this.year, this.month);
          }
        }, {
          key: "daysInYear",
          get: function get() {
            return this.isValid ? daysInYear(this.year) : NaN;
          }
        }, {
          key: "weeksInWeekYear",
          get: function get() {
            return this.isValid ? weeksInWeekYear(this.weekYear) : NaN;
          }
        }], [{
          key: "DATE_SHORT",
          get: function get() {
            return DATE_SHORT;
          }
        }, {
          key: "DATE_MED",
          get: function get() {
            return DATE_MED;
          }
        }, {
          key: "DATE_MED_WITH_WEEKDAY",
          get: function get() {
            return DATE_MED_WITH_WEEKDAY;
          }
        }, {
          key: "DATE_FULL",
          get: function get() {
            return DATE_FULL;
          }
        }, {
          key: "DATE_HUGE",
          get: function get() {
            return DATE_HUGE;
          }
        }, {
          key: "TIME_SIMPLE",
          get: function get() {
            return TIME_SIMPLE;
          }
        }, {
          key: "TIME_WITH_SECONDS",
          get: function get() {
            return TIME_WITH_SECONDS;
          }
        }, {
          key: "TIME_WITH_SHORT_OFFSET",
          get: function get() {
            return TIME_WITH_SHORT_OFFSET;
          }
        }, {
          key: "TIME_WITH_LONG_OFFSET",
          get: function get() {
            return TIME_WITH_LONG_OFFSET;
          }
        }, {
          key: "TIME_24_SIMPLE",
          get: function get() {
            return TIME_24_SIMPLE;
          }
        }, {
          key: "TIME_24_WITH_SECONDS",
          get: function get() {
            return TIME_24_WITH_SECONDS;
          }
        }, {
          key: "TIME_24_WITH_SHORT_OFFSET",
          get: function get() {
            return TIME_24_WITH_SHORT_OFFSET;
          }
        }, {
          key: "TIME_24_WITH_LONG_OFFSET",
          get: function get() {
            return TIME_24_WITH_LONG_OFFSET;
          }
        }, {
          key: "DATETIME_SHORT",
          get: function get() {
            return DATETIME_SHORT;
          }
        }, {
          key: "DATETIME_SHORT_WITH_SECONDS",
          get: function get() {
            return DATETIME_SHORT_WITH_SECONDS;
          }
        }, {
          key: "DATETIME_MED",
          get: function get() {
            return DATETIME_MED;
          }
        }, {
          key: "DATETIME_MED_WITH_SECONDS",
          get: function get() {
            return DATETIME_MED_WITH_SECONDS;
          }
        }, {
          key: "DATETIME_MED_WITH_WEEKDAY",
          get: function get() {
            return DATETIME_MED_WITH_WEEKDAY;
          }
        }, {
          key: "DATETIME_FULL",
          get: function get() {
            return DATETIME_FULL;
          }
        }, {
          key: "DATETIME_FULL_WITH_SECONDS",
          get: function get() {
            return DATETIME_FULL_WITH_SECONDS;
          }
        }, {
          key: "DATETIME_HUGE",
          get: function get() {
            return DATETIME_HUGE;
          }
        }, {
          key: "DATETIME_HUGE_WITH_SECONDS",
          get: function get() {
            return DATETIME_HUGE_WITH_SECONDS;
          }
        }]);
        return DateTime3;
      }();
      function friendlyDateTime(dateTimeish) {
        if (DateTime2.isDateTime(dateTimeish)) {
          return dateTimeish;
        } else if (dateTimeish && dateTimeish.valueOf && isNumber2(dateTimeish.valueOf())) {
          return DateTime2.fromJSDate(dateTimeish);
        } else if (dateTimeish && typeof dateTimeish === "object") {
          return DateTime2.fromObject(dateTimeish);
        } else {
          throw new InvalidArgumentError("Unknown datetime argument: " + dateTimeish + ", of type " + typeof dateTimeish);
        }
      }
      var VERSION = "2.3.1";
      exports.DateTime = DateTime2;
      exports.Duration = Duration;
      exports.FixedOffsetZone = FixedOffsetZone;
      exports.IANAZone = IANAZone;
      exports.Info = Info;
      exports.Interval = Interval;
      exports.InvalidZone = InvalidZone;
      exports.Settings = Settings;
      exports.SystemZone = SystemZone;
      exports.VERSION = VERSION;
      exports.Zone = Zone;
    }
  });

  // ../deps/phoenix_html/priv/static/phoenix_html.js
  "use strict";
  (function() {
    var PolyfillEvent = eventConstructor();
    function eventConstructor() {
      if (typeof window.CustomEvent === "function")
        return window.CustomEvent;
      function CustomEvent(event, params) {
        params = params || { bubbles: false, cancelable: false, detail: void 0 };
        var evt = document.createEvent("CustomEvent");
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return evt;
      }
      CustomEvent.prototype = window.Event.prototype;
      return CustomEvent;
    }
    function buildHiddenInput(name, value) {
      var input = document.createElement("input");
      input.type = "hidden";
      input.name = name;
      input.value = value;
      return input;
    }
    function handleClick(element, targetModifierKey) {
      var to = element.getAttribute("data-to"), method = buildHiddenInput("_method", element.getAttribute("data-method")), csrf = buildHiddenInput("_csrf_token", element.getAttribute("data-csrf")), form = document.createElement("form"), target = element.getAttribute("target");
      form.method = element.getAttribute("data-method") === "get" ? "get" : "post";
      form.action = to;
      form.style.display = "hidden";
      if (target)
        form.target = target;
      else if (targetModifierKey)
        form.target = "_blank";
      form.appendChild(csrf);
      form.appendChild(method);
      document.body.appendChild(form);
      form.submit();
    }
    window.addEventListener("click", function(e) {
      var element = e.target;
      if (e.defaultPrevented)
        return;
      while (element && element.getAttribute) {
        var phoenixLinkEvent = new PolyfillEvent("phoenix.link.click", {
          "bubbles": true,
          "cancelable": true
        });
        if (!element.dispatchEvent(phoenixLinkEvent)) {
          e.preventDefault();
          e.stopImmediatePropagation();
          return false;
        }
        if (element.getAttribute("data-method")) {
          handleClick(element, e.metaKey || e.shiftKey);
          e.preventDefault();
          return false;
        } else {
          element = element.parentNode;
        }
      }
    }, false);
    window.addEventListener("phoenix.link.click", function(e) {
      var message = e.target.getAttribute("data-confirm");
      if (message && !window.confirm(message)) {
        e.preventDefault();
      }
    }, false);
  })();

  // ../deps/phoenix/priv/static/phoenix.esm.js
  var closure = (value) => {
    if (typeof value === "function") {
      return value;
    } else {
      let closure2 = function() {
        return value;
      };
      return closure2;
    }
  };
  var globalSelf = typeof self !== "undefined" ? self : null;
  var phxWindow = typeof window !== "undefined" ? window : null;
  var global = globalSelf || phxWindow || void 0;
  var DEFAULT_VSN = "2.0.0";
  var SOCKET_STATES = { connecting: 0, open: 1, closing: 2, closed: 3 };
  var DEFAULT_TIMEOUT = 1e4;
  var WS_CLOSE_NORMAL = 1e3;
  var CHANNEL_STATES = {
    closed: "closed",
    errored: "errored",
    joined: "joined",
    joining: "joining",
    leaving: "leaving"
  };
  var CHANNEL_EVENTS = {
    close: "phx_close",
    error: "phx_error",
    join: "phx_join",
    reply: "phx_reply",
    leave: "phx_leave"
  };
  var TRANSPORTS = {
    longpoll: "longpoll",
    websocket: "websocket"
  };
  var XHR_STATES = {
    complete: 4
  };
  var Push = class {
    constructor(channel2, event, payload, timeout) {
      this.channel = channel2;
      this.event = event;
      this.payload = payload || function() {
        return {};
      };
      this.receivedResp = null;
      this.timeout = timeout;
      this.timeoutTimer = null;
      this.recHooks = [];
      this.sent = false;
    }
    resend(timeout) {
      this.timeout = timeout;
      this.reset();
      this.send();
    }
    send() {
      if (this.hasReceived("timeout")) {
        return;
      }
      this.startTimeout();
      this.sent = true;
      this.channel.socket.push({
        topic: this.channel.topic,
        event: this.event,
        payload: this.payload(),
        ref: this.ref,
        join_ref: this.channel.joinRef()
      });
    }
    receive(status, callback2) {
      if (this.hasReceived(status)) {
        callback2(this.receivedResp.response);
      }
      this.recHooks.push({ status, callback: callback2 });
      return this;
    }
    reset() {
      this.cancelRefEvent();
      this.ref = null;
      this.refEvent = null;
      this.receivedResp = null;
      this.sent = false;
    }
    matchReceive({ status, response, _ref }) {
      this.recHooks.filter((h) => h.status === status).forEach((h) => h.callback(response));
    }
    cancelRefEvent() {
      if (!this.refEvent) {
        return;
      }
      this.channel.off(this.refEvent);
    }
    cancelTimeout() {
      clearTimeout(this.timeoutTimer);
      this.timeoutTimer = null;
    }
    startTimeout() {
      if (this.timeoutTimer) {
        this.cancelTimeout();
      }
      this.ref = this.channel.socket.makeRef();
      this.refEvent = this.channel.replyEventName(this.ref);
      this.channel.on(this.refEvent, (payload) => {
        this.cancelRefEvent();
        this.cancelTimeout();
        this.receivedResp = payload;
        this.matchReceive(payload);
      });
      this.timeoutTimer = setTimeout(() => {
        this.trigger("timeout", {});
      }, this.timeout);
    }
    hasReceived(status) {
      return this.receivedResp && this.receivedResp.status === status;
    }
    trigger(status, response) {
      this.channel.trigger(this.refEvent, { status, response });
    }
  };
  var Timer = class {
    constructor(callback2, timerCalc) {
      this.callback = callback2;
      this.timerCalc = timerCalc;
      this.timer = null;
      this.tries = 0;
    }
    reset() {
      this.tries = 0;
      clearTimeout(this.timer);
    }
    scheduleTimeout() {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.tries = this.tries + 1;
        this.callback();
      }, this.timerCalc(this.tries + 1));
    }
  };
  var Channel = class {
    constructor(topic, params, socket2) {
      this.state = CHANNEL_STATES.closed;
      this.topic = topic;
      this.params = closure(params || {});
      this.socket = socket2;
      this.bindings = [];
      this.bindingRef = 0;
      this.timeout = this.socket.timeout;
      this.joinedOnce = false;
      this.joinPush = new Push(this, CHANNEL_EVENTS.join, this.params, this.timeout);
      this.pushBuffer = [];
      this.stateChangeRefs = [];
      this.rejoinTimer = new Timer(() => {
        if (this.socket.isConnected()) {
          this.rejoin();
        }
      }, this.socket.rejoinAfterMs);
      this.stateChangeRefs.push(this.socket.onError(() => this.rejoinTimer.reset()));
      this.stateChangeRefs.push(this.socket.onOpen(() => {
        this.rejoinTimer.reset();
        if (this.isErrored()) {
          this.rejoin();
        }
      }));
      this.joinPush.receive("ok", () => {
        this.state = CHANNEL_STATES.joined;
        this.rejoinTimer.reset();
        this.pushBuffer.forEach((pushEvent) => pushEvent.send());
        this.pushBuffer = [];
      });
      this.joinPush.receive("error", () => {
        this.state = CHANNEL_STATES.errored;
        if (this.socket.isConnected()) {
          this.rejoinTimer.scheduleTimeout();
        }
      });
      this.onClose(() => {
        this.rejoinTimer.reset();
        if (this.socket.hasLogger())
          this.socket.log("channel", `close ${this.topic} ${this.joinRef()}`);
        this.state = CHANNEL_STATES.closed;
        this.socket.remove(this);
      });
      this.onError((reason) => {
        if (this.socket.hasLogger())
          this.socket.log("channel", `error ${this.topic}`, reason);
        if (this.isJoining()) {
          this.joinPush.reset();
        }
        this.state = CHANNEL_STATES.errored;
        if (this.socket.isConnected()) {
          this.rejoinTimer.scheduleTimeout();
        }
      });
      this.joinPush.receive("timeout", () => {
        if (this.socket.hasLogger())
          this.socket.log("channel", `timeout ${this.topic} (${this.joinRef()})`, this.joinPush.timeout);
        let leavePush = new Push(this, CHANNEL_EVENTS.leave, closure({}), this.timeout);
        leavePush.send();
        this.state = CHANNEL_STATES.errored;
        this.joinPush.reset();
        if (this.socket.isConnected()) {
          this.rejoinTimer.scheduleTimeout();
        }
      });
      this.on(CHANNEL_EVENTS.reply, (payload, ref) => {
        this.trigger(this.replyEventName(ref), payload);
      });
    }
    join(timeout = this.timeout) {
      if (this.joinedOnce) {
        throw new Error("tried to join multiple times. 'join' can only be called a single time per channel instance");
      } else {
        this.timeout = timeout;
        this.joinedOnce = true;
        this.rejoin();
        return this.joinPush;
      }
    }
    onClose(callback2) {
      this.on(CHANNEL_EVENTS.close, callback2);
    }
    onError(callback2) {
      return this.on(CHANNEL_EVENTS.error, (reason) => callback2(reason));
    }
    on(event, callback2) {
      let ref = this.bindingRef++;
      this.bindings.push({ event, ref, callback: callback2 });
      return ref;
    }
    off(event, ref) {
      this.bindings = this.bindings.filter((bind) => {
        return !(bind.event === event && (typeof ref === "undefined" || ref === bind.ref));
      });
    }
    canPush() {
      return this.socket.isConnected() && this.isJoined();
    }
    push(event, payload, timeout = this.timeout) {
      payload = payload || {};
      if (!this.joinedOnce) {
        throw new Error(`tried to push '${event}' to '${this.topic}' before joining. Use channel.join() before pushing events`);
      }
      let pushEvent = new Push(this, event, function() {
        return payload;
      }, timeout);
      if (this.canPush()) {
        pushEvent.send();
      } else {
        pushEvent.startTimeout();
        this.pushBuffer.push(pushEvent);
      }
      return pushEvent;
    }
    leave(timeout = this.timeout) {
      this.rejoinTimer.reset();
      this.joinPush.cancelTimeout();
      this.state = CHANNEL_STATES.leaving;
      let onClose = () => {
        if (this.socket.hasLogger())
          this.socket.log("channel", `leave ${this.topic}`);
        this.trigger(CHANNEL_EVENTS.close, "leave");
      };
      let leavePush = new Push(this, CHANNEL_EVENTS.leave, closure({}), timeout);
      leavePush.receive("ok", () => onClose()).receive("timeout", () => onClose());
      leavePush.send();
      if (!this.canPush()) {
        leavePush.trigger("ok", {});
      }
      return leavePush;
    }
    onMessage(_event, payload, _ref) {
      return payload;
    }
    isMember(topic, event, payload, joinRef) {
      if (this.topic !== topic) {
        return false;
      }
      if (joinRef && joinRef !== this.joinRef()) {
        if (this.socket.hasLogger())
          this.socket.log("channel", "dropping outdated message", { topic, event, payload, joinRef });
        return false;
      } else {
        return true;
      }
    }
    joinRef() {
      return this.joinPush.ref;
    }
    rejoin(timeout = this.timeout) {
      if (this.isLeaving()) {
        return;
      }
      this.socket.leaveOpenTopic(this.topic);
      this.state = CHANNEL_STATES.joining;
      this.joinPush.resend(timeout);
    }
    trigger(event, payload, ref, joinRef) {
      let handledPayload = this.onMessage(event, payload, ref, joinRef);
      if (payload && !handledPayload) {
        throw new Error("channel onMessage callbacks must return the payload, modified or unmodified");
      }
      let eventBindings = this.bindings.filter((bind) => bind.event === event);
      for (let i = 0; i < eventBindings.length; i++) {
        let bind = eventBindings[i];
        bind.callback(handledPayload, ref, joinRef || this.joinRef());
      }
    }
    replyEventName(ref) {
      return `chan_reply_${ref}`;
    }
    isClosed() {
      return this.state === CHANNEL_STATES.closed;
    }
    isErrored() {
      return this.state === CHANNEL_STATES.errored;
    }
    isJoined() {
      return this.state === CHANNEL_STATES.joined;
    }
    isJoining() {
      return this.state === CHANNEL_STATES.joining;
    }
    isLeaving() {
      return this.state === CHANNEL_STATES.leaving;
    }
  };
  var Ajax = class {
    static request(method, endPoint, accept, body, timeout, ontimeout, callback2) {
      if (global.XDomainRequest) {
        let req = new global.XDomainRequest();
        this.xdomainRequest(req, method, endPoint, body, timeout, ontimeout, callback2);
      } else {
        let req = new global.XMLHttpRequest();
        this.xhrRequest(req, method, endPoint, accept, body, timeout, ontimeout, callback2);
      }
    }
    static xdomainRequest(req, method, endPoint, body, timeout, ontimeout, callback2) {
      req.timeout = timeout;
      req.open(method, endPoint);
      req.onload = () => {
        let response = this.parseJSON(req.responseText);
        callback2 && callback2(response);
      };
      if (ontimeout) {
        req.ontimeout = ontimeout;
      }
      req.onprogress = () => {
      };
      req.send(body);
    }
    static xhrRequest(req, method, endPoint, accept, body, timeout, ontimeout, callback2) {
      req.open(method, endPoint, true);
      req.timeout = timeout;
      req.setRequestHeader("Content-Type", accept);
      req.onerror = () => {
        callback2 && callback2(null);
      };
      req.onreadystatechange = () => {
        if (req.readyState === XHR_STATES.complete && callback2) {
          let response = this.parseJSON(req.responseText);
          callback2(response);
        }
      };
      if (ontimeout) {
        req.ontimeout = ontimeout;
      }
      req.send(body);
    }
    static parseJSON(resp) {
      if (!resp || resp === "") {
        return null;
      }
      try {
        return JSON.parse(resp);
      } catch (e) {
        console && console.log("failed to parse JSON response", resp);
        return null;
      }
    }
    static serialize(obj, parentKey) {
      let queryStr = [];
      for (var key in obj) {
        if (!Object.prototype.hasOwnProperty.call(obj, key)) {
          continue;
        }
        let paramKey = parentKey ? `${parentKey}[${key}]` : key;
        let paramVal = obj[key];
        if (typeof paramVal === "object") {
          queryStr.push(this.serialize(paramVal, paramKey));
        } else {
          queryStr.push(encodeURIComponent(paramKey) + "=" + encodeURIComponent(paramVal));
        }
      }
      return queryStr.join("&");
    }
    static appendParams(url, params) {
      if (Object.keys(params).length === 0) {
        return url;
      }
      let prefix = url.match(/\?/) ? "&" : "?";
      return `${url}${prefix}${this.serialize(params)}`;
    }
  };
  var LongPoll = class {
    constructor(endPoint) {
      this.endPoint = null;
      this.token = null;
      this.skipHeartbeat = true;
      this.onopen = function() {
      };
      this.onerror = function() {
      };
      this.onmessage = function() {
      };
      this.onclose = function() {
      };
      this.pollEndpoint = this.normalizeEndpoint(endPoint);
      this.readyState = SOCKET_STATES.connecting;
      this.poll();
    }
    normalizeEndpoint(endPoint) {
      return endPoint.replace("ws://", "http://").replace("wss://", "https://").replace(new RegExp("(.*)/" + TRANSPORTS.websocket), "$1/" + TRANSPORTS.longpoll);
    }
    endpointURL() {
      return Ajax.appendParams(this.pollEndpoint, { token: this.token });
    }
    closeAndRetry() {
      this.close();
      this.readyState = SOCKET_STATES.connecting;
    }
    ontimeout() {
      this.onerror("timeout");
      this.closeAndRetry();
    }
    poll() {
      if (!(this.readyState === SOCKET_STATES.open || this.readyState === SOCKET_STATES.connecting)) {
        return;
      }
      Ajax.request("GET", this.endpointURL(), "application/json", null, this.timeout, this.ontimeout.bind(this), (resp) => {
        if (resp) {
          var { status, token, messages } = resp;
          this.token = token;
        } else {
          status = 0;
        }
        switch (status) {
          case 200:
            messages.forEach((msg) => {
              setTimeout(() => {
                this.onmessage({ data: msg });
              }, 0);
            });
            this.poll();
            break;
          case 204:
            this.poll();
            break;
          case 410:
            this.readyState = SOCKET_STATES.open;
            this.onopen();
            this.poll();
            break;
          case 403:
            this.onerror();
            this.close();
            break;
          case 0:
          case 500:
            this.onerror();
            this.closeAndRetry();
            break;
          default:
            throw new Error(`unhandled poll status ${status}`);
        }
      });
    }
    send(body) {
      Ajax.request("POST", this.endpointURL(), "application/json", body, this.timeout, this.onerror.bind(this, "timeout"), (resp) => {
        if (!resp || resp.status !== 200) {
          this.onerror(resp && resp.status);
          this.closeAndRetry();
        }
      });
    }
    close(_code, _reason) {
      this.readyState = SOCKET_STATES.closed;
      this.onclose();
    }
  };
  var serializer_default = {
    HEADER_LENGTH: 1,
    META_LENGTH: 4,
    KINDS: { push: 0, reply: 1, broadcast: 2 },
    encode(msg, callback2) {
      if (msg.payload.constructor === ArrayBuffer) {
        return callback2(this.binaryEncode(msg));
      } else {
        let payload = [msg.join_ref, msg.ref, msg.topic, msg.event, msg.payload];
        return callback2(JSON.stringify(payload));
      }
    },
    decode(rawPayload, callback2) {
      if (rawPayload.constructor === ArrayBuffer) {
        return callback2(this.binaryDecode(rawPayload));
      } else {
        let [join_ref, ref, topic, event, payload] = JSON.parse(rawPayload);
        return callback2({ join_ref, ref, topic, event, payload });
      }
    },
    binaryEncode(message) {
      let { join_ref, ref, event, topic, payload } = message;
      let metaLength = this.META_LENGTH + join_ref.length + ref.length + topic.length + event.length;
      let header = new ArrayBuffer(this.HEADER_LENGTH + metaLength);
      let view = new DataView(header);
      let offset = 0;
      view.setUint8(offset++, this.KINDS.push);
      view.setUint8(offset++, join_ref.length);
      view.setUint8(offset++, ref.length);
      view.setUint8(offset++, topic.length);
      view.setUint8(offset++, event.length);
      Array.from(join_ref, (char) => view.setUint8(offset++, char.charCodeAt(0)));
      Array.from(ref, (char) => view.setUint8(offset++, char.charCodeAt(0)));
      Array.from(topic, (char) => view.setUint8(offset++, char.charCodeAt(0)));
      Array.from(event, (char) => view.setUint8(offset++, char.charCodeAt(0)));
      var combined = new Uint8Array(header.byteLength + payload.byteLength);
      combined.set(new Uint8Array(header), 0);
      combined.set(new Uint8Array(payload), header.byteLength);
      return combined.buffer;
    },
    binaryDecode(buffer) {
      let view = new DataView(buffer);
      let kind = view.getUint8(0);
      let decoder = new TextDecoder();
      switch (kind) {
        case this.KINDS.push:
          return this.decodePush(buffer, view, decoder);
        case this.KINDS.reply:
          return this.decodeReply(buffer, view, decoder);
        case this.KINDS.broadcast:
          return this.decodeBroadcast(buffer, view, decoder);
      }
    },
    decodePush(buffer, view, decoder) {
      let joinRefSize = view.getUint8(1);
      let topicSize = view.getUint8(2);
      let eventSize = view.getUint8(3);
      let offset = this.HEADER_LENGTH + this.META_LENGTH - 1;
      let joinRef = decoder.decode(buffer.slice(offset, offset + joinRefSize));
      offset = offset + joinRefSize;
      let topic = decoder.decode(buffer.slice(offset, offset + topicSize));
      offset = offset + topicSize;
      let event = decoder.decode(buffer.slice(offset, offset + eventSize));
      offset = offset + eventSize;
      let data = buffer.slice(offset, buffer.byteLength);
      return { join_ref: joinRef, ref: null, topic, event, payload: data };
    },
    decodeReply(buffer, view, decoder) {
      let joinRefSize = view.getUint8(1);
      let refSize = view.getUint8(2);
      let topicSize = view.getUint8(3);
      let eventSize = view.getUint8(4);
      let offset = this.HEADER_LENGTH + this.META_LENGTH;
      let joinRef = decoder.decode(buffer.slice(offset, offset + joinRefSize));
      offset = offset + joinRefSize;
      let ref = decoder.decode(buffer.slice(offset, offset + refSize));
      offset = offset + refSize;
      let topic = decoder.decode(buffer.slice(offset, offset + topicSize));
      offset = offset + topicSize;
      let event = decoder.decode(buffer.slice(offset, offset + eventSize));
      offset = offset + eventSize;
      let data = buffer.slice(offset, buffer.byteLength);
      let payload = { status: event, response: data };
      return { join_ref: joinRef, ref, topic, event: CHANNEL_EVENTS.reply, payload };
    },
    decodeBroadcast(buffer, view, decoder) {
      let topicSize = view.getUint8(1);
      let eventSize = view.getUint8(2);
      let offset = this.HEADER_LENGTH + 2;
      let topic = decoder.decode(buffer.slice(offset, offset + topicSize));
      offset = offset + topicSize;
      let event = decoder.decode(buffer.slice(offset, offset + eventSize));
      offset = offset + eventSize;
      let data = buffer.slice(offset, buffer.byteLength);
      return { join_ref: null, ref: null, topic, event, payload: data };
    }
  };
  var Socket = class {
    constructor(endPoint, opts = {}) {
      this.stateChangeCallbacks = { open: [], close: [], error: [], message: [] };
      this.channels = [];
      this.sendBuffer = [];
      this.ref = 0;
      this.timeout = opts.timeout || DEFAULT_TIMEOUT;
      this.transport = opts.transport || global.WebSocket || LongPoll;
      this.establishedConnections = 0;
      this.defaultEncoder = serializer_default.encode.bind(serializer_default);
      this.defaultDecoder = serializer_default.decode.bind(serializer_default);
      this.closeWasClean = false;
      this.binaryType = opts.binaryType || "arraybuffer";
      this.connectClock = 1;
      if (this.transport !== LongPoll) {
        this.encode = opts.encode || this.defaultEncoder;
        this.decode = opts.decode || this.defaultDecoder;
      } else {
        this.encode = this.defaultEncoder;
        this.decode = this.defaultDecoder;
      }
      let awaitingConnectionOnPageShow = null;
      if (phxWindow && phxWindow.addEventListener) {
        phxWindow.addEventListener("pagehide", (_e) => {
          if (this.conn) {
            this.disconnect();
            awaitingConnectionOnPageShow = this.connectClock;
          }
        });
        phxWindow.addEventListener("pageshow", (_e) => {
          if (awaitingConnectionOnPageShow === this.connectClock) {
            awaitingConnectionOnPageShow = null;
            this.connect();
          }
        });
      }
      this.heartbeatIntervalMs = opts.heartbeatIntervalMs || 3e4;
      this.rejoinAfterMs = (tries) => {
        if (opts.rejoinAfterMs) {
          return opts.rejoinAfterMs(tries);
        } else {
          return [1e3, 2e3, 5e3][tries - 1] || 1e4;
        }
      };
      this.reconnectAfterMs = (tries) => {
        if (opts.reconnectAfterMs) {
          return opts.reconnectAfterMs(tries);
        } else {
          return [10, 50, 100, 150, 200, 250, 500, 1e3, 2e3][tries - 1] || 5e3;
        }
      };
      this.logger = opts.logger || null;
      this.longpollerTimeout = opts.longpollerTimeout || 2e4;
      this.params = closure(opts.params || {});
      this.endPoint = `${endPoint}/${TRANSPORTS.websocket}`;
      this.vsn = opts.vsn || DEFAULT_VSN;
      this.heartbeatTimer = null;
      this.pendingHeartbeatRef = null;
      this.reconnectTimer = new Timer(() => {
        this.teardown(() => this.connect());
      }, this.reconnectAfterMs);
    }
    replaceTransport(newTransport) {
      this.disconnect();
      this.transport = newTransport;
    }
    protocol() {
      return location.protocol.match(/^https/) ? "wss" : "ws";
    }
    endPointURL() {
      let uri = Ajax.appendParams(Ajax.appendParams(this.endPoint, this.params()), { vsn: this.vsn });
      if (uri.charAt(0) !== "/") {
        return uri;
      }
      if (uri.charAt(1) === "/") {
        return `${this.protocol()}:${uri}`;
      }
      return `${this.protocol()}://${location.host}${uri}`;
    }
    disconnect(callback2, code, reason) {
      this.connectClock++;
      this.closeWasClean = true;
      this.reconnectTimer.reset();
      this.teardown(callback2, code, reason);
    }
    connect(params) {
      this.connectClock++;
      if (params) {
        console && console.log("passing params to connect is deprecated. Instead pass :params to the Socket constructor");
        this.params = closure(params);
      }
      if (this.conn) {
        return;
      }
      this.closeWasClean = false;
      this.conn = new this.transport(this.endPointURL());
      this.conn.binaryType = this.binaryType;
      this.conn.timeout = this.longpollerTimeout;
      this.conn.onopen = () => this.onConnOpen();
      this.conn.onerror = (error) => this.onConnError(error);
      this.conn.onmessage = (event) => this.onConnMessage(event);
      this.conn.onclose = (event) => this.onConnClose(event);
    }
    log(kind, msg, data) {
      this.logger(kind, msg, data);
    }
    hasLogger() {
      return this.logger !== null;
    }
    onOpen(callback2) {
      let ref = this.makeRef();
      this.stateChangeCallbacks.open.push([ref, callback2]);
      return ref;
    }
    onClose(callback2) {
      let ref = this.makeRef();
      this.stateChangeCallbacks.close.push([ref, callback2]);
      return ref;
    }
    onError(callback2) {
      let ref = this.makeRef();
      this.stateChangeCallbacks.error.push([ref, callback2]);
      return ref;
    }
    onMessage(callback2) {
      let ref = this.makeRef();
      this.stateChangeCallbacks.message.push([ref, callback2]);
      return ref;
    }
    onConnOpen() {
      if (this.hasLogger())
        this.log("transport", `connected to ${this.endPointURL()}`);
      this.closeWasClean = false;
      this.establishedConnections++;
      this.flushSendBuffer();
      this.reconnectTimer.reset();
      this.resetHeartbeat();
      this.stateChangeCallbacks.open.forEach(([, callback2]) => callback2());
    }
    heartbeatTimeout() {
      if (this.pendingHeartbeatRef) {
        this.pendingHeartbeatRef = null;
        if (this.hasLogger()) {
          this.log("transport", "heartbeat timeout. Attempting to re-establish connection");
        }
        this.abnormalClose("heartbeat timeout");
      }
    }
    resetHeartbeat() {
      if (this.conn && this.conn.skipHeartbeat) {
        return;
      }
      this.pendingHeartbeatRef = null;
      clearTimeout(this.heartbeatTimer);
      setTimeout(() => this.sendHeartbeat(), this.heartbeatIntervalMs);
    }
    teardown(callback2, code, reason) {
      if (!this.conn) {
        return callback2 && callback2();
      }
      this.waitForBufferDone(() => {
        if (this.conn) {
          if (code) {
            this.conn.close(code, reason || "");
          } else {
            this.conn.close();
          }
        }
        this.waitForSocketClosed(() => {
          if (this.conn) {
            this.conn.onclose = function() {
            };
            this.conn = null;
          }
          callback2 && callback2();
        });
      });
    }
    waitForBufferDone(callback2, tries = 1) {
      if (tries === 5 || !this.conn || !this.conn.bufferedAmount) {
        callback2();
        return;
      }
      setTimeout(() => {
        this.waitForBufferDone(callback2, tries + 1);
      }, 150 * tries);
    }
    waitForSocketClosed(callback2, tries = 1) {
      if (tries === 5 || !this.conn || this.conn.readyState === SOCKET_STATES.closed) {
        callback2();
        return;
      }
      setTimeout(() => {
        this.waitForSocketClosed(callback2, tries + 1);
      }, 150 * tries);
    }
    onConnClose(event) {
      let closeCode = event && event.code;
      if (this.hasLogger())
        this.log("transport", "close", event);
      this.triggerChanError();
      clearTimeout(this.heartbeatTimer);
      if (!this.closeWasClean && closeCode !== 1e3) {
        this.reconnectTimer.scheduleTimeout();
      }
      this.stateChangeCallbacks.close.forEach(([, callback2]) => callback2(event));
    }
    onConnError(error) {
      if (this.hasLogger())
        this.log("transport", error);
      let transportBefore = this.transport;
      let establishedBefore = this.establishedConnections;
      this.stateChangeCallbacks.error.forEach(([, callback2]) => {
        callback2(error, transportBefore, establishedBefore);
      });
      if (transportBefore === this.transport || establishedBefore > 0) {
        this.triggerChanError();
      }
    }
    triggerChanError() {
      this.channels.forEach((channel2) => {
        if (!(channel2.isErrored() || channel2.isLeaving() || channel2.isClosed())) {
          channel2.trigger(CHANNEL_EVENTS.error);
        }
      });
    }
    connectionState() {
      switch (this.conn && this.conn.readyState) {
        case SOCKET_STATES.connecting:
          return "connecting";
        case SOCKET_STATES.open:
          return "open";
        case SOCKET_STATES.closing:
          return "closing";
        default:
          return "closed";
      }
    }
    isConnected() {
      return this.connectionState() === "open";
    }
    remove(channel2) {
      this.off(channel2.stateChangeRefs);
      this.channels = this.channels.filter((c) => c.joinRef() !== channel2.joinRef());
    }
    off(refs) {
      for (let key in this.stateChangeCallbacks) {
        this.stateChangeCallbacks[key] = this.stateChangeCallbacks[key].filter(([ref]) => {
          return refs.indexOf(ref) === -1;
        });
      }
    }
    channel(topic, chanParams = {}) {
      let chan = new Channel(topic, chanParams, this);
      this.channels.push(chan);
      return chan;
    }
    push(data) {
      if (this.hasLogger()) {
        let { topic, event, payload, ref, join_ref } = data;
        this.log("push", `${topic} ${event} (${join_ref}, ${ref})`, payload);
      }
      if (this.isConnected()) {
        this.encode(data, (result) => this.conn.send(result));
      } else {
        this.sendBuffer.push(() => this.encode(data, (result) => this.conn.send(result)));
      }
    }
    makeRef() {
      let newRef = this.ref + 1;
      if (newRef === this.ref) {
        this.ref = 0;
      } else {
        this.ref = newRef;
      }
      return this.ref.toString();
    }
    sendHeartbeat() {
      if (this.pendingHeartbeatRef && !this.isConnected()) {
        return;
      }
      this.pendingHeartbeatRef = this.makeRef();
      this.push({ topic: "phoenix", event: "heartbeat", payload: {}, ref: this.pendingHeartbeatRef });
      this.heartbeatTimer = setTimeout(() => this.heartbeatTimeout(), this.heartbeatIntervalMs);
    }
    abnormalClose(reason) {
      this.closeWasClean = false;
      if (this.isConnected()) {
        this.conn.close(WS_CLOSE_NORMAL, reason);
      }
    }
    flushSendBuffer() {
      if (this.isConnected() && this.sendBuffer.length > 0) {
        this.sendBuffer.forEach((callback2) => callback2());
        this.sendBuffer = [];
      }
    }
    onConnMessage(rawMessage) {
      this.decode(rawMessage.data, (msg) => {
        let { topic, event, payload, ref, join_ref } = msg;
        if (ref && ref === this.pendingHeartbeatRef) {
          clearTimeout(this.heartbeatTimer);
          this.pendingHeartbeatRef = null;
          setTimeout(() => this.sendHeartbeat(), this.heartbeatIntervalMs);
        }
        if (this.hasLogger())
          this.log("receive", `${payload.status || ""} ${topic} ${event} ${ref && "(" + ref + ")" || ""}`, payload);
        for (let i = 0; i < this.channels.length; i++) {
          const channel2 = this.channels[i];
          if (!channel2.isMember(topic, event, payload, join_ref)) {
            continue;
          }
          channel2.trigger(event, payload, ref, join_ref);
        }
        for (let i = 0; i < this.stateChangeCallbacks.message.length; i++) {
          let [, callback2] = this.stateChangeCallbacks.message[i];
          callback2(msg);
        }
      });
    }
    leaveOpenTopic(topic) {
      let dupChannel = this.channels.find((c) => c.topic === topic && (c.isJoined() || c.isJoining()));
      if (dupChannel) {
        if (this.hasLogger())
          this.log("transport", `leaving duplicate topic "${topic}"`);
        dupChannel.leave();
      }
    }
  };

  // node_modules/chart.js/dist/chunks/helpers.segment.js
  var requestAnimFrame = function() {
    if (typeof window === "undefined") {
      return function(callback2) {
        return callback2();
      };
    }
    return window.requestAnimationFrame;
  }();
  function throttled(fn, thisArg, updateFn) {
    const updateArgs = updateFn || ((args2) => Array.prototype.slice.call(args2));
    let ticking = false;
    let args = [];
    return function(...rest) {
      args = updateArgs(rest);
      if (!ticking) {
        ticking = true;
        requestAnimFrame.call(window, () => {
          ticking = false;
          fn.apply(thisArg, args);
        });
      }
    };
  }
  function debounce(fn, delay) {
    let timeout;
    return function(...args) {
      if (delay) {
        clearTimeout(timeout);
        timeout = setTimeout(fn, delay, args);
      } else {
        fn.apply(this, args);
      }
      return delay;
    };
  }
  var _toLeftRightCenter = (align) => align === "start" ? "left" : align === "end" ? "right" : "center";
  var _alignStartEnd = (align, start, end) => align === "start" ? start : align === "end" ? end : (start + end) / 2;
  var _textX = (align, left, right, rtl) => {
    const check = rtl ? "left" : "right";
    return align === check ? right : align === "center" ? (left + right) / 2 : left;
  };
  function noop() {
  }
  var uid = function() {
    let id = 0;
    return function() {
      return id++;
    };
  }();
  function isNullOrUndef(value) {
    return value === null || typeof value === "undefined";
  }
  function isArray(value) {
    if (Array.isArray && Array.isArray(value)) {
      return true;
    }
    const type = Object.prototype.toString.call(value);
    if (type.substr(0, 7) === "[object" && type.substr(-6) === "Array]") {
      return true;
    }
    return false;
  }
  function isObject(value) {
    return value !== null && Object.prototype.toString.call(value) === "[object Object]";
  }
  var isNumberFinite = (value) => (typeof value === "number" || value instanceof Number) && isFinite(+value);
  function finiteOrDefault(value, defaultValue) {
    return isNumberFinite(value) ? value : defaultValue;
  }
  function valueOrDefault(value, defaultValue) {
    return typeof value === "undefined" ? defaultValue : value;
  }
  var toPercentage = (value, dimension) => typeof value === "string" && value.endsWith("%") ? parseFloat(value) / 100 : value / dimension;
  var toDimension = (value, dimension) => typeof value === "string" && value.endsWith("%") ? parseFloat(value) / 100 * dimension : +value;
  function callback(fn, args, thisArg) {
    if (fn && typeof fn.call === "function") {
      return fn.apply(thisArg, args);
    }
  }
  function each(loopable, fn, thisArg, reverse) {
    let i, len, keys;
    if (isArray(loopable)) {
      len = loopable.length;
      if (reverse) {
        for (i = len - 1; i >= 0; i--) {
          fn.call(thisArg, loopable[i], i);
        }
      } else {
        for (i = 0; i < len; i++) {
          fn.call(thisArg, loopable[i], i);
        }
      }
    } else if (isObject(loopable)) {
      keys = Object.keys(loopable);
      len = keys.length;
      for (i = 0; i < len; i++) {
        fn.call(thisArg, loopable[keys[i]], keys[i]);
      }
    }
  }
  function _elementsEqual(a0, a1) {
    let i, ilen, v0, v1;
    if (!a0 || !a1 || a0.length !== a1.length) {
      return false;
    }
    for (i = 0, ilen = a0.length; i < ilen; ++i) {
      v0 = a0[i];
      v1 = a1[i];
      if (v0.datasetIndex !== v1.datasetIndex || v0.index !== v1.index) {
        return false;
      }
    }
    return true;
  }
  function clone$1(source) {
    if (isArray(source)) {
      return source.map(clone$1);
    }
    if (isObject(source)) {
      const target = Object.create(null);
      const keys = Object.keys(source);
      const klen = keys.length;
      let k = 0;
      for (; k < klen; ++k) {
        target[keys[k]] = clone$1(source[keys[k]]);
      }
      return target;
    }
    return source;
  }
  function isValidKey(key) {
    return ["__proto__", "prototype", "constructor"].indexOf(key) === -1;
  }
  function _merger(key, target, source, options) {
    if (!isValidKey(key)) {
      return;
    }
    const tval = target[key];
    const sval = source[key];
    if (isObject(tval) && isObject(sval)) {
      merge(tval, sval, options);
    } else {
      target[key] = clone$1(sval);
    }
  }
  function merge(target, source, options) {
    const sources = isArray(source) ? source : [source];
    const ilen = sources.length;
    if (!isObject(target)) {
      return target;
    }
    options = options || {};
    const merger = options.merger || _merger;
    for (let i = 0; i < ilen; ++i) {
      source = sources[i];
      if (!isObject(source)) {
        continue;
      }
      const keys = Object.keys(source);
      for (let k = 0, klen = keys.length; k < klen; ++k) {
        merger(keys[k], target, source, options);
      }
    }
    return target;
  }
  function mergeIf(target, source) {
    return merge(target, source, { merger: _mergerIf });
  }
  function _mergerIf(key, target, source) {
    if (!isValidKey(key)) {
      return;
    }
    const tval = target[key];
    const sval = source[key];
    if (isObject(tval) && isObject(sval)) {
      mergeIf(tval, sval);
    } else if (!Object.prototype.hasOwnProperty.call(target, key)) {
      target[key] = clone$1(sval);
    }
  }
  var emptyString = "";
  var dot = ".";
  function indexOfDotOrLength(key, start) {
    const idx = key.indexOf(dot, start);
    return idx === -1 ? key.length : idx;
  }
  function resolveObjectKey(obj, key) {
    if (key === emptyString) {
      return obj;
    }
    let pos = 0;
    let idx = indexOfDotOrLength(key, pos);
    while (obj && idx > pos) {
      obj = obj[key.substr(pos, idx - pos)];
      pos = idx + 1;
      idx = indexOfDotOrLength(key, pos);
    }
    return obj;
  }
  function _capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  var defined = (value) => typeof value !== "undefined";
  var isFunction = (value) => typeof value === "function";
  var setsEqual = (a, b) => {
    if (a.size !== b.size) {
      return false;
    }
    for (const item of a) {
      if (!b.has(item)) {
        return false;
      }
    }
    return true;
  };
  function _isClickEvent(e) {
    return e.type === "mouseup" || e.type === "click" || e.type === "contextmenu";
  }
  var PI = Math.PI;
  var TAU = 2 * PI;
  var PITAU = TAU + PI;
  var INFINITY = Number.POSITIVE_INFINITY;
  var RAD_PER_DEG = PI / 180;
  var HALF_PI = PI / 2;
  var QUARTER_PI = PI / 4;
  var TWO_THIRDS_PI = PI * 2 / 3;
  var log10 = Math.log10;
  var sign = Math.sign;
  function niceNum(range) {
    const roundedRange = Math.round(range);
    range = almostEquals(range, roundedRange, range / 1e3) ? roundedRange : range;
    const niceRange = Math.pow(10, Math.floor(log10(range)));
    const fraction = range / niceRange;
    const niceFraction = fraction <= 1 ? 1 : fraction <= 2 ? 2 : fraction <= 5 ? 5 : 10;
    return niceFraction * niceRange;
  }
  function _factorize(value) {
    const result = [];
    const sqrt = Math.sqrt(value);
    let i;
    for (i = 1; i < sqrt; i++) {
      if (value % i === 0) {
        result.push(i);
        result.push(value / i);
      }
    }
    if (sqrt === (sqrt | 0)) {
      result.push(sqrt);
    }
    result.sort((a, b) => a - b).pop();
    return result;
  }
  function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }
  function almostEquals(x, y, epsilon) {
    return Math.abs(x - y) < epsilon;
  }
  function almostWhole(x, epsilon) {
    const rounded = Math.round(x);
    return rounded - epsilon <= x && rounded + epsilon >= x;
  }
  function _setMinAndMaxByKey(array, target, property) {
    let i, ilen, value;
    for (i = 0, ilen = array.length; i < ilen; i++) {
      value = array[i][property];
      if (!isNaN(value)) {
        target.min = Math.min(target.min, value);
        target.max = Math.max(target.max, value);
      }
    }
  }
  function toRadians(degrees) {
    return degrees * (PI / 180);
  }
  function toDegrees(radians) {
    return radians * (180 / PI);
  }
  function _decimalPlaces(x) {
    if (!isNumberFinite(x)) {
      return;
    }
    let e = 1;
    let p = 0;
    while (Math.round(x * e) / e !== x) {
      e *= 10;
      p++;
    }
    return p;
  }
  function getAngleFromPoint(centrePoint, anglePoint) {
    const distanceFromXCenter = anglePoint.x - centrePoint.x;
    const distanceFromYCenter = anglePoint.y - centrePoint.y;
    const radialDistanceFromCenter = Math.sqrt(distanceFromXCenter * distanceFromXCenter + distanceFromYCenter * distanceFromYCenter);
    let angle = Math.atan2(distanceFromYCenter, distanceFromXCenter);
    if (angle < -0.5 * PI) {
      angle += TAU;
    }
    return {
      angle,
      distance: radialDistanceFromCenter
    };
  }
  function distanceBetweenPoints(pt1, pt2) {
    return Math.sqrt(Math.pow(pt2.x - pt1.x, 2) + Math.pow(pt2.y - pt1.y, 2));
  }
  function _angleDiff(a, b) {
    return (a - b + PITAU) % TAU - PI;
  }
  function _normalizeAngle(a) {
    return (a % TAU + TAU) % TAU;
  }
  function _angleBetween(angle, start, end, sameAngleIsFullCircle) {
    const a = _normalizeAngle(angle);
    const s = _normalizeAngle(start);
    const e = _normalizeAngle(end);
    const angleToStart = _normalizeAngle(s - a);
    const angleToEnd = _normalizeAngle(e - a);
    const startToAngle = _normalizeAngle(a - s);
    const endToAngle = _normalizeAngle(a - e);
    return a === s || a === e || sameAngleIsFullCircle && s === e || angleToStart > angleToEnd && startToAngle < endToAngle;
  }
  function _limitValue(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }
  function _int16Range(value) {
    return _limitValue(value, -32768, 32767);
  }
  function _isBetween(value, start, end, epsilon = 1e-6) {
    return value >= Math.min(start, end) - epsilon && value <= Math.max(start, end) + epsilon;
  }
  var atEdge = (t) => t === 0 || t === 1;
  var elasticIn = (t, s, p) => -(Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * TAU / p));
  var elasticOut = (t, s, p) => Math.pow(2, -10 * t) * Math.sin((t - s) * TAU / p) + 1;
  var effects = {
    linear: (t) => t,
    easeInQuad: (t) => t * t,
    easeOutQuad: (t) => -t * (t - 2),
    easeInOutQuad: (t) => (t /= 0.5) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1),
    easeInCubic: (t) => t * t * t,
    easeOutCubic: (t) => (t -= 1) * t * t + 1,
    easeInOutCubic: (t) => (t /= 0.5) < 1 ? 0.5 * t * t * t : 0.5 * ((t -= 2) * t * t + 2),
    easeInQuart: (t) => t * t * t * t,
    easeOutQuart: (t) => -((t -= 1) * t * t * t - 1),
    easeInOutQuart: (t) => (t /= 0.5) < 1 ? 0.5 * t * t * t * t : -0.5 * ((t -= 2) * t * t * t - 2),
    easeInQuint: (t) => t * t * t * t * t,
    easeOutQuint: (t) => (t -= 1) * t * t * t * t + 1,
    easeInOutQuint: (t) => (t /= 0.5) < 1 ? 0.5 * t * t * t * t * t : 0.5 * ((t -= 2) * t * t * t * t + 2),
    easeInSine: (t) => -Math.cos(t * HALF_PI) + 1,
    easeOutSine: (t) => Math.sin(t * HALF_PI),
    easeInOutSine: (t) => -0.5 * (Math.cos(PI * t) - 1),
    easeInExpo: (t) => t === 0 ? 0 : Math.pow(2, 10 * (t - 1)),
    easeOutExpo: (t) => t === 1 ? 1 : -Math.pow(2, -10 * t) + 1,
    easeInOutExpo: (t) => atEdge(t) ? t : t < 0.5 ? 0.5 * Math.pow(2, 10 * (t * 2 - 1)) : 0.5 * (-Math.pow(2, -10 * (t * 2 - 1)) + 2),
    easeInCirc: (t) => t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1),
    easeOutCirc: (t) => Math.sqrt(1 - (t -= 1) * t),
    easeInOutCirc: (t) => (t /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - t * t) - 1) : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1),
    easeInElastic: (t) => atEdge(t) ? t : elasticIn(t, 0.075, 0.3),
    easeOutElastic: (t) => atEdge(t) ? t : elasticOut(t, 0.075, 0.3),
    easeInOutElastic(t) {
      const s = 0.1125;
      const p = 0.45;
      return atEdge(t) ? t : t < 0.5 ? 0.5 * elasticIn(t * 2, s, p) : 0.5 + 0.5 * elasticOut(t * 2 - 1, s, p);
    },
    easeInBack(t) {
      const s = 1.70158;
      return t * t * ((s + 1) * t - s);
    },
    easeOutBack(t) {
      const s = 1.70158;
      return (t -= 1) * t * ((s + 1) * t + s) + 1;
    },
    easeInOutBack(t) {
      let s = 1.70158;
      if ((t /= 0.5) < 1) {
        return 0.5 * (t * t * (((s *= 1.525) + 1) * t - s));
      }
      return 0.5 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2);
    },
    easeInBounce: (t) => 1 - effects.easeOutBounce(1 - t),
    easeOutBounce(t) {
      const m = 7.5625;
      const d = 2.75;
      if (t < 1 / d) {
        return m * t * t;
      }
      if (t < 2 / d) {
        return m * (t -= 1.5 / d) * t + 0.75;
      }
      if (t < 2.5 / d) {
        return m * (t -= 2.25 / d) * t + 0.9375;
      }
      return m * (t -= 2.625 / d) * t + 0.984375;
    },
    easeInOutBounce: (t) => t < 0.5 ? effects.easeInBounce(t * 2) * 0.5 : effects.easeOutBounce(t * 2 - 1) * 0.5 + 0.5
  };
  var map = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, A: 10, B: 11, C: 12, D: 13, E: 14, F: 15, a: 10, b: 11, c: 12, d: 13, e: 14, f: 15 };
  var hex = "0123456789ABCDEF";
  var h1 = (b) => hex[b & 15];
  var h2 = (b) => hex[(b & 240) >> 4] + hex[b & 15];
  var eq = (b) => (b & 240) >> 4 === (b & 15);
  function isShort(v) {
    return eq(v.r) && eq(v.g) && eq(v.b) && eq(v.a);
  }
  function hexParse(str) {
    var len = str.length;
    var ret;
    if (str[0] === "#") {
      if (len === 4 || len === 5) {
        ret = {
          r: 255 & map[str[1]] * 17,
          g: 255 & map[str[2]] * 17,
          b: 255 & map[str[3]] * 17,
          a: len === 5 ? map[str[4]] * 17 : 255
        };
      } else if (len === 7 || len === 9) {
        ret = {
          r: map[str[1]] << 4 | map[str[2]],
          g: map[str[3]] << 4 | map[str[4]],
          b: map[str[5]] << 4 | map[str[6]],
          a: len === 9 ? map[str[7]] << 4 | map[str[8]] : 255
        };
      }
    }
    return ret;
  }
  function hexString(v) {
    var f = isShort(v) ? h1 : h2;
    return v ? "#" + f(v.r) + f(v.g) + f(v.b) + (v.a < 255 ? f(v.a) : "") : v;
  }
  function round(v) {
    return v + 0.5 | 0;
  }
  var lim = (v, l, h) => Math.max(Math.min(v, h), l);
  function p2b(v) {
    return lim(round(v * 2.55), 0, 255);
  }
  function n2b(v) {
    return lim(round(v * 255), 0, 255);
  }
  function b2n(v) {
    return lim(round(v / 2.55) / 100, 0, 1);
  }
  function n2p(v) {
    return lim(round(v * 100), 0, 100);
  }
  var RGB_RE = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
  function rgbParse(str) {
    const m = RGB_RE.exec(str);
    let a = 255;
    let r, g, b;
    if (!m) {
      return;
    }
    if (m[7] !== r) {
      const v = +m[7];
      a = 255 & (m[8] ? p2b(v) : v * 255);
    }
    r = +m[1];
    g = +m[3];
    b = +m[5];
    r = 255 & (m[2] ? p2b(r) : r);
    g = 255 & (m[4] ? p2b(g) : g);
    b = 255 & (m[6] ? p2b(b) : b);
    return {
      r,
      g,
      b,
      a
    };
  }
  function rgbString(v) {
    return v && (v.a < 255 ? `rgba(${v.r}, ${v.g}, ${v.b}, ${b2n(v.a)})` : `rgb(${v.r}, ${v.g}, ${v.b})`);
  }
  var HUE_RE = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
  function hsl2rgbn(h, s, l) {
    const a = s * Math.min(l, 1 - l);
    const f = (n, k = (n + h / 30) % 12) => l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return [f(0), f(8), f(4)];
  }
  function hsv2rgbn(h, s, v) {
    const f = (n, k = (n + h / 60) % 6) => v - v * s * Math.max(Math.min(k, 4 - k, 1), 0);
    return [f(5), f(3), f(1)];
  }
  function hwb2rgbn(h, w, b) {
    const rgb = hsl2rgbn(h, 1, 0.5);
    let i;
    if (w + b > 1) {
      i = 1 / (w + b);
      w *= i;
      b *= i;
    }
    for (i = 0; i < 3; i++) {
      rgb[i] *= 1 - w - b;
      rgb[i] += w;
    }
    return rgb;
  }
  function rgb2hsl(v) {
    const range = 255;
    const r = v.r / range;
    const g = v.g / range;
    const b = v.b / range;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const l = (max + min) / 2;
    let h, s, d;
    if (max !== min) {
      d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
      h = h * 60 + 0.5;
    }
    return [h | 0, s || 0, l];
  }
  function calln(f, a, b, c) {
    return (Array.isArray(a) ? f(a[0], a[1], a[2]) : f(a, b, c)).map(n2b);
  }
  function hsl2rgb(h, s, l) {
    return calln(hsl2rgbn, h, s, l);
  }
  function hwb2rgb(h, w, b) {
    return calln(hwb2rgbn, h, w, b);
  }
  function hsv2rgb(h, s, v) {
    return calln(hsv2rgbn, h, s, v);
  }
  function hue(h) {
    return (h % 360 + 360) % 360;
  }
  function hueParse(str) {
    const m = HUE_RE.exec(str);
    let a = 255;
    let v;
    if (!m) {
      return;
    }
    if (m[5] !== v) {
      a = m[6] ? p2b(+m[5]) : n2b(+m[5]);
    }
    const h = hue(+m[2]);
    const p1 = +m[3] / 100;
    const p2 = +m[4] / 100;
    if (m[1] === "hwb") {
      v = hwb2rgb(h, p1, p2);
    } else if (m[1] === "hsv") {
      v = hsv2rgb(h, p1, p2);
    } else {
      v = hsl2rgb(h, p1, p2);
    }
    return {
      r: v[0],
      g: v[1],
      b: v[2],
      a
    };
  }
  function rotate(v, deg) {
    var h = rgb2hsl(v);
    h[0] = hue(h[0] + deg);
    h = hsl2rgb(h);
    v.r = h[0];
    v.g = h[1];
    v.b = h[2];
  }
  function hslString(v) {
    if (!v) {
      return;
    }
    const a = rgb2hsl(v);
    const h = a[0];
    const s = n2p(a[1]);
    const l = n2p(a[2]);
    return v.a < 255 ? `hsla(${h}, ${s}%, ${l}%, ${b2n(v.a)})` : `hsl(${h}, ${s}%, ${l}%)`;
  }
  var map$1 = {
    x: "dark",
    Z: "light",
    Y: "re",
    X: "blu",
    W: "gr",
    V: "medium",
    U: "slate",
    A: "ee",
    T: "ol",
    S: "or",
    B: "ra",
    C: "lateg",
    D: "ights",
    R: "in",
    Q: "turquois",
    E: "hi",
    P: "ro",
    O: "al",
    N: "le",
    M: "de",
    L: "yello",
    F: "en",
    K: "ch",
    G: "arks",
    H: "ea",
    I: "ightg",
    J: "wh"
  };
  var names = {
    OiceXe: "f0f8ff",
    antiquewEte: "faebd7",
    aqua: "ffff",
    aquamarRe: "7fffd4",
    azuY: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "0",
    blanKedOmond: "ffebcd",
    Xe: "ff",
    XeviTet: "8a2be2",
    bPwn: "a52a2a",
    burlywood: "deb887",
    caMtXe: "5f9ea0",
    KartYuse: "7fff00",
    KocTate: "d2691e",
    cSO: "ff7f50",
    cSnflowerXe: "6495ed",
    cSnsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "ffff",
    xXe: "8b",
    xcyan: "8b8b",
    xgTMnPd: "b8860b",
    xWay: "a9a9a9",
    xgYF: "6400",
    xgYy: "a9a9a9",
    xkhaki: "bdb76b",
    xmagFta: "8b008b",
    xTivegYF: "556b2f",
    xSange: "ff8c00",
    xScEd: "9932cc",
    xYd: "8b0000",
    xsOmon: "e9967a",
    xsHgYF: "8fbc8f",
    xUXe: "483d8b",
    xUWay: "2f4f4f",
    xUgYy: "2f4f4f",
    xQe: "ced1",
    xviTet: "9400d3",
    dAppRk: "ff1493",
    dApskyXe: "bfff",
    dimWay: "696969",
    dimgYy: "696969",
    dodgerXe: "1e90ff",
    fiYbrick: "b22222",
    flSOwEte: "fffaf0",
    foYstWAn: "228b22",
    fuKsia: "ff00ff",
    gaRsbSo: "dcdcdc",
    ghostwEte: "f8f8ff",
    gTd: "ffd700",
    gTMnPd: "daa520",
    Way: "808080",
    gYF: "8000",
    gYFLw: "adff2f",
    gYy: "808080",
    honeyMw: "f0fff0",
    hotpRk: "ff69b4",
    RdianYd: "cd5c5c",
    Rdigo: "4b0082",
    ivSy: "fffff0",
    khaki: "f0e68c",
    lavFMr: "e6e6fa",
    lavFMrXsh: "fff0f5",
    lawngYF: "7cfc00",
    NmoncEffon: "fffacd",
    ZXe: "add8e6",
    ZcSO: "f08080",
    Zcyan: "e0ffff",
    ZgTMnPdLw: "fafad2",
    ZWay: "d3d3d3",
    ZgYF: "90ee90",
    ZgYy: "d3d3d3",
    ZpRk: "ffb6c1",
    ZsOmon: "ffa07a",
    ZsHgYF: "20b2aa",
    ZskyXe: "87cefa",
    ZUWay: "778899",
    ZUgYy: "778899",
    ZstAlXe: "b0c4de",
    ZLw: "ffffe0",
    lime: "ff00",
    limegYF: "32cd32",
    lRF: "faf0e6",
    magFta: "ff00ff",
    maPon: "800000",
    VaquamarRe: "66cdaa",
    VXe: "cd",
    VScEd: "ba55d3",
    VpurpN: "9370db",
    VsHgYF: "3cb371",
    VUXe: "7b68ee",
    VsprRggYF: "fa9a",
    VQe: "48d1cc",
    VviTetYd: "c71585",
    midnightXe: "191970",
    mRtcYam: "f5fffa",
    mistyPse: "ffe4e1",
    moccasR: "ffe4b5",
    navajowEte: "ffdead",
    navy: "80",
    Tdlace: "fdf5e6",
    Tive: "808000",
    TivedBb: "6b8e23",
    Sange: "ffa500",
    SangeYd: "ff4500",
    ScEd: "da70d6",
    pOegTMnPd: "eee8aa",
    pOegYF: "98fb98",
    pOeQe: "afeeee",
    pOeviTetYd: "db7093",
    papayawEp: "ffefd5",
    pHKpuff: "ffdab9",
    peru: "cd853f",
    pRk: "ffc0cb",
    plum: "dda0dd",
    powMrXe: "b0e0e6",
    purpN: "800080",
    YbeccapurpN: "663399",
    Yd: "ff0000",
    Psybrown: "bc8f8f",
    PyOXe: "4169e1",
    saddNbPwn: "8b4513",
    sOmon: "fa8072",
    sandybPwn: "f4a460",
    sHgYF: "2e8b57",
    sHshell: "fff5ee",
    siFna: "a0522d",
    silver: "c0c0c0",
    skyXe: "87ceeb",
    UXe: "6a5acd",
    UWay: "708090",
    UgYy: "708090",
    snow: "fffafa",
    sprRggYF: "ff7f",
    stAlXe: "4682b4",
    tan: "d2b48c",
    teO: "8080",
    tEstN: "d8bfd8",
    tomato: "ff6347",
    Qe: "40e0d0",
    viTet: "ee82ee",
    JHt: "f5deb3",
    wEte: "ffffff",
    wEtesmoke: "f5f5f5",
    Lw: "ffff00",
    LwgYF: "9acd32"
  };
  function unpack() {
    const unpacked = {};
    const keys = Object.keys(names);
    const tkeys = Object.keys(map$1);
    let i, j, k, ok, nk;
    for (i = 0; i < keys.length; i++) {
      ok = nk = keys[i];
      for (j = 0; j < tkeys.length; j++) {
        k = tkeys[j];
        nk = nk.replace(k, map$1[k]);
      }
      k = parseInt(names[ok], 16);
      unpacked[nk] = [k >> 16 & 255, k >> 8 & 255, k & 255];
    }
    return unpacked;
  }
  var names$1;
  function nameParse(str) {
    if (!names$1) {
      names$1 = unpack();
      names$1.transparent = [0, 0, 0, 0];
    }
    const a = names$1[str.toLowerCase()];
    return a && {
      r: a[0],
      g: a[1],
      b: a[2],
      a: a.length === 4 ? a[3] : 255
    };
  }
  function modHSL(v, i, ratio) {
    if (v) {
      let tmp = rgb2hsl(v);
      tmp[i] = Math.max(0, Math.min(tmp[i] + tmp[i] * ratio, i === 0 ? 360 : 1));
      tmp = hsl2rgb(tmp);
      v.r = tmp[0];
      v.g = tmp[1];
      v.b = tmp[2];
    }
  }
  function clone(v, proto) {
    return v ? Object.assign(proto || {}, v) : v;
  }
  function fromObject(input) {
    var v = { r: 0, g: 0, b: 0, a: 255 };
    if (Array.isArray(input)) {
      if (input.length >= 3) {
        v = { r: input[0], g: input[1], b: input[2], a: 255 };
        if (input.length > 3) {
          v.a = n2b(input[3]);
        }
      }
    } else {
      v = clone(input, { r: 0, g: 0, b: 0, a: 1 });
      v.a = n2b(v.a);
    }
    return v;
  }
  function functionParse(str) {
    if (str.charAt(0) === "r") {
      return rgbParse(str);
    }
    return hueParse(str);
  }
  var Color = class {
    constructor(input) {
      if (input instanceof Color) {
        return input;
      }
      const type = typeof input;
      let v;
      if (type === "object") {
        v = fromObject(input);
      } else if (type === "string") {
        v = hexParse(input) || nameParse(input) || functionParse(input);
      }
      this._rgb = v;
      this._valid = !!v;
    }
    get valid() {
      return this._valid;
    }
    get rgb() {
      var v = clone(this._rgb);
      if (v) {
        v.a = b2n(v.a);
      }
      return v;
    }
    set rgb(obj) {
      this._rgb = fromObject(obj);
    }
    rgbString() {
      return this._valid ? rgbString(this._rgb) : this._rgb;
    }
    hexString() {
      return this._valid ? hexString(this._rgb) : this._rgb;
    }
    hslString() {
      return this._valid ? hslString(this._rgb) : this._rgb;
    }
    mix(color2, weight) {
      const me = this;
      if (color2) {
        const c1 = me.rgb;
        const c2 = color2.rgb;
        let w2;
        const p = weight === w2 ? 0.5 : weight;
        const w = 2 * p - 1;
        const a = c1.a - c2.a;
        const w1 = ((w * a === -1 ? w : (w + a) / (1 + w * a)) + 1) / 2;
        w2 = 1 - w1;
        c1.r = 255 & w1 * c1.r + w2 * c2.r + 0.5;
        c1.g = 255 & w1 * c1.g + w2 * c2.g + 0.5;
        c1.b = 255 & w1 * c1.b + w2 * c2.b + 0.5;
        c1.a = p * c1.a + (1 - p) * c2.a;
        me.rgb = c1;
      }
      return me;
    }
    clone() {
      return new Color(this.rgb);
    }
    alpha(a) {
      this._rgb.a = n2b(a);
      return this;
    }
    clearer(ratio) {
      const rgb = this._rgb;
      rgb.a *= 1 - ratio;
      return this;
    }
    greyscale() {
      const rgb = this._rgb;
      const val = round(rgb.r * 0.3 + rgb.g * 0.59 + rgb.b * 0.11);
      rgb.r = rgb.g = rgb.b = val;
      return this;
    }
    opaquer(ratio) {
      const rgb = this._rgb;
      rgb.a *= 1 + ratio;
      return this;
    }
    negate() {
      const v = this._rgb;
      v.r = 255 - v.r;
      v.g = 255 - v.g;
      v.b = 255 - v.b;
      return this;
    }
    lighten(ratio) {
      modHSL(this._rgb, 2, ratio);
      return this;
    }
    darken(ratio) {
      modHSL(this._rgb, 2, -ratio);
      return this;
    }
    saturate(ratio) {
      modHSL(this._rgb, 1, ratio);
      return this;
    }
    desaturate(ratio) {
      modHSL(this._rgb, 1, -ratio);
      return this;
    }
    rotate(deg) {
      rotate(this._rgb, deg);
      return this;
    }
  };
  function index_esm(input) {
    return new Color(input);
  }
  var isPatternOrGradient = (value) => value instanceof CanvasGradient || value instanceof CanvasPattern;
  function color(value) {
    return isPatternOrGradient(value) ? value : index_esm(value);
  }
  function getHoverColor(value) {
    return isPatternOrGradient(value) ? value : index_esm(value).saturate(0.5).darken(0.1).hexString();
  }
  var overrides = Object.create(null);
  var descriptors = Object.create(null);
  function getScope$1(node, key) {
    if (!key) {
      return node;
    }
    const keys = key.split(".");
    for (let i = 0, n = keys.length; i < n; ++i) {
      const k = keys[i];
      node = node[k] || (node[k] = Object.create(null));
    }
    return node;
  }
  function set(root, scope, values) {
    if (typeof scope === "string") {
      return merge(getScope$1(root, scope), values);
    }
    return merge(getScope$1(root, ""), scope);
  }
  var Defaults = class {
    constructor(_descriptors2) {
      this.animation = void 0;
      this.backgroundColor = "rgba(0,0,0,0.1)";
      this.borderColor = "rgba(0,0,0,0.1)";
      this.color = "#666";
      this.datasets = {};
      this.devicePixelRatio = (context) => context.chart.platform.getDevicePixelRatio();
      this.elements = {};
      this.events = [
        "mousemove",
        "mouseout",
        "click",
        "touchstart",
        "touchmove"
      ];
      this.font = {
        family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        size: 12,
        style: "normal",
        lineHeight: 1.2,
        weight: null
      };
      this.hover = {};
      this.hoverBackgroundColor = (ctx, options) => getHoverColor(options.backgroundColor);
      this.hoverBorderColor = (ctx, options) => getHoverColor(options.borderColor);
      this.hoverColor = (ctx, options) => getHoverColor(options.color);
      this.indexAxis = "x";
      this.interaction = {
        mode: "nearest",
        intersect: true
      };
      this.maintainAspectRatio = true;
      this.onHover = null;
      this.onClick = null;
      this.parsing = true;
      this.plugins = {};
      this.responsive = true;
      this.scale = void 0;
      this.scales = {};
      this.showLine = true;
      this.drawActiveElementsOnTop = true;
      this.describe(_descriptors2);
    }
    set(scope, values) {
      return set(this, scope, values);
    }
    get(scope) {
      return getScope$1(this, scope);
    }
    describe(scope, values) {
      return set(descriptors, scope, values);
    }
    override(scope, values) {
      return set(overrides, scope, values);
    }
    route(scope, name, targetScope, targetName) {
      const scopeObject = getScope$1(this, scope);
      const targetScopeObject = getScope$1(this, targetScope);
      const privateName = "_" + name;
      Object.defineProperties(scopeObject, {
        [privateName]: {
          value: scopeObject[name],
          writable: true
        },
        [name]: {
          enumerable: true,
          get() {
            const local = this[privateName];
            const target = targetScopeObject[targetName];
            if (isObject(local)) {
              return Object.assign({}, target, local);
            }
            return valueOrDefault(local, target);
          },
          set(value) {
            this[privateName] = value;
          }
        }
      });
    }
  };
  var defaults = new Defaults({
    _scriptable: (name) => !name.startsWith("on"),
    _indexable: (name) => name !== "events",
    hover: {
      _fallback: "interaction"
    },
    interaction: {
      _scriptable: false,
      _indexable: false
    }
  });
  function toFontString(font) {
    if (!font || isNullOrUndef(font.size) || isNullOrUndef(font.family)) {
      return null;
    }
    return (font.style ? font.style + " " : "") + (font.weight ? font.weight + " " : "") + font.size + "px " + font.family;
  }
  function _measureText(ctx, data, gc, longest, string) {
    let textWidth = data[string];
    if (!textWidth) {
      textWidth = data[string] = ctx.measureText(string).width;
      gc.push(string);
    }
    if (textWidth > longest) {
      longest = textWidth;
    }
    return longest;
  }
  function _longestText(ctx, font, arrayOfThings, cache) {
    cache = cache || {};
    let data = cache.data = cache.data || {};
    let gc = cache.garbageCollect = cache.garbageCollect || [];
    if (cache.font !== font) {
      data = cache.data = {};
      gc = cache.garbageCollect = [];
      cache.font = font;
    }
    ctx.save();
    ctx.font = font;
    let longest = 0;
    const ilen = arrayOfThings.length;
    let i, j, jlen, thing, nestedThing;
    for (i = 0; i < ilen; i++) {
      thing = arrayOfThings[i];
      if (thing !== void 0 && thing !== null && isArray(thing) !== true) {
        longest = _measureText(ctx, data, gc, longest, thing);
      } else if (isArray(thing)) {
        for (j = 0, jlen = thing.length; j < jlen; j++) {
          nestedThing = thing[j];
          if (nestedThing !== void 0 && nestedThing !== null && !isArray(nestedThing)) {
            longest = _measureText(ctx, data, gc, longest, nestedThing);
          }
        }
      }
    }
    ctx.restore();
    const gcLen = gc.length / 2;
    if (gcLen > arrayOfThings.length) {
      for (i = 0; i < gcLen; i++) {
        delete data[gc[i]];
      }
      gc.splice(0, gcLen);
    }
    return longest;
  }
  function _alignPixel(chart2, pixel, width) {
    const devicePixelRatio = chart2.currentDevicePixelRatio;
    const halfWidth = width !== 0 ? Math.max(width / 2, 0.5) : 0;
    return Math.round((pixel - halfWidth) * devicePixelRatio) / devicePixelRatio + halfWidth;
  }
  function clearCanvas(canvas, ctx) {
    ctx = ctx || canvas.getContext("2d");
    ctx.save();
    ctx.resetTransform();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.restore();
  }
  function drawPoint(ctx, options, x, y) {
    let type, xOffset, yOffset, size, cornerRadius;
    const style = options.pointStyle;
    const rotation = options.rotation;
    const radius = options.radius;
    let rad = (rotation || 0) * RAD_PER_DEG;
    if (style && typeof style === "object") {
      type = style.toString();
      if (type === "[object HTMLImageElement]" || type === "[object HTMLCanvasElement]") {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(rad);
        ctx.drawImage(style, -style.width / 2, -style.height / 2, style.width, style.height);
        ctx.restore();
        return;
      }
    }
    if (isNaN(radius) || radius <= 0) {
      return;
    }
    ctx.beginPath();
    switch (style) {
      default:
        ctx.arc(x, y, radius, 0, TAU);
        ctx.closePath();
        break;
      case "triangle":
        ctx.moveTo(x + Math.sin(rad) * radius, y - Math.cos(rad) * radius);
        rad += TWO_THIRDS_PI;
        ctx.lineTo(x + Math.sin(rad) * radius, y - Math.cos(rad) * radius);
        rad += TWO_THIRDS_PI;
        ctx.lineTo(x + Math.sin(rad) * radius, y - Math.cos(rad) * radius);
        ctx.closePath();
        break;
      case "rectRounded":
        cornerRadius = radius * 0.516;
        size = radius - cornerRadius;
        xOffset = Math.cos(rad + QUARTER_PI) * size;
        yOffset = Math.sin(rad + QUARTER_PI) * size;
        ctx.arc(x - xOffset, y - yOffset, cornerRadius, rad - PI, rad - HALF_PI);
        ctx.arc(x + yOffset, y - xOffset, cornerRadius, rad - HALF_PI, rad);
        ctx.arc(x + xOffset, y + yOffset, cornerRadius, rad, rad + HALF_PI);
        ctx.arc(x - yOffset, y + xOffset, cornerRadius, rad + HALF_PI, rad + PI);
        ctx.closePath();
        break;
      case "rect":
        if (!rotation) {
          size = Math.SQRT1_2 * radius;
          ctx.rect(x - size, y - size, 2 * size, 2 * size);
          break;
        }
        rad += QUARTER_PI;
      case "rectRot":
        xOffset = Math.cos(rad) * radius;
        yOffset = Math.sin(rad) * radius;
        ctx.moveTo(x - xOffset, y - yOffset);
        ctx.lineTo(x + yOffset, y - xOffset);
        ctx.lineTo(x + xOffset, y + yOffset);
        ctx.lineTo(x - yOffset, y + xOffset);
        ctx.closePath();
        break;
      case "crossRot":
        rad += QUARTER_PI;
      case "cross":
        xOffset = Math.cos(rad) * radius;
        yOffset = Math.sin(rad) * radius;
        ctx.moveTo(x - xOffset, y - yOffset);
        ctx.lineTo(x + xOffset, y + yOffset);
        ctx.moveTo(x + yOffset, y - xOffset);
        ctx.lineTo(x - yOffset, y + xOffset);
        break;
      case "star":
        xOffset = Math.cos(rad) * radius;
        yOffset = Math.sin(rad) * radius;
        ctx.moveTo(x - xOffset, y - yOffset);
        ctx.lineTo(x + xOffset, y + yOffset);
        ctx.moveTo(x + yOffset, y - xOffset);
        ctx.lineTo(x - yOffset, y + xOffset);
        rad += QUARTER_PI;
        xOffset = Math.cos(rad) * radius;
        yOffset = Math.sin(rad) * radius;
        ctx.moveTo(x - xOffset, y - yOffset);
        ctx.lineTo(x + xOffset, y + yOffset);
        ctx.moveTo(x + yOffset, y - xOffset);
        ctx.lineTo(x - yOffset, y + xOffset);
        break;
      case "line":
        xOffset = Math.cos(rad) * radius;
        yOffset = Math.sin(rad) * radius;
        ctx.moveTo(x - xOffset, y - yOffset);
        ctx.lineTo(x + xOffset, y + yOffset);
        break;
      case "dash":
        ctx.moveTo(x, y);
        ctx.lineTo(x + Math.cos(rad) * radius, y + Math.sin(rad) * radius);
        break;
    }
    ctx.fill();
    if (options.borderWidth > 0) {
      ctx.stroke();
    }
  }
  function _isPointInArea(point, area, margin) {
    margin = margin || 0.5;
    return !area || point && point.x > area.left - margin && point.x < area.right + margin && point.y > area.top - margin && point.y < area.bottom + margin;
  }
  function clipArea(ctx, area) {
    ctx.save();
    ctx.beginPath();
    ctx.rect(area.left, area.top, area.right - area.left, area.bottom - area.top);
    ctx.clip();
  }
  function unclipArea(ctx) {
    ctx.restore();
  }
  function _steppedLineTo(ctx, previous, target, flip, mode) {
    if (!previous) {
      return ctx.lineTo(target.x, target.y);
    }
    if (mode === "middle") {
      const midpoint = (previous.x + target.x) / 2;
      ctx.lineTo(midpoint, previous.y);
      ctx.lineTo(midpoint, target.y);
    } else if (mode === "after" !== !!flip) {
      ctx.lineTo(previous.x, target.y);
    } else {
      ctx.lineTo(target.x, previous.y);
    }
    ctx.lineTo(target.x, target.y);
  }
  function _bezierCurveTo(ctx, previous, target, flip) {
    if (!previous) {
      return ctx.lineTo(target.x, target.y);
    }
    ctx.bezierCurveTo(flip ? previous.cp1x : previous.cp2x, flip ? previous.cp1y : previous.cp2y, flip ? target.cp2x : target.cp1x, flip ? target.cp2y : target.cp1y, target.x, target.y);
  }
  function renderText(ctx, text, x, y, font, opts = {}) {
    const lines = isArray(text) ? text : [text];
    const stroke = opts.strokeWidth > 0 && opts.strokeColor !== "";
    let i, line;
    ctx.save();
    ctx.font = font.string;
    setRenderOpts(ctx, opts);
    for (i = 0; i < lines.length; ++i) {
      line = lines[i];
      if (stroke) {
        if (opts.strokeColor) {
          ctx.strokeStyle = opts.strokeColor;
        }
        if (!isNullOrUndef(opts.strokeWidth)) {
          ctx.lineWidth = opts.strokeWidth;
        }
        ctx.strokeText(line, x, y, opts.maxWidth);
      }
      ctx.fillText(line, x, y, opts.maxWidth);
      decorateText(ctx, x, y, line, opts);
      y += font.lineHeight;
    }
    ctx.restore();
  }
  function setRenderOpts(ctx, opts) {
    if (opts.translation) {
      ctx.translate(opts.translation[0], opts.translation[1]);
    }
    if (!isNullOrUndef(opts.rotation)) {
      ctx.rotate(opts.rotation);
    }
    if (opts.color) {
      ctx.fillStyle = opts.color;
    }
    if (opts.textAlign) {
      ctx.textAlign = opts.textAlign;
    }
    if (opts.textBaseline) {
      ctx.textBaseline = opts.textBaseline;
    }
  }
  function decorateText(ctx, x, y, line, opts) {
    if (opts.strikethrough || opts.underline) {
      const metrics = ctx.measureText(line);
      const left = x - metrics.actualBoundingBoxLeft;
      const right = x + metrics.actualBoundingBoxRight;
      const top = y - metrics.actualBoundingBoxAscent;
      const bottom = y + metrics.actualBoundingBoxDescent;
      const yDecoration = opts.strikethrough ? (top + bottom) / 2 : bottom;
      ctx.strokeStyle = ctx.fillStyle;
      ctx.beginPath();
      ctx.lineWidth = opts.decorationWidth || 2;
      ctx.moveTo(left, yDecoration);
      ctx.lineTo(right, yDecoration);
      ctx.stroke();
    }
  }
  function addRoundedRectPath(ctx, rect) {
    const { x, y, w, h, radius } = rect;
    ctx.arc(x + radius.topLeft, y + radius.topLeft, radius.topLeft, -HALF_PI, PI, true);
    ctx.lineTo(x, y + h - radius.bottomLeft);
    ctx.arc(x + radius.bottomLeft, y + h - radius.bottomLeft, radius.bottomLeft, PI, HALF_PI, true);
    ctx.lineTo(x + w - radius.bottomRight, y + h);
    ctx.arc(x + w - radius.bottomRight, y + h - radius.bottomRight, radius.bottomRight, HALF_PI, 0, true);
    ctx.lineTo(x + w, y + radius.topRight);
    ctx.arc(x + w - radius.topRight, y + radius.topRight, radius.topRight, 0, -HALF_PI, true);
    ctx.lineTo(x + radius.topLeft, y);
  }
  var LINE_HEIGHT = new RegExp(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
  var FONT_STYLE = new RegExp(/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/);
  function toLineHeight(value, size) {
    const matches = ("" + value).match(LINE_HEIGHT);
    if (!matches || matches[1] === "normal") {
      return size * 1.2;
    }
    value = +matches[2];
    switch (matches[3]) {
      case "px":
        return value;
      case "%":
        value /= 100;
        break;
    }
    return size * value;
  }
  var numberOrZero = (v) => +v || 0;
  function _readValueToProps(value, props) {
    const ret = {};
    const objProps = isObject(props);
    const keys = objProps ? Object.keys(props) : props;
    const read = isObject(value) ? objProps ? (prop) => valueOrDefault(value[prop], value[props[prop]]) : (prop) => value[prop] : () => value;
    for (const prop of keys) {
      ret[prop] = numberOrZero(read(prop));
    }
    return ret;
  }
  function toTRBL(value) {
    return _readValueToProps(value, { top: "y", right: "x", bottom: "y", left: "x" });
  }
  function toTRBLCorners(value) {
    return _readValueToProps(value, ["topLeft", "topRight", "bottomLeft", "bottomRight"]);
  }
  function toPadding(value) {
    const obj = toTRBL(value);
    obj.width = obj.left + obj.right;
    obj.height = obj.top + obj.bottom;
    return obj;
  }
  function toFont(options, fallback) {
    options = options || {};
    fallback = fallback || defaults.font;
    let size = valueOrDefault(options.size, fallback.size);
    if (typeof size === "string") {
      size = parseInt(size, 10);
    }
    let style = valueOrDefault(options.style, fallback.style);
    if (style && !("" + style).match(FONT_STYLE)) {
      console.warn('Invalid font style specified: "' + style + '"');
      style = "";
    }
    const font = {
      family: valueOrDefault(options.family, fallback.family),
      lineHeight: toLineHeight(valueOrDefault(options.lineHeight, fallback.lineHeight), size),
      size,
      style,
      weight: valueOrDefault(options.weight, fallback.weight),
      string: ""
    };
    font.string = toFontString(font);
    return font;
  }
  function resolve(inputs, context, index, info) {
    let cacheable = true;
    let i, ilen, value;
    for (i = 0, ilen = inputs.length; i < ilen; ++i) {
      value = inputs[i];
      if (value === void 0) {
        continue;
      }
      if (context !== void 0 && typeof value === "function") {
        value = value(context);
        cacheable = false;
      }
      if (index !== void 0 && isArray(value)) {
        value = value[index % value.length];
        cacheable = false;
      }
      if (value !== void 0) {
        if (info && !cacheable) {
          info.cacheable = false;
        }
        return value;
      }
    }
  }
  function _addGrace(minmax, grace, beginAtZero) {
    const { min, max } = minmax;
    const change = toDimension(grace, (max - min) / 2);
    const keepZero = (value, add) => beginAtZero && value === 0 ? 0 : value + add;
    return {
      min: keepZero(min, -Math.abs(change)),
      max: keepZero(max, change)
    };
  }
  function createContext(parentContext, context) {
    return Object.assign(Object.create(parentContext), context);
  }
  function _lookup(table, value, cmp) {
    cmp = cmp || ((index) => table[index] < value);
    let hi = table.length - 1;
    let lo = 0;
    let mid;
    while (hi - lo > 1) {
      mid = lo + hi >> 1;
      if (cmp(mid)) {
        lo = mid;
      } else {
        hi = mid;
      }
    }
    return { lo, hi };
  }
  var _lookupByKey = (table, key, value) => _lookup(table, value, (index) => table[index][key] < value);
  var _rlookupByKey = (table, key, value) => _lookup(table, value, (index) => table[index][key] >= value);
  function _filterBetween(values, min, max) {
    let start = 0;
    let end = values.length;
    while (start < end && values[start] < min) {
      start++;
    }
    while (end > start && values[end - 1] > max) {
      end--;
    }
    return start > 0 || end < values.length ? values.slice(start, end) : values;
  }
  var arrayEvents = ["push", "pop", "shift", "splice", "unshift"];
  function listenArrayEvents(array, listener) {
    if (array._chartjs) {
      array._chartjs.listeners.push(listener);
      return;
    }
    Object.defineProperty(array, "_chartjs", {
      configurable: true,
      enumerable: false,
      value: {
        listeners: [listener]
      }
    });
    arrayEvents.forEach((key) => {
      const method = "_onData" + _capitalize(key);
      const base = array[key];
      Object.defineProperty(array, key, {
        configurable: true,
        enumerable: false,
        value(...args) {
          const res = base.apply(this, args);
          array._chartjs.listeners.forEach((object) => {
            if (typeof object[method] === "function") {
              object[method](...args);
            }
          });
          return res;
        }
      });
    });
  }
  function unlistenArrayEvents(array, listener) {
    const stub = array._chartjs;
    if (!stub) {
      return;
    }
    const listeners = stub.listeners;
    const index = listeners.indexOf(listener);
    if (index !== -1) {
      listeners.splice(index, 1);
    }
    if (listeners.length > 0) {
      return;
    }
    arrayEvents.forEach((key) => {
      delete array[key];
    });
    delete array._chartjs;
  }
  function _arrayUnique(items) {
    const set2 = /* @__PURE__ */ new Set();
    let i, ilen;
    for (i = 0, ilen = items.length; i < ilen; ++i) {
      set2.add(items[i]);
    }
    if (set2.size === ilen) {
      return items;
    }
    return Array.from(set2);
  }
  function _createResolver(scopes, prefixes = [""], rootScopes = scopes, fallback, getTarget2 = () => scopes[0]) {
    if (!defined(fallback)) {
      fallback = _resolve("_fallback", scopes);
    }
    const cache = {
      [Symbol.toStringTag]: "Object",
      _cacheable: true,
      _scopes: scopes,
      _rootScopes: rootScopes,
      _fallback: fallback,
      _getTarget: getTarget2,
      override: (scope) => _createResolver([scope, ...scopes], prefixes, rootScopes, fallback)
    };
    return new Proxy(cache, {
      deleteProperty(target, prop) {
        delete target[prop];
        delete target._keys;
        delete scopes[0][prop];
        return true;
      },
      get(target, prop) {
        return _cached(target, prop, () => _resolveWithPrefixes(prop, prefixes, scopes, target));
      },
      getOwnPropertyDescriptor(target, prop) {
        return Reflect.getOwnPropertyDescriptor(target._scopes[0], prop);
      },
      getPrototypeOf() {
        return Reflect.getPrototypeOf(scopes[0]);
      },
      has(target, prop) {
        return getKeysFromAllScopes(target).includes(prop);
      },
      ownKeys(target) {
        return getKeysFromAllScopes(target);
      },
      set(target, prop, value) {
        const storage = target._storage || (target._storage = getTarget2());
        target[prop] = storage[prop] = value;
        delete target._keys;
        return true;
      }
    });
  }
  function _attachContext(proxy, context, subProxy, descriptorDefaults) {
    const cache = {
      _cacheable: false,
      _proxy: proxy,
      _context: context,
      _subProxy: subProxy,
      _stack: /* @__PURE__ */ new Set(),
      _descriptors: _descriptors(proxy, descriptorDefaults),
      setContext: (ctx) => _attachContext(proxy, ctx, subProxy, descriptorDefaults),
      override: (scope) => _attachContext(proxy.override(scope), context, subProxy, descriptorDefaults)
    };
    return new Proxy(cache, {
      deleteProperty(target, prop) {
        delete target[prop];
        delete proxy[prop];
        return true;
      },
      get(target, prop, receiver) {
        return _cached(target, prop, () => _resolveWithContext(target, prop, receiver));
      },
      getOwnPropertyDescriptor(target, prop) {
        return target._descriptors.allKeys ? Reflect.has(proxy, prop) ? { enumerable: true, configurable: true } : void 0 : Reflect.getOwnPropertyDescriptor(proxy, prop);
      },
      getPrototypeOf() {
        return Reflect.getPrototypeOf(proxy);
      },
      has(target, prop) {
        return Reflect.has(proxy, prop);
      },
      ownKeys() {
        return Reflect.ownKeys(proxy);
      },
      set(target, prop, value) {
        proxy[prop] = value;
        delete target[prop];
        return true;
      }
    });
  }
  function _descriptors(proxy, defaults2 = { scriptable: true, indexable: true }) {
    const { _scriptable = defaults2.scriptable, _indexable = defaults2.indexable, _allKeys = defaults2.allKeys } = proxy;
    return {
      allKeys: _allKeys,
      scriptable: _scriptable,
      indexable: _indexable,
      isScriptable: isFunction(_scriptable) ? _scriptable : () => _scriptable,
      isIndexable: isFunction(_indexable) ? _indexable : () => _indexable
    };
  }
  var readKey = (prefix, name) => prefix ? prefix + _capitalize(name) : name;
  var needsSubResolver = (prop, value) => isObject(value) && prop !== "adapters" && (Object.getPrototypeOf(value) === null || value.constructor === Object);
  function _cached(target, prop, resolve2) {
    if (Object.prototype.hasOwnProperty.call(target, prop)) {
      return target[prop];
    }
    const value = resolve2();
    target[prop] = value;
    return value;
  }
  function _resolveWithContext(target, prop, receiver) {
    const { _proxy, _context, _subProxy, _descriptors: descriptors2 } = target;
    let value = _proxy[prop];
    if (isFunction(value) && descriptors2.isScriptable(prop)) {
      value = _resolveScriptable(prop, value, target, receiver);
    }
    if (isArray(value) && value.length) {
      value = _resolveArray(prop, value, target, descriptors2.isIndexable);
    }
    if (needsSubResolver(prop, value)) {
      value = _attachContext(value, _context, _subProxy && _subProxy[prop], descriptors2);
    }
    return value;
  }
  function _resolveScriptable(prop, value, target, receiver) {
    const { _proxy, _context, _subProxy, _stack } = target;
    if (_stack.has(prop)) {
      throw new Error("Recursion detected: " + Array.from(_stack).join("->") + "->" + prop);
    }
    _stack.add(prop);
    value = value(_context, _subProxy || receiver);
    _stack.delete(prop);
    if (needsSubResolver(prop, value)) {
      value = createSubResolver(_proxy._scopes, _proxy, prop, value);
    }
    return value;
  }
  function _resolveArray(prop, value, target, isIndexable) {
    const { _proxy, _context, _subProxy, _descriptors: descriptors2 } = target;
    if (defined(_context.index) && isIndexable(prop)) {
      value = value[_context.index % value.length];
    } else if (isObject(value[0])) {
      const arr = value;
      const scopes = _proxy._scopes.filter((s) => s !== arr);
      value = [];
      for (const item of arr) {
        const resolver = createSubResolver(scopes, _proxy, prop, item);
        value.push(_attachContext(resolver, _context, _subProxy && _subProxy[prop], descriptors2));
      }
    }
    return value;
  }
  function resolveFallback(fallback, prop, value) {
    return isFunction(fallback) ? fallback(prop, value) : fallback;
  }
  var getScope = (key, parent) => key === true ? parent : typeof key === "string" ? resolveObjectKey(parent, key) : void 0;
  function addScopes(set2, parentScopes, key, parentFallback, value) {
    for (const parent of parentScopes) {
      const scope = getScope(key, parent);
      if (scope) {
        set2.add(scope);
        const fallback = resolveFallback(scope._fallback, key, value);
        if (defined(fallback) && fallback !== key && fallback !== parentFallback) {
          return fallback;
        }
      } else if (scope === false && defined(parentFallback) && key !== parentFallback) {
        return null;
      }
    }
    return false;
  }
  function createSubResolver(parentScopes, resolver, prop, value) {
    const rootScopes = resolver._rootScopes;
    const fallback = resolveFallback(resolver._fallback, prop, value);
    const allScopes = [...parentScopes, ...rootScopes];
    const set2 = /* @__PURE__ */ new Set();
    set2.add(value);
    let key = addScopesFromKey(set2, allScopes, prop, fallback || prop, value);
    if (key === null) {
      return false;
    }
    if (defined(fallback) && fallback !== prop) {
      key = addScopesFromKey(set2, allScopes, fallback, key, value);
      if (key === null) {
        return false;
      }
    }
    return _createResolver(Array.from(set2), [""], rootScopes, fallback, () => subGetTarget(resolver, prop, value));
  }
  function addScopesFromKey(set2, allScopes, key, fallback, item) {
    while (key) {
      key = addScopes(set2, allScopes, key, fallback, item);
    }
    return key;
  }
  function subGetTarget(resolver, prop, value) {
    const parent = resolver._getTarget();
    if (!(prop in parent)) {
      parent[prop] = {};
    }
    const target = parent[prop];
    if (isArray(target) && isObject(value)) {
      return value;
    }
    return target;
  }
  function _resolveWithPrefixes(prop, prefixes, scopes, proxy) {
    let value;
    for (const prefix of prefixes) {
      value = _resolve(readKey(prefix, prop), scopes);
      if (defined(value)) {
        return needsSubResolver(prop, value) ? createSubResolver(scopes, proxy, prop, value) : value;
      }
    }
  }
  function _resolve(key, scopes) {
    for (const scope of scopes) {
      if (!scope) {
        continue;
      }
      const value = scope[key];
      if (defined(value)) {
        return value;
      }
    }
  }
  function getKeysFromAllScopes(target) {
    let keys = target._keys;
    if (!keys) {
      keys = target._keys = resolveKeysFromAllScopes(target._scopes);
    }
    return keys;
  }
  function resolveKeysFromAllScopes(scopes) {
    const set2 = /* @__PURE__ */ new Set();
    for (const scope of scopes) {
      for (const key of Object.keys(scope).filter((k) => !k.startsWith("_"))) {
        set2.add(key);
      }
    }
    return Array.from(set2);
  }
  var EPSILON = Number.EPSILON || 1e-14;
  var getPoint = (points, i) => i < points.length && !points[i].skip && points[i];
  var getValueAxis = (indexAxis) => indexAxis === "x" ? "y" : "x";
  function splineCurve(firstPoint, middlePoint, afterPoint, t) {
    const previous = firstPoint.skip ? middlePoint : firstPoint;
    const current = middlePoint;
    const next = afterPoint.skip ? middlePoint : afterPoint;
    const d01 = distanceBetweenPoints(current, previous);
    const d12 = distanceBetweenPoints(next, current);
    let s01 = d01 / (d01 + d12);
    let s12 = d12 / (d01 + d12);
    s01 = isNaN(s01) ? 0 : s01;
    s12 = isNaN(s12) ? 0 : s12;
    const fa = t * s01;
    const fb = t * s12;
    return {
      previous: {
        x: current.x - fa * (next.x - previous.x),
        y: current.y - fa * (next.y - previous.y)
      },
      next: {
        x: current.x + fb * (next.x - previous.x),
        y: current.y + fb * (next.y - previous.y)
      }
    };
  }
  function monotoneAdjust(points, deltaK, mK) {
    const pointsLen = points.length;
    let alphaK, betaK, tauK, squaredMagnitude, pointCurrent;
    let pointAfter = getPoint(points, 0);
    for (let i = 0; i < pointsLen - 1; ++i) {
      pointCurrent = pointAfter;
      pointAfter = getPoint(points, i + 1);
      if (!pointCurrent || !pointAfter) {
        continue;
      }
      if (almostEquals(deltaK[i], 0, EPSILON)) {
        mK[i] = mK[i + 1] = 0;
        continue;
      }
      alphaK = mK[i] / deltaK[i];
      betaK = mK[i + 1] / deltaK[i];
      squaredMagnitude = Math.pow(alphaK, 2) + Math.pow(betaK, 2);
      if (squaredMagnitude <= 9) {
        continue;
      }
      tauK = 3 / Math.sqrt(squaredMagnitude);
      mK[i] = alphaK * tauK * deltaK[i];
      mK[i + 1] = betaK * tauK * deltaK[i];
    }
  }
  function monotoneCompute(points, mK, indexAxis = "x") {
    const valueAxis = getValueAxis(indexAxis);
    const pointsLen = points.length;
    let delta, pointBefore, pointCurrent;
    let pointAfter = getPoint(points, 0);
    for (let i = 0; i < pointsLen; ++i) {
      pointBefore = pointCurrent;
      pointCurrent = pointAfter;
      pointAfter = getPoint(points, i + 1);
      if (!pointCurrent) {
        continue;
      }
      const iPixel = pointCurrent[indexAxis];
      const vPixel = pointCurrent[valueAxis];
      if (pointBefore) {
        delta = (iPixel - pointBefore[indexAxis]) / 3;
        pointCurrent[`cp1${indexAxis}`] = iPixel - delta;
        pointCurrent[`cp1${valueAxis}`] = vPixel - delta * mK[i];
      }
      if (pointAfter) {
        delta = (pointAfter[indexAxis] - iPixel) / 3;
        pointCurrent[`cp2${indexAxis}`] = iPixel + delta;
        pointCurrent[`cp2${valueAxis}`] = vPixel + delta * mK[i];
      }
    }
  }
  function splineCurveMonotone(points, indexAxis = "x") {
    const valueAxis = getValueAxis(indexAxis);
    const pointsLen = points.length;
    const deltaK = Array(pointsLen).fill(0);
    const mK = Array(pointsLen);
    let i, pointBefore, pointCurrent;
    let pointAfter = getPoint(points, 0);
    for (i = 0; i < pointsLen; ++i) {
      pointBefore = pointCurrent;
      pointCurrent = pointAfter;
      pointAfter = getPoint(points, i + 1);
      if (!pointCurrent) {
        continue;
      }
      if (pointAfter) {
        const slopeDelta = pointAfter[indexAxis] - pointCurrent[indexAxis];
        deltaK[i] = slopeDelta !== 0 ? (pointAfter[valueAxis] - pointCurrent[valueAxis]) / slopeDelta : 0;
      }
      mK[i] = !pointBefore ? deltaK[i] : !pointAfter ? deltaK[i - 1] : sign(deltaK[i - 1]) !== sign(deltaK[i]) ? 0 : (deltaK[i - 1] + deltaK[i]) / 2;
    }
    monotoneAdjust(points, deltaK, mK);
    monotoneCompute(points, mK, indexAxis);
  }
  function capControlPoint(pt, min, max) {
    return Math.max(Math.min(pt, max), min);
  }
  function capBezierPoints(points, area) {
    let i, ilen, point, inArea, inAreaPrev;
    let inAreaNext = _isPointInArea(points[0], area);
    for (i = 0, ilen = points.length; i < ilen; ++i) {
      inAreaPrev = inArea;
      inArea = inAreaNext;
      inAreaNext = i < ilen - 1 && _isPointInArea(points[i + 1], area);
      if (!inArea) {
        continue;
      }
      point = points[i];
      if (inAreaPrev) {
        point.cp1x = capControlPoint(point.cp1x, area.left, area.right);
        point.cp1y = capControlPoint(point.cp1y, area.top, area.bottom);
      }
      if (inAreaNext) {
        point.cp2x = capControlPoint(point.cp2x, area.left, area.right);
        point.cp2y = capControlPoint(point.cp2y, area.top, area.bottom);
      }
    }
  }
  function _updateBezierControlPoints(points, options, area, loop, indexAxis) {
    let i, ilen, point, controlPoints;
    if (options.spanGaps) {
      points = points.filter((pt) => !pt.skip);
    }
    if (options.cubicInterpolationMode === "monotone") {
      splineCurveMonotone(points, indexAxis);
    } else {
      let prev = loop ? points[points.length - 1] : points[0];
      for (i = 0, ilen = points.length; i < ilen; ++i) {
        point = points[i];
        controlPoints = splineCurve(prev, point, points[Math.min(i + 1, ilen - (loop ? 0 : 1)) % ilen], options.tension);
        point.cp1x = controlPoints.previous.x;
        point.cp1y = controlPoints.previous.y;
        point.cp2x = controlPoints.next.x;
        point.cp2y = controlPoints.next.y;
        prev = point;
      }
    }
    if (options.capBezierPoints) {
      capBezierPoints(points, area);
    }
  }
  function _isDomSupported() {
    return typeof window !== "undefined" && typeof document !== "undefined";
  }
  function _getParentNode(domNode) {
    let parent = domNode.parentNode;
    if (parent && parent.toString() === "[object ShadowRoot]") {
      parent = parent.host;
    }
    return parent;
  }
  function parseMaxStyle(styleValue, node, parentProperty) {
    let valueInPixels;
    if (typeof styleValue === "string") {
      valueInPixels = parseInt(styleValue, 10);
      if (styleValue.indexOf("%") !== -1) {
        valueInPixels = valueInPixels / 100 * node.parentNode[parentProperty];
      }
    } else {
      valueInPixels = styleValue;
    }
    return valueInPixels;
  }
  var getComputedStyle = (element) => window.getComputedStyle(element, null);
  function getStyle(el, property) {
    return getComputedStyle(el).getPropertyValue(property);
  }
  var positions = ["top", "right", "bottom", "left"];
  function getPositionedStyle(styles, style, suffix) {
    const result = {};
    suffix = suffix ? "-" + suffix : "";
    for (let i = 0; i < 4; i++) {
      const pos = positions[i];
      result[pos] = parseFloat(styles[style + "-" + pos + suffix]) || 0;
    }
    result.width = result.left + result.right;
    result.height = result.top + result.bottom;
    return result;
  }
  var useOffsetPos = (x, y, target) => (x > 0 || y > 0) && (!target || !target.shadowRoot);
  function getCanvasPosition(evt, canvas) {
    const e = evt.native || evt;
    const touches = e.touches;
    const source = touches && touches.length ? touches[0] : e;
    const { offsetX, offsetY } = source;
    let box = false;
    let x, y;
    if (useOffsetPos(offsetX, offsetY, e.target)) {
      x = offsetX;
      y = offsetY;
    } else {
      const rect = canvas.getBoundingClientRect();
      x = source.clientX - rect.left;
      y = source.clientY - rect.top;
      box = true;
    }
    return { x, y, box };
  }
  function getRelativePosition(evt, chart2) {
    const { canvas, currentDevicePixelRatio } = chart2;
    const style = getComputedStyle(canvas);
    const borderBox = style.boxSizing === "border-box";
    const paddings = getPositionedStyle(style, "padding");
    const borders = getPositionedStyle(style, "border", "width");
    const { x, y, box } = getCanvasPosition(evt, canvas);
    const xOffset = paddings.left + (box && borders.left);
    const yOffset = paddings.top + (box && borders.top);
    let { width, height } = chart2;
    if (borderBox) {
      width -= paddings.width + borders.width;
      height -= paddings.height + borders.height;
    }
    return {
      x: Math.round((x - xOffset) / width * canvas.width / currentDevicePixelRatio),
      y: Math.round((y - yOffset) / height * canvas.height / currentDevicePixelRatio)
    };
  }
  function getContainerSize(canvas, width, height) {
    let maxWidth, maxHeight;
    if (width === void 0 || height === void 0) {
      const container = _getParentNode(canvas);
      if (!container) {
        width = canvas.clientWidth;
        height = canvas.clientHeight;
      } else {
        const rect = container.getBoundingClientRect();
        const containerStyle = getComputedStyle(container);
        const containerBorder = getPositionedStyle(containerStyle, "border", "width");
        const containerPadding = getPositionedStyle(containerStyle, "padding");
        width = rect.width - containerPadding.width - containerBorder.width;
        height = rect.height - containerPadding.height - containerBorder.height;
        maxWidth = parseMaxStyle(containerStyle.maxWidth, container, "clientWidth");
        maxHeight = parseMaxStyle(containerStyle.maxHeight, container, "clientHeight");
      }
    }
    return {
      width,
      height,
      maxWidth: maxWidth || INFINITY,
      maxHeight: maxHeight || INFINITY
    };
  }
  var round1 = (v) => Math.round(v * 10) / 10;
  function getMaximumSize(canvas, bbWidth, bbHeight, aspectRatio) {
    const style = getComputedStyle(canvas);
    const margins = getPositionedStyle(style, "margin");
    const maxWidth = parseMaxStyle(style.maxWidth, canvas, "clientWidth") || INFINITY;
    const maxHeight = parseMaxStyle(style.maxHeight, canvas, "clientHeight") || INFINITY;
    const containerSize = getContainerSize(canvas, bbWidth, bbHeight);
    let { width, height } = containerSize;
    if (style.boxSizing === "content-box") {
      const borders = getPositionedStyle(style, "border", "width");
      const paddings = getPositionedStyle(style, "padding");
      width -= paddings.width + borders.width;
      height -= paddings.height + borders.height;
    }
    width = Math.max(0, width - margins.width);
    height = Math.max(0, aspectRatio ? Math.floor(width / aspectRatio) : height - margins.height);
    width = round1(Math.min(width, maxWidth, containerSize.maxWidth));
    height = round1(Math.min(height, maxHeight, containerSize.maxHeight));
    if (width && !height) {
      height = round1(width / 2);
    }
    return {
      width,
      height
    };
  }
  function retinaScale(chart2, forceRatio, forceStyle) {
    const pixelRatio = forceRatio || 1;
    const deviceHeight = Math.floor(chart2.height * pixelRatio);
    const deviceWidth = Math.floor(chart2.width * pixelRatio);
    chart2.height = deviceHeight / pixelRatio;
    chart2.width = deviceWidth / pixelRatio;
    const canvas = chart2.canvas;
    if (canvas.style && (forceStyle || !canvas.style.height && !canvas.style.width)) {
      canvas.style.height = `${chart2.height}px`;
      canvas.style.width = `${chart2.width}px`;
    }
    if (chart2.currentDevicePixelRatio !== pixelRatio || canvas.height !== deviceHeight || canvas.width !== deviceWidth) {
      chart2.currentDevicePixelRatio = pixelRatio;
      canvas.height = deviceHeight;
      canvas.width = deviceWidth;
      chart2.ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      return true;
    }
    return false;
  }
  var supportsEventListenerOptions = function() {
    let passiveSupported = false;
    try {
      const options = {
        get passive() {
          passiveSupported = true;
          return false;
        }
      };
      window.addEventListener("test", null, options);
      window.removeEventListener("test", null, options);
    } catch (e) {
    }
    return passiveSupported;
  }();
  function readUsedSize(element, property) {
    const value = getStyle(element, property);
    const matches = value && value.match(/^(\d+)(\.\d+)?px$/);
    return matches ? +matches[1] : void 0;
  }
  function _pointInLine(p1, p2, t, mode) {
    return {
      x: p1.x + t * (p2.x - p1.x),
      y: p1.y + t * (p2.y - p1.y)
    };
  }
  function _steppedInterpolation(p1, p2, t, mode) {
    return {
      x: p1.x + t * (p2.x - p1.x),
      y: mode === "middle" ? t < 0.5 ? p1.y : p2.y : mode === "after" ? t < 1 ? p1.y : p2.y : t > 0 ? p2.y : p1.y
    };
  }
  function _bezierInterpolation(p1, p2, t, mode) {
    const cp1 = { x: p1.cp2x, y: p1.cp2y };
    const cp2 = { x: p2.cp1x, y: p2.cp1y };
    const a = _pointInLine(p1, cp1, t);
    const b = _pointInLine(cp1, cp2, t);
    const c = _pointInLine(cp2, p2, t);
    const d = _pointInLine(a, b, t);
    const e = _pointInLine(b, c, t);
    return _pointInLine(d, e, t);
  }
  var intlCache = /* @__PURE__ */ new Map();
  function getNumberFormat(locale, options) {
    options = options || {};
    const cacheKey = locale + JSON.stringify(options);
    let formatter = intlCache.get(cacheKey);
    if (!formatter) {
      formatter = new Intl.NumberFormat(locale, options);
      intlCache.set(cacheKey, formatter);
    }
    return formatter;
  }
  function formatNumber(num, locale, options) {
    return getNumberFormat(locale, options).format(num);
  }
  var getRightToLeftAdapter = function(rectX, width) {
    return {
      x(x) {
        return rectX + rectX + width - x;
      },
      setWidth(w) {
        width = w;
      },
      textAlign(align) {
        if (align === "center") {
          return align;
        }
        return align === "right" ? "left" : "right";
      },
      xPlus(x, value) {
        return x - value;
      },
      leftForLtr(x, itemWidth) {
        return x - itemWidth;
      }
    };
  };
  var getLeftToRightAdapter = function() {
    return {
      x(x) {
        return x;
      },
      setWidth(w) {
      },
      textAlign(align) {
        return align;
      },
      xPlus(x, value) {
        return x + value;
      },
      leftForLtr(x, _itemWidth) {
        return x;
      }
    };
  };
  function getRtlAdapter(rtl, rectX, width) {
    return rtl ? getRightToLeftAdapter(rectX, width) : getLeftToRightAdapter();
  }
  function overrideTextDirection(ctx, direction) {
    let style, original;
    if (direction === "ltr" || direction === "rtl") {
      style = ctx.canvas.style;
      original = [
        style.getPropertyValue("direction"),
        style.getPropertyPriority("direction")
      ];
      style.setProperty("direction", direction, "important");
      ctx.prevTextDirection = original;
    }
  }
  function restoreTextDirection(ctx, original) {
    if (original !== void 0) {
      delete ctx.prevTextDirection;
      ctx.canvas.style.setProperty("direction", original[0], original[1]);
    }
  }
  function propertyFn(property) {
    if (property === "angle") {
      return {
        between: _angleBetween,
        compare: _angleDiff,
        normalize: _normalizeAngle
      };
    }
    return {
      between: _isBetween,
      compare: (a, b) => a - b,
      normalize: (x) => x
    };
  }
  function normalizeSegment({ start, end, count, loop, style }) {
    return {
      start: start % count,
      end: end % count,
      loop: loop && (end - start + 1) % count === 0,
      style
    };
  }
  function getSegment(segment, points, bounds) {
    const { property, start: startBound, end: endBound } = bounds;
    const { between, normalize } = propertyFn(property);
    const count = points.length;
    let { start, end, loop } = segment;
    let i, ilen;
    if (loop) {
      start += count;
      end += count;
      for (i = 0, ilen = count; i < ilen; ++i) {
        if (!between(normalize(points[start % count][property]), startBound, endBound)) {
          break;
        }
        start--;
        end--;
      }
      start %= count;
      end %= count;
    }
    if (end < start) {
      end += count;
    }
    return { start, end, loop, style: segment.style };
  }
  function _boundSegment(segment, points, bounds) {
    if (!bounds) {
      return [segment];
    }
    const { property, start: startBound, end: endBound } = bounds;
    const count = points.length;
    const { compare, between, normalize } = propertyFn(property);
    const { start, end, loop, style } = getSegment(segment, points, bounds);
    const result = [];
    let inside = false;
    let subStart = null;
    let value, point, prevValue;
    const startIsBefore = () => between(startBound, prevValue, value) && compare(startBound, prevValue) !== 0;
    const endIsBefore = () => compare(endBound, value) === 0 || between(endBound, prevValue, value);
    const shouldStart = () => inside || startIsBefore();
    const shouldStop = () => !inside || endIsBefore();
    for (let i = start, prev = start; i <= end; ++i) {
      point = points[i % count];
      if (point.skip) {
        continue;
      }
      value = normalize(point[property]);
      if (value === prevValue) {
        continue;
      }
      inside = between(value, startBound, endBound);
      if (subStart === null && shouldStart()) {
        subStart = compare(value, startBound) === 0 ? i : prev;
      }
      if (subStart !== null && shouldStop()) {
        result.push(normalizeSegment({ start: subStart, end: i, loop, count, style }));
        subStart = null;
      }
      prev = i;
      prevValue = value;
    }
    if (subStart !== null) {
      result.push(normalizeSegment({ start: subStart, end, loop, count, style }));
    }
    return result;
  }
  function _boundSegments(line, bounds) {
    const result = [];
    const segments = line.segments;
    for (let i = 0; i < segments.length; i++) {
      const sub = _boundSegment(segments[i], line.points, bounds);
      if (sub.length) {
        result.push(...sub);
      }
    }
    return result;
  }
  function findStartAndEnd(points, count, loop, spanGaps) {
    let start = 0;
    let end = count - 1;
    if (loop && !spanGaps) {
      while (start < count && !points[start].skip) {
        start++;
      }
    }
    while (start < count && points[start].skip) {
      start++;
    }
    start %= count;
    if (loop) {
      end += start;
    }
    while (end > start && points[end % count].skip) {
      end--;
    }
    end %= count;
    return { start, end };
  }
  function solidSegments(points, start, max, loop) {
    const count = points.length;
    const result = [];
    let last = start;
    let prev = points[start];
    let end;
    for (end = start + 1; end <= max; ++end) {
      const cur = points[end % count];
      if (cur.skip || cur.stop) {
        if (!prev.skip) {
          loop = false;
          result.push({ start: start % count, end: (end - 1) % count, loop });
          start = last = cur.stop ? end : null;
        }
      } else {
        last = end;
        if (prev.skip) {
          start = end;
        }
      }
      prev = cur;
    }
    if (last !== null) {
      result.push({ start: start % count, end: last % count, loop });
    }
    return result;
  }
  function _computeSegments(line, segmentOptions) {
    const points = line.points;
    const spanGaps = line.options.spanGaps;
    const count = points.length;
    if (!count) {
      return [];
    }
    const loop = !!line._loop;
    const { start, end } = findStartAndEnd(points, count, loop, spanGaps);
    if (spanGaps === true) {
      return splitByStyles(line, [{ start, end, loop }], points, segmentOptions);
    }
    const max = end < start ? end + count : end;
    const completeLoop = !!line._fullLoop && start === 0 && end === count - 1;
    return splitByStyles(line, solidSegments(points, start, max, completeLoop), points, segmentOptions);
  }
  function splitByStyles(line, segments, points, segmentOptions) {
    if (!segmentOptions || !segmentOptions.setContext || !points) {
      return segments;
    }
    return doSplitByStyles(line, segments, points, segmentOptions);
  }
  function doSplitByStyles(line, segments, points, segmentOptions) {
    const chartContext = line._chart.getContext();
    const baseStyle = readStyle(line.options);
    const { _datasetIndex: datasetIndex, options: { spanGaps } } = line;
    const count = points.length;
    const result = [];
    let prevStyle = baseStyle;
    let start = segments[0].start;
    let i = start;
    function addStyle(s, e, l, st) {
      const dir = spanGaps ? -1 : 1;
      if (s === e) {
        return;
      }
      s += count;
      while (points[s % count].skip) {
        s -= dir;
      }
      while (points[e % count].skip) {
        e += dir;
      }
      if (s % count !== e % count) {
        result.push({ start: s % count, end: e % count, loop: l, style: st });
        prevStyle = st;
        start = e % count;
      }
    }
    for (const segment of segments) {
      start = spanGaps ? start : segment.start;
      let prev = points[start % count];
      let style;
      for (i = start + 1; i <= segment.end; i++) {
        const pt = points[i % count];
        style = readStyle(segmentOptions.setContext(createContext(chartContext, {
          type: "segment",
          p0: prev,
          p1: pt,
          p0DataIndex: (i - 1) % count,
          p1DataIndex: i % count,
          datasetIndex
        })));
        if (styleChanged(style, prevStyle)) {
          addStyle(start, i - 1, segment.loop, prevStyle);
        }
        prev = pt;
        prevStyle = style;
      }
      if (start < i - 1) {
        addStyle(start, i - 1, segment.loop, prevStyle);
      }
    }
    return result;
  }
  function readStyle(options) {
    return {
      backgroundColor: options.backgroundColor,
      borderCapStyle: options.borderCapStyle,
      borderDash: options.borderDash,
      borderDashOffset: options.borderDashOffset,
      borderJoinStyle: options.borderJoinStyle,
      borderWidth: options.borderWidth,
      borderColor: options.borderColor
    };
  }
  function styleChanged(style, prevStyle) {
    return prevStyle && JSON.stringify(style) !== JSON.stringify(prevStyle);
  }

  // node_modules/chart.js/dist/chart.esm.js
  var Animator = class {
    constructor() {
      this._request = null;
      this._charts = /* @__PURE__ */ new Map();
      this._running = false;
      this._lastDate = void 0;
    }
    _notify(chart2, anims, date, type) {
      const callbacks = anims.listeners[type];
      const numSteps = anims.duration;
      callbacks.forEach((fn) => fn({
        chart: chart2,
        initial: anims.initial,
        numSteps,
        currentStep: Math.min(date - anims.start, numSteps)
      }));
    }
    _refresh() {
      if (this._request) {
        return;
      }
      this._running = true;
      this._request = requestAnimFrame.call(window, () => {
        this._update();
        this._request = null;
        if (this._running) {
          this._refresh();
        }
      });
    }
    _update(date = Date.now()) {
      let remaining = 0;
      this._charts.forEach((anims, chart2) => {
        if (!anims.running || !anims.items.length) {
          return;
        }
        const items = anims.items;
        let i = items.length - 1;
        let draw2 = false;
        let item;
        for (; i >= 0; --i) {
          item = items[i];
          if (item._active) {
            if (item._total > anims.duration) {
              anims.duration = item._total;
            }
            item.tick(date);
            draw2 = true;
          } else {
            items[i] = items[items.length - 1];
            items.pop();
          }
        }
        if (draw2) {
          chart2.draw();
          this._notify(chart2, anims, date, "progress");
        }
        if (!items.length) {
          anims.running = false;
          this._notify(chart2, anims, date, "complete");
          anims.initial = false;
        }
        remaining += items.length;
      });
      this._lastDate = date;
      if (remaining === 0) {
        this._running = false;
      }
    }
    _getAnims(chart2) {
      const charts = this._charts;
      let anims = charts.get(chart2);
      if (!anims) {
        anims = {
          running: false,
          initial: true,
          items: [],
          listeners: {
            complete: [],
            progress: []
          }
        };
        charts.set(chart2, anims);
      }
      return anims;
    }
    listen(chart2, event, cb) {
      this._getAnims(chart2).listeners[event].push(cb);
    }
    add(chart2, items) {
      if (!items || !items.length) {
        return;
      }
      this._getAnims(chart2).items.push(...items);
    }
    has(chart2) {
      return this._getAnims(chart2).items.length > 0;
    }
    start(chart2) {
      const anims = this._charts.get(chart2);
      if (!anims) {
        return;
      }
      anims.running = true;
      anims.start = Date.now();
      anims.duration = anims.items.reduce((acc, cur) => Math.max(acc, cur._duration), 0);
      this._refresh();
    }
    running(chart2) {
      if (!this._running) {
        return false;
      }
      const anims = this._charts.get(chart2);
      if (!anims || !anims.running || !anims.items.length) {
        return false;
      }
      return true;
    }
    stop(chart2) {
      const anims = this._charts.get(chart2);
      if (!anims || !anims.items.length) {
        return;
      }
      const items = anims.items;
      let i = items.length - 1;
      for (; i >= 0; --i) {
        items[i].cancel();
      }
      anims.items = [];
      this._notify(chart2, anims, Date.now(), "complete");
    }
    remove(chart2) {
      return this._charts.delete(chart2);
    }
  };
  var animator = new Animator();
  var transparent = "transparent";
  var interpolators = {
    boolean(from, to, factor) {
      return factor > 0.5 ? to : from;
    },
    color(from, to, factor) {
      const c0 = color(from || transparent);
      const c1 = c0.valid && color(to || transparent);
      return c1 && c1.valid ? c1.mix(c0, factor).hexString() : to;
    },
    number(from, to, factor) {
      return from + (to - from) * factor;
    }
  };
  var Animation = class {
    constructor(cfg, target, prop, to) {
      const currentValue = target[prop];
      to = resolve([cfg.to, to, currentValue, cfg.from]);
      const from = resolve([cfg.from, currentValue, to]);
      this._active = true;
      this._fn = cfg.fn || interpolators[cfg.type || typeof from];
      this._easing = effects[cfg.easing] || effects.linear;
      this._start = Math.floor(Date.now() + (cfg.delay || 0));
      this._duration = this._total = Math.floor(cfg.duration);
      this._loop = !!cfg.loop;
      this._target = target;
      this._prop = prop;
      this._from = from;
      this._to = to;
      this._promises = void 0;
    }
    active() {
      return this._active;
    }
    update(cfg, to, date) {
      if (this._active) {
        this._notify(false);
        const currentValue = this._target[this._prop];
        const elapsed = date - this._start;
        const remain = this._duration - elapsed;
        this._start = date;
        this._duration = Math.floor(Math.max(remain, cfg.duration));
        this._total += elapsed;
        this._loop = !!cfg.loop;
        this._to = resolve([cfg.to, to, currentValue, cfg.from]);
        this._from = resolve([cfg.from, currentValue, to]);
      }
    }
    cancel() {
      if (this._active) {
        this.tick(Date.now());
        this._active = false;
        this._notify(false);
      }
    }
    tick(date) {
      const elapsed = date - this._start;
      const duration = this._duration;
      const prop = this._prop;
      const from = this._from;
      const loop = this._loop;
      const to = this._to;
      let factor;
      this._active = from !== to && (loop || elapsed < duration);
      if (!this._active) {
        this._target[prop] = to;
        this._notify(true);
        return;
      }
      if (elapsed < 0) {
        this._target[prop] = from;
        return;
      }
      factor = elapsed / duration % 2;
      factor = loop && factor > 1 ? 2 - factor : factor;
      factor = this._easing(Math.min(1, Math.max(0, factor)));
      this._target[prop] = this._fn(from, to, factor);
    }
    wait() {
      const promises = this._promises || (this._promises = []);
      return new Promise((res, rej) => {
        promises.push({ res, rej });
      });
    }
    _notify(resolved) {
      const method = resolved ? "res" : "rej";
      const promises = this._promises || [];
      for (let i = 0; i < promises.length; i++) {
        promises[i][method]();
      }
    }
  };
  var numbers = ["x", "y", "borderWidth", "radius", "tension"];
  var colors = ["color", "borderColor", "backgroundColor"];
  defaults.set("animation", {
    delay: void 0,
    duration: 1e3,
    easing: "easeOutQuart",
    fn: void 0,
    from: void 0,
    loop: void 0,
    to: void 0,
    type: void 0
  });
  var animationOptions = Object.keys(defaults.animation);
  defaults.describe("animation", {
    _fallback: false,
    _indexable: false,
    _scriptable: (name) => name !== "onProgress" && name !== "onComplete" && name !== "fn"
  });
  defaults.set("animations", {
    colors: {
      type: "color",
      properties: colors
    },
    numbers: {
      type: "number",
      properties: numbers
    }
  });
  defaults.describe("animations", {
    _fallback: "animation"
  });
  defaults.set("transitions", {
    active: {
      animation: {
        duration: 400
      }
    },
    resize: {
      animation: {
        duration: 0
      }
    },
    show: {
      animations: {
        colors: {
          from: "transparent"
        },
        visible: {
          type: "boolean",
          duration: 0
        }
      }
    },
    hide: {
      animations: {
        colors: {
          to: "transparent"
        },
        visible: {
          type: "boolean",
          easing: "linear",
          fn: (v) => v | 0
        }
      }
    }
  });
  var Animations = class {
    constructor(chart2, config) {
      this._chart = chart2;
      this._properties = /* @__PURE__ */ new Map();
      this.configure(config);
    }
    configure(config) {
      if (!isObject(config)) {
        return;
      }
      const animatedProps = this._properties;
      Object.getOwnPropertyNames(config).forEach((key) => {
        const cfg = config[key];
        if (!isObject(cfg)) {
          return;
        }
        const resolved = {};
        for (const option of animationOptions) {
          resolved[option] = cfg[option];
        }
        (isArray(cfg.properties) && cfg.properties || [key]).forEach((prop) => {
          if (prop === key || !animatedProps.has(prop)) {
            animatedProps.set(prop, resolved);
          }
        });
      });
    }
    _animateOptions(target, values) {
      const newOptions = values.options;
      const options = resolveTargetOptions(target, newOptions);
      if (!options) {
        return [];
      }
      const animations = this._createAnimations(options, newOptions);
      if (newOptions.$shared) {
        awaitAll(target.options.$animations, newOptions).then(() => {
          target.options = newOptions;
        }, () => {
        });
      }
      return animations;
    }
    _createAnimations(target, values) {
      const animatedProps = this._properties;
      const animations = [];
      const running = target.$animations || (target.$animations = {});
      const props = Object.keys(values);
      const date = Date.now();
      let i;
      for (i = props.length - 1; i >= 0; --i) {
        const prop = props[i];
        if (prop.charAt(0) === "$") {
          continue;
        }
        if (prop === "options") {
          animations.push(...this._animateOptions(target, values));
          continue;
        }
        const value = values[prop];
        let animation = running[prop];
        const cfg = animatedProps.get(prop);
        if (animation) {
          if (cfg && animation.active()) {
            animation.update(cfg, value, date);
            continue;
          } else {
            animation.cancel();
          }
        }
        if (!cfg || !cfg.duration) {
          target[prop] = value;
          continue;
        }
        running[prop] = animation = new Animation(cfg, target, prop, value);
        animations.push(animation);
      }
      return animations;
    }
    update(target, values) {
      if (this._properties.size === 0) {
        Object.assign(target, values);
        return;
      }
      const animations = this._createAnimations(target, values);
      if (animations.length) {
        animator.add(this._chart, animations);
        return true;
      }
    }
  };
  function awaitAll(animations, properties) {
    const running = [];
    const keys = Object.keys(properties);
    for (let i = 0; i < keys.length; i++) {
      const anim = animations[keys[i]];
      if (anim && anim.active()) {
        running.push(anim.wait());
      }
    }
    return Promise.all(running);
  }
  function resolveTargetOptions(target, newOptions) {
    if (!newOptions) {
      return;
    }
    let options = target.options;
    if (!options) {
      target.options = newOptions;
      return;
    }
    if (options.$shared) {
      target.options = options = Object.assign({}, options, { $shared: false, $animations: {} });
    }
    return options;
  }
  function scaleClip(scale, allowedOverflow) {
    const opts = scale && scale.options || {};
    const reverse = opts.reverse;
    const min = opts.min === void 0 ? allowedOverflow : 0;
    const max = opts.max === void 0 ? allowedOverflow : 0;
    return {
      start: reverse ? max : min,
      end: reverse ? min : max
    };
  }
  function defaultClip(xScale, yScale, allowedOverflow) {
    if (allowedOverflow === false) {
      return false;
    }
    const x = scaleClip(xScale, allowedOverflow);
    const y = scaleClip(yScale, allowedOverflow);
    return {
      top: y.end,
      right: x.end,
      bottom: y.start,
      left: x.start
    };
  }
  function toClip(value) {
    let t, r, b, l;
    if (isObject(value)) {
      t = value.top;
      r = value.right;
      b = value.bottom;
      l = value.left;
    } else {
      t = r = b = l = value;
    }
    return {
      top: t,
      right: r,
      bottom: b,
      left: l,
      disabled: value === false
    };
  }
  function getSortedDatasetIndices(chart2, filterVisible) {
    const keys = [];
    const metasets = chart2._getSortedDatasetMetas(filterVisible);
    let i, ilen;
    for (i = 0, ilen = metasets.length; i < ilen; ++i) {
      keys.push(metasets[i].index);
    }
    return keys;
  }
  function applyStack(stack, value, dsIndex, options = {}) {
    const keys = stack.keys;
    const singleMode = options.mode === "single";
    let i, ilen, datasetIndex, otherValue;
    if (value === null) {
      return;
    }
    for (i = 0, ilen = keys.length; i < ilen; ++i) {
      datasetIndex = +keys[i];
      if (datasetIndex === dsIndex) {
        if (options.all) {
          continue;
        }
        break;
      }
      otherValue = stack.values[datasetIndex];
      if (isNumberFinite(otherValue) && (singleMode || (value === 0 || sign(value) === sign(otherValue)))) {
        value += otherValue;
      }
    }
    return value;
  }
  function convertObjectDataToArray(data) {
    const keys = Object.keys(data);
    const adata = new Array(keys.length);
    let i, ilen, key;
    for (i = 0, ilen = keys.length; i < ilen; ++i) {
      key = keys[i];
      adata[i] = {
        x: key,
        y: data[key]
      };
    }
    return adata;
  }
  function isStacked(scale, meta) {
    const stacked = scale && scale.options.stacked;
    return stacked || stacked === void 0 && meta.stack !== void 0;
  }
  function getStackKey(indexScale, valueScale, meta) {
    return `${indexScale.id}.${valueScale.id}.${meta.stack || meta.type}`;
  }
  function getUserBounds(scale) {
    const { min, max, minDefined, maxDefined } = scale.getUserBounds();
    return {
      min: minDefined ? min : Number.NEGATIVE_INFINITY,
      max: maxDefined ? max : Number.POSITIVE_INFINITY
    };
  }
  function getOrCreateStack(stacks, stackKey, indexValue) {
    const subStack = stacks[stackKey] || (stacks[stackKey] = {});
    return subStack[indexValue] || (subStack[indexValue] = {});
  }
  function getLastIndexInStack(stack, vScale, positive, type) {
    for (const meta of vScale.getMatchingVisibleMetas(type).reverse()) {
      const value = stack[meta.index];
      if (positive && value > 0 || !positive && value < 0) {
        return meta.index;
      }
    }
    return null;
  }
  function updateStacks(controller, parsed) {
    const { chart: chart2, _cachedMeta: meta } = controller;
    const stacks = chart2._stacks || (chart2._stacks = {});
    const { iScale, vScale, index: datasetIndex } = meta;
    const iAxis = iScale.axis;
    const vAxis = vScale.axis;
    const key = getStackKey(iScale, vScale, meta);
    const ilen = parsed.length;
    let stack;
    for (let i = 0; i < ilen; ++i) {
      const item = parsed[i];
      const { [iAxis]: index, [vAxis]: value } = item;
      const itemStacks = item._stacks || (item._stacks = {});
      stack = itemStacks[vAxis] = getOrCreateStack(stacks, key, index);
      stack[datasetIndex] = value;
      stack._top = getLastIndexInStack(stack, vScale, true, meta.type);
      stack._bottom = getLastIndexInStack(stack, vScale, false, meta.type);
    }
  }
  function getFirstScaleId(chart2, axis) {
    const scales2 = chart2.scales;
    return Object.keys(scales2).filter((key) => scales2[key].axis === axis).shift();
  }
  function createDatasetContext(parent, index) {
    return createContext(parent, {
      active: false,
      dataset: void 0,
      datasetIndex: index,
      index,
      mode: "default",
      type: "dataset"
    });
  }
  function createDataContext(parent, index, element) {
    return createContext(parent, {
      active: false,
      dataIndex: index,
      parsed: void 0,
      raw: void 0,
      element,
      index,
      mode: "default",
      type: "data"
    });
  }
  function clearStacks(meta, items) {
    const datasetIndex = meta.controller.index;
    const axis = meta.vScale && meta.vScale.axis;
    if (!axis) {
      return;
    }
    items = items || meta._parsed;
    for (const parsed of items) {
      const stacks = parsed._stacks;
      if (!stacks || stacks[axis] === void 0 || stacks[axis][datasetIndex] === void 0) {
        return;
      }
      delete stacks[axis][datasetIndex];
    }
  }
  var isDirectUpdateMode = (mode) => mode === "reset" || mode === "none";
  var cloneIfNotShared = (cached, shared) => shared ? cached : Object.assign({}, cached);
  var createStack = (canStack, meta, chart2) => canStack && !meta.hidden && meta._stacked && { keys: getSortedDatasetIndices(chart2, true), values: null };
  var DatasetController = class {
    constructor(chart2, datasetIndex) {
      this.chart = chart2;
      this._ctx = chart2.ctx;
      this.index = datasetIndex;
      this._cachedDataOpts = {};
      this._cachedMeta = this.getMeta();
      this._type = this._cachedMeta.type;
      this.options = void 0;
      this._parsing = false;
      this._data = void 0;
      this._objectData = void 0;
      this._sharedOptions = void 0;
      this._drawStart = void 0;
      this._drawCount = void 0;
      this.enableOptionSharing = false;
      this.$context = void 0;
      this._syncList = [];
      this.initialize();
    }
    initialize() {
      const meta = this._cachedMeta;
      this.configure();
      this.linkScales();
      meta._stacked = isStacked(meta.vScale, meta);
      this.addElements();
    }
    updateIndex(datasetIndex) {
      if (this.index !== datasetIndex) {
        clearStacks(this._cachedMeta);
      }
      this.index = datasetIndex;
    }
    linkScales() {
      const chart2 = this.chart;
      const meta = this._cachedMeta;
      const dataset = this.getDataset();
      const chooseId = (axis, x, y, r) => axis === "x" ? x : axis === "r" ? r : y;
      const xid = meta.xAxisID = valueOrDefault(dataset.xAxisID, getFirstScaleId(chart2, "x"));
      const yid = meta.yAxisID = valueOrDefault(dataset.yAxisID, getFirstScaleId(chart2, "y"));
      const rid = meta.rAxisID = valueOrDefault(dataset.rAxisID, getFirstScaleId(chart2, "r"));
      const indexAxis = meta.indexAxis;
      const iid = meta.iAxisID = chooseId(indexAxis, xid, yid, rid);
      const vid = meta.vAxisID = chooseId(indexAxis, yid, xid, rid);
      meta.xScale = this.getScaleForId(xid);
      meta.yScale = this.getScaleForId(yid);
      meta.rScale = this.getScaleForId(rid);
      meta.iScale = this.getScaleForId(iid);
      meta.vScale = this.getScaleForId(vid);
    }
    getDataset() {
      return this.chart.data.datasets[this.index];
    }
    getMeta() {
      return this.chart.getDatasetMeta(this.index);
    }
    getScaleForId(scaleID) {
      return this.chart.scales[scaleID];
    }
    _getOtherScale(scale) {
      const meta = this._cachedMeta;
      return scale === meta.iScale ? meta.vScale : meta.iScale;
    }
    reset() {
      this._update("reset");
    }
    _destroy() {
      const meta = this._cachedMeta;
      if (this._data) {
        unlistenArrayEvents(this._data, this);
      }
      if (meta._stacked) {
        clearStacks(meta);
      }
    }
    _dataCheck() {
      const dataset = this.getDataset();
      const data = dataset.data || (dataset.data = []);
      const _data = this._data;
      if (isObject(data)) {
        this._data = convertObjectDataToArray(data);
      } else if (_data !== data) {
        if (_data) {
          unlistenArrayEvents(_data, this);
          const meta = this._cachedMeta;
          clearStacks(meta);
          meta._parsed = [];
        }
        if (data && Object.isExtensible(data)) {
          listenArrayEvents(data, this);
        }
        this._syncList = [];
        this._data = data;
      }
    }
    addElements() {
      const meta = this._cachedMeta;
      this._dataCheck();
      if (this.datasetElementType) {
        meta.dataset = new this.datasetElementType();
      }
    }
    buildOrUpdateElements(resetNewElements) {
      const meta = this._cachedMeta;
      const dataset = this.getDataset();
      let stackChanged = false;
      this._dataCheck();
      const oldStacked = meta._stacked;
      meta._stacked = isStacked(meta.vScale, meta);
      if (meta.stack !== dataset.stack) {
        stackChanged = true;
        clearStacks(meta);
        meta.stack = dataset.stack;
      }
      this._resyncElements(resetNewElements);
      if (stackChanged || oldStacked !== meta._stacked) {
        updateStacks(this, meta._parsed);
      }
    }
    configure() {
      const config = this.chart.config;
      const scopeKeys = config.datasetScopeKeys(this._type);
      const scopes = config.getOptionScopes(this.getDataset(), scopeKeys, true);
      this.options = config.createResolver(scopes, this.getContext());
      this._parsing = this.options.parsing;
      this._cachedDataOpts = {};
    }
    parse(start, count) {
      const { _cachedMeta: meta, _data: data } = this;
      const { iScale, _stacked } = meta;
      const iAxis = iScale.axis;
      let sorted = start === 0 && count === data.length ? true : meta._sorted;
      let prev = start > 0 && meta._parsed[start - 1];
      let i, cur, parsed;
      if (this._parsing === false) {
        meta._parsed = data;
        meta._sorted = true;
        parsed = data;
      } else {
        if (isArray(data[start])) {
          parsed = this.parseArrayData(meta, data, start, count);
        } else if (isObject(data[start])) {
          parsed = this.parseObjectData(meta, data, start, count);
        } else {
          parsed = this.parsePrimitiveData(meta, data, start, count);
        }
        const isNotInOrderComparedToPrev = () => cur[iAxis] === null || prev && cur[iAxis] < prev[iAxis];
        for (i = 0; i < count; ++i) {
          meta._parsed[i + start] = cur = parsed[i];
          if (sorted) {
            if (isNotInOrderComparedToPrev()) {
              sorted = false;
            }
            prev = cur;
          }
        }
        meta._sorted = sorted;
      }
      if (_stacked) {
        updateStacks(this, parsed);
      }
    }
    parsePrimitiveData(meta, data, start, count) {
      const { iScale, vScale } = meta;
      const iAxis = iScale.axis;
      const vAxis = vScale.axis;
      const labels = iScale.getLabels();
      const singleScale = iScale === vScale;
      const parsed = new Array(count);
      let i, ilen, index;
      for (i = 0, ilen = count; i < ilen; ++i) {
        index = i + start;
        parsed[i] = {
          [iAxis]: singleScale || iScale.parse(labels[index], index),
          [vAxis]: vScale.parse(data[index], index)
        };
      }
      return parsed;
    }
    parseArrayData(meta, data, start, count) {
      const { xScale, yScale } = meta;
      const parsed = new Array(count);
      let i, ilen, index, item;
      for (i = 0, ilen = count; i < ilen; ++i) {
        index = i + start;
        item = data[index];
        parsed[i] = {
          x: xScale.parse(item[0], index),
          y: yScale.parse(item[1], index)
        };
      }
      return parsed;
    }
    parseObjectData(meta, data, start, count) {
      const { xScale, yScale } = meta;
      const { xAxisKey = "x", yAxisKey = "y" } = this._parsing;
      const parsed = new Array(count);
      let i, ilen, index, item;
      for (i = 0, ilen = count; i < ilen; ++i) {
        index = i + start;
        item = data[index];
        parsed[i] = {
          x: xScale.parse(resolveObjectKey(item, xAxisKey), index),
          y: yScale.parse(resolveObjectKey(item, yAxisKey), index)
        };
      }
      return parsed;
    }
    getParsed(index) {
      return this._cachedMeta._parsed[index];
    }
    getDataElement(index) {
      return this._cachedMeta.data[index];
    }
    applyStack(scale, parsed, mode) {
      const chart2 = this.chart;
      const meta = this._cachedMeta;
      const value = parsed[scale.axis];
      const stack = {
        keys: getSortedDatasetIndices(chart2, true),
        values: parsed._stacks[scale.axis]
      };
      return applyStack(stack, value, meta.index, { mode });
    }
    updateRangeFromParsed(range, scale, parsed, stack) {
      const parsedValue = parsed[scale.axis];
      let value = parsedValue === null ? NaN : parsedValue;
      const values = stack && parsed._stacks[scale.axis];
      if (stack && values) {
        stack.values = values;
        value = applyStack(stack, parsedValue, this._cachedMeta.index);
      }
      range.min = Math.min(range.min, value);
      range.max = Math.max(range.max, value);
    }
    getMinMax(scale, canStack) {
      const meta = this._cachedMeta;
      const _parsed = meta._parsed;
      const sorted = meta._sorted && scale === meta.iScale;
      const ilen = _parsed.length;
      const otherScale = this._getOtherScale(scale);
      const stack = createStack(canStack, meta, this.chart);
      const range = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY };
      const { min: otherMin, max: otherMax } = getUserBounds(otherScale);
      let i, parsed;
      function _skip() {
        parsed = _parsed[i];
        const otherValue = parsed[otherScale.axis];
        return !isNumberFinite(parsed[scale.axis]) || otherMin > otherValue || otherMax < otherValue;
      }
      for (i = 0; i < ilen; ++i) {
        if (_skip()) {
          continue;
        }
        this.updateRangeFromParsed(range, scale, parsed, stack);
        if (sorted) {
          break;
        }
      }
      if (sorted) {
        for (i = ilen - 1; i >= 0; --i) {
          if (_skip()) {
            continue;
          }
          this.updateRangeFromParsed(range, scale, parsed, stack);
          break;
        }
      }
      return range;
    }
    getAllParsedValues(scale) {
      const parsed = this._cachedMeta._parsed;
      const values = [];
      let i, ilen, value;
      for (i = 0, ilen = parsed.length; i < ilen; ++i) {
        value = parsed[i][scale.axis];
        if (isNumberFinite(value)) {
          values.push(value);
        }
      }
      return values;
    }
    getMaxOverflow() {
      return false;
    }
    getLabelAndValue(index) {
      const meta = this._cachedMeta;
      const iScale = meta.iScale;
      const vScale = meta.vScale;
      const parsed = this.getParsed(index);
      return {
        label: iScale ? "" + iScale.getLabelForValue(parsed[iScale.axis]) : "",
        value: vScale ? "" + vScale.getLabelForValue(parsed[vScale.axis]) : ""
      };
    }
    _update(mode) {
      const meta = this._cachedMeta;
      this.update(mode || "default");
      meta._clip = toClip(valueOrDefault(this.options.clip, defaultClip(meta.xScale, meta.yScale, this.getMaxOverflow())));
    }
    update(mode) {
    }
    draw() {
      const ctx = this._ctx;
      const chart2 = this.chart;
      const meta = this._cachedMeta;
      const elements2 = meta.data || [];
      const area = chart2.chartArea;
      const active = [];
      const start = this._drawStart || 0;
      const count = this._drawCount || elements2.length - start;
      const drawActiveElementsOnTop = this.options.drawActiveElementsOnTop;
      let i;
      if (meta.dataset) {
        meta.dataset.draw(ctx, area, start, count);
      }
      for (i = start; i < start + count; ++i) {
        const element = elements2[i];
        if (element.hidden) {
          continue;
        }
        if (element.active && drawActiveElementsOnTop) {
          active.push(element);
        } else {
          element.draw(ctx, area);
        }
      }
      for (i = 0; i < active.length; ++i) {
        active[i].draw(ctx, area);
      }
    }
    getStyle(index, active) {
      const mode = active ? "active" : "default";
      return index === void 0 && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(mode) : this.resolveDataElementOptions(index || 0, mode);
    }
    getContext(index, active, mode) {
      const dataset = this.getDataset();
      let context;
      if (index >= 0 && index < this._cachedMeta.data.length) {
        const element = this._cachedMeta.data[index];
        context = element.$context || (element.$context = createDataContext(this.getContext(), index, element));
        context.parsed = this.getParsed(index);
        context.raw = dataset.data[index];
        context.index = context.dataIndex = index;
      } else {
        context = this.$context || (this.$context = createDatasetContext(this.chart.getContext(), this.index));
        context.dataset = dataset;
        context.index = context.datasetIndex = this.index;
      }
      context.active = !!active;
      context.mode = mode;
      return context;
    }
    resolveDatasetElementOptions(mode) {
      return this._resolveElementOptions(this.datasetElementType.id, mode);
    }
    resolveDataElementOptions(index, mode) {
      return this._resolveElementOptions(this.dataElementType.id, mode, index);
    }
    _resolveElementOptions(elementType, mode = "default", index) {
      const active = mode === "active";
      const cache = this._cachedDataOpts;
      const cacheKey = elementType + "-" + mode;
      const cached = cache[cacheKey];
      const sharing = this.enableOptionSharing && defined(index);
      if (cached) {
        return cloneIfNotShared(cached, sharing);
      }
      const config = this.chart.config;
      const scopeKeys = config.datasetElementScopeKeys(this._type, elementType);
      const prefixes = active ? [`${elementType}Hover`, "hover", elementType, ""] : [elementType, ""];
      const scopes = config.getOptionScopes(this.getDataset(), scopeKeys);
      const names2 = Object.keys(defaults.elements[elementType]);
      const context = () => this.getContext(index, active);
      const values = config.resolveNamedOptions(scopes, names2, context, prefixes);
      if (values.$shared) {
        values.$shared = sharing;
        cache[cacheKey] = Object.freeze(cloneIfNotShared(values, sharing));
      }
      return values;
    }
    _resolveAnimations(index, transition2, active) {
      const chart2 = this.chart;
      const cache = this._cachedDataOpts;
      const cacheKey = `animation-${transition2}`;
      const cached = cache[cacheKey];
      if (cached) {
        return cached;
      }
      let options;
      if (chart2.options.animation !== false) {
        const config = this.chart.config;
        const scopeKeys = config.datasetAnimationScopeKeys(this._type, transition2);
        const scopes = config.getOptionScopes(this.getDataset(), scopeKeys);
        options = config.createResolver(scopes, this.getContext(index, active, transition2));
      }
      const animations = new Animations(chart2, options && options.animations);
      if (options && options._cacheable) {
        cache[cacheKey] = Object.freeze(animations);
      }
      return animations;
    }
    getSharedOptions(options) {
      if (!options.$shared) {
        return;
      }
      return this._sharedOptions || (this._sharedOptions = Object.assign({}, options));
    }
    includeOptions(mode, sharedOptions) {
      return !sharedOptions || isDirectUpdateMode(mode) || this.chart._animationsDisabled;
    }
    updateElement(element, index, properties, mode) {
      if (isDirectUpdateMode(mode)) {
        Object.assign(element, properties);
      } else {
        this._resolveAnimations(index, mode).update(element, properties);
      }
    }
    updateSharedOptions(sharedOptions, mode, newOptions) {
      if (sharedOptions && !isDirectUpdateMode(mode)) {
        this._resolveAnimations(void 0, mode).update(sharedOptions, newOptions);
      }
    }
    _setStyle(element, index, mode, active) {
      element.active = active;
      const options = this.getStyle(index, active);
      this._resolveAnimations(index, mode, active).update(element, {
        options: !active && this.getSharedOptions(options) || options
      });
    }
    removeHoverStyle(element, datasetIndex, index) {
      this._setStyle(element, index, "active", false);
    }
    setHoverStyle(element, datasetIndex, index) {
      this._setStyle(element, index, "active", true);
    }
    _removeDatasetHoverStyle() {
      const element = this._cachedMeta.dataset;
      if (element) {
        this._setStyle(element, void 0, "active", false);
      }
    }
    _setDatasetHoverStyle() {
      const element = this._cachedMeta.dataset;
      if (element) {
        this._setStyle(element, void 0, "active", true);
      }
    }
    _resyncElements(resetNewElements) {
      const data = this._data;
      const elements2 = this._cachedMeta.data;
      for (const [method, arg1, arg2] of this._syncList) {
        this[method](arg1, arg2);
      }
      this._syncList = [];
      const numMeta = elements2.length;
      const numData = data.length;
      const count = Math.min(numData, numMeta);
      if (count) {
        this.parse(0, count);
      }
      if (numData > numMeta) {
        this._insertElements(numMeta, numData - numMeta, resetNewElements);
      } else if (numData < numMeta) {
        this._removeElements(numData, numMeta - numData);
      }
    }
    _insertElements(start, count, resetNewElements = true) {
      const meta = this._cachedMeta;
      const data = meta.data;
      const end = start + count;
      let i;
      const move = (arr) => {
        arr.length += count;
        for (i = arr.length - 1; i >= end; i--) {
          arr[i] = arr[i - count];
        }
      };
      move(data);
      for (i = start; i < end; ++i) {
        data[i] = new this.dataElementType();
      }
      if (this._parsing) {
        move(meta._parsed);
      }
      this.parse(start, count);
      if (resetNewElements) {
        this.updateElements(data, start, count, "reset");
      }
    }
    updateElements(element, start, count, mode) {
    }
    _removeElements(start, count) {
      const meta = this._cachedMeta;
      if (this._parsing) {
        const removed = meta._parsed.splice(start, count);
        if (meta._stacked) {
          clearStacks(meta, removed);
        }
      }
      meta.data.splice(start, count);
    }
    _sync(args) {
      if (this._parsing) {
        this._syncList.push(args);
      } else {
        const [method, arg1, arg2] = args;
        this[method](arg1, arg2);
      }
      this.chart._dataChanges.push([this.index, ...args]);
    }
    _onDataPush() {
      const count = arguments.length;
      this._sync(["_insertElements", this.getDataset().data.length - count, count]);
    }
    _onDataPop() {
      this._sync(["_removeElements", this._cachedMeta.data.length - 1, 1]);
    }
    _onDataShift() {
      this._sync(["_removeElements", 0, 1]);
    }
    _onDataSplice(start, count) {
      if (count) {
        this._sync(["_removeElements", start, count]);
      }
      const newCount = arguments.length - 2;
      if (newCount) {
        this._sync(["_insertElements", start, newCount]);
      }
    }
    _onDataUnshift() {
      this._sync(["_insertElements", 0, arguments.length]);
    }
  };
  DatasetController.defaults = {};
  DatasetController.prototype.datasetElementType = null;
  DatasetController.prototype.dataElementType = null;
  function getAllScaleValues(scale, type) {
    if (!scale._cache.$bar) {
      const visibleMetas = scale.getMatchingVisibleMetas(type);
      let values = [];
      for (let i = 0, ilen = visibleMetas.length; i < ilen; i++) {
        values = values.concat(visibleMetas[i].controller.getAllParsedValues(scale));
      }
      scale._cache.$bar = _arrayUnique(values.sort((a, b) => a - b));
    }
    return scale._cache.$bar;
  }
  function computeMinSampleSize(meta) {
    const scale = meta.iScale;
    const values = getAllScaleValues(scale, meta.type);
    let min = scale._length;
    let i, ilen, curr, prev;
    const updateMinAndPrev = () => {
      if (curr === 32767 || curr === -32768) {
        return;
      }
      if (defined(prev)) {
        min = Math.min(min, Math.abs(curr - prev) || min);
      }
      prev = curr;
    };
    for (i = 0, ilen = values.length; i < ilen; ++i) {
      curr = scale.getPixelForValue(values[i]);
      updateMinAndPrev();
    }
    prev = void 0;
    for (i = 0, ilen = scale.ticks.length; i < ilen; ++i) {
      curr = scale.getPixelForTick(i);
      updateMinAndPrev();
    }
    return min;
  }
  function computeFitCategoryTraits(index, ruler, options, stackCount) {
    const thickness = options.barThickness;
    let size, ratio;
    if (isNullOrUndef(thickness)) {
      size = ruler.min * options.categoryPercentage;
      ratio = options.barPercentage;
    } else {
      size = thickness * stackCount;
      ratio = 1;
    }
    return {
      chunk: size / stackCount,
      ratio,
      start: ruler.pixels[index] - size / 2
    };
  }
  function computeFlexCategoryTraits(index, ruler, options, stackCount) {
    const pixels = ruler.pixels;
    const curr = pixels[index];
    let prev = index > 0 ? pixels[index - 1] : null;
    let next = index < pixels.length - 1 ? pixels[index + 1] : null;
    const percent = options.categoryPercentage;
    if (prev === null) {
      prev = curr - (next === null ? ruler.end - ruler.start : next - curr);
    }
    if (next === null) {
      next = curr + curr - prev;
    }
    const start = curr - (curr - Math.min(prev, next)) / 2 * percent;
    const size = Math.abs(next - prev) / 2 * percent;
    return {
      chunk: size / stackCount,
      ratio: options.barPercentage,
      start
    };
  }
  function parseFloatBar(entry, item, vScale, i) {
    const startValue = vScale.parse(entry[0], i);
    const endValue = vScale.parse(entry[1], i);
    const min = Math.min(startValue, endValue);
    const max = Math.max(startValue, endValue);
    let barStart = min;
    let barEnd = max;
    if (Math.abs(min) > Math.abs(max)) {
      barStart = max;
      barEnd = min;
    }
    item[vScale.axis] = barEnd;
    item._custom = {
      barStart,
      barEnd,
      start: startValue,
      end: endValue,
      min,
      max
    };
  }
  function parseValue(entry, item, vScale, i) {
    if (isArray(entry)) {
      parseFloatBar(entry, item, vScale, i);
    } else {
      item[vScale.axis] = vScale.parse(entry, i);
    }
    return item;
  }
  function parseArrayOrPrimitive(meta, data, start, count) {
    const iScale = meta.iScale;
    const vScale = meta.vScale;
    const labels = iScale.getLabels();
    const singleScale = iScale === vScale;
    const parsed = [];
    let i, ilen, item, entry;
    for (i = start, ilen = start + count; i < ilen; ++i) {
      entry = data[i];
      item = {};
      item[iScale.axis] = singleScale || iScale.parse(labels[i], i);
      parsed.push(parseValue(entry, item, vScale, i));
    }
    return parsed;
  }
  function isFloatBar(custom) {
    return custom && custom.barStart !== void 0 && custom.barEnd !== void 0;
  }
  function barSign(size, vScale, actualBase) {
    if (size !== 0) {
      return sign(size);
    }
    return (vScale.isHorizontal() ? 1 : -1) * (vScale.min >= actualBase ? 1 : -1);
  }
  function borderProps(properties) {
    let reverse, start, end, top, bottom;
    if (properties.horizontal) {
      reverse = properties.base > properties.x;
      start = "left";
      end = "right";
    } else {
      reverse = properties.base < properties.y;
      start = "bottom";
      end = "top";
    }
    if (reverse) {
      top = "end";
      bottom = "start";
    } else {
      top = "start";
      bottom = "end";
    }
    return { start, end, reverse, top, bottom };
  }
  function setBorderSkipped(properties, options, stack, index) {
    let edge = options.borderSkipped;
    const res = {};
    if (!edge) {
      properties.borderSkipped = res;
      return;
    }
    const { start, end, reverse, top, bottom } = borderProps(properties);
    if (edge === "middle" && stack) {
      properties.enableBorderRadius = true;
      if ((stack._top || 0) === index) {
        edge = top;
      } else if ((stack._bottom || 0) === index) {
        edge = bottom;
      } else {
        res[parseEdge(bottom, start, end, reverse)] = true;
        edge = top;
      }
    }
    res[parseEdge(edge, start, end, reverse)] = true;
    properties.borderSkipped = res;
  }
  function parseEdge(edge, a, b, reverse) {
    if (reverse) {
      edge = swap(edge, a, b);
      edge = startEnd(edge, b, a);
    } else {
      edge = startEnd(edge, a, b);
    }
    return edge;
  }
  function swap(orig, v1, v2) {
    return orig === v1 ? v2 : orig === v2 ? v1 : orig;
  }
  function startEnd(v, start, end) {
    return v === "start" ? start : v === "end" ? end : v;
  }
  function setInflateAmount(properties, { inflateAmount }, ratio) {
    properties.inflateAmount = inflateAmount === "auto" ? ratio === 1 ? 0.33 : 0 : inflateAmount;
  }
  var BarController = class extends DatasetController {
    parsePrimitiveData(meta, data, start, count) {
      return parseArrayOrPrimitive(meta, data, start, count);
    }
    parseArrayData(meta, data, start, count) {
      return parseArrayOrPrimitive(meta, data, start, count);
    }
    parseObjectData(meta, data, start, count) {
      const { iScale, vScale } = meta;
      const { xAxisKey = "x", yAxisKey = "y" } = this._parsing;
      const iAxisKey = iScale.axis === "x" ? xAxisKey : yAxisKey;
      const vAxisKey = vScale.axis === "x" ? xAxisKey : yAxisKey;
      const parsed = [];
      let i, ilen, item, obj;
      for (i = start, ilen = start + count; i < ilen; ++i) {
        obj = data[i];
        item = {};
        item[iScale.axis] = iScale.parse(resolveObjectKey(obj, iAxisKey), i);
        parsed.push(parseValue(resolveObjectKey(obj, vAxisKey), item, vScale, i));
      }
      return parsed;
    }
    updateRangeFromParsed(range, scale, parsed, stack) {
      super.updateRangeFromParsed(range, scale, parsed, stack);
      const custom = parsed._custom;
      if (custom && scale === this._cachedMeta.vScale) {
        range.min = Math.min(range.min, custom.min);
        range.max = Math.max(range.max, custom.max);
      }
    }
    getMaxOverflow() {
      return 0;
    }
    getLabelAndValue(index) {
      const meta = this._cachedMeta;
      const { iScale, vScale } = meta;
      const parsed = this.getParsed(index);
      const custom = parsed._custom;
      const value = isFloatBar(custom) ? "[" + custom.start + ", " + custom.end + "]" : "" + vScale.getLabelForValue(parsed[vScale.axis]);
      return {
        label: "" + iScale.getLabelForValue(parsed[iScale.axis]),
        value
      };
    }
    initialize() {
      this.enableOptionSharing = true;
      super.initialize();
      const meta = this._cachedMeta;
      meta.stack = this.getDataset().stack;
    }
    update(mode) {
      const meta = this._cachedMeta;
      this.updateElements(meta.data, 0, meta.data.length, mode);
    }
    updateElements(bars, start, count, mode) {
      const reset = mode === "reset";
      const { index, _cachedMeta: { vScale } } = this;
      const base = vScale.getBasePixel();
      const horizontal = vScale.isHorizontal();
      const ruler = this._getRuler();
      const firstOpts = this.resolveDataElementOptions(start, mode);
      const sharedOptions = this.getSharedOptions(firstOpts);
      const includeOptions = this.includeOptions(mode, sharedOptions);
      this.updateSharedOptions(sharedOptions, mode, firstOpts);
      for (let i = start; i < start + count; i++) {
        const parsed = this.getParsed(i);
        const vpixels = reset || isNullOrUndef(parsed[vScale.axis]) ? { base, head: base } : this._calculateBarValuePixels(i);
        const ipixels = this._calculateBarIndexPixels(i, ruler);
        const stack = (parsed._stacks || {})[vScale.axis];
        const properties = {
          horizontal,
          base: vpixels.base,
          enableBorderRadius: !stack || isFloatBar(parsed._custom) || (index === stack._top || index === stack._bottom),
          x: horizontal ? vpixels.head : ipixels.center,
          y: horizontal ? ipixels.center : vpixels.head,
          height: horizontal ? ipixels.size : Math.abs(vpixels.size),
          width: horizontal ? Math.abs(vpixels.size) : ipixels.size
        };
        if (includeOptions) {
          properties.options = sharedOptions || this.resolveDataElementOptions(i, bars[i].active ? "active" : mode);
        }
        const options = properties.options || bars[i].options;
        setBorderSkipped(properties, options, stack, index);
        setInflateAmount(properties, options, ruler.ratio);
        this.updateElement(bars[i], i, properties, mode);
      }
    }
    _getStacks(last, dataIndex) {
      const meta = this._cachedMeta;
      const iScale = meta.iScale;
      const metasets = iScale.getMatchingVisibleMetas(this._type);
      const stacked = iScale.options.stacked;
      const ilen = metasets.length;
      const stacks = [];
      let i, item;
      for (i = 0; i < ilen; ++i) {
        item = metasets[i];
        if (!item.controller.options.grouped) {
          continue;
        }
        if (typeof dataIndex !== "undefined") {
          const val = item.controller.getParsed(dataIndex)[item.controller._cachedMeta.vScale.axis];
          if (isNullOrUndef(val) || isNaN(val)) {
            continue;
          }
        }
        if (stacked === false || stacks.indexOf(item.stack) === -1 || stacked === void 0 && item.stack === void 0) {
          stacks.push(item.stack);
        }
        if (item.index === last) {
          break;
        }
      }
      if (!stacks.length) {
        stacks.push(void 0);
      }
      return stacks;
    }
    _getStackCount(index) {
      return this._getStacks(void 0, index).length;
    }
    _getStackIndex(datasetIndex, name, dataIndex) {
      const stacks = this._getStacks(datasetIndex, dataIndex);
      const index = name !== void 0 ? stacks.indexOf(name) : -1;
      return index === -1 ? stacks.length - 1 : index;
    }
    _getRuler() {
      const opts = this.options;
      const meta = this._cachedMeta;
      const iScale = meta.iScale;
      const pixels = [];
      let i, ilen;
      for (i = 0, ilen = meta.data.length; i < ilen; ++i) {
        pixels.push(iScale.getPixelForValue(this.getParsed(i)[iScale.axis], i));
      }
      const barThickness = opts.barThickness;
      const min = barThickness || computeMinSampleSize(meta);
      return {
        min,
        pixels,
        start: iScale._startPixel,
        end: iScale._endPixel,
        stackCount: this._getStackCount(),
        scale: iScale,
        grouped: opts.grouped,
        ratio: barThickness ? 1 : opts.categoryPercentage * opts.barPercentage
      };
    }
    _calculateBarValuePixels(index) {
      const { _cachedMeta: { vScale, _stacked }, options: { base: baseValue, minBarLength } } = this;
      const actualBase = baseValue || 0;
      const parsed = this.getParsed(index);
      const custom = parsed._custom;
      const floating = isFloatBar(custom);
      let value = parsed[vScale.axis];
      let start = 0;
      let length = _stacked ? this.applyStack(vScale, parsed, _stacked) : value;
      let head, size;
      if (length !== value) {
        start = length - value;
        length = value;
      }
      if (floating) {
        value = custom.barStart;
        length = custom.barEnd - custom.barStart;
        if (value !== 0 && sign(value) !== sign(custom.barEnd)) {
          start = 0;
        }
        start += value;
      }
      const startValue = !isNullOrUndef(baseValue) && !floating ? baseValue : start;
      let base = vScale.getPixelForValue(startValue);
      if (this.chart.getDataVisibility(index)) {
        head = vScale.getPixelForValue(start + length);
      } else {
        head = base;
      }
      size = head - base;
      if (Math.abs(size) < minBarLength) {
        size = barSign(size, vScale, actualBase) * minBarLength;
        if (value === actualBase) {
          base -= size / 2;
        }
        head = base + size;
      }
      if (base === vScale.getPixelForValue(actualBase)) {
        const halfGrid = sign(size) * vScale.getLineWidthForValue(actualBase) / 2;
        base += halfGrid;
        size -= halfGrid;
      }
      return {
        size,
        base,
        head,
        center: head + size / 2
      };
    }
    _calculateBarIndexPixels(index, ruler) {
      const scale = ruler.scale;
      const options = this.options;
      const skipNull = options.skipNull;
      const maxBarThickness = valueOrDefault(options.maxBarThickness, Infinity);
      let center, size;
      if (ruler.grouped) {
        const stackCount = skipNull ? this._getStackCount(index) : ruler.stackCount;
        const range = options.barThickness === "flex" ? computeFlexCategoryTraits(index, ruler, options, stackCount) : computeFitCategoryTraits(index, ruler, options, stackCount);
        const stackIndex = this._getStackIndex(this.index, this._cachedMeta.stack, skipNull ? index : void 0);
        center = range.start + range.chunk * stackIndex + range.chunk / 2;
        size = Math.min(maxBarThickness, range.chunk * range.ratio);
      } else {
        center = scale.getPixelForValue(this.getParsed(index)[scale.axis], index);
        size = Math.min(maxBarThickness, ruler.min * ruler.ratio);
      }
      return {
        base: center - size / 2,
        head: center + size / 2,
        center,
        size
      };
    }
    draw() {
      const meta = this._cachedMeta;
      const vScale = meta.vScale;
      const rects = meta.data;
      const ilen = rects.length;
      let i = 0;
      for (; i < ilen; ++i) {
        if (this.getParsed(i)[vScale.axis] !== null) {
          rects[i].draw(this._ctx);
        }
      }
    }
  };
  BarController.id = "bar";
  BarController.defaults = {
    datasetElementType: false,
    dataElementType: "bar",
    categoryPercentage: 0.8,
    barPercentage: 0.9,
    grouped: true,
    animations: {
      numbers: {
        type: "number",
        properties: ["x", "y", "base", "width", "height"]
      }
    }
  };
  BarController.overrides = {
    scales: {
      _index_: {
        type: "category",
        offset: true,
        grid: {
          offset: true
        }
      },
      _value_: {
        type: "linear",
        beginAtZero: true
      }
    }
  };
  var BubbleController = class extends DatasetController {
    initialize() {
      this.enableOptionSharing = true;
      super.initialize();
    }
    parsePrimitiveData(meta, data, start, count) {
      const parsed = super.parsePrimitiveData(meta, data, start, count);
      for (let i = 0; i < parsed.length; i++) {
        parsed[i]._custom = this.resolveDataElementOptions(i + start).radius;
      }
      return parsed;
    }
    parseArrayData(meta, data, start, count) {
      const parsed = super.parseArrayData(meta, data, start, count);
      for (let i = 0; i < parsed.length; i++) {
        const item = data[start + i];
        parsed[i]._custom = valueOrDefault(item[2], this.resolveDataElementOptions(i + start).radius);
      }
      return parsed;
    }
    parseObjectData(meta, data, start, count) {
      const parsed = super.parseObjectData(meta, data, start, count);
      for (let i = 0; i < parsed.length; i++) {
        const item = data[start + i];
        parsed[i]._custom = valueOrDefault(item && item.r && +item.r, this.resolveDataElementOptions(i + start).radius);
      }
      return parsed;
    }
    getMaxOverflow() {
      const data = this._cachedMeta.data;
      let max = 0;
      for (let i = data.length - 1; i >= 0; --i) {
        max = Math.max(max, data[i].size(this.resolveDataElementOptions(i)) / 2);
      }
      return max > 0 && max;
    }
    getLabelAndValue(index) {
      const meta = this._cachedMeta;
      const { xScale, yScale } = meta;
      const parsed = this.getParsed(index);
      const x = xScale.getLabelForValue(parsed.x);
      const y = yScale.getLabelForValue(parsed.y);
      const r = parsed._custom;
      return {
        label: meta.label,
        value: "(" + x + ", " + y + (r ? ", " + r : "") + ")"
      };
    }
    update(mode) {
      const points = this._cachedMeta.data;
      this.updateElements(points, 0, points.length, mode);
    }
    updateElements(points, start, count, mode) {
      const reset = mode === "reset";
      const { iScale, vScale } = this._cachedMeta;
      const firstOpts = this.resolveDataElementOptions(start, mode);
      const sharedOptions = this.getSharedOptions(firstOpts);
      const includeOptions = this.includeOptions(mode, sharedOptions);
      const iAxis = iScale.axis;
      const vAxis = vScale.axis;
      for (let i = start; i < start + count; i++) {
        const point = points[i];
        const parsed = !reset && this.getParsed(i);
        const properties = {};
        const iPixel = properties[iAxis] = reset ? iScale.getPixelForDecimal(0.5) : iScale.getPixelForValue(parsed[iAxis]);
        const vPixel = properties[vAxis] = reset ? vScale.getBasePixel() : vScale.getPixelForValue(parsed[vAxis]);
        properties.skip = isNaN(iPixel) || isNaN(vPixel);
        if (includeOptions) {
          properties.options = this.resolveDataElementOptions(i, point.active ? "active" : mode);
          if (reset) {
            properties.options.radius = 0;
          }
        }
        this.updateElement(point, i, properties, mode);
      }
      this.updateSharedOptions(sharedOptions, mode, firstOpts);
    }
    resolveDataElementOptions(index, mode) {
      const parsed = this.getParsed(index);
      let values = super.resolveDataElementOptions(index, mode);
      if (values.$shared) {
        values = Object.assign({}, values, { $shared: false });
      }
      const radius = values.radius;
      if (mode !== "active") {
        values.radius = 0;
      }
      values.radius += valueOrDefault(parsed && parsed._custom, radius);
      return values;
    }
  };
  BubbleController.id = "bubble";
  BubbleController.defaults = {
    datasetElementType: false,
    dataElementType: "point",
    animations: {
      numbers: {
        type: "number",
        properties: ["x", "y", "borderWidth", "radius"]
      }
    }
  };
  BubbleController.overrides = {
    scales: {
      x: {
        type: "linear"
      },
      y: {
        type: "linear"
      }
    },
    plugins: {
      tooltip: {
        callbacks: {
          title() {
            return "";
          }
        }
      }
    }
  };
  function getRatioAndOffset(rotation, circumference, cutout) {
    let ratioX = 1;
    let ratioY = 1;
    let offsetX = 0;
    let offsetY = 0;
    if (circumference < TAU) {
      const startAngle = rotation;
      const endAngle = startAngle + circumference;
      const startX = Math.cos(startAngle);
      const startY = Math.sin(startAngle);
      const endX = Math.cos(endAngle);
      const endY = Math.sin(endAngle);
      const calcMax = (angle, a, b) => _angleBetween(angle, startAngle, endAngle, true) ? 1 : Math.max(a, a * cutout, b, b * cutout);
      const calcMin = (angle, a, b) => _angleBetween(angle, startAngle, endAngle, true) ? -1 : Math.min(a, a * cutout, b, b * cutout);
      const maxX = calcMax(0, startX, endX);
      const maxY = calcMax(HALF_PI, startY, endY);
      const minX = calcMin(PI, startX, endX);
      const minY = calcMin(PI + HALF_PI, startY, endY);
      ratioX = (maxX - minX) / 2;
      ratioY = (maxY - minY) / 2;
      offsetX = -(maxX + minX) / 2;
      offsetY = -(maxY + minY) / 2;
    }
    return { ratioX, ratioY, offsetX, offsetY };
  }
  var DoughnutController = class extends DatasetController {
    constructor(chart2, datasetIndex) {
      super(chart2, datasetIndex);
      this.enableOptionSharing = true;
      this.innerRadius = void 0;
      this.outerRadius = void 0;
      this.offsetX = void 0;
      this.offsetY = void 0;
    }
    linkScales() {
    }
    parse(start, count) {
      const data = this.getDataset().data;
      const meta = this._cachedMeta;
      if (this._parsing === false) {
        meta._parsed = data;
      } else {
        let getter = (i2) => +data[i2];
        if (isObject(data[start])) {
          const { key = "value" } = this._parsing;
          getter = (i2) => +resolveObjectKey(data[i2], key);
        }
        let i, ilen;
        for (i = start, ilen = start + count; i < ilen; ++i) {
          meta._parsed[i] = getter(i);
        }
      }
    }
    _getRotation() {
      return toRadians(this.options.rotation - 90);
    }
    _getCircumference() {
      return toRadians(this.options.circumference);
    }
    _getRotationExtents() {
      let min = TAU;
      let max = -TAU;
      for (let i = 0; i < this.chart.data.datasets.length; ++i) {
        if (this.chart.isDatasetVisible(i)) {
          const controller = this.chart.getDatasetMeta(i).controller;
          const rotation = controller._getRotation();
          const circumference = controller._getCircumference();
          min = Math.min(min, rotation);
          max = Math.max(max, rotation + circumference);
        }
      }
      return {
        rotation: min,
        circumference: max - min
      };
    }
    update(mode) {
      const chart2 = this.chart;
      const { chartArea } = chart2;
      const meta = this._cachedMeta;
      const arcs = meta.data;
      const spacing = this.getMaxBorderWidth() + this.getMaxOffset(arcs) + this.options.spacing;
      const maxSize = Math.max((Math.min(chartArea.width, chartArea.height) - spacing) / 2, 0);
      const cutout = Math.min(toPercentage(this.options.cutout, maxSize), 1);
      const chartWeight = this._getRingWeight(this.index);
      const { circumference, rotation } = this._getRotationExtents();
      const { ratioX, ratioY, offsetX, offsetY } = getRatioAndOffset(rotation, circumference, cutout);
      const maxWidth = (chartArea.width - spacing) / ratioX;
      const maxHeight = (chartArea.height - spacing) / ratioY;
      const maxRadius = Math.max(Math.min(maxWidth, maxHeight) / 2, 0);
      const outerRadius = toDimension(this.options.radius, maxRadius);
      const innerRadius = Math.max(outerRadius * cutout, 0);
      const radiusLength = (outerRadius - innerRadius) / this._getVisibleDatasetWeightTotal();
      this.offsetX = offsetX * outerRadius;
      this.offsetY = offsetY * outerRadius;
      meta.total = this.calculateTotal();
      this.outerRadius = outerRadius - radiusLength * this._getRingWeightOffset(this.index);
      this.innerRadius = Math.max(this.outerRadius - radiusLength * chartWeight, 0);
      this.updateElements(arcs, 0, arcs.length, mode);
    }
    _circumference(i, reset) {
      const opts = this.options;
      const meta = this._cachedMeta;
      const circumference = this._getCircumference();
      if (reset && opts.animation.animateRotate || !this.chart.getDataVisibility(i) || meta._parsed[i] === null || meta.data[i].hidden) {
        return 0;
      }
      return this.calculateCircumference(meta._parsed[i] * circumference / TAU);
    }
    updateElements(arcs, start, count, mode) {
      const reset = mode === "reset";
      const chart2 = this.chart;
      const chartArea = chart2.chartArea;
      const opts = chart2.options;
      const animationOpts = opts.animation;
      const centerX = (chartArea.left + chartArea.right) / 2;
      const centerY = (chartArea.top + chartArea.bottom) / 2;
      const animateScale = reset && animationOpts.animateScale;
      const innerRadius = animateScale ? 0 : this.innerRadius;
      const outerRadius = animateScale ? 0 : this.outerRadius;
      const firstOpts = this.resolveDataElementOptions(start, mode);
      const sharedOptions = this.getSharedOptions(firstOpts);
      const includeOptions = this.includeOptions(mode, sharedOptions);
      let startAngle = this._getRotation();
      let i;
      for (i = 0; i < start; ++i) {
        startAngle += this._circumference(i, reset);
      }
      for (i = start; i < start + count; ++i) {
        const circumference = this._circumference(i, reset);
        const arc = arcs[i];
        const properties = {
          x: centerX + this.offsetX,
          y: centerY + this.offsetY,
          startAngle,
          endAngle: startAngle + circumference,
          circumference,
          outerRadius,
          innerRadius
        };
        if (includeOptions) {
          properties.options = sharedOptions || this.resolveDataElementOptions(i, arc.active ? "active" : mode);
        }
        startAngle += circumference;
        this.updateElement(arc, i, properties, mode);
      }
      this.updateSharedOptions(sharedOptions, mode, firstOpts);
    }
    calculateTotal() {
      const meta = this._cachedMeta;
      const metaData = meta.data;
      let total = 0;
      let i;
      for (i = 0; i < metaData.length; i++) {
        const value = meta._parsed[i];
        if (value !== null && !isNaN(value) && this.chart.getDataVisibility(i) && !metaData[i].hidden) {
          total += Math.abs(value);
        }
      }
      return total;
    }
    calculateCircumference(value) {
      const total = this._cachedMeta.total;
      if (total > 0 && !isNaN(value)) {
        return TAU * (Math.abs(value) / total);
      }
      return 0;
    }
    getLabelAndValue(index) {
      const meta = this._cachedMeta;
      const chart2 = this.chart;
      const labels = chart2.data.labels || [];
      const value = formatNumber(meta._parsed[index], chart2.options.locale);
      return {
        label: labels[index] || "",
        value
      };
    }
    getMaxBorderWidth(arcs) {
      let max = 0;
      const chart2 = this.chart;
      let i, ilen, meta, controller, options;
      if (!arcs) {
        for (i = 0, ilen = chart2.data.datasets.length; i < ilen; ++i) {
          if (chart2.isDatasetVisible(i)) {
            meta = chart2.getDatasetMeta(i);
            arcs = meta.data;
            controller = meta.controller;
            break;
          }
        }
      }
      if (!arcs) {
        return 0;
      }
      for (i = 0, ilen = arcs.length; i < ilen; ++i) {
        options = controller.resolveDataElementOptions(i);
        if (options.borderAlign !== "inner") {
          max = Math.max(max, options.borderWidth || 0, options.hoverBorderWidth || 0);
        }
      }
      return max;
    }
    getMaxOffset(arcs) {
      let max = 0;
      for (let i = 0, ilen = arcs.length; i < ilen; ++i) {
        const options = this.resolveDataElementOptions(i);
        max = Math.max(max, options.offset || 0, options.hoverOffset || 0);
      }
      return max;
    }
    _getRingWeightOffset(datasetIndex) {
      let ringWeightOffset = 0;
      for (let i = 0; i < datasetIndex; ++i) {
        if (this.chart.isDatasetVisible(i)) {
          ringWeightOffset += this._getRingWeight(i);
        }
      }
      return ringWeightOffset;
    }
    _getRingWeight(datasetIndex) {
      return Math.max(valueOrDefault(this.chart.data.datasets[datasetIndex].weight, 1), 0);
    }
    _getVisibleDatasetWeightTotal() {
      return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
    }
  };
  DoughnutController.id = "doughnut";
  DoughnutController.defaults = {
    datasetElementType: false,
    dataElementType: "arc",
    animation: {
      animateRotate: true,
      animateScale: false
    },
    animations: {
      numbers: {
        type: "number",
        properties: ["circumference", "endAngle", "innerRadius", "outerRadius", "startAngle", "x", "y", "offset", "borderWidth", "spacing"]
      }
    },
    cutout: "50%",
    rotation: 0,
    circumference: 360,
    radius: "100%",
    spacing: 0,
    indexAxis: "r"
  };
  DoughnutController.descriptors = {
    _scriptable: (name) => name !== "spacing",
    _indexable: (name) => name !== "spacing"
  };
  DoughnutController.overrides = {
    aspectRatio: 1,
    plugins: {
      legend: {
        labels: {
          generateLabels(chart2) {
            const data = chart2.data;
            if (data.labels.length && data.datasets.length) {
              const { labels: { pointStyle } } = chart2.legend.options;
              return data.labels.map((label, i) => {
                const meta = chart2.getDatasetMeta(0);
                const style = meta.controller.getStyle(i);
                return {
                  text: label,
                  fillStyle: style.backgroundColor,
                  strokeStyle: style.borderColor,
                  lineWidth: style.borderWidth,
                  pointStyle,
                  hidden: !chart2.getDataVisibility(i),
                  index: i
                };
              });
            }
            return [];
          }
        },
        onClick(e, legendItem, legend) {
          legend.chart.toggleDataVisibility(legendItem.index);
          legend.chart.update();
        }
      },
      tooltip: {
        callbacks: {
          title() {
            return "";
          },
          label(tooltipItem) {
            let dataLabel = tooltipItem.label;
            const value = ": " + tooltipItem.formattedValue;
            if (isArray(dataLabel)) {
              dataLabel = dataLabel.slice();
              dataLabel[0] += value;
            } else {
              dataLabel += value;
            }
            return dataLabel;
          }
        }
      }
    }
  };
  var LineController = class extends DatasetController {
    initialize() {
      this.enableOptionSharing = true;
      super.initialize();
    }
    update(mode) {
      const meta = this._cachedMeta;
      const { dataset: line, data: points = [], _dataset } = meta;
      const animationsDisabled = this.chart._animationsDisabled;
      let { start, count } = getStartAndCountOfVisiblePoints(meta, points, animationsDisabled);
      this._drawStart = start;
      this._drawCount = count;
      if (scaleRangesChanged(meta)) {
        start = 0;
        count = points.length;
      }
      line._chart = this.chart;
      line._datasetIndex = this.index;
      line._decimated = !!_dataset._decimated;
      line.points = points;
      const options = this.resolveDatasetElementOptions(mode);
      if (!this.options.showLine) {
        options.borderWidth = 0;
      }
      options.segment = this.options.segment;
      this.updateElement(line, void 0, {
        animated: !animationsDisabled,
        options
      }, mode);
      this.updateElements(points, start, count, mode);
    }
    updateElements(points, start, count, mode) {
      const reset = mode === "reset";
      const { iScale, vScale, _stacked, _dataset } = this._cachedMeta;
      const firstOpts = this.resolveDataElementOptions(start, mode);
      const sharedOptions = this.getSharedOptions(firstOpts);
      const includeOptions = this.includeOptions(mode, sharedOptions);
      const iAxis = iScale.axis;
      const vAxis = vScale.axis;
      const { spanGaps, segment } = this.options;
      const maxGapLength = isNumber(spanGaps) ? spanGaps : Number.POSITIVE_INFINITY;
      const directUpdate = this.chart._animationsDisabled || reset || mode === "none";
      let prevParsed = start > 0 && this.getParsed(start - 1);
      for (let i = start; i < start + count; ++i) {
        const point = points[i];
        const parsed = this.getParsed(i);
        const properties = directUpdate ? point : {};
        const nullData = isNullOrUndef(parsed[vAxis]);
        const iPixel = properties[iAxis] = iScale.getPixelForValue(parsed[iAxis], i);
        const vPixel = properties[vAxis] = reset || nullData ? vScale.getBasePixel() : vScale.getPixelForValue(_stacked ? this.applyStack(vScale, parsed, _stacked) : parsed[vAxis], i);
        properties.skip = isNaN(iPixel) || isNaN(vPixel) || nullData;
        properties.stop = i > 0 && parsed[iAxis] - prevParsed[iAxis] > maxGapLength;
        if (segment) {
          properties.parsed = parsed;
          properties.raw = _dataset.data[i];
        }
        if (includeOptions) {
          properties.options = sharedOptions || this.resolveDataElementOptions(i, point.active ? "active" : mode);
        }
        if (!directUpdate) {
          this.updateElement(point, i, properties, mode);
        }
        prevParsed = parsed;
      }
      this.updateSharedOptions(sharedOptions, mode, firstOpts);
    }
    getMaxOverflow() {
      const meta = this._cachedMeta;
      const dataset = meta.dataset;
      const border = dataset.options && dataset.options.borderWidth || 0;
      const data = meta.data || [];
      if (!data.length) {
        return border;
      }
      const firstPoint = data[0].size(this.resolveDataElementOptions(0));
      const lastPoint = data[data.length - 1].size(this.resolveDataElementOptions(data.length - 1));
      return Math.max(border, firstPoint, lastPoint) / 2;
    }
    draw() {
      const meta = this._cachedMeta;
      meta.dataset.updateControlPoints(this.chart.chartArea, meta.iScale.axis);
      super.draw();
    }
  };
  LineController.id = "line";
  LineController.defaults = {
    datasetElementType: "line",
    dataElementType: "point",
    showLine: true,
    spanGaps: false
  };
  LineController.overrides = {
    scales: {
      _index_: {
        type: "category"
      },
      _value_: {
        type: "linear"
      }
    }
  };
  function getStartAndCountOfVisiblePoints(meta, points, animationsDisabled) {
    const pointCount = points.length;
    let start = 0;
    let count = pointCount;
    if (meta._sorted) {
      const { iScale, _parsed } = meta;
      const axis = iScale.axis;
      const { min, max, minDefined, maxDefined } = iScale.getUserBounds();
      if (minDefined) {
        start = _limitValue(Math.min(_lookupByKey(_parsed, iScale.axis, min).lo, animationsDisabled ? pointCount : _lookupByKey(points, axis, iScale.getPixelForValue(min)).lo), 0, pointCount - 1);
      }
      if (maxDefined) {
        count = _limitValue(Math.max(_lookupByKey(_parsed, iScale.axis, max).hi + 1, animationsDisabled ? 0 : _lookupByKey(points, axis, iScale.getPixelForValue(max)).hi + 1), start, pointCount) - start;
      } else {
        count = pointCount - start;
      }
    }
    return { start, count };
  }
  function scaleRangesChanged(meta) {
    const { xScale, yScale, _scaleRanges } = meta;
    const newRanges = {
      xmin: xScale.min,
      xmax: xScale.max,
      ymin: yScale.min,
      ymax: yScale.max
    };
    if (!_scaleRanges) {
      meta._scaleRanges = newRanges;
      return true;
    }
    const changed = _scaleRanges.xmin !== xScale.min || _scaleRanges.xmax !== xScale.max || _scaleRanges.ymin !== yScale.min || _scaleRanges.ymax !== yScale.max;
    Object.assign(_scaleRanges, newRanges);
    return changed;
  }
  var PolarAreaController = class extends DatasetController {
    constructor(chart2, datasetIndex) {
      super(chart2, datasetIndex);
      this.innerRadius = void 0;
      this.outerRadius = void 0;
    }
    getLabelAndValue(index) {
      const meta = this._cachedMeta;
      const chart2 = this.chart;
      const labels = chart2.data.labels || [];
      const value = formatNumber(meta._parsed[index].r, chart2.options.locale);
      return {
        label: labels[index] || "",
        value
      };
    }
    update(mode) {
      const arcs = this._cachedMeta.data;
      this._updateRadius();
      this.updateElements(arcs, 0, arcs.length, mode);
    }
    _updateRadius() {
      const chart2 = this.chart;
      const chartArea = chart2.chartArea;
      const opts = chart2.options;
      const minSize = Math.min(chartArea.right - chartArea.left, chartArea.bottom - chartArea.top);
      const outerRadius = Math.max(minSize / 2, 0);
      const innerRadius = Math.max(opts.cutoutPercentage ? outerRadius / 100 * opts.cutoutPercentage : 1, 0);
      const radiusLength = (outerRadius - innerRadius) / chart2.getVisibleDatasetCount();
      this.outerRadius = outerRadius - radiusLength * this.index;
      this.innerRadius = this.outerRadius - radiusLength;
    }
    updateElements(arcs, start, count, mode) {
      const reset = mode === "reset";
      const chart2 = this.chart;
      const dataset = this.getDataset();
      const opts = chart2.options;
      const animationOpts = opts.animation;
      const scale = this._cachedMeta.rScale;
      const centerX = scale.xCenter;
      const centerY = scale.yCenter;
      const datasetStartAngle = scale.getIndexAngle(0) - 0.5 * PI;
      let angle = datasetStartAngle;
      let i;
      const defaultAngle = 360 / this.countVisibleElements();
      for (i = 0; i < start; ++i) {
        angle += this._computeAngle(i, mode, defaultAngle);
      }
      for (i = start; i < start + count; i++) {
        const arc = arcs[i];
        let startAngle = angle;
        let endAngle = angle + this._computeAngle(i, mode, defaultAngle);
        let outerRadius = chart2.getDataVisibility(i) ? scale.getDistanceFromCenterForValue(dataset.data[i]) : 0;
        angle = endAngle;
        if (reset) {
          if (animationOpts.animateScale) {
            outerRadius = 0;
          }
          if (animationOpts.animateRotate) {
            startAngle = endAngle = datasetStartAngle;
          }
        }
        const properties = {
          x: centerX,
          y: centerY,
          innerRadius: 0,
          outerRadius,
          startAngle,
          endAngle,
          options: this.resolveDataElementOptions(i, arc.active ? "active" : mode)
        };
        this.updateElement(arc, i, properties, mode);
      }
    }
    countVisibleElements() {
      const dataset = this.getDataset();
      const meta = this._cachedMeta;
      let count = 0;
      meta.data.forEach((element, index) => {
        if (!isNaN(dataset.data[index]) && this.chart.getDataVisibility(index)) {
          count++;
        }
      });
      return count;
    }
    _computeAngle(index, mode, defaultAngle) {
      return this.chart.getDataVisibility(index) ? toRadians(this.resolveDataElementOptions(index, mode).angle || defaultAngle) : 0;
    }
  };
  PolarAreaController.id = "polarArea";
  PolarAreaController.defaults = {
    dataElementType: "arc",
    animation: {
      animateRotate: true,
      animateScale: true
    },
    animations: {
      numbers: {
        type: "number",
        properties: ["x", "y", "startAngle", "endAngle", "innerRadius", "outerRadius"]
      }
    },
    indexAxis: "r",
    startAngle: 0
  };
  PolarAreaController.overrides = {
    aspectRatio: 1,
    plugins: {
      legend: {
        labels: {
          generateLabels(chart2) {
            const data = chart2.data;
            if (data.labels.length && data.datasets.length) {
              const { labels: { pointStyle } } = chart2.legend.options;
              return data.labels.map((label, i) => {
                const meta = chart2.getDatasetMeta(0);
                const style = meta.controller.getStyle(i);
                return {
                  text: label,
                  fillStyle: style.backgroundColor,
                  strokeStyle: style.borderColor,
                  lineWidth: style.borderWidth,
                  pointStyle,
                  hidden: !chart2.getDataVisibility(i),
                  index: i
                };
              });
            }
            return [];
          }
        },
        onClick(e, legendItem, legend) {
          legend.chart.toggleDataVisibility(legendItem.index);
          legend.chart.update();
        }
      },
      tooltip: {
        callbacks: {
          title() {
            return "";
          },
          label(context) {
            return context.chart.data.labels[context.dataIndex] + ": " + context.formattedValue;
          }
        }
      }
    },
    scales: {
      r: {
        type: "radialLinear",
        angleLines: {
          display: false
        },
        beginAtZero: true,
        grid: {
          circular: true
        },
        pointLabels: {
          display: false
        },
        startAngle: 0
      }
    }
  };
  var PieController = class extends DoughnutController {
  };
  PieController.id = "pie";
  PieController.defaults = {
    cutout: 0,
    rotation: 0,
    circumference: 360,
    radius: "100%"
  };
  var RadarController = class extends DatasetController {
    getLabelAndValue(index) {
      const vScale = this._cachedMeta.vScale;
      const parsed = this.getParsed(index);
      return {
        label: vScale.getLabels()[index],
        value: "" + vScale.getLabelForValue(parsed[vScale.axis])
      };
    }
    update(mode) {
      const meta = this._cachedMeta;
      const line = meta.dataset;
      const points = meta.data || [];
      const labels = meta.iScale.getLabels();
      line.points = points;
      if (mode !== "resize") {
        const options = this.resolveDatasetElementOptions(mode);
        if (!this.options.showLine) {
          options.borderWidth = 0;
        }
        const properties = {
          _loop: true,
          _fullLoop: labels.length === points.length,
          options
        };
        this.updateElement(line, void 0, properties, mode);
      }
      this.updateElements(points, 0, points.length, mode);
    }
    updateElements(points, start, count, mode) {
      const dataset = this.getDataset();
      const scale = this._cachedMeta.rScale;
      const reset = mode === "reset";
      for (let i = start; i < start + count; i++) {
        const point = points[i];
        const options = this.resolveDataElementOptions(i, point.active ? "active" : mode);
        const pointPosition = scale.getPointPositionForValue(i, dataset.data[i]);
        const x = reset ? scale.xCenter : pointPosition.x;
        const y = reset ? scale.yCenter : pointPosition.y;
        const properties = {
          x,
          y,
          angle: pointPosition.angle,
          skip: isNaN(x) || isNaN(y),
          options
        };
        this.updateElement(point, i, properties, mode);
      }
    }
  };
  RadarController.id = "radar";
  RadarController.defaults = {
    datasetElementType: "line",
    dataElementType: "point",
    indexAxis: "r",
    showLine: true,
    elements: {
      line: {
        fill: "start"
      }
    }
  };
  RadarController.overrides = {
    aspectRatio: 1,
    scales: {
      r: {
        type: "radialLinear"
      }
    }
  };
  var ScatterController = class extends LineController {
  };
  ScatterController.id = "scatter";
  ScatterController.defaults = {
    showLine: false,
    fill: false
  };
  ScatterController.overrides = {
    interaction: {
      mode: "point"
    },
    plugins: {
      tooltip: {
        callbacks: {
          title() {
            return "";
          },
          label(item) {
            return "(" + item.label + ", " + item.formattedValue + ")";
          }
        }
      }
    },
    scales: {
      x: {
        type: "linear"
      },
      y: {
        type: "linear"
      }
    }
  };
  var controllers = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PolarAreaController,
    PieController,
    RadarController,
    ScatterController
  });
  function abstract() {
    throw new Error("This method is not implemented: Check that a complete date adapter is provided.");
  }
  var DateAdapter = class {
    constructor(options) {
      this.options = options || {};
    }
    formats() {
      return abstract();
    }
    parse(value, format) {
      return abstract();
    }
    format(timestamp, format) {
      return abstract();
    }
    add(timestamp, amount, unit) {
      return abstract();
    }
    diff(a, b, unit) {
      return abstract();
    }
    startOf(timestamp, unit, weekday) {
      return abstract();
    }
    endOf(timestamp, unit) {
      return abstract();
    }
  };
  DateAdapter.override = function(members) {
    Object.assign(DateAdapter.prototype, members);
  };
  var adapters = {
    _date: DateAdapter
  };
  function getRelativePosition2(e, chart2) {
    if ("native" in e) {
      return {
        x: e.x,
        y: e.y
      };
    }
    return getRelativePosition(e, chart2);
  }
  function evaluateAllVisibleItems(chart2, handler) {
    const metasets = chart2.getSortedVisibleDatasetMetas();
    let index, data, element;
    for (let i = 0, ilen = metasets.length; i < ilen; ++i) {
      ({ index, data } = metasets[i]);
      for (let j = 0, jlen = data.length; j < jlen; ++j) {
        element = data[j];
        if (!element.skip) {
          handler(element, index, j);
        }
      }
    }
  }
  function binarySearch(metaset, axis, value, intersect) {
    const { controller, data, _sorted } = metaset;
    const iScale = controller._cachedMeta.iScale;
    if (iScale && axis === iScale.axis && axis !== "r" && _sorted && data.length) {
      const lookupMethod = iScale._reversePixels ? _rlookupByKey : _lookupByKey;
      if (!intersect) {
        return lookupMethod(data, axis, value);
      } else if (controller._sharedOptions) {
        const el = data[0];
        const range = typeof el.getRange === "function" && el.getRange(axis);
        if (range) {
          const start = lookupMethod(data, axis, value - range);
          const end = lookupMethod(data, axis, value + range);
          return { lo: start.lo, hi: end.hi };
        }
      }
    }
    return { lo: 0, hi: data.length - 1 };
  }
  function optimizedEvaluateItems(chart2, axis, position, handler, intersect) {
    const metasets = chart2.getSortedVisibleDatasetMetas();
    const value = position[axis];
    for (let i = 0, ilen = metasets.length; i < ilen; ++i) {
      const { index, data } = metasets[i];
      const { lo, hi } = binarySearch(metasets[i], axis, value, intersect);
      for (let j = lo; j <= hi; ++j) {
        const element = data[j];
        if (!element.skip) {
          handler(element, index, j);
        }
      }
    }
  }
  function getDistanceMetricForAxis(axis) {
    const useX = axis.indexOf("x") !== -1;
    const useY = axis.indexOf("y") !== -1;
    return function(pt1, pt2) {
      const deltaX = useX ? Math.abs(pt1.x - pt2.x) : 0;
      const deltaY = useY ? Math.abs(pt1.y - pt2.y) : 0;
      return Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
    };
  }
  function getIntersectItems(chart2, position, axis, useFinalPosition) {
    const items = [];
    if (!_isPointInArea(position, chart2.chartArea, chart2._minPadding)) {
      return items;
    }
    const evaluationFunc = function(element, datasetIndex, index) {
      if (element.inRange(position.x, position.y, useFinalPosition)) {
        items.push({ element, datasetIndex, index });
      }
    };
    optimizedEvaluateItems(chart2, axis, position, evaluationFunc, true);
    return items;
  }
  function getNearestRadialItems(chart2, position, axis, useFinalPosition) {
    let items = [];
    function evaluationFunc(element, datasetIndex, index) {
      const { startAngle, endAngle } = element.getProps(["startAngle", "endAngle"], useFinalPosition);
      const { angle } = getAngleFromPoint(element, { x: position.x, y: position.y });
      if (_angleBetween(angle, startAngle, endAngle)) {
        items.push({ element, datasetIndex, index });
      }
    }
    optimizedEvaluateItems(chart2, axis, position, evaluationFunc);
    return items;
  }
  function getNearestCartesianItems(chart2, position, axis, intersect, useFinalPosition) {
    let items = [];
    const distanceMetric = getDistanceMetricForAxis(axis);
    let minDistance = Number.POSITIVE_INFINITY;
    function evaluationFunc(element, datasetIndex, index) {
      const inRange2 = element.inRange(position.x, position.y, useFinalPosition);
      if (intersect && !inRange2) {
        return;
      }
      const center = element.getCenterPoint(useFinalPosition);
      const pointInArea = _isPointInArea(center, chart2.chartArea, chart2._minPadding);
      if (!pointInArea && !inRange2) {
        return;
      }
      const distance = distanceMetric(position, center);
      if (distance < minDistance) {
        items = [{ element, datasetIndex, index }];
        minDistance = distance;
      } else if (distance === minDistance) {
        items.push({ element, datasetIndex, index });
      }
    }
    optimizedEvaluateItems(chart2, axis, position, evaluationFunc);
    return items;
  }
  function getNearestItems(chart2, position, axis, intersect, useFinalPosition) {
    if (!_isPointInArea(position, chart2.chartArea, chart2._minPadding)) {
      return [];
    }
    return axis === "r" && !intersect ? getNearestRadialItems(chart2, position, axis, useFinalPosition) : getNearestCartesianItems(chart2, position, axis, intersect, useFinalPosition);
  }
  function getAxisItems(chart2, e, options, useFinalPosition) {
    const position = getRelativePosition2(e, chart2);
    const items = [];
    const axis = options.axis;
    const rangeMethod = axis === "x" ? "inXRange" : "inYRange";
    let intersectsItem = false;
    evaluateAllVisibleItems(chart2, (element, datasetIndex, index) => {
      if (element[rangeMethod](position[axis], useFinalPosition)) {
        items.push({ element, datasetIndex, index });
      }
      if (element.inRange(position.x, position.y, useFinalPosition)) {
        intersectsItem = true;
      }
    });
    if (options.intersect && !intersectsItem) {
      return [];
    }
    return items;
  }
  var Interaction = {
    modes: {
      index(chart2, e, options, useFinalPosition) {
        const position = getRelativePosition2(e, chart2);
        const axis = options.axis || "x";
        const items = options.intersect ? getIntersectItems(chart2, position, axis, useFinalPosition) : getNearestItems(chart2, position, axis, false, useFinalPosition);
        const elements2 = [];
        if (!items.length) {
          return [];
        }
        chart2.getSortedVisibleDatasetMetas().forEach((meta) => {
          const index = items[0].index;
          const element = meta.data[index];
          if (element && !element.skip) {
            elements2.push({ element, datasetIndex: meta.index, index });
          }
        });
        return elements2;
      },
      dataset(chart2, e, options, useFinalPosition) {
        const position = getRelativePosition2(e, chart2);
        const axis = options.axis || "xy";
        let items = options.intersect ? getIntersectItems(chart2, position, axis, useFinalPosition) : getNearestItems(chart2, position, axis, false, useFinalPosition);
        if (items.length > 0) {
          const datasetIndex = items[0].datasetIndex;
          const data = chart2.getDatasetMeta(datasetIndex).data;
          items = [];
          for (let i = 0; i < data.length; ++i) {
            items.push({ element: data[i], datasetIndex, index: i });
          }
        }
        return items;
      },
      point(chart2, e, options, useFinalPosition) {
        const position = getRelativePosition2(e, chart2);
        const axis = options.axis || "xy";
        return getIntersectItems(chart2, position, axis, useFinalPosition);
      },
      nearest(chart2, e, options, useFinalPosition) {
        const position = getRelativePosition2(e, chart2);
        const axis = options.axis || "xy";
        return getNearestItems(chart2, position, axis, options.intersect, useFinalPosition);
      },
      x(chart2, e, options, useFinalPosition) {
        return getAxisItems(chart2, e, { axis: "x", intersect: options.intersect }, useFinalPosition);
      },
      y(chart2, e, options, useFinalPosition) {
        return getAxisItems(chart2, e, { axis: "y", intersect: options.intersect }, useFinalPosition);
      }
    }
  };
  var STATIC_POSITIONS = ["left", "top", "right", "bottom"];
  function filterByPosition(array, position) {
    return array.filter((v) => v.pos === position);
  }
  function filterDynamicPositionByAxis(array, axis) {
    return array.filter((v) => STATIC_POSITIONS.indexOf(v.pos) === -1 && v.box.axis === axis);
  }
  function sortByWeight(array, reverse) {
    return array.sort((a, b) => {
      const v0 = reverse ? b : a;
      const v1 = reverse ? a : b;
      return v0.weight === v1.weight ? v0.index - v1.index : v0.weight - v1.weight;
    });
  }
  function wrapBoxes(boxes) {
    const layoutBoxes = [];
    let i, ilen, box, pos, stack, stackWeight;
    for (i = 0, ilen = (boxes || []).length; i < ilen; ++i) {
      box = boxes[i];
      ({ position: pos, options: { stack, stackWeight = 1 } } = box);
      layoutBoxes.push({
        index: i,
        box,
        pos,
        horizontal: box.isHorizontal(),
        weight: box.weight,
        stack: stack && pos + stack,
        stackWeight
      });
    }
    return layoutBoxes;
  }
  function buildStacks(layouts2) {
    const stacks = {};
    for (const wrap of layouts2) {
      const { stack, pos, stackWeight } = wrap;
      if (!stack || !STATIC_POSITIONS.includes(pos)) {
        continue;
      }
      const _stack = stacks[stack] || (stacks[stack] = { count: 0, placed: 0, weight: 0, size: 0 });
      _stack.count++;
      _stack.weight += stackWeight;
    }
    return stacks;
  }
  function setLayoutDims(layouts2, params) {
    const stacks = buildStacks(layouts2);
    const { vBoxMaxWidth, hBoxMaxHeight } = params;
    let i, ilen, layout;
    for (i = 0, ilen = layouts2.length; i < ilen; ++i) {
      layout = layouts2[i];
      const { fullSize } = layout.box;
      const stack = stacks[layout.stack];
      const factor = stack && layout.stackWeight / stack.weight;
      if (layout.horizontal) {
        layout.width = factor ? factor * vBoxMaxWidth : fullSize && params.availableWidth;
        layout.height = hBoxMaxHeight;
      } else {
        layout.width = vBoxMaxWidth;
        layout.height = factor ? factor * hBoxMaxHeight : fullSize && params.availableHeight;
      }
    }
    return stacks;
  }
  function buildLayoutBoxes(boxes) {
    const layoutBoxes = wrapBoxes(boxes);
    const fullSize = sortByWeight(layoutBoxes.filter((wrap) => wrap.box.fullSize), true);
    const left = sortByWeight(filterByPosition(layoutBoxes, "left"), true);
    const right = sortByWeight(filterByPosition(layoutBoxes, "right"));
    const top = sortByWeight(filterByPosition(layoutBoxes, "top"), true);
    const bottom = sortByWeight(filterByPosition(layoutBoxes, "bottom"));
    const centerHorizontal = filterDynamicPositionByAxis(layoutBoxes, "x");
    const centerVertical = filterDynamicPositionByAxis(layoutBoxes, "y");
    return {
      fullSize,
      leftAndTop: left.concat(top),
      rightAndBottom: right.concat(centerVertical).concat(bottom).concat(centerHorizontal),
      chartArea: filterByPosition(layoutBoxes, "chartArea"),
      vertical: left.concat(right).concat(centerVertical),
      horizontal: top.concat(bottom).concat(centerHorizontal)
    };
  }
  function getCombinedMax(maxPadding, chartArea, a, b) {
    return Math.max(maxPadding[a], chartArea[a]) + Math.max(maxPadding[b], chartArea[b]);
  }
  function updateMaxPadding(maxPadding, boxPadding) {
    maxPadding.top = Math.max(maxPadding.top, boxPadding.top);
    maxPadding.left = Math.max(maxPadding.left, boxPadding.left);
    maxPadding.bottom = Math.max(maxPadding.bottom, boxPadding.bottom);
    maxPadding.right = Math.max(maxPadding.right, boxPadding.right);
  }
  function updateDims(chartArea, params, layout, stacks) {
    const { pos, box } = layout;
    const maxPadding = chartArea.maxPadding;
    if (!isObject(pos)) {
      if (layout.size) {
        chartArea[pos] -= layout.size;
      }
      const stack = stacks[layout.stack] || { size: 0, count: 1 };
      stack.size = Math.max(stack.size, layout.horizontal ? box.height : box.width);
      layout.size = stack.size / stack.count;
      chartArea[pos] += layout.size;
    }
    if (box.getPadding) {
      updateMaxPadding(maxPadding, box.getPadding());
    }
    const newWidth = Math.max(0, params.outerWidth - getCombinedMax(maxPadding, chartArea, "left", "right"));
    const newHeight = Math.max(0, params.outerHeight - getCombinedMax(maxPadding, chartArea, "top", "bottom"));
    const widthChanged = newWidth !== chartArea.w;
    const heightChanged = newHeight !== chartArea.h;
    chartArea.w = newWidth;
    chartArea.h = newHeight;
    return layout.horizontal ? { same: widthChanged, other: heightChanged } : { same: heightChanged, other: widthChanged };
  }
  function handleMaxPadding(chartArea) {
    const maxPadding = chartArea.maxPadding;
    function updatePos(pos) {
      const change = Math.max(maxPadding[pos] - chartArea[pos], 0);
      chartArea[pos] += change;
      return change;
    }
    chartArea.y += updatePos("top");
    chartArea.x += updatePos("left");
    updatePos("right");
    updatePos("bottom");
  }
  function getMargins(horizontal, chartArea) {
    const maxPadding = chartArea.maxPadding;
    function marginForPositions(positions2) {
      const margin = { left: 0, top: 0, right: 0, bottom: 0 };
      positions2.forEach((pos) => {
        margin[pos] = Math.max(chartArea[pos], maxPadding[pos]);
      });
      return margin;
    }
    return horizontal ? marginForPositions(["left", "right"]) : marginForPositions(["top", "bottom"]);
  }
  function fitBoxes(boxes, chartArea, params, stacks) {
    const refitBoxes = [];
    let i, ilen, layout, box, refit, changed;
    for (i = 0, ilen = boxes.length, refit = 0; i < ilen; ++i) {
      layout = boxes[i];
      box = layout.box;
      box.update(layout.width || chartArea.w, layout.height || chartArea.h, getMargins(layout.horizontal, chartArea));
      const { same, other } = updateDims(chartArea, params, layout, stacks);
      refit |= same && refitBoxes.length;
      changed = changed || other;
      if (!box.fullSize) {
        refitBoxes.push(layout);
      }
    }
    return refit && fitBoxes(refitBoxes, chartArea, params, stacks) || changed;
  }
  function setBoxDims(box, left, top, width, height) {
    box.top = top;
    box.left = left;
    box.right = left + width;
    box.bottom = top + height;
    box.width = width;
    box.height = height;
  }
  function placeBoxes(boxes, chartArea, params, stacks) {
    const userPadding = params.padding;
    let { x, y } = chartArea;
    for (const layout of boxes) {
      const box = layout.box;
      const stack = stacks[layout.stack] || { count: 1, placed: 0, weight: 1 };
      const weight = layout.stackWeight / stack.weight || 1;
      if (layout.horizontal) {
        const width = chartArea.w * weight;
        const height = stack.size || box.height;
        if (defined(stack.start)) {
          y = stack.start;
        }
        if (box.fullSize) {
          setBoxDims(box, userPadding.left, y, params.outerWidth - userPadding.right - userPadding.left, height);
        } else {
          setBoxDims(box, chartArea.left + stack.placed, y, width, height);
        }
        stack.start = y;
        stack.placed += width;
        y = box.bottom;
      } else {
        const height = chartArea.h * weight;
        const width = stack.size || box.width;
        if (defined(stack.start)) {
          x = stack.start;
        }
        if (box.fullSize) {
          setBoxDims(box, x, userPadding.top, width, params.outerHeight - userPadding.bottom - userPadding.top);
        } else {
          setBoxDims(box, x, chartArea.top + stack.placed, width, height);
        }
        stack.start = x;
        stack.placed += height;
        x = box.right;
      }
    }
    chartArea.x = x;
    chartArea.y = y;
  }
  defaults.set("layout", {
    autoPadding: true,
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  });
  var layouts = {
    addBox(chart2, item) {
      if (!chart2.boxes) {
        chart2.boxes = [];
      }
      item.fullSize = item.fullSize || false;
      item.position = item.position || "top";
      item.weight = item.weight || 0;
      item._layers = item._layers || function() {
        return [{
          z: 0,
          draw(chartArea) {
            item.draw(chartArea);
          }
        }];
      };
      chart2.boxes.push(item);
    },
    removeBox(chart2, layoutItem) {
      const index = chart2.boxes ? chart2.boxes.indexOf(layoutItem) : -1;
      if (index !== -1) {
        chart2.boxes.splice(index, 1);
      }
    },
    configure(chart2, item, options) {
      item.fullSize = options.fullSize;
      item.position = options.position;
      item.weight = options.weight;
    },
    update(chart2, width, height, minPadding) {
      if (!chart2) {
        return;
      }
      const padding = toPadding(chart2.options.layout.padding);
      const availableWidth = Math.max(width - padding.width, 0);
      const availableHeight = Math.max(height - padding.height, 0);
      const boxes = buildLayoutBoxes(chart2.boxes);
      const verticalBoxes = boxes.vertical;
      const horizontalBoxes = boxes.horizontal;
      each(chart2.boxes, (box) => {
        if (typeof box.beforeLayout === "function") {
          box.beforeLayout();
        }
      });
      const visibleVerticalBoxCount = verticalBoxes.reduce((total, wrap) => wrap.box.options && wrap.box.options.display === false ? total : total + 1, 0) || 1;
      const params = Object.freeze({
        outerWidth: width,
        outerHeight: height,
        padding,
        availableWidth,
        availableHeight,
        vBoxMaxWidth: availableWidth / 2 / visibleVerticalBoxCount,
        hBoxMaxHeight: availableHeight / 2
      });
      const maxPadding = Object.assign({}, padding);
      updateMaxPadding(maxPadding, toPadding(minPadding));
      const chartArea = Object.assign({
        maxPadding,
        w: availableWidth,
        h: availableHeight,
        x: padding.left,
        y: padding.top
      }, padding);
      const stacks = setLayoutDims(verticalBoxes.concat(horizontalBoxes), params);
      fitBoxes(boxes.fullSize, chartArea, params, stacks);
      fitBoxes(verticalBoxes, chartArea, params, stacks);
      if (fitBoxes(horizontalBoxes, chartArea, params, stacks)) {
        fitBoxes(verticalBoxes, chartArea, params, stacks);
      }
      handleMaxPadding(chartArea);
      placeBoxes(boxes.leftAndTop, chartArea, params, stacks);
      chartArea.x += chartArea.w;
      chartArea.y += chartArea.h;
      placeBoxes(boxes.rightAndBottom, chartArea, params, stacks);
      chart2.chartArea = {
        left: chartArea.left,
        top: chartArea.top,
        right: chartArea.left + chartArea.w,
        bottom: chartArea.top + chartArea.h,
        height: chartArea.h,
        width: chartArea.w
      };
      each(boxes.chartArea, (layout) => {
        const box = layout.box;
        Object.assign(box, chart2.chartArea);
        box.update(chartArea.w, chartArea.h, { left: 0, top: 0, right: 0, bottom: 0 });
      });
    }
  };
  var BasePlatform = class {
    acquireContext(canvas, aspectRatio) {
    }
    releaseContext(context) {
      return false;
    }
    addEventListener(chart2, type, listener) {
    }
    removeEventListener(chart2, type, listener) {
    }
    getDevicePixelRatio() {
      return 1;
    }
    getMaximumSize(element, width, height, aspectRatio) {
      width = Math.max(0, width || element.width);
      height = height || element.height;
      return {
        width,
        height: Math.max(0, aspectRatio ? Math.floor(width / aspectRatio) : height)
      };
    }
    isAttached(canvas) {
      return true;
    }
    updateConfig(config) {
    }
  };
  var BasicPlatform = class extends BasePlatform {
    acquireContext(item) {
      return item && item.getContext && item.getContext("2d") || null;
    }
    updateConfig(config) {
      config.options.animation = false;
    }
  };
  var EXPANDO_KEY = "$chartjs";
  var EVENT_TYPES = {
    touchstart: "mousedown",
    touchmove: "mousemove",
    touchend: "mouseup",
    pointerenter: "mouseenter",
    pointerdown: "mousedown",
    pointermove: "mousemove",
    pointerup: "mouseup",
    pointerleave: "mouseout",
    pointerout: "mouseout"
  };
  var isNullOrEmpty = (value) => value === null || value === "";
  function initCanvas(canvas, aspectRatio) {
    const style = canvas.style;
    const renderHeight = canvas.getAttribute("height");
    const renderWidth = canvas.getAttribute("width");
    canvas[EXPANDO_KEY] = {
      initial: {
        height: renderHeight,
        width: renderWidth,
        style: {
          display: style.display,
          height: style.height,
          width: style.width
        }
      }
    };
    style.display = style.display || "block";
    style.boxSizing = style.boxSizing || "border-box";
    if (isNullOrEmpty(renderWidth)) {
      const displayWidth = readUsedSize(canvas, "width");
      if (displayWidth !== void 0) {
        canvas.width = displayWidth;
      }
    }
    if (isNullOrEmpty(renderHeight)) {
      if (canvas.style.height === "") {
        canvas.height = canvas.width / (aspectRatio || 2);
      } else {
        const displayHeight = readUsedSize(canvas, "height");
        if (displayHeight !== void 0) {
          canvas.height = displayHeight;
        }
      }
    }
    return canvas;
  }
  var eventListenerOptions = supportsEventListenerOptions ? { passive: true } : false;
  function addListener(node, type, listener) {
    node.addEventListener(type, listener, eventListenerOptions);
  }
  function removeListener(chart2, type, listener) {
    chart2.canvas.removeEventListener(type, listener, eventListenerOptions);
  }
  function fromNativeEvent(event, chart2) {
    const type = EVENT_TYPES[event.type] || event.type;
    const { x, y } = getRelativePosition(event, chart2);
    return {
      type,
      chart: chart2,
      native: event,
      x: x !== void 0 ? x : null,
      y: y !== void 0 ? y : null
    };
  }
  function nodeListContains(nodeList, canvas) {
    for (const node of nodeList) {
      if (node === canvas || node.contains(canvas)) {
        return true;
      }
    }
  }
  function createAttachObserver(chart2, type, listener) {
    const canvas = chart2.canvas;
    const observer = new MutationObserver((entries) => {
      let trigger = false;
      for (const entry of entries) {
        trigger = trigger || nodeListContains(entry.addedNodes, canvas);
        trigger = trigger && !nodeListContains(entry.removedNodes, canvas);
      }
      if (trigger) {
        listener();
      }
    });
    observer.observe(document, { childList: true, subtree: true });
    return observer;
  }
  function createDetachObserver(chart2, type, listener) {
    const canvas = chart2.canvas;
    const observer = new MutationObserver((entries) => {
      let trigger = false;
      for (const entry of entries) {
        trigger = trigger || nodeListContains(entry.removedNodes, canvas);
        trigger = trigger && !nodeListContains(entry.addedNodes, canvas);
      }
      if (trigger) {
        listener();
      }
    });
    observer.observe(document, { childList: true, subtree: true });
    return observer;
  }
  var drpListeningCharts = /* @__PURE__ */ new Map();
  var oldDevicePixelRatio = 0;
  function onWindowResize() {
    const dpr = window.devicePixelRatio;
    if (dpr === oldDevicePixelRatio) {
      return;
    }
    oldDevicePixelRatio = dpr;
    drpListeningCharts.forEach((resize, chart2) => {
      if (chart2.currentDevicePixelRatio !== dpr) {
        resize();
      }
    });
  }
  function listenDevicePixelRatioChanges(chart2, resize) {
    if (!drpListeningCharts.size) {
      window.addEventListener("resize", onWindowResize);
    }
    drpListeningCharts.set(chart2, resize);
  }
  function unlistenDevicePixelRatioChanges(chart2) {
    drpListeningCharts.delete(chart2);
    if (!drpListeningCharts.size) {
      window.removeEventListener("resize", onWindowResize);
    }
  }
  function createResizeObserver(chart2, type, listener) {
    const canvas = chart2.canvas;
    const container = canvas && _getParentNode(canvas);
    if (!container) {
      return;
    }
    const resize = throttled((width, height) => {
      const w = container.clientWidth;
      listener(width, height);
      if (w < container.clientWidth) {
        listener();
      }
    }, window);
    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      const width = entry.contentRect.width;
      const height = entry.contentRect.height;
      if (width === 0 && height === 0) {
        return;
      }
      resize(width, height);
    });
    observer.observe(container);
    listenDevicePixelRatioChanges(chart2, resize);
    return observer;
  }
  function releaseObserver(chart2, type, observer) {
    if (observer) {
      observer.disconnect();
    }
    if (type === "resize") {
      unlistenDevicePixelRatioChanges(chart2);
    }
  }
  function createProxyAndListen(chart2, type, listener) {
    const canvas = chart2.canvas;
    const proxy = throttled((event) => {
      if (chart2.ctx !== null) {
        listener(fromNativeEvent(event, chart2));
      }
    }, chart2, (args) => {
      const event = args[0];
      return [event, event.offsetX, event.offsetY];
    });
    addListener(canvas, type, proxy);
    return proxy;
  }
  var DomPlatform = class extends BasePlatform {
    acquireContext(canvas, aspectRatio) {
      const context = canvas && canvas.getContext && canvas.getContext("2d");
      if (context && context.canvas === canvas) {
        initCanvas(canvas, aspectRatio);
        return context;
      }
      return null;
    }
    releaseContext(context) {
      const canvas = context.canvas;
      if (!canvas[EXPANDO_KEY]) {
        return false;
      }
      const initial = canvas[EXPANDO_KEY].initial;
      ["height", "width"].forEach((prop) => {
        const value = initial[prop];
        if (isNullOrUndef(value)) {
          canvas.removeAttribute(prop);
        } else {
          canvas.setAttribute(prop, value);
        }
      });
      const style = initial.style || {};
      Object.keys(style).forEach((key) => {
        canvas.style[key] = style[key];
      });
      canvas.width = canvas.width;
      delete canvas[EXPANDO_KEY];
      return true;
    }
    addEventListener(chart2, type, listener) {
      this.removeEventListener(chart2, type);
      const proxies = chart2.$proxies || (chart2.$proxies = {});
      const handlers = {
        attach: createAttachObserver,
        detach: createDetachObserver,
        resize: createResizeObserver
      };
      const handler = handlers[type] || createProxyAndListen;
      proxies[type] = handler(chart2, type, listener);
    }
    removeEventListener(chart2, type) {
      const proxies = chart2.$proxies || (chart2.$proxies = {});
      const proxy = proxies[type];
      if (!proxy) {
        return;
      }
      const handlers = {
        attach: releaseObserver,
        detach: releaseObserver,
        resize: releaseObserver
      };
      const handler = handlers[type] || removeListener;
      handler(chart2, type, proxy);
      proxies[type] = void 0;
    }
    getDevicePixelRatio() {
      return window.devicePixelRatio;
    }
    getMaximumSize(canvas, width, height, aspectRatio) {
      return getMaximumSize(canvas, width, height, aspectRatio);
    }
    isAttached(canvas) {
      const container = _getParentNode(canvas);
      return !!(container && container.isConnected);
    }
  };
  function _detectPlatform(canvas) {
    if (!_isDomSupported() || typeof OffscreenCanvas !== "undefined" && canvas instanceof OffscreenCanvas) {
      return BasicPlatform;
    }
    return DomPlatform;
  }
  var Element = class {
    constructor() {
      this.x = void 0;
      this.y = void 0;
      this.active = false;
      this.options = void 0;
      this.$animations = void 0;
    }
    tooltipPosition(useFinalPosition) {
      const { x, y } = this.getProps(["x", "y"], useFinalPosition);
      return { x, y };
    }
    hasValue() {
      return isNumber(this.x) && isNumber(this.y);
    }
    getProps(props, final) {
      const anims = this.$animations;
      if (!final || !anims) {
        return this;
      }
      const ret = {};
      props.forEach((prop) => {
        ret[prop] = anims[prop] && anims[prop].active() ? anims[prop]._to : this[prop];
      });
      return ret;
    }
  };
  Element.defaults = {};
  Element.defaultRoutes = void 0;
  var formatters = {
    values(value) {
      return isArray(value) ? value : "" + value;
    },
    numeric(tickValue, index, ticks) {
      if (tickValue === 0) {
        return "0";
      }
      const locale = this.chart.options.locale;
      let notation;
      let delta = tickValue;
      if (ticks.length > 1) {
        const maxTick = Math.max(Math.abs(ticks[0].value), Math.abs(ticks[ticks.length - 1].value));
        if (maxTick < 1e-4 || maxTick > 1e15) {
          notation = "scientific";
        }
        delta = calculateDelta(tickValue, ticks);
      }
      const logDelta = log10(Math.abs(delta));
      const numDecimal = Math.max(Math.min(-1 * Math.floor(logDelta), 20), 0);
      const options = { notation, minimumFractionDigits: numDecimal, maximumFractionDigits: numDecimal };
      Object.assign(options, this.options.ticks.format);
      return formatNumber(tickValue, locale, options);
    },
    logarithmic(tickValue, index, ticks) {
      if (tickValue === 0) {
        return "0";
      }
      const remain = tickValue / Math.pow(10, Math.floor(log10(tickValue)));
      if (remain === 1 || remain === 2 || remain === 5) {
        return formatters.numeric.call(this, tickValue, index, ticks);
      }
      return "";
    }
  };
  function calculateDelta(tickValue, ticks) {
    let delta = ticks.length > 3 ? ticks[2].value - ticks[1].value : ticks[1].value - ticks[0].value;
    if (Math.abs(delta) >= 1 && tickValue !== Math.floor(tickValue)) {
      delta = tickValue - Math.floor(tickValue);
    }
    return delta;
  }
  var Ticks = { formatters };
  defaults.set("scale", {
    display: true,
    offset: false,
    reverse: false,
    beginAtZero: false,
    bounds: "ticks",
    grace: 0,
    grid: {
      display: true,
      lineWidth: 1,
      drawBorder: true,
      drawOnChartArea: true,
      drawTicks: true,
      tickLength: 8,
      tickWidth: (_ctx, options) => options.lineWidth,
      tickColor: (_ctx, options) => options.color,
      offset: false,
      borderDash: [],
      borderDashOffset: 0,
      borderWidth: 1
    },
    title: {
      display: false,
      text: "",
      padding: {
        top: 4,
        bottom: 4
      }
    },
    ticks: {
      minRotation: 0,
      maxRotation: 50,
      mirror: false,
      textStrokeWidth: 0,
      textStrokeColor: "",
      padding: 3,
      display: true,
      autoSkip: true,
      autoSkipPadding: 3,
      labelOffset: 0,
      callback: Ticks.formatters.values,
      minor: {},
      major: {},
      align: "center",
      crossAlign: "near",
      showLabelBackdrop: false,
      backdropColor: "rgba(255, 255, 255, 0.75)",
      backdropPadding: 2
    }
  });
  defaults.route("scale.ticks", "color", "", "color");
  defaults.route("scale.grid", "color", "", "borderColor");
  defaults.route("scale.grid", "borderColor", "", "borderColor");
  defaults.route("scale.title", "color", "", "color");
  defaults.describe("scale", {
    _fallback: false,
    _scriptable: (name) => !name.startsWith("before") && !name.startsWith("after") && name !== "callback" && name !== "parser",
    _indexable: (name) => name !== "borderDash" && name !== "tickBorderDash"
  });
  defaults.describe("scales", {
    _fallback: "scale"
  });
  defaults.describe("scale.ticks", {
    _scriptable: (name) => name !== "backdropPadding" && name !== "callback",
    _indexable: (name) => name !== "backdropPadding"
  });
  function autoSkip(scale, ticks) {
    const tickOpts = scale.options.ticks;
    const ticksLimit = tickOpts.maxTicksLimit || determineMaxTicks(scale);
    const majorIndices = tickOpts.major.enabled ? getMajorIndices(ticks) : [];
    const numMajorIndices = majorIndices.length;
    const first = majorIndices[0];
    const last = majorIndices[numMajorIndices - 1];
    const newTicks = [];
    if (numMajorIndices > ticksLimit) {
      skipMajors(ticks, newTicks, majorIndices, numMajorIndices / ticksLimit);
      return newTicks;
    }
    const spacing = calculateSpacing(majorIndices, ticks, ticksLimit);
    if (numMajorIndices > 0) {
      let i, ilen;
      const avgMajorSpacing = numMajorIndices > 1 ? Math.round((last - first) / (numMajorIndices - 1)) : null;
      skip(ticks, newTicks, spacing, isNullOrUndef(avgMajorSpacing) ? 0 : first - avgMajorSpacing, first);
      for (i = 0, ilen = numMajorIndices - 1; i < ilen; i++) {
        skip(ticks, newTicks, spacing, majorIndices[i], majorIndices[i + 1]);
      }
      skip(ticks, newTicks, spacing, last, isNullOrUndef(avgMajorSpacing) ? ticks.length : last + avgMajorSpacing);
      return newTicks;
    }
    skip(ticks, newTicks, spacing);
    return newTicks;
  }
  function determineMaxTicks(scale) {
    const offset = scale.options.offset;
    const tickLength = scale._tickSize();
    const maxScale = scale._length / tickLength + (offset ? 0 : 1);
    const maxChart = scale._maxLength / tickLength;
    return Math.floor(Math.min(maxScale, maxChart));
  }
  function calculateSpacing(majorIndices, ticks, ticksLimit) {
    const evenMajorSpacing = getEvenSpacing(majorIndices);
    const spacing = ticks.length / ticksLimit;
    if (!evenMajorSpacing) {
      return Math.max(spacing, 1);
    }
    const factors = _factorize(evenMajorSpacing);
    for (let i = 0, ilen = factors.length - 1; i < ilen; i++) {
      const factor = factors[i];
      if (factor > spacing) {
        return factor;
      }
    }
    return Math.max(spacing, 1);
  }
  function getMajorIndices(ticks) {
    const result = [];
    let i, ilen;
    for (i = 0, ilen = ticks.length; i < ilen; i++) {
      if (ticks[i].major) {
        result.push(i);
      }
    }
    return result;
  }
  function skipMajors(ticks, newTicks, majorIndices, spacing) {
    let count = 0;
    let next = majorIndices[0];
    let i;
    spacing = Math.ceil(spacing);
    for (i = 0; i < ticks.length; i++) {
      if (i === next) {
        newTicks.push(ticks[i]);
        count++;
        next = majorIndices[count * spacing];
      }
    }
  }
  function skip(ticks, newTicks, spacing, majorStart, majorEnd) {
    const start = valueOrDefault(majorStart, 0);
    const end = Math.min(valueOrDefault(majorEnd, ticks.length), ticks.length);
    let count = 0;
    let length, i, next;
    spacing = Math.ceil(spacing);
    if (majorEnd) {
      length = majorEnd - majorStart;
      spacing = length / Math.floor(length / spacing);
    }
    next = start;
    while (next < 0) {
      count++;
      next = Math.round(start + count * spacing);
    }
    for (i = Math.max(start, 0); i < end; i++) {
      if (i === next) {
        newTicks.push(ticks[i]);
        count++;
        next = Math.round(start + count * spacing);
      }
    }
  }
  function getEvenSpacing(arr) {
    const len = arr.length;
    let i, diff;
    if (len < 2) {
      return false;
    }
    for (diff = arr[0], i = 1; i < len; ++i) {
      if (arr[i] - arr[i - 1] !== diff) {
        return false;
      }
    }
    return diff;
  }
  var reverseAlign = (align) => align === "left" ? "right" : align === "right" ? "left" : align;
  var offsetFromEdge = (scale, edge, offset) => edge === "top" || edge === "left" ? scale[edge] + offset : scale[edge] - offset;
  function sample(arr, numItems) {
    const result = [];
    const increment = arr.length / numItems;
    const len = arr.length;
    let i = 0;
    for (; i < len; i += increment) {
      result.push(arr[Math.floor(i)]);
    }
    return result;
  }
  function getPixelForGridLine(scale, index, offsetGridLines) {
    const length = scale.ticks.length;
    const validIndex2 = Math.min(index, length - 1);
    const start = scale._startPixel;
    const end = scale._endPixel;
    const epsilon = 1e-6;
    let lineValue = scale.getPixelForTick(validIndex2);
    let offset;
    if (offsetGridLines) {
      if (length === 1) {
        offset = Math.max(lineValue - start, end - lineValue);
      } else if (index === 0) {
        offset = (scale.getPixelForTick(1) - lineValue) / 2;
      } else {
        offset = (lineValue - scale.getPixelForTick(validIndex2 - 1)) / 2;
      }
      lineValue += validIndex2 < index ? offset : -offset;
      if (lineValue < start - epsilon || lineValue > end + epsilon) {
        return;
      }
    }
    return lineValue;
  }
  function garbageCollect(caches, length) {
    each(caches, (cache) => {
      const gc = cache.gc;
      const gcLen = gc.length / 2;
      let i;
      if (gcLen > length) {
        for (i = 0; i < gcLen; ++i) {
          delete cache.data[gc[i]];
        }
        gc.splice(0, gcLen);
      }
    });
  }
  function getTickMarkLength(options) {
    return options.drawTicks ? options.tickLength : 0;
  }
  function getTitleHeight(options, fallback) {
    if (!options.display) {
      return 0;
    }
    const font = toFont(options.font, fallback);
    const padding = toPadding(options.padding);
    const lines = isArray(options.text) ? options.text.length : 1;
    return lines * font.lineHeight + padding.height;
  }
  function createScaleContext(parent, scale) {
    return createContext(parent, {
      scale,
      type: "scale"
    });
  }
  function createTickContext(parent, index, tick) {
    return createContext(parent, {
      tick,
      index,
      type: "tick"
    });
  }
  function titleAlign(align, position, reverse) {
    let ret = _toLeftRightCenter(align);
    if (reverse && position !== "right" || !reverse && position === "right") {
      ret = reverseAlign(ret);
    }
    return ret;
  }
  function titleArgs(scale, offset, position, align) {
    const { top, left, bottom, right, chart: chart2 } = scale;
    const { chartArea, scales: scales2 } = chart2;
    let rotation = 0;
    let maxWidth, titleX, titleY;
    const height = bottom - top;
    const width = right - left;
    if (scale.isHorizontal()) {
      titleX = _alignStartEnd(align, left, right);
      if (isObject(position)) {
        const positionAxisID = Object.keys(position)[0];
        const value = position[positionAxisID];
        titleY = scales2[positionAxisID].getPixelForValue(value) + height - offset;
      } else if (position === "center") {
        titleY = (chartArea.bottom + chartArea.top) / 2 + height - offset;
      } else {
        titleY = offsetFromEdge(scale, position, offset);
      }
      maxWidth = right - left;
    } else {
      if (isObject(position)) {
        const positionAxisID = Object.keys(position)[0];
        const value = position[positionAxisID];
        titleX = scales2[positionAxisID].getPixelForValue(value) - width + offset;
      } else if (position === "center") {
        titleX = (chartArea.left + chartArea.right) / 2 - width + offset;
      } else {
        titleX = offsetFromEdge(scale, position, offset);
      }
      titleY = _alignStartEnd(align, bottom, top);
      rotation = position === "left" ? -HALF_PI : HALF_PI;
    }
    return { titleX, titleY, maxWidth, rotation };
  }
  var Scale = class extends Element {
    constructor(cfg) {
      super();
      this.id = cfg.id;
      this.type = cfg.type;
      this.options = void 0;
      this.ctx = cfg.ctx;
      this.chart = cfg.chart;
      this.top = void 0;
      this.bottom = void 0;
      this.left = void 0;
      this.right = void 0;
      this.width = void 0;
      this.height = void 0;
      this._margins = {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      };
      this.maxWidth = void 0;
      this.maxHeight = void 0;
      this.paddingTop = void 0;
      this.paddingBottom = void 0;
      this.paddingLeft = void 0;
      this.paddingRight = void 0;
      this.axis = void 0;
      this.labelRotation = void 0;
      this.min = void 0;
      this.max = void 0;
      this._range = void 0;
      this.ticks = [];
      this._gridLineItems = null;
      this._labelItems = null;
      this._labelSizes = null;
      this._length = 0;
      this._maxLength = 0;
      this._longestTextCache = {};
      this._startPixel = void 0;
      this._endPixel = void 0;
      this._reversePixels = false;
      this._userMax = void 0;
      this._userMin = void 0;
      this._suggestedMax = void 0;
      this._suggestedMin = void 0;
      this._ticksLength = 0;
      this._borderValue = 0;
      this._cache = {};
      this._dataLimitsCached = false;
      this.$context = void 0;
    }
    init(options) {
      this.options = options.setContext(this.getContext());
      this.axis = options.axis;
      this._userMin = this.parse(options.min);
      this._userMax = this.parse(options.max);
      this._suggestedMin = this.parse(options.suggestedMin);
      this._suggestedMax = this.parse(options.suggestedMax);
    }
    parse(raw, index) {
      return raw;
    }
    getUserBounds() {
      let { _userMin, _userMax, _suggestedMin, _suggestedMax } = this;
      _userMin = finiteOrDefault(_userMin, Number.POSITIVE_INFINITY);
      _userMax = finiteOrDefault(_userMax, Number.NEGATIVE_INFINITY);
      _suggestedMin = finiteOrDefault(_suggestedMin, Number.POSITIVE_INFINITY);
      _suggestedMax = finiteOrDefault(_suggestedMax, Number.NEGATIVE_INFINITY);
      return {
        min: finiteOrDefault(_userMin, _suggestedMin),
        max: finiteOrDefault(_userMax, _suggestedMax),
        minDefined: isNumberFinite(_userMin),
        maxDefined: isNumberFinite(_userMax)
      };
    }
    getMinMax(canStack) {
      let { min, max, minDefined, maxDefined } = this.getUserBounds();
      let range;
      if (minDefined && maxDefined) {
        return { min, max };
      }
      const metas = this.getMatchingVisibleMetas();
      for (let i = 0, ilen = metas.length; i < ilen; ++i) {
        range = metas[i].controller.getMinMax(this, canStack);
        if (!minDefined) {
          min = Math.min(min, range.min);
        }
        if (!maxDefined) {
          max = Math.max(max, range.max);
        }
      }
      min = maxDefined && min > max ? max : min;
      max = minDefined && min > max ? min : max;
      return {
        min: finiteOrDefault(min, finiteOrDefault(max, min)),
        max: finiteOrDefault(max, finiteOrDefault(min, max))
      };
    }
    getPadding() {
      return {
        left: this.paddingLeft || 0,
        top: this.paddingTop || 0,
        right: this.paddingRight || 0,
        bottom: this.paddingBottom || 0
      };
    }
    getTicks() {
      return this.ticks;
    }
    getLabels() {
      const data = this.chart.data;
      return this.options.labels || (this.isHorizontal() ? data.xLabels : data.yLabels) || data.labels || [];
    }
    beforeLayout() {
      this._cache = {};
      this._dataLimitsCached = false;
    }
    beforeUpdate() {
      callback(this.options.beforeUpdate, [this]);
    }
    update(maxWidth, maxHeight, margins) {
      const { beginAtZero, grace, ticks: tickOpts } = this.options;
      const sampleSize = tickOpts.sampleSize;
      this.beforeUpdate();
      this.maxWidth = maxWidth;
      this.maxHeight = maxHeight;
      this._margins = margins = Object.assign({
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }, margins);
      this.ticks = null;
      this._labelSizes = null;
      this._gridLineItems = null;
      this._labelItems = null;
      this.beforeSetDimensions();
      this.setDimensions();
      this.afterSetDimensions();
      this._maxLength = this.isHorizontal() ? this.width + margins.left + margins.right : this.height + margins.top + margins.bottom;
      if (!this._dataLimitsCached) {
        this.beforeDataLimits();
        this.determineDataLimits();
        this.afterDataLimits();
        this._range = _addGrace(this, grace, beginAtZero);
        this._dataLimitsCached = true;
      }
      this.beforeBuildTicks();
      this.ticks = this.buildTicks() || [];
      this.afterBuildTicks();
      const samplingEnabled = sampleSize < this.ticks.length;
      this._convertTicksToLabels(samplingEnabled ? sample(this.ticks, sampleSize) : this.ticks);
      this.configure();
      this.beforeCalculateLabelRotation();
      this.calculateLabelRotation();
      this.afterCalculateLabelRotation();
      if (tickOpts.display && (tickOpts.autoSkip || tickOpts.source === "auto")) {
        this.ticks = autoSkip(this, this.ticks);
        this._labelSizes = null;
      }
      if (samplingEnabled) {
        this._convertTicksToLabels(this.ticks);
      }
      this.beforeFit();
      this.fit();
      this.afterFit();
      this.afterUpdate();
    }
    configure() {
      let reversePixels = this.options.reverse;
      let startPixel, endPixel;
      if (this.isHorizontal()) {
        startPixel = this.left;
        endPixel = this.right;
      } else {
        startPixel = this.top;
        endPixel = this.bottom;
        reversePixels = !reversePixels;
      }
      this._startPixel = startPixel;
      this._endPixel = endPixel;
      this._reversePixels = reversePixels;
      this._length = endPixel - startPixel;
      this._alignToPixels = this.options.alignToPixels;
    }
    afterUpdate() {
      callback(this.options.afterUpdate, [this]);
    }
    beforeSetDimensions() {
      callback(this.options.beforeSetDimensions, [this]);
    }
    setDimensions() {
      if (this.isHorizontal()) {
        this.width = this.maxWidth;
        this.left = 0;
        this.right = this.width;
      } else {
        this.height = this.maxHeight;
        this.top = 0;
        this.bottom = this.height;
      }
      this.paddingLeft = 0;
      this.paddingTop = 0;
      this.paddingRight = 0;
      this.paddingBottom = 0;
    }
    afterSetDimensions() {
      callback(this.options.afterSetDimensions, [this]);
    }
    _callHooks(name) {
      this.chart.notifyPlugins(name, this.getContext());
      callback(this.options[name], [this]);
    }
    beforeDataLimits() {
      this._callHooks("beforeDataLimits");
    }
    determineDataLimits() {
    }
    afterDataLimits() {
      this._callHooks("afterDataLimits");
    }
    beforeBuildTicks() {
      this._callHooks("beforeBuildTicks");
    }
    buildTicks() {
      return [];
    }
    afterBuildTicks() {
      this._callHooks("afterBuildTicks");
    }
    beforeTickToLabelConversion() {
      callback(this.options.beforeTickToLabelConversion, [this]);
    }
    generateTickLabels(ticks) {
      const tickOpts = this.options.ticks;
      let i, ilen, tick;
      for (i = 0, ilen = ticks.length; i < ilen; i++) {
        tick = ticks[i];
        tick.label = callback(tickOpts.callback, [tick.value, i, ticks], this);
      }
    }
    afterTickToLabelConversion() {
      callback(this.options.afterTickToLabelConversion, [this]);
    }
    beforeCalculateLabelRotation() {
      callback(this.options.beforeCalculateLabelRotation, [this]);
    }
    calculateLabelRotation() {
      const options = this.options;
      const tickOpts = options.ticks;
      const numTicks = this.ticks.length;
      const minRotation = tickOpts.minRotation || 0;
      const maxRotation = tickOpts.maxRotation;
      let labelRotation = minRotation;
      let tickWidth, maxHeight, maxLabelDiagonal;
      if (!this._isVisible() || !tickOpts.display || minRotation >= maxRotation || numTicks <= 1 || !this.isHorizontal()) {
        this.labelRotation = minRotation;
        return;
      }
      const labelSizes = this._getLabelSizes();
      const maxLabelWidth = labelSizes.widest.width;
      const maxLabelHeight = labelSizes.highest.height;
      const maxWidth = _limitValue(this.chart.width - maxLabelWidth, 0, this.maxWidth);
      tickWidth = options.offset ? this.maxWidth / numTicks : maxWidth / (numTicks - 1);
      if (maxLabelWidth + 6 > tickWidth) {
        tickWidth = maxWidth / (numTicks - (options.offset ? 0.5 : 1));
        maxHeight = this.maxHeight - getTickMarkLength(options.grid) - tickOpts.padding - getTitleHeight(options.title, this.chart.options.font);
        maxLabelDiagonal = Math.sqrt(maxLabelWidth * maxLabelWidth + maxLabelHeight * maxLabelHeight);
        labelRotation = toDegrees(Math.min(Math.asin(_limitValue((labelSizes.highest.height + 6) / tickWidth, -1, 1)), Math.asin(_limitValue(maxHeight / maxLabelDiagonal, -1, 1)) - Math.asin(_limitValue(maxLabelHeight / maxLabelDiagonal, -1, 1))));
        labelRotation = Math.max(minRotation, Math.min(maxRotation, labelRotation));
      }
      this.labelRotation = labelRotation;
    }
    afterCalculateLabelRotation() {
      callback(this.options.afterCalculateLabelRotation, [this]);
    }
    beforeFit() {
      callback(this.options.beforeFit, [this]);
    }
    fit() {
      const minSize = {
        width: 0,
        height: 0
      };
      const { chart: chart2, options: { ticks: tickOpts, title: titleOpts, grid: gridOpts } } = this;
      const display = this._isVisible();
      const isHorizontal = this.isHorizontal();
      if (display) {
        const titleHeight = getTitleHeight(titleOpts, chart2.options.font);
        if (isHorizontal) {
          minSize.width = this.maxWidth;
          minSize.height = getTickMarkLength(gridOpts) + titleHeight;
        } else {
          minSize.height = this.maxHeight;
          minSize.width = getTickMarkLength(gridOpts) + titleHeight;
        }
        if (tickOpts.display && this.ticks.length) {
          const { first, last, widest, highest } = this._getLabelSizes();
          const tickPadding = tickOpts.padding * 2;
          const angleRadians = toRadians(this.labelRotation);
          const cos = Math.cos(angleRadians);
          const sin = Math.sin(angleRadians);
          if (isHorizontal) {
            const labelHeight = tickOpts.mirror ? 0 : sin * widest.width + cos * highest.height;
            minSize.height = Math.min(this.maxHeight, minSize.height + labelHeight + tickPadding);
          } else {
            const labelWidth = tickOpts.mirror ? 0 : cos * widest.width + sin * highest.height;
            minSize.width = Math.min(this.maxWidth, minSize.width + labelWidth + tickPadding);
          }
          this._calculatePadding(first, last, sin, cos);
        }
      }
      this._handleMargins();
      if (isHorizontal) {
        this.width = this._length = chart2.width - this._margins.left - this._margins.right;
        this.height = minSize.height;
      } else {
        this.width = minSize.width;
        this.height = this._length = chart2.height - this._margins.top - this._margins.bottom;
      }
    }
    _calculatePadding(first, last, sin, cos) {
      const { ticks: { align, padding }, position } = this.options;
      const isRotated = this.labelRotation !== 0;
      const labelsBelowTicks = position !== "top" && this.axis === "x";
      if (this.isHorizontal()) {
        const offsetLeft = this.getPixelForTick(0) - this.left;
        const offsetRight = this.right - this.getPixelForTick(this.ticks.length - 1);
        let paddingLeft = 0;
        let paddingRight = 0;
        if (isRotated) {
          if (labelsBelowTicks) {
            paddingLeft = cos * first.width;
            paddingRight = sin * last.height;
          } else {
            paddingLeft = sin * first.height;
            paddingRight = cos * last.width;
          }
        } else if (align === "start") {
          paddingRight = last.width;
        } else if (align === "end") {
          paddingLeft = first.width;
        } else {
          paddingLeft = first.width / 2;
          paddingRight = last.width / 2;
        }
        this.paddingLeft = Math.max((paddingLeft - offsetLeft + padding) * this.width / (this.width - offsetLeft), 0);
        this.paddingRight = Math.max((paddingRight - offsetRight + padding) * this.width / (this.width - offsetRight), 0);
      } else {
        let paddingTop = last.height / 2;
        let paddingBottom = first.height / 2;
        if (align === "start") {
          paddingTop = 0;
          paddingBottom = first.height;
        } else if (align === "end") {
          paddingTop = last.height;
          paddingBottom = 0;
        }
        this.paddingTop = paddingTop + padding;
        this.paddingBottom = paddingBottom + padding;
      }
    }
    _handleMargins() {
      if (this._margins) {
        this._margins.left = Math.max(this.paddingLeft, this._margins.left);
        this._margins.top = Math.max(this.paddingTop, this._margins.top);
        this._margins.right = Math.max(this.paddingRight, this._margins.right);
        this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom);
      }
    }
    afterFit() {
      callback(this.options.afterFit, [this]);
    }
    isHorizontal() {
      const { axis, position } = this.options;
      return position === "top" || position === "bottom" || axis === "x";
    }
    isFullSize() {
      return this.options.fullSize;
    }
    _convertTicksToLabels(ticks) {
      this.beforeTickToLabelConversion();
      this.generateTickLabels(ticks);
      let i, ilen;
      for (i = 0, ilen = ticks.length; i < ilen; i++) {
        if (isNullOrUndef(ticks[i].label)) {
          ticks.splice(i, 1);
          ilen--;
          i--;
        }
      }
      this.afterTickToLabelConversion();
    }
    _getLabelSizes() {
      let labelSizes = this._labelSizes;
      if (!labelSizes) {
        const sampleSize = this.options.ticks.sampleSize;
        let ticks = this.ticks;
        if (sampleSize < ticks.length) {
          ticks = sample(ticks, sampleSize);
        }
        this._labelSizes = labelSizes = this._computeLabelSizes(ticks, ticks.length);
      }
      return labelSizes;
    }
    _computeLabelSizes(ticks, length) {
      const { ctx, _longestTextCache: caches } = this;
      const widths = [];
      const heights = [];
      let widestLabelSize = 0;
      let highestLabelSize = 0;
      let i, j, jlen, label, tickFont, fontString2, cache, lineHeight, width, height, nestedLabel;
      for (i = 0; i < length; ++i) {
        label = ticks[i].label;
        tickFont = this._resolveTickFontOptions(i);
        ctx.font = fontString2 = tickFont.string;
        cache = caches[fontString2] = caches[fontString2] || { data: {}, gc: [] };
        lineHeight = tickFont.lineHeight;
        width = height = 0;
        if (!isNullOrUndef(label) && !isArray(label)) {
          width = _measureText(ctx, cache.data, cache.gc, width, label);
          height = lineHeight;
        } else if (isArray(label)) {
          for (j = 0, jlen = label.length; j < jlen; ++j) {
            nestedLabel = label[j];
            if (!isNullOrUndef(nestedLabel) && !isArray(nestedLabel)) {
              width = _measureText(ctx, cache.data, cache.gc, width, nestedLabel);
              height += lineHeight;
            }
          }
        }
        widths.push(width);
        heights.push(height);
        widestLabelSize = Math.max(width, widestLabelSize);
        highestLabelSize = Math.max(height, highestLabelSize);
      }
      garbageCollect(caches, length);
      const widest = widths.indexOf(widestLabelSize);
      const highest = heights.indexOf(highestLabelSize);
      const valueAt = (idx) => ({ width: widths[idx] || 0, height: heights[idx] || 0 });
      return {
        first: valueAt(0),
        last: valueAt(length - 1),
        widest: valueAt(widest),
        highest: valueAt(highest),
        widths,
        heights
      };
    }
    getLabelForValue(value) {
      return value;
    }
    getPixelForValue(value, index) {
      return NaN;
    }
    getValueForPixel(pixel) {
    }
    getPixelForTick(index) {
      const ticks = this.ticks;
      if (index < 0 || index > ticks.length - 1) {
        return null;
      }
      return this.getPixelForValue(ticks[index].value);
    }
    getPixelForDecimal(decimal) {
      if (this._reversePixels) {
        decimal = 1 - decimal;
      }
      const pixel = this._startPixel + decimal * this._length;
      return _int16Range(this._alignToPixels ? _alignPixel(this.chart, pixel, 0) : pixel);
    }
    getDecimalForPixel(pixel) {
      const decimal = (pixel - this._startPixel) / this._length;
      return this._reversePixels ? 1 - decimal : decimal;
    }
    getBasePixel() {
      return this.getPixelForValue(this.getBaseValue());
    }
    getBaseValue() {
      const { min, max } = this;
      return min < 0 && max < 0 ? max : min > 0 && max > 0 ? min : 0;
    }
    getContext(index) {
      const ticks = this.ticks || [];
      if (index >= 0 && index < ticks.length) {
        const tick = ticks[index];
        return tick.$context || (tick.$context = createTickContext(this.getContext(), index, tick));
      }
      return this.$context || (this.$context = createScaleContext(this.chart.getContext(), this));
    }
    _tickSize() {
      const optionTicks = this.options.ticks;
      const rot = toRadians(this.labelRotation);
      const cos = Math.abs(Math.cos(rot));
      const sin = Math.abs(Math.sin(rot));
      const labelSizes = this._getLabelSizes();
      const padding = optionTicks.autoSkipPadding || 0;
      const w = labelSizes ? labelSizes.widest.width + padding : 0;
      const h = labelSizes ? labelSizes.highest.height + padding : 0;
      return this.isHorizontal() ? h * cos > w * sin ? w / cos : h / sin : h * sin < w * cos ? h / cos : w / sin;
    }
    _isVisible() {
      const display = this.options.display;
      if (display !== "auto") {
        return !!display;
      }
      return this.getMatchingVisibleMetas().length > 0;
    }
    _computeGridLineItems(chartArea) {
      const axis = this.axis;
      const chart2 = this.chart;
      const options = this.options;
      const { grid, position } = options;
      const offset = grid.offset;
      const isHorizontal = this.isHorizontal();
      const ticks = this.ticks;
      const ticksLength = ticks.length + (offset ? 1 : 0);
      const tl = getTickMarkLength(grid);
      const items = [];
      const borderOpts = grid.setContext(this.getContext());
      const axisWidth = borderOpts.drawBorder ? borderOpts.borderWidth : 0;
      const axisHalfWidth = axisWidth / 2;
      const alignBorderValue = function(pixel) {
        return _alignPixel(chart2, pixel, axisWidth);
      };
      let borderValue, i, lineValue, alignedLineValue;
      let tx1, ty1, tx2, ty2, x1, y1, x2, y2;
      if (position === "top") {
        borderValue = alignBorderValue(this.bottom);
        ty1 = this.bottom - tl;
        ty2 = borderValue - axisHalfWidth;
        y1 = alignBorderValue(chartArea.top) + axisHalfWidth;
        y2 = chartArea.bottom;
      } else if (position === "bottom") {
        borderValue = alignBorderValue(this.top);
        y1 = chartArea.top;
        y2 = alignBorderValue(chartArea.bottom) - axisHalfWidth;
        ty1 = borderValue + axisHalfWidth;
        ty2 = this.top + tl;
      } else if (position === "left") {
        borderValue = alignBorderValue(this.right);
        tx1 = this.right - tl;
        tx2 = borderValue - axisHalfWidth;
        x1 = alignBorderValue(chartArea.left) + axisHalfWidth;
        x2 = chartArea.right;
      } else if (position === "right") {
        borderValue = alignBorderValue(this.left);
        x1 = chartArea.left;
        x2 = alignBorderValue(chartArea.right) - axisHalfWidth;
        tx1 = borderValue + axisHalfWidth;
        tx2 = this.left + tl;
      } else if (axis === "x") {
        if (position === "center") {
          borderValue = alignBorderValue((chartArea.top + chartArea.bottom) / 2 + 0.5);
        } else if (isObject(position)) {
          const positionAxisID = Object.keys(position)[0];
          const value = position[positionAxisID];
          borderValue = alignBorderValue(this.chart.scales[positionAxisID].getPixelForValue(value));
        }
        y1 = chartArea.top;
        y2 = chartArea.bottom;
        ty1 = borderValue + axisHalfWidth;
        ty2 = ty1 + tl;
      } else if (axis === "y") {
        if (position === "center") {
          borderValue = alignBorderValue((chartArea.left + chartArea.right) / 2);
        } else if (isObject(position)) {
          const positionAxisID = Object.keys(position)[0];
          const value = position[positionAxisID];
          borderValue = alignBorderValue(this.chart.scales[positionAxisID].getPixelForValue(value));
        }
        tx1 = borderValue - axisHalfWidth;
        tx2 = tx1 - tl;
        x1 = chartArea.left;
        x2 = chartArea.right;
      }
      const limit = valueOrDefault(options.ticks.maxTicksLimit, ticksLength);
      const step = Math.max(1, Math.ceil(ticksLength / limit));
      for (i = 0; i < ticksLength; i += step) {
        const optsAtIndex = grid.setContext(this.getContext(i));
        const lineWidth = optsAtIndex.lineWidth;
        const lineColor = optsAtIndex.color;
        const borderDash = grid.borderDash || [];
        const borderDashOffset = optsAtIndex.borderDashOffset;
        const tickWidth = optsAtIndex.tickWidth;
        const tickColor = optsAtIndex.tickColor;
        const tickBorderDash = optsAtIndex.tickBorderDash || [];
        const tickBorderDashOffset = optsAtIndex.tickBorderDashOffset;
        lineValue = getPixelForGridLine(this, i, offset);
        if (lineValue === void 0) {
          continue;
        }
        alignedLineValue = _alignPixel(chart2, lineValue, lineWidth);
        if (isHorizontal) {
          tx1 = tx2 = x1 = x2 = alignedLineValue;
        } else {
          ty1 = ty2 = y1 = y2 = alignedLineValue;
        }
        items.push({
          tx1,
          ty1,
          tx2,
          ty2,
          x1,
          y1,
          x2,
          y2,
          width: lineWidth,
          color: lineColor,
          borderDash,
          borderDashOffset,
          tickWidth,
          tickColor,
          tickBorderDash,
          tickBorderDashOffset
        });
      }
      this._ticksLength = ticksLength;
      this._borderValue = borderValue;
      return items;
    }
    _computeLabelItems(chartArea) {
      const axis = this.axis;
      const options = this.options;
      const { position, ticks: optionTicks } = options;
      const isHorizontal = this.isHorizontal();
      const ticks = this.ticks;
      const { align, crossAlign, padding, mirror } = optionTicks;
      const tl = getTickMarkLength(options.grid);
      const tickAndPadding = tl + padding;
      const hTickAndPadding = mirror ? -padding : tickAndPadding;
      const rotation = -toRadians(this.labelRotation);
      const items = [];
      let i, ilen, tick, label, x, y, textAlign, pixel, font, lineHeight, lineCount, textOffset;
      let textBaseline = "middle";
      if (position === "top") {
        y = this.bottom - hTickAndPadding;
        textAlign = this._getXAxisLabelAlignment();
      } else if (position === "bottom") {
        y = this.top + hTickAndPadding;
        textAlign = this._getXAxisLabelAlignment();
      } else if (position === "left") {
        const ret = this._getYAxisLabelAlignment(tl);
        textAlign = ret.textAlign;
        x = ret.x;
      } else if (position === "right") {
        const ret = this._getYAxisLabelAlignment(tl);
        textAlign = ret.textAlign;
        x = ret.x;
      } else if (axis === "x") {
        if (position === "center") {
          y = (chartArea.top + chartArea.bottom) / 2 + tickAndPadding;
        } else if (isObject(position)) {
          const positionAxisID = Object.keys(position)[0];
          const value = position[positionAxisID];
          y = this.chart.scales[positionAxisID].getPixelForValue(value) + tickAndPadding;
        }
        textAlign = this._getXAxisLabelAlignment();
      } else if (axis === "y") {
        if (position === "center") {
          x = (chartArea.left + chartArea.right) / 2 - tickAndPadding;
        } else if (isObject(position)) {
          const positionAxisID = Object.keys(position)[0];
          const value = position[positionAxisID];
          x = this.chart.scales[positionAxisID].getPixelForValue(value);
        }
        textAlign = this._getYAxisLabelAlignment(tl).textAlign;
      }
      if (axis === "y") {
        if (align === "start") {
          textBaseline = "top";
        } else if (align === "end") {
          textBaseline = "bottom";
        }
      }
      const labelSizes = this._getLabelSizes();
      for (i = 0, ilen = ticks.length; i < ilen; ++i) {
        tick = ticks[i];
        label = tick.label;
        const optsAtIndex = optionTicks.setContext(this.getContext(i));
        pixel = this.getPixelForTick(i) + optionTicks.labelOffset;
        font = this._resolveTickFontOptions(i);
        lineHeight = font.lineHeight;
        lineCount = isArray(label) ? label.length : 1;
        const halfCount = lineCount / 2;
        const color2 = optsAtIndex.color;
        const strokeColor = optsAtIndex.textStrokeColor;
        const strokeWidth = optsAtIndex.textStrokeWidth;
        if (isHorizontal) {
          x = pixel;
          if (position === "top") {
            if (crossAlign === "near" || rotation !== 0) {
              textOffset = -lineCount * lineHeight + lineHeight / 2;
            } else if (crossAlign === "center") {
              textOffset = -labelSizes.highest.height / 2 - halfCount * lineHeight + lineHeight;
            } else {
              textOffset = -labelSizes.highest.height + lineHeight / 2;
            }
          } else {
            if (crossAlign === "near" || rotation !== 0) {
              textOffset = lineHeight / 2;
            } else if (crossAlign === "center") {
              textOffset = labelSizes.highest.height / 2 - halfCount * lineHeight;
            } else {
              textOffset = labelSizes.highest.height - lineCount * lineHeight;
            }
          }
          if (mirror) {
            textOffset *= -1;
          }
        } else {
          y = pixel;
          textOffset = (1 - lineCount) * lineHeight / 2;
        }
        let backdrop;
        if (optsAtIndex.showLabelBackdrop) {
          const labelPadding = toPadding(optsAtIndex.backdropPadding);
          const height = labelSizes.heights[i];
          const width = labelSizes.widths[i];
          let top = y + textOffset - labelPadding.top;
          let left = x - labelPadding.left;
          switch (textBaseline) {
            case "middle":
              top -= height / 2;
              break;
            case "bottom":
              top -= height;
              break;
          }
          switch (textAlign) {
            case "center":
              left -= width / 2;
              break;
            case "right":
              left -= width;
              break;
          }
          backdrop = {
            left,
            top,
            width: width + labelPadding.width,
            height: height + labelPadding.height,
            color: optsAtIndex.backdropColor
          };
        }
        items.push({
          rotation,
          label,
          font,
          color: color2,
          strokeColor,
          strokeWidth,
          textOffset,
          textAlign,
          textBaseline,
          translation: [x, y],
          backdrop
        });
      }
      return items;
    }
    _getXAxisLabelAlignment() {
      const { position, ticks } = this.options;
      const rotation = -toRadians(this.labelRotation);
      if (rotation) {
        return position === "top" ? "left" : "right";
      }
      let align = "center";
      if (ticks.align === "start") {
        align = "left";
      } else if (ticks.align === "end") {
        align = "right";
      }
      return align;
    }
    _getYAxisLabelAlignment(tl) {
      const { position, ticks: { crossAlign, mirror, padding } } = this.options;
      const labelSizes = this._getLabelSizes();
      const tickAndPadding = tl + padding;
      const widest = labelSizes.widest.width;
      let textAlign;
      let x;
      if (position === "left") {
        if (mirror) {
          x = this.right + padding;
          if (crossAlign === "near") {
            textAlign = "left";
          } else if (crossAlign === "center") {
            textAlign = "center";
            x += widest / 2;
          } else {
            textAlign = "right";
            x += widest;
          }
        } else {
          x = this.right - tickAndPadding;
          if (crossAlign === "near") {
            textAlign = "right";
          } else if (crossAlign === "center") {
            textAlign = "center";
            x -= widest / 2;
          } else {
            textAlign = "left";
            x = this.left;
          }
        }
      } else if (position === "right") {
        if (mirror) {
          x = this.left + padding;
          if (crossAlign === "near") {
            textAlign = "right";
          } else if (crossAlign === "center") {
            textAlign = "center";
            x -= widest / 2;
          } else {
            textAlign = "left";
            x -= widest;
          }
        } else {
          x = this.left + tickAndPadding;
          if (crossAlign === "near") {
            textAlign = "left";
          } else if (crossAlign === "center") {
            textAlign = "center";
            x += widest / 2;
          } else {
            textAlign = "right";
            x = this.right;
          }
        }
      } else {
        textAlign = "right";
      }
      return { textAlign, x };
    }
    _computeLabelArea() {
      if (this.options.ticks.mirror) {
        return;
      }
      const chart2 = this.chart;
      const position = this.options.position;
      if (position === "left" || position === "right") {
        return { top: 0, left: this.left, bottom: chart2.height, right: this.right };
      }
      if (position === "top" || position === "bottom") {
        return { top: this.top, left: 0, bottom: this.bottom, right: chart2.width };
      }
    }
    drawBackground() {
      const { ctx, options: { backgroundColor }, left, top, width, height } = this;
      if (backgroundColor) {
        ctx.save();
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(left, top, width, height);
        ctx.restore();
      }
    }
    getLineWidthForValue(value) {
      const grid = this.options.grid;
      if (!this._isVisible() || !grid.display) {
        return 0;
      }
      const ticks = this.ticks;
      const index = ticks.findIndex((t) => t.value === value);
      if (index >= 0) {
        const opts = grid.setContext(this.getContext(index));
        return opts.lineWidth;
      }
      return 0;
    }
    drawGrid(chartArea) {
      const grid = this.options.grid;
      const ctx = this.ctx;
      const items = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(chartArea));
      let i, ilen;
      const drawLine = (p1, p2, style) => {
        if (!style.width || !style.color) {
          return;
        }
        ctx.save();
        ctx.lineWidth = style.width;
        ctx.strokeStyle = style.color;
        ctx.setLineDash(style.borderDash || []);
        ctx.lineDashOffset = style.borderDashOffset;
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
        ctx.restore();
      };
      if (grid.display) {
        for (i = 0, ilen = items.length; i < ilen; ++i) {
          const item = items[i];
          if (grid.drawOnChartArea) {
            drawLine({ x: item.x1, y: item.y1 }, { x: item.x2, y: item.y2 }, item);
          }
          if (grid.drawTicks) {
            drawLine({ x: item.tx1, y: item.ty1 }, { x: item.tx2, y: item.ty2 }, {
              color: item.tickColor,
              width: item.tickWidth,
              borderDash: item.tickBorderDash,
              borderDashOffset: item.tickBorderDashOffset
            });
          }
        }
      }
    }
    drawBorder() {
      const { chart: chart2, ctx, options: { grid } } = this;
      const borderOpts = grid.setContext(this.getContext());
      const axisWidth = grid.drawBorder ? borderOpts.borderWidth : 0;
      if (!axisWidth) {
        return;
      }
      const lastLineWidth = grid.setContext(this.getContext(0)).lineWidth;
      const borderValue = this._borderValue;
      let x1, x2, y1, y2;
      if (this.isHorizontal()) {
        x1 = _alignPixel(chart2, this.left, axisWidth) - axisWidth / 2;
        x2 = _alignPixel(chart2, this.right, lastLineWidth) + lastLineWidth / 2;
        y1 = y2 = borderValue;
      } else {
        y1 = _alignPixel(chart2, this.top, axisWidth) - axisWidth / 2;
        y2 = _alignPixel(chart2, this.bottom, lastLineWidth) + lastLineWidth / 2;
        x1 = x2 = borderValue;
      }
      ctx.save();
      ctx.lineWidth = borderOpts.borderWidth;
      ctx.strokeStyle = borderOpts.borderColor;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
      ctx.restore();
    }
    drawLabels(chartArea) {
      const optionTicks = this.options.ticks;
      if (!optionTicks.display) {
        return;
      }
      const ctx = this.ctx;
      const area = this._computeLabelArea();
      if (area) {
        clipArea(ctx, area);
      }
      const items = this._labelItems || (this._labelItems = this._computeLabelItems(chartArea));
      let i, ilen;
      for (i = 0, ilen = items.length; i < ilen; ++i) {
        const item = items[i];
        const tickFont = item.font;
        const label = item.label;
        if (item.backdrop) {
          ctx.fillStyle = item.backdrop.color;
          ctx.fillRect(item.backdrop.left, item.backdrop.top, item.backdrop.width, item.backdrop.height);
        }
        let y = item.textOffset;
        renderText(ctx, label, 0, y, tickFont, item);
      }
      if (area) {
        unclipArea(ctx);
      }
    }
    drawTitle() {
      const { ctx, options: { position, title, reverse } } = this;
      if (!title.display) {
        return;
      }
      const font = toFont(title.font);
      const padding = toPadding(title.padding);
      const align = title.align;
      let offset = font.lineHeight / 2;
      if (position === "bottom" || position === "center" || isObject(position)) {
        offset += padding.bottom;
        if (isArray(title.text)) {
          offset += font.lineHeight * (title.text.length - 1);
        }
      } else {
        offset += padding.top;
      }
      const { titleX, titleY, maxWidth, rotation } = titleArgs(this, offset, position, align);
      renderText(ctx, title.text, 0, 0, font, {
        color: title.color,
        maxWidth,
        rotation,
        textAlign: titleAlign(align, position, reverse),
        textBaseline: "middle",
        translation: [titleX, titleY]
      });
    }
    draw(chartArea) {
      if (!this._isVisible()) {
        return;
      }
      this.drawBackground();
      this.drawGrid(chartArea);
      this.drawBorder();
      this.drawTitle();
      this.drawLabels(chartArea);
    }
    _layers() {
      const opts = this.options;
      const tz = opts.ticks && opts.ticks.z || 0;
      const gz = valueOrDefault(opts.grid && opts.grid.z, -1);
      if (!this._isVisible() || this.draw !== Scale.prototype.draw) {
        return [{
          z: tz,
          draw: (chartArea) => {
            this.draw(chartArea);
          }
        }];
      }
      return [{
        z: gz,
        draw: (chartArea) => {
          this.drawBackground();
          this.drawGrid(chartArea);
          this.drawTitle();
        }
      }, {
        z: gz + 1,
        draw: () => {
          this.drawBorder();
        }
      }, {
        z: tz,
        draw: (chartArea) => {
          this.drawLabels(chartArea);
        }
      }];
    }
    getMatchingVisibleMetas(type) {
      const metas = this.chart.getSortedVisibleDatasetMetas();
      const axisID = this.axis + "AxisID";
      const result = [];
      let i, ilen;
      for (i = 0, ilen = metas.length; i < ilen; ++i) {
        const meta = metas[i];
        if (meta[axisID] === this.id && (!type || meta.type === type)) {
          result.push(meta);
        }
      }
      return result;
    }
    _resolveTickFontOptions(index) {
      const opts = this.options.ticks.setContext(this.getContext(index));
      return toFont(opts.font);
    }
    _maxDigits() {
      const fontSize = this._resolveTickFontOptions(0).lineHeight;
      return (this.isHorizontal() ? this.width : this.height) / fontSize;
    }
  };
  var TypedRegistry = class {
    constructor(type, scope, override) {
      this.type = type;
      this.scope = scope;
      this.override = override;
      this.items = Object.create(null);
    }
    isForType(type) {
      return Object.prototype.isPrototypeOf.call(this.type.prototype, type.prototype);
    }
    register(item) {
      const proto = Object.getPrototypeOf(item);
      let parentScope;
      if (isIChartComponent(proto)) {
        parentScope = this.register(proto);
      }
      const items = this.items;
      const id = item.id;
      const scope = this.scope + "." + id;
      if (!id) {
        throw new Error("class does not have id: " + item);
      }
      if (id in items) {
        return scope;
      }
      items[id] = item;
      registerDefaults(item, scope, parentScope);
      if (this.override) {
        defaults.override(item.id, item.overrides);
      }
      return scope;
    }
    get(id) {
      return this.items[id];
    }
    unregister(item) {
      const items = this.items;
      const id = item.id;
      const scope = this.scope;
      if (id in items) {
        delete items[id];
      }
      if (scope && id in defaults[scope]) {
        delete defaults[scope][id];
        if (this.override) {
          delete overrides[id];
        }
      }
    }
  };
  function registerDefaults(item, scope, parentScope) {
    const itemDefaults = merge(Object.create(null), [
      parentScope ? defaults.get(parentScope) : {},
      defaults.get(scope),
      item.defaults
    ]);
    defaults.set(scope, itemDefaults);
    if (item.defaultRoutes) {
      routeDefaults(scope, item.defaultRoutes);
    }
    if (item.descriptors) {
      defaults.describe(scope, item.descriptors);
    }
  }
  function routeDefaults(scope, routes) {
    Object.keys(routes).forEach((property) => {
      const propertyParts = property.split(".");
      const sourceName = propertyParts.pop();
      const sourceScope = [scope].concat(propertyParts).join(".");
      const parts = routes[property].split(".");
      const targetName = parts.pop();
      const targetScope = parts.join(".");
      defaults.route(sourceScope, sourceName, targetScope, targetName);
    });
  }
  function isIChartComponent(proto) {
    return "id" in proto && "defaults" in proto;
  }
  var Registry = class {
    constructor() {
      this.controllers = new TypedRegistry(DatasetController, "datasets", true);
      this.elements = new TypedRegistry(Element, "elements");
      this.plugins = new TypedRegistry(Object, "plugins");
      this.scales = new TypedRegistry(Scale, "scales");
      this._typedRegistries = [this.controllers, this.scales, this.elements];
    }
    add(...args) {
      this._each("register", args);
    }
    remove(...args) {
      this._each("unregister", args);
    }
    addControllers(...args) {
      this._each("register", args, this.controllers);
    }
    addElements(...args) {
      this._each("register", args, this.elements);
    }
    addPlugins(...args) {
      this._each("register", args, this.plugins);
    }
    addScales(...args) {
      this._each("register", args, this.scales);
    }
    getController(id) {
      return this._get(id, this.controllers, "controller");
    }
    getElement(id) {
      return this._get(id, this.elements, "element");
    }
    getPlugin(id) {
      return this._get(id, this.plugins, "plugin");
    }
    getScale(id) {
      return this._get(id, this.scales, "scale");
    }
    removeControllers(...args) {
      this._each("unregister", args, this.controllers);
    }
    removeElements(...args) {
      this._each("unregister", args, this.elements);
    }
    removePlugins(...args) {
      this._each("unregister", args, this.plugins);
    }
    removeScales(...args) {
      this._each("unregister", args, this.scales);
    }
    _each(method, args, typedRegistry) {
      [...args].forEach((arg) => {
        const reg = typedRegistry || this._getRegistryForType(arg);
        if (typedRegistry || reg.isForType(arg) || reg === this.plugins && arg.id) {
          this._exec(method, reg, arg);
        } else {
          each(arg, (item) => {
            const itemReg = typedRegistry || this._getRegistryForType(item);
            this._exec(method, itemReg, item);
          });
        }
      });
    }
    _exec(method, registry2, component) {
      const camelMethod = _capitalize(method);
      callback(component["before" + camelMethod], [], component);
      registry2[method](component);
      callback(component["after" + camelMethod], [], component);
    }
    _getRegistryForType(type) {
      for (let i = 0; i < this._typedRegistries.length; i++) {
        const reg = this._typedRegistries[i];
        if (reg.isForType(type)) {
          return reg;
        }
      }
      return this.plugins;
    }
    _get(id, typedRegistry, type) {
      const item = typedRegistry.get(id);
      if (item === void 0) {
        throw new Error('"' + id + '" is not a registered ' + type + ".");
      }
      return item;
    }
  };
  var registry = new Registry();
  var PluginService = class {
    constructor() {
      this._init = [];
    }
    notify(chart2, hook, args, filter) {
      if (hook === "beforeInit") {
        this._init = this._createDescriptors(chart2, true);
        this._notify(this._init, chart2, "install");
      }
      const descriptors2 = filter ? this._descriptors(chart2).filter(filter) : this._descriptors(chart2);
      const result = this._notify(descriptors2, chart2, hook, args);
      if (hook === "afterDestroy") {
        this._notify(descriptors2, chart2, "stop");
        this._notify(this._init, chart2, "uninstall");
      }
      return result;
    }
    _notify(descriptors2, chart2, hook, args) {
      args = args || {};
      for (const descriptor of descriptors2) {
        const plugin = descriptor.plugin;
        const method = plugin[hook];
        const params = [chart2, args, descriptor.options];
        if (callback(method, params, plugin) === false && args.cancelable) {
          return false;
        }
      }
      return true;
    }
    invalidate() {
      if (!isNullOrUndef(this._cache)) {
        this._oldCache = this._cache;
        this._cache = void 0;
      }
    }
    _descriptors(chart2) {
      if (this._cache) {
        return this._cache;
      }
      const descriptors2 = this._cache = this._createDescriptors(chart2);
      this._notifyStateChanges(chart2);
      return descriptors2;
    }
    _createDescriptors(chart2, all) {
      const config = chart2 && chart2.config;
      const options = valueOrDefault(config.options && config.options.plugins, {});
      const plugins2 = allPlugins(config);
      return options === false && !all ? [] : createDescriptors(chart2, plugins2, options, all);
    }
    _notifyStateChanges(chart2) {
      const previousDescriptors = this._oldCache || [];
      const descriptors2 = this._cache;
      const diff = (a, b) => a.filter((x) => !b.some((y) => x.plugin.id === y.plugin.id));
      this._notify(diff(previousDescriptors, descriptors2), chart2, "stop");
      this._notify(diff(descriptors2, previousDescriptors), chart2, "start");
    }
  };
  function allPlugins(config) {
    const plugins2 = [];
    const keys = Object.keys(registry.plugins.items);
    for (let i = 0; i < keys.length; i++) {
      plugins2.push(registry.getPlugin(keys[i]));
    }
    const local = config.plugins || [];
    for (let i = 0; i < local.length; i++) {
      const plugin = local[i];
      if (plugins2.indexOf(plugin) === -1) {
        plugins2.push(plugin);
      }
    }
    return plugins2;
  }
  function getOpts(options, all) {
    if (!all && options === false) {
      return null;
    }
    if (options === true) {
      return {};
    }
    return options;
  }
  function createDescriptors(chart2, plugins2, options, all) {
    const result = [];
    const context = chart2.getContext();
    for (let i = 0; i < plugins2.length; i++) {
      const plugin = plugins2[i];
      const id = plugin.id;
      const opts = getOpts(options[id], all);
      if (opts === null) {
        continue;
      }
      result.push({
        plugin,
        options: pluginOpts(chart2.config, plugin, opts, context)
      });
    }
    return result;
  }
  function pluginOpts(config, plugin, opts, context) {
    const keys = config.pluginScopeKeys(plugin);
    const scopes = config.getOptionScopes(opts, keys);
    return config.createResolver(scopes, context, [""], { scriptable: false, indexable: false, allKeys: true });
  }
  function getIndexAxis(type, options) {
    const datasetDefaults = defaults.datasets[type] || {};
    const datasetOptions = (options.datasets || {})[type] || {};
    return datasetOptions.indexAxis || options.indexAxis || datasetDefaults.indexAxis || "x";
  }
  function getAxisFromDefaultScaleID(id, indexAxis) {
    let axis = id;
    if (id === "_index_") {
      axis = indexAxis;
    } else if (id === "_value_") {
      axis = indexAxis === "x" ? "y" : "x";
    }
    return axis;
  }
  function getDefaultScaleIDFromAxis(axis, indexAxis) {
    return axis === indexAxis ? "_index_" : "_value_";
  }
  function axisFromPosition(position) {
    if (position === "top" || position === "bottom") {
      return "x";
    }
    if (position === "left" || position === "right") {
      return "y";
    }
  }
  function determineAxis(id, scaleOptions) {
    if (id === "x" || id === "y") {
      return id;
    }
    return scaleOptions.axis || axisFromPosition(scaleOptions.position) || id.charAt(0).toLowerCase();
  }
  function mergeScaleConfig(config, options) {
    const chartDefaults = overrides[config.type] || { scales: {} };
    const configScales = options.scales || {};
    const chartIndexAxis = getIndexAxis(config.type, options);
    const firstIDs = Object.create(null);
    const scales2 = Object.create(null);
    Object.keys(configScales).forEach((id) => {
      const scaleConf = configScales[id];
      if (!isObject(scaleConf)) {
        return console.error(`Invalid scale configuration for scale: ${id}`);
      }
      if (scaleConf._proxy) {
        return console.warn(`Ignoring resolver passed as options for scale: ${id}`);
      }
      const axis = determineAxis(id, scaleConf);
      const defaultId = getDefaultScaleIDFromAxis(axis, chartIndexAxis);
      const defaultScaleOptions = chartDefaults.scales || {};
      firstIDs[axis] = firstIDs[axis] || id;
      scales2[id] = mergeIf(Object.create(null), [{ axis }, scaleConf, defaultScaleOptions[axis], defaultScaleOptions[defaultId]]);
    });
    config.data.datasets.forEach((dataset) => {
      const type = dataset.type || config.type;
      const indexAxis = dataset.indexAxis || getIndexAxis(type, options);
      const datasetDefaults = overrides[type] || {};
      const defaultScaleOptions = datasetDefaults.scales || {};
      Object.keys(defaultScaleOptions).forEach((defaultID) => {
        const axis = getAxisFromDefaultScaleID(defaultID, indexAxis);
        const id = dataset[axis + "AxisID"] || firstIDs[axis] || axis;
        scales2[id] = scales2[id] || Object.create(null);
        mergeIf(scales2[id], [{ axis }, configScales[id], defaultScaleOptions[defaultID]]);
      });
    });
    Object.keys(scales2).forEach((key) => {
      const scale = scales2[key];
      mergeIf(scale, [defaults.scales[scale.type], defaults.scale]);
    });
    return scales2;
  }
  function initOptions(config) {
    const options = config.options || (config.options = {});
    options.plugins = valueOrDefault(options.plugins, {});
    options.scales = mergeScaleConfig(config, options);
  }
  function initData(data) {
    data = data || {};
    data.datasets = data.datasets || [];
    data.labels = data.labels || [];
    return data;
  }
  function initConfig(config) {
    config = config || {};
    config.data = initData(config.data);
    initOptions(config);
    return config;
  }
  var keyCache = /* @__PURE__ */ new Map();
  var keysCached = /* @__PURE__ */ new Set();
  function cachedKeys(cacheKey, generate) {
    let keys = keyCache.get(cacheKey);
    if (!keys) {
      keys = generate();
      keyCache.set(cacheKey, keys);
      keysCached.add(keys);
    }
    return keys;
  }
  var addIfFound = (set2, obj, key) => {
    const opts = resolveObjectKey(obj, key);
    if (opts !== void 0) {
      set2.add(opts);
    }
  };
  var Config = class {
    constructor(config) {
      this._config = initConfig(config);
      this._scopeCache = /* @__PURE__ */ new Map();
      this._resolverCache = /* @__PURE__ */ new Map();
    }
    get platform() {
      return this._config.platform;
    }
    get type() {
      return this._config.type;
    }
    set type(type) {
      this._config.type = type;
    }
    get data() {
      return this._config.data;
    }
    set data(data) {
      this._config.data = initData(data);
    }
    get options() {
      return this._config.options;
    }
    set options(options) {
      this._config.options = options;
    }
    get plugins() {
      return this._config.plugins;
    }
    update() {
      const config = this._config;
      this.clearCache();
      initOptions(config);
    }
    clearCache() {
      this._scopeCache.clear();
      this._resolverCache.clear();
    }
    datasetScopeKeys(datasetType) {
      return cachedKeys(datasetType, () => [[
        `datasets.${datasetType}`,
        ""
      ]]);
    }
    datasetAnimationScopeKeys(datasetType, transition2) {
      return cachedKeys(`${datasetType}.transition.${transition2}`, () => [
        [
          `datasets.${datasetType}.transitions.${transition2}`,
          `transitions.${transition2}`
        ],
        [
          `datasets.${datasetType}`,
          ""
        ]
      ]);
    }
    datasetElementScopeKeys(datasetType, elementType) {
      return cachedKeys(`${datasetType}-${elementType}`, () => [[
        `datasets.${datasetType}.elements.${elementType}`,
        `datasets.${datasetType}`,
        `elements.${elementType}`,
        ""
      ]]);
    }
    pluginScopeKeys(plugin) {
      const id = plugin.id;
      const type = this.type;
      return cachedKeys(`${type}-plugin-${id}`, () => [[
        `plugins.${id}`,
        ...plugin.additionalOptionScopes || []
      ]]);
    }
    _cachedScopes(mainScope, resetCache) {
      const _scopeCache = this._scopeCache;
      let cache = _scopeCache.get(mainScope);
      if (!cache || resetCache) {
        cache = /* @__PURE__ */ new Map();
        _scopeCache.set(mainScope, cache);
      }
      return cache;
    }
    getOptionScopes(mainScope, keyLists, resetCache) {
      const { options, type } = this;
      const cache = this._cachedScopes(mainScope, resetCache);
      const cached = cache.get(keyLists);
      if (cached) {
        return cached;
      }
      const scopes = /* @__PURE__ */ new Set();
      keyLists.forEach((keys) => {
        if (mainScope) {
          scopes.add(mainScope);
          keys.forEach((key) => addIfFound(scopes, mainScope, key));
        }
        keys.forEach((key) => addIfFound(scopes, options, key));
        keys.forEach((key) => addIfFound(scopes, overrides[type] || {}, key));
        keys.forEach((key) => addIfFound(scopes, defaults, key));
        keys.forEach((key) => addIfFound(scopes, descriptors, key));
      });
      const array = Array.from(scopes);
      if (array.length === 0) {
        array.push(Object.create(null));
      }
      if (keysCached.has(keyLists)) {
        cache.set(keyLists, array);
      }
      return array;
    }
    chartOptionScopes() {
      const { options, type } = this;
      return [
        options,
        overrides[type] || {},
        defaults.datasets[type] || {},
        { type },
        defaults,
        descriptors
      ];
    }
    resolveNamedOptions(scopes, names2, context, prefixes = [""]) {
      const result = { $shared: true };
      const { resolver, subPrefixes } = getResolver(this._resolverCache, scopes, prefixes);
      let options = resolver;
      if (needContext(resolver, names2)) {
        result.$shared = false;
        context = isFunction(context) ? context() : context;
        const subResolver = this.createResolver(scopes, context, subPrefixes);
        options = _attachContext(resolver, context, subResolver);
      }
      for (const prop of names2) {
        result[prop] = options[prop];
      }
      return result;
    }
    createResolver(scopes, context, prefixes = [""], descriptorDefaults) {
      const { resolver } = getResolver(this._resolverCache, scopes, prefixes);
      return isObject(context) ? _attachContext(resolver, context, void 0, descriptorDefaults) : resolver;
    }
  };
  function getResolver(resolverCache, scopes, prefixes) {
    let cache = resolverCache.get(scopes);
    if (!cache) {
      cache = /* @__PURE__ */ new Map();
      resolverCache.set(scopes, cache);
    }
    const cacheKey = prefixes.join();
    let cached = cache.get(cacheKey);
    if (!cached) {
      const resolver = _createResolver(scopes, prefixes);
      cached = {
        resolver,
        subPrefixes: prefixes.filter((p) => !p.toLowerCase().includes("hover"))
      };
      cache.set(cacheKey, cached);
    }
    return cached;
  }
  var hasFunction = (value) => isObject(value) && Object.getOwnPropertyNames(value).reduce((acc, key) => acc || isFunction(value[key]), false);
  function needContext(proxy, names2) {
    const { isScriptable, isIndexable } = _descriptors(proxy);
    for (const prop of names2) {
      const scriptable = isScriptable(prop);
      const indexable = isIndexable(prop);
      const value = (indexable || scriptable) && proxy[prop];
      if (scriptable && (isFunction(value) || hasFunction(value)) || indexable && isArray(value)) {
        return true;
      }
    }
    return false;
  }
  var version = "3.7.1";
  var KNOWN_POSITIONS = ["top", "bottom", "left", "right", "chartArea"];
  function positionIsHorizontal(position, axis) {
    return position === "top" || position === "bottom" || KNOWN_POSITIONS.indexOf(position) === -1 && axis === "x";
  }
  function compare2Level(l1, l2) {
    return function(a, b) {
      return a[l1] === b[l1] ? a[l2] - b[l2] : a[l1] - b[l1];
    };
  }
  function onAnimationsComplete(context) {
    const chart2 = context.chart;
    const animationOptions2 = chart2.options.animation;
    chart2.notifyPlugins("afterRender");
    callback(animationOptions2 && animationOptions2.onComplete, [context], chart2);
  }
  function onAnimationProgress(context) {
    const chart2 = context.chart;
    const animationOptions2 = chart2.options.animation;
    callback(animationOptions2 && animationOptions2.onProgress, [context], chart2);
  }
  function getCanvas(item) {
    if (_isDomSupported() && typeof item === "string") {
      item = document.getElementById(item);
    } else if (item && item.length) {
      item = item[0];
    }
    if (item && item.canvas) {
      item = item.canvas;
    }
    return item;
  }
  var instances = {};
  var getChart = (key) => {
    const canvas = getCanvas(key);
    return Object.values(instances).filter((c) => c.canvas === canvas).pop();
  };
  function moveNumericKeys(obj, start, move) {
    const keys = Object.keys(obj);
    for (const key of keys) {
      const intKey = +key;
      if (intKey >= start) {
        const value = obj[key];
        delete obj[key];
        if (move > 0 || intKey > start) {
          obj[intKey + move] = value;
        }
      }
    }
  }
  function determineLastEvent(e, lastEvent, inChartArea, isClick) {
    if (!inChartArea || e.type === "mouseout") {
      return null;
    }
    if (isClick) {
      return lastEvent;
    }
    return e;
  }
  var Chart = class {
    constructor(item, userConfig) {
      const config = this.config = new Config(userConfig);
      const initialCanvas = getCanvas(item);
      const existingChart = getChart(initialCanvas);
      if (existingChart) {
        throw new Error("Canvas is already in use. Chart with ID '" + existingChart.id + "' must be destroyed before the canvas can be reused.");
      }
      const options = config.createResolver(config.chartOptionScopes(), this.getContext());
      this.platform = new (config.platform || _detectPlatform(initialCanvas))();
      this.platform.updateConfig(config);
      const context = this.platform.acquireContext(initialCanvas, options.aspectRatio);
      const canvas = context && context.canvas;
      const height = canvas && canvas.height;
      const width = canvas && canvas.width;
      this.id = uid();
      this.ctx = context;
      this.canvas = canvas;
      this.width = width;
      this.height = height;
      this._options = options;
      this._aspectRatio = this.aspectRatio;
      this._layers = [];
      this._metasets = [];
      this._stacks = void 0;
      this.boxes = [];
      this.currentDevicePixelRatio = void 0;
      this.chartArea = void 0;
      this._active = [];
      this._lastEvent = void 0;
      this._listeners = {};
      this._responsiveListeners = void 0;
      this._sortedMetasets = [];
      this.scales = {};
      this._plugins = new PluginService();
      this.$proxies = {};
      this._hiddenIndices = {};
      this.attached = false;
      this._animationsDisabled = void 0;
      this.$context = void 0;
      this._doResize = debounce((mode) => this.update(mode), options.resizeDelay || 0);
      this._dataChanges = [];
      instances[this.id] = this;
      if (!context || !canvas) {
        console.error("Failed to create chart: can't acquire context from the given item");
        return;
      }
      animator.listen(this, "complete", onAnimationsComplete);
      animator.listen(this, "progress", onAnimationProgress);
      this._initialize();
      if (this.attached) {
        this.update();
      }
    }
    get aspectRatio() {
      const { options: { aspectRatio, maintainAspectRatio }, width, height, _aspectRatio } = this;
      if (!isNullOrUndef(aspectRatio)) {
        return aspectRatio;
      }
      if (maintainAspectRatio && _aspectRatio) {
        return _aspectRatio;
      }
      return height ? width / height : null;
    }
    get data() {
      return this.config.data;
    }
    set data(data) {
      this.config.data = data;
    }
    get options() {
      return this._options;
    }
    set options(options) {
      this.config.options = options;
    }
    _initialize() {
      this.notifyPlugins("beforeInit");
      if (this.options.responsive) {
        this.resize();
      } else {
        retinaScale(this, this.options.devicePixelRatio);
      }
      this.bindEvents();
      this.notifyPlugins("afterInit");
      return this;
    }
    clear() {
      clearCanvas(this.canvas, this.ctx);
      return this;
    }
    stop() {
      animator.stop(this);
      return this;
    }
    resize(width, height) {
      if (!animator.running(this)) {
        this._resize(width, height);
      } else {
        this._resizeBeforeDraw = { width, height };
      }
    }
    _resize(width, height) {
      const options = this.options;
      const canvas = this.canvas;
      const aspectRatio = options.maintainAspectRatio && this.aspectRatio;
      const newSize = this.platform.getMaximumSize(canvas, width, height, aspectRatio);
      const newRatio = options.devicePixelRatio || this.platform.getDevicePixelRatio();
      const mode = this.width ? "resize" : "attach";
      this.width = newSize.width;
      this.height = newSize.height;
      this._aspectRatio = this.aspectRatio;
      if (!retinaScale(this, newRatio, true)) {
        return;
      }
      this.notifyPlugins("resize", { size: newSize });
      callback(options.onResize, [this, newSize], this);
      if (this.attached) {
        if (this._doResize(mode)) {
          this.render();
        }
      }
    }
    ensureScalesHaveIDs() {
      const options = this.options;
      const scalesOptions = options.scales || {};
      each(scalesOptions, (axisOptions, axisID) => {
        axisOptions.id = axisID;
      });
    }
    buildOrUpdateScales() {
      const options = this.options;
      const scaleOpts = options.scales;
      const scales2 = this.scales;
      const updated = Object.keys(scales2).reduce((obj, id) => {
        obj[id] = false;
        return obj;
      }, {});
      let items = [];
      if (scaleOpts) {
        items = items.concat(Object.keys(scaleOpts).map((id) => {
          const scaleOptions = scaleOpts[id];
          const axis = determineAxis(id, scaleOptions);
          const isRadial = axis === "r";
          const isHorizontal = axis === "x";
          return {
            options: scaleOptions,
            dposition: isRadial ? "chartArea" : isHorizontal ? "bottom" : "left",
            dtype: isRadial ? "radialLinear" : isHorizontal ? "category" : "linear"
          };
        }));
      }
      each(items, (item) => {
        const scaleOptions = item.options;
        const id = scaleOptions.id;
        const axis = determineAxis(id, scaleOptions);
        const scaleType = valueOrDefault(scaleOptions.type, item.dtype);
        if (scaleOptions.position === void 0 || positionIsHorizontal(scaleOptions.position, axis) !== positionIsHorizontal(item.dposition)) {
          scaleOptions.position = item.dposition;
        }
        updated[id] = true;
        let scale = null;
        if (id in scales2 && scales2[id].type === scaleType) {
          scale = scales2[id];
        } else {
          const scaleClass = registry.getScale(scaleType);
          scale = new scaleClass({
            id,
            type: scaleType,
            ctx: this.ctx,
            chart: this
          });
          scales2[scale.id] = scale;
        }
        scale.init(scaleOptions, options);
      });
      each(updated, (hasUpdated, id) => {
        if (!hasUpdated) {
          delete scales2[id];
        }
      });
      each(scales2, (scale) => {
        layouts.configure(this, scale, scale.options);
        layouts.addBox(this, scale);
      });
    }
    _updateMetasets() {
      const metasets = this._metasets;
      const numData = this.data.datasets.length;
      const numMeta = metasets.length;
      metasets.sort((a, b) => a.index - b.index);
      if (numMeta > numData) {
        for (let i = numData; i < numMeta; ++i) {
          this._destroyDatasetMeta(i);
        }
        metasets.splice(numData, numMeta - numData);
      }
      this._sortedMetasets = metasets.slice(0).sort(compare2Level("order", "index"));
    }
    _removeUnreferencedMetasets() {
      const { _metasets: metasets, data: { datasets } } = this;
      if (metasets.length > datasets.length) {
        delete this._stacks;
      }
      metasets.forEach((meta, index) => {
        if (datasets.filter((x) => x === meta._dataset).length === 0) {
          this._destroyDatasetMeta(index);
        }
      });
    }
    buildOrUpdateControllers() {
      const newControllers = [];
      const datasets = this.data.datasets;
      let i, ilen;
      this._removeUnreferencedMetasets();
      for (i = 0, ilen = datasets.length; i < ilen; i++) {
        const dataset = datasets[i];
        let meta = this.getDatasetMeta(i);
        const type = dataset.type || this.config.type;
        if (meta.type && meta.type !== type) {
          this._destroyDatasetMeta(i);
          meta = this.getDatasetMeta(i);
        }
        meta.type = type;
        meta.indexAxis = dataset.indexAxis || getIndexAxis(type, this.options);
        meta.order = dataset.order || 0;
        meta.index = i;
        meta.label = "" + dataset.label;
        meta.visible = this.isDatasetVisible(i);
        if (meta.controller) {
          meta.controller.updateIndex(i);
          meta.controller.linkScales();
        } else {
          const ControllerClass = registry.getController(type);
          const { datasetElementType, dataElementType } = defaults.datasets[type];
          Object.assign(ControllerClass.prototype, {
            dataElementType: registry.getElement(dataElementType),
            datasetElementType: datasetElementType && registry.getElement(datasetElementType)
          });
          meta.controller = new ControllerClass(this, i);
          newControllers.push(meta.controller);
        }
      }
      this._updateMetasets();
      return newControllers;
    }
    _resetElements() {
      each(this.data.datasets, (dataset, datasetIndex) => {
        this.getDatasetMeta(datasetIndex).controller.reset();
      }, this);
    }
    reset() {
      this._resetElements();
      this.notifyPlugins("reset");
    }
    update(mode) {
      const config = this.config;
      config.update();
      const options = this._options = config.createResolver(config.chartOptionScopes(), this.getContext());
      const animsDisabled = this._animationsDisabled = !options.animation;
      this._updateScales();
      this._checkEventBindings();
      this._updateHiddenIndices();
      this._plugins.invalidate();
      if (this.notifyPlugins("beforeUpdate", { mode, cancelable: true }) === false) {
        return;
      }
      const newControllers = this.buildOrUpdateControllers();
      this.notifyPlugins("beforeElementsUpdate");
      let minPadding = 0;
      for (let i = 0, ilen = this.data.datasets.length; i < ilen; i++) {
        const { controller } = this.getDatasetMeta(i);
        const reset = !animsDisabled && newControllers.indexOf(controller) === -1;
        controller.buildOrUpdateElements(reset);
        minPadding = Math.max(+controller.getMaxOverflow(), minPadding);
      }
      minPadding = this._minPadding = options.layout.autoPadding ? minPadding : 0;
      this._updateLayout(minPadding);
      if (!animsDisabled) {
        each(newControllers, (controller) => {
          controller.reset();
        });
      }
      this._updateDatasets(mode);
      this.notifyPlugins("afterUpdate", { mode });
      this._layers.sort(compare2Level("z", "_idx"));
      const { _active, _lastEvent } = this;
      if (_lastEvent) {
        this._eventHandler(_lastEvent, true);
      } else if (_active.length) {
        this._updateHoverStyles(_active, _active, true);
      }
      this.render();
    }
    _updateScales() {
      each(this.scales, (scale) => {
        layouts.removeBox(this, scale);
      });
      this.ensureScalesHaveIDs();
      this.buildOrUpdateScales();
    }
    _checkEventBindings() {
      const options = this.options;
      const existingEvents = new Set(Object.keys(this._listeners));
      const newEvents = new Set(options.events);
      if (!setsEqual(existingEvents, newEvents) || !!this._responsiveListeners !== options.responsive) {
        this.unbindEvents();
        this.bindEvents();
      }
    }
    _updateHiddenIndices() {
      const { _hiddenIndices } = this;
      const changes = this._getUniformDataChanges() || [];
      for (const { method, start, count } of changes) {
        const move = method === "_removeElements" ? -count : count;
        moveNumericKeys(_hiddenIndices, start, move);
      }
    }
    _getUniformDataChanges() {
      const _dataChanges = this._dataChanges;
      if (!_dataChanges || !_dataChanges.length) {
        return;
      }
      this._dataChanges = [];
      const datasetCount = this.data.datasets.length;
      const makeSet = (idx) => new Set(_dataChanges.filter((c) => c[0] === idx).map((c, i) => i + "," + c.splice(1).join(",")));
      const changeSet = makeSet(0);
      for (let i = 1; i < datasetCount; i++) {
        if (!setsEqual(changeSet, makeSet(i))) {
          return;
        }
      }
      return Array.from(changeSet).map((c) => c.split(",")).map((a) => ({ method: a[1], start: +a[2], count: +a[3] }));
    }
    _updateLayout(minPadding) {
      if (this.notifyPlugins("beforeLayout", { cancelable: true }) === false) {
        return;
      }
      layouts.update(this, this.width, this.height, minPadding);
      const area = this.chartArea;
      const noArea = area.width <= 0 || area.height <= 0;
      this._layers = [];
      each(this.boxes, (box) => {
        if (noArea && box.position === "chartArea") {
          return;
        }
        if (box.configure) {
          box.configure();
        }
        this._layers.push(...box._layers());
      }, this);
      this._layers.forEach((item, index) => {
        item._idx = index;
      });
      this.notifyPlugins("afterLayout");
    }
    _updateDatasets(mode) {
      if (this.notifyPlugins("beforeDatasetsUpdate", { mode, cancelable: true }) === false) {
        return;
      }
      for (let i = 0, ilen = this.data.datasets.length; i < ilen; ++i) {
        this.getDatasetMeta(i).controller.configure();
      }
      for (let i = 0, ilen = this.data.datasets.length; i < ilen; ++i) {
        this._updateDataset(i, isFunction(mode) ? mode({ datasetIndex: i }) : mode);
      }
      this.notifyPlugins("afterDatasetsUpdate", { mode });
    }
    _updateDataset(index, mode) {
      const meta = this.getDatasetMeta(index);
      const args = { meta, index, mode, cancelable: true };
      if (this.notifyPlugins("beforeDatasetUpdate", args) === false) {
        return;
      }
      meta.controller._update(mode);
      args.cancelable = false;
      this.notifyPlugins("afterDatasetUpdate", args);
    }
    render() {
      if (this.notifyPlugins("beforeRender", { cancelable: true }) === false) {
        return;
      }
      if (animator.has(this)) {
        if (this.attached && !animator.running(this)) {
          animator.start(this);
        }
      } else {
        this.draw();
        onAnimationsComplete({ chart: this });
      }
    }
    draw() {
      let i;
      if (this._resizeBeforeDraw) {
        const { width, height } = this._resizeBeforeDraw;
        this._resize(width, height);
        this._resizeBeforeDraw = null;
      }
      this.clear();
      if (this.width <= 0 || this.height <= 0) {
        return;
      }
      if (this.notifyPlugins("beforeDraw", { cancelable: true }) === false) {
        return;
      }
      const layers = this._layers;
      for (i = 0; i < layers.length && layers[i].z <= 0; ++i) {
        layers[i].draw(this.chartArea);
      }
      this._drawDatasets();
      for (; i < layers.length; ++i) {
        layers[i].draw(this.chartArea);
      }
      this.notifyPlugins("afterDraw");
    }
    _getSortedDatasetMetas(filterVisible) {
      const metasets = this._sortedMetasets;
      const result = [];
      let i, ilen;
      for (i = 0, ilen = metasets.length; i < ilen; ++i) {
        const meta = metasets[i];
        if (!filterVisible || meta.visible) {
          result.push(meta);
        }
      }
      return result;
    }
    getSortedVisibleDatasetMetas() {
      return this._getSortedDatasetMetas(true);
    }
    _drawDatasets() {
      if (this.notifyPlugins("beforeDatasetsDraw", { cancelable: true }) === false) {
        return;
      }
      const metasets = this.getSortedVisibleDatasetMetas();
      for (let i = metasets.length - 1; i >= 0; --i) {
        this._drawDataset(metasets[i]);
      }
      this.notifyPlugins("afterDatasetsDraw");
    }
    _drawDataset(meta) {
      const ctx = this.ctx;
      const clip = meta._clip;
      const useClip = !clip.disabled;
      const area = this.chartArea;
      const args = {
        meta,
        index: meta.index,
        cancelable: true
      };
      if (this.notifyPlugins("beforeDatasetDraw", args) === false) {
        return;
      }
      if (useClip) {
        clipArea(ctx, {
          left: clip.left === false ? 0 : area.left - clip.left,
          right: clip.right === false ? this.width : area.right + clip.right,
          top: clip.top === false ? 0 : area.top - clip.top,
          bottom: clip.bottom === false ? this.height : area.bottom + clip.bottom
        });
      }
      meta.controller.draw();
      if (useClip) {
        unclipArea(ctx);
      }
      args.cancelable = false;
      this.notifyPlugins("afterDatasetDraw", args);
    }
    getElementsAtEventForMode(e, mode, options, useFinalPosition) {
      const method = Interaction.modes[mode];
      if (typeof method === "function") {
        return method(this, e, options, useFinalPosition);
      }
      return [];
    }
    getDatasetMeta(datasetIndex) {
      const dataset = this.data.datasets[datasetIndex];
      const metasets = this._metasets;
      let meta = metasets.filter((x) => x && x._dataset === dataset).pop();
      if (!meta) {
        meta = {
          type: null,
          data: [],
          dataset: null,
          controller: null,
          hidden: null,
          xAxisID: null,
          yAxisID: null,
          order: dataset && dataset.order || 0,
          index: datasetIndex,
          _dataset: dataset,
          _parsed: [],
          _sorted: false
        };
        metasets.push(meta);
      }
      return meta;
    }
    getContext() {
      return this.$context || (this.$context = createContext(null, { chart: this, type: "chart" }));
    }
    getVisibleDatasetCount() {
      return this.getSortedVisibleDatasetMetas().length;
    }
    isDatasetVisible(datasetIndex) {
      const dataset = this.data.datasets[datasetIndex];
      if (!dataset) {
        return false;
      }
      const meta = this.getDatasetMeta(datasetIndex);
      return typeof meta.hidden === "boolean" ? !meta.hidden : !dataset.hidden;
    }
    setDatasetVisibility(datasetIndex, visible) {
      const meta = this.getDatasetMeta(datasetIndex);
      meta.hidden = !visible;
    }
    toggleDataVisibility(index) {
      this._hiddenIndices[index] = !this._hiddenIndices[index];
    }
    getDataVisibility(index) {
      return !this._hiddenIndices[index];
    }
    _updateVisibility(datasetIndex, dataIndex, visible) {
      const mode = visible ? "show" : "hide";
      const meta = this.getDatasetMeta(datasetIndex);
      const anims = meta.controller._resolveAnimations(void 0, mode);
      if (defined(dataIndex)) {
        meta.data[dataIndex].hidden = !visible;
        this.update();
      } else {
        this.setDatasetVisibility(datasetIndex, visible);
        anims.update(meta, { visible });
        this.update((ctx) => ctx.datasetIndex === datasetIndex ? mode : void 0);
      }
    }
    hide(datasetIndex, dataIndex) {
      this._updateVisibility(datasetIndex, dataIndex, false);
    }
    show(datasetIndex, dataIndex) {
      this._updateVisibility(datasetIndex, dataIndex, true);
    }
    _destroyDatasetMeta(datasetIndex) {
      const meta = this._metasets[datasetIndex];
      if (meta && meta.controller) {
        meta.controller._destroy();
      }
      delete this._metasets[datasetIndex];
    }
    _stop() {
      let i, ilen;
      this.stop();
      animator.remove(this);
      for (i = 0, ilen = this.data.datasets.length; i < ilen; ++i) {
        this._destroyDatasetMeta(i);
      }
    }
    destroy() {
      this.notifyPlugins("beforeDestroy");
      const { canvas, ctx } = this;
      this._stop();
      this.config.clearCache();
      if (canvas) {
        this.unbindEvents();
        clearCanvas(canvas, ctx);
        this.platform.releaseContext(ctx);
        this.canvas = null;
        this.ctx = null;
      }
      this.notifyPlugins("destroy");
      delete instances[this.id];
      this.notifyPlugins("afterDestroy");
    }
    toBase64Image(...args) {
      return this.canvas.toDataURL(...args);
    }
    bindEvents() {
      this.bindUserEvents();
      if (this.options.responsive) {
        this.bindResponsiveEvents();
      } else {
        this.attached = true;
      }
    }
    bindUserEvents() {
      const listeners = this._listeners;
      const platform = this.platform;
      const _add = (type, listener2) => {
        platform.addEventListener(this, type, listener2);
        listeners[type] = listener2;
      };
      const listener = (e, x, y) => {
        e.offsetX = x;
        e.offsetY = y;
        this._eventHandler(e);
      };
      each(this.options.events, (type) => _add(type, listener));
    }
    bindResponsiveEvents() {
      if (!this._responsiveListeners) {
        this._responsiveListeners = {};
      }
      const listeners = this._responsiveListeners;
      const platform = this.platform;
      const _add = (type, listener2) => {
        platform.addEventListener(this, type, listener2);
        listeners[type] = listener2;
      };
      const _remove = (type, listener2) => {
        if (listeners[type]) {
          platform.removeEventListener(this, type, listener2);
          delete listeners[type];
        }
      };
      const listener = (width, height) => {
        if (this.canvas) {
          this.resize(width, height);
        }
      };
      let detached;
      const attached = () => {
        _remove("attach", attached);
        this.attached = true;
        this.resize();
        _add("resize", listener);
        _add("detach", detached);
      };
      detached = () => {
        this.attached = false;
        _remove("resize", listener);
        this._stop();
        this._resize(0, 0);
        _add("attach", attached);
      };
      if (platform.isAttached(this.canvas)) {
        attached();
      } else {
        detached();
      }
    }
    unbindEvents() {
      each(this._listeners, (listener, type) => {
        this.platform.removeEventListener(this, type, listener);
      });
      this._listeners = {};
      each(this._responsiveListeners, (listener, type) => {
        this.platform.removeEventListener(this, type, listener);
      });
      this._responsiveListeners = void 0;
    }
    updateHoverStyle(items, mode, enabled) {
      const prefix = enabled ? "set" : "remove";
      let meta, item, i, ilen;
      if (mode === "dataset") {
        meta = this.getDatasetMeta(items[0].datasetIndex);
        meta.controller["_" + prefix + "DatasetHoverStyle"]();
      }
      for (i = 0, ilen = items.length; i < ilen; ++i) {
        item = items[i];
        const controller = item && this.getDatasetMeta(item.datasetIndex).controller;
        if (controller) {
          controller[prefix + "HoverStyle"](item.element, item.datasetIndex, item.index);
        }
      }
    }
    getActiveElements() {
      return this._active || [];
    }
    setActiveElements(activeElements) {
      const lastActive = this._active || [];
      const active = activeElements.map(({ datasetIndex, index }) => {
        const meta = this.getDatasetMeta(datasetIndex);
        if (!meta) {
          throw new Error("No dataset found at index " + datasetIndex);
        }
        return {
          datasetIndex,
          element: meta.data[index],
          index
        };
      });
      const changed = !_elementsEqual(active, lastActive);
      if (changed) {
        this._active = active;
        this._lastEvent = null;
        this._updateHoverStyles(active, lastActive);
      }
    }
    notifyPlugins(hook, args, filter) {
      return this._plugins.notify(this, hook, args, filter);
    }
    _updateHoverStyles(active, lastActive, replay) {
      const hoverOptions = this.options.hover;
      const diff = (a, b) => a.filter((x) => !b.some((y) => x.datasetIndex === y.datasetIndex && x.index === y.index));
      const deactivated = diff(lastActive, active);
      const activated = replay ? active : diff(active, lastActive);
      if (deactivated.length) {
        this.updateHoverStyle(deactivated, hoverOptions.mode, false);
      }
      if (activated.length && hoverOptions.mode) {
        this.updateHoverStyle(activated, hoverOptions.mode, true);
      }
    }
    _eventHandler(e, replay) {
      const args = {
        event: e,
        replay,
        cancelable: true,
        inChartArea: _isPointInArea(e, this.chartArea, this._minPadding)
      };
      const eventFilter = (plugin) => (plugin.options.events || this.options.events).includes(e.native.type);
      if (this.notifyPlugins("beforeEvent", args, eventFilter) === false) {
        return;
      }
      const changed = this._handleEvent(e, replay, args.inChartArea);
      args.cancelable = false;
      this.notifyPlugins("afterEvent", args, eventFilter);
      if (changed || args.changed) {
        this.render();
      }
      return this;
    }
    _handleEvent(e, replay, inChartArea) {
      const { _active: lastActive = [], options } = this;
      const useFinalPosition = replay;
      const active = this._getActiveElements(e, lastActive, inChartArea, useFinalPosition);
      const isClick = _isClickEvent(e);
      const lastEvent = determineLastEvent(e, this._lastEvent, inChartArea, isClick);
      if (inChartArea) {
        this._lastEvent = null;
        callback(options.onHover, [e, active, this], this);
        if (isClick) {
          callback(options.onClick, [e, active, this], this);
        }
      }
      const changed = !_elementsEqual(active, lastActive);
      if (changed || replay) {
        this._active = active;
        this._updateHoverStyles(active, lastActive, replay);
      }
      this._lastEvent = lastEvent;
      return changed;
    }
    _getActiveElements(e, lastActive, inChartArea, useFinalPosition) {
      if (e.type === "mouseout") {
        return [];
      }
      if (!inChartArea) {
        return lastActive;
      }
      const hoverOptions = this.options.hover;
      return this.getElementsAtEventForMode(e, hoverOptions.mode, hoverOptions, useFinalPosition);
    }
  };
  var invalidatePlugins = () => each(Chart.instances, (chart2) => chart2._plugins.invalidate());
  var enumerable = true;
  Object.defineProperties(Chart, {
    defaults: {
      enumerable,
      value: defaults
    },
    instances: {
      enumerable,
      value: instances
    },
    overrides: {
      enumerable,
      value: overrides
    },
    registry: {
      enumerable,
      value: registry
    },
    version: {
      enumerable,
      value: version
    },
    getChart: {
      enumerable,
      value: getChart
    },
    register: {
      enumerable,
      value: (...items) => {
        registry.add(...items);
        invalidatePlugins();
      }
    },
    unregister: {
      enumerable,
      value: (...items) => {
        registry.remove(...items);
        invalidatePlugins();
      }
    }
  });
  function clipArc(ctx, element, endAngle) {
    const { startAngle, pixelMargin, x, y, outerRadius, innerRadius } = element;
    let angleMargin = pixelMargin / outerRadius;
    ctx.beginPath();
    ctx.arc(x, y, outerRadius, startAngle - angleMargin, endAngle + angleMargin);
    if (innerRadius > pixelMargin) {
      angleMargin = pixelMargin / innerRadius;
      ctx.arc(x, y, innerRadius, endAngle + angleMargin, startAngle - angleMargin, true);
    } else {
      ctx.arc(x, y, pixelMargin, endAngle + HALF_PI, startAngle - HALF_PI);
    }
    ctx.closePath();
    ctx.clip();
  }
  function toRadiusCorners(value) {
    return _readValueToProps(value, ["outerStart", "outerEnd", "innerStart", "innerEnd"]);
  }
  function parseBorderRadius$1(arc, innerRadius, outerRadius, angleDelta) {
    const o = toRadiusCorners(arc.options.borderRadius);
    const halfThickness = (outerRadius - innerRadius) / 2;
    const innerLimit = Math.min(halfThickness, angleDelta * innerRadius / 2);
    const computeOuterLimit = (val) => {
      const outerArcLimit = (outerRadius - Math.min(halfThickness, val)) * angleDelta / 2;
      return _limitValue(val, 0, Math.min(halfThickness, outerArcLimit));
    };
    return {
      outerStart: computeOuterLimit(o.outerStart),
      outerEnd: computeOuterLimit(o.outerEnd),
      innerStart: _limitValue(o.innerStart, 0, innerLimit),
      innerEnd: _limitValue(o.innerEnd, 0, innerLimit)
    };
  }
  function rThetaToXY(r, theta, x, y) {
    return {
      x: x + r * Math.cos(theta),
      y: y + r * Math.sin(theta)
    };
  }
  function pathArc(ctx, element, offset, spacing, end) {
    const { x, y, startAngle: start, pixelMargin, innerRadius: innerR } = element;
    const outerRadius = Math.max(element.outerRadius + spacing + offset - pixelMargin, 0);
    const innerRadius = innerR > 0 ? innerR + spacing + offset + pixelMargin : 0;
    let spacingOffset = 0;
    const alpha = end - start;
    if (spacing) {
      const noSpacingInnerRadius = innerR > 0 ? innerR - spacing : 0;
      const noSpacingOuterRadius = outerRadius > 0 ? outerRadius - spacing : 0;
      const avNogSpacingRadius = (noSpacingInnerRadius + noSpacingOuterRadius) / 2;
      const adjustedAngle = avNogSpacingRadius !== 0 ? alpha * avNogSpacingRadius / (avNogSpacingRadius + spacing) : alpha;
      spacingOffset = (alpha - adjustedAngle) / 2;
    }
    const beta = Math.max(1e-3, alpha * outerRadius - offset / PI) / outerRadius;
    const angleOffset = (alpha - beta) / 2;
    const startAngle = start + angleOffset + spacingOffset;
    const endAngle = end - angleOffset - spacingOffset;
    const { outerStart, outerEnd, innerStart, innerEnd } = parseBorderRadius$1(element, innerRadius, outerRadius, endAngle - startAngle);
    const outerStartAdjustedRadius = outerRadius - outerStart;
    const outerEndAdjustedRadius = outerRadius - outerEnd;
    const outerStartAdjustedAngle = startAngle + outerStart / outerStartAdjustedRadius;
    const outerEndAdjustedAngle = endAngle - outerEnd / outerEndAdjustedRadius;
    const innerStartAdjustedRadius = innerRadius + innerStart;
    const innerEndAdjustedRadius = innerRadius + innerEnd;
    const innerStartAdjustedAngle = startAngle + innerStart / innerStartAdjustedRadius;
    const innerEndAdjustedAngle = endAngle - innerEnd / innerEndAdjustedRadius;
    ctx.beginPath();
    ctx.arc(x, y, outerRadius, outerStartAdjustedAngle, outerEndAdjustedAngle);
    if (outerEnd > 0) {
      const pCenter = rThetaToXY(outerEndAdjustedRadius, outerEndAdjustedAngle, x, y);
      ctx.arc(pCenter.x, pCenter.y, outerEnd, outerEndAdjustedAngle, endAngle + HALF_PI);
    }
    const p4 = rThetaToXY(innerEndAdjustedRadius, endAngle, x, y);
    ctx.lineTo(p4.x, p4.y);
    if (innerEnd > 0) {
      const pCenter = rThetaToXY(innerEndAdjustedRadius, innerEndAdjustedAngle, x, y);
      ctx.arc(pCenter.x, pCenter.y, innerEnd, endAngle + HALF_PI, innerEndAdjustedAngle + Math.PI);
    }
    ctx.arc(x, y, innerRadius, endAngle - innerEnd / innerRadius, startAngle + innerStart / innerRadius, true);
    if (innerStart > 0) {
      const pCenter = rThetaToXY(innerStartAdjustedRadius, innerStartAdjustedAngle, x, y);
      ctx.arc(pCenter.x, pCenter.y, innerStart, innerStartAdjustedAngle + Math.PI, startAngle - HALF_PI);
    }
    const p8 = rThetaToXY(outerStartAdjustedRadius, startAngle, x, y);
    ctx.lineTo(p8.x, p8.y);
    if (outerStart > 0) {
      const pCenter = rThetaToXY(outerStartAdjustedRadius, outerStartAdjustedAngle, x, y);
      ctx.arc(pCenter.x, pCenter.y, outerStart, startAngle - HALF_PI, outerStartAdjustedAngle);
    }
    ctx.closePath();
  }
  function drawArc(ctx, element, offset, spacing) {
    const { fullCircles, startAngle, circumference } = element;
    let endAngle = element.endAngle;
    if (fullCircles) {
      pathArc(ctx, element, offset, spacing, startAngle + TAU);
      for (let i = 0; i < fullCircles; ++i) {
        ctx.fill();
      }
      if (!isNaN(circumference)) {
        endAngle = startAngle + circumference % TAU;
        if (circumference % TAU === 0) {
          endAngle += TAU;
        }
      }
    }
    pathArc(ctx, element, offset, spacing, endAngle);
    ctx.fill();
    return endAngle;
  }
  function drawFullCircleBorders(ctx, element, inner) {
    const { x, y, startAngle, pixelMargin, fullCircles } = element;
    const outerRadius = Math.max(element.outerRadius - pixelMargin, 0);
    const innerRadius = element.innerRadius + pixelMargin;
    let i;
    if (inner) {
      clipArc(ctx, element, startAngle + TAU);
    }
    ctx.beginPath();
    ctx.arc(x, y, innerRadius, startAngle + TAU, startAngle, true);
    for (i = 0; i < fullCircles; ++i) {
      ctx.stroke();
    }
    ctx.beginPath();
    ctx.arc(x, y, outerRadius, startAngle, startAngle + TAU);
    for (i = 0; i < fullCircles; ++i) {
      ctx.stroke();
    }
  }
  function drawBorder(ctx, element, offset, spacing, endAngle) {
    const { options } = element;
    const { borderWidth, borderJoinStyle } = options;
    const inner = options.borderAlign === "inner";
    if (!borderWidth) {
      return;
    }
    if (inner) {
      ctx.lineWidth = borderWidth * 2;
      ctx.lineJoin = borderJoinStyle || "round";
    } else {
      ctx.lineWidth = borderWidth;
      ctx.lineJoin = borderJoinStyle || "bevel";
    }
    if (element.fullCircles) {
      drawFullCircleBorders(ctx, element, inner);
    }
    if (inner) {
      clipArc(ctx, element, endAngle);
    }
    pathArc(ctx, element, offset, spacing, endAngle);
    ctx.stroke();
  }
  var ArcElement = class extends Element {
    constructor(cfg) {
      super();
      this.options = void 0;
      this.circumference = void 0;
      this.startAngle = void 0;
      this.endAngle = void 0;
      this.innerRadius = void 0;
      this.outerRadius = void 0;
      this.pixelMargin = 0;
      this.fullCircles = 0;
      if (cfg) {
        Object.assign(this, cfg);
      }
    }
    inRange(chartX, chartY, useFinalPosition) {
      const point = this.getProps(["x", "y"], useFinalPosition);
      const { angle, distance } = getAngleFromPoint(point, { x: chartX, y: chartY });
      const { startAngle, endAngle, innerRadius, outerRadius, circumference } = this.getProps([
        "startAngle",
        "endAngle",
        "innerRadius",
        "outerRadius",
        "circumference"
      ], useFinalPosition);
      const rAdjust = this.options.spacing / 2;
      const _circumference = valueOrDefault(circumference, endAngle - startAngle);
      const betweenAngles = _circumference >= TAU || _angleBetween(angle, startAngle, endAngle);
      const withinRadius = _isBetween(distance, innerRadius + rAdjust, outerRadius + rAdjust);
      return betweenAngles && withinRadius;
    }
    getCenterPoint(useFinalPosition) {
      const { x, y, startAngle, endAngle, innerRadius, outerRadius } = this.getProps([
        "x",
        "y",
        "startAngle",
        "endAngle",
        "innerRadius",
        "outerRadius",
        "circumference"
      ], useFinalPosition);
      const { offset, spacing } = this.options;
      const halfAngle = (startAngle + endAngle) / 2;
      const halfRadius = (innerRadius + outerRadius + spacing + offset) / 2;
      return {
        x: x + Math.cos(halfAngle) * halfRadius,
        y: y + Math.sin(halfAngle) * halfRadius
      };
    }
    tooltipPosition(useFinalPosition) {
      return this.getCenterPoint(useFinalPosition);
    }
    draw(ctx) {
      const { options, circumference } = this;
      const offset = (options.offset || 0) / 2;
      const spacing = (options.spacing || 0) / 2;
      this.pixelMargin = options.borderAlign === "inner" ? 0.33 : 0;
      this.fullCircles = circumference > TAU ? Math.floor(circumference / TAU) : 0;
      if (circumference === 0 || this.innerRadius < 0 || this.outerRadius < 0) {
        return;
      }
      ctx.save();
      let radiusOffset = 0;
      if (offset) {
        radiusOffset = offset / 2;
        const halfAngle = (this.startAngle + this.endAngle) / 2;
        ctx.translate(Math.cos(halfAngle) * radiusOffset, Math.sin(halfAngle) * radiusOffset);
        if (this.circumference >= PI) {
          radiusOffset = offset;
        }
      }
      ctx.fillStyle = options.backgroundColor;
      ctx.strokeStyle = options.borderColor;
      const endAngle = drawArc(ctx, this, radiusOffset, spacing);
      drawBorder(ctx, this, radiusOffset, spacing, endAngle);
      ctx.restore();
    }
  };
  ArcElement.id = "arc";
  ArcElement.defaults = {
    borderAlign: "center",
    borderColor: "#fff",
    borderJoinStyle: void 0,
    borderRadius: 0,
    borderWidth: 2,
    offset: 0,
    spacing: 0,
    angle: void 0
  };
  ArcElement.defaultRoutes = {
    backgroundColor: "backgroundColor"
  };
  function setStyle(ctx, options, style = options) {
    ctx.lineCap = valueOrDefault(style.borderCapStyle, options.borderCapStyle);
    ctx.setLineDash(valueOrDefault(style.borderDash, options.borderDash));
    ctx.lineDashOffset = valueOrDefault(style.borderDashOffset, options.borderDashOffset);
    ctx.lineJoin = valueOrDefault(style.borderJoinStyle, options.borderJoinStyle);
    ctx.lineWidth = valueOrDefault(style.borderWidth, options.borderWidth);
    ctx.strokeStyle = valueOrDefault(style.borderColor, options.borderColor);
  }
  function lineTo(ctx, previous, target) {
    ctx.lineTo(target.x, target.y);
  }
  function getLineMethod(options) {
    if (options.stepped) {
      return _steppedLineTo;
    }
    if (options.tension || options.cubicInterpolationMode === "monotone") {
      return _bezierCurveTo;
    }
    return lineTo;
  }
  function pathVars(points, segment, params = {}) {
    const count = points.length;
    const { start: paramsStart = 0, end: paramsEnd = count - 1 } = params;
    const { start: segmentStart, end: segmentEnd } = segment;
    const start = Math.max(paramsStart, segmentStart);
    const end = Math.min(paramsEnd, segmentEnd);
    const outside = paramsStart < segmentStart && paramsEnd < segmentStart || paramsStart > segmentEnd && paramsEnd > segmentEnd;
    return {
      count,
      start,
      loop: segment.loop,
      ilen: end < start && !outside ? count + end - start : end - start
    };
  }
  function pathSegment(ctx, line, segment, params) {
    const { points, options } = line;
    const { count, start, loop, ilen } = pathVars(points, segment, params);
    const lineMethod = getLineMethod(options);
    let { move = true, reverse } = params || {};
    let i, point, prev;
    for (i = 0; i <= ilen; ++i) {
      point = points[(start + (reverse ? ilen - i : i)) % count];
      if (point.skip) {
        continue;
      } else if (move) {
        ctx.moveTo(point.x, point.y);
        move = false;
      } else {
        lineMethod(ctx, prev, point, reverse, options.stepped);
      }
      prev = point;
    }
    if (loop) {
      point = points[(start + (reverse ? ilen : 0)) % count];
      lineMethod(ctx, prev, point, reverse, options.stepped);
    }
    return !!loop;
  }
  function fastPathSegment(ctx, line, segment, params) {
    const points = line.points;
    const { count, start, ilen } = pathVars(points, segment, params);
    const { move = true, reverse } = params || {};
    let avgX = 0;
    let countX = 0;
    let i, point, prevX, minY, maxY, lastY;
    const pointIndex = (index) => (start + (reverse ? ilen - index : index)) % count;
    const drawX = () => {
      if (minY !== maxY) {
        ctx.lineTo(avgX, maxY);
        ctx.lineTo(avgX, minY);
        ctx.lineTo(avgX, lastY);
      }
    };
    if (move) {
      point = points[pointIndex(0)];
      ctx.moveTo(point.x, point.y);
    }
    for (i = 0; i <= ilen; ++i) {
      point = points[pointIndex(i)];
      if (point.skip) {
        continue;
      }
      const x = point.x;
      const y = point.y;
      const truncX = x | 0;
      if (truncX === prevX) {
        if (y < minY) {
          minY = y;
        } else if (y > maxY) {
          maxY = y;
        }
        avgX = (countX * avgX + x) / ++countX;
      } else {
        drawX();
        ctx.lineTo(x, y);
        prevX = truncX;
        countX = 0;
        minY = maxY = y;
      }
      lastY = y;
    }
    drawX();
  }
  function _getSegmentMethod(line) {
    const opts = line.options;
    const borderDash = opts.borderDash && opts.borderDash.length;
    const useFastPath = !line._decimated && !line._loop && !opts.tension && opts.cubicInterpolationMode !== "monotone" && !opts.stepped && !borderDash;
    return useFastPath ? fastPathSegment : pathSegment;
  }
  function _getInterpolationMethod(options) {
    if (options.stepped) {
      return _steppedInterpolation;
    }
    if (options.tension || options.cubicInterpolationMode === "monotone") {
      return _bezierInterpolation;
    }
    return _pointInLine;
  }
  function strokePathWithCache(ctx, line, start, count) {
    let path = line._path;
    if (!path) {
      path = line._path = new Path2D();
      if (line.path(path, start, count)) {
        path.closePath();
      }
    }
    setStyle(ctx, line.options);
    ctx.stroke(path);
  }
  function strokePathDirect(ctx, line, start, count) {
    const { segments, options } = line;
    const segmentMethod = _getSegmentMethod(line);
    for (const segment of segments) {
      setStyle(ctx, options, segment.style);
      ctx.beginPath();
      if (segmentMethod(ctx, line, segment, { start, end: start + count - 1 })) {
        ctx.closePath();
      }
      ctx.stroke();
    }
  }
  var usePath2D = typeof Path2D === "function";
  function draw(ctx, line, start, count) {
    if (usePath2D && !line.options.segment) {
      strokePathWithCache(ctx, line, start, count);
    } else {
      strokePathDirect(ctx, line, start, count);
    }
  }
  var LineElement = class extends Element {
    constructor(cfg) {
      super();
      this.animated = true;
      this.options = void 0;
      this._chart = void 0;
      this._loop = void 0;
      this._fullLoop = void 0;
      this._path = void 0;
      this._points = void 0;
      this._segments = void 0;
      this._decimated = false;
      this._pointsUpdated = false;
      this._datasetIndex = void 0;
      if (cfg) {
        Object.assign(this, cfg);
      }
    }
    updateControlPoints(chartArea, indexAxis) {
      const options = this.options;
      if ((options.tension || options.cubicInterpolationMode === "monotone") && !options.stepped && !this._pointsUpdated) {
        const loop = options.spanGaps ? this._loop : this._fullLoop;
        _updateBezierControlPoints(this._points, options, chartArea, loop, indexAxis);
        this._pointsUpdated = true;
      }
    }
    set points(points) {
      this._points = points;
      delete this._segments;
      delete this._path;
      this._pointsUpdated = false;
    }
    get points() {
      return this._points;
    }
    get segments() {
      return this._segments || (this._segments = _computeSegments(this, this.options.segment));
    }
    first() {
      const segments = this.segments;
      const points = this.points;
      return segments.length && points[segments[0].start];
    }
    last() {
      const segments = this.segments;
      const points = this.points;
      const count = segments.length;
      return count && points[segments[count - 1].end];
    }
    interpolate(point, property) {
      const options = this.options;
      const value = point[property];
      const points = this.points;
      const segments = _boundSegments(this, { property, start: value, end: value });
      if (!segments.length) {
        return;
      }
      const result = [];
      const _interpolate = _getInterpolationMethod(options);
      let i, ilen;
      for (i = 0, ilen = segments.length; i < ilen; ++i) {
        const { start, end } = segments[i];
        const p1 = points[start];
        const p2 = points[end];
        if (p1 === p2) {
          result.push(p1);
          continue;
        }
        const t = Math.abs((value - p1[property]) / (p2[property] - p1[property]));
        const interpolated = _interpolate(p1, p2, t, options.stepped);
        interpolated[property] = point[property];
        result.push(interpolated);
      }
      return result.length === 1 ? result[0] : result;
    }
    pathSegment(ctx, segment, params) {
      const segmentMethod = _getSegmentMethod(this);
      return segmentMethod(ctx, this, segment, params);
    }
    path(ctx, start, count) {
      const segments = this.segments;
      const segmentMethod = _getSegmentMethod(this);
      let loop = this._loop;
      start = start || 0;
      count = count || this.points.length - start;
      for (const segment of segments) {
        loop &= segmentMethod(ctx, this, segment, { start, end: start + count - 1 });
      }
      return !!loop;
    }
    draw(ctx, chartArea, start, count) {
      const options = this.options || {};
      const points = this.points || [];
      if (points.length && options.borderWidth) {
        ctx.save();
        draw(ctx, this, start, count);
        ctx.restore();
      }
      if (this.animated) {
        this._pointsUpdated = false;
        this._path = void 0;
      }
    }
  };
  LineElement.id = "line";
  LineElement.defaults = {
    borderCapStyle: "butt",
    borderDash: [],
    borderDashOffset: 0,
    borderJoinStyle: "miter",
    borderWidth: 3,
    capBezierPoints: true,
    cubicInterpolationMode: "default",
    fill: false,
    spanGaps: false,
    stepped: false,
    tension: 0
  };
  LineElement.defaultRoutes = {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor"
  };
  LineElement.descriptors = {
    _scriptable: true,
    _indexable: (name) => name !== "borderDash" && name !== "fill"
  };
  function inRange$1(el, pos, axis, useFinalPosition) {
    const options = el.options;
    const { [axis]: value } = el.getProps([axis], useFinalPosition);
    return Math.abs(pos - value) < options.radius + options.hitRadius;
  }
  var PointElement = class extends Element {
    constructor(cfg) {
      super();
      this.options = void 0;
      this.parsed = void 0;
      this.skip = void 0;
      this.stop = void 0;
      if (cfg) {
        Object.assign(this, cfg);
      }
    }
    inRange(mouseX, mouseY, useFinalPosition) {
      const options = this.options;
      const { x, y } = this.getProps(["x", "y"], useFinalPosition);
      return Math.pow(mouseX - x, 2) + Math.pow(mouseY - y, 2) < Math.pow(options.hitRadius + options.radius, 2);
    }
    inXRange(mouseX, useFinalPosition) {
      return inRange$1(this, mouseX, "x", useFinalPosition);
    }
    inYRange(mouseY, useFinalPosition) {
      return inRange$1(this, mouseY, "y", useFinalPosition);
    }
    getCenterPoint(useFinalPosition) {
      const { x, y } = this.getProps(["x", "y"], useFinalPosition);
      return { x, y };
    }
    size(options) {
      options = options || this.options || {};
      let radius = options.radius || 0;
      radius = Math.max(radius, radius && options.hoverRadius || 0);
      const borderWidth = radius && options.borderWidth || 0;
      return (radius + borderWidth) * 2;
    }
    draw(ctx, area) {
      const options = this.options;
      if (this.skip || options.radius < 0.1 || !_isPointInArea(this, area, this.size(options) / 2)) {
        return;
      }
      ctx.strokeStyle = options.borderColor;
      ctx.lineWidth = options.borderWidth;
      ctx.fillStyle = options.backgroundColor;
      drawPoint(ctx, options, this.x, this.y);
    }
    getRange() {
      const options = this.options || {};
      return options.radius + options.hitRadius;
    }
  };
  PointElement.id = "point";
  PointElement.defaults = {
    borderWidth: 1,
    hitRadius: 1,
    hoverBorderWidth: 1,
    hoverRadius: 4,
    pointStyle: "circle",
    radius: 3,
    rotation: 0
  };
  PointElement.defaultRoutes = {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor"
  };
  function getBarBounds(bar, useFinalPosition) {
    const { x, y, base, width, height } = bar.getProps(["x", "y", "base", "width", "height"], useFinalPosition);
    let left, right, top, bottom, half;
    if (bar.horizontal) {
      half = height / 2;
      left = Math.min(x, base);
      right = Math.max(x, base);
      top = y - half;
      bottom = y + half;
    } else {
      half = width / 2;
      left = x - half;
      right = x + half;
      top = Math.min(y, base);
      bottom = Math.max(y, base);
    }
    return { left, top, right, bottom };
  }
  function skipOrLimit(skip2, value, min, max) {
    return skip2 ? 0 : _limitValue(value, min, max);
  }
  function parseBorderWidth(bar, maxW, maxH) {
    const value = bar.options.borderWidth;
    const skip2 = bar.borderSkipped;
    const o = toTRBL(value);
    return {
      t: skipOrLimit(skip2.top, o.top, 0, maxH),
      r: skipOrLimit(skip2.right, o.right, 0, maxW),
      b: skipOrLimit(skip2.bottom, o.bottom, 0, maxH),
      l: skipOrLimit(skip2.left, o.left, 0, maxW)
    };
  }
  function parseBorderRadius(bar, maxW, maxH) {
    const { enableBorderRadius } = bar.getProps(["enableBorderRadius"]);
    const value = bar.options.borderRadius;
    const o = toTRBLCorners(value);
    const maxR = Math.min(maxW, maxH);
    const skip2 = bar.borderSkipped;
    const enableBorder = enableBorderRadius || isObject(value);
    return {
      topLeft: skipOrLimit(!enableBorder || skip2.top || skip2.left, o.topLeft, 0, maxR),
      topRight: skipOrLimit(!enableBorder || skip2.top || skip2.right, o.topRight, 0, maxR),
      bottomLeft: skipOrLimit(!enableBorder || skip2.bottom || skip2.left, o.bottomLeft, 0, maxR),
      bottomRight: skipOrLimit(!enableBorder || skip2.bottom || skip2.right, o.bottomRight, 0, maxR)
    };
  }
  function boundingRects(bar) {
    const bounds = getBarBounds(bar);
    const width = bounds.right - bounds.left;
    const height = bounds.bottom - bounds.top;
    const border = parseBorderWidth(bar, width / 2, height / 2);
    const radius = parseBorderRadius(bar, width / 2, height / 2);
    return {
      outer: {
        x: bounds.left,
        y: bounds.top,
        w: width,
        h: height,
        radius
      },
      inner: {
        x: bounds.left + border.l,
        y: bounds.top + border.t,
        w: width - border.l - border.r,
        h: height - border.t - border.b,
        radius: {
          topLeft: Math.max(0, radius.topLeft - Math.max(border.t, border.l)),
          topRight: Math.max(0, radius.topRight - Math.max(border.t, border.r)),
          bottomLeft: Math.max(0, radius.bottomLeft - Math.max(border.b, border.l)),
          bottomRight: Math.max(0, radius.bottomRight - Math.max(border.b, border.r))
        }
      }
    };
  }
  function inRange(bar, x, y, useFinalPosition) {
    const skipX = x === null;
    const skipY = y === null;
    const skipBoth = skipX && skipY;
    const bounds = bar && !skipBoth && getBarBounds(bar, useFinalPosition);
    return bounds && (skipX || _isBetween(x, bounds.left, bounds.right)) && (skipY || _isBetween(y, bounds.top, bounds.bottom));
  }
  function hasRadius(radius) {
    return radius.topLeft || radius.topRight || radius.bottomLeft || radius.bottomRight;
  }
  function addNormalRectPath(ctx, rect) {
    ctx.rect(rect.x, rect.y, rect.w, rect.h);
  }
  function inflateRect(rect, amount, refRect = {}) {
    const x = rect.x !== refRect.x ? -amount : 0;
    const y = rect.y !== refRect.y ? -amount : 0;
    const w = (rect.x + rect.w !== refRect.x + refRect.w ? amount : 0) - x;
    const h = (rect.y + rect.h !== refRect.y + refRect.h ? amount : 0) - y;
    return {
      x: rect.x + x,
      y: rect.y + y,
      w: rect.w + w,
      h: rect.h + h,
      radius: rect.radius
    };
  }
  var BarElement = class extends Element {
    constructor(cfg) {
      super();
      this.options = void 0;
      this.horizontal = void 0;
      this.base = void 0;
      this.width = void 0;
      this.height = void 0;
      this.inflateAmount = void 0;
      if (cfg) {
        Object.assign(this, cfg);
      }
    }
    draw(ctx) {
      const { inflateAmount, options: { borderColor, backgroundColor } } = this;
      const { inner, outer } = boundingRects(this);
      const addRectPath = hasRadius(outer.radius) ? addRoundedRectPath : addNormalRectPath;
      ctx.save();
      if (outer.w !== inner.w || outer.h !== inner.h) {
        ctx.beginPath();
        addRectPath(ctx, inflateRect(outer, inflateAmount, inner));
        ctx.clip();
        addRectPath(ctx, inflateRect(inner, -inflateAmount, outer));
        ctx.fillStyle = borderColor;
        ctx.fill("evenodd");
      }
      ctx.beginPath();
      addRectPath(ctx, inflateRect(inner, inflateAmount));
      ctx.fillStyle = backgroundColor;
      ctx.fill();
      ctx.restore();
    }
    inRange(mouseX, mouseY, useFinalPosition) {
      return inRange(this, mouseX, mouseY, useFinalPosition);
    }
    inXRange(mouseX, useFinalPosition) {
      return inRange(this, mouseX, null, useFinalPosition);
    }
    inYRange(mouseY, useFinalPosition) {
      return inRange(this, null, mouseY, useFinalPosition);
    }
    getCenterPoint(useFinalPosition) {
      const { x, y, base, horizontal } = this.getProps(["x", "y", "base", "horizontal"], useFinalPosition);
      return {
        x: horizontal ? (x + base) / 2 : x,
        y: horizontal ? y : (y + base) / 2
      };
    }
    getRange(axis) {
      return axis === "x" ? this.width / 2 : this.height / 2;
    }
  };
  BarElement.id = "bar";
  BarElement.defaults = {
    borderSkipped: "start",
    borderWidth: 0,
    borderRadius: 0,
    inflateAmount: "auto",
    pointStyle: void 0
  };
  BarElement.defaultRoutes = {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor"
  };
  var elements = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    ArcElement,
    LineElement,
    PointElement,
    BarElement
  });
  function lttbDecimation(data, start, count, availableWidth, options) {
    const samples = options.samples || availableWidth;
    if (samples >= count) {
      return data.slice(start, start + count);
    }
    const decimated = [];
    const bucketWidth = (count - 2) / (samples - 2);
    let sampledIndex = 0;
    const endIndex = start + count - 1;
    let a = start;
    let i, maxAreaPoint, maxArea, area, nextA;
    decimated[sampledIndex++] = data[a];
    for (i = 0; i < samples - 2; i++) {
      let avgX = 0;
      let avgY = 0;
      let j;
      const avgRangeStart = Math.floor((i + 1) * bucketWidth) + 1 + start;
      const avgRangeEnd = Math.min(Math.floor((i + 2) * bucketWidth) + 1, count) + start;
      const avgRangeLength = avgRangeEnd - avgRangeStart;
      for (j = avgRangeStart; j < avgRangeEnd; j++) {
        avgX += data[j].x;
        avgY += data[j].y;
      }
      avgX /= avgRangeLength;
      avgY /= avgRangeLength;
      const rangeOffs = Math.floor(i * bucketWidth) + 1 + start;
      const rangeTo = Math.min(Math.floor((i + 1) * bucketWidth) + 1, count) + start;
      const { x: pointAx, y: pointAy } = data[a];
      maxArea = area = -1;
      for (j = rangeOffs; j < rangeTo; j++) {
        area = 0.5 * Math.abs((pointAx - avgX) * (data[j].y - pointAy) - (pointAx - data[j].x) * (avgY - pointAy));
        if (area > maxArea) {
          maxArea = area;
          maxAreaPoint = data[j];
          nextA = j;
        }
      }
      decimated[sampledIndex++] = maxAreaPoint;
      a = nextA;
    }
    decimated[sampledIndex++] = data[endIndex];
    return decimated;
  }
  function minMaxDecimation(data, start, count, availableWidth) {
    let avgX = 0;
    let countX = 0;
    let i, point, x, y, prevX, minIndex, maxIndex, startIndex, minY, maxY;
    const decimated = [];
    const endIndex = start + count - 1;
    const xMin = data[start].x;
    const xMax = data[endIndex].x;
    const dx = xMax - xMin;
    for (i = start; i < start + count; ++i) {
      point = data[i];
      x = (point.x - xMin) / dx * availableWidth;
      y = point.y;
      const truncX = x | 0;
      if (truncX === prevX) {
        if (y < minY) {
          minY = y;
          minIndex = i;
        } else if (y > maxY) {
          maxY = y;
          maxIndex = i;
        }
        avgX = (countX * avgX + point.x) / ++countX;
      } else {
        const lastIndex = i - 1;
        if (!isNullOrUndef(minIndex) && !isNullOrUndef(maxIndex)) {
          const intermediateIndex1 = Math.min(minIndex, maxIndex);
          const intermediateIndex2 = Math.max(minIndex, maxIndex);
          if (intermediateIndex1 !== startIndex && intermediateIndex1 !== lastIndex) {
            decimated.push(__spreadProps(__spreadValues({}, data[intermediateIndex1]), {
              x: avgX
            }));
          }
          if (intermediateIndex2 !== startIndex && intermediateIndex2 !== lastIndex) {
            decimated.push(__spreadProps(__spreadValues({}, data[intermediateIndex2]), {
              x: avgX
            }));
          }
        }
        if (i > 0 && lastIndex !== startIndex) {
          decimated.push(data[lastIndex]);
        }
        decimated.push(point);
        prevX = truncX;
        countX = 0;
        minY = maxY = y;
        minIndex = maxIndex = startIndex = i;
      }
    }
    return decimated;
  }
  function cleanDecimatedDataset(dataset) {
    if (dataset._decimated) {
      const data = dataset._data;
      delete dataset._decimated;
      delete dataset._data;
      Object.defineProperty(dataset, "data", { value: data });
    }
  }
  function cleanDecimatedData(chart2) {
    chart2.data.datasets.forEach((dataset) => {
      cleanDecimatedDataset(dataset);
    });
  }
  function getStartAndCountOfVisiblePointsSimplified(meta, points) {
    const pointCount = points.length;
    let start = 0;
    let count;
    const { iScale } = meta;
    const { min, max, minDefined, maxDefined } = iScale.getUserBounds();
    if (minDefined) {
      start = _limitValue(_lookupByKey(points, iScale.axis, min).lo, 0, pointCount - 1);
    }
    if (maxDefined) {
      count = _limitValue(_lookupByKey(points, iScale.axis, max).hi + 1, start, pointCount) - start;
    } else {
      count = pointCount - start;
    }
    return { start, count };
  }
  var plugin_decimation = {
    id: "decimation",
    defaults: {
      algorithm: "min-max",
      enabled: false
    },
    beforeElementsUpdate: (chart2, args, options) => {
      if (!options.enabled) {
        cleanDecimatedData(chart2);
        return;
      }
      const availableWidth = chart2.width;
      chart2.data.datasets.forEach((dataset, datasetIndex) => {
        const { _data, indexAxis } = dataset;
        const meta = chart2.getDatasetMeta(datasetIndex);
        const data = _data || dataset.data;
        if (resolve([indexAxis, chart2.options.indexAxis]) === "y") {
          return;
        }
        if (meta.type !== "line") {
          return;
        }
        const xAxis = chart2.scales[meta.xAxisID];
        if (xAxis.type !== "linear" && xAxis.type !== "time") {
          return;
        }
        if (chart2.options.parsing) {
          return;
        }
        let { start, count } = getStartAndCountOfVisiblePointsSimplified(meta, data);
        const threshold = options.threshold || 4 * availableWidth;
        if (count <= threshold) {
          cleanDecimatedDataset(dataset);
          return;
        }
        if (isNullOrUndef(_data)) {
          dataset._data = data;
          delete dataset.data;
          Object.defineProperty(dataset, "data", {
            configurable: true,
            enumerable: true,
            get: function() {
              return this._decimated;
            },
            set: function(d) {
              this._data = d;
            }
          });
        }
        let decimated;
        switch (options.algorithm) {
          case "lttb":
            decimated = lttbDecimation(data, start, count, availableWidth, options);
            break;
          case "min-max":
            decimated = minMaxDecimation(data, start, count, availableWidth);
            break;
          default:
            throw new Error(`Unsupported decimation algorithm '${options.algorithm}'`);
        }
        dataset._decimated = decimated;
      });
    },
    destroy(chart2) {
      cleanDecimatedData(chart2);
    }
  };
  function getLineByIndex(chart2, index) {
    const meta = chart2.getDatasetMeta(index);
    const visible = meta && chart2.isDatasetVisible(index);
    return visible ? meta.dataset : null;
  }
  function parseFillOption(line) {
    const options = line.options;
    const fillOption = options.fill;
    let fill = valueOrDefault(fillOption && fillOption.target, fillOption);
    if (fill === void 0) {
      fill = !!options.backgroundColor;
    }
    if (fill === false || fill === null) {
      return false;
    }
    if (fill === true) {
      return "origin";
    }
    return fill;
  }
  function decodeFill(line, index, count) {
    const fill = parseFillOption(line);
    if (isObject(fill)) {
      return isNaN(fill.value) ? false : fill;
    }
    let target = parseFloat(fill);
    if (isNumberFinite(target) && Math.floor(target) === target) {
      if (fill[0] === "-" || fill[0] === "+") {
        target = index + target;
      }
      if (target === index || target < 0 || target >= count) {
        return false;
      }
      return target;
    }
    return ["origin", "start", "end", "stack", "shape"].indexOf(fill) >= 0 && fill;
  }
  function computeLinearBoundary(source) {
    const { scale = {}, fill } = source;
    let target = null;
    let horizontal;
    if (fill === "start") {
      target = scale.bottom;
    } else if (fill === "end") {
      target = scale.top;
    } else if (isObject(fill)) {
      target = scale.getPixelForValue(fill.value);
    } else if (scale.getBasePixel) {
      target = scale.getBasePixel();
    }
    if (isNumberFinite(target)) {
      horizontal = scale.isHorizontal();
      return {
        x: horizontal ? target : null,
        y: horizontal ? null : target
      };
    }
    return null;
  }
  var simpleArc = class {
    constructor(opts) {
      this.x = opts.x;
      this.y = opts.y;
      this.radius = opts.radius;
    }
    pathSegment(ctx, bounds, opts) {
      const { x, y, radius } = this;
      bounds = bounds || { start: 0, end: TAU };
      ctx.arc(x, y, radius, bounds.end, bounds.start, true);
      return !opts.bounds;
    }
    interpolate(point) {
      const { x, y, radius } = this;
      const angle = point.angle;
      return {
        x: x + Math.cos(angle) * radius,
        y: y + Math.sin(angle) * radius,
        angle
      };
    }
  };
  function computeCircularBoundary(source) {
    const { scale, fill } = source;
    const options = scale.options;
    const length = scale.getLabels().length;
    const target = [];
    const start = options.reverse ? scale.max : scale.min;
    const end = options.reverse ? scale.min : scale.max;
    let i, center, value;
    if (fill === "start") {
      value = start;
    } else if (fill === "end") {
      value = end;
    } else if (isObject(fill)) {
      value = fill.value;
    } else {
      value = scale.getBaseValue();
    }
    if (options.grid.circular) {
      center = scale.getPointPositionForValue(0, start);
      return new simpleArc({
        x: center.x,
        y: center.y,
        radius: scale.getDistanceFromCenterForValue(value)
      });
    }
    for (i = 0; i < length; ++i) {
      target.push(scale.getPointPositionForValue(i, value));
    }
    return target;
  }
  function computeBoundary(source) {
    const scale = source.scale || {};
    if (scale.getPointPositionForValue) {
      return computeCircularBoundary(source);
    }
    return computeLinearBoundary(source);
  }
  function findSegmentEnd(start, end, points) {
    for (; end > start; end--) {
      const point = points[end];
      if (!isNaN(point.x) && !isNaN(point.y)) {
        break;
      }
    }
    return end;
  }
  function pointsFromSegments(boundary, line) {
    const { x = null, y = null } = boundary || {};
    const linePoints = line.points;
    const points = [];
    line.segments.forEach(({ start, end }) => {
      end = findSegmentEnd(start, end, linePoints);
      const first = linePoints[start];
      const last = linePoints[end];
      if (y !== null) {
        points.push({ x: first.x, y });
        points.push({ x: last.x, y });
      } else if (x !== null) {
        points.push({ x, y: first.y });
        points.push({ x, y: last.y });
      }
    });
    return points;
  }
  function buildStackLine(source) {
    const { scale, index, line } = source;
    const points = [];
    const segments = line.segments;
    const sourcePoints = line.points;
    const linesBelow = getLinesBelow(scale, index);
    linesBelow.push(createBoundaryLine({ x: null, y: scale.bottom }, line));
    for (let i = 0; i < segments.length; i++) {
      const segment = segments[i];
      for (let j = segment.start; j <= segment.end; j++) {
        addPointsBelow(points, sourcePoints[j], linesBelow);
      }
    }
    return new LineElement({ points, options: {} });
  }
  function getLinesBelow(scale, index) {
    const below = [];
    const metas = scale.getMatchingVisibleMetas("line");
    for (let i = 0; i < metas.length; i++) {
      const meta = metas[i];
      if (meta.index === index) {
        break;
      }
      if (!meta.hidden) {
        below.unshift(meta.dataset);
      }
    }
    return below;
  }
  function addPointsBelow(points, sourcePoint, linesBelow) {
    const postponed = [];
    for (let j = 0; j < linesBelow.length; j++) {
      const line = linesBelow[j];
      const { first, last, point } = findPoint(line, sourcePoint, "x");
      if (!point || first && last) {
        continue;
      }
      if (first) {
        postponed.unshift(point);
      } else {
        points.push(point);
        if (!last) {
          break;
        }
      }
    }
    points.push(...postponed);
  }
  function findPoint(line, sourcePoint, property) {
    const point = line.interpolate(sourcePoint, property);
    if (!point) {
      return {};
    }
    const pointValue = point[property];
    const segments = line.segments;
    const linePoints = line.points;
    let first = false;
    let last = false;
    for (let i = 0; i < segments.length; i++) {
      const segment = segments[i];
      const firstValue = linePoints[segment.start][property];
      const lastValue = linePoints[segment.end][property];
      if (_isBetween(pointValue, firstValue, lastValue)) {
        first = pointValue === firstValue;
        last = pointValue === lastValue;
        break;
      }
    }
    return { first, last, point };
  }
  function getTarget(source) {
    const { chart: chart2, fill, line } = source;
    if (isNumberFinite(fill)) {
      return getLineByIndex(chart2, fill);
    }
    if (fill === "stack") {
      return buildStackLine(source);
    }
    if (fill === "shape") {
      return true;
    }
    const boundary = computeBoundary(source);
    if (boundary instanceof simpleArc) {
      return boundary;
    }
    return createBoundaryLine(boundary, line);
  }
  function createBoundaryLine(boundary, line) {
    let points = [];
    let _loop = false;
    if (isArray(boundary)) {
      _loop = true;
      points = boundary;
    } else {
      points = pointsFromSegments(boundary, line);
    }
    return points.length ? new LineElement({
      points,
      options: { tension: 0 },
      _loop,
      _fullLoop: _loop
    }) : null;
  }
  function resolveTarget(sources, index, propagate) {
    const source = sources[index];
    let fill = source.fill;
    const visited = [index];
    let target;
    if (!propagate) {
      return fill;
    }
    while (fill !== false && visited.indexOf(fill) === -1) {
      if (!isNumberFinite(fill)) {
        return fill;
      }
      target = sources[fill];
      if (!target) {
        return false;
      }
      if (target.visible) {
        return fill;
      }
      visited.push(fill);
      fill = target.fill;
    }
    return false;
  }
  function _clip(ctx, target, clipY) {
    const { segments, points } = target;
    let first = true;
    let lineLoop = false;
    ctx.beginPath();
    for (const segment of segments) {
      const { start, end } = segment;
      const firstPoint = points[start];
      const lastPoint = points[findSegmentEnd(start, end, points)];
      if (first) {
        ctx.moveTo(firstPoint.x, firstPoint.y);
        first = false;
      } else {
        ctx.lineTo(firstPoint.x, clipY);
        ctx.lineTo(firstPoint.x, firstPoint.y);
      }
      lineLoop = !!target.pathSegment(ctx, segment, { move: lineLoop });
      if (lineLoop) {
        ctx.closePath();
      } else {
        ctx.lineTo(lastPoint.x, clipY);
      }
    }
    ctx.lineTo(target.first().x, clipY);
    ctx.closePath();
    ctx.clip();
  }
  function getBounds(property, first, last, loop) {
    if (loop) {
      return;
    }
    let start = first[property];
    let end = last[property];
    if (property === "angle") {
      start = _normalizeAngle(start);
      end = _normalizeAngle(end);
    }
    return { property, start, end };
  }
  function _getEdge(a, b, prop, fn) {
    if (a && b) {
      return fn(a[prop], b[prop]);
    }
    return a ? a[prop] : b ? b[prop] : 0;
  }
  function _segments(line, target, property) {
    const segments = line.segments;
    const points = line.points;
    const tpoints = target.points;
    const parts = [];
    for (const segment of segments) {
      let { start, end } = segment;
      end = findSegmentEnd(start, end, points);
      const bounds = getBounds(property, points[start], points[end], segment.loop);
      if (!target.segments) {
        parts.push({
          source: segment,
          target: bounds,
          start: points[start],
          end: points[end]
        });
        continue;
      }
      const targetSegments = _boundSegments(target, bounds);
      for (const tgt of targetSegments) {
        const subBounds = getBounds(property, tpoints[tgt.start], tpoints[tgt.end], tgt.loop);
        const fillSources = _boundSegment(segment, points, subBounds);
        for (const fillSource of fillSources) {
          parts.push({
            source: fillSource,
            target: tgt,
            start: {
              [property]: _getEdge(bounds, subBounds, "start", Math.max)
            },
            end: {
              [property]: _getEdge(bounds, subBounds, "end", Math.min)
            }
          });
        }
      }
    }
    return parts;
  }
  function clipBounds(ctx, scale, bounds) {
    const { top, bottom } = scale.chart.chartArea;
    const { property, start, end } = bounds || {};
    if (property === "x") {
      ctx.beginPath();
      ctx.rect(start, top, end - start, bottom - top);
      ctx.clip();
    }
  }
  function interpolatedLineTo(ctx, target, point, property) {
    const interpolatedPoint = target.interpolate(point, property);
    if (interpolatedPoint) {
      ctx.lineTo(interpolatedPoint.x, interpolatedPoint.y);
    }
  }
  function _fill(ctx, cfg) {
    const { line, target, property, color: color2, scale } = cfg;
    const segments = _segments(line, target, property);
    for (const { source: src, target: tgt, start, end } of segments) {
      const { style: { backgroundColor = color2 } = {} } = src;
      const notShape = target !== true;
      ctx.save();
      ctx.fillStyle = backgroundColor;
      clipBounds(ctx, scale, notShape && getBounds(property, start, end));
      ctx.beginPath();
      const lineLoop = !!line.pathSegment(ctx, src);
      let loop;
      if (notShape) {
        if (lineLoop) {
          ctx.closePath();
        } else {
          interpolatedLineTo(ctx, target, end, property);
        }
        const targetLoop = !!target.pathSegment(ctx, tgt, { move: lineLoop, reverse: true });
        loop = lineLoop && targetLoop;
        if (!loop) {
          interpolatedLineTo(ctx, target, start, property);
        }
      }
      ctx.closePath();
      ctx.fill(loop ? "evenodd" : "nonzero");
      ctx.restore();
    }
  }
  function doFill(ctx, cfg) {
    const { line, target, above, below, area, scale } = cfg;
    const property = line._loop ? "angle" : cfg.axis;
    ctx.save();
    if (property === "x" && below !== above) {
      _clip(ctx, target, area.top);
      _fill(ctx, { line, target, color: above, scale, property });
      ctx.restore();
      ctx.save();
      _clip(ctx, target, area.bottom);
    }
    _fill(ctx, { line, target, color: below, scale, property });
    ctx.restore();
  }
  function drawfill(ctx, source, area) {
    const target = getTarget(source);
    const { line, scale, axis } = source;
    const lineOpts = line.options;
    const fillOption = lineOpts.fill;
    const color2 = lineOpts.backgroundColor;
    const { above = color2, below = color2 } = fillOption || {};
    if (target && line.points.length) {
      clipArea(ctx, area);
      doFill(ctx, { line, target, above, below, area, scale, axis });
      unclipArea(ctx);
    }
  }
  var plugin_filler = {
    id: "filler",
    afterDatasetsUpdate(chart2, _args, options) {
      const count = (chart2.data.datasets || []).length;
      const sources = [];
      let meta, i, line, source;
      for (i = 0; i < count; ++i) {
        meta = chart2.getDatasetMeta(i);
        line = meta.dataset;
        source = null;
        if (line && line.options && line instanceof LineElement) {
          source = {
            visible: chart2.isDatasetVisible(i),
            index: i,
            fill: decodeFill(line, i, count),
            chart: chart2,
            axis: meta.controller.options.indexAxis,
            scale: meta.vScale,
            line
          };
        }
        meta.$filler = source;
        sources.push(source);
      }
      for (i = 0; i < count; ++i) {
        source = sources[i];
        if (!source || source.fill === false) {
          continue;
        }
        source.fill = resolveTarget(sources, i, options.propagate);
      }
    },
    beforeDraw(chart2, _args, options) {
      const draw2 = options.drawTime === "beforeDraw";
      const metasets = chart2.getSortedVisibleDatasetMetas();
      const area = chart2.chartArea;
      for (let i = metasets.length - 1; i >= 0; --i) {
        const source = metasets[i].$filler;
        if (!source) {
          continue;
        }
        source.line.updateControlPoints(area, source.axis);
        if (draw2) {
          drawfill(chart2.ctx, source, area);
        }
      }
    },
    beforeDatasetsDraw(chart2, _args, options) {
      if (options.drawTime !== "beforeDatasetsDraw") {
        return;
      }
      const metasets = chart2.getSortedVisibleDatasetMetas();
      for (let i = metasets.length - 1; i >= 0; --i) {
        const source = metasets[i].$filler;
        if (source) {
          drawfill(chart2.ctx, source, chart2.chartArea);
        }
      }
    },
    beforeDatasetDraw(chart2, args, options) {
      const source = args.meta.$filler;
      if (!source || source.fill === false || options.drawTime !== "beforeDatasetDraw") {
        return;
      }
      drawfill(chart2.ctx, source, chart2.chartArea);
    },
    defaults: {
      propagate: true,
      drawTime: "beforeDatasetDraw"
    }
  };
  var getBoxSize = (labelOpts, fontSize) => {
    let { boxHeight = fontSize, boxWidth = fontSize } = labelOpts;
    if (labelOpts.usePointStyle) {
      boxHeight = Math.min(boxHeight, fontSize);
      boxWidth = Math.min(boxWidth, fontSize);
    }
    return {
      boxWidth,
      boxHeight,
      itemHeight: Math.max(fontSize, boxHeight)
    };
  };
  var itemsEqual = (a, b) => a !== null && b !== null && a.datasetIndex === b.datasetIndex && a.index === b.index;
  var Legend = class extends Element {
    constructor(config) {
      super();
      this._added = false;
      this.legendHitBoxes = [];
      this._hoveredItem = null;
      this.doughnutMode = false;
      this.chart = config.chart;
      this.options = config.options;
      this.ctx = config.ctx;
      this.legendItems = void 0;
      this.columnSizes = void 0;
      this.lineWidths = void 0;
      this.maxHeight = void 0;
      this.maxWidth = void 0;
      this.top = void 0;
      this.bottom = void 0;
      this.left = void 0;
      this.right = void 0;
      this.height = void 0;
      this.width = void 0;
      this._margins = void 0;
      this.position = void 0;
      this.weight = void 0;
      this.fullSize = void 0;
    }
    update(maxWidth, maxHeight, margins) {
      this.maxWidth = maxWidth;
      this.maxHeight = maxHeight;
      this._margins = margins;
      this.setDimensions();
      this.buildLabels();
      this.fit();
    }
    setDimensions() {
      if (this.isHorizontal()) {
        this.width = this.maxWidth;
        this.left = this._margins.left;
        this.right = this.width;
      } else {
        this.height = this.maxHeight;
        this.top = this._margins.top;
        this.bottom = this.height;
      }
    }
    buildLabels() {
      const labelOpts = this.options.labels || {};
      let legendItems = callback(labelOpts.generateLabels, [this.chart], this) || [];
      if (labelOpts.filter) {
        legendItems = legendItems.filter((item) => labelOpts.filter(item, this.chart.data));
      }
      if (labelOpts.sort) {
        legendItems = legendItems.sort((a, b) => labelOpts.sort(a, b, this.chart.data));
      }
      if (this.options.reverse) {
        legendItems.reverse();
      }
      this.legendItems = legendItems;
    }
    fit() {
      const { options, ctx } = this;
      if (!options.display) {
        this.width = this.height = 0;
        return;
      }
      const labelOpts = options.labels;
      const labelFont = toFont(labelOpts.font);
      const fontSize = labelFont.size;
      const titleHeight = this._computeTitleHeight();
      const { boxWidth, itemHeight } = getBoxSize(labelOpts, fontSize);
      let width, height;
      ctx.font = labelFont.string;
      if (this.isHorizontal()) {
        width = this.maxWidth;
        height = this._fitRows(titleHeight, fontSize, boxWidth, itemHeight) + 10;
      } else {
        height = this.maxHeight;
        width = this._fitCols(titleHeight, fontSize, boxWidth, itemHeight) + 10;
      }
      this.width = Math.min(width, options.maxWidth || this.maxWidth);
      this.height = Math.min(height, options.maxHeight || this.maxHeight);
    }
    _fitRows(titleHeight, fontSize, boxWidth, itemHeight) {
      const { ctx, maxWidth, options: { labels: { padding } } } = this;
      const hitboxes = this.legendHitBoxes = [];
      const lineWidths = this.lineWidths = [0];
      const lineHeight = itemHeight + padding;
      let totalHeight = titleHeight;
      ctx.textAlign = "left";
      ctx.textBaseline = "middle";
      let row = -1;
      let top = -lineHeight;
      this.legendItems.forEach((legendItem, i) => {
        const itemWidth = boxWidth + fontSize / 2 + ctx.measureText(legendItem.text).width;
        if (i === 0 || lineWidths[lineWidths.length - 1] + itemWidth + 2 * padding > maxWidth) {
          totalHeight += lineHeight;
          lineWidths[lineWidths.length - (i > 0 ? 0 : 1)] = 0;
          top += lineHeight;
          row++;
        }
        hitboxes[i] = { left: 0, top, row, width: itemWidth, height: itemHeight };
        lineWidths[lineWidths.length - 1] += itemWidth + padding;
      });
      return totalHeight;
    }
    _fitCols(titleHeight, fontSize, boxWidth, itemHeight) {
      const { ctx, maxHeight, options: { labels: { padding } } } = this;
      const hitboxes = this.legendHitBoxes = [];
      const columnSizes = this.columnSizes = [];
      const heightLimit = maxHeight - titleHeight;
      let totalWidth = padding;
      let currentColWidth = 0;
      let currentColHeight = 0;
      let left = 0;
      let col = 0;
      this.legendItems.forEach((legendItem, i) => {
        const itemWidth = boxWidth + fontSize / 2 + ctx.measureText(legendItem.text).width;
        if (i > 0 && currentColHeight + itemHeight + 2 * padding > heightLimit) {
          totalWidth += currentColWidth + padding;
          columnSizes.push({ width: currentColWidth, height: currentColHeight });
          left += currentColWidth + padding;
          col++;
          currentColWidth = currentColHeight = 0;
        }
        hitboxes[i] = { left, top: currentColHeight, col, width: itemWidth, height: itemHeight };
        currentColWidth = Math.max(currentColWidth, itemWidth);
        currentColHeight += itemHeight + padding;
      });
      totalWidth += currentColWidth;
      columnSizes.push({ width: currentColWidth, height: currentColHeight });
      return totalWidth;
    }
    adjustHitBoxes() {
      if (!this.options.display) {
        return;
      }
      const titleHeight = this._computeTitleHeight();
      const { legendHitBoxes: hitboxes, options: { align, labels: { padding }, rtl } } = this;
      const rtlHelper = getRtlAdapter(rtl, this.left, this.width);
      if (this.isHorizontal()) {
        let row = 0;
        let left = _alignStartEnd(align, this.left + padding, this.right - this.lineWidths[row]);
        for (const hitbox of hitboxes) {
          if (row !== hitbox.row) {
            row = hitbox.row;
            left = _alignStartEnd(align, this.left + padding, this.right - this.lineWidths[row]);
          }
          hitbox.top += this.top + titleHeight + padding;
          hitbox.left = rtlHelper.leftForLtr(rtlHelper.x(left), hitbox.width);
          left += hitbox.width + padding;
        }
      } else {
        let col = 0;
        let top = _alignStartEnd(align, this.top + titleHeight + padding, this.bottom - this.columnSizes[col].height);
        for (const hitbox of hitboxes) {
          if (hitbox.col !== col) {
            col = hitbox.col;
            top = _alignStartEnd(align, this.top + titleHeight + padding, this.bottom - this.columnSizes[col].height);
          }
          hitbox.top = top;
          hitbox.left += this.left + padding;
          hitbox.left = rtlHelper.leftForLtr(rtlHelper.x(hitbox.left), hitbox.width);
          top += hitbox.height + padding;
        }
      }
    }
    isHorizontal() {
      return this.options.position === "top" || this.options.position === "bottom";
    }
    draw() {
      if (this.options.display) {
        const ctx = this.ctx;
        clipArea(ctx, this);
        this._draw();
        unclipArea(ctx);
      }
    }
    _draw() {
      const { options: opts, columnSizes, lineWidths, ctx } = this;
      const { align, labels: labelOpts } = opts;
      const defaultColor = defaults.color;
      const rtlHelper = getRtlAdapter(opts.rtl, this.left, this.width);
      const labelFont = toFont(labelOpts.font);
      const { color: fontColor, padding } = labelOpts;
      const fontSize = labelFont.size;
      const halfFontSize = fontSize / 2;
      let cursor;
      this.drawTitle();
      ctx.textAlign = rtlHelper.textAlign("left");
      ctx.textBaseline = "middle";
      ctx.lineWidth = 0.5;
      ctx.font = labelFont.string;
      const { boxWidth, boxHeight, itemHeight } = getBoxSize(labelOpts, fontSize);
      const drawLegendBox = function(x, y, legendItem) {
        if (isNaN(boxWidth) || boxWidth <= 0 || isNaN(boxHeight) || boxHeight < 0) {
          return;
        }
        ctx.save();
        const lineWidth = valueOrDefault(legendItem.lineWidth, 1);
        ctx.fillStyle = valueOrDefault(legendItem.fillStyle, defaultColor);
        ctx.lineCap = valueOrDefault(legendItem.lineCap, "butt");
        ctx.lineDashOffset = valueOrDefault(legendItem.lineDashOffset, 0);
        ctx.lineJoin = valueOrDefault(legendItem.lineJoin, "miter");
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = valueOrDefault(legendItem.strokeStyle, defaultColor);
        ctx.setLineDash(valueOrDefault(legendItem.lineDash, []));
        if (labelOpts.usePointStyle) {
          const drawOptions = {
            radius: boxWidth * Math.SQRT2 / 2,
            pointStyle: legendItem.pointStyle,
            rotation: legendItem.rotation,
            borderWidth: lineWidth
          };
          const centerX = rtlHelper.xPlus(x, boxWidth / 2);
          const centerY = y + halfFontSize;
          drawPoint(ctx, drawOptions, centerX, centerY);
        } else {
          const yBoxTop = y + Math.max((fontSize - boxHeight) / 2, 0);
          const xBoxLeft = rtlHelper.leftForLtr(x, boxWidth);
          const borderRadius = toTRBLCorners(legendItem.borderRadius);
          ctx.beginPath();
          if (Object.values(borderRadius).some((v) => v !== 0)) {
            addRoundedRectPath(ctx, {
              x: xBoxLeft,
              y: yBoxTop,
              w: boxWidth,
              h: boxHeight,
              radius: borderRadius
            });
          } else {
            ctx.rect(xBoxLeft, yBoxTop, boxWidth, boxHeight);
          }
          ctx.fill();
          if (lineWidth !== 0) {
            ctx.stroke();
          }
        }
        ctx.restore();
      };
      const fillText = function(x, y, legendItem) {
        renderText(ctx, legendItem.text, x, y + itemHeight / 2, labelFont, {
          strikethrough: legendItem.hidden,
          textAlign: rtlHelper.textAlign(legendItem.textAlign)
        });
      };
      const isHorizontal = this.isHorizontal();
      const titleHeight = this._computeTitleHeight();
      if (isHorizontal) {
        cursor = {
          x: _alignStartEnd(align, this.left + padding, this.right - lineWidths[0]),
          y: this.top + padding + titleHeight,
          line: 0
        };
      } else {
        cursor = {
          x: this.left + padding,
          y: _alignStartEnd(align, this.top + titleHeight + padding, this.bottom - columnSizes[0].height),
          line: 0
        };
      }
      overrideTextDirection(this.ctx, opts.textDirection);
      const lineHeight = itemHeight + padding;
      this.legendItems.forEach((legendItem, i) => {
        ctx.strokeStyle = legendItem.fontColor || fontColor;
        ctx.fillStyle = legendItem.fontColor || fontColor;
        const textWidth = ctx.measureText(legendItem.text).width;
        const textAlign = rtlHelper.textAlign(legendItem.textAlign || (legendItem.textAlign = labelOpts.textAlign));
        const width = boxWidth + halfFontSize + textWidth;
        let x = cursor.x;
        let y = cursor.y;
        rtlHelper.setWidth(this.width);
        if (isHorizontal) {
          if (i > 0 && x + width + padding > this.right) {
            y = cursor.y += lineHeight;
            cursor.line++;
            x = cursor.x = _alignStartEnd(align, this.left + padding, this.right - lineWidths[cursor.line]);
          }
        } else if (i > 0 && y + lineHeight > this.bottom) {
          x = cursor.x = x + columnSizes[cursor.line].width + padding;
          cursor.line++;
          y = cursor.y = _alignStartEnd(align, this.top + titleHeight + padding, this.bottom - columnSizes[cursor.line].height);
        }
        const realX = rtlHelper.x(x);
        drawLegendBox(realX, y, legendItem);
        x = _textX(textAlign, x + boxWidth + halfFontSize, isHorizontal ? x + width : this.right, opts.rtl);
        fillText(rtlHelper.x(x), y, legendItem);
        if (isHorizontal) {
          cursor.x += width + padding;
        } else {
          cursor.y += lineHeight;
        }
      });
      restoreTextDirection(this.ctx, opts.textDirection);
    }
    drawTitle() {
      const opts = this.options;
      const titleOpts = opts.title;
      const titleFont = toFont(titleOpts.font);
      const titlePadding = toPadding(titleOpts.padding);
      if (!titleOpts.display) {
        return;
      }
      const rtlHelper = getRtlAdapter(opts.rtl, this.left, this.width);
      const ctx = this.ctx;
      const position = titleOpts.position;
      const halfFontSize = titleFont.size / 2;
      const topPaddingPlusHalfFontSize = titlePadding.top + halfFontSize;
      let y;
      let left = this.left;
      let maxWidth = this.width;
      if (this.isHorizontal()) {
        maxWidth = Math.max(...this.lineWidths);
        y = this.top + topPaddingPlusHalfFontSize;
        left = _alignStartEnd(opts.align, left, this.right - maxWidth);
      } else {
        const maxHeight = this.columnSizes.reduce((acc, size) => Math.max(acc, size.height), 0);
        y = topPaddingPlusHalfFontSize + _alignStartEnd(opts.align, this.top, this.bottom - maxHeight - opts.labels.padding - this._computeTitleHeight());
      }
      const x = _alignStartEnd(position, left, left + maxWidth);
      ctx.textAlign = rtlHelper.textAlign(_toLeftRightCenter(position));
      ctx.textBaseline = "middle";
      ctx.strokeStyle = titleOpts.color;
      ctx.fillStyle = titleOpts.color;
      ctx.font = titleFont.string;
      renderText(ctx, titleOpts.text, x, y, titleFont);
    }
    _computeTitleHeight() {
      const titleOpts = this.options.title;
      const titleFont = toFont(titleOpts.font);
      const titlePadding = toPadding(titleOpts.padding);
      return titleOpts.display ? titleFont.lineHeight + titlePadding.height : 0;
    }
    _getLegendItemAt(x, y) {
      let i, hitBox, lh;
      if (_isBetween(x, this.left, this.right) && _isBetween(y, this.top, this.bottom)) {
        lh = this.legendHitBoxes;
        for (i = 0; i < lh.length; ++i) {
          hitBox = lh[i];
          if (_isBetween(x, hitBox.left, hitBox.left + hitBox.width) && _isBetween(y, hitBox.top, hitBox.top + hitBox.height)) {
            return this.legendItems[i];
          }
        }
      }
      return null;
    }
    handleEvent(e) {
      const opts = this.options;
      if (!isListened(e.type, opts)) {
        return;
      }
      const hoveredItem = this._getLegendItemAt(e.x, e.y);
      if (e.type === "mousemove") {
        const previous = this._hoveredItem;
        const sameItem = itemsEqual(previous, hoveredItem);
        if (previous && !sameItem) {
          callback(opts.onLeave, [e, previous, this], this);
        }
        this._hoveredItem = hoveredItem;
        if (hoveredItem && !sameItem) {
          callback(opts.onHover, [e, hoveredItem, this], this);
        }
      } else if (hoveredItem) {
        callback(opts.onClick, [e, hoveredItem, this], this);
      }
    }
  };
  function isListened(type, opts) {
    if (type === "mousemove" && (opts.onHover || opts.onLeave)) {
      return true;
    }
    if (opts.onClick && (type === "click" || type === "mouseup")) {
      return true;
    }
    return false;
  }
  var plugin_legend = {
    id: "legend",
    _element: Legend,
    start(chart2, _args, options) {
      const legend = chart2.legend = new Legend({ ctx: chart2.ctx, options, chart: chart2 });
      layouts.configure(chart2, legend, options);
      layouts.addBox(chart2, legend);
    },
    stop(chart2) {
      layouts.removeBox(chart2, chart2.legend);
      delete chart2.legend;
    },
    beforeUpdate(chart2, _args, options) {
      const legend = chart2.legend;
      layouts.configure(chart2, legend, options);
      legend.options = options;
    },
    afterUpdate(chart2) {
      const legend = chart2.legend;
      legend.buildLabels();
      legend.adjustHitBoxes();
    },
    afterEvent(chart2, args) {
      if (!args.replay) {
        chart2.legend.handleEvent(args.event);
      }
    },
    defaults: {
      display: true,
      position: "top",
      align: "center",
      fullSize: true,
      reverse: false,
      weight: 1e3,
      onClick(e, legendItem, legend) {
        const index = legendItem.datasetIndex;
        const ci = legend.chart;
        if (ci.isDatasetVisible(index)) {
          ci.hide(index);
          legendItem.hidden = true;
        } else {
          ci.show(index);
          legendItem.hidden = false;
        }
      },
      onHover: null,
      onLeave: null,
      labels: {
        color: (ctx) => ctx.chart.options.color,
        boxWidth: 40,
        padding: 10,
        generateLabels(chart2) {
          const datasets = chart2.data.datasets;
          const { labels: { usePointStyle, pointStyle, textAlign, color: color2 } } = chart2.legend.options;
          return chart2._getSortedDatasetMetas().map((meta) => {
            const style = meta.controller.getStyle(usePointStyle ? 0 : void 0);
            const borderWidth = toPadding(style.borderWidth);
            return {
              text: datasets[meta.index].label,
              fillStyle: style.backgroundColor,
              fontColor: color2,
              hidden: !meta.visible,
              lineCap: style.borderCapStyle,
              lineDash: style.borderDash,
              lineDashOffset: style.borderDashOffset,
              lineJoin: style.borderJoinStyle,
              lineWidth: (borderWidth.width + borderWidth.height) / 4,
              strokeStyle: style.borderColor,
              pointStyle: pointStyle || style.pointStyle,
              rotation: style.rotation,
              textAlign: textAlign || style.textAlign,
              borderRadius: 0,
              datasetIndex: meta.index
            };
          }, this);
        }
      },
      title: {
        color: (ctx) => ctx.chart.options.color,
        display: false,
        position: "center",
        text: ""
      }
    },
    descriptors: {
      _scriptable: (name) => !name.startsWith("on"),
      labels: {
        _scriptable: (name) => !["generateLabels", "filter", "sort"].includes(name)
      }
    }
  };
  var Title = class extends Element {
    constructor(config) {
      super();
      this.chart = config.chart;
      this.options = config.options;
      this.ctx = config.ctx;
      this._padding = void 0;
      this.top = void 0;
      this.bottom = void 0;
      this.left = void 0;
      this.right = void 0;
      this.width = void 0;
      this.height = void 0;
      this.position = void 0;
      this.weight = void 0;
      this.fullSize = void 0;
    }
    update(maxWidth, maxHeight) {
      const opts = this.options;
      this.left = 0;
      this.top = 0;
      if (!opts.display) {
        this.width = this.height = this.right = this.bottom = 0;
        return;
      }
      this.width = this.right = maxWidth;
      this.height = this.bottom = maxHeight;
      const lineCount = isArray(opts.text) ? opts.text.length : 1;
      this._padding = toPadding(opts.padding);
      const textSize = lineCount * toFont(opts.font).lineHeight + this._padding.height;
      if (this.isHorizontal()) {
        this.height = textSize;
      } else {
        this.width = textSize;
      }
    }
    isHorizontal() {
      const pos = this.options.position;
      return pos === "top" || pos === "bottom";
    }
    _drawArgs(offset) {
      const { top, left, bottom, right, options } = this;
      const align = options.align;
      let rotation = 0;
      let maxWidth, titleX, titleY;
      if (this.isHorizontal()) {
        titleX = _alignStartEnd(align, left, right);
        titleY = top + offset;
        maxWidth = right - left;
      } else {
        if (options.position === "left") {
          titleX = left + offset;
          titleY = _alignStartEnd(align, bottom, top);
          rotation = PI * -0.5;
        } else {
          titleX = right - offset;
          titleY = _alignStartEnd(align, top, bottom);
          rotation = PI * 0.5;
        }
        maxWidth = bottom - top;
      }
      return { titleX, titleY, maxWidth, rotation };
    }
    draw() {
      const ctx = this.ctx;
      const opts = this.options;
      if (!opts.display) {
        return;
      }
      const fontOpts = toFont(opts.font);
      const lineHeight = fontOpts.lineHeight;
      const offset = lineHeight / 2 + this._padding.top;
      const { titleX, titleY, maxWidth, rotation } = this._drawArgs(offset);
      renderText(ctx, opts.text, 0, 0, fontOpts, {
        color: opts.color,
        maxWidth,
        rotation,
        textAlign: _toLeftRightCenter(opts.align),
        textBaseline: "middle",
        translation: [titleX, titleY]
      });
    }
  };
  function createTitle(chart2, titleOpts) {
    const title = new Title({
      ctx: chart2.ctx,
      options: titleOpts,
      chart: chart2
    });
    layouts.configure(chart2, title, titleOpts);
    layouts.addBox(chart2, title);
    chart2.titleBlock = title;
  }
  var plugin_title = {
    id: "title",
    _element: Title,
    start(chart2, _args, options) {
      createTitle(chart2, options);
    },
    stop(chart2) {
      const titleBlock = chart2.titleBlock;
      layouts.removeBox(chart2, titleBlock);
      delete chart2.titleBlock;
    },
    beforeUpdate(chart2, _args, options) {
      const title = chart2.titleBlock;
      layouts.configure(chart2, title, options);
      title.options = options;
    },
    defaults: {
      align: "center",
      display: false,
      font: {
        weight: "bold"
      },
      fullSize: true,
      padding: 10,
      position: "top",
      text: "",
      weight: 2e3
    },
    defaultRoutes: {
      color: "color"
    },
    descriptors: {
      _scriptable: true,
      _indexable: false
    }
  };
  var map2 = new WeakMap();
  var plugin_subtitle = {
    id: "subtitle",
    start(chart2, _args, options) {
      const title = new Title({
        ctx: chart2.ctx,
        options,
        chart: chart2
      });
      layouts.configure(chart2, title, options);
      layouts.addBox(chart2, title);
      map2.set(chart2, title);
    },
    stop(chart2) {
      layouts.removeBox(chart2, map2.get(chart2));
      map2.delete(chart2);
    },
    beforeUpdate(chart2, _args, options) {
      const title = map2.get(chart2);
      layouts.configure(chart2, title, options);
      title.options = options;
    },
    defaults: {
      align: "center",
      display: false,
      font: {
        weight: "normal"
      },
      fullSize: true,
      padding: 0,
      position: "top",
      text: "",
      weight: 1500
    },
    defaultRoutes: {
      color: "color"
    },
    descriptors: {
      _scriptable: true,
      _indexable: false
    }
  };
  var positioners = {
    average(items) {
      if (!items.length) {
        return false;
      }
      let i, len;
      let x = 0;
      let y = 0;
      let count = 0;
      for (i = 0, len = items.length; i < len; ++i) {
        const el = items[i].element;
        if (el && el.hasValue()) {
          const pos = el.tooltipPosition();
          x += pos.x;
          y += pos.y;
          ++count;
        }
      }
      return {
        x: x / count,
        y: y / count
      };
    },
    nearest(items, eventPosition) {
      if (!items.length) {
        return false;
      }
      let x = eventPosition.x;
      let y = eventPosition.y;
      let minDistance = Number.POSITIVE_INFINITY;
      let i, len, nearestElement;
      for (i = 0, len = items.length; i < len; ++i) {
        const el = items[i].element;
        if (el && el.hasValue()) {
          const center = el.getCenterPoint();
          const d = distanceBetweenPoints(eventPosition, center);
          if (d < minDistance) {
            minDistance = d;
            nearestElement = el;
          }
        }
      }
      if (nearestElement) {
        const tp = nearestElement.tooltipPosition();
        x = tp.x;
        y = tp.y;
      }
      return {
        x,
        y
      };
    }
  };
  function pushOrConcat(base, toPush) {
    if (toPush) {
      if (isArray(toPush)) {
        Array.prototype.push.apply(base, toPush);
      } else {
        base.push(toPush);
      }
    }
    return base;
  }
  function splitNewlines(str) {
    if ((typeof str === "string" || str instanceof String) && str.indexOf("\n") > -1) {
      return str.split("\n");
    }
    return str;
  }
  function createTooltipItem(chart2, item) {
    const { element, datasetIndex, index } = item;
    const controller = chart2.getDatasetMeta(datasetIndex).controller;
    const { label, value } = controller.getLabelAndValue(index);
    return {
      chart: chart2,
      label,
      parsed: controller.getParsed(index),
      raw: chart2.data.datasets[datasetIndex].data[index],
      formattedValue: value,
      dataset: controller.getDataset(),
      dataIndex: index,
      datasetIndex,
      element
    };
  }
  function getTooltipSize(tooltip, options) {
    const ctx = tooltip.chart.ctx;
    const { body, footer, title } = tooltip;
    const { boxWidth, boxHeight } = options;
    const bodyFont = toFont(options.bodyFont);
    const titleFont = toFont(options.titleFont);
    const footerFont = toFont(options.footerFont);
    const titleLineCount = title.length;
    const footerLineCount = footer.length;
    const bodyLineItemCount = body.length;
    const padding = toPadding(options.padding);
    let height = padding.height;
    let width = 0;
    let combinedBodyLength = body.reduce((count, bodyItem) => count + bodyItem.before.length + bodyItem.lines.length + bodyItem.after.length, 0);
    combinedBodyLength += tooltip.beforeBody.length + tooltip.afterBody.length;
    if (titleLineCount) {
      height += titleLineCount * titleFont.lineHeight + (titleLineCount - 1) * options.titleSpacing + options.titleMarginBottom;
    }
    if (combinedBodyLength) {
      const bodyLineHeight = options.displayColors ? Math.max(boxHeight, bodyFont.lineHeight) : bodyFont.lineHeight;
      height += bodyLineItemCount * bodyLineHeight + (combinedBodyLength - bodyLineItemCount) * bodyFont.lineHeight + (combinedBodyLength - 1) * options.bodySpacing;
    }
    if (footerLineCount) {
      height += options.footerMarginTop + footerLineCount * footerFont.lineHeight + (footerLineCount - 1) * options.footerSpacing;
    }
    let widthPadding = 0;
    const maxLineWidth = function(line) {
      width = Math.max(width, ctx.measureText(line).width + widthPadding);
    };
    ctx.save();
    ctx.font = titleFont.string;
    each(tooltip.title, maxLineWidth);
    ctx.font = bodyFont.string;
    each(tooltip.beforeBody.concat(tooltip.afterBody), maxLineWidth);
    widthPadding = options.displayColors ? boxWidth + 2 + options.boxPadding : 0;
    each(body, (bodyItem) => {
      each(bodyItem.before, maxLineWidth);
      each(bodyItem.lines, maxLineWidth);
      each(bodyItem.after, maxLineWidth);
    });
    widthPadding = 0;
    ctx.font = footerFont.string;
    each(tooltip.footer, maxLineWidth);
    ctx.restore();
    width += padding.width;
    return { width, height };
  }
  function determineYAlign(chart2, size) {
    const { y, height } = size;
    if (y < height / 2) {
      return "top";
    } else if (y > chart2.height - height / 2) {
      return "bottom";
    }
    return "center";
  }
  function doesNotFitWithAlign(xAlign, chart2, options, size) {
    const { x, width } = size;
    const caret = options.caretSize + options.caretPadding;
    if (xAlign === "left" && x + width + caret > chart2.width) {
      return true;
    }
    if (xAlign === "right" && x - width - caret < 0) {
      return true;
    }
  }
  function determineXAlign(chart2, options, size, yAlign) {
    const { x, width } = size;
    const { width: chartWidth, chartArea: { left, right } } = chart2;
    let xAlign = "center";
    if (yAlign === "center") {
      xAlign = x <= (left + right) / 2 ? "left" : "right";
    } else if (x <= width / 2) {
      xAlign = "left";
    } else if (x >= chartWidth - width / 2) {
      xAlign = "right";
    }
    if (doesNotFitWithAlign(xAlign, chart2, options, size)) {
      xAlign = "center";
    }
    return xAlign;
  }
  function determineAlignment(chart2, options, size) {
    const yAlign = size.yAlign || options.yAlign || determineYAlign(chart2, size);
    return {
      xAlign: size.xAlign || options.xAlign || determineXAlign(chart2, options, size, yAlign),
      yAlign
    };
  }
  function alignX(size, xAlign) {
    let { x, width } = size;
    if (xAlign === "right") {
      x -= width;
    } else if (xAlign === "center") {
      x -= width / 2;
    }
    return x;
  }
  function alignY(size, yAlign, paddingAndSize) {
    let { y, height } = size;
    if (yAlign === "top") {
      y += paddingAndSize;
    } else if (yAlign === "bottom") {
      y -= height + paddingAndSize;
    } else {
      y -= height / 2;
    }
    return y;
  }
  function getBackgroundPoint(options, size, alignment, chart2) {
    const { caretSize, caretPadding, cornerRadius } = options;
    const { xAlign, yAlign } = alignment;
    const paddingAndSize = caretSize + caretPadding;
    const { topLeft, topRight, bottomLeft, bottomRight } = toTRBLCorners(cornerRadius);
    let x = alignX(size, xAlign);
    const y = alignY(size, yAlign, paddingAndSize);
    if (yAlign === "center") {
      if (xAlign === "left") {
        x += paddingAndSize;
      } else if (xAlign === "right") {
        x -= paddingAndSize;
      }
    } else if (xAlign === "left") {
      x -= Math.max(topLeft, bottomLeft) + caretSize;
    } else if (xAlign === "right") {
      x += Math.max(topRight, bottomRight) + caretSize;
    }
    return {
      x: _limitValue(x, 0, chart2.width - size.width),
      y: _limitValue(y, 0, chart2.height - size.height)
    };
  }
  function getAlignedX(tooltip, align, options) {
    const padding = toPadding(options.padding);
    return align === "center" ? tooltip.x + tooltip.width / 2 : align === "right" ? tooltip.x + tooltip.width - padding.right : tooltip.x + padding.left;
  }
  function getBeforeAfterBodyLines(callback2) {
    return pushOrConcat([], splitNewlines(callback2));
  }
  function createTooltipContext(parent, tooltip, tooltipItems) {
    return createContext(parent, {
      tooltip,
      tooltipItems,
      type: "tooltip"
    });
  }
  function overrideCallbacks(callbacks, context) {
    const override = context && context.dataset && context.dataset.tooltip && context.dataset.tooltip.callbacks;
    return override ? callbacks.override(override) : callbacks;
  }
  var Tooltip = class extends Element {
    constructor(config) {
      super();
      this.opacity = 0;
      this._active = [];
      this._eventPosition = void 0;
      this._size = void 0;
      this._cachedAnimations = void 0;
      this._tooltipItems = [];
      this.$animations = void 0;
      this.$context = void 0;
      this.chart = config.chart || config._chart;
      this._chart = this.chart;
      this.options = config.options;
      this.dataPoints = void 0;
      this.title = void 0;
      this.beforeBody = void 0;
      this.body = void 0;
      this.afterBody = void 0;
      this.footer = void 0;
      this.xAlign = void 0;
      this.yAlign = void 0;
      this.x = void 0;
      this.y = void 0;
      this.height = void 0;
      this.width = void 0;
      this.caretX = void 0;
      this.caretY = void 0;
      this.labelColors = void 0;
      this.labelPointStyles = void 0;
      this.labelTextColors = void 0;
    }
    initialize(options) {
      this.options = options;
      this._cachedAnimations = void 0;
      this.$context = void 0;
    }
    _resolveAnimations() {
      const cached = this._cachedAnimations;
      if (cached) {
        return cached;
      }
      const chart2 = this.chart;
      const options = this.options.setContext(this.getContext());
      const opts = options.enabled && chart2.options.animation && options.animations;
      const animations = new Animations(this.chart, opts);
      if (opts._cacheable) {
        this._cachedAnimations = Object.freeze(animations);
      }
      return animations;
    }
    getContext() {
      return this.$context || (this.$context = createTooltipContext(this.chart.getContext(), this, this._tooltipItems));
    }
    getTitle(context, options) {
      const { callbacks } = options;
      const beforeTitle = callbacks.beforeTitle.apply(this, [context]);
      const title = callbacks.title.apply(this, [context]);
      const afterTitle = callbacks.afterTitle.apply(this, [context]);
      let lines = [];
      lines = pushOrConcat(lines, splitNewlines(beforeTitle));
      lines = pushOrConcat(lines, splitNewlines(title));
      lines = pushOrConcat(lines, splitNewlines(afterTitle));
      return lines;
    }
    getBeforeBody(tooltipItems, options) {
      return getBeforeAfterBodyLines(options.callbacks.beforeBody.apply(this, [tooltipItems]));
    }
    getBody(tooltipItems, options) {
      const { callbacks } = options;
      const bodyItems = [];
      each(tooltipItems, (context) => {
        const bodyItem = {
          before: [],
          lines: [],
          after: []
        };
        const scoped = overrideCallbacks(callbacks, context);
        pushOrConcat(bodyItem.before, splitNewlines(scoped.beforeLabel.call(this, context)));
        pushOrConcat(bodyItem.lines, scoped.label.call(this, context));
        pushOrConcat(bodyItem.after, splitNewlines(scoped.afterLabel.call(this, context)));
        bodyItems.push(bodyItem);
      });
      return bodyItems;
    }
    getAfterBody(tooltipItems, options) {
      return getBeforeAfterBodyLines(options.callbacks.afterBody.apply(this, [tooltipItems]));
    }
    getFooter(tooltipItems, options) {
      const { callbacks } = options;
      const beforeFooter = callbacks.beforeFooter.apply(this, [tooltipItems]);
      const footer = callbacks.footer.apply(this, [tooltipItems]);
      const afterFooter = callbacks.afterFooter.apply(this, [tooltipItems]);
      let lines = [];
      lines = pushOrConcat(lines, splitNewlines(beforeFooter));
      lines = pushOrConcat(lines, splitNewlines(footer));
      lines = pushOrConcat(lines, splitNewlines(afterFooter));
      return lines;
    }
    _createItems(options) {
      const active = this._active;
      const data = this.chart.data;
      const labelColors = [];
      const labelPointStyles = [];
      const labelTextColors = [];
      let tooltipItems = [];
      let i, len;
      for (i = 0, len = active.length; i < len; ++i) {
        tooltipItems.push(createTooltipItem(this.chart, active[i]));
      }
      if (options.filter) {
        tooltipItems = tooltipItems.filter((element, index, array) => options.filter(element, index, array, data));
      }
      if (options.itemSort) {
        tooltipItems = tooltipItems.sort((a, b) => options.itemSort(a, b, data));
      }
      each(tooltipItems, (context) => {
        const scoped = overrideCallbacks(options.callbacks, context);
        labelColors.push(scoped.labelColor.call(this, context));
        labelPointStyles.push(scoped.labelPointStyle.call(this, context));
        labelTextColors.push(scoped.labelTextColor.call(this, context));
      });
      this.labelColors = labelColors;
      this.labelPointStyles = labelPointStyles;
      this.labelTextColors = labelTextColors;
      this.dataPoints = tooltipItems;
      return tooltipItems;
    }
    update(changed, replay) {
      const options = this.options.setContext(this.getContext());
      const active = this._active;
      let properties;
      let tooltipItems = [];
      if (!active.length) {
        if (this.opacity !== 0) {
          properties = {
            opacity: 0
          };
        }
      } else {
        const position = positioners[options.position].call(this, active, this._eventPosition);
        tooltipItems = this._createItems(options);
        this.title = this.getTitle(tooltipItems, options);
        this.beforeBody = this.getBeforeBody(tooltipItems, options);
        this.body = this.getBody(tooltipItems, options);
        this.afterBody = this.getAfterBody(tooltipItems, options);
        this.footer = this.getFooter(tooltipItems, options);
        const size = this._size = getTooltipSize(this, options);
        const positionAndSize = Object.assign({}, position, size);
        const alignment = determineAlignment(this.chart, options, positionAndSize);
        const backgroundPoint = getBackgroundPoint(options, positionAndSize, alignment, this.chart);
        this.xAlign = alignment.xAlign;
        this.yAlign = alignment.yAlign;
        properties = {
          opacity: 1,
          x: backgroundPoint.x,
          y: backgroundPoint.y,
          width: size.width,
          height: size.height,
          caretX: position.x,
          caretY: position.y
        };
      }
      this._tooltipItems = tooltipItems;
      this.$context = void 0;
      if (properties) {
        this._resolveAnimations().update(this, properties);
      }
      if (changed && options.external) {
        options.external.call(this, { chart: this.chart, tooltip: this, replay });
      }
    }
    drawCaret(tooltipPoint, ctx, size, options) {
      const caretPosition = this.getCaretPosition(tooltipPoint, size, options);
      ctx.lineTo(caretPosition.x1, caretPosition.y1);
      ctx.lineTo(caretPosition.x2, caretPosition.y2);
      ctx.lineTo(caretPosition.x3, caretPosition.y3);
    }
    getCaretPosition(tooltipPoint, size, options) {
      const { xAlign, yAlign } = this;
      const { caretSize, cornerRadius } = options;
      const { topLeft, topRight, bottomLeft, bottomRight } = toTRBLCorners(cornerRadius);
      const { x: ptX, y: ptY } = tooltipPoint;
      const { width, height } = size;
      let x1, x2, x3, y1, y2, y3;
      if (yAlign === "center") {
        y2 = ptY + height / 2;
        if (xAlign === "left") {
          x1 = ptX;
          x2 = x1 - caretSize;
          y1 = y2 + caretSize;
          y3 = y2 - caretSize;
        } else {
          x1 = ptX + width;
          x2 = x1 + caretSize;
          y1 = y2 - caretSize;
          y3 = y2 + caretSize;
        }
        x3 = x1;
      } else {
        if (xAlign === "left") {
          x2 = ptX + Math.max(topLeft, bottomLeft) + caretSize;
        } else if (xAlign === "right") {
          x2 = ptX + width - Math.max(topRight, bottomRight) - caretSize;
        } else {
          x2 = this.caretX;
        }
        if (yAlign === "top") {
          y1 = ptY;
          y2 = y1 - caretSize;
          x1 = x2 - caretSize;
          x3 = x2 + caretSize;
        } else {
          y1 = ptY + height;
          y2 = y1 + caretSize;
          x1 = x2 + caretSize;
          x3 = x2 - caretSize;
        }
        y3 = y1;
      }
      return { x1, x2, x3, y1, y2, y3 };
    }
    drawTitle(pt, ctx, options) {
      const title = this.title;
      const length = title.length;
      let titleFont, titleSpacing, i;
      if (length) {
        const rtlHelper = getRtlAdapter(options.rtl, this.x, this.width);
        pt.x = getAlignedX(this, options.titleAlign, options);
        ctx.textAlign = rtlHelper.textAlign(options.titleAlign);
        ctx.textBaseline = "middle";
        titleFont = toFont(options.titleFont);
        titleSpacing = options.titleSpacing;
        ctx.fillStyle = options.titleColor;
        ctx.font = titleFont.string;
        for (i = 0; i < length; ++i) {
          ctx.fillText(title[i], rtlHelper.x(pt.x), pt.y + titleFont.lineHeight / 2);
          pt.y += titleFont.lineHeight + titleSpacing;
          if (i + 1 === length) {
            pt.y += options.titleMarginBottom - titleSpacing;
          }
        }
      }
    }
    _drawColorBox(ctx, pt, i, rtlHelper, options) {
      const labelColors = this.labelColors[i];
      const labelPointStyle = this.labelPointStyles[i];
      const { boxHeight, boxWidth, boxPadding } = options;
      const bodyFont = toFont(options.bodyFont);
      const colorX = getAlignedX(this, "left", options);
      const rtlColorX = rtlHelper.x(colorX);
      const yOffSet = boxHeight < bodyFont.lineHeight ? (bodyFont.lineHeight - boxHeight) / 2 : 0;
      const colorY = pt.y + yOffSet;
      if (options.usePointStyle) {
        const drawOptions = {
          radius: Math.min(boxWidth, boxHeight) / 2,
          pointStyle: labelPointStyle.pointStyle,
          rotation: labelPointStyle.rotation,
          borderWidth: 1
        };
        const centerX = rtlHelper.leftForLtr(rtlColorX, boxWidth) + boxWidth / 2;
        const centerY = colorY + boxHeight / 2;
        ctx.strokeStyle = options.multiKeyBackground;
        ctx.fillStyle = options.multiKeyBackground;
        drawPoint(ctx, drawOptions, centerX, centerY);
        ctx.strokeStyle = labelColors.borderColor;
        ctx.fillStyle = labelColors.backgroundColor;
        drawPoint(ctx, drawOptions, centerX, centerY);
      } else {
        ctx.lineWidth = labelColors.borderWidth || 1;
        ctx.strokeStyle = labelColors.borderColor;
        ctx.setLineDash(labelColors.borderDash || []);
        ctx.lineDashOffset = labelColors.borderDashOffset || 0;
        const outerX = rtlHelper.leftForLtr(rtlColorX, boxWidth - boxPadding);
        const innerX = rtlHelper.leftForLtr(rtlHelper.xPlus(rtlColorX, 1), boxWidth - boxPadding - 2);
        const borderRadius = toTRBLCorners(labelColors.borderRadius);
        if (Object.values(borderRadius).some((v) => v !== 0)) {
          ctx.beginPath();
          ctx.fillStyle = options.multiKeyBackground;
          addRoundedRectPath(ctx, {
            x: outerX,
            y: colorY,
            w: boxWidth,
            h: boxHeight,
            radius: borderRadius
          });
          ctx.fill();
          ctx.stroke();
          ctx.fillStyle = labelColors.backgroundColor;
          ctx.beginPath();
          addRoundedRectPath(ctx, {
            x: innerX,
            y: colorY + 1,
            w: boxWidth - 2,
            h: boxHeight - 2,
            radius: borderRadius
          });
          ctx.fill();
        } else {
          ctx.fillStyle = options.multiKeyBackground;
          ctx.fillRect(outerX, colorY, boxWidth, boxHeight);
          ctx.strokeRect(outerX, colorY, boxWidth, boxHeight);
          ctx.fillStyle = labelColors.backgroundColor;
          ctx.fillRect(innerX, colorY + 1, boxWidth - 2, boxHeight - 2);
        }
      }
      ctx.fillStyle = this.labelTextColors[i];
    }
    drawBody(pt, ctx, options) {
      const { body } = this;
      const { bodySpacing, bodyAlign, displayColors, boxHeight, boxWidth, boxPadding } = options;
      const bodyFont = toFont(options.bodyFont);
      let bodyLineHeight = bodyFont.lineHeight;
      let xLinePadding = 0;
      const rtlHelper = getRtlAdapter(options.rtl, this.x, this.width);
      const fillLineOfText = function(line) {
        ctx.fillText(line, rtlHelper.x(pt.x + xLinePadding), pt.y + bodyLineHeight / 2);
        pt.y += bodyLineHeight + bodySpacing;
      };
      const bodyAlignForCalculation = rtlHelper.textAlign(bodyAlign);
      let bodyItem, textColor, lines, i, j, ilen, jlen;
      ctx.textAlign = bodyAlign;
      ctx.textBaseline = "middle";
      ctx.font = bodyFont.string;
      pt.x = getAlignedX(this, bodyAlignForCalculation, options);
      ctx.fillStyle = options.bodyColor;
      each(this.beforeBody, fillLineOfText);
      xLinePadding = displayColors && bodyAlignForCalculation !== "right" ? bodyAlign === "center" ? boxWidth / 2 + boxPadding : boxWidth + 2 + boxPadding : 0;
      for (i = 0, ilen = body.length; i < ilen; ++i) {
        bodyItem = body[i];
        textColor = this.labelTextColors[i];
        ctx.fillStyle = textColor;
        each(bodyItem.before, fillLineOfText);
        lines = bodyItem.lines;
        if (displayColors && lines.length) {
          this._drawColorBox(ctx, pt, i, rtlHelper, options);
          bodyLineHeight = Math.max(bodyFont.lineHeight, boxHeight);
        }
        for (j = 0, jlen = lines.length; j < jlen; ++j) {
          fillLineOfText(lines[j]);
          bodyLineHeight = bodyFont.lineHeight;
        }
        each(bodyItem.after, fillLineOfText);
      }
      xLinePadding = 0;
      bodyLineHeight = bodyFont.lineHeight;
      each(this.afterBody, fillLineOfText);
      pt.y -= bodySpacing;
    }
    drawFooter(pt, ctx, options) {
      const footer = this.footer;
      const length = footer.length;
      let footerFont, i;
      if (length) {
        const rtlHelper = getRtlAdapter(options.rtl, this.x, this.width);
        pt.x = getAlignedX(this, options.footerAlign, options);
        pt.y += options.footerMarginTop;
        ctx.textAlign = rtlHelper.textAlign(options.footerAlign);
        ctx.textBaseline = "middle";
        footerFont = toFont(options.footerFont);
        ctx.fillStyle = options.footerColor;
        ctx.font = footerFont.string;
        for (i = 0; i < length; ++i) {
          ctx.fillText(footer[i], rtlHelper.x(pt.x), pt.y + footerFont.lineHeight / 2);
          pt.y += footerFont.lineHeight + options.footerSpacing;
        }
      }
    }
    drawBackground(pt, ctx, tooltipSize, options) {
      const { xAlign, yAlign } = this;
      const { x, y } = pt;
      const { width, height } = tooltipSize;
      const { topLeft, topRight, bottomLeft, bottomRight } = toTRBLCorners(options.cornerRadius);
      ctx.fillStyle = options.backgroundColor;
      ctx.strokeStyle = options.borderColor;
      ctx.lineWidth = options.borderWidth;
      ctx.beginPath();
      ctx.moveTo(x + topLeft, y);
      if (yAlign === "top") {
        this.drawCaret(pt, ctx, tooltipSize, options);
      }
      ctx.lineTo(x + width - topRight, y);
      ctx.quadraticCurveTo(x + width, y, x + width, y + topRight);
      if (yAlign === "center" && xAlign === "right") {
        this.drawCaret(pt, ctx, tooltipSize, options);
      }
      ctx.lineTo(x + width, y + height - bottomRight);
      ctx.quadraticCurveTo(x + width, y + height, x + width - bottomRight, y + height);
      if (yAlign === "bottom") {
        this.drawCaret(pt, ctx, tooltipSize, options);
      }
      ctx.lineTo(x + bottomLeft, y + height);
      ctx.quadraticCurveTo(x, y + height, x, y + height - bottomLeft);
      if (yAlign === "center" && xAlign === "left") {
        this.drawCaret(pt, ctx, tooltipSize, options);
      }
      ctx.lineTo(x, y + topLeft);
      ctx.quadraticCurveTo(x, y, x + topLeft, y);
      ctx.closePath();
      ctx.fill();
      if (options.borderWidth > 0) {
        ctx.stroke();
      }
    }
    _updateAnimationTarget(options) {
      const chart2 = this.chart;
      const anims = this.$animations;
      const animX = anims && anims.x;
      const animY = anims && anims.y;
      if (animX || animY) {
        const position = positioners[options.position].call(this, this._active, this._eventPosition);
        if (!position) {
          return;
        }
        const size = this._size = getTooltipSize(this, options);
        const positionAndSize = Object.assign({}, position, this._size);
        const alignment = determineAlignment(chart2, options, positionAndSize);
        const point = getBackgroundPoint(options, positionAndSize, alignment, chart2);
        if (animX._to !== point.x || animY._to !== point.y) {
          this.xAlign = alignment.xAlign;
          this.yAlign = alignment.yAlign;
          this.width = size.width;
          this.height = size.height;
          this.caretX = position.x;
          this.caretY = position.y;
          this._resolveAnimations().update(this, point);
        }
      }
    }
    draw(ctx) {
      const options = this.options.setContext(this.getContext());
      let opacity = this.opacity;
      if (!opacity) {
        return;
      }
      this._updateAnimationTarget(options);
      const tooltipSize = {
        width: this.width,
        height: this.height
      };
      const pt = {
        x: this.x,
        y: this.y
      };
      opacity = Math.abs(opacity) < 1e-3 ? 0 : opacity;
      const padding = toPadding(options.padding);
      const hasTooltipContent = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
      if (options.enabled && hasTooltipContent) {
        ctx.save();
        ctx.globalAlpha = opacity;
        this.drawBackground(pt, ctx, tooltipSize, options);
        overrideTextDirection(ctx, options.textDirection);
        pt.y += padding.top;
        this.drawTitle(pt, ctx, options);
        this.drawBody(pt, ctx, options);
        this.drawFooter(pt, ctx, options);
        restoreTextDirection(ctx, options.textDirection);
        ctx.restore();
      }
    }
    getActiveElements() {
      return this._active || [];
    }
    setActiveElements(activeElements, eventPosition) {
      const lastActive = this._active;
      const active = activeElements.map(({ datasetIndex, index }) => {
        const meta = this.chart.getDatasetMeta(datasetIndex);
        if (!meta) {
          throw new Error("Cannot find a dataset at index " + datasetIndex);
        }
        return {
          datasetIndex,
          element: meta.data[index],
          index
        };
      });
      const changed = !_elementsEqual(lastActive, active);
      const positionChanged = this._positionChanged(active, eventPosition);
      if (changed || positionChanged) {
        this._active = active;
        this._eventPosition = eventPosition;
        this._ignoreReplayEvents = true;
        this.update(true);
      }
    }
    handleEvent(e, replay, inChartArea = true) {
      if (replay && this._ignoreReplayEvents) {
        return false;
      }
      this._ignoreReplayEvents = false;
      const options = this.options;
      const lastActive = this._active || [];
      const active = this._getActiveElements(e, lastActive, replay, inChartArea);
      const positionChanged = this._positionChanged(active, e);
      const changed = replay || !_elementsEqual(active, lastActive) || positionChanged;
      if (changed) {
        this._active = active;
        if (options.enabled || options.external) {
          this._eventPosition = {
            x: e.x,
            y: e.y
          };
          this.update(true, replay);
        }
      }
      return changed;
    }
    _getActiveElements(e, lastActive, replay, inChartArea) {
      const options = this.options;
      if (e.type === "mouseout") {
        return [];
      }
      if (!inChartArea) {
        return lastActive;
      }
      const active = this.chart.getElementsAtEventForMode(e, options.mode, options, replay);
      if (options.reverse) {
        active.reverse();
      }
      return active;
    }
    _positionChanged(active, e) {
      const { caretX, caretY, options } = this;
      const position = positioners[options.position].call(this, active, e);
      return position !== false && (caretX !== position.x || caretY !== position.y);
    }
  };
  Tooltip.positioners = positioners;
  var plugin_tooltip = {
    id: "tooltip",
    _element: Tooltip,
    positioners,
    afterInit(chart2, _args, options) {
      if (options) {
        chart2.tooltip = new Tooltip({ chart: chart2, options });
      }
    },
    beforeUpdate(chart2, _args, options) {
      if (chart2.tooltip) {
        chart2.tooltip.initialize(options);
      }
    },
    reset(chart2, _args, options) {
      if (chart2.tooltip) {
        chart2.tooltip.initialize(options);
      }
    },
    afterDraw(chart2) {
      const tooltip = chart2.tooltip;
      const args = {
        tooltip
      };
      if (chart2.notifyPlugins("beforeTooltipDraw", args) === false) {
        return;
      }
      if (tooltip) {
        tooltip.draw(chart2.ctx);
      }
      chart2.notifyPlugins("afterTooltipDraw", args);
    },
    afterEvent(chart2, args) {
      if (chart2.tooltip) {
        const useFinalPosition = args.replay;
        if (chart2.tooltip.handleEvent(args.event, useFinalPosition, args.inChartArea)) {
          args.changed = true;
        }
      }
    },
    defaults: {
      enabled: true,
      external: null,
      position: "average",
      backgroundColor: "rgba(0,0,0,0.8)",
      titleColor: "#fff",
      titleFont: {
        weight: "bold"
      },
      titleSpacing: 2,
      titleMarginBottom: 6,
      titleAlign: "left",
      bodyColor: "#fff",
      bodySpacing: 2,
      bodyFont: {},
      bodyAlign: "left",
      footerColor: "#fff",
      footerSpacing: 2,
      footerMarginTop: 6,
      footerFont: {
        weight: "bold"
      },
      footerAlign: "left",
      padding: 6,
      caretPadding: 2,
      caretSize: 5,
      cornerRadius: 6,
      boxHeight: (ctx, opts) => opts.bodyFont.size,
      boxWidth: (ctx, opts) => opts.bodyFont.size,
      multiKeyBackground: "#fff",
      displayColors: true,
      boxPadding: 0,
      borderColor: "rgba(0,0,0,0)",
      borderWidth: 0,
      animation: {
        duration: 400,
        easing: "easeOutQuart"
      },
      animations: {
        numbers: {
          type: "number",
          properties: ["x", "y", "width", "height", "caretX", "caretY"]
        },
        opacity: {
          easing: "linear",
          duration: 200
        }
      },
      callbacks: {
        beforeTitle: noop,
        title(tooltipItems) {
          if (tooltipItems.length > 0) {
            const item = tooltipItems[0];
            const labels = item.chart.data.labels;
            const labelCount = labels ? labels.length : 0;
            if (this && this.options && this.options.mode === "dataset") {
              return item.dataset.label || "";
            } else if (item.label) {
              return item.label;
            } else if (labelCount > 0 && item.dataIndex < labelCount) {
              return labels[item.dataIndex];
            }
          }
          return "";
        },
        afterTitle: noop,
        beforeBody: noop,
        beforeLabel: noop,
        label(tooltipItem) {
          if (this && this.options && this.options.mode === "dataset") {
            return tooltipItem.label + ": " + tooltipItem.formattedValue || tooltipItem.formattedValue;
          }
          let label = tooltipItem.dataset.label || "";
          if (label) {
            label += ": ";
          }
          const value = tooltipItem.formattedValue;
          if (!isNullOrUndef(value)) {
            label += value;
          }
          return label;
        },
        labelColor(tooltipItem) {
          const meta = tooltipItem.chart.getDatasetMeta(tooltipItem.datasetIndex);
          const options = meta.controller.getStyle(tooltipItem.dataIndex);
          return {
            borderColor: options.borderColor,
            backgroundColor: options.backgroundColor,
            borderWidth: options.borderWidth,
            borderDash: options.borderDash,
            borderDashOffset: options.borderDashOffset,
            borderRadius: 0
          };
        },
        labelTextColor() {
          return this.options.bodyColor;
        },
        labelPointStyle(tooltipItem) {
          const meta = tooltipItem.chart.getDatasetMeta(tooltipItem.datasetIndex);
          const options = meta.controller.getStyle(tooltipItem.dataIndex);
          return {
            pointStyle: options.pointStyle,
            rotation: options.rotation
          };
        },
        afterLabel: noop,
        afterBody: noop,
        beforeFooter: noop,
        footer: noop,
        afterFooter: noop
      }
    },
    defaultRoutes: {
      bodyFont: "font",
      footerFont: "font",
      titleFont: "font"
    },
    descriptors: {
      _scriptable: (name) => name !== "filter" && name !== "itemSort" && name !== "external",
      _indexable: false,
      callbacks: {
        _scriptable: false,
        _indexable: false
      },
      animation: {
        _fallback: false
      },
      animations: {
        _fallback: "animation"
      }
    },
    additionalOptionScopes: ["interaction"]
  };
  var plugins = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    Decimation: plugin_decimation,
    Filler: plugin_filler,
    Legend: plugin_legend,
    SubTitle: plugin_subtitle,
    Title: plugin_title,
    Tooltip: plugin_tooltip
  });
  var addIfString = (labels, raw, index, addedLabels) => {
    if (typeof raw === "string") {
      index = labels.push(raw) - 1;
      addedLabels.unshift({ index, label: raw });
    } else if (isNaN(raw)) {
      index = null;
    }
    return index;
  };
  function findOrAddLabel(labels, raw, index, addedLabels) {
    const first = labels.indexOf(raw);
    if (first === -1) {
      return addIfString(labels, raw, index, addedLabels);
    }
    const last = labels.lastIndexOf(raw);
    return first !== last ? index : first;
  }
  var validIndex = (index, max) => index === null ? null : _limitValue(Math.round(index), 0, max);
  var CategoryScale = class extends Scale {
    constructor(cfg) {
      super(cfg);
      this._startValue = void 0;
      this._valueRange = 0;
      this._addedLabels = [];
    }
    init(scaleOptions) {
      const added = this._addedLabels;
      if (added.length) {
        const labels = this.getLabels();
        for (const { index, label } of added) {
          if (labels[index] === label) {
            labels.splice(index, 1);
          }
        }
        this._addedLabels = [];
      }
      super.init(scaleOptions);
    }
    parse(raw, index) {
      if (isNullOrUndef(raw)) {
        return null;
      }
      const labels = this.getLabels();
      index = isFinite(index) && labels[index] === raw ? index : findOrAddLabel(labels, raw, valueOrDefault(index, raw), this._addedLabels);
      return validIndex(index, labels.length - 1);
    }
    determineDataLimits() {
      const { minDefined, maxDefined } = this.getUserBounds();
      let { min, max } = this.getMinMax(true);
      if (this.options.bounds === "ticks") {
        if (!minDefined) {
          min = 0;
        }
        if (!maxDefined) {
          max = this.getLabels().length - 1;
        }
      }
      this.min = min;
      this.max = max;
    }
    buildTicks() {
      const min = this.min;
      const max = this.max;
      const offset = this.options.offset;
      const ticks = [];
      let labels = this.getLabels();
      labels = min === 0 && max === labels.length - 1 ? labels : labels.slice(min, max + 1);
      this._valueRange = Math.max(labels.length - (offset ? 0 : 1), 1);
      this._startValue = this.min - (offset ? 0.5 : 0);
      for (let value = min; value <= max; value++) {
        ticks.push({ value });
      }
      return ticks;
    }
    getLabelForValue(value) {
      const labels = this.getLabels();
      if (value >= 0 && value < labels.length) {
        return labels[value];
      }
      return value;
    }
    configure() {
      super.configure();
      if (!this.isHorizontal()) {
        this._reversePixels = !this._reversePixels;
      }
    }
    getPixelForValue(value) {
      if (typeof value !== "number") {
        value = this.parse(value);
      }
      return value === null ? NaN : this.getPixelForDecimal((value - this._startValue) / this._valueRange);
    }
    getPixelForTick(index) {
      const ticks = this.ticks;
      if (index < 0 || index > ticks.length - 1) {
        return null;
      }
      return this.getPixelForValue(ticks[index].value);
    }
    getValueForPixel(pixel) {
      return Math.round(this._startValue + this.getDecimalForPixel(pixel) * this._valueRange);
    }
    getBasePixel() {
      return this.bottom;
    }
  };
  CategoryScale.id = "category";
  CategoryScale.defaults = {
    ticks: {
      callback: CategoryScale.prototype.getLabelForValue
    }
  };
  function generateTicks$1(generationOptions, dataRange) {
    const ticks = [];
    const MIN_SPACING = 1e-14;
    const { bounds, step, min, max, precision, count, maxTicks, maxDigits, includeBounds } = generationOptions;
    const unit = step || 1;
    const maxSpaces = maxTicks - 1;
    const { min: rmin, max: rmax } = dataRange;
    const minDefined = !isNullOrUndef(min);
    const maxDefined = !isNullOrUndef(max);
    const countDefined = !isNullOrUndef(count);
    const minSpacing = (rmax - rmin) / (maxDigits + 1);
    let spacing = niceNum((rmax - rmin) / maxSpaces / unit) * unit;
    let factor, niceMin, niceMax, numSpaces;
    if (spacing < MIN_SPACING && !minDefined && !maxDefined) {
      return [{ value: rmin }, { value: rmax }];
    }
    numSpaces = Math.ceil(rmax / spacing) - Math.floor(rmin / spacing);
    if (numSpaces > maxSpaces) {
      spacing = niceNum(numSpaces * spacing / maxSpaces / unit) * unit;
    }
    if (!isNullOrUndef(precision)) {
      factor = Math.pow(10, precision);
      spacing = Math.ceil(spacing * factor) / factor;
    }
    if (bounds === "ticks") {
      niceMin = Math.floor(rmin / spacing) * spacing;
      niceMax = Math.ceil(rmax / spacing) * spacing;
    } else {
      niceMin = rmin;
      niceMax = rmax;
    }
    if (minDefined && maxDefined && step && almostWhole((max - min) / step, spacing / 1e3)) {
      numSpaces = Math.round(Math.min((max - min) / spacing, maxTicks));
      spacing = (max - min) / numSpaces;
      niceMin = min;
      niceMax = max;
    } else if (countDefined) {
      niceMin = minDefined ? min : niceMin;
      niceMax = maxDefined ? max : niceMax;
      numSpaces = count - 1;
      spacing = (niceMax - niceMin) / numSpaces;
    } else {
      numSpaces = (niceMax - niceMin) / spacing;
      if (almostEquals(numSpaces, Math.round(numSpaces), spacing / 1e3)) {
        numSpaces = Math.round(numSpaces);
      } else {
        numSpaces = Math.ceil(numSpaces);
      }
    }
    const decimalPlaces = Math.max(_decimalPlaces(spacing), _decimalPlaces(niceMin));
    factor = Math.pow(10, isNullOrUndef(precision) ? decimalPlaces : precision);
    niceMin = Math.round(niceMin * factor) / factor;
    niceMax = Math.round(niceMax * factor) / factor;
    let j = 0;
    if (minDefined) {
      if (includeBounds && niceMin !== min) {
        ticks.push({ value: min });
        if (niceMin < min) {
          j++;
        }
        if (almostEquals(Math.round((niceMin + j * spacing) * factor) / factor, min, relativeLabelSize(min, minSpacing, generationOptions))) {
          j++;
        }
      } else if (niceMin < min) {
        j++;
      }
    }
    for (; j < numSpaces; ++j) {
      ticks.push({ value: Math.round((niceMin + j * spacing) * factor) / factor });
    }
    if (maxDefined && includeBounds && niceMax !== max) {
      if (ticks.length && almostEquals(ticks[ticks.length - 1].value, max, relativeLabelSize(max, minSpacing, generationOptions))) {
        ticks[ticks.length - 1].value = max;
      } else {
        ticks.push({ value: max });
      }
    } else if (!maxDefined || niceMax === max) {
      ticks.push({ value: niceMax });
    }
    return ticks;
  }
  function relativeLabelSize(value, minSpacing, { horizontal, minRotation }) {
    const rad = toRadians(minRotation);
    const ratio = (horizontal ? Math.sin(rad) : Math.cos(rad)) || 1e-3;
    const length = 0.75 * minSpacing * ("" + value).length;
    return Math.min(minSpacing / ratio, length);
  }
  var LinearScaleBase = class extends Scale {
    constructor(cfg) {
      super(cfg);
      this.start = void 0;
      this.end = void 0;
      this._startValue = void 0;
      this._endValue = void 0;
      this._valueRange = 0;
    }
    parse(raw, index) {
      if (isNullOrUndef(raw)) {
        return null;
      }
      if ((typeof raw === "number" || raw instanceof Number) && !isFinite(+raw)) {
        return null;
      }
      return +raw;
    }
    handleTickRangeOptions() {
      const { beginAtZero } = this.options;
      const { minDefined, maxDefined } = this.getUserBounds();
      let { min, max } = this;
      const setMin = (v) => min = minDefined ? min : v;
      const setMax = (v) => max = maxDefined ? max : v;
      if (beginAtZero) {
        const minSign = sign(min);
        const maxSign = sign(max);
        if (minSign < 0 && maxSign < 0) {
          setMax(0);
        } else if (minSign > 0 && maxSign > 0) {
          setMin(0);
        }
      }
      if (min === max) {
        let offset = 1;
        if (max >= Number.MAX_SAFE_INTEGER || min <= Number.MIN_SAFE_INTEGER) {
          offset = Math.abs(max * 0.05);
        }
        setMax(max + offset);
        if (!beginAtZero) {
          setMin(min - offset);
        }
      }
      this.min = min;
      this.max = max;
    }
    getTickLimit() {
      const tickOpts = this.options.ticks;
      let { maxTicksLimit, stepSize } = tickOpts;
      let maxTicks;
      if (stepSize) {
        maxTicks = Math.ceil(this.max / stepSize) - Math.floor(this.min / stepSize) + 1;
        if (maxTicks > 1e3) {
          console.warn(`scales.${this.id}.ticks.stepSize: ${stepSize} would result generating up to ${maxTicks} ticks. Limiting to 1000.`);
          maxTicks = 1e3;
        }
      } else {
        maxTicks = this.computeTickLimit();
        maxTicksLimit = maxTicksLimit || 11;
      }
      if (maxTicksLimit) {
        maxTicks = Math.min(maxTicksLimit, maxTicks);
      }
      return maxTicks;
    }
    computeTickLimit() {
      return Number.POSITIVE_INFINITY;
    }
    buildTicks() {
      const opts = this.options;
      const tickOpts = opts.ticks;
      let maxTicks = this.getTickLimit();
      maxTicks = Math.max(2, maxTicks);
      const numericGeneratorOptions = {
        maxTicks,
        bounds: opts.bounds,
        min: opts.min,
        max: opts.max,
        precision: tickOpts.precision,
        step: tickOpts.stepSize,
        count: tickOpts.count,
        maxDigits: this._maxDigits(),
        horizontal: this.isHorizontal(),
        minRotation: tickOpts.minRotation || 0,
        includeBounds: tickOpts.includeBounds !== false
      };
      const dataRange = this._range || this;
      const ticks = generateTicks$1(numericGeneratorOptions, dataRange);
      if (opts.bounds === "ticks") {
        _setMinAndMaxByKey(ticks, this, "value");
      }
      if (opts.reverse) {
        ticks.reverse();
        this.start = this.max;
        this.end = this.min;
      } else {
        this.start = this.min;
        this.end = this.max;
      }
      return ticks;
    }
    configure() {
      const ticks = this.ticks;
      let start = this.min;
      let end = this.max;
      super.configure();
      if (this.options.offset && ticks.length) {
        const offset = (end - start) / Math.max(ticks.length - 1, 1) / 2;
        start -= offset;
        end += offset;
      }
      this._startValue = start;
      this._endValue = end;
      this._valueRange = end - start;
    }
    getLabelForValue(value) {
      return formatNumber(value, this.chart.options.locale, this.options.ticks.format);
    }
  };
  var LinearScale = class extends LinearScaleBase {
    determineDataLimits() {
      const { min, max } = this.getMinMax(true);
      this.min = isNumberFinite(min) ? min : 0;
      this.max = isNumberFinite(max) ? max : 1;
      this.handleTickRangeOptions();
    }
    computeTickLimit() {
      const horizontal = this.isHorizontal();
      const length = horizontal ? this.width : this.height;
      const minRotation = toRadians(this.options.ticks.minRotation);
      const ratio = (horizontal ? Math.sin(minRotation) : Math.cos(minRotation)) || 1e-3;
      const tickFont = this._resolveTickFontOptions(0);
      return Math.ceil(length / Math.min(40, tickFont.lineHeight / ratio));
    }
    getPixelForValue(value) {
      return value === null ? NaN : this.getPixelForDecimal((value - this._startValue) / this._valueRange);
    }
    getValueForPixel(pixel) {
      return this._startValue + this.getDecimalForPixel(pixel) * this._valueRange;
    }
  };
  LinearScale.id = "linear";
  LinearScale.defaults = {
    ticks: {
      callback: Ticks.formatters.numeric
    }
  };
  function isMajor(tickVal) {
    const remain = tickVal / Math.pow(10, Math.floor(log10(tickVal)));
    return remain === 1;
  }
  function generateTicks(generationOptions, dataRange) {
    const endExp = Math.floor(log10(dataRange.max));
    const endSignificand = Math.ceil(dataRange.max / Math.pow(10, endExp));
    const ticks = [];
    let tickVal = finiteOrDefault(generationOptions.min, Math.pow(10, Math.floor(log10(dataRange.min))));
    let exp = Math.floor(log10(tickVal));
    let significand = Math.floor(tickVal / Math.pow(10, exp));
    let precision = exp < 0 ? Math.pow(10, Math.abs(exp)) : 1;
    do {
      ticks.push({ value: tickVal, major: isMajor(tickVal) });
      ++significand;
      if (significand === 10) {
        significand = 1;
        ++exp;
        precision = exp >= 0 ? 1 : precision;
      }
      tickVal = Math.round(significand * Math.pow(10, exp) * precision) / precision;
    } while (exp < endExp || exp === endExp && significand < endSignificand);
    const lastTick = finiteOrDefault(generationOptions.max, tickVal);
    ticks.push({ value: lastTick, major: isMajor(tickVal) });
    return ticks;
  }
  var LogarithmicScale = class extends Scale {
    constructor(cfg) {
      super(cfg);
      this.start = void 0;
      this.end = void 0;
      this._startValue = void 0;
      this._valueRange = 0;
    }
    parse(raw, index) {
      const value = LinearScaleBase.prototype.parse.apply(this, [raw, index]);
      if (value === 0) {
        this._zero = true;
        return void 0;
      }
      return isNumberFinite(value) && value > 0 ? value : null;
    }
    determineDataLimits() {
      const { min, max } = this.getMinMax(true);
      this.min = isNumberFinite(min) ? Math.max(0, min) : null;
      this.max = isNumberFinite(max) ? Math.max(0, max) : null;
      if (this.options.beginAtZero) {
        this._zero = true;
      }
      this.handleTickRangeOptions();
    }
    handleTickRangeOptions() {
      const { minDefined, maxDefined } = this.getUserBounds();
      let min = this.min;
      let max = this.max;
      const setMin = (v) => min = minDefined ? min : v;
      const setMax = (v) => max = maxDefined ? max : v;
      const exp = (v, m) => Math.pow(10, Math.floor(log10(v)) + m);
      if (min === max) {
        if (min <= 0) {
          setMin(1);
          setMax(10);
        } else {
          setMin(exp(min, -1));
          setMax(exp(max, 1));
        }
      }
      if (min <= 0) {
        setMin(exp(max, -1));
      }
      if (max <= 0) {
        setMax(exp(min, 1));
      }
      if (this._zero && this.min !== this._suggestedMin && min === exp(this.min, 0)) {
        setMin(exp(min, -1));
      }
      this.min = min;
      this.max = max;
    }
    buildTicks() {
      const opts = this.options;
      const generationOptions = {
        min: this._userMin,
        max: this._userMax
      };
      const ticks = generateTicks(generationOptions, this);
      if (opts.bounds === "ticks") {
        _setMinAndMaxByKey(ticks, this, "value");
      }
      if (opts.reverse) {
        ticks.reverse();
        this.start = this.max;
        this.end = this.min;
      } else {
        this.start = this.min;
        this.end = this.max;
      }
      return ticks;
    }
    getLabelForValue(value) {
      return value === void 0 ? "0" : formatNumber(value, this.chart.options.locale, this.options.ticks.format);
    }
    configure() {
      const start = this.min;
      super.configure();
      this._startValue = log10(start);
      this._valueRange = log10(this.max) - log10(start);
    }
    getPixelForValue(value) {
      if (value === void 0 || value === 0) {
        value = this.min;
      }
      if (value === null || isNaN(value)) {
        return NaN;
      }
      return this.getPixelForDecimal(value === this.min ? 0 : (log10(value) - this._startValue) / this._valueRange);
    }
    getValueForPixel(pixel) {
      const decimal = this.getDecimalForPixel(pixel);
      return Math.pow(10, this._startValue + decimal * this._valueRange);
    }
  };
  LogarithmicScale.id = "logarithmic";
  LogarithmicScale.defaults = {
    ticks: {
      callback: Ticks.formatters.logarithmic,
      major: {
        enabled: true
      }
    }
  };
  function getTickBackdropHeight(opts) {
    const tickOpts = opts.ticks;
    if (tickOpts.display && opts.display) {
      const padding = toPadding(tickOpts.backdropPadding);
      return valueOrDefault(tickOpts.font && tickOpts.font.size, defaults.font.size) + padding.height;
    }
    return 0;
  }
  function measureLabelSize(ctx, font, label) {
    label = isArray(label) ? label : [label];
    return {
      w: _longestText(ctx, font.string, label),
      h: label.length * font.lineHeight
    };
  }
  function determineLimits(angle, pos, size, min, max) {
    if (angle === min || angle === max) {
      return {
        start: pos - size / 2,
        end: pos + size / 2
      };
    } else if (angle < min || angle > max) {
      return {
        start: pos - size,
        end: pos
      };
    }
    return {
      start: pos,
      end: pos + size
    };
  }
  function fitWithPointLabels(scale) {
    const orig = {
      l: scale.left + scale._padding.left,
      r: scale.right - scale._padding.right,
      t: scale.top + scale._padding.top,
      b: scale.bottom - scale._padding.bottom
    };
    const limits = Object.assign({}, orig);
    const labelSizes = [];
    const padding = [];
    const valueCount = scale._pointLabels.length;
    const pointLabelOpts = scale.options.pointLabels;
    const additionalAngle = pointLabelOpts.centerPointLabels ? PI / valueCount : 0;
    for (let i = 0; i < valueCount; i++) {
      const opts = pointLabelOpts.setContext(scale.getPointLabelContext(i));
      padding[i] = opts.padding;
      const pointPosition = scale.getPointPosition(i, scale.drawingArea + padding[i], additionalAngle);
      const plFont = toFont(opts.font);
      const textSize = measureLabelSize(scale.ctx, plFont, scale._pointLabels[i]);
      labelSizes[i] = textSize;
      const angleRadians = _normalizeAngle(scale.getIndexAngle(i) + additionalAngle);
      const angle = Math.round(toDegrees(angleRadians));
      const hLimits = determineLimits(angle, pointPosition.x, textSize.w, 0, 180);
      const vLimits = determineLimits(angle, pointPosition.y, textSize.h, 90, 270);
      updateLimits(limits, orig, angleRadians, hLimits, vLimits);
    }
    scale.setCenterPoint(orig.l - limits.l, limits.r - orig.r, orig.t - limits.t, limits.b - orig.b);
    scale._pointLabelItems = buildPointLabelItems(scale, labelSizes, padding);
  }
  function updateLimits(limits, orig, angle, hLimits, vLimits) {
    const sin = Math.abs(Math.sin(angle));
    const cos = Math.abs(Math.cos(angle));
    let x = 0;
    let y = 0;
    if (hLimits.start < orig.l) {
      x = (orig.l - hLimits.start) / sin;
      limits.l = Math.min(limits.l, orig.l - x);
    } else if (hLimits.end > orig.r) {
      x = (hLimits.end - orig.r) / sin;
      limits.r = Math.max(limits.r, orig.r + x);
    }
    if (vLimits.start < orig.t) {
      y = (orig.t - vLimits.start) / cos;
      limits.t = Math.min(limits.t, orig.t - y);
    } else if (vLimits.end > orig.b) {
      y = (vLimits.end - orig.b) / cos;
      limits.b = Math.max(limits.b, orig.b + y);
    }
  }
  function buildPointLabelItems(scale, labelSizes, padding) {
    const items = [];
    const valueCount = scale._pointLabels.length;
    const opts = scale.options;
    const extra = getTickBackdropHeight(opts) / 2;
    const outerDistance = scale.drawingArea;
    const additionalAngle = opts.pointLabels.centerPointLabels ? PI / valueCount : 0;
    for (let i = 0; i < valueCount; i++) {
      const pointLabelPosition = scale.getPointPosition(i, outerDistance + extra + padding[i], additionalAngle);
      const angle = Math.round(toDegrees(_normalizeAngle(pointLabelPosition.angle + HALF_PI)));
      const size = labelSizes[i];
      const y = yForAngle(pointLabelPosition.y, size.h, angle);
      const textAlign = getTextAlignForAngle(angle);
      const left = leftForTextAlign(pointLabelPosition.x, size.w, textAlign);
      items.push({
        x: pointLabelPosition.x,
        y,
        textAlign,
        left,
        top: y,
        right: left + size.w,
        bottom: y + size.h
      });
    }
    return items;
  }
  function getTextAlignForAngle(angle) {
    if (angle === 0 || angle === 180) {
      return "center";
    } else if (angle < 180) {
      return "left";
    }
    return "right";
  }
  function leftForTextAlign(x, w, align) {
    if (align === "right") {
      x -= w;
    } else if (align === "center") {
      x -= w / 2;
    }
    return x;
  }
  function yForAngle(y, h, angle) {
    if (angle === 90 || angle === 270) {
      y -= h / 2;
    } else if (angle > 270 || angle < 90) {
      y -= h;
    }
    return y;
  }
  function drawPointLabels(scale, labelCount) {
    const { ctx, options: { pointLabels } } = scale;
    for (let i = labelCount - 1; i >= 0; i--) {
      const optsAtIndex = pointLabels.setContext(scale.getPointLabelContext(i));
      const plFont = toFont(optsAtIndex.font);
      const { x, y, textAlign, left, top, right, bottom } = scale._pointLabelItems[i];
      const { backdropColor } = optsAtIndex;
      if (!isNullOrUndef(backdropColor)) {
        const padding = toPadding(optsAtIndex.backdropPadding);
        ctx.fillStyle = backdropColor;
        ctx.fillRect(left - padding.left, top - padding.top, right - left + padding.width, bottom - top + padding.height);
      }
      renderText(ctx, scale._pointLabels[i], x, y + plFont.lineHeight / 2, plFont, {
        color: optsAtIndex.color,
        textAlign,
        textBaseline: "middle"
      });
    }
  }
  function pathRadiusLine(scale, radius, circular, labelCount) {
    const { ctx } = scale;
    if (circular) {
      ctx.arc(scale.xCenter, scale.yCenter, radius, 0, TAU);
    } else {
      let pointPosition = scale.getPointPosition(0, radius);
      ctx.moveTo(pointPosition.x, pointPosition.y);
      for (let i = 1; i < labelCount; i++) {
        pointPosition = scale.getPointPosition(i, radius);
        ctx.lineTo(pointPosition.x, pointPosition.y);
      }
    }
  }
  function drawRadiusLine(scale, gridLineOpts, radius, labelCount) {
    const ctx = scale.ctx;
    const circular = gridLineOpts.circular;
    const { color: color2, lineWidth } = gridLineOpts;
    if (!circular && !labelCount || !color2 || !lineWidth || radius < 0) {
      return;
    }
    ctx.save();
    ctx.strokeStyle = color2;
    ctx.lineWidth = lineWidth;
    ctx.setLineDash(gridLineOpts.borderDash);
    ctx.lineDashOffset = gridLineOpts.borderDashOffset;
    ctx.beginPath();
    pathRadiusLine(scale, radius, circular, labelCount);
    ctx.closePath();
    ctx.stroke();
    ctx.restore();
  }
  function createPointLabelContext(parent, index, label) {
    return createContext(parent, {
      label,
      index,
      type: "pointLabel"
    });
  }
  var RadialLinearScale = class extends LinearScaleBase {
    constructor(cfg) {
      super(cfg);
      this.xCenter = void 0;
      this.yCenter = void 0;
      this.drawingArea = void 0;
      this._pointLabels = [];
      this._pointLabelItems = [];
    }
    setDimensions() {
      const padding = this._padding = toPadding(getTickBackdropHeight(this.options) / 2);
      const w = this.width = this.maxWidth - padding.width;
      const h = this.height = this.maxHeight - padding.height;
      this.xCenter = Math.floor(this.left + w / 2 + padding.left);
      this.yCenter = Math.floor(this.top + h / 2 + padding.top);
      this.drawingArea = Math.floor(Math.min(w, h) / 2);
    }
    determineDataLimits() {
      const { min, max } = this.getMinMax(false);
      this.min = isNumberFinite(min) && !isNaN(min) ? min : 0;
      this.max = isNumberFinite(max) && !isNaN(max) ? max : 0;
      this.handleTickRangeOptions();
    }
    computeTickLimit() {
      return Math.ceil(this.drawingArea / getTickBackdropHeight(this.options));
    }
    generateTickLabels(ticks) {
      LinearScaleBase.prototype.generateTickLabels.call(this, ticks);
      this._pointLabels = this.getLabels().map((value, index) => {
        const label = callback(this.options.pointLabels.callback, [value, index], this);
        return label || label === 0 ? label : "";
      }).filter((v, i) => this.chart.getDataVisibility(i));
    }
    fit() {
      const opts = this.options;
      if (opts.display && opts.pointLabels.display) {
        fitWithPointLabels(this);
      } else {
        this.setCenterPoint(0, 0, 0, 0);
      }
    }
    setCenterPoint(leftMovement, rightMovement, topMovement, bottomMovement) {
      this.xCenter += Math.floor((leftMovement - rightMovement) / 2);
      this.yCenter += Math.floor((topMovement - bottomMovement) / 2);
      this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(leftMovement, rightMovement, topMovement, bottomMovement));
    }
    getIndexAngle(index) {
      const angleMultiplier = TAU / (this._pointLabels.length || 1);
      const startAngle = this.options.startAngle || 0;
      return _normalizeAngle(index * angleMultiplier + toRadians(startAngle));
    }
    getDistanceFromCenterForValue(value) {
      if (isNullOrUndef(value)) {
        return NaN;
      }
      const scalingFactor = this.drawingArea / (this.max - this.min);
      if (this.options.reverse) {
        return (this.max - value) * scalingFactor;
      }
      return (value - this.min) * scalingFactor;
    }
    getValueForDistanceFromCenter(distance) {
      if (isNullOrUndef(distance)) {
        return NaN;
      }
      const scaledDistance = distance / (this.drawingArea / (this.max - this.min));
      return this.options.reverse ? this.max - scaledDistance : this.min + scaledDistance;
    }
    getPointLabelContext(index) {
      const pointLabels = this._pointLabels || [];
      if (index >= 0 && index < pointLabels.length) {
        const pointLabel = pointLabels[index];
        return createPointLabelContext(this.getContext(), index, pointLabel);
      }
    }
    getPointPosition(index, distanceFromCenter, additionalAngle = 0) {
      const angle = this.getIndexAngle(index) - HALF_PI + additionalAngle;
      return {
        x: Math.cos(angle) * distanceFromCenter + this.xCenter,
        y: Math.sin(angle) * distanceFromCenter + this.yCenter,
        angle
      };
    }
    getPointPositionForValue(index, value) {
      return this.getPointPosition(index, this.getDistanceFromCenterForValue(value));
    }
    getBasePosition(index) {
      return this.getPointPositionForValue(index || 0, this.getBaseValue());
    }
    getPointLabelPosition(index) {
      const { left, top, right, bottom } = this._pointLabelItems[index];
      return {
        left,
        top,
        right,
        bottom
      };
    }
    drawBackground() {
      const { backgroundColor, grid: { circular } } = this.options;
      if (backgroundColor) {
        const ctx = this.ctx;
        ctx.save();
        ctx.beginPath();
        pathRadiusLine(this, this.getDistanceFromCenterForValue(this._endValue), circular, this._pointLabels.length);
        ctx.closePath();
        ctx.fillStyle = backgroundColor;
        ctx.fill();
        ctx.restore();
      }
    }
    drawGrid() {
      const ctx = this.ctx;
      const opts = this.options;
      const { angleLines, grid } = opts;
      const labelCount = this._pointLabels.length;
      let i, offset, position;
      if (opts.pointLabels.display) {
        drawPointLabels(this, labelCount);
      }
      if (grid.display) {
        this.ticks.forEach((tick, index) => {
          if (index !== 0) {
            offset = this.getDistanceFromCenterForValue(tick.value);
            const optsAtIndex = grid.setContext(this.getContext(index - 1));
            drawRadiusLine(this, optsAtIndex, offset, labelCount);
          }
        });
      }
      if (angleLines.display) {
        ctx.save();
        for (i = labelCount - 1; i >= 0; i--) {
          const optsAtIndex = angleLines.setContext(this.getPointLabelContext(i));
          const { color: color2, lineWidth } = optsAtIndex;
          if (!lineWidth || !color2) {
            continue;
          }
          ctx.lineWidth = lineWidth;
          ctx.strokeStyle = color2;
          ctx.setLineDash(optsAtIndex.borderDash);
          ctx.lineDashOffset = optsAtIndex.borderDashOffset;
          offset = this.getDistanceFromCenterForValue(opts.ticks.reverse ? this.min : this.max);
          position = this.getPointPosition(i, offset);
          ctx.beginPath();
          ctx.moveTo(this.xCenter, this.yCenter);
          ctx.lineTo(position.x, position.y);
          ctx.stroke();
        }
        ctx.restore();
      }
    }
    drawBorder() {
    }
    drawLabels() {
      const ctx = this.ctx;
      const opts = this.options;
      const tickOpts = opts.ticks;
      if (!tickOpts.display) {
        return;
      }
      const startAngle = this.getIndexAngle(0);
      let offset, width;
      ctx.save();
      ctx.translate(this.xCenter, this.yCenter);
      ctx.rotate(startAngle);
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      this.ticks.forEach((tick, index) => {
        if (index === 0 && !opts.reverse) {
          return;
        }
        const optsAtIndex = tickOpts.setContext(this.getContext(index));
        const tickFont = toFont(optsAtIndex.font);
        offset = this.getDistanceFromCenterForValue(this.ticks[index].value);
        if (optsAtIndex.showLabelBackdrop) {
          ctx.font = tickFont.string;
          width = ctx.measureText(tick.label).width;
          ctx.fillStyle = optsAtIndex.backdropColor;
          const padding = toPadding(optsAtIndex.backdropPadding);
          ctx.fillRect(-width / 2 - padding.left, -offset - tickFont.size / 2 - padding.top, width + padding.width, tickFont.size + padding.height);
        }
        renderText(ctx, tick.label, 0, -offset, tickFont, {
          color: optsAtIndex.color
        });
      });
      ctx.restore();
    }
    drawTitle() {
    }
  };
  RadialLinearScale.id = "radialLinear";
  RadialLinearScale.defaults = {
    display: true,
    animate: true,
    position: "chartArea",
    angleLines: {
      display: true,
      lineWidth: 1,
      borderDash: [],
      borderDashOffset: 0
    },
    grid: {
      circular: false
    },
    startAngle: 0,
    ticks: {
      showLabelBackdrop: true,
      callback: Ticks.formatters.numeric
    },
    pointLabels: {
      backdropColor: void 0,
      backdropPadding: 2,
      display: true,
      font: {
        size: 10
      },
      callback(label) {
        return label;
      },
      padding: 5,
      centerPointLabels: false
    }
  };
  RadialLinearScale.defaultRoutes = {
    "angleLines.color": "borderColor",
    "pointLabels.color": "color",
    "ticks.color": "color"
  };
  RadialLinearScale.descriptors = {
    angleLines: {
      _fallback: "grid"
    }
  };
  var INTERVALS = {
    millisecond: { common: true, size: 1, steps: 1e3 },
    second: { common: true, size: 1e3, steps: 60 },
    minute: { common: true, size: 6e4, steps: 60 },
    hour: { common: true, size: 36e5, steps: 24 },
    day: { common: true, size: 864e5, steps: 30 },
    week: { common: false, size: 6048e5, steps: 4 },
    month: { common: true, size: 2628e6, steps: 12 },
    quarter: { common: false, size: 7884e6, steps: 4 },
    year: { common: true, size: 3154e7 }
  };
  var UNITS = Object.keys(INTERVALS);
  function sorter(a, b) {
    return a - b;
  }
  function parse(scale, input) {
    if (isNullOrUndef(input)) {
      return null;
    }
    const adapter = scale._adapter;
    const { parser, round: round2, isoWeekday } = scale._parseOpts;
    let value = input;
    if (typeof parser === "function") {
      value = parser(value);
    }
    if (!isNumberFinite(value)) {
      value = typeof parser === "string" ? adapter.parse(value, parser) : adapter.parse(value);
    }
    if (value === null) {
      return null;
    }
    if (round2) {
      value = round2 === "week" && (isNumber(isoWeekday) || isoWeekday === true) ? adapter.startOf(value, "isoWeek", isoWeekday) : adapter.startOf(value, round2);
    }
    return +value;
  }
  function determineUnitForAutoTicks(minUnit, min, max, capacity) {
    const ilen = UNITS.length;
    for (let i = UNITS.indexOf(minUnit); i < ilen - 1; ++i) {
      const interval = INTERVALS[UNITS[i]];
      const factor = interval.steps ? interval.steps : Number.MAX_SAFE_INTEGER;
      if (interval.common && Math.ceil((max - min) / (factor * interval.size)) <= capacity) {
        return UNITS[i];
      }
    }
    return UNITS[ilen - 1];
  }
  function determineUnitForFormatting(scale, numTicks, minUnit, min, max) {
    for (let i = UNITS.length - 1; i >= UNITS.indexOf(minUnit); i--) {
      const unit = UNITS[i];
      if (INTERVALS[unit].common && scale._adapter.diff(max, min, unit) >= numTicks - 1) {
        return unit;
      }
    }
    return UNITS[minUnit ? UNITS.indexOf(minUnit) : 0];
  }
  function determineMajorUnit(unit) {
    for (let i = UNITS.indexOf(unit) + 1, ilen = UNITS.length; i < ilen; ++i) {
      if (INTERVALS[UNITS[i]].common) {
        return UNITS[i];
      }
    }
  }
  function addTick(ticks, time, timestamps) {
    if (!timestamps) {
      ticks[time] = true;
    } else if (timestamps.length) {
      const { lo, hi } = _lookup(timestamps, time);
      const timestamp = timestamps[lo] >= time ? timestamps[lo] : timestamps[hi];
      ticks[timestamp] = true;
    }
  }
  function setMajorTicks(scale, ticks, map3, majorUnit) {
    const adapter = scale._adapter;
    const first = +adapter.startOf(ticks[0].value, majorUnit);
    const last = ticks[ticks.length - 1].value;
    let major, index;
    for (major = first; major <= last; major = +adapter.add(major, 1, majorUnit)) {
      index = map3[major];
      if (index >= 0) {
        ticks[index].major = true;
      }
    }
    return ticks;
  }
  function ticksFromTimestamps(scale, values, majorUnit) {
    const ticks = [];
    const map3 = {};
    const ilen = values.length;
    let i, value;
    for (i = 0; i < ilen; ++i) {
      value = values[i];
      map3[value] = i;
      ticks.push({
        value,
        major: false
      });
    }
    return ilen === 0 || !majorUnit ? ticks : setMajorTicks(scale, ticks, map3, majorUnit);
  }
  var TimeScale = class extends Scale {
    constructor(props) {
      super(props);
      this._cache = {
        data: [],
        labels: [],
        all: []
      };
      this._unit = "day";
      this._majorUnit = void 0;
      this._offsets = {};
      this._normalized = false;
      this._parseOpts = void 0;
    }
    init(scaleOpts, opts) {
      const time = scaleOpts.time || (scaleOpts.time = {});
      const adapter = this._adapter = new adapters._date(scaleOpts.adapters.date);
      mergeIf(time.displayFormats, adapter.formats());
      this._parseOpts = {
        parser: time.parser,
        round: time.round,
        isoWeekday: time.isoWeekday
      };
      super.init(scaleOpts);
      this._normalized = opts.normalized;
    }
    parse(raw, index) {
      if (raw === void 0) {
        return null;
      }
      return parse(this, raw);
    }
    beforeLayout() {
      super.beforeLayout();
      this._cache = {
        data: [],
        labels: [],
        all: []
      };
    }
    determineDataLimits() {
      const options = this.options;
      const adapter = this._adapter;
      const unit = options.time.unit || "day";
      let { min, max, minDefined, maxDefined } = this.getUserBounds();
      function _applyBounds(bounds) {
        if (!minDefined && !isNaN(bounds.min)) {
          min = Math.min(min, bounds.min);
        }
        if (!maxDefined && !isNaN(bounds.max)) {
          max = Math.max(max, bounds.max);
        }
      }
      if (!minDefined || !maxDefined) {
        _applyBounds(this._getLabelBounds());
        if (options.bounds !== "ticks" || options.ticks.source !== "labels") {
          _applyBounds(this.getMinMax(false));
        }
      }
      min = isNumberFinite(min) && !isNaN(min) ? min : +adapter.startOf(Date.now(), unit);
      max = isNumberFinite(max) && !isNaN(max) ? max : +adapter.endOf(Date.now(), unit) + 1;
      this.min = Math.min(min, max - 1);
      this.max = Math.max(min + 1, max);
    }
    _getLabelBounds() {
      const arr = this.getLabelTimestamps();
      let min = Number.POSITIVE_INFINITY;
      let max = Number.NEGATIVE_INFINITY;
      if (arr.length) {
        min = arr[0];
        max = arr[arr.length - 1];
      }
      return { min, max };
    }
    buildTicks() {
      const options = this.options;
      const timeOpts = options.time;
      const tickOpts = options.ticks;
      const timestamps = tickOpts.source === "labels" ? this.getLabelTimestamps() : this._generate();
      if (options.bounds === "ticks" && timestamps.length) {
        this.min = this._userMin || timestamps[0];
        this.max = this._userMax || timestamps[timestamps.length - 1];
      }
      const min = this.min;
      const max = this.max;
      const ticks = _filterBetween(timestamps, min, max);
      this._unit = timeOpts.unit || (tickOpts.autoSkip ? determineUnitForAutoTicks(timeOpts.minUnit, this.min, this.max, this._getLabelCapacity(min)) : determineUnitForFormatting(this, ticks.length, timeOpts.minUnit, this.min, this.max));
      this._majorUnit = !tickOpts.major.enabled || this._unit === "year" ? void 0 : determineMajorUnit(this._unit);
      this.initOffsets(timestamps);
      if (options.reverse) {
        ticks.reverse();
      }
      return ticksFromTimestamps(this, ticks, this._majorUnit);
    }
    initOffsets(timestamps) {
      let start = 0;
      let end = 0;
      let first, last;
      if (this.options.offset && timestamps.length) {
        first = this.getDecimalForValue(timestamps[0]);
        if (timestamps.length === 1) {
          start = 1 - first;
        } else {
          start = (this.getDecimalForValue(timestamps[1]) - first) / 2;
        }
        last = this.getDecimalForValue(timestamps[timestamps.length - 1]);
        if (timestamps.length === 1) {
          end = last;
        } else {
          end = (last - this.getDecimalForValue(timestamps[timestamps.length - 2])) / 2;
        }
      }
      const limit = timestamps.length < 3 ? 0.5 : 0.25;
      start = _limitValue(start, 0, limit);
      end = _limitValue(end, 0, limit);
      this._offsets = { start, end, factor: 1 / (start + 1 + end) };
    }
    _generate() {
      const adapter = this._adapter;
      const min = this.min;
      const max = this.max;
      const options = this.options;
      const timeOpts = options.time;
      const minor = timeOpts.unit || determineUnitForAutoTicks(timeOpts.minUnit, min, max, this._getLabelCapacity(min));
      const stepSize = valueOrDefault(timeOpts.stepSize, 1);
      const weekday = minor === "week" ? timeOpts.isoWeekday : false;
      const hasWeekday = isNumber(weekday) || weekday === true;
      const ticks = {};
      let first = min;
      let time, count;
      if (hasWeekday) {
        first = +adapter.startOf(first, "isoWeek", weekday);
      }
      first = +adapter.startOf(first, hasWeekday ? "day" : minor);
      if (adapter.diff(max, min, minor) > 1e5 * stepSize) {
        throw new Error(min + " and " + max + " are too far apart with stepSize of " + stepSize + " " + minor);
      }
      const timestamps = options.ticks.source === "data" && this.getDataTimestamps();
      for (time = first, count = 0; time < max; time = +adapter.add(time, stepSize, minor), count++) {
        addTick(ticks, time, timestamps);
      }
      if (time === max || options.bounds === "ticks" || count === 1) {
        addTick(ticks, time, timestamps);
      }
      return Object.keys(ticks).sort((a, b) => a - b).map((x) => +x);
    }
    getLabelForValue(value) {
      const adapter = this._adapter;
      const timeOpts = this.options.time;
      if (timeOpts.tooltipFormat) {
        return adapter.format(value, timeOpts.tooltipFormat);
      }
      return adapter.format(value, timeOpts.displayFormats.datetime);
    }
    _tickFormatFunction(time, index, ticks, format) {
      const options = this.options;
      const formats = options.time.displayFormats;
      const unit = this._unit;
      const majorUnit = this._majorUnit;
      const minorFormat = unit && formats[unit];
      const majorFormat = majorUnit && formats[majorUnit];
      const tick = ticks[index];
      const major = majorUnit && majorFormat && tick && tick.major;
      const label = this._adapter.format(time, format || (major ? majorFormat : minorFormat));
      const formatter = options.ticks.callback;
      return formatter ? callback(formatter, [label, index, ticks], this) : label;
    }
    generateTickLabels(ticks) {
      let i, ilen, tick;
      for (i = 0, ilen = ticks.length; i < ilen; ++i) {
        tick = ticks[i];
        tick.label = this._tickFormatFunction(tick.value, i, ticks);
      }
    }
    getDecimalForValue(value) {
      return value === null ? NaN : (value - this.min) / (this.max - this.min);
    }
    getPixelForValue(value) {
      const offsets = this._offsets;
      const pos = this.getDecimalForValue(value);
      return this.getPixelForDecimal((offsets.start + pos) * offsets.factor);
    }
    getValueForPixel(pixel) {
      const offsets = this._offsets;
      const pos = this.getDecimalForPixel(pixel) / offsets.factor - offsets.end;
      return this.min + pos * (this.max - this.min);
    }
    _getLabelSize(label) {
      const ticksOpts = this.options.ticks;
      const tickLabelWidth = this.ctx.measureText(label).width;
      const angle = toRadians(this.isHorizontal() ? ticksOpts.maxRotation : ticksOpts.minRotation);
      const cosRotation = Math.cos(angle);
      const sinRotation = Math.sin(angle);
      const tickFontSize = this._resolveTickFontOptions(0).size;
      return {
        w: tickLabelWidth * cosRotation + tickFontSize * sinRotation,
        h: tickLabelWidth * sinRotation + tickFontSize * cosRotation
      };
    }
    _getLabelCapacity(exampleTime) {
      const timeOpts = this.options.time;
      const displayFormats = timeOpts.displayFormats;
      const format = displayFormats[timeOpts.unit] || displayFormats.millisecond;
      const exampleLabel = this._tickFormatFunction(exampleTime, 0, ticksFromTimestamps(this, [exampleTime], this._majorUnit), format);
      const size = this._getLabelSize(exampleLabel);
      const capacity = Math.floor(this.isHorizontal() ? this.width / size.w : this.height / size.h) - 1;
      return capacity > 0 ? capacity : 1;
    }
    getDataTimestamps() {
      let timestamps = this._cache.data || [];
      let i, ilen;
      if (timestamps.length) {
        return timestamps;
      }
      const metas = this.getMatchingVisibleMetas();
      if (this._normalized && metas.length) {
        return this._cache.data = metas[0].controller.getAllParsedValues(this);
      }
      for (i = 0, ilen = metas.length; i < ilen; ++i) {
        timestamps = timestamps.concat(metas[i].controller.getAllParsedValues(this));
      }
      return this._cache.data = this.normalize(timestamps);
    }
    getLabelTimestamps() {
      const timestamps = this._cache.labels || [];
      let i, ilen;
      if (timestamps.length) {
        return timestamps;
      }
      const labels = this.getLabels();
      for (i = 0, ilen = labels.length; i < ilen; ++i) {
        timestamps.push(parse(this, labels[i]));
      }
      return this._cache.labels = this._normalized ? timestamps : this.normalize(timestamps);
    }
    normalize(values) {
      return _arrayUnique(values.sort(sorter));
    }
  };
  TimeScale.id = "time";
  TimeScale.defaults = {
    bounds: "data",
    adapters: {},
    time: {
      parser: false,
      unit: false,
      round: false,
      isoWeekday: false,
      minUnit: "millisecond",
      displayFormats: {}
    },
    ticks: {
      source: "auto",
      major: {
        enabled: false
      }
    }
  };
  function interpolate(table, val, reverse) {
    let lo = 0;
    let hi = table.length - 1;
    let prevSource, nextSource, prevTarget, nextTarget;
    if (reverse) {
      if (val >= table[lo].pos && val <= table[hi].pos) {
        ({ lo, hi } = _lookupByKey(table, "pos", val));
      }
      ({ pos: prevSource, time: prevTarget } = table[lo]);
      ({ pos: nextSource, time: nextTarget } = table[hi]);
    } else {
      if (val >= table[lo].time && val <= table[hi].time) {
        ({ lo, hi } = _lookupByKey(table, "time", val));
      }
      ({ time: prevSource, pos: prevTarget } = table[lo]);
      ({ time: nextSource, pos: nextTarget } = table[hi]);
    }
    const span = nextSource - prevSource;
    return span ? prevTarget + (nextTarget - prevTarget) * (val - prevSource) / span : prevTarget;
  }
  var TimeSeriesScale = class extends TimeScale {
    constructor(props) {
      super(props);
      this._table = [];
      this._minPos = void 0;
      this._tableRange = void 0;
    }
    initOffsets() {
      const timestamps = this._getTimestampsForTable();
      const table = this._table = this.buildLookupTable(timestamps);
      this._minPos = interpolate(table, this.min);
      this._tableRange = interpolate(table, this.max) - this._minPos;
      super.initOffsets(timestamps);
    }
    buildLookupTable(timestamps) {
      const { min, max } = this;
      const items = [];
      const table = [];
      let i, ilen, prev, curr, next;
      for (i = 0, ilen = timestamps.length; i < ilen; ++i) {
        curr = timestamps[i];
        if (curr >= min && curr <= max) {
          items.push(curr);
        }
      }
      if (items.length < 2) {
        return [
          { time: min, pos: 0 },
          { time: max, pos: 1 }
        ];
      }
      for (i = 0, ilen = items.length; i < ilen; ++i) {
        next = items[i + 1];
        prev = items[i - 1];
        curr = items[i];
        if (Math.round((next + prev) / 2) !== curr) {
          table.push({ time: curr, pos: i / (ilen - 1) });
        }
      }
      return table;
    }
    _getTimestampsForTable() {
      let timestamps = this._cache.all || [];
      if (timestamps.length) {
        return timestamps;
      }
      const data = this.getDataTimestamps();
      const label = this.getLabelTimestamps();
      if (data.length && label.length) {
        timestamps = this.normalize(data.concat(label));
      } else {
        timestamps = data.length ? data : label;
      }
      timestamps = this._cache.all = timestamps;
      return timestamps;
    }
    getDecimalForValue(value) {
      return (interpolate(this._table, value) - this._minPos) / this._tableRange;
    }
    getValueForPixel(pixel) {
      const offsets = this._offsets;
      const decimal = this.getDecimalForPixel(pixel) / offsets.factor - offsets.end;
      return interpolate(this._table, decimal * this._tableRange + this._minPos, true);
    }
  };
  TimeSeriesScale.id = "timeseries";
  TimeSeriesScale.defaults = TimeScale.defaults;
  var scales = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale
  });
  var registerables = [
    controllers,
    elements,
    plugins,
    scales
  ];

  // node_modules/chart.js/auto/auto.esm.js
  Chart.register(...registerables);
  var auto_esm_default = Chart;

  // node_modules/chartjs-adapter-luxon/dist/chartjs-adapter-luxon.esm.js
  var import_luxon = __toModule(require_luxon());
  var FORMATS = {
    datetime: import_luxon.DateTime.DATETIME_MED_WITH_SECONDS,
    millisecond: "h:mm:ss.SSS a",
    second: import_luxon.DateTime.TIME_WITH_SECONDS,
    minute: import_luxon.DateTime.TIME_SIMPLE,
    hour: { hour: "numeric" },
    day: { day: "numeric", month: "short" },
    week: "DD",
    month: { month: "short", year: "numeric" },
    quarter: "'Q'q - yyyy",
    year: { year: "numeric" }
  };
  adapters._date.override({
    _id: "luxon",
    _create: function(time) {
      return import_luxon.DateTime.fromMillis(time, this.options);
    },
    formats: function() {
      return FORMATS;
    },
    parse: function(value, format) {
      const options = this.options;
      if (value === null || typeof value === "undefined") {
        return null;
      }
      const type = typeof value;
      if (type === "number") {
        value = this._create(value);
      } else if (type === "string") {
        if (typeof format === "string") {
          value = import_luxon.DateTime.fromFormat(value, format, options);
        } else {
          value = import_luxon.DateTime.fromISO(value, options);
        }
      } else if (value instanceof Date) {
        value = import_luxon.DateTime.fromJSDate(value, options);
      } else if (type === "object" && !(value instanceof import_luxon.DateTime)) {
        value = import_luxon.DateTime.fromObject(value);
      }
      return value.isValid ? value.valueOf() : null;
    },
    format: function(time, format) {
      const datetime = this._create(time);
      return typeof format === "string" ? datetime.toFormat(format, this.options) : datetime.toLocaleString(format);
    },
    add: function(time, amount, unit) {
      const args = {};
      args[unit] = amount;
      return this._create(time).plus(args).valueOf();
    },
    diff: function(max, min, unit) {
      return this._create(max).diff(this._create(min)).as(unit).valueOf();
    },
    startOf: function(time, unit, weekday) {
      if (unit === "isoWeek") {
        weekday = Math.trunc(Math.min(Math.max(0, weekday), 6));
        const dateTime = this._create(time);
        return dateTime.minus({ days: (dateTime.weekday - weekday + 7) % 7 }).startOf("day").valueOf();
      }
      return unit ? this._create(time).startOf(unit).valueOf() : time;
    },
    endOf: function(time, unit) {
      return this._create(time).endOf(unit).valueOf();
    }
  });

  // node_modules/chartjs-plugin-streaming/dist/chartjs-plugin-streaming.esm.js
  function clamp(value, lower, upper) {
    return Math.min(Math.max(value, lower), upper);
  }
  function resolveOption(scale, key) {
    const realtimeOpts = scale.options.realtime;
    const streamingOpts = scale.chart.options.plugins.streaming;
    return valueOrDefault(realtimeOpts[key], streamingOpts[key]);
  }
  function getAxisMap(element, { x, y }, { xAxisID, yAxisID }) {
    const axisMap = {};
    each(x, (key) => {
      axisMap[key] = { axisId: xAxisID };
    });
    each(y, (key) => {
      axisMap[key] = { axisId: yAxisID };
    });
    return axisMap;
  }
  var cancelAnimFrame = function() {
    if (typeof window === "undefined") {
      return noop;
    }
    return window.cancelAnimationFrame;
  }();
  function startFrameRefreshTimer(context, func) {
    if (!context.frameRequestID) {
      const refresh = () => {
        const nextRefresh = context.nextRefresh || 0;
        const now = Date.now();
        if (nextRefresh <= now) {
          const newFrameRate = callback(func);
          const frameDuration = 1e3 / (Math.max(newFrameRate, 0) || 30);
          const newNextRefresh = context.nextRefresh + frameDuration || 0;
          context.nextRefresh = newNextRefresh > now ? newNextRefresh : now + frameDuration;
        }
        context.frameRequestID = requestAnimFrame.call(window, refresh);
      };
      context.frameRequestID = requestAnimFrame.call(window, refresh);
    }
  }
  function stopFrameRefreshTimer(context) {
    const frameRequestID = context.frameRequestID;
    if (frameRequestID) {
      cancelAnimFrame.call(window, frameRequestID);
      delete context.frameRequestID;
    }
  }
  function stopDataRefreshTimer(context) {
    const refreshTimerID = context.refreshTimerID;
    if (refreshTimerID) {
      clearInterval(refreshTimerID);
      delete context.refreshTimerID;
      delete context.refreshInterval;
    }
  }
  function startDataRefreshTimer(context, func, interval) {
    if (!context.refreshTimerID) {
      context.refreshTimerID = setInterval(() => {
        const newInterval = callback(func);
        if (context.refreshInterval !== newInterval && !isNaN(newInterval)) {
          stopDataRefreshTimer(context);
          startDataRefreshTimer(context, func, newInterval);
        }
      }, interval || 0);
      context.refreshInterval = interval || 0;
    }
  }
  function scaleValue(scale, value, fallback) {
    value = typeof value === "number" ? value : scale.parse(value);
    return isNumberFinite(value) ? { value: scale.getPixelForValue(value), transitionable: true } : { value: fallback };
  }
  function updateBoxAnnotation(element, chart2, options) {
    const { scales: scales2, chartArea } = chart2;
    const { xScaleID, yScaleID, xMin, xMax, yMin, yMax } = options;
    const xScale = scales2[xScaleID];
    const yScale = scales2[yScaleID];
    const { top, left, bottom, right } = chartArea;
    const streaming = element.$streaming = {};
    if (xScale) {
      const min = scaleValue(xScale, xMin, left);
      const max = scaleValue(xScale, xMax, right);
      const reverse = min.value > max.value;
      if (min.transitionable) {
        streaming[reverse ? "x2" : "x"] = { axisId: xScaleID };
      }
      if (max.transitionable) {
        streaming[reverse ? "x" : "x2"] = { axisId: xScaleID };
      }
      if (min.transitionable !== max.transitionable) {
        streaming.width = { axisId: xScaleID, reverse: min.transitionable };
      }
    }
    if (yScale) {
      const min = scaleValue(yScale, yMin, top);
      const max = scaleValue(yScale, yMax, bottom);
      const reverse = min.value > max.value;
      if (min.transitionable) {
        streaming[reverse ? "y2" : "y"] = { axisId: yScaleID };
      }
      if (max.transitionable) {
        streaming[reverse ? "y" : "y2"] = { axisId: yScaleID };
      }
      if (min.transitionable !== max.transitionable) {
        streaming.height = { axisId: yScaleID, reverse: min.transitionable };
      }
    }
  }
  function updateLineAnnotation(element, chart2, options) {
    const { scales: scales2, chartArea } = chart2;
    const { scaleID, value } = options;
    const scale = scales2[scaleID];
    const { top, left, bottom, right } = chartArea;
    const streaming = element.$streaming = {};
    if (scale) {
      const isHorizontal = scale.isHorizontal();
      const pixel = scaleValue(scale, value);
      if (pixel.transitionable) {
        streaming[isHorizontal ? "x" : "y"] = { axisId: scaleID };
        streaming[isHorizontal ? "x2" : "y2"] = { axisId: scaleID };
      }
      return isHorizontal ? { top, bottom } : { left, right };
    }
    const { xScaleID, yScaleID, xMin, xMax, yMin, yMax } = options;
    const xScale = scales2[xScaleID];
    const yScale = scales2[yScaleID];
    const clip = {};
    if (xScale) {
      const min = scaleValue(xScale, xMin);
      const max = scaleValue(xScale, xMax);
      if (min.transitionable) {
        streaming.x = { axisId: xScaleID };
      } else {
        clip.left = left;
      }
      if (max.transitionable) {
        streaming.x2 = { axisId: xScaleID };
      } else {
        clip.right = right;
      }
    }
    if (yScale) {
      const min = scaleValue(yScale, yMin);
      const max = scaleValue(yScale, yMax);
      if (min.transitionable) {
        streaming.y = { axisId: yScaleID };
      } else {
        clip.top = top;
      }
      if (max.transitionable) {
        streaming.y2 = { axisId: yScaleID };
      } else {
        clip.bottom = bottom;
      }
    }
    return clip;
  }
  function updatePointAnnotation(element, chart2, options) {
    const scales2 = chart2.scales;
    const { xScaleID, yScaleID, xValue, yValue } = options;
    const xScale = scales2[xScaleID];
    const yScale = scales2[yScaleID];
    const streaming = element.$streaming = {};
    if (xScale) {
      const x = scaleValue(xScale, xValue);
      if (x.transitionable) {
        streaming.x = { axisId: xScaleID };
      }
    }
    if (yScale) {
      const y = scaleValue(yScale, yValue);
      if (y.transitionable) {
        streaming.y = { axisId: yScaleID };
      }
    }
  }
  function initAnnotationPlugin() {
    const BoxAnnotation = registry.getElement("boxAnnotation");
    const LineAnnotation = registry.getElement("lineAnnotation");
    const PointAnnotation = registry.getElement("pointAnnotation");
    const resolveBoxAnnotationProperties = BoxAnnotation.prototype.resolveElementProperties;
    const resolveLineAnnotationProperties = LineAnnotation.prototype.resolveElementProperties;
    const resolvePointAnnotationProperties = PointAnnotation.prototype.resolveElementProperties;
    BoxAnnotation.prototype.resolveElementProperties = function(chart2, options) {
      updateBoxAnnotation(this, chart2, options);
      return resolveBoxAnnotationProperties.call(this, chart2, options);
    };
    LineAnnotation.prototype.resolveElementProperties = function(chart2, options) {
      const chartArea = chart2.chartArea;
      chart2.chartArea = updateLineAnnotation(this, chart2, options);
      const properties = resolveLineAnnotationProperties.call(this, chart2, options);
      chart2.chartArea = chartArea;
      return properties;
    };
    PointAnnotation.prototype.resolveElementProperties = function(chart2, options) {
      updatePointAnnotation(this, chart2, options);
      return resolvePointAnnotationProperties.call(this, chart2, options);
    };
  }
  function attachChart$1(plugin, chart2) {
    const streaming = chart2.$streaming;
    if (streaming.annotationPlugin !== plugin) {
      const afterUpdate = plugin.afterUpdate;
      initAnnotationPlugin();
      streaming.annotationPlugin = plugin;
      plugin.afterUpdate = (_chart, args, options) => {
        const mode = args.mode;
        const animationOpts = options.animation;
        if (mode === "quiet") {
          options.animation = false;
        }
        afterUpdate.call(this, _chart, args, options);
        if (mode === "quiet") {
          options.animation = animationOpts;
        }
      };
    }
  }
  function getElements(chart2) {
    const plugin = chart2.$streaming.annotationPlugin;
    if (plugin) {
      const state = plugin._getState(chart2);
      return state && state.elements || [];
    }
    return [];
  }
  function detachChart$1(chart2) {
    delete chart2.$streaming.annotationPlugin;
  }
  var transitionKeys$1 = { x: ["x", "caretX"], y: ["y", "caretY"] };
  function update$1(...args) {
    const me = this;
    const element = me.getActiveElements()[0];
    if (element) {
      const meta = me._chart.getDatasetMeta(element.datasetIndex);
      me.$streaming = getAxisMap(me, transitionKeys$1, meta);
    } else {
      me.$streaming = {};
    }
    me.constructor.prototype.update.call(me, ...args);
  }
  var chartStates = new WeakMap();
  function getState(chart2) {
    let state = chartStates.get(chart2);
    if (!state) {
      state = { originalScaleOptions: {} };
      chartStates.set(chart2, state);
    }
    return state;
  }
  function removeState(chart2) {
    chartStates.delete(chart2);
  }
  function storeOriginalScaleOptions(chart2) {
    const { originalScaleOptions } = getState(chart2);
    const scales2 = chart2.scales;
    each(scales2, (scale) => {
      const id = scale.id;
      if (!originalScaleOptions[id]) {
        originalScaleOptions[id] = {
          duration: resolveOption(scale, "duration"),
          delay: resolveOption(scale, "delay")
        };
      }
    });
    each(originalScaleOptions, (opt, key) => {
      if (!scales2[key]) {
        delete originalScaleOptions[key];
      }
    });
    return originalScaleOptions;
  }
  function zoomRealTimeScale(scale, zoom, center, limits) {
    const { chart: chart2, axis } = scale;
    const { minDuration = 0, maxDuration = Infinity, minDelay = -Infinity, maxDelay = Infinity } = limits && limits[axis] || {};
    const realtimeOpts = scale.options.realtime;
    const duration = resolveOption(scale, "duration");
    const delay = resolveOption(scale, "delay");
    const newDuration = clamp(duration * (2 - zoom), minDuration, maxDuration);
    let maxPercent, newDelay;
    storeOriginalScaleOptions(chart2);
    if (scale.isHorizontal()) {
      maxPercent = (scale.right - center.x) / (scale.right - scale.left);
    } else {
      maxPercent = (scale.bottom - center.y) / (scale.bottom - scale.top);
    }
    newDelay = delay + maxPercent * (duration - newDuration);
    realtimeOpts.duration = newDuration;
    realtimeOpts.delay = clamp(newDelay, minDelay, maxDelay);
    return newDuration !== scale.max - scale.min;
  }
  function panRealTimeScale(scale, delta, limits) {
    const { chart: chart2, axis } = scale;
    const { minDelay = -Infinity, maxDelay = Infinity } = limits && limits[axis] || {};
    const delay = resolveOption(scale, "delay");
    const newDelay = delay + (scale.getValueForPixel(delta) - scale.getValueForPixel(0));
    storeOriginalScaleOptions(chart2);
    scale.options.realtime.delay = clamp(newDelay, minDelay, maxDelay);
    return true;
  }
  function resetRealTimeScaleOptions(chart2) {
    const originalScaleOptions = storeOriginalScaleOptions(chart2);
    each(chart2.scales, (scale) => {
      const realtimeOptions = scale.options.realtime;
      if (realtimeOptions) {
        const original = originalScaleOptions[scale.id];
        if (original) {
          realtimeOptions.duration = original.duration;
          realtimeOptions.delay = original.delay;
        } else {
          delete realtimeOptions.duration;
          delete realtimeOptions.delay;
        }
      }
    });
  }
  function initZoomPlugin(plugin) {
    plugin.zoomFunctions.realtime = zoomRealTimeScale;
    plugin.panFunctions.realtime = panRealTimeScale;
  }
  function attachChart(plugin, chart2) {
    const streaming = chart2.$streaming;
    if (streaming.zoomPlugin !== plugin) {
      const resetZoom = streaming.resetZoom = chart2.resetZoom;
      initZoomPlugin(plugin);
      chart2.resetZoom = (transition2) => {
        resetRealTimeScaleOptions(chart2);
        resetZoom(transition2);
      };
      streaming.zoomPlugin = plugin;
    }
  }
  function detachChart(chart2) {
    const streaming = chart2.$streaming;
    if (streaming.zoomPlugin) {
      chart2.resetZoom = streaming.resetZoom;
      removeState(chart2);
      delete streaming.resetZoom;
      delete streaming.zoomPlugin;
    }
  }
  var INTERVALS2 = {
    millisecond: {
      common: true,
      size: 1,
      steps: [1, 2, 5, 10, 20, 50, 100, 250, 500]
    },
    second: {
      common: true,
      size: 1e3,
      steps: [1, 2, 5, 10, 15, 30]
    },
    minute: {
      common: true,
      size: 6e4,
      steps: [1, 2, 5, 10, 15, 30]
    },
    hour: {
      common: true,
      size: 36e5,
      steps: [1, 2, 3, 6, 12]
    },
    day: {
      common: true,
      size: 864e5,
      steps: [1, 2, 5]
    },
    week: {
      common: false,
      size: 6048e5,
      steps: [1, 2, 3, 4]
    },
    month: {
      common: true,
      size: 2628e6,
      steps: [1, 2, 3]
    },
    quarter: {
      common: false,
      size: 7884e6,
      steps: [1, 2, 3, 4]
    },
    year: {
      common: true,
      size: 3154e7
    }
  };
  var UNITS2 = Object.keys(INTERVALS2);
  function determineStepSize(min, max, unit, capacity) {
    const range = max - min;
    const { size: milliseconds, steps } = INTERVALS2[unit];
    let factor;
    if (!steps) {
      return Math.ceil(range / (capacity * milliseconds));
    }
    for (let i = 0, ilen = steps.length; i < ilen; ++i) {
      factor = steps[i];
      if (Math.ceil(range / (milliseconds * factor)) <= capacity) {
        break;
      }
    }
    return factor;
  }
  function determineUnitForAutoTicks2(minUnit, min, max, capacity) {
    const range = max - min;
    const ilen = UNITS2.length;
    for (let i = UNITS2.indexOf(minUnit); i < ilen - 1; ++i) {
      const { common, size, steps } = INTERVALS2[UNITS2[i]];
      const factor = steps ? steps[steps.length - 1] : Number.MAX_SAFE_INTEGER;
      if (common && Math.ceil(range / (factor * size)) <= capacity) {
        return UNITS2[i];
      }
    }
    return UNITS2[ilen - 1];
  }
  function determineMajorUnit2(unit) {
    for (let i = UNITS2.indexOf(unit) + 1, ilen = UNITS2.length; i < ilen; ++i) {
      if (INTERVALS2[UNITS2[i]].common) {
        return UNITS2[i];
      }
    }
  }
  function addTick2(ticks, time, timestamps) {
    if (!timestamps) {
      ticks[time] = true;
    } else if (timestamps.length) {
      const { lo, hi } = _lookup(timestamps, time);
      const timestamp = timestamps[lo] >= time ? timestamps[lo] : timestamps[hi];
      ticks[timestamp] = true;
    }
  }
  var datasetPropertyKeys = [
    "pointBackgroundColor",
    "pointBorderColor",
    "pointBorderWidth",
    "pointRadius",
    "pointRotation",
    "pointStyle",
    "pointHitRadius",
    "pointHoverBackgroundColor",
    "pointHoverBorderColor",
    "pointHoverBorderWidth",
    "pointHoverRadius",
    "backgroundColor",
    "borderColor",
    "borderSkipped",
    "borderWidth",
    "hoverBackgroundColor",
    "hoverBorderColor",
    "hoverBorderWidth",
    "hoverRadius",
    "hitRadius",
    "radius",
    "rotation"
  ];
  function clean(scale) {
    const { chart: chart2, id, max } = scale;
    const duration = resolveOption(scale, "duration");
    const delay = resolveOption(scale, "delay");
    const ttl = resolveOption(scale, "ttl");
    const pause = resolveOption(scale, "pause");
    const min = Date.now() - (isNaN(ttl) ? duration + delay : ttl);
    let i, start, count, removalRange;
    each(chart2.data.datasets, (dataset, datasetIndex) => {
      const meta = chart2.getDatasetMeta(datasetIndex);
      const axis = id === meta.xAxisID && "x" || id === meta.yAxisID && "y";
      if (axis) {
        const controller = meta.controller;
        const data = dataset.data;
        const length = data.length;
        if (pause) {
          for (i = 0; i < length; ++i) {
            const point = controller.getParsed(i);
            if (point && !(point[axis] < max)) {
              break;
            }
          }
          start = i + 2;
        } else {
          start = 0;
        }
        for (i = start; i < length; ++i) {
          const point = controller.getParsed(i);
          if (!point || !(point[axis] <= min)) {
            break;
          }
        }
        count = i - start;
        if (isNaN(ttl)) {
          count = Math.max(count - 2, 0);
        }
        data.splice(start, count);
        each(datasetPropertyKeys, (key) => {
          if (isArray(dataset[key])) {
            dataset[key].splice(start, count);
          }
        });
        each(dataset.datalabels, (value) => {
          if (isArray(value)) {
            value.splice(start, count);
          }
        });
        if (typeof data[0] !== "object") {
          removalRange = {
            start,
            count
          };
        }
        each(chart2._active, (item, index) => {
          if (item.datasetIndex === datasetIndex && item.index >= start) {
            if (item.index >= start + count) {
              item.index -= count;
            } else {
              chart2._active.splice(index, 1);
            }
          }
        }, null, true);
      }
    });
    if (removalRange) {
      chart2.data.labels.splice(removalRange.start, removalRange.count);
    }
  }
  function transition(element, id, translate) {
    const animations = element.$animations || {};
    each(element.$streaming, (item, key) => {
      if (item.axisId === id) {
        const delta = item.reverse ? -translate : translate;
        const animation = animations[key];
        if (isNumberFinite(element[key])) {
          element[key] -= delta;
        }
        if (animation) {
          animation._from -= delta;
          animation._to -= delta;
        }
      }
    });
  }
  function scroll(scale) {
    const { chart: chart2, id, $realtime: realtime } = scale;
    const duration = resolveOption(scale, "duration");
    const delay = resolveOption(scale, "delay");
    const isHorizontal = scale.isHorizontal();
    const length = isHorizontal ? scale.width : scale.height;
    const now = Date.now();
    const tooltip = chart2.tooltip;
    const annotations = getElements(chart2);
    let offset = length * (now - realtime.head) / duration;
    if (isHorizontal === !!scale.options.reverse) {
      offset = -offset;
    }
    each(chart2.data.datasets, (dataset, datasetIndex) => {
      const meta = chart2.getDatasetMeta(datasetIndex);
      const { data: elements2 = [], dataset: element } = meta;
      for (let i = 0, ilen = elements2.length; i < ilen; ++i) {
        transition(elements2[i], id, offset);
      }
      if (element) {
        transition(element, id, offset);
        delete element._path;
      }
    });
    for (let i = 0, ilen = annotations.length; i < ilen; ++i) {
      transition(annotations[i], id, offset);
    }
    if (tooltip) {
      transition(tooltip, id, offset);
    }
    scale.max = now - delay;
    scale.min = scale.max - duration;
    realtime.head = now;
  }
  var RealTimeScale = class extends TimeScale {
    constructor(props) {
      super(props);
      this.$realtime = this.$realtime || {};
    }
    init(scaleOpts, opts) {
      const me = this;
      super.init(scaleOpts, opts);
      startDataRefreshTimer(me.$realtime, () => {
        const chart2 = me.chart;
        const onRefresh = resolveOption(me, "onRefresh");
        callback(onRefresh, [chart2], me);
        clean(me);
        chart2.update("quiet");
        return resolveOption(me, "refresh");
      });
    }
    update(maxWidth, maxHeight, margins) {
      const me = this;
      const { $realtime: realtime, options } = me;
      const { bounds, offset, ticks: ticksOpts } = options;
      const { autoSkip: autoSkip2, source, major: majorTicksOpts } = ticksOpts;
      const majorEnabled = majorTicksOpts.enabled;
      if (resolveOption(me, "pause")) {
        stopFrameRefreshTimer(realtime);
      } else {
        if (!realtime.frameRequestID) {
          realtime.head = Date.now();
        }
        startFrameRefreshTimer(realtime, () => {
          const chart2 = me.chart;
          const streaming = chart2.$streaming;
          scroll(me);
          if (streaming) {
            callback(streaming.render, [chart2]);
          }
          return resolveOption(me, "frameRate");
        });
      }
      options.bounds = void 0;
      options.offset = false;
      ticksOpts.autoSkip = false;
      ticksOpts.source = source === "auto" ? "" : source;
      majorTicksOpts.enabled = true;
      super.update(maxWidth, maxHeight, margins);
      options.bounds = bounds;
      options.offset = offset;
      ticksOpts.autoSkip = autoSkip2;
      ticksOpts.source = source;
      majorTicksOpts.enabled = majorEnabled;
    }
    buildTicks() {
      const me = this;
      const duration = resolveOption(me, "duration");
      const delay = resolveOption(me, "delay");
      const max = me.$realtime.head - delay;
      const min = max - duration;
      const maxArray = [1e15, max];
      const minArray = [-1e15, min];
      Object.defineProperty(me, "min", {
        get: () => minArray.shift(),
        set: noop
      });
      Object.defineProperty(me, "max", {
        get: () => maxArray.shift(),
        set: noop
      });
      const ticks = super.buildTicks();
      delete me.min;
      delete me.max;
      me.min = min;
      me.max = max;
      return ticks;
    }
    calculateLabelRotation() {
      const ticksOpts = this.options.ticks;
      const maxRotation = ticksOpts.maxRotation;
      ticksOpts.maxRotation = ticksOpts.minRotation || 0;
      super.calculateLabelRotation();
      ticksOpts.maxRotation = maxRotation;
    }
    fit() {
      const me = this;
      const options = me.options;
      super.fit();
      if (options.ticks.display && options.display && me.isHorizontal()) {
        me.paddingLeft = 3;
        me.paddingRight = 3;
        me._handleMargins();
      }
    }
    draw(chartArea) {
      const me = this;
      const { chart: chart2, ctx } = me;
      const area = me.isHorizontal() ? {
        left: chartArea.left,
        top: 0,
        right: chartArea.right,
        bottom: chart2.height
      } : {
        left: 0,
        top: chartArea.top,
        right: chart2.width,
        bottom: chartArea.bottom
      };
      me._gridLineItems = null;
      me._labelItems = null;
      clipArea(ctx, area);
      super.draw(chartArea);
      unclipArea(ctx);
    }
    destroy() {
      const realtime = this.$realtime;
      stopFrameRefreshTimer(realtime);
      stopDataRefreshTimer(realtime);
    }
    _generate() {
      const me = this;
      const adapter = me._adapter;
      const duration = resolveOption(me, "duration");
      const delay = resolveOption(me, "delay");
      const refresh = resolveOption(me, "refresh");
      const max = me.$realtime.head - delay;
      const min = max - duration;
      const capacity = me._getLabelCapacity(min);
      const { time: timeOpts, ticks: ticksOpts } = me.options;
      const minor = timeOpts.unit || determineUnitForAutoTicks2(timeOpts.minUnit, min, max, capacity);
      const major = determineMajorUnit2(minor);
      const stepSize = timeOpts.stepSize || determineStepSize(min, max, minor, capacity);
      const weekday = minor === "week" ? timeOpts.isoWeekday : false;
      const majorTicksEnabled = ticksOpts.major.enabled;
      const hasWeekday = isNumber(weekday) || weekday === true;
      const interval = INTERVALS2[minor];
      const ticks = {};
      let first = min;
      let time, count;
      if (hasWeekday) {
        first = +adapter.startOf(first, "isoWeek", weekday);
      }
      first = +adapter.startOf(first, hasWeekday ? "day" : minor);
      if (adapter.diff(max, min, minor) > 1e5 * stepSize) {
        throw new Error(min + " and " + max + " are too far apart with stepSize of " + stepSize + " " + minor);
      }
      time = first;
      if (majorTicksEnabled && major && !hasWeekday && !timeOpts.round) {
        time = +adapter.startOf(time, major);
        time = +adapter.add(time, ~~((first - time) / (interval.size * stepSize)) * stepSize, minor);
      }
      const timestamps = ticksOpts.source === "data" && me.getDataTimestamps();
      for (count = 0; time < max + refresh; time = +adapter.add(time, stepSize, minor), count++) {
        addTick2(ticks, time, timestamps);
      }
      if (time === max + refresh || count === 1) {
        addTick2(ticks, time, timestamps);
      }
      return Object.keys(ticks).sort((a, b) => a - b).map((x) => +x);
    }
  };
  RealTimeScale.id = "realtime";
  RealTimeScale.defaults = {
    bounds: "data",
    adapters: {},
    time: {
      parser: false,
      unit: false,
      round: false,
      isoWeekday: false,
      minUnit: "millisecond",
      displayFormats: {}
    },
    realtime: {},
    ticks: {
      autoSkip: false,
      source: "auto",
      major: {
        enabled: true
      }
    }
  };
  defaults.describe("scale.realtime", {
    _scriptable: (name) => name !== "onRefresh"
  });
  var version2 = "2.0.0";
  defaults.set("transitions", {
    quiet: {
      animation: {
        duration: 0
      }
    }
  });
  var transitionKeys = { x: ["x", "cp1x", "cp2x"], y: ["y", "cp1y", "cp2y"] };
  function update(mode) {
    const me = this;
    if (mode === "quiet") {
      each(me.data.datasets, (dataset, datasetIndex) => {
        const controller = me.getDatasetMeta(datasetIndex).controller;
        controller._setStyle = function(element, index, _mode, active) {
          DatasetController.prototype._setStyle.call(this, element, index, "quiet", active);
        };
      });
    }
    Chart.prototype.update.call(me, mode);
    if (mode === "quiet") {
      each(me.data.datasets, (dataset, datasetIndex) => {
        delete me.getDatasetMeta(datasetIndex).controller._setStyle;
      });
    }
  }
  function render(chart2) {
    const streaming = chart2.$streaming;
    chart2.render();
    if (streaming.lastMouseEvent) {
      setTimeout(() => {
        const lastMouseEvent = streaming.lastMouseEvent;
        if (lastMouseEvent) {
          chart2._eventHandler(lastMouseEvent);
        }
      }, 0);
    }
  }
  var StreamingPlugin = {
    id: "streaming",
    version: version2,
    beforeInit(chart2) {
      const streaming = chart2.$streaming = chart2.$streaming || { render };
      const canvas = streaming.canvas = chart2.canvas;
      const mouseEventListener = streaming.mouseEventListener = (event) => {
        const pos = getRelativePosition(event, chart2);
        streaming.lastMouseEvent = {
          type: "mousemove",
          chart: chart2,
          native: event,
          x: pos.x,
          y: pos.y
        };
      };
      canvas.addEventListener("mousedown", mouseEventListener);
      canvas.addEventListener("mouseup", mouseEventListener);
    },
    afterInit(chart2) {
      chart2.update = update;
    },
    beforeUpdate(chart2) {
      const { scales: scales2, elements: elements2 } = chart2.options;
      const tooltip = chart2.tooltip;
      each(scales2, ({ type }) => {
        if (type === "realtime") {
          elements2.line.capBezierPoints = false;
        }
      });
      if (tooltip) {
        tooltip.update = update$1;
      }
      try {
        const plugin = registry.getPlugin("annotation");
        attachChart$1(plugin, chart2);
      } catch (e) {
        detachChart$1(chart2);
      }
      try {
        const plugin = registry.getPlugin("zoom");
        attachChart(plugin, chart2);
      } catch (e) {
        detachChart(chart2);
      }
    },
    beforeDatasetUpdate(chart2, args) {
      const { meta, mode } = args;
      if (mode === "quiet") {
        const { controller, $animations } = meta;
        if ($animations && $animations.visible && $animations.visible._active) {
          controller.updateElement = noop;
          controller.updateSharedOptions = noop;
        }
      }
    },
    afterDatasetUpdate(chart2, args) {
      const { meta, mode } = args;
      const { data: elements2 = [], dataset: element, controller } = meta;
      for (let i = 0, ilen = elements2.length; i < ilen; ++i) {
        elements2[i].$streaming = getAxisMap(elements2[i], transitionKeys, meta);
      }
      if (element) {
        element.$streaming = getAxisMap(element, transitionKeys, meta);
      }
      if (mode === "quiet") {
        delete controller.updateElement;
        delete controller.updateSharedOptions;
      }
    },
    beforeDatasetDraw(chart2, args) {
      const { ctx, chartArea, width, height } = chart2;
      const { xAxisID, yAxisID, controller } = args.meta;
      const area = {
        left: 0,
        top: 0,
        right: width,
        bottom: height
      };
      if (xAxisID && controller.getScaleForId(xAxisID) instanceof RealTimeScale) {
        area.left = chartArea.left;
        area.right = chartArea.right;
      }
      if (yAxisID && controller.getScaleForId(yAxisID) instanceof RealTimeScale) {
        area.top = chartArea.top;
        area.bottom = chartArea.bottom;
      }
      clipArea(ctx, area);
    },
    afterDatasetDraw(chart2) {
      unclipArea(chart2.ctx);
    },
    beforeEvent(chart2, args) {
      const streaming = chart2.$streaming;
      const event = args.event;
      if (event.type === "mousemove") {
        streaming.lastMouseEvent = event;
      } else if (event.type === "mouseout") {
        delete streaming.lastMouseEvent;
      }
    },
    destroy(chart2) {
      const { scales: scales2, $streaming: streaming, tooltip } = chart2;
      const { canvas, mouseEventListener } = streaming;
      delete chart2.update;
      if (tooltip) {
        delete tooltip.update;
      }
      canvas.removeEventListener("mousedown", mouseEventListener);
      canvas.removeEventListener("mouseup", mouseEventListener);
      each(scales2, (scale) => {
        if (scale instanceof RealTimeScale) {
          scale.destroy();
        }
      });
    },
    defaults: {
      duration: 1e4,
      delay: 0,
      frameRate: 30,
      refresh: 1e3,
      onRefresh: null,
      pause: false,
      ttl: void 0
    },
    descriptors: {
      _scriptable: (name) => name !== "onRefresh"
    }
  };
  var registerables2 = [StreamingPlugin, RealTimeScale];
  var chartjs_plugin_streaming_esm_default = registerables2;

  // js/line_chart.js
  auto_esm_default.register(chartjs_plugin_streaming_esm_default);
  var line_chart_default = class {
    constructor(ctx) {
      const config = {
        type: "line",
        data: { datasets: [] },
        options: {
          datasets: {
            line: {
              tension: 0.2
            }
          },
          plugins: {
            title: {
              display: true,
              text: "OS Monitoring Application",
              font: { size: 20 }
            },
            streaming: {
              duration: 60 * 1e3,
              delay: 1500
            }
          },
          scales: {
            x: {
              type: "realtime",
              title: {
                display: true,
                text: "Time (HH:MM:SS)",
                font: { size: 13 }
              }
            }
          }
        }
      };
      this.chart = new auto_esm_default(ctx, config);
    }
    existingLabel(label) {
      return this.chart.data.datasets.find((dataset) => dataset.label === label);
    }
    dynamicColor() {
      var r = Math.floor(Math.random() * 255);
      var g = Math.floor(Math.random() * 255);
      var b = Math.floor(Math.random() * 255);
      return "rgba(" + r + "," + g + "," + b + ", 0.5)";
    }
    newPoints(label, value) {
      const dataset = this.existingLabel(label) || this.newLabel(label);
      dataset.data.push({ x: Date.now(), y: value });
      this.chart.update();
    }
    newLabel(label) {
      let colour = this.dynamicColor();
      const newDataset = { label, data: [], backgroundColor: colour, borderColor: colour };
      this.chart.data.datasets.push(newDataset);
      return newDataset;
    }
  };

  // js/user_socket.js
  var socket = new Socket("/socket", { params: { token: window.userToken } });
  socket.connect();
  var chart = new line_chart_default(document.getElementById("chart-canvas"));
  var channel = socket.channel("memory:latest", {});
  channel.join().receive("ok", (resp) => {
    console.log("Joined successfully", resp);
  }).receive("error", (resp) => {
    console.log("Unable to join", resp);
  });
  channel.on("memory:latest:new", (event) => chart.newPoints(event.label, event.value));
})();
/*!
 * @kurkle/color v0.1.9
 * https://github.com/kurkle/color#readme
 * (c) 2020 Jukka Kurkela
 * Released under the MIT License
 */
/*!
 * Chart.js v3.7.1
 * https://www.chartjs.org
 * (c) 2022 Chart.js Contributors
 * Released under the MIT License
 */
/*!
 * chartjs-adapter-luxon v1.1.0
 * https://www.chartjs.org
 * (c) 2021 chartjs-adapter-luxon Contributors
 * Released under the MIT license
 */
/*!
 * chartjs-plugin-streaming v2.0.0
 * https://nagix.github.io/chartjs-plugin-streaming
 * (c) 2017-2021 Akihiko Kusanagi
 * Released under the MIT license
 */