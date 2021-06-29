(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_user_DriverOrders_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/user/DriverOrders.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/user/DriverOrders.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_driver_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/driver_order_service */ "./resources/js/services/driver_order_service.js");
var _methods;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "DriverOrders",
  data: function data() {
    return {
      message: '',
      driver_id: '',
      orders: [],
      moreExists: false,
      nextPage: 0,
      viewOrderData: {},
      errors: {}
    };
  },
  mounted: function mounted() {
    this.driver_id = this.$store.state.profile.id;
    this.loadOrders();
  },
  methods: (_methods = {
    loadOrders: function () {
      var _loadOrders = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _services_driver_order_service__WEBPACK_IMPORTED_MODULE_1__.loadOrders();

              case 3:
                response = _context.sent;
                this.orders = response.data.data;

                if (response.data.current_page < response.data.last_page) {
                  this.moreExists = true;
                  this.nextPage = response.data.current_page + 1;
                } else {
                  this.moreExists = false;
                }

                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                this.flashMessage.error({
                  message: 'Возникла ошибка при получении всех записей!',
                  time: 5000
                });

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 8]]);
      }));

      function loadOrders() {
        return _loadOrders.apply(this, arguments);
      }

      return loadOrders;
    }(),
    agreeButtonClass: function agreeButtonClass(status) {
      if (status === 2) {
        return 'btn-danger';
      } else if (status === 1) {
        return 'btn-success';
      } else if (status === 4) {
        return 'btn-info';
      }
    },
    agreeButtonName: function agreeButtonName(status) {
      if (status === 2) {
        return 'Отменить';
      } else if (status === 1) {
        return 'Принять';
      } else if (status === 4) {
        return 'Возобновить';
      }
    },
    completedButtonName: function completedButtonName(status) {
      if (status === 2) {
        return 'Выполнил';
      } else if (status === 3) {
        return 'Завершено';
      }
    },
    completedButtonClass: function completedButtonClass(status) {
      if (status === 3) {
        return 'btn-secondary';
      } else if (status !== 3) {
        return 'btn-warning';
      }
    },
    loadMore: function () {
      var _loadMore = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var _this = this;

        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _services_driver_order_service__WEBPACK_IMPORTED_MODULE_1__.loadMore(this.nextPage);

              case 3:
                response = _context2.sent;

                if (response.data.current_page < response.data.last_page) {
                  this.moreExists = true;
                  this.nextPage = response.data.current_page + 1;
                } else {
                  this.moreExists = false;
                }

                response.data.data.forEach(function (data) {
                  _this.orders.push(data);
                });
                _context2.next = 11;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](0);
                this.flashMessage.error({
                  message: 'При загрузке дополнительных заказов произошла ошибка ',
                  time: 5000
                });

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 8]]);
      }));

      function loadMore() {
        return _loadMore.apply(this, arguments);
      }

      return loadMore;
    }(),
    viewOrder: function viewOrder(order) {
      this.viewOrderData = _objectSpread({}, order);
      this.showViewModal();
    }
  }, _defineProperty(_methods, "viewOrder", function viewOrder(order) {
    this.viewOrderData = _objectSpread({}, order);
    this.showViewModal();
  }), _defineProperty(_methods, "showViewModal", function showViewModal() {
    this.$refs['viewOrderModal'].show();
  }), _defineProperty(_methods, "hideViewModal", function hideViewModal() {
    this.$refs['viewOrderModal'].hide();
    this.orderData.name = '';
  }), _defineProperty(_methods, "completedOrder", function () {
    var _completedOrder = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3(order) {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (window.confirm("\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B \u0447\u0442\u043E \u0434\u043E\u0441\u0442\u0430\u0432\u0438\u043B\u0438 \u0437\u0430\u043A\u0430\u0437 \u2116 ".concat(order.id))) {
                _context3.next = 2;
                break;
              }

              return _context3.abrupt("return");

            case 2:
              _context3.prev = 2;
              _context3.next = 5;
              return _services_driver_order_service__WEBPACK_IMPORTED_MODULE_1__.updateStatusOrder(order.id, this.driver_id, 3);

            case 5:
              response = _context3.sent;
              this.orders.map(function (order) {
                if (order.id === response.data.id) {
                  for (var key in response.data) {
                    order[key] = response.data[key];
                  }
                }
              }); //this.hideEditModal();

              this.flashMessage.success({
                message: 'Заказ выполнен',
                time: 5000
              });
              _context3.next = 13;
              break;

            case 10:
              _context3.prev = 10;
              _context3.t0 = _context3["catch"](2);
              this.flashMessage.error({
                message: _context3.t0.response.data.message,
                time: 5000
              });

            case 13:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this, [[2, 10]]);
    }));

    function completedOrder(_x) {
      return _completedOrder.apply(this, arguments);
    }

    return completedOrder;
  }()), _defineProperty(_methods, "agreeOrder", function () {
    var _agreeOrder = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4(order) {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return _services_driver_order_service__WEBPACK_IMPORTED_MODULE_1__.updateStatusOrder(order.id, this.driver_id);

            case 3:
              response = _context4.sent;
              this.orders.map(function (order) {
                if (order.id === response.data.id) {
                  for (var key in response.data) {
                    order[key] = response.data[key];
                  }
                }
              }); //this.hideEditModal();

              if (response.data.status_id === 2) {
                this.message = 'Заказ принят!';
              } else if (response.data.status_id === 4) {
                this.message = 'Заказ отменён!';
              }

              this.flashMessage.success({
                message: this.message,
                time: 5000
              });
              _context4.next = 12;
              break;

            case 9:
              _context4.prev = 9;
              _context4.t0 = _context4["catch"](0);
              this.flashMessage.error({
                message: _context4.t0.response.data.message,
                time: 5000
              });

            case 12:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this, [[0, 9]]);
    }));

    function agreeOrder(_x2) {
      return _agreeOrder.apply(this, arguments);
    }

    return agreeOrder;
  }()), _methods)
});

/***/ }),

/***/ "./resources/js/services/driver_order_service.js":
/*!*******************************************************!*\
  !*** ./resources/js/services/driver_order_service.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadOrders": () => (/* binding */ loadOrders),
/* harmony export */   "loadMore": () => (/* binding */ loadMore),
/* harmony export */   "updateStatusOrder": () => (/* binding */ updateStatusOrder)
/* harmony export */ });
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http_service */ "./resources/js/services/http_service.js");

function loadOrders() {
  return (0,_http_service__WEBPACK_IMPORTED_MODULE_0__.http)().get('user/driver-orders');
}
function loadMore(nextPage) {
  return (0,_http_service__WEBPACK_IMPORTED_MODULE_0__.http)().get("user/driver-orders-more?page=".concat(nextPage));
}
function updateStatusOrder(id, driverId) {
  var otherStatus = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  return (0,_http_service__WEBPACK_IMPORTED_MODULE_0__.http)().post("user/update-status-order/".concat(id), {
    driver_id: driverId,
    other_status: otherStatus
  });
}

/***/ }),

/***/ "./resources/js/views/user/DriverOrders.vue":
/*!**************************************************!*\
  !*** ./resources/js/views/user/DriverOrders.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DriverOrders_vue_vue_type_template_id_bf9324bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DriverOrders.vue?vue&type=template&id=bf9324bc&scoped=true& */ "./resources/js/views/user/DriverOrders.vue?vue&type=template&id=bf9324bc&scoped=true&");
/* harmony import */ var _DriverOrders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DriverOrders.vue?vue&type=script&lang=js& */ "./resources/js/views/user/DriverOrders.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _DriverOrders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _DriverOrders_vue_vue_type_template_id_bf9324bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _DriverOrders_vue_vue_type_template_id_bf9324bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "bf9324bc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/user/DriverOrders.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/user/DriverOrders.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/user/DriverOrders.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DriverOrders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DriverOrders.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/user/DriverOrders.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DriverOrders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/user/DriverOrders.vue?vue&type=template&id=bf9324bc&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/views/user/DriverOrders.vue?vue&type=template&id=bf9324bc&scoped=true& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DriverOrders_vue_vue_type_template_id_bf9324bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DriverOrders_vue_vue_type_template_id_bf9324bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DriverOrders_vue_vue_type_template_id_bf9324bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DriverOrders.vue?vue&type=template&id=bf9324bc&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/user/DriverOrders.vue?vue&type=template&id=bf9324bc&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/user/DriverOrders.vue?vue&type=template&id=bf9324bc&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/user/DriverOrders.vue?vue&type=template&id=bf9324bc&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "main",
    [
      _c("div", { staticClass: "card-body" }, [
        _c("table", { staticClass: "table" }, [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "tbody",
            _vm._l(_vm.orders, function(order, index) {
              return _c("tr", { key: index }, [
                _c("td", [_vm._v(_vm._s(index + 1))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(order.id))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(order.end_user_name))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(order.end_user_phone))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(order.end_address))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(order.status_id))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(order.time_creation))]),
                _vm._v(" "),
                _c("td", [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-success btn-sm",
                      on: {
                        click: function($event) {
                          return _vm.viewOrder(order)
                        }
                      }
                    },
                    [_c("span", { staticClass: "far fa-eye" })]
                  ),
                  _vm._v(" "),
                  order.status_id !== 5
                    ? _c(
                        "button",
                        {
                          staticClass: "btn btn-sm",
                          class: _vm.agreeButtonClass(order.status_id),
                          on: {
                            click: function($event) {
                              return _vm.agreeOrder(order)
                            }
                          }
                        },
                        [_vm._v(_vm._s(_vm.agreeButtonName(order.status_id)))]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  order.status_id === 2 || order.status_id === 3
                    ? _c(
                        "button",
                        {
                          staticClass: "btn btn-sm",
                          class: _vm.completedButtonClass(order.status_id),
                          on: {
                            click: function($event) {
                              return _vm.completedOrder(order)
                            }
                          }
                        },
                        [
                          _vm._v(
                            _vm._s(_vm.completedButtonName(order.status_id))
                          )
                        ]
                      )
                    : _vm._e()
                ])
              ])
            }),
            0
          )
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.moreExists,
                expression: "moreExists"
              }
            ],
            staticClass: "text-center"
          },
          [
            _c(
              "button",
              {
                staticClass: "btn btn-primary btn-sm",
                on: { click: _vm.loadMore }
              },
              [
                _c("span", { staticClass: "fas fa-arrow-down" }),
                _vm._v(" Загрузить больше")
              ]
            )
          ]
        )
      ]),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "viewOrderModal",
          attrs: {
            "hide-footer": "",
            title: "Подробно о заказе № " + _vm.viewOrderData.id
          }
        },
        [
          _c("div", { staticClass: "d-block" }, [
            _c("form", [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-12 mb-3" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.viewOrderData.end_user_name,
                        expression: "viewOrderData.end_user_name"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      disabled: true,
                      id: "name",
                      name: "name",
                      placeholder: "Имя того, кто получает груз"
                    },
                    domProps: { value: _vm.viewOrderData.end_user_name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.viewOrderData,
                          "end_user_name",
                          $event.target.value
                        )
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-12 mb-3" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.viewOrderData.end_user_phone,
                        expression: "viewOrderData.end_user_phone"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      disabled: true,
                      id: "phone",
                      name: "phone",
                      placeholder: "Телефон того, кто получает груз"
                    },
                    domProps: { value: _vm.viewOrderData.end_user_phone },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.viewOrderData,
                          "end_user_phone",
                          $event.target.value
                        )
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-12 mb-3" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.viewOrderData.start_address,
                        expression: "viewOrderData.start_address"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      disabled: true,
                      id: "startAddress",
                      name: "startAddress",
                      placeholder: "Адрес откуда забирать груз"
                    },
                    domProps: { value: _vm.viewOrderData.start_address },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.viewOrderData,
                          "start_address",
                          $event.target.value
                        )
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-12 mb-3" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.viewOrderData.end_address,
                        expression: "viewOrderData.end_address"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      disabled: true,
                      id: "endAddress",
                      name: "endAddress",
                      placeholder: "Адрес куда доставить груз"
                    },
                    domProps: { value: _vm.viewOrderData.end_address },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.viewOrderData,
                          "end_address",
                          $event.target.value
                        )
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-12 mb-3" }, [
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.viewOrderData.type_pack,
                          expression: "viewOrderData.type_pack"
                        }
                      ],
                      staticClass: "form-select",
                      attrs: {
                        disabled: true,
                        id: "typePack",
                        name: "typePack"
                      },
                      on: {
                        change: function($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function(o) {
                              return o.selected
                            })
                            .map(function(o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.$set(
                            _vm.viewOrderData,
                            "type_pack",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        }
                      }
                    },
                    [
                      _c("option", { attrs: { selected: "" } }, [
                        _vm._v("Выберите вид упаковки")
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "1" } }, [
                        _vm._v("конверт/ящик до 5кг")
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "2" } }, [
                        _vm._v("ящик 5 - 15 кг")
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "3" } }, [
                        _vm._v("ящик 16 - 23 кг")
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-12 mb-3" }, [
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.viewOrderData.classification_id,
                          expression: "viewOrderData.classification_id"
                        }
                      ],
                      staticClass: "form-select",
                      attrs: {
                        disabled: true,
                        id: "classification",
                        name: "classification"
                      },
                      on: {
                        change: function($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function(o) {
                              return o.selected
                            })
                            .map(function(o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.$set(
                            _vm.viewOrderData,
                            "classification_id",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        }
                      }
                    },
                    [
                      _c("option", { attrs: { selected: "" } }, [
                        _vm._v("Выберите классификацию")
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "1" } }, [
                        _vm._v("Обычный")
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "2" } }, [
                        _vm._v("Хрупкий")
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "3" } }, [
                        _vm._v("Взрывоопасный")
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "input-group" }, [
                  _c("textarea", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.viewOrderData.note,
                        expression: "viewOrderData.note"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { disabled: true, id: "note", name: "note" },
                    domProps: { value: _vm.viewOrderData.note },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.viewOrderData, "note", $event.target.value)
                      }
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default",
                  attrs: { type: "button" },
                  on: { click: _vm.hideViewModal }
                },
                [_vm._v("Выйти")]
              )
            ])
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("td", [_vm._v("#")]),
        _vm._v(" "),
        _c("td", [_vm._v("ID")]),
        _vm._v(" "),
        _c("td", [_vm._v("Имя получателя")]),
        _vm._v(" "),
        _c("td", [_vm._v("Телефон получателя")]),
        _vm._v(" "),
        _c("td", [_vm._v("Адрес получателя")]),
        _vm._v(" "),
        _c("td", [_vm._v("Статус")]),
        _vm._v(" "),
        _c("td", [_vm._v("Время создания")]),
        _vm._v(" "),
        _c("td", [_vm._v("Action")])
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);