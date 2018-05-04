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
		$LMB.register("m_pages_zufangDetail", function(e, t) {
			var r = n("A");
			var i = r(e, t);
			var s = n("I");
			var o = n("j");
			var u = n("l");
			var a = u(e, t);
			var f = n("O");
			var l;
			var c;
			var h;
			var p;
			var d = function(e, t, n, r) {
				s.init({
					container: e,
					axisX: {
						has: true,
						data: t
					},
					data: [{
						type: "line",
						data: n,
						unit: "元",
						title: "参考均价",
						color: "#a9b8c7"
					}],
					nodata_tpl: '<div class="nodata">暂无数据</div>'
				})
			};
			var v = {
				chartAll: function(e, t, n, r, i) {
					var s = $(e.el);
					s.siblings().removeClass("active");
					s.addClass("active");
					d(t, n, r, i)
				},
				chart1: function(e, t, n, r, i) {
					var s = $(e.el);
					s.siblings().removeClass("active");
					s.addClass("active");
					d(t, n, r, i)
				},
				chart2: function(e, t, n, r, i) {
					var s = $(e.el);
					s.siblings().removeClass("active");
					s.addClass("active");
					d(t, n, r, i)
				},
				chart3: function(e, t, n, r, i) {
					var s = $(e.el);
					s.siblings().removeClass("active");
					s.addClass("active");
					d(t, n, r, i)
				},
				close_help: function(e) {
					h.one("help_layer").hide();
					$(".layer_fixed").hide()
				},
				ask_layer: function(e) {
					h.one("help_layer").show();
					$(".layer_fixed").show()
				},
				show_focus_layer: function() {
					h.one("focus_layer").css("display", "block")
				},
				close_info_layer: function() {
					setTimeout(function() {
						$(".info_layer").css("display", "none")
					}, 300)
				}
			};
			var m = {
				init: function() {
					m.initPlugin();
					m.initRender();
					m.judgePrice()
				},
				initPlugin: function() {
					h = $("#" + e).getMark();
					p = $("#" + e).de();
					c = o.init({
						swipeSlide: function(e) {
							h.one("img_index").html(e + 1)
						}
					});
					if(!h.one("btn_follow").length) return;
					var n = h.one("btn_follow").getData()[0];
					n.id = n.house_code;
					n.type = "zufang";
					l = f.init({
						actBtn: h.one("btn_follow"),
						followData: n,
						unfollowData: n,
						checkFollowData: {
							id: n["house_code"],
							type: n["house_type"]
						}
					}, t)
				},
				initRender: function() {
					var e = h.one("chart");
					if(!e || !e.length) return;
					var t = JSON.parse(e.getData("resblock_market"));
					var n = t["room_all"];
					var r = t["room_1"];
					var i = t["room_2"];
					var s = t["room_3"];
					var o = [];
					var u = [];
					var a = [];
					var f = [];
					var l = [];
					var c = [];
					var m = [];
					var g = [];
					var y = [];
					for(var b in n) {
						o.push(n[b]["time"]);
						u.push(n[b]["sign_price"])
					}
					for(var b in r) {
						f.push(r[b]["sign_price"])
					}
					for(var b in i) {
						c.push(i[b]["sign_price"])
					}
					for(var b in s) {
						g.push(s[b]["sign_price"])
					}
					d(e, o, u, a);
					p.add("chartAll", "tap", function(t) {
						v.chartAll(t, e, o, u, a)
					});
					p.add("chart1", "tap", function(t) {
						v.chart1(t, e, o, f, l)
					});
					p.add("chart2", "tap", function(t) {
						v.chart2(t, e, o, c, m)
					});
					p.add("chart3", "tap", function(t) {
						v.chart3(t, e, o, g, y)
					});
					p.add("ask_layer", "tap", function(e) {
						v.ask_layer()
					});
					p.add("close_help", "tap", function(e) {
						v.close_help()
					});
					p.add("show_focus_layer", "tap", function(e) {
						v.show_focus_layer()
					});
					p.add("close_info_layer", "click", function(e) {
						v.close_info_layer()
					});
					document.addEventListener("webkitfullscreenchange", function(e) {
						$ULOG.send("10679", {
							housecode: $(".page_zufang").data("housecode") || null
						})
					})
				},
				judgePrice: function() {
					var e = h.one("low_price").text();
					var t = h.one("high_price").text();
					var n = h.one("result_price").text();
					var r = (n - e) / (t - e) * 100;
					setTimeout(function() {
						h.one("point").css("left", r + "%")
					}, 100)
				}
			};
			m.init();
			var g = {};
			g.destroy = function() {};
			return g
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
		t.init = function(e) {
			var t = {
				container: $(document.body),
				axisX: {
					has: true,
					scroll: true,
					data: []
				},
				axisY: {
					has: true,
					min: 0,
					unit: "",
					count: 3,
					title: "",
					ratio: 0
				},
				data: [],
				nodata_tpl: "",
				sign: false,
				showNull: false,
				showNegative: false
			};
			var n = t.container;
			var r = 0;
			var i = 0;
			var s = 0;
			var o = 0;
			var u = [];
			var a = [];
			var f = [];
			var l;
			var c = {
				getUnitHeight: function(e) {
					if(t.axisY.min === 1) {
						return o / (e - i)
					} else {
						return o / e
					}
				},
				getHeight: function(e, n) {
					if(e == 0) return 0;
					var r = c.getUnitHeight(e);
					var s;
					n = n ? n : 0;
					if(t.axisY.min === 1) {
						var o = i * r;
						s = n * r - o
					} else {
						s = n * r
					}
					return s
				},
				getDistance: function(e, t, n, r) {
					var i = s / e;
					var o = c.getHeight(r, t) - c.getHeight(r, n);
					if(t == 0 && n == 0) {
						return i
					}
					return Math.sqrt(i * i + o * o)
				},
				getAngle: function(e, t, n, r) {
					var i = s / e;
					var o = (t - n) * c.getUnitHeight(r);
					var u = Math.sqrt(i * i + o * o);
					var a = Math.asin(o / u) / Math.PI * 180;
					return a
				},
				getMax: function(e) {
					var n = [];
					for(var r = 0, i = t.data.length; r < i; r++) {
						if(t.data[r].type === e) {
							n.push.apply(n, t.data[r].data)
						}
						if(e === undefined) {
							n.push.apply(n, t.data[r].data)
						}
						if(r === i - 1) {
							Array.max = function(e) {
								return Math.max.apply(Math, e)
							};
							var s = Array.max(n);
							s = s * 1.08;
							return s
						}
					}
				},
				getMin: function() {
					var e = [];
					for(var n = 0, r = t.data.length; n < r; n++) {
						e.push.apply(e, t.data[n].data);
						if(n === r - 1) {
							Array.min = function(e) {
								return Math.min.apply(Math, e)
							};
							return Array.min(e) * .98
						}
					}
				}
			};
			var h = {
				addAxisY: function(e) {
					var n = "";
					var r = e.count;
					var s = e.unit;
					var o = c.getMax(e.type);
					var u = e.min && e.min === 1 ? (o - i) / r : o / r;
					if(i == o) {
						r = 0
					}
					var a;
					var f = e.tofix;
					if(f) {
						a = u.toFixed(f)
					} else {
						a = Math.round(u)
					}
					if(e.min && e.min === 1) {
						var l = i;
						for(var h = 0; h <= r; h++) {
							var p = i + a * h;
							if(t.axisY.ratio) {
								p = p / t.axisY.ratio
							}
							if(f) {
								p = p.toFixed(f)
							}
							n += "<li><span>" + p + s + "</span></li>";
							if(h === r) {
								if(e.title && e.title !== "") {
									n += '<li class="title"><span>' + e.title + "</span></li>"
								}
								return n
							}
						}
					} else {
						for(var h = 0; h <= r; h++) {
							var p = a * h;
							if(t.axisY.ratio) {
								p = p / t.axisY.ratio
							}
							if(f) {
								p = p.toFixed(f)
							}
							n += "<li><span>" + p + s + "</span></li>";
							if(h === r) {
								if(e.title) {
									n += '<li class="title"><span>' + e.title + "</span></li>"
								}
								return n
							}
						}
					}
				},
				addAxisX: function(e) {
					var t = e.length;
					var n = "";
					for(var r = 0; r < t; r++) {
						n += '<li class="chart_item">' + e[r] + "</li>";
						if(r === t - 1) {
							return n
						}
					}
				},
				addBar: function(e) {
					var n = e.data.length;
					var r = c.getMax(e.type);
					for(var i = 0; i < n; i++) {
						var s;
						var o;
						if(t.showNull && e.data[i] === null) {
							s = e.data[i];
							o = "暂无数据"
						} else {
							s = e.data[i] || 0;
							o = s + e.unit
						}
						var u = c.getHeight(r, s);
						if(a[i] === undefined) {
							a[i] = ""
						}
						var f = '<span class="bar" data-info="' + e.title + ":" + o + '" style="background-color:' + e.color + ";height:" + u + 'px;"></span>';
						a[i] += f
					}
				},
				addLine: function(e) {
					var n = e.data.length;
					var r = c.getMax(e.type);
					for(var i = 0; i < n; i++) {
						var s = e.data[i] || 0;
						if(!t.showNegative && s < 0) continue;
						var o = e.data[i + 1] || 0;
						var a = c.getHeight(r, s);
						var f = "";
						if(u[i] === undefined) {
							u[i] = ""
						}
						if(i === n - 1 || !t.showNegative && o < 0) {
							f = '<span class="dot" data-info="' + e.title + ":" + s + e.unit + '" style="background-color:' + e.color + ";bottom:" + a + 'px;"></span>'
						} else {
							var l = c.getAngle(n, s, o, r);
							var h = c.getDistance(n, s, o, r);
							f = '<span class="dot" data-info="' + e.title + ":" + s + e.unit + '" style="background-color:' + e.color + ";bottom:" + a + 'px;">' + '<span class="line" style="background-color:' + e.color + ";-webkit-transform: rotate(" + l + "deg);transform: rotate(" + l + "deg);width: " + h + 'px;"></span></span>'
						}
						u[i] += f
					}
				},
				addSign: function(e) {
					var t = '<span class="sign_item"><i class="sign ' + e.type + '" style="background:' + e.color + ';"></i><span class="sign_txt">' + e.title + "</span></span>";
					f.push(t)
				},
				showInfo: function(e) {
					var t = this;
					var r = n.find(".tip");
					var i = $(t).find(".bar,.dot");
					var s = n.width();
					var u = 0;
					var a = n.find(".scroll")[0];
					if(a) u = a.scrollLeft;
					var f = "";
					for(var l = 0, c = i.length; l < c; l++) {
						var h = i.eq(l).attr("data-info").split(":");
						(h[1].indexOf("-1") != -1 || h[1] == "0元/平") && (h[1] = "暂无数据");
						f += "<em>" + h[0] + "：</em><span>" + h[1] + "</span>" + "<br>"
					}
					if(r.length > 0) {
						r.html(f)
					} else {
						r = $('<div class="tip">' + f + "</div>").appendTo(n)
					}
					var p = r.width() || s / 3;
					var d = r.height() || s / 3;
					var v = t.offsetLeft + parseInt($(document.documentElement).css("font-size")) || 0;
					var m = t.offsetTop + parseInt($(document.documentElement).css("font-size")) || 0;
					v = v - u;
					v = v > s - p ? s - p : v;
					m = m > o - d ? o - d : m;
					$(t).siblings(".chart_item").removeClass("choosed");
					$(t).addClass("choosed");
					r.css({
						left: v + "px",
						top: m + "px"
					});
					$(document).on("tap", function(e) {
						var n = $(e.target);
						if(!n.is(".chart_box") && n.closest(".chart_box").length < 1) {
							$(t).removeClass("choosed");
							r && r.remove()
						}
					})
				}
			};
			var p = {
				init: function(e) {
					p.initParam(e);
					p.initRender();
					p.initEvent()
				},
				initParam: function(e) {
					if(e) {
						$.extend(t, e)
					}
				},
				initRender: function() {
					var e = t;
					n = e.container;
					var l = n.find(".scroll")[0];
					var p = l ? l.scrollLeft : 0;
					if(e.data.length < 1) return;
					u = [];
					a = [];
					f = [];
					var d = 0;
					for(var v = 0, m = e.data.length; v < m; v++) {
						var g = e.data[v];
						d = Math.max(d, g.data.length)
					}
					var y = d <= 6 || !e.axisX.scroll ? 1 : d / 6;
					var b = Math.round(y * 100);
					s = (n.width() - parseInt($(document.documentElement).css("font-size")) * 2) * b / 100;
					o = n.height();
					r = c.getMax();
					if(e.axisY.min === 1) {
						i = c.getMin()
					}
					if(e.axisX.has) {
						var w = h.addAxisX(e.axisX.data)
					}
					if(e.axisY.has) {
						var E = h.addAxisY(e.axisY)
					}
					for(var v = 0, m = e.data.length; v < m; v++) {
						var g = e.data[v];
						if(m > 1 || e.axisY.title == "" || e.sign) {
							h.addSign(g);
							n.css({
								margin: "2rem 0 4rem"
							})
						} else {
							n.css({
								margin: "3rem 0 2rem"
							})
						}
						switch(g.type) {
							case "bar":
								h.addBar(g);
								break;
							case "line":
								h.addLine(g)
						}
					}
					var S = "";
					if(d == 0 && e.nodata_tpl) {
						n.html(e.nodata_tpl)
					}
					for(var x = 0; x < d; x++) {
						var T = u[x] || "";
						var N = a[x] || "";
						S += '<li class="chart_item">' + N + T + "</li>";
						if(x == d - 1) {
							var C = '<ul class="chartY">' + E + "</ul>" + '<div class="sign_box">' + f.join("") + "</div>" + '<div class="scroll">' + '<div class="data_box" style="width:' + b + '%;"><ul class="chart_data">' + S + "</ul></div>" + '<div class="title_box" style="width:' + b + '%;"><ul class="chartX">' + w + "</ul></div>" + "</div>";
							n.html(C);
							if(p) {
								var k = n.find(".scroll")[0];
								if(k) k.scrollLeft = p
							}
						}
					}
				},
				resize: function() {
					clearTimeout(l);
					l = setTimeout(function() {
						p.initRender();
					}, 1e3 / 60)
				},
				initEvent: function() {
					n.on("click", ".data_box .chart_item", h.showInfo);
					$(window).on("resize", p.resize)
				}
			};
			p.init(e);
			var d = {};
			d.add = function(e) {};
			d.destroy = function() {
				n.off("click", ".data_box .chart_item", h.showInfo);
				$(window).off("resize", p.resize)
			};
			return d
		}
	},
	j: function(e, t, n, r) {
		var i = n("J");
		var s = n("k");
		var o = null;
		var u = n("K");
		t.init = function(e) {
			var t = {
				deAction: "viewImage",
				type: 1,
				formatMoredata: function(e) {
					var t = {};
					for(var n = 0; n < e.length; n++) {
						t[e[n].type] = t[e[n].type] || [];
						t[e[n].type].push(e[n])
					}
					var r = [];
					r.push(e);
					for(var n in t) {
						r.push(t[n])
					}
					return r
				},
				beforeShow: function() {},
				afterShow: function() {},
				beforeHide: function() {},
				afterHide: function() {},
				swipeSlide: function() {}
			};
			var n = {};
			var r = {};
			var s;
			var a;
			var f;
			var l = "全部";
			var c;
			var h;
			var p;
			var d = "transition";
			var v = "transform";
			var m = "transform-origin";
			var g;
			var y = +(new Date);
			var b = u.init();
			var w = false;
			var E = 1;
			var S;
			var x = {
				queryToObj: function(e) {
					var t = {};
					e.replace(/([^?&]+)=([^?&]+)/g, function(e, n, r) {
						t[n] = r
					});
					return t
				},
				pauseAllVideos: function(e) {
					var t = document.getElementsByTagName("video");
					for(var n = 0; n < t.length; n++) {
						var r = t[n];
						if(!r.paused || !r.ended) {
							t[n].pause();
							var i = $(t[n]).siblings(".play").show()
						}
					}
				},
				getPinchTarget: function(e) {
					var t = e.evt.target;
					if(t.tagName.toUpperCase() !== "LI") {
						t = t.parentNode
					}
					return t
				},
				setCss: function(e, t, n) {
					var r = {};
					r["transition"] = 1;
					r["transform"] = 1;
					r["transform-origin"] = 1;
					if(r[t]) {
						$(e).css(t, n);
						if(n.indexOf("transform") >= 0) {
							n = "-webkit-" + n
						}
						$(e).css("-webkit-" + t, n)
					} else {
						$(e).css(t, n)
					}
				},
				turnToIndex: function(e) {
					var n = a.find("[data-act=" + t["deAction"] + "]");
					n = $(n[0]);
					T.changetab({
						el: a.find("[data-act=tab_tag]").get(0)
					});
					var r = n.width() / n.children().length;
					offset = -(e | 0) * r;
					n.data("offset", offset);
					x.setCss(n, v, "translate3d(" + offset + "px, 0px, 0px)")
				},
				updateCount: function() {
					if(!a) return;
					var e;
					a.find(".imgview-imglist").each(function() {
						if(this.style.display != "none") {
							e = this
						}
					});
					var t = $(e).children().length;
					var n = 1 - $(e).attr("data-offset") / $(e).children().eq(0).width();
					a.find(".imgview-pages-count").html(n + " / " + t)
				},
				evtOccurOnElementByClassName: function(e, t) {
					if(!t) return false;
					var n = e.target,
						r = new RegExp("\\b" + t + "\\b", "i");
					while(n.nodeType !== 9) {
						if(n.className.match(r)) return true;
						n = n.parentNode
					}
					return false
				}
			};
			var T = {
				touchstart: function(e) {
					if(!e.evt || !e.evt.touches) return;
					h = parseInt($(e.el).data("offset"));
					if(!h) {
						$(e.el).data("offset", 0);
						h = 0
					}
					if(e.evt.touches.length == 1) {
						c = "tap";
						x.setCss(e.el, d, "none");
						n.startData = {
							clientX: e.evt.touches[0].clientX,
							clientY: e.evt.touches[0].clientY
						};
						n.stopData = {
							clientX: e.evt.touches[0].clientX,
							clientY: e.evt.touches[0].clientY
						};
						var t = e.evt["timeStamp"] || +(new Date);
						if(s && a) {
							if(t - s < 500) {
								c = "doubletap"
							}
						}
						s = t
					} else if(e.evt.touches.length == 2 && a) {
						try {
							c = "pinch";
							e.el = x.getPinchTarget(e);
							x.setCss(e.el, d, "none");
							var i = e.evt.touches[0];
							var o = e.evt.touches[1];
							var u;
							if(!r || r.scale == undefined) {
								r.startData = {};
								r.scale = 1;
								r.startData.scale = r.scale;
								r.startData.offsetX = 0;
								r.startData.offsetY = 0;
								r.startData.clientX = (i.clientX + o.clientX) / 2;
								r.startData.clientY = (i.clientY + o.clientY) / 2;
								r.startData.distance = Math.sqrt((i.clientX - o.clientX) * (i.clientX - o.clientX) + (i.clientY - o.clientY) * (i.clientY - o.clientY));
								x.setCss(e.el, m, r.startData.clientX + "px " + r.startData.clientY + "px")
							} else {
								var f = (r.startData.clientX * (r.scale - 1) - r.startData.offsetX + (i.clientX + o.clientX) / 2) / r.scale;
								var l = (r.startData.clientY * (r.scale - 1) - r.startData.offsetY + (i.clientY + o.clientY) / 2) / r.scale;
								var p = (i.clientX + o.clientX) / 2 - f;
								var g = (i.clientY + o.clientY) / 2 - l;
								x.setCss(e.el, v, "translate3d(0px, 0px, 0px)");
								x.setCss(e.el, m, f + "px " + l + "px");
								x.setCss(e.el, v, "translate3d(" + p + "px, " + g + "px, 0px) scale(" + r.scale + ")");
								r.startData.offsetX = p;
								r.startData.offsetY = g;
								r.startData.clientX = f;
								r.startData.clientY = l;
								r.startData.distance = Math.sqrt((i.clientX - o.clientX) * (i.clientX - o.clientX) + (i.clientY - o.clientY) * (i.clientY - o.clientY))
							}
						} catch(y) {}
					}
				},
				touchmove: function(e) {
					h = parseInt($(e.el).data("offset"));
					if(c == "tap" || c == "swipe") {
						c = "swipe";
						var t = {
							clientX: n.stopData.clientX,
							clientY: n.stopData.clientY
						};
						n.stopData.clientX = e.evt.touches[0].clientX;
						n.stopData.clientY = e.evt.touches[0].clientY;
						if(r && r.scale && r.scale != 1) {
							e.evt.preventDefault();
							e.el = x.getPinchTarget(e);
							var i = $(e.el.parentNode).width() / $(e.el.parentNode).children().length;
							if(n.startData.clientX - e.evt.touches[0].clientX - r.startData.offsetX > i - r.startData.clientX) {
								var s = h - i;
								n.stopData.clientX = t.clientX;
								if(Math.abs(s) >= $(e.el.parentNode).width()) {
									var o = n.stopData.clientY - n.startData.clientY + r.startData.offsetY;
									var u = n.stopData.clientX - n.startData.clientX + r.startData.offsetX;
									x.setCss(e.el, d, "none");
									x.setCss(e.el, v, "translate3d(" + u + "px, " + o + "px, 0px) scale(" + r.scale + ")");
									return
								}
								if(!p) {
									var o = n.stopData.clientY - n.startData.clientY + r.startData.offsetY;
									var u = n.stopData.clientX - n.startData.clientX + r.startData.offsetX;
									x.setCss(e.el, d, "none");
									x.setCss(e.el, v, "translate3d(" + u + "px, " + o + "px, 0px) scale(" + r.scale + ")");
									return
								}
								x.setCss(e.el, d, v + " 0.5s ease");
								x.setCss(e.el, v, "translate3d(0px, 0px, 0px)");
								x.setCss(e.el.parentNode, d, v + " 0.5s ease");
								x.setCss(e.el.parentNode, v, "translate3d(" + s + "px, 0px, 0px)");
								$(e.el.parentNode).data("offset", s);
								r = {};
								c = null
							} else if(e.evt.touches[0].clientX - n.startData.clientX + r.startData.offsetX > r.startData.clientX) {
								var s = h + i;
								n.stopData.clientX = t.clientX;
								if(h >= 0) {
									var o = n.stopData.clientY - n.startData.clientY + r.startData.offsetY;
									var u = n.stopData.clientX - n.startData.clientX + r.startData.offsetX;
									x.setCss(e.el, d, "none");
									x.setCss(e.el, v, "translate3d(" + u + "px, " + o + "px, 0px) scale(" + r.scale + ")");
									return
								}
								if(!p) {
									var o = n.stopData.clientY - n.startData.clientY + r.startData.offsetY;
									var u = n.stopData.clientX - n.startData.clientX + r.startData.offsetX;
									x.setCss(e.el, d, "none");
									x.setCss(e.el, v, "translate3d(" + u + "px, " + o + "px, 0px) scale(" + r.scale + ")");
									return
								}
								x.setCss(e.el, d, v + " 0.5s ease");
								x.setCss(e.el, v, "translate3d(0px, 0px, 0px)");
								x.setCss(e.el.parentNode, d, v + " 0.5s ease");
								x.setCss(e.el.parentNode, v, "translate3d(" + s + "px, 0px, 0px)");
								$(e.el.parentNode).data("offset", s);
								r = {};
								c = null
							} else {
								var o = e.evt.touches[0].clientY - n.startData.clientY + r.startData.offsetY;
								var u = e.evt.touches[0].clientX - n.startData.clientX + r.startData.offsetX;
								p = false;
								x.setCss(e.el, d, "none");
								x.setCss(e.el, v, "translate3d(" + u + "px, " + o + "px, 0px) scale(" + r.scale + ")")
							}
						} else {
							if($(e.el).attr("noswipe") == 1 || $(e.el).children().length <= 1) return;
							w = true;
							var a = e.evt.touches[0];
							var f = n.startData;
							if(E) {
								if(Math.abs(f.clientX - a.clientX) > 15 && Math.abs(f.clientY - a.clientY < 15)) {
									E = 0
								}
							} else {
								e.evt.preventDefault();
								var u = e.evt.touches[0].clientX - n.startData.clientX + h;
								var o = 0;
								x.setCss(e.el, v, "translate3d(" + u + "px, " + o + "px, 0px)")
							}
						}
					} else if(c == "pinch") {
						if(x.evtOccurOnElementByClassName(e.evt, "imgview-video")) return;
						e.evt.preventDefault();
						e.el = x.getPinchTarget(e);
						p = false;
						var l = e.evt.touches[0];
						var m = e.evt.touches[1];
						var g = Math.sqrt((l.clientX - m.clientX) * (l.clientX - m.clientX) + (l.clientY - m.clientY) * (l.clientY - m.clientY));
						r.startData.scale = g / r.startData.distance * r.scale;
						var u = r.startData.offsetX;
						var o = r.startData.offsetY;
						x.setCss(e.el, v, "translate3d(" + u + "px, " + o + "px, 0px) scale(" + r.startData.scale + ")")
					}
				},
				touchend: function(e) {
					h = parseInt($(e.el).data("offset"));
					g && clearTimeout(g);
					p = true;
					if(c == "tap" && !a) {
						$ljBridge.ready(function(n, r) {
							function C(e) {
								if(e.naturalHeight > e.naturalWidth) {
									e.style.width = "100%";
									e.style.height = ""
								} else {
									e.style.width = "";
									e.style.height = "100%"
								}
							}
							var s = r.isLianjiaApp || r.isLinkApp;
							t.beforeShow(e);
							try {
								var o = JSON.parse($(e.el).attr("data-info"));
								if(!o || o.length == 0) {
									return false
								}
							} catch(u) {
								return false
							}
							var f = t["formatMoredata"](o);
							for(var l = 0, c = f.length; l < c; l++) {
								for(var p = 0, d = f[l].length; p < d; p++) {
									if(f[l][p].url) {
										f[l][p].url = f[l][p].url.replace(/(\d{0,3})x\d{0,3}.jpg$/, "$1x.jpg")
									}
								}
							}
							if(e.evt.target.className == "video_layer" || e.evt.target.className == "play_video") {
								var m = "//m.lianjia.com/client?tpl=3";
								window.open(m, "_top");
								return false
							}
							var g = i({
								renderData: f,
								dataAct: t["deAction"]
							});
							$(document.body).append(g);
							a = $("section[data-mark=img_layer]");
							a.find(".imgview-imglist")[0].style.display = "";
							setTimeout(function() {
								var e = 0,
									t = 0;
								if($("video").length) {
									e = $("video").eq(0).width();
									t = $("video").eq(0).height()
								}
								$("video").each(function() {
									var n = $(this);
									console.log(n.attr("poster"));
									n.attr("poster", n.attr("poster") + "." + e + "x" + t + ".jpg")
								})
							});
							$("video").on("touchmove", function(e) {
								e.stopPropagation()
							});
							$("video").on("ended", T.videoEnd);
							$("video").on("ended", function() {
								clearInterval(S)
							});
							$("video").on("pause", function() {
								clearInterval(S)
							});
							var b = 0;
							$("video").on("play", function() {
								var e = $(this),
									t = e.siblings(".play");
								var n = x.queryToObj(e.data("dig") || "");
								b == 0 && $ULOG.send(e.data("startEvtId", n));
								b = 1;
								t.hide();
								S = setInterval(function() {
									var t = parseInt($(this)[0].currentTime || 0);
									var n = {};
									var r = e[0];
									n = x.queryToObj(e.data("dig"));
									n.length = r.duration;
									n.process = Math.round(r.currentTime || 0);
									$ULOG.send(e.data("evtid"), n)
								}, 1e3)
							});
							if(f.length != 1) {
								$(a.find(".imgview-imglist")[0]).attr("data-mark", "layer_全部");
								$(a.find(".imgview-tag .type")[0]).html("全部");
								$(a.find(".imgview-title")[0]).html("全部");
								$(a.find(".imgview-tag")[0]).attr("data-mark", "layer_tab_全部")
							}
							$(a.find(".imgview-tag")[0]).addClass("focus");
							var w = a.find(".imgviewlist-imgbox");
							var E = {};
							try {
								var N = JSON.parse($(e.el).attr("data-video"));
								if(N && N.length) {
									(function() {
										var e = $('<div class="imgviewlist-type">视频(' + N.length + ")</div>");
										var t = $('<ul class="clearfix"></ul>');
										w.append(e).append(t);
										N.forEach(function(e) {
											t.append('<a href="' + e.view_url + '">' + '<li class="imgviewlist-li video">' + '<img class="imgviewlist-li-placeholder" src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==">' + '<img class="imgviewlist-li-img" src="' + e.head_pic + '">' + "<span>" + e.video_length + "</span>" + "</li>" + "</a>")
										})
									})()
								}
							} catch(u) {}
							f[0].forEach(function(e, t) {
								if(!E[e.type]) {
									var n = $('<div class="imgviewlist-type">' + e.type + "</div>");
									var r = $('<ul class="clearfix"></ul>');
									E[e.type] = r;
									w.append(n).append(r)
								}
								E[e.type].append('<li data-act="turnToIndex" class="imgviewlist-li" index="' + t + '">' + '<img class="imgviewlist-li-placeholder" src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==">' + '<img class="imgviewlist-li-img" style="height:100%;" src="' + e.url + '">' + "</li>")
							});
							w.find(".imgviewlist-li-img").each(function() {
								if(this.naturalHeight === undefined) return;
								if(this.naturalHeight == 0) {
									$(this).one("load", function() {
										C(this)
									})
								} else {
									C(this)
								}
							});
							for(var k in E) {
								$(E[k]).prev()[0].innerHTML += "(" + $(E[k]).children().length + ")"
							}
							if(t.type === 2) {
								a.find(".imgview-tolist").show();
								a.find(".imgview-pages").hide();
								a.find(".imgview-pages-count").show()
							}
							var L = a.find("[data-act=" + t["deAction"] + "]");
							L = $(L[0]);
							var A = L.width() / L.children().length;
							var O = $(e.el).width() / $(e.el).children().length;
							h = e.el.firstElementChild.className.indexOf("toDownload") > -1 ? h + O : h;
							var M = h / O * A;
							var _ = e.el.getAttribute("data-show-offset");
							if(_) {
								M = -(_ | 0) * A
							}
							L.data("offset", M);
							x.setCss(L, v, "translate3d(" + M + "px, 0px, 0px)");
							setTimeout(function() {
								x.updateCount()
							}, 10);
							a.on("touchmove", function(e) {
								var t = a.find("[data-mark=imgviewlist]")[0];
								if(!t || t.style.display === "none") {
									if(!$(e.target).parents("img_layer_info").length == 0) {
										e.preventDefault()
									}
								}
							});
							if(s) {
								$(a.find(".imgview-header")[0]).hide();
								location.hash = "imgvw=" + y;
								setTimeout(function() {
									$(window).on("hashchange", T.hashchange)
								}, 1e3)
							}
							t.afterShow(e, a)
						})
					} else if(c == "tap") {
						if(!r || !r.scale || r.scale == 1) {
							g = setTimeout(function() {
								T.exit(e)
							}, 600)
						}
					} else if(c == "swipe") {
						if(w && !E || !w) {
							if(w) {
								E = 1;
								w = false
							}
							if(r && r.scale && r.scale != 1) {
								r.startData.offsetY = n.stopData.clientY - n.startData.clientY + r.startData.offsetY;
								r.startData.offsetX = n.stopData.clientX - n.startData.clientX + r.startData.offsetX;
								return
							}
							if($(e.el).attr("noswipe") == 1 || $(e.el).children().length <= 1) return;
							x.setCss(e.el, d, v + " 0.5s ease");
							var o = e.evt["timeStamp"] || +(new Date);
							var u = n.stopData.clientX - n.startData.clientX;
							var f = $(e.el).width() / $(e.el).children().length;
							if(o - s < 1e3) {
								if(u > 0) {
									h = h + f;
									if(h > 0) {
										h = 0
									}
								} else {
									var l = h - f;
									if(Math.abs(l) < $(e.el).width()) {
										h = l
									}
								}
								$(e.el).data("offset", h);
								x.setCss(e.el, v, "translate3d(" + h + "px, 0px, 0px)");
								x.pauseAllVideos()
							} else {
								if(Math.abs(u) > f / 2) {
									if(u > 0) {
										h = h + f;
										if(h > 0) {
											h = 0
										}
									} else {
										var l = h - f;
										if(Math.abs(l) < $(e.el).width()) {
											h = l
										}
									}
									x.pauseAllVideos()
								}
								$(e.el).data("offset", h);
								x.setCss(e.el, v, "translate3d(" + h + "px, 0px, 0px)")
							}
							if(!a) {
								t["swipeSlide"](Math.abs(h / f), e.el)
							} else {
								x.updateCount()
							}
							n.stopData = s = null
						}
					} else if(c == "doubletap") {
						e.el = x.getPinchTarget(e);
						if(x.evtOccurOnElementByClassName(e.evt, "imgview-video")) return;
						x.setCss(e.el, d, v + " 0.5s ease");
						if(r && r.scale && r.scale != 1) {
							r = {};
							x.setCss(e.el, v, "translate3d(0px, 0px, 0px)")
						} else {
							p = false;
							r.startData = {
								clientX: n.startData.clientX,
								clientY: n.startData.clientY,
								offsetX: 0,
								offsetY: 0
							};
							r.scale = 2;
							x.setCss(e.el, m, n.startData.clientX + "px " + n.startData.clientY + "px");
							x.setCss(e.el, v, "translate3d(0px, 0px, 0px) scale(2)")
						}
						s = null
					} else if(c == "pinch") {
						e.el = x.getPinchTarget(e);
						if(x.evtOccurOnElementByClassName(e.evt, "imgview-video")) return;
						if(r.startData.scale <= 1) {
							x.setCss(e.el, d, v + " 0.5s ease");
							x.setCss(e.el, v, "translate3d(0px, 0px, 0px)");
							r = {}
						} else {
							r.scale = r.startData.scale
						}
					}
				},
				changetab: function(e) {
					var t = $(e.el).find(".type")[0].innerHTML;
					if(t == l) return;
					$("[data-mark=layer_tab_" + t + "]").addClass("focus");
					$("[data-mark=layer_tab_" + l + "]").removeClass("focus");
					$("[data-mark=layer_" + t + "]").show();
					$("[data-mark=layer_" + l + "]").hide();
					$(".imgview-title").html(t);
					l = t;
					x.updateCount();
					var n = $("video");
					for(var r = 0; r < n.length; r++) {
						n[r].pause()
					}
				},
				exit: function(e) {
					e.evt.preventDefault();
					if(x.evtOccurOnElementByClassName(e.evt, "imgview-video")) return;
					t["beforeHide"](a);
					$(window).off("hashchange", T.hashchange);
					a.remove();
					a = null;
					t["afterHide"]();
					clearInterval(S)
				},
				listExit: function(e) {
					a.find("[data-mark=imgviewlist]").hide();
					clearInterval(S)
				},
				showList: function(e) {
					a.find("[data-mark=imgviewlist]").show()
				},
				turnToIndex: function(e) {
					x.turnToIndex(e.el.getAttribute("index") - 0);
					a.find("[data-mark=imgviewlist]").hide()
				},
				stopDefaultscroll: function(e) {
					e.preventDefault()
				},
				hashchange: function(e) {
					t["beforeHide"](a);
					a.remove();
					$(window).off("hashchange", T.hashchange);
					a = null;
					t["afterHide"]()
				},
				playvideo: function(e) {
					if(x.evtOccurOnElementByClassName(e.evt, "imgview-video-ratio")) return;
					var t = $(e.el),
						n = t.siblings("img"),
						r = t.find("video"),
						i = t.find(".play");
					var s = x.queryToObj(t.data("dig") || "");
					if(t.find(".replay").css("display") != "none") {
						$ULOG.send(t.data("replayevtid"), s)
					}
					t.find(".replay").hide();
					if(r[0].paused || r[0].ended) {
						console.log(t.data("evtid"));
						$ULOG.send(t.data("evtid"), s);
						n.hide();
						i.hide();
						r[0].play()
					} else {
						n.show();
						i.show();
						r[0].pause()
					}
					return false
				},
				showRatio: function(e) {
					e.evt.preventDefault();
					e.evt.stopPropagation();
					var t = $(e.el),
						n = t.find("ul");
					n.toggle();
					return false
				},
				tabRatio: function(e) {
					e.evt.preventDefault();
					e.evt.stopPropagation();
					var t = $(e.el);
					t.parents(".imgview-video-ratioul").hide().find("a").removeClass("selected_ratio");
					t.parents(".imgview-video-ratioul").siblings("span").text(t.text());
					t.addClass("selected_ratio");
					var n = t.parents(".imgview-video-ratio").siblings("video"),
						r = n[0].currentTime;
					n.attr("src", t.data("src"));
					n[0].play();
					var i = setInterval(function() {
						n[0].currentTime = r;
						if(n[0].currentTime >= r) {
							clearInterval(i)
						}
					}, 1e3);
					if(t.data("evtid")) {
						$ULOG.send(t.data("evtid"), x.queryToObj(t.data("dig")))
					}
					return false
				},
				videoEnd: function(e) {
					var t = $(this);
					t.siblings(".replay").show()
				}
			};
			var N = {
				init: function() {
					N.initParam();
					if(o && o[t.deAction]) return;
					N.initEvent();
					o = o || {};
					o[t.deAction] = true
				},
				initParam: function() {
					$.extend(t, e)
				},
				initEvent: function() {
					f = $(document.body).de();
					f.add(t.deAction, "touchstart", T.touchstart);
					f.add(t.deAction, "touchmove", T.touchmove);
					f.add(t.deAction, "touchend", T.touchend);
					f.add("imgview-playvideo", "click", T.playvideo);
					if(!o) {
						f.add("tab_tag", "tap", T.changetab);
						f.add("imgviewer_exit", "tap", T.exit);
						f.add("imgviewer_list", "tap", T.showList);
						f.add("imgviewlist_exit", "tap", T.listExit);
						f.add("turnToIndex", "tap", T.turnToIndex);
						f.add("show_ratio", "tap", T.showRatio);
						f.add("tab_ratio", "tap", T.tabRatio)
					}
				}
			};
			N.init();
			return {
				swipe: function(e, n) {
					x.setCss(e, d, v + " 0.5s ease");
					var r = $(e).width() / $(e).children().length;
					if(n > $(e).children().length - 1) {
						n = 0
					}
					var i = 0 - n * r;
					$(e).data("offset", i);
					x.setCss(e, v, "translate3d(" + i + "px, 0px, 0px)");
					t["swipeSlide"](n, e)
				},
				hide: function() {
					t["beforeHide"](a);
					a.remove();
					a = null;
					t["afterHide"]()
				},
				destroy: function() {
					if(a) {
						a.remove();
						a = null
					}
					f.remove(t.deAction, "touchstart", T.touchstart);
					f.remove(t.deAction, "touchmove", T.touchmove);
					f.remove(t.deAction, "touchend", T.touchend);
					f.remove("tab_tag", "touchend", T.changetab);
					f.remove("imgviewer_exit", "touchend", T.exit);
					f.destroy && f.destroy();
					f = undefined;
					o = null
				}
			}
		}
	},
	J: function(e, t, n, r) {
		e.exports = function(e, t, n) {
			t = t || function(e) {
				return e
			};
			var r = "",
				i = t('<section class="layer-fixed" data-mark="img_layer">\n    <div class="imgview-wrap">\n        <header class="imgview-header">\n            <span data-act="imgviewer_exit" class="imgview-back" ontouchend="return false"><i class="icon_fanhui2">退出</i></span>\n            <span data-act="imgviewer_list" class="imgview-tolist" style="display: none;"><i class="icon_toList"></i></span>\n            <span class="imgview-title">'),
				s = t('</span>\n        </header>\n        <div class="imgview-view">\n            <div class="imgview-imgbox">\n            '),
				o = t('                <ul class="imgview-imglist" data-act="'),
				u = t('" data-mark="layer_'),
				a = t('" style="width: '),
				f = t('00%;display: none;">\n                '),
				l = t('                    <li class="imgview-li">\n                        '),
				c = t('                        <div class="imgview-video" data-act="imgview-playvideo" data-dig="'),
				h = t('" '),
				p = t(' data-evtid="'),
				d = t(' data-replayevtid="'),
				v = t('>\n                            <div class="replay"><i class="icon_replay"></i>重新观看</div>\n                            <video src="'),
				m = t('" controls poster="'),
				g = t('" x5-video-player-type="h5" playsinline -webkit-playsinline webkit-playsinline data-dig="'),
				y = t(' data-startEvtid="'),
				b = t("></video>\n                             "),
				w = t('                                <div class="imgview-video-ratio" data-act="show_ratio">\n                                    <span>'),
				E = t('</span>\n                                    <ul class="imgview-video-ratioul">\n                                        '),
				S = t('                                            <li><a data-src="'),
				x = t('" data-act="tab_ratio" '),
				T = t(' data-dig="'),
				N = t(">"),
				C = t("</a></li>\n                                        "),
				k = t("                                    </ul>\n                                </div>\n                            "),
				L = t("                        </div>\n                        "),
				A = t('                        <img src="'),
				O = t('">\n                        '),
				M = t("                    </li>\n              "),
				_ = t("                </ul>\n            "),
				D = t('            </div>\n        </div>\n        <footer class="imgview-pages-count" style="display: none;"></footer>\n        <footer class="imgview-pages" data-act="scroll">\n        '),
				P = t('        	   <span class="imgview-tag" data-act="tab_tag" data-mark="layer_tab_'),
				H = t('"><span class="type">'),
				B = t("</span><span>("),
				j = t(")</span></span>\n            "),
				F = t('        </footer>\n    </div>\n    <div class="imgviewlist-wrap" data-mark="imgviewlist" style="display: none;">\n        <header class="imgviewlist-header"><span data-act="imgviewlist_exit" class="imgviewlist-back"><i class="icon_fanhui2">退出</i></span><span class="imgviewlist-title">图片与视频</span></header>\n        <div class="imgviewlist-imgbox"></div>\n        <footer class="imgviewlist-footer"></footer>\n    </div>\n</section>');
			r += i;
			r += e.renderData[0][0].type;
			r += s;
			for(e.renderData.i = 0, e.renderData.len = e.renderData.length; e.renderData.i < e.renderData.len; e.renderData.i++) {
				e.list = e.renderData[e.renderData.i];
				r += o;
				r += e.dataAct;
				r += u;
				r += e.list[0].type;
				r += a;
				r += e.list.length;
				r += f;
				for(e.list.i = 0, e.list.len = e.list.length; e.list.i < e.list.len; e.list.i++) {
					e.value = e.list[e.list.i];
					r += l;
					if(e.value.isVideo) {
						r += c;
						r += e.value.dig;
						r += h;
						if(e.value.startEvt) {
							r += p;
							r += e.value.startEvt;
							r += h
						}
						if(e.value.replayEvtId) {
							r += d;
							r += e.value.replayEvtId;
							r += h
						}
						r += v;
						r += e.value.videos[0].src;
						r += m;
						r += e.value.url;
						r += g;
						r += e.value.dig;
						r += h;
						if(e.value.playEvtId) {
							r += p;
							r += e.value.playEvtId;
							r += h
						}
						if(e.value.startEvt) {
							r += y;
							r += e.value.startEvt;
							r += h
						}
						r += b;
						if(e.value.videos.length > 1) {
							r += w;
							r += e.value.videos[0].name;
							r += E;
							for(e.value.videos.i = 0, e.value.videos.len = e.value.videos.length; e.value.videos.i < e.value.videos.len; e.value.videos.i++) {
								e.v = e.value.videos[e.value.videos.i];
								r += S;
								r += e.v.src;
								r += x;
								if(e.v.name === "高清") {
									if(e.value.changeRadioEvtId) {
										r += p;
										r += e.value.changeRadioEvtId;
										r += h
									}
									r += T;
									r += e.value.dig;
									r += h
								}
								r += N;
								r += e.v.name;
								r += C
							}
							r += k
						}
						r += L
					} else {
						r += A;
						r += e.value.url;
						r += O
					}
					r += M
				}
				r += _
			}
			r += D;
			for(e.renderData.i = 0, e.renderData.len = e.renderData.length; e.renderData.i < e.renderData.len; e.renderData.i++) {
				e.list = e.renderData[e.renderData.i];
				if(e.list[0].type) {
					r += P;
					r += e.list[0].type;
					r += H;
					r += e.list[0].type;
					r += B;
					r += e.list.len;
					r += j
				}
			}
			r += F;
			return r
		}
	},
	k: function(e, t, n, r) {
		e.exports = function() {
			var e = "lj__common_cell_imageViewer_viewer_css";
			if(document.getElementById(e)) return;
			var t = document.createElement("style");
			t.id = e;
			t.innerHTML = ".imgview-wrap,.imgviewlist-wrap{-webkit-text-size-adjust:none;-ms-text-size-adjust:none;text-size-adjust:none}.imgview-wrap .imgview-title,.imgviewlist-wrap .imgviewlist-title{font-weight:700;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap}.imgview-wrap{position:fixed;width:100%;height:100%;left:0;top:0;background:#0e0e0e;overflow:hidden;z-index:99;-webkit-animation:ani-fadeIn .5s ease forwards;-moz-animation:ani-fadeIn .5s ease forwards;-o-animation:ani-fadeIn .5s ease forwards;animation:ani-fadeIn .5s ease forwards}.imgview-wrap .imgview-header{position:absolute;top:0;left:0;width:100%;height:2.5rem;line-height:2.5rem;color:#999;z-index:10}.imgview-wrap .imgview-back,.imgview-wrap .imgview-tolist{line-height:2.5rem;width:2.5rem;height:2.5rem;top:0;position:absolute;text-align:center}.imgview-wrap .imgview-back{left:0}.imgview-wrap .imgview-tolist{right:0;background-repeat:no-repeat;background-size:1.1875rem .78125rem;background-position:center center;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAZCAYAAABdEVzWAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAAAQklEQVRIx+3WsQ0AIAwDQcxM7D8BO5mW0ikQKf66SIn0ZWR7j4Ckdc+v72ay9ANhhBHWDWEAQuLtKSKMMMK6IazqAFfrF7kStXYHAAAAAElFTkSuQmCC)}.imgview-wrap .imgview-title{font-size:.875rem;height:2.5rem;left:2.5rem;position:absolute;right:2.5rem;text-align:center;top:0;z-index:2}.imgview-wrap .imgview-view{-webkit-tap-highlight-color:transparent;z-index:1;-webkit-user-select:none}.imgview-wrap .imgview-imgbox,.imgview-wrap .imgview-view{position:absolute;width:100%;top:0;bottom:0;overflow:hidden}.imgview-wrap .imgview-view .imgview-li .imgview-video{position:absolute;top:0;bottom:0;height:16.125rem;margin:auto;width:100%}.imgview-wrap .imgview-view .imgview-li .imgview-video video{height:100%;width:100%;position:absolute;left:0;z-index:1}.imgview-wrap .imgview-view .imgview-li .imgview-video .replay{position:absolute;background:rgba(0,0,0,.7);font-size:.8125rem;display:none;color:#fff;z-index:6;top:0;bottom:0;left:0;right:0;pointer-events:none}.imgview-wrap .imgview-view .imgview-li .imgview-video .imgview-video-ratio{position:absolute;bottom:-3rem;line-height:1.5rem;height:1.5rem;right:0;left:0;width:3rem;margin:0 auto;background-color:#393D3E;color:#00ae66;font-size:.75rem;border-radius:.0625rem;z-index:5}.imgview-wrap .imgview-view .imgview-li .imgview-video .imgview-video-ratio ul{position:absolute;top:0;background:#393D3E;width:3rem;display:none;border-radius:.0625rem}.imgview-wrap .imgview-view .imgview-li .imgview-video .imgview-video-ratio ul li a{display:block;font-size:.75rem;color:#fff}.imgview-wrap .imgview-view .imgview-li .imgview-video .imgview-video-ratio ul li::before{content:none}.imgview-wrap .imgview-view .imgview-li .imgview-video .imgview-video-ratio ul li a.selected_ratio{color:#00ae66}.imgview-wrap .imgview-loading{display:none;background:url(../../images/common/loading.gif) no-repeat;-moz-background-size:100%;-o-background-size:100%;background-size:100%;height:1.5rem;left:50%;margin:-12px 0 0 -12px;opacity:.3;position:absolute;top:50%;width:1.5rem;z-index:1}.imgview-wrap .imgview-imgbox{z-index:2}.imgview-wrap .imgview-imgbox .imgview-imglist{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;height:100%;overflow:hidden;position:absolute;z-index:1;margin:0;padding:0;list-style:none;-webkit-transition:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.imgview-wrap .imgview-imgbox .imgview-imglist li{height:100%;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;overflow:hidden;text-align:center;vertical-align:top;list-style:none;font-size:0;position:relative}.imgview-wrap .imgview-imgbox .imgview-imglist li:before{content:'';display:inline-block;height:100%;vertical-align:middle}.imgview-wrap .imgview-imgbox .imgview-imglist li img{vertical-align:middle;background:0 0;width:100%}.imgview-wrap .imgview-pages{position:absolute;left:0;bottom:0;padding:.5rem;color:#999;z-index:10;white-space:nowrap}.imgview-wrap .imgview-pages .imgview-tag{display:inline-block;padding:.3rem .5rem;-webkit-border-radius:.2rem;-moz-border-radius:.2rem;border-radius:.2rem}.imgview-wrap .imgview-pages .imgview-tag.focus{color:#fff}.imgview-wrap .imgview-pages-count{position:absolute;left:0;bottom:1.2rem;right:0;text-align:center;color:#fff}.imgviewlist-wrap{position:fixed;width:100%;height:100%;left:0;top:0;background:#0e0e0e;overflow:hidden;z-index:100;-webkit-animation:ani-fadeIn .5s ease forwards;-moz-animation:ani-fadeIn .5s ease forwards;-o-animation:ani-fadeIn .5s ease forwards;animation:ani-fadeIn .5s ease forwards}.imgviewlist-wrap .imgviewlist-header{position:absolute;top:0;left:0;width:100%;height:2.5rem;line-height:2.5rem;color:#999;z-index:10}.imgviewlist-wrap .imgviewlist-back{height:2.5rem;line-height:2.5rem;left:0;position:absolute;top:0;width:2.5rem;text-align:center}.imgviewlist-wrap .imgviewlist-title{font-size:.875rem;height:2.5rem;left:2.5rem;position:absolute;right:2.5rem;text-align:center;top:0;z-index:2}.imgviewlist-wrap .imgviewlist-imgbox{overflow-y:auto;position:absolute;top:2.5rem;left:0;right:0;bottom:0}.imgviewlist-wrap .imgviewlist-imgbox .imgviewlist-type{color:#fff;margin:2.6% 0 0 2.6%}.imgviewlist-wrap .imgviewlist-imgbox .imgviewlist-li{width:30%;overflow:hidden;float:left;position:relative;margin:2.6% 0 0 2.6%}.imgviewlist-wrap .imgviewlist-imgbox .imgviewlist-li.video span{position:absolute;bottom:0;right:0;left:0;display:block;text-align:right;padding-right:.3125rem;padding-bottom:.3125rem;color:#fff;padding-top:1rem;background:-webkit-gradient(linear,0 0,0 100%,from(rgba(0,0,0,0)),to(rgba(0,0,0,.6)));background:linear-gradient(to bottom,rgba(0,0,0,0) 0,rgba(0,0,0,.6) 100%)}.imgviewlist-wrap .imgviewlist-imgbox .imgviewlist-li.video span::before{content:'';display:block;position:absolute;left:.3125rem;bottom:.3125rem;height:1.15625rem;width:1.15625rem;background-size:100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAAE40lEQVRYw82YX2hTVxzHv+e229TbWHLzsKS9ozqxYoMRE9NYOkrX7WEwnNOO3TlD2bIXh3WbFV8cIhsyUewkhXV/YG4rTjdQBKHCmEuKOELaElnZVZhbvZFrkpfcNL1m6zDpbw9LSsyU5iax7Au/l8P9/c7n/M7NzTlfBoMiouUAevLhANAKoDEf6Xz8BmAKQBDAT4yxv4zMwQzA2AEMAOjNZDKTqVTqqqqqN8Lh8PTU1NTsqVOndJ/PZ3I4HCs9Hs/ToiiuN5vNnTzPuwGcBzDIGLtutAkPg7ER0RkiyimKctDn860D0FRu+Hy+dYqivE9EuXwdW7VAO4koHY/HjwuCIBqBKQ1BEMR4PH6ciNJE9Lrh7SMiBmBQ1/XVkUhkpLu7O1yTtgMIBoPtLperz2QyKQD2M8ZoUag80FeapmH79u0fXLly5e9aARXU1dX1xIULFw4LgsABeJMxllsMalDTNIvFYjlYa5hSJZPJI4IgZBhje4vHuRKg13RdXyNJ0oePGggANmzYcFjXdZGIdj4QioiaAHx+7dq1kcuXL88tBVQsFstFIpERAJ8RUXNhfGH7iOjbRCKh2mw2/1IAFSsej79jtVqfYoztWoDKfxinLBZLi6Zp80sNJQgCl0wmowAcjDG5sH0D0Wj0kFGgEydO2Hp7e/lqoTRNm49Go4cA7EO+SyuIKO31eg19qQE0ZbPZ29lsVg0Ggy8bzS0NSZJaiWiWiFYwInoxk8nsa2ho6DO6wmw2O15XV9cMIJdIJPydnZ3+6enpbKUdu3v37jc8z/s5AD2pVOpqlTtQZ7VaB2RZPjc0NCRWWiSVSv0M4FkOgENV1RtVQgEAli1b5t6zZ8+Psiy/VEm+qqrXAWzkAKydmJi4VQsoAOA4bmVbW9unMzMzJ43+CMLh8C0AazkA5vHx8XStoApqbGx89ezZsz9cunRpY7k5oVAoDcDMiIgYY83lJhar6EV/qIgo09/f7x4eHi5r4UR0hwMw6/V6TbXuFADcu3fv99HR0R3lAkmS1ABA5wCk2tvbG2sNlE6nz2zbtu2FrVu3/lpuTkdHRyOAVD2Am263ezUAtRYw8/PzaVmWDzgcjlGjuR6PZzWAmxyAKVEU19cCaG5uLuT3+5+vBAgARFFsA/BLPYCg2Wx+F8AXVfBkE4nEoMvl+iQWi+UqLWI2mzsB+DkAAZ7nPfmXzKhyuVzudiAQ2GGz2YaqAZIkqYHneQ+AQOHo8mU0Gv1j1apVXxspdPTo0SdDoZB+8eLFPyuFKUhRlDdaWlrWMMbe+v+epxhjMoDvZFneW135yiTLcj+A7/Mc910cDlit1t1jY2OepQQaGxvzWK3WtwEcKIwtQDHGYgB2O53Ovi1btjy+FECbNm16zOl09gHYzRi7s8BS+iARndQ0zbxE976PBEGYYYy9VzzOPeDZAUEQWDKZPGK32+sfBYzdbq/PX0QZCufyIj3MS6gD8LGu6+Lk5ORIT0/PRK2AAoGAe/PmzX0mk0kFMFB6ZV9URLSLiGbj8fixGrkux/KXg11VrYyImor9KUmSWo3ASJLUqijKwSJ/qmmxOY06efsBvJLJZMIFJy8UCk1HIhH99OnTutfrNTmdTlNHR0fByXsm/9dxDv86eXI5c5UNVQS3HMBz+K/nuRLALO73PAOowPP8ByOLWbkh3q1DAAAAAElFTkSuQmCC)}.imgviewlist-wrap .imgviewlist-imgbox .imgviewlist-li-placeholder{width:100%;pointer-events:none}.imgviewlist-wrap .imgviewlist-imgbox .imgviewlist-li-img{height:auto;width:auto;max-width:none;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.imgviewlist-wrap .imgviewlist-imgbox::after{height:.9375rem;content:'';display:block}";
			document.head.appendChild(t)
		}()
	},
	K: function(e, t, n, r) {
		t.init = function(e) {
			var t = {
				deEl: document.body,
				deAction: "scroll",
				beforeSroll: function() {},
				afterScroll: function() {},
				inertia: false,
				direction: "x"
			};
			var n = {};
			var r;
			var i;
			var s;
			var o;
			if($.browser.webkit) {
				i = "-webkit-transition";
				s = "-webkit-transform";
				o = "-webkit-transform-origin"
			} else {
				i = "transition";
				s = "transform";
				o = "transform-origin"
			}
			var u = {
				touchstart: function(e) {
					if(!e.evt || !e.evt.touches) return;
					currentOffset = parseInt($(e.el).data("offset"));
					if(!currentOffset) {
						$(e.el).data("offset", 0);
						currentOffset = 0
					}
					$(e.el).css(i, "none");
					n.startData = {
						clientX: e.evt.touches[0].clientX,
						clientY: e.evt.touches[0].clientY
					};
					n.stopData = {
						clientX: e.evt.touches[0].clientX,
						clientY: e.evt.touches[0].clientY
					};
					t.beforeSroll(e)
				},
				touchmove: function(e) {
					currentOffset = parseInt($(e.el).data("offset"));
					if($(e.el).attr("noswipe") == 1 || $(e.el).children().length <= 1) return;
					e.evt.preventDefault();
					var r = {
						clientX: n.stopData.clientX,
						clientY: n.stopData.clientY
					};
					n.stopData.clientX = e.evt.touches[0].clientX;
					n.stopData.clientY = e.evt.touches[0].clientY;
					var i, o;
					if(t["direction"] == "x") {
						i = e.evt.touches[0].clientX - n.startData.clientX + currentOffset;
						o = 0;
						var u = $(e.el).width() - $(e.el.parentNode).width();
						if(Math.abs(i) > u + 30) {
							return
						}
						if(i > 30) {
							return
						}
					} else {
						i = 0;
						o = e.evt.touches[0].clientY - n.startData.clientY + currentOffset;
						var a = $(e.el).height();
						if(Math.abs(o) > a + 30) {
							return
						}
						if(o > 30) {
							return
						}
					}
					$(e.el).css(s, "translate3d(" + i + "px, " + o + "px, 0px)")
				},
				touchend: function(e) {
					currentOffset = parseInt($(e.el).data("offset"));
					if(t["direction"] == "x") {
						currentOffset = n.stopData.clientX - n.startData.clientX + currentOffset;
						var r = $(e.el).width() - $(e.el.parentNode).width();
						var o = false;
						if(Math.abs(currentOffset) > r) {
							currentOffset = -r;
							o = true
						}
						if(currentOffset > 0) {
							currentOffset = 0;
							o = true
						}
						if(o) {
							$(e.el).css(i, s + " 0.5s ease");
							$(e.el).css(s, "translate3d(" + currentOffset + "px, 0px, 0px)")
						}
					} else {
						currentOffset = n.stopData.clientY - n.startData.clientY + currentOffset;
						var u = $(e.el).height();
						var o = false;
						if(Math.abs(currentOffset) > u) {
							currentOffset = -u;
							o = true
						}
						if(currentOffset > 0) {
							currentOffset = 0;
							o = true
						}
						if(o) {
							$(e.el).css(i, s + " 0.5s ease");
							$(e.el).css(s, "translate3d(0px, " + currentOffset + "px, 0px)")
						}
					}
					$(e.el).data("offset", currentOffset);
					t.afterScroll(e)
				}
			};
			var a = {
				init: function() {
					a.initParam();
					a.initEvent()
				},
				initParam: function() {
					$.extend(t, e)
				},
				initEvent: function() {
					r = $(t.deEl).de();
					r.add(t.deAction, "touchstart", u.touchstart);
					r.add(t.deAction, "touchmove", u.touchmove);
					r.add(t.deAction, "touchend", u.touchend)
				}
			};
			a.init();
			return {
				destroy: function() {},
				setOffset: function(e, n) {
					var r = e;
					if(t["direction"] == "x") {
						var i = $(n).width() - $(n.parentNode).width();
						if(Math.abs(e) > i) {
							r = -i
						}
						if(e > 0) {
							r = 0
						}
						$(n).css(s, "translate3d(" + r + "px, 0px, 0px)")
					} else {
						var o = $(n).height() - $(n.parentNode).height();
						if(Math.abs(e) > o) {
							r = -o
						}
						if(e > 0) {
							r = 0
						}
						$(n).css(s, "translate3d(0px, " + r + "px, 0px)")
					}
					$(n).data("offset", r)
				}
			}
		}
	},
	l: function(e, t, n, r) {
		var i = n("d");
		var s = n("f");
		var o = false;
		var u;
		var a = navigator.userAgent.toLowerCase().indexOf("micromessenger") >= 0;
		var f = /QQBrowser/g.exec(navigator.userAgent);
		var l = !f && /QQ/g.exec(navigator.userAgent);
		var c, h, p;
		var d = n("L");
		var v = n("n");
		var m = n("g");
		var g;
		var y = {};
		var b;
		var w;
		var E;
		if($ljBridge) {
			$ljBridge.ready(function(e, t) {
				var n = t.isLianjiaApp || t.isLinkApp;
				if(t.isLinkApp && !t.iswk) return;
				w = t.isLinkApp;
				if(n) b = e
			})
		}
		var S = function(e, t) {
			var n = location.pathname.slice(1).split("/");
			var r = "";
			if(c && n[0] == c["cur_city_short"]) {
				r = c["cur_city_id"]
			} else if(c && n[0] == c["nation"]["short"]) {
				r = c["nation"]["nation_id"]
			} else {
				r = c["cur_city_id"]
			}
			var i = {
				pid: "lianjiamweb",
				key: window.location.href,
				action: {
					ljweb_group: "BIGDATA_M",
					ljweb_mod: e,
					ljweb_ref: document.referrer,
					ljweb_cid: r,
					ljweb_channel_key: c["js_ns"]
				}
			};
			if(t) {
				i["ljweb_el"] = t
			}
			window["post_ulog"] && window["post_ulog"]("10043", i["action"])
		};
		var x = {
			sendSMS: function(e) {
				var t = e.data;
				try {
					if(/newsarticle/img.test(navigator.userAgent)) {
						$ULOG.send("10017", {
							pid: "lianjiamweb",
							key: window.location.href
						})
					}
					window["post_ulog"] && window["post_ulog"]("10013", {
						ljweb_el: e.data.ucid || ""
					});
					S("message_click", e.data.ucid || "");
					i({
						ljweb_id: "20001",
						ljweb_el: e.data.ucid || "",
						ljweb_bl: "agentmessage",
						rebuild: function(e) {
							for(var n in t) {
								if(e[n] != undefined) {
									e[n] = t[n]
								}
							}
							if(t.ljweb_mod) {
								e["ljweb_mod"] = t.ljweb_mod
							} else {
								e["ljweb_mod"] = e["ljweb_channel_key"] + "_detail_diamond-first"
							}
						}
					}, h)
				} catch(n) {}
				if(b) {
					var r = "func/sendmessage?telephone=" + e.data.tel + "&message=" + encodeURIComponent(e.data.content) + "&agent_id=" + (e.data.ucid || "");
					if(w) {
						r = "tel/message?tel=" + e.data.tel
					}
					b.actionWithUrl(b.getSchemeLink(r));
					return
				}
				var s = "";
				if($.os.ios) {
					if(!a) {
						if(parseInt($.os.version) >= 8) {
							s = "sms:" + t.tel + "/&body=" + t.content
						} else {
							s = "sms:" + t.tel + "/;body=" + t.content
						}
						if(t.hasUrl) {
							var o = t.url || location.href;
							s += o
						}
					} else {
						s = "sms:" + t.tel;
						if(!t.tel) {
							s = ""
						}
					}
				} else if($.os.android) {
					if(!f) {
						s = "sms:" + t.tel + "?body=" + t.content;
						if(t.hasUrl) {
							var o = t.url || location.href;
							s += o
						}
					} else {
						s = "sms:" + t.tel;
						if(!t.tel) {
							s = ""
						}
					}
				}
				if(s) {
					if($.os.ios && l) {
						v.show({
							title: "提示",
							content: [{
								content: "确定发短信给：" + t.tel + "吗？"
							}],
							ok: function() {
								location.href = s;
								setTimeout(function() {
									v.destroy()
								}, 500)
							},
							manualClose: true,
							okUrl: s
						})
					} else {
						location.href = s
					}
				}
			},
			telphone: function(e) {
				function u(e) {
					var t = {
						zufang_gold: "getZufangPhone",
						zufang_diamond: "getZufangPhone",
						zufang_kanfangjilu: "getZufangPhone",
						"default": "get400phone"
					};
					s[t[e.channel] || t["default"]].request({
						agent_ucid: e.ucid,
						phone_channel: e.channel,
						phone_callid: e.call_id || "",
						phone_time: e.phone_time,
						phone_sign: e.phone_sign
					}, {
						success: function(t) {
							if(t.errno == 0) {
								t = t.data;
								!!p && p(t, e);
								for(var n in t) {
									a(t[n])
								}
							} else {
								if(e.mobile) {
									var r = e.mobile;
									if(r) {
										a(r)
									}
								} else {
									g.showError("暂时无法拨打，请稍后再试");
									return false
								}
							}
						},
						fail: function(t) {
							if(e.mobile) {
								var n = e.mobile;
								if(n) {
									a(n)
								} else {
									g.showError("暂时无法拨打，请稍后再试");
									return false
								}
							}
						}
					})
				}

				function a(e) {
					if(b) {
						var n = "phonenum/customerservices?telephone=" + e.replace(",", "转");
						if(w) {
							n = "tel/tel?tel=" + e.replace(",", "-")
						}
						b.actionWithUrl(b.getSchemeLink(n));
						return
					}
					if($.os.ios && l || $.os.android) {
						var r = e.split(",");
						var i;
						if(r.length == 2) {
							i = [{
								content: "电话号码：" + e.replace(",", " - ")
							}, {
								content: '分机号：<span style="color:#00ae66">' + r[1] + "</span>（可能需要拨分机号）"
							}]
						} else {
							i = [{
								content: "电话号码：" + e.replace(",", " - ")
							}]
						}
						v.show({
							title: "确定拨打电话",
							content: i,
							contentType: "left",
							ok: function() {
								location.href = "tel:" + e;
								window["post_ulog"] && window["post_ulog"]("10781", {
									status: 1,
									agent_ucid: t.ucid,
									phone_num: e
								})
							},
							cancel: function() {
								window["post_ulog"] && window["post_ulog"]("10781", {
									status: 0,
									agent_ucid: t.ucid,
									phone_num: e
								})
							},
							manualClose: true,
							okUrl: "tel:" + e
						})
					} else {
						location.href = "tel:" + e
					}
				}
				var t = e.data;
				if(!e.data.tel && (!t.manualGetPhone || t.manualGetPhone != "1")) {
					g.showError("热线暂时不可用，请您稍后再试");
					return false
				}
				try {
					if(/newsarticle/img.test(navigator.userAgent)) {
						$ULOG.send("10016", {
							pid: "lianjiamweb",
							key: window.location.href
						})
					}
					window["post_ulog"] && window["post_ulog"]("10012", {
						ljweb_el: e.data.ucid || ""
					});
					S("phone_click", e.data.ucid || "");
					i({
						ljweb_id: "20001",
						ljweb_el: e.data.ucid || "",
						ljweb_bl: "agentphone",
						rebuild: function(e) {
							for(var n in t) {
								if(e[n] != undefined) {
									e[n] = t[n]
								}
							}
							if(t.ljweb_mod) {
								e["ljweb_mod"] = t.ljweb_mod
							} else {
								e["ljweb_mod"] = e["ljweb_channel_key"] + "_detail_diamond-first"
							}
						}
					}, h);
					if(t.UA == "netease") {
						$.ajax({
							url: "//esf.house.163.com/common/agentstat.do",
							dataType: "jsonp",
							data: {
								agent: t.ucid,
								cel: t.tel
							},
							success: function(e) {
								if(e.errorCode == 1) {
									window["post_ulog"] && window["post_ulog"]("10260", {
										location: "detail_tel_succ"
									})
								} else {
									window["post_ulog"] && window["post_ulog"]("10260", {
										location: "detail_tel_fail"
									})
								}
							},
							error: function() {
								window["post_ulog"] && window["post_ulog"]("10260", {
									location: "detail_tel_fail"
								})
							}
						})
					}
				} catch(n) {}
				if(t.manualGetPhone && t.manualGetPhone == "1") {
					if(t.phone_sign && t.phone_time) {
						u(t)
					} else {
						var r = {
							zufang_gold: "getZufangAgentSign",
							zufang_diamond: "getZufangAgentSign",
							zufang_kanfangjilu: "getZufangAgentSign",
							"default": "getAgentSign"
						};
						s[r[t.channel] || r["default"]].request({
							agent_ucid: t.ucid,
							channel: t.channel,
							callId: t.call_id || ""
						}, {
							success: function(e) {
								if(e.errno == 0) {
									t.phone_sign = e.data.phone_sign;
									t.phone_time = e.data.phone_time;
									u(t)
								} else {
									g.showError("暂时无法拨打，请稍后再试");
									return false
								}
							},
							fail: function(e) {
								g.showError("暂时无法拨打，请稍后再试");
								return false
							}
						})
					}
				} else {
					var o = t.tel && t.tel.replace("-", ",").replace("转", ",");
					if(o) {
						a(o)
					}
				}
			},
			headimg: function(e) {
				var t = e.data;
				i({
					ljweb_id: "20001",
					ljweb_el: e.data.ucid || "",
					ljweb_bl: "agent",
					rebuild: function(e) {
						for(var n in t) {
							if(e[n] != undefined) {
								e[n] = t[n]
							}
						}
						if(t.ljweb_mod) {
							e["ljweb_mod"] = t.ljweb_mod
						} else {
							e["ljweb_mod"] = e["ljweb_channel_key"] + "_detail_diamond-first"
						}
					}
				}, h)
			},
			im: function(e) {
				var t = e.data && e.data["id"];
				var n = e.data;
				if(y[t]) {
					y[t].show()
				} else {
					var r = {};
					r["ljweb_mod"] = e.data.mod;
					r["detail_info"] = $(e.el).attr("data-layer_info");
					if(!r["detail_info"] || r["detail_info"] == "[]") return;
					y[t] = m(r, c)
				}
				i({
					ljweb_id: "20001",
					ljweb_el: e.data.ucid || "",
					ljweb_bl: "agentim",
					rebuild: function(e) {
						for(var t in n) {
							if(e[t] != undefined) {
								e[t] = n[t]
							}
						}
						if(n.ljweb_mod) {
							e["ljweb_mod"] = n.ljweb_mod
						} else {
							e["ljweb_mod"] = e["ljweb_channel_key"] + "_detail_diamond-first"
						}
					}
				}, h)
			}
		};
		var T = {
			init: function(e) {
				if(o) return;
				E = $("#" + e).getMark();
				var t = $("#" + e).find("[data-act=telphone]").attr("data-query");
				t = t && $.queryToJson(t);
				if(!t) {
					t = $("#" + e).find("[data-act=sendSMS]").attr("data-query");
					t = t && $.queryToJson(t)
				}
				if(t) {
					i({
						ljweb_id: "20001",
						ljweb_el: t.ucid || "",
						ljweb_bl: "agent_show",
						rebuild: function(e) {
							for(var n in t) {
								if(e[n] != undefined) {
									e[n] = t[n]
								}
							}
							if(t.ljweb_mod) {
								e["ljweb_mod"] = t.ljweb_mod
							} else {
								e["ljweb_mod"] = e["ljweb_channel_key"] + "_detail_diamond-first"
							}
						}
					}, h)
				}
				o = true;
				T.bind(e);
				g = d.init()
			},
			bind: function(e) {
				u = $("#" + e).de();
				u.add("sendSMS", "click", x.sendSMS);
				u.add("telphone", "click", x.telphone);
				u.add("headimg", "click", x.headimg);
				u.add("im", "click", x.im)
			},
			destroy: function() {
				u.remove("sendSMS", "click", x.sendSMS);
				u.remove("telphone", "click", x.telphone);
				u.remove("headimg", "click", x.headimg);
				u.remove("im", "click", x.im);
				u.destroy && u.destroy()
			}
		};
		e.exports = function(e, t, n) {
			c = t && t["args"];
			h = t;
			p = n;
			T.init(e);
			return {
				destroy: T.destroy
			}
		}
	},
	L: function(e, t, n, r) {
		var i = n("m");
		var s = n("M");
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
	m: function(e, t, n, r) {
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
	M: function(e, t, n, r) {
		e.exports = function() {
			var e = "lj__common_cell_toast_toast_css";
			if(document.getElementById(e)) return;
			var t = document.createElement("style");
			t.id = e;
			t.innerHTML = ".toast{position:fixed;left:50%;top:50%;z-index:10;-webkit-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);-o-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.toast .content{min-width:8.125rem;max-width:12.5rem;background-color:rgba(0,0,0,.7);-webkit-border-radius:.625rem;-moz-border-radius:.625rem;border-radius:.625rem;text-align:center;padding:0 .625rem 1rem;color:#fff}.toast .content_without_icon{padding-top:1rem}.toast .icon_box{min-width:5rem;min-height:5rem}.toast .info_box{font-size:1rem;line-height:1.5;font-weight:400}.toast .icon_error,.toast .icon_warn{display:block;position:relative;width:5rem;height:5rem;margin:1.875rem auto 0;border:0;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;font-size:0;cursor:pointer}.toast .icon_error::after,.toast .icon_error::before,.toast .icon_warn::after,.toast .icon_warn::before{position:absolute;content:' ';background-color:#fff;left:50%}.toast .icon_error::after,.toast .icon_error::before{width:.125rem;height:70%;top:50%;-webkit-transform:translate(-50%,-50%) rotate(45deg);-moz-transform:translate(-50%,-50%) rotate(45deg);-ms-transform:translate(-50%,-50%) rotate(45deg);-o-transform:translate(-50%,-50%) rotate(45deg);transform:translate(-50%,-50%) rotate(45deg);-webkit-border-radius:.125rem;-moz-border-radius:.125rem;border-radius:.125rem}.toast .icon_error::after{-webkit-transform:translate(-50%,-50%) rotate(-45deg);-moz-transform:translate(-50%,-50%) rotate(-45deg);-ms-transform:translate(-50%,-50%) rotate(-45deg);-o-transform:translate(-50%,-50%) rotate(-45deg);transform:translate(-50%,-50%) rotate(-45deg)}.toast .icon_success{display:block;width:3.6rem;height:2rem;border-left:.125rem solid #fff;border-bottom:.125rem solid #fff;-webkit-transform:translate(2.25rem,.5rem) rotate(-45deg);-moz-transform:translate(2.25rem,.5rem) rotate(-45deg);-ms-transform:translate(2.25rem,.5rem) rotate(-45deg);-o-transform:translate(2.25rem,.5rem) rotate(-45deg);transform:translate(2.25rem,.5rem) rotate(-45deg)}.toast .icon_warn{width:2.5rem;height:2.5rem;border:.125rem solid #fff;-webkit-transform:translate(0,1.25rem);-moz-transform:translate(0,1.25rem);-ms-transform:translate(0,1.25rem);-o-transform:translate(0,1.25rem);transform:translate(0,1.25rem)}.toast .icon_warn::before{width:.125rem;height:50%;top:.3125rem;margin-left:-.0625rem}.toast .icon_warn::after{width:.25rem;height:.25rem;-webkit-border-radius:.125rem;-moz-border-radius:.125rem;border-radius:.125rem;top:72%;margin-left:-.125rem}";
			document.head.appendChild(t)
		}()
	},
	n: function(e, t, n, r) {
		var i = n("N");
		var s = n("o");
		var o = {
			hideCancel: false,
			type: "",
			content: [],
			contentType: "",
			title: "",
			okText: "确定",
			cancelText: "取消",
			ok: function() {},
			okUrl: "javascript:;",
			cancel: function() {},
			manualClose: false
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
					hideCancel: false,
					type: "",
					content: [],
					title: "",
					contentType: "",
					okText: "确定",
					cancelText: "取消",
					ok: function() {},
					okUrl: "javascript:;",
					cancel: function() {},
					manualClose: false
				}
			}
		};
		var l = {
			stopDefaultscroll: function(e) {
				e.preventDefault()
			},
			ok: function() {
				o.ok();
				if(!o.manualClose) {
					f()
				}
			},
			cancel: function() {
				o.cancel();
				f()
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
				var e = i({
					hideCancel: o["hideCancel"],
					content: o["content"],
					title: o["title"],
					okText: o["okText"],
					cancelText: o["cancelText"],
					okUrl: o["okUrl"],
					type: o["type"],
					contentType: o["contentType"]
				});
				u = $(e);
				u.appendTo(document.body);
				u.on("touchmove", l.stopDefaultscroll);
				a = u.getMark()
			},
			initEvent: function() {
				$(a.one("btn_cancel")).on("tap", l.cancel);
				$(a.one("btn_ok")).on("tap", l.ok)
			}
		};
		var h = {};
		h.show = function(e) {
			c.init(e)
		};
		h.destroy = f;
		e.exports = h
	},
	N: function(e, t, n, r) {
		e.exports = function(e, t, n) {
			t = t || function(e) {
				return e
			};
			var r = "",
				i = t('<div class="layer_fixed">\n<div class="layer confirm'),
				s = t(" has_icon"),
				o = t('">'),
				u = t('<div class="icon_box"><i class="icon_'),
				a = t('"></i></div>'),
				f = t('<h3 class="layer_tit">'),
				l = t("</h3>"),
				c = t('<div class="layer_cont '),
				h = t('<p class="text'),
				p = t(" has_title"),
				d = t("<strong>"),
				v = t("</strong>"),
				m = t("</p>"),
				g = t('</div>\n<div class="layer_opt">'),
				y = t('<a href="javascript:;" class="btn_cancel" data-mark="btn_cancel">'),
				b = t("</a>"),
				w = t('<a href="'),
				E = t('" class="btn_ok" data-mark="btn_ok">'),
				S = t("</a>\n</div>\n</div>\n</div>");
			r += i;
			if(e.type) {
				r += s
			}
			r += o;
			if(e.type) {
				r += u;
				r += e.type;
				r += a
			}
			if(e.title) {
				r += f;
				r += e.title;
				r += l
			}
			r += c;
			r += e.contentType;
			r += o;
			for(e.content.i = 0, e.content.len = e.content.length; e.content.i < e.content.len; e.content.i++) {
				e.ct = e.content[e.content.i];
				r += h;
				if(e.ct.title) {
					r += p
				}
				r += o;
				if(e.ct.title) {
					r += d;
					r += e.ct.title;
					r += v
				}
				r += e.ct.content;
				r += m
			}
			r += g;
			if(!e.hideCancel) {
				r += y;
				r += e.cancelText;
				r += b
			}
			r += w;
			r += e.okUrl;
			r += E;
			r += e.okText;
			r += S;
			return r
		}
	},
	o: function(e, t, n, r) {
		e.exports = function() {
			var e = "lj__common_cell_confirm_confirm_css";
			if(document.getElementById(e)) return;
			var t = document.createElement("style");
			t.id = e;
			t.innerHTML = ".confirm .icon_box{min-width:5rem;min-height:5rem;margin-bottom:-1.25rem}.confirm .icon_error,.confirm .icon_warn{display:block;position:relative;width:5rem;height:5rem;margin:1.875rem auto 0;border:0;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;font-size:0;cursor:pointer}.confirm .icon_error::after,.confirm .icon_error::before,.confirm .icon_warn::after,.confirm .icon_warn::before{position:absolute;content:' ';background-color:#000;left:50%}.confirm .icon_error::after,.confirm .icon_error::before{width:.125rem;height:70%;top:50%;-webkit-transform:translate(-50%,-50%) rotate(45deg);-moz-transform:translate(-50%,-50%) rotate(45deg);-ms-transform:translate(-50%,-50%) rotate(45deg);-o-transform:translate(-50%,-50%) rotate(45deg);transform:translate(-50%,-50%) rotate(45deg);-webkit-border-radius:.125rem;-moz-border-radius:.125rem;border-radius:.125rem}.confirm .icon_error::after{-webkit-transform:translate(-50%,-50%) rotate(-45deg);-moz-transform:translate(-50%,-50%) rotate(-45deg);-ms-transform:translate(-50%,-50%) rotate(-45deg);-o-transform:translate(-50%,-50%) rotate(-45deg);transform:translate(-50%,-50%) rotate(-45deg)}.confirm .icon_success{display:block;width:3.6rem;height:2rem;border-left:.125rem solid #000;border-bottom:.125rem solid #000;-webkit-transform:translate(2.25rem,.5rem) rotate(-45deg);-moz-transform:translate(2.25rem,.5rem) rotate(-45deg);-ms-transform:translate(2.25rem,.5rem) rotate(-45deg);-o-transform:translate(2.25rem,.5rem) rotate(-45deg);transform:translate(2.25rem,.5rem) rotate(-45deg)}.confirm .icon_warn{width:2.5rem;height:2.5rem;border:.125rem solid #000;-webkit-transform:translate(0,1.25rem);-moz-transform:translate(0,1.25rem);-ms-transform:translate(0,1.25rem);-o-transform:translate(0,1.25rem);transform:translate(0,1.25rem)}.confirm .icon_warn::before{width:.125rem;height:50%;top:.3125rem;margin-left:-.0625rem}.confirm .icon_warn::after{width:.25rem;height:.25rem;-webkit-border-radius:.125rem;-moz-border-radius:.125rem;border-radius:.125rem;top:72%;margin-left:-.125rem}.confirm .left .text{text-align:left}.confirm .right .text{text-align:right}";
			document.head.appendChild(t)
		}()
	},
	O: function(e, t, n, r) {
		var i = n("f");
		var s = n("L");
		var o = n("d");
		t.init = function(e, t) {
			var n;
			var r;
			var u = {
				actBtn: "",
				beforeFollow: function() {},
				afterFollow: function() {},
				beforeUnFollow: function() {},
				afterUnFollow: function() {},
				afterCheckFollow: function() {},
				followTrans: i.follow,
				followData: {},
				unfollowTrans: i.unfollow,
				unfollowData: {},
				unfollowClass: "icon_guanzhu",
				followClass: "icon_guanzhu_d",
				canUnfollow: true,
				followText: "取消关注",
				unfollowText: "关注",
				checkFollowTrans: i.isFavorite,
				checkFollowData: {},
				notLogin: null
			};
			var a;
			var f;
			var l;
			var c = {
				follow: function(e) {
					var i = l.one("follow_icon");
					var s = l.one("follow_text");
					if(!i.length) {
						i = $(u["actBtn"])
					}
					o({
						ljweb_bl: "btn",
						ljweb_el: i.hasClass(u["followClass"]) ? "0" : "1",
						rebuild: function(e) {
							e["ljweb_mod"] = e["ljweb_channel_key"] + "_detail_fav";
							if(e["ljweb_channel_key"] == "m_pages_xiaoquDetail") {
								e["ljweb_id"] = "10007"
							} else if(e["ljweb_channel_key"] == "m_pages_zufangDetail") {
								e["ljweb_id"] = "10778"
							} else {
								e["ljweb_id"] = "10006"
							}
						}
					}, t);
					if(!document.cookie.match(/lianjia_token=([^;]+)/)) {
						if(f) {
							if(a) {
								a.actionLogin(encodeURIComponent(location.href))
							}
						} else {
							if(u.notLogin) {
								u.notLogin()
							} else location.href = "/my/login?redirect=" + encodeURIComponent(location.href)
						}
						return false
					}
					if(r) return;
					if(i.hasClass(u["followClass"])) {
						if(u["canUnfollow"]) {
							var c = u.beforeUnFollow(f);
							if(c == "interrupt") return false;
							r = true;
							u["unfollowTrans"].request(u["unfollowData"], {
								success: function(e) {
									r = false;
									if(e.errno === 0) {
										i.removeClass(u["followClass"]);
										i.addClass(u["unfollowClass"]);
										s.html(u["unfollowText"]);
										u.afterUnFollow()
									} else if(e.errno == 20001) {
										if(f) {
											if(a) {
												a.actionLogin(encodeURIComponent(location.href))
											}
										} else {
											if(u.notLogin) {
												u.notLogin()
											} else location.href = "/my/login?redirect=" + encodeURIComponent(location.href)
										}
									} else {
										n.showError("取消关注失败")
									}
								},
								error: function() {
									r = false;
									n.showError("取消关注失败")
								}
							})
						}
					} else if(i.hasClass(u["unfollowClass"])) {
						var c = u.beforeFollow(f);
						if(c == "interrupt") return false;
						r = true;
						u["followTrans"].request(u["followData"], {
							success: function(e) {
								r = false;
								if(e.errno === 0) {
									i.removeClass(u["unfollowClass"]);
									i.addClass(u["followClass"]);
									s.html(u["followText"]);
									u.afterFollow()
								} else if(e.errno == 20001) {
									if(f) {
										if(a) {
											a.actionLogin(encodeURIComponent(location.href))
										}
									} else {
										if(u.notLogin) {
											u.notLogin()
										} else location.href = "/my/login?redirect=" + encodeURIComponent(location.href)
									}
								} else {
									n.showError("关注失败")
								}
							},
							error: function() {
								r = false;
								n.showError("关注失败")
							}
						})
					}
				}
			};
			var h = {
				checkIsFollow: function() {
					u["checkFollowTrans"].request(u["checkFollowData"], {
						success: function(e) {
							if(e.errno === 0 && e.data && (e.data[u["checkFollowData"]["id"]] || e.data.user_info.is_follow)) {
								var t = l.one("follow_icon");
								var n = l.one("follow_text");
								t.removeClass(u["unfollowClass"]);
								t.addClass(u["followClass"]);
								n.html(u["followText"]);
								u.afterCheckFollow(e)
							}
						},
						error: function() {}
					})
				}
			};
			var p = {
				init: function() {
					p.initParam();
					p.initEvent();
					$ljBridge.ready(function(e, t) {
						a = e;
						f = t.isLianjiaApp || t.isLinkApp;
						h.checkIsFollow()
					})
				},
				initParam: function() {
					$.extend(u, e);
					if(!u["actBtn"]) {
						throw "must have a node"
					}
					l = $(u["actBtn"]).getMark();
					n = s.init()
				},
				initEvent: function() {
					$(u["actBtn"]).on("tap", c.follow)
				}
			};
			p.init();
			return {
				destroy: function() {
					n.destroy();
					$(u["actBtn"]).off("tap", c.follow)
				}
			}
		}
	}
});