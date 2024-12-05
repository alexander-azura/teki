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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
    var PROVIDER, DOMAIN, key, xorEncryptDecrypt_1, generateVRF, domainAPI, vrf, parseAPI, _i, _a, item, e_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                PROVIDER = 'UStreamflix';
                DOMAIN = "https://watch.streamflix.one";
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                key = "M6mV3KZOa4Kt53FsHijMMxdVBpMScfMv";
                xorEncryptDecrypt_1 = function (r, t) {
                    var e = Array.from(r, function (n) { return n.charCodeAt(0); });
                    var o = Array.from(t, function (n) { return n.charCodeAt(0); }).map(function (n, d) { return n ^ e[d % e.length]; });
                    return String.fromCharCode.apply(String, o);
                };
                generateVRF = function (r, t) {
                    var e = decodeURIComponent(t);
                    var a = xorEncryptDecrypt_1(r, e);
                    return encodeURIComponent(libs.string_btoa(a));
                };
                domainAPI = "https://vidsrc.rip/api/source/streamflix/flixhq/".concat(movieInfo.tmdb_id);
                if (movieInfo.type == 'tv') {
                    domainAPI += "/".concat(movieInfo.season, "/").concat(movieInfo.episode);
                }
                vrf = generateVRF(key, domainAPI);
                domainAPI += "?vrf=".concat(vrf);
                libs.log({ domainAPI: domainAPI, vrf: vrf }, PROVIDER, 'DOMAIN API');
                return [4, libs.request_get(domainAPI, {}, false)];
            case 2:
                parseAPI = _b.sent();
                libs.log({ parseAPI: parseAPI }, PROVIDER, 'PARSE API');
                if (!parseAPI.sources) {
                    return [2];
                }
                for (_i = 0, _a = parseAPI.sources; _i < _a.length; _i++) {
                    item = _a[_i];
                    if (!item.file) {
                        continue;
                    }
                    libs.embed_callback(item.file, PROVIDER, PROVIDER, 'Hls', callback, 1, [], [{ file: item.file, quality: 1080 }]);
                }
                return [3, 4];
            case 3:
                e_1 = _b.sent();
                libs.log({ e: e_1 }, PROVIDER, 'ERROR');
                return [3, 4];
            case 4: return [2];
        }
    });
}); };
