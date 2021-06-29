(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_user_AddOrder_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/user/AddOrder.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/user/AddOrder.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/order_service */ "./resources/js/services/order_service.js");


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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "AddOrder",
  created: function created() {
    document.querySelector('body').style.backgroundColor = '#fff';
  },
  data: function data() {
    return {
      order: {
        user_id: this.$store.state.profile.id,
        name: '',
        phone: '',
        startAddress: '',
        endAddress: '',
        typePack: 'Выберите вид упаковки',
        classification: 'Выберите классификацию',
        note: ''
      },
      errors: {}
    };
  },
  methods: {
    addOrder: function () {
      var _addOrder = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _services_order_service__WEBPACK_IMPORTED_MODULE_1__.add(this.order);

              case 3:
                response = _context.sent;
                this.errors = {};
                this.$router.push('/dashboard/orders');
                _context.next = 19;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                _context.t1 = _context.t0.response.status;
                _context.next = _context.t1 === 422 ? 13 : _context.t1 === 500 ? 15 : 17;
                break;

              case 13:
                this.errors = _context.t0.response.data.errors;
                return _context.abrupt("break", 19);

              case 15:
                this.flashMessage.error({
                  message: _context.t0.response.data.message,
                  time: 5000
                });
                return _context.abrupt("break", 19);

              case 17:
                this.flashMessage.error({
                  message: 'Ошибка добавления!',
                  time: 5000
                });
                return _context.abrupt("break", 19);

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 8]]);
      }));

      function addOrder() {
        return _addOrder.apply(this, arguments);
      }

      return addOrder;
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

/***/ "./resources/js/views/user/AddOrder.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/user/AddOrder.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AddOrder_vue_vue_type_template_id_69525622_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddOrder.vue?vue&type=template&id=69525622&scoped=true& */ "./resources/js/views/user/AddOrder.vue?vue&type=template&id=69525622&scoped=true&");
/* harmony import */ var _AddOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddOrder.vue?vue&type=script&lang=js& */ "./resources/js/views/user/AddOrder.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _AddOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _AddOrder_vue_vue_type_template_id_69525622_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _AddOrder_vue_vue_type_template_id_69525622_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "69525622",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/user/AddOrder.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/user/AddOrder.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/user/AddOrder.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddOrder.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/user/AddOrder.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/user/AddOrder.vue?vue&type=template&id=69525622&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/user/AddOrder.vue?vue&type=template&id=69525622&scoped=true& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddOrder_vue_vue_type_template_id_69525622_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddOrder_vue_vue_type_template_id_69525622_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddOrder_vue_vue_type_template_id_69525622_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddOrder.vue?vue&type=template&id=69525622&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/user/AddOrder.vue?vue&type=template&id=69525622&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/user/AddOrder.vue?vue&type=template&id=69525622&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/user/AddOrder.vue?vue&type=template&id=69525622&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container" }, [
    _c(
      "form",
      {
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.addOrder.apply(null, arguments)
          }
        }
      },
      [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.order.name,
                  expression: "order.name"
                }
              ],
              staticClass: "form-control",
              attrs: {
                type: "text",
                id: "name",
                name: "name",
                placeholder: "Имя того, кто получает груз"
              },
              domProps: { value: _vm.order.name },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.order, "name", $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.order.phone,
                  expression: "order.phone"
                }
              ],
              staticClass: "form-control",
              attrs: {
                type: "text",
                id: "phone",
                name: "phone",
                placeholder: "Телефон того, кто получает груз"
              },
              domProps: { value: _vm.order.phone },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.order, "phone", $event.target.value)
                }
              }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row mt-3" }, [
          _c("div", { staticClass: "col" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.order.startAddress,
                  expression: "order.startAddress"
                }
              ],
              staticClass: "form-control",
              attrs: {
                type: "text",
                id: "startAddress",
                name: "startAddress",
                placeholder: "Адрес откуда забирать груз"
              },
              domProps: { value: _vm.order.startAddress },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.order, "startAddress", $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.order.endAddress,
                  expression: "order.endAddress"
                }
              ],
              staticClass: "form-control",
              attrs: {
                type: "text",
                id: "endAddress",
                name: "endAddress",
                placeholder: "Адрес куда доставить груз"
              },
              domProps: { value: _vm.order.endAddress },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.order, "endAddress", $event.target.value)
                }
              }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row mt-3" }, [
          _c("div", { staticClass: "col" }, [
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.order.typePack,
                    expression: "order.typePack"
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
                      _vm.order,
                      "typePack",
                      $event.target.multiple ? $$selectedVal : $$selectedVal[0]
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
          _c("div", { staticClass: "col" }, [
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.order.classification,
                    expression: "order.classification"
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
                      _vm.order,
                      "classification",
                      $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                    )
                  }
                }
              },
              [
                _c("option", { attrs: { selected: "" } }, [
                  _vm._v("Выберите классификацию")
                ]),
                _vm._v(" "),
                _c("option", { attrs: { value: "1" } }, [_vm._v("Обычный")]),
                _vm._v(" "),
                _c("option", { attrs: { value: "2" } }, [_vm._v("Хрупкий")]),
                _vm._v(" "),
                _c("option", { attrs: { value: "3" } }, [
                  _vm._v("Взрывоопасный")
                ])
              ]
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row mt-3 mb-3" }, [
          _c("div", { staticClass: "input-group" }, [
            _c("textarea", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.order.note,
                  expression: "order.note"
                }
              ],
              staticClass: "form-control",
              attrs: { id: "note", name: "note" },
              domProps: { value: _vm.order.note },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.order, "note", $event.target.value)
                }
              }
            })
          ])
        ]),
        _vm._v(" "),
        _c(
          "button",
          { staticClass: "btn btn-primary", attrs: { type: "submit" } },
          [_vm._v("Создать")]
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row text-center mb-3" }, [
      _c("h3", [_vm._v("Новый заказ доставки груза")])
    ])
  }
]
render._withStripped = true



/***/ })

}]);