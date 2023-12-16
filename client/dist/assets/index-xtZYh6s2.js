function _d(e, t) {
	for (var n = 0; n < t.length; n++) {
		const r = t[n];
		if (typeof r != "string" && !Array.isArray(r)) {
			for (const i in r)
				if (i !== "default" && !(i in e)) {
					const o = Object.getOwnPropertyDescriptor(r, i);
					o && Object.defineProperty(e, i, o.get ? o : { enumerable: !0, get: () => r[i] });
				}
		}
	}
	return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
(function () {
	const t = document.createElement("link").relList;
	if (t && t.supports && t.supports("modulepreload")) return;
	for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
	new MutationObserver(i => {
		for (const o of i)
			if (o.type === "childList")
				for (const l of o.addedNodes) l.tagName === "LINK" && l.rel === "modulepreload" && r(l);
	}).observe(document, { childList: !0, subtree: !0 });
	function n(i) {
		const o = {};
		return (
			i.integrity && (o.integrity = i.integrity),
			i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
			i.crossOrigin === "use-credentials"
				? (o.credentials = "include")
				: i.crossOrigin === "anonymous"
				  ? (o.credentials = "omit")
				  : (o.credentials = "same-origin"),
			o
		);
	}
	function r(i) {
		if (i.ep) return;
		i.ep = !0;
		const o = n(i);
		fetch(i.href, o);
	}
})();
function jd(e) {
	return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Od = { exports: {} },
	tl = {},
	zd = { exports: {} },
	X = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ni = Symbol.for("react.element"),
	d2 = Symbol.for("react.portal"),
	f2 = Symbol.for("react.fragment"),
	p2 = Symbol.for("react.strict_mode"),
	h2 = Symbol.for("react.profiler"),
	m2 = Symbol.for("react.provider"),
	g2 = Symbol.for("react.context"),
	v2 = Symbol.for("react.forward_ref"),
	w2 = Symbol.for("react.suspense"),
	y2 = Symbol.for("react.memo"),
	x2 = Symbol.for("react.lazy"),
	Bu = Symbol.iterator;
function S2(e) {
	return e === null || typeof e != "object"
		? null
		: ((e = (Bu && e[Bu]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var Id = {
		isMounted: function () {
			return !1;
		},
		enqueueForceUpdate: function () {},
		enqueueReplaceState: function () {},
		enqueueSetState: function () {},
	},
	Dd = Object.assign,
	Ad = {};
function xr(e, t, n) {
	(this.props = e), (this.context = t), (this.refs = Ad), (this.updater = n || Id);
}
xr.prototype.isReactComponent = {};
xr.prototype.setState = function (e, t) {
	if (typeof e != "object" && typeof e != "function" && e != null)
		throw Error(
			"setState(...): takes an object of state variables to update or a function which returns an object of state variables."
		);
	this.updater.enqueueSetState(this, e, t, "setState");
};
xr.prototype.forceUpdate = function (e) {
	this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Fd() {}
Fd.prototype = xr.prototype;
function Ca(e, t, n) {
	(this.props = e), (this.context = t), (this.refs = Ad), (this.updater = n || Id);
}
var Ea = (Ca.prototype = new Fd());
Ea.constructor = Ca;
Dd(Ea, xr.prototype);
Ea.isPureReactComponent = !0;
var bu = Array.isArray,
	Bd = Object.prototype.hasOwnProperty,
	ka = { current: null },
	bd = { key: !0, ref: !0, __self: !0, __source: !0 };
function Vd(e, t, n) {
	var r,
		i = {},
		o = null,
		l = null;
	if (t != null)
		for (r in (t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (o = "" + t.key), t))
			Bd.call(t, r) && !bd.hasOwnProperty(r) && (i[r] = t[r]);
	var a = arguments.length - 2;
	if (a === 1) i.children = n;
	else if (1 < a) {
		for (var s = Array(a), u = 0; u < a; u++) s[u] = arguments[u + 2];
		i.children = s;
	}
	if (e && e.defaultProps) for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
	return { $$typeof: Ni, type: e, key: o, ref: l, props: i, _owner: ka.current };
}
function C2(e, t) {
	return { $$typeof: Ni, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Ta(e) {
	return typeof e == "object" && e !== null && e.$$typeof === Ni;
}
function E2(e) {
	var t = { "=": "=0", ":": "=2" };
	return (
		"$" +
		e.replace(/[=:]/g, function (n) {
			return t[n];
		})
	);
}
var Vu = /\/+/g;
function _l(e, t) {
	return typeof e == "object" && e !== null && e.key != null ? E2("" + e.key) : t.toString(36);
}
function so(e, t, n, r, i) {
	var o = typeof e;
	(o === "undefined" || o === "boolean") && (e = null);
	var l = !1;
	if (e === null) l = !0;
	else
		switch (o) {
			case "string":
			case "number":
				l = !0;
				break;
			case "object":
				switch (e.$$typeof) {
					case Ni:
					case d2:
						l = !0;
				}
		}
	if (l)
		return (
			(l = e),
			(i = i(l)),
			(e = r === "" ? "." + _l(l, 0) : r),
			bu(i)
				? ((n = ""),
				  e != null && (n = e.replace(Vu, "$&/") + "/"),
				  so(i, t, n, "", function (u) {
						return u;
				  }))
				: i != null &&
				  (Ta(i) &&
						(i = C2(
							i,
							n +
								(!i.key || (l && l.key === i.key) ? "" : ("" + i.key).replace(Vu, "$&/") + "/") +
								e
						)),
				  t.push(i)),
			1
		);
	if (((l = 0), (r = r === "" ? "." : r + ":"), bu(e)))
		for (var a = 0; a < e.length; a++) {
			o = e[a];
			var s = r + _l(o, a);
			l += so(o, t, n, s, i);
		}
	else if (((s = S2(e)), typeof s == "function"))
		for (e = s.call(e), a = 0; !(o = e.next()).done; )
			(o = o.value), (s = r + _l(o, a++)), (l += so(o, t, n, s, i));
	else if (o === "object")
		throw (
			((t = String(e)),
			Error(
				"Objects are not valid as a React child (found: " +
					(t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) +
					"). If you meant to render a collection of children, use an array instead."
			))
		);
	return l;
}
function Vi(e, t, n) {
	if (e == null) return e;
	var r = [],
		i = 0;
	return (
		so(e, r, "", "", function (o) {
			return t.call(n, o, i++);
		}),
		r
	);
}
function k2(e) {
	if (e._status === -1) {
		var t = e._result;
		(t = t()),
			t.then(
				function (n) {
					(e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = n));
				},
				function (n) {
					(e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = n));
				}
			),
			e._status === -1 && ((e._status = 0), (e._result = t));
	}
	if (e._status === 1) return e._result.default;
	throw e._result;
}
var be = { current: null },
	ao = { transition: null },
	T2 = { ReactCurrentDispatcher: be, ReactCurrentBatchConfig: ao, ReactCurrentOwner: ka };
X.Children = {
	map: Vi,
	forEach: function (e, t, n) {
		Vi(
			e,
			function () {
				t.apply(this, arguments);
			},
			n
		);
	},
	count: function (e) {
		var t = 0;
		return (
			Vi(e, function () {
				t++;
			}),
			t
		);
	},
	toArray: function (e) {
		return (
			Vi(e, function (t) {
				return t;
			}) || []
		);
	},
	only: function (e) {
		if (!Ta(e))
			throw Error("React.Children.only expected to receive a single React element child.");
		return e;
	},
};
X.Component = xr;
X.Fragment = f2;
X.Profiler = h2;
X.PureComponent = Ca;
X.StrictMode = p2;
X.Suspense = w2;
X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T2;
X.cloneElement = function (e, t, n) {
	if (e == null)
		throw Error(
			"React.cloneElement(...): The argument must be a React element, but you passed " + e + "."
		);
	var r = Dd({}, e.props),
		i = e.key,
		o = e.ref,
		l = e._owner;
	if (t != null) {
		if (
			(t.ref !== void 0 && ((o = t.ref), (l = ka.current)),
			t.key !== void 0 && (i = "" + t.key),
			e.type && e.type.defaultProps)
		)
			var a = e.type.defaultProps;
		for (s in t)
			Bd.call(t, s) &&
				!bd.hasOwnProperty(s) &&
				(r[s] = t[s] === void 0 && a !== void 0 ? a[s] : t[s]);
	}
	var s = arguments.length - 2;
	if (s === 1) r.children = n;
	else if (1 < s) {
		a = Array(s);
		for (var u = 0; u < s; u++) a[u] = arguments[u + 2];
		r.children = a;
	}
	return { $$typeof: Ni, type: e.type, key: i, ref: o, props: r, _owner: l };
};
X.createContext = function (e) {
	return (
		(e = {
			$$typeof: g2,
			_currentValue: e,
			_currentValue2: e,
			_threadCount: 0,
			Provider: null,
			Consumer: null,
			_defaultValue: null,
			_globalName: null,
		}),
		(e.Provider = { $$typeof: m2, _context: e }),
		(e.Consumer = e)
	);
};
X.createElement = Vd;
X.createFactory = function (e) {
	var t = Vd.bind(null, e);
	return (t.type = e), t;
};
X.createRef = function () {
	return { current: null };
};
X.forwardRef = function (e) {
	return { $$typeof: v2, render: e };
};
X.isValidElement = Ta;
X.lazy = function (e) {
	return { $$typeof: x2, _payload: { _status: -1, _result: e }, _init: k2 };
};
X.memo = function (e, t) {
	return { $$typeof: y2, type: e, compare: t === void 0 ? null : t };
};
X.startTransition = function (e) {
	var t = ao.transition;
	ao.transition = {};
	try {
		e();
	} finally {
		ao.transition = t;
	}
};
X.unstable_act = function () {
	throw Error("act(...) is not supported in production builds of React.");
};
X.useCallback = function (e, t) {
	return be.current.useCallback(e, t);
};
X.useContext = function (e) {
	return be.current.useContext(e);
};
X.useDebugValue = function () {};
X.useDeferredValue = function (e) {
	return be.current.useDeferredValue(e);
};
X.useEffect = function (e, t) {
	return be.current.useEffect(e, t);
};
X.useId = function () {
	return be.current.useId();
};
X.useImperativeHandle = function (e, t, n) {
	return be.current.useImperativeHandle(e, t, n);
};
X.useInsertionEffect = function (e, t) {
	return be.current.useInsertionEffect(e, t);
};
X.useLayoutEffect = function (e, t) {
	return be.current.useLayoutEffect(e, t);
};
X.useMemo = function (e, t) {
	return be.current.useMemo(e, t);
};
X.useReducer = function (e, t, n) {
	return be.current.useReducer(e, t, n);
};
X.useRef = function (e) {
	return be.current.useRef(e);
};
X.useState = function (e) {
	return be.current.useState(e);
};
X.useSyncExternalStore = function (e, t, n) {
	return be.current.useSyncExternalStore(e, t, n);
};
X.useTransition = function () {
	return be.current.useTransition();
};
X.version = "18.2.0";
zd.exports = X;
var P = zd.exports;
const we = jd(P),
	P2 = _d({ __proto__: null, default: we }, [P]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var L2 = P,
	M2 = Symbol.for("react.element"),
	N2 = Symbol.for("react.fragment"),
	R2 = Object.prototype.hasOwnProperty,
	_2 = L2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
	j2 = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ud(e, t, n) {
	var r,
		i = {},
		o = null,
		l = null;
	n !== void 0 && (o = "" + n),
		t.key !== void 0 && (o = "" + t.key),
		t.ref !== void 0 && (l = t.ref);
	for (r in t) R2.call(t, r) && !j2.hasOwnProperty(r) && (i[r] = t[r]);
	if (e && e.defaultProps) for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
	return { $$typeof: M2, type: e, key: o, ref: l, props: i, _owner: _2.current };
}
tl.Fragment = N2;
tl.jsx = Ud;
tl.jsxs = Ud;
Od.exports = tl;
var x = Od.exports,
	Hd = { exports: {} },
	et = {},
	$d = { exports: {} },
	Wd = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
	function t(I, A) {
		var U = I.length;
		I.push(A);
		e: for (; 0 < U; ) {
			var ne = (U - 1) >>> 1,
				te = I[ne];
			if (0 < i(te, A)) (I[ne] = A), (I[U] = te), (U = ne);
			else break e;
		}
	}
	function n(I) {
		return I.length === 0 ? null : I[0];
	}
	function r(I) {
		if (I.length === 0) return null;
		var A = I[0],
			U = I.pop();
		if (U !== A) {
			I[0] = U;
			e: for (var ne = 0, te = I.length, rt = te >>> 1; ne < rt; ) {
				var De = 2 * (ne + 1) - 1,
					xn = I[De],
					jt = De + 1,
					Vn = I[jt];
				if (0 > i(xn, U))
					jt < te && 0 > i(Vn, xn)
						? ((I[ne] = Vn), (I[jt] = U), (ne = jt))
						: ((I[ne] = xn), (I[De] = U), (ne = De));
				else if (jt < te && 0 > i(Vn, U)) (I[ne] = Vn), (I[jt] = U), (ne = jt);
				else break e;
			}
		}
		return A;
	}
	function i(I, A) {
		var U = I.sortIndex - A.sortIndex;
		return U !== 0 ? U : I.id - A.id;
	}
	if (typeof performance == "object" && typeof performance.now == "function") {
		var o = performance;
		e.unstable_now = function () {
			return o.now();
		};
	} else {
		var l = Date,
			a = l.now();
		e.unstable_now = function () {
			return l.now() - a;
		};
	}
	var s = [],
		u = [],
		c = 1,
		d = null,
		p = 3,
		y = !1,
		g = !1,
		w = !1,
		C = typeof setTimeout == "function" ? setTimeout : null,
		f = typeof clearTimeout == "function" ? clearTimeout : null,
		h = typeof setImmediate < "u" ? setImmediate : null;
	typeof navigator < "u" &&
		navigator.scheduling !== void 0 &&
		navigator.scheduling.isInputPending !== void 0 &&
		navigator.scheduling.isInputPending.bind(navigator.scheduling);
	function v(I) {
		for (var A = n(u); A !== null; ) {
			if (A.callback === null) r(u);
			else if (A.startTime <= I) r(u), (A.sortIndex = A.expirationTime), t(s, A);
			else break;
			A = n(u);
		}
	}
	function m(I) {
		if (((w = !1), v(I), !g))
			if (n(s) !== null) (g = !0), Ee(E);
			else {
				var A = n(u);
				A !== null && Ke(m, A.startTime - I);
			}
	}
	function E(I, A) {
		(g = !1), w && ((w = !1), f(_), (_ = -1)), (y = !0);
		var U = p;
		try {
			for (v(A), d = n(s); d !== null && (!(d.expirationTime > A) || (I && !z())); ) {
				var ne = d.callback;
				if (typeof ne == "function") {
					(d.callback = null), (p = d.priorityLevel);
					var te = ne(d.expirationTime <= A);
					(A = e.unstable_now()),
						typeof te == "function" ? (d.callback = te) : d === n(s) && r(s),
						v(A);
				} else r(s);
				d = n(s);
			}
			if (d !== null) var rt = !0;
			else {
				var De = n(u);
				De !== null && Ke(m, De.startTime - A), (rt = !1);
			}
			return rt;
		} finally {
			(d = null), (p = U), (y = !1);
		}
	}
	var L = !1,
		T = null,
		_ = -1,
		j = 5,
		N = -1;
	function z() {
		return !(e.unstable_now() - N < j);
	}
	function b() {
		if (T !== null) {
			var I = e.unstable_now();
			N = I;
			var A = !0;
			try {
				A = T(!0, I);
			} finally {
				A ? F() : ((L = !1), (T = null));
			}
		} else L = !1;
	}
	var F;
	if (typeof h == "function")
		F = function () {
			h(b);
		};
	else if (typeof MessageChannel < "u") {
		var ee = new MessageChannel(),
			G = ee.port2;
		(ee.port1.onmessage = b),
			(F = function () {
				G.postMessage(null);
			});
	} else
		F = function () {
			C(b, 0);
		};
	function Ee(I) {
		(T = I), L || ((L = !0), F());
	}
	function Ke(I, A) {
		_ = C(function () {
			I(e.unstable_now());
		}, A);
	}
	(e.unstable_IdlePriority = 5),
		(e.unstable_ImmediatePriority = 1),
		(e.unstable_LowPriority = 4),
		(e.unstable_NormalPriority = 3),
		(e.unstable_Profiling = null),
		(e.unstable_UserBlockingPriority = 2),
		(e.unstable_cancelCallback = function (I) {
			I.callback = null;
		}),
		(e.unstable_continueExecution = function () {
			g || y || ((g = !0), Ee(E));
		}),
		(e.unstable_forceFrameRate = function (I) {
			0 > I || 125 < I
				? console.error(
						"forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
				  )
				: (j = 0 < I ? Math.floor(1e3 / I) : 5);
		}),
		(e.unstable_getCurrentPriorityLevel = function () {
			return p;
		}),
		(e.unstable_getFirstCallbackNode = function () {
			return n(s);
		}),
		(e.unstable_next = function (I) {
			switch (p) {
				case 1:
				case 2:
				case 3:
					var A = 3;
					break;
				default:
					A = p;
			}
			var U = p;
			p = A;
			try {
				return I();
			} finally {
				p = U;
			}
		}),
		(e.unstable_pauseExecution = function () {}),
		(e.unstable_requestPaint = function () {}),
		(e.unstable_runWithPriority = function (I, A) {
			switch (I) {
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
					break;
				default:
					I = 3;
			}
			var U = p;
			p = I;
			try {
				return A();
			} finally {
				p = U;
			}
		}),
		(e.unstable_scheduleCallback = function (I, A, U) {
			var ne = e.unstable_now();
			switch (
				(typeof U == "object" && U !== null
					? ((U = U.delay), (U = typeof U == "number" && 0 < U ? ne + U : ne))
					: (U = ne),
				I)
			) {
				case 1:
					var te = -1;
					break;
				case 2:
					te = 250;
					break;
				case 5:
					te = 1073741823;
					break;
				case 4:
					te = 1e4;
					break;
				default:
					te = 5e3;
			}
			return (
				(te = U + te),
				(I = {
					id: c++,
					callback: A,
					priorityLevel: I,
					startTime: U,
					expirationTime: te,
					sortIndex: -1,
				}),
				U > ne
					? ((I.sortIndex = U),
					  t(u, I),
					  n(s) === null && I === n(u) && (w ? (f(_), (_ = -1)) : (w = !0), Ke(m, U - ne)))
					: ((I.sortIndex = te), t(s, I), g || y || ((g = !0), Ee(E))),
				I
			);
		}),
		(e.unstable_shouldYield = z),
		(e.unstable_wrapCallback = function (I) {
			var A = p;
			return function () {
				var U = p;
				p = A;
				try {
					return I.apply(this, arguments);
				} finally {
					p = U;
				}
			};
		});
})(Wd);
$d.exports = Wd;
var O2 = $d.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gd = P,
	Je = O2;
function O(e) {
	for (
		var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
		n < arguments.length;
		n++
	)
		t += "&args[]=" + encodeURIComponent(arguments[n]);
	return (
		"Minified React error #" +
		e +
		"; visit " +
		t +
		" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
	);
}
var Kd = new Set(),
	ai = {};
function Bn(e, t) {
	fr(e, t), fr(e + "Capture", t);
}
function fr(e, t) {
	for (ai[e] = t, e = 0; e < t.length; e++) Kd.add(t[e]);
}
var Ut = !(
		typeof window > "u" ||
		typeof window.document > "u" ||
		typeof window.document.createElement > "u"
	),
	gs = Object.prototype.hasOwnProperty,
	z2 =
		/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
	Uu = {},
	Hu = {};
function I2(e) {
	return gs.call(Hu, e) ? !0 : gs.call(Uu, e) ? !1 : z2.test(e) ? (Hu[e] = !0) : ((Uu[e] = !0), !1);
}
function D2(e, t, n, r) {
	if (n !== null && n.type === 0) return !1;
	switch (typeof t) {
		case "function":
		case "symbol":
			return !0;
		case "boolean":
			return r
				? !1
				: n !== null
				  ? !n.acceptsBooleans
				  : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
		default:
			return !1;
	}
}
function A2(e, t, n, r) {
	if (t === null || typeof t > "u" || D2(e, t, n, r)) return !0;
	if (r) return !1;
	if (n !== null)
		switch (n.type) {
			case 3:
				return !t;
			case 4:
				return t === !1;
			case 5:
				return isNaN(t);
			case 6:
				return isNaN(t) || 1 > t;
		}
	return !1;
}
function Ve(e, t, n, r, i, o, l) {
	(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
		(this.attributeName = r),
		(this.attributeNamespace = i),
		(this.mustUseProperty = n),
		(this.propertyName = e),
		(this.type = t),
		(this.sanitizeURL = o),
		(this.removeEmptyString = l);
}
var _e = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
	.split(" ")
	.forEach(function (e) {
		_e[e] = new Ve(e, 0, !1, e, null, !1, !1);
	});
[
	["acceptCharset", "accept-charset"],
	["className", "class"],
	["htmlFor", "for"],
	["httpEquiv", "http-equiv"],
].forEach(function (e) {
	var t = e[0];
	_e[t] = new Ve(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
	_e[e] = new Ve(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
	_e[e] = new Ve(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
	.split(" ")
	.forEach(function (e) {
		_e[e] = new Ve(e, 3, !1, e.toLowerCase(), null, !1, !1);
	});
["checked", "multiple", "muted", "selected"].forEach(function (e) {
	_e[e] = new Ve(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
	_e[e] = new Ve(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
	_e[e] = new Ve(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
	_e[e] = new Ve(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Pa = /[\-:]([a-z])/g;
function La(e) {
	return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
	.split(" ")
	.forEach(function (e) {
		var t = e.replace(Pa, La);
		_e[t] = new Ve(t, 1, !1, e, null, !1, !1);
	});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
	.split(" ")
	.forEach(function (e) {
		var t = e.replace(Pa, La);
		_e[t] = new Ve(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
	});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
	var t = e.replace(Pa, La);
	_e[t] = new Ve(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
	_e[e] = new Ve(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
_e.xlinkHref = new Ve("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) {
	_e[e] = new Ve(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ma(e, t, n, r) {
	var i = _e.hasOwnProperty(t) ? _e[t] : null;
	(i !== null
		? i.type !== 0
		: r || !(2 < t.length) || (t[0] !== "o" && t[0] !== "O") || (t[1] !== "n" && t[1] !== "N")) &&
		(A2(t, n, i, r) && (n = null),
		r || i === null
			? I2(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
			: i.mustUseProperty
			  ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
			  : ((t = i.attributeName),
			    (r = i.attributeNamespace),
			    n === null
						? e.removeAttribute(t)
						: ((i = i.type),
						  (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
						  r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Gt = Gd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
	Ui = Symbol.for("react.element"),
	Wn = Symbol.for("react.portal"),
	Gn = Symbol.for("react.fragment"),
	Na = Symbol.for("react.strict_mode"),
	vs = Symbol.for("react.profiler"),
	Qd = Symbol.for("react.provider"),
	Yd = Symbol.for("react.context"),
	Ra = Symbol.for("react.forward_ref"),
	ws = Symbol.for("react.suspense"),
	ys = Symbol.for("react.suspense_list"),
	_a = Symbol.for("react.memo"),
	Jt = Symbol.for("react.lazy"),
	Xd = Symbol.for("react.offscreen"),
	$u = Symbol.iterator;
function jr(e) {
	return e === null || typeof e != "object"
		? null
		: ((e = ($u && e[$u]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var pe = Object.assign,
	jl;
function Gr(e) {
	if (jl === void 0)
		try {
			throw Error();
		} catch (n) {
			var t = n.stack.trim().match(/\n( *(at )?)/);
			jl = (t && t[1]) || "";
		}
	return (
		`
` +
		jl +
		e
	);
}
var Ol = !1;
function zl(e, t) {
	if (!e || Ol) return "";
	Ol = !0;
	var n = Error.prepareStackTrace;
	Error.prepareStackTrace = void 0;
	try {
		if (t)
			if (
				((t = function () {
					throw Error();
				}),
				Object.defineProperty(t.prototype, "props", {
					set: function () {
						throw Error();
					},
				}),
				typeof Reflect == "object" && Reflect.construct)
			) {
				try {
					Reflect.construct(t, []);
				} catch (u) {
					var r = u;
				}
				Reflect.construct(e, [], t);
			} else {
				try {
					t.call();
				} catch (u) {
					r = u;
				}
				e.call(t.prototype);
			}
		else {
			try {
				throw Error();
			} catch (u) {
				r = u;
			}
			e();
		}
	} catch (u) {
		if (u && r && typeof u.stack == "string") {
			for (
				var i = u.stack.split(`
`),
					o = r.stack.split(`
`),
					l = i.length - 1,
					a = o.length - 1;
				1 <= l && 0 <= a && i[l] !== o[a];

			)
				a--;
			for (; 1 <= l && 0 <= a; l--, a--)
				if (i[l] !== o[a]) {
					if (l !== 1 || a !== 1)
						do
							if ((l--, a--, 0 > a || i[l] !== o[a])) {
								var s =
									`
` + i[l].replace(" at new ", " at ");
								return (
									e.displayName &&
										s.includes("<anonymous>") &&
										(s = s.replace("<anonymous>", e.displayName)),
									s
								);
							}
						while (1 <= l && 0 <= a);
					break;
				}
		}
	} finally {
		(Ol = !1), (Error.prepareStackTrace = n);
	}
	return (e = e ? e.displayName || e.name : "") ? Gr(e) : "";
}
function F2(e) {
	switch (e.tag) {
		case 5:
			return Gr(e.type);
		case 16:
			return Gr("Lazy");
		case 13:
			return Gr("Suspense");
		case 19:
			return Gr("SuspenseList");
		case 0:
		case 2:
		case 15:
			return (e = zl(e.type, !1)), e;
		case 11:
			return (e = zl(e.type.render, !1)), e;
		case 1:
			return (e = zl(e.type, !0)), e;
		default:
			return "";
	}
}
function xs(e) {
	if (e == null) return null;
	if (typeof e == "function") return e.displayName || e.name || null;
	if (typeof e == "string") return e;
	switch (e) {
		case Gn:
			return "Fragment";
		case Wn:
			return "Portal";
		case vs:
			return "Profiler";
		case Na:
			return "StrictMode";
		case ws:
			return "Suspense";
		case ys:
			return "SuspenseList";
	}
	if (typeof e == "object")
		switch (e.$$typeof) {
			case Yd:
				return (e.displayName || "Context") + ".Consumer";
			case Qd:
				return (e._context.displayName || "Context") + ".Provider";
			case Ra:
				var t = e.render;
				return (
					(e = e.displayName),
					e ||
						((e = t.displayName || t.name || ""),
						(e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
					e
				);
			case _a:
				return (t = e.displayName || null), t !== null ? t : xs(e.type) || "Memo";
			case Jt:
				(t = e._payload), (e = e._init);
				try {
					return xs(e(t));
				} catch {}
		}
	return null;
}
function B2(e) {
	var t = e.type;
	switch (e.tag) {
		case 24:
			return "Cache";
		case 9:
			return (t.displayName || "Context") + ".Consumer";
		case 10:
			return (t._context.displayName || "Context") + ".Provider";
		case 18:
			return "DehydratedFragment";
		case 11:
			return (
				(e = t.render),
				(e = e.displayName || e.name || ""),
				t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
			);
		case 7:
			return "Fragment";
		case 5:
			return t;
		case 4:
			return "Portal";
		case 3:
			return "Root";
		case 6:
			return "Text";
		case 16:
			return xs(t);
		case 8:
			return t === Na ? "StrictMode" : "Mode";
		case 22:
			return "Offscreen";
		case 12:
			return "Profiler";
		case 21:
			return "Scope";
		case 13:
			return "Suspense";
		case 19:
			return "SuspenseList";
		case 25:
			return "TracingMarker";
		case 1:
		case 0:
		case 17:
		case 2:
		case 14:
		case 15:
			if (typeof t == "function") return t.displayName || t.name || null;
			if (typeof t == "string") return t;
	}
	return null;
}
function mn(e) {
	switch (typeof e) {
		case "boolean":
		case "number":
		case "string":
		case "undefined":
			return e;
		case "object":
			return e;
		default:
			return "";
	}
}
function Zd(e) {
	var t = e.type;
	return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function b2(e) {
	var t = Zd(e) ? "checked" : "value",
		n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
		r = "" + e[t];
	if (
		!e.hasOwnProperty(t) &&
		typeof n < "u" &&
		typeof n.get == "function" &&
		typeof n.set == "function"
	) {
		var i = n.get,
			o = n.set;
		return (
			Object.defineProperty(e, t, {
				configurable: !0,
				get: function () {
					return i.call(this);
				},
				set: function (l) {
					(r = "" + l), o.call(this, l);
				},
			}),
			Object.defineProperty(e, t, { enumerable: n.enumerable }),
			{
				getValue: function () {
					return r;
				},
				setValue: function (l) {
					r = "" + l;
				},
				stopTracking: function () {
					(e._valueTracker = null), delete e[t];
				},
			}
		);
	}
}
function Hi(e) {
	e._valueTracker || (e._valueTracker = b2(e));
}
function qd(e) {
	if (!e) return !1;
	var t = e._valueTracker;
	if (!t) return !0;
	var n = t.getValue(),
		r = "";
	return (
		e && (r = Zd(e) ? (e.checked ? "true" : "false") : e.value),
		(e = r),
		e !== n ? (t.setValue(e), !0) : !1
	);
}
function ko(e) {
	if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")) return null;
	try {
		return e.activeElement || e.body;
	} catch {
		return e.body;
	}
}
function Ss(e, t) {
	var n = t.checked;
	return pe({}, t, {
		defaultChecked: void 0,
		defaultValue: void 0,
		value: void 0,
		checked: n ?? e._wrapperState.initialChecked,
	});
}
function Wu(e, t) {
	var n = t.defaultValue == null ? "" : t.defaultValue,
		r = t.checked != null ? t.checked : t.defaultChecked;
	(n = mn(t.value != null ? t.value : n)),
		(e._wrapperState = {
			initialChecked: r,
			initialValue: n,
			controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null,
		});
}
function Jd(e, t) {
	(t = t.checked), t != null && Ma(e, "checked", t, !1);
}
function Cs(e, t) {
	Jd(e, t);
	var n = mn(t.value),
		r = t.type;
	if (n != null)
		r === "number"
			? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
			: e.value !== "" + n && (e.value = "" + n);
	else if (r === "submit" || r === "reset") {
		e.removeAttribute("value");
		return;
	}
	t.hasOwnProperty("value")
		? Es(e, t.type, n)
		: t.hasOwnProperty("defaultValue") && Es(e, t.type, mn(t.defaultValue)),
		t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Gu(e, t, n) {
	if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
		var r = t.type;
		if (!((r !== "submit" && r !== "reset") || (t.value !== void 0 && t.value !== null))) return;
		(t = "" + e._wrapperState.initialValue),
			n || t === e.value || (e.value = t),
			(e.defaultValue = t);
	}
	(n = e.name),
		n !== "" && (e.name = ""),
		(e.defaultChecked = !!e._wrapperState.initialChecked),
		n !== "" && (e.name = n);
}
function Es(e, t, n) {
	(t !== "number" || ko(e.ownerDocument) !== e) &&
		(n == null
			? (e.defaultValue = "" + e._wrapperState.initialValue)
			: e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Kr = Array.isArray;
function ir(e, t, n, r) {
	if (((e = e.options), t)) {
		t = {};
		for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
		for (n = 0; n < e.length; n++)
			(i = t.hasOwnProperty("$" + e[n].value)),
				e[n].selected !== i && (e[n].selected = i),
				i && r && (e[n].defaultSelected = !0);
	} else {
		for (n = "" + mn(n), t = null, i = 0; i < e.length; i++) {
			if (e[i].value === n) {
				(e[i].selected = !0), r && (e[i].defaultSelected = !0);
				return;
			}
			t !== null || e[i].disabled || (t = e[i]);
		}
		t !== null && (t.selected = !0);
	}
}
function ks(e, t) {
	if (t.dangerouslySetInnerHTML != null) throw Error(O(91));
	return pe({}, t, {
		value: void 0,
		defaultValue: void 0,
		children: "" + e._wrapperState.initialValue,
	});
}
function Ku(e, t) {
	var n = t.value;
	if (n == null) {
		if (((n = t.children), (t = t.defaultValue), n != null)) {
			if (t != null) throw Error(O(92));
			if (Kr(n)) {
				if (1 < n.length) throw Error(O(93));
				n = n[0];
			}
			t = n;
		}
		t == null && (t = ""), (n = t);
	}
	e._wrapperState = { initialValue: mn(n) };
}
function ef(e, t) {
	var n = mn(t.value),
		r = mn(t.defaultValue);
	n != null &&
		((n = "" + n),
		n !== e.value && (e.value = n),
		t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
		r != null && (e.defaultValue = "" + r);
}
function Qu(e) {
	var t = e.textContent;
	t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function tf(e) {
	switch (e) {
		case "svg":
			return "http://www.w3.org/2000/svg";
		case "math":
			return "http://www.w3.org/1998/Math/MathML";
		default:
			return "http://www.w3.org/1999/xhtml";
	}
}
function Ts(e, t) {
	return e == null || e === "http://www.w3.org/1999/xhtml"
		? tf(t)
		: e === "http://www.w3.org/2000/svg" && t === "foreignObject"
		  ? "http://www.w3.org/1999/xhtml"
		  : e;
}
var $i,
	nf = (function (e) {
		return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
			? function (t, n, r, i) {
					MSApp.execUnsafeLocalFunction(function () {
						return e(t, n, r, i);
					});
			  }
			: e;
	})(function (e, t) {
		if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
		else {
			for (
				$i = $i || document.createElement("div"),
					$i.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
					t = $i.firstChild;
				e.firstChild;

			)
				e.removeChild(e.firstChild);
			for (; t.firstChild; ) e.appendChild(t.firstChild);
		}
	});
function ui(e, t) {
	if (t) {
		var n = e.firstChild;
		if (n && n === e.lastChild && n.nodeType === 3) {
			n.nodeValue = t;
			return;
		}
	}
	e.textContent = t;
}
var Xr = {
		animationIterationCount: !0,
		aspectRatio: !0,
		borderImageOutset: !0,
		borderImageSlice: !0,
		borderImageWidth: !0,
		boxFlex: !0,
		boxFlexGroup: !0,
		boxOrdinalGroup: !0,
		columnCount: !0,
		columns: !0,
		flex: !0,
		flexGrow: !0,
		flexPositive: !0,
		flexShrink: !0,
		flexNegative: !0,
		flexOrder: !0,
		gridArea: !0,
		gridRow: !0,
		gridRowEnd: !0,
		gridRowSpan: !0,
		gridRowStart: !0,
		gridColumn: !0,
		gridColumnEnd: !0,
		gridColumnSpan: !0,
		gridColumnStart: !0,
		fontWeight: !0,
		lineClamp: !0,
		lineHeight: !0,
		opacity: !0,
		order: !0,
		orphans: !0,
		tabSize: !0,
		widows: !0,
		zIndex: !0,
		zoom: !0,
		fillOpacity: !0,
		floodOpacity: !0,
		stopOpacity: !0,
		strokeDasharray: !0,
		strokeDashoffset: !0,
		strokeMiterlimit: !0,
		strokeOpacity: !0,
		strokeWidth: !0,
	},
	V2 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Xr).forEach(function (e) {
	V2.forEach(function (t) {
		(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Xr[t] = Xr[e]);
	});
});
function rf(e, t, n) {
	return t == null || typeof t == "boolean" || t === ""
		? ""
		: n || typeof t != "number" || t === 0 || (Xr.hasOwnProperty(e) && Xr[e])
		  ? ("" + t).trim()
		  : t + "px";
}
function of(e, t) {
	e = e.style;
	for (var n in t)
		if (t.hasOwnProperty(n)) {
			var r = n.indexOf("--") === 0,
				i = rf(n, t[n], r);
			n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
		}
}
var U2 = pe(
	{ menuitem: !0 },
	{
		area: !0,
		base: !0,
		br: !0,
		col: !0,
		embed: !0,
		hr: !0,
		img: !0,
		input: !0,
		keygen: !0,
		link: !0,
		meta: !0,
		param: !0,
		source: !0,
		track: !0,
		wbr: !0,
	}
);
function Ps(e, t) {
	if (t) {
		if (U2[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(O(137, e));
		if (t.dangerouslySetInnerHTML != null) {
			if (t.children != null) throw Error(O(60));
			if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
				throw Error(O(61));
		}
		if (t.style != null && typeof t.style != "object") throw Error(O(62));
	}
}
function Ls(e, t) {
	if (e.indexOf("-") === -1) return typeof t.is == "string";
	switch (e) {
		case "annotation-xml":
		case "color-profile":
		case "font-face":
		case "font-face-src":
		case "font-face-uri":
		case "font-face-format":
		case "font-face-name":
		case "missing-glyph":
			return !1;
		default:
			return !0;
	}
}
var Ms = null;
function ja(e) {
	return (
		(e = e.target || e.srcElement || window),
		e.correspondingUseElement && (e = e.correspondingUseElement),
		e.nodeType === 3 ? e.parentNode : e
	);
}
var Ns = null,
	or = null,
	lr = null;
function Yu(e) {
	if ((e = ji(e))) {
		if (typeof Ns != "function") throw Error(O(280));
		var t = e.stateNode;
		t && ((t = ll(t)), Ns(e.stateNode, e.type, t));
	}
}
function lf(e) {
	or ? (lr ? lr.push(e) : (lr = [e])) : (or = e);
}
function sf() {
	if (or) {
		var e = or,
			t = lr;
		if (((lr = or = null), Yu(e), t)) for (e = 0; e < t.length; e++) Yu(t[e]);
	}
}
function af(e, t) {
	return e(t);
}
function uf() {}
var Il = !1;
function cf(e, t, n) {
	if (Il) return e(t, n);
	Il = !0;
	try {
		return af(e, t, n);
	} finally {
		(Il = !1), (or !== null || lr !== null) && (uf(), sf());
	}
}
function ci(e, t) {
	var n = e.stateNode;
	if (n === null) return null;
	var r = ll(n);
	if (r === null) return null;
	n = r[t];
	e: switch (t) {
		case "onClick":
		case "onClickCapture":
		case "onDoubleClick":
		case "onDoubleClickCapture":
		case "onMouseDown":
		case "onMouseDownCapture":
		case "onMouseMove":
		case "onMouseMoveCapture":
		case "onMouseUp":
		case "onMouseUpCapture":
		case "onMouseEnter":
			(r = !r.disabled) ||
				((e = e.type),
				(r = !(e === "button" || e === "input" || e === "select" || e === "textarea"))),
				(e = !r);
			break e;
		default:
			e = !1;
	}
	if (e) return null;
	if (n && typeof n != "function") throw Error(O(231, t, typeof n));
	return n;
}
var Rs = !1;
if (Ut)
	try {
		var Or = {};
		Object.defineProperty(Or, "passive", {
			get: function () {
				Rs = !0;
			},
		}),
			window.addEventListener("test", Or, Or),
			window.removeEventListener("test", Or, Or);
	} catch {
		Rs = !1;
	}
function H2(e, t, n, r, i, o, l, a, s) {
	var u = Array.prototype.slice.call(arguments, 3);
	try {
		t.apply(n, u);
	} catch (c) {
		this.onError(c);
	}
}
var Zr = !1,
	To = null,
	Po = !1,
	_s = null,
	$2 = {
		onError: function (e) {
			(Zr = !0), (To = e);
		},
	};
function W2(e, t, n, r, i, o, l, a, s) {
	(Zr = !1), (To = null), H2.apply($2, arguments);
}
function G2(e, t, n, r, i, o, l, a, s) {
	if ((W2.apply(this, arguments), Zr)) {
		if (Zr) {
			var u = To;
			(Zr = !1), (To = null);
		} else throw Error(O(198));
		Po || ((Po = !0), (_s = u));
	}
}
function bn(e) {
	var t = e,
		n = e;
	if (e.alternate) for (; t.return; ) t = t.return;
	else {
		e = t;
		do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
		while (e);
	}
	return t.tag === 3 ? n : null;
}
function df(e) {
	if (e.tag === 13) {
		var t = e.memoizedState;
		if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
			return t.dehydrated;
	}
	return null;
}
function Xu(e) {
	if (bn(e) !== e) throw Error(O(188));
}
function K2(e) {
	var t = e.alternate;
	if (!t) {
		if (((t = bn(e)), t === null)) throw Error(O(188));
		return t !== e ? null : e;
	}
	for (var n = e, r = t; ; ) {
		var i = n.return;
		if (i === null) break;
		var o = i.alternate;
		if (o === null) {
			if (((r = i.return), r !== null)) {
				n = r;
				continue;
			}
			break;
		}
		if (i.child === o.child) {
			for (o = i.child; o; ) {
				if (o === n) return Xu(i), e;
				if (o === r) return Xu(i), t;
				o = o.sibling;
			}
			throw Error(O(188));
		}
		if (n.return !== r.return) (n = i), (r = o);
		else {
			for (var l = !1, a = i.child; a; ) {
				if (a === n) {
					(l = !0), (n = i), (r = o);
					break;
				}
				if (a === r) {
					(l = !0), (r = i), (n = o);
					break;
				}
				a = a.sibling;
			}
			if (!l) {
				for (a = o.child; a; ) {
					if (a === n) {
						(l = !0), (n = o), (r = i);
						break;
					}
					if (a === r) {
						(l = !0), (r = o), (n = i);
						break;
					}
					a = a.sibling;
				}
				if (!l) throw Error(O(189));
			}
		}
		if (n.alternate !== r) throw Error(O(190));
	}
	if (n.tag !== 3) throw Error(O(188));
	return n.stateNode.current === n ? e : t;
}
function ff(e) {
	return (e = K2(e)), e !== null ? pf(e) : null;
}
function pf(e) {
	if (e.tag === 5 || e.tag === 6) return e;
	for (e = e.child; e !== null; ) {
		var t = pf(e);
		if (t !== null) return t;
		e = e.sibling;
	}
	return null;
}
var hf = Je.unstable_scheduleCallback,
	Zu = Je.unstable_cancelCallback,
	Q2 = Je.unstable_shouldYield,
	Y2 = Je.unstable_requestPaint,
	ye = Je.unstable_now,
	X2 = Je.unstable_getCurrentPriorityLevel,
	Oa = Je.unstable_ImmediatePriority,
	mf = Je.unstable_UserBlockingPriority,
	Lo = Je.unstable_NormalPriority,
	Z2 = Je.unstable_LowPriority,
	gf = Je.unstable_IdlePriority,
	nl = null,
	Mt = null;
function q2(e) {
	if (Mt && typeof Mt.onCommitFiberRoot == "function")
		try {
			Mt.onCommitFiberRoot(nl, e, void 0, (e.current.flags & 128) === 128);
		} catch {}
}
var xt = Math.clz32 ? Math.clz32 : th,
	J2 = Math.log,
	eh = Math.LN2;
function th(e) {
	return (e >>>= 0), e === 0 ? 32 : (31 - ((J2(e) / eh) | 0)) | 0;
}
var Wi = 64,
	Gi = 4194304;
function Qr(e) {
	switch (e & -e) {
		case 1:
			return 1;
		case 2:
			return 2;
		case 4:
			return 4;
		case 8:
			return 8;
		case 16:
			return 16;
		case 32:
			return 32;
		case 64:
		case 128:
		case 256:
		case 512:
		case 1024:
		case 2048:
		case 4096:
		case 8192:
		case 16384:
		case 32768:
		case 65536:
		case 131072:
		case 262144:
		case 524288:
		case 1048576:
		case 2097152:
			return e & 4194240;
		case 4194304:
		case 8388608:
		case 16777216:
		case 33554432:
		case 67108864:
			return e & 130023424;
		case 134217728:
			return 134217728;
		case 268435456:
			return 268435456;
		case 536870912:
			return 536870912;
		case 1073741824:
			return 1073741824;
		default:
			return e;
	}
}
function Mo(e, t) {
	var n = e.pendingLanes;
	if (n === 0) return 0;
	var r = 0,
		i = e.suspendedLanes,
		o = e.pingedLanes,
		l = n & 268435455;
	if (l !== 0) {
		var a = l & ~i;
		a !== 0 ? (r = Qr(a)) : ((o &= l), o !== 0 && (r = Qr(o)));
	} else (l = n & ~i), l !== 0 ? (r = Qr(l)) : o !== 0 && (r = Qr(o));
	if (r === 0) return 0;
	if (
		t !== 0 &&
		t !== r &&
		!(t & i) &&
		((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
	)
		return t;
	if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
		for (e = e.entanglements, t &= r; 0 < t; )
			(n = 31 - xt(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
	return r;
}
function nh(e, t) {
	switch (e) {
		case 1:
		case 2:
		case 4:
			return t + 250;
		case 8:
		case 16:
		case 32:
		case 64:
		case 128:
		case 256:
		case 512:
		case 1024:
		case 2048:
		case 4096:
		case 8192:
		case 16384:
		case 32768:
		case 65536:
		case 131072:
		case 262144:
		case 524288:
		case 1048576:
		case 2097152:
			return t + 5e3;
		case 4194304:
		case 8388608:
		case 16777216:
		case 33554432:
		case 67108864:
			return -1;
		case 134217728:
		case 268435456:
		case 536870912:
		case 1073741824:
			return -1;
		default:
			return -1;
	}
}
function rh(e, t) {
	for (
		var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes;
		0 < o;

	) {
		var l = 31 - xt(o),
			a = 1 << l,
			s = i[l];
		s === -1 ? (!(a & n) || a & r) && (i[l] = nh(a, t)) : s <= t && (e.expiredLanes |= a),
			(o &= ~a);
	}
}
function js(e) {
	return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function vf() {
	var e = Wi;
	return (Wi <<= 1), !(Wi & 4194240) && (Wi = 64), e;
}
function Dl(e) {
	for (var t = [], n = 0; 31 > n; n++) t.push(e);
	return t;
}
function Ri(e, t, n) {
	(e.pendingLanes |= t),
		t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
		(e = e.eventTimes),
		(t = 31 - xt(t)),
		(e[t] = n);
}
function ih(e, t) {
	var n = e.pendingLanes & ~t;
	(e.pendingLanes = t),
		(e.suspendedLanes = 0),
		(e.pingedLanes = 0),
		(e.expiredLanes &= t),
		(e.mutableReadLanes &= t),
		(e.entangledLanes &= t),
		(t = e.entanglements);
	var r = e.eventTimes;
	for (e = e.expirationTimes; 0 < n; ) {
		var i = 31 - xt(n),
			o = 1 << i;
		(t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
	}
}
function za(e, t) {
	var n = (e.entangledLanes |= t);
	for (e = e.entanglements; n; ) {
		var r = 31 - xt(n),
			i = 1 << r;
		(i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
	}
}
var re = 0;
function wf(e) {
	return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var yf,
	Ia,
	xf,
	Sf,
	Cf,
	Os = !1,
	Ki = [],
	sn = null,
	an = null,
	un = null,
	di = new Map(),
	fi = new Map(),
	tn = [],
	oh =
		"mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
			" "
		);
function qu(e, t) {
	switch (e) {
		case "focusin":
		case "focusout":
			sn = null;
			break;
		case "dragenter":
		case "dragleave":
			an = null;
			break;
		case "mouseover":
		case "mouseout":
			un = null;
			break;
		case "pointerover":
		case "pointerout":
			di.delete(t.pointerId);
			break;
		case "gotpointercapture":
		case "lostpointercapture":
			fi.delete(t.pointerId);
	}
}
function zr(e, t, n, r, i, o) {
	return e === null || e.nativeEvent !== o
		? ((e = {
				blockedOn: t,
				domEventName: n,
				eventSystemFlags: r,
				nativeEvent: o,
				targetContainers: [i],
		  }),
		  t !== null && ((t = ji(t)), t !== null && Ia(t)),
		  e)
		: ((e.eventSystemFlags |= r),
		  (t = e.targetContainers),
		  i !== null && t.indexOf(i) === -1 && t.push(i),
		  e);
}
function lh(e, t, n, r, i) {
	switch (t) {
		case "focusin":
			return (sn = zr(sn, e, t, n, r, i)), !0;
		case "dragenter":
			return (an = zr(an, e, t, n, r, i)), !0;
		case "mouseover":
			return (un = zr(un, e, t, n, r, i)), !0;
		case "pointerover":
			var o = i.pointerId;
			return di.set(o, zr(di.get(o) || null, e, t, n, r, i)), !0;
		case "gotpointercapture":
			return (o = i.pointerId), fi.set(o, zr(fi.get(o) || null, e, t, n, r, i)), !0;
	}
	return !1;
}
function Ef(e) {
	var t = Tn(e.target);
	if (t !== null) {
		var n = bn(t);
		if (n !== null) {
			if (((t = n.tag), t === 13)) {
				if (((t = df(n)), t !== null)) {
					(e.blockedOn = t),
						Cf(e.priority, function () {
							xf(n);
						});
					return;
				}
			} else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
				e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
				return;
			}
		}
	}
	e.blockedOn = null;
}
function uo(e) {
	if (e.blockedOn !== null) return !1;
	for (var t = e.targetContainers; 0 < t.length; ) {
		var n = zs(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
		if (n === null) {
			n = e.nativeEvent;
			var r = new n.constructor(n.type, n);
			(Ms = r), n.target.dispatchEvent(r), (Ms = null);
		} else return (t = ji(n)), t !== null && Ia(t), (e.blockedOn = n), !1;
		t.shift();
	}
	return !0;
}
function Ju(e, t, n) {
	uo(e) && n.delete(t);
}
function sh() {
	(Os = !1),
		sn !== null && uo(sn) && (sn = null),
		an !== null && uo(an) && (an = null),
		un !== null && uo(un) && (un = null),
		di.forEach(Ju),
		fi.forEach(Ju);
}
function Ir(e, t) {
	e.blockedOn === t &&
		((e.blockedOn = null),
		Os || ((Os = !0), Je.unstable_scheduleCallback(Je.unstable_NormalPriority, sh)));
}
function pi(e) {
	function t(i) {
		return Ir(i, e);
	}
	if (0 < Ki.length) {
		Ir(Ki[0], e);
		for (var n = 1; n < Ki.length; n++) {
			var r = Ki[n];
			r.blockedOn === e && (r.blockedOn = null);
		}
	}
	for (
		sn !== null && Ir(sn, e),
			an !== null && Ir(an, e),
			un !== null && Ir(un, e),
			di.forEach(t),
			fi.forEach(t),
			n = 0;
		n < tn.length;
		n++
	)
		(r = tn[n]), r.blockedOn === e && (r.blockedOn = null);
	for (; 0 < tn.length && ((n = tn[0]), n.blockedOn === null); )
		Ef(n), n.blockedOn === null && tn.shift();
}
var sr = Gt.ReactCurrentBatchConfig,
	No = !0;
function ah(e, t, n, r) {
	var i = re,
		o = sr.transition;
	sr.transition = null;
	try {
		(re = 1), Da(e, t, n, r);
	} finally {
		(re = i), (sr.transition = o);
	}
}
function uh(e, t, n, r) {
	var i = re,
		o = sr.transition;
	sr.transition = null;
	try {
		(re = 4), Da(e, t, n, r);
	} finally {
		(re = i), (sr.transition = o);
	}
}
function Da(e, t, n, r) {
	if (No) {
		var i = zs(e, t, n, r);
		if (i === null) Gl(e, t, r, Ro, n), qu(e, r);
		else if (lh(i, e, t, n, r)) r.stopPropagation();
		else if ((qu(e, r), t & 4 && -1 < oh.indexOf(e))) {
			for (; i !== null; ) {
				var o = ji(i);
				if ((o !== null && yf(o), (o = zs(e, t, n, r)), o === null && Gl(e, t, r, Ro, n), o === i))
					break;
				i = o;
			}
			i !== null && r.stopPropagation();
		} else Gl(e, t, r, null, n);
	}
}
var Ro = null;
function zs(e, t, n, r) {
	if (((Ro = null), (e = ja(r)), (e = Tn(e)), e !== null))
		if (((t = bn(e)), t === null)) e = null;
		else if (((n = t.tag), n === 13)) {
			if (((e = df(t)), e !== null)) return e;
			e = null;
		} else if (n === 3) {
			if (t.stateNode.current.memoizedState.isDehydrated)
				return t.tag === 3 ? t.stateNode.containerInfo : null;
			e = null;
		} else t !== e && (e = null);
	return (Ro = e), null;
}
function kf(e) {
	switch (e) {
		case "cancel":
		case "click":
		case "close":
		case "contextmenu":
		case "copy":
		case "cut":
		case "auxclick":
		case "dblclick":
		case "dragend":
		case "dragstart":
		case "drop":
		case "focusin":
		case "focusout":
		case "input":
		case "invalid":
		case "keydown":
		case "keypress":
		case "keyup":
		case "mousedown":
		case "mouseup":
		case "paste":
		case "pause":
		case "play":
		case "pointercancel":
		case "pointerdown":
		case "pointerup":
		case "ratechange":
		case "reset":
		case "resize":
		case "seeked":
		case "submit":
		case "touchcancel":
		case "touchend":
		case "touchstart":
		case "volumechange":
		case "change":
		case "selectionchange":
		case "textInput":
		case "compositionstart":
		case "compositionend":
		case "compositionupdate":
		case "beforeblur":
		case "afterblur":
		case "beforeinput":
		case "blur":
		case "fullscreenchange":
		case "focus":
		case "hashchange":
		case "popstate":
		case "select":
		case "selectstart":
			return 1;
		case "drag":
		case "dragenter":
		case "dragexit":
		case "dragleave":
		case "dragover":
		case "mousemove":
		case "mouseout":
		case "mouseover":
		case "pointermove":
		case "pointerout":
		case "pointerover":
		case "scroll":
		case "toggle":
		case "touchmove":
		case "wheel":
		case "mouseenter":
		case "mouseleave":
		case "pointerenter":
		case "pointerleave":
			return 4;
		case "message":
			switch (X2()) {
				case Oa:
					return 1;
				case mf:
					return 4;
				case Lo:
				case Z2:
					return 16;
				case gf:
					return 536870912;
				default:
					return 16;
			}
		default:
			return 16;
	}
}
var rn = null,
	Aa = null,
	co = null;
function Tf() {
	if (co) return co;
	var e,
		t = Aa,
		n = t.length,
		r,
		i = "value" in rn ? rn.value : rn.textContent,
		o = i.length;
	for (e = 0; e < n && t[e] === i[e]; e++);
	var l = n - e;
	for (r = 1; r <= l && t[n - r] === i[o - r]; r++);
	return (co = i.slice(e, 1 < r ? 1 - r : void 0));
}
function fo(e) {
	var t = e.keyCode;
	return (
		"charCode" in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
		e === 10 && (e = 13),
		32 <= e || e === 13 ? e : 0
	);
}
function Qi() {
	return !0;
}
function ec() {
	return !1;
}
function tt(e) {
	function t(n, r, i, o, l) {
		(this._reactName = n),
			(this._targetInst = i),
			(this.type = r),
			(this.nativeEvent = o),
			(this.target = l),
			(this.currentTarget = null);
		for (var a in e) e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]));
		return (
			(this.isDefaultPrevented = (
				o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
			)
				? Qi
				: ec),
			(this.isPropagationStopped = ec),
			this
		);
	}
	return (
		pe(t.prototype, {
			preventDefault: function () {
				this.defaultPrevented = !0;
				var n = this.nativeEvent;
				n &&
					(n.preventDefault
						? n.preventDefault()
						: typeof n.returnValue != "unknown" && (n.returnValue = !1),
					(this.isDefaultPrevented = Qi));
			},
			stopPropagation: function () {
				var n = this.nativeEvent;
				n &&
					(n.stopPropagation
						? n.stopPropagation()
						: typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
					(this.isPropagationStopped = Qi));
			},
			persist: function () {},
			isPersistent: Qi,
		}),
		t
	);
}
var Sr = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function (e) {
			return e.timeStamp || Date.now();
		},
		defaultPrevented: 0,
		isTrusted: 0,
	},
	Fa = tt(Sr),
	_i = pe({}, Sr, { view: 0, detail: 0 }),
	ch = tt(_i),
	Al,
	Fl,
	Dr,
	rl = pe({}, _i, {
		screenX: 0,
		screenY: 0,
		clientX: 0,
		clientY: 0,
		pageX: 0,
		pageY: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		getModifierState: Ba,
		button: 0,
		buttons: 0,
		relatedTarget: function (e) {
			return e.relatedTarget === void 0
				? e.fromElement === e.srcElement
					? e.toElement
					: e.fromElement
				: e.relatedTarget;
		},
		movementX: function (e) {
			return "movementX" in e
				? e.movementX
				: (e !== Dr &&
						(Dr && e.type === "mousemove"
							? ((Al = e.screenX - Dr.screenX), (Fl = e.screenY - Dr.screenY))
							: (Fl = Al = 0),
						(Dr = e)),
				  Al);
		},
		movementY: function (e) {
			return "movementY" in e ? e.movementY : Fl;
		},
	}),
	tc = tt(rl),
	dh = pe({}, rl, { dataTransfer: 0 }),
	fh = tt(dh),
	ph = pe({}, _i, { relatedTarget: 0 }),
	Bl = tt(ph),
	hh = pe({}, Sr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
	mh = tt(hh),
	gh = pe({}, Sr, {
		clipboardData: function (e) {
			return "clipboardData" in e ? e.clipboardData : window.clipboardData;
		},
	}),
	vh = tt(gh),
	wh = pe({}, Sr, { data: 0 }),
	nc = tt(wh),
	yh = {
		Esc: "Escape",
		Spacebar: " ",
		Left: "ArrowLeft",
		Up: "ArrowUp",
		Right: "ArrowRight",
		Down: "ArrowDown",
		Del: "Delete",
		Win: "OS",
		Menu: "ContextMenu",
		Apps: "ContextMenu",
		Scroll: "ScrollLock",
		MozPrintableKey: "Unidentified",
	},
	xh = {
		8: "Backspace",
		9: "Tab",
		12: "Clear",
		13: "Enter",
		16: "Shift",
		17: "Control",
		18: "Alt",
		19: "Pause",
		20: "CapsLock",
		27: "Escape",
		32: " ",
		33: "PageUp",
		34: "PageDown",
		35: "End",
		36: "Home",
		37: "ArrowLeft",
		38: "ArrowUp",
		39: "ArrowRight",
		40: "ArrowDown",
		45: "Insert",
		46: "Delete",
		112: "F1",
		113: "F2",
		114: "F3",
		115: "F4",
		116: "F5",
		117: "F6",
		118: "F7",
		119: "F8",
		120: "F9",
		121: "F10",
		122: "F11",
		123: "F12",
		144: "NumLock",
		145: "ScrollLock",
		224: "Meta",
	},
	Sh = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Ch(e) {
	var t = this.nativeEvent;
	return t.getModifierState ? t.getModifierState(e) : (e = Sh[e]) ? !!t[e] : !1;
}
function Ba() {
	return Ch;
}
var Eh = pe({}, _i, {
		key: function (e) {
			if (e.key) {
				var t = yh[e.key] || e.key;
				if (t !== "Unidentified") return t;
			}
			return e.type === "keypress"
				? ((e = fo(e)), e === 13 ? "Enter" : String.fromCharCode(e))
				: e.type === "keydown" || e.type === "keyup"
				  ? xh[e.keyCode] || "Unidentified"
				  : "";
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: Ba,
		charCode: function (e) {
			return e.type === "keypress" ? fo(e) : 0;
		},
		keyCode: function (e) {
			return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		},
		which: function (e) {
			return e.type === "keypress"
				? fo(e)
				: e.type === "keydown" || e.type === "keyup"
				  ? e.keyCode
				  : 0;
		},
	}),
	kh = tt(Eh),
	Th = pe({}, rl, {
		pointerId: 0,
		width: 0,
		height: 0,
		pressure: 0,
		tangentialPressure: 0,
		tiltX: 0,
		tiltY: 0,
		twist: 0,
		pointerType: 0,
		isPrimary: 0,
	}),
	rc = tt(Th),
	Ph = pe({}, _i, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: Ba,
	}),
	Lh = tt(Ph),
	Mh = pe({}, Sr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
	Nh = tt(Mh),
	Rh = pe({}, rl, {
		deltaX: function (e) {
			return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
		},
		deltaY: function (e) {
			return "deltaY" in e
				? e.deltaY
				: "wheelDeltaY" in e
				  ? -e.wheelDeltaY
				  : "wheelDelta" in e
				    ? -e.wheelDelta
				    : 0;
		},
		deltaZ: 0,
		deltaMode: 0,
	}),
	_h = tt(Rh),
	jh = [9, 13, 27, 32],
	ba = Ut && "CompositionEvent" in window,
	qr = null;
Ut && "documentMode" in document && (qr = document.documentMode);
var Oh = Ut && "TextEvent" in window && !qr,
	Pf = Ut && (!ba || (qr && 8 < qr && 11 >= qr)),
	ic = " ",
	oc = !1;
function Lf(e, t) {
	switch (e) {
		case "keyup":
			return jh.indexOf(t.keyCode) !== -1;
		case "keydown":
			return t.keyCode !== 229;
		case "keypress":
		case "mousedown":
		case "focusout":
			return !0;
		default:
			return !1;
	}
}
function Mf(e) {
	return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Kn = !1;
function zh(e, t) {
	switch (e) {
		case "compositionend":
			return Mf(t);
		case "keypress":
			return t.which !== 32 ? null : ((oc = !0), ic);
		case "textInput":
			return (e = t.data), e === ic && oc ? null : e;
		default:
			return null;
	}
}
function Ih(e, t) {
	if (Kn)
		return e === "compositionend" || (!ba && Lf(e, t))
			? ((e = Tf()), (co = Aa = rn = null), (Kn = !1), e)
			: null;
	switch (e) {
		case "paste":
			return null;
		case "keypress":
			if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
				if (t.char && 1 < t.char.length) return t.char;
				if (t.which) return String.fromCharCode(t.which);
			}
			return null;
		case "compositionend":
			return Pf && t.locale !== "ko" ? null : t.data;
		default:
			return null;
	}
}
var Dh = {
	color: !0,
	date: !0,
	datetime: !0,
	"datetime-local": !0,
	email: !0,
	month: !0,
	number: !0,
	password: !0,
	range: !0,
	search: !0,
	tel: !0,
	text: !0,
	time: !0,
	url: !0,
	week: !0,
};
function lc(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase();
	return t === "input" ? !!Dh[e.type] : t === "textarea";
}
function Nf(e, t, n, r) {
	lf(r),
		(t = _o(t, "onChange")),
		0 < t.length &&
			((n = new Fa("onChange", "change", null, n, r)), e.push({ event: n, listeners: t }));
}
var Jr = null,
	hi = null;
function Ah(e) {
	bf(e, 0);
}
function il(e) {
	var t = Xn(e);
	if (qd(t)) return e;
}
function Fh(e, t) {
	if (e === "change") return t;
}
var Rf = !1;
if (Ut) {
	var bl;
	if (Ut) {
		var Vl = "oninput" in document;
		if (!Vl) {
			var sc = document.createElement("div");
			sc.setAttribute("oninput", "return;"), (Vl = typeof sc.oninput == "function");
		}
		bl = Vl;
	} else bl = !1;
	Rf = bl && (!document.documentMode || 9 < document.documentMode);
}
function ac() {
	Jr && (Jr.detachEvent("onpropertychange", _f), (hi = Jr = null));
}
function _f(e) {
	if (e.propertyName === "value" && il(hi)) {
		var t = [];
		Nf(t, hi, e, ja(e)), cf(Ah, t);
	}
}
function Bh(e, t, n) {
	e === "focusin"
		? (ac(), (Jr = t), (hi = n), Jr.attachEvent("onpropertychange", _f))
		: e === "focusout" && ac();
}
function bh(e) {
	if (e === "selectionchange" || e === "keyup" || e === "keydown") return il(hi);
}
function Vh(e, t) {
	if (e === "click") return il(t);
}
function Uh(e, t) {
	if (e === "input" || e === "change") return il(t);
}
function Hh(e, t) {
	return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ct = typeof Object.is == "function" ? Object.is : Hh;
function mi(e, t) {
	if (Ct(e, t)) return !0;
	if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
	var n = Object.keys(e),
		r = Object.keys(t);
	if (n.length !== r.length) return !1;
	for (r = 0; r < n.length; r++) {
		var i = n[r];
		if (!gs.call(t, i) || !Ct(e[i], t[i])) return !1;
	}
	return !0;
}
function uc(e) {
	for (; e && e.firstChild; ) e = e.firstChild;
	return e;
}
function cc(e, t) {
	var n = uc(e);
	e = 0;
	for (var r; n; ) {
		if (n.nodeType === 3) {
			if (((r = e + n.textContent.length), e <= t && r >= t)) return { node: n, offset: t - e };
			e = r;
		}
		e: {
			for (; n; ) {
				if (n.nextSibling) {
					n = n.nextSibling;
					break e;
				}
				n = n.parentNode;
			}
			n = void 0;
		}
		n = uc(n);
	}
}
function jf(e, t) {
	return e && t
		? e === t
			? !0
			: e && e.nodeType === 3
			  ? !1
			  : t && t.nodeType === 3
			    ? jf(e, t.parentNode)
			    : "contains" in e
			      ? e.contains(t)
			      : e.compareDocumentPosition
			        ? !!(e.compareDocumentPosition(t) & 16)
			        : !1
		: !1;
}
function Of() {
	for (var e = window, t = ko(); t instanceof e.HTMLIFrameElement; ) {
		try {
			var n = typeof t.contentWindow.location.href == "string";
		} catch {
			n = !1;
		}
		if (n) e = t.contentWindow;
		else break;
		t = ko(e.document);
	}
	return t;
}
function Va(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase();
	return (
		t &&
		((t === "input" &&
			(e.type === "text" ||
				e.type === "search" ||
				e.type === "tel" ||
				e.type === "url" ||
				e.type === "password")) ||
			t === "textarea" ||
			e.contentEditable === "true")
	);
}
function $h(e) {
	var t = Of(),
		n = e.focusedElem,
		r = e.selectionRange;
	if (t !== n && n && n.ownerDocument && jf(n.ownerDocument.documentElement, n)) {
		if (r !== null && Va(n)) {
			if (((t = r.start), (e = r.end), e === void 0 && (e = t), "selectionStart" in n))
				(n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
			else if (
				((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)
			) {
				e = e.getSelection();
				var i = n.textContent.length,
					o = Math.min(r.start, i);
				(r = r.end === void 0 ? o : Math.min(r.end, i)),
					!e.extend && o > r && ((i = r), (r = o), (o = i)),
					(i = cc(n, o));
				var l = cc(n, r);
				i &&
					l &&
					(e.rangeCount !== 1 ||
						e.anchorNode !== i.node ||
						e.anchorOffset !== i.offset ||
						e.focusNode !== l.node ||
						e.focusOffset !== l.offset) &&
					((t = t.createRange()),
					t.setStart(i.node, i.offset),
					e.removeAllRanges(),
					o > r
						? (e.addRange(t), e.extend(l.node, l.offset))
						: (t.setEnd(l.node, l.offset), e.addRange(t)));
			}
		}
		for (t = [], e = n; (e = e.parentNode); )
			e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
		for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
			(e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top);
	}
}
var Wh = Ut && "documentMode" in document && 11 >= document.documentMode,
	Qn = null,
	Is = null,
	ei = null,
	Ds = !1;
function dc(e, t, n) {
	var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
	Ds ||
		Qn == null ||
		Qn !== ko(r) ||
		((r = Qn),
		"selectionStart" in r && Va(r)
			? (r = { start: r.selectionStart, end: r.selectionEnd })
			: ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
			  (r = {
					anchorNode: r.anchorNode,
					anchorOffset: r.anchorOffset,
					focusNode: r.focusNode,
					focusOffset: r.focusOffset,
			  })),
		(ei && mi(ei, r)) ||
			((ei = r),
			(r = _o(Is, "onSelect")),
			0 < r.length &&
				((t = new Fa("onSelect", "select", null, t, n)),
				e.push({ event: t, listeners: r }),
				(t.target = Qn))));
}
function Yi(e, t) {
	var n = {};
	return (
		(n[e.toLowerCase()] = t.toLowerCase()),
		(n["Webkit" + e] = "webkit" + t),
		(n["Moz" + e] = "moz" + t),
		n
	);
}
var Yn = {
		animationend: Yi("Animation", "AnimationEnd"),
		animationiteration: Yi("Animation", "AnimationIteration"),
		animationstart: Yi("Animation", "AnimationStart"),
		transitionend: Yi("Transition", "TransitionEnd"),
	},
	Ul = {},
	zf = {};
Ut &&
	((zf = document.createElement("div").style),
	"AnimationEvent" in window ||
		(delete Yn.animationend.animation,
		delete Yn.animationiteration.animation,
		delete Yn.animationstart.animation),
	"TransitionEvent" in window || delete Yn.transitionend.transition);
function ol(e) {
	if (Ul[e]) return Ul[e];
	if (!Yn[e]) return e;
	var t = Yn[e],
		n;
	for (n in t) if (t.hasOwnProperty(n) && n in zf) return (Ul[e] = t[n]);
	return e;
}
var If = ol("animationend"),
	Df = ol("animationiteration"),
	Af = ol("animationstart"),
	Ff = ol("transitionend"),
	Bf = new Map(),
	fc =
		"abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
			" "
		);
function vn(e, t) {
	Bf.set(e, t), Bn(t, [e]);
}
for (var Hl = 0; Hl < fc.length; Hl++) {
	var $l = fc[Hl],
		Gh = $l.toLowerCase(),
		Kh = $l[0].toUpperCase() + $l.slice(1);
	vn(Gh, "on" + Kh);
}
vn(If, "onAnimationEnd");
vn(Df, "onAnimationIteration");
vn(Af, "onAnimationStart");
vn("dblclick", "onDoubleClick");
vn("focusin", "onFocus");
vn("focusout", "onBlur");
vn(Ff, "onTransitionEnd");
fr("onMouseEnter", ["mouseout", "mouseover"]);
fr("onMouseLeave", ["mouseout", "mouseover"]);
fr("onPointerEnter", ["pointerout", "pointerover"]);
fr("onPointerLeave", ["pointerout", "pointerover"]);
Bn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Bn(
	"onSelect",
	"focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")
);
Bn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Bn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Bn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Bn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Yr =
		"abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
			" "
		),
	Qh = new Set("cancel close invalid load scroll toggle".split(" ").concat(Yr));
function pc(e, t, n) {
	var r = e.type || "unknown-event";
	(e.currentTarget = n), G2(r, t, void 0, e), (e.currentTarget = null);
}
function bf(e, t) {
	t = (t & 4) !== 0;
	for (var n = 0; n < e.length; n++) {
		var r = e[n],
			i = r.event;
		r = r.listeners;
		e: {
			var o = void 0;
			if (t)
				for (var l = r.length - 1; 0 <= l; l--) {
					var a = r[l],
						s = a.instance,
						u = a.currentTarget;
					if (((a = a.listener), s !== o && i.isPropagationStopped())) break e;
					pc(i, a, u), (o = s);
				}
			else
				for (l = 0; l < r.length; l++) {
					if (
						((a = r[l]),
						(s = a.instance),
						(u = a.currentTarget),
						(a = a.listener),
						s !== o && i.isPropagationStopped())
					)
						break e;
					pc(i, a, u), (o = s);
				}
		}
	}
	if (Po) throw ((e = _s), (Po = !1), (_s = null), e);
}
function se(e, t) {
	var n = t[Vs];
	n === void 0 && (n = t[Vs] = new Set());
	var r = e + "__bubble";
	n.has(r) || (Vf(t, e, 2, !1), n.add(r));
}
function Wl(e, t, n) {
	var r = 0;
	t && (r |= 4), Vf(n, e, r, t);
}
var Xi = "_reactListening" + Math.random().toString(36).slice(2);
function gi(e) {
	if (!e[Xi]) {
		(e[Xi] = !0),
			Kd.forEach(function (n) {
				n !== "selectionchange" && (Qh.has(n) || Wl(n, !1, e), Wl(n, !0, e));
			});
		var t = e.nodeType === 9 ? e : e.ownerDocument;
		t === null || t[Xi] || ((t[Xi] = !0), Wl("selectionchange", !1, t));
	}
}
function Vf(e, t, n, r) {
	switch (kf(t)) {
		case 1:
			var i = ah;
			break;
		case 4:
			i = uh;
			break;
		default:
			i = Da;
	}
	(n = i.bind(null, t, n, e)),
		(i = void 0),
		!Rs || (t !== "touchstart" && t !== "touchmove" && t !== "wheel") || (i = !0),
		r
			? i !== void 0
				? e.addEventListener(t, n, { capture: !0, passive: i })
				: e.addEventListener(t, n, !0)
			: i !== void 0
			  ? e.addEventListener(t, n, { passive: i })
			  : e.addEventListener(t, n, !1);
}
function Gl(e, t, n, r, i) {
	var o = r;
	if (!(t & 1) && !(t & 2) && r !== null)
		e: for (;;) {
			if (r === null) return;
			var l = r.tag;
			if (l === 3 || l === 4) {
				var a = r.stateNode.containerInfo;
				if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
				if (l === 4)
					for (l = r.return; l !== null; ) {
						var s = l.tag;
						if (
							(s === 3 || s === 4) &&
							((s = l.stateNode.containerInfo), s === i || (s.nodeType === 8 && s.parentNode === i))
						)
							return;
						l = l.return;
					}
				for (; a !== null; ) {
					if (((l = Tn(a)), l === null)) return;
					if (((s = l.tag), s === 5 || s === 6)) {
						r = o = l;
						continue e;
					}
					a = a.parentNode;
				}
			}
			r = r.return;
		}
	cf(function () {
		var u = o,
			c = ja(n),
			d = [];
		e: {
			var p = Bf.get(e);
			if (p !== void 0) {
				var y = Fa,
					g = e;
				switch (e) {
					case "keypress":
						if (fo(n) === 0) break e;
					case "keydown":
					case "keyup":
						y = kh;
						break;
					case "focusin":
						(g = "focus"), (y = Bl);
						break;
					case "focusout":
						(g = "blur"), (y = Bl);
						break;
					case "beforeblur":
					case "afterblur":
						y = Bl;
						break;
					case "click":
						if (n.button === 2) break e;
					case "auxclick":
					case "dblclick":
					case "mousedown":
					case "mousemove":
					case "mouseup":
					case "mouseout":
					case "mouseover":
					case "contextmenu":
						y = tc;
						break;
					case "drag":
					case "dragend":
					case "dragenter":
					case "dragexit":
					case "dragleave":
					case "dragover":
					case "dragstart":
					case "drop":
						y = fh;
						break;
					case "touchcancel":
					case "touchend":
					case "touchmove":
					case "touchstart":
						y = Lh;
						break;
					case If:
					case Df:
					case Af:
						y = mh;
						break;
					case Ff:
						y = Nh;
						break;
					case "scroll":
						y = ch;
						break;
					case "wheel":
						y = _h;
						break;
					case "copy":
					case "cut":
					case "paste":
						y = vh;
						break;
					case "gotpointercapture":
					case "lostpointercapture":
					case "pointercancel":
					case "pointerdown":
					case "pointermove":
					case "pointerout":
					case "pointerover":
					case "pointerup":
						y = rc;
				}
				var w = (t & 4) !== 0,
					C = !w && e === "scroll",
					f = w ? (p !== null ? p + "Capture" : null) : p;
				w = [];
				for (var h = u, v; h !== null; ) {
					v = h;
					var m = v.stateNode;
					if (
						(v.tag === 5 &&
							m !== null &&
							((v = m), f !== null && ((m = ci(h, f)), m != null && w.push(vi(h, m, v)))),
						C)
					)
						break;
					h = h.return;
				}
				0 < w.length && ((p = new y(p, g, null, n, c)), d.push({ event: p, listeners: w }));
			}
		}
		if (!(t & 7)) {
			e: {
				if (
					((p = e === "mouseover" || e === "pointerover"),
					(y = e === "mouseout" || e === "pointerout"),
					p && n !== Ms && (g = n.relatedTarget || n.fromElement) && (Tn(g) || g[Ht]))
				)
					break e;
				if (
					(y || p) &&
					((p =
						c.window === c ? c : (p = c.ownerDocument) ? p.defaultView || p.parentWindow : window),
					y
						? ((g = n.relatedTarget || n.toElement),
						  (y = u),
						  (g = g ? Tn(g) : null),
						  g !== null && ((C = bn(g)), g !== C || (g.tag !== 5 && g.tag !== 6)) && (g = null))
						: ((y = null), (g = u)),
					y !== g)
				) {
					if (
						((w = tc),
						(m = "onMouseLeave"),
						(f = "onMouseEnter"),
						(h = "mouse"),
						(e === "pointerout" || e === "pointerover") &&
							((w = rc), (m = "onPointerLeave"), (f = "onPointerEnter"), (h = "pointer")),
						(C = y == null ? p : Xn(y)),
						(v = g == null ? p : Xn(g)),
						(p = new w(m, h + "leave", y, n, c)),
						(p.target = C),
						(p.relatedTarget = v),
						(m = null),
						Tn(c) === u &&
							((w = new w(f, h + "enter", g, n, c)),
							(w.target = v),
							(w.relatedTarget = C),
							(m = w)),
						(C = m),
						y && g)
					)
						t: {
							for (w = y, f = g, h = 0, v = w; v; v = $n(v)) h++;
							for (v = 0, m = f; m; m = $n(m)) v++;
							for (; 0 < h - v; ) (w = $n(w)), h--;
							for (; 0 < v - h; ) (f = $n(f)), v--;
							for (; h--; ) {
								if (w === f || (f !== null && w === f.alternate)) break t;
								(w = $n(w)), (f = $n(f));
							}
							w = null;
						}
					else w = null;
					y !== null && hc(d, p, y, w, !1), g !== null && C !== null && hc(d, C, g, w, !0);
				}
			}
			e: {
				if (
					((p = u ? Xn(u) : window),
					(y = p.nodeName && p.nodeName.toLowerCase()),
					y === "select" || (y === "input" && p.type === "file"))
				)
					var E = Fh;
				else if (lc(p))
					if (Rf) E = Uh;
					else {
						E = bh;
						var L = Bh;
					}
				else
					(y = p.nodeName) &&
						y.toLowerCase() === "input" &&
						(p.type === "checkbox" || p.type === "radio") &&
						(E = Vh);
				if (E && (E = E(e, u))) {
					Nf(d, E, n, c);
					break e;
				}
				L && L(e, p, u),
					e === "focusout" &&
						(L = p._wrapperState) &&
						L.controlled &&
						p.type === "number" &&
						Es(p, "number", p.value);
			}
			switch (((L = u ? Xn(u) : window), e)) {
				case "focusin":
					(lc(L) || L.contentEditable === "true") && ((Qn = L), (Is = u), (ei = null));
					break;
				case "focusout":
					ei = Is = Qn = null;
					break;
				case "mousedown":
					Ds = !0;
					break;
				case "contextmenu":
				case "mouseup":
				case "dragend":
					(Ds = !1), dc(d, n, c);
					break;
				case "selectionchange":
					if (Wh) break;
				case "keydown":
				case "keyup":
					dc(d, n, c);
			}
			var T;
			if (ba)
				e: {
					switch (e) {
						case "compositionstart":
							var _ = "onCompositionStart";
							break e;
						case "compositionend":
							_ = "onCompositionEnd";
							break e;
						case "compositionupdate":
							_ = "onCompositionUpdate";
							break e;
					}
					_ = void 0;
				}
			else
				Kn
					? Lf(e, n) && (_ = "onCompositionEnd")
					: e === "keydown" && n.keyCode === 229 && (_ = "onCompositionStart");
			_ &&
				(Pf &&
					n.locale !== "ko" &&
					(Kn || _ !== "onCompositionStart"
						? _ === "onCompositionEnd" && Kn && (T = Tf())
						: ((rn = c), (Aa = "value" in rn ? rn.value : rn.textContent), (Kn = !0))),
				(L = _o(u, _)),
				0 < L.length &&
					((_ = new nc(_, e, null, n, c)),
					d.push({ event: _, listeners: L }),
					T ? (_.data = T) : ((T = Mf(n)), T !== null && (_.data = T)))),
				(T = Oh ? zh(e, n) : Ih(e, n)) &&
					((u = _o(u, "onBeforeInput")),
					0 < u.length &&
						((c = new nc("onBeforeInput", "beforeinput", null, n, c)),
						d.push({ event: c, listeners: u }),
						(c.data = T)));
		}
		bf(d, t);
	});
}
function vi(e, t, n) {
	return { instance: e, listener: t, currentTarget: n };
}
function _o(e, t) {
	for (var n = t + "Capture", r = []; e !== null; ) {
		var i = e,
			o = i.stateNode;
		i.tag === 5 &&
			o !== null &&
			((i = o),
			(o = ci(e, n)),
			o != null && r.unshift(vi(e, o, i)),
			(o = ci(e, t)),
			o != null && r.push(vi(e, o, i))),
			(e = e.return);
	}
	return r;
}
function $n(e) {
	if (e === null) return null;
	do e = e.return;
	while (e && e.tag !== 5);
	return e || null;
}
function hc(e, t, n, r, i) {
	for (var o = t._reactName, l = []; n !== null && n !== r; ) {
		var a = n,
			s = a.alternate,
			u = a.stateNode;
		if (s !== null && s === r) break;
		a.tag === 5 &&
			u !== null &&
			((a = u),
			i
				? ((s = ci(n, o)), s != null && l.unshift(vi(n, s, a)))
				: i || ((s = ci(n, o)), s != null && l.push(vi(n, s, a)))),
			(n = n.return);
	}
	l.length !== 0 && e.push({ event: t, listeners: l });
}
var Yh = /\r\n?/g,
	Xh = /\u0000|\uFFFD/g;
function mc(e) {
	return (typeof e == "string" ? e : "" + e)
		.replace(
			Yh,
			`
`
		)
		.replace(Xh, "");
}
function Zi(e, t, n) {
	if (((t = mc(t)), mc(e) !== t && n)) throw Error(O(425));
}
function jo() {}
var As = null,
	Fs = null;
function Bs(e, t) {
	return (
		e === "textarea" ||
		e === "noscript" ||
		typeof t.children == "string" ||
		typeof t.children == "number" ||
		(typeof t.dangerouslySetInnerHTML == "object" &&
			t.dangerouslySetInnerHTML !== null &&
			t.dangerouslySetInnerHTML.__html != null)
	);
}
var bs = typeof setTimeout == "function" ? setTimeout : void 0,
	Zh = typeof clearTimeout == "function" ? clearTimeout : void 0,
	gc = typeof Promise == "function" ? Promise : void 0,
	qh =
		typeof queueMicrotask == "function"
			? queueMicrotask
			: typeof gc < "u"
			  ? function (e) {
						return gc.resolve(null).then(e).catch(Jh);
			    }
			  : bs;
function Jh(e) {
	setTimeout(function () {
		throw e;
	});
}
function Kl(e, t) {
	var n = t,
		r = 0;
	do {
		var i = n.nextSibling;
		if ((e.removeChild(n), i && i.nodeType === 8))
			if (((n = i.data), n === "/$")) {
				if (r === 0) {
					e.removeChild(i), pi(t);
					return;
				}
				r--;
			} else (n !== "$" && n !== "$?" && n !== "$!") || r++;
		n = i;
	} while (n);
	pi(t);
}
function cn(e) {
	for (; e != null; e = e.nextSibling) {
		var t = e.nodeType;
		if (t === 1 || t === 3) break;
		if (t === 8) {
			if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
			if (t === "/$") return null;
		}
	}
	return e;
}
function vc(e) {
	e = e.previousSibling;
	for (var t = 0; e; ) {
		if (e.nodeType === 8) {
			var n = e.data;
			if (n === "$" || n === "$!" || n === "$?") {
				if (t === 0) return e;
				t--;
			} else n === "/$" && t++;
		}
		e = e.previousSibling;
	}
	return null;
}
var Cr = Math.random().toString(36).slice(2),
	Pt = "__reactFiber$" + Cr,
	wi = "__reactProps$" + Cr,
	Ht = "__reactContainer$" + Cr,
	Vs = "__reactEvents$" + Cr,
	e1 = "__reactListeners$" + Cr,
	t1 = "__reactHandles$" + Cr;
function Tn(e) {
	var t = e[Pt];
	if (t) return t;
	for (var n = e.parentNode; n; ) {
		if ((t = n[Ht] || n[Pt])) {
			if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
				for (e = vc(e); e !== null; ) {
					if ((n = e[Pt])) return n;
					e = vc(e);
				}
			return t;
		}
		(e = n), (n = e.parentNode);
	}
	return null;
}
function ji(e) {
	return (
		(e = e[Pt] || e[Ht]),
		!e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
	);
}
function Xn(e) {
	if (e.tag === 5 || e.tag === 6) return e.stateNode;
	throw Error(O(33));
}
function ll(e) {
	return e[wi] || null;
}
var Us = [],
	Zn = -1;
function wn(e) {
	return { current: e };
}
function ae(e) {
	0 > Zn || ((e.current = Us[Zn]), (Us[Zn] = null), Zn--);
}
function le(e, t) {
	Zn++, (Us[Zn] = e.current), (e.current = t);
}
var gn = {},
	Ie = wn(gn),
	$e = wn(!1),
	_n = gn;
function pr(e, t) {
	var n = e.type.contextTypes;
	if (!n) return gn;
	var r = e.stateNode;
	if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
		return r.__reactInternalMemoizedMaskedChildContext;
	var i = {},
		o;
	for (o in n) i[o] = t[o];
	return (
		r &&
			((e = e.stateNode),
			(e.__reactInternalMemoizedUnmaskedChildContext = t),
			(e.__reactInternalMemoizedMaskedChildContext = i)),
		i
	);
}
function We(e) {
	return (e = e.childContextTypes), e != null;
}
function Oo() {
	ae($e), ae(Ie);
}
function wc(e, t, n) {
	if (Ie.current !== gn) throw Error(O(168));
	le(Ie, t), le($e, n);
}
function Uf(e, t, n) {
	var r = e.stateNode;
	if (((t = t.childContextTypes), typeof r.getChildContext != "function")) return n;
	r = r.getChildContext();
	for (var i in r) if (!(i in t)) throw Error(O(108, B2(e) || "Unknown", i));
	return pe({}, n, r);
}
function zo(e) {
	return (
		(e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || gn),
		(_n = Ie.current),
		le(Ie, e),
		le($e, $e.current),
		!0
	);
}
function yc(e, t, n) {
	var r = e.stateNode;
	if (!r) throw Error(O(169));
	n
		? ((e = Uf(e, t, _n)),
		  (r.__reactInternalMemoizedMergedChildContext = e),
		  ae($e),
		  ae(Ie),
		  le(Ie, e))
		: ae($e),
		le($e, n);
}
var It = null,
	sl = !1,
	Ql = !1;
function Hf(e) {
	It === null ? (It = [e]) : It.push(e);
}
function n1(e) {
	(sl = !0), Hf(e);
}
function yn() {
	if (!Ql && It !== null) {
		Ql = !0;
		var e = 0,
			t = re;
		try {
			var n = It;
			for (re = 1; e < n.length; e++) {
				var r = n[e];
				do r = r(!0);
				while (r !== null);
			}
			(It = null), (sl = !1);
		} catch (i) {
			throw (It !== null && (It = It.slice(e + 1)), hf(Oa, yn), i);
		} finally {
			(re = t), (Ql = !1);
		}
	}
	return null;
}
var qn = [],
	Jn = 0,
	Io = null,
	Do = 0,
	lt = [],
	st = 0,
	jn = null,
	Dt = 1,
	At = "";
function En(e, t) {
	(qn[Jn++] = Do), (qn[Jn++] = Io), (Io = e), (Do = t);
}
function $f(e, t, n) {
	(lt[st++] = Dt), (lt[st++] = At), (lt[st++] = jn), (jn = e);
	var r = Dt;
	e = At;
	var i = 32 - xt(r) - 1;
	(r &= ~(1 << i)), (n += 1);
	var o = 32 - xt(t) + i;
	if (30 < o) {
		var l = i - (i % 5);
		(o = (r & ((1 << l) - 1)).toString(32)),
			(r >>= l),
			(i -= l),
			(Dt = (1 << (32 - xt(t) + i)) | (n << i) | r),
			(At = o + e);
	} else (Dt = (1 << o) | (n << i) | r), (At = e);
}
function Ua(e) {
	e.return !== null && (En(e, 1), $f(e, 1, 0));
}
function Ha(e) {
	for (; e === Io; ) (Io = qn[--Jn]), (qn[Jn] = null), (Do = qn[--Jn]), (qn[Jn] = null);
	for (; e === jn; )
		(jn = lt[--st]),
			(lt[st] = null),
			(At = lt[--st]),
			(lt[st] = null),
			(Dt = lt[--st]),
			(lt[st] = null);
}
var qe = null,
	Ze = null,
	ue = !1,
	yt = null;
function Wf(e, t) {
	var n = at(5, null, null, 0);
	(n.elementType = "DELETED"),
		(n.stateNode = t),
		(n.return = e),
		(t = e.deletions),
		t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function xc(e, t) {
	switch (e.tag) {
		case 5:
			var n = e.type;
			return (
				(t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
				t !== null ? ((e.stateNode = t), (qe = e), (Ze = cn(t.firstChild)), !0) : !1
			);
		case 6:
			return (
				(t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
				t !== null ? ((e.stateNode = t), (qe = e), (Ze = null), !0) : !1
			);
		case 13:
			return (
				(t = t.nodeType !== 8 ? null : t),
				t !== null
					? ((n = jn !== null ? { id: Dt, overflow: At } : null),
					  (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
					  (n = at(18, null, null, 0)),
					  (n.stateNode = t),
					  (n.return = e),
					  (e.child = n),
					  (qe = e),
					  (Ze = null),
					  !0)
					: !1
			);
		default:
			return !1;
	}
}
function Hs(e) {
	return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function $s(e) {
	if (ue) {
		var t = Ze;
		if (t) {
			var n = t;
			if (!xc(e, t)) {
				if (Hs(e)) throw Error(O(418));
				t = cn(n.nextSibling);
				var r = qe;
				t && xc(e, t) ? Wf(r, n) : ((e.flags = (e.flags & -4097) | 2), (ue = !1), (qe = e));
			}
		} else {
			if (Hs(e)) throw Error(O(418));
			(e.flags = (e.flags & -4097) | 2), (ue = !1), (qe = e);
		}
	}
}
function Sc(e) {
	for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
	qe = e;
}
function qi(e) {
	if (e !== qe) return !1;
	if (!ue) return Sc(e), (ue = !0), !1;
	var t;
	if (
		((t = e.tag !== 3) &&
			!(t = e.tag !== 5) &&
			((t = e.type), (t = t !== "head" && t !== "body" && !Bs(e.type, e.memoizedProps))),
		t && (t = Ze))
	) {
		if (Hs(e)) throw (Gf(), Error(O(418)));
		for (; t; ) Wf(e, t), (t = cn(t.nextSibling));
	}
	if ((Sc(e), e.tag === 13)) {
		if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(O(317));
		e: {
			for (e = e.nextSibling, t = 0; e; ) {
				if (e.nodeType === 8) {
					var n = e.data;
					if (n === "/$") {
						if (t === 0) {
							Ze = cn(e.nextSibling);
							break e;
						}
						t--;
					} else (n !== "$" && n !== "$!" && n !== "$?") || t++;
				}
				e = e.nextSibling;
			}
			Ze = null;
		}
	} else Ze = qe ? cn(e.stateNode.nextSibling) : null;
	return !0;
}
function Gf() {
	for (var e = Ze; e; ) e = cn(e.nextSibling);
}
function hr() {
	(Ze = qe = null), (ue = !1);
}
function $a(e) {
	yt === null ? (yt = [e]) : yt.push(e);
}
var r1 = Gt.ReactCurrentBatchConfig;
function mt(e, t) {
	if (e && e.defaultProps) {
		(t = pe({}, t)), (e = e.defaultProps);
		for (var n in e) t[n] === void 0 && (t[n] = e[n]);
		return t;
	}
	return t;
}
var Ao = wn(null),
	Fo = null,
	er = null,
	Wa = null;
function Ga() {
	Wa = er = Fo = null;
}
function Ka(e) {
	var t = Ao.current;
	ae(Ao), (e._currentValue = t);
}
function Ws(e, t, n) {
	for (; e !== null; ) {
		var r = e.alternate;
		if (
			((e.childLanes & t) !== t
				? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
				: r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
			e === n)
		)
			break;
		e = e.return;
	}
}
function ar(e, t) {
	(Fo = e),
		(Wa = er = null),
		(e = e.dependencies),
		e !== null && e.firstContext !== null && (e.lanes & t && (He = !0), (e.firstContext = null));
}
function dt(e) {
	var t = e._currentValue;
	if (Wa !== e)
		if (((e = { context: e, memoizedValue: t, next: null }), er === null)) {
			if (Fo === null) throw Error(O(308));
			(er = e), (Fo.dependencies = { lanes: 0, firstContext: e });
		} else er = er.next = e;
	return t;
}
var Pn = null;
function Qa(e) {
	Pn === null ? (Pn = [e]) : Pn.push(e);
}
function Kf(e, t, n, r) {
	var i = t.interleaved;
	return (
		i === null ? ((n.next = n), Qa(t)) : ((n.next = i.next), (i.next = n)),
		(t.interleaved = n),
		$t(e, r)
	);
}
function $t(e, t) {
	e.lanes |= t;
	var n = e.alternate;
	for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
		(e.childLanes |= t),
			(n = e.alternate),
			n !== null && (n.childLanes |= t),
			(n = e),
			(e = e.return);
	return n.tag === 3 ? n.stateNode : null;
}
var en = !1;
function Ya(e) {
	e.updateQueue = {
		baseState: e.memoizedState,
		firstBaseUpdate: null,
		lastBaseUpdate: null,
		shared: { pending: null, interleaved: null, lanes: 0 },
		effects: null,
	};
}
function Qf(e, t) {
	(e = e.updateQueue),
		t.updateQueue === e &&
			(t.updateQueue = {
				baseState: e.baseState,
				firstBaseUpdate: e.firstBaseUpdate,
				lastBaseUpdate: e.lastBaseUpdate,
				shared: e.shared,
				effects: e.effects,
			});
}
function Bt(e, t) {
	return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function dn(e, t, n) {
	var r = e.updateQueue;
	if (r === null) return null;
	if (((r = r.shared), J & 2)) {
		var i = r.pending;
		return i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)), (r.pending = t), $t(e, n);
	}
	return (
		(i = r.interleaved),
		i === null ? ((t.next = t), Qa(r)) : ((t.next = i.next), (i.next = t)),
		(r.interleaved = t),
		$t(e, n)
	);
}
function po(e, t, n) {
	if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
		var r = t.lanes;
		(r &= e.pendingLanes), (n |= r), (t.lanes = n), za(e, n);
	}
}
function Cc(e, t) {
	var n = e.updateQueue,
		r = e.alternate;
	if (r !== null && ((r = r.updateQueue), n === r)) {
		var i = null,
			o = null;
		if (((n = n.firstBaseUpdate), n !== null)) {
			do {
				var l = {
					eventTime: n.eventTime,
					lane: n.lane,
					tag: n.tag,
					payload: n.payload,
					callback: n.callback,
					next: null,
				};
				o === null ? (i = o = l) : (o = o.next = l), (n = n.next);
			} while (n !== null);
			o === null ? (i = o = t) : (o = o.next = t);
		} else i = o = t;
		(n = {
			baseState: r.baseState,
			firstBaseUpdate: i,
			lastBaseUpdate: o,
			shared: r.shared,
			effects: r.effects,
		}),
			(e.updateQueue = n);
		return;
	}
	(e = n.lastBaseUpdate),
		e === null ? (n.firstBaseUpdate = t) : (e.next = t),
		(n.lastBaseUpdate = t);
}
function Bo(e, t, n, r) {
	var i = e.updateQueue;
	en = !1;
	var o = i.firstBaseUpdate,
		l = i.lastBaseUpdate,
		a = i.shared.pending;
	if (a !== null) {
		i.shared.pending = null;
		var s = a,
			u = s.next;
		(s.next = null), l === null ? (o = u) : (l.next = u), (l = s);
		var c = e.alternate;
		c !== null &&
			((c = c.updateQueue),
			(a = c.lastBaseUpdate),
			a !== l && (a === null ? (c.firstBaseUpdate = u) : (a.next = u), (c.lastBaseUpdate = s)));
	}
	if (o !== null) {
		var d = i.baseState;
		(l = 0), (c = u = s = null), (a = o);
		do {
			var p = a.lane,
				y = a.eventTime;
			if ((r & p) === p) {
				c !== null &&
					(c = c.next =
						{
							eventTime: y,
							lane: 0,
							tag: a.tag,
							payload: a.payload,
							callback: a.callback,
							next: null,
						});
				e: {
					var g = e,
						w = a;
					switch (((p = t), (y = n), w.tag)) {
						case 1:
							if (((g = w.payload), typeof g == "function")) {
								d = g.call(y, d, p);
								break e;
							}
							d = g;
							break e;
						case 3:
							g.flags = (g.flags & -65537) | 128;
						case 0:
							if (((g = w.payload), (p = typeof g == "function" ? g.call(y, d, p) : g), p == null))
								break e;
							d = pe({}, d, p);
							break e;
						case 2:
							en = !0;
					}
				}
				a.callback !== null &&
					a.lane !== 0 &&
					((e.flags |= 64), (p = i.effects), p === null ? (i.effects = [a]) : p.push(a));
			} else
				(y = {
					eventTime: y,
					lane: p,
					tag: a.tag,
					payload: a.payload,
					callback: a.callback,
					next: null,
				}),
					c === null ? ((u = c = y), (s = d)) : (c = c.next = y),
					(l |= p);
			if (((a = a.next), a === null)) {
				if (((a = i.shared.pending), a === null)) break;
				(p = a), (a = p.next), (p.next = null), (i.lastBaseUpdate = p), (i.shared.pending = null);
			}
		} while (!0);
		if (
			(c === null && (s = d),
			(i.baseState = s),
			(i.firstBaseUpdate = u),
			(i.lastBaseUpdate = c),
			(t = i.shared.interleaved),
			t !== null)
		) {
			i = t;
			do (l |= i.lane), (i = i.next);
			while (i !== t);
		} else o === null && (i.shared.lanes = 0);
		(zn |= l), (e.lanes = l), (e.memoizedState = d);
	}
}
function Ec(e, t, n) {
	if (((e = t.effects), (t.effects = null), e !== null))
		for (t = 0; t < e.length; t++) {
			var r = e[t],
				i = r.callback;
			if (i !== null) {
				if (((r.callback = null), (r = n), typeof i != "function")) throw Error(O(191, i));
				i.call(r);
			}
		}
}
var Yf = new Gd.Component().refs;
function Gs(e, t, n, r) {
	(t = e.memoizedState),
		(n = n(r, t)),
		(n = n == null ? t : pe({}, t, n)),
		(e.memoizedState = n),
		e.lanes === 0 && (e.updateQueue.baseState = n);
}
var al = {
	isMounted: function (e) {
		return (e = e._reactInternals) ? bn(e) === e : !1;
	},
	enqueueSetState: function (e, t, n) {
		e = e._reactInternals;
		var r = Be(),
			i = pn(e),
			o = Bt(r, i);
		(o.payload = t),
			n != null && (o.callback = n),
			(t = dn(e, o, i)),
			t !== null && (St(t, e, i, r), po(t, e, i));
	},
	enqueueReplaceState: function (e, t, n) {
		e = e._reactInternals;
		var r = Be(),
			i = pn(e),
			o = Bt(r, i);
		(o.tag = 1),
			(o.payload = t),
			n != null && (o.callback = n),
			(t = dn(e, o, i)),
			t !== null && (St(t, e, i, r), po(t, e, i));
	},
	enqueueForceUpdate: function (e, t) {
		e = e._reactInternals;
		var n = Be(),
			r = pn(e),
			i = Bt(n, r);
		(i.tag = 2),
			t != null && (i.callback = t),
			(t = dn(e, i, r)),
			t !== null && (St(t, e, r, n), po(t, e, r));
	},
};
function kc(e, t, n, r, i, o, l) {
	return (
		(e = e.stateNode),
		typeof e.shouldComponentUpdate == "function"
			? e.shouldComponentUpdate(r, o, l)
			: t.prototype && t.prototype.isPureReactComponent
			  ? !mi(n, r) || !mi(i, o)
			  : !0
	);
}
function Xf(e, t, n) {
	var r = !1,
		i = gn,
		o = t.contextType;
	return (
		typeof o == "object" && o !== null
			? (o = dt(o))
			: ((i = We(t) ? _n : Ie.current),
			  (r = t.contextTypes),
			  (o = (r = r != null) ? pr(e, i) : gn)),
		(t = new t(n, o)),
		(e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
		(t.updater = al),
		(e.stateNode = t),
		(t._reactInternals = e),
		r &&
			((e = e.stateNode),
			(e.__reactInternalMemoizedUnmaskedChildContext = i),
			(e.__reactInternalMemoizedMaskedChildContext = o)),
		t
	);
}
function Tc(e, t, n, r) {
	(e = t.state),
		typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
		typeof t.UNSAFE_componentWillReceiveProps == "function" &&
			t.UNSAFE_componentWillReceiveProps(n, r),
		t.state !== e && al.enqueueReplaceState(t, t.state, null);
}
function Ks(e, t, n, r) {
	var i = e.stateNode;
	(i.props = n), (i.state = e.memoizedState), (i.refs = Yf), Ya(e);
	var o = t.contextType;
	typeof o == "object" && o !== null
		? (i.context = dt(o))
		: ((o = We(t) ? _n : Ie.current), (i.context = pr(e, o))),
		(i.state = e.memoizedState),
		(o = t.getDerivedStateFromProps),
		typeof o == "function" && (Gs(e, t, o, n), (i.state = e.memoizedState)),
		typeof t.getDerivedStateFromProps == "function" ||
			typeof i.getSnapshotBeforeUpdate == "function" ||
			(typeof i.UNSAFE_componentWillMount != "function" &&
				typeof i.componentWillMount != "function") ||
			((t = i.state),
			typeof i.componentWillMount == "function" && i.componentWillMount(),
			typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(),
			t !== i.state && al.enqueueReplaceState(i, i.state, null),
			Bo(e, n, i, r),
			(i.state = e.memoizedState)),
		typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Ar(e, t, n) {
	if (((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")) {
		if (n._owner) {
			if (((n = n._owner), n)) {
				if (n.tag !== 1) throw Error(O(309));
				var r = n.stateNode;
			}
			if (!r) throw Error(O(147, e));
			var i = r,
				o = "" + e;
			return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o
				? t.ref
				: ((t = function (l) {
						var a = i.refs;
						a === Yf && (a = i.refs = {}), l === null ? delete a[o] : (a[o] = l);
				  }),
				  (t._stringRef = o),
				  t);
		}
		if (typeof e != "string") throw Error(O(284));
		if (!n._owner) throw Error(O(290, e));
	}
	return e;
}
function Ji(e, t) {
	throw (
		((e = Object.prototype.toString.call(t)),
		Error(
			O(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)
		))
	);
}
function Pc(e) {
	var t = e._init;
	return t(e._payload);
}
function Zf(e) {
	function t(f, h) {
		if (e) {
			var v = f.deletions;
			v === null ? ((f.deletions = [h]), (f.flags |= 16)) : v.push(h);
		}
	}
	function n(f, h) {
		if (!e) return null;
		for (; h !== null; ) t(f, h), (h = h.sibling);
		return null;
	}
	function r(f, h) {
		for (f = new Map(); h !== null; )
			h.key !== null ? f.set(h.key, h) : f.set(h.index, h), (h = h.sibling);
		return f;
	}
	function i(f, h) {
		return (f = hn(f, h)), (f.index = 0), (f.sibling = null), f;
	}
	function o(f, h, v) {
		return (
			(f.index = v),
			e
				? ((v = f.alternate),
				  v !== null ? ((v = v.index), v < h ? ((f.flags |= 2), h) : v) : ((f.flags |= 2), h))
				: ((f.flags |= 1048576), h)
		);
	}
	function l(f) {
		return e && f.alternate === null && (f.flags |= 2), f;
	}
	function a(f, h, v, m) {
		return h === null || h.tag !== 6
			? ((h = ts(v, f.mode, m)), (h.return = f), h)
			: ((h = i(h, v)), (h.return = f), h);
	}
	function s(f, h, v, m) {
		var E = v.type;
		return E === Gn
			? c(f, h, v.props.children, m, v.key)
			: h !== null &&
			    (h.elementType === E ||
						(typeof E == "object" && E !== null && E.$$typeof === Jt && Pc(E) === h.type))
			  ? ((m = i(h, v.props)), (m.ref = Ar(f, h, v)), (m.return = f), m)
			  : ((m = yo(v.type, v.key, v.props, null, f.mode, m)),
			    (m.ref = Ar(f, h, v)),
			    (m.return = f),
			    m);
	}
	function u(f, h, v, m) {
		return h === null ||
			h.tag !== 4 ||
			h.stateNode.containerInfo !== v.containerInfo ||
			h.stateNode.implementation !== v.implementation
			? ((h = ns(v, f.mode, m)), (h.return = f), h)
			: ((h = i(h, v.children || [])), (h.return = f), h);
	}
	function c(f, h, v, m, E) {
		return h === null || h.tag !== 7
			? ((h = Rn(v, f.mode, m, E)), (h.return = f), h)
			: ((h = i(h, v)), (h.return = f), h);
	}
	function d(f, h, v) {
		if ((typeof h == "string" && h !== "") || typeof h == "number")
			return (h = ts("" + h, f.mode, v)), (h.return = f), h;
		if (typeof h == "object" && h !== null) {
			switch (h.$$typeof) {
				case Ui:
					return (
						(v = yo(h.type, h.key, h.props, null, f.mode, v)),
						(v.ref = Ar(f, null, h)),
						(v.return = f),
						v
					);
				case Wn:
					return (h = ns(h, f.mode, v)), (h.return = f), h;
				case Jt:
					var m = h._init;
					return d(f, m(h._payload), v);
			}
			if (Kr(h) || jr(h)) return (h = Rn(h, f.mode, v, null)), (h.return = f), h;
			Ji(f, h);
		}
		return null;
	}
	function p(f, h, v, m) {
		var E = h !== null ? h.key : null;
		if ((typeof v == "string" && v !== "") || typeof v == "number")
			return E !== null ? null : a(f, h, "" + v, m);
		if (typeof v == "object" && v !== null) {
			switch (v.$$typeof) {
				case Ui:
					return v.key === E ? s(f, h, v, m) : null;
				case Wn:
					return v.key === E ? u(f, h, v, m) : null;
				case Jt:
					return (E = v._init), p(f, h, E(v._payload), m);
			}
			if (Kr(v) || jr(v)) return E !== null ? null : c(f, h, v, m, null);
			Ji(f, v);
		}
		return null;
	}
	function y(f, h, v, m, E) {
		if ((typeof m == "string" && m !== "") || typeof m == "number")
			return (f = f.get(v) || null), a(h, f, "" + m, E);
		if (typeof m == "object" && m !== null) {
			switch (m.$$typeof) {
				case Ui:
					return (f = f.get(m.key === null ? v : m.key) || null), s(h, f, m, E);
				case Wn:
					return (f = f.get(m.key === null ? v : m.key) || null), u(h, f, m, E);
				case Jt:
					var L = m._init;
					return y(f, h, v, L(m._payload), E);
			}
			if (Kr(m) || jr(m)) return (f = f.get(v) || null), c(h, f, m, E, null);
			Ji(h, m);
		}
		return null;
	}
	function g(f, h, v, m) {
		for (var E = null, L = null, T = h, _ = (h = 0), j = null; T !== null && _ < v.length; _++) {
			T.index > _ ? ((j = T), (T = null)) : (j = T.sibling);
			var N = p(f, T, v[_], m);
			if (N === null) {
				T === null && (T = j);
				break;
			}
			e && T && N.alternate === null && t(f, T),
				(h = o(N, h, _)),
				L === null ? (E = N) : (L.sibling = N),
				(L = N),
				(T = j);
		}
		if (_ === v.length) return n(f, T), ue && En(f, _), E;
		if (T === null) {
			for (; _ < v.length; _++)
				(T = d(f, v[_], m)),
					T !== null && ((h = o(T, h, _)), L === null ? (E = T) : (L.sibling = T), (L = T));
			return ue && En(f, _), E;
		}
		for (T = r(f, T); _ < v.length; _++)
			(j = y(T, f, _, v[_], m)),
				j !== null &&
					(e && j.alternate !== null && T.delete(j.key === null ? _ : j.key),
					(h = o(j, h, _)),
					L === null ? (E = j) : (L.sibling = j),
					(L = j));
		return (
			e &&
				T.forEach(function (z) {
					return t(f, z);
				}),
			ue && En(f, _),
			E
		);
	}
	function w(f, h, v, m) {
		var E = jr(v);
		if (typeof E != "function") throw Error(O(150));
		if (((v = E.call(v)), v == null)) throw Error(O(151));
		for (
			var L = (E = null), T = h, _ = (h = 0), j = null, N = v.next();
			T !== null && !N.done;
			_++, N = v.next()
		) {
			T.index > _ ? ((j = T), (T = null)) : (j = T.sibling);
			var z = p(f, T, N.value, m);
			if (z === null) {
				T === null && (T = j);
				break;
			}
			e && T && z.alternate === null && t(f, T),
				(h = o(z, h, _)),
				L === null ? (E = z) : (L.sibling = z),
				(L = z),
				(T = j);
		}
		if (N.done) return n(f, T), ue && En(f, _), E;
		if (T === null) {
			for (; !N.done; _++, N = v.next())
				(N = d(f, N.value, m)),
					N !== null && ((h = o(N, h, _)), L === null ? (E = N) : (L.sibling = N), (L = N));
			return ue && En(f, _), E;
		}
		for (T = r(f, T); !N.done; _++, N = v.next())
			(N = y(T, f, _, N.value, m)),
				N !== null &&
					(e && N.alternate !== null && T.delete(N.key === null ? _ : N.key),
					(h = o(N, h, _)),
					L === null ? (E = N) : (L.sibling = N),
					(L = N));
		return (
			e &&
				T.forEach(function (b) {
					return t(f, b);
				}),
			ue && En(f, _),
			E
		);
	}
	function C(f, h, v, m) {
		if (
			(typeof v == "object" &&
				v !== null &&
				v.type === Gn &&
				v.key === null &&
				(v = v.props.children),
			typeof v == "object" && v !== null)
		) {
			switch (v.$$typeof) {
				case Ui:
					e: {
						for (var E = v.key, L = h; L !== null; ) {
							if (L.key === E) {
								if (((E = v.type), E === Gn)) {
									if (L.tag === 7) {
										n(f, L.sibling), (h = i(L, v.props.children)), (h.return = f), (f = h);
										break e;
									}
								} else if (
									L.elementType === E ||
									(typeof E == "object" && E !== null && E.$$typeof === Jt && Pc(E) === L.type)
								) {
									n(f, L.sibling),
										(h = i(L, v.props)),
										(h.ref = Ar(f, L, v)),
										(h.return = f),
										(f = h);
									break e;
								}
								n(f, L);
								break;
							} else t(f, L);
							L = L.sibling;
						}
						v.type === Gn
							? ((h = Rn(v.props.children, f.mode, m, v.key)), (h.return = f), (f = h))
							: ((m = yo(v.type, v.key, v.props, null, f.mode, m)),
							  (m.ref = Ar(f, h, v)),
							  (m.return = f),
							  (f = m));
					}
					return l(f);
				case Wn:
					e: {
						for (L = v.key; h !== null; ) {
							if (h.key === L)
								if (
									h.tag === 4 &&
									h.stateNode.containerInfo === v.containerInfo &&
									h.stateNode.implementation === v.implementation
								) {
									n(f, h.sibling), (h = i(h, v.children || [])), (h.return = f), (f = h);
									break e;
								} else {
									n(f, h);
									break;
								}
							else t(f, h);
							h = h.sibling;
						}
						(h = ns(v, f.mode, m)), (h.return = f), (f = h);
					}
					return l(f);
				case Jt:
					return (L = v._init), C(f, h, L(v._payload), m);
			}
			if (Kr(v)) return g(f, h, v, m);
			if (jr(v)) return w(f, h, v, m);
			Ji(f, v);
		}
		return (typeof v == "string" && v !== "") || typeof v == "number"
			? ((v = "" + v),
			  h !== null && h.tag === 6
					? (n(f, h.sibling), (h = i(h, v)), (h.return = f), (f = h))
					: (n(f, h), (h = ts(v, f.mode, m)), (h.return = f), (f = h)),
			  l(f))
			: n(f, h);
	}
	return C;
}
var mr = Zf(!0),
	qf = Zf(!1),
	Oi = {},
	Nt = wn(Oi),
	yi = wn(Oi),
	xi = wn(Oi);
function Ln(e) {
	if (e === Oi) throw Error(O(174));
	return e;
}
function Xa(e, t) {
	switch ((le(xi, t), le(yi, e), le(Nt, Oi), (e = t.nodeType), e)) {
		case 9:
		case 11:
			t = (t = t.documentElement) ? t.namespaceURI : Ts(null, "");
			break;
		default:
			(e = e === 8 ? t.parentNode : t),
				(t = e.namespaceURI || null),
				(e = e.tagName),
				(t = Ts(t, e));
	}
	ae(Nt), le(Nt, t);
}
function gr() {
	ae(Nt), ae(yi), ae(xi);
}
function Jf(e) {
	Ln(xi.current);
	var t = Ln(Nt.current),
		n = Ts(t, e.type);
	t !== n && (le(yi, e), le(Nt, n));
}
function Za(e) {
	yi.current === e && (ae(Nt), ae(yi));
}
var de = wn(0);
function bo(e) {
	for (var t = e; t !== null; ) {
		if (t.tag === 13) {
			var n = t.memoizedState;
			if (n !== null && ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!"))
				return t;
		} else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
			if (t.flags & 128) return t;
		} else if (t.child !== null) {
			(t.child.return = t), (t = t.child);
			continue;
		}
		if (t === e) break;
		for (; t.sibling === null; ) {
			if (t.return === null || t.return === e) return null;
			t = t.return;
		}
		(t.sibling.return = t.return), (t = t.sibling);
	}
	return null;
}
var Yl = [];
function qa() {
	for (var e = 0; e < Yl.length; e++) Yl[e]._workInProgressVersionPrimary = null;
	Yl.length = 0;
}
var ho = Gt.ReactCurrentDispatcher,
	Xl = Gt.ReactCurrentBatchConfig,
	On = 0,
	fe = null,
	ke = null,
	Pe = null,
	Vo = !1,
	ti = !1,
	Si = 0,
	i1 = 0;
function je() {
	throw Error(O(321));
}
function Ja(e, t) {
	if (t === null) return !1;
	for (var n = 0; n < t.length && n < e.length; n++) if (!Ct(e[n], t[n])) return !1;
	return !0;
}
function eu(e, t, n, r, i, o) {
	if (
		((On = o),
		(fe = t),
		(t.memoizedState = null),
		(t.updateQueue = null),
		(t.lanes = 0),
		(ho.current = e === null || e.memoizedState === null ? a1 : u1),
		(e = n(r, i)),
		ti)
	) {
		o = 0;
		do {
			if (((ti = !1), (Si = 0), 25 <= o)) throw Error(O(301));
			(o += 1), (Pe = ke = null), (t.updateQueue = null), (ho.current = c1), (e = n(r, i));
		} while (ti);
	}
	if (
		((ho.current = Uo),
		(t = ke !== null && ke.next !== null),
		(On = 0),
		(Pe = ke = fe = null),
		(Vo = !1),
		t)
	)
		throw Error(O(300));
	return e;
}
function tu() {
	var e = Si !== 0;
	return (Si = 0), e;
}
function Tt() {
	var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
	return Pe === null ? (fe.memoizedState = Pe = e) : (Pe = Pe.next = e), Pe;
}
function ft() {
	if (ke === null) {
		var e = fe.alternate;
		e = e !== null ? e.memoizedState : null;
	} else e = ke.next;
	var t = Pe === null ? fe.memoizedState : Pe.next;
	if (t !== null) (Pe = t), (ke = e);
	else {
		if (e === null) throw Error(O(310));
		(ke = e),
			(e = {
				memoizedState: ke.memoizedState,
				baseState: ke.baseState,
				baseQueue: ke.baseQueue,
				queue: ke.queue,
				next: null,
			}),
			Pe === null ? (fe.memoizedState = Pe = e) : (Pe = Pe.next = e);
	}
	return Pe;
}
function Ci(e, t) {
	return typeof t == "function" ? t(e) : t;
}
function Zl(e) {
	var t = ft(),
		n = t.queue;
	if (n === null) throw Error(O(311));
	n.lastRenderedReducer = e;
	var r = ke,
		i = r.baseQueue,
		o = n.pending;
	if (o !== null) {
		if (i !== null) {
			var l = i.next;
			(i.next = o.next), (o.next = l);
		}
		(r.baseQueue = i = o), (n.pending = null);
	}
	if (i !== null) {
		(o = i.next), (r = r.baseState);
		var a = (l = null),
			s = null,
			u = o;
		do {
			var c = u.lane;
			if ((On & c) === c)
				s !== null &&
					(s = s.next =
						{
							lane: 0,
							action: u.action,
							hasEagerState: u.hasEagerState,
							eagerState: u.eagerState,
							next: null,
						}),
					(r = u.hasEagerState ? u.eagerState : e(r, u.action));
			else {
				var d = {
					lane: c,
					action: u.action,
					hasEagerState: u.hasEagerState,
					eagerState: u.eagerState,
					next: null,
				};
				s === null ? ((a = s = d), (l = r)) : (s = s.next = d), (fe.lanes |= c), (zn |= c);
			}
			u = u.next;
		} while (u !== null && u !== o);
		s === null ? (l = r) : (s.next = a),
			Ct(r, t.memoizedState) || (He = !0),
			(t.memoizedState = r),
			(t.baseState = l),
			(t.baseQueue = s),
			(n.lastRenderedState = r);
	}
	if (((e = n.interleaved), e !== null)) {
		i = e;
		do (o = i.lane), (fe.lanes |= o), (zn |= o), (i = i.next);
		while (i !== e);
	} else i === null && (n.lanes = 0);
	return [t.memoizedState, n.dispatch];
}
function ql(e) {
	var t = ft(),
		n = t.queue;
	if (n === null) throw Error(O(311));
	n.lastRenderedReducer = e;
	var r = n.dispatch,
		i = n.pending,
		o = t.memoizedState;
	if (i !== null) {
		n.pending = null;
		var l = (i = i.next);
		do (o = e(o, l.action)), (l = l.next);
		while (l !== i);
		Ct(o, t.memoizedState) || (He = !0),
			(t.memoizedState = o),
			t.baseQueue === null && (t.baseState = o),
			(n.lastRenderedState = o);
	}
	return [o, r];
}
function e0() {}
function t0(e, t) {
	var n = fe,
		r = ft(),
		i = t(),
		o = !Ct(r.memoizedState, i);
	if (
		(o && ((r.memoizedState = i), (He = !0)),
		(r = r.queue),
		nu(i0.bind(null, n, r, e), [e]),
		r.getSnapshot !== t || o || (Pe !== null && Pe.memoizedState.tag & 1))
	) {
		if (((n.flags |= 2048), Ei(9, r0.bind(null, n, r, i, t), void 0, null), Le === null))
			throw Error(O(349));
		On & 30 || n0(n, t, i);
	}
	return i;
}
function n0(e, t, n) {
	(e.flags |= 16384),
		(e = { getSnapshot: t, value: n }),
		(t = fe.updateQueue),
		t === null
			? ((t = { lastEffect: null, stores: null }), (fe.updateQueue = t), (t.stores = [e]))
			: ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function r0(e, t, n, r) {
	(t.value = n), (t.getSnapshot = r), o0(t) && l0(e);
}
function i0(e, t, n) {
	return n(function () {
		o0(t) && l0(e);
	});
}
function o0(e) {
	var t = e.getSnapshot;
	e = e.value;
	try {
		var n = t();
		return !Ct(e, n);
	} catch {
		return !0;
	}
}
function l0(e) {
	var t = $t(e, 1);
	t !== null && St(t, e, 1, -1);
}
function Lc(e) {
	var t = Tt();
	return (
		typeof e == "function" && (e = e()),
		(t.memoizedState = t.baseState = e),
		(e = {
			pending: null,
			interleaved: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: Ci,
			lastRenderedState: e,
		}),
		(t.queue = e),
		(e = e.dispatch = s1.bind(null, fe, e)),
		[t.memoizedState, e]
	);
}
function Ei(e, t, n, r) {
	return (
		(e = { tag: e, create: t, destroy: n, deps: r, next: null }),
		(t = fe.updateQueue),
		t === null
			? ((t = { lastEffect: null, stores: null }),
			  (fe.updateQueue = t),
			  (t.lastEffect = e.next = e))
			: ((n = t.lastEffect),
			  n === null
					? (t.lastEffect = e.next = e)
					: ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
		e
	);
}
function s0() {
	return ft().memoizedState;
}
function mo(e, t, n, r) {
	var i = Tt();
	(fe.flags |= e), (i.memoizedState = Ei(1 | t, n, void 0, r === void 0 ? null : r));
}
function ul(e, t, n, r) {
	var i = ft();
	r = r === void 0 ? null : r;
	var o = void 0;
	if (ke !== null) {
		var l = ke.memoizedState;
		if (((o = l.destroy), r !== null && Ja(r, l.deps))) {
			i.memoizedState = Ei(t, n, o, r);
			return;
		}
	}
	(fe.flags |= e), (i.memoizedState = Ei(1 | t, n, o, r));
}
function Mc(e, t) {
	return mo(8390656, 8, e, t);
}
function nu(e, t) {
	return ul(2048, 8, e, t);
}
function a0(e, t) {
	return ul(4, 2, e, t);
}
function u0(e, t) {
	return ul(4, 4, e, t);
}
function c0(e, t) {
	if (typeof t == "function")
		return (
			(e = e()),
			t(e),
			function () {
				t(null);
			}
		);
	if (t != null)
		return (
			(e = e()),
			(t.current = e),
			function () {
				t.current = null;
			}
		);
}
function d0(e, t, n) {
	return (n = n != null ? n.concat([e]) : null), ul(4, 4, c0.bind(null, t, e), n);
}
function ru() {}
function f0(e, t) {
	var n = ft();
	t = t === void 0 ? null : t;
	var r = n.memoizedState;
	return r !== null && t !== null && Ja(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function p0(e, t) {
	var n = ft();
	t = t === void 0 ? null : t;
	var r = n.memoizedState;
	return r !== null && t !== null && Ja(t, r[1])
		? r[0]
		: ((e = e()), (n.memoizedState = [e, t]), e);
}
function h0(e, t, n) {
	return On & 21
		? (Ct(n, t) || ((n = vf()), (fe.lanes |= n), (zn |= n), (e.baseState = !0)), t)
		: (e.baseState && ((e.baseState = !1), (He = !0)), (e.memoizedState = n));
}
function o1(e, t) {
	var n = re;
	(re = n !== 0 && 4 > n ? n : 4), e(!0);
	var r = Xl.transition;
	Xl.transition = {};
	try {
		e(!1), t();
	} finally {
		(re = n), (Xl.transition = r);
	}
}
function m0() {
	return ft().memoizedState;
}
function l1(e, t, n) {
	var r = pn(e);
	if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), g0(e)))
		v0(t, n);
	else if (((n = Kf(e, t, n, r)), n !== null)) {
		var i = Be();
		St(n, e, r, i), w0(n, t, r);
	}
}
function s1(e, t, n) {
	var r = pn(e),
		i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
	if (g0(e)) v0(t, i);
	else {
		var o = e.alternate;
		if (e.lanes === 0 && (o === null || o.lanes === 0) && ((o = t.lastRenderedReducer), o !== null))
			try {
				var l = t.lastRenderedState,
					a = o(l, n);
				if (((i.hasEagerState = !0), (i.eagerState = a), Ct(a, l))) {
					var s = t.interleaved;
					s === null ? ((i.next = i), Qa(t)) : ((i.next = s.next), (s.next = i)),
						(t.interleaved = i);
					return;
				}
			} catch {
			} finally {
			}
		(n = Kf(e, t, i, r)), n !== null && ((i = Be()), St(n, e, r, i), w0(n, t, r));
	}
}
function g0(e) {
	var t = e.alternate;
	return e === fe || (t !== null && t === fe);
}
function v0(e, t) {
	ti = Vo = !0;
	var n = e.pending;
	n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
}
function w0(e, t, n) {
	if (n & 4194240) {
		var r = t.lanes;
		(r &= e.pendingLanes), (n |= r), (t.lanes = n), za(e, n);
	}
}
var Uo = {
		readContext: dt,
		useCallback: je,
		useContext: je,
		useEffect: je,
		useImperativeHandle: je,
		useInsertionEffect: je,
		useLayoutEffect: je,
		useMemo: je,
		useReducer: je,
		useRef: je,
		useState: je,
		useDebugValue: je,
		useDeferredValue: je,
		useTransition: je,
		useMutableSource: je,
		useSyncExternalStore: je,
		useId: je,
		unstable_isNewReconciler: !1,
	},
	a1 = {
		readContext: dt,
		useCallback: function (e, t) {
			return (Tt().memoizedState = [e, t === void 0 ? null : t]), e;
		},
		useContext: dt,
		useEffect: Mc,
		useImperativeHandle: function (e, t, n) {
			return (n = n != null ? n.concat([e]) : null), mo(4194308, 4, c0.bind(null, t, e), n);
		},
		useLayoutEffect: function (e, t) {
			return mo(4194308, 4, e, t);
		},
		useInsertionEffect: function (e, t) {
			return mo(4, 2, e, t);
		},
		useMemo: function (e, t) {
			var n = Tt();
			return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
		},
		useReducer: function (e, t, n) {
			var r = Tt();
			return (
				(t = n !== void 0 ? n(t) : t),
				(r.memoizedState = r.baseState = t),
				(e = {
					pending: null,
					interleaved: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: e,
					lastRenderedState: t,
				}),
				(r.queue = e),
				(e = e.dispatch = l1.bind(null, fe, e)),
				[r.memoizedState, e]
			);
		},
		useRef: function (e) {
			var t = Tt();
			return (e = { current: e }), (t.memoizedState = e);
		},
		useState: Lc,
		useDebugValue: ru,
		useDeferredValue: function (e) {
			return (Tt().memoizedState = e);
		},
		useTransition: function () {
			var e = Lc(!1),
				t = e[0];
			return (e = o1.bind(null, e[1])), (Tt().memoizedState = e), [t, e];
		},
		useMutableSource: function () {},
		useSyncExternalStore: function (e, t, n) {
			var r = fe,
				i = Tt();
			if (ue) {
				if (n === void 0) throw Error(O(407));
				n = n();
			} else {
				if (((n = t()), Le === null)) throw Error(O(349));
				On & 30 || n0(r, t, n);
			}
			i.memoizedState = n;
			var o = { value: n, getSnapshot: t };
			return (
				(i.queue = o),
				Mc(i0.bind(null, r, o, e), [e]),
				(r.flags |= 2048),
				Ei(9, r0.bind(null, r, o, n, t), void 0, null),
				n
			);
		},
		useId: function () {
			var e = Tt(),
				t = Le.identifierPrefix;
			if (ue) {
				var n = At,
					r = Dt;
				(n = (r & ~(1 << (32 - xt(r) - 1))).toString(32) + n),
					(t = ":" + t + "R" + n),
					(n = Si++),
					0 < n && (t += "H" + n.toString(32)),
					(t += ":");
			} else (n = i1++), (t = ":" + t + "r" + n.toString(32) + ":");
			return (e.memoizedState = t);
		},
		unstable_isNewReconciler: !1,
	},
	u1 = {
		readContext: dt,
		useCallback: f0,
		useContext: dt,
		useEffect: nu,
		useImperativeHandle: d0,
		useInsertionEffect: a0,
		useLayoutEffect: u0,
		useMemo: p0,
		useReducer: Zl,
		useRef: s0,
		useState: function () {
			return Zl(Ci);
		},
		useDebugValue: ru,
		useDeferredValue: function (e) {
			var t = ft();
			return h0(t, ke.memoizedState, e);
		},
		useTransition: function () {
			var e = Zl(Ci)[0],
				t = ft().memoizedState;
			return [e, t];
		},
		useMutableSource: e0,
		useSyncExternalStore: t0,
		useId: m0,
		unstable_isNewReconciler: !1,
	},
	c1 = {
		readContext: dt,
		useCallback: f0,
		useContext: dt,
		useEffect: nu,
		useImperativeHandle: d0,
		useInsertionEffect: a0,
		useLayoutEffect: u0,
		useMemo: p0,
		useReducer: ql,
		useRef: s0,
		useState: function () {
			return ql(Ci);
		},
		useDebugValue: ru,
		useDeferredValue: function (e) {
			var t = ft();
			return ke === null ? (t.memoizedState = e) : h0(t, ke.memoizedState, e);
		},
		useTransition: function () {
			var e = ql(Ci)[0],
				t = ft().memoizedState;
			return [e, t];
		},
		useMutableSource: e0,
		useSyncExternalStore: t0,
		useId: m0,
		unstable_isNewReconciler: !1,
	};
function vr(e, t) {
	try {
		var n = "",
			r = t;
		do (n += F2(r)), (r = r.return);
		while (r);
		var i = n;
	} catch (o) {
		i =
			`
Error generating stack: ` +
			o.message +
			`
` +
			o.stack;
	}
	return { value: e, source: t, stack: i, digest: null };
}
function Jl(e, t, n) {
	return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Qs(e, t) {
	try {
		console.error(t.value);
	} catch (n) {
		setTimeout(function () {
			throw n;
		});
	}
}
var d1 = typeof WeakMap == "function" ? WeakMap : Map;
function y0(e, t, n) {
	(n = Bt(-1, n)), (n.tag = 3), (n.payload = { element: null });
	var r = t.value;
	return (
		(n.callback = function () {
			$o || (($o = !0), (ia = r)), Qs(e, t);
		}),
		n
	);
}
function x0(e, t, n) {
	(n = Bt(-1, n)), (n.tag = 3);
	var r = e.type.getDerivedStateFromError;
	if (typeof r == "function") {
		var i = t.value;
		(n.payload = function () {
			return r(i);
		}),
			(n.callback = function () {
				Qs(e, t);
			});
	}
	var o = e.stateNode;
	return (
		o !== null &&
			typeof o.componentDidCatch == "function" &&
			(n.callback = function () {
				Qs(e, t), typeof r != "function" && (fn === null ? (fn = new Set([this])) : fn.add(this));
				var l = t.stack;
				this.componentDidCatch(t.value, { componentStack: l !== null ? l : "" });
			}),
		n
	);
}
function Nc(e, t, n) {
	var r = e.pingCache;
	if (r === null) {
		r = e.pingCache = new d1();
		var i = new Set();
		r.set(t, i);
	} else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
	i.has(n) || (i.add(n), (e = T1.bind(null, e, t, n)), t.then(e, e));
}
function Rc(e) {
	do {
		var t;
		if (
			((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
			t)
		)
			return e;
		e = e.return;
	} while (e !== null);
	return null;
}
function _c(e, t, n, r, i) {
	return e.mode & 1
		? ((e.flags |= 65536), (e.lanes = i), e)
		: (e === t
				? (e.flags |= 65536)
				: ((e.flags |= 128),
				  (n.flags |= 131072),
				  (n.flags &= -52805),
				  n.tag === 1 &&
						(n.alternate === null ? (n.tag = 17) : ((t = Bt(-1, 1)), (t.tag = 2), dn(n, t, 1))),
				  (n.lanes |= 1)),
		  e);
}
var f1 = Gt.ReactCurrentOwner,
	He = !1;
function Fe(e, t, n, r) {
	t.child = e === null ? qf(t, null, n, r) : mr(t, e.child, n, r);
}
function jc(e, t, n, r, i) {
	n = n.render;
	var o = t.ref;
	return (
		ar(t, i),
		(r = eu(e, t, n, r, o, i)),
		(n = tu()),
		e !== null && !He
			? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), Wt(e, t, i))
			: (ue && n && Ua(t), (t.flags |= 1), Fe(e, t, r, i), t.child)
	);
}
function Oc(e, t, n, r, i) {
	if (e === null) {
		var o = n.type;
		return typeof o == "function" &&
			!du(o) &&
			o.defaultProps === void 0 &&
			n.compare === null &&
			n.defaultProps === void 0
			? ((t.tag = 15), (t.type = o), S0(e, t, o, r, i))
			: ((e = yo(n.type, null, r, t, t.mode, i)), (e.ref = t.ref), (e.return = t), (t.child = e));
	}
	if (((o = e.child), !(e.lanes & i))) {
		var l = o.memoizedProps;
		if (((n = n.compare), (n = n !== null ? n : mi), n(l, r) && e.ref === t.ref))
			return Wt(e, t, i);
	}
	return (t.flags |= 1), (e = hn(o, r)), (e.ref = t.ref), (e.return = t), (t.child = e);
}
function S0(e, t, n, r, i) {
	if (e !== null) {
		var o = e.memoizedProps;
		if (mi(o, r) && e.ref === t.ref)
			if (((He = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0)) e.flags & 131072 && (He = !0);
			else return (t.lanes = e.lanes), Wt(e, t, i);
	}
	return Ys(e, t, n, r, i);
}
function C0(e, t, n) {
	var r = t.pendingProps,
		i = r.children,
		o = e !== null ? e.memoizedState : null;
	if (r.mode === "hidden")
		if (!(t.mode & 1))
			(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
				le(nr, Ye),
				(Ye |= n);
		else {
			if (!(n & 1073741824))
				return (
					(e = o !== null ? o.baseLanes | n : n),
					(t.lanes = t.childLanes = 1073741824),
					(t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
					(t.updateQueue = null),
					le(nr, Ye),
					(Ye |= e),
					null
				);
			(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
				(r = o !== null ? o.baseLanes : n),
				le(nr, Ye),
				(Ye |= r);
		}
	else
		o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n), le(nr, Ye), (Ye |= r);
	return Fe(e, t, i, n), t.child;
}
function E0(e, t) {
	var n = t.ref;
	((e === null && n !== null) || (e !== null && e.ref !== n)) &&
		((t.flags |= 512), (t.flags |= 2097152));
}
function Ys(e, t, n, r, i) {
	var o = We(n) ? _n : Ie.current;
	return (
		(o = pr(t, o)),
		ar(t, i),
		(n = eu(e, t, n, r, o, i)),
		(r = tu()),
		e !== null && !He
			? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), Wt(e, t, i))
			: (ue && r && Ua(t), (t.flags |= 1), Fe(e, t, n, i), t.child)
	);
}
function zc(e, t, n, r, i) {
	if (We(n)) {
		var o = !0;
		zo(t);
	} else o = !1;
	if ((ar(t, i), t.stateNode === null)) go(e, t), Xf(t, n, r), Ks(t, n, r, i), (r = !0);
	else if (e === null) {
		var l = t.stateNode,
			a = t.memoizedProps;
		l.props = a;
		var s = l.context,
			u = n.contextType;
		typeof u == "object" && u !== null
			? (u = dt(u))
			: ((u = We(n) ? _n : Ie.current), (u = pr(t, u)));
		var c = n.getDerivedStateFromProps,
			d = typeof c == "function" || typeof l.getSnapshotBeforeUpdate == "function";
		d ||
			(typeof l.UNSAFE_componentWillReceiveProps != "function" &&
				typeof l.componentWillReceiveProps != "function") ||
			((a !== r || s !== u) && Tc(t, l, r, u)),
			(en = !1);
		var p = t.memoizedState;
		(l.state = p),
			Bo(t, r, l, i),
			(s = t.memoizedState),
			a !== r || p !== s || $e.current || en
				? (typeof c == "function" && (Gs(t, n, c, r), (s = t.memoizedState)),
				  (a = en || kc(t, n, a, r, p, s, u))
						? (d ||
								(typeof l.UNSAFE_componentWillMount != "function" &&
									typeof l.componentWillMount != "function") ||
								(typeof l.componentWillMount == "function" && l.componentWillMount(),
								typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()),
						  typeof l.componentDidMount == "function" && (t.flags |= 4194308))
						: (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
						  (t.memoizedProps = r),
						  (t.memoizedState = s)),
				  (l.props = r),
				  (l.state = s),
				  (l.context = u),
				  (r = a))
				: (typeof l.componentDidMount == "function" && (t.flags |= 4194308), (r = !1));
	} else {
		(l = t.stateNode),
			Qf(e, t),
			(a = t.memoizedProps),
			(u = t.type === t.elementType ? a : mt(t.type, a)),
			(l.props = u),
			(d = t.pendingProps),
			(p = l.context),
			(s = n.contextType),
			typeof s == "object" && s !== null
				? (s = dt(s))
				: ((s = We(n) ? _n : Ie.current), (s = pr(t, s)));
		var y = n.getDerivedStateFromProps;
		(c = typeof y == "function" || typeof l.getSnapshotBeforeUpdate == "function") ||
			(typeof l.UNSAFE_componentWillReceiveProps != "function" &&
				typeof l.componentWillReceiveProps != "function") ||
			((a !== d || p !== s) && Tc(t, l, r, s)),
			(en = !1),
			(p = t.memoizedState),
			(l.state = p),
			Bo(t, r, l, i);
		var g = t.memoizedState;
		a !== d || p !== g || $e.current || en
			? (typeof y == "function" && (Gs(t, n, y, r), (g = t.memoizedState)),
			  (u = en || kc(t, n, u, r, p, g, s) || !1)
					? (c ||
							(typeof l.UNSAFE_componentWillUpdate != "function" &&
								typeof l.componentWillUpdate != "function") ||
							(typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, g, s),
							typeof l.UNSAFE_componentWillUpdate == "function" &&
								l.UNSAFE_componentWillUpdate(r, g, s)),
					  typeof l.componentDidUpdate == "function" && (t.flags |= 4),
					  typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
					: (typeof l.componentDidUpdate != "function" ||
							(a === e.memoizedProps && p === e.memoizedState) ||
							(t.flags |= 4),
					  typeof l.getSnapshotBeforeUpdate != "function" ||
							(a === e.memoizedProps && p === e.memoizedState) ||
							(t.flags |= 1024),
					  (t.memoizedProps = r),
					  (t.memoizedState = g)),
			  (l.props = r),
			  (l.state = g),
			  (l.context = s),
			  (r = u))
			: (typeof l.componentDidUpdate != "function" ||
					(a === e.memoizedProps && p === e.memoizedState) ||
					(t.flags |= 4),
			  typeof l.getSnapshotBeforeUpdate != "function" ||
					(a === e.memoizedProps && p === e.memoizedState) ||
					(t.flags |= 1024),
			  (r = !1));
	}
	return Xs(e, t, n, r, o, i);
}
function Xs(e, t, n, r, i, o) {
	E0(e, t);
	var l = (t.flags & 128) !== 0;
	if (!r && !l) return i && yc(t, n, !1), Wt(e, t, o);
	(r = t.stateNode), (f1.current = t);
	var a = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
	return (
		(t.flags |= 1),
		e !== null && l
			? ((t.child = mr(t, e.child, null, o)), (t.child = mr(t, null, a, o)))
			: Fe(e, t, a, o),
		(t.memoizedState = r.state),
		i && yc(t, n, !0),
		t.child
	);
}
function k0(e) {
	var t = e.stateNode;
	t.pendingContext
		? wc(e, t.pendingContext, t.pendingContext !== t.context)
		: t.context && wc(e, t.context, !1),
		Xa(e, t.containerInfo);
}
function Ic(e, t, n, r, i) {
	return hr(), $a(i), (t.flags |= 256), Fe(e, t, n, r), t.child;
}
var Zs = { dehydrated: null, treeContext: null, retryLane: 0 };
function qs(e) {
	return { baseLanes: e, cachePool: null, transitions: null };
}
function T0(e, t, n) {
	var r = t.pendingProps,
		i = de.current,
		o = !1,
		l = (t.flags & 128) !== 0,
		a;
	if (
		((a = l) || (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
		a ? ((o = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (i |= 1),
		le(de, i & 1),
		e === null)
	)
		return (
			$s(t),
			(e = t.memoizedState),
			e !== null && ((e = e.dehydrated), e !== null)
				? (t.mode & 1 ? (e.data === "$!" ? (t.lanes = 8) : (t.lanes = 1073741824)) : (t.lanes = 1),
				  null)
				: ((l = r.children),
				  (e = r.fallback),
				  o
						? ((r = t.mode),
						  (o = t.child),
						  (l = { mode: "hidden", children: l }),
						  !(r & 1) && o !== null
								? ((o.childLanes = 0), (o.pendingProps = l))
								: (o = fl(l, r, 0, null)),
						  (e = Rn(e, r, n, null)),
						  (o.return = t),
						  (e.return = t),
						  (o.sibling = e),
						  (t.child = o),
						  (t.child.memoizedState = qs(n)),
						  (t.memoizedState = Zs),
						  e)
						: iu(t, l))
		);
	if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
		return p1(e, t, l, r, a, i, n);
	if (o) {
		(o = r.fallback), (l = t.mode), (i = e.child), (a = i.sibling);
		var s = { mode: "hidden", children: r.children };
		return (
			!(l & 1) && t.child !== i
				? ((r = t.child), (r.childLanes = 0), (r.pendingProps = s), (t.deletions = null))
				: ((r = hn(i, s)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
			a !== null ? (o = hn(a, o)) : ((o = Rn(o, l, n, null)), (o.flags |= 2)),
			(o.return = t),
			(r.return = t),
			(r.sibling = o),
			(t.child = r),
			(r = o),
			(o = t.child),
			(l = e.child.memoizedState),
			(l =
				l === null
					? qs(n)
					: { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }),
			(o.memoizedState = l),
			(o.childLanes = e.childLanes & ~n),
			(t.memoizedState = Zs),
			r
		);
	}
	return (
		(o = e.child),
		(e = o.sibling),
		(r = hn(o, { mode: "visible", children: r.children })),
		!(t.mode & 1) && (r.lanes = n),
		(r.return = t),
		(r.sibling = null),
		e !== null &&
			((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
		(t.child = r),
		(t.memoizedState = null),
		r
	);
}
function iu(e, t) {
	return (t = fl({ mode: "visible", children: t }, e.mode, 0, null)), (t.return = e), (e.child = t);
}
function eo(e, t, n, r) {
	return (
		r !== null && $a(r),
		mr(t, e.child, null, n),
		(e = iu(t, t.pendingProps.children)),
		(e.flags |= 2),
		(t.memoizedState = null),
		e
	);
}
function p1(e, t, n, r, i, o, l) {
	if (n)
		return t.flags & 256
			? ((t.flags &= -257), (r = Jl(Error(O(422)))), eo(e, t, l, r))
			: t.memoizedState !== null
			  ? ((t.child = e.child), (t.flags |= 128), null)
			  : ((o = r.fallback),
			    (i = t.mode),
			    (r = fl({ mode: "visible", children: r.children }, i, 0, null)),
			    (o = Rn(o, i, l, null)),
			    (o.flags |= 2),
			    (r.return = t),
			    (o.return = t),
			    (r.sibling = o),
			    (t.child = r),
			    t.mode & 1 && mr(t, e.child, null, l),
			    (t.child.memoizedState = qs(l)),
			    (t.memoizedState = Zs),
			    o);
	if (!(t.mode & 1)) return eo(e, t, l, null);
	if (i.data === "$!") {
		if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
		return (r = a), (o = Error(O(419))), (r = Jl(o, r, void 0)), eo(e, t, l, r);
	}
	if (((a = (l & e.childLanes) !== 0), He || a)) {
		if (((r = Le), r !== null)) {
			switch (l & -l) {
				case 4:
					i = 2;
					break;
				case 16:
					i = 8;
					break;
				case 64:
				case 128:
				case 256:
				case 512:
				case 1024:
				case 2048:
				case 4096:
				case 8192:
				case 16384:
				case 32768:
				case 65536:
				case 131072:
				case 262144:
				case 524288:
				case 1048576:
				case 2097152:
				case 4194304:
				case 8388608:
				case 16777216:
				case 33554432:
				case 67108864:
					i = 32;
					break;
				case 536870912:
					i = 268435456;
					break;
				default:
					i = 0;
			}
			(i = i & (r.suspendedLanes | l) ? 0 : i),
				i !== 0 && i !== o.retryLane && ((o.retryLane = i), $t(e, i), St(r, e, i, -1));
		}
		return cu(), (r = Jl(Error(O(421)))), eo(e, t, l, r);
	}
	return i.data === "$?"
		? ((t.flags |= 128), (t.child = e.child), (t = P1.bind(null, e)), (i._reactRetry = t), null)
		: ((e = o.treeContext),
		  (Ze = cn(i.nextSibling)),
		  (qe = t),
		  (ue = !0),
		  (yt = null),
		  e !== null &&
				((lt[st++] = Dt),
				(lt[st++] = At),
				(lt[st++] = jn),
				(Dt = e.id),
				(At = e.overflow),
				(jn = t)),
		  (t = iu(t, r.children)),
		  (t.flags |= 4096),
		  t);
}
function Dc(e, t, n) {
	e.lanes |= t;
	var r = e.alternate;
	r !== null && (r.lanes |= t), Ws(e.return, t, n);
}
function es(e, t, n, r, i) {
	var o = e.memoizedState;
	o === null
		? (e.memoizedState = {
				isBackwards: t,
				rendering: null,
				renderingStartTime: 0,
				last: r,
				tail: n,
				tailMode: i,
		  })
		: ((o.isBackwards = t),
		  (o.rendering = null),
		  (o.renderingStartTime = 0),
		  (o.last = r),
		  (o.tail = n),
		  (o.tailMode = i));
}
function P0(e, t, n) {
	var r = t.pendingProps,
		i = r.revealOrder,
		o = r.tail;
	if ((Fe(e, t, r.children, n), (r = de.current), r & 2)) (r = (r & 1) | 2), (t.flags |= 128);
	else {
		if (e !== null && e.flags & 128)
			e: for (e = t.child; e !== null; ) {
				if (e.tag === 13) e.memoizedState !== null && Dc(e, n, t);
				else if (e.tag === 19) Dc(e, n, t);
				else if (e.child !== null) {
					(e.child.return = e), (e = e.child);
					continue;
				}
				if (e === t) break e;
				for (; e.sibling === null; ) {
					if (e.return === null || e.return === t) break e;
					e = e.return;
				}
				(e.sibling.return = e.return), (e = e.sibling);
			}
		r &= 1;
	}
	if ((le(de, r), !(t.mode & 1))) t.memoizedState = null;
	else
		switch (i) {
			case "forwards":
				for (n = t.child, i = null; n !== null; )
					(e = n.alternate), e !== null && bo(e) === null && (i = n), (n = n.sibling);
				(n = i),
					n === null ? ((i = t.child), (t.child = null)) : ((i = n.sibling), (n.sibling = null)),
					es(t, !1, i, n, o);
				break;
			case "backwards":
				for (n = null, i = t.child, t.child = null; i !== null; ) {
					if (((e = i.alternate), e !== null && bo(e) === null)) {
						t.child = i;
						break;
					}
					(e = i.sibling), (i.sibling = n), (n = i), (i = e);
				}
				es(t, !0, n, null, o);
				break;
			case "together":
				es(t, !1, null, null, void 0);
				break;
			default:
				t.memoizedState = null;
		}
	return t.child;
}
function go(e, t) {
	!(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Wt(e, t, n) {
	if ((e !== null && (t.dependencies = e.dependencies), (zn |= t.lanes), !(n & t.childLanes)))
		return null;
	if (e !== null && t.child !== e.child) throw Error(O(153));
	if (t.child !== null) {
		for (e = t.child, n = hn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
			(e = e.sibling), (n = n.sibling = hn(e, e.pendingProps)), (n.return = t);
		n.sibling = null;
	}
	return t.child;
}
function h1(e, t, n) {
	switch (t.tag) {
		case 3:
			k0(t), hr();
			break;
		case 5:
			Jf(t);
			break;
		case 1:
			We(t.type) && zo(t);
			break;
		case 4:
			Xa(t, t.stateNode.containerInfo);
			break;
		case 10:
			var r = t.type._context,
				i = t.memoizedProps.value;
			le(Ao, r._currentValue), (r._currentValue = i);
			break;
		case 13:
			if (((r = t.memoizedState), r !== null))
				return r.dehydrated !== null
					? (le(de, de.current & 1), (t.flags |= 128), null)
					: n & t.child.childLanes
					  ? T0(e, t, n)
					  : (le(de, de.current & 1), (e = Wt(e, t, n)), e !== null ? e.sibling : null);
			le(de, de.current & 1);
			break;
		case 19:
			if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
				if (r) return P0(e, t, n);
				t.flags |= 128;
			}
			if (
				((i = t.memoizedState),
				i !== null && ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
				le(de, de.current),
				r)
			)
				break;
			return null;
		case 22:
		case 23:
			return (t.lanes = 0), C0(e, t, n);
	}
	return Wt(e, t, n);
}
var L0, Js, M0, N0;
L0 = function (e, t) {
	for (var n = t.child; n !== null; ) {
		if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
		else if (n.tag !== 4 && n.child !== null) {
			(n.child.return = n), (n = n.child);
			continue;
		}
		if (n === t) break;
		for (; n.sibling === null; ) {
			if (n.return === null || n.return === t) return;
			n = n.return;
		}
		(n.sibling.return = n.return), (n = n.sibling);
	}
};
Js = function () {};
M0 = function (e, t, n, r) {
	var i = e.memoizedProps;
	if (i !== r) {
		(e = t.stateNode), Ln(Nt.current);
		var o = null;
		switch (n) {
			case "input":
				(i = Ss(e, i)), (r = Ss(e, r)), (o = []);
				break;
			case "select":
				(i = pe({}, i, { value: void 0 })), (r = pe({}, r, { value: void 0 })), (o = []);
				break;
			case "textarea":
				(i = ks(e, i)), (r = ks(e, r)), (o = []);
				break;
			default:
				typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = jo);
		}
		Ps(n, r);
		var l;
		n = null;
		for (u in i)
			if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
				if (u === "style") {
					var a = i[u];
					for (l in a) a.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
				} else
					u !== "dangerouslySetInnerHTML" &&
						u !== "children" &&
						u !== "suppressContentEditableWarning" &&
						u !== "suppressHydrationWarning" &&
						u !== "autoFocus" &&
						(ai.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
		for (u in r) {
			var s = r[u];
			if (
				((a = i != null ? i[u] : void 0),
				r.hasOwnProperty(u) && s !== a && (s != null || a != null))
			)
				if (u === "style")
					if (a) {
						for (l in a)
							!a.hasOwnProperty(l) || (s && s.hasOwnProperty(l)) || (n || (n = {}), (n[l] = ""));
						for (l in s) s.hasOwnProperty(l) && a[l] !== s[l] && (n || (n = {}), (n[l] = s[l]));
					} else n || (o || (o = []), o.push(u, n)), (n = s);
				else
					u === "dangerouslySetInnerHTML"
						? ((s = s ? s.__html : void 0),
						  (a = a ? a.__html : void 0),
						  s != null && a !== s && (o = o || []).push(u, s))
						: u === "children"
						  ? (typeof s != "string" && typeof s != "number") || (o = o || []).push(u, "" + s)
						  : u !== "suppressContentEditableWarning" &&
						    u !== "suppressHydrationWarning" &&
						    (ai.hasOwnProperty(u)
									? (s != null && u === "onScroll" && se("scroll", e), o || a === s || (o = []))
									: (o = o || []).push(u, s));
		}
		n && (o = o || []).push("style", n);
		var u = o;
		(t.updateQueue = u) && (t.flags |= 4);
	}
};
N0 = function (e, t, n, r) {
	n !== r && (t.flags |= 4);
};
function Fr(e, t) {
	if (!ue)
		switch (e.tailMode) {
			case "hidden":
				t = e.tail;
				for (var n = null; t !== null; ) t.alternate !== null && (n = t), (t = t.sibling);
				n === null ? (e.tail = null) : (n.sibling = null);
				break;
			case "collapsed":
				n = e.tail;
				for (var r = null; n !== null; ) n.alternate !== null && (r = n), (n = n.sibling);
				r === null
					? t || e.tail === null
						? (e.tail = null)
						: (e.tail.sibling = null)
					: (r.sibling = null);
		}
}
function Oe(e) {
	var t = e.alternate !== null && e.alternate.child === e.child,
		n = 0,
		r = 0;
	if (t)
		for (var i = e.child; i !== null; )
			(n |= i.lanes | i.childLanes),
				(r |= i.subtreeFlags & 14680064),
				(r |= i.flags & 14680064),
				(i.return = e),
				(i = i.sibling);
	else
		for (i = e.child; i !== null; )
			(n |= i.lanes | i.childLanes),
				(r |= i.subtreeFlags),
				(r |= i.flags),
				(i.return = e),
				(i = i.sibling);
	return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function m1(e, t, n) {
	var r = t.pendingProps;
	switch ((Ha(t), t.tag)) {
		case 2:
		case 16:
		case 15:
		case 0:
		case 11:
		case 7:
		case 8:
		case 12:
		case 9:
		case 14:
			return Oe(t), null;
		case 1:
			return We(t.type) && Oo(), Oe(t), null;
		case 3:
			return (
				(r = t.stateNode),
				gr(),
				ae($e),
				ae(Ie),
				qa(),
				r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
				(e === null || e.child === null) &&
					(qi(t)
						? (t.flags |= 4)
						: e === null ||
						  (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
						  ((t.flags |= 1024), yt !== null && (sa(yt), (yt = null)))),
				Js(e, t),
				Oe(t),
				null
			);
		case 5:
			Za(t);
			var i = Ln(xi.current);
			if (((n = t.type), e !== null && t.stateNode != null))
				M0(e, t, n, r, i), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
			else {
				if (!r) {
					if (t.stateNode === null) throw Error(O(166));
					return Oe(t), null;
				}
				if (((e = Ln(Nt.current)), qi(t))) {
					(r = t.stateNode), (n = t.type);
					var o = t.memoizedProps;
					switch (((r[Pt] = t), (r[wi] = o), (e = (t.mode & 1) !== 0), n)) {
						case "dialog":
							se("cancel", r), se("close", r);
							break;
						case "iframe":
						case "object":
						case "embed":
							se("load", r);
							break;
						case "video":
						case "audio":
							for (i = 0; i < Yr.length; i++) se(Yr[i], r);
							break;
						case "source":
							se("error", r);
							break;
						case "img":
						case "image":
						case "link":
							se("error", r), se("load", r);
							break;
						case "details":
							se("toggle", r);
							break;
						case "input":
							Wu(r, o), se("invalid", r);
							break;
						case "select":
							(r._wrapperState = { wasMultiple: !!o.multiple }), se("invalid", r);
							break;
						case "textarea":
							Ku(r, o), se("invalid", r);
					}
					Ps(n, o), (i = null);
					for (var l in o)
						if (o.hasOwnProperty(l)) {
							var a = o[l];
							l === "children"
								? typeof a == "string"
									? r.textContent !== a &&
									  (o.suppressHydrationWarning !== !0 && Zi(r.textContent, a, e),
									  (i = ["children", a]))
									: typeof a == "number" &&
									  r.textContent !== "" + a &&
									  (o.suppressHydrationWarning !== !0 && Zi(r.textContent, a, e),
									  (i = ["children", "" + a]))
								: ai.hasOwnProperty(l) && a != null && l === "onScroll" && se("scroll", r);
						}
					switch (n) {
						case "input":
							Hi(r), Gu(r, o, !0);
							break;
						case "textarea":
							Hi(r), Qu(r);
							break;
						case "select":
						case "option":
							break;
						default:
							typeof o.onClick == "function" && (r.onclick = jo);
					}
					(r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
				} else {
					(l = i.nodeType === 9 ? i : i.ownerDocument),
						e === "http://www.w3.org/1999/xhtml" && (e = tf(n)),
						e === "http://www.w3.org/1999/xhtml"
							? n === "script"
								? ((e = l.createElement("div")),
								  (e.innerHTML = "<script></script>"),
								  (e = e.removeChild(e.firstChild)))
								: typeof r.is == "string"
								  ? (e = l.createElement(n, { is: r.is }))
								  : ((e = l.createElement(n)),
								    n === "select" &&
											((l = e), r.multiple ? (l.multiple = !0) : r.size && (l.size = r.size)))
							: (e = l.createElementNS(e, n)),
						(e[Pt] = t),
						(e[wi] = r),
						L0(e, t, !1, !1),
						(t.stateNode = e);
					e: {
						switch (((l = Ls(n, r)), n)) {
							case "dialog":
								se("cancel", e), se("close", e), (i = r);
								break;
							case "iframe":
							case "object":
							case "embed":
								se("load", e), (i = r);
								break;
							case "video":
							case "audio":
								for (i = 0; i < Yr.length; i++) se(Yr[i], e);
								i = r;
								break;
							case "source":
								se("error", e), (i = r);
								break;
							case "img":
							case "image":
							case "link":
								se("error", e), se("load", e), (i = r);
								break;
							case "details":
								se("toggle", e), (i = r);
								break;
							case "input":
								Wu(e, r), (i = Ss(e, r)), se("invalid", e);
								break;
							case "option":
								i = r;
								break;
							case "select":
								(e._wrapperState = { wasMultiple: !!r.multiple }),
									(i = pe({}, r, { value: void 0 })),
									se("invalid", e);
								break;
							case "textarea":
								Ku(e, r), (i = ks(e, r)), se("invalid", e);
								break;
							default:
								i = r;
						}
						Ps(n, i), (a = i);
						for (o in a)
							if (a.hasOwnProperty(o)) {
								var s = a[o];
								o === "style"
									? of(e, s)
									: o === "dangerouslySetInnerHTML"
									  ? ((s = s ? s.__html : void 0), s != null && nf(e, s))
									  : o === "children"
									    ? typeof s == "string"
												? (n !== "textarea" || s !== "") && ui(e, s)
												: typeof s == "number" && ui(e, "" + s)
									    : o !== "suppressContentEditableWarning" &&
									      o !== "suppressHydrationWarning" &&
									      o !== "autoFocus" &&
									      (ai.hasOwnProperty(o)
													? s != null && o === "onScroll" && se("scroll", e)
													: s != null && Ma(e, o, s, l));
							}
						switch (n) {
							case "input":
								Hi(e), Gu(e, r, !1);
								break;
							case "textarea":
								Hi(e), Qu(e);
								break;
							case "option":
								r.value != null && e.setAttribute("value", "" + mn(r.value));
								break;
							case "select":
								(e.multiple = !!r.multiple),
									(o = r.value),
									o != null
										? ir(e, !!r.multiple, o, !1)
										: r.defaultValue != null && ir(e, !!r.multiple, r.defaultValue, !0);
								break;
							default:
								typeof i.onClick == "function" && (e.onclick = jo);
						}
						switch (n) {
							case "button":
							case "input":
							case "select":
							case "textarea":
								r = !!r.autoFocus;
								break e;
							case "img":
								r = !0;
								break e;
							default:
								r = !1;
						}
					}
					r && (t.flags |= 4);
				}
				t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
			}
			return Oe(t), null;
		case 6:
			if (e && t.stateNode != null) N0(e, t, e.memoizedProps, r);
			else {
				if (typeof r != "string" && t.stateNode === null) throw Error(O(166));
				if (((n = Ln(xi.current)), Ln(Nt.current), qi(t))) {
					if (
						((r = t.stateNode),
						(n = t.memoizedProps),
						(r[Pt] = t),
						(o = r.nodeValue !== n) && ((e = qe), e !== null))
					)
						switch (e.tag) {
							case 3:
								Zi(r.nodeValue, n, (e.mode & 1) !== 0);
								break;
							case 5:
								e.memoizedProps.suppressHydrationWarning !== !0 &&
									Zi(r.nodeValue, n, (e.mode & 1) !== 0);
						}
					o && (t.flags |= 4);
				} else
					(r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
						(r[Pt] = t),
						(t.stateNode = r);
			}
			return Oe(t), null;
		case 13:
			if (
				(ae(de),
				(r = t.memoizedState),
				e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
			) {
				if (ue && Ze !== null && t.mode & 1 && !(t.flags & 128))
					Gf(), hr(), (t.flags |= 98560), (o = !1);
				else if (((o = qi(t)), r !== null && r.dehydrated !== null)) {
					if (e === null) {
						if (!o) throw Error(O(318));
						if (((o = t.memoizedState), (o = o !== null ? o.dehydrated : null), !o))
							throw Error(O(317));
						o[Pt] = t;
					} else hr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
					Oe(t), (o = !1);
				} else yt !== null && (sa(yt), (yt = null)), (o = !0);
				if (!o) return t.flags & 65536 ? t : null;
			}
			return t.flags & 128
				? ((t.lanes = n), t)
				: ((r = r !== null),
				  r !== (e !== null && e.memoizedState !== null) &&
						r &&
						((t.child.flags |= 8192),
						t.mode & 1 && (e === null || de.current & 1 ? Te === 0 && (Te = 3) : cu())),
				  t.updateQueue !== null && (t.flags |= 4),
				  Oe(t),
				  null);
		case 4:
			return gr(), Js(e, t), e === null && gi(t.stateNode.containerInfo), Oe(t), null;
		case 10:
			return Ka(t.type._context), Oe(t), null;
		case 17:
			return We(t.type) && Oo(), Oe(t), null;
		case 19:
			if ((ae(de), (o = t.memoizedState), o === null)) return Oe(t), null;
			if (((r = (t.flags & 128) !== 0), (l = o.rendering), l === null))
				if (r) Fr(o, !1);
				else {
					if (Te !== 0 || (e !== null && e.flags & 128))
						for (e = t.child; e !== null; ) {
							if (((l = bo(e)), l !== null)) {
								for (
									t.flags |= 128,
										Fr(o, !1),
										r = l.updateQueue,
										r !== null && ((t.updateQueue = r), (t.flags |= 4)),
										t.subtreeFlags = 0,
										r = n,
										n = t.child;
									n !== null;

								)
									(o = n),
										(e = r),
										(o.flags &= 14680066),
										(l = o.alternate),
										l === null
											? ((o.childLanes = 0),
											  (o.lanes = e),
											  (o.child = null),
											  (o.subtreeFlags = 0),
											  (o.memoizedProps = null),
											  (o.memoizedState = null),
											  (o.updateQueue = null),
											  (o.dependencies = null),
											  (o.stateNode = null))
											: ((o.childLanes = l.childLanes),
											  (o.lanes = l.lanes),
											  (o.child = l.child),
											  (o.subtreeFlags = 0),
											  (o.deletions = null),
											  (o.memoizedProps = l.memoizedProps),
											  (o.memoizedState = l.memoizedState),
											  (o.updateQueue = l.updateQueue),
											  (o.type = l.type),
											  (e = l.dependencies),
											  (o.dependencies =
													e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
										(n = n.sibling);
								return le(de, (de.current & 1) | 2), t.child;
							}
							e = e.sibling;
						}
					o.tail !== null &&
						ye() > wr &&
						((t.flags |= 128), (r = !0), Fr(o, !1), (t.lanes = 4194304));
				}
			else {
				if (!r)
					if (((e = bo(l)), e !== null)) {
						if (
							((t.flags |= 128),
							(r = !0),
							(n = e.updateQueue),
							n !== null && ((t.updateQueue = n), (t.flags |= 4)),
							Fr(o, !0),
							o.tail === null && o.tailMode === "hidden" && !l.alternate && !ue)
						)
							return Oe(t), null;
					} else
						2 * ye() - o.renderingStartTime > wr &&
							n !== 1073741824 &&
							((t.flags |= 128), (r = !0), Fr(o, !1), (t.lanes = 4194304));
				o.isBackwards
					? ((l.sibling = t.child), (t.child = l))
					: ((n = o.last), n !== null ? (n.sibling = l) : (t.child = l), (o.last = l));
			}
			return o.tail !== null
				? ((t = o.tail),
				  (o.rendering = t),
				  (o.tail = t.sibling),
				  (o.renderingStartTime = ye()),
				  (t.sibling = null),
				  (n = de.current),
				  le(de, r ? (n & 1) | 2 : n & 1),
				  t)
				: (Oe(t), null);
		case 22:
		case 23:
			return (
				uu(),
				(r = t.memoizedState !== null),
				e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
				r && t.mode & 1
					? Ye & 1073741824 && (Oe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
					: Oe(t),
				null
			);
		case 24:
			return null;
		case 25:
			return null;
	}
	throw Error(O(156, t.tag));
}
function g1(e, t) {
	switch ((Ha(t), t.tag)) {
		case 1:
			return (
				We(t.type) && Oo(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 3:
			return (
				gr(),
				ae($e),
				ae(Ie),
				qa(),
				(e = t.flags),
				e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 5:
			return Za(t), null;
		case 13:
			if ((ae(de), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
				if (t.alternate === null) throw Error(O(340));
				hr();
			}
			return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
		case 19:
			return ae(de), null;
		case 4:
			return gr(), null;
		case 10:
			return Ka(t.type._context), null;
		case 22:
		case 23:
			return uu(), null;
		case 24:
			return null;
		default:
			return null;
	}
}
var to = !1,
	ze = !1,
	v1 = typeof WeakSet == "function" ? WeakSet : Set,
	B = null;
function tr(e, t) {
	var n = e.ref;
	if (n !== null)
		if (typeof n == "function")
			try {
				n(null);
			} catch (r) {
				he(e, t, r);
			}
		else n.current = null;
}
function ea(e, t, n) {
	try {
		n();
	} catch (r) {
		he(e, t, r);
	}
}
var Ac = !1;
function w1(e, t) {
	if (((As = No), (e = Of()), Va(e))) {
		if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
		else
			e: {
				n = ((n = e.ownerDocument) && n.defaultView) || window;
				var r = n.getSelection && n.getSelection();
				if (r && r.rangeCount !== 0) {
					n = r.anchorNode;
					var i = r.anchorOffset,
						o = r.focusNode;
					r = r.focusOffset;
					try {
						n.nodeType, o.nodeType;
					} catch {
						n = null;
						break e;
					}
					var l = 0,
						a = -1,
						s = -1,
						u = 0,
						c = 0,
						d = e,
						p = null;
					t: for (;;) {
						for (
							var y;
							d !== n || (i !== 0 && d.nodeType !== 3) || (a = l + i),
								d !== o || (r !== 0 && d.nodeType !== 3) || (s = l + r),
								d.nodeType === 3 && (l += d.nodeValue.length),
								(y = d.firstChild) !== null;

						)
							(p = d), (d = y);
						for (;;) {
							if (d === e) break t;
							if (
								(p === n && ++u === i && (a = l),
								p === o && ++c === r && (s = l),
								(y = d.nextSibling) !== null)
							)
								break;
							(d = p), (p = d.parentNode);
						}
						d = y;
					}
					n = a === -1 || s === -1 ? null : { start: a, end: s };
				} else n = null;
			}
		n = n || { start: 0, end: 0 };
	} else n = null;
	for (Fs = { focusedElem: e, selectionRange: n }, No = !1, B = t; B !== null; )
		if (((t = B), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
			(e.return = t), (B = e);
		else
			for (; B !== null; ) {
				t = B;
				try {
					var g = t.alternate;
					if (t.flags & 1024)
						switch (t.tag) {
							case 0:
							case 11:
							case 15:
								break;
							case 1:
								if (g !== null) {
									var w = g.memoizedProps,
										C = g.memoizedState,
										f = t.stateNode,
										h = f.getSnapshotBeforeUpdate(t.elementType === t.type ? w : mt(t.type, w), C);
									f.__reactInternalSnapshotBeforeUpdate = h;
								}
								break;
							case 3:
								var v = t.stateNode.containerInfo;
								v.nodeType === 1
									? (v.textContent = "")
									: v.nodeType === 9 && v.documentElement && v.removeChild(v.documentElement);
								break;
							case 5:
							case 6:
							case 4:
							case 17:
								break;
							default:
								throw Error(O(163));
						}
				} catch (m) {
					he(t, t.return, m);
				}
				if (((e = t.sibling), e !== null)) {
					(e.return = t.return), (B = e);
					break;
				}
				B = t.return;
			}
	return (g = Ac), (Ac = !1), g;
}
function ni(e, t, n) {
	var r = t.updateQueue;
	if (((r = r !== null ? r.lastEffect : null), r !== null)) {
		var i = (r = r.next);
		do {
			if ((i.tag & e) === e) {
				var o = i.destroy;
				(i.destroy = void 0), o !== void 0 && ea(t, n, o);
			}
			i = i.next;
		} while (i !== r);
	}
}
function cl(e, t) {
	if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
		var n = (t = t.next);
		do {
			if ((n.tag & e) === e) {
				var r = n.create;
				n.destroy = r();
			}
			n = n.next;
		} while (n !== t);
	}
}
function ta(e) {
	var t = e.ref;
	if (t !== null) {
		var n = e.stateNode;
		switch (e.tag) {
			case 5:
				e = n;
				break;
			default:
				e = n;
		}
		typeof t == "function" ? t(e) : (t.current = e);
	}
}
function R0(e) {
	var t = e.alternate;
	t !== null && ((e.alternate = null), R0(t)),
		(e.child = null),
		(e.deletions = null),
		(e.sibling = null),
		e.tag === 5 &&
			((t = e.stateNode),
			t !== null && (delete t[Pt], delete t[wi], delete t[Vs], delete t[e1], delete t[t1])),
		(e.stateNode = null),
		(e.return = null),
		(e.dependencies = null),
		(e.memoizedProps = null),
		(e.memoizedState = null),
		(e.pendingProps = null),
		(e.stateNode = null),
		(e.updateQueue = null);
}
function _0(e) {
	return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Fc(e) {
	e: for (;;) {
		for (; e.sibling === null; ) {
			if (e.return === null || _0(e.return)) return null;
			e = e.return;
		}
		for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
			if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
			(e.child.return = e), (e = e.child);
		}
		if (!(e.flags & 2)) return e.stateNode;
	}
}
function na(e, t, n) {
	var r = e.tag;
	if (r === 5 || r === 6)
		(e = e.stateNode),
			t
				? n.nodeType === 8
					? n.parentNode.insertBefore(e, t)
					: n.insertBefore(e, t)
				: (n.nodeType === 8
						? ((t = n.parentNode), t.insertBefore(e, n))
						: ((t = n), t.appendChild(e)),
				  (n = n._reactRootContainer),
				  n != null || t.onclick !== null || (t.onclick = jo));
	else if (r !== 4 && ((e = e.child), e !== null))
		for (na(e, t, n), e = e.sibling; e !== null; ) na(e, t, n), (e = e.sibling);
}
function ra(e, t, n) {
	var r = e.tag;
	if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
	else if (r !== 4 && ((e = e.child), e !== null))
		for (ra(e, t, n), e = e.sibling; e !== null; ) ra(e, t, n), (e = e.sibling);
}
var Ne = null,
	vt = !1;
function Xt(e, t, n) {
	for (n = n.child; n !== null; ) j0(e, t, n), (n = n.sibling);
}
function j0(e, t, n) {
	if (Mt && typeof Mt.onCommitFiberUnmount == "function")
		try {
			Mt.onCommitFiberUnmount(nl, n);
		} catch {}
	switch (n.tag) {
		case 5:
			ze || tr(n, t);
		case 6:
			var r = Ne,
				i = vt;
			(Ne = null),
				Xt(e, t, n),
				(Ne = r),
				(vt = i),
				Ne !== null &&
					(vt
						? ((e = Ne),
						  (n = n.stateNode),
						  e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
						: Ne.removeChild(n.stateNode));
			break;
		case 18:
			Ne !== null &&
				(vt
					? ((e = Ne),
					  (n = n.stateNode),
					  e.nodeType === 8 ? Kl(e.parentNode, n) : e.nodeType === 1 && Kl(e, n),
					  pi(e))
					: Kl(Ne, n.stateNode));
			break;
		case 4:
			(r = Ne),
				(i = vt),
				(Ne = n.stateNode.containerInfo),
				(vt = !0),
				Xt(e, t, n),
				(Ne = r),
				(vt = i);
			break;
		case 0:
		case 11:
		case 14:
		case 15:
			if (!ze && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
				i = r = r.next;
				do {
					var o = i,
						l = o.destroy;
					(o = o.tag), l !== void 0 && (o & 2 || o & 4) && ea(n, t, l), (i = i.next);
				} while (i !== r);
			}
			Xt(e, t, n);
			break;
		case 1:
			if (!ze && (tr(n, t), (r = n.stateNode), typeof r.componentWillUnmount == "function"))
				try {
					(r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount();
				} catch (a) {
					he(n, t, a);
				}
			Xt(e, t, n);
			break;
		case 21:
			Xt(e, t, n);
			break;
		case 22:
			n.mode & 1
				? ((ze = (r = ze) || n.memoizedState !== null), Xt(e, t, n), (ze = r))
				: Xt(e, t, n);
			break;
		default:
			Xt(e, t, n);
	}
}
function Bc(e) {
	var t = e.updateQueue;
	if (t !== null) {
		e.updateQueue = null;
		var n = e.stateNode;
		n === null && (n = e.stateNode = new v1()),
			t.forEach(function (r) {
				var i = L1.bind(null, e, r);
				n.has(r) || (n.add(r), r.then(i, i));
			});
	}
}
function ht(e, t) {
	var n = t.deletions;
	if (n !== null)
		for (var r = 0; r < n.length; r++) {
			var i = n[r];
			try {
				var o = e,
					l = t,
					a = l;
				e: for (; a !== null; ) {
					switch (a.tag) {
						case 5:
							(Ne = a.stateNode), (vt = !1);
							break e;
						case 3:
							(Ne = a.stateNode.containerInfo), (vt = !0);
							break e;
						case 4:
							(Ne = a.stateNode.containerInfo), (vt = !0);
							break e;
					}
					a = a.return;
				}
				if (Ne === null) throw Error(O(160));
				j0(o, l, i), (Ne = null), (vt = !1);
				var s = i.alternate;
				s !== null && (s.return = null), (i.return = null);
			} catch (u) {
				he(i, t, u);
			}
		}
	if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) O0(t, e), (t = t.sibling);
}
function O0(e, t) {
	var n = e.alternate,
		r = e.flags;
	switch (e.tag) {
		case 0:
		case 11:
		case 14:
		case 15:
			if ((ht(t, e), kt(e), r & 4)) {
				try {
					ni(3, e, e.return), cl(3, e);
				} catch (w) {
					he(e, e.return, w);
				}
				try {
					ni(5, e, e.return);
				} catch (w) {
					he(e, e.return, w);
				}
			}
			break;
		case 1:
			ht(t, e), kt(e), r & 512 && n !== null && tr(n, n.return);
			break;
		case 5:
			if ((ht(t, e), kt(e), r & 512 && n !== null && tr(n, n.return), e.flags & 32)) {
				var i = e.stateNode;
				try {
					ui(i, "");
				} catch (w) {
					he(e, e.return, w);
				}
			}
			if (r & 4 && ((i = e.stateNode), i != null)) {
				var o = e.memoizedProps,
					l = n !== null ? n.memoizedProps : o,
					a = e.type,
					s = e.updateQueue;
				if (((e.updateQueue = null), s !== null))
					try {
						a === "input" && o.type === "radio" && o.name != null && Jd(i, o), Ls(a, l);
						var u = Ls(a, o);
						for (l = 0; l < s.length; l += 2) {
							var c = s[l],
								d = s[l + 1];
							c === "style"
								? of(i, d)
								: c === "dangerouslySetInnerHTML"
								  ? nf(i, d)
								  : c === "children"
								    ? ui(i, d)
								    : Ma(i, c, d, u);
						}
						switch (a) {
							case "input":
								Cs(i, o);
								break;
							case "textarea":
								ef(i, o);
								break;
							case "select":
								var p = i._wrapperState.wasMultiple;
								i._wrapperState.wasMultiple = !!o.multiple;
								var y = o.value;
								y != null
									? ir(i, !!o.multiple, y, !1)
									: p !== !!o.multiple &&
									  (o.defaultValue != null
											? ir(i, !!o.multiple, o.defaultValue, !0)
											: ir(i, !!o.multiple, o.multiple ? [] : "", !1));
						}
						i[wi] = o;
					} catch (w) {
						he(e, e.return, w);
					}
			}
			break;
		case 6:
			if ((ht(t, e), kt(e), r & 4)) {
				if (e.stateNode === null) throw Error(O(162));
				(i = e.stateNode), (o = e.memoizedProps);
				try {
					i.nodeValue = o;
				} catch (w) {
					he(e, e.return, w);
				}
			}
			break;
		case 3:
			if ((ht(t, e), kt(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
				try {
					pi(t.containerInfo);
				} catch (w) {
					he(e, e.return, w);
				}
			break;
		case 4:
			ht(t, e), kt(e);
			break;
		case 13:
			ht(t, e),
				kt(e),
				(i = e.child),
				i.flags & 8192 &&
					((o = i.memoizedState !== null),
					(i.stateNode.isHidden = o),
					!o || (i.alternate !== null && i.alternate.memoizedState !== null) || (su = ye())),
				r & 4 && Bc(e);
			break;
		case 22:
			if (
				((c = n !== null && n.memoizedState !== null),
				e.mode & 1 ? ((ze = (u = ze) || c), ht(t, e), (ze = u)) : ht(t, e),
				kt(e),
				r & 8192)
			) {
				if (((u = e.memoizedState !== null), (e.stateNode.isHidden = u) && !c && e.mode & 1))
					for (B = e, c = e.child; c !== null; ) {
						for (d = B = c; B !== null; ) {
							switch (((p = B), (y = p.child), p.tag)) {
								case 0:
								case 11:
								case 14:
								case 15:
									ni(4, p, p.return);
									break;
								case 1:
									tr(p, p.return);
									var g = p.stateNode;
									if (typeof g.componentWillUnmount == "function") {
										(r = p), (n = p.return);
										try {
											(t = r),
												(g.props = t.memoizedProps),
												(g.state = t.memoizedState),
												g.componentWillUnmount();
										} catch (w) {
											he(r, n, w);
										}
									}
									break;
								case 5:
									tr(p, p.return);
									break;
								case 22:
									if (p.memoizedState !== null) {
										Vc(d);
										continue;
									}
							}
							y !== null ? ((y.return = p), (B = y)) : Vc(d);
						}
						c = c.sibling;
					}
				e: for (c = null, d = e; ; ) {
					if (d.tag === 5) {
						if (c === null) {
							c = d;
							try {
								(i = d.stateNode),
									u
										? ((o = i.style),
										  typeof o.setProperty == "function"
												? o.setProperty("display", "none", "important")
												: (o.display = "none"))
										: ((a = d.stateNode),
										  (s = d.memoizedProps.style),
										  (l = s != null && s.hasOwnProperty("display") ? s.display : null),
										  (a.style.display = rf("display", l)));
							} catch (w) {
								he(e, e.return, w);
							}
						}
					} else if (d.tag === 6) {
						if (c === null)
							try {
								d.stateNode.nodeValue = u ? "" : d.memoizedProps;
							} catch (w) {
								he(e, e.return, w);
							}
					} else if (
						((d.tag !== 22 && d.tag !== 23) || d.memoizedState === null || d === e) &&
						d.child !== null
					) {
						(d.child.return = d), (d = d.child);
						continue;
					}
					if (d === e) break e;
					for (; d.sibling === null; ) {
						if (d.return === null || d.return === e) break e;
						c === d && (c = null), (d = d.return);
					}
					c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
				}
			}
			break;
		case 19:
			ht(t, e), kt(e), r & 4 && Bc(e);
			break;
		case 21:
			break;
		default:
			ht(t, e), kt(e);
	}
}
function kt(e) {
	var t = e.flags;
	if (t & 2) {
		try {
			e: {
				for (var n = e.return; n !== null; ) {
					if (_0(n)) {
						var r = n;
						break e;
					}
					n = n.return;
				}
				throw Error(O(160));
			}
			switch (r.tag) {
				case 5:
					var i = r.stateNode;
					r.flags & 32 && (ui(i, ""), (r.flags &= -33));
					var o = Fc(e);
					ra(e, o, i);
					break;
				case 3:
				case 4:
					var l = r.stateNode.containerInfo,
						a = Fc(e);
					na(e, a, l);
					break;
				default:
					throw Error(O(161));
			}
		} catch (s) {
			he(e, e.return, s);
		}
		e.flags &= -3;
	}
	t & 4096 && (e.flags &= -4097);
}
function y1(e, t, n) {
	(B = e), z0(e);
}
function z0(e, t, n) {
	for (var r = (e.mode & 1) !== 0; B !== null; ) {
		var i = B,
			o = i.child;
		if (i.tag === 22 && r) {
			var l = i.memoizedState !== null || to;
			if (!l) {
				var a = i.alternate,
					s = (a !== null && a.memoizedState !== null) || ze;
				a = to;
				var u = ze;
				if (((to = l), (ze = s) && !u))
					for (B = i; B !== null; )
						(l = B),
							(s = l.child),
							l.tag === 22 && l.memoizedState !== null
								? Uc(i)
								: s !== null
								  ? ((s.return = l), (B = s))
								  : Uc(i);
				for (; o !== null; ) (B = o), z0(o), (o = o.sibling);
				(B = i), (to = a), (ze = u);
			}
			bc(e);
		} else i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (B = o)) : bc(e);
	}
}
function bc(e) {
	for (; B !== null; ) {
		var t = B;
		if (t.flags & 8772) {
			var n = t.alternate;
			try {
				if (t.flags & 8772)
					switch (t.tag) {
						case 0:
						case 11:
						case 15:
							ze || cl(5, t);
							break;
						case 1:
							var r = t.stateNode;
							if (t.flags & 4 && !ze)
								if (n === null) r.componentDidMount();
								else {
									var i = t.elementType === t.type ? n.memoizedProps : mt(t.type, n.memoizedProps);
									r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
								}
							var o = t.updateQueue;
							o !== null && Ec(t, o, r);
							break;
						case 3:
							var l = t.updateQueue;
							if (l !== null) {
								if (((n = null), t.child !== null))
									switch (t.child.tag) {
										case 5:
											n = t.child.stateNode;
											break;
										case 1:
											n = t.child.stateNode;
									}
								Ec(t, l, n);
							}
							break;
						case 5:
							var a = t.stateNode;
							if (n === null && t.flags & 4) {
								n = a;
								var s = t.memoizedProps;
								switch (t.type) {
									case "button":
									case "input":
									case "select":
									case "textarea":
										s.autoFocus && n.focus();
										break;
									case "img":
										s.src && (n.src = s.src);
								}
							}
							break;
						case 6:
							break;
						case 4:
							break;
						case 12:
							break;
						case 13:
							if (t.memoizedState === null) {
								var u = t.alternate;
								if (u !== null) {
									var c = u.memoizedState;
									if (c !== null) {
										var d = c.dehydrated;
										d !== null && pi(d);
									}
								}
							}
							break;
						case 19:
						case 17:
						case 21:
						case 22:
						case 23:
						case 25:
							break;
						default:
							throw Error(O(163));
					}
				ze || (t.flags & 512 && ta(t));
			} catch (p) {
				he(t, t.return, p);
			}
		}
		if (t === e) {
			B = null;
			break;
		}
		if (((n = t.sibling), n !== null)) {
			(n.return = t.return), (B = n);
			break;
		}
		B = t.return;
	}
}
function Vc(e) {
	for (; B !== null; ) {
		var t = B;
		if (t === e) {
			B = null;
			break;
		}
		var n = t.sibling;
		if (n !== null) {
			(n.return = t.return), (B = n);
			break;
		}
		B = t.return;
	}
}
function Uc(e) {
	for (; B !== null; ) {
		var t = B;
		try {
			switch (t.tag) {
				case 0:
				case 11:
				case 15:
					var n = t.return;
					try {
						cl(4, t);
					} catch (s) {
						he(t, n, s);
					}
					break;
				case 1:
					var r = t.stateNode;
					if (typeof r.componentDidMount == "function") {
						var i = t.return;
						try {
							r.componentDidMount();
						} catch (s) {
							he(t, i, s);
						}
					}
					var o = t.return;
					try {
						ta(t);
					} catch (s) {
						he(t, o, s);
					}
					break;
				case 5:
					var l = t.return;
					try {
						ta(t);
					} catch (s) {
						he(t, l, s);
					}
			}
		} catch (s) {
			he(t, t.return, s);
		}
		if (t === e) {
			B = null;
			break;
		}
		var a = t.sibling;
		if (a !== null) {
			(a.return = t.return), (B = a);
			break;
		}
		B = t.return;
	}
}
var x1 = Math.ceil,
	Ho = Gt.ReactCurrentDispatcher,
	ou = Gt.ReactCurrentOwner,
	ut = Gt.ReactCurrentBatchConfig,
	J = 0,
	Le = null,
	Se = null,
	Re = 0,
	Ye = 0,
	nr = wn(0),
	Te = 0,
	ki = null,
	zn = 0,
	dl = 0,
	lu = 0,
	ri = null,
	Ue = null,
	su = 0,
	wr = 1 / 0,
	zt = null,
	$o = !1,
	ia = null,
	fn = null,
	no = !1,
	on = null,
	Wo = 0,
	ii = 0,
	oa = null,
	vo = -1,
	wo = 0;
function Be() {
	return J & 6 ? ye() : vo !== -1 ? vo : (vo = ye());
}
function pn(e) {
	return e.mode & 1
		? J & 2 && Re !== 0
			? Re & -Re
			: r1.transition !== null
			  ? (wo === 0 && (wo = vf()), wo)
			  : ((e = re), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : kf(e.type))), e)
		: 1;
}
function St(e, t, n, r) {
	if (50 < ii) throw ((ii = 0), (oa = null), Error(O(185)));
	Ri(e, n, r),
		(!(J & 2) || e !== Le) &&
			(e === Le && (!(J & 2) && (dl |= n), Te === 4 && nn(e, Re)),
			Ge(e, r),
			n === 1 && J === 0 && !(t.mode & 1) && ((wr = ye() + 500), sl && yn()));
}
function Ge(e, t) {
	var n = e.callbackNode;
	rh(e, t);
	var r = Mo(e, e === Le ? Re : 0);
	if (r === 0) n !== null && Zu(n), (e.callbackNode = null), (e.callbackPriority = 0);
	else if (((t = r & -r), e.callbackPriority !== t)) {
		if ((n != null && Zu(n), t === 1))
			e.tag === 0 ? n1(Hc.bind(null, e)) : Hf(Hc.bind(null, e)),
				qh(function () {
					!(J & 6) && yn();
				}),
				(n = null);
		else {
			switch (wf(r)) {
				case 1:
					n = Oa;
					break;
				case 4:
					n = mf;
					break;
				case 16:
					n = Lo;
					break;
				case 536870912:
					n = gf;
					break;
				default:
					n = Lo;
			}
			n = U0(n, I0.bind(null, e));
		}
		(e.callbackPriority = t), (e.callbackNode = n);
	}
}
function I0(e, t) {
	if (((vo = -1), (wo = 0), J & 6)) throw Error(O(327));
	var n = e.callbackNode;
	if (ur() && e.callbackNode !== n) return null;
	var r = Mo(e, e === Le ? Re : 0);
	if (r === 0) return null;
	if (r & 30 || r & e.expiredLanes || t) t = Go(e, r);
	else {
		t = r;
		var i = J;
		J |= 2;
		var o = A0();
		(Le !== e || Re !== t) && ((zt = null), (wr = ye() + 500), Nn(e, t));
		do
			try {
				E1();
				break;
			} catch (a) {
				D0(e, a);
			}
		while (!0);
		Ga(), (Ho.current = o), (J = i), Se !== null ? (t = 0) : ((Le = null), (Re = 0), (t = Te));
	}
	if (t !== 0) {
		if ((t === 2 && ((i = js(e)), i !== 0 && ((r = i), (t = la(e, i)))), t === 1))
			throw ((n = ki), Nn(e, 0), nn(e, r), Ge(e, ye()), n);
		if (t === 6) nn(e, r);
		else {
			if (
				((i = e.current.alternate),
				!(r & 30) &&
					!S1(i) &&
					((t = Go(e, r)), t === 2 && ((o = js(e)), o !== 0 && ((r = o), (t = la(e, o)))), t === 1))
			)
				throw ((n = ki), Nn(e, 0), nn(e, r), Ge(e, ye()), n);
			switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
				case 0:
				case 1:
					throw Error(O(345));
				case 2:
					kn(e, Ue, zt);
					break;
				case 3:
					if ((nn(e, r), (r & 130023424) === r && ((t = su + 500 - ye()), 10 < t))) {
						if (Mo(e, 0) !== 0) break;
						if (((i = e.suspendedLanes), (i & r) !== r)) {
							Be(), (e.pingedLanes |= e.suspendedLanes & i);
							break;
						}
						e.timeoutHandle = bs(kn.bind(null, e, Ue, zt), t);
						break;
					}
					kn(e, Ue, zt);
					break;
				case 4:
					if ((nn(e, r), (r & 4194240) === r)) break;
					for (t = e.eventTimes, i = -1; 0 < r; ) {
						var l = 31 - xt(r);
						(o = 1 << l), (l = t[l]), l > i && (i = l), (r &= ~o);
					}
					if (
						((r = i),
						(r = ye() - r),
						(r =
							(120 > r
								? 120
								: 480 > r
								  ? 480
								  : 1080 > r
								    ? 1080
								    : 1920 > r
								      ? 1920
								      : 3e3 > r
								        ? 3e3
								        : 4320 > r
								          ? 4320
								          : 1960 * x1(r / 1960)) - r),
						10 < r)
					) {
						e.timeoutHandle = bs(kn.bind(null, e, Ue, zt), r);
						break;
					}
					kn(e, Ue, zt);
					break;
				case 5:
					kn(e, Ue, zt);
					break;
				default:
					throw Error(O(329));
			}
		}
	}
	return Ge(e, ye()), e.callbackNode === n ? I0.bind(null, e) : null;
}
function la(e, t) {
	var n = ri;
	return (
		e.current.memoizedState.isDehydrated && (Nn(e, t).flags |= 256),
		(e = Go(e, t)),
		e !== 2 && ((t = Ue), (Ue = n), t !== null && sa(t)),
		e
	);
}
function sa(e) {
	Ue === null ? (Ue = e) : Ue.push.apply(Ue, e);
}
function S1(e) {
	for (var t = e; ; ) {
		if (t.flags & 16384) {
			var n = t.updateQueue;
			if (n !== null && ((n = n.stores), n !== null))
				for (var r = 0; r < n.length; r++) {
					var i = n[r],
						o = i.getSnapshot;
					i = i.value;
					try {
						if (!Ct(o(), i)) return !1;
					} catch {
						return !1;
					}
				}
		}
		if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) (n.return = t), (t = n);
		else {
			if (t === e) break;
			for (; t.sibling === null; ) {
				if (t.return === null || t.return === e) return !0;
				t = t.return;
			}
			(t.sibling.return = t.return), (t = t.sibling);
		}
	}
	return !0;
}
function nn(e, t) {
	for (
		t &= ~lu, t &= ~dl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
		0 < t;

	) {
		var n = 31 - xt(t),
			r = 1 << n;
		(e[n] = -1), (t &= ~r);
	}
}
function Hc(e) {
	if (J & 6) throw Error(O(327));
	ur();
	var t = Mo(e, 0);
	if (!(t & 1)) return Ge(e, ye()), null;
	var n = Go(e, t);
	if (e.tag !== 0 && n === 2) {
		var r = js(e);
		r !== 0 && ((t = r), (n = la(e, r)));
	}
	if (n === 1) throw ((n = ki), Nn(e, 0), nn(e, t), Ge(e, ye()), n);
	if (n === 6) throw Error(O(345));
	return (
		(e.finishedWork = e.current.alternate), (e.finishedLanes = t), kn(e, Ue, zt), Ge(e, ye()), null
	);
}
function au(e, t) {
	var n = J;
	J |= 1;
	try {
		return e(t);
	} finally {
		(J = n), J === 0 && ((wr = ye() + 500), sl && yn());
	}
}
function In(e) {
	on !== null && on.tag === 0 && !(J & 6) && ur();
	var t = J;
	J |= 1;
	var n = ut.transition,
		r = re;
	try {
		if (((ut.transition = null), (re = 1), e)) return e();
	} finally {
		(re = r), (ut.transition = n), (J = t), !(J & 6) && yn();
	}
}
function uu() {
	(Ye = nr.current), ae(nr);
}
function Nn(e, t) {
	(e.finishedWork = null), (e.finishedLanes = 0);
	var n = e.timeoutHandle;
	if ((n !== -1 && ((e.timeoutHandle = -1), Zh(n)), Se !== null))
		for (n = Se.return; n !== null; ) {
			var r = n;
			switch ((Ha(r), r.tag)) {
				case 1:
					(r = r.type.childContextTypes), r != null && Oo();
					break;
				case 3:
					gr(), ae($e), ae(Ie), qa();
					break;
				case 5:
					Za(r);
					break;
				case 4:
					gr();
					break;
				case 13:
					ae(de);
					break;
				case 19:
					ae(de);
					break;
				case 10:
					Ka(r.type._context);
					break;
				case 22:
				case 23:
					uu();
			}
			n = n.return;
		}
	if (
		((Le = e),
		(Se = e = hn(e.current, null)),
		(Re = Ye = t),
		(Te = 0),
		(ki = null),
		(lu = dl = zn = 0),
		(Ue = ri = null),
		Pn !== null)
	) {
		for (t = 0; t < Pn.length; t++)
			if (((n = Pn[t]), (r = n.interleaved), r !== null)) {
				n.interleaved = null;
				var i = r.next,
					o = n.pending;
				if (o !== null) {
					var l = o.next;
					(o.next = i), (r.next = l);
				}
				n.pending = r;
			}
		Pn = null;
	}
	return e;
}
function D0(e, t) {
	do {
		var n = Se;
		try {
			if ((Ga(), (ho.current = Uo), Vo)) {
				for (var r = fe.memoizedState; r !== null; ) {
					var i = r.queue;
					i !== null && (i.pending = null), (r = r.next);
				}
				Vo = !1;
			}
			if (
				((On = 0),
				(Pe = ke = fe = null),
				(ti = !1),
				(Si = 0),
				(ou.current = null),
				n === null || n.return === null)
			) {
				(Te = 1), (ki = t), (Se = null);
				break;
			}
			e: {
				var o = e,
					l = n.return,
					a = n,
					s = t;
				if (
					((t = Re),
					(a.flags |= 32768),
					s !== null && typeof s == "object" && typeof s.then == "function")
				) {
					var u = s,
						c = a,
						d = c.tag;
					if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
						var p = c.alternate;
						p
							? ((c.updateQueue = p.updateQueue),
							  (c.memoizedState = p.memoizedState),
							  (c.lanes = p.lanes))
							: ((c.updateQueue = null), (c.memoizedState = null));
					}
					var y = Rc(l);
					if (y !== null) {
						(y.flags &= -257), _c(y, l, a, o, t), y.mode & 1 && Nc(o, u, t), (t = y), (s = u);
						var g = t.updateQueue;
						if (g === null) {
							var w = new Set();
							w.add(s), (t.updateQueue = w);
						} else g.add(s);
						break e;
					} else {
						if (!(t & 1)) {
							Nc(o, u, t), cu();
							break e;
						}
						s = Error(O(426));
					}
				} else if (ue && a.mode & 1) {
					var C = Rc(l);
					if (C !== null) {
						!(C.flags & 65536) && (C.flags |= 256), _c(C, l, a, o, t), $a(vr(s, a));
						break e;
					}
				}
				(o = s = vr(s, a)), Te !== 4 && (Te = 2), ri === null ? (ri = [o]) : ri.push(o), (o = l);
				do {
					switch (o.tag) {
						case 3:
							(o.flags |= 65536), (t &= -t), (o.lanes |= t);
							var f = y0(o, s, t);
							Cc(o, f);
							break e;
						case 1:
							a = s;
							var h = o.type,
								v = o.stateNode;
							if (
								!(o.flags & 128) &&
								(typeof h.getDerivedStateFromError == "function" ||
									(v !== null &&
										typeof v.componentDidCatch == "function" &&
										(fn === null || !fn.has(v))))
							) {
								(o.flags |= 65536), (t &= -t), (o.lanes |= t);
								var m = x0(o, a, t);
								Cc(o, m);
								break e;
							}
					}
					o = o.return;
				} while (o !== null);
			}
			B0(n);
		} catch (E) {
			(t = E), Se === n && n !== null && (Se = n = n.return);
			continue;
		}
		break;
	} while (!0);
}
function A0() {
	var e = Ho.current;
	return (Ho.current = Uo), e === null ? Uo : e;
}
function cu() {
	(Te === 0 || Te === 3 || Te === 2) && (Te = 4),
		Le === null || (!(zn & 268435455) && !(dl & 268435455)) || nn(Le, Re);
}
function Go(e, t) {
	var n = J;
	J |= 2;
	var r = A0();
	(Le !== e || Re !== t) && ((zt = null), Nn(e, t));
	do
		try {
			C1();
			break;
		} catch (i) {
			D0(e, i);
		}
	while (!0);
	if ((Ga(), (J = n), (Ho.current = r), Se !== null)) throw Error(O(261));
	return (Le = null), (Re = 0), Te;
}
function C1() {
	for (; Se !== null; ) F0(Se);
}
function E1() {
	for (; Se !== null && !Q2(); ) F0(Se);
}
function F0(e) {
	var t = V0(e.alternate, e, Ye);
	(e.memoizedProps = e.pendingProps), t === null ? B0(e) : (Se = t), (ou.current = null);
}
function B0(e) {
	var t = e;
	do {
		var n = t.alternate;
		if (((e = t.return), t.flags & 32768)) {
			if (((n = g1(n, t)), n !== null)) {
				(n.flags &= 32767), (Se = n);
				return;
			}
			if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
			else {
				(Te = 6), (Se = null);
				return;
			}
		} else if (((n = m1(n, t, Ye)), n !== null)) {
			Se = n;
			return;
		}
		if (((t = t.sibling), t !== null)) {
			Se = t;
			return;
		}
		Se = t = e;
	} while (t !== null);
	Te === 0 && (Te = 5);
}
function kn(e, t, n) {
	var r = re,
		i = ut.transition;
	try {
		(ut.transition = null), (re = 1), k1(e, t, n, r);
	} finally {
		(ut.transition = i), (re = r);
	}
	return null;
}
function k1(e, t, n, r) {
	do ur();
	while (on !== null);
	if (J & 6) throw Error(O(327));
	n = e.finishedWork;
	var i = e.finishedLanes;
	if (n === null) return null;
	if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(O(177));
	(e.callbackNode = null), (e.callbackPriority = 0);
	var o = n.lanes | n.childLanes;
	if (
		(ih(e, o),
		e === Le && ((Se = Le = null), (Re = 0)),
		(!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
			no ||
			((no = !0),
			U0(Lo, function () {
				return ur(), null;
			})),
		(o = (n.flags & 15990) !== 0),
		n.subtreeFlags & 15990 || o)
	) {
		(o = ut.transition), (ut.transition = null);
		var l = re;
		re = 1;
		var a = J;
		(J |= 4),
			(ou.current = null),
			w1(e, n),
			O0(n, e),
			$h(Fs),
			(No = !!As),
			(Fs = As = null),
			(e.current = n),
			y1(n),
			Y2(),
			(J = a),
			(re = l),
			(ut.transition = o);
	} else e.current = n;
	if (
		(no && ((no = !1), (on = e), (Wo = i)),
		(o = e.pendingLanes),
		o === 0 && (fn = null),
		q2(n.stateNode),
		Ge(e, ye()),
		t !== null)
	)
		for (r = e.onRecoverableError, n = 0; n < t.length; n++)
			(i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
	if ($o) throw (($o = !1), (e = ia), (ia = null), e);
	return (
		Wo & 1 && e.tag !== 0 && ur(),
		(o = e.pendingLanes),
		o & 1 ? (e === oa ? ii++ : ((ii = 0), (oa = e))) : (ii = 0),
		yn(),
		null
	);
}
function ur() {
	if (on !== null) {
		var e = wf(Wo),
			t = ut.transition,
			n = re;
		try {
			if (((ut.transition = null), (re = 16 > e ? 16 : e), on === null)) var r = !1;
			else {
				if (((e = on), (on = null), (Wo = 0), J & 6)) throw Error(O(331));
				var i = J;
				for (J |= 4, B = e.current; B !== null; ) {
					var o = B,
						l = o.child;
					if (B.flags & 16) {
						var a = o.deletions;
						if (a !== null) {
							for (var s = 0; s < a.length; s++) {
								var u = a[s];
								for (B = u; B !== null; ) {
									var c = B;
									switch (c.tag) {
										case 0:
										case 11:
										case 15:
											ni(8, c, o);
									}
									var d = c.child;
									if (d !== null) (d.return = c), (B = d);
									else
										for (; B !== null; ) {
											c = B;
											var p = c.sibling,
												y = c.return;
											if ((R0(c), c === u)) {
												B = null;
												break;
											}
											if (p !== null) {
												(p.return = y), (B = p);
												break;
											}
											B = y;
										}
								}
							}
							var g = o.alternate;
							if (g !== null) {
								var w = g.child;
								if (w !== null) {
									g.child = null;
									do {
										var C = w.sibling;
										(w.sibling = null), (w = C);
									} while (w !== null);
								}
							}
							B = o;
						}
					}
					if (o.subtreeFlags & 2064 && l !== null) (l.return = o), (B = l);
					else
						e: for (; B !== null; ) {
							if (((o = B), o.flags & 2048))
								switch (o.tag) {
									case 0:
									case 11:
									case 15:
										ni(9, o, o.return);
								}
							var f = o.sibling;
							if (f !== null) {
								(f.return = o.return), (B = f);
								break e;
							}
							B = o.return;
						}
				}
				var h = e.current;
				for (B = h; B !== null; ) {
					l = B;
					var v = l.child;
					if (l.subtreeFlags & 2064 && v !== null) (v.return = l), (B = v);
					else
						e: for (l = h; B !== null; ) {
							if (((a = B), a.flags & 2048))
								try {
									switch (a.tag) {
										case 0:
										case 11:
										case 15:
											cl(9, a);
									}
								} catch (E) {
									he(a, a.return, E);
								}
							if (a === l) {
								B = null;
								break e;
							}
							var m = a.sibling;
							if (m !== null) {
								(m.return = a.return), (B = m);
								break e;
							}
							B = a.return;
						}
				}
				if (((J = i), yn(), Mt && typeof Mt.onPostCommitFiberRoot == "function"))
					try {
						Mt.onPostCommitFiberRoot(nl, e);
					} catch {}
				r = !0;
			}
			return r;
		} finally {
			(re = n), (ut.transition = t);
		}
	}
	return !1;
}
function $c(e, t, n) {
	(t = vr(n, t)),
		(t = y0(e, t, 1)),
		(e = dn(e, t, 1)),
		(t = Be()),
		e !== null && (Ri(e, 1, t), Ge(e, t));
}
function he(e, t, n) {
	if (e.tag === 3) $c(e, e, n);
	else
		for (; t !== null; ) {
			if (t.tag === 3) {
				$c(t, e, n);
				break;
			} else if (t.tag === 1) {
				var r = t.stateNode;
				if (
					typeof t.type.getDerivedStateFromError == "function" ||
					(typeof r.componentDidCatch == "function" && (fn === null || !fn.has(r)))
				) {
					(e = vr(n, e)),
						(e = x0(t, e, 1)),
						(t = dn(t, e, 1)),
						(e = Be()),
						t !== null && (Ri(t, 1, e), Ge(t, e));
					break;
				}
			}
			t = t.return;
		}
}
function T1(e, t, n) {
	var r = e.pingCache;
	r !== null && r.delete(t),
		(t = Be()),
		(e.pingedLanes |= e.suspendedLanes & n),
		Le === e &&
			(Re & n) === n &&
			(Te === 4 || (Te === 3 && (Re & 130023424) === Re && 500 > ye() - su) ? Nn(e, 0) : (lu |= n)),
		Ge(e, t);
}
function b0(e, t) {
	t === 0 && (e.mode & 1 ? ((t = Gi), (Gi <<= 1), !(Gi & 130023424) && (Gi = 4194304)) : (t = 1));
	var n = Be();
	(e = $t(e, t)), e !== null && (Ri(e, t, n), Ge(e, n));
}
function P1(e) {
	var t = e.memoizedState,
		n = 0;
	t !== null && (n = t.retryLane), b0(e, n);
}
function L1(e, t) {
	var n = 0;
	switch (e.tag) {
		case 13:
			var r = e.stateNode,
				i = e.memoizedState;
			i !== null && (n = i.retryLane);
			break;
		case 19:
			r = e.stateNode;
			break;
		default:
			throw Error(O(314));
	}
	r !== null && r.delete(t), b0(e, n);
}
var V0;
V0 = function (e, t, n) {
	if (e !== null)
		if (e.memoizedProps !== t.pendingProps || $e.current) He = !0;
		else {
			if (!(e.lanes & n) && !(t.flags & 128)) return (He = !1), h1(e, t, n);
			He = !!(e.flags & 131072);
		}
	else (He = !1), ue && t.flags & 1048576 && $f(t, Do, t.index);
	switch (((t.lanes = 0), t.tag)) {
		case 2:
			var r = t.type;
			go(e, t), (e = t.pendingProps);
			var i = pr(t, Ie.current);
			ar(t, n), (i = eu(null, t, r, e, i, n));
			var o = tu();
			return (
				(t.flags |= 1),
				typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0
					? ((t.tag = 1),
					  (t.memoizedState = null),
					  (t.updateQueue = null),
					  We(r) ? ((o = !0), zo(t)) : (o = !1),
					  (t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null),
					  Ya(t),
					  (i.updater = al),
					  (t.stateNode = i),
					  (i._reactInternals = t),
					  Ks(t, r, e, n),
					  (t = Xs(null, t, r, !0, o, n)))
					: ((t.tag = 0), ue && o && Ua(t), Fe(null, t, i, n), (t = t.child)),
				t
			);
		case 16:
			r = t.elementType;
			e: {
				switch (
					(go(e, t),
					(e = t.pendingProps),
					(i = r._init),
					(r = i(r._payload)),
					(t.type = r),
					(i = t.tag = N1(r)),
					(e = mt(r, e)),
					i)
				) {
					case 0:
						t = Ys(null, t, r, e, n);
						break e;
					case 1:
						t = zc(null, t, r, e, n);
						break e;
					case 11:
						t = jc(null, t, r, e, n);
						break e;
					case 14:
						t = Oc(null, t, r, mt(r.type, e), n);
						break e;
				}
				throw Error(O(306, r, ""));
			}
			return t;
		case 0:
			return (
				(r = t.type),
				(i = t.pendingProps),
				(i = t.elementType === r ? i : mt(r, i)),
				Ys(e, t, r, i, n)
			);
		case 1:
			return (
				(r = t.type),
				(i = t.pendingProps),
				(i = t.elementType === r ? i : mt(r, i)),
				zc(e, t, r, i, n)
			);
		case 3:
			e: {
				if ((k0(t), e === null)) throw Error(O(387));
				(r = t.pendingProps), (o = t.memoizedState), (i = o.element), Qf(e, t), Bo(t, r, null, n);
				var l = t.memoizedState;
				if (((r = l.element), o.isDehydrated))
					if (
						((o = {
							element: r,
							isDehydrated: !1,
							cache: l.cache,
							pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
							transitions: l.transitions,
						}),
						(t.updateQueue.baseState = o),
						(t.memoizedState = o),
						t.flags & 256)
					) {
						(i = vr(Error(O(423)), t)), (t = Ic(e, t, r, n, i));
						break e;
					} else if (r !== i) {
						(i = vr(Error(O(424)), t)), (t = Ic(e, t, r, n, i));
						break e;
					} else
						for (
							Ze = cn(t.stateNode.containerInfo.firstChild),
								qe = t,
								ue = !0,
								yt = null,
								n = qf(t, null, r, n),
								t.child = n;
							n;

						)
							(n.flags = (n.flags & -3) | 4096), (n = n.sibling);
				else {
					if ((hr(), r === i)) {
						t = Wt(e, t, n);
						break e;
					}
					Fe(e, t, r, n);
				}
				t = t.child;
			}
			return t;
		case 5:
			return (
				Jf(t),
				e === null && $s(t),
				(r = t.type),
				(i = t.pendingProps),
				(o = e !== null ? e.memoizedProps : null),
				(l = i.children),
				Bs(r, i) ? (l = null) : o !== null && Bs(r, o) && (t.flags |= 32),
				E0(e, t),
				Fe(e, t, l, n),
				t.child
			);
		case 6:
			return e === null && $s(t), null;
		case 13:
			return T0(e, t, n);
		case 4:
			return (
				Xa(t, t.stateNode.containerInfo),
				(r = t.pendingProps),
				e === null ? (t.child = mr(t, null, r, n)) : Fe(e, t, r, n),
				t.child
			);
		case 11:
			return (
				(r = t.type),
				(i = t.pendingProps),
				(i = t.elementType === r ? i : mt(r, i)),
				jc(e, t, r, i, n)
			);
		case 7:
			return Fe(e, t, t.pendingProps, n), t.child;
		case 8:
			return Fe(e, t, t.pendingProps.children, n), t.child;
		case 12:
			return Fe(e, t, t.pendingProps.children, n), t.child;
		case 10:
			e: {
				if (
					((r = t.type._context),
					(i = t.pendingProps),
					(o = t.memoizedProps),
					(l = i.value),
					le(Ao, r._currentValue),
					(r._currentValue = l),
					o !== null)
				)
					if (Ct(o.value, l)) {
						if (o.children === i.children && !$e.current) {
							t = Wt(e, t, n);
							break e;
						}
					} else
						for (o = t.child, o !== null && (o.return = t); o !== null; ) {
							var a = o.dependencies;
							if (a !== null) {
								l = o.child;
								for (var s = a.firstContext; s !== null; ) {
									if (s.context === r) {
										if (o.tag === 1) {
											(s = Bt(-1, n & -n)), (s.tag = 2);
											var u = o.updateQueue;
											if (u !== null) {
												u = u.shared;
												var c = u.pending;
												c === null ? (s.next = s) : ((s.next = c.next), (c.next = s)),
													(u.pending = s);
											}
										}
										(o.lanes |= n),
											(s = o.alternate),
											s !== null && (s.lanes |= n),
											Ws(o.return, n, t),
											(a.lanes |= n);
										break;
									}
									s = s.next;
								}
							} else if (o.tag === 10) l = o.type === t.type ? null : o.child;
							else if (o.tag === 18) {
								if (((l = o.return), l === null)) throw Error(O(341));
								(l.lanes |= n),
									(a = l.alternate),
									a !== null && (a.lanes |= n),
									Ws(l, n, t),
									(l = o.sibling);
							} else l = o.child;
							if (l !== null) l.return = o;
							else
								for (l = o; l !== null; ) {
									if (l === t) {
										l = null;
										break;
									}
									if (((o = l.sibling), o !== null)) {
										(o.return = l.return), (l = o);
										break;
									}
									l = l.return;
								}
							o = l;
						}
				Fe(e, t, i.children, n), (t = t.child);
			}
			return t;
		case 9:
			return (
				(i = t.type),
				(r = t.pendingProps.children),
				ar(t, n),
				(i = dt(i)),
				(r = r(i)),
				(t.flags |= 1),
				Fe(e, t, r, n),
				t.child
			);
		case 14:
			return (r = t.type), (i = mt(r, t.pendingProps)), (i = mt(r.type, i)), Oc(e, t, r, i, n);
		case 15:
			return S0(e, t, t.type, t.pendingProps, n);
		case 17:
			return (
				(r = t.type),
				(i = t.pendingProps),
				(i = t.elementType === r ? i : mt(r, i)),
				go(e, t),
				(t.tag = 1),
				We(r) ? ((e = !0), zo(t)) : (e = !1),
				ar(t, n),
				Xf(t, r, i),
				Ks(t, r, i, n),
				Xs(null, t, r, !0, e, n)
			);
		case 19:
			return P0(e, t, n);
		case 22:
			return C0(e, t, n);
	}
	throw Error(O(156, t.tag));
};
function U0(e, t) {
	return hf(e, t);
}
function M1(e, t, n, r) {
	(this.tag = e),
		(this.key = n),
		(this.sibling =
			this.child =
			this.return =
			this.stateNode =
			this.type =
			this.elementType =
				null),
		(this.index = 0),
		(this.ref = null),
		(this.pendingProps = t),
		(this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
		(this.mode = r),
		(this.subtreeFlags = this.flags = 0),
		(this.deletions = null),
		(this.childLanes = this.lanes = 0),
		(this.alternate = null);
}
function at(e, t, n, r) {
	return new M1(e, t, n, r);
}
function du(e) {
	return (e = e.prototype), !(!e || !e.isReactComponent);
}
function N1(e) {
	if (typeof e == "function") return du(e) ? 1 : 0;
	if (e != null) {
		if (((e = e.$$typeof), e === Ra)) return 11;
		if (e === _a) return 14;
	}
	return 2;
}
function hn(e, t) {
	var n = e.alternate;
	return (
		n === null
			? ((n = at(e.tag, t, e.key, e.mode)),
			  (n.elementType = e.elementType),
			  (n.type = e.type),
			  (n.stateNode = e.stateNode),
			  (n.alternate = e),
			  (e.alternate = n))
			: ((n.pendingProps = t),
			  (n.type = e.type),
			  (n.flags = 0),
			  (n.subtreeFlags = 0),
			  (n.deletions = null)),
		(n.flags = e.flags & 14680064),
		(n.childLanes = e.childLanes),
		(n.lanes = e.lanes),
		(n.child = e.child),
		(n.memoizedProps = e.memoizedProps),
		(n.memoizedState = e.memoizedState),
		(n.updateQueue = e.updateQueue),
		(t = e.dependencies),
		(n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
		(n.sibling = e.sibling),
		(n.index = e.index),
		(n.ref = e.ref),
		n
	);
}
function yo(e, t, n, r, i, o) {
	var l = 2;
	if (((r = e), typeof e == "function")) du(e) && (l = 1);
	else if (typeof e == "string") l = 5;
	else
		e: switch (e) {
			case Gn:
				return Rn(n.children, i, o, t);
			case Na:
				(l = 8), (i |= 8);
				break;
			case vs:
				return (e = at(12, n, t, i | 2)), (e.elementType = vs), (e.lanes = o), e;
			case ws:
				return (e = at(13, n, t, i)), (e.elementType = ws), (e.lanes = o), e;
			case ys:
				return (e = at(19, n, t, i)), (e.elementType = ys), (e.lanes = o), e;
			case Xd:
				return fl(n, i, o, t);
			default:
				if (typeof e == "object" && e !== null)
					switch (e.$$typeof) {
						case Qd:
							l = 10;
							break e;
						case Yd:
							l = 9;
							break e;
						case Ra:
							l = 11;
							break e;
						case _a:
							l = 14;
							break e;
						case Jt:
							(l = 16), (r = null);
							break e;
					}
				throw Error(O(130, e == null ? e : typeof e, ""));
		}
	return (t = at(l, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t;
}
function Rn(e, t, n, r) {
	return (e = at(7, e, r, t)), (e.lanes = n), e;
}
function fl(e, t, n, r) {
	return (
		(e = at(22, e, r, t)), (e.elementType = Xd), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e
	);
}
function ts(e, t, n) {
	return (e = at(6, e, null, t)), (e.lanes = n), e;
}
function ns(e, t, n) {
	return (
		(t = at(4, e.children !== null ? e.children : [], e.key, t)),
		(t.lanes = n),
		(t.stateNode = {
			containerInfo: e.containerInfo,
			pendingChildren: null,
			implementation: e.implementation,
		}),
		t
	);
}
function R1(e, t, n, r, i) {
	(this.tag = t),
		(this.containerInfo = e),
		(this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
		(this.timeoutHandle = -1),
		(this.callbackNode = this.pendingContext = this.context = null),
		(this.callbackPriority = 0),
		(this.eventTimes = Dl(0)),
		(this.expirationTimes = Dl(-1)),
		(this.entangledLanes =
			this.finishedLanes =
			this.mutableReadLanes =
			this.expiredLanes =
			this.pingedLanes =
			this.suspendedLanes =
			this.pendingLanes =
				0),
		(this.entanglements = Dl(0)),
		(this.identifierPrefix = r),
		(this.onRecoverableError = i),
		(this.mutableSourceEagerHydrationData = null);
}
function fu(e, t, n, r, i, o, l, a, s) {
	return (
		(e = new R1(e, t, n, a, s)),
		t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
		(o = at(3, null, null, t)),
		(e.current = o),
		(o.stateNode = e),
		(o.memoizedState = {
			element: r,
			isDehydrated: n,
			cache: null,
			transitions: null,
			pendingSuspenseBoundaries: null,
		}),
		Ya(o),
		e
	);
}
function _1(e, t, n) {
	var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
	return {
		$$typeof: Wn,
		key: r == null ? null : "" + r,
		children: e,
		containerInfo: t,
		implementation: n,
	};
}
function H0(e) {
	if (!e) return gn;
	e = e._reactInternals;
	e: {
		if (bn(e) !== e || e.tag !== 1) throw Error(O(170));
		var t = e;
		do {
			switch (t.tag) {
				case 3:
					t = t.stateNode.context;
					break e;
				case 1:
					if (We(t.type)) {
						t = t.stateNode.__reactInternalMemoizedMergedChildContext;
						break e;
					}
			}
			t = t.return;
		} while (t !== null);
		throw Error(O(171));
	}
	if (e.tag === 1) {
		var n = e.type;
		if (We(n)) return Uf(e, n, t);
	}
	return t;
}
function $0(e, t, n, r, i, o, l, a, s) {
	return (
		(e = fu(n, r, !0, e, i, o, l, a, s)),
		(e.context = H0(null)),
		(n = e.current),
		(r = Be()),
		(i = pn(n)),
		(o = Bt(r, i)),
		(o.callback = t ?? null),
		dn(n, o, i),
		(e.current.lanes = i),
		Ri(e, i, r),
		Ge(e, r),
		e
	);
}
function pl(e, t, n, r) {
	var i = t.current,
		o = Be(),
		l = pn(i);
	return (
		(n = H0(n)),
		t.context === null ? (t.context = n) : (t.pendingContext = n),
		(t = Bt(o, l)),
		(t.payload = { element: e }),
		(r = r === void 0 ? null : r),
		r !== null && (t.callback = r),
		(e = dn(i, t, l)),
		e !== null && (St(e, i, l, o), po(e, i, l)),
		l
	);
}
function Ko(e) {
	if (((e = e.current), !e.child)) return null;
	switch (e.child.tag) {
		case 5:
			return e.child.stateNode;
		default:
			return e.child.stateNode;
	}
}
function Wc(e, t) {
	if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
		var n = e.retryLane;
		e.retryLane = n !== 0 && n < t ? n : t;
	}
}
function pu(e, t) {
	Wc(e, t), (e = e.alternate) && Wc(e, t);
}
function j1() {
	return null;
}
var W0 =
	typeof reportError == "function"
		? reportError
		: function (e) {
				console.error(e);
		  };
function hu(e) {
	this._internalRoot = e;
}
hl.prototype.render = hu.prototype.render = function (e) {
	var t = this._internalRoot;
	if (t === null) throw Error(O(409));
	pl(e, t, null, null);
};
hl.prototype.unmount = hu.prototype.unmount = function () {
	var e = this._internalRoot;
	if (e !== null) {
		this._internalRoot = null;
		var t = e.containerInfo;
		In(function () {
			pl(null, e, null, null);
		}),
			(t[Ht] = null);
	}
};
function hl(e) {
	this._internalRoot = e;
}
hl.prototype.unstable_scheduleHydration = function (e) {
	if (e) {
		var t = Sf();
		e = { blockedOn: null, target: e, priority: t };
		for (var n = 0; n < tn.length && t !== 0 && t < tn[n].priority; n++);
		tn.splice(n, 0, e), n === 0 && Ef(e);
	}
};
function mu(e) {
	return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ml(e) {
	return !(
		!e ||
		(e.nodeType !== 1 &&
			e.nodeType !== 9 &&
			e.nodeType !== 11 &&
			(e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
	);
}
function Gc() {}
function O1(e, t, n, r, i) {
	if (i) {
		if (typeof r == "function") {
			var o = r;
			r = function () {
				var u = Ko(l);
				o.call(u);
			};
		}
		var l = $0(t, r, e, 0, null, !1, !1, "", Gc);
		return (
			(e._reactRootContainer = l),
			(e[Ht] = l.current),
			gi(e.nodeType === 8 ? e.parentNode : e),
			In(),
			l
		);
	}
	for (; (i = e.lastChild); ) e.removeChild(i);
	if (typeof r == "function") {
		var a = r;
		r = function () {
			var u = Ko(s);
			a.call(u);
		};
	}
	var s = fu(e, 0, !1, null, null, !1, !1, "", Gc);
	return (
		(e._reactRootContainer = s),
		(e[Ht] = s.current),
		gi(e.nodeType === 8 ? e.parentNode : e),
		In(function () {
			pl(t, s, n, r);
		}),
		s
	);
}
function gl(e, t, n, r, i) {
	var o = n._reactRootContainer;
	if (o) {
		var l = o;
		if (typeof i == "function") {
			var a = i;
			i = function () {
				var s = Ko(l);
				a.call(s);
			};
		}
		pl(t, l, e, i);
	} else l = O1(n, t, e, i, r);
	return Ko(l);
}
yf = function (e) {
	switch (e.tag) {
		case 3:
			var t = e.stateNode;
			if (t.current.memoizedState.isDehydrated) {
				var n = Qr(t.pendingLanes);
				n !== 0 && (za(t, n | 1), Ge(t, ye()), !(J & 6) && ((wr = ye() + 500), yn()));
			}
			break;
		case 13:
			In(function () {
				var r = $t(e, 1);
				if (r !== null) {
					var i = Be();
					St(r, e, 1, i);
				}
			}),
				pu(e, 1);
	}
};
Ia = function (e) {
	if (e.tag === 13) {
		var t = $t(e, 134217728);
		if (t !== null) {
			var n = Be();
			St(t, e, 134217728, n);
		}
		pu(e, 134217728);
	}
};
xf = function (e) {
	if (e.tag === 13) {
		var t = pn(e),
			n = $t(e, t);
		if (n !== null) {
			var r = Be();
			St(n, e, t, r);
		}
		pu(e, t);
	}
};
Sf = function () {
	return re;
};
Cf = function (e, t) {
	var n = re;
	try {
		return (re = e), t();
	} finally {
		re = n;
	}
};
Ns = function (e, t, n) {
	switch (t) {
		case "input":
			if ((Cs(e, n), (t = n.name), n.type === "radio" && t != null)) {
				for (n = e; n.parentNode; ) n = n.parentNode;
				for (
					n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0;
					t < n.length;
					t++
				) {
					var r = n[t];
					if (r !== e && r.form === e.form) {
						var i = ll(r);
						if (!i) throw Error(O(90));
						qd(r), Cs(r, i);
					}
				}
			}
			break;
		case "textarea":
			ef(e, n);
			break;
		case "select":
			(t = n.value), t != null && ir(e, !!n.multiple, t, !1);
	}
};
af = au;
uf = In;
var z1 = { usingClientEntryPoint: !1, Events: [ji, Xn, ll, lf, sf, au] },
	Br = {
		findFiberByHostInstance: Tn,
		bundleType: 0,
		version: "18.2.0",
		rendererPackageName: "react-dom",
	},
	I1 = {
		bundleType: Br.bundleType,
		version: Br.version,
		rendererPackageName: Br.rendererPackageName,
		rendererConfig: Br.rendererConfig,
		overrideHookState: null,
		overrideHookStateDeletePath: null,
		overrideHookStateRenamePath: null,
		overrideProps: null,
		overridePropsDeletePath: null,
		overridePropsRenamePath: null,
		setErrorHandler: null,
		setSuspenseHandler: null,
		scheduleUpdate: null,
		currentDispatcherRef: Gt.ReactCurrentDispatcher,
		findHostInstanceByFiber: function (e) {
			return (e = ff(e)), e === null ? null : e.stateNode;
		},
		findFiberByHostInstance: Br.findFiberByHostInstance || j1,
		findHostInstancesForRefresh: null,
		scheduleRefresh: null,
		scheduleRoot: null,
		setRefreshHandler: null,
		getCurrentFiber: null,
		reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
	};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
	var ro = __REACT_DEVTOOLS_GLOBAL_HOOK__;
	if (!ro.isDisabled && ro.supportsFiber)
		try {
			(nl = ro.inject(I1)), (Mt = ro);
		} catch {}
}
et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = z1;
et.createPortal = function (e, t) {
	var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
	if (!mu(t)) throw Error(O(200));
	return _1(e, t, null, n);
};
et.createRoot = function (e, t) {
	if (!mu(e)) throw Error(O(299));
	var n = !1,
		r = "",
		i = W0;
	return (
		t != null &&
			(t.unstable_strictMode === !0 && (n = !0),
			t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
			t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
		(t = fu(e, 1, !1, null, null, n, !1, r, i)),
		(e[Ht] = t.current),
		gi(e.nodeType === 8 ? e.parentNode : e),
		new hu(t)
	);
};
et.findDOMNode = function (e) {
	if (e == null) return null;
	if (e.nodeType === 1) return e;
	var t = e._reactInternals;
	if (t === void 0)
		throw typeof e.render == "function"
			? Error(O(188))
			: ((e = Object.keys(e).join(",")), Error(O(268, e)));
	return (e = ff(t)), (e = e === null ? null : e.stateNode), e;
};
et.flushSync = function (e) {
	return In(e);
};
et.hydrate = function (e, t, n) {
	if (!ml(t)) throw Error(O(200));
	return gl(null, e, t, !0, n);
};
et.hydrateRoot = function (e, t, n) {
	if (!mu(e)) throw Error(O(405));
	var r = (n != null && n.hydratedSources) || null,
		i = !1,
		o = "",
		l = W0;
	if (
		(n != null &&
			(n.unstable_strictMode === !0 && (i = !0),
			n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
			n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
		(t = $0(t, null, e, 1, n ?? null, i, !1, o, l)),
		(e[Ht] = t.current),
		gi(e),
		r)
	)
		for (e = 0; e < r.length; e++)
			(n = r[e]),
				(i = n._getVersion),
				(i = i(n._source)),
				t.mutableSourceEagerHydrationData == null
					? (t.mutableSourceEagerHydrationData = [n, i])
					: t.mutableSourceEagerHydrationData.push(n, i);
	return new hl(t);
};
et.render = function (e, t, n) {
	if (!ml(t)) throw Error(O(200));
	return gl(null, e, t, !1, n);
};
et.unmountComponentAtNode = function (e) {
	if (!ml(e)) throw Error(O(40));
	return e._reactRootContainer
		? (In(function () {
				gl(null, null, e, !1, function () {
					(e._reactRootContainer = null), (e[Ht] = null);
				});
		  }),
		  !0)
		: !1;
};
et.unstable_batchedUpdates = au;
et.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
	if (!ml(n)) throw Error(O(200));
	if (e == null || e._reactInternals === void 0) throw Error(O(38));
	return gl(e, t, n, !1, r);
};
et.version = "18.2.0-next-9e3b772b8-20220608";
function G0() {
	if (
		!(
			typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
			typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
		)
	)
		try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(G0);
		} catch (e) {
			console.error(e);
		}
}
G0(), (Hd.exports = et);
var gu = Hd.exports;
const D1 = jd(gu),
	A1 = _d({ __proto__: null, default: D1 }, [gu]);
/**
 * @remix-run/router v1.13.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function me() {
	return (
		(me = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
			  }),
		me.apply(this, arguments)
	);
}
var ge;
(function (e) {
	(e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(ge || (ge = {}));
const Kc = "popstate";
function F1(e) {
	e === void 0 && (e = {});
	function t(r, i) {
		let { pathname: o, search: l, hash: a } = r.location;
		return Ti(
			"",
			{ pathname: o, search: l, hash: a },
			(i.state && i.state.usr) || null,
			(i.state && i.state.key) || "default"
		);
	}
	function n(r, i) {
		return typeof i == "string" ? i : An(i);
	}
	return b1(t, n, null, e);
}
function Q(e, t) {
	if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Dn(e, t) {
	if (!e) {
		typeof console < "u" && console.warn(t);
		try {
			throw new Error(t);
		} catch {}
	}
}
function B1() {
	return Math.random().toString(36).substr(2, 8);
}
function Qc(e, t) {
	return { usr: e.state, key: e.key, idx: t };
}
function Ti(e, t, n, r) {
	return (
		n === void 0 && (n = null),
		me(
			{ pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
			typeof t == "string" ? Kt(t) : t,
			{ state: n, key: (t && t.key) || r || B1() }
		)
	);
}
function An(e) {
	let { pathname: t = "/", search: n = "", hash: r = "" } = e;
	return (
		n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
		r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
		t
	);
}
function Kt(e) {
	let t = {};
	if (e) {
		let n = e.indexOf("#");
		n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
		let r = e.indexOf("?");
		r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))), e && (t.pathname = e);
	}
	return t;
}
function b1(e, t, n, r) {
	r === void 0 && (r = {});
	let { window: i = document.defaultView, v5Compat: o = !1 } = r,
		l = i.history,
		a = ge.Pop,
		s = null,
		u = c();
	u == null && ((u = 0), l.replaceState(me({}, l.state, { idx: u }), ""));
	function c() {
		return (l.state || { idx: null }).idx;
	}
	function d() {
		a = ge.Pop;
		let C = c(),
			f = C == null ? null : C - u;
		(u = C), s && s({ action: a, location: w.location, delta: f });
	}
	function p(C, f) {
		a = ge.Push;
		let h = Ti(w.location, C, f);
		n && n(h, C), (u = c() + 1);
		let v = Qc(h, u),
			m = w.createHref(h);
		try {
			l.pushState(v, "", m);
		} catch (E) {
			if (E instanceof DOMException && E.name === "DataCloneError") throw E;
			i.location.assign(m);
		}
		o && s && s({ action: a, location: w.location, delta: 1 });
	}
	function y(C, f) {
		a = ge.Replace;
		let h = Ti(w.location, C, f);
		n && n(h, C), (u = c());
		let v = Qc(h, u),
			m = w.createHref(h);
		l.replaceState(v, "", m), o && s && s({ action: a, location: w.location, delta: 0 });
	}
	function g(C) {
		let f = i.location.origin !== "null" ? i.location.origin : i.location.href,
			h = typeof C == "string" ? C : An(C);
		return (
			Q(f, "No window.location.(origin|href) available to create URL for href: " + h), new URL(h, f)
		);
	}
	let w = {
		get action() {
			return a;
		},
		get location() {
			return e(i, l);
		},
		listen(C) {
			if (s) throw new Error("A history only accepts one active listener");
			return (
				i.addEventListener(Kc, d),
				(s = C),
				() => {
					i.removeEventListener(Kc, d), (s = null);
				}
			);
		},
		createHref(C) {
			return t(i, C);
		},
		createURL: g,
		encodeLocation(C) {
			let f = g(C);
			return { pathname: f.pathname, search: f.search, hash: f.hash };
		},
		push: p,
		replace: y,
		go(C) {
			return l.go(C);
		},
	};
	return w;
}
var ve;
(function (e) {
	(e.data = "data"), (e.deferred = "deferred"), (e.redirect = "redirect"), (e.error = "error");
})(ve || (ve = {}));
const V1 = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
function U1(e) {
	return e.index === !0;
}
function aa(e, t, n, r) {
	return (
		n === void 0 && (n = []),
		r === void 0 && (r = {}),
		e.map((i, o) => {
			let l = [...n, o],
				a = typeof i.id == "string" ? i.id : l.join("-");
			if (
				(Q(i.index !== !0 || !i.children, "Cannot specify children on an index route"),
				Q(
					!r[a],
					'Found a route id collision on id "' +
						a +
						`".  Route id's must be globally unique within Data Router usages`
				),
				U1(i))
			) {
				let s = me({}, i, t(i), { id: a });
				return (r[a] = s), s;
			} else {
				let s = me({}, i, t(i), { id: a, children: void 0 });
				return (r[a] = s), i.children && (s.children = aa(i.children, t, l, r)), s;
			}
		})
	);
}
function rr(e, t, n) {
	n === void 0 && (n = "/");
	let r = typeof t == "string" ? Kt(t) : t,
		i = Er(r.pathname || "/", n);
	if (i == null) return null;
	let o = K0(e);
	$1(o);
	let l = null;
	for (let a = 0; l == null && a < o.length; ++a) l = J1(o[a], nm(i));
	return l;
}
function H1(e, t) {
	let { route: n, pathname: r, params: i } = e;
	return { id: n.id, pathname: r, params: i, data: t[n.id], handle: n.handle };
}
function K0(e, t, n, r) {
	t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
	let i = (o, l, a) => {
		let s = {
			relativePath: a === void 0 ? o.path || "" : a,
			caseSensitive: o.caseSensitive === !0,
			childrenIndex: l,
			route: o,
		};
		s.relativePath.startsWith("/") &&
			(Q(
				s.relativePath.startsWith(r),
				'Absolute route path "' +
					s.relativePath +
					'" nested under path ' +
					('"' + r + '" is not valid. An absolute child route path ') +
					"must start with the combined path of all its parent routes."
			),
			(s.relativePath = s.relativePath.slice(r.length)));
		let u = bt([r, s.relativePath]),
			c = n.concat(s);
		o.children &&
			o.children.length > 0 &&
			(Q(
				o.index !== !0,
				"Index routes must not have child routes. Please remove " +
					('all child routes from route path "' + u + '".')
			),
			K0(o.children, t, c, u)),
			!(o.path == null && !o.index) && t.push({ path: u, score: Z1(u, o.index), routesMeta: c });
	};
	return (
		e.forEach((o, l) => {
			var a;
			if (o.path === "" || !((a = o.path) != null && a.includes("?"))) i(o, l);
			else for (let s of Q0(o.path)) i(o, l, s);
		}),
		t
	);
}
function Q0(e) {
	let t = e.split("/");
	if (t.length === 0) return [];
	let [n, ...r] = t,
		i = n.endsWith("?"),
		o = n.replace(/\?$/, "");
	if (r.length === 0) return i ? [o, ""] : [o];
	let l = Q0(r.join("/")),
		a = [];
	return (
		a.push(...l.map(s => (s === "" ? o : [o, s].join("/")))),
		i && a.push(...l),
		a.map(s => (e.startsWith("/") && s === "" ? "/" : s))
	);
}
function $1(e) {
	e.sort((t, n) =>
		t.score !== n.score
			? n.score - t.score
			: q1(
					t.routesMeta.map(r => r.childrenIndex),
					n.routesMeta.map(r => r.childrenIndex)
			  )
	);
}
const W1 = /^:\w+$/,
	G1 = 3,
	K1 = 2,
	Q1 = 1,
	Y1 = 10,
	X1 = -2,
	Yc = e => e === "*";
function Z1(e, t) {
	let n = e.split("/"),
		r = n.length;
	return (
		n.some(Yc) && (r += X1),
		t && (r += K1),
		n.filter(i => !Yc(i)).reduce((i, o) => i + (W1.test(o) ? G1 : o === "" ? Q1 : Y1), r)
	);
}
function q1(e, t) {
	return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
		? e[e.length - 1] - t[t.length - 1]
		: 0;
}
function J1(e, t) {
	let { routesMeta: n } = e,
		r = {},
		i = "/",
		o = [];
	for (let l = 0; l < n.length; ++l) {
		let a = n[l],
			s = l === n.length - 1,
			u = i === "/" ? t : t.slice(i.length) || "/",
			c = em({ path: a.relativePath, caseSensitive: a.caseSensitive, end: s }, u);
		if (!c) return null;
		Object.assign(r, c.params);
		let d = a.route;
		o.push({
			params: r,
			pathname: bt([i, c.pathname]),
			pathnameBase: lm(bt([i, c.pathnameBase])),
			route: d,
		}),
			c.pathnameBase !== "/" && (i = bt([i, c.pathnameBase]));
	}
	return o;
}
function em(e, t) {
	typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
	let [n, r] = tm(e.path, e.caseSensitive, e.end),
		i = t.match(n);
	if (!i) return null;
	let o = i[0],
		l = o.replace(/(.)\/+$/, "$1"),
		a = i.slice(1);
	return {
		params: r.reduce((u, c, d) => {
			let { paramName: p, isOptional: y } = c;
			if (p === "*") {
				let w = a[d] || "";
				l = o.slice(0, o.length - w.length).replace(/(.)\/+$/, "$1");
			}
			const g = a[d];
			return y && !g ? (u[p] = void 0) : (u[p] = rm(g || "", p)), u;
		}, {}),
		pathname: o,
		pathnameBase: l,
		pattern: e,
	};
}
function tm(e, t, n) {
	t === void 0 && (t = !1),
		n === void 0 && (n = !0),
		Dn(
			e === "*" || !e.endsWith("*") || e.endsWith("/*"),
			'Route path "' +
				e +
				'" will be treated as if it were ' +
				('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
				"always follow a `/` in the pattern. To get rid of this warning, " +
				('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
		);
	let r = [],
		i =
			"^" +
			e
				.replace(/\/*\*?$/, "")
				.replace(/^\/*/, "/")
				.replace(/[\\.*+^${}|()[\]]/g, "\\$&")
				.replace(
					/\/:(\w+)(\?)?/g,
					(l, a, s) => (
						r.push({ paramName: a, isOptional: s != null }), s ? "/?([^\\/]+)?" : "/([^\\/]+)"
					)
				);
	return (
		e.endsWith("*")
			? (r.push({ paramName: "*" }), (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
			: n
			  ? (i += "\\/*$")
			  : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
		[new RegExp(i, t ? void 0 : "i"), r]
	);
}
function nm(e) {
	try {
		return decodeURI(e);
	} catch (t) {
		return (
			Dn(
				!1,
				'The URL path "' +
					e +
					'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
					("encoding (" + t + ").")
			),
			e
		);
	}
}
function rm(e, t) {
	try {
		return decodeURIComponent(e);
	} catch (n) {
		return (
			Dn(
				!1,
				'The value for the URL param "' +
					t +
					'" will not be decoded because' +
					(' the string "' + e + '" is a malformed URL segment. This is probably') +
					(" due to a bad percent encoding (" + n + ").")
			),
			e
		);
	}
}
function Er(e, t) {
	if (t === "/") return e;
	if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
	let n = t.endsWith("/") ? t.length - 1 : t.length,
		r = e.charAt(n);
	return r && r !== "/" ? null : e.slice(n) || "/";
}
function im(e, t) {
	t === void 0 && (t = "/");
	let { pathname: n, search: r = "", hash: i = "" } = typeof e == "string" ? Kt(e) : e;
	return { pathname: n ? (n.startsWith("/") ? n : om(n, t)) : t, search: sm(r), hash: am(i) };
}
function om(e, t) {
	let n = t.replace(/\/+$/, "").split("/");
	return (
		e.split("/").forEach(i => {
			i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
		}),
		n.length > 1 ? n.join("/") : "/"
	);
}
function rs(e, t, n, r) {
	return (
		"Cannot include a '" +
		e +
		"' character in a manually specified " +
		("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") +
		("`to." + n + "` field. Alternatively you may provide the full path as ") +
		'a string in <Link to="..."> and the router will parse it for you.'
	);
}
function zi(e) {
	return e.filter((t, n) => n === 0 || (t.route.path && t.route.path.length > 0));
}
function vl(e, t, n, r) {
	r === void 0 && (r = !1);
	let i;
	typeof e == "string"
		? (i = Kt(e))
		: ((i = me({}, e)),
		  Q(!i.pathname || !i.pathname.includes("?"), rs("?", "pathname", "search", i)),
		  Q(!i.pathname || !i.pathname.includes("#"), rs("#", "pathname", "hash", i)),
		  Q(!i.search || !i.search.includes("#"), rs("#", "search", "hash", i)));
	let o = e === "" || i.pathname === "",
		l = o ? "/" : i.pathname,
		a;
	if (l == null) a = n;
	else if (r) {
		let d = t[t.length - 1].replace(/^\//, "").split("/");
		if (l.startsWith("..")) {
			let p = l.split("/");
			for (; p[0] === ".."; ) p.shift(), d.pop();
			i.pathname = p.join("/");
		}
		a = "/" + d.join("/");
	} else {
		let d = t.length - 1;
		if (l.startsWith("..")) {
			let p = l.split("/");
			for (; p[0] === ".."; ) p.shift(), (d -= 1);
			i.pathname = p.join("/");
		}
		a = d >= 0 ? t[d] : "/";
	}
	let s = im(i, a),
		u = l && l !== "/" && l.endsWith("/"),
		c = (o || l === ".") && n.endsWith("/");
	return !s.pathname.endsWith("/") && (u || c) && (s.pathname += "/"), s;
}
const bt = e => e.join("/").replace(/\/\/+/g, "/"),
	lm = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
	sm = e => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
	am = e => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class vu {
	constructor(t, n, r, i) {
		i === void 0 && (i = !1),
			(this.status = t),
			(this.statusText = n || ""),
			(this.internal = i),
			r instanceof Error ? ((this.data = r.toString()), (this.error = r)) : (this.data = r);
	}
}
function Y0(e) {
	return (
		e != null &&
		typeof e.status == "number" &&
		typeof e.statusText == "string" &&
		typeof e.internal == "boolean" &&
		"data" in e
	);
}
const X0 = ["post", "put", "patch", "delete"],
	um = new Set(X0),
	cm = ["get", ...X0],
	dm = new Set(cm),
	fm = new Set([301, 302, 303, 307, 308]),
	pm = new Set([307, 308]),
	is = {
		state: "idle",
		location: void 0,
		formMethod: void 0,
		formAction: void 0,
		formEncType: void 0,
		formData: void 0,
		json: void 0,
		text: void 0,
	},
	hm = {
		state: "idle",
		data: void 0,
		formMethod: void 0,
		formAction: void 0,
		formEncType: void 0,
		formData: void 0,
		json: void 0,
		text: void 0,
	},
	br = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
	Z0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
	mm = e => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
	q0 = "remix-router-transitions";
function gm(e) {
	const t = e.window ? e.window : typeof window < "u" ? window : void 0,
		n = typeof t < "u" && typeof t.document < "u" && typeof t.document.createElement < "u",
		r = !n;
	Q(e.routes.length > 0, "You must provide a non-empty routes array to createRouter");
	let i;
	if (e.mapRouteProperties) i = e.mapRouteProperties;
	else if (e.detectErrorBoundary) {
		let S = e.detectErrorBoundary;
		i = k => ({ hasErrorBoundary: S(k) });
	} else i = mm;
	let o = {},
		l = aa(e.routes, i, void 0, o),
		a,
		s = e.basename || "/",
		u = me({ v7_fetcherPersist: !1, v7_normalizeFormMethod: !1, v7_prependBasename: !1 }, e.future),
		c = null,
		d = new Set(),
		p = null,
		y = null,
		g = null,
		w = e.hydrationData != null,
		C = rr(l, e.history.location, s),
		f = null;
	if (C == null) {
		let S = ot(404, { pathname: e.history.location.pathname }),
			{ matches: k, route: R } = rd(l);
		(C = k), (f = { [R.id]: S });
	}
	let h = !C.some(S => S.route.lazy) && (!C.some(S => S.route.loader) || e.hydrationData != null),
		v,
		m = {
			historyAction: e.history.action,
			location: e.history.location,
			matches: C,
			initialized: h,
			navigation: is,
			restoreScrollPosition: e.hydrationData != null ? !1 : null,
			preventScrollReset: !1,
			revalidation: "idle",
			loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
			actionData: (e.hydrationData && e.hydrationData.actionData) || null,
			errors: (e.hydrationData && e.hydrationData.errors) || f,
			fetchers: new Map(),
			blockers: new Map(),
		},
		E = ge.Pop,
		L = !1,
		T,
		_ = !1,
		j = new Map(),
		N = null,
		z = !1,
		b = !1,
		F = [],
		ee = [],
		G = new Map(),
		Ee = 0,
		Ke = -1,
		I = new Map(),
		A = new Set(),
		U = new Map(),
		ne = new Map(),
		te = new Set(),
		rt = new Map(),
		De = new Map(),
		xn = !1;
	function jt() {
		if (
			((c = e.history.listen(S => {
				let { action: k, location: R, delta: D } = S;
				if (xn) {
					xn = !1;
					return;
				}
				Dn(
					De.size === 0 || D != null,
					"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
				);
				let V = Iu({ currentLocation: m.location, nextLocation: R, historyAction: k });
				if (V && D != null) {
					(xn = !0),
						e.history.go(D * -1),
						Bi(V, {
							state: "blocked",
							location: R,
							proceed() {
								Bi(V, { state: "proceeding", proceed: void 0, reset: void 0, location: R }),
									e.history.go(D);
							},
							reset() {
								let K = new Map(m.blockers);
								K.set(V, br), Qe({ blockers: K });
							},
						});
					return;
				}
				return Sn(k, R);
			})),
			n)
		) {
			Lm(t, j);
			let S = () => Mm(t, j);
			t.addEventListener("pagehide", S), (N = () => t.removeEventListener("pagehide", S));
		}
		return m.initialized || Sn(ge.Pop, m.location), v;
	}
	function Vn() {
		c && c(),
			N && N(),
			d.clear(),
			T && T.abort(),
			m.fetchers.forEach((S, k) => Fi(k)),
			m.blockers.forEach((S, k) => zu(k));
	}
	function qp(S) {
		return d.add(S), () => d.delete(S);
	}
	function Qe(S, k) {
		k === void 0 && (k = {}), (m = me({}, m, S));
		let R = [],
			D = [];
		u.v7_fetcherPersist &&
			m.fetchers.forEach((V, K) => {
				V.state === "idle" && (te.has(K) ? D.push(K) : R.push(K));
			}),
			[...d].forEach(V =>
				V(m, {
					deletedFetchers: D,
					unstable_viewTransitionOpts: k.viewTransitionOpts,
					unstable_flushSync: k.flushSync === !0,
				})
			),
			u.v7_fetcherPersist && (R.forEach(V => m.fetchers.delete(V)), D.forEach(V => Fi(V)));
	}
	function Mr(S, k, R) {
		var D, V;
		let { flushSync: K } = R === void 0 ? {} : R,
			W =
				m.actionData != null &&
				m.navigation.formMethod != null &&
				wt(m.navigation.formMethod) &&
				m.navigation.state === "loading" &&
				((D = S.state) == null ? void 0 : D._isRedirect) !== !0,
			$;
		k.actionData
			? Object.keys(k.actionData).length > 0
				? ($ = k.actionData)
				: ($ = null)
			: W
			  ? ($ = m.actionData)
			  : ($ = null);
		let H = k.loaderData ? nd(m.loaderData, k.loaderData, k.matches || [], k.errors) : m.loaderData,
			Z = m.blockers;
		Z.size > 0 && ((Z = new Map(Z)), Z.forEach((ie, ce) => Z.set(ce, br)));
		let Me =
			L === !0 ||
			(m.navigation.formMethod != null &&
				wt(m.navigation.formMethod) &&
				((V = S.state) == null ? void 0 : V._isRedirect) !== !0);
		a && ((l = a), (a = void 0)),
			z ||
				E === ge.Pop ||
				(E === ge.Push
					? e.history.push(S, S.state)
					: E === ge.Replace && e.history.replace(S, S.state));
		let Y;
		if (E === ge.Pop) {
			let ie = j.get(m.location.pathname);
			ie && ie.has(S.pathname)
				? (Y = { currentLocation: m.location, nextLocation: S })
				: j.has(S.pathname) && (Y = { currentLocation: S, nextLocation: m.location });
		} else if (_) {
			let ie = j.get(m.location.pathname);
			ie ? ie.add(S.pathname) : ((ie = new Set([S.pathname])), j.set(m.location.pathname, ie)),
				(Y = { currentLocation: m.location, nextLocation: S });
		}
		Qe(
			me({}, k, {
				actionData: $,
				loaderData: H,
				historyAction: E,
				location: S,
				initialized: !0,
				navigation: is,
				revalidation: "idle",
				restoreScrollPosition: Au(S, k.matches || m.matches),
				preventScrollReset: Me,
				blockers: Z,
			}),
			{ viewTransitionOpts: Y, flushSync: K === !0 }
		),
			(E = ge.Pop),
			(L = !1),
			(_ = !1),
			(z = !1),
			(b = !1),
			(F = []),
			(ee = []);
	}
	async function Mu(S, k) {
		if (typeof S == "number") {
			e.history.go(S);
			return;
		}
		let R = ua(
				m.location,
				m.matches,
				s,
				u.v7_prependBasename,
				S,
				k == null ? void 0 : k.fromRouteId,
				k == null ? void 0 : k.relative
			),
			{ path: D, submission: V, error: K } = Xc(u.v7_normalizeFormMethod, !1, R, k),
			W = m.location,
			$ = Ti(m.location, D, k && k.state);
		$ = me({}, $, e.history.encodeLocation($));
		let H = k && k.replace != null ? k.replace : void 0,
			Z = ge.Push;
		H === !0
			? (Z = ge.Replace)
			: H === !1 ||
			  (V != null &&
					wt(V.formMethod) &&
					V.formAction === m.location.pathname + m.location.search &&
					(Z = ge.Replace));
		let Me = k && "preventScrollReset" in k ? k.preventScrollReset === !0 : void 0,
			Y = (k && k.unstable_flushSync) === !0,
			ie = Iu({ currentLocation: W, nextLocation: $, historyAction: Z });
		if (ie) {
			Bi(ie, {
				state: "blocked",
				location: $,
				proceed() {
					Bi(ie, { state: "proceeding", proceed: void 0, reset: void 0, location: $ }), Mu(S, k);
				},
				reset() {
					let ce = new Map(m.blockers);
					ce.set(ie, br), Qe({ blockers: ce });
				},
			});
			return;
		}
		return await Sn(Z, $, {
			submission: V,
			pendingError: K,
			preventScrollReset: Me,
			replace: k && k.replace,
			enableViewTransition: k && k.unstable_viewTransition,
			flushSync: Y,
		});
	}
	function Jp() {
		if ((Tl(), Qe({ revalidation: "loading" }), m.navigation.state !== "submitting")) {
			if (m.navigation.state === "idle") {
				Sn(m.historyAction, m.location, { startUninterruptedRevalidation: !0 });
				return;
			}
			Sn(E || m.historyAction, m.navigation.location, { overrideNavigation: m.navigation });
		}
	}
	async function Sn(S, k, R) {
		T && T.abort(),
			(T = null),
			(E = S),
			(z = (R && R.startUninterruptedRevalidation) === !0),
			a2(m.location, m.matches),
			(L = (R && R.preventScrollReset) === !0),
			(_ = (R && R.enableViewTransition) === !0);
		let D = a || l,
			V = R && R.overrideNavigation,
			K = rr(D, k, s),
			W = (R && R.flushSync) === !0;
		if (!K) {
			let ce = ot(404, { pathname: k.pathname }),
				{ matches: Ae, route: Et } = rd(D);
			Pl(), Mr(k, { matches: Ae, loaderData: {}, errors: { [Et.id]: ce } }, { flushSync: W });
			return;
		}
		if (
			m.initialized &&
			!b &&
			Sm(m.location, k) &&
			!(R && R.submission && wt(R.submission.formMethod))
		) {
			Mr(k, { matches: K }, { flushSync: W });
			return;
		}
		T = new AbortController();
		let $ = Ur(e.history, k, T.signal, R && R.submission),
			H,
			Z;
		if (R && R.pendingError) Z = { [oi(K).route.id]: R.pendingError };
		else if (R && R.submission && wt(R.submission.formMethod)) {
			let ce = await e2($, k, R.submission, K, { replace: R.replace, flushSync: W });
			if (ce.shortCircuited) return;
			(H = ce.pendingActionData),
				(Z = ce.pendingActionError),
				(V = os(k, R.submission)),
				(W = !1),
				($ = new Request($.url, { signal: $.signal }));
		}
		let {
			shortCircuited: Me,
			loaderData: Y,
			errors: ie,
		} = await t2($, k, K, V, R && R.submission, R && R.fetcherSubmission, R && R.replace, W, H, Z);
		Me ||
			((T = null),
			Mr(k, me({ matches: K }, H ? { actionData: H } : {}, { loaderData: Y, errors: ie })));
	}
	async function e2(S, k, R, D, V) {
		V === void 0 && (V = {}), Tl();
		let K = Tm(k, R);
		Qe({ navigation: K }, { flushSync: V.flushSync === !0 });
		let W,
			$ = da(D, k);
		if (!$.route.action && !$.route.lazy)
			W = {
				type: ve.error,
				error: ot(405, { method: S.method, pathname: k.pathname, routeId: $.route.id }),
			};
		else if (((W = await Vr("action", S, $, D, o, i, s)), S.signal.aborted))
			return { shortCircuited: !0 };
		if (cr(W)) {
			let H;
			return (
				V && V.replace != null
					? (H = V.replace)
					: (H = W.location === m.location.pathname + m.location.search),
				await Nr(m, W, { submission: R, replace: H }),
				{ shortCircuited: !0 }
			);
		}
		if (li(W)) {
			let H = oi(D, $.route.id);
			return (
				(V && V.replace) !== !0 && (E = ge.Push),
				{ pendingActionData: {}, pendingActionError: { [H.route.id]: W.error } }
			);
		}
		if (Mn(W)) throw ot(400, { type: "defer-action" });
		return { pendingActionData: { [$.route.id]: W.data } };
	}
	async function t2(S, k, R, D, V, K, W, $, H, Z) {
		let Me = D || os(k, V),
			Y = V || K || ld(Me),
			ie = a || l,
			[ce, Ae] = Zc(e.history, m, R, Y, k, b, F, ee, te, U, A, ie, s, H, Z);
		if (
			(Pl(
				oe => !(R && R.some(it => it.route.id === oe)) || (ce && ce.some(it => it.route.id === oe))
			),
			(Ke = ++Ee),
			ce.length === 0 && Ae.length === 0)
		) {
			let oe = ju();
			return (
				Mr(
					k,
					me(
						{ matches: R, loaderData: {}, errors: Z || null },
						H ? { actionData: H } : {},
						oe ? { fetchers: new Map(m.fetchers) } : {}
					),
					{ flushSync: $ }
				),
				{ shortCircuited: !0 }
			);
		}
		if (!z) {
			Ae.forEach(it => {
				let xe = m.fetchers.get(it.key),
					Cn = Hr(void 0, xe ? xe.data : void 0);
				m.fetchers.set(it.key, Cn);
			});
			let oe = H || m.actionData;
			Qe(
				me(
					{ navigation: Me },
					oe ? (Object.keys(oe).length === 0 ? { actionData: null } : { actionData: oe }) : {},
					Ae.length > 0 ? { fetchers: new Map(m.fetchers) } : {}
				),
				{ flushSync: $ }
			);
		}
		Ae.forEach(oe => {
			G.has(oe.key) && Yt(oe.key), oe.controller && G.set(oe.key, oe.controller);
		});
		let Et = () => Ae.forEach(oe => Yt(oe.key));
		T && T.signal.addEventListener("abort", Et);
		let { results: _r, loaderResults: Ll, fetcherResults: Un } = await Nu(m.matches, R, ce, Ae, S);
		if (S.signal.aborted) return { shortCircuited: !0 };
		T && T.signal.removeEventListener("abort", Et), Ae.forEach(oe => G.delete(oe.key));
		let pt = id(_r);
		if (pt) {
			if (pt.idx >= ce.length) {
				let oe = Ae[pt.idx - ce.length].key;
				A.add(oe);
			}
			return await Nr(m, pt.result, { replace: W }), { shortCircuited: !0 };
		}
		let { loaderData: bi, errors: Ml } = td(m, R, ce, Ll, Z, Ae, Un, rt);
		rt.forEach((oe, it) => {
			oe.subscribe(xe => {
				(xe || oe.done) && rt.delete(it);
			});
		});
		let Nl = ju(),
			Rl = Ou(Ke),
			Hn = Nl || Rl || Ae.length > 0;
		return me({ loaderData: bi, errors: Ml }, Hn ? { fetchers: new Map(m.fetchers) } : {});
	}
	function n2(S, k, R, D) {
		if (r)
			throw new Error(
				"router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
			);
		G.has(S) && Yt(S);
		let V = (D && D.unstable_flushSync) === !0,
			K = a || l,
			W = ua(m.location, m.matches, s, u.v7_prependBasename, R, k, D == null ? void 0 : D.relative),
			$ = rr(K, W, s);
		if (!$) {
			Rr(S, k, ot(404, { pathname: W }), { flushSync: V });
			return;
		}
		let { path: H, submission: Z, error: Me } = Xc(u.v7_normalizeFormMethod, !0, W, D);
		if (Me) {
			Rr(S, k, Me, { flushSync: V });
			return;
		}
		let Y = da($, H);
		if (((L = (D && D.preventScrollReset) === !0), Z && wt(Z.formMethod))) {
			r2(S, k, H, Y, $, V, Z);
			return;
		}
		U.set(S, { routeId: k, path: H }), i2(S, k, H, Y, $, V, Z);
	}
	async function r2(S, k, R, D, V, K, W) {
		if ((Tl(), U.delete(S), !D.route.action && !D.route.lazy)) {
			let xe = ot(405, { method: W.formMethod, pathname: R, routeId: k });
			Rr(S, k, xe, { flushSync: K });
			return;
		}
		let $ = m.fetchers.get(S);
		Qt(S, Pm(W, $), { flushSync: K });
		let H = new AbortController(),
			Z = Ur(e.history, R, H.signal, W);
		G.set(S, H);
		let Me = Ee,
			Y = await Vr("action", Z, D, V, o, i, s);
		if (Z.signal.aborted) {
			G.get(S) === H && G.delete(S);
			return;
		}
		if (te.has(S)) {
			Qt(S, qt(void 0));
			return;
		}
		if (cr(Y))
			if ((G.delete(S), Ke > Me)) {
				Qt(S, qt(void 0));
				return;
			} else return A.add(S), Qt(S, Hr(W)), Nr(m, Y, { fetcherSubmission: W });
		if (li(Y)) {
			Rr(S, k, Y.error);
			return;
		}
		if (Mn(Y)) throw ot(400, { type: "defer-action" });
		let ie = m.navigation.location || m.location,
			ce = Ur(e.history, ie, H.signal),
			Ae = a || l,
			Et = m.navigation.state !== "idle" ? rr(Ae, m.navigation.location, s) : m.matches;
		Q(Et, "Didn't find any matches after fetcher action");
		let _r = ++Ee;
		I.set(S, _r);
		let Ll = Hr(W, Y.data);
		m.fetchers.set(S, Ll);
		let [Un, pt] = Zc(
			e.history,
			m,
			Et,
			W,
			ie,
			b,
			F,
			ee,
			te,
			U,
			A,
			Ae,
			s,
			{ [D.route.id]: Y.data },
			void 0
		);
		pt
			.filter(xe => xe.key !== S)
			.forEach(xe => {
				let Cn = xe.key,
					Fu = m.fetchers.get(Cn),
					c2 = Hr(void 0, Fu ? Fu.data : void 0);
				m.fetchers.set(Cn, c2), G.has(Cn) && Yt(Cn), xe.controller && G.set(Cn, xe.controller);
			}),
			Qe({ fetchers: new Map(m.fetchers) });
		let bi = () => pt.forEach(xe => Yt(xe.key));
		H.signal.addEventListener("abort", bi);
		let {
			results: Ml,
			loaderResults: Nl,
			fetcherResults: Rl,
		} = await Nu(m.matches, Et, Un, pt, ce);
		if (H.signal.aborted) return;
		H.signal.removeEventListener("abort", bi),
			I.delete(S),
			G.delete(S),
			pt.forEach(xe => G.delete(xe.key));
		let Hn = id(Ml);
		if (Hn) {
			if (Hn.idx >= Un.length) {
				let xe = pt[Hn.idx - Un.length].key;
				A.add(xe);
			}
			return Nr(m, Hn.result);
		}
		let { loaderData: oe, errors: it } = td(m, m.matches, Un, Nl, void 0, pt, Rl, rt);
		if (m.fetchers.has(S)) {
			let xe = qt(Y.data);
			m.fetchers.set(S, xe);
		}
		Ou(_r),
			m.navigation.state === "loading" && _r > Ke
				? (Q(E, "Expected pending action"),
				  T && T.abort(),
				  Mr(m.navigation.location, {
						matches: Et,
						loaderData: oe,
						errors: it,
						fetchers: new Map(m.fetchers),
				  }))
				: (Qe({
						errors: it,
						loaderData: nd(m.loaderData, oe, Et, it),
						fetchers: new Map(m.fetchers),
				  }),
				  (b = !1));
	}
	async function i2(S, k, R, D, V, K, W) {
		let $ = m.fetchers.get(S);
		Qt(S, Hr(W, $ ? $.data : void 0), { flushSync: K });
		let H = new AbortController(),
			Z = Ur(e.history, R, H.signal);
		G.set(S, H);
		let Me = Ee,
			Y = await Vr("loader", Z, D, V, o, i, s);
		if (
			(Mn(Y) && (Y = (await tp(Y, Z.signal, !0)) || Y),
			G.get(S) === H && G.delete(S),
			!Z.signal.aborted)
		) {
			if (te.has(S)) {
				Qt(S, qt(void 0));
				return;
			}
			if (cr(Y))
				if (Ke > Me) {
					Qt(S, qt(void 0));
					return;
				} else {
					A.add(S), await Nr(m, Y);
					return;
				}
			if (li(Y)) {
				Rr(S, k, Y.error);
				return;
			}
			Q(!Mn(Y), "Unhandled fetcher deferred data"), Qt(S, qt(Y.data));
		}
	}
	async function Nr(S, k, R) {
		let { submission: D, fetcherSubmission: V, replace: K } = R === void 0 ? {} : R;
		k.revalidate && (b = !0);
		let W = Ti(S.location, k.location, { _isRedirect: !0 });
		if ((Q(W, "Expected a location on the redirect navigation"), n)) {
			let ie = !1;
			if (k.reloadDocument) ie = !0;
			else if (Z0.test(k.location)) {
				const ce = e.history.createURL(k.location);
				ie = ce.origin !== t.location.origin || Er(ce.pathname, s) == null;
			}
			if (ie) {
				K ? t.location.replace(k.location) : t.location.assign(k.location);
				return;
			}
		}
		T = null;
		let $ = K === !0 ? ge.Replace : ge.Push,
			{ formMethod: H, formAction: Z, formEncType: Me } = S.navigation;
		!D && !V && H && Z && Me && (D = ld(S.navigation));
		let Y = D || V;
		if (pm.has(k.status) && Y && wt(Y.formMethod))
			await Sn($, W, { submission: me({}, Y, { formAction: k.location }), preventScrollReset: L });
		else {
			let ie = os(W, D);
			await Sn($, W, { overrideNavigation: ie, fetcherSubmission: V, preventScrollReset: L });
		}
	}
	async function Nu(S, k, R, D, V) {
		let K = await Promise.all([
				...R.map(H => Vr("loader", V, H, k, o, i, s)),
				...D.map(H =>
					H.matches && H.match && H.controller
						? Vr("loader", Ur(e.history, H.path, H.controller.signal), H.match, H.matches, o, i, s)
						: { type: ve.error, error: ot(404, { pathname: H.path }) }
				),
			]),
			W = K.slice(0, R.length),
			$ = K.slice(R.length);
		return (
			await Promise.all([
				od(
					S,
					R,
					W,
					W.map(() => V.signal),
					!1,
					m.loaderData
				),
				od(
					S,
					D.map(H => H.match),
					$,
					D.map(H => (H.controller ? H.controller.signal : null)),
					!0
				),
			]),
			{ results: K, loaderResults: W, fetcherResults: $ }
		);
	}
	function Tl() {
		(b = !0),
			F.push(...Pl()),
			U.forEach((S, k) => {
				G.has(k) && (ee.push(k), Yt(k));
			});
	}
	function Qt(S, k, R) {
		R === void 0 && (R = {}),
			m.fetchers.set(S, k),
			Qe({ fetchers: new Map(m.fetchers) }, { flushSync: (R && R.flushSync) === !0 });
	}
	function Rr(S, k, R, D) {
		D === void 0 && (D = {});
		let V = oi(m.matches, k);
		Fi(S),
			Qe(
				{ errors: { [V.route.id]: R }, fetchers: new Map(m.fetchers) },
				{ flushSync: (D && D.flushSync) === !0 }
			);
	}
	function Ru(S) {
		return (
			u.v7_fetcherPersist && (ne.set(S, (ne.get(S) || 0) + 1), te.has(S) && te.delete(S)),
			m.fetchers.get(S) || hm
		);
	}
	function Fi(S) {
		let k = m.fetchers.get(S);
		G.has(S) && !(k && k.state === "loading" && I.has(S)) && Yt(S),
			U.delete(S),
			I.delete(S),
			A.delete(S),
			te.delete(S),
			m.fetchers.delete(S);
	}
	function o2(S) {
		if (u.v7_fetcherPersist) {
			let k = (ne.get(S) || 0) - 1;
			k <= 0 ? (ne.delete(S), te.add(S)) : ne.set(S, k);
		} else Fi(S);
		Qe({ fetchers: new Map(m.fetchers) });
	}
	function Yt(S) {
		let k = G.get(S);
		Q(k, "Expected fetch controller: " + S), k.abort(), G.delete(S);
	}
	function _u(S) {
		for (let k of S) {
			let R = Ru(k),
				D = qt(R.data);
			m.fetchers.set(k, D);
		}
	}
	function ju() {
		let S = [],
			k = !1;
		for (let R of A) {
			let D = m.fetchers.get(R);
			Q(D, "Expected fetcher: " + R), D.state === "loading" && (A.delete(R), S.push(R), (k = !0));
		}
		return _u(S), k;
	}
	function Ou(S) {
		let k = [];
		for (let [R, D] of I)
			if (D < S) {
				let V = m.fetchers.get(R);
				Q(V, "Expected fetcher: " + R), V.state === "loading" && (Yt(R), I.delete(R), k.push(R));
			}
		return _u(k), k.length > 0;
	}
	function l2(S, k) {
		let R = m.blockers.get(S) || br;
		return De.get(S) !== k && De.set(S, k), R;
	}
	function zu(S) {
		m.blockers.delete(S), De.delete(S);
	}
	function Bi(S, k) {
		let R = m.blockers.get(S) || br;
		Q(
			(R.state === "unblocked" && k.state === "blocked") ||
				(R.state === "blocked" && k.state === "blocked") ||
				(R.state === "blocked" && k.state === "proceeding") ||
				(R.state === "blocked" && k.state === "unblocked") ||
				(R.state === "proceeding" && k.state === "unblocked"),
			"Invalid blocker state transition: " + R.state + " -> " + k.state
		);
		let D = new Map(m.blockers);
		D.set(S, k), Qe({ blockers: D });
	}
	function Iu(S) {
		let { currentLocation: k, nextLocation: R, historyAction: D } = S;
		if (De.size === 0) return;
		De.size > 1 && Dn(!1, "A router only supports one blocker at a time");
		let V = Array.from(De.entries()),
			[K, W] = V[V.length - 1],
			$ = m.blockers.get(K);
		if (
			!($ && $.state === "proceeding") &&
			W({ currentLocation: k, nextLocation: R, historyAction: D })
		)
			return K;
	}
	function Pl(S) {
		let k = [];
		return (
			rt.forEach((R, D) => {
				(!S || S(D)) && (R.cancel(), k.push(D), rt.delete(D));
			}),
			k
		);
	}
	function s2(S, k, R) {
		if (((p = S), (g = k), (y = R || null), !w && m.navigation === is)) {
			w = !0;
			let D = Au(m.location, m.matches);
			D != null && Qe({ restoreScrollPosition: D });
		}
		return () => {
			(p = null), (g = null), (y = null);
		};
	}
	function Du(S, k) {
		return (
			(y &&
				y(
					S,
					k.map(D => H1(D, m.loaderData))
				)) ||
			S.key
		);
	}
	function a2(S, k) {
		if (p && g) {
			let R = Du(S, k);
			p[R] = g();
		}
	}
	function Au(S, k) {
		if (p) {
			let R = Du(S, k),
				D = p[R];
			if (typeof D == "number") return D;
		}
		return null;
	}
	function u2(S) {
		(o = {}), (a = aa(S, i, void 0, o));
	}
	return (
		(v = {
			get basename() {
				return s;
			},
			get state() {
				return m;
			},
			get routes() {
				return l;
			},
			get window() {
				return t;
			},
			initialize: jt,
			subscribe: qp,
			enableScrollRestoration: s2,
			navigate: Mu,
			fetch: n2,
			revalidate: Jp,
			createHref: S => e.history.createHref(S),
			encodeLocation: S => e.history.encodeLocation(S),
			getFetcher: Ru,
			deleteFetcher: o2,
			dispose: Vn,
			getBlocker: l2,
			deleteBlocker: zu,
			_internalFetchControllers: G,
			_internalActiveDeferreds: rt,
			_internalSetRoutes: u2,
		}),
		v
	);
}
function vm(e) {
	return (
		e != null && (("formData" in e && e.formData != null) || ("body" in e && e.body !== void 0))
	);
}
function ua(e, t, n, r, i, o, l) {
	let a, s;
	if (o) {
		a = [];
		for (let c of t)
			if ((a.push(c), c.route.id === o)) {
				s = c;
				break;
			}
	} else (a = t), (s = t[t.length - 1]);
	let u = vl(
		i || ".",
		zi(a).map(c => c.pathnameBase),
		Er(e.pathname, n) || e.pathname,
		l === "path"
	);
	return (
		i == null && ((u.search = e.search), (u.hash = e.hash)),
		(i == null || i === "" || i === ".") &&
			s &&
			s.route.index &&
			!wu(u.search) &&
			(u.search = u.search ? u.search.replace(/^\?/, "?index&") : "?index"),
		r && n !== "/" && (u.pathname = u.pathname === "/" ? n : bt([n, u.pathname])),
		An(u)
	);
}
function Xc(e, t, n, r) {
	if (!r || !vm(r)) return { path: n };
	if (r.formMethod && !km(r.formMethod))
		return { path: n, error: ot(405, { method: r.formMethod }) };
	let i = () => ({ path: n, error: ot(400, { type: "invalid-body" }) }),
		o = r.formMethod || "get",
		l = e ? o.toUpperCase() : o.toLowerCase(),
		a = ep(n);
	if (r.body !== void 0) {
		if (r.formEncType === "text/plain") {
			if (!wt(l)) return i();
			let p =
				typeof r.body == "string"
					? r.body
					: r.body instanceof FormData || r.body instanceof URLSearchParams
					  ? Array.from(r.body.entries()).reduce((y, g) => {
								let [w, C] = g;
								return (
									"" +
									y +
									w +
									"=" +
									C +
									`
`
								);
					    }, "")
					  : String(r.body);
			return {
				path: n,
				submission: {
					formMethod: l,
					formAction: a,
					formEncType: r.formEncType,
					formData: void 0,
					json: void 0,
					text: p,
				},
			};
		} else if (r.formEncType === "application/json") {
			if (!wt(l)) return i();
			try {
				let p = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
				return {
					path: n,
					submission: {
						formMethod: l,
						formAction: a,
						formEncType: r.formEncType,
						formData: void 0,
						json: p,
						text: void 0,
					},
				};
			} catch {
				return i();
			}
		}
	}
	Q(typeof FormData == "function", "FormData is not available in this environment");
	let s, u;
	if (r.formData) (s = ca(r.formData)), (u = r.formData);
	else if (r.body instanceof FormData) (s = ca(r.body)), (u = r.body);
	else if (r.body instanceof URLSearchParams) (s = r.body), (u = ed(s));
	else if (r.body == null) (s = new URLSearchParams()), (u = new FormData());
	else
		try {
			(s = new URLSearchParams(r.body)), (u = ed(s));
		} catch {
			return i();
		}
	let c = {
		formMethod: l,
		formAction: a,
		formEncType: (r && r.formEncType) || "application/x-www-form-urlencoded",
		formData: u,
		json: void 0,
		text: void 0,
	};
	if (wt(c.formMethod)) return { path: n, submission: c };
	let d = Kt(n);
	return (
		t && d.search && wu(d.search) && s.append("index", ""),
		(d.search = "?" + s),
		{ path: An(d), submission: c }
	);
}
function wm(e, t) {
	let n = e;
	if (t) {
		let r = e.findIndex(i => i.route.id === t);
		r >= 0 && (n = e.slice(0, r));
	}
	return n;
}
function Zc(e, t, n, r, i, o, l, a, s, u, c, d, p, y, g) {
	let w = g ? Object.values(g)[0] : y ? Object.values(y)[0] : void 0,
		C = e.createURL(t.location),
		f = e.createURL(i),
		h = g ? Object.keys(g)[0] : void 0,
		m = wm(n, h).filter((L, T) => {
			if (L.route.lazy) return !0;
			if (L.route.loader == null) return !1;
			if (ym(t.loaderData, t.matches[T], L) || l.some(N => N === L.route.id)) return !0;
			let _ = t.matches[T],
				j = L;
			return qc(
				L,
				me({ currentUrl: C, currentParams: _.params, nextUrl: f, nextParams: j.params }, r, {
					actionResult: w,
					defaultShouldRevalidate:
						o ||
						C.pathname + C.search === f.pathname + f.search ||
						C.search !== f.search ||
						J0(_, j),
				})
			);
		}),
		E = [];
	return (
		u.forEach((L, T) => {
			if (!n.some(b => b.route.id === L.routeId) || s.has(T)) return;
			let _ = rr(d, L.path, p);
			if (!_) {
				E.push({
					key: T,
					routeId: L.routeId,
					path: L.path,
					matches: null,
					match: null,
					controller: null,
				});
				return;
			}
			let j = t.fetchers.get(T),
				N = da(_, L.path),
				z = !1;
			c.has(T)
				? (z = !1)
				: a.includes(T)
				  ? (z = !0)
				  : j && j.state !== "idle" && j.data === void 0
				    ? (z = o)
				    : (z = qc(
								N,
								me(
									{
										currentUrl: C,
										currentParams: t.matches[t.matches.length - 1].params,
										nextUrl: f,
										nextParams: n[n.length - 1].params,
									},
									r,
									{ actionResult: w, defaultShouldRevalidate: o }
								)
				      )),
				z &&
					E.push({
						key: T,
						routeId: L.routeId,
						path: L.path,
						matches: _,
						match: N,
						controller: new AbortController(),
					});
		}),
		[m, E]
	);
}
function ym(e, t, n) {
	let r = !t || n.route.id !== t.route.id,
		i = e[n.route.id] === void 0;
	return r || i;
}
function J0(e, t) {
	let n = e.route.path;
	return (
		e.pathname !== t.pathname || (n != null && n.endsWith("*") && e.params["*"] !== t.params["*"])
	);
}
function qc(e, t) {
	if (e.route.shouldRevalidate) {
		let n = e.route.shouldRevalidate(t);
		if (typeof n == "boolean") return n;
	}
	return t.defaultShouldRevalidate;
}
async function Jc(e, t, n) {
	if (!e.lazy) return;
	let r = await e.lazy();
	if (!e.lazy) return;
	let i = n[e.id];
	Q(i, "No route found in manifest");
	let o = {};
	for (let l in r) {
		let s = i[l] !== void 0 && l !== "hasErrorBoundary";
		Dn(
			!s,
			'Route "' +
				i.id +
				'" has a static property "' +
				l +
				'" defined but its lazy function is also returning a value for this property. ' +
				('The lazy route property "' + l + '" will be ignored.')
		),
			!s && !V1.has(l) && (o[l] = r[l]);
	}
	Object.assign(i, o), Object.assign(i, me({}, t(i), { lazy: void 0 }));
}
async function Vr(e, t, n, r, i, o, l, a) {
	a === void 0 && (a = {});
	let s,
		u,
		c,
		d = g => {
			let w,
				C = new Promise((f, h) => (w = h));
			return (
				(c = () => w()),
				t.signal.addEventListener("abort", c),
				Promise.race([g({ request: t, params: n.params, context: a.requestContext }), C])
			);
		};
	try {
		let g = n.route[e];
		if (n.route.lazy)
			if (g) {
				let w,
					C = await Promise.all([
						d(g).catch(f => {
							w = f;
						}),
						Jc(n.route, o, i),
					]);
				if (w) throw w;
				u = C[0];
			} else if ((await Jc(n.route, o, i), (g = n.route[e]), g)) u = await d(g);
			else if (e === "action") {
				let w = new URL(t.url),
					C = w.pathname + w.search;
				throw ot(405, { method: t.method, pathname: C, routeId: n.route.id });
			} else return { type: ve.data, data: void 0 };
		else if (g) u = await d(g);
		else {
			let w = new URL(t.url),
				C = w.pathname + w.search;
			throw ot(404, { pathname: C });
		}
		Q(
			u !== void 0,
			"You defined " +
				(e === "action" ? "an action" : "a loader") +
				" for route " +
				('"' + n.route.id + "\" but didn't return anything from your `" + e + "` ") +
				"function. Please return a value or `null`."
		);
	} catch (g) {
		(s = ve.error), (u = g);
	} finally {
		c && t.signal.removeEventListener("abort", c);
	}
	if (Em(u)) {
		let g = u.status;
		if (fm.has(g)) {
			let f = u.headers.get("Location");
			if (
				(Q(f, "Redirects returned/thrown from loaders/actions must have a Location header"),
				!Z0.test(f))
			)
				f = ua(new URL(t.url), r.slice(0, r.indexOf(n) + 1), l, !0, f);
			else if (!a.isStaticRequest) {
				let h = new URL(t.url),
					v = f.startsWith("//") ? new URL(h.protocol + f) : new URL(f),
					m = Er(v.pathname, l) != null;
				v.origin === h.origin && m && (f = v.pathname + v.search + v.hash);
			}
			if (a.isStaticRequest) throw (u.headers.set("Location", f), u);
			return {
				type: ve.redirect,
				status: g,
				location: f,
				revalidate: u.headers.get("X-Remix-Revalidate") !== null,
				reloadDocument: u.headers.get("X-Remix-Reload-Document") !== null,
			};
		}
		if (a.isRouteRequest) throw { type: s === ve.error ? ve.error : ve.data, response: u };
		let w,
			C = u.headers.get("Content-Type");
		return (
			C && /\bapplication\/json\b/.test(C) ? (w = await u.json()) : (w = await u.text()),
			s === ve.error
				? { type: s, error: new vu(g, u.statusText, w), headers: u.headers }
				: { type: ve.data, data: w, statusCode: u.status, headers: u.headers }
		);
	}
	if (s === ve.error) return { type: s, error: u };
	if (Cm(u)) {
		var p, y;
		return {
			type: ve.deferred,
			deferredData: u,
			statusCode: (p = u.init) == null ? void 0 : p.status,
			headers: ((y = u.init) == null ? void 0 : y.headers) && new Headers(u.init.headers),
		};
	}
	return { type: ve.data, data: u };
}
function Ur(e, t, n, r) {
	let i = e.createURL(ep(t)).toString(),
		o = { signal: n };
	if (r && wt(r.formMethod)) {
		let { formMethod: l, formEncType: a } = r;
		(o.method = l.toUpperCase()),
			a === "application/json"
				? ((o.headers = new Headers({ "Content-Type": a })), (o.body = JSON.stringify(r.json)))
				: a === "text/plain"
				  ? (o.body = r.text)
				  : a === "application/x-www-form-urlencoded" && r.formData
				    ? (o.body = ca(r.formData))
				    : (o.body = r.formData);
	}
	return new Request(i, o);
}
function ca(e) {
	let t = new URLSearchParams();
	for (let [n, r] of e.entries()) t.append(n, typeof r == "string" ? r : r.name);
	return t;
}
function ed(e) {
	let t = new FormData();
	for (let [n, r] of e.entries()) t.append(n, r);
	return t;
}
function xm(e, t, n, r, i) {
	let o = {},
		l = null,
		a,
		s = !1,
		u = {};
	return (
		n.forEach((c, d) => {
			let p = t[d].route.id;
			if ((Q(!cr(c), "Cannot handle redirect results in processLoaderData"), li(c))) {
				let y = oi(e, p),
					g = c.error;
				r && ((g = Object.values(r)[0]), (r = void 0)),
					(l = l || {}),
					l[y.route.id] == null && (l[y.route.id] = g),
					(o[p] = void 0),
					s || ((s = !0), (a = Y0(c.error) ? c.error.status : 500)),
					c.headers && (u[p] = c.headers);
			} else
				Mn(c) ? (i.set(p, c.deferredData), (o[p] = c.deferredData.data)) : (o[p] = c.data),
					c.statusCode != null && c.statusCode !== 200 && !s && (a = c.statusCode),
					c.headers && (u[p] = c.headers);
		}),
		r && ((l = r), (o[Object.keys(r)[0]] = void 0)),
		{ loaderData: o, errors: l, statusCode: a || 200, loaderHeaders: u }
	);
}
function td(e, t, n, r, i, o, l, a) {
	let { loaderData: s, errors: u } = xm(t, n, r, i, a);
	for (let c = 0; c < o.length; c++) {
		let { key: d, match: p, controller: y } = o[c];
		Q(l !== void 0 && l[c] !== void 0, "Did not find corresponding fetcher result");
		let g = l[c];
		if (!(y && y.signal.aborted))
			if (li(g)) {
				let w = oi(e.matches, p == null ? void 0 : p.route.id);
				(u && u[w.route.id]) || (u = me({}, u, { [w.route.id]: g.error })), e.fetchers.delete(d);
			} else if (cr(g)) Q(!1, "Unhandled fetcher revalidation redirect");
			else if (Mn(g)) Q(!1, "Unhandled fetcher deferred data");
			else {
				let w = qt(g.data);
				e.fetchers.set(d, w);
			}
	}
	return { loaderData: s, errors: u };
}
function nd(e, t, n, r) {
	let i = me({}, t);
	for (let o of n) {
		let l = o.route.id;
		if (
			(t.hasOwnProperty(l)
				? t[l] !== void 0 && (i[l] = t[l])
				: e[l] !== void 0 && o.route.loader && (i[l] = e[l]),
			r && r.hasOwnProperty(l))
		)
			break;
	}
	return i;
}
function oi(e, t) {
	return (
		(t ? e.slice(0, e.findIndex(r => r.route.id === t) + 1) : [...e])
			.reverse()
			.find(r => r.route.hasErrorBoundary === !0) || e[0]
	);
}
function rd(e) {
	let t =
		e.length === 1
			? e[0]
			: e.find(n => n.index || !n.path || n.path === "/") || { id: "__shim-error-route__" };
	return { matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }], route: t };
}
function ot(e, t) {
	let { pathname: n, routeId: r, method: i, type: o } = t === void 0 ? {} : t,
		l = "Unknown Server Error",
		a = "Unknown @remix-run/router error";
	return (
		e === 400
			? ((l = "Bad Request"),
			  i && n && r
					? (a =
							"You made a " +
							i +
							' request to "' +
							n +
							'" but ' +
							('did not provide a `loader` for route "' + r + '", ') +
							"so there is no way to handle the request.")
					: o === "defer-action"
					  ? (a = "defer() is not supported in actions")
					  : o === "invalid-body" && (a = "Unable to encode submission body"))
			: e === 403
			  ? ((l = "Forbidden"), (a = 'Route "' + r + '" does not match URL "' + n + '"'))
			  : e === 404
			    ? ((l = "Not Found"), (a = 'No route matches URL "' + n + '"'))
			    : e === 405 &&
			      ((l = "Method Not Allowed"),
			      i && n && r
							? (a =
									"You made a " +
									i.toUpperCase() +
									' request to "' +
									n +
									'" but ' +
									('did not provide an `action` for route "' + r + '", ') +
									"so there is no way to handle the request.")
							: i && (a = 'Invalid request method "' + i.toUpperCase() + '"')),
		new vu(e || 500, l, new Error(a), !0)
	);
}
function id(e) {
	for (let t = e.length - 1; t >= 0; t--) {
		let n = e[t];
		if (cr(n)) return { result: n, idx: t };
	}
}
function ep(e) {
	let t = typeof e == "string" ? Kt(e) : e;
	return An(me({}, t, { hash: "" }));
}
function Sm(e, t) {
	return e.pathname !== t.pathname || e.search !== t.search
		? !1
		: e.hash === ""
		  ? t.hash !== ""
		  : e.hash === t.hash
		    ? !0
		    : t.hash !== "";
}
function Mn(e) {
	return e.type === ve.deferred;
}
function li(e) {
	return e.type === ve.error;
}
function cr(e) {
	return (e && e.type) === ve.redirect;
}
function Cm(e) {
	let t = e;
	return (
		t &&
		typeof t == "object" &&
		typeof t.data == "object" &&
		typeof t.subscribe == "function" &&
		typeof t.cancel == "function" &&
		typeof t.resolveData == "function"
	);
}
function Em(e) {
	return (
		e != null &&
		typeof e.status == "number" &&
		typeof e.statusText == "string" &&
		typeof e.headers == "object" &&
		typeof e.body < "u"
	);
}
function km(e) {
	return dm.has(e.toLowerCase());
}
function wt(e) {
	return um.has(e.toLowerCase());
}
async function od(e, t, n, r, i, o) {
	for (let l = 0; l < n.length; l++) {
		let a = n[l],
			s = t[l];
		if (!s) continue;
		let u = e.find(d => d.route.id === s.route.id),
			c = u != null && !J0(u, s) && (o && o[s.route.id]) !== void 0;
		if (Mn(a) && (i || c)) {
			let d = r[l];
			Q(d, "Expected an AbortSignal for revalidating fetcher deferred result"),
				await tp(a, d, i).then(p => {
					p && (n[l] = p || n[l]);
				});
		}
	}
}
async function tp(e, t, n) {
	if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
		if (n)
			try {
				return { type: ve.data, data: e.deferredData.unwrappedData };
			} catch (i) {
				return { type: ve.error, error: i };
			}
		return { type: ve.data, data: e.deferredData.data };
	}
}
function wu(e) {
	return new URLSearchParams(e).getAll("index").some(t => t === "");
}
function da(e, t) {
	let n = typeof t == "string" ? Kt(t).search : t.search;
	if (e[e.length - 1].route.index && wu(n || "")) return e[e.length - 1];
	let r = zi(e);
	return r[r.length - 1];
}
function ld(e) {
	let { formMethod: t, formAction: n, formEncType: r, text: i, formData: o, json: l } = e;
	if (!(!t || !n || !r)) {
		if (i != null)
			return {
				formMethod: t,
				formAction: n,
				formEncType: r,
				formData: void 0,
				json: void 0,
				text: i,
			};
		if (o != null)
			return {
				formMethod: t,
				formAction: n,
				formEncType: r,
				formData: o,
				json: void 0,
				text: void 0,
			};
		if (l !== void 0)
			return {
				formMethod: t,
				formAction: n,
				formEncType: r,
				formData: void 0,
				json: l,
				text: void 0,
			};
	}
}
function os(e, t) {
	return t
		? {
				state: "loading",
				location: e,
				formMethod: t.formMethod,
				formAction: t.formAction,
				formEncType: t.formEncType,
				formData: t.formData,
				json: t.json,
				text: t.text,
		  }
		: {
				state: "loading",
				location: e,
				formMethod: void 0,
				formAction: void 0,
				formEncType: void 0,
				formData: void 0,
				json: void 0,
				text: void 0,
		  };
}
function Tm(e, t) {
	return {
		state: "submitting",
		location: e,
		formMethod: t.formMethod,
		formAction: t.formAction,
		formEncType: t.formEncType,
		formData: t.formData,
		json: t.json,
		text: t.text,
	};
}
function Hr(e, t) {
	return e
		? {
				state: "loading",
				formMethod: e.formMethod,
				formAction: e.formAction,
				formEncType: e.formEncType,
				formData: e.formData,
				json: e.json,
				text: e.text,
				data: t,
		  }
		: {
				state: "loading",
				formMethod: void 0,
				formAction: void 0,
				formEncType: void 0,
				formData: void 0,
				json: void 0,
				text: void 0,
				data: t,
		  };
}
function Pm(e, t) {
	return {
		state: "submitting",
		formMethod: e.formMethod,
		formAction: e.formAction,
		formEncType: e.formEncType,
		formData: e.formData,
		json: e.json,
		text: e.text,
		data: t ? t.data : void 0,
	};
}
function qt(e) {
	return {
		state: "idle",
		formMethod: void 0,
		formAction: void 0,
		formEncType: void 0,
		formData: void 0,
		json: void 0,
		text: void 0,
		data: e,
	};
}
function Lm(e, t) {
	try {
		let n = e.sessionStorage.getItem(q0);
		if (n) {
			let r = JSON.parse(n);
			for (let [i, o] of Object.entries(r || {}))
				o && Array.isArray(o) && t.set(i, new Set(o || []));
		}
	} catch {}
}
function Mm(e, t) {
	if (t.size > 0) {
		let n = {};
		for (let [r, i] of t) n[r] = [...i];
		try {
			e.sessionStorage.setItem(q0, JSON.stringify(n));
		} catch (r) {
			Dn(!1, "Failed to save applied view transitions in sessionStorage (" + r + ").");
		}
	}
}
/**
 * React Router v6.20.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Qo() {
	return (
		(Qo = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
			  }),
		Qo.apply(this, arguments)
	);
}
const wl = P.createContext(null),
	np = P.createContext(null),
	kr = P.createContext(null),
	yl = P.createContext(null),
	Rt = P.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
	rp = P.createContext(null);
function Nm(e, t) {
	let { relative: n } = t === void 0 ? {} : t;
	Tr() || Q(!1);
	let { basename: r, navigator: i } = P.useContext(kr),
		{ hash: o, pathname: l, search: a } = lp(e, { relative: n }),
		s = l;
	return (
		r !== "/" && (s = l === "/" ? r : bt([r, l])), i.createHref({ pathname: s, search: a, hash: o })
	);
}
function Tr() {
	return P.useContext(yl) != null;
}
function Ii() {
	return Tr() || Q(!1), P.useContext(yl).location;
}
function ip(e) {
	P.useContext(kr).static || P.useLayoutEffect(e);
}
function op() {
	let { isDataRoute: e } = P.useContext(Rt);
	return e ? $m() : Rm();
}
function Rm() {
	Tr() || Q(!1);
	let e = P.useContext(wl),
		{ basename: t, navigator: n } = P.useContext(kr),
		{ matches: r } = P.useContext(Rt),
		{ pathname: i } = Ii(),
		o = JSON.stringify(zi(r).map(s => s.pathnameBase)),
		l = P.useRef(!1);
	return (
		ip(() => {
			l.current = !0;
		}),
		P.useCallback(
			function (s, u) {
				if ((u === void 0 && (u = {}), !l.current)) return;
				if (typeof s == "number") {
					n.go(s);
					return;
				}
				let c = vl(s, JSON.parse(o), i, u.relative === "path");
				e == null && t !== "/" && (c.pathname = c.pathname === "/" ? t : bt([t, c.pathname])),
					(u.replace ? n.replace : n.push)(c, u.state, u);
			},
			[t, n, o, i, e]
		)
	);
}
const _m = P.createContext(null);
function jm(e) {
	let t = P.useContext(Rt).outlet;
	return t && P.createElement(_m.Provider, { value: e }, t);
}
function Om() {
	let { matches: e } = P.useContext(Rt),
		t = e[e.length - 1];
	return t ? t.params : {};
}
function lp(e, t) {
	let { relative: n } = t === void 0 ? {} : t,
		{ matches: r } = P.useContext(Rt),
		{ pathname: i } = Ii(),
		o = JSON.stringify(zi(r).map(l => l.pathnameBase));
	return P.useMemo(() => vl(e, JSON.parse(o), i, n === "path"), [e, o, i, n]);
}
function zm(e, t, n) {
	Tr() || Q(!1);
	let { navigator: r } = P.useContext(kr),
		{ matches: i } = P.useContext(Rt),
		o = i[i.length - 1],
		l = o ? o.params : {};
	o && o.pathname;
	let a = o ? o.pathnameBase : "/";
	o && o.route;
	let s = Ii(),
		u;
	if (t) {
		var c;
		let w = typeof t == "string" ? Kt(t) : t;
		a === "/" || ((c = w.pathname) != null && c.startsWith(a)) || Q(!1), (u = w);
	} else u = s;
	let d = u.pathname || "/",
		p = a === "/" ? d : d.slice(a.length) || "/",
		y = rr(e, { pathname: p }),
		g = Bm(
			y &&
				y.map(w =>
					Object.assign({}, w, {
						params: Object.assign({}, l, w.params),
						pathname: bt([
							a,
							r.encodeLocation ? r.encodeLocation(w.pathname).pathname : w.pathname,
						]),
						pathnameBase:
							w.pathnameBase === "/"
								? a
								: bt([
										a,
										r.encodeLocation ? r.encodeLocation(w.pathnameBase).pathname : w.pathnameBase,
								  ]),
					})
				),
			i,
			n
		);
	return t && g
		? P.createElement(
				yl.Provider,
				{
					value: {
						location: Qo({ pathname: "/", search: "", hash: "", state: null, key: "default" }, u),
						navigationType: ge.Pop,
					},
				},
				g
		  )
		: g;
}
function Im() {
	let e = Hm(),
		t = Y0(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
		n = e instanceof Error ? e.stack : null,
		i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
		o = null;
	return P.createElement(
		P.Fragment,
		null,
		P.createElement("h2", null, "Unexpected Application Error!"),
		P.createElement("h3", { style: { fontStyle: "italic" } }, t),
		n ? P.createElement("pre", { style: i }, n) : null,
		o
	);
}
const Dm = P.createElement(Im, null);
class Am extends P.Component {
	constructor(t) {
		super(t), (this.state = { location: t.location, revalidation: t.revalidation, error: t.error });
	}
	static getDerivedStateFromError(t) {
		return { error: t };
	}
	static getDerivedStateFromProps(t, n) {
		return n.location !== t.location || (n.revalidation !== "idle" && t.revalidation === "idle")
			? { error: t.error, location: t.location, revalidation: t.revalidation }
			: {
					error: t.error || n.error,
					location: n.location,
					revalidation: t.revalidation || n.revalidation,
			  };
	}
	componentDidCatch(t, n) {
		console.error("React Router caught the following error during render", t, n);
	}
	render() {
		return this.state.error
			? P.createElement(
					Rt.Provider,
					{ value: this.props.routeContext },
					P.createElement(rp.Provider, { value: this.state.error, children: this.props.component })
			  )
			: this.props.children;
	}
}
function Fm(e) {
	let { routeContext: t, match: n, children: r } = e,
		i = P.useContext(wl);
	return (
		i &&
			i.static &&
			i.staticContext &&
			(n.route.errorElement || n.route.ErrorBoundary) &&
			(i.staticContext._deepestRenderedBoundaryId = n.route.id),
		P.createElement(Rt.Provider, { value: t }, r)
	);
}
function Bm(e, t, n) {
	var r;
	if ((t === void 0 && (t = []), n === void 0 && (n = null), e == null)) {
		var i;
		if ((i = n) != null && i.errors) e = n.matches;
		else return null;
	}
	let o = e,
		l = (r = n) == null ? void 0 : r.errors;
	if (l != null) {
		let a = o.findIndex(s => s.route.id && (l == null ? void 0 : l[s.route.id]));
		a >= 0 || Q(!1), (o = o.slice(0, Math.min(o.length, a + 1)));
	}
	return o.reduceRight((a, s, u) => {
		let c = s.route.id ? (l == null ? void 0 : l[s.route.id]) : null,
			d = null;
		n && (d = s.route.errorElement || Dm);
		let p = t.concat(o.slice(0, u + 1)),
			y = () => {
				let g;
				return (
					c
						? (g = d)
						: s.route.Component
						  ? (g = P.createElement(s.route.Component, null))
						  : s.route.element
						    ? (g = s.route.element)
						    : (g = a),
					P.createElement(Fm, {
						match: s,
						routeContext: { outlet: a, matches: p, isDataRoute: n != null },
						children: g,
					})
				);
			};
		return n && (s.route.ErrorBoundary || s.route.errorElement || u === 0)
			? P.createElement(Am, {
					location: n.location,
					revalidation: n.revalidation,
					component: d,
					error: c,
					children: y(),
					routeContext: { outlet: null, matches: p, isDataRoute: !0 },
			  })
			: y();
	}, null);
}
var sp = (function (e) {
		return (
			(e.UseBlocker = "useBlocker"),
			(e.UseRevalidator = "useRevalidator"),
			(e.UseNavigateStable = "useNavigate"),
			e
		);
	})(sp || {}),
	Yo = (function (e) {
		return (
			(e.UseBlocker = "useBlocker"),
			(e.UseLoaderData = "useLoaderData"),
			(e.UseActionData = "useActionData"),
			(e.UseRouteError = "useRouteError"),
			(e.UseNavigation = "useNavigation"),
			(e.UseRouteLoaderData = "useRouteLoaderData"),
			(e.UseMatches = "useMatches"),
			(e.UseRevalidator = "useRevalidator"),
			(e.UseNavigateStable = "useNavigate"),
			(e.UseRouteId = "useRouteId"),
			e
		);
	})(Yo || {});
function bm(e) {
	let t = P.useContext(wl);
	return t || Q(!1), t;
}
function Vm(e) {
	let t = P.useContext(np);
	return t || Q(!1), t;
}
function Um(e) {
	let t = P.useContext(Rt);
	return t || Q(!1), t;
}
function ap(e) {
	let t = Um(),
		n = t.matches[t.matches.length - 1];
	return n.route.id || Q(!1), n.route.id;
}
function Hm() {
	var e;
	let t = P.useContext(rp),
		n = Vm(Yo.UseRouteError),
		r = ap(Yo.UseRouteError);
	return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function $m() {
	let { router: e } = bm(sp.UseNavigateStable),
		t = ap(Yo.UseNavigateStable),
		n = P.useRef(!1);
	return (
		ip(() => {
			n.current = !0;
		}),
		P.useCallback(
			function (i, o) {
				o === void 0 && (o = {}),
					n.current &&
						(typeof i == "number" ? e.navigate(i) : e.navigate(i, Qo({ fromRouteId: t }, o)));
			},
			[e, t]
		)
	);
}
function Wm(e) {
	let { to: t, replace: n, state: r, relative: i } = e;
	Tr() || Q(!1);
	let { matches: o } = P.useContext(Rt),
		{ pathname: l } = Ii(),
		a = op(),
		s = vl(
			t,
			zi(o).map(c => c.pathnameBase),
			l,
			i === "path"
		),
		u = JSON.stringify(s);
	return (
		P.useEffect(() => a(JSON.parse(u), { replace: n, state: r, relative: i }), [a, u, i, n, r]),
		null
	);
}
function up(e) {
	return jm(e.context);
}
function Gm(e) {
	let {
		basename: t = "/",
		children: n = null,
		location: r,
		navigationType: i = ge.Pop,
		navigator: o,
		static: l = !1,
	} = e;
	Tr() && Q(!1);
	let a = t.replace(/^\/*/, "/"),
		s = P.useMemo(() => ({ basename: a, navigator: o, static: l }), [a, o, l]);
	typeof r == "string" && (r = Kt(r));
	let { pathname: u = "/", search: c = "", hash: d = "", state: p = null, key: y = "default" } = r,
		g = P.useMemo(() => {
			let w = Er(u, a);
			return w == null
				? null
				: { location: { pathname: w, search: c, hash: d, state: p, key: y }, navigationType: i };
		}, [a, u, c, d, p, y, i]);
	return g == null
		? null
		: P.createElement(
				kr.Provider,
				{ value: s },
				P.createElement(yl.Provider, { children: n, value: g })
		  );
}
new Promise(() => {});
function Km(e) {
	let t = { hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null };
	return (
		e.Component && Object.assign(t, { element: P.createElement(e.Component), Component: void 0 }),
		e.ErrorBoundary &&
			Object.assign(t, { errorElement: P.createElement(e.ErrorBoundary), ErrorBoundary: void 0 }),
		t
	);
}
/**
 * React Router DOM v6.20.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Pi() {
	return (
		(Pi = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
			  }),
		Pi.apply(this, arguments)
	);
}
function Qm(e, t) {
	if (e == null) return {};
	var n = {},
		r = Object.keys(e),
		i,
		o;
	for (o = 0; o < r.length; o++) (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
	return n;
}
function Ym(e) {
	return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Xm(e, t) {
	return e.button === 0 && (!t || t === "_self") && !Ym(e);
}
const Zm = [
	"onClick",
	"relative",
	"reloadDocument",
	"replace",
	"state",
	"target",
	"to",
	"preventScrollReset",
	"unstable_viewTransition",
];
function qm(e, t) {
	return gm({
		basename: t == null ? void 0 : t.basename,
		future: Pi({}, t == null ? void 0 : t.future, { v7_prependBasename: !0 }),
		history: F1({ window: t == null ? void 0 : t.window }),
		hydrationData: (t == null ? void 0 : t.hydrationData) || Jm(),
		routes: e,
		mapRouteProperties: Km,
		window: t == null ? void 0 : t.window,
	}).initialize();
}
function Jm() {
	var e;
	let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
	return t && t.errors && (t = Pi({}, t, { errors: eg(t.errors) })), t;
}
function eg(e) {
	if (!e) return null;
	let t = Object.entries(e),
		n = {};
	for (let [r, i] of t)
		if (i && i.__type === "RouteErrorResponse")
			n[r] = new vu(i.status, i.statusText, i.data, i.internal === !0);
		else if (i && i.__type === "Error") {
			if (i.__subType) {
				let o = window[i.__subType];
				if (typeof o == "function")
					try {
						let l = new o(i.message);
						(l.stack = ""), (n[r] = l);
					} catch {}
			}
			if (n[r] == null) {
				let o = new Error(i.message);
				(o.stack = ""), (n[r] = o);
			}
		} else n[r] = i;
	return n;
}
const tg = P.createContext({ isTransitioning: !1 }),
	ng = P.createContext(new Map()),
	rg = "startTransition",
	sd = P2[rg],
	ig = "flushSync",
	ad = A1[ig];
function og(e) {
	sd ? sd(e) : e();
}
function $r(e) {
	ad ? ad(e) : e();
}
class lg {
	constructor() {
		(this.status = "pending"),
			(this.promise = new Promise((t, n) => {
				(this.resolve = r => {
					this.status === "pending" && ((this.status = "resolved"), t(r));
				}),
					(this.reject = r => {
						this.status === "pending" && ((this.status = "rejected"), n(r));
					});
			}));
	}
}
function sg(e) {
	let { fallbackElement: t, router: n, future: r } = e,
		[i, o] = P.useState(n.state),
		[l, a] = P.useState(),
		[s, u] = P.useState({ isTransitioning: !1 }),
		[c, d] = P.useState(),
		[p, y] = P.useState(),
		[g, w] = P.useState(),
		C = P.useRef(new Map()),
		{ v7_startTransition: f } = r || {},
		h = P.useCallback(
			T => {
				f ? og(T) : T();
			},
			[f]
		),
		v = P.useCallback(
			(T, _) => {
				let { deletedFetchers: j, unstable_flushSync: N, unstable_viewTransitionOpts: z } = _;
				j.forEach(F => C.current.delete(F)),
					T.fetchers.forEach((F, ee) => {
						F.data !== void 0 && C.current.set(ee, F.data);
					});
				let b = n.window == null || typeof n.window.document.startViewTransition != "function";
				if (!z || b) {
					N ? $r(() => o(T)) : h(() => o(T));
					return;
				}
				if (N) {
					$r(() => {
						p && (c && c.resolve(), p.skipTransition()),
							u({
								isTransitioning: !0,
								flushSync: !0,
								currentLocation: z.currentLocation,
								nextLocation: z.nextLocation,
							});
					});
					let F = n.window.document.startViewTransition(() => {
						$r(() => o(T));
					});
					F.finished.finally(() => {
						$r(() => {
							d(void 0), y(void 0), a(void 0), u({ isTransitioning: !1 });
						});
					}),
						$r(() => y(F));
					return;
				}
				p
					? (c && c.resolve(),
					  p.skipTransition(),
					  w({ state: T, currentLocation: z.currentLocation, nextLocation: z.nextLocation }))
					: (a(T),
					  u({
							isTransitioning: !0,
							flushSync: !1,
							currentLocation: z.currentLocation,
							nextLocation: z.nextLocation,
					  }));
			},
			[n.window, p, c, C, h]
		);
	P.useLayoutEffect(() => n.subscribe(v), [n, v]),
		P.useEffect(() => {
			s.isTransitioning && !s.flushSync && d(new lg());
		}, [s]),
		P.useEffect(() => {
			if (c && l && n.window) {
				let T = l,
					_ = c.promise,
					j = n.window.document.startViewTransition(async () => {
						h(() => o(T)), await _;
					});
				j.finished.finally(() => {
					d(void 0), y(void 0), a(void 0), u({ isTransitioning: !1 });
				}),
					y(j);
			}
		}, [h, l, c, n.window]),
		P.useEffect(() => {
			c && l && i.location.key === l.location.key && c.resolve();
		}, [c, p, i.location, l]),
		P.useEffect(() => {
			!s.isTransitioning &&
				g &&
				(a(g.state),
				u({
					isTransitioning: !0,
					flushSync: !1,
					currentLocation: g.currentLocation,
					nextLocation: g.nextLocation,
				}),
				w(void 0));
		}, [s.isTransitioning, g]);
	let m = P.useMemo(
			() => ({
				createHref: n.createHref,
				encodeLocation: n.encodeLocation,
				go: T => n.navigate(T),
				push: (T, _, j) =>
					n.navigate(T, {
						state: _,
						preventScrollReset: j == null ? void 0 : j.preventScrollReset,
					}),
				replace: (T, _, j) =>
					n.navigate(T, {
						replace: !0,
						state: _,
						preventScrollReset: j == null ? void 0 : j.preventScrollReset,
					}),
			}),
			[n]
		),
		E = n.basename || "/",
		L = P.useMemo(() => ({ router: n, navigator: m, static: !1, basename: E }), [n, m, E]);
	return P.createElement(
		P.Fragment,
		null,
		P.createElement(
			wl.Provider,
			{ value: L },
			P.createElement(
				np.Provider,
				{ value: i },
				P.createElement(
					ng.Provider,
					{ value: C.current },
					P.createElement(
						tg.Provider,
						{ value: s },
						P.createElement(
							Gm,
							{ basename: E, location: i.location, navigationType: i.historyAction, navigator: m },
							i.initialized ? P.createElement(ag, { routes: n.routes, state: i }) : t
						)
					)
				)
			)
		),
		null
	);
}
function ag(e) {
	let { routes: t, state: n } = e;
	return zm(t, void 0, n);
}
const ug =
		typeof window < "u" &&
		typeof window.document < "u" &&
		typeof window.document.createElement < "u",
	cg = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
	Li = P.forwardRef(function (t, n) {
		let {
				onClick: r,
				relative: i,
				reloadDocument: o,
				replace: l,
				state: a,
				target: s,
				to: u,
				preventScrollReset: c,
				unstable_viewTransition: d,
			} = t,
			p = Qm(t, Zm),
			{ basename: y } = P.useContext(kr),
			g,
			w = !1;
		if (typeof u == "string" && cg.test(u) && ((g = u), ug))
			try {
				let v = new URL(window.location.href),
					m = u.startsWith("//") ? new URL(v.protocol + u) : new URL(u),
					E = Er(m.pathname, y);
				m.origin === v.origin && E != null ? (u = E + m.search + m.hash) : (w = !0);
			} catch {}
		let C = Nm(u, { relative: i }),
			f = dg(u, {
				replace: l,
				state: a,
				target: s,
				preventScrollReset: c,
				relative: i,
				unstable_viewTransition: d,
			});
		function h(v) {
			r && r(v), v.defaultPrevented || f(v);
		}
		return P.createElement(
			"a",
			Pi({}, p, { href: g || C, onClick: w || o ? r : h, ref: n, target: s })
		);
	});
var ud;
(function (e) {
	(e.UseScrollRestoration = "useScrollRestoration"),
		(e.UseSubmit = "useSubmit"),
		(e.UseSubmitFetcher = "useSubmitFetcher"),
		(e.UseFetcher = "useFetcher"),
		(e.useViewTransitionState = "useViewTransitionState");
})(ud || (ud = {}));
var cd;
(function (e) {
	(e.UseFetcher = "useFetcher"),
		(e.UseFetchers = "useFetchers"),
		(e.UseScrollRestoration = "useScrollRestoration");
})(cd || (cd = {}));
function dg(e, t) {
	let {
			target: n,
			replace: r,
			state: i,
			preventScrollReset: o,
			relative: l,
			unstable_viewTransition: a,
		} = t === void 0 ? {} : t,
		s = op(),
		u = Ii(),
		c = lp(e, { relative: l });
	return P.useCallback(
		d => {
			if (Xm(d, n)) {
				d.preventDefault();
				let p = r !== void 0 ? r : An(u) === An(c);
				s(e, {
					replace: p,
					state: i,
					preventScrollReset: o,
					relative: l,
					unstable_viewTransition: a,
				});
			}
		},
		[u, s, c, r, i, n, e, o, l, a]
	);
}
const fg = "/assets/YumiverseLogo-BIi11aeI.svg",
	pg =
		"data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%3e%3cpath%20d='M12%202C6.47715%202%202%206.47715%202%2012C2%2017.5228%206.47715%2022%2012%2022C17.5228%2022%2022%2017.5228%2022%2012C22%206.47715%2017.5228%202%2012%202Z'%20stroke='%23180801'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M4.271%2018.3457C4.271%2018.3457%206.50002%2015.5%2012%2015.5C17.5%2015.5%2019.7291%2018.3457%2019.7291%2018.3457'%20stroke='%23180801'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M12%2012C13.6569%2012%2015%2010.6569%2015%209C15%207.34315%2013.6569%206%2012%206C10.3431%206%209%207.34315%209%209C9%2010.6569%2010.3431%2012%2012%2012Z'%20stroke='%23180801'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",
	hg =
		"data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%3e%3cpath%20d='M17%2017L21%2021'%20stroke='%23180801'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M3%2011C3%2015.4183%206.58172%2019%2011%2019C13.213%2019%2015.2161%2018.1015%2016.6644%2016.6493C18.1077%2015.2022%2019%2013.2053%2019%2011C19%206.58172%2015.4183%203%2011%203C6.58172%203%203%206.58172%203%2011Z'%20stroke='%23180801'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",
	cp =
		"data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%3e%3cpath%20d='M18.5%2012H6M6%2012L12%206M6%2012L12%2018'%20stroke='%23180801'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";
function mg() {
	const [e, t] = P.useState(!1),
		n = () => {
			t(!e);
		};
	return x.jsx("nav", {
		className: "w-full h-20 px-4 pt-2 pb-1 mb-4",
		children: x.jsxs("div", {
			className: "w-full h-full flex flex-col justify-between",
			children: [
				x.jsxs("div", {
					className: "flex justify-between",
					children: [
						x.jsx(Li, {
							className: "max-h-[15] self-center",
							children: x.jsx("img", {
								src: fg,
								alt: "Yumiverse logo image",
								className: "w-[87] h-auto",
							}),
						}),
						x.jsx(Li, {
							children: x.jsx("img", {
								src: pg,
								alt: "Yumiverse logo image",
								className: "max-h-6",
							}),
						}),
					],
				}),
				x.jsxs("div", {
					className: "flex justify-between items-center",
					children: [
						x.jsxs("div", {
							className: `flex gap-2 items-center h-full ${
								e ? "w-full" : ""
							} transition-all duration-300`,
							children: [
								x.jsxs("div", {
									className: "max-h-6 overflow-hidden",
									children: [
										x.jsx("img", {
											onClick: n,
											className: "cursor-pointer",
											src: hg,
											alt: "Search icon",
										}),
										x.jsx("img", {
											onClick: n,
											className: "cursor-pointer",
											src: cp,
											alt: "Arrow left icon",
										}),
									],
								}),
								x.jsx("input", {
									type: "text",
									className: `${
										e ? "w-full" : "w-0"
									} border-b border-texts placeholder:text-xs placeholder:`,
									placeholder: "Búsqueda del usuario",
								}),
							],
						}),
						x.jsx("button", {
							className: `${
								e ? "hidden" : ""
							} max-h-8 text-texts bg-principal px-2 py-1 rounded-lg`,
							children: "Publicar tienda",
						}),
					],
				}),
			],
		}),
	});
}
const gg = () => {
		const [e, t] = P.useState(1),
			n = r => {
				t(r), console.log(r);
			};
		return x.jsx("div", {
			className: "w-full h-14 fixed bottom-0 rounded-t-xl bg-yellow-400 desktop:hidden z-10",
			children: x.jsxs("div", {
				className: "flex flex-row  content-center h-full",
				children: [
					x.jsxs("div", {
						className:
							"transition-all flex flex-col flex-wrap items-center justify-center content-center cursor-pointer px-5  w-2/4" +
							(e === 0 ? " bg-neutral-950 shrink rounded-tl-xl" : ""),
						onClick: () => n(0),
						children: [
							x.jsx("svg", {
								width: "24",
								height: "24",
								viewBox: "0 0 24 24",
								fill: "none",
								xmlns: "http://www.w3.org/2000/svg",
								className: "transition-all",
								children: x.jsx("path", {
									d: "M22 8.86222C22 10.4087 21.4062 11.8941 20.3458 12.9929C17.9049 15.523 15.5374 18.1613 13.0053 20.5997C12.4249 21.1505 11.5042 21.1304 10.9488 20.5547L3.65376 12.9929C1.44875 10.7072 1.44875 7.01723 3.65376 4.73157C5.88044 2.42345 9.50794 2.42345 11.7346 4.73157L11.9998 5.00642L12.2648 4.73173C13.3324 3.6245 14.7864 3 16.3053 3C17.8242 3 19.2781 3.62444 20.3458 4.73157C21.4063 5.83045 22 7.31577 22 8.86222Z",
									stroke: e === 0 ? "#F2C81B" : "#180801",
									"stroke-width": "1.5",
									"stroke-linejoin": "round",
								}),
							}),
							x.jsx("span", {
								className: "text-xs transition-all" + (e === 0 ? " text-yellow-400" : ""),
								children: "Favoritos",
							}),
						],
					}),
					x.jsxs("div", {
						className:
							"transition-all flex flex-col flex-wrap items-center justify-center content-center cursor-pointer px-5 w-2/4" +
							(e === 1 ? " bg-neutral-950 shrink" : ""),
						onClick: () => n(1),
						children: [
							x.jsxs("svg", {
								width: "24",
								height: "24",
								viewBox: "0 0 24 24",
								fill: "none",
								xmlns: "http://www.w3.org/2000/svg",
								children: [
									x.jsx("path", {
										d: "M2 8L11.7317 3.13416C11.9006 3.04971 12.0994 3.0497 12.2683 3.13416L22 8",
										stroke: e === 1 ? "#F2C81B" : "#180801",
										"stroke-width": "1.5",
										"stroke-linecap": "round",
										"stroke-linejoin": "round",
									}),
									x.jsx("path", {
										d: "M20 11V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V11",
										stroke: e === 1 ? "#F2C81B" : "#180801",
										"stroke-width": "1.5",
										"stroke-linecap": "round",
										"stroke-linejoin": "round",
									}),
								],
							}),
							x.jsx("span", {
								className: "text-xs transition-all" + (e === 1 ? " text-yellow-400" : ""),
								children: "Inicio",
							}),
						],
					}),
					x.jsxs("div", {
						className:
							"transition-all flex flex-col flex-wrap items-center justify-center content-center cursor-pointer px-5 w-2/4" +
							(e === 2 ? " bg-neutral-950 shrink" : ""),
						onClick: () => n(2),
						children: [
							x.jsx("svg", {
								width: "24",
								height: "24",
								viewBox: "0 0 24 24",
								fill: "none",
								xmlns: "http://www.w3.org/2000/svg",
								className: "fas fa-user text-2xl",
								children: x.jsx("path", {
									d: "M12 22C9.45977 22 7.2069 21.1494 5.32184 19.4598C3.52874 17.8621 2.44828 15.8506 2.10345 13.4943H3.77011C4.09195 15.4368 5.01149 17.069 6.49425 18.3563C8.05747 19.7126 9.90805 20.3908 11.9885 20.3908C14.3103 20.3908 16.3103 19.5747 17.931 17.954C19.5517 16.3333 20.3678 14.3333 20.3678 12.0115C20.3678 9.68966 19.5517 7.68965 17.931 6.06897C16.3103 4.44828 14.3103 3.62069 11.9885 3.62069C10.6207 3.62069 9.31034 3.94253 8.11494 4.57471C6.91954 5.2069 5.90805 6.09195 5.09195 7.2069L4.68966 7.75862H8.18391V9.36782H2V3.14943H3.6092V6.49425L4.21839 5.72414C5.16092 4.54023 6.32184 3.62069 7.67816 2.97701C9.03448 2.33333 10.4828 2 12 2C13.3793 2 14.6897 2.26437 15.8966 2.7931C17.1034 3.32184 18.1724 4.03448 19.069 4.93103C19.9655 5.82759 20.6782 6.89655 21.2069 8.10345C21.7356 9.31034 22 10.6207 22 12C22 13.3793 21.7356 14.6897 21.2069 15.8966C20.6782 17.1034 19.9655 18.1724 19.069 19.069C18.1724 19.9655 17.1034 20.6782 15.8966 21.2069C14.6897 21.7356 13.3793 22 12 22ZM11.1954 12.3218V6.5977H12.8046V11.6782L16.3448 15.2184L15.2184 16.3448L11.1954 12.3218Z",
									fill: e === 2 ? "#F2C81B" : "#180801",
								}),
							}),
							x.jsx("span", {
								className: "text-xs transition-all" + (e === 2 ? " text-yellow-400" : ""),
								children: "Historial",
							}),
						],
					}),
					x.jsxs("div", {
						className:
							"transition-all flex flex-col flex-wrap items-center justify-center content-center text-center cursor-pointer px-5 w-2/4" +
							(e === 3 ? " bg-neutral-950 shrink rounded-tr-xl" : ""),
						onClick: () => n(3),
						children: [
							x.jsxs("svg", {
								width: "24",
								height: "24",
								viewBox: "0 0 24 24",
								fill: "none",
								xmlns: "http://www.w3.org/2000/svg",
								children: [
									x.jsx("path", {
										d: "M3 10V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V10",
										stroke: e === 3 ? "#F2C81B" : "#180801",
										"stroke-width": "1.5",
									}),
									x.jsx("path", {
										d: "M14.8333 21V15C14.8333 13.8954 13.9378 13 12.8333 13H10.8333C9.72868 13 8.83325 13.8954 8.83325 15V21",
										stroke: e === 3 ? "#F2C81B" : "#180801",
										"stroke-width": "1.5",
										"stroke-miterlimit": "16",
									}),
									x.jsx("path", {
										d: "M21.8183 9.36418L20.1243 3.43517C20.0507 3.17759 19.8153 3 19.5474 3H15.5L15.9753 8.70377C15.9909 8.89043 16.0923 9.05904 16.2532 9.15495C16.6425 9.38698 17.4052 9.81699 18 10C19.0158 10.3125 20.5008 10.1998 21.3465 10.0958C21.6982 10.0526 21.9157 9.7049 21.8183 9.36418Z",
										stroke: e === 3 ? "#F2C81B" : "#180801",
										"stroke-width": "1.5",
									}),
									x.jsx("path", {
										d: "M14 10C14.5675 9.82538 15.2879 9.42589 15.6909 9.18807C15.8828 9.07486 15.9884 8.86103 15.9699 8.63904L15.5 3H8.5L8.03008 8.63904C8.01158 8.86103 8.11723 9.07486 8.30906 9.18807C8.71207 9.42589 9.4325 9.82538 10 10C11.493 10.4594 12.507 10.4594 14 10Z",
										stroke: e === 3 ? "#F2C81B" : "#180801",
										"stroke-width": "1.5",
									}),
									x.jsx("path", {
										d: "M3.87567 3.43517L2.18166 9.36418C2.08431 9.7049 2.3018 10.0526 2.6535 10.0958C3.49916 10.1998 4.98424 10.3125 6 10C6.59477 9.81699 7.35751 9.38698 7.74678 9.15495C7.90767 9.05904 8.00913 8.89043 8.02469 8.70377L8.5 3H4.45258C4.18469 3 3.94926 3.17759 3.87567 3.43517Z",
										stroke: e === 3 ? "#F2C81B" : "#180801",
										"stroke-width": "1.5",
									}),
								],
							}),
							x.jsx("span", {
								className:
									"text-xs transition-all text-center" + (e === 3 ? " text-yellow-400" : ""),
								children: "Mis Tiendas",
							}),
						],
					}),
				],
			}),
		});
	},
	vg = () => x.jsxs("div", { children: [x.jsx(mg, {}), x.jsx(up, {}), x.jsx(gg, {})] });
function dd(e) {
	return e !== null && typeof e == "object" && "constructor" in e && e.constructor === Object;
}
function yu(e, t) {
	e === void 0 && (e = {}),
		t === void 0 && (t = {}),
		Object.keys(t).forEach(n => {
			typeof e[n] > "u"
				? (e[n] = t[n])
				: dd(t[n]) && dd(e[n]) && Object.keys(t[n]).length > 0 && yu(e[n], t[n]);
		});
}
const dp = {
	body: {},
	addEventListener() {},
	removeEventListener() {},
	activeElement: { blur() {}, nodeName: "" },
	querySelector() {
		return null;
	},
	querySelectorAll() {
		return [];
	},
	getElementById() {
		return null;
	},
	createEvent() {
		return { initEvent() {} };
	},
	createElement() {
		return {
			children: [],
			childNodes: [],
			style: {},
			setAttribute() {},
			getElementsByTagName() {
				return [];
			},
		};
	},
	createElementNS() {
		return {};
	},
	importNode() {
		return null;
	},
	location: {
		hash: "",
		host: "",
		hostname: "",
		href: "",
		origin: "",
		pathname: "",
		protocol: "",
		search: "",
	},
};
function Pr() {
	const e = typeof document < "u" ? document : {};
	return yu(e, dp), e;
}
const wg = {
	document: dp,
	navigator: { userAgent: "" },
	location: {
		hash: "",
		host: "",
		hostname: "",
		href: "",
		origin: "",
		pathname: "",
		protocol: "",
		search: "",
	},
	history: { replaceState() {}, pushState() {}, go() {}, back() {} },
	CustomEvent: function () {
		return this;
	},
	addEventListener() {},
	removeEventListener() {},
	getComputedStyle() {
		return {
			getPropertyValue() {
				return "";
			},
		};
	},
	Image() {},
	Date() {},
	screen: {},
	setTimeout() {},
	clearTimeout() {},
	matchMedia() {
		return {};
	},
	requestAnimationFrame(e) {
		return typeof setTimeout > "u" ? (e(), null) : setTimeout(e, 0);
	},
	cancelAnimationFrame(e) {
		typeof setTimeout > "u" || clearTimeout(e);
	},
};
function nt() {
	const e = typeof window < "u" ? window : {};
	return yu(e, wg), e;
}
function yg(e) {
	return (
		e === void 0 && (e = ""),
		e
			.trim()
			.split(" ")
			.filter(t => !!t.trim())
	);
}
function xg(e) {
	const t = e;
	Object.keys(t).forEach(n => {
		try {
			t[n] = null;
		} catch {}
		try {
			delete t[n];
		} catch {}
	});
}
function fa(e, t) {
	return t === void 0 && (t = 0), setTimeout(e, t);
}
function Xo() {
	return Date.now();
}
function Sg(e) {
	const t = nt();
	let n;
	return (
		t.getComputedStyle && (n = t.getComputedStyle(e, null)),
		!n && e.currentStyle && (n = e.currentStyle),
		n || (n = e.style),
		n
	);
}
function Cg(e, t) {
	t === void 0 && (t = "x");
	const n = nt();
	let r, i, o;
	const l = Sg(e);
	return (
		n.WebKitCSSMatrix
			? ((i = l.transform || l.webkitTransform),
			  i.split(",").length > 6 &&
					(i = i
						.split(", ")
						.map(a => a.replace(",", "."))
						.join(", ")),
			  (o = new n.WebKitCSSMatrix(i === "none" ? "" : i)))
			: ((o =
					l.MozTransform ||
					l.OTransform ||
					l.MsTransform ||
					l.msTransform ||
					l.transform ||
					l.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")),
			  (r = o.toString().split(","))),
		t === "x" &&
			(n.WebKitCSSMatrix
				? (i = o.m41)
				: r.length === 16
				  ? (i = parseFloat(r[12]))
				  : (i = parseFloat(r[4]))),
		t === "y" &&
			(n.WebKitCSSMatrix
				? (i = o.m42)
				: r.length === 16
				  ? (i = parseFloat(r[13]))
				  : (i = parseFloat(r[5]))),
		i || 0
	);
}
function io(e) {
	return (
		typeof e == "object" &&
		e !== null &&
		e.constructor &&
		Object.prototype.toString.call(e).slice(8, -1) === "Object"
	);
}
function Eg(e) {
	return typeof window < "u" && typeof window.HTMLElement < "u"
		? e instanceof HTMLElement
		: e && (e.nodeType === 1 || e.nodeType === 11);
}
function Xe() {
	const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
		t = ["__proto__", "constructor", "prototype"];
	for (let n = 1; n < arguments.length; n += 1) {
		const r = n < 0 || arguments.length <= n ? void 0 : arguments[n];
		if (r != null && !Eg(r)) {
			const i = Object.keys(Object(r)).filter(o => t.indexOf(o) < 0);
			for (let o = 0, l = i.length; o < l; o += 1) {
				const a = i[o],
					s = Object.getOwnPropertyDescriptor(r, a);
				s !== void 0 &&
					s.enumerable &&
					(io(e[a]) && io(r[a])
						? r[a].__swiper__
							? (e[a] = r[a])
							: Xe(e[a], r[a])
						: !io(e[a]) && io(r[a])
						  ? ((e[a] = {}), r[a].__swiper__ ? (e[a] = r[a]) : Xe(e[a], r[a]))
						  : (e[a] = r[a]));
			}
		}
	}
	return e;
}
function oo(e, t, n) {
	e.style.setProperty(t, n);
}
function fp(e) {
	let { swiper: t, targetPosition: n, side: r } = e;
	const i = nt(),
		o = -t.translate;
	let l = null,
		a;
	const s = t.params.speed;
	(t.wrapperEl.style.scrollSnapType = "none"), i.cancelAnimationFrame(t.cssModeFrameID);
	const u = n > o ? "next" : "prev",
		c = (p, y) => (u === "next" && p >= y) || (u === "prev" && p <= y),
		d = () => {
			(a = new Date().getTime()), l === null && (l = a);
			const p = Math.max(Math.min((a - l) / s, 1), 0),
				y = 0.5 - Math.cos(p * Math.PI) / 2;
			let g = o + y * (n - o);
			if ((c(g, n) && (g = n), t.wrapperEl.scrollTo({ [r]: g }), c(g, n))) {
				(t.wrapperEl.style.overflow = "hidden"),
					(t.wrapperEl.style.scrollSnapType = ""),
					setTimeout(() => {
						(t.wrapperEl.style.overflow = ""), t.wrapperEl.scrollTo({ [r]: g });
					}),
					i.cancelAnimationFrame(t.cssModeFrameID);
				return;
			}
			t.cssModeFrameID = i.requestAnimationFrame(d);
		};
	d();
}
function Ft(e, t) {
	return t === void 0 && (t = ""), [...e.children].filter(n => n.matches(t));
}
function Zo(e) {
	try {
		console.warn(e);
		return;
	} catch {}
}
function pa(e, t) {
	t === void 0 && (t = []);
	const n = document.createElement(e);
	return n.classList.add(...(Array.isArray(t) ? t : yg(t))), n;
}
function kg(e, t) {
	const n = [];
	for (; e.previousElementSibling; ) {
		const r = e.previousElementSibling;
		t ? r.matches(t) && n.push(r) : n.push(r), (e = r);
	}
	return n;
}
function Tg(e, t) {
	const n = [];
	for (; e.nextElementSibling; ) {
		const r = e.nextElementSibling;
		t ? r.matches(t) && n.push(r) : n.push(r), (e = r);
	}
	return n;
}
function ln(e, t) {
	return nt().getComputedStyle(e, null).getPropertyValue(t);
}
function fd(e) {
	let t = e,
		n;
	if (t) {
		for (n = 0; (t = t.previousSibling) !== null; ) t.nodeType === 1 && (n += 1);
		return n;
	}
}
function Pg(e, t) {
	const n = [];
	let r = e.parentElement;
	for (; r; ) t ? r.matches(t) && n.push(r) : n.push(r), (r = r.parentElement);
	return n;
}
function pd(e, t, n) {
	const r = nt();
	return n
		? e[t === "width" ? "offsetWidth" : "offsetHeight"] +
				parseFloat(
					r
						.getComputedStyle(e, null)
						.getPropertyValue(t === "width" ? "margin-right" : "margin-top")
				) +
				parseFloat(
					r
						.getComputedStyle(e, null)
						.getPropertyValue(t === "width" ? "margin-left" : "margin-bottom")
				)
		: e.offsetWidth;
}
let ls;
function Lg() {
	const e = nt(),
		t = Pr();
	return {
		smoothScroll:
			t.documentElement && t.documentElement.style && "scrollBehavior" in t.documentElement.style,
		touch: !!("ontouchstart" in e || (e.DocumentTouch && t instanceof e.DocumentTouch)),
	};
}
function pp() {
	return ls || (ls = Lg()), ls;
}
let ss;
function Mg(e) {
	let { userAgent: t } = e === void 0 ? {} : e;
	const n = pp(),
		r = nt(),
		i = r.navigator.platform,
		o = t || r.navigator.userAgent,
		l = { ios: !1, android: !1 },
		a = r.screen.width,
		s = r.screen.height,
		u = o.match(/(Android);?[\s\/]+([\d.]+)?/);
	let c = o.match(/(iPad).*OS\s([\d_]+)/);
	const d = o.match(/(iPod)(.*OS\s([\d_]+))?/),
		p = !c && o.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
		y = i === "Win32";
	let g = i === "MacIntel";
	const w = [
		"1024x1366",
		"1366x1024",
		"834x1194",
		"1194x834",
		"834x1112",
		"1112x834",
		"768x1024",
		"1024x768",
		"820x1180",
		"1180x820",
		"810x1080",
		"1080x810",
	];
	return (
		!c &&
			g &&
			n.touch &&
			w.indexOf(`${a}x${s}`) >= 0 &&
			((c = o.match(/(Version)\/([\d.]+)/)), c || (c = [0, 1, "13_0_0"]), (g = !1)),
		u && !y && ((l.os = "android"), (l.android = !0)),
		(c || p || d) && ((l.os = "ios"), (l.ios = !0)),
		l
	);
}
function Ng(e) {
	return e === void 0 && (e = {}), ss || (ss = Mg(e)), ss;
}
let as;
function Rg() {
	const e = nt();
	let t = !1;
	function n() {
		const r = e.navigator.userAgent.toLowerCase();
		return r.indexOf("safari") >= 0 && r.indexOf("chrome") < 0 && r.indexOf("android") < 0;
	}
	if (n()) {
		const r = String(e.navigator.userAgent);
		if (r.includes("Version/")) {
			const [i, o] = r
				.split("Version/")[1]
				.split(" ")[0]
				.split(".")
				.map(l => Number(l));
			t = i < 16 || (i === 16 && o < 2);
		}
	}
	return {
		isSafari: t || n(),
		needPerspectiveFix: t,
		isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),
	};
}
function _g() {
	return as || (as = Rg()), as;
}
function jg(e) {
	let { swiper: t, on: n, emit: r } = e;
	const i = nt();
	let o = null,
		l = null;
	const a = () => {
			!t || t.destroyed || !t.initialized || (r("beforeResize"), r("resize"));
		},
		s = () => {
			!t ||
				t.destroyed ||
				!t.initialized ||
				((o = new ResizeObserver(d => {
					l = i.requestAnimationFrame(() => {
						const { width: p, height: y } = t;
						let g = p,
							w = y;
						d.forEach(C => {
							let { contentBoxSize: f, contentRect: h, target: v } = C;
							(v && v !== t.el) ||
								((g = h ? h.width : (f[0] || f).inlineSize),
								(w = h ? h.height : (f[0] || f).blockSize));
						}),
							(g !== p || w !== y) && a();
					});
				})),
				o.observe(t.el));
		},
		u = () => {
			l && i.cancelAnimationFrame(l), o && o.unobserve && t.el && (o.unobserve(t.el), (o = null));
		},
		c = () => {
			!t || t.destroyed || !t.initialized || r("orientationchange");
		};
	n("init", () => {
		if (t.params.resizeObserver && typeof i.ResizeObserver < "u") {
			s();
			return;
		}
		i.addEventListener("resize", a), i.addEventListener("orientationchange", c);
	}),
		n("destroy", () => {
			u(), i.removeEventListener("resize", a), i.removeEventListener("orientationchange", c);
		});
}
function Og(e) {
	let { swiper: t, extendParams: n, on: r, emit: i } = e;
	const o = [],
		l = nt(),
		a = function (c, d) {
			d === void 0 && (d = {});
			const p = l.MutationObserver || l.WebkitMutationObserver,
				y = new p(g => {
					if (t.__preventObserver__) return;
					if (g.length === 1) {
						i("observerUpdate", g[0]);
						return;
					}
					const w = function () {
						i("observerUpdate", g[0]);
					};
					l.requestAnimationFrame ? l.requestAnimationFrame(w) : l.setTimeout(w, 0);
				});
			y.observe(c, {
				attributes: typeof d.attributes > "u" ? !0 : d.attributes,
				childList: typeof d.childList > "u" ? !0 : d.childList,
				characterData: typeof d.characterData > "u" ? !0 : d.characterData,
			}),
				o.push(y);
		},
		s = () => {
			if (t.params.observer) {
				if (t.params.observeParents) {
					const c = Pg(t.hostEl);
					for (let d = 0; d < c.length; d += 1) a(c[d]);
				}
				a(t.hostEl, { childList: t.params.observeSlideChildren }),
					a(t.wrapperEl, { attributes: !1 });
			}
		},
		u = () => {
			o.forEach(c => {
				c.disconnect();
			}),
				o.splice(0, o.length);
		};
	n({ observer: !1, observeParents: !1, observeSlideChildren: !1 }), r("init", s), r("destroy", u);
}
var zg = {
	on(e, t, n) {
		const r = this;
		if (!r.eventsListeners || r.destroyed || typeof t != "function") return r;
		const i = n ? "unshift" : "push";
		return (
			e.split(" ").forEach(o => {
				r.eventsListeners[o] || (r.eventsListeners[o] = []), r.eventsListeners[o][i](t);
			}),
			r
		);
	},
	once(e, t, n) {
		const r = this;
		if (!r.eventsListeners || r.destroyed || typeof t != "function") return r;
		function i() {
			r.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
			for (var o = arguments.length, l = new Array(o), a = 0; a < o; a++) l[a] = arguments[a];
			t.apply(r, l);
		}
		return (i.__emitterProxy = t), r.on(e, i, n);
	},
	onAny(e, t) {
		const n = this;
		if (!n.eventsListeners || n.destroyed || typeof e != "function") return n;
		const r = t ? "unshift" : "push";
		return n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[r](e), n;
	},
	offAny(e) {
		const t = this;
		if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners) return t;
		const n = t.eventsAnyListeners.indexOf(e);
		return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
	},
	off(e, t) {
		const n = this;
		return (
			!n.eventsListeners ||
				n.destroyed ||
				!n.eventsListeners ||
				e.split(" ").forEach(r => {
					typeof t > "u"
						? (n.eventsListeners[r] = [])
						: n.eventsListeners[r] &&
						  n.eventsListeners[r].forEach((i, o) => {
								(i === t || (i.__emitterProxy && i.__emitterProxy === t)) &&
									n.eventsListeners[r].splice(o, 1);
						  });
				}),
			n
		);
	},
	emit() {
		const e = this;
		if (!e.eventsListeners || e.destroyed || !e.eventsListeners) return e;
		let t, n, r;
		for (var i = arguments.length, o = new Array(i), l = 0; l < i; l++) o[l] = arguments[l];
		return (
			typeof o[0] == "string" || Array.isArray(o[0])
				? ((t = o[0]), (n = o.slice(1, o.length)), (r = e))
				: ((t = o[0].events), (n = o[0].data), (r = o[0].context || e)),
			n.unshift(r),
			(Array.isArray(t) ? t : t.split(" ")).forEach(s => {
				e.eventsAnyListeners &&
					e.eventsAnyListeners.length &&
					e.eventsAnyListeners.forEach(u => {
						u.apply(r, [s, ...n]);
					}),
					e.eventsListeners &&
						e.eventsListeners[s] &&
						e.eventsListeners[s].forEach(u => {
							u.apply(r, n);
						});
			}),
			e
		);
	},
};
function Ig() {
	const e = this;
	let t, n;
	const r = e.el;
	typeof e.params.width < "u" && e.params.width !== null
		? (t = e.params.width)
		: (t = r.clientWidth),
		typeof e.params.height < "u" && e.params.height !== null
			? (n = e.params.height)
			: (n = r.clientHeight),
		!((t === 0 && e.isHorizontal()) || (n === 0 && e.isVertical())) &&
			((t =
				t - parseInt(ln(r, "padding-left") || 0, 10) - parseInt(ln(r, "padding-right") || 0, 10)),
			(n =
				n - parseInt(ln(r, "padding-top") || 0, 10) - parseInt(ln(r, "padding-bottom") || 0, 10)),
			Number.isNaN(t) && (t = 0),
			Number.isNaN(n) && (n = 0),
			Object.assign(e, { width: t, height: n, size: e.isHorizontal() ? t : n }));
}
function Dg() {
	const e = this;
	function t(N, z) {
		return parseFloat(N.getPropertyValue(e.getDirectionLabel(z)) || 0);
	}
	const n = e.params,
		{ wrapperEl: r, slidesEl: i, size: o, rtlTranslate: l, wrongRTL: a } = e,
		s = e.virtual && n.virtual.enabled,
		u = s ? e.virtual.slides.length : e.slides.length,
		c = Ft(i, `.${e.params.slideClass}, swiper-slide`),
		d = s ? e.virtual.slides.length : c.length;
	let p = [];
	const y = [],
		g = [];
	let w = n.slidesOffsetBefore;
	typeof w == "function" && (w = n.slidesOffsetBefore.call(e));
	let C = n.slidesOffsetAfter;
	typeof C == "function" && (C = n.slidesOffsetAfter.call(e));
	const f = e.snapGrid.length,
		h = e.slidesGrid.length;
	let v = n.spaceBetween,
		m = -w,
		E = 0,
		L = 0;
	if (typeof o > "u") return;
	typeof v == "string" && v.indexOf("%") >= 0
		? (v = (parseFloat(v.replace("%", "")) / 100) * o)
		: typeof v == "string" && (v = parseFloat(v)),
		(e.virtualSize = -v),
		c.forEach(N => {
			l ? (N.style.marginLeft = "") : (N.style.marginRight = ""),
				(N.style.marginBottom = ""),
				(N.style.marginTop = "");
		}),
		n.centeredSlides &&
			n.cssMode &&
			(oo(r, "--swiper-centered-offset-before", ""), oo(r, "--swiper-centered-offset-after", ""));
	const T = n.grid && n.grid.rows > 1 && e.grid;
	T ? e.grid.initSlides(c) : e.grid && e.grid.unsetSlides();
	let _;
	const j =
		n.slidesPerView === "auto" &&
		n.breakpoints &&
		Object.keys(n.breakpoints).filter(N => typeof n.breakpoints[N].slidesPerView < "u").length > 0;
	for (let N = 0; N < d; N += 1) {
		_ = 0;
		let z;
		if (
			(c[N] && (z = c[N]), T && e.grid.updateSlide(N, z, c), !(c[N] && ln(z, "display") === "none"))
		) {
			if (n.slidesPerView === "auto") {
				j && (c[N].style[e.getDirectionLabel("width")] = "");
				const b = getComputedStyle(z),
					F = z.style.transform,
					ee = z.style.webkitTransform;
				if (
					(F && (z.style.transform = "none"),
					ee && (z.style.webkitTransform = "none"),
					n.roundLengths)
				)
					_ = e.isHorizontal() ? pd(z, "width", !0) : pd(z, "height", !0);
				else {
					const G = t(b, "width"),
						Ee = t(b, "padding-left"),
						Ke = t(b, "padding-right"),
						I = t(b, "margin-left"),
						A = t(b, "margin-right"),
						U = b.getPropertyValue("box-sizing");
					if (U && U === "border-box") _ = G + I + A;
					else {
						const { clientWidth: ne, offsetWidth: te } = z;
						_ = G + Ee + Ke + I + A + (te - ne);
					}
				}
				F && (z.style.transform = F),
					ee && (z.style.webkitTransform = ee),
					n.roundLengths && (_ = Math.floor(_));
			} else
				(_ = (o - (n.slidesPerView - 1) * v) / n.slidesPerView),
					n.roundLengths && (_ = Math.floor(_)),
					c[N] && (c[N].style[e.getDirectionLabel("width")] = `${_}px`);
			c[N] && (c[N].swiperSlideSize = _),
				g.push(_),
				n.centeredSlides
					? ((m = m + _ / 2 + E / 2 + v),
					  E === 0 && N !== 0 && (m = m - o / 2 - v),
					  N === 0 && (m = m - o / 2 - v),
					  Math.abs(m) < 1 / 1e3 && (m = 0),
					  n.roundLengths && (m = Math.floor(m)),
					  L % n.slidesPerGroup === 0 && p.push(m),
					  y.push(m))
					: (n.roundLengths && (m = Math.floor(m)),
					  (L - Math.min(e.params.slidesPerGroupSkip, L)) % e.params.slidesPerGroup === 0 &&
							p.push(m),
					  y.push(m),
					  (m = m + _ + v)),
				(e.virtualSize += _ + v),
				(E = _),
				(L += 1);
		}
	}
	if (
		((e.virtualSize = Math.max(e.virtualSize, o) + C),
		l &&
			a &&
			(n.effect === "slide" || n.effect === "coverflow") &&
			(r.style.width = `${e.virtualSize + v}px`),
		n.setWrapperSize && (r.style[e.getDirectionLabel("width")] = `${e.virtualSize + v}px`),
		T && e.grid.updateWrapperSize(_, p),
		!n.centeredSlides)
	) {
		const N = [];
		for (let z = 0; z < p.length; z += 1) {
			let b = p[z];
			n.roundLengths && (b = Math.floor(b)), p[z] <= e.virtualSize - o && N.push(b);
		}
		(p = N),
			Math.floor(e.virtualSize - o) - Math.floor(p[p.length - 1]) > 1 && p.push(e.virtualSize - o);
	}
	if (s && n.loop) {
		const N = g[0] + v;
		if (n.slidesPerGroup > 1) {
			const z = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / n.slidesPerGroup),
				b = N * n.slidesPerGroup;
			for (let F = 0; F < z; F += 1) p.push(p[p.length - 1] + b);
		}
		for (let z = 0; z < e.virtual.slidesBefore + e.virtual.slidesAfter; z += 1)
			n.slidesPerGroup === 1 && p.push(p[p.length - 1] + N),
				y.push(y[y.length - 1] + N),
				(e.virtualSize += N);
	}
	if ((p.length === 0 && (p = [0]), v !== 0)) {
		const N = e.isHorizontal() && l ? "marginLeft" : e.getDirectionLabel("marginRight");
		c.filter((z, b) => (!n.cssMode || n.loop ? !0 : b !== c.length - 1)).forEach(z => {
			z.style[N] = `${v}px`;
		});
	}
	if (n.centeredSlides && n.centeredSlidesBounds) {
		let N = 0;
		g.forEach(b => {
			N += b + (v || 0);
		}),
			(N -= v);
		const z = N - o;
		p = p.map(b => (b <= 0 ? -w : b > z ? z + C : b));
	}
	if (n.centerInsufficientSlides) {
		let N = 0;
		if (
			(g.forEach(z => {
				N += z + (v || 0);
			}),
			(N -= v),
			N < o)
		) {
			const z = (o - N) / 2;
			p.forEach((b, F) => {
				p[F] = b - z;
			}),
				y.forEach((b, F) => {
					y[F] = b + z;
				});
		}
	}
	if (
		(Object.assign(e, { slides: c, snapGrid: p, slidesGrid: y, slidesSizesGrid: g }),
		n.centeredSlides && n.cssMode && !n.centeredSlidesBounds)
	) {
		oo(r, "--swiper-centered-offset-before", `${-p[0]}px`),
			oo(r, "--swiper-centered-offset-after", `${e.size / 2 - g[g.length - 1] / 2}px`);
		const N = -e.snapGrid[0],
			z = -e.slidesGrid[0];
		(e.snapGrid = e.snapGrid.map(b => b + N)), (e.slidesGrid = e.slidesGrid.map(b => b + z));
	}
	if (
		(d !== u && e.emit("slidesLengthChange"),
		p.length !== f && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")),
		y.length !== h && e.emit("slidesGridLengthChange"),
		n.watchSlidesProgress && e.updateSlidesOffset(),
		e.emit("slidesUpdated"),
		!s && !n.cssMode && (n.effect === "slide" || n.effect === "fade"))
	) {
		const N = `${n.containerModifierClass}backface-hidden`,
			z = e.el.classList.contains(N);
		d <= n.maxBackfaceHiddenSlides ? z || e.el.classList.add(N) : z && e.el.classList.remove(N);
	}
}
function Ag(e) {
	const t = this,
		n = [],
		r = t.virtual && t.params.virtual.enabled;
	let i = 0,
		o;
	typeof e == "number" ? t.setTransition(e) : e === !0 && t.setTransition(t.params.speed);
	const l = a => (r ? t.slides[t.getSlideIndexByData(a)] : t.slides[a]);
	if (t.params.slidesPerView !== "auto" && t.params.slidesPerView > 1)
		if (t.params.centeredSlides)
			(t.visibleSlides || []).forEach(a => {
				n.push(a);
			});
		else
			for (o = 0; o < Math.ceil(t.params.slidesPerView); o += 1) {
				const a = t.activeIndex + o;
				if (a > t.slides.length && !r) break;
				n.push(l(a));
			}
	else n.push(l(t.activeIndex));
	for (o = 0; o < n.length; o += 1)
		if (typeof n[o] < "u") {
			const a = n[o].offsetHeight;
			i = a > i ? a : i;
		}
	(i || i === 0) && (t.wrapperEl.style.height = `${i}px`);
}
function Fg() {
	const e = this,
		t = e.slides,
		n = e.isElement ? (e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop) : 0;
	for (let r = 0; r < t.length; r += 1)
		t[r].swiperSlideOffset =
			(e.isHorizontal() ? t[r].offsetLeft : t[r].offsetTop) - n - e.cssOverflowAdjustment();
}
function Bg(e) {
	e === void 0 && (e = (this && this.translate) || 0);
	const t = this,
		n = t.params,
		{ slides: r, rtlTranslate: i, snapGrid: o } = t;
	if (r.length === 0) return;
	typeof r[0].swiperSlideOffset > "u" && t.updateSlidesOffset();
	let l = -e;
	i && (l = e),
		r.forEach(s => {
			s.classList.remove(n.slideVisibleClass, n.slideFullyVisibleClass);
		}),
		(t.visibleSlidesIndexes = []),
		(t.visibleSlides = []);
	let a = n.spaceBetween;
	typeof a == "string" && a.indexOf("%") >= 0
		? (a = (parseFloat(a.replace("%", "")) / 100) * t.size)
		: typeof a == "string" && (a = parseFloat(a));
	for (let s = 0; s < r.length; s += 1) {
		const u = r[s];
		let c = u.swiperSlideOffset;
		n.cssMode && n.centeredSlides && (c -= r[0].swiperSlideOffset);
		const d = (l + (n.centeredSlides ? t.minTranslate() : 0) - c) / (u.swiperSlideSize + a),
			p = (l - o[0] + (n.centeredSlides ? t.minTranslate() : 0) - c) / (u.swiperSlideSize + a),
			y = -(l - c),
			g = y + t.slidesSizesGrid[s],
			w = y >= 0 && y <= t.size - t.slidesSizesGrid[s];
		((y >= 0 && y < t.size - 1) || (g > 1 && g <= t.size) || (y <= 0 && g >= t.size)) &&
			(t.visibleSlides.push(u),
			t.visibleSlidesIndexes.push(s),
			r[s].classList.add(n.slideVisibleClass)),
			w && r[s].classList.add(n.slideFullyVisibleClass),
			(u.progress = i ? -d : d),
			(u.originalProgress = i ? -p : p);
	}
}
function bg(e) {
	const t = this;
	if (typeof e > "u") {
		const c = t.rtlTranslate ? -1 : 1;
		e = (t && t.translate && t.translate * c) || 0;
	}
	const n = t.params,
		r = t.maxTranslate() - t.minTranslate();
	let { progress: i, isBeginning: o, isEnd: l, progressLoop: a } = t;
	const s = o,
		u = l;
	if (r === 0) (i = 0), (o = !0), (l = !0);
	else {
		i = (e - t.minTranslate()) / r;
		const c = Math.abs(e - t.minTranslate()) < 1,
			d = Math.abs(e - t.maxTranslate()) < 1;
		(o = c || i <= 0), (l = d || i >= 1), c && (i = 0), d && (i = 1);
	}
	if (n.loop) {
		const c = t.getSlideIndexByData(0),
			d = t.getSlideIndexByData(t.slides.length - 1),
			p = t.slidesGrid[c],
			y = t.slidesGrid[d],
			g = t.slidesGrid[t.slidesGrid.length - 1],
			w = Math.abs(e);
		w >= p ? (a = (w - p) / g) : (a = (w + g - y) / g), a > 1 && (a -= 1);
	}
	Object.assign(t, { progress: i, progressLoop: a, isBeginning: o, isEnd: l }),
		(n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) && t.updateSlidesProgress(e),
		o && !s && t.emit("reachBeginning toEdge"),
		l && !u && t.emit("reachEnd toEdge"),
		((s && !o) || (u && !l)) && t.emit("fromEdge"),
		t.emit("progress", i);
}
function Vg() {
	const e = this,
		{ slides: t, params: n, slidesEl: r, activeIndex: i } = e,
		o = e.virtual && n.virtual.enabled,
		l = e.grid && n.grid && n.grid.rows > 1,
		a = d => Ft(r, `.${n.slideClass}${d}, swiper-slide${d}`)[0];
	t.forEach(d => {
		d.classList.remove(n.slideActiveClass, n.slideNextClass, n.slidePrevClass);
	});
	let s, u, c;
	if (o)
		if (n.loop) {
			let d = i - e.virtual.slidesBefore;
			d < 0 && (d = e.virtual.slides.length + d),
				d >= e.virtual.slides.length && (d -= e.virtual.slides.length),
				(s = a(`[data-swiper-slide-index="${d}"]`));
		} else s = a(`[data-swiper-slide-index="${i}"]`);
	else
		l
			? ((s = t.filter(d => d.column === i)[0]),
			  (c = t.filter(d => d.column === i + 1)[0]),
			  (u = t.filter(d => d.column === i - 1)[0]))
			: (s = t[i]);
	s &&
		(s.classList.add(n.slideActiveClass),
		l
			? (c && c.classList.add(n.slideNextClass), u && u.classList.add(n.slidePrevClass))
			: ((c = Tg(s, `.${n.slideClass}, swiper-slide`)[0]),
			  n.loop && !c && (c = t[0]),
			  c && c.classList.add(n.slideNextClass),
			  (u = kg(s, `.${n.slideClass}, swiper-slide`)[0]),
			  n.loop && !u === 0 && (u = t[t.length - 1]),
			  u && u.classList.add(n.slidePrevClass))),
		e.emitSlidesClasses();
}
const xo = (e, t) => {
		if (!e || e.destroyed || !e.params) return;
		const n = () => (e.isElement ? "swiper-slide" : `.${e.params.slideClass}`),
			r = t.closest(n());
		if (r) {
			let i = r.querySelector(`.${e.params.lazyPreloaderClass}`);
			!i &&
				e.isElement &&
				(r.shadowRoot
					? (i = r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`))
					: requestAnimationFrame(() => {
							r.shadowRoot &&
								((i = r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`)),
								i && i.remove());
					  })),
				i && i.remove();
		}
	},
	us = (e, t) => {
		if (!e.slides[t]) return;
		const n = e.slides[t].querySelector('[loading="lazy"]');
		n && n.removeAttribute("loading");
	},
	ha = e => {
		if (!e || e.destroyed || !e.params) return;
		let t = e.params.lazyPreloadPrevNext;
		const n = e.slides.length;
		if (!n || !t || t < 0) return;
		t = Math.min(t, n);
		const r =
				e.params.slidesPerView === "auto"
					? e.slidesPerViewDynamic()
					: Math.ceil(e.params.slidesPerView),
			i = e.activeIndex;
		if (e.params.grid && e.params.grid.rows > 1) {
			const l = i,
				a = [l - t];
			a.push(...Array.from({ length: t }).map((s, u) => l + r + u)),
				e.slides.forEach((s, u) => {
					a.includes(s.column) && us(e, u);
				});
			return;
		}
		const o = i + r - 1;
		if (e.params.rewind || e.params.loop)
			for (let l = i - t; l <= o + t; l += 1) {
				const a = ((l % n) + n) % n;
				(a < i || a > o) && us(e, a);
			}
		else
			for (let l = Math.max(i - t, 0); l <= Math.min(o + t, n - 1); l += 1)
				l !== i && (l > o || l < i) && us(e, l);
	};
function Ug(e) {
	const { slidesGrid: t, params: n } = e,
		r = e.rtlTranslate ? e.translate : -e.translate;
	let i;
	for (let o = 0; o < t.length; o += 1)
		typeof t[o + 1] < "u"
			? r >= t[o] && r < t[o + 1] - (t[o + 1] - t[o]) / 2
				? (i = o)
				: r >= t[o] && r < t[o + 1] && (i = o + 1)
			: r >= t[o] && (i = o);
	return n.normalizeSlideIndex && (i < 0 || typeof i > "u") && (i = 0), i;
}
function Hg(e) {
	const t = this,
		n = t.rtlTranslate ? t.translate : -t.translate,
		{ snapGrid: r, params: i, activeIndex: o, realIndex: l, snapIndex: a } = t;
	let s = e,
		u;
	const c = y => {
		let g = y - t.virtual.slidesBefore;
		return (
			g < 0 && (g = t.virtual.slides.length + g),
			g >= t.virtual.slides.length && (g -= t.virtual.slides.length),
			g
		);
	};
	if ((typeof s > "u" && (s = Ug(t)), r.indexOf(n) >= 0)) u = r.indexOf(n);
	else {
		const y = Math.min(i.slidesPerGroupSkip, s);
		u = y + Math.floor((s - y) / i.slidesPerGroup);
	}
	if ((u >= r.length && (u = r.length - 1), s === o && !t.params.loop)) {
		u !== a && ((t.snapIndex = u), t.emit("snapIndexChange"));
		return;
	}
	if (s === o && t.params.loop && t.virtual && t.params.virtual.enabled) {
		t.realIndex = c(s);
		return;
	}
	const d = t.grid && i.grid && i.grid.rows > 1;
	let p;
	if (t.virtual && i.virtual.enabled && i.loop) p = c(s);
	else if (d) {
		const y = t.slides.filter(w => w.column === s)[0];
		let g = parseInt(y.getAttribute("data-swiper-slide-index"), 10);
		Number.isNaN(g) && (g = Math.max(t.slides.indexOf(y), 0)), (p = Math.floor(g / i.grid.rows));
	} else if (t.slides[s]) {
		const y = t.slides[s].getAttribute("data-swiper-slide-index");
		y ? (p = parseInt(y, 10)) : (p = s);
	} else p = s;
	Object.assign(t, {
		previousSnapIndex: a,
		snapIndex: u,
		previousRealIndex: l,
		realIndex: p,
		previousIndex: o,
		activeIndex: s,
	}),
		t.initialized && ha(t),
		t.emit("activeIndexChange"),
		t.emit("snapIndexChange"),
		(t.initialized || t.params.runCallbacksOnInit) &&
			(l !== p && t.emit("realIndexChange"), t.emit("slideChange"));
}
function $g(e, t) {
	const n = this,
		r = n.params;
	let i = e.closest(`.${r.slideClass}, swiper-slide`);
	!i &&
		n.isElement &&
		t &&
		t.length > 1 &&
		t.includes(e) &&
		[...t.slice(t.indexOf(e) + 1, t.length)].forEach(a => {
			!i && a.matches && a.matches(`.${r.slideClass}, swiper-slide`) && (i = a);
		});
	let o = !1,
		l;
	if (i) {
		for (let a = 0; a < n.slides.length; a += 1)
			if (n.slides[a] === i) {
				(o = !0), (l = a);
				break;
			}
	}
	if (i && o)
		(n.clickedSlide = i),
			n.virtual && n.params.virtual.enabled
				? (n.clickedIndex = parseInt(i.getAttribute("data-swiper-slide-index"), 10))
				: (n.clickedIndex = l);
	else {
		(n.clickedSlide = void 0), (n.clickedIndex = void 0);
		return;
	}
	r.slideToClickedSlide &&
		n.clickedIndex !== void 0 &&
		n.clickedIndex !== n.activeIndex &&
		n.slideToClickedSlide();
}
var Wg = {
	updateSize: Ig,
	updateSlides: Dg,
	updateAutoHeight: Ag,
	updateSlidesOffset: Fg,
	updateSlidesProgress: Bg,
	updateProgress: bg,
	updateSlidesClasses: Vg,
	updateActiveIndex: Hg,
	updateClickedSlide: $g,
};
function Gg(e) {
	e === void 0 && (e = this.isHorizontal() ? "x" : "y");
	const t = this,
		{ params: n, rtlTranslate: r, translate: i, wrapperEl: o } = t;
	if (n.virtualTranslate) return r ? -i : i;
	if (n.cssMode) return i;
	let l = Cg(o, e);
	return (l += t.cssOverflowAdjustment()), r && (l = -l), l || 0;
}
function Kg(e, t) {
	const n = this,
		{ rtlTranslate: r, params: i, wrapperEl: o, progress: l } = n;
	let a = 0,
		s = 0;
	const u = 0;
	n.isHorizontal() ? (a = r ? -e : e) : (s = e),
		i.roundLengths && ((a = Math.floor(a)), (s = Math.floor(s))),
		(n.previousTranslate = n.translate),
		(n.translate = n.isHorizontal() ? a : s),
		i.cssMode
			? (o[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal() ? -a : -s)
			: i.virtualTranslate ||
			  (n.isHorizontal() ? (a -= n.cssOverflowAdjustment()) : (s -= n.cssOverflowAdjustment()),
			  (o.style.transform = `translate3d(${a}px, ${s}px, ${u}px)`));
	let c;
	const d = n.maxTranslate() - n.minTranslate();
	d === 0 ? (c = 0) : (c = (e - n.minTranslate()) / d),
		c !== l && n.updateProgress(e),
		n.emit("setTranslate", n.translate, t);
}
function Qg() {
	return -this.snapGrid[0];
}
function Yg() {
	return -this.snapGrid[this.snapGrid.length - 1];
}
function Xg(e, t, n, r, i) {
	e === void 0 && (e = 0),
		t === void 0 && (t = this.params.speed),
		n === void 0 && (n = !0),
		r === void 0 && (r = !0);
	const o = this,
		{ params: l, wrapperEl: a } = o;
	if (o.animating && l.preventInteractionOnTransition) return !1;
	const s = o.minTranslate(),
		u = o.maxTranslate();
	let c;
	if ((r && e > s ? (c = s) : r && e < u ? (c = u) : (c = e), o.updateProgress(c), l.cssMode)) {
		const d = o.isHorizontal();
		if (t === 0) a[d ? "scrollLeft" : "scrollTop"] = -c;
		else {
			if (!o.support.smoothScroll)
				return fp({ swiper: o, targetPosition: -c, side: d ? "left" : "top" }), !0;
			a.scrollTo({ [d ? "left" : "top"]: -c, behavior: "smooth" });
		}
		return !0;
	}
	return (
		t === 0
			? (o.setTransition(0),
			  o.setTranslate(c),
			  n && (o.emit("beforeTransitionStart", t, i), o.emit("transitionEnd")))
			: (o.setTransition(t),
			  o.setTranslate(c),
			  n && (o.emit("beforeTransitionStart", t, i), o.emit("transitionStart")),
			  o.animating ||
					((o.animating = !0),
					o.onTranslateToWrapperTransitionEnd ||
						(o.onTranslateToWrapperTransitionEnd = function (p) {
							!o ||
								o.destroyed ||
								(p.target === this &&
									(o.wrapperEl.removeEventListener(
										"transitionend",
										o.onTranslateToWrapperTransitionEnd
									),
									(o.onTranslateToWrapperTransitionEnd = null),
									delete o.onTranslateToWrapperTransitionEnd,
									n && o.emit("transitionEnd")));
						}),
					o.wrapperEl.addEventListener("transitionend", o.onTranslateToWrapperTransitionEnd))),
		!0
	);
}
var Zg = {
	getTranslate: Gg,
	setTranslate: Kg,
	minTranslate: Qg,
	maxTranslate: Yg,
	translateTo: Xg,
};
function qg(e, t) {
	const n = this;
	n.params.cssMode ||
		((n.wrapperEl.style.transitionDuration = `${e}ms`),
		(n.wrapperEl.style.transitionDelay = e === 0 ? "0ms" : "")),
		n.emit("setTransition", e, t);
}
function hp(e) {
	let { swiper: t, runCallbacks: n, direction: r, step: i } = e;
	const { activeIndex: o, previousIndex: l } = t;
	let a = r;
	if (
		(a || (o > l ? (a = "next") : o < l ? (a = "prev") : (a = "reset")),
		t.emit(`transition${i}`),
		n && o !== l)
	) {
		if (a === "reset") {
			t.emit(`slideResetTransition${i}`);
			return;
		}
		t.emit(`slideChangeTransition${i}`),
			a === "next" ? t.emit(`slideNextTransition${i}`) : t.emit(`slidePrevTransition${i}`);
	}
}
function Jg(e, t) {
	e === void 0 && (e = !0);
	const n = this,
		{ params: r } = n;
	r.cssMode ||
		(r.autoHeight && n.updateAutoHeight(),
		hp({ swiper: n, runCallbacks: e, direction: t, step: "Start" }));
}
function ev(e, t) {
	e === void 0 && (e = !0);
	const n = this,
		{ params: r } = n;
	(n.animating = !1),
		!r.cssMode &&
			(n.setTransition(0), hp({ swiper: n, runCallbacks: e, direction: t, step: "End" }));
}
var tv = { setTransition: qg, transitionStart: Jg, transitionEnd: ev };
function nv(e, t, n, r, i) {
	e === void 0 && (e = 0),
		t === void 0 && (t = this.params.speed),
		n === void 0 && (n = !0),
		typeof e == "string" && (e = parseInt(e, 10));
	const o = this;
	let l = e;
	l < 0 && (l = 0);
	const {
		params: a,
		snapGrid: s,
		slidesGrid: u,
		previousIndex: c,
		activeIndex: d,
		rtlTranslate: p,
		wrapperEl: y,
		enabled: g,
	} = o;
	if ((o.animating && a.preventInteractionOnTransition) || (!g && !r && !i)) return !1;
	const w = Math.min(o.params.slidesPerGroupSkip, l);
	let C = w + Math.floor((l - w) / o.params.slidesPerGroup);
	C >= s.length && (C = s.length - 1);
	const f = -s[C];
	if (a.normalizeSlideIndex)
		for (let v = 0; v < u.length; v += 1) {
			const m = -Math.floor(f * 100),
				E = Math.floor(u[v] * 100),
				L = Math.floor(u[v + 1] * 100);
			typeof u[v + 1] < "u"
				? m >= E && m < L - (L - E) / 2
					? (l = v)
					: m >= E && m < L && (l = v + 1)
				: m >= E && (l = v);
		}
	if (
		o.initialized &&
		l !== d &&
		((!o.allowSlideNext &&
			(p ? f > o.translate && f > o.minTranslate() : f < o.translate && f < o.minTranslate())) ||
			(!o.allowSlidePrev && f > o.translate && f > o.maxTranslate() && (d || 0) !== l))
	)
		return !1;
	l !== (c || 0) && n && o.emit("beforeSlideChangeStart"), o.updateProgress(f);
	let h;
	if (
		(l > d ? (h = "next") : l < d ? (h = "prev") : (h = "reset"),
		(p && -f === o.translate) || (!p && f === o.translate))
	)
		return (
			o.updateActiveIndex(l),
			a.autoHeight && o.updateAutoHeight(),
			o.updateSlidesClasses(),
			a.effect !== "slide" && o.setTranslate(f),
			h !== "reset" && (o.transitionStart(n, h), o.transitionEnd(n, h)),
			!1
		);
	if (a.cssMode) {
		const v = o.isHorizontal(),
			m = p ? f : -f;
		if (t === 0) {
			const E = o.virtual && o.params.virtual.enabled;
			E && ((o.wrapperEl.style.scrollSnapType = "none"), (o._immediateVirtual = !0)),
				E && !o._cssModeVirtualInitialSet && o.params.initialSlide > 0
					? ((o._cssModeVirtualInitialSet = !0),
					  requestAnimationFrame(() => {
							y[v ? "scrollLeft" : "scrollTop"] = m;
					  }))
					: (y[v ? "scrollLeft" : "scrollTop"] = m),
				E &&
					requestAnimationFrame(() => {
						(o.wrapperEl.style.scrollSnapType = ""), (o._immediateVirtual = !1);
					});
		} else {
			if (!o.support.smoothScroll)
				return fp({ swiper: o, targetPosition: m, side: v ? "left" : "top" }), !0;
			y.scrollTo({ [v ? "left" : "top"]: m, behavior: "smooth" });
		}
		return !0;
	}
	return (
		o.setTransition(t),
		o.setTranslate(f),
		o.updateActiveIndex(l),
		o.updateSlidesClasses(),
		o.emit("beforeTransitionStart", t, r),
		o.transitionStart(n, h),
		t === 0
			? o.transitionEnd(n, h)
			: o.animating ||
			  ((o.animating = !0),
			  o.onSlideToWrapperTransitionEnd ||
					(o.onSlideToWrapperTransitionEnd = function (m) {
						!o ||
							o.destroyed ||
							(m.target === this &&
								(o.wrapperEl.removeEventListener("transitionend", o.onSlideToWrapperTransitionEnd),
								(o.onSlideToWrapperTransitionEnd = null),
								delete o.onSlideToWrapperTransitionEnd,
								o.transitionEnd(n, h)));
					}),
			  o.wrapperEl.addEventListener("transitionend", o.onSlideToWrapperTransitionEnd)),
		!0
	);
}
function rv(e, t, n, r) {
	e === void 0 && (e = 0),
		t === void 0 && (t = this.params.speed),
		n === void 0 && (n = !0),
		typeof e == "string" && (e = parseInt(e, 10));
	const i = this,
		o = i.grid && i.params.grid && i.params.grid.rows > 1;
	let l = e;
	if (i.params.loop)
		if (i.virtual && i.params.virtual.enabled) l = l + i.virtual.slidesBefore;
		else {
			let a;
			if (o) {
				const p = l * i.params.grid.rows;
				a = i.slides.filter(y => y.getAttribute("data-swiper-slide-index") * 1 === p)[0].column;
			} else a = i.getSlideIndexByData(l);
			const s = o ? Math.ceil(i.slides.length / i.params.grid.rows) : i.slides.length,
				{ centeredSlides: u } = i.params;
			let c = i.params.slidesPerView;
			c === "auto"
				? (c = i.slidesPerViewDynamic())
				: ((c = Math.ceil(parseFloat(i.params.slidesPerView, 10))),
				  u && c % 2 === 0 && (c = c + 1));
			let d = s - a < c;
			if ((u && (d = d || a < Math.ceil(c / 2)), d)) {
				const p = u
					? a < i.activeIndex
						? "prev"
						: "next"
					: a - i.activeIndex - 1 < i.params.slidesPerView
					  ? "next"
					  : "prev";
				i.loopFix({
					direction: p,
					slideTo: !0,
					activeSlideIndex: p === "next" ? a + 1 : a - s + 1,
					slideRealIndex: p === "next" ? i.realIndex : void 0,
				});
			}
			if (o) {
				const p = l * i.params.grid.rows;
				l = i.slides.filter(y => y.getAttribute("data-swiper-slide-index") * 1 === p)[0].column;
			} else l = i.getSlideIndexByData(l);
		}
	return (
		requestAnimationFrame(() => {
			i.slideTo(l, t, n, r);
		}),
		i
	);
}
function iv(e, t, n) {
	e === void 0 && (e = this.params.speed), t === void 0 && (t = !0);
	const r = this,
		{ enabled: i, params: o, animating: l } = r;
	if (!i) return r;
	let a = o.slidesPerGroup;
	o.slidesPerView === "auto" &&
		o.slidesPerGroup === 1 &&
		o.slidesPerGroupAuto &&
		(a = Math.max(r.slidesPerViewDynamic("current", !0), 1));
	const s = r.activeIndex < o.slidesPerGroupSkip ? 1 : a,
		u = r.virtual && o.virtual.enabled;
	if (o.loop) {
		if (l && !u && o.loopPreventsSliding) return !1;
		if (
			(r.loopFix({ direction: "next" }),
			(r._clientLeft = r.wrapperEl.clientLeft),
			r.activeIndex === r.slides.length - 1 && o.cssMode)
		)
			return (
				requestAnimationFrame(() => {
					r.slideTo(r.activeIndex + s, e, t, n);
				}),
				!0
			);
	}
	return o.rewind && r.isEnd ? r.slideTo(0, e, t, n) : r.slideTo(r.activeIndex + s, e, t, n);
}
function ov(e, t, n) {
	e === void 0 && (e = this.params.speed), t === void 0 && (t = !0);
	const r = this,
		{ params: i, snapGrid: o, slidesGrid: l, rtlTranslate: a, enabled: s, animating: u } = r;
	if (!s) return r;
	const c = r.virtual && i.virtual.enabled;
	if (i.loop) {
		if (u && !c && i.loopPreventsSliding) return !1;
		r.loopFix({ direction: "prev" }), (r._clientLeft = r.wrapperEl.clientLeft);
	}
	const d = a ? r.translate : -r.translate;
	function p(f) {
		return f < 0 ? -Math.floor(Math.abs(f)) : Math.floor(f);
	}
	const y = p(d),
		g = o.map(f => p(f));
	let w = o[g.indexOf(y) - 1];
	if (typeof w > "u" && i.cssMode) {
		let f;
		o.forEach((h, v) => {
			y >= h && (f = v);
		}),
			typeof f < "u" && (w = o[f > 0 ? f - 1 : f]);
	}
	let C = 0;
	if (
		(typeof w < "u" &&
			((C = l.indexOf(w)),
			C < 0 && (C = r.activeIndex - 1),
			i.slidesPerView === "auto" &&
				i.slidesPerGroup === 1 &&
				i.slidesPerGroupAuto &&
				((C = C - r.slidesPerViewDynamic("previous", !0) + 1), (C = Math.max(C, 0)))),
		i.rewind && r.isBeginning)
	) {
		const f =
			r.params.virtual && r.params.virtual.enabled && r.virtual
				? r.virtual.slides.length - 1
				: r.slides.length - 1;
		return r.slideTo(f, e, t, n);
	} else if (i.loop && r.activeIndex === 0 && i.cssMode)
		return (
			requestAnimationFrame(() => {
				r.slideTo(C, e, t, n);
			}),
			!0
		);
	return r.slideTo(C, e, t, n);
}
function lv(e, t, n) {
	e === void 0 && (e = this.params.speed), t === void 0 && (t = !0);
	const r = this;
	return r.slideTo(r.activeIndex, e, t, n);
}
function sv(e, t, n, r) {
	e === void 0 && (e = this.params.speed), t === void 0 && (t = !0), r === void 0 && (r = 0.5);
	const i = this;
	let o = i.activeIndex;
	const l = Math.min(i.params.slidesPerGroupSkip, o),
		a = l + Math.floor((o - l) / i.params.slidesPerGroup),
		s = i.rtlTranslate ? i.translate : -i.translate;
	if (s >= i.snapGrid[a]) {
		const u = i.snapGrid[a],
			c = i.snapGrid[a + 1];
		s - u > (c - u) * r && (o += i.params.slidesPerGroup);
	} else {
		const u = i.snapGrid[a - 1],
			c = i.snapGrid[a];
		s - u <= (c - u) * r && (o -= i.params.slidesPerGroup);
	}
	return (o = Math.max(o, 0)), (o = Math.min(o, i.slidesGrid.length - 1)), i.slideTo(o, e, t, n);
}
function av() {
	const e = this,
		{ params: t, slidesEl: n } = e,
		r = t.slidesPerView === "auto" ? e.slidesPerViewDynamic() : t.slidesPerView;
	let i = e.clickedIndex,
		o;
	const l = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
	if (t.loop) {
		if (e.animating) return;
		(o = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10)),
			t.centeredSlides
				? i < e.loopedSlides - r / 2 || i > e.slides.length - e.loopedSlides + r / 2
					? (e.loopFix(),
					  (i = e.getSlideIndex(Ft(n, `${l}[data-swiper-slide-index="${o}"]`)[0])),
					  fa(() => {
							e.slideTo(i);
					  }))
					: e.slideTo(i)
				: i > e.slides.length - r
				  ? (e.loopFix(),
				    (i = e.getSlideIndex(Ft(n, `${l}[data-swiper-slide-index="${o}"]`)[0])),
				    fa(() => {
							e.slideTo(i);
				    }))
				  : e.slideTo(i);
	} else e.slideTo(i);
}
var uv = {
	slideTo: nv,
	slideToLoop: rv,
	slideNext: iv,
	slidePrev: ov,
	slideReset: lv,
	slideToClosest: sv,
	slideToClickedSlide: av,
};
function cv(e) {
	const t = this,
		{ params: n, slidesEl: r } = t;
	if (!n.loop || (t.virtual && t.params.virtual.enabled)) return;
	const i = () => {
			Ft(r, `.${n.slideClass}, swiper-slide`).forEach((d, p) => {
				d.setAttribute("data-swiper-slide-index", p);
			});
		},
		o = t.grid && n.grid && n.grid.rows > 1,
		l = n.slidesPerGroup * (o ? n.grid.rows : 1),
		a = t.slides.length % l !== 0,
		s = o && t.slides.length % n.grid.rows !== 0,
		u = c => {
			for (let d = 0; d < c; d += 1) {
				const p = t.isElement
					? pa("swiper-slide", [n.slideBlankClass])
					: pa("div", [n.slideClass, n.slideBlankClass]);
				t.slidesEl.append(p);
			}
		};
	if (a) {
		if (n.loopAddBlankSlides) {
			const c = l - (t.slides.length % l);
			u(c), t.recalcSlides(), t.updateSlides();
		} else
			Zo(
				"Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
			);
		i();
	} else if (s) {
		if (n.loopAddBlankSlides) {
			const c = n.grid.rows - (t.slides.length % n.grid.rows);
			u(c), t.recalcSlides(), t.updateSlides();
		} else
			Zo(
				"Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
			);
		i();
	} else i();
	t.loopFix({ slideRealIndex: e, direction: n.centeredSlides ? void 0 : "next" });
}
function dv(e) {
	let {
		slideRealIndex: t,
		slideTo: n = !0,
		direction: r,
		setTranslate: i,
		activeSlideIndex: o,
		byController: l,
		byMousewheel: a,
	} = e === void 0 ? {} : e;
	const s = this;
	if (!s.params.loop) return;
	s.emit("beforeLoopFix");
	const { slides: u, allowSlidePrev: c, allowSlideNext: d, slidesEl: p, params: y } = s,
		{ centeredSlides: g } = y;
	if (((s.allowSlidePrev = !0), (s.allowSlideNext = !0), s.virtual && y.virtual.enabled)) {
		n &&
			(!y.centeredSlides && s.snapIndex === 0
				? s.slideTo(s.virtual.slides.length, 0, !1, !0)
				: y.centeredSlides && s.snapIndex < y.slidesPerView
				  ? s.slideTo(s.virtual.slides.length + s.snapIndex, 0, !1, !0)
				  : s.snapIndex === s.snapGrid.length - 1 && s.slideTo(s.virtual.slidesBefore, 0, !1, !0)),
			(s.allowSlidePrev = c),
			(s.allowSlideNext = d),
			s.emit("loopFix");
		return;
	}
	let w = y.slidesPerView;
	w === "auto"
		? (w = s.slidesPerViewDynamic())
		: ((w = Math.ceil(parseFloat(y.slidesPerView, 10))), g && w % 2 === 0 && (w = w + 1));
	const C = y.slidesPerGroupAuto ? w : y.slidesPerGroup;
	let f = C;
	f % C !== 0 && (f += C - (f % C)), (f += y.loopAdditionalSlides), (s.loopedSlides = f);
	const h = s.grid && y.grid && y.grid.rows > 1;
	u.length < w + f
		? Zo(
				"Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"
		  )
		: h &&
		  y.grid.fill === "row" &&
		  Zo("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
	const v = [],
		m = [];
	let E = s.activeIndex;
	typeof o > "u"
		? (o = s.getSlideIndex(u.filter(F => F.classList.contains(y.slideActiveClass))[0]))
		: (E = o);
	const L = r === "next" || !r,
		T = r === "prev" || !r;
	let _ = 0,
		j = 0;
	const N = h ? Math.ceil(u.length / y.grid.rows) : u.length,
		b = (h ? u[o].column : o) + (g && typeof i > "u" ? -w / 2 + 0.5 : 0);
	if (b < f) {
		_ = Math.max(f - b, C);
		for (let F = 0; F < f - b; F += 1) {
			const ee = F - Math.floor(F / N) * N;
			if (h) {
				const G = N - ee - 1;
				for (let Ee = u.length - 1; Ee >= 0; Ee -= 1) u[Ee].column === G && v.push(Ee);
			} else v.push(N - ee - 1);
		}
	} else if (b + w > N - f) {
		j = Math.max(b - (N - f * 2), C);
		for (let F = 0; F < j; F += 1) {
			const ee = F - Math.floor(F / N) * N;
			h
				? u.forEach((G, Ee) => {
						G.column === ee && m.push(Ee);
				  })
				: m.push(ee);
		}
	}
	if (
		((s.__preventObserver__ = !0),
		requestAnimationFrame(() => {
			s.__preventObserver__ = !1;
		}),
		T &&
			v.forEach(F => {
				(u[F].swiperLoopMoveDOM = !0), p.prepend(u[F]), (u[F].swiperLoopMoveDOM = !1);
			}),
		L &&
			m.forEach(F => {
				(u[F].swiperLoopMoveDOM = !0), p.append(u[F]), (u[F].swiperLoopMoveDOM = !1);
			}),
		s.recalcSlides(),
		y.slidesPerView === "auto"
			? s.updateSlides()
			: h &&
			  ((v.length > 0 && T) || (m.length > 0 && L)) &&
			  s.slides.forEach((F, ee) => {
					s.grid.updateSlide(ee, F, s.slides);
			  }),
		y.watchSlidesProgress && s.updateSlidesOffset(),
		n)
	) {
		if (v.length > 0 && T) {
			if (typeof t > "u") {
				const F = s.slidesGrid[E],
					G = s.slidesGrid[E + _] - F;
				a
					? s.setTranslate(s.translate - G)
					: (s.slideTo(E + _, 0, !1, !0),
					  i &&
							((s.touchEventsData.startTranslate = s.touchEventsData.startTranslate - G),
							(s.touchEventsData.currentTranslate = s.touchEventsData.currentTranslate - G)));
			} else if (i) {
				const F = h ? v.length / y.grid.rows : v.length;
				s.slideTo(s.activeIndex + F, 0, !1, !0), (s.touchEventsData.currentTranslate = s.translate);
			}
		} else if (m.length > 0 && L)
			if (typeof t > "u") {
				const F = s.slidesGrid[E],
					G = s.slidesGrid[E - j] - F;
				a
					? s.setTranslate(s.translate - G)
					: (s.slideTo(E - j, 0, !1, !0),
					  i &&
							((s.touchEventsData.startTranslate = s.touchEventsData.startTranslate - G),
							(s.touchEventsData.currentTranslate = s.touchEventsData.currentTranslate - G)));
			} else {
				const F = h ? m.length / y.grid.rows : m.length;
				s.slideTo(s.activeIndex - F, 0, !1, !0);
			}
	}
	if (
		((s.allowSlidePrev = c), (s.allowSlideNext = d), s.controller && s.controller.control && !l)
	) {
		const F = {
			slideRealIndex: t,
			direction: r,
			setTranslate: i,
			activeSlideIndex: o,
			byController: !0,
		};
		Array.isArray(s.controller.control)
			? s.controller.control.forEach(ee => {
					!ee.destroyed &&
						ee.params.loop &&
						ee.loopFix({ ...F, slideTo: ee.params.slidesPerView === y.slidesPerView ? n : !1 });
			  })
			: s.controller.control instanceof s.constructor &&
			  s.controller.control.params.loop &&
			  s.controller.control.loopFix({
					...F,
					slideTo: s.controller.control.params.slidesPerView === y.slidesPerView ? n : !1,
			  });
	}
	s.emit("loopFix");
}
function fv() {
	const e = this,
		{ params: t, slidesEl: n } = e;
	if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
	e.recalcSlides();
	const r = [];
	e.slides.forEach(i => {
		const o =
			typeof i.swiperSlideIndex > "u"
				? i.getAttribute("data-swiper-slide-index") * 1
				: i.swiperSlideIndex;
		r[o] = i;
	}),
		e.slides.forEach(i => {
			i.removeAttribute("data-swiper-slide-index");
		}),
		r.forEach(i => {
			n.append(i);
		}),
		e.recalcSlides(),
		e.slideTo(e.realIndex, 0);
}
var pv = { loopCreate: cv, loopFix: dv, loopDestroy: fv };
function hv(e) {
	const t = this;
	if (!t.params.simulateTouch || (t.params.watchOverflow && t.isLocked) || t.params.cssMode) return;
	const n = t.params.touchEventsTarget === "container" ? t.el : t.wrapperEl;
	t.isElement && (t.__preventObserver__ = !0),
		(n.style.cursor = "move"),
		(n.style.cursor = e ? "grabbing" : "grab"),
		t.isElement &&
			requestAnimationFrame(() => {
				t.__preventObserver__ = !1;
			});
}
function mv() {
	const e = this;
	(e.params.watchOverflow && e.isLocked) ||
		e.params.cssMode ||
		(e.isElement && (e.__preventObserver__ = !0),
		(e[e.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = ""),
		e.isElement &&
			requestAnimationFrame(() => {
				e.__preventObserver__ = !1;
			}));
}
var gv = { setGrabCursor: hv, unsetGrabCursor: mv };
function vv(e, t) {
	t === void 0 && (t = this);
	function n(r) {
		if (!r || r === Pr() || r === nt()) return null;
		r.assignedSlot && (r = r.assignedSlot);
		const i = r.closest(e);
		return !i && !r.getRootNode ? null : i || n(r.getRootNode().host);
	}
	return n(t);
}
function hd(e, t, n) {
	const r = nt(),
		{ params: i } = e,
		o = i.edgeSwipeDetection,
		l = i.edgeSwipeThreshold;
	return o && (n <= l || n >= r.innerWidth - l)
		? o === "prevent"
			? (t.preventDefault(), !0)
			: !1
		: !0;
}
function wv(e) {
	const t = this,
		n = Pr();
	let r = e;
	r.originalEvent && (r = r.originalEvent);
	const i = t.touchEventsData;
	if (r.type === "pointerdown") {
		if (i.pointerId !== null && i.pointerId !== r.pointerId) return;
		i.pointerId = r.pointerId;
	} else
		r.type === "touchstart" &&
			r.targetTouches.length === 1 &&
			(i.touchId = r.targetTouches[0].identifier);
	if (r.type === "touchstart") {
		hd(t, r, r.targetTouches[0].pageX);
		return;
	}
	const { params: o, touches: l, enabled: a } = t;
	if (
		!a ||
		(!o.simulateTouch && r.pointerType === "mouse") ||
		(t.animating && o.preventInteractionOnTransition)
	)
		return;
	!t.animating && o.cssMode && o.loop && t.loopFix();
	let s = r.target;
	if (
		(o.touchEventsTarget === "wrapper" && !t.wrapperEl.contains(s)) ||
		("which" in r && r.which === 3) ||
		("button" in r && r.button > 0) ||
		(i.isTouched && i.isMoved)
	)
		return;
	const u = !!o.noSwipingClass && o.noSwipingClass !== "",
		c = r.composedPath ? r.composedPath() : r.path;
	u && r.target && r.target.shadowRoot && c && (s = c[0]);
	const d = o.noSwipingSelector ? o.noSwipingSelector : `.${o.noSwipingClass}`,
		p = !!(r.target && r.target.shadowRoot);
	if (o.noSwiping && (p ? vv(d, s) : s.closest(d))) {
		t.allowClick = !0;
		return;
	}
	if (o.swipeHandler && !s.closest(o.swipeHandler)) return;
	(l.currentX = r.pageX), (l.currentY = r.pageY);
	const y = l.currentX,
		g = l.currentY;
	if (!hd(t, r, y)) return;
	Object.assign(i, {
		isTouched: !0,
		isMoved: !1,
		allowTouchCallbacks: !0,
		isScrolling: void 0,
		startMoving: void 0,
	}),
		(l.startX = y),
		(l.startY = g),
		(i.touchStartTime = Xo()),
		(t.allowClick = !0),
		t.updateSize(),
		(t.swipeDirection = void 0),
		o.threshold > 0 && (i.allowThresholdMove = !1);
	let w = !0;
	s.matches(i.focusableElements) && ((w = !1), s.nodeName === "SELECT" && (i.isTouched = !1)),
		n.activeElement &&
			n.activeElement.matches(i.focusableElements) &&
			n.activeElement !== s &&
			n.activeElement.blur();
	const C = w && t.allowTouchMove && o.touchStartPreventDefault;
	(o.touchStartForcePreventDefault || C) && !s.isContentEditable && r.preventDefault(),
		o.freeMode &&
			o.freeMode.enabled &&
			t.freeMode &&
			t.animating &&
			!o.cssMode &&
			t.freeMode.onTouchStart(),
		t.emit("touchStart", r);
}
function yv(e) {
	const t = Pr(),
		n = this,
		r = n.touchEventsData,
		{ params: i, touches: o, rtlTranslate: l, enabled: a } = n;
	if (!a || (!i.simulateTouch && e.pointerType === "mouse")) return;
	let s = e;
	if (
		(s.originalEvent && (s = s.originalEvent),
		s.type === "pointermove" && (r.touchId !== null || s.pointerId !== r.pointerId))
	)
		return;
	let u;
	if (s.type === "touchmove") {
		if (
			((u = [...s.changedTouches].filter(L => L.identifier === r.touchId)[0]),
			!u || u.identifier !== r.touchId)
		)
			return;
	} else u = s;
	if (!r.isTouched) {
		r.startMoving && r.isScrolling && n.emit("touchMoveOpposite", s);
		return;
	}
	const c = u.pageX,
		d = u.pageY;
	if (s.preventedByNestedSwiper) {
		(o.startX = c), (o.startY = d);
		return;
	}
	if (!n.allowTouchMove) {
		s.target.matches(r.focusableElements) || (n.allowClick = !1),
			r.isTouched &&
				(Object.assign(o, { startX: c, startY: d, currentX: c, currentY: d }),
				(r.touchStartTime = Xo()));
		return;
	}
	if (i.touchReleaseOnEdges && !i.loop) {
		if (n.isVertical()) {
			if (
				(d < o.startY && n.translate <= n.maxTranslate()) ||
				(d > o.startY && n.translate >= n.minTranslate())
			) {
				(r.isTouched = !1), (r.isMoved = !1);
				return;
			}
		} else if (
			(c < o.startX && n.translate <= n.maxTranslate()) ||
			(c > o.startX && n.translate >= n.minTranslate())
		)
			return;
	}
	if (t.activeElement && s.target === t.activeElement && s.target.matches(r.focusableElements)) {
		(r.isMoved = !0), (n.allowClick = !1);
		return;
	}
	r.allowTouchCallbacks && n.emit("touchMove", s),
		(o.previousX = o.currentX),
		(o.previousY = o.currentY),
		(o.currentX = c),
		(o.currentY = d);
	const p = o.currentX - o.startX,
		y = o.currentY - o.startY;
	if (n.params.threshold && Math.sqrt(p ** 2 + y ** 2) < n.params.threshold) return;
	if (typeof r.isScrolling > "u") {
		let L;
		(n.isHorizontal() && o.currentY === o.startY) || (n.isVertical() && o.currentX === o.startX)
			? (r.isScrolling = !1)
			: p * p + y * y >= 25 &&
			  ((L = (Math.atan2(Math.abs(y), Math.abs(p)) * 180) / Math.PI),
			  (r.isScrolling = n.isHorizontal() ? L > i.touchAngle : 90 - L > i.touchAngle));
	}
	if (
		(r.isScrolling && n.emit("touchMoveOpposite", s),
		typeof r.startMoving > "u" &&
			(o.currentX !== o.startX || o.currentY !== o.startY) &&
			(r.startMoving = !0),
		r.isScrolling)
	) {
		r.isTouched = !1;
		return;
	}
	if (!r.startMoving) return;
	(n.allowClick = !1),
		!i.cssMode && s.cancelable && s.preventDefault(),
		i.touchMoveStopPropagation && !i.nested && s.stopPropagation();
	let g = n.isHorizontal() ? p : y,
		w = n.isHorizontal() ? o.currentX - o.previousX : o.currentY - o.previousY;
	i.oneWayMovement && ((g = Math.abs(g) * (l ? 1 : -1)), (w = Math.abs(w) * (l ? 1 : -1))),
		(o.diff = g),
		(g *= i.touchRatio),
		l && ((g = -g), (w = -w));
	const C = n.touchesDirection;
	(n.swipeDirection = g > 0 ? "prev" : "next"), (n.touchesDirection = w > 0 ? "prev" : "next");
	const f = n.params.loop && !i.cssMode,
		h =
			(n.touchesDirection === "next" && n.allowSlideNext) ||
			(n.touchesDirection === "prev" && n.allowSlidePrev);
	if (!r.isMoved) {
		if (
			(f && h && n.loopFix({ direction: n.swipeDirection }),
			(r.startTranslate = n.getTranslate()),
			n.setTransition(0),
			n.animating)
		) {
			const L = new window.CustomEvent("transitionend", { bubbles: !0, cancelable: !0 });
			n.wrapperEl.dispatchEvent(L);
		}
		(r.allowMomentumBounce = !1),
			i.grabCursor && (n.allowSlideNext === !0 || n.allowSlidePrev === !0) && n.setGrabCursor(!0),
			n.emit("sliderFirstMove", s);
	}
	let v;
	if (
		(new Date().getTime(),
		r.isMoved && r.allowThresholdMove && C !== n.touchesDirection && f && h && Math.abs(g) >= 1)
	) {
		Object.assign(o, {
			startX: c,
			startY: d,
			currentX: c,
			currentY: d,
			startTranslate: r.currentTranslate,
		}),
			(r.loopSwapReset = !0),
			(r.startTranslate = r.currentTranslate);
		return;
	}
	n.emit("sliderMove", s), (r.isMoved = !0), (r.currentTranslate = g + r.startTranslate);
	let m = !0,
		E = i.resistanceRatio;
	if (
		(i.touchReleaseOnEdges && (E = 0),
		g > 0
			? (f &&
					h &&
					!v &&
					r.allowThresholdMove &&
					r.currentTranslate >
						(i.centeredSlides
							? n.minTranslate() - n.slidesSizesGrid[n.activeIndex + 1]
							: n.minTranslate()) &&
					n.loopFix({ direction: "prev", setTranslate: !0, activeSlideIndex: 0 }),
			  r.currentTranslate > n.minTranslate() &&
					((m = !1),
					i.resistance &&
						(r.currentTranslate =
							n.minTranslate() - 1 + (-n.minTranslate() + r.startTranslate + g) ** E)))
			: g < 0 &&
			  (f &&
					h &&
					!v &&
					r.allowThresholdMove &&
					r.currentTranslate <
						(i.centeredSlides
							? n.maxTranslate() + n.slidesSizesGrid[n.slidesSizesGrid.length - 1]
							: n.maxTranslate()) &&
					n.loopFix({
						direction: "next",
						setTranslate: !0,
						activeSlideIndex:
							n.slides.length -
							(i.slidesPerView === "auto"
								? n.slidesPerViewDynamic()
								: Math.ceil(parseFloat(i.slidesPerView, 10))),
					}),
			  r.currentTranslate < n.maxTranslate() &&
					((m = !1),
					i.resistance &&
						(r.currentTranslate =
							n.maxTranslate() + 1 - (n.maxTranslate() - r.startTranslate - g) ** E))),
		m && (s.preventedByNestedSwiper = !0),
		!n.allowSlideNext &&
			n.swipeDirection === "next" &&
			r.currentTranslate < r.startTranslate &&
			(r.currentTranslate = r.startTranslate),
		!n.allowSlidePrev &&
			n.swipeDirection === "prev" &&
			r.currentTranslate > r.startTranslate &&
			(r.currentTranslate = r.startTranslate),
		!n.allowSlidePrev && !n.allowSlideNext && (r.currentTranslate = r.startTranslate),
		i.threshold > 0)
	)
		if (Math.abs(g) > i.threshold || r.allowThresholdMove) {
			if (!r.allowThresholdMove) {
				(r.allowThresholdMove = !0),
					(o.startX = o.currentX),
					(o.startY = o.currentY),
					(r.currentTranslate = r.startTranslate),
					(o.diff = n.isHorizontal() ? o.currentX - o.startX : o.currentY - o.startY);
				return;
			}
		} else {
			r.currentTranslate = r.startTranslate;
			return;
		}
	!i.followFinger ||
		i.cssMode ||
		(((i.freeMode && i.freeMode.enabled && n.freeMode) || i.watchSlidesProgress) &&
			(n.updateActiveIndex(), n.updateSlidesClasses()),
		i.freeMode && i.freeMode.enabled && n.freeMode && n.freeMode.onTouchMove(),
		n.updateProgress(r.currentTranslate),
		n.setTranslate(r.currentTranslate));
}
function xv(e) {
	const t = this,
		n = t.touchEventsData;
	let r = e;
	r.originalEvent && (r = r.originalEvent);
	let i;
	if (r.type === "touchend" || r.type === "touchcancel") {
		if (
			((i = [...r.changedTouches].filter(E => E.identifier === n.touchId)[0]),
			!i || i.identifier !== n.touchId)
		)
			return;
	} else {
		if (n.touchId !== null || r.pointerId !== n.pointerId) return;
		i = r;
	}
	if (
		["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(r.type) &&
		!(
			["pointercancel", "contextmenu"].includes(r.type) &&
			(t.browser.isSafari || t.browser.isWebView)
		)
	)
		return;
	(n.pointerId = null), (n.touchId = null);
	const { params: l, touches: a, rtlTranslate: s, slidesGrid: u, enabled: c } = t;
	if (!c || (!l.simulateTouch && r.pointerType === "mouse")) return;
	if (
		(n.allowTouchCallbacks && t.emit("touchEnd", r), (n.allowTouchCallbacks = !1), !n.isTouched)
	) {
		n.isMoved && l.grabCursor && t.setGrabCursor(!1), (n.isMoved = !1), (n.startMoving = !1);
		return;
	}
	l.grabCursor &&
		n.isMoved &&
		n.isTouched &&
		(t.allowSlideNext === !0 || t.allowSlidePrev === !0) &&
		t.setGrabCursor(!1);
	const d = Xo(),
		p = d - n.touchStartTime;
	if (t.allowClick) {
		const E = r.path || (r.composedPath && r.composedPath());
		t.updateClickedSlide((E && E[0]) || r.target, E),
			t.emit("tap click", r),
			p < 300 && d - n.lastClickTime < 300 && t.emit("doubleTap doubleClick", r);
	}
	if (
		((n.lastClickTime = Xo()),
		fa(() => {
			t.destroyed || (t.allowClick = !0);
		}),
		!n.isTouched ||
			!n.isMoved ||
			!t.swipeDirection ||
			(a.diff === 0 && !n.loopSwapReset) ||
			(n.currentTranslate === n.startTranslate && !n.loopSwapReset))
	) {
		(n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
		return;
	}
	(n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
	let y;
	if (
		(l.followFinger ? (y = s ? t.translate : -t.translate) : (y = -n.currentTranslate), l.cssMode)
	)
		return;
	if (l.freeMode && l.freeMode.enabled) {
		t.freeMode.onTouchEnd({ currentPos: y });
		return;
	}
	const g = y >= -t.maxTranslate() && !t.params.loop;
	let w = 0,
		C = t.slidesSizesGrid[0];
	for (let E = 0; E < u.length; E += E < l.slidesPerGroupSkip ? 1 : l.slidesPerGroup) {
		const L = E < l.slidesPerGroupSkip - 1 ? 1 : l.slidesPerGroup;
		typeof u[E + L] < "u"
			? (g || (y >= u[E] && y < u[E + L])) && ((w = E), (C = u[E + L] - u[E]))
			: (g || y >= u[E]) && ((w = E), (C = u[u.length - 1] - u[u.length - 2]));
	}
	let f = null,
		h = null;
	l.rewind &&
		(t.isBeginning
			? (h =
					l.virtual && l.virtual.enabled && t.virtual
						? t.virtual.slides.length - 1
						: t.slides.length - 1)
			: t.isEnd && (f = 0));
	const v = (y - u[w]) / C,
		m = w < l.slidesPerGroupSkip - 1 ? 1 : l.slidesPerGroup;
	if (p > l.longSwipesMs) {
		if (!l.longSwipes) {
			t.slideTo(t.activeIndex);
			return;
		}
		t.swipeDirection === "next" &&
			(v >= l.longSwipesRatio ? t.slideTo(l.rewind && t.isEnd ? f : w + m) : t.slideTo(w)),
			t.swipeDirection === "prev" &&
				(v > 1 - l.longSwipesRatio
					? t.slideTo(w + m)
					: h !== null && v < 0 && Math.abs(v) > l.longSwipesRatio
					  ? t.slideTo(h)
					  : t.slideTo(w));
	} else {
		if (!l.shortSwipes) {
			t.slideTo(t.activeIndex);
			return;
		}
		t.navigation && (r.target === t.navigation.nextEl || r.target === t.navigation.prevEl)
			? r.target === t.navigation.nextEl
				? t.slideTo(w + m)
				: t.slideTo(w)
			: (t.swipeDirection === "next" && t.slideTo(f !== null ? f : w + m),
			  t.swipeDirection === "prev" && t.slideTo(h !== null ? h : w));
	}
}
function md() {
	const e = this,
		{ params: t, el: n } = e;
	if (n && n.offsetWidth === 0) return;
	t.breakpoints && e.setBreakpoint();
	const { allowSlideNext: r, allowSlidePrev: i, snapGrid: o } = e,
		l = e.virtual && e.params.virtual.enabled;
	(e.allowSlideNext = !0),
		(e.allowSlidePrev = !0),
		e.updateSize(),
		e.updateSlides(),
		e.updateSlidesClasses();
	const a = l && t.loop;
	(t.slidesPerView === "auto" || t.slidesPerView > 1) &&
	e.isEnd &&
	!e.isBeginning &&
	!e.params.centeredSlides &&
	!a
		? e.slideTo(e.slides.length - 1, 0, !1, !0)
		: e.params.loop && !l
		  ? e.slideToLoop(e.realIndex, 0, !1, !0)
		  : e.slideTo(e.activeIndex, 0, !1, !0),
		e.autoplay &&
			e.autoplay.running &&
			e.autoplay.paused &&
			(clearTimeout(e.autoplay.resizeTimeout),
			(e.autoplay.resizeTimeout = setTimeout(() => {
				e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume();
			}, 500))),
		(e.allowSlidePrev = i),
		(e.allowSlideNext = r),
		e.params.watchOverflow && o !== e.snapGrid && e.checkOverflow();
}
function Sv(e) {
	const t = this;
	t.enabled &&
		(t.allowClick ||
			(t.params.preventClicks && e.preventDefault(),
			t.params.preventClicksPropagation &&
				t.animating &&
				(e.stopPropagation(), e.stopImmediatePropagation())));
}
function Cv() {
	const e = this,
		{ wrapperEl: t, rtlTranslate: n, enabled: r } = e;
	if (!r) return;
	(e.previousTranslate = e.translate),
		e.isHorizontal() ? (e.translate = -t.scrollLeft) : (e.translate = -t.scrollTop),
		e.translate === 0 && (e.translate = 0),
		e.updateActiveIndex(),
		e.updateSlidesClasses();
	let i;
	const o = e.maxTranslate() - e.minTranslate();
	o === 0 ? (i = 0) : (i = (e.translate - e.minTranslate()) / o),
		i !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
		e.emit("setTranslate", e.translate, !1);
}
function Ev(e) {
	const t = this;
	xo(t, e.target),
		!(t.params.cssMode || (t.params.slidesPerView !== "auto" && !t.params.autoHeight)) &&
			t.update();
}
function kv() {
	const e = this;
	e.documentTouchHandlerProceeded ||
		((e.documentTouchHandlerProceeded = !0),
		e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"));
}
const mp = (e, t) => {
	const n = Pr(),
		{ params: r, el: i, wrapperEl: o, device: l } = e,
		a = !!r.nested,
		s = t === "on" ? "addEventListener" : "removeEventListener",
		u = t;
	n[s]("touchstart", e.onDocumentTouchStart, { passive: !1, capture: a }),
		i[s]("touchstart", e.onTouchStart, { passive: !1 }),
		i[s]("pointerdown", e.onTouchStart, { passive: !1 }),
		n[s]("touchmove", e.onTouchMove, { passive: !1, capture: a }),
		n[s]("pointermove", e.onTouchMove, { passive: !1, capture: a }),
		n[s]("touchend", e.onTouchEnd, { passive: !0 }),
		n[s]("pointerup", e.onTouchEnd, { passive: !0 }),
		n[s]("pointercancel", e.onTouchEnd, { passive: !0 }),
		n[s]("touchcancel", e.onTouchEnd, { passive: !0 }),
		n[s]("pointerout", e.onTouchEnd, { passive: !0 }),
		n[s]("pointerleave", e.onTouchEnd, { passive: !0 }),
		n[s]("contextmenu", e.onTouchEnd, { passive: !0 }),
		(r.preventClicks || r.preventClicksPropagation) && i[s]("click", e.onClick, !0),
		r.cssMode && o[s]("scroll", e.onScroll),
		r.updateOnWindowResize
			? e[u](
					l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate",
					md,
					!0
			  )
			: e[u]("observerUpdate", md, !0),
		i[s]("load", e.onLoad, { capture: !0 });
};
function Tv() {
	const e = this,
		{ params: t } = e;
	(e.onTouchStart = wv.bind(e)),
		(e.onTouchMove = yv.bind(e)),
		(e.onTouchEnd = xv.bind(e)),
		(e.onDocumentTouchStart = kv.bind(e)),
		t.cssMode && (e.onScroll = Cv.bind(e)),
		(e.onClick = Sv.bind(e)),
		(e.onLoad = Ev.bind(e)),
		mp(e, "on");
}
function Pv() {
	mp(this, "off");
}
var Lv = { attachEvents: Tv, detachEvents: Pv };
const gd = (e, t) => e.grid && t.grid && t.grid.rows > 1;
function Mv() {
	const e = this,
		{ realIndex: t, initialized: n, params: r, el: i } = e,
		o = r.breakpoints;
	if (!o || (o && Object.keys(o).length === 0)) return;
	const l = e.getBreakpoint(o, e.params.breakpointsBase, e.el);
	if (!l || e.currentBreakpoint === l) return;
	const s = (l in o ? o[l] : void 0) || e.originalParams,
		u = gd(e, r),
		c = gd(e, s),
		d = r.enabled;
	u && !c
		? (i.classList.remove(
				`${r.containerModifierClass}grid`,
				`${r.containerModifierClass}grid-column`
		  ),
		  e.emitContainerClasses())
		: !u &&
		  c &&
		  (i.classList.add(`${r.containerModifierClass}grid`),
		  ((s.grid.fill && s.grid.fill === "column") || (!s.grid.fill && r.grid.fill === "column")) &&
				i.classList.add(`${r.containerModifierClass}grid-column`),
		  e.emitContainerClasses()),
		["navigation", "pagination", "scrollbar"].forEach(f => {
			if (typeof s[f] > "u") return;
			const h = r[f] && r[f].enabled,
				v = s[f] && s[f].enabled;
			h && !v && e[f].disable(), !h && v && e[f].enable();
		});
	const p = s.direction && s.direction !== r.direction,
		y = r.loop && (s.slidesPerView !== r.slidesPerView || p),
		g = r.loop;
	p && n && e.changeDirection(), Xe(e.params, s);
	const w = e.params.enabled,
		C = e.params.loop;
	Object.assign(e, {
		allowTouchMove: e.params.allowTouchMove,
		allowSlideNext: e.params.allowSlideNext,
		allowSlidePrev: e.params.allowSlidePrev,
	}),
		d && !w ? e.disable() : !d && w && e.enable(),
		(e.currentBreakpoint = l),
		e.emit("_beforeBreakpoint", s),
		n &&
			(y
				? (e.loopDestroy(), e.loopCreate(t), e.updateSlides())
				: !g && C
				  ? (e.loopCreate(t), e.updateSlides())
				  : g && !C && e.loopDestroy()),
		e.emit("breakpoint", s);
}
function Nv(e, t, n) {
	if ((t === void 0 && (t = "window"), !e || (t === "container" && !n))) return;
	let r = !1;
	const i = nt(),
		o = t === "window" ? i.innerHeight : n.clientHeight,
		l = Object.keys(e).map(a => {
			if (typeof a == "string" && a.indexOf("@") === 0) {
				const s = parseFloat(a.substr(1));
				return { value: o * s, point: a };
			}
			return { value: a, point: a };
		});
	l.sort((a, s) => parseInt(a.value, 10) - parseInt(s.value, 10));
	for (let a = 0; a < l.length; a += 1) {
		const { point: s, value: u } = l[a];
		t === "window"
			? i.matchMedia(`(min-width: ${u}px)`).matches && (r = s)
			: u <= n.clientWidth && (r = s);
	}
	return r || "max";
}
var Rv = { setBreakpoint: Mv, getBreakpoint: Nv };
function _v(e, t) {
	const n = [];
	return (
		e.forEach(r => {
			typeof r == "object"
				? Object.keys(r).forEach(i => {
						r[i] && n.push(t + i);
				  })
				: typeof r == "string" && n.push(t + r);
		}),
		n
	);
}
function jv() {
	const e = this,
		{ classNames: t, params: n, rtl: r, el: i, device: o } = e,
		l = _v(
			[
				"initialized",
				n.direction,
				{ "free-mode": e.params.freeMode && n.freeMode.enabled },
				{ autoheight: n.autoHeight },
				{ rtl: r },
				{ grid: n.grid && n.grid.rows > 1 },
				{ "grid-column": n.grid && n.grid.rows > 1 && n.grid.fill === "column" },
				{ android: o.android },
				{ ios: o.ios },
				{ "css-mode": n.cssMode },
				{ centered: n.cssMode && n.centeredSlides },
				{ "watch-progress": n.watchSlidesProgress },
			],
			n.containerModifierClass
		);
	t.push(...l), i.classList.add(...t), e.emitContainerClasses();
}
function Ov() {
	const e = this,
		{ el: t, classNames: n } = e;
	t.classList.remove(...n), e.emitContainerClasses();
}
var zv = { addClasses: jv, removeClasses: Ov };
function Iv() {
	const e = this,
		{ isLocked: t, params: n } = e,
		{ slidesOffsetBefore: r } = n;
	if (r) {
		const i = e.slides.length - 1,
			o = e.slidesGrid[i] + e.slidesSizesGrid[i] + r * 2;
		e.isLocked = e.size > o;
	} else e.isLocked = e.snapGrid.length === 1;
	n.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked),
		n.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked),
		t && t !== e.isLocked && (e.isEnd = !1),
		t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
}
var Dv = { checkOverflow: Iv },
	ma = {
		init: !0,
		direction: "horizontal",
		oneWayMovement: !1,
		touchEventsTarget: "wrapper",
		initialSlide: 0,
		speed: 300,
		cssMode: !1,
		updateOnWindowResize: !0,
		resizeObserver: !0,
		nested: !1,
		createElements: !1,
		eventsPrefix: "swiper",
		enabled: !0,
		focusableElements: "input, select, option, textarea, button, video, label",
		width: null,
		height: null,
		preventInteractionOnTransition: !1,
		userAgent: null,
		url: null,
		edgeSwipeDetection: !1,
		edgeSwipeThreshold: 20,
		autoHeight: !1,
		setWrapperSize: !1,
		virtualTranslate: !1,
		effect: "slide",
		breakpoints: void 0,
		breakpointsBase: "window",
		spaceBetween: 0,
		slidesPerView: 1,
		slidesPerGroup: 1,
		slidesPerGroupSkip: 0,
		slidesPerGroupAuto: !1,
		centeredSlides: !1,
		centeredSlidesBounds: !1,
		slidesOffsetBefore: 0,
		slidesOffsetAfter: 0,
		normalizeSlideIndex: !0,
		centerInsufficientSlides: !1,
		watchOverflow: !0,
		roundLengths: !1,
		touchRatio: 1,
		touchAngle: 45,
		simulateTouch: !0,
		shortSwipes: !0,
		longSwipes: !0,
		longSwipesRatio: 0.5,
		longSwipesMs: 300,
		followFinger: !0,
		allowTouchMove: !0,
		threshold: 5,
		touchMoveStopPropagation: !1,
		touchStartPreventDefault: !0,
		touchStartForcePreventDefault: !1,
		touchReleaseOnEdges: !1,
		uniqueNavElements: !0,
		resistance: !0,
		resistanceRatio: 0.85,
		watchSlidesProgress: !1,
		grabCursor: !1,
		preventClicks: !0,
		preventClicksPropagation: !0,
		slideToClickedSlide: !1,
		loop: !1,
		loopAddBlankSlides: !0,
		loopAdditionalSlides: 0,
		loopPreventsSliding: !0,
		rewind: !1,
		allowSlidePrev: !0,
		allowSlideNext: !0,
		swipeHandler: null,
		noSwiping: !0,
		noSwipingClass: "swiper-no-swiping",
		noSwipingSelector: null,
		passiveListeners: !0,
		maxBackfaceHiddenSlides: 10,
		containerModifierClass: "swiper-",
		slideClass: "swiper-slide",
		slideBlankClass: "swiper-slide-blank",
		slideActiveClass: "swiper-slide-active",
		slideVisibleClass: "swiper-slide-visible",
		slideFullyVisibleClass: "swiper-slide-fully-visible",
		slideNextClass: "swiper-slide-next",
		slidePrevClass: "swiper-slide-prev",
		wrapperClass: "swiper-wrapper",
		lazyPreloaderClass: "swiper-lazy-preloader",
		lazyPreloadPrevNext: 0,
		runCallbacksOnInit: !0,
		_emitClasses: !1,
	};
function Av(e, t) {
	return function (r) {
		r === void 0 && (r = {});
		const i = Object.keys(r)[0],
			o = r[i];
		if (typeof o != "object" || o === null) {
			Xe(t, r);
			return;
		}
		if (
			(e[i] === !0 && (e[i] = { enabled: !0 }),
			i === "navigation" &&
				e[i] &&
				e[i].enabled &&
				!e[i].prevEl &&
				!e[i].nextEl &&
				(e[i].auto = !0),
			["pagination", "scrollbar"].indexOf(i) >= 0 &&
				e[i] &&
				e[i].enabled &&
				!e[i].el &&
				(e[i].auto = !0),
			!(i in e && "enabled" in o))
		) {
			Xe(t, r);
			return;
		}
		typeof e[i] == "object" && !("enabled" in e[i]) && (e[i].enabled = !0),
			e[i] || (e[i] = { enabled: !1 }),
			Xe(t, r);
	};
}
const cs = {
		eventsEmitter: zg,
		update: Wg,
		translate: Zg,
		transition: tv,
		slide: uv,
		loop: pv,
		grabCursor: gv,
		events: Lv,
		breakpoints: Rv,
		checkOverflow: Dv,
		classes: zv,
	},
	ds = {};
let xu = class Ot {
	constructor() {
		let t, n;
		for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
		i.length === 1 &&
		i[0].constructor &&
		Object.prototype.toString.call(i[0]).slice(8, -1) === "Object"
			? (n = i[0])
			: ([t, n] = i),
			n || (n = {}),
			(n = Xe({}, n)),
			t && !n.el && (n.el = t);
		const l = Pr();
		if (n.el && typeof n.el == "string" && l.querySelectorAll(n.el).length > 1) {
			const c = [];
			return (
				l.querySelectorAll(n.el).forEach(d => {
					const p = Xe({}, n, { el: d });
					c.push(new Ot(p));
				}),
				c
			);
		}
		const a = this;
		(a.__swiper__ = !0),
			(a.support = pp()),
			(a.device = Ng({ userAgent: n.userAgent })),
			(a.browser = _g()),
			(a.eventsListeners = {}),
			(a.eventsAnyListeners = []),
			(a.modules = [...a.__modules__]),
			n.modules && Array.isArray(n.modules) && a.modules.push(...n.modules);
		const s = {};
		a.modules.forEach(c => {
			c({
				params: n,
				swiper: a,
				extendParams: Av(n, s),
				on: a.on.bind(a),
				once: a.once.bind(a),
				off: a.off.bind(a),
				emit: a.emit.bind(a),
			});
		});
		const u = Xe({}, ma, s);
		return (
			(a.params = Xe({}, u, ds, n)),
			(a.originalParams = Xe({}, a.params)),
			(a.passedParams = Xe({}, n)),
			a.params &&
				a.params.on &&
				Object.keys(a.params.on).forEach(c => {
					a.on(c, a.params.on[c]);
				}),
			a.params && a.params.onAny && a.onAny(a.params.onAny),
			Object.assign(a, {
				enabled: a.params.enabled,
				el: t,
				classNames: [],
				slides: [],
				slidesGrid: [],
				snapGrid: [],
				slidesSizesGrid: [],
				isHorizontal() {
					return a.params.direction === "horizontal";
				},
				isVertical() {
					return a.params.direction === "vertical";
				},
				activeIndex: 0,
				realIndex: 0,
				isBeginning: !0,
				isEnd: !1,
				translate: 0,
				previousTranslate: 0,
				progress: 0,
				velocity: 0,
				animating: !1,
				cssOverflowAdjustment() {
					return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
				},
				allowSlideNext: a.params.allowSlideNext,
				allowSlidePrev: a.params.allowSlidePrev,
				touchEventsData: {
					isTouched: void 0,
					isMoved: void 0,
					allowTouchCallbacks: void 0,
					touchStartTime: void 0,
					isScrolling: void 0,
					currentTranslate: void 0,
					startTranslate: void 0,
					allowThresholdMove: void 0,
					focusableElements: a.params.focusableElements,
					lastClickTime: 0,
					clickTimeout: void 0,
					velocities: [],
					allowMomentumBounce: void 0,
					startMoving: void 0,
					pointerId: null,
					touchId: null,
				},
				allowClick: !0,
				allowTouchMove: a.params.allowTouchMove,
				touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
				imagesToLoad: [],
				imagesLoaded: 0,
			}),
			a.emit("_swiper"),
			a.params.init && a.init(),
			a
		);
	}
	getDirectionLabel(t) {
		return this.isHorizontal()
			? t
			: {
					width: "height",
					"margin-top": "margin-left",
					"margin-bottom ": "margin-right",
					"margin-left": "margin-top",
					"margin-right": "margin-bottom",
					"padding-left": "padding-top",
					"padding-right": "padding-bottom",
					marginRight: "marginBottom",
			  }[t];
	}
	getSlideIndex(t) {
		const { slidesEl: n, params: r } = this,
			i = Ft(n, `.${r.slideClass}, swiper-slide`),
			o = fd(i[0]);
		return fd(t) - o;
	}
	getSlideIndexByData(t) {
		return this.getSlideIndex(
			this.slides.filter(n => n.getAttribute("data-swiper-slide-index") * 1 === t)[0]
		);
	}
	recalcSlides() {
		const t = this,
			{ slidesEl: n, params: r } = t;
		t.slides = Ft(n, `.${r.slideClass}, swiper-slide`);
	}
	enable() {
		const t = this;
		t.enabled || ((t.enabled = !0), t.params.grabCursor && t.setGrabCursor(), t.emit("enable"));
	}
	disable() {
		const t = this;
		t.enabled && ((t.enabled = !1), t.params.grabCursor && t.unsetGrabCursor(), t.emit("disable"));
	}
	setProgress(t, n) {
		const r = this;
		t = Math.min(Math.max(t, 0), 1);
		const i = r.minTranslate(),
			l = (r.maxTranslate() - i) * t + i;
		r.translateTo(l, typeof n > "u" ? 0 : n), r.updateActiveIndex(), r.updateSlidesClasses();
	}
	emitContainerClasses() {
		const t = this;
		if (!t.params._emitClasses || !t.el) return;
		const n = t.el.className
			.split(" ")
			.filter(r => r.indexOf("swiper") === 0 || r.indexOf(t.params.containerModifierClass) === 0);
		t.emit("_containerClasses", n.join(" "));
	}
	getSlideClasses(t) {
		const n = this;
		return n.destroyed
			? ""
			: t.className
					.split(" ")
					.filter(r => r.indexOf("swiper-slide") === 0 || r.indexOf(n.params.slideClass) === 0)
					.join(" ");
	}
	emitSlidesClasses() {
		const t = this;
		if (!t.params._emitClasses || !t.el) return;
		const n = [];
		t.slides.forEach(r => {
			const i = t.getSlideClasses(r);
			n.push({ slideEl: r, classNames: i }), t.emit("_slideClass", r, i);
		}),
			t.emit("_slideClasses", n);
	}
	slidesPerViewDynamic(t, n) {
		t === void 0 && (t = "current"), n === void 0 && (n = !1);
		const r = this,
			{ params: i, slides: o, slidesGrid: l, slidesSizesGrid: a, size: s, activeIndex: u } = r;
		let c = 1;
		if (typeof i.slidesPerView == "number") return i.slidesPerView;
		if (i.centeredSlides) {
			let d = o[u] ? o[u].swiperSlideSize : 0,
				p;
			for (let y = u + 1; y < o.length; y += 1)
				o[y] && !p && ((d += o[y].swiperSlideSize), (c += 1), d > s && (p = !0));
			for (let y = u - 1; y >= 0; y -= 1)
				o[y] && !p && ((d += o[y].swiperSlideSize), (c += 1), d > s && (p = !0));
		} else if (t === "current")
			for (let d = u + 1; d < o.length; d += 1)
				(n ? l[d] + a[d] - l[u] < s : l[d] - l[u] < s) && (c += 1);
		else for (let d = u - 1; d >= 0; d -= 1) l[u] - l[d] < s && (c += 1);
		return c;
	}
	update() {
		const t = this;
		if (!t || t.destroyed) return;
		const { snapGrid: n, params: r } = t;
		r.breakpoints && t.setBreakpoint(),
			[...t.el.querySelectorAll('[loading="lazy"]')].forEach(l => {
				l.complete && xo(t, l);
			}),
			t.updateSize(),
			t.updateSlides(),
			t.updateProgress(),
			t.updateSlidesClasses();
		function i() {
			const l = t.rtlTranslate ? t.translate * -1 : t.translate,
				a = Math.min(Math.max(l, t.maxTranslate()), t.minTranslate());
			t.setTranslate(a), t.updateActiveIndex(), t.updateSlidesClasses();
		}
		let o;
		if (r.freeMode && r.freeMode.enabled && !r.cssMode) i(), r.autoHeight && t.updateAutoHeight();
		else {
			if ((r.slidesPerView === "auto" || r.slidesPerView > 1) && t.isEnd && !r.centeredSlides) {
				const l = t.virtual && r.virtual.enabled ? t.virtual.slides : t.slides;
				o = t.slideTo(l.length - 1, 0, !1, !0);
			} else o = t.slideTo(t.activeIndex, 0, !1, !0);
			o || i();
		}
		r.watchOverflow && n !== t.snapGrid && t.checkOverflow(), t.emit("update");
	}
	changeDirection(t, n) {
		n === void 0 && (n = !0);
		const r = this,
			i = r.params.direction;
		return (
			t || (t = i === "horizontal" ? "vertical" : "horizontal"),
			t === i ||
				(t !== "horizontal" && t !== "vertical") ||
				(r.el.classList.remove(`${r.params.containerModifierClass}${i}`),
				r.el.classList.add(`${r.params.containerModifierClass}${t}`),
				r.emitContainerClasses(),
				(r.params.direction = t),
				r.slides.forEach(o => {
					t === "vertical" ? (o.style.width = "") : (o.style.height = "");
				}),
				r.emit("changeDirection"),
				n && r.update()),
			r
		);
	}
	changeLanguageDirection(t) {
		const n = this;
		(n.rtl && t === "rtl") ||
			(!n.rtl && t === "ltr") ||
			((n.rtl = t === "rtl"),
			(n.rtlTranslate = n.params.direction === "horizontal" && n.rtl),
			n.rtl
				? (n.el.classList.add(`${n.params.containerModifierClass}rtl`), (n.el.dir = "rtl"))
				: (n.el.classList.remove(`${n.params.containerModifierClass}rtl`), (n.el.dir = "ltr")),
			n.update());
	}
	mount(t) {
		const n = this;
		if (n.mounted) return !0;
		let r = t || n.params.el;
		if ((typeof r == "string" && (r = document.querySelector(r)), !r)) return !1;
		(r.swiper = n),
			r.parentNode &&
				r.parentNode.host &&
				r.parentNode.host.nodeName === "SWIPER-CONTAINER" &&
				(n.isElement = !0);
		const i = () => `.${(n.params.wrapperClass || "").trim().split(" ").join(".")}`;
		let l =
			r && r.shadowRoot && r.shadowRoot.querySelector
				? r.shadowRoot.querySelector(i())
				: Ft(r, i())[0];
		return (
			!l &&
				n.params.createElements &&
				((l = pa("div", n.params.wrapperClass)),
				r.append(l),
				Ft(r, `.${n.params.slideClass}`).forEach(a => {
					l.append(a);
				})),
			Object.assign(n, {
				el: r,
				wrapperEl: l,
				slidesEl: n.isElement && !r.parentNode.host.slideSlots ? r.parentNode.host : l,
				hostEl: n.isElement ? r.parentNode.host : r,
				mounted: !0,
				rtl: r.dir.toLowerCase() === "rtl" || ln(r, "direction") === "rtl",
				rtlTranslate:
					n.params.direction === "horizontal" &&
					(r.dir.toLowerCase() === "rtl" || ln(r, "direction") === "rtl"),
				wrongRTL: ln(l, "display") === "-webkit-box",
			}),
			!0
		);
	}
	init(t) {
		const n = this;
		if (n.initialized || n.mount(t) === !1) return n;
		n.emit("beforeInit"),
			n.params.breakpoints && n.setBreakpoint(),
			n.addClasses(),
			n.updateSize(),
			n.updateSlides(),
			n.params.watchOverflow && n.checkOverflow(),
			n.params.grabCursor && n.enabled && n.setGrabCursor(),
			n.params.loop && n.virtual && n.params.virtual.enabled
				? n.slideTo(
						n.params.initialSlide + n.virtual.slidesBefore,
						0,
						n.params.runCallbacksOnInit,
						!1,
						!0
				  )
				: n.slideTo(n.params.initialSlide, 0, n.params.runCallbacksOnInit, !1, !0),
			n.params.loop && n.loopCreate(),
			n.attachEvents();
		const i = [...n.el.querySelectorAll('[loading="lazy"]')];
		return (
			n.isElement && i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),
			i.forEach(o => {
				o.complete
					? xo(n, o)
					: o.addEventListener("load", l => {
							xo(n, l.target);
					  });
			}),
			ha(n),
			(n.initialized = !0),
			ha(n),
			n.emit("init"),
			n.emit("afterInit"),
			n
		);
	}
	destroy(t, n) {
		t === void 0 && (t = !0), n === void 0 && (n = !0);
		const r = this,
			{ params: i, el: o, wrapperEl: l, slides: a } = r;
		return (
			typeof r.params > "u" ||
				r.destroyed ||
				(r.emit("beforeDestroy"),
				(r.initialized = !1),
				r.detachEvents(),
				i.loop && r.loopDestroy(),
				n &&
					(r.removeClasses(),
					o.removeAttribute("style"),
					l.removeAttribute("style"),
					a &&
						a.length &&
						a.forEach(s => {
							s.classList.remove(
								i.slideVisibleClass,
								i.slideFullyVisibleClass,
								i.slideActiveClass,
								i.slideNextClass,
								i.slidePrevClass
							),
								s.removeAttribute("style"),
								s.removeAttribute("data-swiper-slide-index");
						})),
				r.emit("destroy"),
				Object.keys(r.eventsListeners).forEach(s => {
					r.off(s);
				}),
				t !== !1 && ((r.el.swiper = null), xg(r)),
				(r.destroyed = !0)),
			null
		);
	}
	static extendDefaults(t) {
		Xe(ds, t);
	}
	static get extendedDefaults() {
		return ds;
	}
	static get defaults() {
		return ma;
	}
	static installModule(t) {
		Ot.prototype.__modules__ || (Ot.prototype.__modules__ = []);
		const n = Ot.prototype.__modules__;
		typeof t == "function" && n.indexOf(t) < 0 && n.push(t);
	}
	static use(t) {
		return Array.isArray(t) ? (t.forEach(n => Ot.installModule(n)), Ot) : (Ot.installModule(t), Ot);
	}
};
Object.keys(cs).forEach(e => {
	Object.keys(cs[e]).forEach(t => {
		xu.prototype[t] = cs[e][t];
	});
});
xu.use([jg, Og]);
const gp = [
	"eventsPrefix",
	"injectStyles",
	"injectStylesUrls",
	"modules",
	"init",
	"_direction",
	"oneWayMovement",
	"touchEventsTarget",
	"initialSlide",
	"_speed",
	"cssMode",
	"updateOnWindowResize",
	"resizeObserver",
	"nested",
	"focusableElements",
	"_enabled",
	"_width",
	"_height",
	"preventInteractionOnTransition",
	"userAgent",
	"url",
	"_edgeSwipeDetection",
	"_edgeSwipeThreshold",
	"_freeMode",
	"_autoHeight",
	"setWrapperSize",
	"virtualTranslate",
	"_effect",
	"breakpoints",
	"breakpointsBase",
	"_spaceBetween",
	"_slidesPerView",
	"maxBackfaceHiddenSlides",
	"_grid",
	"_slidesPerGroup",
	"_slidesPerGroupSkip",
	"_slidesPerGroupAuto",
	"_centeredSlides",
	"_centeredSlidesBounds",
	"_slidesOffsetBefore",
	"_slidesOffsetAfter",
	"normalizeSlideIndex",
	"_centerInsufficientSlides",
	"_watchOverflow",
	"roundLengths",
	"touchRatio",
	"touchAngle",
	"simulateTouch",
	"_shortSwipes",
	"_longSwipes",
	"longSwipesRatio",
	"longSwipesMs",
	"_followFinger",
	"allowTouchMove",
	"_threshold",
	"touchMoveStopPropagation",
	"touchStartPreventDefault",
	"touchStartForcePreventDefault",
	"touchReleaseOnEdges",
	"uniqueNavElements",
	"_resistance",
	"_resistanceRatio",
	"_watchSlidesProgress",
	"_grabCursor",
	"preventClicks",
	"preventClicksPropagation",
	"_slideToClickedSlide",
	"_loop",
	"loopAdditionalSlides",
	"loopAddBlankSlides",
	"loopPreventsSliding",
	"_rewind",
	"_allowSlidePrev",
	"_allowSlideNext",
	"_swipeHandler",
	"_noSwiping",
	"noSwipingClass",
	"noSwipingSelector",
	"passiveListeners",
	"containerModifierClass",
	"slideClass",
	"slideActiveClass",
	"slideVisibleClass",
	"slideFullyVisibleClass",
	"slideNextClass",
	"slidePrevClass",
	"slideBlankClass",
	"wrapperClass",
	"lazyPreloaderClass",
	"lazyPreloadPrevNext",
	"runCallbacksOnInit",
	"observer",
	"observeParents",
	"observeSlideChildren",
	"a11y",
	"_autoplay",
	"_controller",
	"coverflowEffect",
	"cubeEffect",
	"fadeEffect",
	"flipEffect",
	"creativeEffect",
	"cardsEffect",
	"hashNavigation",
	"history",
	"keyboard",
	"mousewheel",
	"_navigation",
	"_pagination",
	"parallax",
	"_scrollbar",
	"_thumbs",
	"virtual",
	"zoom",
	"control",
];
function Fn(e) {
	return (
		typeof e == "object" &&
		e !== null &&
		e.constructor &&
		Object.prototype.toString.call(e).slice(8, -1) === "Object" &&
		!e.__swiper__
	);
}
function dr(e, t) {
	const n = ["__proto__", "constructor", "prototype"];
	Object.keys(t)
		.filter(r => n.indexOf(r) < 0)
		.forEach(r => {
			typeof e[r] > "u"
				? (e[r] = t[r])
				: Fn(t[r]) && Fn(e[r]) && Object.keys(t[r]).length > 0
				  ? t[r].__swiper__
						? (e[r] = t[r])
						: dr(e[r], t[r])
				  : (e[r] = t[r]);
		});
}
function vp(e) {
	return (
		e === void 0 && (e = {}),
		e.navigation && typeof e.navigation.nextEl > "u" && typeof e.navigation.prevEl > "u"
	);
}
function wp(e) {
	return e === void 0 && (e = {}), e.pagination && typeof e.pagination.el > "u";
}
function yp(e) {
	return e === void 0 && (e = {}), e.scrollbar && typeof e.scrollbar.el > "u";
}
function xp(e) {
	e === void 0 && (e = "");
	const t = e
			.split(" ")
			.map(r => r.trim())
			.filter(r => !!r),
		n = [];
	return (
		t.forEach(r => {
			n.indexOf(r) < 0 && n.push(r);
		}),
		n.join(" ")
	);
}
function Fv(e) {
	return (
		e === void 0 && (e = ""),
		e ? (e.includes("swiper-wrapper") ? e : `swiper-wrapper ${e}`) : "swiper-wrapper"
	);
}
function Bv(e) {
	let {
		swiper: t,
		slides: n,
		passedParams: r,
		changedParams: i,
		nextEl: o,
		prevEl: l,
		scrollbarEl: a,
		paginationEl: s,
	} = e;
	const u = i.filter(j => j !== "children" && j !== "direction" && j !== "wrapperClass"),
		{ params: c, pagination: d, navigation: p, scrollbar: y, virtual: g, thumbs: w } = t;
	let C, f, h, v, m, E, L, T;
	i.includes("thumbs") && r.thumbs && r.thumbs.swiper && c.thumbs && !c.thumbs.swiper && (C = !0),
		i.includes("controller") &&
			r.controller &&
			r.controller.control &&
			c.controller &&
			!c.controller.control &&
			(f = !0),
		i.includes("pagination") &&
			r.pagination &&
			(r.pagination.el || s) &&
			(c.pagination || c.pagination === !1) &&
			d &&
			!d.el &&
			(h = !0),
		i.includes("scrollbar") &&
			r.scrollbar &&
			(r.scrollbar.el || a) &&
			(c.scrollbar || c.scrollbar === !1) &&
			y &&
			!y.el &&
			(v = !0),
		i.includes("navigation") &&
			r.navigation &&
			(r.navigation.prevEl || l) &&
			(r.navigation.nextEl || o) &&
			(c.navigation || c.navigation === !1) &&
			p &&
			!p.prevEl &&
			!p.nextEl &&
			(m = !0);
	const _ = j => {
		t[j] &&
			(t[j].destroy(),
			j === "navigation"
				? (t.isElement && (t[j].prevEl.remove(), t[j].nextEl.remove()),
				  (c[j].prevEl = void 0),
				  (c[j].nextEl = void 0),
				  (t[j].prevEl = void 0),
				  (t[j].nextEl = void 0))
				: (t.isElement && t[j].el.remove(), (c[j].el = void 0), (t[j].el = void 0)));
	};
	i.includes("loop") &&
		t.isElement &&
		(c.loop && !r.loop ? (E = !0) : !c.loop && r.loop ? (L = !0) : (T = !0)),
		u.forEach(j => {
			if (Fn(c[j]) && Fn(r[j]))
				Object.assign(c[j], r[j]),
					(j === "navigation" || j === "pagination" || j === "scrollbar") &&
						"enabled" in r[j] &&
						!r[j].enabled &&
						_(j);
			else {
				const N = r[j];
				(N === !0 || N === !1) && (j === "navigation" || j === "pagination" || j === "scrollbar")
					? N === !1 && _(j)
					: (c[j] = r[j]);
			}
		}),
		u.includes("controller") &&
			!f &&
			t.controller &&
			t.controller.control &&
			c.controller &&
			c.controller.control &&
			(t.controller.control = c.controller.control),
		i.includes("children") && n && g && c.virtual.enabled
			? ((g.slides = n), g.update(!0))
			: i.includes("virtual") && g && c.virtual.enabled && (n && (g.slides = n), g.update(!0)),
		i.includes("children") && n && c.loop && (T = !0),
		C && w.init() && w.update(!0),
		f && (t.controller.control = c.controller.control),
		h &&
			(t.isElement &&
				(!s || typeof s == "string") &&
				((s = document.createElement("div")),
				s.classList.add("swiper-pagination"),
				s.part.add("pagination"),
				t.el.appendChild(s)),
			s && (c.pagination.el = s),
			d.init(),
			d.render(),
			d.update()),
		v &&
			(t.isElement &&
				(!a || typeof a == "string") &&
				((a = document.createElement("div")),
				a.classList.add("swiper-scrollbar"),
				a.part.add("scrollbar"),
				t.el.appendChild(a)),
			a && (c.scrollbar.el = a),
			y.init(),
			y.updateSize(),
			y.setTranslate()),
		m &&
			(t.isElement &&
				((!o || typeof o == "string") &&
					((o = document.createElement("div")),
					o.classList.add("swiper-button-next"),
					(o.innerHTML = t.hostEl.constructor.nextButtonSvg),
					o.part.add("button-next"),
					t.el.appendChild(o)),
				(!l || typeof l == "string") &&
					((l = document.createElement("div")),
					l.classList.add("swiper-button-prev"),
					(l.innerHTML = t.hostEl.constructor.prevButtonSvg),
					l.part.add("button-prev"),
					t.el.appendChild(l))),
			o && (c.navigation.nextEl = o),
			l && (c.navigation.prevEl = l),
			p.init(),
			p.update()),
		i.includes("allowSlideNext") && (t.allowSlideNext = r.allowSlideNext),
		i.includes("allowSlidePrev") && (t.allowSlidePrev = r.allowSlidePrev),
		i.includes("direction") && t.changeDirection(r.direction, !1),
		(E || T) && t.loopDestroy(),
		(L || T) && t.loopCreate(),
		t.update();
}
function bv(e, t) {
	e === void 0 && (e = {}), t === void 0 && (t = !0);
	const n = { on: {} },
		r = {},
		i = {};
	dr(n, ma), (n._emitClasses = !0), (n.init = !1);
	const o = {},
		l = gp.map(s => s.replace(/_/, "")),
		a = Object.assign({}, e);
	return (
		Object.keys(a).forEach(s => {
			typeof e[s] > "u" ||
				(l.indexOf(s) >= 0
					? Fn(e[s])
						? ((n[s] = {}), (i[s] = {}), dr(n[s], e[s]), dr(i[s], e[s]))
						: ((n[s] = e[s]), (i[s] = e[s]))
					: s.search(/on[A-Z]/) === 0 && typeof e[s] == "function"
					  ? t
							? (r[`${s[2].toLowerCase()}${s.substr(3)}`] = e[s])
							: (n.on[`${s[2].toLowerCase()}${s.substr(3)}`] = e[s])
					  : (o[s] = e[s]));
		}),
		["navigation", "pagination", "scrollbar"].forEach(s => {
			n[s] === !0 && (n[s] = {}), n[s] === !1 && delete n[s];
		}),
		{ params: n, passedParams: i, rest: o, events: r }
	);
}
function Vv(e, t) {
	let { el: n, nextEl: r, prevEl: i, paginationEl: o, scrollbarEl: l, swiper: a } = e;
	vp(t) &&
		r &&
		i &&
		((a.params.navigation.nextEl = r),
		(a.originalParams.navigation.nextEl = r),
		(a.params.navigation.prevEl = i),
		(a.originalParams.navigation.prevEl = i)),
		wp(t) && o && ((a.params.pagination.el = o), (a.originalParams.pagination.el = o)),
		yp(t) && l && ((a.params.scrollbar.el = l), (a.originalParams.scrollbar.el = l)),
		a.init(n);
}
function Uv(e, t, n, r, i) {
	const o = [];
	if (!t) return o;
	const l = s => {
		o.indexOf(s) < 0 && o.push(s);
	};
	if (n && r) {
		const s = r.map(i),
			u = n.map(i);
		s.join("") !== u.join("") && l("children"), r.length !== n.length && l("children");
	}
	return (
		gp
			.filter(s => s[0] === "_")
			.map(s => s.replace(/_/, ""))
			.forEach(s => {
				if (s in e && s in t)
					if (Fn(e[s]) && Fn(t[s])) {
						const u = Object.keys(e[s]),
							c = Object.keys(t[s]);
						u.length !== c.length
							? l(s)
							: (u.forEach(d => {
									e[s][d] !== t[s][d] && l(s);
							  }),
							  c.forEach(d => {
									e[s][d] !== t[s][d] && l(s);
							  }));
					} else e[s] !== t[s] && l(s);
			}),
		o
	);
}
const Hv = e => {
	!e ||
		e.destroyed ||
		!e.params.virtual ||
		(e.params.virtual && !e.params.virtual.enabled) ||
		(e.updateSlides(),
		e.updateProgress(),
		e.updateSlidesClasses(),
		e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate());
};
function qo() {
	return (
		(qo = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
			  }),
		qo.apply(this, arguments)
	);
}
function Sp(e) {
	return e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide");
}
function Cp(e) {
	const t = [];
	return (
		we.Children.toArray(e).forEach(n => {
			Sp(n)
				? t.push(n)
				: n.props && n.props.children && Cp(n.props.children).forEach(r => t.push(r));
		}),
		t
	);
}
function $v(e) {
	const t = [],
		n = { "container-start": [], "container-end": [], "wrapper-start": [], "wrapper-end": [] };
	return (
		we.Children.toArray(e).forEach(r => {
			if (Sp(r)) t.push(r);
			else if (r.props && r.props.slot && n[r.props.slot]) n[r.props.slot].push(r);
			else if (r.props && r.props.children) {
				const i = Cp(r.props.children);
				i.length > 0 ? i.forEach(o => t.push(o)) : n["container-end"].push(r);
			} else n["container-end"].push(r);
		}),
		{ slides: t, slots: n }
	);
}
function Wv(e, t, n) {
	if (!n) return null;
	const r = c => {
			let d = c;
			return c < 0 ? (d = t.length + c) : d >= t.length && (d = d - t.length), d;
		},
		i = e.isHorizontal()
			? { [e.rtlTranslate ? "right" : "left"]: `${n.offset}px` }
			: { top: `${n.offset}px` },
		{ from: o, to: l } = n,
		a = e.params.loop ? -t.length : 0,
		s = e.params.loop ? t.length * 2 : t.length,
		u = [];
	for (let c = a; c < s; c += 1) c >= o && c <= l && u.push(t[r(c)]);
	return u.map((c, d) => we.cloneElement(c, { swiper: e, style: i, key: `slide-${d}` }));
}
function si(e, t) {
	return typeof window > "u" ? P.useEffect(e, t) : P.useLayoutEffect(e, t);
}
const vd = P.createContext(null),
	Gv = P.createContext(null),
	Ep = P.forwardRef(function (e, t) {
		let {
				className: n,
				tag: r = "div",
				wrapperTag: i = "div",
				children: o,
				onSwiper: l,
				...a
			} = e === void 0 ? {} : e,
			s = !1;
		const [u, c] = P.useState("swiper"),
			[d, p] = P.useState(null),
			[y, g] = P.useState(!1),
			w = P.useRef(!1),
			C = P.useRef(null),
			f = P.useRef(null),
			h = P.useRef(null),
			v = P.useRef(null),
			m = P.useRef(null),
			E = P.useRef(null),
			L = P.useRef(null),
			T = P.useRef(null),
			{ params: _, passedParams: j, rest: N, events: z } = bv(a),
			{ slides: b, slots: F } = $v(o),
			ee = () => {
				g(!y);
			};
		Object.assign(_.on, {
			_containerClasses(A, U) {
				c(U);
			},
		});
		const G = () => {
			Object.assign(_.on, z), (s = !0);
			const A = { ..._ };
			if (
				(delete A.wrapperClass,
				(f.current = new xu(A)),
				f.current.virtual && f.current.params.virtual.enabled)
			) {
				f.current.virtual.slides = b;
				const U = { cache: !1, slides: b, renderExternal: p, renderExternalUpdate: !1 };
				dr(f.current.params.virtual, U), dr(f.current.originalParams.virtual, U);
			}
		};
		C.current || G(), f.current && f.current.on("_beforeBreakpoint", ee);
		const Ee = () => {
				s ||
					!z ||
					!f.current ||
					Object.keys(z).forEach(A => {
						f.current.on(A, z[A]);
					});
			},
			Ke = () => {
				!z ||
					!f.current ||
					Object.keys(z).forEach(A => {
						f.current.off(A, z[A]);
					});
			};
		P.useEffect(() => () => {
			f.current && f.current.off("_beforeBreakpoint", ee);
		}),
			P.useEffect(() => {
				!w.current && f.current && (f.current.emitSlidesClasses(), (w.current = !0));
			}),
			si(() => {
				if ((t && (t.current = C.current), !!C.current))
					return (
						f.current.destroyed && G(),
						Vv(
							{
								el: C.current,
								nextEl: m.current,
								prevEl: E.current,
								paginationEl: L.current,
								scrollbarEl: T.current,
								swiper: f.current,
							},
							_
						),
						l && l(f.current),
						() => {
							f.current && !f.current.destroyed && f.current.destroy(!0, !1);
						}
					);
			}, []),
			si(() => {
				Ee();
				const A = Uv(j, h.current, b, v.current, U => U.key);
				return (
					(h.current = j),
					(v.current = b),
					A.length &&
						f.current &&
						!f.current.destroyed &&
						Bv({
							swiper: f.current,
							slides: b,
							passedParams: j,
							changedParams: A,
							nextEl: m.current,
							prevEl: E.current,
							scrollbarEl: T.current,
							paginationEl: L.current,
						}),
					() => {
						Ke();
					}
				);
			}),
			si(() => {
				Hv(f.current);
			}, [d]);
		function I() {
			return _.virtual
				? Wv(f.current, b, d)
				: b.map((A, U) => we.cloneElement(A, { swiper: f.current, swiperSlideIndex: U }));
		}
		return we.createElement(
			r,
			qo({ ref: C, className: xp(`${u}${n ? ` ${n}` : ""}`) }, N),
			we.createElement(
				Gv.Provider,
				{ value: f.current },
				F["container-start"],
				we.createElement(
					i,
					{ className: Fv(_.wrapperClass) },
					F["wrapper-start"],
					I(),
					F["wrapper-end"]
				),
				vp(_) &&
					we.createElement(
						we.Fragment,
						null,
						we.createElement("div", { ref: E, className: "swiper-button-prev" }),
						we.createElement("div", { ref: m, className: "swiper-button-next" })
					),
				yp(_) && we.createElement("div", { ref: T, className: "swiper-scrollbar" }),
				wp(_) && we.createElement("div", { ref: L, className: "swiper-pagination" }),
				F["container-end"]
			)
		);
	});
Ep.displayName = "Swiper";
const Su = P.forwardRef(function (e, t) {
	let {
		tag: n = "div",
		children: r,
		className: i = "",
		swiper: o,
		zoom: l,
		lazy: a,
		virtualIndex: s,
		swiperSlideIndex: u,
		...c
	} = e === void 0 ? {} : e;
	const d = P.useRef(null),
		[p, y] = P.useState("swiper-slide"),
		[g, w] = P.useState(!1);
	function C(m, E, L) {
		E === d.current && y(L);
	}
	si(() => {
		if (
			(typeof u < "u" && (d.current.swiperSlideIndex = u),
			t && (t.current = d.current),
			!(!d.current || !o))
		) {
			if (o.destroyed) {
				p !== "swiper-slide" && y("swiper-slide");
				return;
			}
			return (
				o.on("_slideClass", C),
				() => {
					o && o.off("_slideClass", C);
				}
			);
		}
	}),
		si(() => {
			o && d.current && !o.destroyed && y(o.getSlideClasses(d.current));
		}, [o]);
	const f = {
			isActive: p.indexOf("swiper-slide-active") >= 0,
			isVisible: p.indexOf("swiper-slide-visible") >= 0,
			isPrev: p.indexOf("swiper-slide-prev") >= 0,
			isNext: p.indexOf("swiper-slide-next") >= 0,
		},
		h = () => (typeof r == "function" ? r(f) : r),
		v = () => {
			w(!0);
		};
	return we.createElement(
		n,
		qo(
			{ ref: d, className: xp(`${p}${i ? ` ${i}` : ""}`), "data-swiper-slide-index": s, onLoad: v },
			c
		),
		l &&
			we.createElement(
				vd.Provider,
				{ value: f },
				we.createElement(
					"div",
					{
						className: "swiper-zoom-container",
						"data-swiper-zoom": typeof l == "number" ? l : void 0,
					},
					h(),
					a && !g && we.createElement("div", { className: "swiper-lazy-preloader" })
				)
			),
		!l &&
			we.createElement(
				vd.Provider,
				{ value: f },
				h(),
				a && !g && we.createElement("div", { className: "swiper-lazy-preloader" })
			)
	);
});
Su.displayName = "SwiperSlide";
function kp({ openRestaurant: e, disabled: t }) {
	return x.jsx("button", {
		disabled: t,
		className: `rounded ${
			e ? "bg-[#1BF261] text-texts" : "bg-[#F21F1B] text-secundario"
		} -1 px-1.5 text-[10px]`,
		children: e ? "Abierto" : "Cerrado",
	});
}
const Tp =
		"data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%3e%3cpath%20d='M6%2020H9M12%2020H9M9%2020V15'%20stroke='%23F2C81B'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M17%2020V12C17%2012%2019.5%2011%2019.5%209C19.5%207.24264%2019.5%204.5%2019.5%204.5'%20stroke='%23F2C81B'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M17%208.5V4.5'%20stroke='%23F2C81B'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M4.5%2011C5.49993%2013.1281%209%2015%209%2015C9%2015%2012.5001%2013.1281%2013.5%2011C14.5795%208.70257%2013.5%204.5%2013.5%204.5L4.5%204.5C4.5%204.5%203.42049%208.70257%204.5%2011Z'%20stroke='%23F2C81B'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",
	Pp =
		"data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%3e%3cpath%20d='M8.5%2014.5L5%2022'%20stroke='%23F2C81B'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M8%206C8%206%209%204.9387%209%204C9%202.66667%208%202%208%202'%20stroke='%23F2C81B'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M12%206C12%206%2013%204.9387%2013%204C13%202.66667%2012%202%2012%202'%20stroke='%23F2C81B'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M16%206C16%206%2017%204.9387%2017%204C17%202.66667%2016%202%2016%202'%20stroke='%23F2C81B'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M16.5%2017.5L7.5%2017.5'%20stroke='%23F2C81B'%20stroke-width='1.5'%20stroke-linejoin='round'/%3e%3cpath%20d='M15.5%2014.5L17.6%2019'%20stroke='%23F2C81B'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M18.5%2022C19.3284%2022%2020%2021.3284%2020%2020.5C20%2019.6716%2019.3284%2019%2018.5%2019C17.6716%2019%2017%2019.6716%2017%2020.5C17%2021.3284%2017.6716%2022%2018.5%2022Z'%20stroke='%23F2C81B'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M12%2015C15.664%2015%2018.6705%2012.185%2018.9747%208.59974C19.0027%208.26956%2018.7314%208%2018.4%208H5.6C5.26863%208%204.99732%208.26956%205.02533%208.59974C5.32955%2012.185%208.33603%2015%2012%2015Z'%20stroke='%23F2C81B'%20stroke-width='1.5'/%3e%3c/svg%3e",
	Lp =
		"data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='20'%20height='19'%20viewBox='0%200%2020%2019'%20fill='none'%3e%3cg%20clip-path='url(%23clip0_13_2341)'%3e%3cpath%20d='M1.27%2013V13.7C1.27%2014.95%201.76%2016.14%202.65%2017.02C3.54%2017.91%204.72%2018.4%205.97%2018.4H13.97C14.59%2018.4%2015.19%2018.28%2015.77%2018.04C16.34%2017.8%2016.85%2017.46%2017.29%2017.02C17.73%2016.58%2018.07%2016.07%2018.31%2015.5C18.55%2014.93%2018.67%2014.32%2018.67%2013.7V13H1.27ZM17.08%2014.8C16.85%2015.45%2016.43%2016%2015.87%2016.39C15.31%2016.78%2014.65%2017%2013.96%2017H5.97C5.28%2017%204.62%2016.79%204.06%2016.39C3.5%2015.99%203.08%2015.44%202.85%2014.8L2.71%2014.4H17.22L17.08%2014.8Z'%20fill='%23F2C81B'/%3e%3cpath%20d='M15.19%2011.06L13.74%2012.03C13.27%2012.34%2012.66%2012.34%2012.19%2012.03L10.74%2011.06C10.27%2010.75%209.66001%2010.75%209.19001%2011.06L7.74001%2012.03C7.27001%2012.34%206.66001%2012.34%206.19001%2012.03L4.74001%2011.06C4.27001%2010.75%203.66001%2010.75%203.19001%2011.06L0.770005%2012.67L-0.00999451%2011.5L3.18001%209.37C3.65001%209.06%204.26001%209.06%204.73001%209.37L6.18001%2010.33C6.65001%2010.64%207.26001%2010.64%207.73001%2010.33L9.18001%209.36C9.65001%209.05%2010.26%209.05%2010.73%209.36L12.18%2010.33C12.65%2010.64%2013.26%2010.64%2013.73%2010.33L15.18%209.36C15.65%209.05%2016.26%209.05%2016.73%209.36L19.92%2011.49L19.14%2012.66L16.72%2011.05C16.25%2010.74%2015.64%2010.74%2015.17%2011.05L15.19%2011.06Z'%20fill='%23F2C81B'/%3e%3cpath%20d='M16.07%202C14.51%200.71%2012.34%200%209.97001%200C7.60001%200%205.43%200.71%203.87%202C2.17%203.41%201.27%205.38%201.27%207.7V8.4H18.67V7.7C18.67%205.38%2017.77%203.41%2016.07%202ZM2.7%207L2.75%206.65C2.97%205.22%203.66%203.99%204.76%203.08C6.07%201.99%207.92%201.4%209.97001%201.4C12.02%201.4%2013.87%202%2015.18%203.08C16.28%203.99%2016.97%205.22%2017.19%206.65L17.24%207H2.7Z'%20fill='%23F2C81B'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_13_2341'%3e%3crect%20width='19.94'%20height='18.4'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
	Mp =
		"data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%3e%3cpath%20d='M14%209.01L14.01%208.99889'%20stroke='%23F2C81B'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M8%208.01L8.01%207.99889'%20stroke='%23F2C81B'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M8%2014.01L8.01%2013.9989'%20stroke='%23F2C81B'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M6%2019L2.23626%203.0041C2.13087%202.55618%202.54815%202.16122%202.98961%202.29106L19%207'%20stroke='%23F2C81B'%20stroke-width='1.5'/%3e%3cpath%20d='M22.198%208.42467C22.4324%207.48703%2021.8623%206.5369%2020.9247%206.30249C19.987%206.06808%2019.0369%206.63816%2018.8025%207.5758C18.4106%209.14318%2016.9015%2011.6241%2014.5753%2013.9503C12.2743%2016.2513%209.42714%2018.1442%206.60672%2018.7951C5.66497%2019.0124%205.07771%2019.952%205.29504%2020.8937C5.51236%2021.8355%206.45198%2022.4227%207.39373%2022.2054C11.0734%2021.3563%2014.4762%2018.9991%2017.0502%2016.4252C19.5989%2013.8764%2021.5898%2010.8573%2022.198%208.42467Z'%20stroke='%23F2C81B'%20stroke-width='1.5'%20stroke-linecap='round'/%3e%3c/svg%3e",
	Np =
		"data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%3e%3cg%20clip-path='url(%23clip0_88_253)'%3e%3cpath%20d='M5.72483%205.49064L7.45651%202.0025C7.67882%201.55471%208.32102%201.55471%208.54332%202.0025L10.275%205.49064L14.1476%206.05344C14.6444%206.12565%2014.8425%206.73291%2014.4828%207.08127L11.6811%209.7945L12.3423%2013.6276C12.4272%2014.1198%2011.9075%2014.4952%2011.4629%2014.2627L7.99992%2012.452L4.5369%2014.2627C4.09232%2014.4952%203.57264%2014.1198%203.65756%2013.6276L4.31875%209.7945L1.51709%207.08127C1.15737%206.73291%201.3554%206.12565%201.85227%206.05344L5.72483%205.49064Z'%20stroke='%23F2C81B'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_88_253'%3e%3crect%20width='16'%20height='16'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
	Kv = { classic: Tp, fastFood: Lp, grill: Pp, pizza: Mp };
function Qv({ nameRestaurant: e, openRestaurant: t, categories: n, numberOfScores: r, scores: i }) {
	return x.jsxs("div", {
		className: "bg-texts/90 rounded-b-lg py-2 px-1 z-20 absolute w-full inset-x-0 bottom-0",
		children: [
			x.jsxs("div", {
				className: "flex flex-row items-center justify-between mb-2",
				children: [
					x.jsx("p", { className: "font-medium text-sm text-secundario capitalize", children: e }),
					x.jsx("div", {
						className: "flex flex-row items-center justify-between gap-1",
						children: n.map((o, l) =>
							x.jsx("img", { src: Kv[o], alt: o, className: "h-4 w-4" }, l)
						),
					}),
				],
			}),
			x.jsxs("div", {
				className: "flex flex-row items-center justify-between",
				children: [
					x.jsxs("div", {
						className: "flex flex-row items-center justify-between gap-1",
						children: [
							x.jsx("img", { src: Np, alt: "Star Icon" }),
							x.jsxs("p", {
								className: "font-medium text-xs text-secundario",
								children: [
									i,
									" ",
									x.jsxs("span", { className: "text-[10px]", children: ["(", r, ")"] }),
								],
							}),
						],
					}),
					x.jsx(kp, { disabled: !0, openRestaurant: t }),
				],
			}),
		],
	});
}
const Rp =
	"data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%3e%3cpath%20d='M13.3334%206.66666C13.3334%209.61218%208.00008%2014.6667%208.00008%2014.6667C8.00008%2014.6667%202.66675%209.61218%202.66675%206.66666C2.66675%203.72114%205.05456%201.33333%208.00008%201.33333C10.9456%201.33333%2013.3334%203.72114%2013.3334%206.66666Z'%20stroke='%23F2C81B'%20stroke-width='1.5'/%3e%3cpath%20d='M7.99992%207.33333C8.36811%207.33333%208.66659%207.03486%208.66659%206.66667C8.66659%206.29848%208.36811%206%207.99992%206C7.63173%206%207.33325%206.29848%207.33325%206.66667C7.33325%207.03486%207.63173%207.33333%207.99992%207.33333Z'%20fill='%23F2C81B'%20stroke='%23F2C81B'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";
function Yv({ location: e }) {
	return x.jsxs("div", {
		className:
			"bg-texts/90 px-2 h-[26px] flex flex-row items-center gap-2 rounded-lg drop-shadow-md",
		children: [
			x.jsx("img", { src: Rp, alt: "Location Icon" }),
			x.jsx("p", { className: "text-secundario text-xs capitalize", children: e }),
		],
	});
}
function Xv({
	location: e,
	nameRestaurant: t,
	imageRestaurant: n,
	openRestaurant: r,
	categories: i,
	numberOfScores: o,
	scores: l,
}) {
	console.log({
		location: e,
		nameRestaurant: t,
		imageRestaurant: n,
		openRestaurant: r,
		categories: i,
		numberOfScores: o,
		scores: l,
	});
	const a = `${String(e).substring(0, 25)}...`;
	return x.jsxs("div", {
		className: "w-[208px] flex flex-col justify-between gap-4",
		children: [
			x.jsxs("div", {
				className: "relative h-[158px] drop-shadow-md",
				children: [
					x.jsx("img", {
						src: n,
						alt: t,
						className: "rounded-lg object-cover object-center w-full h-full",
					}),
					x.jsx(Qv, {
						nameRestaurant: t,
						openRestaurant: r,
						categories: i || [],
						numberOfScores: o,
						scores: l,
					}),
				],
			}),
			x.jsx(Yv, { location: a }),
		],
	});
}
const Zv = { classic: Tp, fastFood: Lp, grill: Pp, pizza: Mp },
	qv = ({ title: e, href: t, imgSrc: n }) =>
		x.jsxs(Li, {
			to: t,
			className: "w-12 h-16 flex flex-col justify-between",
			children: [
				x.jsx("div", {
					className: "w-12 h-12 bg-texts rounded-[50%] flex justify-center items-center",
					children: x.jsx("img", {
						className: "w-6 h-6 text-principal m-0 p-0",
						src: Zv[n],
						alt: `${e} image`,
					}),
				}),
				x.jsx("span", {
					className: "w-full text-xs text-texts font-medium text-center leading-none",
					children: e,
				}),
			],
		});
function Jo({ data: e, children: t, title: n }) {
	return (
		console.log("Desde slider", e),
		e
			? x.jsxs("section", {
					className: "h-auto flex justify-center flex-col gap-4 px-4",
					children: [
						n && x.jsx("h2", { className: "font-bold", children: n }),
						x.jsx(Ep, {
							slidesPerView: "auto",
							spaceBetween: 16,
							loop: !0,
							freemodesticky: "true",
							className: "mySwiper w-full",
							children: e.map(r => x.jsx(Su, { className: "w-auto", children: t(r) }, r.id)),
						}),
					],
			  })
			: x.jsx("p", { className: "text-center text-xl font-bold", children: "No data to show" })
	);
}
const Jv = ({ children: e, key: t, className: n = "w-auto" }) =>
		x.jsx(Su, { className: n, children: e }, t),
	e3 = ({ children: e }) => x.jsx("h2", { className: "font-bold", children: e });
Jo.Title = e3;
Jo.Item = Jv;
function _p(e, t) {
	return function () {
		return e.apply(t, arguments);
	};
}
const { toString: t3 } = Object.prototype,
	{ getPrototypeOf: Cu } = Object,
	xl = (e => t => {
		const n = t3.call(t);
		return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
	})(Object.create(null)),
	_t = e => ((e = e.toLowerCase()), t => xl(t) === e),
	Sl = e => t => typeof t === e,
	{ isArray: Lr } = Array,
	Mi = Sl("undefined");
function n3(e) {
	return (
		e !== null &&
		!Mi(e) &&
		e.constructor !== null &&
		!Mi(e.constructor) &&
		ct(e.constructor.isBuffer) &&
		e.constructor.isBuffer(e)
	);
}
const jp = _t("ArrayBuffer");
function r3(e) {
	let t;
	return (
		typeof ArrayBuffer < "u" && ArrayBuffer.isView
			? (t = ArrayBuffer.isView(e))
			: (t = e && e.buffer && jp(e.buffer)),
		t
	);
}
const i3 = Sl("string"),
	ct = Sl("function"),
	Op = Sl("number"),
	Cl = e => e !== null && typeof e == "object",
	o3 = e => e === !0 || e === !1,
	So = e => {
		if (xl(e) !== "object") return !1;
		const t = Cu(e);
		return (
			(t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) &&
			!(Symbol.toStringTag in e) &&
			!(Symbol.iterator in e)
		);
	},
	l3 = _t("Date"),
	s3 = _t("File"),
	a3 = _t("Blob"),
	u3 = _t("FileList"),
	c3 = e => Cl(e) && ct(e.pipe),
	d3 = e => {
		let t;
		return (
			e &&
			((typeof FormData == "function" && e instanceof FormData) ||
				(ct(e.append) &&
					((t = xl(e)) === "formdata" ||
						(t === "object" && ct(e.toString) && e.toString() === "[object FormData]"))))
		);
	},
	f3 = _t("URLSearchParams"),
	p3 = e => (e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""));
function Di(e, t, { allOwnKeys: n = !1 } = {}) {
	if (e === null || typeof e > "u") return;
	let r, i;
	if ((typeof e != "object" && (e = [e]), Lr(e)))
		for (r = 0, i = e.length; r < i; r++) t.call(null, e[r], r, e);
	else {
		const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
			l = o.length;
		let a;
		for (r = 0; r < l; r++) (a = o[r]), t.call(null, e[a], a, e);
	}
}
function zp(e, t) {
	t = t.toLowerCase();
	const n = Object.keys(e);
	let r = n.length,
		i;
	for (; r-- > 0; ) if (((i = n[r]), t === i.toLowerCase())) return i;
	return null;
}
const Ip =
		typeof globalThis < "u"
			? globalThis
			: typeof self < "u"
			  ? self
			  : typeof window < "u"
			    ? window
			    : global,
	Dp = e => !Mi(e) && e !== Ip;
function ga() {
	const { caseless: e } = (Dp(this) && this) || {},
		t = {},
		n = (r, i) => {
			const o = (e && zp(t, i)) || i;
			So(t[o]) && So(r)
				? (t[o] = ga(t[o], r))
				: So(r)
				  ? (t[o] = ga({}, r))
				  : Lr(r)
				    ? (t[o] = r.slice())
				    : (t[o] = r);
		};
	for (let r = 0, i = arguments.length; r < i; r++) arguments[r] && Di(arguments[r], n);
	return t;
}
const h3 = (e, t, n, { allOwnKeys: r } = {}) => (
		Di(
			t,
			(i, o) => {
				n && ct(i) ? (e[o] = _p(i, n)) : (e[o] = i);
			},
			{ allOwnKeys: r }
		),
		e
	),
	m3 = e => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
	g3 = (e, t, n, r) => {
		(e.prototype = Object.create(t.prototype, r)),
			(e.prototype.constructor = e),
			Object.defineProperty(e, "super", { value: t.prototype }),
			n && Object.assign(e.prototype, n);
	},
	v3 = (e, t, n, r) => {
		let i, o, l;
		const a = {};
		if (((t = t || {}), e == null)) return t;
		do {
			for (i = Object.getOwnPropertyNames(e), o = i.length; o-- > 0; )
				(l = i[o]), (!r || r(l, e, t)) && !a[l] && ((t[l] = e[l]), (a[l] = !0));
			e = n !== !1 && Cu(e);
		} while (e && (!n || n(e, t)) && e !== Object.prototype);
		return t;
	},
	w3 = (e, t, n) => {
		(e = String(e)), (n === void 0 || n > e.length) && (n = e.length), (n -= t.length);
		const r = e.indexOf(t, n);
		return r !== -1 && r === n;
	},
	y3 = e => {
		if (!e) return null;
		if (Lr(e)) return e;
		let t = e.length;
		if (!Op(t)) return null;
		const n = new Array(t);
		for (; t-- > 0; ) n[t] = e[t];
		return n;
	},
	x3 = (
		e => t =>
			e && t instanceof e
	)(typeof Uint8Array < "u" && Cu(Uint8Array)),
	S3 = (e, t) => {
		const r = (e && e[Symbol.iterator]).call(e);
		let i;
		for (; (i = r.next()) && !i.done; ) {
			const o = i.value;
			t.call(e, o[0], o[1]);
		}
	},
	C3 = (e, t) => {
		let n;
		const r = [];
		for (; (n = e.exec(t)) !== null; ) r.push(n);
		return r;
	},
	E3 = _t("HTMLFormElement"),
	k3 = e =>
		e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, i) {
			return r.toUpperCase() + i;
		}),
	wd = (
		({ hasOwnProperty: e }) =>
		(t, n) =>
			e.call(t, n)
	)(Object.prototype),
	T3 = _t("RegExp"),
	Ap = (e, t) => {
		const n = Object.getOwnPropertyDescriptors(e),
			r = {};
		Di(n, (i, o) => {
			let l;
			(l = t(i, o, e)) !== !1 && (r[o] = l || i);
		}),
			Object.defineProperties(e, r);
	},
	P3 = e => {
		Ap(e, (t, n) => {
			if (ct(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1) return !1;
			const r = e[n];
			if (ct(r)) {
				if (((t.enumerable = !1), "writable" in t)) {
					t.writable = !1;
					return;
				}
				t.set ||
					(t.set = () => {
						throw Error("Can not rewrite read-only method '" + n + "'");
					});
			}
		});
	},
	L3 = (e, t) => {
		const n = {},
			r = i => {
				i.forEach(o => {
					n[o] = !0;
				});
			};
		return Lr(e) ? r(e) : r(String(e).split(t)), n;
	},
	M3 = () => {},
	N3 = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
	fs = "abcdefghijklmnopqrstuvwxyz",
	yd = "0123456789",
	Fp = { DIGIT: yd, ALPHA: fs, ALPHA_DIGIT: fs + fs.toUpperCase() + yd },
	R3 = (e = 16, t = Fp.ALPHA_DIGIT) => {
		let n = "";
		const { length: r } = t;
		for (; e--; ) n += t[(Math.random() * r) | 0];
		return n;
	};
function _3(e) {
	return !!(e && ct(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const j3 = e => {
		const t = new Array(10),
			n = (r, i) => {
				if (Cl(r)) {
					if (t.indexOf(r) >= 0) return;
					if (!("toJSON" in r)) {
						t[i] = r;
						const o = Lr(r) ? [] : {};
						return (
							Di(r, (l, a) => {
								const s = n(l, i + 1);
								!Mi(s) && (o[a] = s);
							}),
							(t[i] = void 0),
							o
						);
					}
				}
				return r;
			};
		return n(e, 0);
	},
	O3 = _t("AsyncFunction"),
	z3 = e => e && (Cl(e) || ct(e)) && ct(e.then) && ct(e.catch),
	M = {
		isArray: Lr,
		isArrayBuffer: jp,
		isBuffer: n3,
		isFormData: d3,
		isArrayBufferView: r3,
		isString: i3,
		isNumber: Op,
		isBoolean: o3,
		isObject: Cl,
		isPlainObject: So,
		isUndefined: Mi,
		isDate: l3,
		isFile: s3,
		isBlob: a3,
		isRegExp: T3,
		isFunction: ct,
		isStream: c3,
		isURLSearchParams: f3,
		isTypedArray: x3,
		isFileList: u3,
		forEach: Di,
		merge: ga,
		extend: h3,
		trim: p3,
		stripBOM: m3,
		inherits: g3,
		toFlatObject: v3,
		kindOf: xl,
		kindOfTest: _t,
		endsWith: w3,
		toArray: y3,
		forEachEntry: S3,
		matchAll: C3,
		isHTMLForm: E3,
		hasOwnProperty: wd,
		hasOwnProp: wd,
		reduceDescriptors: Ap,
		freezeMethods: P3,
		toObjectSet: L3,
		toCamelCase: k3,
		noop: M3,
		toFiniteNumber: N3,
		findKey: zp,
		global: Ip,
		isContextDefined: Dp,
		ALPHABET: Fp,
		generateString: R3,
		isSpecCompliantForm: _3,
		toJSONObject: j3,
		isAsyncFn: O3,
		isThenable: z3,
	};
function q(e, t, n, r, i) {
	Error.call(this),
		Error.captureStackTrace
			? Error.captureStackTrace(this, this.constructor)
			: (this.stack = new Error().stack),
		(this.message = e),
		(this.name = "AxiosError"),
		t && (this.code = t),
		n && (this.config = n),
		r && (this.request = r),
		i && (this.response = i);
}
M.inherits(q, Error, {
	toJSON: function () {
		return {
			message: this.message,
			name: this.name,
			description: this.description,
			number: this.number,
			fileName: this.fileName,
			lineNumber: this.lineNumber,
			columnNumber: this.columnNumber,
			stack: this.stack,
			config: M.toJSONObject(this.config),
			code: this.code,
			status: this.response && this.response.status ? this.response.status : null,
		};
	},
});
const Bp = q.prototype,
	bp = {};
[
	"ERR_BAD_OPTION_VALUE",
	"ERR_BAD_OPTION",
	"ECONNABORTED",
	"ETIMEDOUT",
	"ERR_NETWORK",
	"ERR_FR_TOO_MANY_REDIRECTS",
	"ERR_DEPRECATED",
	"ERR_BAD_RESPONSE",
	"ERR_BAD_REQUEST",
	"ERR_CANCELED",
	"ERR_NOT_SUPPORT",
	"ERR_INVALID_URL",
].forEach(e => {
	bp[e] = { value: e };
});
Object.defineProperties(q, bp);
Object.defineProperty(Bp, "isAxiosError", { value: !0 });
q.from = (e, t, n, r, i, o) => {
	const l = Object.create(Bp);
	return (
		M.toFlatObject(
			e,
			l,
			function (s) {
				return s !== Error.prototype;
			},
			a => a !== "isAxiosError"
		),
		q.call(l, e.message, t, n, r, i),
		(l.cause = e),
		(l.name = e.name),
		o && Object.assign(l, o),
		l
	);
};
const I3 = null;
function va(e) {
	return M.isPlainObject(e) || M.isArray(e);
}
function Vp(e) {
	return M.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function xd(e, t, n) {
	return e
		? e
				.concat(t)
				.map(function (i, o) {
					return (i = Vp(i)), !n && o ? "[" + i + "]" : i;
				})
				.join(n ? "." : "")
		: t;
}
function D3(e) {
	return M.isArray(e) && !e.some(va);
}
const A3 = M.toFlatObject(M, {}, null, function (t) {
	return /^is[A-Z]/.test(t);
});
function El(e, t, n) {
	if (!M.isObject(e)) throw new TypeError("target must be an object");
	(t = t || new FormData()),
		(n = M.toFlatObject(n, { metaTokens: !0, dots: !1, indexes: !1 }, !1, function (w, C) {
			return !M.isUndefined(C[w]);
		}));
	const r = n.metaTokens,
		i = n.visitor || c,
		o = n.dots,
		l = n.indexes,
		s = (n.Blob || (typeof Blob < "u" && Blob)) && M.isSpecCompliantForm(t);
	if (!M.isFunction(i)) throw new TypeError("visitor must be a function");
	function u(g) {
		if (g === null) return "";
		if (M.isDate(g)) return g.toISOString();
		if (!s && M.isBlob(g)) throw new q("Blob is not supported. Use a Buffer instead.");
		return M.isArrayBuffer(g) || M.isTypedArray(g)
			? s && typeof Blob == "function"
				? new Blob([g])
				: Buffer.from(g)
			: g;
	}
	function c(g, w, C) {
		let f = g;
		if (g && !C && typeof g == "object") {
			if (M.endsWith(w, "{}")) (w = r ? w : w.slice(0, -2)), (g = JSON.stringify(g));
			else if (
				(M.isArray(g) && D3(g)) ||
				((M.isFileList(g) || M.endsWith(w, "[]")) && (f = M.toArray(g)))
			)
				return (
					(w = Vp(w)),
					f.forEach(function (v, m) {
						!(M.isUndefined(v) || v === null) &&
							t.append(l === !0 ? xd([w], m, o) : l === null ? w : w + "[]", u(v));
					}),
					!1
				);
		}
		return va(g) ? !0 : (t.append(xd(C, w, o), u(g)), !1);
	}
	const d = [],
		p = Object.assign(A3, { defaultVisitor: c, convertValue: u, isVisitable: va });
	function y(g, w) {
		if (!M.isUndefined(g)) {
			if (d.indexOf(g) !== -1) throw Error("Circular reference detected in " + w.join("."));
			d.push(g),
				M.forEach(g, function (f, h) {
					(!(M.isUndefined(f) || f === null) &&
						i.call(t, f, M.isString(h) ? h.trim() : h, w, p)) === !0 && y(f, w ? w.concat(h) : [h]);
				}),
				d.pop();
		}
	}
	if (!M.isObject(e)) throw new TypeError("data must be an object");
	return y(e), t;
}
function Sd(e) {
	const t = { "!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+", "%00": "\0" };
	return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
		return t[r];
	});
}
function Eu(e, t) {
	(this._pairs = []), e && El(e, this, t);
}
const Up = Eu.prototype;
Up.append = function (t, n) {
	this._pairs.push([t, n]);
};
Up.toString = function (t) {
	const n = t
		? function (r) {
				return t.call(this, r, Sd);
		  }
		: Sd;
	return this._pairs
		.map(function (i) {
			return n(i[0]) + "=" + n(i[1]);
		}, "")
		.join("&");
};
function F3(e) {
	return encodeURIComponent(e)
		.replace(/%3A/gi, ":")
		.replace(/%24/g, "$")
		.replace(/%2C/gi, ",")
		.replace(/%20/g, "+")
		.replace(/%5B/gi, "[")
		.replace(/%5D/gi, "]");
}
function Hp(e, t, n) {
	if (!t) return e;
	const r = (n && n.encode) || F3,
		i = n && n.serialize;
	let o;
	if (
		(i ? (o = i(t, n)) : (o = M.isURLSearchParams(t) ? t.toString() : new Eu(t, n).toString(r)), o)
	) {
		const l = e.indexOf("#");
		l !== -1 && (e = e.slice(0, l)), (e += (e.indexOf("?") === -1 ? "?" : "&") + o);
	}
	return e;
}
class B3 {
	constructor() {
		this.handlers = [];
	}
	use(t, n, r) {
		return (
			this.handlers.push({
				fulfilled: t,
				rejected: n,
				synchronous: r ? r.synchronous : !1,
				runWhen: r ? r.runWhen : null,
			}),
			this.handlers.length - 1
		);
	}
	eject(t) {
		this.handlers[t] && (this.handlers[t] = null);
	}
	clear() {
		this.handlers && (this.handlers = []);
	}
	forEach(t) {
		M.forEach(this.handlers, function (r) {
			r !== null && t(r);
		});
	}
}
const Cd = B3,
	$p = { silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1 },
	b3 = typeof URLSearchParams < "u" ? URLSearchParams : Eu,
	V3 = typeof FormData < "u" ? FormData : null,
	U3 = typeof Blob < "u" ? Blob : null,
	H3 = {
		isBrowser: !0,
		classes: { URLSearchParams: b3, FormData: V3, Blob: U3 },
		protocols: ["http", "https", "file", "blob", "url", "data"],
	},
	Wp = typeof window < "u" && typeof document < "u",
	$3 = (e => Wp && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(
		typeof navigator < "u" && navigator.product
	),
	W3 =
		typeof WorkerGlobalScope < "u" &&
		self instanceof WorkerGlobalScope &&
		typeof self.importScripts == "function",
	G3 = Object.freeze(
		Object.defineProperty(
			{
				__proto__: null,
				hasBrowserEnv: Wp,
				hasStandardBrowserEnv: $3,
				hasStandardBrowserWebWorkerEnv: W3,
			},
			Symbol.toStringTag,
			{ value: "Module" }
		)
	),
	Lt = { ...G3, ...H3 };
function K3(e, t) {
	return El(
		e,
		new Lt.classes.URLSearchParams(),
		Object.assign(
			{
				visitor: function (n, r, i, o) {
					return Lt.isNode && M.isBuffer(n)
						? (this.append(r, n.toString("base64")), !1)
						: o.defaultVisitor.apply(this, arguments);
				},
			},
			t
		)
	);
}
function Q3(e) {
	return M.matchAll(/\w+|\[(\w*)]/g, e).map(t => (t[0] === "[]" ? "" : t[1] || t[0]));
}
function Y3(e) {
	const t = {},
		n = Object.keys(e);
	let r;
	const i = n.length;
	let o;
	for (r = 0; r < i; r++) (o = n[r]), (t[o] = e[o]);
	return t;
}
function Gp(e) {
	function t(n, r, i, o) {
		let l = n[o++];
		const a = Number.isFinite(+l),
			s = o >= n.length;
		return (
			(l = !l && M.isArray(i) ? i.length : l),
			s
				? (M.hasOwnProp(i, l) ? (i[l] = [i[l], r]) : (i[l] = r), !a)
				: ((!i[l] || !M.isObject(i[l])) && (i[l] = []),
				  t(n, r, i[l], o) && M.isArray(i[l]) && (i[l] = Y3(i[l])),
				  !a)
		);
	}
	if (M.isFormData(e) && M.isFunction(e.entries)) {
		const n = {};
		return (
			M.forEachEntry(e, (r, i) => {
				t(Q3(r), i, n, 0);
			}),
			n
		);
	}
	return null;
}
function X3(e, t, n) {
	if (M.isString(e))
		try {
			return (t || JSON.parse)(e), M.trim(e);
		} catch (r) {
			if (r.name !== "SyntaxError") throw r;
		}
	return (n || JSON.stringify)(e);
}
const ku = {
	transitional: $p,
	adapter: ["xhr", "http"],
	transformRequest: [
		function (t, n) {
			const r = n.getContentType() || "",
				i = r.indexOf("application/json") > -1,
				o = M.isObject(t);
			if ((o && M.isHTMLForm(t) && (t = new FormData(t)), M.isFormData(t)))
				return i && i ? JSON.stringify(Gp(t)) : t;
			if (M.isArrayBuffer(t) || M.isBuffer(t) || M.isStream(t) || M.isFile(t) || M.isBlob(t))
				return t;
			if (M.isArrayBufferView(t)) return t.buffer;
			if (M.isURLSearchParams(t))
				return (
					n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString()
				);
			let a;
			if (o) {
				if (r.indexOf("application/x-www-form-urlencoded") > -1)
					return K3(t, this.formSerializer).toString();
				if ((a = M.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
					const s = this.env && this.env.FormData;
					return El(a ? { "files[]": t } : t, s && new s(), this.formSerializer);
				}
			}
			return o || i ? (n.setContentType("application/json", !1), X3(t)) : t;
		},
	],
	transformResponse: [
		function (t) {
			const n = this.transitional || ku.transitional,
				r = n && n.forcedJSONParsing,
				i = this.responseType === "json";
			if (t && M.isString(t) && ((r && !this.responseType) || i)) {
				const l = !(n && n.silentJSONParsing) && i;
				try {
					return JSON.parse(t);
				} catch (a) {
					if (l)
						throw a.name === "SyntaxError"
							? q.from(a, q.ERR_BAD_RESPONSE, this, null, this.response)
							: a;
				}
			}
			return t;
		},
	],
	timeout: 0,
	xsrfCookieName: "XSRF-TOKEN",
	xsrfHeaderName: "X-XSRF-TOKEN",
	maxContentLength: -1,
	maxBodyLength: -1,
	env: { FormData: Lt.classes.FormData, Blob: Lt.classes.Blob },
	validateStatus: function (t) {
		return t >= 200 && t < 300;
	},
	headers: { common: { Accept: "application/json, text/plain, */*", "Content-Type": void 0 } },
};
M.forEach(["delete", "get", "head", "post", "put", "patch"], e => {
	ku.headers[e] = {};
});
const Tu = ku,
	Z3 = M.toObjectSet([
		"age",
		"authorization",
		"content-length",
		"content-type",
		"etag",
		"expires",
		"from",
		"host",
		"if-modified-since",
		"if-unmodified-since",
		"last-modified",
		"location",
		"max-forwards",
		"proxy-authorization",
		"referer",
		"retry-after",
		"user-agent",
	]),
	q3 = e => {
		const t = {};
		let n, r, i;
		return (
			e &&
				e
					.split(
						`
`
					)
					.forEach(function (l) {
						(i = l.indexOf(":")),
							(n = l.substring(0, i).trim().toLowerCase()),
							(r = l.substring(i + 1).trim()),
							!(!n || (t[n] && Z3[n])) &&
								(n === "set-cookie"
									? t[n]
										? t[n].push(r)
										: (t[n] = [r])
									: (t[n] = t[n] ? t[n] + ", " + r : r));
					}),
			t
		);
	},
	Ed = Symbol("internals");
function Wr(e) {
	return e && String(e).trim().toLowerCase();
}
function Co(e) {
	return e === !1 || e == null ? e : M.isArray(e) ? e.map(Co) : String(e);
}
function J3(e) {
	const t = Object.create(null),
		n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
	let r;
	for (; (r = n.exec(e)); ) t[r[1]] = r[2];
	return t;
}
const ew = e => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function ps(e, t, n, r, i) {
	if (M.isFunction(r)) return r.call(this, t, n);
	if ((i && (t = n), !!M.isString(t))) {
		if (M.isString(r)) return t.indexOf(r) !== -1;
		if (M.isRegExp(r)) return r.test(t);
	}
}
function tw(e) {
	return e
		.trim()
		.toLowerCase()
		.replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function nw(e, t) {
	const n = M.toCamelCase(" " + t);
	["get", "set", "has"].forEach(r => {
		Object.defineProperty(e, r + n, {
			value: function (i, o, l) {
				return this[r].call(this, t, i, o, l);
			},
			configurable: !0,
		});
	});
}
class kl {
	constructor(t) {
		t && this.set(t);
	}
	set(t, n, r) {
		const i = this;
		function o(a, s, u) {
			const c = Wr(s);
			if (!c) throw new Error("header name must be a non-empty string");
			const d = M.findKey(i, c);
			(!d || i[d] === void 0 || u === !0 || (u === void 0 && i[d] !== !1)) && (i[d || s] = Co(a));
		}
		const l = (a, s) => M.forEach(a, (u, c) => o(u, c, s));
		return (
			M.isPlainObject(t) || t instanceof this.constructor
				? l(t, n)
				: M.isString(t) && (t = t.trim()) && !ew(t)
				  ? l(q3(t), n)
				  : t != null && o(n, t, r),
			this
		);
	}
	get(t, n) {
		if (((t = Wr(t)), t)) {
			const r = M.findKey(this, t);
			if (r) {
				const i = this[r];
				if (!n) return i;
				if (n === !0) return J3(i);
				if (M.isFunction(n)) return n.call(this, i, r);
				if (M.isRegExp(n)) return n.exec(i);
				throw new TypeError("parser must be boolean|regexp|function");
			}
		}
	}
	has(t, n) {
		if (((t = Wr(t)), t)) {
			const r = M.findKey(this, t);
			return !!(r && this[r] !== void 0 && (!n || ps(this, this[r], r, n)));
		}
		return !1;
	}
	delete(t, n) {
		const r = this;
		let i = !1;
		function o(l) {
			if (((l = Wr(l)), l)) {
				const a = M.findKey(r, l);
				a && (!n || ps(r, r[a], a, n)) && (delete r[a], (i = !0));
			}
		}
		return M.isArray(t) ? t.forEach(o) : o(t), i;
	}
	clear(t) {
		const n = Object.keys(this);
		let r = n.length,
			i = !1;
		for (; r--; ) {
			const o = n[r];
			(!t || ps(this, this[o], o, t, !0)) && (delete this[o], (i = !0));
		}
		return i;
	}
	normalize(t) {
		const n = this,
			r = {};
		return (
			M.forEach(this, (i, o) => {
				const l = M.findKey(r, o);
				if (l) {
					(n[l] = Co(i)), delete n[o];
					return;
				}
				const a = t ? tw(o) : String(o).trim();
				a !== o && delete n[o], (n[a] = Co(i)), (r[a] = !0);
			}),
			this
		);
	}
	concat(...t) {
		return this.constructor.concat(this, ...t);
	}
	toJSON(t) {
		const n = Object.create(null);
		return (
			M.forEach(this, (r, i) => {
				r != null && r !== !1 && (n[i] = t && M.isArray(r) ? r.join(", ") : r);
			}),
			n
		);
	}
	[Symbol.iterator]() {
		return Object.entries(this.toJSON())[Symbol.iterator]();
	}
	toString() {
		return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
	}
	get [Symbol.toStringTag]() {
		return "AxiosHeaders";
	}
	static from(t) {
		return t instanceof this ? t : new this(t);
	}
	static concat(t, ...n) {
		const r = new this(t);
		return n.forEach(i => r.set(i)), r;
	}
	static accessor(t) {
		const r = (this[Ed] = this[Ed] = { accessors: {} }).accessors,
			i = this.prototype;
		function o(l) {
			const a = Wr(l);
			r[a] || (nw(i, l), (r[a] = !0));
		}
		return M.isArray(t) ? t.forEach(o) : o(t), this;
	}
}
kl.accessor([
	"Content-Type",
	"Content-Length",
	"Accept",
	"Accept-Encoding",
	"User-Agent",
	"Authorization",
]);
M.reduceDescriptors(kl.prototype, ({ value: e }, t) => {
	let n = t[0].toUpperCase() + t.slice(1);
	return {
		get: () => e,
		set(r) {
			this[n] = r;
		},
	};
});
M.freezeMethods(kl);
const Vt = kl;
function hs(e, t) {
	const n = this || Tu,
		r = t || n,
		i = Vt.from(r.headers);
	let o = r.data;
	return (
		M.forEach(e, function (a) {
			o = a.call(n, o, i.normalize(), t ? t.status : void 0);
		}),
		i.normalize(),
		o
	);
}
function Kp(e) {
	return !!(e && e.__CANCEL__);
}
function Ai(e, t, n) {
	q.call(this, e ?? "canceled", q.ERR_CANCELED, t, n), (this.name = "CanceledError");
}
M.inherits(Ai, q, { __CANCEL__: !0 });
function rw(e, t, n) {
	const r = n.config.validateStatus;
	!n.status || !r || r(n.status)
		? e(n)
		: t(
				new q(
					"Request failed with status code " + n.status,
					[q.ERR_BAD_REQUEST, q.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
					n.config,
					n.request,
					n
				)
		  );
}
const iw = Lt.hasStandardBrowserEnv
	? {
			write(e, t, n, r, i, o) {
				const l = [e + "=" + encodeURIComponent(t)];
				M.isNumber(n) && l.push("expires=" + new Date(n).toGMTString()),
					M.isString(r) && l.push("path=" + r),
					M.isString(i) && l.push("domain=" + i),
					o === !0 && l.push("secure"),
					(document.cookie = l.join("; "));
			},
			read(e) {
				const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
				return t ? decodeURIComponent(t[3]) : null;
			},
			remove(e) {
				this.write(e, "", Date.now() - 864e5);
			},
	  }
	: {
			write() {},
			read() {
				return null;
			},
			remove() {},
	  };
function ow(e) {
	return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function lw(e, t) {
	return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Qp(e, t) {
	return e && !ow(t) ? lw(e, t) : t;
}
const sw = Lt.hasStandardBrowserEnv
	? (function () {
			const t = /(msie|trident)/i.test(navigator.userAgent),
				n = document.createElement("a");
			let r;
			function i(o) {
				let l = o;
				return (
					t && (n.setAttribute("href", l), (l = n.href)),
					n.setAttribute("href", l),
					{
						href: n.href,
						protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
						host: n.host,
						search: n.search ? n.search.replace(/^\?/, "") : "",
						hash: n.hash ? n.hash.replace(/^#/, "") : "",
						hostname: n.hostname,
						port: n.port,
						pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
					}
				);
			}
			return (
				(r = i(window.location.href)),
				function (l) {
					const a = M.isString(l) ? i(l) : l;
					return a.protocol === r.protocol && a.host === r.host;
				}
			);
	  })()
	: (function () {
			return function () {
				return !0;
			};
	  })();
function aw(e) {
	const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
	return (t && t[1]) || "";
}
function uw(e, t) {
	e = e || 10;
	const n = new Array(e),
		r = new Array(e);
	let i = 0,
		o = 0,
		l;
	return (
		(t = t !== void 0 ? t : 1e3),
		function (s) {
			const u = Date.now(),
				c = r[o];
			l || (l = u), (n[i] = s), (r[i] = u);
			let d = o,
				p = 0;
			for (; d !== i; ) (p += n[d++]), (d = d % e);
			if (((i = (i + 1) % e), i === o && (o = (o + 1) % e), u - l < t)) return;
			const y = c && u - c;
			return y ? Math.round((p * 1e3) / y) : void 0;
		}
	);
}
function kd(e, t) {
	let n = 0;
	const r = uw(50, 250);
	return i => {
		const o = i.loaded,
			l = i.lengthComputable ? i.total : void 0,
			a = o - n,
			s = r(a),
			u = o <= l;
		n = o;
		const c = {
			loaded: o,
			total: l,
			progress: l ? o / l : void 0,
			bytes: a,
			rate: s || void 0,
			estimated: s && l && u ? (l - o) / s : void 0,
			event: i,
		};
		(c[t ? "download" : "upload"] = !0), e(c);
	};
}
const cw = typeof XMLHttpRequest < "u",
	dw =
		cw &&
		function (e) {
			return new Promise(function (n, r) {
				let i = e.data;
				const o = Vt.from(e.headers).normalize();
				let { responseType: l, withXSRFToken: a } = e,
					s;
				function u() {
					e.cancelToken && e.cancelToken.unsubscribe(s),
						e.signal && e.signal.removeEventListener("abort", s);
				}
				let c;
				if (M.isFormData(i)) {
					if (Lt.hasStandardBrowserEnv || Lt.hasStandardBrowserWebWorkerEnv) o.setContentType(!1);
					else if ((c = o.getContentType()) !== !1) {
						const [w, ...C] = c
							? c
									.split(";")
									.map(f => f.trim())
									.filter(Boolean)
							: [];
						o.setContentType([w || "multipart/form-data", ...C].join("; "));
					}
				}
				let d = new XMLHttpRequest();
				if (e.auth) {
					const w = e.auth.username || "",
						C = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
					o.set("Authorization", "Basic " + btoa(w + ":" + C));
				}
				const p = Qp(e.baseURL, e.url);
				d.open(e.method.toUpperCase(), Hp(p, e.params, e.paramsSerializer), !0),
					(d.timeout = e.timeout);
				function y() {
					if (!d) return;
					const w = Vt.from("getAllResponseHeaders" in d && d.getAllResponseHeaders()),
						f = {
							data: !l || l === "text" || l === "json" ? d.responseText : d.response,
							status: d.status,
							statusText: d.statusText,
							headers: w,
							config: e,
							request: d,
						};
					rw(
						function (v) {
							n(v), u();
						},
						function (v) {
							r(v), u();
						},
						f
					),
						(d = null);
				}
				if (
					("onloadend" in d
						? (d.onloadend = y)
						: (d.onreadystatechange = function () {
								!d ||
									d.readyState !== 4 ||
									(d.status === 0 && !(d.responseURL && d.responseURL.indexOf("file:") === 0)) ||
									setTimeout(y);
						  }),
					(d.onabort = function () {
						d && (r(new q("Request aborted", q.ECONNABORTED, e, d)), (d = null));
					}),
					(d.onerror = function () {
						r(new q("Network Error", q.ERR_NETWORK, e, d)), (d = null);
					}),
					(d.ontimeout = function () {
						let C = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
						const f = e.transitional || $p;
						e.timeoutErrorMessage && (C = e.timeoutErrorMessage),
							r(new q(C, f.clarifyTimeoutError ? q.ETIMEDOUT : q.ECONNABORTED, e, d)),
							(d = null);
					}),
					Lt.hasStandardBrowserEnv &&
						(a && M.isFunction(a) && (a = a(e)), a || (a !== !1 && sw(p))))
				) {
					const w = e.xsrfHeaderName && e.xsrfCookieName && iw.read(e.xsrfCookieName);
					w && o.set(e.xsrfHeaderName, w);
				}
				i === void 0 && o.setContentType(null),
					"setRequestHeader" in d &&
						M.forEach(o.toJSON(), function (C, f) {
							d.setRequestHeader(f, C);
						}),
					M.isUndefined(e.withCredentials) || (d.withCredentials = !!e.withCredentials),
					l && l !== "json" && (d.responseType = e.responseType),
					typeof e.onDownloadProgress == "function" &&
						d.addEventListener("progress", kd(e.onDownloadProgress, !0)),
					typeof e.onUploadProgress == "function" &&
						d.upload &&
						d.upload.addEventListener("progress", kd(e.onUploadProgress)),
					(e.cancelToken || e.signal) &&
						((s = w => {
							d && (r(!w || w.type ? new Ai(null, e, d) : w), d.abort(), (d = null));
						}),
						e.cancelToken && e.cancelToken.subscribe(s),
						e.signal && (e.signal.aborted ? s() : e.signal.addEventListener("abort", s)));
				const g = aw(p);
				if (g && Lt.protocols.indexOf(g) === -1) {
					r(new q("Unsupported protocol " + g + ":", q.ERR_BAD_REQUEST, e));
					return;
				}
				d.send(i || null);
			});
		},
	wa = { http: I3, xhr: dw };
M.forEach(wa, (e, t) => {
	if (e) {
		try {
			Object.defineProperty(e, "name", { value: t });
		} catch {}
		Object.defineProperty(e, "adapterName", { value: t });
	}
});
const Td = e => `- ${e}`,
	fw = e => M.isFunction(e) || e === null || e === !1,
	Yp = {
		getAdapter: e => {
			e = M.isArray(e) ? e : [e];
			const { length: t } = e;
			let n, r;
			const i = {};
			for (let o = 0; o < t; o++) {
				n = e[o];
				let l;
				if (((r = n), !fw(n) && ((r = wa[(l = String(n)).toLowerCase()]), r === void 0)))
					throw new q(`Unknown adapter '${l}'`);
				if (r) break;
				i[l || "#" + o] = r;
			}
			if (!r) {
				const o = Object.entries(i).map(
					([a, s]) =>
						`adapter ${a} ` +
						(s === !1 ? "is not supported by the environment" : "is not available in the build")
				);
				let l = t
					? o.length > 1
						? `since :
` +
						  o.map(Td).join(`
`)
						: " " + Td(o[0])
					: "as no adapter specified";
				throw new q("There is no suitable adapter to dispatch the request " + l, "ERR_NOT_SUPPORT");
			}
			return r;
		},
		adapters: wa,
	};
function ms(e) {
	if ((e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted))
		throw new Ai(null, e);
}
function Pd(e) {
	return (
		ms(e),
		(e.headers = Vt.from(e.headers)),
		(e.data = hs.call(e, e.transformRequest)),
		["post", "put", "patch"].indexOf(e.method) !== -1 &&
			e.headers.setContentType("application/x-www-form-urlencoded", !1),
		Yp.getAdapter(e.adapter || Tu.adapter)(e).then(
			function (r) {
				return (
					ms(e), (r.data = hs.call(e, e.transformResponse, r)), (r.headers = Vt.from(r.headers)), r
				);
			},
			function (r) {
				return (
					Kp(r) ||
						(ms(e),
						r &&
							r.response &&
							((r.response.data = hs.call(e, e.transformResponse, r.response)),
							(r.response.headers = Vt.from(r.response.headers)))),
					Promise.reject(r)
				);
			}
		)
	);
}
const Ld = e => (e instanceof Vt ? e.toJSON() : e);
function yr(e, t) {
	t = t || {};
	const n = {};
	function r(u, c, d) {
		return M.isPlainObject(u) && M.isPlainObject(c)
			? M.merge.call({ caseless: d }, u, c)
			: M.isPlainObject(c)
			  ? M.merge({}, c)
			  : M.isArray(c)
			    ? c.slice()
			    : c;
	}
	function i(u, c, d) {
		if (M.isUndefined(c)) {
			if (!M.isUndefined(u)) return r(void 0, u, d);
		} else return r(u, c, d);
	}
	function o(u, c) {
		if (!M.isUndefined(c)) return r(void 0, c);
	}
	function l(u, c) {
		if (M.isUndefined(c)) {
			if (!M.isUndefined(u)) return r(void 0, u);
		} else return r(void 0, c);
	}
	function a(u, c, d) {
		if (d in t) return r(u, c);
		if (d in e) return r(void 0, u);
	}
	const s = {
		url: o,
		method: o,
		data: o,
		baseURL: l,
		transformRequest: l,
		transformResponse: l,
		paramsSerializer: l,
		timeout: l,
		timeoutMessage: l,
		withCredentials: l,
		withXSRFToken: l,
		adapter: l,
		responseType: l,
		xsrfCookieName: l,
		xsrfHeaderName: l,
		onUploadProgress: l,
		onDownloadProgress: l,
		decompress: l,
		maxContentLength: l,
		maxBodyLength: l,
		beforeRedirect: l,
		transport: l,
		httpAgent: l,
		httpsAgent: l,
		cancelToken: l,
		socketPath: l,
		responseEncoding: l,
		validateStatus: a,
		headers: (u, c) => i(Ld(u), Ld(c), !0),
	};
	return (
		M.forEach(Object.keys(Object.assign({}, e, t)), function (c) {
			const d = s[c] || i,
				p = d(e[c], t[c], c);
			(M.isUndefined(p) && d !== a) || (n[c] = p);
		}),
		n
	);
}
const Xp = "1.6.2",
	Pu = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
	Pu[e] = function (r) {
		return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
	};
});
const Md = {};
Pu.transitional = function (t, n, r) {
	function i(o, l) {
		return "[Axios v" + Xp + "] Transitional option '" + o + "'" + l + (r ? ". " + r : "");
	}
	return (o, l, a) => {
		if (t === !1) throw new q(i(l, " has been removed" + (n ? " in " + n : "")), q.ERR_DEPRECATED);
		return (
			n &&
				!Md[l] &&
				((Md[l] = !0),
				console.warn(
					i(l, " has been deprecated since v" + n + " and will be removed in the near future")
				)),
			t ? t(o, l, a) : !0
		);
	};
};
function pw(e, t, n) {
	if (typeof e != "object") throw new q("options must be an object", q.ERR_BAD_OPTION_VALUE);
	const r = Object.keys(e);
	let i = r.length;
	for (; i-- > 0; ) {
		const o = r[i],
			l = t[o];
		if (l) {
			const a = e[o],
				s = a === void 0 || l(a, o, e);
			if (s !== !0) throw new q("option " + o + " must be " + s, q.ERR_BAD_OPTION_VALUE);
			continue;
		}
		if (n !== !0) throw new q("Unknown option " + o, q.ERR_BAD_OPTION);
	}
}
const ya = { assertOptions: pw, validators: Pu },
	Zt = ya.validators;
class el {
	constructor(t) {
		(this.defaults = t), (this.interceptors = { request: new Cd(), response: new Cd() });
	}
	request(t, n) {
		typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}), (n = yr(this.defaults, n));
		const { transitional: r, paramsSerializer: i, headers: o } = n;
		r !== void 0 &&
			ya.assertOptions(
				r,
				{
					silentJSONParsing: Zt.transitional(Zt.boolean),
					forcedJSONParsing: Zt.transitional(Zt.boolean),
					clarifyTimeoutError: Zt.transitional(Zt.boolean),
				},
				!1
			),
			i != null &&
				(M.isFunction(i)
					? (n.paramsSerializer = { serialize: i })
					: ya.assertOptions(i, { encode: Zt.function, serialize: Zt.function }, !0)),
			(n.method = (n.method || this.defaults.method || "get").toLowerCase());
		let l = o && M.merge(o.common, o[n.method]);
		o &&
			M.forEach(["delete", "get", "head", "post", "put", "patch", "common"], g => {
				delete o[g];
			}),
			(n.headers = Vt.concat(l, o));
		const a = [];
		let s = !0;
		this.interceptors.request.forEach(function (w) {
			(typeof w.runWhen == "function" && w.runWhen(n) === !1) ||
				((s = s && w.synchronous), a.unshift(w.fulfilled, w.rejected));
		});
		const u = [];
		this.interceptors.response.forEach(function (w) {
			u.push(w.fulfilled, w.rejected);
		});
		let c,
			d = 0,
			p;
		if (!s) {
			const g = [Pd.bind(this), void 0];
			for (g.unshift.apply(g, a), g.push.apply(g, u), p = g.length, c = Promise.resolve(n); d < p; )
				c = c.then(g[d++], g[d++]);
			return c;
		}
		p = a.length;
		let y = n;
		for (d = 0; d < p; ) {
			const g = a[d++],
				w = a[d++];
			try {
				y = g(y);
			} catch (C) {
				w.call(this, C);
				break;
			}
		}
		try {
			c = Pd.call(this, y);
		} catch (g) {
			return Promise.reject(g);
		}
		for (d = 0, p = u.length; d < p; ) c = c.then(u[d++], u[d++]);
		return c;
	}
	getUri(t) {
		t = yr(this.defaults, t);
		const n = Qp(t.baseURL, t.url);
		return Hp(n, t.params, t.paramsSerializer);
	}
}
M.forEach(["delete", "get", "head", "options"], function (t) {
	el.prototype[t] = function (n, r) {
		return this.request(yr(r || {}, { method: t, url: n, data: (r || {}).data }));
	};
});
M.forEach(["post", "put", "patch"], function (t) {
	function n(r) {
		return function (o, l, a) {
			return this.request(
				yr(a || {}, {
					method: t,
					headers: r ? { "Content-Type": "multipart/form-data" } : {},
					url: o,
					data: l,
				})
			);
		};
	}
	(el.prototype[t] = n()), (el.prototype[t + "Form"] = n(!0));
});
const Eo = el;
class Lu {
	constructor(t) {
		if (typeof t != "function") throw new TypeError("executor must be a function.");
		let n;
		this.promise = new Promise(function (o) {
			n = o;
		});
		const r = this;
		this.promise.then(i => {
			if (!r._listeners) return;
			let o = r._listeners.length;
			for (; o-- > 0; ) r._listeners[o](i);
			r._listeners = null;
		}),
			(this.promise.then = i => {
				let o;
				const l = new Promise(a => {
					r.subscribe(a), (o = a);
				}).then(i);
				return (
					(l.cancel = function () {
						r.unsubscribe(o);
					}),
					l
				);
			}),
			t(function (o, l, a) {
				r.reason || ((r.reason = new Ai(o, l, a)), n(r.reason));
			});
	}
	throwIfRequested() {
		if (this.reason) throw this.reason;
	}
	subscribe(t) {
		if (this.reason) {
			t(this.reason);
			return;
		}
		this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
	}
	unsubscribe(t) {
		if (!this._listeners) return;
		const n = this._listeners.indexOf(t);
		n !== -1 && this._listeners.splice(n, 1);
	}
	static source() {
		let t;
		return {
			token: new Lu(function (i) {
				t = i;
			}),
			cancel: t,
		};
	}
}
const hw = Lu;
function mw(e) {
	return function (n) {
		return e.apply(null, n);
	};
}
function gw(e) {
	return M.isObject(e) && e.isAxiosError === !0;
}
const xa = {
	Continue: 100,
	SwitchingProtocols: 101,
	Processing: 102,
	EarlyHints: 103,
	Ok: 200,
	Created: 201,
	Accepted: 202,
	NonAuthoritativeInformation: 203,
	NoContent: 204,
	ResetContent: 205,
	PartialContent: 206,
	MultiStatus: 207,
	AlreadyReported: 208,
	ImUsed: 226,
	MultipleChoices: 300,
	MovedPermanently: 301,
	Found: 302,
	SeeOther: 303,
	NotModified: 304,
	UseProxy: 305,
	Unused: 306,
	TemporaryRedirect: 307,
	PermanentRedirect: 308,
	BadRequest: 400,
	Unauthorized: 401,
	PaymentRequired: 402,
	Forbidden: 403,
	NotFound: 404,
	MethodNotAllowed: 405,
	NotAcceptable: 406,
	ProxyAuthenticationRequired: 407,
	RequestTimeout: 408,
	Conflict: 409,
	Gone: 410,
	LengthRequired: 411,
	PreconditionFailed: 412,
	PayloadTooLarge: 413,
	UriTooLong: 414,
	UnsupportedMediaType: 415,
	RangeNotSatisfiable: 416,
	ExpectationFailed: 417,
	ImATeapot: 418,
	MisdirectedRequest: 421,
	UnprocessableEntity: 422,
	Locked: 423,
	FailedDependency: 424,
	TooEarly: 425,
	UpgradeRequired: 426,
	PreconditionRequired: 428,
	TooManyRequests: 429,
	RequestHeaderFieldsTooLarge: 431,
	UnavailableForLegalReasons: 451,
	InternalServerError: 500,
	NotImplemented: 501,
	BadGateway: 502,
	ServiceUnavailable: 503,
	GatewayTimeout: 504,
	HttpVersionNotSupported: 505,
	VariantAlsoNegotiates: 506,
	InsufficientStorage: 507,
	LoopDetected: 508,
	NotExtended: 510,
	NetworkAuthenticationRequired: 511,
};
Object.entries(xa).forEach(([e, t]) => {
	xa[t] = e;
});
const vw = xa;
function Zp(e) {
	const t = new Eo(e),
		n = _p(Eo.prototype.request, t);
	return (
		M.extend(n, Eo.prototype, t, { allOwnKeys: !0 }),
		M.extend(n, t, null, { allOwnKeys: !0 }),
		(n.create = function (i) {
			return Zp(yr(e, i));
		}),
		n
	);
}
const Ce = Zp(Tu);
Ce.Axios = Eo;
Ce.CanceledError = Ai;
Ce.CancelToken = hw;
Ce.isCancel = Kp;
Ce.VERSION = Xp;
Ce.toFormData = El;
Ce.AxiosError = q;
Ce.Cancel = Ce.CanceledError;
Ce.all = function (t) {
	return Promise.all(t);
};
Ce.spread = mw;
Ce.isAxiosError = gw;
Ce.mergeConfig = yr;
Ce.AxiosHeaders = Vt;
Ce.formToJSON = e => Gp(M.isHTMLForm(e) ? new FormData(e) : e);
Ce.getAdapter = Yp.getAdapter;
Ce.HttpStatusCode = vw;
Ce.default = Ce;
const ww = Ce,
	yw = async () => await ww.get("https://yumi-verse.onrender.com/api/v1/restaurant"),
	xw = e => {
		const [t, n] = P.useState(),
			[r, i] = P.useState(!0),
			[o, l] = P.useState(!1);
		return (
			P.useEffect(() => {
				(async () => {
					try {
						const s = await e();
						s && (n(s.data), i(!1));
					} catch (s) {
						l(s), i(!1), console.error("Error fetching restaurant data:", s);
					}
				})();
			}, [n, i, l]),
			{ data: t, loading: r, error: o }
		);
	};
function Sw() {
	const e = [
			{ id: 1, title: "Parrilla", href: "/", imgSrc: "grill" },
			{ id: 2, title: "Pizzería", href: "/", imgSrc: "pizza" },
			{ id: 3, title: "Pizzería", href: "/", imgSrc: "pizza" },
			{ id: 4, title: "Pizzería", href: "/", imgSrc: "pizza" },
			{ id: 5, title: "Pizzería", href: "/", imgSrc: "pizza" },
			{ id: 6, title: "Pizzería", href: "/", imgSrc: "pizza" },
			{ id: 7, title: "Pizzería", href: "/", imgSrc: "pizza" },
			{ id: 8, title: "Pizzería", href: "/", imgSrc: "pizza" },
		],
		{ data: t, loading: n, error: r } = xw(yw);
	return (
		console.log(t),
		x.jsxs("main", {
			className: "flex flex-col gap-8 overflow-hidden",
			children: [
				x.jsx(Jo, {
					data: e,
					children: i => x.jsx(qv, { title: i.title, href: i.href, imgSrc: i.imgSrc }),
				}),
				t &&
					(t == null ? void 0 : t.length) > 0 &&
					x.jsx(Jo, {
						data: t,
						title: "Categoria",
						children: i =>
							x.jsx(Xv, {
								location: String(i.address),
								nameRestaurant: i.name,
								imageRestaurant: i.url_img_restaurant,
								categories: i.categories,
								openRestaurant: i.isOpen,
								numberOfScores: i.stars,
								scores: i.totalRating,
							}),
					}),
			],
		})
	);
}
const Cw =
		"data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%3e%3cpath%20d='M2.5%207.91667L10%203.33334L17.5%207.91667'%20stroke='%23180801'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M4.16667%2016.6667H15.8333'%20stroke='%23180801'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M8.33333%207.5L11.6667%207.5'%20stroke='%23180801'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M5%2014.1667L5%2010'%20stroke='%23180801'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M8.33333%2014.1667L8.33333%2010'%20stroke='%23180801'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M11.6667%2014.1667L11.6667%2010'%20stroke='%23180801'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M15%2014.1667L15%2010'%20stroke='%23180801'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",
	Ew =
		"data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%3e%3cpath%20d='M17%202H14C12.6739%202%2011.4021%202.52678%2010.4645%203.46447C9.52678%204.40215%209%205.67392%209%207V10H6V14H9V22H13V14H16L17%2010H13V7C13%206.73478%2013.1054%206.48043%2013.2929%206.29289C13.4804%206.10536%2013.7348%206%2014%206H17V2Z'%20stroke='%23180801'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",
	kw =
		"data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='25'%20height='24'%20viewBox='0%200%2025%2024'%20fill='none'%3e%3cpath%20d='M16.7693%2021L11.6166%2014.2705L5.72283%2021H3.46529L10.5653%2012.8918L3%203H8.6697L13.3399%209.17808L18.7425%203H21L14.3911%2010.5567L22.2925%2021H16.7779H16.7693ZM17.3035%2019.7937H19.9229L8.06654%204.11154H5.30924L17.3035%2019.7937Z'%20fill='%23180801'/%3e%3c/svg%3e",
	Tw =
		"data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%3e%3cpath%20d='M18.3629%205.63712C16.6642%203.93848%2014.4025%203%2012%203C7.03545%203%203%207.03545%203%2011.9906C3%2013.5673%203.41293%2015.1251%204.20125%2016.4859L4.27633%2016.6173L3.13139%2020.8874L7.57039%2019.8363L7.69239%2019.902C9.00626%2020.6152%2010.4891%2021%2012%2021C16.9552%2021%2021%2016.9645%2021%2012.0094C21%209.60688%2020.0709%207.34515%2018.3723%205.64651L18.3629%205.63712ZM11.9906%2019.8738C10.6767%2019.8738%209.37226%2019.5454%208.22732%2018.9166L7.72054%2018.6444L4.69864%2019.3577L5.47758%2016.4765L5.16788%2015.9416C4.48279%2014.7497%204.11679%2013.3889%204.11679%2012.0094C4.11679%207.67362%207.65485%204.14494%2011.9906%204.14494C14.0928%204.14494%2016.073%204.96142%2017.5652%206.4536C19.048%207.94578%2019.8644%209.91658%2019.8644%2012.0188C19.8644%2016.3545%2016.3264%2019.8926%2011.9906%2019.8926V19.8738Z'%20fill='%23180801'/%3e%3cpath%20d='M14.5245%2016.3076C14.2148%2016.3076%2013.6517%2016.2419%2012.2628%2015.6976C10.8738%2015.1533%209.50365%2013.9426%208.39625%2012.3003L8.33994%2012.2252C8.05839%2011.8498%207.42023%2010.8926%207.42023%209.91658C7.42023%208.94056%207.90824%208.39625%208.14286%208.14286C8.38686%207.88008%208.6121%207.86131%208.67779%207.86131C8.82795%207.86131%208.98749%207.86131%209.11887%207.86131C9.25965%207.86131%209.35349%207.8707%209.48488%208.15224C9.60688%208.4244%209.80396%208.92179%209.97289%209.31595C10.0949%209.60688%2010.1887%209.85089%2010.2169%209.89781C10.2732%2010.001%2010.2732%2010.0667%2010.2357%2010.1418C10.1418%2010.3201%2010.1137%2010.3952%2010.0292%2010.4984L9.9072%2010.6486C9.83212%2010.7424%209.75704%2010.8269%209.69135%2010.8926C9.57873%2011.0052%209.34411%2011.2398%209.55996%2011.5965C9.72888%2011.8968%2010.2075%2012.6475%2010.902%2013.2669C11.6715%2013.952%2012.3472%2014.2523%2012.6757%2014.3931L12.8259%2014.4588C12.9572%2014.5245%2013.0605%2014.5527%2013.1637%2014.5527C13.3139%2014.5527%2013.4453%2014.487%2013.5579%2014.3556C13.6705%2014.2336%2014.1397%2013.6799%2014.318%2013.4171C14.3837%2013.3233%2014.4119%2013.3233%2014.44%2013.3233C14.487%2013.3233%2014.562%2013.3514%2014.6277%2013.3702C14.8248%2013.4453%2015.951%2013.999%2016.2044%2014.121L16.3358%2014.1867C16.4296%2014.2336%2016.561%2014.2899%2016.5798%2014.3274C16.5985%2014.3931%2016.5985%2014.7967%2016.4296%2015.2847C16.2607%2015.7539%2015.3597%2016.2419%2015.0031%2016.2701L14.8717%2016.2888C14.7779%2016.2982%2014.6747%2016.317%2014.5433%2016.317L14.5245%2016.3076Z'%20fill='%23180801'/%3e%3c/svg%3e",
	Pw =
		"data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%3e%3cpath%20d='M12%2016C14.2091%2016%2016%2014.2091%2016%2012C16%209.79086%2014.2091%208%2012%208C9.79086%208%208%209.79086%208%2012C8%2014.2091%209.79086%2016%2012%2016Z'%20stroke='%23180801'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M3%2016V8C3%205.23858%205.23858%203%208%203H16C18.7614%203%2021%205.23858%2021%208V16C21%2018.7614%2018.7614%2021%2016%2021H8C5.23858%2021%203%2018.7614%203%2016Z'%20stroke='%23180801'%20stroke-width='1.5'/%3e%3cpath%20d='M17.5%206.51L17.51%206.49889'%20stroke='%23180801'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",
	Lw =
		"data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%3e%3cpath%20d='M17.5028%2014.4318L13.7963%2015.15C11.2928%2013.8934%209.74635%2012.45%208.84635%2010.2L9.53931%206.48291L8.22941%203L5.05954%203C3.93199%203%203.04421%203.92989%203.22255%205.04325C3.62959%207.58436%204.77075%2011.9744%207.94635%2015.15C11.2818%2018.4855%2016.0476%2019.9821%2018.8016%2020.6035C19.9644%2020.8658%2020.9963%2019.9575%2020.9963%2018.7655L20.9963%2015.7631L17.5028%2014.4318Z'%20stroke='%23180801'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",
	Mw =
		"data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%3e%3cpath%20d='M12%207L12%2013L18%2013'%20stroke='%23180801'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M21.25%2012C21.25%2017.1086%2017.1086%2021.25%2012%2021.25C6.89137%2021.25%202.75%2017.1086%202.75%2012C2.75%206.89137%206.89137%202.75%2012%202.75C17.1086%202.75%2021.25%206.89137%2021.25%2012Z'%20stroke='%23180801'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",
	Nw =
		"data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%3e%3cpath%20d='M9%206L15%2012L9%2018'%20stroke='%23180801'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";
function Rw({ text: e }) {
	return x.jsx("p", {
		className:
			"rounded text-xs hover:bg-texts hover:text-secundario hover:border-none hover:shadow-4xl p-1 border-principal border-[0.5px] inline-flex",
		children: e,
	});
}
function gt({ icon: e, text: t }) {
	return x.jsxs("div", {
		className: "flex flex-row items-center gap-2",
		children: [
			x.jsx("img", { src: e, alt: t, className: "h-6 w-6" }),
			x.jsx("p", { className: "text-texts text-xs", children: t }),
		],
	});
}
function lo({ icon: e, nameSocialNetwort: t }) {
	return x.jsx(Li, {
		to: "/",
		children: x.jsx("img", {
			src: e,
			alt: t,
			className: "py-1 px-2 bg-secundario shadow-3xl rounded-lg",
		}),
	});
}
function _w({ categories: e, phoneNumber: t, schedule: n, location: r }) {
	return x.jsxs("section", {
		className: "w-full",
		children: [
			x.jsxs("div", {
				className: "flex flex-row items-center justify-between w-full",
				children: [
					x.jsxs("div", {
						className: "flex flex-col gap-1",
						children: [
							x.jsx(gt, { text: r, icon: Rp }),
							x.jsx(gt, { text: n, icon: Mw }),
							x.jsx(gt, { text: t, icon: Lw }),
						],
					}),
					x.jsxs("div", {
						className: "flex flex-col items-end gap-4 justify-end",
						children: [
							x.jsx(Li, {
								to: "/calificaciones",
								className: "flex flex-row items-center justify-between gap-1",
								children: x.jsxs("div", {
									className:
										"flex flex-row items-center justify-between gap-1 shadow-3xl bg-texts px-0.5 py-1 rounded",
									children: [
										x.jsx("img", { src: Np, alt: "Star Icon" }),
										x.jsxs("p", {
											className: "font-medium text-xs text-secundario",
											children: [
												"3 ",
												x.jsx("span", { className: "text-[10px]", children: "(22)" }),
											],
										}),
										x.jsx("img", { src: Nw, alt: "Arrow right", className: "h-4 w-4" }),
									],
								}),
							}),
							x.jsx("div", {
								className: "flex flex-row gap-2",
								children: e.map(i => x.jsx(Rw, { text: i })),
							}),
						],
					}),
				],
			}),
			x.jsxs("div", {
				className: "flex flex-row justify-start items-start gap-2 mt-2",
				children: [
					x.jsx(lo, { nameSocialNetwort: "facebook", icon: Ew }),
					x.jsx(lo, { nameSocialNetwort: "twitter", icon: kw }),
					x.jsx(lo, { nameSocialNetwort: "whatsapp", icon: Tw }),
					x.jsx(lo, { nameSocialNetwort: "instagram", icon: Pw }),
				],
			}),
		],
	});
}
const jw =
		"data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%3e%3cmask%20id='mask0_300_2992'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='24'%20height='24'%3e%3crect%20width='24'%20height='24'%20fill='%23D9D9D9'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_300_2992)'%3e%3cpath%20d='M7%2022V12.85C6.15%2012.6167%205.4375%2012.15%204.8625%2011.45C4.2875%2010.75%204%209.93333%204%209V2H6V9H7V2H9V9H10V2H12V9C12%209.93333%2011.7125%2010.75%2011.1375%2011.45C10.5625%2012.15%209.85%2012.6167%209%2012.85V22H7ZM17%2022V14H14V7C14%205.61667%2014.4875%204.4375%2015.4625%203.4625C16.4375%202.4875%2017.6167%202%2019%202V22H17Z'%20fill='%23180801'/%3e%3c/g%3e%3c/svg%3e",
	Ow =
		"data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='20'%20height='14'%20viewBox='0%200%2020%2014'%20fill='none'%3e%3cg%20clip-path='url(%23clip0_298_2981)'%3e%3cpath%20d='M16.8%2013.6C15.26%2013.6%2014%2012.34%2014%2010.8C14%209.26%2015.26%208%2016.8%208C18.34%208%2019.6%209.26%2019.6%2010.8C19.6%2012.34%2018.34%2013.6%2016.8%2013.6ZM16.8%209.6C16.14%209.6%2015.6%2010.14%2015.6%2010.8C15.6%2011.46%2016.14%2012%2016.8%2012C17.46%2012%2018%2011.46%2018%2010.8C18%2010.14%2017.46%209.6%2016.8%209.6ZM4.8%2013.6C3.26%2013.6%202%2012.34%202%2010.8V10.6H0V7.8C0%205.7%201.7%204%203.8%204H7.6V9H11.4L15%204.52V1.6H12V0H14.8C15.28%200%2015.73%200.19%2016.07%200.53C16.41%200.87%2016.6%201.32%2016.6%201.8V5.08L12.2%2010.6H7.6V10.8C7.6%2012.34%206.34%2013.6%204.8%2013.6ZM3.6%2010.8C3.6%2011.46%204.14%2012%204.8%2012C5.46%2012%206%2011.46%206%2010.8V10.6H3.6V10.8ZM3.8%205.6C2.59%205.6%201.6%206.59%201.6%207.8V9H6V5.6H3.8ZM3%202.6V1H7.6V2.6H3Z'%20fill='%23180801'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_298_2981'%3e%3crect%20width='19.6'%20height='13.6'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
	zw =
		"data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%3e%3cpath%20d='M3%2010V19C3%2020.1046%203.89543%2021%205%2021H19C20.1046%2021%2021%2020.1046%2021%2019V10'%20stroke='%23180801'%20stroke-width='1.5'/%3e%3cpath%20d='M14.8333%2021V15C14.8333%2013.8954%2013.9379%2013%2012.8333%2013H10.8333C9.72874%2013%208.83331%2013.8954%208.83331%2015V21'%20stroke='%23180801'%20stroke-width='1.5'%20stroke-miterlimit='16'/%3e%3cpath%20d='M21.8183%209.36418L20.1243%203.43517C20.0507%203.17759%2019.8153%203%2019.5474%203H15.5L15.9753%208.70377C15.9909%208.89043%2016.0923%209.05904%2016.2532%209.15495C16.6425%209.38698%2017.4052%209.81699%2018%2010C19.0158%2010.3125%2020.5008%2010.1998%2021.3465%2010.0958C21.6982%2010.0526%2021.9157%209.7049%2021.8183%209.36418Z'%20stroke='%23180801'%20stroke-width='1.5'/%3e%3cpath%20d='M14%2010C14.5675%209.82538%2015.2879%209.42589%2015.6909%209.18807C15.8828%209.07486%2015.9884%208.86103%2015.9699%208.63904L15.5%203H8.5L8.03008%208.63904C8.01158%208.86103%208.11723%209.07486%208.30906%209.18807C8.71207%209.42589%209.4325%209.82538%2010%2010C11.493%2010.4594%2012.507%2010.4594%2014%2010Z'%20stroke='%23180801'%20stroke-width='1.5'/%3e%3cpath%20d='M3.87567%203.43517L2.18166%209.36418C2.08431%209.7049%202.3018%2010.0526%202.6535%2010.0958C3.49916%2010.1998%204.98424%2010.3125%206%2010C6.59477%209.81699%207.35751%209.38698%207.74678%209.15495C7.90767%209.05904%208.00913%208.89043%208.02469%208.70377L8.5%203H4.45258C4.18469%203%203.94926%203.17759%203.87567%203.43517Z'%20stroke='%23180801'%20stroke-width='1.5'/%3e%3c/svg%3e",
	Iw =
		"data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%3e%3cpath%20d='M16.1538%207.15382C15.2054%206.20538%2013.5351%205.54568%2012%205.50437M7.84618%2016.1538C8.73854%2017.3436%2010.3977%2018.0222%2012%2018.0798M12%205.50437C10.1735%205.45522%208.53849%206.2815%208.53849%208.53845C8.53849%2012.6923%2016.1538%2010.6154%2016.1538%2014.7692C16.1538%2017.1383%2014.127%2018.1562%2012%2018.0798M12%205.50437V3M12%2018.0798V20.9999'%20stroke='%23180801'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",
	Dw =
		"data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%3e%3cpath%20d='M9%206.6V8.4C9%208.73137%208.73137%209%208.4%209H6.6C6.26863%209%206%208.73137%206%208.4V6.6C6%206.26863%206.26863%206%206.6%206H8.4C8.73137%206%209%206.26863%209%206.6Z'%20stroke='%23180801'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M6%2012H9'%20stroke='%23180801'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M15%2012V15'%20stroke='%23180801'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M12%2018H15'%20stroke='%23180801'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M12%2012.0111L12.01%2012'%20stroke='%23180801'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M18%2012.0111L18.01%2012'%20stroke='%23180801'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M12%2015.0111L12.01%2015'%20stroke='%23180801'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M18%2015.0111L18.01%2015'%20stroke='%23180801'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M18%2018.0111L18.01%2018'%20stroke='%23180801'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M12%209.01111L12.01%209'%20stroke='%23180801'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M12%206.01111L12.01%206'%20stroke='%23180801'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M9%2015.6V17.4C9%2017.7314%208.73137%2018%208.4%2018H6.6C6.26863%2018%206%2017.7314%206%2017.4V15.6C6%2015.2686%206.26863%2015%206.6%2015H8.4C8.73137%2015%209%2015.2686%209%2015.6Z'%20stroke='%23180801'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M18%206.6V8.4C18%208.73137%2017.7314%209%2017.4%209H15.6C15.2686%209%2015%208.73137%2015%208.4V6.6C15%206.26863%2015.2686%206%2015.6%206H17.4C17.7314%206%2018%206.26863%2018%206.6Z'%20stroke='%23180801'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M18%203H21V6'%20stroke='%23180801'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M18%2021H21V18'%20stroke='%23180801'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M6%203H3V6'%20stroke='%23180801'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M6%2021H3V18'%20stroke='%23180801'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",
	Nd =
		"data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%3e%3cpath%20d='M18.3333%209.52381V14.6667C18.3333%2015.7712%2017.4379%2016.6667%2016.3333%2016.6667H6.16666C5.06209%2016.6667%204.16666%2015.7712%204.16666%2014.6667V13.75M18.3333%209.52381V8.66667C18.3333%207.5621%2017.4379%206.66667%2016.3333%206.66667H15.8333M18.3333%209.52381H15.8333'%20stroke='%23180801'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M15.8333%206.66667V11.75C15.8333%2012.8546%2014.9379%2013.75%2013.8333%2013.75H3.66666C2.56209%2013.75%201.66666%2012.8546%201.66666%2011.75V5.75C1.66666%204.64543%202.56209%203.75%203.66666%203.75H13.8333C14.9379%203.75%2015.8333%204.64543%2015.8333%205.75V6.66667ZM15.8333%206.66667H4.58332'%20stroke='%23180801'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";
function Aw() {
	return x.jsxs("section", {
		className: "flex flex-row justify-between w-full",
		children: [
			x.jsxs("div", {
				className: "flex flex-col gap-2",
				children: [
					x.jsx(gt, { text: "Efectivo", icon: Iw }),
					x.jsx(gt, { text: "Débito", icon: Nd }),
					x.jsx(gt, { text: "Crédito", icon: Nd }),
					x.jsx(gt, { text: "Código Qr", icon: Dw }),
					x.jsx(gt, { text: "Transferencia", icon: Cw }),
				],
			}),
			x.jsxs("div", {
				className: "flex flex-col gap-2",
				children: [
					x.jsx(gt, { text: "Consumo en el local", icon: jw }),
					x.jsx(gt, { text: "Entrega a domicilio", icon: Ow }),
					x.jsx(gt, { text: "Retiro en tienda", icon: zw }),
				],
			}),
		],
	});
}
function Fw({ categories: e, phoneNumber: t, schedule: n, openRestaurant: r, location: i }) {
	const [o, l] = P.useState(!0),
		a = s => {
			l(s);
		};
	return x.jsxs("div", {
		className: "flex flex-col items-start justify-start p-4 bg-secundario",
		children: [
			x.jsxs("div", {
				className: "flex flex-row items-start justify-start gap-4 mb-5 w-full",
				children: [
					x.jsxs("button", {
						onClick: () => a(!0),
						className: "text-sm/5 font-medium",
						children: [
							"Contacto",
							o && x.jsx("div", { className: "bg-principal h-1 rounded-lg mt-2" }),
						],
					}),
					x.jsxs("button", {
						onClick: () => a(!1),
						className: "text-sm/5 font-medium",
						children: [
							"Pago y entrega",
							!o && x.jsx("div", { className: "bg-principal h-1 rounded mt-2" }),
						],
					}),
					o &&
						x.jsx("div", {
							className: "ml-auto",
							children: x.jsx(kp, { disabled: !0, openRestaurant: r }),
						}),
				],
			}),
			o ? x.jsx(_w, { categories: e, phoneNumber: t, schedule: n, location: i }) : x.jsx(Aw, {}),
		],
	});
}
const Bw = "/assets/imageCard-wEoVcTAf.png";
function bw({ categorie: e }) {
	return x.jsx("a", {
		href: "/restaurant/asdf",
		className: "px-2 py-1 bg-texts rounded-2xl text-principal",
		children: x.jsx("span", { children: e }),
	});
}
function Vw() {
	const e = [
		{ id: 1, categorie: "Pizzas" },
		{ id: 2, categorie: "Sandwiches" },
		{ id: 3, categorie: "Postres" },
		{ id: 4, categorie: "Vegano" },
	];
	return x.jsx("div", {
		className: "flex gap-2 p-4 bg-secundario",
		children: e.map(t => x.jsx(bw, { categorie: t.categorie }, t.id)),
	});
}
const Uw = ({ title: e, price: t, description: n, img: r }) =>
	x.jsxs("div", {
		className: "w-[343px] h-36 flex-col justify-start items-start gap-3 inline-flex flex-wrap",
		children: [
			x.jsxs("div", {
				className: "h-32 justify-center items-start gap-2 inline-flex",
				children: [
					x.jsx("img", {
						className: "w-[105px] self-stretch rounded-lg",
						src: r ?? "https://via.placeholder.com/105x128",
					}),
					x.jsxs("div", {
						className:
							"w-[230px] self-stretch  flex-col justify-start items-start gap-1 inline-flex",
						children: [
							x.jsx("div", {
								className: "justify-center items-center  inline-flex",
								children: x.jsx("div", {
									className:
										"text-center text-stone-950 text-xs font-bold font-['DM Sans'] leading-[18px]",
									children: x.jsx("span", { children: e }),
								}),
							}),
							x.jsx("div", {
								className: "justify-center items-center inline-flex",
								children: x.jsx("div", {
									className:
										"text-center text-stone-950 text-[14px] font-bold font-['DM Sans'] leading-[20px]",
									children: x.jsx("span", { children: t }),
								}),
							}),
							x.jsx("div", {
								className: "self-stretch justify-center items-center gap-2.5 inline-flex",
								children: x.jsx("div", {
									className:
										"grow shrink basis-0 text-stone-950 text-xs font-normal font-['DM Sans'] leading-[18px]",
									children: x.jsx("span", { children: n }),
								}),
							}),
						],
					}),
				],
			}),
			x.jsx("div", {
				children: x.jsx("svg", {
					width: "343",
					height: "1",
					viewBox: "0 0 343 1",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					children: x.jsx("line", { y1: "0.5", x2: "343", y2: "0.5", stroke: "#F2C81B" }),
				}),
			}),
		],
	});
function Hw() {
	const e = [
		{
			category: "Hamburguesas",
			items: [
				{
					id: 1,
					itemName: "Classic Burger",
					price: 8.95,
					description:
						"Carne, queso cheddar, lechuga, tomate, cebolla, mayonesa y ketchup. Incluye papas fritas.",
				},
				{
					id: 2,
					itemName: "Cheese Lover's Burger",
					price: 9.95,
					description:
						"Doble carne, triple queso, bacon, lechuga, tomate, cebolla, mayonesa y ketchup. Incluye papas fritas.",
				},
				{
					id: 3,
					itemName: "Spicy Jalapeño Burger",
					price: 10.45,
					description:
						"Carne, queso pepper jack, jalapeños, guacamole, lechuga, tomate, cebolla y salsa picante. Incluye papas fritas.",
				},
				{
					id: 4,
					itemName: "Mushroom Swiss Burger",
					price: 9.75,
					description:
						"Carne, queso suizo, champiñones salteados, cebolla caramelizada, lechuga, tomate y mayonesa. Incluye papas fritas.",
				},
			],
		},
		{
			category: "Pizzas",
			items: [
				{
					id: 5,
					itemName: "Margherita Pizza",
					price: 11.5,
					description: "Salsa de tomate, mozzarella fresca y albahaca fresca.",
				},
				{
					id: 6,
					itemName: "Pepperoni Feast Pizza",
					price: 12.75,
					description: "Salsa de tomate, doble pepperoni, mozzarella y orégano.",
				},
				{
					id: 7,
					itemName: "Vegetarian Delight Pizza",
					price: 11.95,
					description:
						"Salsa de tomate, champiñones, pimientos, cebolla, aceitunas, mozzarella y albahaca fresca.",
				},
				{
					id: 8,
					itemName: "BBQ Chicken Pizza",
					price: 13.25,
					description:
						"Salsa barbacoa, pollo a la parrilla, cebolla roja, maíz, mozzarella y cilantro.",
				},
			],
		},
	];
	return x.jsx("section", {
		className: "w-full h-auto p-4 flex flex-col gap-8 bg-secundario",
		children: e.map(t =>
			x.jsxs(
				"div",
				{
					className: "flex flex-col gap-4",
					children: [
						x.jsx("h2", { className: "font-bold", children: t.category }),
						t.items.map(n =>
							x.jsx(Uw, { description: n.description, title: n.itemName, price: n.price }, n.id)
						),
					],
				},
				t.category
			)
		),
	});
}
function $w() {
	return (
		Om(),
		x.jsxs("main", {
			children: [
				x.jsx("div", {
					className: "w-full h-44 flex items-center justify-center overflow-hidden",
					children: x.jsx("img", { src: Bw, alt: "Header image", className: "w-full h-auto" }),
				}),
				x.jsx(Fw, { categories: ["Pizza", "Grill"] }),
				x.jsx(Vw, {}),
				x.jsx(Hw, {}),
			],
		})
	);
}
const Ww =
		"data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%3e%3cpath%20d='M9%2019L3.78974%2020.7368C3.40122%2020.8663%203%2020.5771%203%2020.1675L3%205.43246C3%205.1742%203.16526%204.94491%203.41026%204.86325L9%203M9%2019L15%2021M9%2019L9%203M15%2021L20.5897%2019.1368C20.8347%2019.0551%2021%2018.8258%2021%2018.5675L21%203.83246C21%203.42292%2020.5988%203.13374%2020.2103%203.26325L15%205M15%2021L15%205M15%205L9%203'%20stroke='%23180801'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M12.6667%206.33333C12.6667%209.27885%207.33333%2014.3333%207.33333%2014.3333C7.33333%2014.3333%202%209.27885%202%206.33333C2%203.38781%204.38781%201%207.33333%201C10.2789%201%2012.6667%203.38781%2012.6667%206.33333Z'%20fill='white'%20stroke='%23180801'%20stroke-width='1.5'/%3e%3cpath%20d='M7.33332%207.74999C8.11573%207.74999%208.74999%207.11573%208.74999%206.33332C8.74999%205.55092%208.11573%204.91666%207.33332%204.91666C6.55092%204.91666%205.91666%205.55092%205.91666%206.33332C5.91666%207.11573%206.55092%207.74999%207.33332%207.74999Z'%20stroke='%23180801'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",
	Gw =
		"data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%3e%3cpath%20d='M18%2022C19.6569%2022%2021%2020.6569%2021%2019C21%2017.3431%2019.6569%2016%2018%2016C16.3431%2016%2015%2017.3431%2015%2019C15%2020.6569%2016.3431%2022%2018%2022Z'%20stroke='%23180801'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M18%208C19.6569%208%2021%206.65685%2021%205C21%203.34315%2019.6569%202%2018%202C16.3431%202%2015%203.34315%2015%205C15%206.65685%2016.3431%208%2018%208Z'%20stroke='%23180801'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M6%2015C7.65685%2015%209%2013.6569%209%2012C9%2010.3431%207.65685%209%206%209C4.34315%209%203%2010.3431%203%2012C3%2013.6569%204.34315%2015%206%2015Z'%20stroke='%23180801'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M15.5%206.5L8.5%2010.5'%20stroke='%23180801'%20stroke-width='1.5'/%3e%3cpath%20d='M8.5%2013.5L15.5%2017.5'%20stroke='%23180801'%20stroke-width='1.5'/%3e%3c/svg%3e";
function Kw() {
	return x.jsxs("nav", {
		className:
			"w-full h-10 flex justify-between items-center opacity-90 bg-secundario top-0 left-0 p-4 sticky",
		children: [
			x.jsx("img", { src: cp, alt: "Left arrow icon", className: "w-6 h-6" }),
			x.jsx("span", { className: "text-texts font-medium", children: "Vinilo Bar" }),
			x.jsxs("div", {
				className: "flex gap-3",
				children: [
					x.jsx("img", { src: Ww, alt: "Map icon", className: "w-6 h-6" }),
					x.jsx("img", { src: Gw, alt: "Share icon", className: "w-6 h-6" }),
				],
			}),
		],
	});
}
function Qw() {
	return x.jsxs(x.Fragment, { children: [x.jsx(Kw, {}), x.jsx(up, {})] });
}
const Yw = qm([
	{ path: "/", element: x.jsx(vg, {}), children: [{ index: !0, element: x.jsx(Sw, {}) }] },
	{
		path: "restaurant",
		element: x.jsx(Qw, {}),
		children: [{ path: ":restaurant_id", element: x.jsx($w, {}) }],
	},
	{ path: "*", element: x.jsx(Wm, { to: "/" }) },
]);
var Sa = {},
	Rd = gu;
(Sa.createRoot = Rd.createRoot), (Sa.hydrateRoot = Rd.hydrateRoot);
Sa.createRoot(document.getElementById("root")).render(
	x.jsx(we.StrictMode, { children: x.jsx(sg, { router: Yw }) })
);
