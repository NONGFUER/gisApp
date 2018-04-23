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
})
({
	a: function(e, t, n, r) {
		$LMB.register("m_pages_yezhuDelegate", function(e, t) {
			function S(e, t) {
				function n(e, t) {
					u.yezhu_getcities_v2.request({
						output: "json",
						ak: a,
						location: e + "," + t,
						pois: 1
					}, {
						success: function(e, t) {
							c = e.result.location.lat;
							h = e.result.location.lng
						},
						error: function(e, t) {
							x()
						}
					})
				}
				u.yezhu_getcities_v1.request({
					coords: t + "," + e,
					from: 1,
					to: 5,
					ak: a
				}, {
					success: function(e, t) {
						var r = e.result[0];
						if(r) {
							n(r.y, r.x)
						} else {
							x()
						}
					},
					error: function(e, t) {
						x()
					}
				});
				l = true
			}

			function x() {
				l = false
			}

			function T() {}

			function N() {
				if("geolocation" in navigator) {
					navigator.geolocation.getCurrentPosition(function(e) {
						S(e.coords.latitude, e.coords.longitude)
					}, function() {
						x()
					}, {
						enableHighAccuracy: true,
						maximumAge: 3e4,
						timeout: 15e3
					})
				} else {
					T()
				}
			}
			var r = n("A");
			var i = r(e, t);
			var s = n("I");
			var o = n("k");
			var u = n("f");
			var a = "C106a48023d9606dcdad761cbc070095";
			var f = t["args"]["cur_city_id"] || 11e4;
			var l = false;
			var c;
			var h;
			var p;
			var d;
			var v;
			var m;
			var g = $(".page_yezhu");
			var y;
			var b = {
				"#xiaoqu": "xiaoqu",
				".change": "change",
				"#loudong": "loudong",
				"#danyuan": "danyuan",
				"#menpai": "menpai",
				".changeval": "changeVal",
				".step1": "detail",
				".step3": "step",
				".yzok": "yzm",
				".sug": "keys",
				".backs": "xiaoquent",
				".yz-yuyin": "yuyin",
				".changeStep": "changeStep"
			};
			var w = {
				".searc-input": "getxiaoqu",
				".sug": "sug",
				".txt-mobile": "phone"
			};
			var E = {
				init: function() {
					N();
					E.initPlugin();
					E.bind()
				},
				initPlugin: function() {
					v = $("#" + e).getMark();
					p = s.init()
				},
				bind: function() {
					m = $("#" + e).de();
					for(var t in b) {
						$(".page_yezhu").on("tap", t, E[b[t]])
					}
					for(var t in w) {
						$(".page_yezhu").on("keyup", t, E[w[t]])
					}
				},
				keys: function(e) {
					var t = $(e.currentTarget);
					var n = this;
					t.removeAttr("readOnly");
					setTimeout(function() {
						t.removeAttr("readOnly")
					}, 5)
				},
				changeStep: function(e) {
					var t = $(e.currentTarget);
					var n = t.attr("data-page");
					E.shownext(n);
					g.find(".yezhu-wrapper input,.yezhu-wrapper select").removeAttr("readOnly");
				},
				change: function(e) {
					var t = $(e.currentTarget);
					var n = t.attr("data-page");
					var r = t.prev("li").find("i").text();
					if(r != "") {
						E.showViewPort(n)
					} else {
						p.showError("请输入" + t.prev("li").find("div").text())
					}
					g.find(".yezhu-wrapper input,.yezhu-wrapper select").removeAttr("readOnly");
				},
				changeVal: function(e) {
					var t = $(e.currentTarget);
					var n = t.attr("id");
					var r = t.attr("frame_id");
					var i = t.find("i").text();
					var s = t.attr("data-val");
					var o = this;
					var u = g.find("#" + s);
					u.find("i").text(i);
					u.data("id", n);
					u.attr("frame_id", r)
				},
				showViewPort: function(e, t) {
					var n = g.find(".steps");
					var r = n.filter(".stepon"),
						i = n.filter("[data-page=" + e + "]");
					if(!t) {
						r.one("webkitTransitionEnd", function() {
							r.removeClass("stepon").removeClass("slide-left")
						}).addClass("slide-left");
						i.addClass("stepon")
					} else {
						i.addClass("back-ready");
						setTimeout(function() {
							i.one("webkitTransitionEnd", function() {
								i.removeClass("back-ready")
							}).addClass("stepon")
						});
						r.one("webkitTransitionEnd", function() {
							r.removeClass("stepon").removeClass("slide-right")
						}).addClass("slide-right")
					}
				},
				shownext: function(e, t) {
					var n = g.find(".yezhu-wrapper");
					var r = n.find(".stepon"),
						i = g.find("[data-page=" + e + "]");
					if(!t) {
						r.one("webkitTransitionEnd", function() {
							r.removeClass("stepon").removeClass("slide-left")
						}).addClass("slide-left");
						i.addClass("stepon")
					} else {
						i.addClass("back-ready");
						setTimeout(function() {
							i.one("webkitTransitionEnd", function() {
								i.removeClass("back-ready")
							}).addClass("stepon")
						});
						r.one("webkitTransitionEnd", function() {
							r.removeClass("stepon").removeClass("slide-right")
						}).addClass("slide-right")
					}
				},
				detail: function(e) {
					var t = $(e.currentTarget);
					var n = "getAvgPrice";
					var r = this;
					var i = g.find(".step2");
					var s = v.one("price");
					var o = g.find("#xiaoqu").data("id");
					var u = f;
					var a = t.attr("data-page");
					var l = g.find(".list input");
					var c = g.find("#menpai").attr("frame_id");
					var h = {
						community_id: o,
						city_id: u,
						frame_id: c
					};
					var d = f;
					var m = g.find("#xiaoqu i").text();
					var y = g.find("#loudong i").text();
					var b = g.find("#danyuan i").text();
					var w = g.find("#menpai i").text();
					if(d == "") {
						p.showError("提交失败！")
					} else if(m == "") {
						p.showError("请输入小区名")
					} else if(y == "") {
						p.showError("请输入楼栋号")
					} else if(b == "") {
						p.showError("请输入单元号")
					} else if(w == "") {
						p.showError("请输入门牌号")
					} else {
						E.shownext(a);
						E.list(t, n, i, s, h);
						l.attr("readOnly", "true")
					}
				},
				list: function(e, t, n, r, i) {
					var s = e.find("div").text();
					var o = e.prev("li").text();
					var a = e.prev("li").find("i").text();
					if(a != "") {
						var f = "/house/";
						if(t == "getNearbyCommunities") {
							u.yezhu_getNearbyCommunities.request(i, {
								success: function(e, t) {
									var n = "";
									var i = e && e.data && e.data.list || [];
									console.log(i.length);
									console.log(r);
									if(i.length) {
										for(var s = 0, o = i.length; s < o; s++) {
											n += '<li Id="' + i[s].community_id + '" class="change changeval" data-val="xiaoqu" data-page="step1">' + "<i>" + i[s].community_name + "</i>" + "</li>"
										}
									}
									r.html("<ul>" + n + "</ul>")
								},
								error: function(e, t) {}
							})
						} else if(t == "getbuildings") {
							u.yezhu_getbuildings.request(i, {
								success: function(e, t) {
									var n = "";
									var i = e && e.data && e.data.list || [];
									if(i.length) {
										n += '<p class="title">您可直接选择</p><ul>';
										for(var s = 0, o = i.length; s < o; s++) {
											n += '<li Id="' + i[s].building_id + '" class="change changeval" data-val="loudong" data-page="step1">' + "<i>" + i[s].building_name + "</i>" + "</li>"
										}
										n += "</ul>"
									}
									r.html(n)
								},
								error: function(e, t) {}
							})
						} else if(t == "getUnits") {
							u.yezhu_getUnits.request(i, {
								success: function(e, t) {
									var n = "";
									var i = e && e.data && e.data.list || [];
									if(i.length) {
										n += '<p class="title">您可直接选择</p><ul>';
										for(var s = 0, o = i.length; s < o; s++) {
											n += '<li Id="' + i[s].unit_id + '" class="change changeval" data-val="danyuan" data-page="step1">' + "<i>" + i[s].unit_name + "</i>" + "</li>"
										}
										n += "</ul>"
									}
									r.html(n)
								},
								error: function(e, t) {}
							})
						} else if(t == "getHouses") {
							u.yezhu_getHouses.request(i, {
								success: function(e, t) {
									var n = "";
									var i = e && e.data && e.data.list || [];
									if(i.length) {
										n = '<p class="title">您可直接选择</p><ul>';
										for(var s = 0, o = i.length; s < o; s++) {
											n += '<li Id="' + i[s].house_id + '" frame_id="' + i[s].frame_id + '" class="change changeval" data-val="menpai" data-page="step1">' + "<i>" + i[s].house_name + "</i>" + "</li>"
										}
										n += "</ul>"
									}
									r.html(n)
								},
								error: function(e, t) {}
							})
						}
					} else {
						p.showError("请选择" + o)
					}
				},
				xiaoqu: function(e) {
					var t = $(e.currentTarget);
					var n = f;
					var r = "getNearbyCommunities";
					var i = this;
					var s = g.find(".xiaoquList");
					var o = v.one("xiaoquList");
					if(l) {
						var u = {
							select_city_id: n,
							latitude: c,
							longitude: h,
							city_id: f
						};
						E.list(t, r, s, o, u)
					} else {
						x();
						p.showError("请在设置中打开浏览定位")
					}
					$("#loudong,#danyuan,#menpai").data("id", "").find("i").text("");
					$(".sug").val("")
				},
				loudong: function(e) {
					var t = $(e.currentTarget);
					var n = "getbuildings";
					var r = this;
					var i = g.find(".loudongList");
					var s = v.one("loudongList");
					var o = g.find("#xiaoqu").data("id");
					var u = {
						community_id: o
					};
					E.list(t, n, i, s, u);
					$("#danyuan,#menpai").data("id", "").find("i").text("");
					$(".sug").val("")
				},
				danyuan: function(e) {
					var t = $(e.currentTarget);
					var n = "getUnits";
					var r = this;
					var i = g.find(".danyuanList");
					var s = g.find("#xiaoqu").data("id");
					var o = g.find("#loudong").data("id");
					var u = v.one("danyuanList");
					var a = {
						community_id: s,
						building_id: o
					};
					E.list(t, n, i, u, a);
					$("#menpai").data("id", "").find("i").text("");
					$(".sug").val("")
				},
				menpai: function(e) {
					var t = $(e.currentTarget);
					var n = "getHouses";
					var r = this;
					var i = g.find(".menpaiList");
					var s = g.find("#xiaoqu").data("id");
					var o = g.find("#loudong").data("id");
					var u = g.find("#danyuan").data("id");
					var a = v.one("menpaiList");
					var f = {
						community_id: s,
						building_id: o,
						unit_id: u
					};
					E.list(t, n, i, a, f)
				},
				phone: function(e) {
					var t = $(e.currentTarget);
					var n = t.val();
					var r = /^1[1-9]\d{9}$/;
					var i = this;
					var s = g.find(".yzm");
					if(r.test(n)) {
						s.addClass("yzok");
						s.removeClass("ag")
					} else {
						s.removeClass("yzok");
						s.addClass("ag")
					}
				},
				yzm: function(e) {
					var t = $(e.currentTarget);
					var n = this;
					var r = g.find(".txt-mobile").val();
					var i = "verifycode";
					var s = g.find(".yz-yuyin");
					var a = {
						channel: "delegation",
						mobile_phone_no: r
					};
					o.show({
						reflashImg: function() {
							return "/api/verifycode/GeneratePicture?channel=delegation&v=" + Math.round(Math.random() * 1e8)
						},
						ok: function(e) {
							a["verify_pic"] = e;
							u.yezhu_verifycode.request(a, {
								success: function(e) {
									if(e.errno === 0) {
										var n = 60;
										var r = setInterval(function() {
											if(n > 0) {
												t.removeClass("yzok");
												n--;
												t.text(n + "秒重发")
											}
											if(n <= 0) {
												t.addClass("yzok");
												t.text("重新发送");
												window.clearInterval(r);
												n = 60;
												return false
											}
											if(n == 40) {
												s.show()
											}
										}, 1e3)
									} else {
										p.showError(e.errmsg || "验证码错误")
									}
								},
								error: function(e) {
									p.showError("系统繁忙，请稍候再试")
								}
							})
						}
					})
				},
				yuyin: function(e) {
					var t = $(e.currentTarget);
					var n = this;
					var r = g.find(".txt-mobile").val();
					var i = "VoiceVerifyCode";
					var s = 60;
					var a = {
						channel: "delegation",
						mobile_phone_no: r
					};
					o.show({
						reflashImg: function() {
							return "/api/verifycode/GeneratePicture?channel=delegation&v=" + Math.round(Math.random() * 1e8)
						},
						ok: function(e) {
							a["verify_pic"] = e;
							u.yezhu_VoiceVerifyCode.request(a, {
								success: function(e) {
									if(e.errno === 0) {
										var n = setInterval(function() {
											if(s > 0) {
												t.removeClass("yz-yuyin");
												s--;
												t.text(s + "秒重发")
											}
											if(s <= 0) {
												t.addClass("yz-yuyin");
												t.text("重新发送");
												window.clearInterval(n);
												s = 60;
												return false
											}
										}, 1e3)
									} else {
										p.showError(e.errmsg || "验证码错误")
									}
								},
								error: function(e, t) {
									p.showError("系统繁忙，请稍候再试")
								}
							})
						}
					})
				},
				step: function(e) {
					var t = $(e.currentTarget);
					var n = this;
					var r = g.find("#step3");
					var i = t.attr("data-page");
					var s = v.one("#step3");
					var o = g.find(".pirce").val();
					var a = g.find(".txt-yezhu").val();
					var l = g.find(".txt-captcha").val();
					var c = g.find(".txt-mobile").val();
					if(o == "") {
						p.showError("请填写价格")
					} else if(a == "") {
						p.showError("请填写称呼")
					} else if(l == "") {
						p.showError("请填写验证码")
					} else if(c == "") {
						p.showError("请填写手机号")
					} else if(o < 0) {
						p.showError("售价最小值要大于0")
					} else {
						var h = {
							city_id: f,
							community_name: g.find("#xiaoqu").find("i").text(),
							community_id: g.find("#xiaoqu").data("id"),
							building_name: g.find("#loudong").find("i").text(),
							building_id: g.find("#loudong").data("id"),
							unit_name: g.find("#danyuan").find("i").text(),
							unit_id: g.find("#danyuan").data("id"),
							house_name: g.find("#menpai").find("i").text(),
							house_id: g.find("#menpai").data("id"),
							frame_id: g.find("#menpai").data("frame"),
							expect_price: o,
							expect_month: g.find(".sl-times").val(),
							owner_name: a,
							verify_code: l,
							owner_mobile: c,
							_m_site_owner_delegate: 1
						};
						u.yezhu_releasedelegate.request(h, {
							success: function(e, t) {
								var n = r;
								if(e.errno == "20012") {
									p.showError("请填写正确的验证码")
								} else if(e.errno == "0") {
									p.showSuccess("提交委托成功");
									if(e.data && e.data.is_yezhu_publish && e.data.is_yezhu_publish == 1) {
										var s = v.one("sublist");
										var o = v.one("sublist_new");
										s.hide();
										o.show();
										console.log(s);
										console.log(o)
									}
									E.shownext(i)
								} else {
									p.showError("系统错误，请稍后重试")
								}
							},
							error: function(e, t) {}
						})
					}
				},
				sug: function(e) {
					var t = $(e.currentTarget);
					var n = t.val();
					var r = t.attr("sug-data");
					var i = this;
					var s = g.find("." + r + "List li");
					var o = "step1";
					if(e.keyCode == 13) {
						g.find("#" + r + " i").text(n);
						E.showViewPort(o)
					}
					E.sugs(n, s)
				},
				sugs: function(e, t) {
					var n = this;
					var t = t;
					t.each(function(t) {
						var n = $(this);
						var r = n.text();
						if(r.indexOf(e) >= 0) {
							n.show()
						} else {
							n.hide()
						}
					})
				},
				getxiaoqu: function(e) {
					var t = $(e.currentTarget);
					var n = this;
					var r = f;
					if(y) {
						clearTimeout(y)
					}
					y = setTimeout(function() {
						var e = t.val();
						var n = g.find(".searc-btn");
						if(e != "") {
							var i = {
								keyword: e,
								city_id: f
							};
							var s = v.one("xiaoquList");
							u.yezhu_community.request(i, {
								success: function(e, t) {
									var n = "";
									var r = e && e.data && e.data.list || [];
									if(r.length) {
										for(var i = 0, o = r.length; i < o; i++) {
											n += '<li Id="' + r[i].resblock_id + '" class="change changeval" data-val="xiaoqu" data-page="step1">' + "<i>" + r[i].resblock_name + "</i>" + "</li>"
										}
									}
									s.html("<ul>" + n + "</ul>")
								},
								error: function(e, t) {}
							})
						} else {
							var o = g.find(".xiaoquList");
							var s = v.one("xiaoquList");
							var a = {
								select_city_id: r,
								latitude: c,
								longitude: h,
								city_id: f
							};
							if(l) {
								u.yezhu_getNearbyCommunities.request(a, {
									success: function(e, t) {
										var n = "";
										var r = e && e.data && e.data.list || [];
										if(r.length) {
											for(var i = 0, o = r.length; i < o; i++) {
												n += '<li Id="' + r[i].community_id + '" class="change changeval" data-val="xiaoqu" data-page="step1">' + "<i>" + r[i].community_name + "</i>" + "</li>"
											}
										}
										s.html("<ul>" + n + "</ul>")
									},
									error: function(e, t) {}
								})
							} else {
								x()
							}
						}
					}, 500);
					if(e.keyCode == 13) {
						var i = t.val();
						g.find("#xiaoqu i").text(i)
					}
				},
				xiaoquent: function(e) {
					setTimeout(function() {
						var t = $(e.currentTarget);
						var n = this;
						var r = t.parents(".inp").find("input").val();
						var i = t.parents(".inp").find("input").attr("sug-data");
						g.find("#" + i + " i").text(r);
						var s = "step1";
						E.showViewPort(s)
					}, 100)
				}
			};
			E.init();
			var C = {};
			C.destroy = function() {};
			return C
		})
	},
	A: function(e, t, n, r) {
		var i = n("b");
		var s = n("c");
		var o = n("C");
		var u = n("D");
		var a = n("e");
		var f = n("F");
		var l = n("i");
		var c = n("H");
		e.exports = function(e, t) {
			function y() {
				var e = c.get("visitedCityList"),
					n = t.args.cur_city_id + "";
				e = e ? e.split(",") : [];
				if(n && e.indexOf(n) === -1) {
					e.unshift(n);
					c.save("visitedCityList", e.slice(0, 3).join(","))
				}
			}
			var n = [];
			var r;
			var h = s($("#" + e), t);
			var p = u($("#" + e));
			var d = a($("#" + e));
			var v = o($("#" + e), t);
			var m = f(e, t);
			var g = {
				imgUrl: t["args"]["fe_root"] + "images/common/logo300x300.png?_v=" + t["args"]["version"],
				lineLink: location.href,
				descContent: $("meta[name=description]").attr("content") || "",
				shareTitle: document.title,
				shareTitle_friend: document.title
			};
			g = $.extend(g, t["args"]["weixin_share"] || {});
			l(g);
			$(window).on("load", function() {
				$ljBridge.ready(function(s) {
					v.init();
					r = i($("#" + e));
					n.push(r);
					if(t["args"]["ajax_css_inline"] && t["args"]["ajax_css_inline"].length) {
						for(var o in t["args"]["ajax_css_inline"]) {
							$.get(t["args"]["ajax_css_inline"][o], function() {
								console && console.log && console.log("css " + t["args"]["ajax_css_inline"][o] + " load success")
							})
						}
					}
				})
			});
			y();
			n.push(h);
			n.push(p);
			n.push(d);
			n.push(m);
			n.push(v);
			return {
				destroy: function() {
					for(var e = n.length - 1; e >= 0; e--) {
						n[e].destroy && n[e].destroy()
					}
				}
			}
		}
	},
	b: function(e, t, n, r) {
		var i = n("B");
		var s;
		var o = [];
		var u = {
			init: function(e) {
				u.initDoms(e);
				u.initLazy()
			},
			initDoms: function(e) {
				if(e) {
					s = $(e).find(".lazyload")
				} else {
					s = $(".lazyload")
				}
			},
			initLazy: function() {
				setTimeout(function() {
					$.each(s, function(e, t) {
						var n = i.init({
							el: t,
							"margin-top": 10,
							callback: function() {
								var e = $(t).attr("origin-src");
								var n = $(t).attr("error-src");
								if(e) {
									var r = new Image;
									r.src = e;
									r.onload = function() {
										$(t).attr("src", e)
									};
									if(n) {
										r.onerror = function() {
											$(t).attr("src", n)
										}
									}
								}
							}
						});
						o.push(n)
					})
				}, 500)
			}
		};
		e.exports = function(e) {
			u.init(e);
			return {
				destroy: function() {
					$.each(o, function(e, t) {
						t.destroy && t.destroy()
					})
				}
			}
		}
	},
	B: function(e, t, n, r) {
		var i = [];
		var s = false;
		t.init = function(e) {
			var t = {
				el: "",
				marginTop: 0,
				marginBottom: 0,
				times: 1,
				always: false,
				callback: function() {}
			};
			var n = "测试用";
			var r;
			var o;
			var u = {
				execute: function() {
					var e = false,
						t;
					for(var n = 0, r = i.length; n < r; n++) {
						t = i[n];
						if(t.times > 0) {
							e = u.executeInView(t)
						}
						if(e && !t.always) {
							if(--t.times <= 0) {
								i.splice(n, 1);
								r--;
								n--
							}
						}
					}
				},
				executeInView: function(e) {
					var t = $(e.el);
					var n = o.width(),
						r = o.height(),
						i = document.documentElement.scrollTop || document.body.scrollTop;
					var s = t.offset();
					var u = s.top - e.marginTop,
						a = u + s.height + e.marginBottom;
					var f = i,
						l = i + r;
					if(a < f || u > l) {
						return false
					}
					e.callback && e.callback();
					return true
				}
			};
			var a = {
				scroll: function() {
					if(r) {
						clearTimeout(r)
					}
					r = setTimeout(function() {
						u.execute()
					}, 30)
				}
			};
			var f = {
				init: function() {
					f.initParam() && f.initView();
					f.initEvent();
					s = true
				},
				initParam: function() {
					o = $(window);
					$.extend(t, e);
					if(!t.el) {
						return false
					}
					return true
				},
				initView: function() {
					var e = u.executeInView(t);
					if(e && !t.always) {
						return false
					}
					i.push(t);
					return true
				},
				initEvent: function() {
					if(!s) {
						$(window).scroll(a.scroll)
					}
				}
			};
			f.init();
			return {
				destroy: function() {
					var e = i.indexOf(t);
					if(e >= 0) {
						i.splice(e, 1)
					}
					if(i.length == 0) {
						$(window).unbind("scroll", a.scroll);
						s = false
					}
				},
				pause: function() {
					var e = i.indexOf(t);
					if(e >= 0) {
						i.splice(e, 1)
					}
				},
				resume: function() {
					var e = i.indexOf(t);
					if(e < 0) {
						i.push(t)
					}
				}
			}
		}
	},
	c: function(e, t, n, r) {
		var i;
		var s = {
			download: function(e) {
				var t = $(e.currentTarget).getData();
				try {
					var n = location.pathname.slice(1).split("/");
					var r = "";
					if(i && n[0] == i["cur_city_short"]) {
						r = i["cur_city_id"]
					} else if(i && n[0] == i["nation"]["short"]) {
						r = i["nation"]["nation_id"]
					} else {
						r = i["cur_city_id"]
					}
					var s = "download_click";
					if(t && t[0] && t[0]["ljweb_mod"]) {
						s = t[0]["ljweb_mod"]
					}
					window["post_ulog"] && window["post_ulog"]("10043", {
						ljweb_group: "BIGDATA_M",
						ljweb_mod: s,
						ljweb_ref: document.referrer,
						ljweb_cid: r,
						ljweb_channel_key: i["js_ns"]
					});
					window["post_ulog"] && window["post_ulog"]("10191", {
						ljweb_mod: s
					})
				} catch(e) {}
				var o = $(e.currentTarget).attr("data-detail_info");
				o = o && JSON.parse(o);
				if(o && o["awaken_app_info"] && o["awaken_app_info"]["download_url"]) {
					var u = o["awaken_app_info"]["scheme"];
					var a = o["awaken_app_info"]["type"];
					if(a == "scheme" && u) {
						window["post_ulog"] && window["post_ulog"]("10043", {
							ljweb_group: "BIGDATA_M",
							ljweb_mod: "call_ready",
							ljweb_ref: document.referrer,
							ljweb_cid: r,
							ljweb_channel_key: i["js_ns"]
						});
						location.href = u;
						setTimeout(function() {
							location.href = o["awaken_app_info"]["download_url"]
						}, 2e3)
					} else {
						if($.os.android) {
							window.open(o["awaken_app_info"]["download_url"], "_blank")
						} else {
							window.open(o["awaken_app_info"]["download_url"], "_top")
						}
					}
				} else if(o && o["download_url"]) {
					var u = o["scheme"];
					var a = o["type"];
					if(a == "scheme" && u) {
						window["post_ulog"] && window["post_ulog"]("10043", {
							ljweb_group: "BIGDATA_M",
							ljweb_mod: "call_ready",
							ljweb_ref: document.referrer,
							ljweb_cid: r,
							ljweb_channel_key: i["js_ns"]
						});
						location.href = u;
						setTimeout(function() {
							location.href = o["download_url"]
						}, 2e3)
					} else {
						if($.os.android) {
							window.open(o["download_url"], "_blank")
						} else {
							window.open(o["download_url"], "_top")
						}
					}
				} else if(t && t[0] && t[0]["download_url"]) {
					var f = decodeURI(t[0]["download_url"]);
					if($.os.android) {
						window.open(f, "_blank")
					} else {
						window.open(f, "_top")
					}
				}
			}
		};
		var o = false;
		var u = {
			init: function() {
				u.bind()
			},
			bind: function() {
				$(document.body).on("tap", "[data-mark=download_app]", s.download)
			}
		};
		e.exports = function(e, t) {
			if(o) return;
			o = true;
			i = t && t["args"];
			u.init(e);
			return {
				destroy: function() {
					$(document.body).off("tap", "[data-mark=download_app]", s.download);
					o = false
				},
				addNode: function(e) {
					e.on("tap", s.download)
				}
			}
		}
	},
	C: function(e, t, n, r) {
		var s = n("B");
		var o = n("d");
		var u = function() {
			return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(e) {
				window.setTimeout(e, 1e3 / 60)
			}
		}();
		var a = false;
		var f;
		var l = [];
		var c, h;
		window.LJLOGS = {};
		var p = [];
		var d, v, m;
		var g = [];
		var y = function(e, t, n) {
			var r = {
				pid: "lianjiamweb",
				key: window.location.href
			};
			if(n) {
				r.pid = n
			}
			r.action = t || {};
			if(c["js_ns"] == "m_pages_siteSearch" && !r["action"]["ljweb_channel"]) {
				switch(c["cur_channel_id"]) {
					case "ershoufang":
						r["action"]["ljweb_channel"] = "ershoufang";
						break;
					case "zufang":
						r["action"]["ljweb_channel"] = "zufang";
						break;
					case "xinfang":
						r["action"]["ljweb_channel"] = "xinfang";
						break;
					case "sold":
						r["action"]["ljweb_channel"] = "chengjiao";
						break;
					case "jingjiren":
						r["action"]["ljweb_channel"] = "jingjiren";
						break;
					case "school":
					case "middleschool":
						r["action"]["ljweb_channel"] = "xuequfang";
						break;
					case "fangjia":
						r["action"]["ljweb_channel"] = "fangjia";
						break;
					default:
						r["action"]["ljweb_channel"] = c["cur_channel_id"]
				}
			}
			p.push({
				evtid: e,
				obj: r
			});
			for(var i in p) {
				try {
					if(p[i]) {
						$ULOG.send(p[i].evtid, p[i].obj);
						delete p[i]
					}
				} catch(s) {}
			}
		};
		window["post_ulog"] = y;
		var b = function() {
			var e = location.pathname.slice(1).split("/");
			var t = "";
			if(c && e[0] == c["cur_city_short"]) {
				t = c["cur_city_id"]
			} else if(c && e[0] == c["nation"]["short"]) {
				t = c["nation"]["nation_id"]
			} else {
				t = c["cur_city_id"]
			}
			var n = {
				ljweb_group: "BIGDATA_M",
				ljweb_mod: "pv",
				ljweb_ref: document.referrer,
				ljweb_cid: t,
				ljweb_channel_key: c["js_ns"]
			};
			y("10043", n, "lianjiamweb")
		};
		var w = function() {
			var e = location.href;
			if(e != f) {
				try {
					if(/newsarticle/img.test(navigator.userAgent)) {
						try {
							try {
								window.$ULOG.send("10011", {
									pid: "lianjiamweb",
									key: window.location.href
								})
							} catch(t) {}
						} catch(n) {}
					} else {
						$ULOG.send("1,3");
						b()
					}
					if(window.location.hostname == "m.lianjia.com") {
						ga("send", "event", "Click", e, "1")
					}
					LJLOGS.ga();
					_czc.push(["_trackEvent", "click", e, "1"]);
					LJLOGS.cnzz()
				} catch(t) {}
				f = e
			}
			u(w)
		};
		var E = {
			ulog: function(e) {
				var t = $(e.currentTarget).attr("data-evtid");
				var n = $.queryToJson($(e.currentTarget).attr("data-ulog") || "");
				var r = $(e.currentTarget).attr("data-pid");
				y(t, n, r)
			},
			ulog_action: function(e) {
				var t = $(e.currentTarget).attr("data-evtid_action");
				var n = $.queryToJson($(e.currentTarget).attr("data-ulog_action") || "");
				var r = $(e.currentTarget).attr("data-pid_action");
				y(t, n, r)
			},
			ulog_search: function(e) {
				var t = $(e.currentTarget).attr("data-ulog_search");
				if(t) {
					t = $.queryToJson(t);
					o({
						rebuild: function(e) {
							for(var n in t) {
								if(e[n] != undefined) {
									e[n] = t[n]
								}
							}
						}
					}, h)
				}
			}
		};
		var S = function(e, t, n) {
			var r = document;
			var i = "readyState";
			var s = "onreadystatechange";
			var o;
			var u;
			var a = +(new Date);
			var f = document.createElement("script");
			f.src = e;
			f.async = 1;
			document.getElementsByTagName("head")[0].appendChild(f);
			l.push(f);
			f.onload = f[s] = function() {
				if(o || f[i] && !/^c|loade/.test(f[i])) return;
				f.onload = f.onerror = f[s] = null;
				o = 1;
				u && clearTimeout(u);
				if(n && n() || !n) {
					t && t("success", +(new Date) - a)
				} else {
					t && t("load succ,but run error", +(new Date) - a)
				}
			};
			f.onerror = function() {
				f.onload = f.onerror = f[s] = null;
				o = 1;
				u && clearTimeout(u);
				t && t("error", 8e4)
			};
			u = setTimeout(function() {
				f.onload = f.onerror = f[s] = null;
				o = 1;
				t && t("timeout", 8e3)
			}, 8e3)
		};
		var x = {
			init: function(e) {
				x.initDoms(e);
				x.bind();
				x.initLazy()
			},
			initDoms: function(e) {
				f = location.href;
				d = $(e).find(".lazyload_ulog");
				v = $(e).find(".lazyload_ulog_search");
				m = $(e).find(".lazyload_ulog_action");
				if(/newsarticle/img.test(navigator.userAgent)) {
					y("10011", {})
				} else {
					b()
				}
				window["GoogleAnalyticsObject"] = "ga";
				window["ga"] = window["ga"] || function() {
					(window["ga"].q = window["ga"].q || []).push(arguments)
				};
				window["ga"].l = 1 * new Date;
				var t = window["ga"].toString();
				S("//www.google-analytics.com/analytics.js", function(e, t) {
					window.console && console.log && console.log("ga 加载状态：" + e + "，加载时间：" + t + "ms");
					try {
						LJLOGS.ga();
						if(e === "success") {
							window.$ULOG.send("10020", {
								pid: "lianjiamweb",
								key: window.location.href
							})
						} else if(e === "error") {
							window.$ULOG.send("10021", {
								pid: "lianjiamweb",
								key: window.location.href
							})
						} else if(e === "timeout") {
							window.$ULOG.send("10022", {
								pid: "lianjiamweb",
								key: window.location.href
							})
						}
					} catch(n) {}
				}, function() {
					if(t == window["ga"].toString()) {
						return false
					} else {
						return true
					}
				});
				switch(window.location.hostname) {
					case "m.lianjia.com":
						ga("create", "UA-55871942-1", "auto");
						ga("create", "UA-34859395-1", "auto", {
							name: "past"
						});
						ga("create", "UA-61982569-1", "auto", {
							name: "new"
						});
						ga("create", "UA-75975739-1", "auto", {
							name: "newsarticle"
						});
						break;
					case "wangyi-m.lianjia.com":
						ga("create", "UA-55871942-1", "auto");
						ga("create", "UA-34859395-1", "auto", {
							name: "past"
						});
						ga("create", "UA-61982569-1", "auto", {
							name: "new"
						});
						ga("create", "UA-92062018-1", "auto", {
							name: "netease"
						})
				}
				ga("create", "UA-55876525-1", "auto", {
					name: "global"
				});
				ga("create", "UA-60608360-1", "auto", {
					name: "new_global"
				});
				LJLOGS.ga = function() {
					var e = location.pathname;
					ga("send", "pageview", e);
					ga("past.send", "pageview", e);
					ga("new.send", "pageview", e);
					ga("global.send", "pageview", e);
					ga("new_global.send", "pageview", e);
					if(/newsarticle/img.test(navigator.userAgent)) {
						ga("newsarticle.send", "pageview", e)
					}
					if(window.location.hostname == "wangyi-m.lianjia.com") {
						ga("netease.send", "pageview", e)
					}
				};
				var n = n || [];
				n.push(["_setAccount", "1253491255"]);
				LJLOGS.cnzz = function() {
					$.each(LJLOGS.cnzz.id, function(e, t) {
						var n = document.createElement("script");
						$("#log_cnzz_" + t).remove();
						n.type = "text/javascript";
						n.id = "log_cnzz_" + t;
						n.src = "//w.cnzz.com/c.php?id=" + t;
						document.body.appendChild(n)
					})
				};
				LJLOGS.cnzz.id = ["1254525948"];
				if(/newsarticle/img.test(navigator.userAgent)) {
					LJLOGS.cnzz.id.push("1254694146")
				}
				if(window.location.hostname == "m.lianjia.com") {
					LJLOGS.cnzz.id.push("1253491255")
				}
				$.each(LJLOGS.cnzz.id, function(e, t) {
					var n = document.createElement("span");
					n.id = "cnzz_stat_icon_" + t;
					document.body.appendChild(n)
				});
				LJLOGS.cnzz();
				window._hmt = window._hmt || [];
				S("//hm.baidu.com/hm.js?9152f8221cb6243a53c83b956842be8a", function(e, t) {
					window.console && console.log && console.log("baidulog 加载状态：" + e + "，加载时间：" + t + "ms")
				}, function() {
					if(_hmt && _hmt.id) {
						return true
					} else {
						return false
					}
				});
				if(!location.hostname || location.hostname == "m.lianjia.com") {
					var r, s;
					var o = document.getElementsByTagName("link");
					if(o.length > 0) {
						for(i = 0; i < o.length; i++) {
							if(o[i].rel.toLowerCase() == "canonical" && o[i].href) {
								r = o[i].href
							}
						}
					}
					if(!r) {
						s = window.location.protocol.split(":")[0]
					} else {
						s = r.split(":")[0]
					}
					if(!r) r = window.location.href;
					! function() {
						var e = /([http|https]:\/\/[a-zA-Z0-9\_\.]+\.baidu\.com)/gi,
							t = r,
							n = document.referrer;
						if(!e.test(t)) {
							var i = String(s).toLowerCase() === "https" ? "https://sp0.baidu.com/9_Q4simg2RQJ8t7jm9iCKT-xh_/s.gif" : "//api.share.baidu.com/s.gif";
							n ? (i += "?r=" + encodeURIComponent(document.referrer), t && (i += "&l=" + t)) : t && (i += "?l=" + t);
							var o = new Image;
							o.src = i
						}
					}(window)
				}
			},
			bind: function() {
				w();
				$(document.body).delegate(".post_ulog", "tap", E["ulog"]);
				$(document.body).delegate(".post_ulog_action", "tap", E["ulog_action"]);
				$(document.body).delegate(".post_ulog_search", "tap", E["ulog_search"])
			},
			initLazy: function() {
				setTimeout(function() {
					$.each(d, function(e, t) {
						var n = s.init({
							el: t,
							"margin-top": 10,
							callback: function() {
								var e = $(t).attr("data-evtid");
								var n = $.queryToJson($(t).attr("data-ulog") || "");
								y(e, n)
							}
						});
						g.push(n)
					});
					$.each(v, function(e, t) {
						var n = s.init({
							el: t,
							"margin-top": 10,
							callback: function() {
								var e = $(t).attr("data-lazyulog_search");
								if(e) {
									e = $.queryToJson(e);
									o({
										rebuild: function(t) {
											for(var n in e) {
												if(t[n] != undefined) {
													t[n] = e[n]
												}
											}
										}
									}, h)
								}
							}
						});
						g.push(n)
					});
					$.each(m, function(e, t) {
						var n = s.init({
							el: t,
							"margin-top": 10,
							callback: function() {
								var e = $(t).attr("data-evtid_lazyaction");
								var n = $.queryToJson($(t).attr("data-ulog_lazyaction") || "");
								y(e, n)
							}
						});
						g.push(n)
					})
				}, 500)
			}
		};
		e.exports = function(e, t) {
			h = t;
			c = t && t["args"];
			return {
				init: function() {
					if(a) return;
					a = true;
					x.init(e)
				},
				destroy: function() {
					window.$ULOG && (window.$ULOG = undefined);
					$(l).remove();
					$(document.body).undelegate(".post_ulog", "tap", E["ulog"]);
					$(document.body).undelegate(".post_ulog_search", "tap", E["ulog_search"]);
					$(document.body).undelegate(".post_ulog_action", "tap", E["ulog_action"]);
					$.each(g, function(e, t) {
						t.destroy && t.destroy()
					});
					a = false
				}
			}
		}
	},
	d: function(e, t, n, r) {
		e.exports = function(e, t) {
			var n = {
				ljweb_group: "SEARCH_M",
				ljweb_id: "",
				ljweb_mod: "",
				ljweb_bl: "",
				ljweb_el: "",
				ljweb_index: "",
				ljweb_value: "",
				ljweb_url: "",
				ljweb_sample: "",
				ljweb_source: "",
				ljweb_stat_id: "",
				ljweb_ref: document.referrer,
				ljweb_ljref: "",
				ljweb_house_code: "",
				ljweb_strategy_id: ""
			};
			var r = function(e) {
				e = e.replace(/([\.\[\]\$])/g, "\\$1");
				var t = new RegExp("(^| )" + e + "=([^;]*)?;", "ig");
				var n = document.cookie + ";";
				var r = t.exec(n);
				var i = [];
				while(r) {
					i.push(r[2] || "");
					r = t.exec(n)
				}
				return i
			};
			var i = t && t["args"];
			$.extend(n, e);
			var s = location.pathname.slice(1).split("/");
			var o = "";
			if(s[0] == i["cur_city_short"]) {
				o = i["cur_city_id"]
			} else if(s[0] == i["nation"]["short"]) {
				o = i["nation"]["nation_id"]
			} else {
				o = i["cur_city_id"]
			}
			var u;
			(function() {
				if(!window.$ULOG) {
					u = setTimeout(arguments.callee, 1e3);
					return
				}
				u && clearTimeout(u);
				n.ljweb_cid = o;
				n.ljweb_channel_key = i["js_ns"];
				var e = r("ljref");
				n.ljweb_ljref = e && e[0] || "";
				var t = r("sample_traffic_test");
				n.ljweb_sample = t && t[0] || "";
				if(n.rebuild) {
					n.rebuild(n);
					delete n["rebuild"]
				}
				if(n.pid) {
					var s = n.pid;
					delete n.pid;
					window["post_ulog"] && window["post_ulog"]("10043", n, s)
				} else {
					window["post_ulog"] && window["post_ulog"]("10043", n)
				}
			})()
		}
	},
	D: function(e, t, n, r) {
		var i = {
			foot_nav: function(e) {
				var t = $(e.el);
				var n = t.index();
				var r = s.get("foot_nav");
				var i = s.get("foot_navs");
				r.eq(a).removeClass("active");
				t.addClass("active");
				i.eq(a).removeClass("active");
				i.eq(n).addClass("active");
				a = n
			}
		};
		var s;
		var o = false;
		var u;
		var a = 0;
		var f = {
			init: function(e) {
				f.initDoms(e);
				f.bind()
			},
			initDoms: function(e) {
				s = $(e).getMark();
				u = $(e).de()
			},
			bind: function() {
				u.add("foot_nav", "tap", i.foot_nav)
			}
		};
		e.exports = function(e) {
			if(o) return;
			o = true;
			f.init(e);
			return {
				destroy: function() {
					u.remove("foot_nav", "tap", i.foot_nav);
					u.destroy();
					o = false
				}
			}
		}
	},
	e: function(e, t, n, r) {
		function u(e) {
			if(e && e.tagName && e.tagName.toLowerCase() === "a") return e;
			if(e && e.parentNode) {
				return u(e.parentNode)
			}
			return false
		}
		var i = n("E");
		var s = n("f");
		var o = [{
			urlRule: /\/ershoufang\/(\w{1,15})\.html/,
			getScheme: function(e, t, n) {
				var r = $(n).attr("is_sold_tag_for_editor");
				if(r == "0") {
					return "ershou/detail?houseCode=" + t[1]
				} else if(r == "1") {
					if($.os.ios && f) {
						var s = f.getAppVersion();
						if(s && i(s, ">=", "7.0")) {
							return "tradehistory/detail?housecode=" + t[1]
						}
					}
					if($.os.android && f) {
						var s = f.getAppVersion();
						if(s && i(s, ">=", "7.2.0")) {
							return "tradehistory/detail?housecode=" + t[1]
						}
					}
					return false
				} else if(r == "2") {
					return false
				} else {
					return "ershou/detail?houseCode=" + t[1]
				}
			}
		}, {
			urlRule: /\/xiaoqu\/(\d+)\/?$/,
			getScheme: function(e, t, n) {
				var r = $(n).attr("isnew");
				if(r && f) {
					var s = f.getAppVersion();
					if(s && i(s, ">=", "7.2")) {
						return "community/newdetail?communityid=" + t[1]
					}
				}
				return "community/detail?communityid=" + t[1]
			},
			ansyncMethod: function(e, t, n) {
				if(f) {
					var r = f.getAppVersion();
					if(r && i(r, ">=", "7.2")) {
						s.isNewresblock.request({
							id: t[1]
						}, {
							success: function(n) {
								var r;
								if(n.errno == "0" && n.data && n.data.version == "2") {
									r = "community/newdetail?communityid=" + t[1]
								} else if(n.errno == "0" && n.data && n.data.version == "1") {
									r = "community/detail?communityid=" + t[1]
								} else if(n.errno == "0" && n.data && n.data.version == "3") {
									r = "community/detailv3?communityid=" + t[1]
								}
								if(r) {
									r = f.getSchemeLink(r);
									f.actionWithUrl(r)
								} else {
									location.href = e
								}
							},
							fail: function() {
								location.href = e
							}
						})
					} else {
						location.href = e
					}
				} else {
					location.href = e
				}
			}
		}, {
			urlRule: /\/fangjia/,
			getScheme: function(e, t, n) {
				return false
			}
		}, {
			urlRule: /dianpu\.lianjia\.com/,
			getScheme: function(e, t, n) {
				return false
			}
		}, {
			urlRule: /\/yezhu\/?$/,
			getScheme: function(e, t, n) {
				return "sellHouse/main"
			}
		}, {
			urlRule: /\/chengjiao\//,
			getScheme: function(e, t, n) {
				var r = $(n).attr("app_jump");
				if(r) {
					var i = $(n).attr("app_jump_data");
					return "tradedSearch/same_building" + (i ? "?" + i : "")
				}
				return false
			}
		}];
		var a = false;
		var f;
		e.exports = function(e) {
			if(a === true) return;
			$ljBridge.ready(function(t, n) {
				function i(e) {
					var n = u(e.target);
					if(n) {
						for(var r = 0, i = o.length; r < i; r++) {
							var s = o[r];
							var a = n.pathname;
							var f = a.match(s.urlRule);
							if(f && f.length) {
								if(s.ansyncMethod) {
									e.preventDefault();
									s.ansyncMethod(a, f, n);
									return false
								} else {
									var l = s.getScheme(a, f, n);
									if(l) {
										l = t.getSchemeLink(l);
										t.actionWithUrl(l);
										e.preventDefault();
										return false
									} else {
										return true
									}
								}
							}
						}
					}
				}
				var r = n.isLianjiaApp;
				if(r) {
					f = t;
					$(e).on("click", i)
				}
			});
			a = true;
			return {
				destroy: function() {
					$(e).off("click", action);
					a = false
				}
			}
		}
	},
	E: function(e, t, n, r) {
		e.exports = function(t, n, r) {
			t = t.split(".");
			r = r.split(".");
			var i = Math.max(t.length, r.length);
			var s = 0;
			for(var o = 0; o < i; o++) {
				s = (t[o] | 0) - (r[o] | 0);
				if(s != 0) break
			}
			switch(n) {
				case "<":
					return s < 0;
				case "<=":
					return s <= 0;
				case "==":
				case "===":
					return s === 0;
				case ">=":
					return s >= 0;
				case ">":
					return s > 0;
				case "!=":
				case "!==":
				case "<>":
					return s != 0;
				default:
					throw 'operation "' + n + '" is not allowed.'
			}
		}
	},
	f: function(e, t, n, r) {
		var i = true;
		var s = i ? "http://devm.lianjia.com:9002" : "http://m.api.lianjia.com";
		t.citys = $.trans("/api/dict/city", {}, function(e) {
			return e
		});
		t.xuequfang_citys = $.trans("/mapi/xuequfang/xuequ/index", {}, function(e) {
			return e
		});
		t.xuequfangQiugou = $.trans("/mapi/xuequfang/qiugou/Submit", {}, function(e) {
			return e
		});
		t.my_followHouse = $.trans("/api/user/favorite/ershoufanglist", {}, function(e) {
			return e
		});
		t.my_followNewHouse = $.trans("/mapi/newhouse/followProjectlist", {}, function(e) {
			return e
		});
		t.my_followResblock = $.trans("/api/user/favorite/xiaoqulist", {}, function(e) {
			return e
		});
		t.my_followZufang = function(e) {
			return $.trans("/api/usercenter/favoritezufang/" + e, {}, function(e) {
				return e
			})
		};
		t.follow = $.trans("/api/user/favorite/add", {
			type: "POST"
		}, function(e) {
			return e
		});
		t.unfollow = $.trans("/api/user/favorite/delete", {
			type: "POST"
		}, function(e) {
			return e
		});
		t.isFavorite = $.trans("/api/user/favorite/isfavorite", {}, function(e) {
			return e
		});
		t.lvju_youhui = $.trans("/api/lvju/recordphone/", {}, function(e) {
			return e
		});
		t.load_more = function() {
			return $.trans(location.href, {}, function(e) {
				return e
			})
		};
		t.load_more_ignore_path = function(e) {
			return $.trans(location.href.replace("/" + e, ""), {}, function(e) {
				return e
			})
		};
		t.load_more_new = function(e) {
			return $.trans(location.href + e, {}, function(e) {
				return e
			})
		};
		t.baike_more = function(e, t) {
			return $.trans("/" + e + "/baike/" + t, {}, function(e) {
				return e
			})
		};
		t.search_sug = $.trans("/api/sug/index", {}, function(e) {
			return e
		});
		t.searchfangjia_sug = $.trans("/api/sug/fangjia", {}, function(e) {
			return e
		});
		t.searchxinfang_sug = $.trans("/api/sug/xinfang", {}, function(e) {
			return e
		});
		t.searchzhongxue_sug = $.trans("/api/sug/zhongxue", {}, function(e) {
			return e
		});
		t.searchxiaoxue_sug = $.trans("/api/sug/xiaoxue", {}, function(e) {
			return e
		});
		t.search_lvju_sug = $.trans("/api/sug/lvju", {}, function(e) {
			return e
		});
		t.school2resblock = $.trans("/api/sug/school2resblocks", {}, function(e) {
			return e
		});
		t.resblock2school = $.trans("/api/sug/resblock2schools", {}, function(e) {
			return e
		});
		t.wenda_sug = function(e, t) {
			e = e || "bj";
			return $.trans("/" + e + "/wenda/sug/" + t + "/", {}, function(e) {
				return e
			})
		};
		t.questionDetail = $.trans("/api/wenda/questionDetail", {}, function(e) {
			return e
		});
		t.setFavorite = $.trans("/api/wenda/setFavorite", {}, function(e) {
			return e
		});
		t.wendaZuiwen = $.trans("/api/wenda/uploadExtraQuestion", {
			type: "POST"
		}, function(e) {
			return e
		});
		t.wendaZuida = $.trans("/api/wenda/uploadExtraAnswer", {
			type: "POST"
		}, function(e) {
			return e
		});
		t.wendaHuifu = $.trans("/api/wenda/uploadAnswer", {
			type: "POST"
		}, function(e) {
			return e
		});
		t.wendaLike = $.trans("/api/wenda/like", {}, function(e) {
			return e
		});
		t.wendaFollow = $.trans("/api/wenda/follow", {}, function(e) {
			return e
		});
		t.wendaUnfollow = $.trans("/api/wenda/unFollow", {}, function(e) {
			return e
		});
		t.wendaMultipraised = $.trans("/api/wenda/multipraised", {}, function(e) {
			return e
		});
		t.getMonthData = function(e, t) {
			return $.trans("/" + e + "/report/resblock/trend/" + t, {}, function(e) {
				return e
			})
		};
		t.users = function(e, t) {
			return $.trans(e, {
				type: t
			}, function(e) {
				return e
			})
		};
		t.yezhu_getNearbyCommunities = $.trans("/api/resblock/around", {}, function(e) {
			return e
		});
		t.yezhu_community = $.trans("/api/sug/resblock", {}, function(e) {
			return e
		});
		t.yezhu_getcities_v2 = $.trans("//api.map.baidu.com/geocoder/v2/", {
			dataType: "jsonp"
		}, function(e) {
			return e
		});
		t.yezhu_getcities_v1 = $.trans("//api.map.baidu.com/geoconv/v1/", {
			dataType: "jsonp"
		}, function(e) {
			return e
		});
		t.yezhu_getbuildings = $.trans("/api/resblock/getbuildings", {}, function(e) {
			return e
		});
		t.yezhu_getUnits = $.trans("/api/resblock/getUnits", {}, function(e) {
			return e
		});
		t.yezhu_getHouses = $.trans("/api/resblock/getHouses", {}, function(e) {
			return e
		});
		t.yezhu_verifycode = $.trans("/api/verifycode/verifycode", {}, function(e) {
			return e
		});
		t.yezhu_VoiceVerifyCode = $.trans("/api/verifycode/voiceverifycode", {}, function(e) {
			return e
		});
		t.yezhu_releasedelegate = $.trans("/api/yezhu/releasedelegate", {}, function(e) {
			return e
		});
		t.getFangjia = function(e) {
			return $.trans("/" + e + "/fangjia/trend/", {}, function(e) {
				return e
			})
		};
		t.getSupplyData = function(e, t) {
			return $.trans("/" + e + "/fangjia/supply?" + $.param(t), {}, function(e) {
				return e
			})
		};
		t.redianLike = $.trans("/api/redian/like", {}, function(e) {
			return e
		});
		t.getTiwenTags = $.trans("/api/wenda/tags", {}, function(e) {
			return e
		});
		t.ask = $.trans("/api/wenda/ask", {}, function(e) {
			return e
		});
		t.weeklyReportZan = $.trans("/api/yezhuWeeklyReport/like", {}, function(e) {
			return e
		});
		t.baike_sug = function(e, t) {
			return $.trans("/" + e + "/baike/suggest/?query=" + t, {}, function(e) {
				return e
			})
		};
		t.baike_index = function(e, t) {
			return $.trans("/" + e + "/baike/" + t, {}, function(e) {
				return e
			})
		};
		t.baike_lookagain = function(e, t) {
			return $.trans("/api/baike/getlookagain?content_id=" + e + "&city_id=" + t, function(e) {
				return e
			})
		};
		t.lvjuCity = $.trans("/you/", {}, function(e) {
			return e
		});
		t.trade_checkAuth = $.trans("/teapi/te/auth/checkAuth", {
			type: "POST"
		}, function(e) {
			return e
		});
		t.trade_sendVerifycode = $.trans("/teapi/te/auth/sendMobileVerifyCode", {}, function(e) {
			return e
		});
		t.trade_userverify = $.trans("/teapi/te/auth/checkSecurity", {
			type: "POST"
		}, function(e) {
			return e
		});
		t.trade_bind = $.trans("/teapi/te/auth/bindRelation", {}, function(e) {
			return e
		});
		t.trade_unbind = $.trans("/teapi/te/auth/unbind", {}, function(e) {
			return e
		});
		t.trade_list = $.trans("/teapi/te/start/list", {
			type: "POST"
		}, function(e) {
			return e
		});
		t.trade_list_one_pingjia = $.trans("/teapi/te/feedback/getProcessFeedBackInfo", {
			type: "GET"
		}, function(e) {
			return e
		});
		t.trade_detail = $.trans("/teapi/te/info/detail", {
			type: "POST"
		}, function(e) {
			return e
		});
		t.trade_user_pingjia_config = $.trans("/teapi/te/feedback/getProcessFeedbackConfig", {
			type: "GET"
		}, function(e) {
			return e
		});
		t.trade_user_pingjia_detail = $.trans("/teapi/te/feedback/getProcessFeedbackDetail", {
			type: "GET"
		}, function(e) {
			return e
		});
		t.trade_user_pingjia_detail_set = $.trans("/teapi/te/feedback/SetProcessFeedback", {
			type: "POST"
		}, function(e) {
			return e
		});
		t.trade_feedback = $.trans("/teapi/te/info/feedBack", {
			type: "POST"
		}, function(e) {
			return e
		});
		t.trade_user_feedback = $.trans("/teapi/te/feedback/userFeedBack", {
			type: "POST"
		}, function(e) {
			return e
		});
		t.trade_comment_agent = $.trans("/teapi/te/info/feedback", {
			type: "POST"
		}, function(e) {
			return e
		});
		t.trade_beijian = $.trans("/teapi/te/info/beiJian", {}, function(e) {
			return e
		});
		t.trade_beijian_beijing = $.trans("/teapi/te/info/getBeiJianList", {}, function(e) {
			return e
		});
		t.trade_beijianDetail = $.trans("/teapi/te/info/beiJianDetail", {}, function(e) {
			return e
		});
		t.lvjuArticle = function(e) {
			return $.trans("/" + e + "/you/gaikuang/", {}, function(e) {
				return e
			})
		};
		t.orderAndPay = $.trans("/market/marketing/market/orderAndPay", {}, function(e) {
			return e
		});
		t.saveAddress = $.trans("/market/marketing/market/saveAddress", {}, function(e) {
			return e
		});
		t.isowner = $.trans("/api/isowner", {}, function(e) {
			return e
		});
		t.followJingjiren = $.trans("/api/agent/follow", {
			type: "POST"
		}, function(e) {
			return e
		});
		t.unfollowJingjiren = $.trans("/api/agent/unfollow", {
			type: "POST"
		}, function(e) {
			return e
		});
		t.isFollowJingjiren = $.trans("/api/agent/Isfollowed", {}, function(e) {
			return e
		});
		t.weeklyReportEdit = $.trans("/api/YezhuWeeklyReport/edit/", {}, function(e) {
			return e
		});
		t.weeklyReportPreview = $.trans("/api/yezhuWeeklyReport/savepreview/", {}, function(e) {
			return e
		});
		t.videoCount = $.trans("/api/video/incrplaycount", {}, function(e) {
			return e
		});
		t.videoPraise = $.trans("/api/video/praise", {}, function(e) {
			return e
		});
		t.xiaoquSug = $.trans("/api/sug/index", {}, function(e) {
			return e
		});
		t.xiaoquDianping = $.trans("/api/xiaoqucomment", {
			type: "POST"
		}, function(e) {
			return e
		});
		t.xiaoquDianpingVerifyCode = $.trans("/api/SendMobileVerifyCode", {}, function(e) {
			return e
		});
		t.weeklyReportCanEdit = $.trans("/api/yezhuWeeklyReport/canedit/", {}, function(e) {
			return e
		});
		t.xiaoquBuildingInfo = $.trans("/api/resblock/buildinginfo", {}, function(e) {
			return e
		});
		t.xiaoquGonglue = function(e) {
			return $.trans(e, {}, function(e) {
				return e
			})
		};
		t.resblockCommentPraise = $.trans("/api/praiseDianping", {}, function(e) {
			return e
		});
		t.resblockCommentCancelPraise = $.trans("/api/cancelPraiseDianping", {}, function(e) {
			return e
		});
		t.resblockAddComment = $.trans("/api/addDianping", {
			type: "POST"
		}, function(e) {
			return e
		});
		t.resblockDeleteComment = $.trans("/api/deleteDianping", {}, function(e) {
			return e
		});
		t.resblockCommentLoadMore = function(e) {
			return $.trans(e, {}, function(e) {
				return e
			})
		};
		t.resblockCommentPariseStatus = $.trans("/api/comment/ispraised", {}, function(e) {
			return e
		});
		t.judgeRight = $.trans("/api/gujia/feedback", {}, function(e) {
			return e
		});
		t.gujiaSug = $.trans("/api/sug/resblock", {}, function(e) {
			return e
		});
		t.isNewresblock = $.trans("/api/resblock/version", {}, function(e) {
			return e
		});
		t.getUserDetail = $.trans("/api/user/login/info", {}, function(e) {
			return e
		});
		t.isAbleToCommentResblock = function(e, t) {
			return $.trans("/" + e + "/xiaoqu/" + t + "/isAbleToPublishForXiaoqu", {}, function(e) {
				return e
			})
		};
		t.praiseErshoufangDaikan = $.trans("/api/agent/daikancommentuseful", {}, function(e) {
			return e
		});
		t.calculator = $.trans("/api/calculator/cost", {}, function(e) {
			return e
		});
		t.agentComment = $.trans("/api/agent/addPhoneComment", {
			type: "POST"
		}, function(e) {
			return e
		});
		t.getJingyanLike = $.trans("/api/upcount/", {}, function(e) {
			return e
		});
		t.jingyanLike = $.trans("/api/upadd/", {}, function(e) {
			return e
		});
		t.lanren_sug = $.trans("/api/sug/poi/", {}, function(e) {
			return e
		});
		t.lanren_geo_sug = $.trans("//api.map.baidu.com/place/v2/suggestion", {
			dataType: "jsonp"
		}, function(e) {
			return e
		});
		t.connect_agent = $.trans("/api/resblock/agentphone/", {}, function(e) {
			return e
		});
		t.huanfangSug = $.trans("/api/sug/huanfang/", {}, function(e) {
			return e
		});
		t.bizcircleHuanfang = $.trans("/api/migration/bizcircleinout/", {}, function(e) {
			return e
		});
		t.resblockHuanfang = $.trans("/api/migration/resblockinout/", {}, function(e) {
			return e
		});
		t.bizcircleHuanfangDetail = $.trans("/api/migration/bizcircleresblocktopinout", {}, function(e) {
			return e
		});
		t.resblockHuanfangTagsData = $.trans("/api/migration/resblockinout/", {}, function(e) {
			return e
		});
		t.get400phone = $.trans("/api/agent/get400phone/", {}, function(e) {
			return e
		});
		t.wechatApi = $.trans("/api/wechatJsApi/getSign", {}, function(e) {
			return e
		});
		t.general = function(e) {
			return $.trans(e, {}, function(e) {
				return e
			})
		};
		t.dianping_more = function(e) {
			return $.trans(e, {}, function(e) {
				return e
			})
		};
		t.tool_ceshi = function(e) {
			return $.trans("/" + e + "/tool/ceshi/", {}, function(e) {
				return e
			})
		};
		t.xiaoquNearby = $.trans("/api/resblock/nearby", {}, function(e) {
			return e
		});
		t.xiaoqu_baidu_nearby = $.trans("//api.map.baidu.com/place/v2/search", {
			dataType: "jsonp"
		}, function(e) {
			return e
		});
		t.tool_ceshi = function(e) {
			return $.trans("/" + e + "/tool/ceshi/", {}, function(e) {
				return e
			})
		};
		t.addticket = $.trans("/api/huodong/addticket/", {
			type: "POST"
		}, function(e) {
			return e
		});
		t.guide_detail_houseList = function(e) {
			return $.trans("/" + e + "/daogou/houselist", {}, function(e) {
				return e
			})
		};
		t.guide_detail_houseFeature = function(e) {
			return $.trans("/" + e + "/daogou/housefeature", {}, function(e) {
				return e
			})
		};
		t.getAgentSign = $.trans("/api/ershoufang/getagentsign", {}, function(e) {
			return e
		});
		t.getTimeStamp = $.trans("/api/agent/getTimeStamp", {}, function(e) {
			return e
		});
		t.addAgentComment = $.trans("/api/agent/addAgentComment", {
			type: "POST"
		}, function(e) {
			return e
		});
		t.getZufangPhone = $.trans("/api/zufang/getagentphone/", {}, function(e) {
			return e
		});
		t.getZufangAgentSign = $.trans("/api/zufang/getagentsign", {}, function(e) {
			return e
		});
		t.resblockRecommend = $.trans("/api/xiaoquNoResultDegradeData", {}, function(e) {
			return e
		});
		t.zhumiSubscribe = $.trans("/api/zhumi/subscribe", {}, function(e) {
			return e
		})
	},
	F: function(e, t, n, r) {
		var i = n("g");
		var s = n("H");
		e.exports = function(e, t) {
			var n, r, o = $("#" + e).getMark();
			var u;
			var a = false;
			var f;
			var l = t && t["args"];
			var c = ["m_pages_baikeIndex"];
			var h = {
				checkScrolltop: function() {
					var e = document.documentElement.scrollTop || document.body.scrollTop;
					if(e < r) {
						if(o.one("download_topfixed").hasClass("fadeDown")) {
							o.one("download_topfixed").removeClass("fadeDown");
							o.one("download_topfixed").addClass("fadeUp")
						}
					} else {
						o.one("download_topfixed").removeClass("fadeUp");
						o.one("download_topfixed").addClass("fadeDown")
					}
				}
			};
			var p = {
				scroll: function() {
					h.checkScrolltop()
				},
				closeTip: function() {
					o.one("download_topfixed").removeClass("fadeDown");
					o.one("download_topfixed").addClass("fadeUp");
					setTimeout(function() {
						o.one("download_topfixed").hide()
					}, 500)
				},
				closeBottom: function() {
					o.one("download_bottom").hide()
				}
			};
			var d = {
				init: function() {
					if(o.one("download_card").length) {
						d.initParam();
						d.bind();
						if(a) {
							h.checkScrolltop()
						}
					} else if(o.one("download_bottom").length) {
						o.one("btn_sort").css("bottom", "4.28rem");
						d.bindBottom()
					}
					var e = false;
					if(o.one("download_full_first_layer").length) {
						var t = s.get("download_full_first_layer");
						if(!t) {
							var n = s.save("download_full_first_layer", 1);
							if(n) {
								e = true;
								var r = {};
								r["ljweb_mod"] = o.one("download_full_first_layer").attr("data-ljweb_mod");
								r["detail_info"] = o.one("download_full_first_layer").attr("data-layer_info");
								f = i(r, l)
							}
						}
					}
					if(!e) {
						if(o.one("download_full_layer").length) {
							var r = {};
							r["ljweb_mod"] = o.one("download_full_layer").attr("data-ljweb_mod");
							r["detail_info"] = o.one("download_full_layer").attr("data-layer_info");
							f = i(r, l)
						}
					}
					if(o.one("app_awaken").length) {
						var u = o.one("app_awaken").attr("data-awaken_info");
						u = u && JSON.parse(u);
						var c = u["awaken_app_info"]["scheme"];
						var p = u["awaken_app_info"]["type"];
						if(p == "scheme" && c) {
							var v = location.pathname.slice(1).split("/");
							var m = "";
							if(l && v[0] == l["cur_city_short"]) {
								m = l["cur_city_id"]
							} else if(l && v[0] == l["nation"]["short"]) {
								m = l["nation"]["nation_id"]
							} else {
								m = l["cur_city_id"]
							}
							var g = "download_click";
							if(r && r[0] && r[0]["ljweb_mod"]) {
								g = r[0]["ljweb_mod"]
							}
							window["post_ulog"] && window["post_ulog"]("10043", {
								ljweb_group: "BIGDATA_M",
								ljweb_mod: "call_ready",
								ljweb_ref: document.referrer,
								ljweb_cid: m,
								ljweb_channel_key: l["js_ns"]
							});
							location.href = c;
							if(u["link_awaken_type"] == 3) {
								setTimeout(function() {
									location.href = u["awaken_app_info"]["download_url"]
								}, 2e3)
							}
						} else {
							if($.os.android) {
								window.open(u["awaken_app_info"]["download_url"], "_blank")
							} else {
								window.open(u["awaken_app_info"]["download_url"], "_top")
							}
						}
					}
				},
				initParam: function() {
					n = o.one("download_card").offset();
					var e = o.one("download_card").getData()[0];
					u = e["feature"];
					r = n.height + n.top * 2
				},
				bind: function() {
					a = true;
					if($.inArray(t["args"]["js_ns"], c) >= 0) {
						a = false
					}
					if(a) {
						$(window).scroll(p.scroll);
						o.one("download_close_btn").on("tap", p.closeTip)
					}
				},
				bindBottom: function() {
					o.one("download_bottom_close_btn").on("tap", p.closeBottom)
				}
			};
			d.init();
			return {
				destroy: function() {
					$(window).unscroll(p.scroll);
					o.one("download_close_btn").off("tap", p.closeTip);
					f && f.destroy()
				}
			}
		}
	},
	g: function(e, t, n, r) {
		var i = n("G");
		var s = n("h");
		e.exports = function(e, t) {
			var n = {
				ljweb_mod: "download_click",
				detail_info: "",
				show_href: "",
				show_href_text: "继续访问页面",
				show_href_callback: function() {}
			};
			var r;
			var s;
			var o = {
				closeFullLayer: function(e) {
					r.hide()
				},
				closeFullLayerHref: function(e) {
					r.hide();
					window["post_ulog"] && window["post_ulog"]("11006", {
						ljweb_mod: n.ljweb_mod
					});
					n.show_href_callback()
				}
			};
			var u = {
				init: function(e) {
					u.initParam(e);
					u.initDom();
					u.bindFullLayer()
				},
				initParam: function(e) {
					e && $.extend(n, e);
					n.detail_info_obj = JSON.parse(n.detail_info);
					if(n.detail_info_obj && n.detail_info_obj["layer_type"] == 2) {
						n.show_href = true;
						n.ljweb_mod = n.ljweb_mod + "2";
						n.detail_info_obj["extInfo"] = n.detail_info_obj["extInfo"] || false;
						if(n.detail_info_obj["extInfo"]) {
							if(n.detail_info_obj["extInfo"]["picture_url"]) {
								n.detail_info_obj["extInfo"]["picture_url"] = n.detail_info_obj["extInfo"]["picture_url"] + ".500x280.jpg"
							} else {
								n.detail_info_obj["extInfo"]["picture_url"] = n.detail_info_obj["default_picture_url"]
							}
						}
					} else if(n.detail_info_obj && n.detail_info_obj["layer_type"] == 3) {
						n.detail_info_obj.bg_img_url = t.fe_root + "images/home/shenzhen_bg.png?_v=" + t.version;
						n.detail_info_obj.radius_img_url = t.fe_root + "images/home/shenzhen_radius.png?_v=" + t.version
					}
				},
				initDom: function() {
					var e = i(n);
					r = $(e);
					r.appendTo(document.body);
					s = r.getMark();
					window["post_ulog"] && window["post_ulog"]("10380", {
						ljweb_mod: n.ljweb_mod
					})
				},
				bindFullLayer: function() {
					s.get("close_full_layer") && s.get("close_full_layer").on("click", o.closeFullLayer);
					s.get("close_full_layer_href") && s.get("close_full_layer_href").on("click", o.closeFullLayerHref)
				}
			};
			u.init(e);
			return {
				destroy: function() {
					s.one("download_close_btn").off("tap", o.closeTip);
					r.remove()
				},
				show: function() {
					r.show()
				},
				hide: function() {
					r.hide()
				}
			}
		}
	},
	G: function(e, t, n, r) {
		e.exports = function(e, t, n) {
			t = t || function(e) {
				return e
			};
			var r = "",
				i = t('<div class="download_full_box full_screen has_house_new">\n<a class="logo" href="/bj"><img src="'),
				s = t('"></a>\n    <div class="download_slogan">'),
				o = t('</div>\n    <div class="download_slogan_desc">'),
				u = t('</div>\n    <div data-mark="download_app" data-info="ljweb_mod='),
				a = t("\" data-detail_info='"),
				f = t('\' class="download_btn">'),
				l = t("</div>"),
				c = t('<a href="javascript:;" data-mark="close_full_layer_href" class="download_href">'),
				h = t("</a>"),
				p = t('    <div class="download_house_img">\n    	<img src="'),
				d = t('" onerror=\'this.src="'),
				v = t('"\' />\n<span class="download_img_desc">'),
				m = t('</span>\n    </div>\n    <div class="download_house_left">\n    	<div class="download_house_name">'),
				g = t('</div>\n    	<div class="download_house_desc">'),
				y = t('</div>\n    </div>\n    <div class="download_house_right">\n    	<div class="download_house_unit">'),
				b = t('</div>\n    	<div class="download_house_price">'),
				w = t("</div>\n    </div>\n    "),
				E = t('<div class="download_full_box shenzhen">\n    <img src="'),
				S = t('" alt="找房子，一个链家APP就够了">\n    <div class="bottom">\n        <img src="'),
				x = t('">\n        <div class="btn-group">\n            <div data-mark="download_app" data-info="ljweb_mod='),
				T = t('\' class="button">打开链家APP</div>\n            <div data-mark="close_full_layer_href">继续访问页面</div>\n        </div>\n    </div>\n</div>'),
				N = t('<div class="download_full_box">\n<div class="download_container">\n<div class="download_content">\n<div class="download_logo">\n<img src="'),
				C = t('" alt="" />\n</div>\n<div class="download_title">'),
				k = t('</div>\n<div class="download_sub">'),
				L = t('</div>\n<div data-mark="download_app" data-info="ljweb_mod='),
				A = t('</div>\n<div class="download_close" data-mark="close_full_layer"></div>\n</div>\n</div>');
			if(e.detail_info_obj.layer_type + "" === "2") {
				r += i;
				r += e.detail_info_obj.icon;
				r += s;
				r += e.detail_info_obj.title;
				r += o;
				r += e.detail_info_obj.sub_title;
				r += u;
				r += e.ljweb_mod;
				r += a;
				r += e.detail_info;
				r += f;
				r += e.detail_info_obj.button_text;
				r += l;
				if(e.show_href) {
					r += c;
					r += e.show_href_text;
					r += h
				}
				if(e.detail_info_obj.extInfo) {
					r += p;
					r += e.detail_info_obj.extInfo.picture_url;
					r += d;
					r += e.detail_info_obj.default_picture_url;
					r += v;
					r += e.detail_info_obj.extInfo.watermark;
					r += m;
					r += e.detail_info_obj.extInfo.title;
					r += g;
					r += e.detail_info_obj.extInfo.sub_title;
					r += y;
					r += e.detail_info_obj.extInfo.sub_content;
					r += b;
					r += e.detail_info_obj.extInfo.content;
					r += w
				}
				r += l
			} else if(e.detail_info_obj.layer_type + "" === "3") {
				r += E;
				r += e.detail_info_obj.bg_img_url;
				r += S;
				r += e.detail_info_obj.radius_img_url;
				r += x;
				r += e.ljweb_mod;
				r += a;
				r += e.detail_info;
				r += T
			} else {
				r += N;
				r += e.detail_info_obj.icon;
				r += C;
				r += e.detail_info_obj.title;
				r += k;
				r += e.detail_info_obj.sub_title;
				r += L;
				r += e.ljweb_mod;
				r += a;
				r += e.detail_info;
				r += f;
				r += e.detail_info_obj.button_text;
				r += l;
				if(e.show_href) {
					r += c;
					r += e.show_href_text;
					r += h
				}
				r += A
			}
			return r
		}
	},
	h: function(e, t, n, r) {
		e.exports = function() {
			var e = "lj__common_cell_downloadLayer_layer_css";
			if(document.getElementById(e)) return;
			var t = document.createElement("style");
			t.id = e;
			t.innerHTML = ".download_full_box{position:fixed;top:0;left:0;bottom:0;right:0;z-index:10002;background:rgba(0,0,0,.5);text-align:center}.download_full_box .download_container{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);width:80.5%;max-width:18.125rem}.download_full_box .download_content{background-color:#fff;padding-top:3.4375rem;border-radius:.625rem}.download_full_box .download_logo{width:4.375rem;margin:0 auto 1.5625rem;font-size:0}.download_full_box .download_title{color:#394043;font-size:1.125rem;line-height:1}.download_full_box .download_sub{color:#394043;font-size:.875rem;margin-top:.8125rem;margin-bottom:3.125rem}.download_full_box .download_btn{width:5.625rem;color:#fff;padding:0 1.875rem;height:2.5rem;margin:auto;line-height:2.5rem;border-radius:.2rem;background:#00ae66}.download_full_box .download_btn:last-child{margin-bottom:3.75rem;display:inline-block}.download_full_box .download_href{margin-top:2.625rem;margin-bottom:1.5625rem;display:inline-block;text-decoration:underline;color:#9c9fa1;font-size:.75rem}.download_full_box .download_close{width:2.1875rem;height:2.1875rem;margin:2.8125rem auto 0;position:relative;border:1px solid #fff;border-radius:100%}.download_full_box .download_close:after,.download_full_box .download_close:before{content:'';display:block;width:.1rem;height:50%;left:50%;top:50%;background:#fff}.download_full_box .download_close:before{position:absolute;-webkit-transform:translate(-50%,-50%) rotate(45deg);transform:translateX(-50%,-50%) rotate(45deg)}.download_full_box .download_close:after{position:absolute;-webkit-transform:translate(-50%,-50%) rotate(-45deg);transform:translateX(-50%,-50%) rotate(-45deg)}.download_full_box.full_screen{background:#fff}.download_full_box.full_screen .download_container{width:100%;max-width:100%;transform:translateY(-50%);-webkit-transform:translateY(-50%);left:0}.download_full_box.full_screen .download_content{padding-top:0}.download_full_box.full_screen .download_logo{width:5.3125rem;margin-bottom:2.5rem}.download_full_box.full_screen .download_title{font-size:1.25rem;color:#333}.download_full_box.full_screen .download_sub{color:#999;margin-bottom:3.75rem;margin-top:.2rem}.download_full_box.full_screen .download_btn{height:2.75rem;line-height:2.75rem;width:12.5rem;padding:0}.download_full_box.full_screen .download_btn:last-child{margin-bottom:0}.download_full_box.full_screen .download_href{margin-top:1.875rem;margin-bottom:0;font-size:.875rem;color:#666}.download_full_box.full_screen .download_close{display:none}.download_full_box.has_house .header{border:0;height:5.625rem}.download_full_box.has_house .header .logo_wrap{font-size:0;margin-left:.75rem}.download_full_box.has_house .header .logo_wrap .logo{width:5.625rem;background-size:5.625rem;background-position:0 -13.359375rem}.download_full_box.has_house .footer .footer_container .download_btn,.download_full_box.has_house .footer .footer_container .download_house_img img{width:100%}.download_full_box.has_house .footer{background:0 0;position:absolute;width:100%;bottom:1.6875rem;padding:0}.download_full_box.has_house .footer .footer_container{padding:0 2.5rem}.download_full_box.has_house .footer .footer_container .download_href{margin-top:1.25rem}.download_full_box.has_house .footer .footer_container .download_slogan{text-align:left;font-size:1.625rem;line-height:2.25rem;color:#333;font-weight:700}.download_full_box.has_house .footer .footer_container .download_house_img{margin-top:1.875rem;position:relative;font-size:0}.download_full_box.has_house .footer .footer_container .download_img_desc{position:absolute;font-size:.875rem;right:0;bottom:1.25rem;background:#394043;height:1.6875rem;line-height:1.6875rem;padding:0 .625rem;color:#fff;font-weight:700}.download_full_box.has_house .footer .footer_container .download_house_title{text-align:left;font-size:.875rem;line-height:1.25rem;color:#333;font-weight:700;margin-top:.625rem;margin-bottom:3.75rem}.download_full_box.has_house_new .logo{display:block;margin:1.25rem 0 0 1.25rem;width:2.875rem;height:2.875rem}.download_full_box.has_house_new .download_slogan{font-size:1.75rem;color:#333;line-height:2rem;font-family:PingFangSC-Light;margin-top:.875rem}.download_full_box.has_house_new .download_slogan_desc{font-family:PingFangSC-Semibold;font-weight:700;font-size:1.75rem;color:#333;line-height:2rem;margin-top:.5625rem}.download_full_box.has_house_new .download_btn{margin-top:2.5rem;width:15.75rem}.bottom,.download_full_box.has_house_new .download_house_img img,.shenzhen img{width:100%}.download_full_box.has_house_new .download_href{font-family:PingFangSC-Regular;font-size:.875rem;color:#666;margin-top:.9375rem}.download_full_box.has_house_new .download_house_img{position:relative;margin:2.3215rem 1.25rem .9375rem}.download_full_box.has_house_new .download_house_img .download_img_desc{position:absolute;bottom:.625rem;right:.75rem;background:rgba(0,0,0,.4);font-family:PingFangSC-Regular;font-size:.75rem;color:#FFF;letter-spacing:0;padding:0 .9375rem;line-height:1.25rem;border-radius:1.25rem;height:1.25rem}.download_full_box.has_house_new .download_house_left{float:left;margin-left:1.25rem;text-align:left}.download_full_box.has_house_new .download_house_left .download_house_name{font-family:PingFangSC-Medium;font-weight:700;font-size:1.25rem;color:#394043;line-height:1.75rem;height:1.75rem}.download_full_box.has_house_new .download_house_left .download_house_desc{font-family:PingFangSC-Regular;font-size:.8125rem;color:#9C9FA1;height:1.375rem;line-height:1.375rem}.download_full_box.has_house_new .download_house_right{float:right;margin-right:1.25rem;text-align:right}.download_full_box.has_house_new .download_house_right .download_house_unit{font-family:PingFangSC-Regular;font-size:.8125rem;color:#9C9FA1;line-height:1.75rem;height:1.75rem}.download_full_box.has_house_new .download_house_right .download_house_price{font-family:PingFangSC-Medium;font-weight:700;font-size:1rem;color:#FA5741;height:1.375rem;line-height:1.375rem}.shenzhen{font-size:0;background-color:#00ae66}.bottom{position:fixed;bottom:0;text-align:center}.btn-group{color:#666;font-size:.75rem;background-color:#fff;padding:1.875rem 0 1.5rem}.button{width:90%;color:#fff;height:3.125rem;font-weight:600;font-size:1.125rem;border-radius:.25rem;line-height:3.125rem;margin:0 auto 1.4375rem;background-color:#00ae66}";
			document.head.appendChild(t)
		}()
	},
	H: function(e, t, n, r) {
		var i = window.localStorage,
			s = window.sessionStorage;
		t.save = function(e, t, n) {
			if(typeof t == "object") {
				t = JSON.stringify(t)
			}
			try {
				if(n) {
					s.setItem(e, t)
				} else {
					i.setItem(e, t)
				}
			} catch(r) {
				try {
					if(n) {
						s.remove(e);
						s.setItem(e, t)
					} else {
						i.remove(e);
						i.setItem(e, t)
					}
				} catch(r) {
					return false
				}
			}
			return true
		};
		t.get = function(e, t, n) {
			var r = null;
			try {
				if(t) {
					r = s.getItem(e);
					n && s.removeItem(e)
				} else {
					r = i.getItem(e);
					n && i.removeItem(e)
				}
			} catch(o) {}
			return r
		};
		t.remove = function(e, t) {
			try {
				if(t) {
					s.removeItem(e)
				} else {
					i.removeItem(e)
				}
				return true
			} catch(n) {
				return false
			}
		}
	},
	i: function(e, t, n, r) {
		var i = n("f");
		e.exports = function(e) {
			var t = navigator.userAgent.toLowerCase().indexOf("micromessenger") >= 0;
			if(!t) return;
			var n = {
				imgUrl: "",
				lineLink: "",
				descContent: "",
				shareTitle: "",
				shareTitle_friend: "",
				success: function(e) {},
				cancel: function(e) {},
				fail: function(e) {},
				debug: false,
				appId: "",
				signature: "",
				timestamp: "",
				nonceStr: "",
				jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage", "showOptionMenu"]
			};
			n = $.extend(n, e);
			var r, s, o;
			var u = function(e, t, n) {
				var r = document;
				var i = "readyState";
				var s = "onreadystatechange";
				var o;
				var u;
				var a = +(new Date);
				var f = document.createElement("script");
				f.src = e;
				f.async = 1;
				document.getElementsByTagName("head")[0].appendChild(f);
				f.onload = f[s] = function() {
					if(o || f[i] && !/^c|loade/.test(f[i])) return;
					f.onload = f.onerror = f[s] = null;
					o = 1;
					u && clearTimeout(u);
					if(n && n() || !n) {
						t && t("success", +(new Date) - a)
					} else {
						t && t("load succ,but run error", +(new Date) - a)
					}
				};
				f.onerror = function() {
					f.onload = f.onerror = f[s] = null;
					o = 1;
					u && clearTimeout(u);
					t && t("error", 8e4)
				};
				u = setTimeout(function() {
					f.onload = f.onerror = f[s] = null;
					o = 1;
					t && t("timeout", 8e3)
				}, 8e3)
			};
			var a = function(e) {
				if(!s || !r) return;
				wx.config({
					debug: e.debug,
					appId: e.appId,
					timestamp: e.timestamp,
					nonceStr: e.nonceStr,
					signature: e.signature,
					jsApiList: e.jsApiList
				});
				wx.ready(function() {
					wx.onMenuShareAppMessage({
						title: e.shareTitle,
						desc: e.descContent,
						link: e.lineLink,
						imgUrl: e.imgUrl,
						trigger: function(e) {},
						success: function(t) {
							e.success(t)
						},
						cancel: function(t) {
							e.cancel(t)
						},
						fail: function(t) {
							e.fail(t)
						}
					});
					wx.onMenuShareTimeline({
						title: e.shareTitle_friend,
						desc: e.descContent,
						link: e.lineLink,
						imgUrl: e.imgUrl,
						trigger: function(e) {},
						success: function(t) {
							e.success(t)
						},
						cancel: function(t) {
							e.cancel(t)
						},
						fail: function(t) {
							e.fail(t)
						}
					})
				});
				wx.error(function(e) {
					console.log(e)
				})
			};
			i.wechatApi.request({
				sign_url: window.location.href
			}, {
				success: function(e) {
					if(e.errno == 0) {
						var t = e.data;
						if(t && t.appId) {
							o = $.extend({}, n, t);
							s = 1;
							a(o)
						}
					}
				},
				fail: function(e) {}
			});
			u("//res.wx.qq.com/open/js/jweixin-1.0.0.js", function(e, t) {
				r = 1;
				a(o)
			}, function() {
				if(window.wx != undefined) {
					return true
				} else {
					return false
				}
			})
		}
	},
	I: function(e, t, n, r) {
		var i = n("j");
		var s = n("J");
		t.init = function() {
			var e = {
				icon: "",
				type: "error",
				content: "操作失败",
				delay: 1e3
			};
			var t = {
				init: function(e) {
					if(t.myToast) {
						$(t.myToast).remove()
					}
					t.initParam(e);
					t.initRender();
					t.initEvent()
				},
				initParam: function(t) {
					t && $.extend(e, t)
				},
				initRender: function() {
					var n = e.ani;
					var r = e.type;
					var s = e.content;
					var o = i({
						ani: n,
						type: r,
						content: s
					});
					t.myToast = $(o).appendTo(document.body)
				},
				initEvent: function() {
					if(e.delay > 0) {
						var n = setTimeout(function() {
							clearTimeout(n);
							$(t.myToast).remove()
						}, e.delay)
					}
				}
			};
			var n = {};
			n.show = function(e) {
				t.init(e)
			};
			n.showSuccess = function(e) {
				t.init({
					type: "success",
					content: e
				})
			};
			n.showError = function(e) {
				t.init({
					type: "error",
					content: e
				})
			};
			n.showWarn = function(e) {
				t.init({
					type: "warn",
					content: e
				})
			};
			n.showWithoutIcon = function(e) {
				t.init({
					type: null,
					content: e
				})
			};
			n.destroy = function() {};
			return n
		}
	},
	j: function(e, t, n, r) {
		e.exports = function(e, t, n) {
			t = t || function(e) {
				return e
			};
			var r = "",
				i = t('<div class="toast '),
				s = t('">\n<div class="content '),
				o = t("content_without_icon"),
				u = t('">'),
				a = t('<div class="icon_box"><i class="icon_'),
				f = t('"></i></div>'),
				l = t('<div class="info_box">'),
				c = t("</div>\n</div>\n</div>");
			r += i;
			r += e.ani;
			r += s;
			if(!e.type) {
				r += o
			}
			r += u;
			if(e.type) {
				r += a;
				r += e.type;
				r += f
			}
			r += l;
			r += e.content;
			r += c;
			return r
		}
	},
	J: function(e, t, n, r) {
		e.exports = function() {
			var e = "lj__common_cell_toast_toast_css";
			if(document.getElementById(e)) return;
			var t = document.createElement("style");
			t.id = e;
			t.innerHTML = ".toast{position:fixed;left:50%;top:50%;z-index:10;-webkit-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);-o-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.toast .content{min-width:8.125rem;max-width:12.5rem;background-color:rgba(0,0,0,.7);-webkit-border-radius:.625rem;-moz-border-radius:.625rem;border-radius:.625rem;text-align:center;padding:0 .625rem 1rem;color:#fff}.toast .content_without_icon{padding-top:1rem}.toast .icon_box{min-width:5rem;min-height:5rem}.toast .info_box{font-size:1rem;line-height:1.5;font-weight:400}.toast .icon_error,.toast .icon_warn{display:block;position:relative;width:5rem;height:5rem;margin:1.875rem auto 0;border:0;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;font-size:0;cursor:pointer}.toast .icon_error::after,.toast .icon_error::before,.toast .icon_warn::after,.toast .icon_warn::before{position:absolute;content:' ';background-color:#fff;left:50%}.toast .icon_error::after,.toast .icon_error::before{width:.125rem;height:70%;top:50%;-webkit-transform:translate(-50%,-50%) rotate(45deg);-moz-transform:translate(-50%,-50%) rotate(45deg);-ms-transform:translate(-50%,-50%) rotate(45deg);-o-transform:translate(-50%,-50%) rotate(45deg);transform:translate(-50%,-50%) rotate(45deg);-webkit-border-radius:.125rem;-moz-border-radius:.125rem;border-radius:.125rem}.toast .icon_error::after{-webkit-transform:translate(-50%,-50%) rotate(-45deg);-moz-transform:translate(-50%,-50%) rotate(-45deg);-ms-transform:translate(-50%,-50%) rotate(-45deg);-o-transform:translate(-50%,-50%) rotate(-45deg);transform:translate(-50%,-50%) rotate(-45deg)}.toast .icon_success{display:block;width:3.6rem;height:2rem;border-left:.125rem solid #fff;border-bottom:.125rem solid #fff;-webkit-transform:translate(2.25rem,.5rem) rotate(-45deg);-moz-transform:translate(2.25rem,.5rem) rotate(-45deg);-ms-transform:translate(2.25rem,.5rem) rotate(-45deg);-o-transform:translate(2.25rem,.5rem) rotate(-45deg);transform:translate(2.25rem,.5rem) rotate(-45deg)}.toast .icon_warn{width:2.5rem;height:2.5rem;border:.125rem solid #fff;-webkit-transform:translate(0,1.25rem);-moz-transform:translate(0,1.25rem);-ms-transform:translate(0,1.25rem);-o-transform:translate(0,1.25rem);transform:translate(0,1.25rem)}.toast .icon_warn::before{width:.125rem;height:50%;top:.3125rem;margin-left:-.0625rem}.toast .icon_warn::after{width:.25rem;height:.25rem;-webkit-border-radius:.125rem;-moz-border-radius:.125rem;border-radius:.125rem;top:72%;margin-left:-.125rem}";
			document.head.appendChild(t)
		}()
	},
	k: function(e, t, n, r) {
		var i = n("K");
		var s = n("l");
		var o = {
			reflashImg: function() {},
			okText: "验证",
			cancelText: "取消",
			ok: function() {},
			cancel: function() {},
			maxlength: 5
		};
		var u;
		var a;
		var f = function() {
			if(u) {
				setTimeout(function() {
					$(u).remove();
					u = undefined
				}, 60);
				o = {
					reflashImg: function() {},
					okText: "验证",
					cancelText: "取消",
					ok: function() {},
					cancel: function() {},
					maxlength: 5
				}
			}
		};
		var l = {
			stopDefaultscroll: function(e) {
				e.preventDefault()
			},
			ok: function() {
				var e = $.trim(a.one("verifycode_input").val());
				if(!e) {
					a.one("verifycode_input_box").addClass("error");
					return
				}
				o.ok(e);
				f()
			},
			cancel: function() {
				o.cancel();
				f()
			},
			verifycode_img: function() {
				a.one("verifycode_img").attr("src", o["reflashImg"]())
			},
			focus_input: function() {
				if(a.one("verifycode_input_box").hasClass("error")) {
					a.one("verifycode_input_box").removeClass("error")
				}
			}
		};
		var c = {
			init: function(e) {
				f();
				c.initParam(e);
				c.initRender();
				c.initEvent()
			},
			initParam: function(e) {
				e && $.extend(o, e)
			},
			initRender: function() {
				var e = o["reflashImg"]();
				var t = i({
					imgSrc: e,
					okText: o["okText"],
					cancelText: o["cancelText"],
					maxlength: o["maxlength"]
				});
				u = $(t);
				u.appendTo(document.body);
				a = u.getMark();
				a.one("verifycode_input")[0].focus()
			},
			initEvent: function() {
				$(a.one("btn_cancel")).on("tap", l.cancel);
				$(a.one("btn_ok")).on("tap", l.ok);
				$(a.one("verifycode_img")).on("tap", l.verifycode_img);
				$(a.one("verifycode_input")).on("focus", l.focus_input)
			}
		};
		var h = {};
		h.show = function(e) {
			c.init(e)
		};
		h.destroy = f;
		e.exports = h
	},
	K: function(e, t, n, r) {
		e.exports = function(e, t, n) {
			t = t || function(e) {
				return e
			};
			var r = "",
				i = t('<div class="layer_fixed">\n<div class="layer verifycode_layer">\n<div class="layer_cont">\n<span class="verifycode_input" data-mark="verifycode_input_box">\n<input type="text" maxlength="'),
				s = t('" data-mark="verifycode_input" placeholder="请输入验证码" />\n</span>\n<span class="verifycode_img">\n<img src="'),
				o = t('" data-mark="verifycode_img"/>\n</span>\n</div>\n<div class="layer_opt">\n<a href="javascript:;" class="btn_cancel" data-mark="btn_cancel">'),
				u = t('</a>\n<a href="javascript:;" class="btn_ok" data-mark="btn_ok">'),
				a = t("</a>\n</div>\n</div>\n</div>");
			r += i;
			r += e.maxlength;
			r += s;
			r += e.imgSrc;
			r += o;
			r += e.cancelText;
			r += u;
			r += e.okText;
			r += a;
			return r
		}
	},
	l: function(e, t, n, r) {
		e.exports = function() {
			var e = "lj__common_cell_verifyCodeLayer_confirm_css";
			if(document.getElementById(e)) return;
			var t = document.createElement("style");
			t.id = e;
			t.innerHTML = ".verifycode_layer{width:15.25rem;margin-left:-7.625rem}.verifycode_layer .layer_cont .verifycode_input{width:6.125rem;height:2.25rem;line-height:2.25rem;border:1px solid #E5E5E5;border-radius:.1rem;display:inline-block;font-size:0}.verifycode_layer .layer_cont input{border:none;font-size:.75rem}.verifycode_layer .layer_cont input::-webkit-input-placeholder{color:#9c9Fa1}.verifycode_layer .layer_cont .verifycode_input.error{border:1px solid #EC8484}.verifycode_layer .layer_cont .verifycode_img{vertical-align:bottom;margin-left:.625rem;height:2.25rem;width:5rem;display:inline-block}.verifycode_layer .layer_cont img{width:100%}.verifycode_layer .layer_opt{border-top:1px solid #E5E5E5}.verifycode_layer .layer_opt .btn_cancel,.verifycode_layer .layer_opt .btn_ok{color:#00AE66;font-weight:400}";
			document.head.appendChild(t)
		}()
	}
});