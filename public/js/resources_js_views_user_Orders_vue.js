(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_user_Orders_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/user/Orders.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/user/Orders.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/order_service */ "./resources/js/services/order_service.js");
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
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Order",
  data: function data() {
    return {
      user_id: '',
      orders: [],
      orderData: {
        name: '',
        phone: ''
      },
      moreExists: false,
      nextPage: 0,
      editOrderData: {},
      errors: {}
    };
  },
  mounted: function mounted() {
    this.user_id = this.$store.state.profile.id;
    this.loadOrders();
  },
  methods: {
    loadOrders: function () {
      var _loadOrders = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _services_order_service__WEBPACK_IMPORTED_MODULE_1__.loadOrders(this.user_id);

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
    editOrder: function editOrder(order) {
      this.editOrderData = _objectSpread({}, order);
      this.showEditModal();
    },
    showEditModal: function showEditModal() {
      this.$refs['editOrderModal'].show();
    },
    hideEditModal: function hideEditModal() {
      this.$refs['editOrderModal'].hide();
      this.orderData.name = '';
    },
    deleteOrder: function () {
      var _deleteOrder = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(order) {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (window.confirm("\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437 \u2116 ".concat(order.id))) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return");

              case 2:
                _context2.prev = 2;
                _context2.next = 5;
                return _services_order_service__WEBPACK_IMPORTED_MODULE_1__.deleteOrder(order.id);

              case 5:
                response = _context2.sent;
                this.orders = this.orders.filter(function (obj) {
                  return obj.id !== order.id;
                });
                this.flashMessage.success({
                  message: response.data.message,
                  time: 5000
                });
                _context2.next = 13;
                break;

              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2["catch"](2);
                this.flashMessage.error({
                  message: _context2.t0.response.data.message,
                  time: 5000
                });

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[2, 10]]);
      }));

      function deleteOrder(_x) {
        return _deleteOrder.apply(this, arguments);
      }

      return deleteOrder;
    }(),
    loadMore: function () {
      var _loadMore = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        var _this = this;

        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _services_order_service__WEBPACK_IMPORTED_MODULE_1__.loadMore(this.user_id, this.nextPage);

              case 3:
                response = _context3.sent;

                if (response.data.current_page < response.data.last_page) {
                  this.moreExists = true;
                  this.nextPage = response.data.current_page + 1;
                } else {
                  this.moreExists = false;
                }

                response.data.data.forEach(function (data) {
                  _this.orders.push(data);
                });
                _context3.next = 11;
                break;

              case 8:
                _context3.prev = 8;
                _context3.t0 = _context3["catch"](0);
                this.flashMessage.error({
                  message: 'Some error occurred during loading more categories',
                  time: 5000
                });

              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 8]]);
      }));

      function loadMore() {
        return _loadMore.apply(this, arguments);
      }

      return loadMore;
    }(),
    updateOrder: function () {
      var _updateOrder = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        var formData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                formData = new FormData();
                formData.append('name', this.editOrderData.end_user_name);
                formData.append('phone', this.editOrderData.end_user_phone);
                formData.append('startAddress', this.editOrderData.start_address);
                formData.append('endAddress', this.editOrderData.end_address);
                formData.append('typePack', this.editOrderData.type_pack);
                formData.append('classification', this.editOrderData.classification_id);
                formData.append('note', this.editOrderData.note);
                formData.append('_method', 'put');
                _context4.next = 12;
                return _services_order_service__WEBPACK_IMPORTED_MODULE_1__.updateOrder(this.editOrderData.id, formData);

              case 12:
                response = _context4.sent;
                this.orders.map(function (order) {
                  if (order.id === response.data.id) {
                    for (var key in response.data) {
                      order[key] = response.data[key];
                    }
                  }
                });
                this.hideEditModal();
                this.flashMessage.success({
                  message: 'Заказ успешно обновлен!',
                  time: 5000
                });
                _context4.next = 21;
                break;

              case 18:
                _context4.prev = 18;
                _context4.t0 = _context4["catch"](0);
                this.flashMessage.error({
                  message: _context4.t0.response.data.message,
                  time: 5000
                });

              case 21:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 18]]);
      }));

      function updateOrder() {
        return _updateOrder.apply(this, arguments);
      }

      return updateOrder;
    }()
  }
});

/***/ }),

/***/ "./resources/js/services/order_service.js":
/*!************************************************!*\
  !*** ./resources/js/services/order_service.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "add": () => (/* binding */ add),
/* harmony export */   "loadOrders": () => (/* binding */ loadOrders),
/* harmony export */   "deleteOrder": () => (/* binding */ deleteOrder),
/* harmony export */   "updateOrder": () => (/* binding */ updateOrder),
/* harmony export */   "loadMore": () => (/* binding */ loadMore)
/* harmony export */ });
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http_service */ "./resources/js/services/http_service.js");

function add(order) {
  return (0,_http_service__WEBPACK_IMPORTED_MODULE_0__.http)().post('/user/store', order);
}
function loadOrders(userId) {
  return (0,_http_service__WEBPACK_IMPORTED_MODULE_0__.http)().post('user/load-orders/', {
    user_id: userId
  });
}
function deleteOrder(id) {
  return (0,_http_service__WEBPACK_IMPORTED_MODULE_0__.http)()["delete"]("user/delete-order/".concat(id));
}
function updateOrder(id, data) {
  return (0,_http_service__WEBPACK_IMPORTED_MODULE_0__.http)().post("user/update-order/".concat(id), data);
}
function loadMore(userId, nextPage) {
  return (0,_http_service__WEBPACK_IMPORTED_MODULE_0__.http)().post("user/orders-more?page=".concat(nextPage), {
    user_id: userId
  });
}

/***/ }),

/***/ "./resources/js/views/user/Orders.vue":
/*!********************************************!*\
  !*** ./resources/js/views/user/Orders.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Orders_vue_vue_type_template_id_3b6e55cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Orders.vue?vue&type=template&id=3b6e55cc&scoped=true& */ "./resources/js/views/user/Orders.vue?vue&type=template&id=3b6e55cc&scoped=true&");
/* harmony import */ var _Orders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Orders.vue?vue&type=script&lang=js& */ "./resources/js/views/user/Orders.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Orders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Orders_vue_vue_type_template_id_3b6e55cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Orders_vue_vue_type_template_id_3b6e55cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "3b6e55cc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/user/Orders.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/user/Orders.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/user/Orders.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Orders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Orders.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/user/Orders.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Orders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/user/Orders.vue?vue&type=template&id=3b6e55cc&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./resources/js/views/user/Orders.vue?vue&type=template&id=3b6e55cc&scoped=true& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Orders_vue_vue_type_template_id_3b6e55cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Orders_vue_vue_type_template_id_3b6e55cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Orders_vue_vue_type_template_id_3b6e55cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Orders.vue?vue&type=template&id=3b6e55cc&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/user/Orders.vue?vue&type=template&id=3b6e55cc&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/user/Orders.vue?vue&type=template&id=3b6e55cc&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/user/Orders.vue?vue&type=template&id=3b6e55cc&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
                          return _vm.editOrder(order)
                        }
                      }
                    },
                    [_c("span", { staticClass: "fa fa-edit" })]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-danger btn-sm",
                      on: {
                        click: function($event) {
                          return _vm.deleteOrder(order)
                        }
                      }
                    },
                    [_c("span", { staticClass: "fa fa-trash" })]
                  )
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
          ref: "editOrderModal",
          attrs: {
            "hide-footer": "",
            title: "Обновить заказ № " + _vm.editOrderData.id
          }
        },
        [
          _c("div", { staticClass: "d-block" }, [
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.updateOrder.apply(null, arguments)
                  }
                }
              },
              [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-12 mb-3" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.editOrderData.end_user_name,
                          expression: "editOrderData.end_user_name"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        id: "name",
                        name: "name",
                        placeholder: "Имя того, кто получает груз"
                      },
                      domProps: { value: _vm.editOrderData.end_user_name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.editOrderData,
                            "end_user_name",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.errors.name
                      ? _c("div", { staticClass: "error-feedback" }, [
                          _vm._v(_vm._s(_vm.errors.name[0]))
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12 mb-3" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.editOrderData.end_user_phone,
                          expression: "editOrderData.end_user_phone"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        id: "phone",
                        name: "phone",
                        placeholder: "Телефон того, кто получает груз"
                      },
                      domProps: { value: _vm.editOrderData.end_user_phone },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.editOrderData,
                            "end_user_phone",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.errors.phone
                      ? _c("div", { staticClass: "error-feedback" }, [
                          _vm._v(_vm._s(_vm.errors.phone[0]))
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12 mb-3" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.editOrderData.start_address,
                          expression: "editOrderData.start_address"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        id: "startAddress",
                        name: "startAddress",
                        placeholder: "Адрес откуда забирать груз"
                      },
                      domProps: { value: _vm.editOrderData.start_address },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.editOrderData,
                            "start_address",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.errors.startAddress
                      ? _c("div", { staticClass: "error-feedback" }, [
                          _vm._v(_vm._s(_vm.errors.startAddress[0]))
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12 mb-3" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.editOrderData.end_address,
                          expression: "editOrderData.end_address"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        id: "endAddress",
                        name: "endAddress",
                        placeholder: "Адрес куда доставить груз"
                      },
                      domProps: { value: _vm.editOrderData.end_address },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.editOrderData,
                            "end_address",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.errors.endAddress
                      ? _c("div", { staticClass: "error-feedback" }, [
                          _vm._v(_vm._s(_vm.errors.endAddress[0]))
                        ])
                      : _vm._e()
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
                            value: _vm.editOrderData.type_pack,
                            expression: "editOrderData.type_pack"
                          }
                        ],
                        staticClass: "form-select",
                        attrs: { id: "typePack", name: "typePack" },
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
                              _vm.editOrderData,
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
                    ),
                    _vm._v(" "),
                    _vm.errors.typePack
                      ? _c("div", { staticClass: "error-feedback" }, [
                          _vm._v(_vm._s(_vm.errors.typePack[0]))
                        ])
                      : _vm._e()
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
                            value: _vm.editOrderData.classification_id,
                            expression: "editOrderData.classification_id"
                          }
                        ],
                        staticClass: "form-select",
                        attrs: { id: "classification", name: "classification" },
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
                              _vm.editOrderData,
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
                    ),
                    _vm._v(" "),
                    _vm.errors.classification
                      ? _c("div", { staticClass: "error-feedback" }, [
                          _vm._v(_vm._s(_vm.errors.classification[0]))
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "input-group" }, [
                    _c("textarea", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.editOrderData.note,
                          expression: "editOrderData.note"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { id: "note", name: "note" },
                      domProps: { value: _vm.editOrderData.note },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.editOrderData,
                            "note",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.errors.note
                      ? _c("div", { staticClass: "error-feedback" }, [
                          _vm._v(_vm._s(_vm.errors.note[0]))
                        ])
                      : _vm._e()
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
                    on: { click: _vm.hideEditModal }
                  },
                  [_vm._v("Выйти")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  { staticClass: "btn btn-primary", attrs: { type: "submit" } },
                  [
                    _c("span", { staticClass: "fas fa-check" }),
                    _vm._v("Обновить")
                  ]
                )
              ]
            )
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