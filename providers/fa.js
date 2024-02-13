var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
source.getResource = function (movieInfo, config, callback) { return __awaiter(_this, void 0, void 0, function () {
    function hash_o_1(t) {
        var h = 'A' + 'B' + 'C' + 'D' + 'E' + 'F' + 'G' + 'H' + 'I' + 'J' + 'K' + 'LM' + 'N' + 'O' + 'P' + 'Q' + 'RS' + 'T' + 'U' + 'V' + 'W' + 'X' + 'YZabcdefghijklmnopqrstuvwxyz0123456789+' + '/';
        for (t = ""["concat"](t), o = -3 * -882 + -2543 + -103 * 1; o < t["length"]; o++)
            if (-7012 * -1 + 727 + -7484 < t["charCodeAt"](o))
                return null;
        for (var r = "", o = 907 * -10 + -8743 + 17813; o < t["length"]; o += -853 * 1 + 46 * -21 + 911 * 2) {
            var s = [void (829 * 1 + -7612 + -17 * -399), void (-9708 + -7 * -524 + 6040), void (-233 * -3 + 1313 + -2012), void (5849 + 4420 + -3 * 3423)];
            s[-80 + -3612 + -1 * -3692] = t["charCodeAt"](o) >> 2, s[-1 * -9320 + -3766 * -2 + -16851] = ((1922 + -983 * -9 + 1 * -10766 & t["charCodeAt"](o)) << 1132 + -3112 * -2 + -1 * 7352), t["length"] > o + (-1187 + 3 * 2415 + 1 * -6057) && (s[4145 + 5260 + -9404] |= t["charCodeAt"](o + (-3345 * 2 + -7828 * 1 + -1 * -14519)) >> 1 * -5230 + 8700 + 1 * -3466, s[35 * -245 + -9807 + 18384] = (-3101 + 111 * -83 + -1 * -12329 & t["charCodeAt"](o + (-8910 + -9087 + 1 * 17998))) << 7318 * -1 + 954 * -1 + -42 * -197), t["length"] > (o + -6293 + -1139 + -21 * -354) && (s[5216 + -33 * -13 + -5643] |= t["charCodeAt"]((o + 6226 + 3433 * 1 + -333 * 29)) >> 1 * -46 + 137 * -71 + 9779, s[-14 * 546 + -769 * -3 + 4 * 1335] = -1 * -8545 + -1827 + -6655 & t["charCodeAt"](o + (-4 * 1237 + 5 * -3 + 4965)));
            for (var u = 683 * 1 + 3517 * -1 + 2834; u < s["length"]; u++)
                r += "undefined" == typeof s[u] ? "=" : function (t) {
                    if (-701 * 5 + -5081 + -54 * -159 <= t && t < 6718 + -127 + 1 * -6527)
                        return h[t];
                }(s[u]);
        }
        return r;
    }
    function hash_j(t, n) {
        for (var i, r = [], o = -15 * 422 + -415 * 4 + 7990, s = "", u = -4061 * -1 + -52 * 123 + 2335; u < -2 * 4435 + 1 * -3855 + 12981; u++)
            r[u] = u;
        for (u = -1137 * -1 + 3392 * -1 + -41 * -55; u < -2292 + 10 * -301 + 5558 * 1; u++)
            o = (o + r[u] + t["charCodeAt"](u % t["length"])) % (257 * -31 + 1677 + 6546), i = r[u], r[u] = r[o], r[o] = i;
        for (var u = 152 * -50 + -9237 + 16837, o = 8 * -919 + 31 * 227 + 315 * 1, e = -1 * 5961 + 2152 * -2 + 10265; e < n["length"]; e++)
            i = r[u = (u + (-58 * -1 + 202 * 1 + -259)) % (-1999 + -66 * -86 + -1 * 3421)], r[u] = r[o = (o + r[u]) % (-209 + -6 * 347 + 283 * 9)], r[o] = i, s += String["fromCharCode"](n["charCodeAt"](e) ^ r[(r[u] + r[o]) % (-9810 + -2018 + 1007 * 12)]);
        return s;
    }
    function hash_W(t) {
        return (-2478 + 7692 + 474 * -11, hash_o_1)(t);
    }
    function hash_O(t) {
        var e = {
            eHngA: function (t, n) {
                return t(n);
            },
            RIxcF: function (t, n) {
                return t % n;
            },
            IKlJp: function (t, n) {
                return t % n;
            },
            snYYK: function (t, n) {
                return t == n;
            },
            bAoIb: function (t, n) {
                return t == n;
            },
            wFzHj: function (t, n) {
                return t(n);
            }
        };
        return (8023 + 8 * 347 + 10799 * -1, hash_o_1)(function (t) {
            for (var r = -9350 + -6768 + -139 * -116, o = (t = hash_W(t), ""), s = -8095 + -2839 + 10934; s < t["length"]; s++) {
                var u = t["charCodeAt"](s);
                -6895 + -1 * -5108 + -1 * -1787 ? u = -421 + -5813 * -1 + 674 * -8 : (s % r) == 1 * -2946 + -1302 + 7 * 607 ? u += -40 * 34 + 1179 * 1 + 186 : (s % r) == -9006 + -1 * 9701 + 18712 ? u -= -4519 + -7755 + 307 * 40 : ((s % r) == -15 * 255 + 9987 + 3 * -2054) || ((s % r) == -1 * -356 + -2473 * -1 + -2825) ? u += -6292 + 4077 + 2221 : s % r != 6772 + 31 * 140 + -11109 && s % r != -1623 * 3 + -505 * -5 + -2 * -1173 || (u -= -4177 * 1 + 199 * 3 + -717 * -5), o += String["fromCharCode"](u);
            }
            return o = function (t) {
                return t["replace"](/[a-zA-Z]/g, function (t) {
                    return String["fromCharCode"]((t <= "Z" ? 4 * 146 + 8255 + -8749 : -1 * 5159 + 9491 * -1 + -4 * -3693) >= (t = t["charCodeAt"](-68 * -3 + -5 * -568 + -4 * 761) + (-2306 + -157 * 51 + 10326)) ? t : t - (-10 * -626 + 6673 + -12907));
                });
            }(o = hash_W(o));
        }(t));
    }
    function C(t, n) {
        for (var r, u = [], o = 73 * 66 + 8102 + -12920, s = "", c = 5908 + -2 * -1355 + -8618; c < 9279 * 1 + -2262 + -6761; c++)
            u[c] = c;
        for (c = -7180 + 4316 + -358 * -8; c < -494 + 49 * -62 + 2 * 1894; c++)
            o = ((o + u[c]) + t["charCodeAt"](c % t["length"])) % (-10 * 484 + 3740 + 1356), r = u[c], u[c] = u[o], u[o] = r;
        for (var c = 9583 + 7146 + -16729, o = 3939 + -74 * 111 + -75 * -57, h = 5512 + -8164 + 34 * 78; h < n["length"]; h++)
            r = u[c = (c + (913 * 1 + -7581 + 27 * 247)) % (5 * -1082 + 6553 + -887)], u[c] = u[o = (o + u[c]) % (-4518 + -6408 + 11182)], u[o] = r, s += String["fromCharCode"](n["charCodeAt"](h) ^ u[(u[c] + u[o]) % (-17 * 283 + -8402 + -1 * -13469)]);
        return s;
    }
    function icode(t) {
        var f = 'A' + 'B' + 'C' + 'D' + 'E' + 'F' + 'G' + 'H' + 'I' + 'J' + 'K' + 'LM' + 'N' + 'O' + 'P' + 'Q' + 'RS' + 'T' + 'U' + 'V' + 'W' + 'X' + 'YZabcdefghijklmnopqrstuvwxyz0123456789+' + '/';
        for (t = ""["concat"](t), u = 247 * -8 + -3584 + 5560; u < t["length"]; u++)
            if (-404 + 1383 * 2 + -2107 < t["charCodeAt"](u))
                return null;
        for (var r = "", u = 604 * -7 + 3 * 419 + 1 * 2971; u < t["length"]; u += 9605 + 681 + 1 * -10283) {
            var o = [void (-2 * -2549 + -1307 * -1 + -6405), void (7e3 + 2098 + -9098), void (256 + -100 * 19 + 1644), void (9 * -1098 + 2545 + -253 * -29)];
            o[-9862 + -9980 + 19842] = t["charCodeAt"](u) >> -6003 + -6290 * 1 + -5 * -2459, o[-1710 + 8833 + -3 * 2374] = (4179 * -2 + -1894 + -2051 * -5 & t["charCodeAt"](u)) << -30 * 296 + -3 * -2857 + 313, (t["length"] > (u + (-9674 + -407 * 11 + 488 * 29))) && (o[1013 + -482 + -530] |= t["charCodeAt"](u + (8733 + 964 + 8 * -1212)) >> -1 * -1436 + 1051 * 1 + -2483, o[1 * -971 + -2503 * -1 + -30 * 51] = ((-3580 + -2248 + 5843 * 1) & (t["charCodeAt"](u + (19 * -19 + 2 * -1399 + 3160)))) << 58 * 85 + 9595 + -14523), (t["length"] > (u + (-5177 + 9120 + 563 * -7))) && (o[-4398 * -2 + -275 + -8519] |= t["charCodeAt"]((u + (-1491 + 2 * -299 + -17 * -123))) >> 3692 + -7078 + 424 * 8, o[-26 * -358 + 9524 + 1 * -18829] = -2474 * -4 + -2666 + -2389 * 3 & t["charCodeAt"](u + (4188 + 5289 + -9475)));
            for (var s = 1033 * -4 + -1232 + 5364; s < o["length"]; s++)
                r += "undefined" == typeof o[s] ? "=" : function (t) {
                    if (3 * -2165 + -1 * 8965 + 15460 <= t && t < 225 * -13 + -107 + 3096)
                        return f[t];
                }(o[s]);
        }
        return r;
    }
    function aCode(t) {
        return ""["concat"]((1307 + 2998 + -3 * 1435, icode)(t))["replace"](/\//g, "_")["replace"](/\+/g, "-");
    }
    function genMovie(t) {
        var f = "F" + "Wsfu0" + "K" + "Qd9vx" + "Y" + "G" + "N" + "B";
        var i = {};
        i["GnfuU"] = function (t, n) {
            return t + n;
        };
        return t = encodeURIComponent(t),
            function (t) {
                var i = {};
                i["nvFwT"] = function (t, n) {
                    return t + n;
                }, i["JfzDB"] = function (t, n) {
                    return t - n;
                };
                var r = i;
                for (var u = -5827 + 7343 + -1511, o = (t = aCode(t = function (t) {
                    return t["replace"](/[a-zA-Z]/g, function (t) {
                        return String["fromCharCode"]((t <= "Z" ? -3841 * 2 + -1618 * 4 + 14244 : 7183 + 1907 * -1 + 5154 * -1) >= (t = t["charCodeAt"](-8320 + -11 * -299 + 5031) + (37 * 17 + 2243 + 1 * -2859)) ? t : r["JfzDB"](t, -519 + -2172 + -19 * -143));
                    });
                }(t)), ""), s = -5 * -479 + -9911 * -1 + 14 * -879; s < t["length"]; s++) {
                    var c = t["charCodeAt"](s);
                    -108 * 49 + 8601 + 3 * -1103 ? c = -2074 + 1 * -5473 + 1 * 7547 : s % u == -359 * 25 + 2401 + -6575 * -1 || s % u == 7430 + 3057 + -10483 ? c -= 68 * 147 + 4 * -700 + -7194 : s % u == 9261 + -114 * 12 + -7890 ? c += -2928 + -295 * -17 + -694 * 3 : s % u == 3 * 553 + 254 * 13 + -4961 ? c -= -5 * -836 + -1407 + -2769 : s % u == 661 + 6370 + -7029 && (c -= -4712 * -2 + -8676 + -742), o += String["fromCharCode"](c);
                }
                return encodeURIComponent(o);
            }(aCode(C(f, t)));
    }
    function uCode(t) {
        var f = 'A' + 'B' + 'C' + 'D' + 'E' + 'F' + 'G' + 'H' + 'I' + 'J' + 'K' + 'LM' + 'N' + 'O' + 'P' + 'Q' + 'RS' + 'T' + 'U' + 'V' + 'W' + 'X' + 'YZabcdefghijklmnopqrstuvwxyz0123456789+' + '/';
        if ((t = (t = (t = ""["concat"](t))["replace"](/[\t\n\f\r]/g, ""))["length"] % (-24 * -162 + 1848 + -5732 * 1) == -1 * 9859 + -2545 + 12404 ? t["replace"](/==?$/, "") : t)["length"] % (-1 * -6491 + -59 * -43 + -4512 * 2) == -15 * 531 + 9329 + -1363 || /[^+/0-9A-Za-z]/["test"](t))
            return null;
        for (var r, u = "", o = 6702 * -1 + -2616 * 2 + -1 * -11934, s = 1 * 2809 + -3133 * 1 + 324, c = 1336 + 1 * -6067 + 4731; c < t["length"]; c++)
            o = (o <<= -7938 + 25 + 7919 * 1) | (r = t[c], (r = f["indexOf"](r)) < -2422 + -4900 + -3661 * -2 ? void (17 * -291 + -1 * 8031 + 6489 * 2) : r), 63 * -1 + -3562 + 3649 === (s += -1229 + -81 * -59 + -3544) && (u = (u = (u += String["fromCharCode"]((14705491 * -2 + -1 * 9895747 + 811861 * 69 & o) >> -6315 + -4789 * -1 + 3 * 514)) + String["fromCharCode"](((-1 * 56037 + -56905 + 178222) & o) >> -1 * -8355 + -1 * -549 + 8896 * -1)) + String["fromCharCode"](-1 * -6919 + -6790 + 126 & o), o = s = 1 * -2803 + 9473 + -290 * 23);
        return 5 * -79 + 1943 * 2 + -3479 === s ? (o >>= 8512 + -1275 + -7233, u += String["fromCharCode"](o)) : -1 * -3658 + -6358 + 2718 === s && (o >>= -7130 + -6891 * -1 + 241, u = (u += String["fromCharCode"]((172 * -681 + -18854 * -5 + 88142 & o) >> -1 * -5813 + 8910 + -14715)) + String["fromCharCode"](-244 + -6703 + -7202 * -1 & o)), u;
    }
    function decode(t) {
        var h = "8z5" + "Ag5wgagfs" + "Ouh" + "z";
        return t = (907 * -5 + -448 * 12 + 9911, uCode)(""["concat"](t)["replace"](/_/g, "/")["replace"](/-/g, "+")), t = C(h, t), decodeURIComponent(t);
    }
    var PROVIDER, DOMAIN, userAgent, LINK_DETAIL, KEY, ENCRYPT_KEY, gen, b, a, rc4, encode, headers, urlSearch, parseSearch, LINK_TV_DETAIL, parseTvDetail, tvId, episodeInfoUrl, episodeRes, parseEpisodeData, dataId, serverData, parseServerData_1, serverIds_3, _i, serverIds_1, idItem, embedUrl, embedData, directData, decodeUrl, parseMovieDetail, movieId, movieInfoUrl, movieInfoRes, parseMovieInfo, dataId, serverData, parseServerData_2, serverIds_4, _a, serverIds_2, idItem, embedUrl, embedData, directData, decodeUrl;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                PROVIDER = 'AMOVIESTREAM_2';
                DOMAIN = "https://fmoviesz.to";
                userAgent = {};
                LINK_DETAIL = '';
                KEY = "8z5Ag5wgagfsOuhz";
                ENCRYPT_KEY = '8z5Ag5wgagfsOuhz';
                gen = function (title) {
                    var encode = encodeURIComponent(title);
                    var Mi = a.j(KEY, encode);
                    var wi = a.o(Mi);
                    return a.O(wi);
                };
                b = {
                    j: function (t, n) {
                        var i = c;
                        for (var r, o = [], u = -1 * -5223 + -2674 + -2549, s = "", h = 3 * -385 + 3 * 2521 + -6408; h < -3 * 2999 + 7005 + 2248; h++)
                            o[h] = h;
                        for (h = -710 * 8 + -718 + 6398; h < 4271 + 1475 + -5490; h++)
                            u = (u + o[h] + t[f[i(831) + "Bn"](x6 + M9, $2)](h % t[j])) % (-1174 * -2 + -3 * 432 + -1 * 796), r = o[h], o[h] = o[u], o[u] = r;
                        for (var h = -1393 + 8698 + -7305, u = -8992 + -7858 * 1 + -5 * -3370, e = 6283 + 2127 + -8410; e < n[j]; e++)
                            r = o[h = (h + (-2664 + -10 * -947 + -1 * 6805)) % (5512 + 9262 * 1 + -14518)], o[h] = o[u = (u + o[h]) % (1651 + -5811 + 4 * 1104)], o[u] = r, s += p2[V3 + T5 + M9](n[x6 + M9 + $2](e) ^ o[(o[h] + o[u]) % (-2748 + 2 * -1057 + 3 * 1706)]);
                        return s;
                    }
                };
                a = {
                    Mi: function (t, n) {
                        for (var i, u = [], e = -5495 + -3263 + 8758, o = '', c = 5790 + -2195 + -3595 * 1; c < -3114 * 3 + 811 * -5 + -333 * -41; c++)
                            u[c] = c;
                        for (c = 2659 + 9754 + -12413 * 1; c < 2595 * -1 + 465 * -8 + -6571 * -1; c++)
                            e = (e + u[c] + t['charCodeAt'](c % t['length'])) % (-5149 * 1 + 1 * 2549 + 2856),
                                i = u[c],
                                u[c] = u[e],
                                u[e] = i;
                        for (var c = 1 * -9953 + 1 * 5816 + 4137, e = 926 + -1921 + 199 * 5, f = -7599 + -9973 * 1 + -17572 * -1; f < n['length']; f++)
                            e = (e + u[c = (c + (-20 * -158 + -1107 * -5 + -8694)) % (8092 + -1 * 1896 + -45 * 132)]) % (8842 + 8020 + 437 * -38),
                                i = u[c],
                                u[c] = u[e],
                                u[e] = i,
                                o += String['fromCharCode'](n['charCodeAt'](f) ^ u[(u[c] + u[e]) % (-351 + 9068 + 1 * -8461)]);
                        return o;
                    },
                    u: function (t) {
                        var f = 'A' + 'B' + 'C' + 'D' + 'E' + 'F' + 'G' + 'H' + 'I' + 'J' + 'K' + 'LM' + 'N' + 'O' + 'P' + 'Q' + 'RS' + 'T' + 'U' + 'V' + 'W' + 'X' + 'YZabcdefghijklmnopqrstuvwxyz0123456789+' + '/';
                        if ((t = (t = (t = ""['concat'](t))["replace"](/[\t\n\f\r]/g, ""))["length"] % (-794 + 608 + 190) == -227 * -29 + -1 * -1313 + -7896 ? t["replace"](/==?$/, "") : t)["length"] % (-2380 + -8186 + -10 * -1057) == 1154 + -2 * -3084 + -7321 * 1 || /[^+/0-9A-Za-z]/["test"](t))
                            return null;
                        for (var r, o = "", s = -1736 + 8144 + -534 * 12, u = -7 * 587 + -5281 + 9390, h = 6 * 617 + -79 * -71 + -9311; h < t["length"]; h++)
                            s = (s <<= -653 * -5 + 7174 + 10433 * -1) | (r = t[h], (r = f["indexOf"](r)) < 3784 + 5 * -1544 + 3936 ? void (7 * 379 + 573 * -7 + 1358) : r), 5 * -561 + -1 * 3001 + 5830 === (u += -6047 + 343 * 13 + -797 * -2) && (o = (o = (o += String["fromCharCode"]((-17257949 + 22284100 + 11685529 & s) >> 344 + 2 * 2895 + -6118)) + String["fromCharCode"]((-1 * 77989 + 79339 + 63930 & s) >> -3910 * 1 + 4968 + -1050)) + String["fromCharCode"](-3 * 1601 + 27 * 1 + 5031 & s), s = u = -6737 + -1 * 7051 + 766 * 18);
                        return 1937 * -2 + 1312 + 2574 === u ? (s >>= -4913 + -2967 + 7884, o += String["fromCharCode"](s)) : 262 * -13 + 828 + 2596 * 1 === u && (s >>= 26 * -76 + 1 * -57 + 2035, o = (o += String["fromCharCode"](14 * 6241 + -93063 + 70969 & s >> -683 * -3 + -197 * 49 + 7612)) + String["fromCharCode"](-1076 + -3559 + 4890 & s)), o;
                    },
                    mi: function (t) {
                        var a = {};
                        a['hYrne'] = function (t, n) {
                            return t < n;
                        }
                            ,
                                a["ZXzSr"] = function (t, n) {
                                    return t + n;
                                }
                            ,
                                a['KfgkC'] = function (t, n) {
                                    return t > n;
                                }
                            ,
                                a['mbjtf'] = function (t, n) {
                                    return t >> n;
                                }
                            ,
                                a["HINAh"] = function (t, n) {
                                    return t & n;
                                };
                        var u = {};
                        u['value'] = !(9328 + -1 * -245 + -9573);
                        var h = 'A' + 'B' + 'C' + 'D' + 'E' + 'F' + 'G' + 'H' + 'I' + 'J' + 'K' + 'LM' + 'N' + 'O' + 'P' + 'Q' + 'RS' + 'T' + 'U' + 'V' + 'W' + 'X' + 'YZabcdefghijklmnopqrstuvwxyz0123456789+' + '/';
                        if ((t = (t = (t = ""["concat"](t))['replace'](/[\t\n\f\r]/g, ""))['length'] % (228 * -8 + 6220 + 1098 * -4) == 1994 + -1 * -3392 + -5386 ? t['replace'](/==?$/, "") : t)["length"] % (-68 * 17 + -9618 + 10778) == 154 * -61 + -3 * -1709 + 4268 || /[^+/0-9A-Za-z]/['test'](t))
                            return null;
                        for (var i, u = '', e = -6316 + -8542 + 874 * 17, o = 7125 + -4834 + -2291, c = -1326 + -1 * 2713 + 4039 * 1; c < t['length']; c++)
                            e = (e <<= 14 * 191 + 2873 + -5541) | (i = t[c],
                                (i = h['indexOf'](i)) < -6083 + -2 * -3846 + -1609 ? void (-19 * -127 + -3999 * 1 + 1586) : i),
                                -1 * -8156 + -10 * 320 + -1 * 4932 === (o += -3446 + 9446 + -74 * 81) && (u = (u = (u += String['fromCharCode']((26321917 + 31234713 + -40844950 & e) >> 4557 + -8532 + 3991)) + String['fromCharCode'](a['mbjtf'](-1 * -91577 + -36 + -26261 & e, 471 * 9 + -1 * 64 + -4167))) + String['fromCharCode'](1 * 1609 + 687 * -1 + -667 & e),
                                    e = o = 1055 + 9079 + 563 * -18);
                        return 198 + 999 * 3 + 1061 * -3 === o ? (e >>= -3992 + 6923 + -2927,
                            u += String['fromCharCode'](e)) : -1 * 393 + 1 * 2089 + -1678 === o && (e >>= -6519 + 7739 * -1 + 14260,
                            u = (u += String['fromCharCode']((-63876 + 126422 + 2734 & e) >> -8707 * 1 + 4195 * -2 + -3421 * -5)) + String['fromCharCode'](a[n(976, "zdb8") + "Ah"](-278 * 5 + 281 * -32 + 967 * 11, e))),
                            u;
                    },
                    j: function (t, n) {
                        for (var r, o = [], s = -149 * 55 + -91 * -91 + -86, u = '', h = 4 * 1123 + 6 * 757 + -9034 * 1; h < -2988 + 857 + -77 * -31; h++)
                            o[h] = h;
                        for (h = -7 * -1364 + 145 * -6 + -8678; h < -359 * -5 + 1117 + -2656; h++)
                            s = (s + o[h] + t['charCodeAt'](h % t['length'])) % (-2933 * -2 + 9289 + -14899 * 1), r = o[h], o[h] = o[s], o[s] = r;
                        for (var h = -4580 + 3 * 757 + 2309, s = 199 + 5012 + 27 * -193, c = 987 + 167 * 35 + -6832; c < n['length']; c++)
                            r = o[h = (h + (1821 * -1 + -3303 + 1 * 5125)) % (3232 + -2427 + 3 * -183)], o[h] = o[s = (s + o[h]) % (-2846 + 7937 + 4835 * -1)], o[s] = r, u += String['fromCharCode'](n['charCodeAt'](c) ^ o[(o[h] + o[s]) % (-1383 + 2373 + 734 * -1)]);
                        return u;
                    },
                    f: function (t) {
                        var i = {};
                        i["voigd"] = function (t, n) {
                            return t >= n;
                        };
                        var r = i;
                        return t["replace"](/[a-zA-Z]/g, function (t) {
                            return String["fromCharCode"](r["voigd"](t <= "Z" ? 9061 + 1454 * 3 + -13333 : 1 * -1867 + -17 * -461 + -1 * 5848, t = t["charCodeAt"](1065 + -758 + -307) + (152 * 13 + 8 * 1169 + 5 * -2263)) ? t : t - (1 * 6122 + 5507 + -11603));
                        });
                    },
                    O: function (t) {
                        var n = {};
                        n['uvwVX'] = function (t, n) {
                            return t + n;
                        }, n['RnHhs'] = function (t, n) {
                            return t % n;
                        }, n['EiFCa'] = function (t, n) {
                            return t % n;
                        };
                        var e = n;
                        return (0, a.o)(function (t) {
                            for (var r = -21 * 413 + 7547 * -1 + -601 * -27, o = (t = a.f(t), t = a.f(t), ""), s = -6597 + 9230 + -2633; s < t["length"]; s++) {
                                var u = t["charCodeAt"](s);
                                1046 + 10 * 607 + 1779 * -4 ? u = 11 * -247 + 19 * 140 + 57 : s % r == -12 * -527 + 8 * -410 + -3040 ? u -= 5718 + -524 * -8 + -9904 * 1 : s % r == 1940 + -274 * 24 + 4639 ? u -= -1037 + -8621 + -1 * -9662 : s % r == -7929 + 490 * -6 + 10874 ? u += -2 * 1017 + 42 * -8 + 44 * 54 : s % r == -1 * 5713 + 1 * 8318 + -2604 || s % r == -4491 + -6325 + -676 * -16 || e['RnHhs'](s, r) == 1 * -9245 + 1 * 1949 + -1217 * -6 ? u -= 5182 + -7200 + 2020 : e["EiFCa"](s, r) == 5318 + 3 * -1722 + -2 * 75 && (u += 9 * 369 + -3865 + 10 * 55), o += String["fromCharCode"](u);
                            }
                            return o = o["split"]("")["reverse"]()["join"]("");
                        }(t));
                    },
                    o: function (t) {
                        var h = 'A' + 'B' + 'C' + 'D' + 'E' + 'F' + 'G' + 'H' + 'I' + 'J' + 'K' + 'LM' + 'N' + 'O' + 'P' + 'Q' + 'RS' + 'T' + 'U' + 'V' + 'W' + 'X' + 'YZabcdefghijklmnopqrstuvwxyz0123456789+' + '/';
                        for (t = ""["concat"](t), o = -2632 + 8467 * 1 + -5835; o < t["length"]; o++)
                            if (52 * -1 + -31 * 307 + 9824 < t['charCodeAt'](o))
                                return null;
                        for (var r = "", o = 8667 + 5342 + -14009; o < t['length']; o += 7165 + 7995 + 15157 * -1) {
                            var s = [void (-8193 + 467 + 7726), void (3 * 3198 + 1 * 2222 + -1688 * 7), void (-890 + 12 * 249 + -2098), void (-3695 + -6512 + 10207)];
                            s[-229 * 37 + -8988 + 17461] = t['charCodeAt'](o) >> -4337 + 4066 + -21 * -13, s[4518 + -1464 + -3053] = (-41 * 20 + -965 * -2 + -1107 & t['charCodeAt'](o)) << -6734 + -99 * 10 + 7728, t["length"] > o + (-1 * 5765 + 615 * -5 + 8841) && (s[-8881 + 2991 + -5891 * -1] |= t['charCodeAt'](o + (-7580 + 6307 + 7 * 182)) >> 7508 + 1 * -7497 + -7 * 1, s[3 * -865 + 29 * 311 + -6422] = (1 * 802 + 934 * 5 + -5457 & t["charCodeAt"](o + (14 * -64 + -3125 * 1 + 1 * 4022))) << -4 * 1766 + -1 * -3145 + 3921), t["length"] > o + (-3588 + 12 * 20 + 3350) && (s[-9086 + -6 * 199 + 10282] |= t["charCodeAt"](o + (-1 * -6101 + -36 * -13 + -11 * 597)) >> 26 + 9631 + -9651, s[-367 * -11 + 7514 + 4 * -2887] = -4953 * 1 + 1 * 2521 + -499 * -5 & t["charCodeAt"](o + (-930 * -6 + 1 * 1019 + -6597)));
                            for (var u = -2222 + -101 * 73 + 9595; u < s["length"]; u++)
                                r += "undefined" == typeof s[u] ? '=' : function (t) {
                                    if (1428 + -5539 * 1 + 4111 <= t && t < -37 * -186 + -125 * 38 + -2068)
                                        return h[t];
                                }(s[u]);
                        }
                        return r;
                    },
                    wi: function (title) {
                        var i = {};
                        i['hYrne'] = function (t, n) {
                            return t < n;
                        }
                            ,
                                i["ZXzSr"] = function (t, n) {
                                    return t + n;
                                }
                            ,
                                i['KfgkC'] = function (t, n) {
                                    return t > n;
                                }
                            ,
                                i['mbjtf'] = function (t, n) {
                                    return t >> n;
                                }
                            ,
                                i["HINAh"] = function (t, n) {
                                    return t & n;
                                };
                        var a = i;
                        var u = {};
                        u['value'] = !(9328 + -1 * -245 + -9573);
                        var h = 'A' + 'B' + 'C' + 'D' + 'E' + 'F' + 'G' + 'H' + 'I' + 'J' + 'K' + 'LM' + 'N' + 'O' + 'P' + 'Q' + 'RS' + 'T' + 'U' + 'V' + 'W' + 'X' + 'YZabcdefghijklmnopqrstuvwxyz0123456789+' + '/';
                        function e(t) {
                            for (t = ""['concat'](t),
                                u = -10 * 966 + 1314 + 2 * 4173; u < t['length']; u++)
                                if (8437 + 6138 + 1432 * -10 < t['charCodeAt'](u))
                                    return null;
                            for (var i = "", u = -17 * 223 + 214 + -7 * -511; u < t['length']; u += 43 * 13 + 8335 + -8891) {
                                var e = [void (4945 + -8811 + 3866), void (57 * 1 + -6428 + -6371 * -1), void (-1 * 5923 + -76 + 5999), void (1 * 2657 + 523 * -11 + 1548 * 2)];
                                e[11 * 155 + -3811 + 2106] = t['charCodeAt'](u) >> 7936 + 9 * -37 + 1 * -7601,
                                    e[5488 + 3726 + -9213] = (-9222 + -8653 * -1 + -44 * -13 & t['charCodeAt'](u)) << 1819 * 1 + -3977 + 2162,
                                    t['length'] > u + (-1431 * -5 + -4155 + -1 * 2999) && (e[2 * 180 + 7 * -1012 + 6725] |= t['charCodeAt'](u + (354 * -24 + -4412 + 12909)) >> -11 * -409 + -7438 + 2943,
                                        e[1678 * -3 + 603 * 13 + -2803] = (276 * -32 + 396 + 1 * 8451 & t['charCodeAt'](u + (-3 * -417 + 2344 + -3594))) << 5854 + -9518 + 3666),
                                    a["KfgkC"](t['length'], u + (405 + 1 * 7129 + -7532)) && (e[-7085 + 6656 + 431] |= t['charCodeAt'](u + (-767 * -11 + -3 * -3130 + -23 * 775)) >> -2179 + 6816 + -4631,
                                        e[9631 + -272 * -31 + 258 * -70] = -3423 + -315 + 3801 & t['charCodeAt'](u + (3092 + -9779 + -6689 * -1)));
                                for (var o = -1 * -4426 + 4437 + -8863; o < e['length']; o++)
                                    'undefined' == typeof e[o] ? i += '=' : i += function (t) {
                                        if (2 * 1961 + 4408 + -8330 <= t && a['hYrne'](t, 1 * 6644 + -2791 + -3789))
                                            return h[t];
                                    }(e[o]);
                            }
                            return i;
                        }
                        return e(title);
                    }
                };
                rc4 = function (key, str) {
                    var s = [];
                    var j = 0;
                    var x;
                    var res = '';
                    for (var i = 0; i < 256; i++) {
                        s[i] = i;
                    }
                    for (i = 0; i < 256; i++) {
                        j = (j + s[i] + key.charCodeAt(i % key.length)) % 256;
                        x = s[i];
                        s[i] = s[j];
                        s[j] = x;
                    }
                    i = 0;
                    j = 0;
                    for (var y = 0; y < str.length; y++) {
                        i = (i + 1) % 256;
                        j = (j + s[i]) % 256;
                        x = s[i];
                        s[i] = s[j];
                        s[j] = x;
                        res += String.fromCharCode(str.charCodeAt(y) ^ s[(s[i] + s[j]) % 256]);
                    }
                    return res;
                };
                encode = function (url) {
                    return decodeURIComponent(rc4(KEY, libs.string_atob(url)));
                };
                headers = {
                    'user-agent': libs.request_getRandomUserAgent()
                };
                urlSearch = "".concat(DOMAIN, "/filter?keyword=").concat(movieInfo.title.trim().replace(/ /g, '+'));
                return [4, libs.request_get(urlSearch, headers, true)];
            case 1:
                parseSearch = _b.sent();
                libs.log({ urlSearch: urlSearch }, PROVIDER, 'URL SEARCH');
                libs.log({ length: parseSearch('.item').length }, PROVIDER, 'LENGTH SEARCH INFO');
                parseSearch('.item').each(function (key, item) {
                    var title = parseSearch(item).find('a').text();
                    var year = parseSearch(item).find('.meta').find('span').first().html();
                    year = year ? year.match(/([0-9]+)/i) : 0;
                    year = year ? year[1] : 0;
                    var href = parseSearch(item).find('a').attr('href');
                    var typeFilm = parseSearch(item).find('.type').text();
                    var type = 'tv';
                    if (typeFilm && typeFilm.toLowerCase() == 'movie') {
                        type = 'movie';
                    }
                    libs.log({ title: title, year: year, href: href, type: type }, PROVIDER, 'MOVIE INFO');
                    if (title && href && !LINK_DETAIL && type) {
                        if (libs.string_matching_title(movieInfo, title, false)) {
                            if (movieInfo.type == 'tv' && type.toLowerCase() == 'tv' && movieInfo.year == year) {
                                LINK_DETAIL = "".concat(DOMAIN).concat(href);
                            }
                            if (movieInfo.type == 'movie' && type.toLowerCase() == 'movie' && movieInfo.year == year) {
                                LINK_DETAIL = "".concat(DOMAIN).concat(href);
                            }
                        }
                    }
                });
                libs.log({ LINK_DETAIL: LINK_DETAIL }, PROVIDER, 'LINK DETAIl');
                if (!LINK_DETAIL) {
                    return [2];
                }
                if (!(movieInfo.type == 'tv')) return [3, 10];
                LINK_TV_DETAIL = "".concat(LINK_DETAIL, "/").concat(movieInfo.season, "-").concat(movieInfo.episode);
                return [4, libs.request_get(LINK_TV_DETAIL, headers, true)];
            case 2:
                parseTvDetail = _b.sent();
                tvId = parseTvDetail('div.watch').attr('data-id');
                libs.log({ tvId: tvId, LINK_TV_DETAIL: LINK_TV_DETAIL }, PROVIDER, 'TVID');
                if (!tvId) {
                    return [2];
                }
                episodeInfoUrl = "".concat(DOMAIN, "/ajax/episode/list/").concat(tvId, "?vrf=").concat(genMovie(tvId));
                return [4, libs.request_get(episodeInfoUrl, headers, false)];
            case 3:
                episodeRes = _b.sent();
                libs.log({ episodeRes: episodeRes, episodeInfoUrl: episodeInfoUrl }, PROVIDER, 'EPISODE RES');
                if (episodeRes.status != 200) {
                    return [2];
                }
                parseEpisodeData = cheerio.load(episodeRes.result);
                dataId = parseEpisodeData("ul[data-season=\"".concat(movieInfo.season, "\"] li a[data-num=\"").concat(movieInfo.episode, "\"]")).attr('data-id');
                libs.log({ dataId: dataId }, PROVIDER, 'DATA ID');
                if (!dataId) {
                    return [2];
                }
                return [4, libs.request_get("".concat(DOMAIN, "/ajax/server/list/").concat(dataId, "?vrf=").concat(genMovie(dataId)), headers, false)];
            case 4:
                serverData = _b.sent();
                if (serverData.status != 200) {
                    return [2];
                }
                parseServerData_1 = cheerio.load(serverData.result);
                serverIds_3 = [];
                parseServerData_1('li').each(function (key, item) {
                    var id = parseServerData_1(item).attr('data-link-id');
                    if (id) {
                        serverIds_3.push(id);
                    }
                });
                libs.log({ serverIds: serverIds_3 }, PROVIDER, 'serverId');
                if (!serverIds_3.length) {
                    return [2];
                }
                _i = 0, serverIds_1 = serverIds_3;
                _b.label = 5;
            case 5:
                if (!(_i < serverIds_1.length)) return [3, 9];
                idItem = serverIds_1[_i];
                embedUrl = "".concat(DOMAIN, "/ajax/server/").concat(idItem, "?vrf=").concat(genMovie(idItem));
                return [4, libs.request_get(embedUrl, headers, false)];
            case 6:
                embedData = _b.sent();
                libs.log({ embedData: embedData }, PROVIDER, 'EMBED DATA');
                if (embedData.status != 200) {
                    return [3, 8];
                }
                directData = embedData.result.url;
                if (!directData) {
                    return [3, 8];
                }
                decodeUrl = decode(directData);
                libs.log({ decodeUrl: decodeUrl }, PROVIDER, 'DECODE URL');
                return [4, libs.embed_redirect(decodeUrl, '', movieInfo, PROVIDER, callback, undefined, [])];
            case 7:
                _b.sent();
                _b.label = 8;
            case 8:
                _i++;
                return [3, 5];
            case 9: return [3, 18];
            case 10: return [4, libs.request_get(LINK_DETAIL, headers, true)];
            case 11:
                parseMovieDetail = _b.sent();
                movieId = parseMovieDetail('div.watch').attr('data-id');
                libs.log({ movieId: movieId }, PROVIDER, 'MOVIEID');
                if (!movieId) {
                    return [2];
                }
                movieInfoUrl = "".concat(DOMAIN, "/ajax/episode/list/").concat(movieId, "?vrf=").concat(genMovie(movieId));
                return [4, libs.request_get(movieInfoUrl, headers, false)];
            case 12:
                movieInfoRes = _b.sent();
                libs.log({ movieInfoRes: movieInfoRes, movieInfoUrl: movieInfoUrl }, PROVIDER, 'MOVIE RES');
                if (movieInfoRes.status != 200) {
                    return [2];
                }
                parseMovieInfo = cheerio.load(movieInfoRes.result);
                dataId = parseMovieInfo(".episodes li a[title=\"".concat(1, "\"]")).attr('data-id');
                libs.log({ dataId: dataId }, PROVIDER, 'DATA ID');
                if (!dataId) {
                    return [2];
                }
                return [4, libs.request_get("".concat(DOMAIN, "/ajax/server/list/").concat(dataId, "?vrf=").concat(genMovie(dataId)), headers, false)];
            case 13:
                serverData = _b.sent();
                if (serverData.status != 200) {
                    return [2];
                }
                parseServerData_2 = cheerio.load(serverData.result);
                serverIds_4 = [];
                parseServerData_2('li').each(function (key, item) {
                    var id = parseServerData_2(item).attr('data-link-id');
                    if (id) {
                        serverIds_4.push(id);
                    }
                });
                _a = 0, serverIds_2 = serverIds_4;
                _b.label = 14;
            case 14:
                if (!(_a < serverIds_2.length)) return [3, 18];
                idItem = serverIds_2[_a];
                embedUrl = "".concat(DOMAIN, "/ajax/server/").concat(idItem, "?vrf=").concat(genMovie(idItem));
                return [4, libs.request_get(embedUrl, headers, false)];
            case 15:
                embedData = _b.sent();
                libs.log({ embedData: embedData }, PROVIDER, 'EMBED DATA');
                if (embedData.status != 200) {
                    return [3, 17];
                }
                directData = embedData.result.url;
                if (!directData) {
                    return [3, 17];
                }
                decodeUrl = decode(directData);
                libs.log({ decodeUrl: decodeUrl }, PROVIDER, 'DECODE URL');
                return [4, libs.embed_redirect(decodeUrl, '', movieInfo, PROVIDER, callback, undefined, [])];
            case 16:
                _b.sent();
                _b.label = 17;
            case 17:
                _a++;
                return [3, 14];
            case 18:
                ;
                return [2, true];
        }
    });
}); };
