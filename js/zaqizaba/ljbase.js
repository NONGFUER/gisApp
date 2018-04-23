(function(f) {
	var c = {};
	var i = function(k) {
		return c[k];
	};
	var r = function(k) {
		if(!c[k]) {
			var m = {
				exports: {}
			};
			try {
				f[k].call(m.exports, m, m.exports, r, i)
			} catch(e) {};
			c[k] = m.exports;
		}
		return c[k];
	};
	return r('a');
})({
	a: function(e, t, n, r) {
		n("A"), n("F")
	},
	A: function(e, t, n, r) {
		n("b"), n("B"), n("c"), n("C"), n("d"), n("D"), n("e"), n("E"), n("f")
	},
	b: function(module, exports, require, include) {
		(function(e) {
			String.prototype.trim === e && (String.prototype.trim = function() {
				return this.replace(/^\s+/, "").replace(/\s+$/, "")
			})
		})();
		var Zepto = function() {
			function C(e) {
				return E.call(e) == "[object Function]"
			}

			function k(e) {
				return e instanceof Object
			}

			function L(t) {
				var n, r;
				if(E.call(t) !== "[object Object]") return !1;
				r = C(t.constructor) && t.constructor.prototype;
				if(!r || !hasOwnProperty.call(r, "isPrototypeOf")) return !1;
				for(n in t);
				return n === e || hasOwnProperty.call(t, n)
			}

			function A(e) {
				return e instanceof Array
			}

			function O(e) {
				return typeof e.length == "number"
			}

			function M(t) {
				return t.filter(function(t) {
					return t !== e && t !== null
				})
			}

			function _(e) {
				return e.length > 0 ? [].concat.apply([], e) : e
			}

			function D(e) {
				return e.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
			}

			function P(e) {
				return e in a ? a[e] : a[e] = new RegExp("(^|\\s)" + e + "(\\s|$)")
			}

			function H(e, t) {
				return typeof t == "number" && !l[D(e)] ? t + "px" : t
			}

			function B(e) {
				var t, n;
				return u[e] || (t = o.createElement(e), o.body.appendChild(t), n = f(t, "").getPropertyValue("display"), t.parentNode.removeChild(t), n == "none" && (n = "block"), u[e] = n), u[e]
			}

			function j(t, r) {
				return r === e ? n(t) : n(t).filter(r)
			}

			function F(e, t, n, r) {
				return C(t) ? t.call(e, n, r) : t
			}

			function I(e, t, r) {
				var i = e % 2 ? t : t.parentNode;
				i ? i.insertBefore(r, e ? e == 1 ? i.firstChild : e == 2 ? t : null : t.nextSibling) : n(r).remove()
			}

			function q(e, t) {
				t(e);
				for(var n in e.childNodes) q(e.childNodes[n], t)
			}
			var e, t, n, r, i = [],
				s = i.slice,
				o = window.document,
				u = {},
				a = {},
				f = o.defaultView.getComputedStyle,
				l = {
					"column-count": 1,
					columns: 1,
					"font-weight": 1,
					"line-height": 1,
					opacity: 1,
					"z-index": 1,
					zoom: 1
				},
				c = /^\s*<(\w+|!)[^>]*>/,
				h = [1, 3, 8, 9, 11],
				p = ["after", "prepend", "before", "append"],
				d = o.createElement("table"),
				v = o.createElement("tr"),
				m = {
					tr: o.createElement("tbody"),
					tbody: d,
					thead: d,
					tfoot: d,
					td: v,
					th: v,
					"*": o.createElement("div")
				},
				g = /complete|loaded|interactive/,
				y = /^\.([\w-]+)$/,
				b = /^#([\w-]+)$/,
				w = /^[\w-]+$/,
				E = {}.toString,
				S = {},
				x, T, N = o.createElement("div");
			return S.matches = function(e, t) {
				if(!e || e.nodeType !== 1) return !1;
				var n = e.webkitMatchesSelector || e.mozMatchesSelector || e.oMatchesSelector || e.matchesSelector;
				if(n) return n.call(e, t);
				var r, i = e.parentNode,
					s = !i;
				return s && (i = N).appendChild(e), r = ~S.qsa(i, t).indexOf(e), s && N.removeChild(e), r
			}, x = function(e) {
				return e.replace(/-+(.)?/g, function(e, t) {
					return t ? t.toUpperCase() : ""
				})
			}, T = function(e) {
				return e.filter(function(t, n) {
					return e.indexOf(t) == n
				})
			}, S.fragment = function(t, r) {
				r === e && (r = c.test(t) && RegExp.$1), r in m || (r = "*");
				var i = m[r];
				return i.innerHTML = "" + t, n.each(s.call(i.childNodes), function() {
					i.removeChild(this)
				})
			}, S.Z = function(e, t) {
				return e = e || [], e.__proto__ = arguments.callee.prototype, e.selector = t || "", e
			}, S.isZ = function(e) {
				return e instanceof S.Z
			}, S.init = function(t, r) {
				if(!t) return S.Z();
				if(C(t)) return n(o).ready(t);
				if(S.isZ(t)) return t;
				var i;
				if(A(t)) i = M(t);
				else if(L(t)) i = [n.extend({}, t)], t = null;
				else if(h.indexOf(t.nodeType) >= 0 || t === window) i = [t], t = null;
				else if(c.test(t)) i = S.fragment(t.trim(), RegExp.$1), t = null;
				else {
					if(r !== e) return n(r).find(t);
					i = S.qsa(o, t)
				}
				return S.Z(i, t)
			}, n = function(e, t) {
				return S.init(e, t)
			}, n.extend = function(n) {
				return s.call(arguments, 1).forEach(function(r) {
					for(t in r) r[t] !== e && (n[t] = r[t])
				}), n
			}, S.qsa = function(e, t) {
				var n;
				return e === o && b.test(t) ? (n = e.getElementById(RegExp.$1)) ? [n] : i : e.nodeType !== 1 && e.nodeType !== 9 ? i : s.call(y.test(t) ? e.getElementsByClassName(RegExp.$1) : w.test(t) ? e.getElementsByTagName(t) : e.querySelectorAll(t))
			}, n.isFunction = C, n.isObject = k, n.isArray = A, n.isPlainObject = L, n.inArray = function(e, t, n) {
				return i.indexOf.call(t, e, n)
			}, n.trim = function(e) {
				return e.trim()
			}, n.uuid = 0, n.map = function(e, t) {
				var n, r = [],
					i, s;
				if(O(e))
					for(i = 0; i < e.length; i++) n = t(e[i], i), n != null && r.push(n);
				else
					for(s in e) n = t(e[s], s), n != null && r.push(n);
				return _(r)
			}, n.each = function(e, t) {
				var n, r;
				if(O(e)) {
					for(n = 0; n < e.length; n++)
						if(t.call(e[n], n, e[n]) === !1) return e
				} else
					for(r in e)
						if(t.call(e[r], r, e[r]) === !1) return e;
				return e
			}, n.fn = {
				forEach: i.forEach,
				reduce: i.reduce,
				push: i.push,
				indexOf: i.indexOf,
				concat: i.concat,
				map: function(e) {
					return n.map(this, function(t, n) {
						return e.call(t, n, t)
					})
				},
				slice: function() {
					return n(s.apply(this, arguments))
				},
				ready: function(e) {
					return g.test(o.readyState) ? e(n) : o.addEventListener("DOMContentLoaded", function() {
						e(n)
					}, !1), this
				},
				get: function(t) {
					return t === e ? s.call(this) : this[t]
				},
				toArray: function() {
					return this.get()
				},
				size: function() {
					return this.length
				},
				remove: function() {
					return this.each(function() {
						this.parentNode != null && this.parentNode.removeChild(this)
					})
				},
				each: function(e) {
					return this.forEach(function(t, n) {
						e.call(t, n, t)
					}), this
				},
				filter: function(e) {
					return n([].filter.call(this, function(t) {
						return S.matches(t, e)
					}))
				},
				add: function(e, t) {
					return n(T(this.concat(n(e, t))))
				},
				is: function(e) {
					return this.length > 0 && S.matches(this[0], e)
				},
				not: function(t) {
					var r = [];
					if(C(t) && t.call !== e) this.each(function(e) {
						t.call(this, e) || r.push(this)
					});
					else {
						var i = typeof t == "string" ? this.filter(t) : O(t) && C(t.item) ? s.call(t) : n(t);
						this.forEach(function(e) {
							i.indexOf(e) < 0 && r.push(e)
						})
					}
					return n(r)
				},
				eq: function(e) {
					return e === -1 ? this.slice(e) : this.slice(e, +e + 1)
				},
				first: function() {
					var e = this[0];
					return e && !k(e) ? e : n(e)
				},
				last: function() {
					var e = this[this.length - 1];
					return e && !k(e) ? e : n(e)
				},
				find: function(e) {
					var t;
					return this.length == 1 ? t = S.qsa(this[0], e) : t = this.map(function() {
						return S.qsa(this, e)
					}), n(t)
				},
				closest: function(e, t) {
					var r = this[0];
					while(r && !S.matches(r, e)) r = r !== t && r !== o && r.parentNode;
					return n(r)
				},
				parents: function(e) {
					var t = [],
						r = this;
					while(r.length > 0) r = n.map(r, function(e) {
						if((e = e.parentNode) && e !== o && t.indexOf(e) < 0) return t.push(e), e
					});
					return j(t, e)
				},
				parent: function(e) {
					return j(T(this.pluck("parentNode")), e)
				},
				children: function(e) {
					return j(this.map(function() {
						return s.call(this.children)
					}), e)
				},
				siblings: function(e) {
					return j(this.map(function(e, t) {
						return s.call(t.parentNode.children).filter(function(e) {
							return e !== t
						})
					}), e)
				},
				empty: function() {
					return this.each(function() {
						this.innerHTML = ""
					})
				},
				pluck: function(e) {
					return this.map(function() {
						return this[e]
					})
				},
				show: function() {
					return this.each(function() {
						this.style.display == "none" && (this.style.display = null), f(this, "").getPropertyValue("display") == "none" && (this.style.display = B(this.nodeName))
					})
				},
				replaceWith: function(e) {
					return this.before(e).remove()
				},
				wrap: function(e) {
					return this.each(function() {
						n(this).wrapAll(n(e)[0].cloneNode(!1))
					})
				},
				wrapAll: function(e) {
					return this[0] && (n(this[0]).before(e = n(e)), e.append(this)), this
				},
				unwrap: function() {
					return this.parent().each(function() {
						n(this).replaceWith(n(this).children())
					}), this
				},
				clone: function() {
					return n(this.map(function() {
						return this.cloneNode(!0)
					}))
				},
				hide: function() {
					return this.css("display", "none")
				},
				toggle: function(t) {
					return(t === e ? this.css("display") == "none" : t) ? this.show() : this.hide()
				},
				prev: function() {
					return n(this.pluck("previousElementSibling"))
				},
				next: function() {
					return n(this.pluck("nextElementSibling"))
				},
				html: function(t) {
					return t === e ? this.length > 0 ? this[0].innerHTML : null : this.each(function(e) {
						var r = this.innerHTML;
						n(this).empty().append(F(this, t, e, r))
					})
				},
				text: function(t) {
					return t === e ? this.length > 0 ? this[0].textContent : null : this.each(function() {
						this.textContent = t
					})
				},
				attr: function(n, r) {
					var i;
					return typeof n == "string" && r === e ? this.length == 0 || this[0].nodeType !== 1 ? e : n == "value" && this[0].nodeName == "INPUT" ? this.val() : !(i = this[0].getAttribute(n)) && n in this[0] ? this[0][n] : i : this.each(function(e) {
						if(this.nodeType !== 1) return;
						if(k(n))
							for(t in n) this.setAttribute(t, n[t]);
						else this.setAttribute(n, F(this, r, e, this.getAttribute(n)))
					})
				},
				removeAttr: function(e) {
					return this.each(function() {
						this.nodeType === 1 && this.removeAttribute(e)
					})
				},
				prop: function(t, n) {
					return n === e ? this[0] ? this[0][t] : e : this.each(function(e) {
						this[t] = F(this, n, e, this[t])
					})
				},
				data: function(t, n) {
					var r = this.attr("data-" + D(t), n);
					return r !== null ? r : e
				},
				val: function(t) {
					return t === e ? this.length > 0 ? this[0].value : e : this.each(function(e) {
						this.value = F(this, t, e, this.value)
					})
				},
				offset: function() {
					if(this.length == 0) return null;
					var e = this[0].getBoundingClientRect();
					return {
						left: e.left + window.pageXOffset,
						top: e.top + window.pageYOffset,
						width: e.width,
						height: e.height
					}
				},
				css: function(n, r) {
					if(r === e && typeof n == "string") return this.length == 0 ? e : this[0].style[x(n)] || f(this[0], "").getPropertyValue(n);
					var i = "";
					for(t in n) typeof n[t] == "string" && n[t] == "" ? this.each(function() {
						this.style.removeProperty(D(t))
					}) : i += D(t) + ":" + H(t, n[t]) + ";";
					return typeof n == "string" && (r == "" ? this.each(function() {
						this.style.removeProperty(D(n))
					}) : i = D(n) + ":" + H(n, r)), this.each(function() {
						this.style.cssText += ";" + i
					})
				},
				index: function(e) {
					return e ? this.indexOf(n(e)[0]) : this.parent().children().indexOf(this[0])
				},
				hasClass: function(e) {
					return this.length < 1 ? !1 : P(e).test(this[0].className)
				},
				addClass: function(e) {
					return this.each(function(t) {
						r = [];
						var i = this.className,
							s = F(this, e, t, i);
						s.split(/\s+/g).forEach(function(e) {
							n(this).hasClass(e) || r.push(e)
						}, this), r.length && (this.className += (i ? " " : "") + r.join(" "))
					})
				},
				removeClass: function(t) {
					return this.each(function(n) {
						if(t === e) return this.className = "";
						r = this.className, F(this, t, n, r).split(/\s+/g).forEach(function(e) {
							r = r.replace(P(e), " ")
						}), this.className = r.trim()
					})
				},
				toggleClass: function(t, r) {
					return this.each(function(i) {
						var s = F(this, t, i, this.className);
						(r === e ? !n(this).hasClass(s) : r) ? n(this).addClass(s): n(this).removeClass(s)
					})
				}
			}, ["width", "height"].forEach(function(t) {
				n.fn[t] = function(r) {
					var i, s = t.replace(/./, function(e) {
						return e[0].toUpperCase()
					});
					return r === e ? this[0] == window ? window["inner" + s] : this[0] == o ? o.documentElement["offset" + s] : (i = this.offset()) && i[t] : this.each(function(e) {
						var i = n(this);
						i.css(t, F(this, r, e, i[t]()))
					})
				}
			}), p.forEach(function(e, t) {
				n.fn[e] = function() {
					var e = n.map(arguments, function(e) {
						return k(e) ? e : S.fragment(e)
					});
					if(e.length < 1) return this;
					var r = this.length,
						i = r > 1,
						s = t < 2;
					return this.each(function(n, o) {
						for(var u = 0; u < e.length; u++) {
							var a = e[s ? e.length - u - 1 : u];
							q(a, function(e) {
								e.nodeName != null && e.nodeName.toUpperCase() === "SCRIPT" && (!e.type || e.type === "text/javascript") && window.eval.call(window, e.innerHTML)
							}), i && n < r - 1 && (a = a.cloneNode(!0)), I(t, o, a)
						}
					})
				}, n.fn[t % 2 ? e + "To" : "insert" + (t ? "Before" : "After")] = function(t) {
					return n(t)[e](this), this
				}
			}), S.Z.prototype = n.fn, S.camelize = x, S.uniq = T, n.zepto = S, n
		}();
		window.Zepto = Zepto, "$" in window || (window.$ = Zepto),
			function(e) {
				function s(e) {
					return e._zid || (e._zid = r++)
				}

				function o(e, t, r, i) {
					t = u(t);
					if(t.ns) var o = a(t.ns);
					return(n[s(e)] || []).filter(function(e) {
						return e && (!t.e || e.e == t.e) && (!t.ns || o.test(e.ns)) && (!r || s(e.fn) === s(r)) && (!i || e.sel == i)
					})
				}

				function u(e) {
					var t = ("" + e).split(".");
					return {
						e: t[0],
						ns: t.slice(1).sort().join(" ")
					}
				}

				function a(e) {
					return new RegExp("(?:^| )" + e.replace(" ", " .* ?") + "(?: |$)")
				}

				function f(t, n, r) {
					e.isObject(t) ? e.each(t, r) : t.split(/\s/).forEach(function(e) {
						r(e, n)
					})
				}

				function l(t, r, i, o, a, l) {
					l = !!l;
					var c = s(t),
						h = n[c] || (n[c] = []);
					f(r, i, function(n, r) {
						var i = a && a(r, n),
							s = i || r,
							f = function(e) {
								var n = s.apply(t, [e].concat(e.data));
								return n === !1 && e.preventDefault(), n
							},
							c = e.extend(u(n), {
								fn: r,
								proxy: f,
								sel: o,
								del: i,
								i: h.length
							});
						h.push(c), t.addEventListener(c.e, f, l)
					})
				}

				function c(e, t, r, i) {
					var u = s(e);
					f(t || "", r, function(t, r) {
						o(e, t, r, i).forEach(function(t) {
							delete n[u][t.i], e.removeEventListener(t.e, t.proxy, !1)
						})
					})
				}

				function v(t) {
					var n = e.extend({
						originalEvent: t
					}, t);
					return e.each(d, function(e, r) {
						n[e] = function() {
							return this[r] = h, t[e].apply(t, arguments)
						}, n[r] = p
					}), n
				}

				function m(e) {
					if(!("defaultPrevented" in e)) {
						e.defaultPrevented = !1;
						var t = e.preventDefault;
						e.preventDefault = function() {
							this.defaultPrevented = !0, t.call(this)
						}
					}
				}
				var t = e.zepto.qsa,
					n = {},
					r = 1,
					i = {};
				i.click = i.mousedown = i.mouseup = i.mousemove = "MouseEvents", e.event = {
					add: l,
					remove: c
				}, e.proxy = function(t, n) {
					if(e.isFunction(t)) {
						var r = function() {
							return t.apply(n, arguments)
						};
						return r._zid = s(t), r
					}
					if(typeof n == "string") return e.proxy(t[n], t);
					throw new TypeError("expected function")
				}, e.fn.bind = function(e, t) {
					return this.each(function() {
						l(this, e, t)
					})
				}, e.fn.unbind = function(e, t) {
					return this.each(function() {
						c(this, e, t)
					})
				}, e.fn.one = function(e, t) {
					return this.each(function(n, r) {
						l(this, e, t, null, function(e, t) {
							return function() {
								var n = e.apply(r, arguments);
								return c(r, t, e), n
							}
						})
					})
				};
				var h = function() {
						return !0
					},
					p = function() {
						return !1
					},
					d = {
						preventDefault: "isDefaultPrevented",
						stopImmediatePropagation: "isImmediatePropagationStopped",
						stopPropagation: "isPropagationStopped"
					};
				e.fn.delegate = function(t, n, r) {
					var i = !1;
					if(n == "blur" || n == "focus") e.iswebkit ? n = n == "blur" ? "focusout" : n == "focus" ? "focusin" : n : i = !0;
					return this.each(function(s, o) {
						l(o, n, r, t, function(n) {
							return function(r) {
								var i, s = e(r.target).closest(t, o).get(0);
								if(s) return i = e.extend(v(r), {
									currentTarget: s,
									liveFired: o
								}), n.apply(s, [i].concat([].slice.call(arguments, 1)))
							}
						}, i)
					})
				}, e.fn.undelegate = function(e, t, n) {
					return this.each(function() {
						c(this, t, n, e)
					})
				}, e.fn.live = function(t, n) {
					return e(document.body).delegate(this.selector, t, n), this
				}, e.fn.die = function(t, n) {
					return e(document.body).undelegate(this.selector, t, n), this
				}, e.fn.on = function(t, n, r) {
					return n == undefined || e.isFunction(n) ? this.bind(t, n) : this.delegate(n, t, r)
				}, e.fn.off = function(t, n, r) {
					return n == undefined || e.isFunction(n) ? this.unbind(t, n) : this.undelegate(n, t, r)
				}, e.fn.trigger = function(t, n) {
					return typeof t == "string" && (t = e.Event(t)), m(t), t.data = n, this.each(function() {
						"dispatchEvent" in this && this.dispatchEvent(t)
					})
				}, e.fn.triggerHandler = function(t, n) {
					var r, i;
					return this.each(function(s, u) {
						r = v(typeof t == "string" ? e.Event(t) : t), r.data = n, r.target = u, e.each(o(u, t.type || t), function(e, t) {
							i = t.proxy(r);
							if(r.isImmediatePropagationStopped()) return !1
						})
					}), i
				}, "focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout change select keydown keypress keyup error".split(" ").forEach(function(t) {
					e.fn[t] = function(e) {
						return this.bind(t, e)
					}
				}), ["focus", "blur"].forEach(function(t) {
					e.fn[t] = function(e) {
						if(e) this.bind(t, e);
						else if(this.length) try {
							this.get(0)[t]()
						} catch(n) {}
						return this
					}
				}), e.Event = function(e, t) {
					var n = document.createEvent(i[e] || "Events"),
						r = !0;
					if(t)
						for(var s in t) s == "bubbles" ? r = !!t[s] : n[s] = t[s];
					return n.initEvent(e, r, !0, null, null, null, null, null, null, null, null, null, null, null, null), n
				}
			}(Zepto),
			function(e) {
				function t(e) {
					var t = this.os = {},
						n = this.browser = {},
						r = e.match(/WebKit\/([\d.]+)/),
						i = e.match(/(Android)\s+([\d.]+)/),
						s = e.match(/(iPad).*OS\s([\d_]+)/),
						o = !s && e.match(/(iPhone\sOS)\s([\d_]+)/),
						u = e.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
						a = u && e.match(/TouchPad/),
						f = e.match(/Kindle\/([\d.]+)/),
						l = e.match(/Silk\/([\d._]+)/),
						c = e.match(/(BlackBerry).*Version\/([\d.]+)/);
					if(n.webkit = !!r) n.version = r[1];
					i && (t.android = !0, t.version = i[2]), o && (t.ios = t.iphone = !0, t.version = o[2].replace(/_/g, ".")), s && (t.ios = t.ipad = !0, t.version = s[2].replace(/_/g, ".")), u && (t.webos = !0, t.version = u[2]), a && (t.touchpad = !0), c && (t.blackberry = !0, t.version = c[2]), f && (t.kindle = !0, t.version = f[1]), l && (n.silk = !0, n.version = l[1]), !l && t.android && e.match(/Kindle Fire/) && (n.silk = !0)
				}
				t.call(e, navigator.userAgent), e.__detect = t
			}(Zepto),
			function(e, t) {
				function c(e) {
					return e.toLowerCase()
				}

				function h(e) {
					return r ? r + e : c(e)
				}
				var n = "",
					r, i, s, o = {
						Webkit: "webkit",
						Moz: "",
						O: "o",
						ms: "MS"
					},
					u = window.document,
					a = u.createElement("div"),
					f = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,
					l = {};
				e.each(o, function(e, i) {
					if(a.style[e + "TransitionProperty"] !== t) return n = "-" + c(e) + "-", r = i, !1
				}), l[n + "transition-property"] = l[n + "transition-duration"] = l[n + "transition-timing-function"] = l[n + "animation-name"] = l[n + "animation-duration"] = "", e.fx = {
					off: r === t && a.style.transitionProperty === t,
					cssPrefix: n,
					transitionEnd: h("TransitionEnd"),
					animationEnd: h("AnimationEnd")
				}, e.fn.animate = function(t, n, r, i) {
					return e.isObject(n) && (r = n.easing, i = n.complete, n = n.duration), n && (n /= 1e3), this.anim(t, n, r, i)
				}, e.fn.anim = function(r, i, s, o) {
					var u, a = {},
						c, h = this,
						p, d = e.fx.transitionEnd;
					i === t && (i = .4), e.fx.off && (i = 0);
					if(typeof r == "string") a[n + "animation-name"] = r, a[n + "animation-duration"] = i + "s", d = e.fx.animationEnd;
					else {
						for(c in r) f.test(c) ? (u || (u = []), u.push(c + "(" + r[c] + ")")) : a[c] = r[c];
						u && (a[n + "transform"] = u.join(" ")), !e.fx.off && typeof r == "object" && (a[n + "transition-property"] = Object.keys(r).join(", "), a[n + "transition-duration"] = i + "s", a[n + "transition-timing-function"] = s || "linear")
					}
					return p = function(t) {
						if(typeof t != "undefined") {
							if(t.target !== t.currentTarget) return;
							e(t.target).unbind(d, arguments.callee)
						}
						e(this).css(l), o && o.call(this)
					}, i > 0 && this.bind(d, p), setTimeout(function() {
						h.css(a), i <= 0 && setTimeout(function() {
							h.each(function() {
								p.call(this)
							})
						}, 0)
					}, 0), this
				}, a = null
			}(Zepto),
			function($) {
				function triggerAndReturn(e, t, n) {
					var r = $.Event(t);
					return $(e).trigger(r, n), !r.defaultPrevented
				}

				function triggerGlobal(e, t, n, r) {
					if(e.global) return triggerAndReturn(t || document, n, r)
				}

				function ajaxStart(e) {
					e.global && $.active++ === 0 && triggerGlobal(e, null, "ajaxStart")
				}

				function ajaxStop(e) {
					e.global && !--$.active && triggerGlobal(e, null, "ajaxStop")
				}

				function ajaxBeforeSend(e, t) {
					var n = t.context;
					if(t.beforeSend.call(n, e, t) === !1 || triggerGlobal(t, n, "ajaxBeforeSend", [e, t]) === !1) return !1;
					triggerGlobal(t, n, "ajaxSend", [e, t])
				}

				function ajaxSuccess(e, t, n) {
					var r = n.context,
						i = "success";
					n.success.call(r, e, i, t), triggerGlobal(n, r, "ajaxSuccess", [t, n, e]), ajaxComplete(i, t, n)
				}

				function ajaxError(e, t, n, r) {
					var i = r.context;
					r.error.call(i, n, t, e), triggerGlobal(r, i, "ajaxError", [n, r, e]), ajaxComplete(t, n, r)
				}

				function ajaxComplete(e, t, n) {
					var r = n.context;
					n.complete.call(r, t, e), triggerGlobal(n, r, "ajaxComplete", [t, n]), ajaxStop(n)
				}

				function empty() {}

				function mimeToDataType(e) {
					return e && (e == htmlType ? "html" : e == jsonType ? "json" : scriptTypeRE.test(e) ? "script" : xmlTypeRE.test(e) && "xml") || "text"
				}

				function appendQuery(e, t) {
					return(e + "&" + t).replace(/[&?]{1,2}/, "?")
				}

				function serializeData(e) {
					isObject(e.data) && (e.data = $.param(e.data)), e.data && (!e.type || e.type.toUpperCase() == "GET") && (e.url = appendQuery(e.url, e.data))
				}

				function serialize(e, t, n, r) {
					var i = $.isArray(t);
					$.each(t, function(t, s) {
						r && (t = n ? r : r + "[" + (i ? "" : t) + "]"), !r && i ? e.add(s.name, s.value) : (n ? $.isArray(s) : isObject(s)) ? serialize(e, s, n, t) : e.add(t, s)
					})
				}
				var jsonpID = 0,
					isObject = $.isObject,
					document = window.document,
					key, name, rscript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
					scriptTypeRE = /^(?:text|application)\/javascript/i,
					xmlTypeRE = /^(?:text|application)\/xml/i,
					jsonType = "application/json",
					htmlType = "text/html",
					blankRE = /^\s*$/;
				$.active = 0, $.ajaxJSONP = function(e) {
					var t = "jsonp" + ++jsonpID,
						n = document.createElement("script"),
						r = function() {
							$(n).remove(), t in window && (window[t] = empty), ajaxComplete("abort", i, e)
						},
						i = {
							abort: r
						},
						s;
					return e.error && (n.onerror = function() {
						i.abort(), e.error()
					}), window[t] = function(r) {
						clearTimeout(s), $(n).remove(), delete window[t], ajaxSuccess(r, i, e)
					}, serializeData(e), n.src = e.url.replace(/=\?/, "=" + t), $("head").append(n), e.timeout > 0 && (s = setTimeout(function() {
						i.abort(), ajaxComplete("timeout", i, e)
					}, e.timeout)), i
				}, $.ajaxSettings = {
					type: "GET",
					beforeSend: empty,
					success: empty,
					error: empty,
					complete: empty,
					context: null,
					global: !0,
					xhr: function() {
						return new window.XMLHttpRequest
					},
					accepts: {
						script: "text/javascript, application/javascript",
						json: jsonType,
						xml: "application/xml, text/xml",
						html: htmlType,
						text: "text/plain"
					},
					crossDomain: !1,
					timeout: 0
				}, $.ajax = function(options) {
					var settings = $.extend({}, options || {});
					for(key in $.ajaxSettings) settings[key] === undefined && (settings[key] = $.ajaxSettings[key]);
					ajaxStart(settings), settings.crossDomain || (settings.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(settings.url) && RegExp.$2 != window.location.host);
					var dataType = settings.dataType,
						hasPlaceholder = /=\?/.test(settings.url);
					if(dataType == "jsonp" || hasPlaceholder) return hasPlaceholder || (settings.url = appendQuery(settings.url, "callback=?")), $.ajaxJSONP(settings);
					settings.url || (settings.url = window.location.toString()), serializeData(settings);
					var mime = settings.accepts[dataType],
						baseHeaders = {},
						protocol = /^([\w-]+:)\/\//.test(settings.url) ? RegExp.$1 : window.location.protocol,
						xhr = $.ajaxSettings.xhr(),
						abortTimeout;
					settings.crossDomain || (baseHeaders["X-Requested-With"] = "XMLHttpRequest"), mime && (baseHeaders.Accept = mime, mime.indexOf(",") > -1 && (mime = mime.split(",", 2)[0]), xhr.overrideMimeType && xhr.overrideMimeType(mime));
					if(settings.contentType || settings.data && settings.type.toUpperCase() != "GET") baseHeaders["Content-Type"] = settings.contentType || "application/x-www-form-urlencoded";
					settings.headers = $.extend(baseHeaders, settings.headers || {}), xhr.onreadystatechange = function() {
						if(xhr.readyState == 4) {
							clearTimeout(abortTimeout);
							var result, error = !1;
							if(xhr.status >= 200 && xhr.status < 300 || xhr.status == 304 || xhr.status == 0 && protocol == "file:") {
								dataType = dataType || mimeToDataType(xhr.getResponseHeader("content-type")), result = xhr.responseText;
								try {
									dataType == "script" ? (1, eval)(result) : dataType == "xml" ? result = xhr.responseXML : dataType == "json" && (result = blankRE.test(result) ? null : JSON.parse(result))
								} catch(e) {
									error = e
								}
								error ? ajaxError(error, "parsererror", xhr, settings) : ajaxSuccess(result, xhr, settings)
							} else ajaxError(null, "error", xhr, settings)
						}
					};
					var async = "async" in settings ? settings.async : !0;
					xhr.open(settings.type, settings.url, async);
					for(name in settings.headers) xhr.setRequestHeader(name, settings.headers[name]);
					return ajaxBeforeSend(xhr, settings) === !1 ? (xhr.abort(), !1) : (settings.timeout > 0 && (abortTimeout = setTimeout(function() {
						xhr.onreadystatechange = empty, xhr.abort(), ajaxError(null, "timeout", xhr, settings)
					}, settings.timeout)), xhr.send(settings.data ? settings.data : null), xhr)
				}, $.get = function(e, t) {
					return $.ajax({
						url: e,
						success: t
					})
				}, $.post = function(e, t, n, r) {
					return $.isFunction(t) && (r = r || n, n = t, t = null), $.ajax({
						type: "POST",
						url: e,
						data: t,
						success: n,
						dataType: r
					})
				}, $.getJSON = function(e, t) {
					return $.ajax({
						url: e,
						success: t,
						dataType: "json"
					})
				}, $.fn.load = function(e, t) {
					if(!this.length) return this;
					var n = this,
						r = e.split(/\s/),
						i;
					return r.length > 1 && (e = r[0], i = r[1]), $.get(e, function(e) {
						n.html(i ? $(document.createElement("div")).html(e.replace(rscript, "")).find(i).html() : e), t && t.call(n)
					}), this
				};
				var escape = encodeURIComponent;
				$.param = function(e, t) {
					var n = [];
					return n.add = function(e, t) {
						this.push(escape(e) + "=" + escape(t))
					}, serialize(n, e, t), n.join("&").replace("%20", "+")
				}
			}(Zepto),
			function(e) {
				e.fn.serializeArray = function() {
					var t = [],
						n;
					return e(Array.prototype.slice.call(this.get(0).elements)).each(function() {
						n = e(this);
						var r = n.attr("type");
						this.nodeName.toLowerCase() != "fieldset" && !this.disabled && r != "submit" && r != "reset" && r != "button" && (r != "radio" && r != "checkbox" || this.checked) && t.push({
							name: n.attr("name"),
							value: n.val()
						})
					}), t
				}, e.fn.serialize = function() {
					var e = [];
					return this.serializeArray().forEach(function(t) {
						e.push(encodeURIComponent(t.name) + "=" + encodeURIComponent(t.value))
					}), e.join("&")
				}, e.fn.submit = function(t) {
					if(t) this.bind("submit", t);
					else if(this.length) {
						var n = e.Event("submit");
						this.eq(0).trigger(n), n.defaultPrevented || this.get(0).submit()
					}
					return this
				}
			}(Zepto),
			function(e) {
				function r(e) {
					return "tagName" in e ? e : e.parentNode
				}

				function i(e, t, n, r) {
					var i = Math.abs(e - t),
						s = Math.abs(n - r);
					return i >= s ? e - t > 0 ? "Left" : "Right" : n - r > 0 ? "Up" : "Down"
				}

				function u() {
					o = null, t.last && (t.el.trigger("longTap"), t = {})
				}

				function a() {
					o && clearTimeout(o), o = null
				}
				var t = {},
					n, s = 750,
					o;
				e(document).ready(function() {
					var f, l, c = "ontouchend" in document ? !0 : !1;
					c || e(document.body).bind("click", function(t) {
						var n = e(r(t.target));
						n.trigger("tap")
					}), e(document.body).bind("touchstart", function(i) {
						f = Date.now(), l = f - (t.last || f), t.el = e(r(i.touches[0].target)), n && clearTimeout(n), t.x1 = i.touches[0].pageX, t.y1 = i.touches[0].pageY, l > 0 && l <= 250 && (t.isDoubleTap = !0), t.last = f, o = setTimeout(u, s)
					}).bind("touchmove", function(e) {
						a(), t.x2 = e.touches[0].pageX, t.y2 = e.touches[0].pageY
					}).bind("touchend", function(e) {
						a(), t.isDoubleTap ? (t.el.trigger("doubleTap"), t = {}) : t.x2 && Math.abs(t.x1 - t.x2) > 30 || t.y2 && Math.abs(t.y1 - t.y2) > 30 ? (t.el.trigger("swipe") && t.el.trigger("swipe" + i(t.x1, t.x2, t.y1, t.y2)), t = {}) : "last" in t && (c && t.el.trigger("tap"), n = setTimeout(function() {
							n = null, t.el.trigger("singleTap"), t = {}
						}, 250))
					}).bind("touchcancel", function() {
						n && clearTimeout(n), o && clearTimeout(o), o = n = null, t = {}
					})
				}), ["swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap", "singleTap", "longTap"].forEach(function(t) {
					e.fn[t] = function(e) {
						return this.bind(t, e)
					}
				})
			}(Zepto), module.exports = Zepto
	},
	B: function(e, t, n, r) {
		var i = n("b");
		i.fn.de = function(e) {
			if(this.length === 0) return null;
			var t = this,
				n = this[0],
				e = e || [],
				r = {},
				s = function(e) {
					o(e.target, e.type, e)
				},
				o = function(t, s, o) {
					var u = null,
						a = function() {
							return r[s] && r[s][u] ? r[s][u]({
								evt: o,
								el: t,
								box: n,
								data: i.queryToJson(t.getAttribute("data-query") || "")
							}) : !0
						},
						f = i(t);
					if(f.isin(e)) return !1;
					if(!f.isin([n])) return !1;
					while(t && t !== n) {
						if(t.nodeType === 1) {
							u = t.getAttribute("data-act");
							if(u && a() === !1) break
						}
						t = t.parentNode
					}
				},
				u = {};
			return u.add = function(e, n, i) {
				r[n] || (r[n] = {}, t.on(n, s));
				var o = r[n];
				o[e] = i
			}, u.remove = function(e, n) {
				r[n] && (delete r[n][e], i.isObjectEmpty(r[n]) && (delete r[n], t.off(n, s)))
			}, u.destroy = function() {
				for(var e in r) {
					for(var i in r[e]) delete r[e][i];
					delete r[e], t.off(n, e, s)
				}
			}, u
		}
	},
	c: function(e, t, n, r) {
		var i = n("b");
		i.fn.getData = function(e) {
			var t = [];
			for(var n = 0, r = this.length; n < r; n += 1) {
				var s = this[n].getAttribute("data-info");
				s || (s = ""), t.push(i.queryToJson(s, !0))
			}
			return e ? t[0] ? t[0][e] : null : t
		}
	},
	C: function(e, t, n, r) {
		var i = n("b");
		i.fn.getMark = function() {
			var e = this.find("[data-mark]"),
				t = {};
			for(var n = 0, r = e.length; n < r; n += 1) {
				var s = e[n].getAttribute("data-mark");
				t[s] ? t[s].push(e[n]) : t[s] = i(e[n])
			}
			var o = {};
			return o.one = function(e) {
				var n = t[e] || [];
				return n.length === 1 ? n : i(n[0])
			}, o.get = function(e) {
				return t[e]
			}, o
		}
	},
	d: function(e, t, n, r) {
		var i = n("b");
		i.fn.isin = function(e) {
			if(this.length === 0) return !1;
			var t = this[0];
			for(var n = 0, r = e.length; n < r; n += 1)
				if(e[n].contains(t)) return !0;
			return !1
		}
	},
	D: function(e, t, n, r) {
		var i = n("b");
		i.isObjectEmpty = function(e, t) {
			for(var n in e)
				if(t || e.hasOwnProperty(n)) return !1;
			return !0
		}
	},
	e: function(e, t, n, r) {
		var s = n("b");
		s.queryToJson = function(e, t) {
			var n = s.trim(e).split("&"),
				r = {};
			for(i = 0, len = n.length; i < len; i++)
				if(n[i]) {
					var o = n[i].split("="),
						u = o[0],
						a = o[1];
					o.length < 2 && (a = u, u = "$nullName"), u in r ? r[u] = [].concat(r[u], t ? decodeURIComponent(a) : a) : r[u] = t ? decodeURIComponent(a) : a
				}
			return r
		}
	},
	E: function(e, t, n, r) {
		var i = n("b");
		i.trans = function(e, t, n) {
			if(!e || typeof e != "string") throw "trans url empty";
			t = t || {}, n = typeof n == "function" ? n : function(e) {
				return e
			};
			var r = {
					url: e,
					type: t.type || "GET",
					dataType: t.dataType || "json",
					timeout: t.timeout || 5e3,
					contentType: t.contentType,
					async: t.async,
					global: !1
				},
				s = {},
				o = [],
				u = "",
				a = null,
				f = t.transType || "QUEUE",
				l = t.verifiers || [],
				c = function() {
					var e = 0;
					return function() {
						return e++ + Math.random() + ""
					}
				}(),
				h = function(e) {
					for(var t in l)
						if(!l[t].test(e[t])) return !1;
					return !0
				},
				p = function(e, t) {
					for(var n in s)(function(n) {
						setTimeout(function() {
							s[n](e, t)
						}, 0)
					})(n)
				},
				d = function() {
					if(u === "BUSY")
						if(f === "SEIZE") {
							if(a) {
								try {
									a.abort()
								} catch(e) {}
								a = null, u = "FREE"
							}
						} else setTimeout(arguments.callee, 100);
					var t = o.shift();
					if(t) {
						var s = t.data,
							l = t.process;
						a = i.ajax(i.extend({
							data: s,
							success: function(e) {
								e = n(e);
								try {
									l.success(e, s)
								} catch(t) {}
								a = null, u = "FREE", setTimeout(d, 0), setTimeout(function() {
									p(e, s)
								}, 0)
							},
							error: function(e, t) {
								try {
									l.error(e, t)
								} catch(n) {}
								a = null, u = "FREE", setTimeout(d, 0)
							}
						}, r))
					}
				},
				v = {};
			return v.addHook = function(e) {
				var t = c();
				return s[t] = e, t
			}, v.rmHook = function(e) {
				s[e] && delete s[e]
			}, v.request = function(e, t) {
				!h(e), t || (t = {}), o.push({
					data: e,
					process: {
						success: t.success || function() {},
						error: t.error || function() {}
					}
				}), d()
			}, v
		}
	},
	f: function(e, t, n, r) {
		function w(e, t) {
			var n;
			t = t.split(".");
			while(n = t.shift())
				if((e = e[n]) === undefined) return null;
			return e
		}

		function E(e) {
			try {
				var t = e();
				return t || !0
			} catch(n) {
				return !1
			}
		}

		function S(e) {
			return /Android/i.test(navigator.userAgent) || (e = JSON.parse(e)), e
		}

		function x(e) {
			e = e || {};
			var t = {};
			return t.getStaticData = function() {
				return w(e, "staticData")
			}, t.getDeviceId = function() {
				return w(e, "staticData.deviceId")
			}, t.getAppVersion = function() {
				return w(e, "staticData.appVersion")
			}, t.getNetwork = function() {
				return w(e, "staticData.network")
			}, t.getScheme = function() {
				return w(e, "staticData.scheme")
			}, t.getAccessToken = function() {
				return w(e, "staticData.accessToken")
			}, t.getUserInfo = function() {
				return w(e, "staticData.userInfo")
			}, t.getExtraData = function() {
				return w(e, "staticData.extraData")
			}, t.getDeviceInfo = function() {
				return w(e, "staticData.deviceInfo") || w(e, "staticData.mDeviceInfo")
			}, t.setPageTitle = function(t) {
				return E(function() {
					e.setPageTitle(t)
				})
			}, t.actionLogin = function(n) {
				return E(function() {
					if(e.actionLogin) e.actionLogin(n);
					else {
						var r = t.getSchemeLink("actionlogin?param=" + encodeURIComponent(n));
						t.actionWithUrl(r)
					}
				})
			}, t.actionWithUrl = function(t) {
				return E(function() {
					e.actionWithUrl(t)
				})
			}, t.setRightButton = function(t) {
				if((typeof t).toLowerCase() != "string") throw "params must be string";
				return t = S(t), E(function() {
					e.setRightButton(t)
				})
			}, t.setRightButton2 = function(t) {
				if((typeof t).toLowerCase() != "string") throw "params must be string";
				return E(function() {
					e.setRightButton2(t)
				})
			}, t.callAndBack = function(t) {
				return E(function() {
					e.callAndBack(t)
				})
			}, t.onPageChange = function(t) {
				return E(function() {
					e.onPageChange(t)
				})
			}, t.setCity = function(t) {
				return E(function() {
					e.setCity(t)
				})
			}, t.setShareConfig = function(n) {
				if((typeof n).toLowerCase() != "string") throw "params must be string";
				n = JSON.parse(n);
				var r = t.getUserInfo(),
					i = r && r.userId;
				return i && p && n.requestUrl && !/\bagentid=([\w-\|]+)/i.test(n.requestUrl) && (n.requestUrl += (n.requestUrl.indexOf("?") < 0 ? "?" : "&") + "agentid=" + i), /Android/i.test(navigator.userAgent) && (n = JSON.stringify(n)), E(function() {
					e.setShareConfig(n)
				})
			}, t.setShareConfigWithString = function(n) {
				var r = JSON.parse(n),
					i = t.getUserInfo(),
					s = i && i.userId;
				return s && p && r.requestUrl && !/\bagentid=([\w-\|]+)/i.test(r.requestUrl) && (r.requestUrl += (r.requestUrl.indexOf("?") < 0 ? "?" : "&") + "agentid=" + s), n = JSON.stringify(r), E(function() {
					e.setShareConfigWithString(n)
				})
			}, t.actionShare = function() {
				return E(function() {
					e.actionShare()
				})
			}, t.actionShareWithString = function(t) {
				return E(function() {
					e.actionShareWithString(t)
				})
			}, t.actionToast = function(t) {
				return E(function() {
					e.actionToast(t)
				})
			}, t.pageActionBar = function(t) {
				return E(function() {
					e.pageActionBar(t)
				})
			}, t.getSchemeLink = function(t, n) {
				if(t && (typeof t).toLowerCase() != "string") throw "url must be string";
				return e && e.staticData && e.staticData.scheme ? (t = e.staticData.scheme + "://" + t, t) : d ? "lianjia://" + t : p ? n ? "lianjialinknh://" + t : "lianjialink://" + t : null
			}, t.pageMethod = function(n, r) {
				return E(function() {
					if(e["page" + n]) /Android/i.test(navigator.userAgent) && r instanceof Object && (r = JSON.stringify(r)), e["page" + n](r);
					else {
						r = JSON.stringify(r);
						var i = t.getSchemeLink("page" + n.toLocaleLowerCase() + "?param=" + encodeURIComponent(r));
						t.actionWithUrl(i)
					}
				})
			}, t.saveData = function(n, r) {
				var i = {
					key: n,
					value: r
				};
				return E(function() {
					if(e.saveData) /Android/i.test(navigator.userAgent) && (i = JSON.stringify(i)), e.saveData(i);
					else {
						i = JSON.stringify(i);
						var n = t.getSchemeLink("savedata?param=" + encodeURIComponent(i));
						t.actionWithUrl(n)
					}
				})
			}, t.closeWeb = function(t) {
				return E(function() {
					e.closeWeb(t)
				})
			}, t.exitThisPage = function() {
				return E(function() {
					e.exitThisPage()
				})
			}, t.saveStrategyProgress = function(n) {
				return E(function() {
					if(e.saveStrategyProgress) e.saveStrategyProgress(n);
					else {
						var r = t.getSchemeLink("savestrategyprogress?param=" + n);
						t.actionWithUrl(r)
					}
				})
			}, t.comment = function(n) {
				return E(function() {
					if(e.comment) e.comment(n);
					else {
						var r = t.getSchemeLink("comment?param=" + encodeURIComponent(n));
						t.actionWithUrl(r)
					}
				})
			}, t.transData = function(n) {
				return E(function() {
					if(e.transData) e.transData(n);
					else {
						var r = t.getSchemeLink("transdata?param=" + encodeURIComponent(n));
						t.actionWithUrl(r)
					}
				})
			}, t.copyString = function(n) {
				return E(function() {
					if(e.copyString) e.copyString(n);
					else {
						var r = t.getSchemeLink("universalTool/copyString?string=" + n);
						t.actionWithUrl(r)
					}
				})
			}, t.changeTitleBarStyle = function(t) {
				if(t != 0 && t != 1) throw "changeTitleBarStyle param must be 0 or 1";
				return E(function() {
					e.changeTitleBarStyle(t)
				})
			}, t
		}

		function T(e) {
			e = e || {};
			var t = {};
			return t.getStaticData = function() {
				return w(e, "staticData")
			}, t.getDeviceId = function() {
				return w(e, "staticData.deviceId")
			}, t.getAppVersion = function() {
				return w(e, "staticData.appVersion")
			}, t.getNetwork = function() {
				return w(e, "staticData.network")
			}, t.getScheme = function() {
				return w(e, "staticData.scheme")
			}, t.getAccessToken = function() {
				return w(e, "staticData.accessToken")
			}, t.getUserInfo = function() {
				return w(e, "staticData.userInfo")
			}, t.getExtraData = function() {
				return w(e, "staticData.extraData")
			}, t.getDeviceInfo = function() {
				return w(e, "staticData.deviceInfo") || w(e, "staticData.mDeviceInfo")
			}, t.setPageTitle = function(e) {
				return E(function() {
					window.webkit.messageHandlers.lianjia.postMessage(JSON.stringify({
						type: "setTitle",
						param: e
					}))
				})
			}, t.actionLogin = function(e) {
				return E(function() {
					var n = t.getSchemeLink("actionlogin?param=" + encodeURIComponent(e));
					t.actionWithUrl(n)
				})
			}, t.actionWithUrl = function(e) {
				return E(function() {
					window.webkit.messageHandlers.lianjia.postMessage(JSON.stringify({
						type: "actionWithUrl",
						param: e
					}))
				})
			}, t.setRightButton = function(e) {
				if((typeof e).toLowerCase() != "string") throw "params must be string";
				return e = S(e), E(function() {
					(typeof e).toLowerCase() == "string" && (e = JSON.parse(e));
					var n;
					if(e.length == 0 || e[0] == "") n = [];
					else {
						e.length == 1 && e[0] == "share" && (y = !0);
						if(e.length != 1 || e[0] != "share" || !g) throw "wkwebkit setRightButton just supports share and must after setShareConfig";
						var r = [];
						for(var i in g) g[i] instanceof String ? r.push(i + "=" + encodeURIComponent(g[i])) : r.push(i + "=" + encodeURIComponent(JSON.stringify(g[i])));
						r = r.join("&"), p ? n = [{
							name: "分享",
							clickUrl: t.getSchemeLink("web/share?" + r)
						}] : n = [{
							name: "分享",
							clickUrl: t.getSchemeLink("share?" + r),
							imageUrl: "nav_btn_black_share_nor"
						}]
					}
					t.setRightButton2(JSON.stringify(n)), y = !1
				})
			}, t.setRightButton2 = function(e) {
				if((typeof e).toLowerCase() != "string") throw "params must be string";
				return e.indexOf("[") != 0 && (e = "[" + e + "]"), E(function() {
					window.webkit.messageHandlers.lianjia.postMessage(JSON.stringify({
						type: "setRightButton",
						param: e
					}))
				})
			}, t.callAndBack = function(e) {
				return E(function() {
					window.webkit.messageHandlers.lianjia.postMessage(JSON.stringify({
						type: "callAndBack",
						param: e
					}))
				})
			}, t.onPageChange = function(e) {
				return E(function() {
					window.webkit.messageHandlers.lianjia.postMessage(JSON.stringify({
						type: "onPageChange",
						param: e
					}))
				})
			}, t.setCity = function(e) {
				return !1
			}, t.setShareConfig = function(e) {
				if((typeof e).toLowerCase() != "string") throw "params must be string";
				return t.setShareConfigWithString(e)
			}, t.setShareConfigWithString = function(e) {
				var n = JSON.parse(e),
					r = t.getUserInfo(),
					i = r && r.userId;
				return i && p && n.requestUrl && !/\bagentid=([\w-\|]+)/i.test(n.requestUrl) && (n.requestUrl += (n.requestUrl.indexOf("?") < 0 ? "?" : "&") + "agentid=" + i), g = n, e = JSON.stringify(n), E(function() {
					window.webkit.messageHandlers.lianjia.postMessage(JSON.stringify({
						type: "setShareConfig",
						param: e
					})), y && t.setRightButton('["share"]')
				})
			}, t.actionShare = function() {
				return E(function() {
					if(!g) throw "must setShareConfig before";
					window.webkit.messageHandlers.lianjia.postMessage(JSON.stringify({
						type: "actionShare",
						param: JSON.stringify(g)
					}))
				})
			}, t.actionShareWithString = function(e) {
				return E(function() {
					window.webkit.messageHandlers.lianjia.postMessage(JSON.stringify({
						type: "actionShare",
						param: e
					}))
				})
			}, t.actionToast = function(e) {
				return !1
			}, t.pageActionBar = function(e) {
				return !1
			}, t.getSchemeLink = function(t, n) {
				if(t && (typeof t).toLowerCase() != "string") throw "url must be string";
				return e && e.staticData && e.staticData.scheme ? (t = e.staticData.scheme + "://" + t, t) : d ? "lianjia://" + t : p ? n ? "lianjialinknh://" + t : "lianjialink://" + t : null
			}, t.pageMethod = function(e, n) {
				return n = JSON.stringify(n), E(function() {
					var r = t.getSchemeLink("page" + e.toLocaleLowerCase() + "?param=" + encodeURIComponent(n));
					t.actionWithUrl(r)
				})
			}, t.saveData = function(e, n) {
				var r = {
					key: e,
					value: n
				};
				return r = JSON.stringify(r), E(function() {
					var e = t.getSchemeLink("savedata?param=" + encodeURIComponent(r));
					t.actionWithUrl(e)
				})
			}, t.closeWeb = function(e) {
				return E(function() {
					window.webkit.messageHandlers.lianjia.postMessage(JSON.stringify({
						type: "closeWeb",
						param: e
					}))
				})
			}, t.exitThisPage = function() {
				return !1
			}, t.saveStrategyProgress = function(e) {
				return E(function() {
					var n = t.getSchemeLink("savestrategyprogress?param=" + e);
					t.actionWithUrl(n)
				})
			}, t.comment = function(e) {
				return E(function() {
					var n = JSON.parse(e),
						r = n.callback,
						i = t.getSchemeLink("comment?param=" + encodeURIComponent(e)),
						s = {
							actionUrl: i,
							functionName: r
						};
					t.callAndBack(JSON.stringify(s))
				})
			}, t.transData = function(e) {
				return !1
			}, t.copyString = function(e) {
				return E(function() {
					var n = t.getSchemeLink("universalTool/copyString?string=" + e);
					t.actionWithUrl(n)
				})
			}, t.changeTitleBarStyle = function(e) {
				if(e != 0 && e != 1) throw "changeTitleBarStyle param must be 0 or 1";
				return E(function() {
					window.webkit.messageHandlers.lianjia.postMessage(JSON.stringify({
						type: "setFullScreen",
						param: e
					}))
				})
			}, t
		}

		function N(e, t, n) {
			var r = new Date;
			r.setDate(r.getDate() + n), document.cookie = e + "=" + encodeURI(t) + (n == null ? "" : ";path=/;domain=" + c + ";expires=" + r.toUTCString())
		}

		function C(e) {
			e = e.replace(/([\.\[\]\$])/g, "\\$1");
			var t = new RegExp("(^| )" + e + "=([^;]*)?;", "ig"),
				n = document.cookie + ";",
				r = t.exec(n),
				i = [];
			while(r) i.push(r[2] || ""), r = t.exec(n);
			return i
		}

		function k(e) {
			"console" in window && console.log("%c$ljBridge log%c" + e, "font-size:12px;line-height:18px;background:#F5BD00;color:#FFF;border-radius:2px;padding:0 3px;margin-right:10px", "")
		}

		function M() {
			if(L === null) return;
			var e;
			while(e = O.shift()) {
				var t = e.fn;
				try {
					"context" in e ? t.call(e.context, L, A) : t(L, A)
				} catch(n) {
					"console" in window && (console.error ? console.error(n) : console.log(n))
				}
			}
		}

		function _(e) {
			return e && e.tagName && e.tagName.toLowerCase() === "a" ? e : e && e.parentNode ? _(e.parentNode) : !1
		}

		function D(e) {
			var t = _(e.target),
				n = window.SysSchema;
			n || (d ? n = {
				tel: {
					match: /tel:(0[0-9]{2,3}\-)?(\d+)([\-,][0-9]{1,6})?/,
					schema: function(e) {
						var t = (e[1] ? e[1] : "") + e[2];
						return t = t.replace("-", ""), t += e[3] ? e[3] : "", "phonenum/customerservices?telephone=" + t.replace("-", "转").replace(",", "转")
					}
				},
				sms: {
					match: /sms:(.*)/,
					schema: function(e) {
						return "func/sendmessage?telephone=" + e[1]
					}
				}
			} : p && (n = {
				tel: {
					match: /tel:(0[0-9]{2,3}\-)?(\d+)([\-,][0-9]{1,6})?/,
					schema: function(e) {
						var t = (e[1] ? e[1] : "") + e[2];
						return t = t.replace("-", ""), t += e[3] ? e[3] : "", "tel/tel?tel=" + t
					}
				},
				sms: {
					match: /sms:(.*)/,
					schema: function(e) {
						return "tel/message?tel=" + e[1]
					}
				}
			}));
			if(t) {
				var r = t.href;
				for(var i in n) {
					var s = r.match(n[i].match);
					if(s && s.length) {
						var o = L.getSchemeLink(n[i].schema(s));
						return L.actionWithUrl(o), e.preventDefault(), !1
					}
				}
			}
		}
		var i = "HybridBridgeLJ",
			s = window.cookieSetting || {},
			o = window.tokenKey || s.tokenKey || "lianjia_token",
			u = s.ssidKey || "lianjia_ssid",
			a = s.uuidKey || "lianjia_uuid",
			f = s.udidKey || "lianjia_udid",
			l = s.cityKey || "select_city",
			c = s.cookieDomain || "lianjia.com",
			h = navigator.userAgent,
			p = /Link/img.test(navigator.userAgent),
			d = !p && /Lianjia/img.test(h),
			v = d || p,
			m, g, y, b = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(e) {
				setTimeout(e, 16)
			},
			L = null,
			A = {
				isLianjiaApp: d,
				isLinkApp: p,
				isApp: v,
				iswk: m
			},
			O = [];
		window.$ljBridge = {
			ready: function(e, t) {
				O.push(arguments.length > 1 ? {
					fn: e,
					context: t
				} : {
					fn: e
				}), b(M)
			},
			webStatus: A
		};
		if(v) {
			var P = Date.now();
			(function H() {
				if(Date.now() - P > 6e4) {
					k("app detected, but bridge injection time out(60s).");
					return
				}
				var e = C("_staticData");
				e.length && (window[i] = {}, A.iswk = m = 1);
				if(window[i] === undefined) return b(H);
				var t = window[i];
				t._getStaticData ? t.staticData = JSON.parse(t._getStaticData()) : m && (t.staticData = JSON.parse(decodeURIComponent(e[0]))), t.staticData.accessToken ? N(o, t.staticData.accessToken, 7) : N(o, "", 1);
				if(t.staticData.deviceInfo) N(u, t.staticData.deviceInfo.ssid, 7), N(a, t.staticData.deviceInfo.uuid, 7), N(f, t.staticData.deviceInfo.udid, 7);
				else if(t.staticData.mDeviceInfo) N(u, t.staticData.mDeviceInfo.ssid, 7), N(a, t.staticData.mDeviceInfo.uuid, 7), N(f, t.staticData.mDeviceInfo.udid, 7);
				else if(m) {
					var n = C(a),
						r = C(u),
						s = C(f);
					N(u, r, 7), N(a, n, 7), N(f, s, 7)
				}
				t.staticData.extraData && t.staticData.extraData.cityId && N(l, t.staticData.extraData.cityId, 7), m ? L = T(t) : L = x(t), document.body.addEventListener("click", D), L.setPageTitle(""), L.setRightButton("[]"), L.setShareConfig("{}"), b(M), k("app detected, took " + Date.now() - P + "ms.")
			})()
		} else L = x({}), b(M), k("no app detected.")
	},
	F: function(e, t, n, r) {
		window.$LMB = function(e, t) {
			"use strict";

			function u(e) {
				var t = arguments.length,
					n = 1,
					r;
				while(n < t) {
					r = arguments[n++];
					for(var i in r) r.hasOwnProperty(i) && (e[i] = r[i])
				}
				return e
			}

			function c(e) {
				if(e === null) return e + "";
				var t = typeof e;
				return t === "object" || t === "function" ? f[l.call(e)] || "object" : t
			}

			function h(e) {
				return n.createElement(e)
			}

			function p(e) {
				try {
					e.parentNode.removeChild(e)
				} catch(t) {}
			}

			function m(e, t) {
				if(!v) return;
				var n = console.error || console.log,
					r = ["%c$LMB ERROR%c" + e + "\n", d + "background:#EB3941;color:#FFF;border-radius:2px;" + "padding:0 3px;margin-right:10px", ""];
				t && (r[0] += "%c%o", r.push(d + "margin-left:10px;"), r.push(t)), n.apply(console, r)
			}

			function g(e) {
				if(!v) return;
				var t = console.warn || console.log;
				t.call(console, "%c$LMB WARN%c" + e, d + "background:#F5BD00;color:#FFF;border-radius:2px;" + "padding:0 3px;margin-right:10px", "")
			}

			function y() {
				return "scrollY" in e ? e.scrollY : s.scrollTop || r.scrollTop
			}

			function b(t) {
				e.scrollTo(0, t | 0)
			}

			function w(e) {
				for(var t in e) return !1;
				return !0
			}

			function E() {
				return((1 + Math.random()) * 65536 | 0).toString(16).substring(1)
			}

			function S() {
				return(E() + E() + "-" + E() + "-4" + E().substr(0, 3) + "-" + E() + "-" + E() + E() + E()).toLowerCase()
			}

			function C(e) {
				for(var t = 0, n, r = T.length; t < r; t++) {
					n = T[t];
					switch(c(n)) {
						case "string":
							if(n === e) return !0;
							break;
						case "regexp":
							if(n.test(e)) return !0;
							break;
						case "function":
							if(n(e) === !0) return !0;
							break;
						default:
					}
				}
				return !1
			}

			function L(e, t) {
				function s() {
					if(r.readyState == 4) {
						H(), clearTimeout(N);
						if(r.status != 200) B("serverError", e, r.status);
						else {
							var n = {},
								i;
							try {
								n = JSON.parse(r.responseText)
							} catch(s) {
								i = s
							}
							i ? B("dataParseError", e, r.responseText) : n.error_no != 0 ? B("dataError", e, n.error_no) : (t(n), C(e) && (x[e] = n))
						}
						delete L.xhr
					}
				}

				function o() {
					H(), B("timeout", e);
					try {
						r.abort()
					} catch(t) {}
					delete L.xhr
				}
				H(), P();
				if(L.xhr) {
					try {
						L.xhr.abort()
					} catch(n) {}
					clearTimeout(N)
				}
				if(e in x) {
					H(), a(function() {
						t(x[e])
					});
					return
				}
				var r = L.xhr = new XMLHttpRequest,
					i = e + (e.indexOf("?") === -1 ? "?" : "&") + "__rnd=" + Date.now();
				r.onreadystatechange = s, r.open("get", i, !0), r.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), r.setRequestHeader("X-Requested-With", "XMLHttpRequest"), r.send(""), N = setTimeout(o, k)
			}

			function A(e) {
				while(e && e != s) {
					if(e.tagName && e.tagName.toLowerCase() === "a") return e;
					if(!e.parentNode) return !1;
					e = e.parentNode
				}
				return !1
			}

			function D() {
				if(_ > 50) return;
				_ += .7, O.style.width = _ + "%", M = setTimeout(D, 16)
			}

			function P() {
				clearTimeout(M), M = null, _ = 0, O.style.transition = "", O.style.width = "0%", O.style.opacity = "1", O.parentNode || s.insertBefore(O, s.firstChild), O.offsetWidth, D()
			}

			function H() {
				clearTimeout(M), M = null;
				if(!O.parentNode) return;
				O.style.transition = "width 0.5s ease-in, opacity 0.3s 0.5s ease-in", O.offsetWidth, O.style.width = "100%", O.style.opacity = "0"
			}

			function B(e, t, n) {
				switch(e) {
					case "serverError":
						m('request "' + t + '" get responce code ' + n + ".");
						break;
					case "dataParseError":
						m({
							error_response: n
						}, 'response form "' + t + '" get json-parse-error.');
						break;
					case "dataError":
						m('request "' + t + '" get "error_no" ' + n + ".");
						break;
					case "timeout":
						m('request "' + t + '" timeouted.');
					default:
				}
				I.emit("$LMB.ajaxError", [e, t, n])
			}

			function F() {
				this._events = {}
			}

			function Y(e, t) {
				K.length = t, K[t] = e, Z()
			}

			function Z() {
				var e = {},
					t;
				for(var n = 0, r = K.length; n < r; n++) t = K[n], t && t in J && (e[t] = J[t], delete J[t]);
				for(t in J) {
					var i = J[t].rootElement;
					J[t].destroy(), p(i), delete J[t]
				}
				J = e
			}

			function tt(e) {
				e += "";
				if(e.indexOf(et) != 0) return !1;
				e = e.replace(et, "");
				var t = e.split($),
					n = parseInt(t[0], 10);
				return t.length === 2 && !isNaN(n) ? n : !1
			}

			function nt(e) {
				return et + e + $ + S()
			}

			function rt(e) {
				this.id = e.id, this.rootElement = e.element, this.html = e.html, this.ns = e.ns, this.js = e.js, this.jsInstance = null, this.css = e.css, this.args = e.args, this.inited = !1, this.destroyed = !1, this._events = {}, J[this.id] = this
			}

			function it(e, t, r) {
				var i = history.state,
					s = n.getElementById(e),
					o = tt(i);
				o === !1 ? (Q = 0, i = nt(Q), history.replaceState(i, null, location.href)) : Q = o, s.id = i;
				var u = new rt({
					id: i,
					element: s,
					ns: t,
					args: r
				});
				u.init(), K[Q] = i, G = u
			}

			function st(e, t) {
				var n = G;
				G = null;
				try {
					n.emit(U)
				} catch(r) {
					m('page which ns is "' + n.ns + '" errors when "willToBack" event get called', r)
				}
				R.addStyle(e);
				if(e.inited) try {
					e.emit(W)
				} catch(r) {
					m('page which ns is "' + e.ns + '" errors when "willToFront" event get called', r)
				}
				n.rootElement.style.display = "none", R.removeStyle(n);
				try {
					n.emit(z)
				} catch(r) {
					m('page which ns is "' + n.ns + '" errors when "didToBack" event get called', r)
				}
				e.rootElement.style.display = "", e.rootElement.parentNode || o.appendChild(e.rootElement);
				if(e.inited) try {
					e.emit(X)
				} catch(r) {
					m('page which ns is "' + e.ns + '" errors when "didToFront" event get called', r)
				} else e.init();
				G = e, I.emit("$LMB.turnToPage", e), t && t()
			}

			function ot(e, t) {
				var n = h("div");
				n.id = e;
				var r = {};
				try {
					r = JSON.parse(t.args)
				} catch(i) {}
				return new rt({
					id: e,
					element: n,
					html: t.body,
					ns: t.ns,
					js: t.js[0],
					css: t.css[0],
					args: r
				})
			}

			function ut(e) {
				var t = Q + 1,
					n = nt(t);
				L(e, function(r) {
					G.scrollTop = y(), history.pushState(n, null, e), b(0), st(ot(n, r), function() {
						Q = t, Y(n, Q)
					})
				})
			}

			function at(e) {
				var t = e.state,
					n = tt(t);
				if(n === !1) return location.reload();
				var r = J[t];
				if(r) {
					st(r, function() {
						Q = n
					}), a(function() {
						Math.abs(r.scrollTop - y()) > 30 && b(r.scrollTop)
					});
					return
				}
				var i = location.href;
				t = nt(n), history.replaceState(t, null, i), b(0), L(i, function(r) {
					st(ot(t, r), function() {
						Q = n, K[Q] = t
					})
				})
			}

			function ft(e) {
				var t = A(e.target);
				if(t && t.host === location.host) {
					var n = t.hasAttribute ? t.hasAttribute("target") : !!t.getAttribute("target");
					if(!n) return ut(t.href), e.preventDefault(), !1
				}
			}
			var n = document,
				r = n.documentElement,
				i = n.head || n.getElementsByTagName("head")[0],
				s = n.body || n.getElementsByTagName("body")[0],
				o = s.firstElementChild,
				a = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || function(e) {
					setTimeout(e, 1e3 / 60)
				},
				f = {},
				l = f.toString;
			"Boolean Number String Function Array Date RegExp Object Error".split(" ").forEach(function(e) {
				f["[object " + e + "]"] = e.toLowerCase()
			});
			var d = "font-size:12px;line-height:18px;",
				v = "console" in e,
				x = {},
				T = [],
				N, k = 1e4,
				O = h("div"),
				M = null,
				_ = 0;
			O.style.cssText = "position:fixed;top:0;left:0;width:0;height:0.215rem;pointer-events:none;background:rgb(0,122,255);opacity:0;z-index:99999;";
			var j = {
				on: function(e, t) {
					this._events = this._events || {};
					var n = this._events[e] = this._events[e] || [];
					return n.push(t), this
				},
				off: function(e, n) {
					if(!this._events) return this;
					e === t && (this._events = {});
					var r = this._events[e] || [],
						i = r.length = n === t ? r.length : 0;
					while(i--) n == r[i] && r.splice(i, 1);
					return this
				},
				emit: function(e, t) {
					if(!this._events) return this;
					var n = this._events[e] || [];
					return n.forEach(function(e) {
						try {
							e.apply(this, [].concat(t))
						} catch(n) {}
					}), this
				}
			};
			u(F.prototype, j);
			var I = new F,
				q = function() {
					function s(t, n, r) {
						var i = e[t] = e[t] || {};
						if(i.factory) return r(i.factory);
						i.callbacks = (i.callbacks || []).concat(r), !i.traning && n && a(i, n)
					}

					function o(n, r) {
						var i = e[n] = e[n] || {};
						i.factory === t && (i.factory = r), u(i);
						var s;
						if("callbacks" in i) {
							while(s = i.callbacks.shift()) s(r);
							delete i.callbacks
						}
					}

					function u(e) {
						delete e.traning, "timeoutInterval" in e && (clearTimeout(e.timeoutInterval), delete e.timeoutInterval), "scriptElement" in e && (p(e.scriptElement), delete e.scriptElement)
					}

					function a(e, t) {
						e.scriptElement && p(e.scriptElement), e.scriptElement = n.createElement("script"), e.timeoutInterval = setTimeout(function() {
							u(e)
						}, r), i.appendChild(e.scriptElement).src = t
					}
					var e = {},
						r = 5e3;
					return {
						load: s,
						register: o
					}
				}(),
				R = function() {
					function t(t) {
						var n = t.id,
							r = t.css;
						if(!r) return;
						if(!e[r]) {
							var s = e[r] = h("link");
							s.setAttribute("rel", "stylesheet"), s.setAttribute("type", "text/css"), s.setAttribute("href", r), i.appendChild(s), s.ref = {}
						}
						e[r].ref[n] = !0
					}

					function n(t) {
						var n = t.id,
							r = t.css;
						if(!e[r]) return;
						var i = e[r].ref;
						delete i[n], w(i) && (p(e[r]), delete e[r])
					}
					var e = {};
					return {
						addStyle: t,
						removeStyle: function(e) {
							a(function() {
								n(e)
							})
						}
					}
				}(),
				U = "willToBack",
				z = "didToBack",
				W = "willToFront",
				X = "didToFront",
				V = "destroy",
				$ = "---",
				J = {},
				K = [],
				Q = 0,
				G = null,
				et = "page-";
			u(rt.prototype, j, {
					init: function() {
						if(this.inited === !0) return;
						this.inited = !0, this.html && (this.rootElement.innerHTML = this.html), this.ns && q.load(this.ns, this.js, function(t) {
							if(this.destroyed === !0) return;
							try {
								this.jsInstance = t.call(e, this.rootElement.id, this)
							} catch(n) {
								m('page which ns is "' + this.ns + '" errors at initialization.', n)
							}
							this.jsInstance && c(this.jsInstance.destroy) != "function" && g('page which ns is "' + this.ns + '" needs a "destroy" mothed for destruction.')
						}.bind(this))
					},
					destroy: function() {
						if(this.destroyed === !0) return;
						this.destroyed = !0;
						try {
							this.emit(V)
						} catch(e) {
							m('page which ns is "' + this.ns + '" errors when "destroy" event get called', e)
						}
						try {
							this.jsInstance && this.jsInstance.destroy()
						} catch(e) {
							m('page which ns is "' + this.ns + '" errors at destroy', e)
						}
						delete this.inited, delete this.events, delete this.id, delete this.rootElement, delete this.html, delete this.ns, delete this.js, delete this.jsInstance, delete this.css, delete this.args, delete this.inited, delete this._events
					}
				}),
				function() {
					var t;
					e.addEventListener("scroll", function() {
						if(!G) return;
						t === G.id && (G.scrollTop = y()), t = G.id
					})
				}();
			var lt = !1;
			try {
				lt = localStorage.getItem("$LMB.ajaxLink") === "1"
			} catch(ct) {}
			return lt && (e.addEventListener("popstate", at), n.addEventListener("click", ft)), {
				register: q.register,
				start: it,
				jump: ut,
				pageCache: T,
				broadcast: I,
				presentPage: function() {
					return G
				},
				replaceState: function(e) {
					history.replaceState(history.state, null, e)
				}
			}
		}(window)
	}
});