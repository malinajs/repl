(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.malina = {}));
})(this, (function (exports) { 'use strict';

  // This file was generated. Do not modify manually!
  var astralIdentifierCodes = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 370, 1, 81, 2, 71, 10, 50, 3, 123, 2, 54, 14, 32, 10, 3, 1, 11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 3, 0, 158, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 10, 1, 2, 0, 49, 6, 4, 4, 14, 9, 5351, 0, 7, 14, 13835, 9, 87, 9, 39, 4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 4706, 45, 3, 22, 543, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 101, 0, 161, 6, 10, 9, 357, 0, 62, 13, 499, 13, 983, 6, 110, 6, 6, 9, 4759, 9, 787719, 239];

  // This file was generated. Do not modify manually!
  var astralIdentifierStartCodes = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2, 14, 2, 6, 2, 1, 68, 310, 10, 21, 11, 7, 25, 5, 2, 41, 2, 8, 70, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 349, 41, 7, 1, 79, 28, 11, 0, 9, 21, 43, 17, 47, 20, 28, 22, 13, 52, 58, 1, 3, 0, 14, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 20, 1, 64, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 38, 6, 186, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 19, 72, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 16, 0, 2, 12, 2, 33, 125, 0, 80, 921, 103, 110, 18, 195, 2637, 96, 16, 1071, 18, 5, 4026, 582, 8634, 568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 43, 8, 8936, 3, 2, 6, 2, 1, 2, 290, 16, 0, 30, 2, 3, 0, 15, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 1845, 30, 7, 5, 262, 61, 147, 44, 11, 6, 17, 0, 322, 29, 19, 43, 485, 27, 757, 6, 2, 3, 2, 1, 2, 14, 2, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42719, 33, 4153, 7, 221, 3, 5761, 15, 7472, 3104, 541, 1507, 4938, 6, 4191];

  // This file was generated. Do not modify manually!
  var nonASCIIidentifierChars = "\u200c\u200d\xb7\u0300-\u036f\u0387\u0483-\u0487\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u0669\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7\u06e8\u06ea-\u06ed\u06f0-\u06f9\u0711\u0730-\u074a\u07a6-\u07b0\u07c0-\u07c9\u07eb-\u07f3\u07fd\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u0898-\u089f\u08ca-\u08e1\u08e3-\u0903\u093a-\u093c\u093e-\u094f\u0951-\u0957\u0962\u0963\u0966-\u096f\u0981-\u0983\u09bc\u09be-\u09c4\u09c7\u09c8\u09cb-\u09cd\u09d7\u09e2\u09e3\u09e6-\u09ef\u09fe\u0a01-\u0a03\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a66-\u0a71\u0a75\u0a81-\u0a83\u0abc\u0abe-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ae2\u0ae3\u0ae6-\u0aef\u0afa-\u0aff\u0b01-\u0b03\u0b3c\u0b3e-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b55-\u0b57\u0b62\u0b63\u0b66-\u0b6f\u0b82\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd7\u0be6-\u0bef\u0c00-\u0c04\u0c3c\u0c3e-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0c66-\u0c6f\u0c81-\u0c83\u0cbc\u0cbe-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0ce6-\u0cef\u0cf3\u0d00-\u0d03\u0d3b\u0d3c\u0d3e-\u0d44\u0d46-\u0d48\u0d4a-\u0d4d\u0d57\u0d62\u0d63\u0d66-\u0d6f\u0d81-\u0d83\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0de6-\u0def\u0df2\u0df3\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0e50-\u0e59\u0eb1\u0eb4-\u0ebc\u0ec8-\u0ece\u0ed0-\u0ed9\u0f18\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f3e\u0f3f\u0f71-\u0f84\u0f86\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102b-\u103e\u1040-\u1049\u1056-\u1059\u105e-\u1060\u1062-\u1064\u1067-\u106d\u1071-\u1074\u1082-\u108d\u108f-\u109d\u135d-\u135f\u1369-\u1371\u1712-\u1715\u1732-\u1734\u1752\u1753\u1772\u1773\u17b4-\u17d3\u17dd\u17e0-\u17e9\u180b-\u180d\u180f-\u1819\u18a9\u1920-\u192b\u1930-\u193b\u1946-\u194f\u19d0-\u19da\u1a17-\u1a1b\u1a55-\u1a5e\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1ab0-\u1abd\u1abf-\u1ace\u1b00-\u1b04\u1b34-\u1b44\u1b50-\u1b59\u1b6b-\u1b73\u1b80-\u1b82\u1ba1-\u1bad\u1bb0-\u1bb9\u1be6-\u1bf3\u1c24-\u1c37\u1c40-\u1c49\u1c50-\u1c59\u1cd0-\u1cd2\u1cd4-\u1ce8\u1ced\u1cf4\u1cf7-\u1cf9\u1dc0-\u1dff\u203f\u2040\u2054\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua620-\ua629\ua66f\ua674-\ua67d\ua69e\ua69f\ua6f0\ua6f1\ua802\ua806\ua80b\ua823-\ua827\ua82c\ua880\ua881\ua8b4-\ua8c5\ua8d0-\ua8d9\ua8e0-\ua8f1\ua8ff-\ua909\ua926-\ua92d\ua947-\ua953\ua980-\ua983\ua9b3-\ua9c0\ua9d0-\ua9d9\ua9e5\ua9f0-\ua9f9\uaa29-\uaa36\uaa43\uaa4c\uaa4d\uaa50-\uaa59\uaa7b-\uaa7d\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uaaeb-\uaaef\uaaf5\uaaf6\uabe3-\uabea\uabec\uabed\uabf0-\uabf9\ufb1e\ufe00-\ufe0f\ufe20-\ufe2f\ufe33\ufe34\ufe4d-\ufe4f\uff10-\uff19\uff3f";

  // This file was generated. Do not modify manually!
  var nonASCIIidentifierStartChars = "\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u037f\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u052f\u0531-\u0556\u0559\u0560-\u0588\u05d0-\u05ea\u05ef-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u0860-\u086a\u0870-\u0887\u0889-\u088e\u08a0-\u08c9\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u09fc\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0af9\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c39\u0c3d\u0c58-\u0c5a\u0c5d\u0c60\u0c61\u0c80\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cdd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d04-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d54-\u0d56\u0d5f-\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e86-\u0e8a\u0e8c-\u0ea3\u0ea5\u0ea7-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f5\u13f8-\u13fd\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f8\u1700-\u1711\u171f-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1878\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191e\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19b0-\u19c9\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4c\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1c80-\u1c88\u1c90-\u1cba\u1cbd-\u1cbf\u1ce9-\u1cec\u1cee-\u1cf3\u1cf5\u1cf6\u1cfa\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2118-\u211d\u2124\u2126\u2128\u212a-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309b-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312f\u3131-\u318e\u31a0-\u31bf\u31f0-\u31ff\u3400-\u4dbf\u4e00-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua69d\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua7ca\ua7d0\ua7d1\ua7d3\ua7d5-\ua7d9\ua7f2-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua8fd\ua8fe\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\ua9e0-\ua9e4\ua9e6-\ua9ef\ua9fa-\ua9fe\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa7e-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uab30-\uab5a\uab5c-\uab69\uab70-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc";

  // These are a run-length and offset encoded representation of the
  // >0xffff code points that are a valid part of identifiers. The
  // offset starts at 0x10000, and each pair of numbers represents an
  // offset to the next range, and then a size of the range.

  // Reserved word lists for various dialects of the language

  var reservedWords = {
    3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",
    5: "class enum extends super const export import",
    6: "enum",
    strict: "implements interface let package private protected public static yield",
    strictBind: "eval arguments"
  };

  // And the keywords

  var ecma5AndLessKeywords = "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this";

  var keywords$1 = {
    5: ecma5AndLessKeywords,
    "5module": ecma5AndLessKeywords + " export import",
    6: ecma5AndLessKeywords + " const class extends export import super"
  };

  var keywordRelationalOperator = /^in(stanceof)?$/;

  // ## Character categories

  var nonASCIIidentifierStart = new RegExp("[" + nonASCIIidentifierStartChars + "]");
  var nonASCIIidentifier = new RegExp("[" + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "]");

  // This has a complexity linear to the value of the code. The
  // assumption is that looking up astral identifier characters is
  // rare.
  function isInAstralSet(code, set) {
    var pos = 0x10000;
    for (var i = 0; i < set.length; i += 2) {
      pos += set[i];
      if (pos > code) { return false }
      pos += set[i + 1];
      if (pos >= code) { return true }
    }
    return false
  }

  // Test whether a given character code starts an identifier.

  function isIdentifierStart(code, astral) {
    if (code < 65) { return code === 36 }
    if (code < 91) { return true }
    if (code < 97) { return code === 95 }
    if (code < 123) { return true }
    if (code <= 0xffff) { return code >= 0xaa && nonASCIIidentifierStart.test(String.fromCharCode(code)) }
    if (astral === false) { return false }
    return isInAstralSet(code, astralIdentifierStartCodes)
  }

  // Test whether a given character is part of an identifier.

  function isIdentifierChar(code, astral) {
    if (code < 48) { return code === 36 }
    if (code < 58) { return true }
    if (code < 65) { return false }
    if (code < 91) { return true }
    if (code < 97) { return code === 95 }
    if (code < 123) { return true }
    if (code <= 0xffff) { return code >= 0xaa && nonASCIIidentifier.test(String.fromCharCode(code)) }
    if (astral === false) { return false }
    return isInAstralSet(code, astralIdentifierStartCodes) || isInAstralSet(code, astralIdentifierCodes)
  }

  // ## Token types

  // The assignment of fine-grained, information-carrying type objects
  // allows the tokenizer to store the information it has about a
  // token in a way that is very cheap for the parser to look up.

  // All token type variables start with an underscore, to make them
  // easy to recognize.

  // The `beforeExpr` property is used to disambiguate between regular
  // expressions and divisions. It is set on all token types that can
  // be followed by an expression (thus, a slash after them would be a
  // regular expression).
  //
  // The `startsExpr` property is used to check if the token ends a
  // `yield` expression. It is set on all token types that either can
  // directly start an expression (like a quotation mark) or can
  // continue an expression (like the body of a string).
  //
  // `isLoop` marks a keyword as starting a loop, which is important
  // to know when parsing a label, in order to allow or disallow
  // continue jumps to that label.

  var TokenType = function TokenType(label, conf) {
    if ( conf === void 0 ) conf = {};

    this.label = label;
    this.keyword = conf.keyword;
    this.beforeExpr = !!conf.beforeExpr;
    this.startsExpr = !!conf.startsExpr;
    this.isLoop = !!conf.isLoop;
    this.isAssign = !!conf.isAssign;
    this.prefix = !!conf.prefix;
    this.postfix = !!conf.postfix;
    this.binop = conf.binop || null;
    this.updateContext = null;
  };

  function binop(name, prec) {
    return new TokenType(name, {beforeExpr: true, binop: prec})
  }
  var beforeExpr = {beforeExpr: true}, startsExpr = {startsExpr: true};

  // Map keyword names to token types.

  var keywords = {};

  // Succinct definitions of keyword token types
  function kw(name, options) {
    if ( options === void 0 ) options = {};

    options.keyword = name;
    return keywords[name] = new TokenType(name, options)
  }

  var types$1 = {
    num: new TokenType("num", startsExpr),
    regexp: new TokenType("regexp", startsExpr),
    string: new TokenType("string", startsExpr),
    name: new TokenType("name", startsExpr),
    privateId: new TokenType("privateId", startsExpr),
    eof: new TokenType("eof"),

    // Punctuation token types.
    bracketL: new TokenType("[", {beforeExpr: true, startsExpr: true}),
    bracketR: new TokenType("]"),
    braceL: new TokenType("{", {beforeExpr: true, startsExpr: true}),
    braceR: new TokenType("}"),
    parenL: new TokenType("(", {beforeExpr: true, startsExpr: true}),
    parenR: new TokenType(")"),
    comma: new TokenType(",", beforeExpr),
    semi: new TokenType(";", beforeExpr),
    colon: new TokenType(":", beforeExpr),
    dot: new TokenType("."),
    question: new TokenType("?", beforeExpr),
    questionDot: new TokenType("?."),
    arrow: new TokenType("=>", beforeExpr),
    template: new TokenType("template"),
    invalidTemplate: new TokenType("invalidTemplate"),
    ellipsis: new TokenType("...", beforeExpr),
    backQuote: new TokenType("`", startsExpr),
    dollarBraceL: new TokenType("${", {beforeExpr: true, startsExpr: true}),

    // Operators. These carry several kinds of properties to help the
    // parser use them properly (the presence of these properties is
    // what categorizes them as operators).
    //
    // `binop`, when present, specifies that this operator is a binary
    // operator, and will refer to its precedence.
    //
    // `prefix` and `postfix` mark the operator as a prefix or postfix
    // unary operator.
    //
    // `isAssign` marks all of `=`, `+=`, `-=` etcetera, which act as
    // binary operators with a very low precedence, that should result
    // in AssignmentExpression nodes.

    eq: new TokenType("=", {beforeExpr: true, isAssign: true}),
    assign: new TokenType("_=", {beforeExpr: true, isAssign: true}),
    incDec: new TokenType("++/--", {prefix: true, postfix: true, startsExpr: true}),
    prefix: new TokenType("!/~", {beforeExpr: true, prefix: true, startsExpr: true}),
    logicalOR: binop("||", 1),
    logicalAND: binop("&&", 2),
    bitwiseOR: binop("|", 3),
    bitwiseXOR: binop("^", 4),
    bitwiseAND: binop("&", 5),
    equality: binop("==/!=/===/!==", 6),
    relational: binop("</>/<=/>=", 7),
    bitShift: binop("<</>>/>>>", 8),
    plusMin: new TokenType("+/-", {beforeExpr: true, binop: 9, prefix: true, startsExpr: true}),
    modulo: binop("%", 10),
    star: binop("*", 10),
    slash: binop("/", 10),
    starstar: new TokenType("**", {beforeExpr: true}),
    coalesce: binop("??", 1),

    // Keyword token types.
    _break: kw("break"),
    _case: kw("case", beforeExpr),
    _catch: kw("catch"),
    _continue: kw("continue"),
    _debugger: kw("debugger"),
    _default: kw("default", beforeExpr),
    _do: kw("do", {isLoop: true, beforeExpr: true}),
    _else: kw("else", beforeExpr),
    _finally: kw("finally"),
    _for: kw("for", {isLoop: true}),
    _function: kw("function", startsExpr),
    _if: kw("if"),
    _return: kw("return", beforeExpr),
    _switch: kw("switch"),
    _throw: kw("throw", beforeExpr),
    _try: kw("try"),
    _var: kw("var"),
    _const: kw("const"),
    _while: kw("while", {isLoop: true}),
    _with: kw("with"),
    _new: kw("new", {beforeExpr: true, startsExpr: true}),
    _this: kw("this", startsExpr),
    _super: kw("super", startsExpr),
    _class: kw("class", startsExpr),
    _extends: kw("extends", beforeExpr),
    _export: kw("export"),
    _import: kw("import", startsExpr),
    _null: kw("null", startsExpr),
    _true: kw("true", startsExpr),
    _false: kw("false", startsExpr),
    _in: kw("in", {beforeExpr: true, binop: 7}),
    _instanceof: kw("instanceof", {beforeExpr: true, binop: 7}),
    _typeof: kw("typeof", {beforeExpr: true, prefix: true, startsExpr: true}),
    _void: kw("void", {beforeExpr: true, prefix: true, startsExpr: true}),
    _delete: kw("delete", {beforeExpr: true, prefix: true, startsExpr: true})
  };

  // Matches a whole line break (where CRLF is considered a single
  // line break). Used to count lines.

  var lineBreak = /\r\n?|\n|\u2028|\u2029/;
  var lineBreakG = new RegExp(lineBreak.source, "g");

  function isNewLine(code) {
    return code === 10 || code === 13 || code === 0x2028 || code === 0x2029
  }

  function nextLineBreak(code, from, end) {
    if ( end === void 0 ) end = code.length;

    for (var i = from; i < end; i++) {
      var next = code.charCodeAt(i);
      if (isNewLine(next))
        { return i < end - 1 && next === 13 && code.charCodeAt(i + 1) === 10 ? i + 2 : i + 1 }
    }
    return -1
  }

  var nonASCIIwhitespace = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/;

  var skipWhiteSpace = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g;

  var ref = Object.prototype;
  var hasOwnProperty = ref.hasOwnProperty;
  var toString = ref.toString;

  var hasOwn = Object.hasOwn || (function (obj, propName) { return (
    hasOwnProperty.call(obj, propName)
  ); });

  var isArray = Array.isArray || (function (obj) { return (
    toString.call(obj) === "[object Array]"
  ); });

  function wordsRegexp(words) {
    return new RegExp("^(?:" + words.replace(/ /g, "|") + ")$")
  }

  function codePointToString(code) {
    // UTF-16 Decoding
    if (code <= 0xFFFF) { return String.fromCharCode(code) }
    code -= 0x10000;
    return String.fromCharCode((code >> 10) + 0xD800, (code & 1023) + 0xDC00)
  }

  var loneSurrogate = /(?:[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/;

  // These are used when `options.locations` is on, for the
  // `startLoc` and `endLoc` properties.

  var Position = function Position(line, col) {
    this.line = line;
    this.column = col;
  };

  Position.prototype.offset = function offset (n) {
    return new Position(this.line, this.column + n)
  };

  var SourceLocation = function SourceLocation(p, start, end) {
    this.start = start;
    this.end = end;
    if (p.sourceFile !== null) { this.source = p.sourceFile; }
  };

  // The `getLineInfo` function is mostly useful when the
  // `locations` option is off (for performance reasons) and you
  // want to find the line/column position for a given character
  // offset. `input` should be the code string that the offset refers
  // into.

  function getLineInfo(input, offset) {
    for (var line = 1, cur = 0;;) {
      var nextBreak = nextLineBreak(input, cur, offset);
      if (nextBreak < 0) { return new Position(line, offset - cur) }
      ++line;
      cur = nextBreak;
    }
  }

  // A second argument must be given to configure the parser process.
  // These options are recognized (only `ecmaVersion` is required):

  var defaultOptions = {
    // `ecmaVersion` indicates the ECMAScript version to parse. Must be
    // either 3, 5, 6 (or 2015), 7 (2016), 8 (2017), 9 (2018), 10
    // (2019), 11 (2020), 12 (2021), 13 (2022), 14 (2023), or `"latest"`
    // (the latest version the library supports). This influences
    // support for strict mode, the set of reserved words, and support
    // for new syntax features.
    ecmaVersion: null,
    // `sourceType` indicates the mode the code should be parsed in.
    // Can be either `"script"` or `"module"`. This influences global
    // strict mode and parsing of `import` and `export` declarations.
    sourceType: "script",
    // `onInsertedSemicolon` can be a callback that will be called
    // when a semicolon is automatically inserted. It will be passed
    // the position of the comma as an offset, and if `locations` is
    // enabled, it is given the location as a `{line, column}` object
    // as second argument.
    onInsertedSemicolon: null,
    // `onTrailingComma` is similar to `onInsertedSemicolon`, but for
    // trailing commas.
    onTrailingComma: null,
    // By default, reserved words are only enforced if ecmaVersion >= 5.
    // Set `allowReserved` to a boolean value to explicitly turn this on
    // an off. When this option has the value "never", reserved words
    // and keywords can also not be used as property names.
    allowReserved: null,
    // When enabled, a return at the top level is not considered an
    // error.
    allowReturnOutsideFunction: false,
    // When enabled, import/export statements are not constrained to
    // appearing at the top of the program, and an import.meta expression
    // in a script isn't considered an error.
    allowImportExportEverywhere: false,
    // By default, await identifiers are allowed to appear at the top-level scope only if ecmaVersion >= 2022.
    // When enabled, await identifiers are allowed to appear at the top-level scope,
    // but they are still not allowed in non-async functions.
    allowAwaitOutsideFunction: null,
    // When enabled, super identifiers are not constrained to
    // appearing in methods and do not raise an error when they appear elsewhere.
    allowSuperOutsideMethod: null,
    // When enabled, hashbang directive in the beginning of file is
    // allowed and treated as a line comment. Enabled by default when
    // `ecmaVersion` >= 2023.
    allowHashBang: false,
    // By default, the parser will verify that private properties are
    // only used in places where they are valid and have been declared.
    // Set this to false to turn such checks off.
    checkPrivateFields: true,
    // When `locations` is on, `loc` properties holding objects with
    // `start` and `end` properties in `{line, column}` form (with
    // line being 1-based and column 0-based) will be attached to the
    // nodes.
    locations: false,
    // A function can be passed as `onToken` option, which will
    // cause Acorn to call that function with object in the same
    // format as tokens returned from `tokenizer().getToken()`. Note
    // that you are not allowed to call the parser from the
    // callback—that will corrupt its internal state.
    onToken: null,
    // A function can be passed as `onComment` option, which will
    // cause Acorn to call that function with `(block, text, start,
    // end)` parameters whenever a comment is skipped. `block` is a
    // boolean indicating whether this is a block (`/* */`) comment,
    // `text` is the content of the comment, and `start` and `end` are
    // character offsets that denote the start and end of the comment.
    // When the `locations` option is on, two more parameters are
    // passed, the full `{line, column}` locations of the start and
    // end of the comments. Note that you are not allowed to call the
    // parser from the callback—that will corrupt its internal state.
    onComment: null,
    // Nodes have their start and end characters offsets recorded in
    // `start` and `end` properties (directly on the node, rather than
    // the `loc` object, which holds line/column data. To also add a
    // [semi-standardized][range] `range` property holding a `[start,
    // end]` array with the same numbers, set the `ranges` option to
    // `true`.
    //
    // [range]: https://bugzilla.mozilla.org/show_bug.cgi?id=745678
    ranges: false,
    // It is possible to parse multiple files into a single AST by
    // passing the tree produced by parsing the first file as
    // `program` option in subsequent parses. This will add the
    // toplevel forms of the parsed file to the `Program` (top) node
    // of an existing parse tree.
    program: null,
    // When `locations` is on, you can pass this to record the source
    // file in every node's `loc` object.
    sourceFile: null,
    // This value, if given, is stored in every node, whether
    // `locations` is on or off.
    directSourceFile: null,
    // When enabled, parenthesized expressions are represented by
    // (non-standard) ParenthesizedExpression nodes
    preserveParens: false
  };

  // Interpret and default an options object

  var warnedAboutEcmaVersion = false;

  function getOptions(opts) {
    var options = {};

    for (var opt in defaultOptions)
      { options[opt] = opts && hasOwn(opts, opt) ? opts[opt] : defaultOptions[opt]; }

    if (options.ecmaVersion === "latest") {
      options.ecmaVersion = 1e8;
    } else if (options.ecmaVersion == null) {
      if (!warnedAboutEcmaVersion && typeof console === "object" && console.warn) {
        warnedAboutEcmaVersion = true;
        console.warn("Since Acorn 8.0.0, options.ecmaVersion is required.\nDefaulting to 2020, but this will stop working in the future.");
      }
      options.ecmaVersion = 11;
    } else if (options.ecmaVersion >= 2015) {
      options.ecmaVersion -= 2009;
    }

    if (options.allowReserved == null)
      { options.allowReserved = options.ecmaVersion < 5; }

    if (!opts || opts.allowHashBang == null)
      { options.allowHashBang = options.ecmaVersion >= 14; }

    if (isArray(options.onToken)) {
      var tokens = options.onToken;
      options.onToken = function (token) { return tokens.push(token); };
    }
    if (isArray(options.onComment))
      { options.onComment = pushComment(options, options.onComment); }

    return options
  }

  function pushComment(options, array) {
    return function(block, text, start, end, startLoc, endLoc) {
      var comment = {
        type: block ? "Block" : "Line",
        value: text,
        start: start,
        end: end
      };
      if (options.locations)
        { comment.loc = new SourceLocation(this, startLoc, endLoc); }
      if (options.ranges)
        { comment.range = [start, end]; }
      array.push(comment);
    }
  }

  // Each scope gets a bitset that may contain these flags
  var
      SCOPE_TOP = 1,
      SCOPE_FUNCTION = 2,
      SCOPE_ASYNC = 4,
      SCOPE_GENERATOR = 8,
      SCOPE_ARROW = 16,
      SCOPE_SIMPLE_CATCH = 32,
      SCOPE_SUPER = 64,
      SCOPE_DIRECT_SUPER = 128,
      SCOPE_CLASS_STATIC_BLOCK = 256,
      SCOPE_VAR = SCOPE_TOP | SCOPE_FUNCTION | SCOPE_CLASS_STATIC_BLOCK;

  function functionFlags(async, generator) {
    return SCOPE_FUNCTION | (async ? SCOPE_ASYNC : 0) | (generator ? SCOPE_GENERATOR : 0)
  }

  // Used in checkLVal* and declareName to determine the type of a binding
  var
      BIND_NONE = 0, // Not a binding
      BIND_VAR = 1, // Var-style binding
      BIND_LEXICAL = 2, // Let- or const-style binding
      BIND_FUNCTION = 3, // Function declaration
      BIND_SIMPLE_CATCH = 4, // Simple (identifier pattern) catch binding
      BIND_OUTSIDE = 5; // Special case for function names as bound inside the function

  var Parser = function Parser(options, input, startPos) {
    this.options = options = getOptions(options);
    this.sourceFile = options.sourceFile;
    this.keywords = wordsRegexp(keywords$1[options.ecmaVersion >= 6 ? 6 : options.sourceType === "module" ? "5module" : 5]);
    var reserved = "";
    if (options.allowReserved !== true) {
      reserved = reservedWords[options.ecmaVersion >= 6 ? 6 : options.ecmaVersion === 5 ? 5 : 3];
      if (options.sourceType === "module") { reserved += " await"; }
    }
    this.reservedWords = wordsRegexp(reserved);
    var reservedStrict = (reserved ? reserved + " " : "") + reservedWords.strict;
    this.reservedWordsStrict = wordsRegexp(reservedStrict);
    this.reservedWordsStrictBind = wordsRegexp(reservedStrict + " " + reservedWords.strictBind);
    this.input = String(input);

    // Used to signal to callers of `readWord1` whether the word
    // contained any escape sequences. This is needed because words with
    // escape sequences must not be interpreted as keywords.
    this.containsEsc = false;

    // Set up token state

    // The current position of the tokenizer in the input.
    if (startPos) {
      this.pos = startPos;
      this.lineStart = this.input.lastIndexOf("\n", startPos - 1) + 1;
      this.curLine = this.input.slice(0, this.lineStart).split(lineBreak).length;
    } else {
      this.pos = this.lineStart = 0;
      this.curLine = 1;
    }

    // Properties of the current token:
    // Its type
    this.type = types$1.eof;
    // For tokens that include more information than their type, the value
    this.value = null;
    // Its start and end offset
    this.start = this.end = this.pos;
    // And, if locations are used, the {line, column} object
    // corresponding to those offsets
    this.startLoc = this.endLoc = this.curPosition();

    // Position information for the previous token
    this.lastTokEndLoc = this.lastTokStartLoc = null;
    this.lastTokStart = this.lastTokEnd = this.pos;

    // The context stack is used to superficially track syntactic
    // context to predict whether a regular expression is allowed in a
    // given position.
    this.context = this.initialContext();
    this.exprAllowed = true;

    // Figure out if it's a module code.
    this.inModule = options.sourceType === "module";
    this.strict = this.inModule || this.strictDirective(this.pos);

    // Used to signify the start of a potential arrow function
    this.potentialArrowAt = -1;
    this.potentialArrowInForAwait = false;

    // Positions to delayed-check that yield/await does not exist in default parameters.
    this.yieldPos = this.awaitPos = this.awaitIdentPos = 0;
    // Labels in scope.
    this.labels = [];
    // Thus-far undefined exports.
    this.undefinedExports = Object.create(null);

    // If enabled, skip leading hashbang line.
    if (this.pos === 0 && options.allowHashBang && this.input.slice(0, 2) === "#!")
      { this.skipLineComment(2); }

    // Scope tracking for duplicate variable names (see scope.js)
    this.scopeStack = [];
    this.enterScope(SCOPE_TOP);

    // For RegExp validation
    this.regexpState = null;

    // The stack of private names.
    // Each element has two properties: 'declared' and 'used'.
    // When it exited from the outermost class definition, all used private names must be declared.
    this.privateNameStack = [];
  };

  var prototypeAccessors = { inFunction: { configurable: true },inGenerator: { configurable: true },inAsync: { configurable: true },canAwait: { configurable: true },allowSuper: { configurable: true },allowDirectSuper: { configurable: true },treatFunctionsAsVar: { configurable: true },allowNewDotTarget: { configurable: true },inClassStaticBlock: { configurable: true } };

  Parser.prototype.parse = function parse () {
    var node = this.options.program || this.startNode();
    this.nextToken();
    return this.parseTopLevel(node)
  };

  prototypeAccessors.inFunction.get = function () { return (this.currentVarScope().flags & SCOPE_FUNCTION) > 0 };

  prototypeAccessors.inGenerator.get = function () { return (this.currentVarScope().flags & SCOPE_GENERATOR) > 0 && !this.currentVarScope().inClassFieldInit };

  prototypeAccessors.inAsync.get = function () { return (this.currentVarScope().flags & SCOPE_ASYNC) > 0 && !this.currentVarScope().inClassFieldInit };

  prototypeAccessors.canAwait.get = function () {
    for (var i = this.scopeStack.length - 1; i >= 0; i--) {
      var scope = this.scopeStack[i];
      if (scope.inClassFieldInit || scope.flags & SCOPE_CLASS_STATIC_BLOCK) { return false }
      if (scope.flags & SCOPE_FUNCTION) { return (scope.flags & SCOPE_ASYNC) > 0 }
    }
    return (this.inModule && this.options.ecmaVersion >= 13) || this.options.allowAwaitOutsideFunction
  };

  prototypeAccessors.allowSuper.get = function () {
    var ref = this.currentThisScope();
      var flags = ref.flags;
      var inClassFieldInit = ref.inClassFieldInit;
    return (flags & SCOPE_SUPER) > 0 || inClassFieldInit || this.options.allowSuperOutsideMethod
  };

  prototypeAccessors.allowDirectSuper.get = function () { return (this.currentThisScope().flags & SCOPE_DIRECT_SUPER) > 0 };

  prototypeAccessors.treatFunctionsAsVar.get = function () { return this.treatFunctionsAsVarInScope(this.currentScope()) };

  prototypeAccessors.allowNewDotTarget.get = function () {
    var ref = this.currentThisScope();
      var flags = ref.flags;
      var inClassFieldInit = ref.inClassFieldInit;
    return (flags & (SCOPE_FUNCTION | SCOPE_CLASS_STATIC_BLOCK)) > 0 || inClassFieldInit
  };

  prototypeAccessors.inClassStaticBlock.get = function () {
    return (this.currentVarScope().flags & SCOPE_CLASS_STATIC_BLOCK) > 0
  };

  Parser.extend = function extend () {
      var plugins = [], len = arguments.length;
      while ( len-- ) plugins[ len ] = arguments[ len ];

    var cls = this;
    for (var i = 0; i < plugins.length; i++) { cls = plugins[i](cls); }
    return cls
  };

  Parser.parse = function parse (input, options) {
    return new this(options, input).parse()
  };

  Parser.parseExpressionAt = function parseExpressionAt (input, pos, options) {
    var parser = new this(options, input, pos);
    parser.nextToken();
    return parser.parseExpression()
  };

  Parser.tokenizer = function tokenizer (input, options) {
    return new this(options, input)
  };

  Object.defineProperties( Parser.prototype, prototypeAccessors );

  var pp$9 = Parser.prototype;

  // ## Parser utilities

  var literal = /^(?:'((?:\\.|[^'\\])*?)'|"((?:\\.|[^"\\])*?)")/;
  pp$9.strictDirective = function(start) {
    if (this.options.ecmaVersion < 5) { return false }
    for (;;) {
      // Try to find string literal.
      skipWhiteSpace.lastIndex = start;
      start += skipWhiteSpace.exec(this.input)[0].length;
      var match = literal.exec(this.input.slice(start));
      if (!match) { return false }
      if ((match[1] || match[2]) === "use strict") {
        skipWhiteSpace.lastIndex = start + match[0].length;
        var spaceAfter = skipWhiteSpace.exec(this.input), end = spaceAfter.index + spaceAfter[0].length;
        var next = this.input.charAt(end);
        return next === ";" || next === "}" ||
          (lineBreak.test(spaceAfter[0]) &&
           !(/[(`.[+\-/*%<>=,?^&]/.test(next) || next === "!" && this.input.charAt(end + 1) === "="))
      }
      start += match[0].length;

      // Skip semicolon, if any.
      skipWhiteSpace.lastIndex = start;
      start += skipWhiteSpace.exec(this.input)[0].length;
      if (this.input[start] === ";")
        { start++; }
    }
  };

  // Predicate that tests whether the next token is of the given
  // type, and if yes, consumes it as a side effect.

  pp$9.eat = function(type) {
    if (this.type === type) {
      this.next();
      return true
    } else {
      return false
    }
  };

  // Tests whether parsed token is a contextual keyword.

  pp$9.isContextual = function(name) {
    return this.type === types$1.name && this.value === name && !this.containsEsc
  };

  // Consumes contextual keyword if possible.

  pp$9.eatContextual = function(name) {
    if (!this.isContextual(name)) { return false }
    this.next();
    return true
  };

  // Asserts that following token is given contextual keyword.

  pp$9.expectContextual = function(name) {
    if (!this.eatContextual(name)) { this.unexpected(); }
  };

  // Test whether a semicolon can be inserted at the current position.

  pp$9.canInsertSemicolon = function() {
    return this.type === types$1.eof ||
      this.type === types$1.braceR ||
      lineBreak.test(this.input.slice(this.lastTokEnd, this.start))
  };

  pp$9.insertSemicolon = function() {
    if (this.canInsertSemicolon()) {
      if (this.options.onInsertedSemicolon)
        { this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc); }
      return true
    }
  };

  // Consume a semicolon, or, failing that, see if we are allowed to
  // pretend that there is a semicolon at this position.

  pp$9.semicolon = function() {
    if (!this.eat(types$1.semi) && !this.insertSemicolon()) { this.unexpected(); }
  };

  pp$9.afterTrailingComma = function(tokType, notNext) {
    if (this.type === tokType) {
      if (this.options.onTrailingComma)
        { this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc); }
      if (!notNext)
        { this.next(); }
      return true
    }
  };

  // Expect a token of a given type. If found, consume it, otherwise,
  // raise an unexpected token error.

  pp$9.expect = function(type) {
    this.eat(type) || this.unexpected();
  };

  // Raise an unexpected token error.

  pp$9.unexpected = function(pos) {
    this.raise(pos != null ? pos : this.start, "Unexpected token");
  };

  var DestructuringErrors = function DestructuringErrors() {
    this.shorthandAssign =
    this.trailingComma =
    this.parenthesizedAssign =
    this.parenthesizedBind =
    this.doubleProto =
      -1;
  };

  pp$9.checkPatternErrors = function(refDestructuringErrors, isAssign) {
    if (!refDestructuringErrors) { return }
    if (refDestructuringErrors.trailingComma > -1)
      { this.raiseRecoverable(refDestructuringErrors.trailingComma, "Comma is not permitted after the rest element"); }
    var parens = isAssign ? refDestructuringErrors.parenthesizedAssign : refDestructuringErrors.parenthesizedBind;
    if (parens > -1) { this.raiseRecoverable(parens, isAssign ? "Assigning to rvalue" : "Parenthesized pattern"); }
  };

  pp$9.checkExpressionErrors = function(refDestructuringErrors, andThrow) {
    if (!refDestructuringErrors) { return false }
    var shorthandAssign = refDestructuringErrors.shorthandAssign;
    var doubleProto = refDestructuringErrors.doubleProto;
    if (!andThrow) { return shorthandAssign >= 0 || doubleProto >= 0 }
    if (shorthandAssign >= 0)
      { this.raise(shorthandAssign, "Shorthand property assignments are valid only in destructuring patterns"); }
    if (doubleProto >= 0)
      { this.raiseRecoverable(doubleProto, "Redefinition of __proto__ property"); }
  };

  pp$9.checkYieldAwaitInDefaultParams = function() {
    if (this.yieldPos && (!this.awaitPos || this.yieldPos < this.awaitPos))
      { this.raise(this.yieldPos, "Yield expression cannot be a default value"); }
    if (this.awaitPos)
      { this.raise(this.awaitPos, "Await expression cannot be a default value"); }
  };

  pp$9.isSimpleAssignTarget = function(expr) {
    if (expr.type === "ParenthesizedExpression")
      { return this.isSimpleAssignTarget(expr.expression) }
    return expr.type === "Identifier" || expr.type === "MemberExpression"
  };

  var pp$8 = Parser.prototype;

  // ### Statement parsing

  // Parse a program. Initializes the parser, reads any number of
  // statements, and wraps them in a Program node.  Optionally takes a
  // `program` argument.  If present, the statements will be appended
  // to its body instead of creating a new node.

  pp$8.parseTopLevel = function(node) {
    var exports = Object.create(null);
    if (!node.body) { node.body = []; }
    while (this.type !== types$1.eof) {
      var stmt = this.parseStatement(null, true, exports);
      node.body.push(stmt);
    }
    if (this.inModule)
      { for (var i = 0, list = Object.keys(this.undefinedExports); i < list.length; i += 1)
        {
          var name = list[i];

          this.raiseRecoverable(this.undefinedExports[name].start, ("Export '" + name + "' is not defined"));
        } }
    this.adaptDirectivePrologue(node.body);
    this.next();
    node.sourceType = this.options.sourceType;
    return this.finishNode(node, "Program")
  };

  var loopLabel = {kind: "loop"}, switchLabel = {kind: "switch"};

  pp$8.isLet = function(context) {
    if (this.options.ecmaVersion < 6 || !this.isContextual("let")) { return false }
    skipWhiteSpace.lastIndex = this.pos;
    var skip = skipWhiteSpace.exec(this.input);
    var next = this.pos + skip[0].length, nextCh = this.input.charCodeAt(next);
    // For ambiguous cases, determine if a LexicalDeclaration (or only a
    // Statement) is allowed here. If context is not empty then only a Statement
    // is allowed. However, `let [` is an explicit negative lookahead for
    // ExpressionStatement, so special-case it first.
    if (nextCh === 91 || nextCh === 92) { return true } // '[', '/'
    if (context) { return false }

    if (nextCh === 123 || nextCh > 0xd7ff && nextCh < 0xdc00) { return true } // '{', astral
    if (isIdentifierStart(nextCh, true)) {
      var pos = next + 1;
      while (isIdentifierChar(nextCh = this.input.charCodeAt(pos), true)) { ++pos; }
      if (nextCh === 92 || nextCh > 0xd7ff && nextCh < 0xdc00) { return true }
      var ident = this.input.slice(next, pos);
      if (!keywordRelationalOperator.test(ident)) { return true }
    }
    return false
  };

  // check 'async [no LineTerminator here] function'
  // - 'async /*foo*/ function' is OK.
  // - 'async /*\n*/ function' is invalid.
  pp$8.isAsyncFunction = function() {
    if (this.options.ecmaVersion < 8 || !this.isContextual("async"))
      { return false }

    skipWhiteSpace.lastIndex = this.pos;
    var skip = skipWhiteSpace.exec(this.input);
    var next = this.pos + skip[0].length, after;
    return !lineBreak.test(this.input.slice(this.pos, next)) &&
      this.input.slice(next, next + 8) === "function" &&
      (next + 8 === this.input.length ||
       !(isIdentifierChar(after = this.input.charCodeAt(next + 8)) || after > 0xd7ff && after < 0xdc00))
  };

  // Parse a single statement.
  //
  // If expecting a statement and finding a slash operator, parse a
  // regular expression literal. This is to handle cases like
  // `if (foo) /blah/.exec(foo)`, where looking at the previous token
  // does not help.

  pp$8.parseStatement = function(context, topLevel, exports) {
    var starttype = this.type, node = this.startNode(), kind;

    if (this.isLet(context)) {
      starttype = types$1._var;
      kind = "let";
    }

    // Most types of statements are recognized by the keyword they
    // start with. Many are trivial to parse, some require a bit of
    // complexity.

    switch (starttype) {
    case types$1._break: case types$1._continue: return this.parseBreakContinueStatement(node, starttype.keyword)
    case types$1._debugger: return this.parseDebuggerStatement(node)
    case types$1._do: return this.parseDoStatement(node)
    case types$1._for: return this.parseForStatement(node)
    case types$1._function:
      // Function as sole body of either an if statement or a labeled statement
      // works, but not when it is part of a labeled statement that is the sole
      // body of an if statement.
      if ((context && (this.strict || context !== "if" && context !== "label")) && this.options.ecmaVersion >= 6) { this.unexpected(); }
      return this.parseFunctionStatement(node, false, !context)
    case types$1._class:
      if (context) { this.unexpected(); }
      return this.parseClass(node, true)
    case types$1._if: return this.parseIfStatement(node)
    case types$1._return: return this.parseReturnStatement(node)
    case types$1._switch: return this.parseSwitchStatement(node)
    case types$1._throw: return this.parseThrowStatement(node)
    case types$1._try: return this.parseTryStatement(node)
    case types$1._const: case types$1._var:
      kind = kind || this.value;
      if (context && kind !== "var") { this.unexpected(); }
      return this.parseVarStatement(node, kind)
    case types$1._while: return this.parseWhileStatement(node)
    case types$1._with: return this.parseWithStatement(node)
    case types$1.braceL: return this.parseBlock(true, node)
    case types$1.semi: return this.parseEmptyStatement(node)
    case types$1._export:
    case types$1._import:
      if (this.options.ecmaVersion > 10 && starttype === types$1._import) {
        skipWhiteSpace.lastIndex = this.pos;
        var skip = skipWhiteSpace.exec(this.input);
        var next = this.pos + skip[0].length, nextCh = this.input.charCodeAt(next);
        if (nextCh === 40 || nextCh === 46) // '(' or '.'
          { return this.parseExpressionStatement(node, this.parseExpression()) }
      }

      if (!this.options.allowImportExportEverywhere) {
        if (!topLevel)
          { this.raise(this.start, "'import' and 'export' may only appear at the top level"); }
        if (!this.inModule)
          { this.raise(this.start, "'import' and 'export' may appear only with 'sourceType: module'"); }
      }
      return starttype === types$1._import ? this.parseImport(node) : this.parseExport(node, exports)

      // If the statement does not start with a statement keyword or a
      // brace, it's an ExpressionStatement or LabeledStatement. We
      // simply start parsing an expression, and afterwards, if the
      // next token is a colon and the expression was a simple
      // Identifier node, we switch to interpreting it as a label.
    default:
      if (this.isAsyncFunction()) {
        if (context) { this.unexpected(); }
        this.next();
        return this.parseFunctionStatement(node, true, !context)
      }

      var maybeName = this.value, expr = this.parseExpression();
      if (starttype === types$1.name && expr.type === "Identifier" && this.eat(types$1.colon))
        { return this.parseLabeledStatement(node, maybeName, expr, context) }
      else { return this.parseExpressionStatement(node, expr) }
    }
  };

  pp$8.parseBreakContinueStatement = function(node, keyword) {
    var isBreak = keyword === "break";
    this.next();
    if (this.eat(types$1.semi) || this.insertSemicolon()) { node.label = null; }
    else if (this.type !== types$1.name) { this.unexpected(); }
    else {
      node.label = this.parseIdent();
      this.semicolon();
    }

    // Verify that there is an actual destination to break or
    // continue to.
    var i = 0;
    for (; i < this.labels.length; ++i) {
      var lab = this.labels[i];
      if (node.label == null || lab.name === node.label.name) {
        if (lab.kind != null && (isBreak || lab.kind === "loop")) { break }
        if (node.label && isBreak) { break }
      }
    }
    if (i === this.labels.length) { this.raise(node.start, "Unsyntactic " + keyword); }
    return this.finishNode(node, isBreak ? "BreakStatement" : "ContinueStatement")
  };

  pp$8.parseDebuggerStatement = function(node) {
    this.next();
    this.semicolon();
    return this.finishNode(node, "DebuggerStatement")
  };

  pp$8.parseDoStatement = function(node) {
    this.next();
    this.labels.push(loopLabel);
    node.body = this.parseStatement("do");
    this.labels.pop();
    this.expect(types$1._while);
    node.test = this.parseParenExpression();
    if (this.options.ecmaVersion >= 6)
      { this.eat(types$1.semi); }
    else
      { this.semicolon(); }
    return this.finishNode(node, "DoWhileStatement")
  };

  // Disambiguating between a `for` and a `for`/`in` or `for`/`of`
  // loop is non-trivial. Basically, we have to parse the init `var`
  // statement or expression, disallowing the `in` operator (see
  // the second parameter to `parseExpression`), and then check
  // whether the next token is `in` or `of`. When there is no init
  // part (semicolon immediately after the opening parenthesis), it
  // is a regular `for` loop.

  pp$8.parseForStatement = function(node) {
    this.next();
    var awaitAt = (this.options.ecmaVersion >= 9 && this.canAwait && this.eatContextual("await")) ? this.lastTokStart : -1;
    this.labels.push(loopLabel);
    this.enterScope(0);
    this.expect(types$1.parenL);
    if (this.type === types$1.semi) {
      if (awaitAt > -1) { this.unexpected(awaitAt); }
      return this.parseFor(node, null)
    }
    var isLet = this.isLet();
    if (this.type === types$1._var || this.type === types$1._const || isLet) {
      var init$1 = this.startNode(), kind = isLet ? "let" : this.value;
      this.next();
      this.parseVar(init$1, true, kind);
      this.finishNode(init$1, "VariableDeclaration");
      if ((this.type === types$1._in || (this.options.ecmaVersion >= 6 && this.isContextual("of"))) && init$1.declarations.length === 1) {
        if (this.options.ecmaVersion >= 9) {
          if (this.type === types$1._in) {
            if (awaitAt > -1) { this.unexpected(awaitAt); }
          } else { node.await = awaitAt > -1; }
        }
        return this.parseForIn(node, init$1)
      }
      if (awaitAt > -1) { this.unexpected(awaitAt); }
      return this.parseFor(node, init$1)
    }
    var startsWithLet = this.isContextual("let"), isForOf = false;
    var refDestructuringErrors = new DestructuringErrors;
    var init = this.parseExpression(awaitAt > -1 ? "await" : true, refDestructuringErrors);
    if (this.type === types$1._in || (isForOf = this.options.ecmaVersion >= 6 && this.isContextual("of"))) {
      if (this.options.ecmaVersion >= 9) {
        if (this.type === types$1._in) {
          if (awaitAt > -1) { this.unexpected(awaitAt); }
        } else { node.await = awaitAt > -1; }
      }
      if (startsWithLet && isForOf) { this.raise(init.start, "The left-hand side of a for-of loop may not start with 'let'."); }
      this.toAssignable(init, false, refDestructuringErrors);
      this.checkLValPattern(init);
      return this.parseForIn(node, init)
    } else {
      this.checkExpressionErrors(refDestructuringErrors, true);
    }
    if (awaitAt > -1) { this.unexpected(awaitAt); }
    return this.parseFor(node, init)
  };

  pp$8.parseFunctionStatement = function(node, isAsync, declarationPosition) {
    this.next();
    return this.parseFunction(node, FUNC_STATEMENT | (declarationPosition ? 0 : FUNC_HANGING_STATEMENT), false, isAsync)
  };

  pp$8.parseIfStatement = function(node) {
    this.next();
    node.test = this.parseParenExpression();
    // allow function declarations in branches, but only in non-strict mode
    node.consequent = this.parseStatement("if");
    node.alternate = this.eat(types$1._else) ? this.parseStatement("if") : null;
    return this.finishNode(node, "IfStatement")
  };

  pp$8.parseReturnStatement = function(node) {
    if (!this.inFunction && !this.options.allowReturnOutsideFunction)
      { this.raise(this.start, "'return' outside of function"); }
    this.next();

    // In `return` (and `break`/`continue`), the keywords with
    // optional arguments, we eagerly look for a semicolon or the
    // possibility to insert one.

    if (this.eat(types$1.semi) || this.insertSemicolon()) { node.argument = null; }
    else { node.argument = this.parseExpression(); this.semicolon(); }
    return this.finishNode(node, "ReturnStatement")
  };

  pp$8.parseSwitchStatement = function(node) {
    this.next();
    node.discriminant = this.parseParenExpression();
    node.cases = [];
    this.expect(types$1.braceL);
    this.labels.push(switchLabel);
    this.enterScope(0);

    // Statements under must be grouped (by label) in SwitchCase
    // nodes. `cur` is used to keep the node that we are currently
    // adding statements to.

    var cur;
    for (var sawDefault = false; this.type !== types$1.braceR;) {
      if (this.type === types$1._case || this.type === types$1._default) {
        var isCase = this.type === types$1._case;
        if (cur) { this.finishNode(cur, "SwitchCase"); }
        node.cases.push(cur = this.startNode());
        cur.consequent = [];
        this.next();
        if (isCase) {
          cur.test = this.parseExpression();
        } else {
          if (sawDefault) { this.raiseRecoverable(this.lastTokStart, "Multiple default clauses"); }
          sawDefault = true;
          cur.test = null;
        }
        this.expect(types$1.colon);
      } else {
        if (!cur) { this.unexpected(); }
        cur.consequent.push(this.parseStatement(null));
      }
    }
    this.exitScope();
    if (cur) { this.finishNode(cur, "SwitchCase"); }
    this.next(); // Closing brace
    this.labels.pop();
    return this.finishNode(node, "SwitchStatement")
  };

  pp$8.parseThrowStatement = function(node) {
    this.next();
    if (lineBreak.test(this.input.slice(this.lastTokEnd, this.start)))
      { this.raise(this.lastTokEnd, "Illegal newline after throw"); }
    node.argument = this.parseExpression();
    this.semicolon();
    return this.finishNode(node, "ThrowStatement")
  };

  // Reused empty array added for node fields that are always empty.

  var empty$1 = [];

  pp$8.parseCatchClauseParam = function() {
    var param = this.parseBindingAtom();
    var simple = param.type === "Identifier";
    this.enterScope(simple ? SCOPE_SIMPLE_CATCH : 0);
    this.checkLValPattern(param, simple ? BIND_SIMPLE_CATCH : BIND_LEXICAL);
    this.expect(types$1.parenR);

    return param
  };

  pp$8.parseTryStatement = function(node) {
    this.next();
    node.block = this.parseBlock();
    node.handler = null;
    if (this.type === types$1._catch) {
      var clause = this.startNode();
      this.next();
      if (this.eat(types$1.parenL)) {
        clause.param = this.parseCatchClauseParam();
      } else {
        if (this.options.ecmaVersion < 10) { this.unexpected(); }
        clause.param = null;
        this.enterScope(0);
      }
      clause.body = this.parseBlock(false);
      this.exitScope();
      node.handler = this.finishNode(clause, "CatchClause");
    }
    node.finalizer = this.eat(types$1._finally) ? this.parseBlock() : null;
    if (!node.handler && !node.finalizer)
      { this.raise(node.start, "Missing catch or finally clause"); }
    return this.finishNode(node, "TryStatement")
  };

  pp$8.parseVarStatement = function(node, kind, allowMissingInitializer) {
    this.next();
    this.parseVar(node, false, kind, allowMissingInitializer);
    this.semicolon();
    return this.finishNode(node, "VariableDeclaration")
  };

  pp$8.parseWhileStatement = function(node) {
    this.next();
    node.test = this.parseParenExpression();
    this.labels.push(loopLabel);
    node.body = this.parseStatement("while");
    this.labels.pop();
    return this.finishNode(node, "WhileStatement")
  };

  pp$8.parseWithStatement = function(node) {
    if (this.strict) { this.raise(this.start, "'with' in strict mode"); }
    this.next();
    node.object = this.parseParenExpression();
    node.body = this.parseStatement("with");
    return this.finishNode(node, "WithStatement")
  };

  pp$8.parseEmptyStatement = function(node) {
    this.next();
    return this.finishNode(node, "EmptyStatement")
  };

  pp$8.parseLabeledStatement = function(node, maybeName, expr, context) {
    for (var i$1 = 0, list = this.labels; i$1 < list.length; i$1 += 1)
      {
      var label = list[i$1];

      if (label.name === maybeName)
        { this.raise(expr.start, "Label '" + maybeName + "' is already declared");
    } }
    var kind = this.type.isLoop ? "loop" : this.type === types$1._switch ? "switch" : null;
    for (var i = this.labels.length - 1; i >= 0; i--) {
      var label$1 = this.labels[i];
      if (label$1.statementStart === node.start) {
        // Update information about previous labels on this node
        label$1.statementStart = this.start;
        label$1.kind = kind;
      } else { break }
    }
    this.labels.push({name: maybeName, kind: kind, statementStart: this.start});
    node.body = this.parseStatement(context ? context.indexOf("label") === -1 ? context + "label" : context : "label");
    this.labels.pop();
    node.label = expr;
    return this.finishNode(node, "LabeledStatement")
  };

  pp$8.parseExpressionStatement = function(node, expr) {
    node.expression = expr;
    this.semicolon();
    return this.finishNode(node, "ExpressionStatement")
  };

  // Parse a semicolon-enclosed block of statements, handling `"use
  // strict"` declarations when `allowStrict` is true (used for
  // function bodies).

  pp$8.parseBlock = function(createNewLexicalScope, node, exitStrict) {
    if ( createNewLexicalScope === void 0 ) createNewLexicalScope = true;
    if ( node === void 0 ) node = this.startNode();

    node.body = [];
    this.expect(types$1.braceL);
    if (createNewLexicalScope) { this.enterScope(0); }
    while (this.type !== types$1.braceR) {
      var stmt = this.parseStatement(null);
      node.body.push(stmt);
    }
    if (exitStrict) { this.strict = false; }
    this.next();
    if (createNewLexicalScope) { this.exitScope(); }
    return this.finishNode(node, "BlockStatement")
  };

  // Parse a regular `for` loop. The disambiguation code in
  // `parseStatement` will already have parsed the init statement or
  // expression.

  pp$8.parseFor = function(node, init) {
    node.init = init;
    this.expect(types$1.semi);
    node.test = this.type === types$1.semi ? null : this.parseExpression();
    this.expect(types$1.semi);
    node.update = this.type === types$1.parenR ? null : this.parseExpression();
    this.expect(types$1.parenR);
    node.body = this.parseStatement("for");
    this.exitScope();
    this.labels.pop();
    return this.finishNode(node, "ForStatement")
  };

  // Parse a `for`/`in` and `for`/`of` loop, which are almost
  // same from parser's perspective.

  pp$8.parseForIn = function(node, init) {
    var isForIn = this.type === types$1._in;
    this.next();

    if (
      init.type === "VariableDeclaration" &&
      init.declarations[0].init != null &&
      (
        !isForIn ||
        this.options.ecmaVersion < 8 ||
        this.strict ||
        init.kind !== "var" ||
        init.declarations[0].id.type !== "Identifier"
      )
    ) {
      this.raise(
        init.start,
        ((isForIn ? "for-in" : "for-of") + " loop variable declaration may not have an initializer")
      );
    }
    node.left = init;
    node.right = isForIn ? this.parseExpression() : this.parseMaybeAssign();
    this.expect(types$1.parenR);
    node.body = this.parseStatement("for");
    this.exitScope();
    this.labels.pop();
    return this.finishNode(node, isForIn ? "ForInStatement" : "ForOfStatement")
  };

  // Parse a list of variable declarations.

  pp$8.parseVar = function(node, isFor, kind, allowMissingInitializer) {
    node.declarations = [];
    node.kind = kind;
    for (;;) {
      var decl = this.startNode();
      this.parseVarId(decl, kind);
      if (this.eat(types$1.eq)) {
        decl.init = this.parseMaybeAssign(isFor);
      } else if (!allowMissingInitializer && kind === "const" && !(this.type === types$1._in || (this.options.ecmaVersion >= 6 && this.isContextual("of")))) {
        this.unexpected();
      } else if (!allowMissingInitializer && decl.id.type !== "Identifier" && !(isFor && (this.type === types$1._in || this.isContextual("of")))) {
        this.raise(this.lastTokEnd, "Complex binding patterns require an initialization value");
      } else {
        decl.init = null;
      }
      node.declarations.push(this.finishNode(decl, "VariableDeclarator"));
      if (!this.eat(types$1.comma)) { break }
    }
    return node
  };

  pp$8.parseVarId = function(decl, kind) {
    decl.id = this.parseBindingAtom();
    this.checkLValPattern(decl.id, kind === "var" ? BIND_VAR : BIND_LEXICAL, false);
  };

  var FUNC_STATEMENT = 1, FUNC_HANGING_STATEMENT = 2, FUNC_NULLABLE_ID = 4;

  // Parse a function declaration or literal (depending on the
  // `statement & FUNC_STATEMENT`).

  // Remove `allowExpressionBody` for 7.0.0, as it is only called with false
  pp$8.parseFunction = function(node, statement, allowExpressionBody, isAsync, forInit) {
    this.initFunction(node);
    if (this.options.ecmaVersion >= 9 || this.options.ecmaVersion >= 6 && !isAsync) {
      if (this.type === types$1.star && (statement & FUNC_HANGING_STATEMENT))
        { this.unexpected(); }
      node.generator = this.eat(types$1.star);
    }
    if (this.options.ecmaVersion >= 8)
      { node.async = !!isAsync; }

    if (statement & FUNC_STATEMENT) {
      node.id = (statement & FUNC_NULLABLE_ID) && this.type !== types$1.name ? null : this.parseIdent();
      if (node.id && !(statement & FUNC_HANGING_STATEMENT))
        // If it is a regular function declaration in sloppy mode, then it is
        // subject to Annex B semantics (BIND_FUNCTION). Otherwise, the binding
        // mode depends on properties of the current scope (see
        // treatFunctionsAsVar).
        { this.checkLValSimple(node.id, (this.strict || node.generator || node.async) ? this.treatFunctionsAsVar ? BIND_VAR : BIND_LEXICAL : BIND_FUNCTION); }
    }

    var oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;
    this.yieldPos = 0;
    this.awaitPos = 0;
    this.awaitIdentPos = 0;
    this.enterScope(functionFlags(node.async, node.generator));

    if (!(statement & FUNC_STATEMENT))
      { node.id = this.type === types$1.name ? this.parseIdent() : null; }

    this.parseFunctionParams(node);
    this.parseFunctionBody(node, allowExpressionBody, false, forInit);

    this.yieldPos = oldYieldPos;
    this.awaitPos = oldAwaitPos;
    this.awaitIdentPos = oldAwaitIdentPos;
    return this.finishNode(node, (statement & FUNC_STATEMENT) ? "FunctionDeclaration" : "FunctionExpression")
  };

  pp$8.parseFunctionParams = function(node) {
    this.expect(types$1.parenL);
    node.params = this.parseBindingList(types$1.parenR, false, this.options.ecmaVersion >= 8);
    this.checkYieldAwaitInDefaultParams();
  };

  // Parse a class declaration or literal (depending on the
  // `isStatement` parameter).

  pp$8.parseClass = function(node, isStatement) {
    this.next();

    // ecma-262 14.6 Class Definitions
    // A class definition is always strict mode code.
    var oldStrict = this.strict;
    this.strict = true;

    this.parseClassId(node, isStatement);
    this.parseClassSuper(node);
    var privateNameMap = this.enterClassBody();
    var classBody = this.startNode();
    var hadConstructor = false;
    classBody.body = [];
    this.expect(types$1.braceL);
    while (this.type !== types$1.braceR) {
      var element = this.parseClassElement(node.superClass !== null);
      if (element) {
        classBody.body.push(element);
        if (element.type === "MethodDefinition" && element.kind === "constructor") {
          if (hadConstructor) { this.raiseRecoverable(element.start, "Duplicate constructor in the same class"); }
          hadConstructor = true;
        } else if (element.key && element.key.type === "PrivateIdentifier" && isPrivateNameConflicted(privateNameMap, element)) {
          this.raiseRecoverable(element.key.start, ("Identifier '#" + (element.key.name) + "' has already been declared"));
        }
      }
    }
    this.strict = oldStrict;
    this.next();
    node.body = this.finishNode(classBody, "ClassBody");
    this.exitClassBody();
    return this.finishNode(node, isStatement ? "ClassDeclaration" : "ClassExpression")
  };

  pp$8.parseClassElement = function(constructorAllowsSuper) {
    if (this.eat(types$1.semi)) { return null }

    var ecmaVersion = this.options.ecmaVersion;
    var node = this.startNode();
    var keyName = "";
    var isGenerator = false;
    var isAsync = false;
    var kind = "method";
    var isStatic = false;

    if (this.eatContextual("static")) {
      // Parse static init block
      if (ecmaVersion >= 13 && this.eat(types$1.braceL)) {
        this.parseClassStaticBlock(node);
        return node
      }
      if (this.isClassElementNameStart() || this.type === types$1.star) {
        isStatic = true;
      } else {
        keyName = "static";
      }
    }
    node.static = isStatic;
    if (!keyName && ecmaVersion >= 8 && this.eatContextual("async")) {
      if ((this.isClassElementNameStart() || this.type === types$1.star) && !this.canInsertSemicolon()) {
        isAsync = true;
      } else {
        keyName = "async";
      }
    }
    if (!keyName && (ecmaVersion >= 9 || !isAsync) && this.eat(types$1.star)) {
      isGenerator = true;
    }
    if (!keyName && !isAsync && !isGenerator) {
      var lastValue = this.value;
      if (this.eatContextual("get") || this.eatContextual("set")) {
        if (this.isClassElementNameStart()) {
          kind = lastValue;
        } else {
          keyName = lastValue;
        }
      }
    }

    // Parse element name
    if (keyName) {
      // 'async', 'get', 'set', or 'static' were not a keyword contextually.
      // The last token is any of those. Make it the element name.
      node.computed = false;
      node.key = this.startNodeAt(this.lastTokStart, this.lastTokStartLoc);
      node.key.name = keyName;
      this.finishNode(node.key, "Identifier");
    } else {
      this.parseClassElementName(node);
    }

    // Parse element value
    if (ecmaVersion < 13 || this.type === types$1.parenL || kind !== "method" || isGenerator || isAsync) {
      var isConstructor = !node.static && checkKeyName(node, "constructor");
      var allowsDirectSuper = isConstructor && constructorAllowsSuper;
      // Couldn't move this check into the 'parseClassMethod' method for backward compatibility.
      if (isConstructor && kind !== "method") { this.raise(node.key.start, "Constructor can't have get/set modifier"); }
      node.kind = isConstructor ? "constructor" : kind;
      this.parseClassMethod(node, isGenerator, isAsync, allowsDirectSuper);
    } else {
      this.parseClassField(node);
    }

    return node
  };

  pp$8.isClassElementNameStart = function() {
    return (
      this.type === types$1.name ||
      this.type === types$1.privateId ||
      this.type === types$1.num ||
      this.type === types$1.string ||
      this.type === types$1.bracketL ||
      this.type.keyword
    )
  };

  pp$8.parseClassElementName = function(element) {
    if (this.type === types$1.privateId) {
      if (this.value === "constructor") {
        this.raise(this.start, "Classes can't have an element named '#constructor'");
      }
      element.computed = false;
      element.key = this.parsePrivateIdent();
    } else {
      this.parsePropertyName(element);
    }
  };

  pp$8.parseClassMethod = function(method, isGenerator, isAsync, allowsDirectSuper) {
    // Check key and flags
    var key = method.key;
    if (method.kind === "constructor") {
      if (isGenerator) { this.raise(key.start, "Constructor can't be a generator"); }
      if (isAsync) { this.raise(key.start, "Constructor can't be an async method"); }
    } else if (method.static && checkKeyName(method, "prototype")) {
      this.raise(key.start, "Classes may not have a static property named prototype");
    }

    // Parse value
    var value = method.value = this.parseMethod(isGenerator, isAsync, allowsDirectSuper);

    // Check value
    if (method.kind === "get" && value.params.length !== 0)
      { this.raiseRecoverable(value.start, "getter should have no params"); }
    if (method.kind === "set" && value.params.length !== 1)
      { this.raiseRecoverable(value.start, "setter should have exactly one param"); }
    if (method.kind === "set" && value.params[0].type === "RestElement")
      { this.raiseRecoverable(value.params[0].start, "Setter cannot use rest params"); }

    return this.finishNode(method, "MethodDefinition")
  };

  pp$8.parseClassField = function(field) {
    if (checkKeyName(field, "constructor")) {
      this.raise(field.key.start, "Classes can't have a field named 'constructor'");
    } else if (field.static && checkKeyName(field, "prototype")) {
      this.raise(field.key.start, "Classes can't have a static field named 'prototype'");
    }

    if (this.eat(types$1.eq)) {
      // To raise SyntaxError if 'arguments' exists in the initializer.
      var scope = this.currentThisScope();
      var inClassFieldInit = scope.inClassFieldInit;
      scope.inClassFieldInit = true;
      field.value = this.parseMaybeAssign();
      scope.inClassFieldInit = inClassFieldInit;
    } else {
      field.value = null;
    }
    this.semicolon();

    return this.finishNode(field, "PropertyDefinition")
  };

  pp$8.parseClassStaticBlock = function(node) {
    node.body = [];

    var oldLabels = this.labels;
    this.labels = [];
    this.enterScope(SCOPE_CLASS_STATIC_BLOCK | SCOPE_SUPER);
    while (this.type !== types$1.braceR) {
      var stmt = this.parseStatement(null);
      node.body.push(stmt);
    }
    this.next();
    this.exitScope();
    this.labels = oldLabels;

    return this.finishNode(node, "StaticBlock")
  };

  pp$8.parseClassId = function(node, isStatement) {
    if (this.type === types$1.name) {
      node.id = this.parseIdent();
      if (isStatement)
        { this.checkLValSimple(node.id, BIND_LEXICAL, false); }
    } else {
      if (isStatement === true)
        { this.unexpected(); }
      node.id = null;
    }
  };

  pp$8.parseClassSuper = function(node) {
    node.superClass = this.eat(types$1._extends) ? this.parseExprSubscripts(null, false) : null;
  };

  pp$8.enterClassBody = function() {
    var element = {declared: Object.create(null), used: []};
    this.privateNameStack.push(element);
    return element.declared
  };

  pp$8.exitClassBody = function() {
    var ref = this.privateNameStack.pop();
    var declared = ref.declared;
    var used = ref.used;
    if (!this.options.checkPrivateFields) { return }
    var len = this.privateNameStack.length;
    var parent = len === 0 ? null : this.privateNameStack[len - 1];
    for (var i = 0; i < used.length; ++i) {
      var id = used[i];
      if (!hasOwn(declared, id.name)) {
        if (parent) {
          parent.used.push(id);
        } else {
          this.raiseRecoverable(id.start, ("Private field '#" + (id.name) + "' must be declared in an enclosing class"));
        }
      }
    }
  };

  function isPrivateNameConflicted(privateNameMap, element) {
    var name = element.key.name;
    var curr = privateNameMap[name];

    var next = "true";
    if (element.type === "MethodDefinition" && (element.kind === "get" || element.kind === "set")) {
      next = (element.static ? "s" : "i") + element.kind;
    }

    // `class { get #a(){}; static set #a(_){} }` is also conflict.
    if (
      curr === "iget" && next === "iset" ||
      curr === "iset" && next === "iget" ||
      curr === "sget" && next === "sset" ||
      curr === "sset" && next === "sget"
    ) {
      privateNameMap[name] = "true";
      return false
    } else if (!curr) {
      privateNameMap[name] = next;
      return false
    } else {
      return true
    }
  }

  function checkKeyName(node, name) {
    var computed = node.computed;
    var key = node.key;
    return !computed && (
      key.type === "Identifier" && key.name === name ||
      key.type === "Literal" && key.value === name
    )
  }

  // Parses module export declaration.

  pp$8.parseExportAllDeclaration = function(node, exports) {
    if (this.options.ecmaVersion >= 11) {
      if (this.eatContextual("as")) {
        node.exported = this.parseModuleExportName();
        this.checkExport(exports, node.exported, this.lastTokStart);
      } else {
        node.exported = null;
      }
    }
    this.expectContextual("from");
    if (this.type !== types$1.string) { this.unexpected(); }
    node.source = this.parseExprAtom();
    this.semicolon();
    return this.finishNode(node, "ExportAllDeclaration")
  };

  pp$8.parseExport = function(node, exports) {
    this.next();
    // export * from '...'
    if (this.eat(types$1.star)) {
      return this.parseExportAllDeclaration(node, exports)
    }
    if (this.eat(types$1._default)) { // export default ...
      this.checkExport(exports, "default", this.lastTokStart);
      node.declaration = this.parseExportDefaultDeclaration();
      return this.finishNode(node, "ExportDefaultDeclaration")
    }
    // export var|const|let|function|class ...
    if (this.shouldParseExportStatement()) {
      node.declaration = this.parseExportDeclaration(node);
      if (node.declaration.type === "VariableDeclaration")
        { this.checkVariableExport(exports, node.declaration.declarations); }
      else
        { this.checkExport(exports, node.declaration.id, node.declaration.id.start); }
      node.specifiers = [];
      node.source = null;
    } else { // export { x, y as z } [from '...']
      node.declaration = null;
      node.specifiers = this.parseExportSpecifiers(exports);
      if (this.eatContextual("from")) {
        if (this.type !== types$1.string) { this.unexpected(); }
        node.source = this.parseExprAtom();
      } else {
        for (var i = 0, list = node.specifiers; i < list.length; i += 1) {
          // check for keywords used as local names
          var spec = list[i];

          this.checkUnreserved(spec.local);
          // check if export is defined
          this.checkLocalExport(spec.local);

          if (spec.local.type === "Literal") {
            this.raise(spec.local.start, "A string literal cannot be used as an exported binding without `from`.");
          }
        }

        node.source = null;
      }
      this.semicolon();
    }
    return this.finishNode(node, "ExportNamedDeclaration")
  };

  pp$8.parseExportDeclaration = function(node) {
    return this.parseStatement(null)
  };

  pp$8.parseExportDefaultDeclaration = function() {
    var isAsync;
    if (this.type === types$1._function || (isAsync = this.isAsyncFunction())) {
      var fNode = this.startNode();
      this.next();
      if (isAsync) { this.next(); }
      return this.parseFunction(fNode, FUNC_STATEMENT | FUNC_NULLABLE_ID, false, isAsync)
    } else if (this.type === types$1._class) {
      var cNode = this.startNode();
      return this.parseClass(cNode, "nullableID")
    } else {
      var declaration = this.parseMaybeAssign();
      this.semicolon();
      return declaration
    }
  };

  pp$8.checkExport = function(exports, name, pos) {
    if (!exports) { return }
    if (typeof name !== "string")
      { name = name.type === "Identifier" ? name.name : name.value; }
    if (hasOwn(exports, name))
      { this.raiseRecoverable(pos, "Duplicate export '" + name + "'"); }
    exports[name] = true;
  };

  pp$8.checkPatternExport = function(exports, pat) {
    var type = pat.type;
    if (type === "Identifier")
      { this.checkExport(exports, pat, pat.start); }
    else if (type === "ObjectPattern")
      { for (var i = 0, list = pat.properties; i < list.length; i += 1)
        {
          var prop = list[i];

          this.checkPatternExport(exports, prop);
        } }
    else if (type === "ArrayPattern")
      { for (var i$1 = 0, list$1 = pat.elements; i$1 < list$1.length; i$1 += 1) {
        var elt = list$1[i$1];

          if (elt) { this.checkPatternExport(exports, elt); }
      } }
    else if (type === "Property")
      { this.checkPatternExport(exports, pat.value); }
    else if (type === "AssignmentPattern")
      { this.checkPatternExport(exports, pat.left); }
    else if (type === "RestElement")
      { this.checkPatternExport(exports, pat.argument); }
    else if (type === "ParenthesizedExpression")
      { this.checkPatternExport(exports, pat.expression); }
  };

  pp$8.checkVariableExport = function(exports, decls) {
    if (!exports) { return }
    for (var i = 0, list = decls; i < list.length; i += 1)
      {
      var decl = list[i];

      this.checkPatternExport(exports, decl.id);
    }
  };

  pp$8.shouldParseExportStatement = function() {
    return this.type.keyword === "var" ||
      this.type.keyword === "const" ||
      this.type.keyword === "class" ||
      this.type.keyword === "function" ||
      this.isLet() ||
      this.isAsyncFunction()
  };

  // Parses a comma-separated list of module exports.

  pp$8.parseExportSpecifier = function(exports) {
    var node = this.startNode();
    node.local = this.parseModuleExportName();

    node.exported = this.eatContextual("as") ? this.parseModuleExportName() : node.local;
    this.checkExport(
      exports,
      node.exported,
      node.exported.start
    );

    return this.finishNode(node, "ExportSpecifier")
  };

  pp$8.parseExportSpecifiers = function(exports) {
    var nodes = [], first = true;
    // export { x, y as z } [from '...']
    this.expect(types$1.braceL);
    while (!this.eat(types$1.braceR)) {
      if (!first) {
        this.expect(types$1.comma);
        if (this.afterTrailingComma(types$1.braceR)) { break }
      } else { first = false; }

      nodes.push(this.parseExportSpecifier(exports));
    }
    return nodes
  };

  // Parses import declaration.

  pp$8.parseImport = function(node) {
    this.next();

    // import '...'
    if (this.type === types$1.string) {
      node.specifiers = empty$1;
      node.source = this.parseExprAtom();
    } else {
      node.specifiers = this.parseImportSpecifiers();
      this.expectContextual("from");
      node.source = this.type === types$1.string ? this.parseExprAtom() : this.unexpected();
    }
    this.semicolon();
    return this.finishNode(node, "ImportDeclaration")
  };

  // Parses a comma-separated list of module imports.

  pp$8.parseImportSpecifier = function() {
    var node = this.startNode();
    node.imported = this.parseModuleExportName();

    if (this.eatContextual("as")) {
      node.local = this.parseIdent();
    } else {
      this.checkUnreserved(node.imported);
      node.local = node.imported;
    }
    this.checkLValSimple(node.local, BIND_LEXICAL);

    return this.finishNode(node, "ImportSpecifier")
  };

  pp$8.parseImportDefaultSpecifier = function() {
    // import defaultObj, { x, y as z } from '...'
    var node = this.startNode();
    node.local = this.parseIdent();
    this.checkLValSimple(node.local, BIND_LEXICAL);
    return this.finishNode(node, "ImportDefaultSpecifier")
  };

  pp$8.parseImportNamespaceSpecifier = function() {
    var node = this.startNode();
    this.next();
    this.expectContextual("as");
    node.local = this.parseIdent();
    this.checkLValSimple(node.local, BIND_LEXICAL);
    return this.finishNode(node, "ImportNamespaceSpecifier")
  };

  pp$8.parseImportSpecifiers = function() {
    var nodes = [], first = true;
    if (this.type === types$1.name) {
      nodes.push(this.parseImportDefaultSpecifier());
      if (!this.eat(types$1.comma)) { return nodes }
    }
    if (this.type === types$1.star) {
      nodes.push(this.parseImportNamespaceSpecifier());
      return nodes
    }
    this.expect(types$1.braceL);
    while (!this.eat(types$1.braceR)) {
      if (!first) {
        this.expect(types$1.comma);
        if (this.afterTrailingComma(types$1.braceR)) { break }
      } else { first = false; }

      nodes.push(this.parseImportSpecifier());
    }
    return nodes
  };

  pp$8.parseModuleExportName = function() {
    if (this.options.ecmaVersion >= 13 && this.type === types$1.string) {
      var stringLiteral = this.parseLiteral(this.value);
      if (loneSurrogate.test(stringLiteral.value)) {
        this.raise(stringLiteral.start, "An export name cannot include a lone surrogate.");
      }
      return stringLiteral
    }
    return this.parseIdent(true)
  };

  // Set `ExpressionStatement#directive` property for directive prologues.
  pp$8.adaptDirectivePrologue = function(statements) {
    for (var i = 0; i < statements.length && this.isDirectiveCandidate(statements[i]); ++i) {
      statements[i].directive = statements[i].expression.raw.slice(1, -1);
    }
  };
  pp$8.isDirectiveCandidate = function(statement) {
    return (
      this.options.ecmaVersion >= 5 &&
      statement.type === "ExpressionStatement" &&
      statement.expression.type === "Literal" &&
      typeof statement.expression.value === "string" &&
      // Reject parenthesized strings.
      (this.input[statement.start] === "\"" || this.input[statement.start] === "'")
    )
  };

  var pp$7 = Parser.prototype;

  // Convert existing expression atom to assignable pattern
  // if possible.

  pp$7.toAssignable = function(node, isBinding, refDestructuringErrors) {
    if (this.options.ecmaVersion >= 6 && node) {
      switch (node.type) {
      case "Identifier":
        if (this.inAsync && node.name === "await")
          { this.raise(node.start, "Cannot use 'await' as identifier inside an async function"); }
        break

      case "ObjectPattern":
      case "ArrayPattern":
      case "AssignmentPattern":
      case "RestElement":
        break

      case "ObjectExpression":
        node.type = "ObjectPattern";
        if (refDestructuringErrors) { this.checkPatternErrors(refDestructuringErrors, true); }
        for (var i = 0, list = node.properties; i < list.length; i += 1) {
          var prop = list[i];

        this.toAssignable(prop, isBinding);
          // Early error:
          //   AssignmentRestProperty[Yield, Await] :
          //     `...` DestructuringAssignmentTarget[Yield, Await]
          //
          //   It is a Syntax Error if |DestructuringAssignmentTarget| is an |ArrayLiteral| or an |ObjectLiteral|.
          if (
            prop.type === "RestElement" &&
            (prop.argument.type === "ArrayPattern" || prop.argument.type === "ObjectPattern")
          ) {
            this.raise(prop.argument.start, "Unexpected token");
          }
        }
        break

      case "Property":
        // AssignmentProperty has type === "Property"
        if (node.kind !== "init") { this.raise(node.key.start, "Object pattern can't contain getter or setter"); }
        this.toAssignable(node.value, isBinding);
        break

      case "ArrayExpression":
        node.type = "ArrayPattern";
        if (refDestructuringErrors) { this.checkPatternErrors(refDestructuringErrors, true); }
        this.toAssignableList(node.elements, isBinding);
        break

      case "SpreadElement":
        node.type = "RestElement";
        this.toAssignable(node.argument, isBinding);
        if (node.argument.type === "AssignmentPattern")
          { this.raise(node.argument.start, "Rest elements cannot have a default value"); }
        break

      case "AssignmentExpression":
        if (node.operator !== "=") { this.raise(node.left.end, "Only '=' operator can be used for specifying default value."); }
        node.type = "AssignmentPattern";
        delete node.operator;
        this.toAssignable(node.left, isBinding);
        break

      case "ParenthesizedExpression":
        this.toAssignable(node.expression, isBinding, refDestructuringErrors);
        break

      case "ChainExpression":
        this.raiseRecoverable(node.start, "Optional chaining cannot appear in left-hand side");
        break

      case "MemberExpression":
        if (!isBinding) { break }

      default:
        this.raise(node.start, "Assigning to rvalue");
      }
    } else if (refDestructuringErrors) { this.checkPatternErrors(refDestructuringErrors, true); }
    return node
  };

  // Convert list of expression atoms to binding list.

  pp$7.toAssignableList = function(exprList, isBinding) {
    var end = exprList.length;
    for (var i = 0; i < end; i++) {
      var elt = exprList[i];
      if (elt) { this.toAssignable(elt, isBinding); }
    }
    if (end) {
      var last = exprList[end - 1];
      if (this.options.ecmaVersion === 6 && isBinding && last && last.type === "RestElement" && last.argument.type !== "Identifier")
        { this.unexpected(last.argument.start); }
    }
    return exprList
  };

  // Parses spread element.

  pp$7.parseSpread = function(refDestructuringErrors) {
    var node = this.startNode();
    this.next();
    node.argument = this.parseMaybeAssign(false, refDestructuringErrors);
    return this.finishNode(node, "SpreadElement")
  };

  pp$7.parseRestBinding = function() {
    var node = this.startNode();
    this.next();

    // RestElement inside of a function parameter must be an identifier
    if (this.options.ecmaVersion === 6 && this.type !== types$1.name)
      { this.unexpected(); }

    node.argument = this.parseBindingAtom();

    return this.finishNode(node, "RestElement")
  };

  // Parses lvalue (assignable) atom.

  pp$7.parseBindingAtom = function() {
    if (this.options.ecmaVersion >= 6) {
      switch (this.type) {
      case types$1.bracketL:
        var node = this.startNode();
        this.next();
        node.elements = this.parseBindingList(types$1.bracketR, true, true);
        return this.finishNode(node, "ArrayPattern")

      case types$1.braceL:
        return this.parseObj(true)
      }
    }
    return this.parseIdent()
  };

  pp$7.parseBindingList = function(close, allowEmpty, allowTrailingComma, allowModifiers) {
    var elts = [], first = true;
    while (!this.eat(close)) {
      if (first) { first = false; }
      else { this.expect(types$1.comma); }
      if (allowEmpty && this.type === types$1.comma) {
        elts.push(null);
      } else if (allowTrailingComma && this.afterTrailingComma(close)) {
        break
      } else if (this.type === types$1.ellipsis) {
        var rest = this.parseRestBinding();
        this.parseBindingListItem(rest);
        elts.push(rest);
        if (this.type === types$1.comma) { this.raiseRecoverable(this.start, "Comma is not permitted after the rest element"); }
        this.expect(close);
        break
      } else {
        elts.push(this.parseAssignableListItem(allowModifiers));
      }
    }
    return elts
  };

  pp$7.parseAssignableListItem = function(allowModifiers) {
    var elem = this.parseMaybeDefault(this.start, this.startLoc);
    this.parseBindingListItem(elem);
    return elem
  };

  pp$7.parseBindingListItem = function(param) {
    return param
  };

  // Parses assignment pattern around given atom if possible.

  pp$7.parseMaybeDefault = function(startPos, startLoc, left) {
    left = left || this.parseBindingAtom();
    if (this.options.ecmaVersion < 6 || !this.eat(types$1.eq)) { return left }
    var node = this.startNodeAt(startPos, startLoc);
    node.left = left;
    node.right = this.parseMaybeAssign();
    return this.finishNode(node, "AssignmentPattern")
  };

  // The following three functions all verify that a node is an lvalue —
  // something that can be bound, or assigned to. In order to do so, they perform
  // a variety of checks:
  //
  // - Check that none of the bound/assigned-to identifiers are reserved words.
  // - Record name declarations for bindings in the appropriate scope.
  // - Check duplicate argument names, if checkClashes is set.
  //
  // If a complex binding pattern is encountered (e.g., object and array
  // destructuring), the entire pattern is recursively checked.
  //
  // There are three versions of checkLVal*() appropriate for different
  // circumstances:
  //
  // - checkLValSimple() shall be used if the syntactic construct supports
  //   nothing other than identifiers and member expressions. Parenthesized
  //   expressions are also correctly handled. This is generally appropriate for
  //   constructs for which the spec says
  //
  //   > It is a Syntax Error if AssignmentTargetType of [the production] is not
  //   > simple.
  //
  //   It is also appropriate for checking if an identifier is valid and not
  //   defined elsewhere, like import declarations or function/class identifiers.
  //
  //   Examples where this is used include:
  //     a += …;
  //     import a from '…';
  //   where a is the node to be checked.
  //
  // - checkLValPattern() shall be used if the syntactic construct supports
  //   anything checkLValSimple() supports, as well as object and array
  //   destructuring patterns. This is generally appropriate for constructs for
  //   which the spec says
  //
  //   > It is a Syntax Error if [the production] is neither an ObjectLiteral nor
  //   > an ArrayLiteral and AssignmentTargetType of [the production] is not
  //   > simple.
  //
  //   Examples where this is used include:
  //     (a = …);
  //     const a = …;
  //     try { … } catch (a) { … }
  //   where a is the node to be checked.
  //
  // - checkLValInnerPattern() shall be used if the syntactic construct supports
  //   anything checkLValPattern() supports, as well as default assignment
  //   patterns, rest elements, and other constructs that may appear within an
  //   object or array destructuring pattern.
  //
  //   As a special case, function parameters also use checkLValInnerPattern(),
  //   as they also support defaults and rest constructs.
  //
  // These functions deliberately support both assignment and binding constructs,
  // as the logic for both is exceedingly similar. If the node is the target of
  // an assignment, then bindingType should be set to BIND_NONE. Otherwise, it
  // should be set to the appropriate BIND_* constant, like BIND_VAR or
  // BIND_LEXICAL.
  //
  // If the function is called with a non-BIND_NONE bindingType, then
  // additionally a checkClashes object may be specified to allow checking for
  // duplicate argument names. checkClashes is ignored if the provided construct
  // is an assignment (i.e., bindingType is BIND_NONE).

  pp$7.checkLValSimple = function(expr, bindingType, checkClashes) {
    if ( bindingType === void 0 ) bindingType = BIND_NONE;

    var isBind = bindingType !== BIND_NONE;

    switch (expr.type) {
    case "Identifier":
      if (this.strict && this.reservedWordsStrictBind.test(expr.name))
        { this.raiseRecoverable(expr.start, (isBind ? "Binding " : "Assigning to ") + expr.name + " in strict mode"); }
      if (isBind) {
        if (bindingType === BIND_LEXICAL && expr.name === "let")
          { this.raiseRecoverable(expr.start, "let is disallowed as a lexically bound name"); }
        if (checkClashes) {
          if (hasOwn(checkClashes, expr.name))
            { this.raiseRecoverable(expr.start, "Argument name clash"); }
          checkClashes[expr.name] = true;
        }
        if (bindingType !== BIND_OUTSIDE) { this.declareName(expr.name, bindingType, expr.start); }
      }
      break

    case "ChainExpression":
      this.raiseRecoverable(expr.start, "Optional chaining cannot appear in left-hand side");
      break

    case "MemberExpression":
      if (isBind) { this.raiseRecoverable(expr.start, "Binding member expression"); }
      break

    case "ParenthesizedExpression":
      if (isBind) { this.raiseRecoverable(expr.start, "Binding parenthesized expression"); }
      return this.checkLValSimple(expr.expression, bindingType, checkClashes)

    default:
      this.raise(expr.start, (isBind ? "Binding" : "Assigning to") + " rvalue");
    }
  };

  pp$7.checkLValPattern = function(expr, bindingType, checkClashes) {
    if ( bindingType === void 0 ) bindingType = BIND_NONE;

    switch (expr.type) {
    case "ObjectPattern":
      for (var i = 0, list = expr.properties; i < list.length; i += 1) {
        var prop = list[i];

      this.checkLValInnerPattern(prop, bindingType, checkClashes);
      }
      break

    case "ArrayPattern":
      for (var i$1 = 0, list$1 = expr.elements; i$1 < list$1.length; i$1 += 1) {
        var elem = list$1[i$1];

      if (elem) { this.checkLValInnerPattern(elem, bindingType, checkClashes); }
      }
      break

    default:
      this.checkLValSimple(expr, bindingType, checkClashes);
    }
  };

  pp$7.checkLValInnerPattern = function(expr, bindingType, checkClashes) {
    if ( bindingType === void 0 ) bindingType = BIND_NONE;

    switch (expr.type) {
    case "Property":
      // AssignmentProperty has type === "Property"
      this.checkLValInnerPattern(expr.value, bindingType, checkClashes);
      break

    case "AssignmentPattern":
      this.checkLValPattern(expr.left, bindingType, checkClashes);
      break

    case "RestElement":
      this.checkLValPattern(expr.argument, bindingType, checkClashes);
      break

    default:
      this.checkLValPattern(expr, bindingType, checkClashes);
    }
  };

  // The algorithm used to determine whether a regexp can appear at a
  // given point in the program is loosely based on sweet.js' approach.
  // See https://github.com/mozilla/sweet.js/wiki/design


  var TokContext = function TokContext(token, isExpr, preserveSpace, override, generator) {
    this.token = token;
    this.isExpr = !!isExpr;
    this.preserveSpace = !!preserveSpace;
    this.override = override;
    this.generator = !!generator;
  };

  var types = {
    b_stat: new TokContext("{", false),
    b_expr: new TokContext("{", true),
    b_tmpl: new TokContext("${", false),
    p_stat: new TokContext("(", false),
    p_expr: new TokContext("(", true),
    q_tmpl: new TokContext("`", true, true, function (p) { return p.tryReadTemplateToken(); }),
    f_stat: new TokContext("function", false),
    f_expr: new TokContext("function", true),
    f_expr_gen: new TokContext("function", true, false, null, true),
    f_gen: new TokContext("function", false, false, null, true)
  };

  var pp$6 = Parser.prototype;

  pp$6.initialContext = function() {
    return [types.b_stat]
  };

  pp$6.curContext = function() {
    return this.context[this.context.length - 1]
  };

  pp$6.braceIsBlock = function(prevType) {
    var parent = this.curContext();
    if (parent === types.f_expr || parent === types.f_stat)
      { return true }
    if (prevType === types$1.colon && (parent === types.b_stat || parent === types.b_expr))
      { return !parent.isExpr }

    // The check for `tt.name && exprAllowed` detects whether we are
    // after a `yield` or `of` construct. See the `updateContext` for
    // `tt.name`.
    if (prevType === types$1._return || prevType === types$1.name && this.exprAllowed)
      { return lineBreak.test(this.input.slice(this.lastTokEnd, this.start)) }
    if (prevType === types$1._else || prevType === types$1.semi || prevType === types$1.eof || prevType === types$1.parenR || prevType === types$1.arrow)
      { return true }
    if (prevType === types$1.braceL)
      { return parent === types.b_stat }
    if (prevType === types$1._var || prevType === types$1._const || prevType === types$1.name)
      { return false }
    return !this.exprAllowed
  };

  pp$6.inGeneratorContext = function() {
    for (var i = this.context.length - 1; i >= 1; i--) {
      var context = this.context[i];
      if (context.token === "function")
        { return context.generator }
    }
    return false
  };

  pp$6.updateContext = function(prevType) {
    var update, type = this.type;
    if (type.keyword && prevType === types$1.dot)
      { this.exprAllowed = false; }
    else if (update = type.updateContext)
      { update.call(this, prevType); }
    else
      { this.exprAllowed = type.beforeExpr; }
  };

  // Used to handle egde cases when token context could not be inferred correctly during tokenization phase

  pp$6.overrideContext = function(tokenCtx) {
    if (this.curContext() !== tokenCtx) {
      this.context[this.context.length - 1] = tokenCtx;
    }
  };

  // Token-specific context update code

  types$1.parenR.updateContext = types$1.braceR.updateContext = function() {
    if (this.context.length === 1) {
      this.exprAllowed = true;
      return
    }
    var out = this.context.pop();
    if (out === types.b_stat && this.curContext().token === "function") {
      out = this.context.pop();
    }
    this.exprAllowed = !out.isExpr;
  };

  types$1.braceL.updateContext = function(prevType) {
    this.context.push(this.braceIsBlock(prevType) ? types.b_stat : types.b_expr);
    this.exprAllowed = true;
  };

  types$1.dollarBraceL.updateContext = function() {
    this.context.push(types.b_tmpl);
    this.exprAllowed = true;
  };

  types$1.parenL.updateContext = function(prevType) {
    var statementParens = prevType === types$1._if || prevType === types$1._for || prevType === types$1._with || prevType === types$1._while;
    this.context.push(statementParens ? types.p_stat : types.p_expr);
    this.exprAllowed = true;
  };

  types$1.incDec.updateContext = function() {
    // tokExprAllowed stays unchanged
  };

  types$1._function.updateContext = types$1._class.updateContext = function(prevType) {
    if (prevType.beforeExpr && prevType !== types$1._else &&
        !(prevType === types$1.semi && this.curContext() !== types.p_stat) &&
        !(prevType === types$1._return && lineBreak.test(this.input.slice(this.lastTokEnd, this.start))) &&
        !((prevType === types$1.colon || prevType === types$1.braceL) && this.curContext() === types.b_stat))
      { this.context.push(types.f_expr); }
    else
      { this.context.push(types.f_stat); }
    this.exprAllowed = false;
  };

  types$1.backQuote.updateContext = function() {
    if (this.curContext() === types.q_tmpl)
      { this.context.pop(); }
    else
      { this.context.push(types.q_tmpl); }
    this.exprAllowed = false;
  };

  types$1.star.updateContext = function(prevType) {
    if (prevType === types$1._function) {
      var index = this.context.length - 1;
      if (this.context[index] === types.f_expr)
        { this.context[index] = types.f_expr_gen; }
      else
        { this.context[index] = types.f_gen; }
    }
    this.exprAllowed = true;
  };

  types$1.name.updateContext = function(prevType) {
    var allowed = false;
    if (this.options.ecmaVersion >= 6 && prevType !== types$1.dot) {
      if (this.value === "of" && !this.exprAllowed ||
          this.value === "yield" && this.inGeneratorContext())
        { allowed = true; }
    }
    this.exprAllowed = allowed;
  };

  // A recursive descent parser operates by defining functions for all
  // syntactic elements, and recursively calling those, each function
  // advancing the input stream and returning an AST node. Precedence
  // of constructs (for example, the fact that `!x[1]` means `!(x[1])`
  // instead of `(!x)[1]` is handled by the fact that the parser
  // function that parses unary prefix operators is called first, and
  // in turn calls the function that parses `[]` subscripts — that
  // way, it'll receive the node for `x[1]` already parsed, and wraps
  // *that* in the unary operator node.
  //
  // Acorn uses an [operator precedence parser][opp] to handle binary
  // operator precedence, because it is much more compact than using
  // the technique outlined above, which uses different, nesting
  // functions to specify precedence, for all of the ten binary
  // precedence levels that JavaScript defines.
  //
  // [opp]: http://en.wikipedia.org/wiki/Operator-precedence_parser


  var pp$5 = Parser.prototype;

  // Check if property name clashes with already added.
  // Object/class getters and setters are not allowed to clash —
  // either with each other or with an init property — and in
  // strict mode, init properties are also not allowed to be repeated.

  pp$5.checkPropClash = function(prop, propHash, refDestructuringErrors) {
    if (this.options.ecmaVersion >= 9 && prop.type === "SpreadElement")
      { return }
    if (this.options.ecmaVersion >= 6 && (prop.computed || prop.method || prop.shorthand))
      { return }
    var key = prop.key;
    var name;
    switch (key.type) {
    case "Identifier": name = key.name; break
    case "Literal": name = String(key.value); break
    default: return
    }
    var kind = prop.kind;
    if (this.options.ecmaVersion >= 6) {
      if (name === "__proto__" && kind === "init") {
        if (propHash.proto) {
          if (refDestructuringErrors) {
            if (refDestructuringErrors.doubleProto < 0) {
              refDestructuringErrors.doubleProto = key.start;
            }
          } else {
            this.raiseRecoverable(key.start, "Redefinition of __proto__ property");
          }
        }
        propHash.proto = true;
      }
      return
    }
    name = "$" + name;
    var other = propHash[name];
    if (other) {
      var redefinition;
      if (kind === "init") {
        redefinition = this.strict && other.init || other.get || other.set;
      } else {
        redefinition = other.init || other[kind];
      }
      if (redefinition)
        { this.raiseRecoverable(key.start, "Redefinition of property"); }
    } else {
      other = propHash[name] = {
        init: false,
        get: false,
        set: false
      };
    }
    other[kind] = true;
  };

  // ### Expression parsing

  // These nest, from the most general expression type at the top to
  // 'atomic', nondivisible expression types at the bottom. Most of
  // the functions will simply let the function(s) below them parse,
  // and, *if* the syntactic construct they handle is present, wrap
  // the AST node that the inner parser gave them in another node.

  // Parse a full expression. The optional arguments are used to
  // forbid the `in` operator (in for loops initalization expressions)
  // and provide reference for storing '=' operator inside shorthand
  // property assignment in contexts where both object expression
  // and object pattern might appear (so it's possible to raise
  // delayed syntax error at correct position).

  pp$5.parseExpression = function(forInit, refDestructuringErrors) {
    var startPos = this.start, startLoc = this.startLoc;
    var expr = this.parseMaybeAssign(forInit, refDestructuringErrors);
    if (this.type === types$1.comma) {
      var node = this.startNodeAt(startPos, startLoc);
      node.expressions = [expr];
      while (this.eat(types$1.comma)) { node.expressions.push(this.parseMaybeAssign(forInit, refDestructuringErrors)); }
      return this.finishNode(node, "SequenceExpression")
    }
    return expr
  };

  // Parse an assignment expression. This includes applications of
  // operators like `+=`.

  pp$5.parseMaybeAssign = function(forInit, refDestructuringErrors, afterLeftParse) {
    if (this.isContextual("yield")) {
      if (this.inGenerator) { return this.parseYield(forInit) }
      // The tokenizer will assume an expression is allowed after
      // `yield`, but this isn't that kind of yield
      else { this.exprAllowed = false; }
    }

    var ownDestructuringErrors = false, oldParenAssign = -1, oldTrailingComma = -1, oldDoubleProto = -1;
    if (refDestructuringErrors) {
      oldParenAssign = refDestructuringErrors.parenthesizedAssign;
      oldTrailingComma = refDestructuringErrors.trailingComma;
      oldDoubleProto = refDestructuringErrors.doubleProto;
      refDestructuringErrors.parenthesizedAssign = refDestructuringErrors.trailingComma = -1;
    } else {
      refDestructuringErrors = new DestructuringErrors;
      ownDestructuringErrors = true;
    }

    var startPos = this.start, startLoc = this.startLoc;
    if (this.type === types$1.parenL || this.type === types$1.name) {
      this.potentialArrowAt = this.start;
      this.potentialArrowInForAwait = forInit === "await";
    }
    var left = this.parseMaybeConditional(forInit, refDestructuringErrors);
    if (afterLeftParse) { left = afterLeftParse.call(this, left, startPos, startLoc); }
    if (this.type.isAssign) {
      var node = this.startNodeAt(startPos, startLoc);
      node.operator = this.value;
      if (this.type === types$1.eq)
        { left = this.toAssignable(left, false, refDestructuringErrors); }
      if (!ownDestructuringErrors) {
        refDestructuringErrors.parenthesizedAssign = refDestructuringErrors.trailingComma = refDestructuringErrors.doubleProto = -1;
      }
      if (refDestructuringErrors.shorthandAssign >= left.start)
        { refDestructuringErrors.shorthandAssign = -1; } // reset because shorthand default was used correctly
      if (this.type === types$1.eq)
        { this.checkLValPattern(left); }
      else
        { this.checkLValSimple(left); }
      node.left = left;
      this.next();
      node.right = this.parseMaybeAssign(forInit);
      if (oldDoubleProto > -1) { refDestructuringErrors.doubleProto = oldDoubleProto; }
      return this.finishNode(node, "AssignmentExpression")
    } else {
      if (ownDestructuringErrors) { this.checkExpressionErrors(refDestructuringErrors, true); }
    }
    if (oldParenAssign > -1) { refDestructuringErrors.parenthesizedAssign = oldParenAssign; }
    if (oldTrailingComma > -1) { refDestructuringErrors.trailingComma = oldTrailingComma; }
    return left
  };

  // Parse a ternary conditional (`?:`) operator.

  pp$5.parseMaybeConditional = function(forInit, refDestructuringErrors) {
    var startPos = this.start, startLoc = this.startLoc;
    var expr = this.parseExprOps(forInit, refDestructuringErrors);
    if (this.checkExpressionErrors(refDestructuringErrors)) { return expr }
    if (this.eat(types$1.question)) {
      var node = this.startNodeAt(startPos, startLoc);
      node.test = expr;
      node.consequent = this.parseMaybeAssign();
      this.expect(types$1.colon);
      node.alternate = this.parseMaybeAssign(forInit);
      return this.finishNode(node, "ConditionalExpression")
    }
    return expr
  };

  // Start the precedence parser.

  pp$5.parseExprOps = function(forInit, refDestructuringErrors) {
    var startPos = this.start, startLoc = this.startLoc;
    var expr = this.parseMaybeUnary(refDestructuringErrors, false, false, forInit);
    if (this.checkExpressionErrors(refDestructuringErrors)) { return expr }
    return expr.start === startPos && expr.type === "ArrowFunctionExpression" ? expr : this.parseExprOp(expr, startPos, startLoc, -1, forInit)
  };

  // Parse binary operators with the operator precedence parsing
  // algorithm. `left` is the left-hand side of the operator.
  // `minPrec` provides context that allows the function to stop and
  // defer further parser to one of its callers when it encounters an
  // operator that has a lower precedence than the set it is parsing.

  pp$5.parseExprOp = function(left, leftStartPos, leftStartLoc, minPrec, forInit) {
    var prec = this.type.binop;
    if (prec != null && (!forInit || this.type !== types$1._in)) {
      if (prec > minPrec) {
        var logical = this.type === types$1.logicalOR || this.type === types$1.logicalAND;
        var coalesce = this.type === types$1.coalesce;
        if (coalesce) {
          // Handle the precedence of `tt.coalesce` as equal to the range of logical expressions.
          // In other words, `node.right` shouldn't contain logical expressions in order to check the mixed error.
          prec = types$1.logicalAND.binop;
        }
        var op = this.value;
        this.next();
        var startPos = this.start, startLoc = this.startLoc;
        var right = this.parseExprOp(this.parseMaybeUnary(null, false, false, forInit), startPos, startLoc, prec, forInit);
        var node = this.buildBinary(leftStartPos, leftStartLoc, left, right, op, logical || coalesce);
        if ((logical && this.type === types$1.coalesce) || (coalesce && (this.type === types$1.logicalOR || this.type === types$1.logicalAND))) {
          this.raiseRecoverable(this.start, "Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses");
        }
        return this.parseExprOp(node, leftStartPos, leftStartLoc, minPrec, forInit)
      }
    }
    return left
  };

  pp$5.buildBinary = function(startPos, startLoc, left, right, op, logical) {
    if (right.type === "PrivateIdentifier") { this.raise(right.start, "Private identifier can only be left side of binary expression"); }
    var node = this.startNodeAt(startPos, startLoc);
    node.left = left;
    node.operator = op;
    node.right = right;
    return this.finishNode(node, logical ? "LogicalExpression" : "BinaryExpression")
  };

  // Parse unary operators, both prefix and postfix.

  pp$5.parseMaybeUnary = function(refDestructuringErrors, sawUnary, incDec, forInit) {
    var startPos = this.start, startLoc = this.startLoc, expr;
    if (this.isContextual("await") && this.canAwait) {
      expr = this.parseAwait(forInit);
      sawUnary = true;
    } else if (this.type.prefix) {
      var node = this.startNode(), update = this.type === types$1.incDec;
      node.operator = this.value;
      node.prefix = true;
      this.next();
      node.argument = this.parseMaybeUnary(null, true, update, forInit);
      this.checkExpressionErrors(refDestructuringErrors, true);
      if (update) { this.checkLValSimple(node.argument); }
      else if (this.strict && node.operator === "delete" &&
               node.argument.type === "Identifier")
        { this.raiseRecoverable(node.start, "Deleting local variable in strict mode"); }
      else if (node.operator === "delete" && isPrivateFieldAccess(node.argument))
        { this.raiseRecoverable(node.start, "Private fields can not be deleted"); }
      else { sawUnary = true; }
      expr = this.finishNode(node, update ? "UpdateExpression" : "UnaryExpression");
    } else if (!sawUnary && this.type === types$1.privateId) {
      if ((forInit || this.privateNameStack.length === 0) && this.options.checkPrivateFields) { this.unexpected(); }
      expr = this.parsePrivateIdent();
      // only could be private fields in 'in', such as #x in obj
      if (this.type !== types$1._in) { this.unexpected(); }
    } else {
      expr = this.parseExprSubscripts(refDestructuringErrors, forInit);
      if (this.checkExpressionErrors(refDestructuringErrors)) { return expr }
      while (this.type.postfix && !this.canInsertSemicolon()) {
        var node$1 = this.startNodeAt(startPos, startLoc);
        node$1.operator = this.value;
        node$1.prefix = false;
        node$1.argument = expr;
        this.checkLValSimple(expr);
        this.next();
        expr = this.finishNode(node$1, "UpdateExpression");
      }
    }

    if (!incDec && this.eat(types$1.starstar)) {
      if (sawUnary)
        { this.unexpected(this.lastTokStart); }
      else
        { return this.buildBinary(startPos, startLoc, expr, this.parseMaybeUnary(null, false, false, forInit), "**", false) }
    } else {
      return expr
    }
  };

  function isPrivateFieldAccess(node) {
    return (
      node.type === "MemberExpression" && node.property.type === "PrivateIdentifier" ||
      node.type === "ChainExpression" && isPrivateFieldAccess(node.expression)
    )
  }

  // Parse call, dot, and `[]`-subscript expressions.

  pp$5.parseExprSubscripts = function(refDestructuringErrors, forInit) {
    var startPos = this.start, startLoc = this.startLoc;
    var expr = this.parseExprAtom(refDestructuringErrors, forInit);
    if (expr.type === "ArrowFunctionExpression" && this.input.slice(this.lastTokStart, this.lastTokEnd) !== ")")
      { return expr }
    var result = this.parseSubscripts(expr, startPos, startLoc, false, forInit);
    if (refDestructuringErrors && result.type === "MemberExpression") {
      if (refDestructuringErrors.parenthesizedAssign >= result.start) { refDestructuringErrors.parenthesizedAssign = -1; }
      if (refDestructuringErrors.parenthesizedBind >= result.start) { refDestructuringErrors.parenthesizedBind = -1; }
      if (refDestructuringErrors.trailingComma >= result.start) { refDestructuringErrors.trailingComma = -1; }
    }
    return result
  };

  pp$5.parseSubscripts = function(base, startPos, startLoc, noCalls, forInit) {
    var maybeAsyncArrow = this.options.ecmaVersion >= 8 && base.type === "Identifier" && base.name === "async" &&
        this.lastTokEnd === base.end && !this.canInsertSemicolon() && base.end - base.start === 5 &&
        this.potentialArrowAt === base.start;
    var optionalChained = false;

    while (true) {
      var element = this.parseSubscript(base, startPos, startLoc, noCalls, maybeAsyncArrow, optionalChained, forInit);

      if (element.optional) { optionalChained = true; }
      if (element === base || element.type === "ArrowFunctionExpression") {
        if (optionalChained) {
          var chainNode = this.startNodeAt(startPos, startLoc);
          chainNode.expression = element;
          element = this.finishNode(chainNode, "ChainExpression");
        }
        return element
      }

      base = element;
    }
  };

  pp$5.shouldParseAsyncArrow = function() {
    return !this.canInsertSemicolon() && this.eat(types$1.arrow)
  };

  pp$5.parseSubscriptAsyncArrow = function(startPos, startLoc, exprList, forInit) {
    return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), exprList, true, forInit)
  };

  pp$5.parseSubscript = function(base, startPos, startLoc, noCalls, maybeAsyncArrow, optionalChained, forInit) {
    var optionalSupported = this.options.ecmaVersion >= 11;
    var optional = optionalSupported && this.eat(types$1.questionDot);
    if (noCalls && optional) { this.raise(this.lastTokStart, "Optional chaining cannot appear in the callee of new expressions"); }

    var computed = this.eat(types$1.bracketL);
    if (computed || (optional && this.type !== types$1.parenL && this.type !== types$1.backQuote) || this.eat(types$1.dot)) {
      var node = this.startNodeAt(startPos, startLoc);
      node.object = base;
      if (computed) {
        node.property = this.parseExpression();
        this.expect(types$1.bracketR);
      } else if (this.type === types$1.privateId && base.type !== "Super") {
        node.property = this.parsePrivateIdent();
      } else {
        node.property = this.parseIdent(this.options.allowReserved !== "never");
      }
      node.computed = !!computed;
      if (optionalSupported) {
        node.optional = optional;
      }
      base = this.finishNode(node, "MemberExpression");
    } else if (!noCalls && this.eat(types$1.parenL)) {
      var refDestructuringErrors = new DestructuringErrors, oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;
      this.yieldPos = 0;
      this.awaitPos = 0;
      this.awaitIdentPos = 0;
      var exprList = this.parseExprList(types$1.parenR, this.options.ecmaVersion >= 8, false, refDestructuringErrors);
      if (maybeAsyncArrow && !optional && this.shouldParseAsyncArrow()) {
        this.checkPatternErrors(refDestructuringErrors, false);
        this.checkYieldAwaitInDefaultParams();
        if (this.awaitIdentPos > 0)
          { this.raise(this.awaitIdentPos, "Cannot use 'await' as identifier inside an async function"); }
        this.yieldPos = oldYieldPos;
        this.awaitPos = oldAwaitPos;
        this.awaitIdentPos = oldAwaitIdentPos;
        return this.parseSubscriptAsyncArrow(startPos, startLoc, exprList, forInit)
      }
      this.checkExpressionErrors(refDestructuringErrors, true);
      this.yieldPos = oldYieldPos || this.yieldPos;
      this.awaitPos = oldAwaitPos || this.awaitPos;
      this.awaitIdentPos = oldAwaitIdentPos || this.awaitIdentPos;
      var node$1 = this.startNodeAt(startPos, startLoc);
      node$1.callee = base;
      node$1.arguments = exprList;
      if (optionalSupported) {
        node$1.optional = optional;
      }
      base = this.finishNode(node$1, "CallExpression");
    } else if (this.type === types$1.backQuote) {
      if (optional || optionalChained) {
        this.raise(this.start, "Optional chaining cannot appear in the tag of tagged template expressions");
      }
      var node$2 = this.startNodeAt(startPos, startLoc);
      node$2.tag = base;
      node$2.quasi = this.parseTemplate({isTagged: true});
      base = this.finishNode(node$2, "TaggedTemplateExpression");
    }
    return base
  };

  // Parse an atomic expression — either a single token that is an
  // expression, an expression started by a keyword like `function` or
  // `new`, or an expression wrapped in punctuation like `()`, `[]`,
  // or `{}`.

  pp$5.parseExprAtom = function(refDestructuringErrors, forInit, forNew) {
    // If a division operator appears in an expression position, the
    // tokenizer got confused, and we force it to read a regexp instead.
    if (this.type === types$1.slash) { this.readRegexp(); }

    var node, canBeArrow = this.potentialArrowAt === this.start;
    switch (this.type) {
    case types$1._super:
      if (!this.allowSuper)
        { this.raise(this.start, "'super' keyword outside a method"); }
      node = this.startNode();
      this.next();
      if (this.type === types$1.parenL && !this.allowDirectSuper)
        { this.raise(node.start, "super() call outside constructor of a subclass"); }
      // The `super` keyword can appear at below:
      // SuperProperty:
      //     super [ Expression ]
      //     super . IdentifierName
      // SuperCall:
      //     super ( Arguments )
      if (this.type !== types$1.dot && this.type !== types$1.bracketL && this.type !== types$1.parenL)
        { this.unexpected(); }
      return this.finishNode(node, "Super")

    case types$1._this:
      node = this.startNode();
      this.next();
      return this.finishNode(node, "ThisExpression")

    case types$1.name:
      var startPos = this.start, startLoc = this.startLoc, containsEsc = this.containsEsc;
      var id = this.parseIdent(false);
      if (this.options.ecmaVersion >= 8 && !containsEsc && id.name === "async" && !this.canInsertSemicolon() && this.eat(types$1._function)) {
        this.overrideContext(types.f_expr);
        return this.parseFunction(this.startNodeAt(startPos, startLoc), 0, false, true, forInit)
      }
      if (canBeArrow && !this.canInsertSemicolon()) {
        if (this.eat(types$1.arrow))
          { return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), [id], false, forInit) }
        if (this.options.ecmaVersion >= 8 && id.name === "async" && this.type === types$1.name && !containsEsc &&
            (!this.potentialArrowInForAwait || this.value !== "of" || this.containsEsc)) {
          id = this.parseIdent(false);
          if (this.canInsertSemicolon() || !this.eat(types$1.arrow))
            { this.unexpected(); }
          return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), [id], true, forInit)
        }
      }
      return id

    case types$1.regexp:
      var value = this.value;
      node = this.parseLiteral(value.value);
      node.regex = {pattern: value.pattern, flags: value.flags};
      return node

    case types$1.num: case types$1.string:
      return this.parseLiteral(this.value)

    case types$1._null: case types$1._true: case types$1._false:
      node = this.startNode();
      node.value = this.type === types$1._null ? null : this.type === types$1._true;
      node.raw = this.type.keyword;
      this.next();
      return this.finishNode(node, "Literal")

    case types$1.parenL:
      var start = this.start, expr = this.parseParenAndDistinguishExpression(canBeArrow, forInit);
      if (refDestructuringErrors) {
        if (refDestructuringErrors.parenthesizedAssign < 0 && !this.isSimpleAssignTarget(expr))
          { refDestructuringErrors.parenthesizedAssign = start; }
        if (refDestructuringErrors.parenthesizedBind < 0)
          { refDestructuringErrors.parenthesizedBind = start; }
      }
      return expr

    case types$1.bracketL:
      node = this.startNode();
      this.next();
      node.elements = this.parseExprList(types$1.bracketR, true, true, refDestructuringErrors);
      return this.finishNode(node, "ArrayExpression")

    case types$1.braceL:
      this.overrideContext(types.b_expr);
      return this.parseObj(false, refDestructuringErrors)

    case types$1._function:
      node = this.startNode();
      this.next();
      return this.parseFunction(node, 0)

    case types$1._class:
      return this.parseClass(this.startNode(), false)

    case types$1._new:
      return this.parseNew()

    case types$1.backQuote:
      return this.parseTemplate()

    case types$1._import:
      if (this.options.ecmaVersion >= 11) {
        return this.parseExprImport(forNew)
      } else {
        return this.unexpected()
      }

    default:
      return this.parseExprAtomDefault()
    }
  };

  pp$5.parseExprAtomDefault = function() {
    this.unexpected();
  };

  pp$5.parseExprImport = function(forNew) {
    var node = this.startNode();

    // Consume `import` as an identifier for `import.meta`.
    // Because `this.parseIdent(true)` doesn't check escape sequences, it needs the check of `this.containsEsc`.
    if (this.containsEsc) { this.raiseRecoverable(this.start, "Escape sequence in keyword import"); }
    var meta = this.parseIdent(true);

    if (this.type === types$1.parenL && !forNew) {
      return this.parseDynamicImport(node)
    } else if (this.type === types$1.dot) {
      node.meta = meta;
      return this.parseImportMeta(node)
    } else {
      this.unexpected();
    }
  };

  pp$5.parseDynamicImport = function(node) {
    this.next(); // skip `(`

    // Parse node.source.
    node.source = this.parseMaybeAssign();

    // Verify ending.
    if (!this.eat(types$1.parenR)) {
      var errorPos = this.start;
      if (this.eat(types$1.comma) && this.eat(types$1.parenR)) {
        this.raiseRecoverable(errorPos, "Trailing comma is not allowed in import()");
      } else {
        this.unexpected(errorPos);
      }
    }

    return this.finishNode(node, "ImportExpression")
  };

  pp$5.parseImportMeta = function(node) {
    this.next(); // skip `.`

    var containsEsc = this.containsEsc;
    node.property = this.parseIdent(true);

    if (node.property.name !== "meta")
      { this.raiseRecoverable(node.property.start, "The only valid meta property for import is 'import.meta'"); }
    if (containsEsc)
      { this.raiseRecoverable(node.start, "'import.meta' must not contain escaped characters"); }
    if (this.options.sourceType !== "module" && !this.options.allowImportExportEverywhere)
      { this.raiseRecoverable(node.start, "Cannot use 'import.meta' outside a module"); }

    return this.finishNode(node, "MetaProperty")
  };

  pp$5.parseLiteral = function(value) {
    var node = this.startNode();
    node.value = value;
    node.raw = this.input.slice(this.start, this.end);
    if (node.raw.charCodeAt(node.raw.length - 1) === 110) { node.bigint = node.raw.slice(0, -1).replace(/_/g, ""); }
    this.next();
    return this.finishNode(node, "Literal")
  };

  pp$5.parseParenExpression = function() {
    this.expect(types$1.parenL);
    var val = this.parseExpression();
    this.expect(types$1.parenR);
    return val
  };

  pp$5.shouldParseArrow = function(exprList) {
    return !this.canInsertSemicolon()
  };

  pp$5.parseParenAndDistinguishExpression = function(canBeArrow, forInit) {
    var startPos = this.start, startLoc = this.startLoc, val, allowTrailingComma = this.options.ecmaVersion >= 8;
    if (this.options.ecmaVersion >= 6) {
      this.next();

      var innerStartPos = this.start, innerStartLoc = this.startLoc;
      var exprList = [], first = true, lastIsComma = false;
      var refDestructuringErrors = new DestructuringErrors, oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, spreadStart;
      this.yieldPos = 0;
      this.awaitPos = 0;
      // Do not save awaitIdentPos to allow checking awaits nested in parameters
      while (this.type !== types$1.parenR) {
        first ? first = false : this.expect(types$1.comma);
        if (allowTrailingComma && this.afterTrailingComma(types$1.parenR, true)) {
          lastIsComma = true;
          break
        } else if (this.type === types$1.ellipsis) {
          spreadStart = this.start;
          exprList.push(this.parseParenItem(this.parseRestBinding()));
          if (this.type === types$1.comma) {
            this.raiseRecoverable(
              this.start,
              "Comma is not permitted after the rest element"
            );
          }
          break
        } else {
          exprList.push(this.parseMaybeAssign(false, refDestructuringErrors, this.parseParenItem));
        }
      }
      var innerEndPos = this.lastTokEnd, innerEndLoc = this.lastTokEndLoc;
      this.expect(types$1.parenR);

      if (canBeArrow && this.shouldParseArrow(exprList) && this.eat(types$1.arrow)) {
        this.checkPatternErrors(refDestructuringErrors, false);
        this.checkYieldAwaitInDefaultParams();
        this.yieldPos = oldYieldPos;
        this.awaitPos = oldAwaitPos;
        return this.parseParenArrowList(startPos, startLoc, exprList, forInit)
      }

      if (!exprList.length || lastIsComma) { this.unexpected(this.lastTokStart); }
      if (spreadStart) { this.unexpected(spreadStart); }
      this.checkExpressionErrors(refDestructuringErrors, true);
      this.yieldPos = oldYieldPos || this.yieldPos;
      this.awaitPos = oldAwaitPos || this.awaitPos;

      if (exprList.length > 1) {
        val = this.startNodeAt(innerStartPos, innerStartLoc);
        val.expressions = exprList;
        this.finishNodeAt(val, "SequenceExpression", innerEndPos, innerEndLoc);
      } else {
        val = exprList[0];
      }
    } else {
      val = this.parseParenExpression();
    }

    if (this.options.preserveParens) {
      var par = this.startNodeAt(startPos, startLoc);
      par.expression = val;
      return this.finishNode(par, "ParenthesizedExpression")
    } else {
      return val
    }
  };

  pp$5.parseParenItem = function(item) {
    return item
  };

  pp$5.parseParenArrowList = function(startPos, startLoc, exprList, forInit) {
    return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), exprList, false, forInit)
  };

  // New's precedence is slightly tricky. It must allow its argument to
  // be a `[]` or dot subscript expression, but not a call — at least,
  // not without wrapping it in parentheses. Thus, it uses the noCalls
  // argument to parseSubscripts to prevent it from consuming the
  // argument list.

  var empty = [];

  pp$5.parseNew = function() {
    if (this.containsEsc) { this.raiseRecoverable(this.start, "Escape sequence in keyword new"); }
    var node = this.startNode();
    var meta = this.parseIdent(true);
    if (this.options.ecmaVersion >= 6 && this.eat(types$1.dot)) {
      node.meta = meta;
      var containsEsc = this.containsEsc;
      node.property = this.parseIdent(true);
      if (node.property.name !== "target")
        { this.raiseRecoverable(node.property.start, "The only valid meta property for new is 'new.target'"); }
      if (containsEsc)
        { this.raiseRecoverable(node.start, "'new.target' must not contain escaped characters"); }
      if (!this.allowNewDotTarget)
        { this.raiseRecoverable(node.start, "'new.target' can only be used in functions and class static block"); }
      return this.finishNode(node, "MetaProperty")
    }
    var startPos = this.start, startLoc = this.startLoc;
    node.callee = this.parseSubscripts(this.parseExprAtom(null, false, true), startPos, startLoc, true, false);
    if (this.eat(types$1.parenL)) { node.arguments = this.parseExprList(types$1.parenR, this.options.ecmaVersion >= 8, false); }
    else { node.arguments = empty; }
    return this.finishNode(node, "NewExpression")
  };

  // Parse template expression.

  pp$5.parseTemplateElement = function(ref) {
    var isTagged = ref.isTagged;

    var elem = this.startNode();
    if (this.type === types$1.invalidTemplate) {
      if (!isTagged) {
        this.raiseRecoverable(this.start, "Bad escape sequence in untagged template literal");
      }
      elem.value = {
        raw: this.value,
        cooked: null
      };
    } else {
      elem.value = {
        raw: this.input.slice(this.start, this.end).replace(/\r\n?/g, "\n"),
        cooked: this.value
      };
    }
    this.next();
    elem.tail = this.type === types$1.backQuote;
    return this.finishNode(elem, "TemplateElement")
  };

  pp$5.parseTemplate = function(ref) {
    if ( ref === void 0 ) ref = {};
    var isTagged = ref.isTagged; if ( isTagged === void 0 ) isTagged = false;

    var node = this.startNode();
    this.next();
    node.expressions = [];
    var curElt = this.parseTemplateElement({isTagged: isTagged});
    node.quasis = [curElt];
    while (!curElt.tail) {
      if (this.type === types$1.eof) { this.raise(this.pos, "Unterminated template literal"); }
      this.expect(types$1.dollarBraceL);
      node.expressions.push(this.parseExpression());
      this.expect(types$1.braceR);
      node.quasis.push(curElt = this.parseTemplateElement({isTagged: isTagged}));
    }
    this.next();
    return this.finishNode(node, "TemplateLiteral")
  };

  pp$5.isAsyncProp = function(prop) {
    return !prop.computed && prop.key.type === "Identifier" && prop.key.name === "async" &&
      (this.type === types$1.name || this.type === types$1.num || this.type === types$1.string || this.type === types$1.bracketL || this.type.keyword || (this.options.ecmaVersion >= 9 && this.type === types$1.star)) &&
      !lineBreak.test(this.input.slice(this.lastTokEnd, this.start))
  };

  // Parse an object literal or binding pattern.

  pp$5.parseObj = function(isPattern, refDestructuringErrors) {
    var node = this.startNode(), first = true, propHash = {};
    node.properties = [];
    this.next();
    while (!this.eat(types$1.braceR)) {
      if (!first) {
        this.expect(types$1.comma);
        if (this.options.ecmaVersion >= 5 && this.afterTrailingComma(types$1.braceR)) { break }
      } else { first = false; }

      var prop = this.parseProperty(isPattern, refDestructuringErrors);
      if (!isPattern) { this.checkPropClash(prop, propHash, refDestructuringErrors); }
      node.properties.push(prop);
    }
    return this.finishNode(node, isPattern ? "ObjectPattern" : "ObjectExpression")
  };

  pp$5.parseProperty = function(isPattern, refDestructuringErrors) {
    var prop = this.startNode(), isGenerator, isAsync, startPos, startLoc;
    if (this.options.ecmaVersion >= 9 && this.eat(types$1.ellipsis)) {
      if (isPattern) {
        prop.argument = this.parseIdent(false);
        if (this.type === types$1.comma) {
          this.raiseRecoverable(this.start, "Comma is not permitted after the rest element");
        }
        return this.finishNode(prop, "RestElement")
      }
      // Parse argument.
      prop.argument = this.parseMaybeAssign(false, refDestructuringErrors);
      // To disallow trailing comma via `this.toAssignable()`.
      if (this.type === types$1.comma && refDestructuringErrors && refDestructuringErrors.trailingComma < 0) {
        refDestructuringErrors.trailingComma = this.start;
      }
      // Finish
      return this.finishNode(prop, "SpreadElement")
    }
    if (this.options.ecmaVersion >= 6) {
      prop.method = false;
      prop.shorthand = false;
      if (isPattern || refDestructuringErrors) {
        startPos = this.start;
        startLoc = this.startLoc;
      }
      if (!isPattern)
        { isGenerator = this.eat(types$1.star); }
    }
    var containsEsc = this.containsEsc;
    this.parsePropertyName(prop);
    if (!isPattern && !containsEsc && this.options.ecmaVersion >= 8 && !isGenerator && this.isAsyncProp(prop)) {
      isAsync = true;
      isGenerator = this.options.ecmaVersion >= 9 && this.eat(types$1.star);
      this.parsePropertyName(prop);
    } else {
      isAsync = false;
    }
    this.parsePropertyValue(prop, isPattern, isGenerator, isAsync, startPos, startLoc, refDestructuringErrors, containsEsc);
    return this.finishNode(prop, "Property")
  };

  pp$5.parseGetterSetter = function(prop) {
    prop.kind = prop.key.name;
    this.parsePropertyName(prop);
    prop.value = this.parseMethod(false);
    var paramCount = prop.kind === "get" ? 0 : 1;
    if (prop.value.params.length !== paramCount) {
      var start = prop.value.start;
      if (prop.kind === "get")
        { this.raiseRecoverable(start, "getter should have no params"); }
      else
        { this.raiseRecoverable(start, "setter should have exactly one param"); }
    } else {
      if (prop.kind === "set" && prop.value.params[0].type === "RestElement")
        { this.raiseRecoverable(prop.value.params[0].start, "Setter cannot use rest params"); }
    }
  };

  pp$5.parsePropertyValue = function(prop, isPattern, isGenerator, isAsync, startPos, startLoc, refDestructuringErrors, containsEsc) {
    if ((isGenerator || isAsync) && this.type === types$1.colon)
      { this.unexpected(); }

    if (this.eat(types$1.colon)) {
      prop.value = isPattern ? this.parseMaybeDefault(this.start, this.startLoc) : this.parseMaybeAssign(false, refDestructuringErrors);
      prop.kind = "init";
    } else if (this.options.ecmaVersion >= 6 && this.type === types$1.parenL) {
      if (isPattern) { this.unexpected(); }
      prop.kind = "init";
      prop.method = true;
      prop.value = this.parseMethod(isGenerator, isAsync);
    } else if (!isPattern && !containsEsc &&
               this.options.ecmaVersion >= 5 && !prop.computed && prop.key.type === "Identifier" &&
               (prop.key.name === "get" || prop.key.name === "set") &&
               (this.type !== types$1.comma && this.type !== types$1.braceR && this.type !== types$1.eq)) {
      if (isGenerator || isAsync) { this.unexpected(); }
      this.parseGetterSetter(prop);
    } else if (this.options.ecmaVersion >= 6 && !prop.computed && prop.key.type === "Identifier") {
      if (isGenerator || isAsync) { this.unexpected(); }
      this.checkUnreserved(prop.key);
      if (prop.key.name === "await" && !this.awaitIdentPos)
        { this.awaitIdentPos = startPos; }
      prop.kind = "init";
      if (isPattern) {
        prop.value = this.parseMaybeDefault(startPos, startLoc, this.copyNode(prop.key));
      } else if (this.type === types$1.eq && refDestructuringErrors) {
        if (refDestructuringErrors.shorthandAssign < 0)
          { refDestructuringErrors.shorthandAssign = this.start; }
        prop.value = this.parseMaybeDefault(startPos, startLoc, this.copyNode(prop.key));
      } else {
        prop.value = this.copyNode(prop.key);
      }
      prop.shorthand = true;
    } else { this.unexpected(); }
  };

  pp$5.parsePropertyName = function(prop) {
    if (this.options.ecmaVersion >= 6) {
      if (this.eat(types$1.bracketL)) {
        prop.computed = true;
        prop.key = this.parseMaybeAssign();
        this.expect(types$1.bracketR);
        return prop.key
      } else {
        prop.computed = false;
      }
    }
    return prop.key = this.type === types$1.num || this.type === types$1.string ? this.parseExprAtom() : this.parseIdent(this.options.allowReserved !== "never")
  };

  // Initialize empty function node.

  pp$5.initFunction = function(node) {
    node.id = null;
    if (this.options.ecmaVersion >= 6) { node.generator = node.expression = false; }
    if (this.options.ecmaVersion >= 8) { node.async = false; }
  };

  // Parse object or class method.

  pp$5.parseMethod = function(isGenerator, isAsync, allowDirectSuper) {
    var node = this.startNode(), oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;

    this.initFunction(node);
    if (this.options.ecmaVersion >= 6)
      { node.generator = isGenerator; }
    if (this.options.ecmaVersion >= 8)
      { node.async = !!isAsync; }

    this.yieldPos = 0;
    this.awaitPos = 0;
    this.awaitIdentPos = 0;
    this.enterScope(functionFlags(isAsync, node.generator) | SCOPE_SUPER | (allowDirectSuper ? SCOPE_DIRECT_SUPER : 0));

    this.expect(types$1.parenL);
    node.params = this.parseBindingList(types$1.parenR, false, this.options.ecmaVersion >= 8);
    this.checkYieldAwaitInDefaultParams();
    this.parseFunctionBody(node, false, true, false);

    this.yieldPos = oldYieldPos;
    this.awaitPos = oldAwaitPos;
    this.awaitIdentPos = oldAwaitIdentPos;
    return this.finishNode(node, "FunctionExpression")
  };

  // Parse arrow function expression with given parameters.

  pp$5.parseArrowExpression = function(node, params, isAsync, forInit) {
    var oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;

    this.enterScope(functionFlags(isAsync, false) | SCOPE_ARROW);
    this.initFunction(node);
    if (this.options.ecmaVersion >= 8) { node.async = !!isAsync; }

    this.yieldPos = 0;
    this.awaitPos = 0;
    this.awaitIdentPos = 0;

    node.params = this.toAssignableList(params, true);
    this.parseFunctionBody(node, true, false, forInit);

    this.yieldPos = oldYieldPos;
    this.awaitPos = oldAwaitPos;
    this.awaitIdentPos = oldAwaitIdentPos;
    return this.finishNode(node, "ArrowFunctionExpression")
  };

  // Parse function body and check parameters.

  pp$5.parseFunctionBody = function(node, isArrowFunction, isMethod, forInit) {
    var isExpression = isArrowFunction && this.type !== types$1.braceL;
    var oldStrict = this.strict, useStrict = false;

    if (isExpression) {
      node.body = this.parseMaybeAssign(forInit);
      node.expression = true;
      this.checkParams(node, false);
    } else {
      var nonSimple = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(node.params);
      if (!oldStrict || nonSimple) {
        useStrict = this.strictDirective(this.end);
        // If this is a strict mode function, verify that argument names
        // are not repeated, and it does not try to bind the words `eval`
        // or `arguments`.
        if (useStrict && nonSimple)
          { this.raiseRecoverable(node.start, "Illegal 'use strict' directive in function with non-simple parameter list"); }
      }
      // Start a new scope with regard to labels and the `inFunction`
      // flag (restore them to their old value afterwards).
      var oldLabels = this.labels;
      this.labels = [];
      if (useStrict) { this.strict = true; }

      // Add the params to varDeclaredNames to ensure that an error is thrown
      // if a let/const declaration in the function clashes with one of the params.
      this.checkParams(node, !oldStrict && !useStrict && !isArrowFunction && !isMethod && this.isSimpleParamList(node.params));
      // Ensure the function name isn't a forbidden identifier in strict mode, e.g. 'eval'
      if (this.strict && node.id) { this.checkLValSimple(node.id, BIND_OUTSIDE); }
      node.body = this.parseBlock(false, undefined, useStrict && !oldStrict);
      node.expression = false;
      this.adaptDirectivePrologue(node.body.body);
      this.labels = oldLabels;
    }
    this.exitScope();
  };

  pp$5.isSimpleParamList = function(params) {
    for (var i = 0, list = params; i < list.length; i += 1)
      {
      var param = list[i];

      if (param.type !== "Identifier") { return false
    } }
    return true
  };

  // Checks function params for various disallowed patterns such as using "eval"
  // or "arguments" and duplicate parameters.

  pp$5.checkParams = function(node, allowDuplicates) {
    var nameHash = Object.create(null);
    for (var i = 0, list = node.params; i < list.length; i += 1)
      {
      var param = list[i];

      this.checkLValInnerPattern(param, BIND_VAR, allowDuplicates ? null : nameHash);
    }
  };

  // Parses a comma-separated list of expressions, and returns them as
  // an array. `close` is the token type that ends the list, and
  // `allowEmpty` can be turned on to allow subsequent commas with
  // nothing in between them to be parsed as `null` (which is needed
  // for array literals).

  pp$5.parseExprList = function(close, allowTrailingComma, allowEmpty, refDestructuringErrors) {
    var elts = [], first = true;
    while (!this.eat(close)) {
      if (!first) {
        this.expect(types$1.comma);
        if (allowTrailingComma && this.afterTrailingComma(close)) { break }
      } else { first = false; }

      var elt = (void 0);
      if (allowEmpty && this.type === types$1.comma)
        { elt = null; }
      else if (this.type === types$1.ellipsis) {
        elt = this.parseSpread(refDestructuringErrors);
        if (refDestructuringErrors && this.type === types$1.comma && refDestructuringErrors.trailingComma < 0)
          { refDestructuringErrors.trailingComma = this.start; }
      } else {
        elt = this.parseMaybeAssign(false, refDestructuringErrors);
      }
      elts.push(elt);
    }
    return elts
  };

  pp$5.checkUnreserved = function(ref) {
    var start = ref.start;
    var end = ref.end;
    var name = ref.name;

    if (this.inGenerator && name === "yield")
      { this.raiseRecoverable(start, "Cannot use 'yield' as identifier inside a generator"); }
    if (this.inAsync && name === "await")
      { this.raiseRecoverable(start, "Cannot use 'await' as identifier inside an async function"); }
    if (this.currentThisScope().inClassFieldInit && name === "arguments")
      { this.raiseRecoverable(start, "Cannot use 'arguments' in class field initializer"); }
    if (this.inClassStaticBlock && (name === "arguments" || name === "await"))
      { this.raise(start, ("Cannot use " + name + " in class static initialization block")); }
    if (this.keywords.test(name))
      { this.raise(start, ("Unexpected keyword '" + name + "'")); }
    if (this.options.ecmaVersion < 6 &&
      this.input.slice(start, end).indexOf("\\") !== -1) { return }
    var re = this.strict ? this.reservedWordsStrict : this.reservedWords;
    if (re.test(name)) {
      if (!this.inAsync && name === "await")
        { this.raiseRecoverable(start, "Cannot use keyword 'await' outside an async function"); }
      this.raiseRecoverable(start, ("The keyword '" + name + "' is reserved"));
    }
  };

  // Parse the next token as an identifier. If `liberal` is true (used
  // when parsing properties), it will also convert keywords into
  // identifiers.

  pp$5.parseIdent = function(liberal) {
    var node = this.parseIdentNode();
    this.next(!!liberal);
    this.finishNode(node, "Identifier");
    if (!liberal) {
      this.checkUnreserved(node);
      if (node.name === "await" && !this.awaitIdentPos)
        { this.awaitIdentPos = node.start; }
    }
    return node
  };

  pp$5.parseIdentNode = function() {
    var node = this.startNode();
    if (this.type === types$1.name) {
      node.name = this.value;
    } else if (this.type.keyword) {
      node.name = this.type.keyword;

      // To fix https://github.com/acornjs/acorn/issues/575
      // `class` and `function` keywords push new context into this.context.
      // But there is no chance to pop the context if the keyword is consumed as an identifier such as a property name.
      // If the previous token is a dot, this does not apply because the context-managing code already ignored the keyword
      if ((node.name === "class" || node.name === "function") &&
        (this.lastTokEnd !== this.lastTokStart + 1 || this.input.charCodeAt(this.lastTokStart) !== 46)) {
        this.context.pop();
      }
    } else {
      this.unexpected();
    }
    return node
  };

  pp$5.parsePrivateIdent = function() {
    var node = this.startNode();
    if (this.type === types$1.privateId) {
      node.name = this.value;
    } else {
      this.unexpected();
    }
    this.next();
    this.finishNode(node, "PrivateIdentifier");

    // For validating existence
    if (this.options.checkPrivateFields) {
      if (this.privateNameStack.length === 0) {
        this.raise(node.start, ("Private field '#" + (node.name) + "' must be declared in an enclosing class"));
      } else {
        this.privateNameStack[this.privateNameStack.length - 1].used.push(node);
      }
    }

    return node
  };

  // Parses yield expression inside generator.

  pp$5.parseYield = function(forInit) {
    if (!this.yieldPos) { this.yieldPos = this.start; }

    var node = this.startNode();
    this.next();
    if (this.type === types$1.semi || this.canInsertSemicolon() || (this.type !== types$1.star && !this.type.startsExpr)) {
      node.delegate = false;
      node.argument = null;
    } else {
      node.delegate = this.eat(types$1.star);
      node.argument = this.parseMaybeAssign(forInit);
    }
    return this.finishNode(node, "YieldExpression")
  };

  pp$5.parseAwait = function(forInit) {
    if (!this.awaitPos) { this.awaitPos = this.start; }

    var node = this.startNode();
    this.next();
    node.argument = this.parseMaybeUnary(null, true, false, forInit);
    return this.finishNode(node, "AwaitExpression")
  };

  var pp$4 = Parser.prototype;

  // This function is used to raise exceptions on parse errors. It
  // takes an offset integer (into the current `input`) to indicate
  // the location of the error, attaches the position to the end
  // of the error message, and then raises a `SyntaxError` with that
  // message.

  pp$4.raise = function(pos, message) {
    var loc = getLineInfo(this.input, pos);
    message += " (" + loc.line + ":" + loc.column + ")";
    var err = new SyntaxError(message);
    err.pos = pos; err.loc = loc; err.raisedAt = this.pos;
    throw err
  };

  pp$4.raiseRecoverable = pp$4.raise;

  pp$4.curPosition = function() {
    if (this.options.locations) {
      return new Position(this.curLine, this.pos - this.lineStart)
    }
  };

  var pp$3 = Parser.prototype;

  var Scope = function Scope(flags) {
    this.flags = flags;
    // A list of var-declared names in the current lexical scope
    this.var = [];
    // A list of lexically-declared names in the current lexical scope
    this.lexical = [];
    // A list of lexically-declared FunctionDeclaration names in the current lexical scope
    this.functions = [];
    // A switch to disallow the identifier reference 'arguments'
    this.inClassFieldInit = false;
  };

  // The functions in this module keep track of declared variables in the current scope in order to detect duplicate variable names.

  pp$3.enterScope = function(flags) {
    this.scopeStack.push(new Scope(flags));
  };

  pp$3.exitScope = function() {
    this.scopeStack.pop();
  };

  // The spec says:
  // > At the top level of a function, or script, function declarations are
  // > treated like var declarations rather than like lexical declarations.
  pp$3.treatFunctionsAsVarInScope = function(scope) {
    return (scope.flags & SCOPE_FUNCTION) || !this.inModule && (scope.flags & SCOPE_TOP)
  };

  pp$3.declareName = function(name, bindingType, pos) {
    var redeclared = false;
    if (bindingType === BIND_LEXICAL) {
      var scope = this.currentScope();
      redeclared = scope.lexical.indexOf(name) > -1 || scope.functions.indexOf(name) > -1 || scope.var.indexOf(name) > -1;
      scope.lexical.push(name);
      if (this.inModule && (scope.flags & SCOPE_TOP))
        { delete this.undefinedExports[name]; }
    } else if (bindingType === BIND_SIMPLE_CATCH) {
      var scope$1 = this.currentScope();
      scope$1.lexical.push(name);
    } else if (bindingType === BIND_FUNCTION) {
      var scope$2 = this.currentScope();
      if (this.treatFunctionsAsVar)
        { redeclared = scope$2.lexical.indexOf(name) > -1; }
      else
        { redeclared = scope$2.lexical.indexOf(name) > -1 || scope$2.var.indexOf(name) > -1; }
      scope$2.functions.push(name);
    } else {
      for (var i = this.scopeStack.length - 1; i >= 0; --i) {
        var scope$3 = this.scopeStack[i];
        if (scope$3.lexical.indexOf(name) > -1 && !((scope$3.flags & SCOPE_SIMPLE_CATCH) && scope$3.lexical[0] === name) ||
            !this.treatFunctionsAsVarInScope(scope$3) && scope$3.functions.indexOf(name) > -1) {
          redeclared = true;
          break
        }
        scope$3.var.push(name);
        if (this.inModule && (scope$3.flags & SCOPE_TOP))
          { delete this.undefinedExports[name]; }
        if (scope$3.flags & SCOPE_VAR) { break }
      }
    }
    if (redeclared) { this.raiseRecoverable(pos, ("Identifier '" + name + "' has already been declared")); }
  };

  pp$3.checkLocalExport = function(id) {
    // scope.functions must be empty as Module code is always strict.
    if (this.scopeStack[0].lexical.indexOf(id.name) === -1 &&
        this.scopeStack[0].var.indexOf(id.name) === -1) {
      this.undefinedExports[id.name] = id;
    }
  };

  pp$3.currentScope = function() {
    return this.scopeStack[this.scopeStack.length - 1]
  };

  pp$3.currentVarScope = function() {
    for (var i = this.scopeStack.length - 1;; i--) {
      var scope = this.scopeStack[i];
      if (scope.flags & SCOPE_VAR) { return scope }
    }
  };

  // Could be useful for `this`, `new.target`, `super()`, `super.property`, and `super[property]`.
  pp$3.currentThisScope = function() {
    for (var i = this.scopeStack.length - 1;; i--) {
      var scope = this.scopeStack[i];
      if (scope.flags & SCOPE_VAR && !(scope.flags & SCOPE_ARROW)) { return scope }
    }
  };

  var Node$1 = function Node(parser, pos, loc) {
    this.type = "";
    this.start = pos;
    this.end = 0;
    if (parser.options.locations)
      { this.loc = new SourceLocation(parser, loc); }
    if (parser.options.directSourceFile)
      { this.sourceFile = parser.options.directSourceFile; }
    if (parser.options.ranges)
      { this.range = [pos, 0]; }
  };

  // Start an AST node, attaching a start offset.

  var pp$2 = Parser.prototype;

  pp$2.startNode = function() {
    return new Node$1(this, this.start, this.startLoc)
  };

  pp$2.startNodeAt = function(pos, loc) {
    return new Node$1(this, pos, loc)
  };

  // Finish an AST node, adding `type` and `end` properties.

  function finishNodeAt(node, type, pos, loc) {
    node.type = type;
    node.end = pos;
    if (this.options.locations)
      { node.loc.end = loc; }
    if (this.options.ranges)
      { node.range[1] = pos; }
    return node
  }

  pp$2.finishNode = function(node, type) {
    return finishNodeAt.call(this, node, type, this.lastTokEnd, this.lastTokEndLoc)
  };

  // Finish node at given position

  pp$2.finishNodeAt = function(node, type, pos, loc) {
    return finishNodeAt.call(this, node, type, pos, loc)
  };

  pp$2.copyNode = function(node) {
    var newNode = new Node$1(this, node.start, this.startLoc);
    for (var prop in node) { newNode[prop] = node[prop]; }
    return newNode
  };

  // This file contains Unicode properties extracted from the ECMAScript specification.
  // The lists are extracted like so:
  // $$('#table-binary-unicode-properties > figure > table > tbody > tr > td:nth-child(1) code').map(el => el.innerText)

  // #table-binary-unicode-properties
  var ecma9BinaryProperties = "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS";
  var ecma10BinaryProperties = ecma9BinaryProperties + " Extended_Pictographic";
  var ecma11BinaryProperties = ecma10BinaryProperties;
  var ecma12BinaryProperties = ecma11BinaryProperties + " EBase EComp EMod EPres ExtPict";
  var ecma13BinaryProperties = ecma12BinaryProperties;
  var ecma14BinaryProperties = ecma13BinaryProperties;

  var unicodeBinaryProperties = {
    9: ecma9BinaryProperties,
    10: ecma10BinaryProperties,
    11: ecma11BinaryProperties,
    12: ecma12BinaryProperties,
    13: ecma13BinaryProperties,
    14: ecma14BinaryProperties
  };

  // #table-binary-unicode-properties-of-strings
  var ecma14BinaryPropertiesOfStrings = "Basic_Emoji Emoji_Keycap_Sequence RGI_Emoji_Modifier_Sequence RGI_Emoji_Flag_Sequence RGI_Emoji_Tag_Sequence RGI_Emoji_ZWJ_Sequence RGI_Emoji";

  var unicodeBinaryPropertiesOfStrings = {
    9: "",
    10: "",
    11: "",
    12: "",
    13: "",
    14: ecma14BinaryPropertiesOfStrings
  };

  // #table-unicode-general-category-values
  var unicodeGeneralCategoryValues = "Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu";

  // #table-unicode-script-values
  var ecma9ScriptValues = "Adlam Adlm Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb";
  var ecma10ScriptValues = ecma9ScriptValues + " Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd";
  var ecma11ScriptValues = ecma10ScriptValues + " Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho";
  var ecma12ScriptValues = ecma11ScriptValues + " Chorasmian Chrs Diak Dives_Akuru Khitan_Small_Script Kits Yezi Yezidi";
  var ecma13ScriptValues = ecma12ScriptValues + " Cypro_Minoan Cpmn Old_Uyghur Ougr Tangsa Tnsa Toto Vithkuqi Vith";
  var ecma14ScriptValues = ecma13ScriptValues + " Hrkt Katakana_Or_Hiragana Kawi Nag_Mundari Nagm Unknown Zzzz";

  var unicodeScriptValues = {
    9: ecma9ScriptValues,
    10: ecma10ScriptValues,
    11: ecma11ScriptValues,
    12: ecma12ScriptValues,
    13: ecma13ScriptValues,
    14: ecma14ScriptValues
  };

  var data = {};
  function buildUnicodeData(ecmaVersion) {
    var d = data[ecmaVersion] = {
      binary: wordsRegexp(unicodeBinaryProperties[ecmaVersion] + " " + unicodeGeneralCategoryValues),
      binaryOfStrings: wordsRegexp(unicodeBinaryPropertiesOfStrings[ecmaVersion]),
      nonBinary: {
        General_Category: wordsRegexp(unicodeGeneralCategoryValues),
        Script: wordsRegexp(unicodeScriptValues[ecmaVersion])
      }
    };
    d.nonBinary.Script_Extensions = d.nonBinary.Script;

    d.nonBinary.gc = d.nonBinary.General_Category;
    d.nonBinary.sc = d.nonBinary.Script;
    d.nonBinary.scx = d.nonBinary.Script_Extensions;
  }

  for (var i$1 = 0, list = [9, 10, 11, 12, 13, 14]; i$1 < list.length; i$1 += 1) {
    var ecmaVersion = list[i$1];

    buildUnicodeData(ecmaVersion);
  }

  var pp$1 = Parser.prototype;

  var RegExpValidationState = function RegExpValidationState(parser) {
    this.parser = parser;
    this.validFlags = "gim" + (parser.options.ecmaVersion >= 6 ? "uy" : "") + (parser.options.ecmaVersion >= 9 ? "s" : "") + (parser.options.ecmaVersion >= 13 ? "d" : "") + (parser.options.ecmaVersion >= 15 ? "v" : "");
    this.unicodeProperties = data[parser.options.ecmaVersion >= 14 ? 14 : parser.options.ecmaVersion];
    this.source = "";
    this.flags = "";
    this.start = 0;
    this.switchU = false;
    this.switchV = false;
    this.switchN = false;
    this.pos = 0;
    this.lastIntValue = 0;
    this.lastStringValue = "";
    this.lastAssertionIsQuantifiable = false;
    this.numCapturingParens = 0;
    this.maxBackReference = 0;
    this.groupNames = [];
    this.backReferenceNames = [];
  };

  RegExpValidationState.prototype.reset = function reset (start, pattern, flags) {
    var unicodeSets = flags.indexOf("v") !== -1;
    var unicode = flags.indexOf("u") !== -1;
    this.start = start | 0;
    this.source = pattern + "";
    this.flags = flags;
    if (unicodeSets && this.parser.options.ecmaVersion >= 15) {
      this.switchU = true;
      this.switchV = true;
      this.switchN = true;
    } else {
      this.switchU = unicode && this.parser.options.ecmaVersion >= 6;
      this.switchV = false;
      this.switchN = unicode && this.parser.options.ecmaVersion >= 9;
    }
  };

  RegExpValidationState.prototype.raise = function raise (message) {
    this.parser.raiseRecoverable(this.start, ("Invalid regular expression: /" + (this.source) + "/: " + message));
  };

  // If u flag is given, this returns the code point at the index (it combines a surrogate pair).
  // Otherwise, this returns the code unit of the index (can be a part of a surrogate pair).
  RegExpValidationState.prototype.at = function at (i, forceU) {
      if ( forceU === void 0 ) forceU = false;

    var s = this.source;
    var l = s.length;
    if (i >= l) {
      return -1
    }
    var c = s.charCodeAt(i);
    if (!(forceU || this.switchU) || c <= 0xD7FF || c >= 0xE000 || i + 1 >= l) {
      return c
    }
    var next = s.charCodeAt(i + 1);
    return next >= 0xDC00 && next <= 0xDFFF ? (c << 10) + next - 0x35FDC00 : c
  };

  RegExpValidationState.prototype.nextIndex = function nextIndex (i, forceU) {
      if ( forceU === void 0 ) forceU = false;

    var s = this.source;
    var l = s.length;
    if (i >= l) {
      return l
    }
    var c = s.charCodeAt(i), next;
    if (!(forceU || this.switchU) || c <= 0xD7FF || c >= 0xE000 || i + 1 >= l ||
        (next = s.charCodeAt(i + 1)) < 0xDC00 || next > 0xDFFF) {
      return i + 1
    }
    return i + 2
  };

  RegExpValidationState.prototype.current = function current (forceU) {
      if ( forceU === void 0 ) forceU = false;

    return this.at(this.pos, forceU)
  };

  RegExpValidationState.prototype.lookahead = function lookahead (forceU) {
      if ( forceU === void 0 ) forceU = false;

    return this.at(this.nextIndex(this.pos, forceU), forceU)
  };

  RegExpValidationState.prototype.advance = function advance (forceU) {
      if ( forceU === void 0 ) forceU = false;

    this.pos = this.nextIndex(this.pos, forceU);
  };

  RegExpValidationState.prototype.eat = function eat (ch, forceU) {
      if ( forceU === void 0 ) forceU = false;

    if (this.current(forceU) === ch) {
      this.advance(forceU);
      return true
    }
    return false
  };

  RegExpValidationState.prototype.eatChars = function eatChars (chs, forceU) {
      if ( forceU === void 0 ) forceU = false;

    var pos = this.pos;
    for (var i = 0, list = chs; i < list.length; i += 1) {
      var ch = list[i];

        var current = this.at(pos, forceU);
      if (current === -1 || current !== ch) {
        return false
      }
      pos = this.nextIndex(pos, forceU);
    }
    this.pos = pos;
    return true
  };

  /**
   * Validate the flags part of a given RegExpLiteral.
   *
   * @param {RegExpValidationState} state The state to validate RegExp.
   * @returns {void}
   */
  pp$1.validateRegExpFlags = function(state) {
    var validFlags = state.validFlags;
    var flags = state.flags;

    var u = false;
    var v = false;

    for (var i = 0; i < flags.length; i++) {
      var flag = flags.charAt(i);
      if (validFlags.indexOf(flag) === -1) {
        this.raise(state.start, "Invalid regular expression flag");
      }
      if (flags.indexOf(flag, i + 1) > -1) {
        this.raise(state.start, "Duplicate regular expression flag");
      }
      if (flag === "u") { u = true; }
      if (flag === "v") { v = true; }
    }
    if (this.options.ecmaVersion >= 15 && u && v) {
      this.raise(state.start, "Invalid regular expression flag");
    }
  };

  /**
   * Validate the pattern part of a given RegExpLiteral.
   *
   * @param {RegExpValidationState} state The state to validate RegExp.
   * @returns {void}
   */
  pp$1.validateRegExpPattern = function(state) {
    this.regexp_pattern(state);

    // The goal symbol for the parse is |Pattern[~U, ~N]|. If the result of
    // parsing contains a |GroupName|, reparse with the goal symbol
    // |Pattern[~U, +N]| and use this result instead. Throw a *SyntaxError*
    // exception if _P_ did not conform to the grammar, if any elements of _P_
    // were not matched by the parse, or if any Early Error conditions exist.
    if (!state.switchN && this.options.ecmaVersion >= 9 && state.groupNames.length > 0) {
      state.switchN = true;
      this.regexp_pattern(state);
    }
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-Pattern
  pp$1.regexp_pattern = function(state) {
    state.pos = 0;
    state.lastIntValue = 0;
    state.lastStringValue = "";
    state.lastAssertionIsQuantifiable = false;
    state.numCapturingParens = 0;
    state.maxBackReference = 0;
    state.groupNames.length = 0;
    state.backReferenceNames.length = 0;

    this.regexp_disjunction(state);

    if (state.pos !== state.source.length) {
      // Make the same messages as V8.
      if (state.eat(0x29 /* ) */)) {
        state.raise("Unmatched ')'");
      }
      if (state.eat(0x5D /* ] */) || state.eat(0x7D /* } */)) {
        state.raise("Lone quantifier brackets");
      }
    }
    if (state.maxBackReference > state.numCapturingParens) {
      state.raise("Invalid escape");
    }
    for (var i = 0, list = state.backReferenceNames; i < list.length; i += 1) {
      var name = list[i];

      if (state.groupNames.indexOf(name) === -1) {
        state.raise("Invalid named capture referenced");
      }
    }
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-Disjunction
  pp$1.regexp_disjunction = function(state) {
    this.regexp_alternative(state);
    while (state.eat(0x7C /* | */)) {
      this.regexp_alternative(state);
    }

    // Make the same message as V8.
    if (this.regexp_eatQuantifier(state, true)) {
      state.raise("Nothing to repeat");
    }
    if (state.eat(0x7B /* { */)) {
      state.raise("Lone quantifier brackets");
    }
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-Alternative
  pp$1.regexp_alternative = function(state) {
    while (state.pos < state.source.length && this.regexp_eatTerm(state))
      { }
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-Term
  pp$1.regexp_eatTerm = function(state) {
    if (this.regexp_eatAssertion(state)) {
      // Handle `QuantifiableAssertion Quantifier` alternative.
      // `state.lastAssertionIsQuantifiable` is true if the last eaten Assertion
      // is a QuantifiableAssertion.
      if (state.lastAssertionIsQuantifiable && this.regexp_eatQuantifier(state)) {
        // Make the same message as V8.
        if (state.switchU) {
          state.raise("Invalid quantifier");
        }
      }
      return true
    }

    if (state.switchU ? this.regexp_eatAtom(state) : this.regexp_eatExtendedAtom(state)) {
      this.regexp_eatQuantifier(state);
      return true
    }

    return false
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-Assertion
  pp$1.regexp_eatAssertion = function(state) {
    var start = state.pos;
    state.lastAssertionIsQuantifiable = false;

    // ^, $
    if (state.eat(0x5E /* ^ */) || state.eat(0x24 /* $ */)) {
      return true
    }

    // \b \B
    if (state.eat(0x5C /* \ */)) {
      if (state.eat(0x42 /* B */) || state.eat(0x62 /* b */)) {
        return true
      }
      state.pos = start;
    }

    // Lookahead / Lookbehind
    if (state.eat(0x28 /* ( */) && state.eat(0x3F /* ? */)) {
      var lookbehind = false;
      if (this.options.ecmaVersion >= 9) {
        lookbehind = state.eat(0x3C /* < */);
      }
      if (state.eat(0x3D /* = */) || state.eat(0x21 /* ! */)) {
        this.regexp_disjunction(state);
        if (!state.eat(0x29 /* ) */)) {
          state.raise("Unterminated group");
        }
        state.lastAssertionIsQuantifiable = !lookbehind;
        return true
      }
    }

    state.pos = start;
    return false
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-Quantifier
  pp$1.regexp_eatQuantifier = function(state, noError) {
    if ( noError === void 0 ) noError = false;

    if (this.regexp_eatQuantifierPrefix(state, noError)) {
      state.eat(0x3F /* ? */);
      return true
    }
    return false
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-QuantifierPrefix
  pp$1.regexp_eatQuantifierPrefix = function(state, noError) {
    return (
      state.eat(0x2A /* * */) ||
      state.eat(0x2B /* + */) ||
      state.eat(0x3F /* ? */) ||
      this.regexp_eatBracedQuantifier(state, noError)
    )
  };
  pp$1.regexp_eatBracedQuantifier = function(state, noError) {
    var start = state.pos;
    if (state.eat(0x7B /* { */)) {
      var min = 0, max = -1;
      if (this.regexp_eatDecimalDigits(state)) {
        min = state.lastIntValue;
        if (state.eat(0x2C /* , */) && this.regexp_eatDecimalDigits(state)) {
          max = state.lastIntValue;
        }
        if (state.eat(0x7D /* } */)) {
          // SyntaxError in https://www.ecma-international.org/ecma-262/8.0/#sec-term
          if (max !== -1 && max < min && !noError) {
            state.raise("numbers out of order in {} quantifier");
          }
          return true
        }
      }
      if (state.switchU && !noError) {
        state.raise("Incomplete quantifier");
      }
      state.pos = start;
    }
    return false
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-Atom
  pp$1.regexp_eatAtom = function(state) {
    return (
      this.regexp_eatPatternCharacters(state) ||
      state.eat(0x2E /* . */) ||
      this.regexp_eatReverseSolidusAtomEscape(state) ||
      this.regexp_eatCharacterClass(state) ||
      this.regexp_eatUncapturingGroup(state) ||
      this.regexp_eatCapturingGroup(state)
    )
  };
  pp$1.regexp_eatReverseSolidusAtomEscape = function(state) {
    var start = state.pos;
    if (state.eat(0x5C /* \ */)) {
      if (this.regexp_eatAtomEscape(state)) {
        return true
      }
      state.pos = start;
    }
    return false
  };
  pp$1.regexp_eatUncapturingGroup = function(state) {
    var start = state.pos;
    if (state.eat(0x28 /* ( */)) {
      if (state.eat(0x3F /* ? */) && state.eat(0x3A /* : */)) {
        this.regexp_disjunction(state);
        if (state.eat(0x29 /* ) */)) {
          return true
        }
        state.raise("Unterminated group");
      }
      state.pos = start;
    }
    return false
  };
  pp$1.regexp_eatCapturingGroup = function(state) {
    if (state.eat(0x28 /* ( */)) {
      if (this.options.ecmaVersion >= 9) {
        this.regexp_groupSpecifier(state);
      } else if (state.current() === 0x3F /* ? */) {
        state.raise("Invalid group");
      }
      this.regexp_disjunction(state);
      if (state.eat(0x29 /* ) */)) {
        state.numCapturingParens += 1;
        return true
      }
      state.raise("Unterminated group");
    }
    return false
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-ExtendedAtom
  pp$1.regexp_eatExtendedAtom = function(state) {
    return (
      state.eat(0x2E /* . */) ||
      this.regexp_eatReverseSolidusAtomEscape(state) ||
      this.regexp_eatCharacterClass(state) ||
      this.regexp_eatUncapturingGroup(state) ||
      this.regexp_eatCapturingGroup(state) ||
      this.regexp_eatInvalidBracedQuantifier(state) ||
      this.regexp_eatExtendedPatternCharacter(state)
    )
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-InvalidBracedQuantifier
  pp$1.regexp_eatInvalidBracedQuantifier = function(state) {
    if (this.regexp_eatBracedQuantifier(state, true)) {
      state.raise("Nothing to repeat");
    }
    return false
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-SyntaxCharacter
  pp$1.regexp_eatSyntaxCharacter = function(state) {
    var ch = state.current();
    if (isSyntaxCharacter(ch)) {
      state.lastIntValue = ch;
      state.advance();
      return true
    }
    return false
  };
  function isSyntaxCharacter(ch) {
    return (
      ch === 0x24 /* $ */ ||
      ch >= 0x28 /* ( */ && ch <= 0x2B /* + */ ||
      ch === 0x2E /* . */ ||
      ch === 0x3F /* ? */ ||
      ch >= 0x5B /* [ */ && ch <= 0x5E /* ^ */ ||
      ch >= 0x7B /* { */ && ch <= 0x7D /* } */
    )
  }

  // https://www.ecma-international.org/ecma-262/8.0/#prod-PatternCharacter
  // But eat eager.
  pp$1.regexp_eatPatternCharacters = function(state) {
    var start = state.pos;
    var ch = 0;
    while ((ch = state.current()) !== -1 && !isSyntaxCharacter(ch)) {
      state.advance();
    }
    return state.pos !== start
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-ExtendedPatternCharacter
  pp$1.regexp_eatExtendedPatternCharacter = function(state) {
    var ch = state.current();
    if (
      ch !== -1 &&
      ch !== 0x24 /* $ */ &&
      !(ch >= 0x28 /* ( */ && ch <= 0x2B /* + */) &&
      ch !== 0x2E /* . */ &&
      ch !== 0x3F /* ? */ &&
      ch !== 0x5B /* [ */ &&
      ch !== 0x5E /* ^ */ &&
      ch !== 0x7C /* | */
    ) {
      state.advance();
      return true
    }
    return false
  };

  // GroupSpecifier ::
  //   [empty]
  //   `?` GroupName
  pp$1.regexp_groupSpecifier = function(state) {
    if (state.eat(0x3F /* ? */)) {
      if (this.regexp_eatGroupName(state)) {
        if (state.groupNames.indexOf(state.lastStringValue) !== -1) {
          state.raise("Duplicate capture group name");
        }
        state.groupNames.push(state.lastStringValue);
        return
      }
      state.raise("Invalid group");
    }
  };

  // GroupName ::
  //   `<` RegExpIdentifierName `>`
  // Note: this updates `state.lastStringValue` property with the eaten name.
  pp$1.regexp_eatGroupName = function(state) {
    state.lastStringValue = "";
    if (state.eat(0x3C /* < */)) {
      if (this.regexp_eatRegExpIdentifierName(state) && state.eat(0x3E /* > */)) {
        return true
      }
      state.raise("Invalid capture group name");
    }
    return false
  };

  // RegExpIdentifierName ::
  //   RegExpIdentifierStart
  //   RegExpIdentifierName RegExpIdentifierPart
  // Note: this updates `state.lastStringValue` property with the eaten name.
  pp$1.regexp_eatRegExpIdentifierName = function(state) {
    state.lastStringValue = "";
    if (this.regexp_eatRegExpIdentifierStart(state)) {
      state.lastStringValue += codePointToString(state.lastIntValue);
      while (this.regexp_eatRegExpIdentifierPart(state)) {
        state.lastStringValue += codePointToString(state.lastIntValue);
      }
      return true
    }
    return false
  };

  // RegExpIdentifierStart ::
  //   UnicodeIDStart
  //   `$`
  //   `_`
  //   `\` RegExpUnicodeEscapeSequence[+U]
  pp$1.regexp_eatRegExpIdentifierStart = function(state) {
    var start = state.pos;
    var forceU = this.options.ecmaVersion >= 11;
    var ch = state.current(forceU);
    state.advance(forceU);

    if (ch === 0x5C /* \ */ && this.regexp_eatRegExpUnicodeEscapeSequence(state, forceU)) {
      ch = state.lastIntValue;
    }
    if (isRegExpIdentifierStart(ch)) {
      state.lastIntValue = ch;
      return true
    }

    state.pos = start;
    return false
  };
  function isRegExpIdentifierStart(ch) {
    return isIdentifierStart(ch, true) || ch === 0x24 /* $ */ || ch === 0x5F /* _ */
  }

  // RegExpIdentifierPart ::
  //   UnicodeIDContinue
  //   `$`
  //   `_`
  //   `\` RegExpUnicodeEscapeSequence[+U]
  //   <ZWNJ>
  //   <ZWJ>
  pp$1.regexp_eatRegExpIdentifierPart = function(state) {
    var start = state.pos;
    var forceU = this.options.ecmaVersion >= 11;
    var ch = state.current(forceU);
    state.advance(forceU);

    if (ch === 0x5C /* \ */ && this.regexp_eatRegExpUnicodeEscapeSequence(state, forceU)) {
      ch = state.lastIntValue;
    }
    if (isRegExpIdentifierPart(ch)) {
      state.lastIntValue = ch;
      return true
    }

    state.pos = start;
    return false
  };
  function isRegExpIdentifierPart(ch) {
    return isIdentifierChar(ch, true) || ch === 0x24 /* $ */ || ch === 0x5F /* _ */ || ch === 0x200C /* <ZWNJ> */ || ch === 0x200D /* <ZWJ> */
  }

  // https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-AtomEscape
  pp$1.regexp_eatAtomEscape = function(state) {
    if (
      this.regexp_eatBackReference(state) ||
      this.regexp_eatCharacterClassEscape(state) ||
      this.regexp_eatCharacterEscape(state) ||
      (state.switchN && this.regexp_eatKGroupName(state))
    ) {
      return true
    }
    if (state.switchU) {
      // Make the same message as V8.
      if (state.current() === 0x63 /* c */) {
        state.raise("Invalid unicode escape");
      }
      state.raise("Invalid escape");
    }
    return false
  };
  pp$1.regexp_eatBackReference = function(state) {
    var start = state.pos;
    if (this.regexp_eatDecimalEscape(state)) {
      var n = state.lastIntValue;
      if (state.switchU) {
        // For SyntaxError in https://www.ecma-international.org/ecma-262/8.0/#sec-atomescape
        if (n > state.maxBackReference) {
          state.maxBackReference = n;
        }
        return true
      }
      if (n <= state.numCapturingParens) {
        return true
      }
      state.pos = start;
    }
    return false
  };
  pp$1.regexp_eatKGroupName = function(state) {
    if (state.eat(0x6B /* k */)) {
      if (this.regexp_eatGroupName(state)) {
        state.backReferenceNames.push(state.lastStringValue);
        return true
      }
      state.raise("Invalid named reference");
    }
    return false
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-CharacterEscape
  pp$1.regexp_eatCharacterEscape = function(state) {
    return (
      this.regexp_eatControlEscape(state) ||
      this.regexp_eatCControlLetter(state) ||
      this.regexp_eatZero(state) ||
      this.regexp_eatHexEscapeSequence(state) ||
      this.regexp_eatRegExpUnicodeEscapeSequence(state, false) ||
      (!state.switchU && this.regexp_eatLegacyOctalEscapeSequence(state)) ||
      this.regexp_eatIdentityEscape(state)
    )
  };
  pp$1.regexp_eatCControlLetter = function(state) {
    var start = state.pos;
    if (state.eat(0x63 /* c */)) {
      if (this.regexp_eatControlLetter(state)) {
        return true
      }
      state.pos = start;
    }
    return false
  };
  pp$1.regexp_eatZero = function(state) {
    if (state.current() === 0x30 /* 0 */ && !isDecimalDigit(state.lookahead())) {
      state.lastIntValue = 0;
      state.advance();
      return true
    }
    return false
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-ControlEscape
  pp$1.regexp_eatControlEscape = function(state) {
    var ch = state.current();
    if (ch === 0x74 /* t */) {
      state.lastIntValue = 0x09; /* \t */
      state.advance();
      return true
    }
    if (ch === 0x6E /* n */) {
      state.lastIntValue = 0x0A; /* \n */
      state.advance();
      return true
    }
    if (ch === 0x76 /* v */) {
      state.lastIntValue = 0x0B; /* \v */
      state.advance();
      return true
    }
    if (ch === 0x66 /* f */) {
      state.lastIntValue = 0x0C; /* \f */
      state.advance();
      return true
    }
    if (ch === 0x72 /* r */) {
      state.lastIntValue = 0x0D; /* \r */
      state.advance();
      return true
    }
    return false
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-ControlLetter
  pp$1.regexp_eatControlLetter = function(state) {
    var ch = state.current();
    if (isControlLetter(ch)) {
      state.lastIntValue = ch % 0x20;
      state.advance();
      return true
    }
    return false
  };
  function isControlLetter(ch) {
    return (
      (ch >= 0x41 /* A */ && ch <= 0x5A /* Z */) ||
      (ch >= 0x61 /* a */ && ch <= 0x7A /* z */)
    )
  }

  // https://www.ecma-international.org/ecma-262/8.0/#prod-RegExpUnicodeEscapeSequence
  pp$1.regexp_eatRegExpUnicodeEscapeSequence = function(state, forceU) {
    if ( forceU === void 0 ) forceU = false;

    var start = state.pos;
    var switchU = forceU || state.switchU;

    if (state.eat(0x75 /* u */)) {
      if (this.regexp_eatFixedHexDigits(state, 4)) {
        var lead = state.lastIntValue;
        if (switchU && lead >= 0xD800 && lead <= 0xDBFF) {
          var leadSurrogateEnd = state.pos;
          if (state.eat(0x5C /* \ */) && state.eat(0x75 /* u */) && this.regexp_eatFixedHexDigits(state, 4)) {
            var trail = state.lastIntValue;
            if (trail >= 0xDC00 && trail <= 0xDFFF) {
              state.lastIntValue = (lead - 0xD800) * 0x400 + (trail - 0xDC00) + 0x10000;
              return true
            }
          }
          state.pos = leadSurrogateEnd;
          state.lastIntValue = lead;
        }
        return true
      }
      if (
        switchU &&
        state.eat(0x7B /* { */) &&
        this.regexp_eatHexDigits(state) &&
        state.eat(0x7D /* } */) &&
        isValidUnicode(state.lastIntValue)
      ) {
        return true
      }
      if (switchU) {
        state.raise("Invalid unicode escape");
      }
      state.pos = start;
    }

    return false
  };
  function isValidUnicode(ch) {
    return ch >= 0 && ch <= 0x10FFFF
  }

  // https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-IdentityEscape
  pp$1.regexp_eatIdentityEscape = function(state) {
    if (state.switchU) {
      if (this.regexp_eatSyntaxCharacter(state)) {
        return true
      }
      if (state.eat(0x2F /* / */)) {
        state.lastIntValue = 0x2F; /* / */
        return true
      }
      return false
    }

    var ch = state.current();
    if (ch !== 0x63 /* c */ && (!state.switchN || ch !== 0x6B /* k */)) {
      state.lastIntValue = ch;
      state.advance();
      return true
    }

    return false
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-DecimalEscape
  pp$1.regexp_eatDecimalEscape = function(state) {
    state.lastIntValue = 0;
    var ch = state.current();
    if (ch >= 0x31 /* 1 */ && ch <= 0x39 /* 9 */) {
      do {
        state.lastIntValue = 10 * state.lastIntValue + (ch - 0x30 /* 0 */);
        state.advance();
      } while ((ch = state.current()) >= 0x30 /* 0 */ && ch <= 0x39 /* 9 */)
      return true
    }
    return false
  };

  // Return values used by character set parsing methods, needed to
  // forbid negation of sets that can match strings.
  var CharSetNone = 0; // Nothing parsed
  var CharSetOk = 1; // Construct parsed, cannot contain strings
  var CharSetString = 2; // Construct parsed, can contain strings

  // https://www.ecma-international.org/ecma-262/8.0/#prod-CharacterClassEscape
  pp$1.regexp_eatCharacterClassEscape = function(state) {
    var ch = state.current();

    if (isCharacterClassEscape(ch)) {
      state.lastIntValue = -1;
      state.advance();
      return CharSetOk
    }

    var negate = false;
    if (
      state.switchU &&
      this.options.ecmaVersion >= 9 &&
      ((negate = ch === 0x50 /* P */) || ch === 0x70 /* p */)
    ) {
      state.lastIntValue = -1;
      state.advance();
      var result;
      if (
        state.eat(0x7B /* { */) &&
        (result = this.regexp_eatUnicodePropertyValueExpression(state)) &&
        state.eat(0x7D /* } */)
      ) {
        if (negate && result === CharSetString) { state.raise("Invalid property name"); }
        return result
      }
      state.raise("Invalid property name");
    }

    return CharSetNone
  };

  function isCharacterClassEscape(ch) {
    return (
      ch === 0x64 /* d */ ||
      ch === 0x44 /* D */ ||
      ch === 0x73 /* s */ ||
      ch === 0x53 /* S */ ||
      ch === 0x77 /* w */ ||
      ch === 0x57 /* W */
    )
  }

  // UnicodePropertyValueExpression ::
  //   UnicodePropertyName `=` UnicodePropertyValue
  //   LoneUnicodePropertyNameOrValue
  pp$1.regexp_eatUnicodePropertyValueExpression = function(state) {
    var start = state.pos;

    // UnicodePropertyName `=` UnicodePropertyValue
    if (this.regexp_eatUnicodePropertyName(state) && state.eat(0x3D /* = */)) {
      var name = state.lastStringValue;
      if (this.regexp_eatUnicodePropertyValue(state)) {
        var value = state.lastStringValue;
        this.regexp_validateUnicodePropertyNameAndValue(state, name, value);
        return CharSetOk
      }
    }
    state.pos = start;

    // LoneUnicodePropertyNameOrValue
    if (this.regexp_eatLoneUnicodePropertyNameOrValue(state)) {
      var nameOrValue = state.lastStringValue;
      return this.regexp_validateUnicodePropertyNameOrValue(state, nameOrValue)
    }
    return CharSetNone
  };

  pp$1.regexp_validateUnicodePropertyNameAndValue = function(state, name, value) {
    if (!hasOwn(state.unicodeProperties.nonBinary, name))
      { state.raise("Invalid property name"); }
    if (!state.unicodeProperties.nonBinary[name].test(value))
      { state.raise("Invalid property value"); }
  };

  pp$1.regexp_validateUnicodePropertyNameOrValue = function(state, nameOrValue) {
    if (state.unicodeProperties.binary.test(nameOrValue)) { return CharSetOk }
    if (state.switchV && state.unicodeProperties.binaryOfStrings.test(nameOrValue)) { return CharSetString }
    state.raise("Invalid property name");
  };

  // UnicodePropertyName ::
  //   UnicodePropertyNameCharacters
  pp$1.regexp_eatUnicodePropertyName = function(state) {
    var ch = 0;
    state.lastStringValue = "";
    while (isUnicodePropertyNameCharacter(ch = state.current())) {
      state.lastStringValue += codePointToString(ch);
      state.advance();
    }
    return state.lastStringValue !== ""
  };

  function isUnicodePropertyNameCharacter(ch) {
    return isControlLetter(ch) || ch === 0x5F /* _ */
  }

  // UnicodePropertyValue ::
  //   UnicodePropertyValueCharacters
  pp$1.regexp_eatUnicodePropertyValue = function(state) {
    var ch = 0;
    state.lastStringValue = "";
    while (isUnicodePropertyValueCharacter(ch = state.current())) {
      state.lastStringValue += codePointToString(ch);
      state.advance();
    }
    return state.lastStringValue !== ""
  };
  function isUnicodePropertyValueCharacter(ch) {
    return isUnicodePropertyNameCharacter(ch) || isDecimalDigit(ch)
  }

  // LoneUnicodePropertyNameOrValue ::
  //   UnicodePropertyValueCharacters
  pp$1.regexp_eatLoneUnicodePropertyNameOrValue = function(state) {
    return this.regexp_eatUnicodePropertyValue(state)
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-CharacterClass
  pp$1.regexp_eatCharacterClass = function(state) {
    if (state.eat(0x5B /* [ */)) {
      var negate = state.eat(0x5E /* ^ */);
      var result = this.regexp_classContents(state);
      if (!state.eat(0x5D /* ] */))
        { state.raise("Unterminated character class"); }
      if (negate && result === CharSetString)
        { state.raise("Negated character class may contain strings"); }
      return true
    }
    return false
  };

  // https://tc39.es/ecma262/#prod-ClassContents
  // https://www.ecma-international.org/ecma-262/8.0/#prod-ClassRanges
  pp$1.regexp_classContents = function(state) {
    if (state.current() === 0x5D /* ] */) { return CharSetOk }
    if (state.switchV) { return this.regexp_classSetExpression(state) }
    this.regexp_nonEmptyClassRanges(state);
    return CharSetOk
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-NonemptyClassRanges
  // https://www.ecma-international.org/ecma-262/8.0/#prod-NonemptyClassRangesNoDash
  pp$1.regexp_nonEmptyClassRanges = function(state) {
    while (this.regexp_eatClassAtom(state)) {
      var left = state.lastIntValue;
      if (state.eat(0x2D /* - */) && this.regexp_eatClassAtom(state)) {
        var right = state.lastIntValue;
        if (state.switchU && (left === -1 || right === -1)) {
          state.raise("Invalid character class");
        }
        if (left !== -1 && right !== -1 && left > right) {
          state.raise("Range out of order in character class");
        }
      }
    }
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-ClassAtom
  // https://www.ecma-international.org/ecma-262/8.0/#prod-ClassAtomNoDash
  pp$1.regexp_eatClassAtom = function(state) {
    var start = state.pos;

    if (state.eat(0x5C /* \ */)) {
      if (this.regexp_eatClassEscape(state)) {
        return true
      }
      if (state.switchU) {
        // Make the same message as V8.
        var ch$1 = state.current();
        if (ch$1 === 0x63 /* c */ || isOctalDigit(ch$1)) {
          state.raise("Invalid class escape");
        }
        state.raise("Invalid escape");
      }
      state.pos = start;
    }

    var ch = state.current();
    if (ch !== 0x5D /* ] */) {
      state.lastIntValue = ch;
      state.advance();
      return true
    }

    return false
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-ClassEscape
  pp$1.regexp_eatClassEscape = function(state) {
    var start = state.pos;

    if (state.eat(0x62 /* b */)) {
      state.lastIntValue = 0x08; /* <BS> */
      return true
    }

    if (state.switchU && state.eat(0x2D /* - */)) {
      state.lastIntValue = 0x2D; /* - */
      return true
    }

    if (!state.switchU && state.eat(0x63 /* c */)) {
      if (this.regexp_eatClassControlLetter(state)) {
        return true
      }
      state.pos = start;
    }

    return (
      this.regexp_eatCharacterClassEscape(state) ||
      this.regexp_eatCharacterEscape(state)
    )
  };

  // https://tc39.es/ecma262/#prod-ClassSetExpression
  // https://tc39.es/ecma262/#prod-ClassUnion
  // https://tc39.es/ecma262/#prod-ClassIntersection
  // https://tc39.es/ecma262/#prod-ClassSubtraction
  pp$1.regexp_classSetExpression = function(state) {
    var result = CharSetOk, subResult;
    if (this.regexp_eatClassSetRange(state)) ; else if (subResult = this.regexp_eatClassSetOperand(state)) {
      if (subResult === CharSetString) { result = CharSetString; }
      // https://tc39.es/ecma262/#prod-ClassIntersection
      var start = state.pos;
      while (state.eatChars([0x26, 0x26] /* && */)) {
        if (
          state.current() !== 0x26 /* & */ &&
          (subResult = this.regexp_eatClassSetOperand(state))
        ) {
          if (subResult !== CharSetString) { result = CharSetOk; }
          continue
        }
        state.raise("Invalid character in character class");
      }
      if (start !== state.pos) { return result }
      // https://tc39.es/ecma262/#prod-ClassSubtraction
      while (state.eatChars([0x2D, 0x2D] /* -- */)) {
        if (this.regexp_eatClassSetOperand(state)) { continue }
        state.raise("Invalid character in character class");
      }
      if (start !== state.pos) { return result }
    } else {
      state.raise("Invalid character in character class");
    }
    // https://tc39.es/ecma262/#prod-ClassUnion
    for (;;) {
      if (this.regexp_eatClassSetRange(state)) { continue }
      subResult = this.regexp_eatClassSetOperand(state);
      if (!subResult) { return result }
      if (subResult === CharSetString) { result = CharSetString; }
    }
  };

  // https://tc39.es/ecma262/#prod-ClassSetRange
  pp$1.regexp_eatClassSetRange = function(state) {
    var start = state.pos;
    if (this.regexp_eatClassSetCharacter(state)) {
      var left = state.lastIntValue;
      if (state.eat(0x2D /* - */) && this.regexp_eatClassSetCharacter(state)) {
        var right = state.lastIntValue;
        if (left !== -1 && right !== -1 && left > right) {
          state.raise("Range out of order in character class");
        }
        return true
      }
      state.pos = start;
    }
    return false
  };

  // https://tc39.es/ecma262/#prod-ClassSetOperand
  pp$1.regexp_eatClassSetOperand = function(state) {
    if (this.regexp_eatClassSetCharacter(state)) { return CharSetOk }
    return this.regexp_eatClassStringDisjunction(state) || this.regexp_eatNestedClass(state)
  };

  // https://tc39.es/ecma262/#prod-NestedClass
  pp$1.regexp_eatNestedClass = function(state) {
    var start = state.pos;
    if (state.eat(0x5B /* [ */)) {
      var negate = state.eat(0x5E /* ^ */);
      var result = this.regexp_classContents(state);
      if (state.eat(0x5D /* ] */)) {
        if (negate && result === CharSetString) {
          state.raise("Negated character class may contain strings");
        }
        return result
      }
      state.pos = start;
    }
    if (state.eat(0x5C /* \ */)) {
      var result$1 = this.regexp_eatCharacterClassEscape(state);
      if (result$1) {
        return result$1
      }
      state.pos = start;
    }
    return null
  };

  // https://tc39.es/ecma262/#prod-ClassStringDisjunction
  pp$1.regexp_eatClassStringDisjunction = function(state) {
    var start = state.pos;
    if (state.eatChars([0x5C, 0x71] /* \q */)) {
      if (state.eat(0x7B /* { */)) {
        var result = this.regexp_classStringDisjunctionContents(state);
        if (state.eat(0x7D /* } */)) {
          return result
        }
      } else {
        // Make the same message as V8.
        state.raise("Invalid escape");
      }
      state.pos = start;
    }
    return null
  };

  // https://tc39.es/ecma262/#prod-ClassStringDisjunctionContents
  pp$1.regexp_classStringDisjunctionContents = function(state) {
    var result = this.regexp_classString(state);
    while (state.eat(0x7C /* | */)) {
      if (this.regexp_classString(state) === CharSetString) { result = CharSetString; }
    }
    return result
  };

  // https://tc39.es/ecma262/#prod-ClassString
  // https://tc39.es/ecma262/#prod-NonEmptyClassString
  pp$1.regexp_classString = function(state) {
    var count = 0;
    while (this.regexp_eatClassSetCharacter(state)) { count++; }
    return count === 1 ? CharSetOk : CharSetString
  };

  // https://tc39.es/ecma262/#prod-ClassSetCharacter
  pp$1.regexp_eatClassSetCharacter = function(state) {
    var start = state.pos;
    if (state.eat(0x5C /* \ */)) {
      if (
        this.regexp_eatCharacterEscape(state) ||
        this.regexp_eatClassSetReservedPunctuator(state)
      ) {
        return true
      }
      if (state.eat(0x62 /* b */)) {
        state.lastIntValue = 0x08; /* <BS> */
        return true
      }
      state.pos = start;
      return false
    }
    var ch = state.current();
    if (ch < 0 || ch === state.lookahead() && isClassSetReservedDoublePunctuatorCharacter(ch)) { return false }
    if (isClassSetSyntaxCharacter(ch)) { return false }
    state.advance();
    state.lastIntValue = ch;
    return true
  };

  // https://tc39.es/ecma262/#prod-ClassSetReservedDoublePunctuator
  function isClassSetReservedDoublePunctuatorCharacter(ch) {
    return (
      ch === 0x21 /* ! */ ||
      ch >= 0x23 /* # */ && ch <= 0x26 /* & */ ||
      ch >= 0x2A /* * */ && ch <= 0x2C /* , */ ||
      ch === 0x2E /* . */ ||
      ch >= 0x3A /* : */ && ch <= 0x40 /* @ */ ||
      ch === 0x5E /* ^ */ ||
      ch === 0x60 /* ` */ ||
      ch === 0x7E /* ~ */
    )
  }

  // https://tc39.es/ecma262/#prod-ClassSetSyntaxCharacter
  function isClassSetSyntaxCharacter(ch) {
    return (
      ch === 0x28 /* ( */ ||
      ch === 0x29 /* ) */ ||
      ch === 0x2D /* - */ ||
      ch === 0x2F /* / */ ||
      ch >= 0x5B /* [ */ && ch <= 0x5D /* ] */ ||
      ch >= 0x7B /* { */ && ch <= 0x7D /* } */
    )
  }

  // https://tc39.es/ecma262/#prod-ClassSetReservedPunctuator
  pp$1.regexp_eatClassSetReservedPunctuator = function(state) {
    var ch = state.current();
    if (isClassSetReservedPunctuator(ch)) {
      state.lastIntValue = ch;
      state.advance();
      return true
    }
    return false
  };

  // https://tc39.es/ecma262/#prod-ClassSetReservedPunctuator
  function isClassSetReservedPunctuator(ch) {
    return (
      ch === 0x21 /* ! */ ||
      ch === 0x23 /* # */ ||
      ch === 0x25 /* % */ ||
      ch === 0x26 /* & */ ||
      ch === 0x2C /* , */ ||
      ch === 0x2D /* - */ ||
      ch >= 0x3A /* : */ && ch <= 0x3E /* > */ ||
      ch === 0x40 /* @ */ ||
      ch === 0x60 /* ` */ ||
      ch === 0x7E /* ~ */
    )
  }

  // https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-ClassControlLetter
  pp$1.regexp_eatClassControlLetter = function(state) {
    var ch = state.current();
    if (isDecimalDigit(ch) || ch === 0x5F /* _ */) {
      state.lastIntValue = ch % 0x20;
      state.advance();
      return true
    }
    return false
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-HexEscapeSequence
  pp$1.regexp_eatHexEscapeSequence = function(state) {
    var start = state.pos;
    if (state.eat(0x78 /* x */)) {
      if (this.regexp_eatFixedHexDigits(state, 2)) {
        return true
      }
      if (state.switchU) {
        state.raise("Invalid escape");
      }
      state.pos = start;
    }
    return false
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-DecimalDigits
  pp$1.regexp_eatDecimalDigits = function(state) {
    var start = state.pos;
    var ch = 0;
    state.lastIntValue = 0;
    while (isDecimalDigit(ch = state.current())) {
      state.lastIntValue = 10 * state.lastIntValue + (ch - 0x30 /* 0 */);
      state.advance();
    }
    return state.pos !== start
  };
  function isDecimalDigit(ch) {
    return ch >= 0x30 /* 0 */ && ch <= 0x39 /* 9 */
  }

  // https://www.ecma-international.org/ecma-262/8.0/#prod-HexDigits
  pp$1.regexp_eatHexDigits = function(state) {
    var start = state.pos;
    var ch = 0;
    state.lastIntValue = 0;
    while (isHexDigit(ch = state.current())) {
      state.lastIntValue = 16 * state.lastIntValue + hexToInt(ch);
      state.advance();
    }
    return state.pos !== start
  };
  function isHexDigit(ch) {
    return (
      (ch >= 0x30 /* 0 */ && ch <= 0x39 /* 9 */) ||
      (ch >= 0x41 /* A */ && ch <= 0x46 /* F */) ||
      (ch >= 0x61 /* a */ && ch <= 0x66 /* f */)
    )
  }
  function hexToInt(ch) {
    if (ch >= 0x41 /* A */ && ch <= 0x46 /* F */) {
      return 10 + (ch - 0x41 /* A */)
    }
    if (ch >= 0x61 /* a */ && ch <= 0x66 /* f */) {
      return 10 + (ch - 0x61 /* a */)
    }
    return ch - 0x30 /* 0 */
  }

  // https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-LegacyOctalEscapeSequence
  // Allows only 0-377(octal) i.e. 0-255(decimal).
  pp$1.regexp_eatLegacyOctalEscapeSequence = function(state) {
    if (this.regexp_eatOctalDigit(state)) {
      var n1 = state.lastIntValue;
      if (this.regexp_eatOctalDigit(state)) {
        var n2 = state.lastIntValue;
        if (n1 <= 3 && this.regexp_eatOctalDigit(state)) {
          state.lastIntValue = n1 * 64 + n2 * 8 + state.lastIntValue;
        } else {
          state.lastIntValue = n1 * 8 + n2;
        }
      } else {
        state.lastIntValue = n1;
      }
      return true
    }
    return false
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-OctalDigit
  pp$1.regexp_eatOctalDigit = function(state) {
    var ch = state.current();
    if (isOctalDigit(ch)) {
      state.lastIntValue = ch - 0x30; /* 0 */
      state.advance();
      return true
    }
    state.lastIntValue = 0;
    return false
  };
  function isOctalDigit(ch) {
    return ch >= 0x30 /* 0 */ && ch <= 0x37 /* 7 */
  }

  // https://www.ecma-international.org/ecma-262/8.0/#prod-Hex4Digits
  // https://www.ecma-international.org/ecma-262/8.0/#prod-HexDigit
  // And HexDigit HexDigit in https://www.ecma-international.org/ecma-262/8.0/#prod-HexEscapeSequence
  pp$1.regexp_eatFixedHexDigits = function(state, length) {
    var start = state.pos;
    state.lastIntValue = 0;
    for (var i = 0; i < length; ++i) {
      var ch = state.current();
      if (!isHexDigit(ch)) {
        state.pos = start;
        return false
      }
      state.lastIntValue = 16 * state.lastIntValue + hexToInt(ch);
      state.advance();
    }
    return true
  };

  // Object type used to represent tokens. Note that normally, tokens
  // simply exist as properties on the parser object. This is only
  // used for the onToken callback and the external tokenizer.

  var Token = function Token(p) {
    this.type = p.type;
    this.value = p.value;
    this.start = p.start;
    this.end = p.end;
    if (p.options.locations)
      { this.loc = new SourceLocation(p, p.startLoc, p.endLoc); }
    if (p.options.ranges)
      { this.range = [p.start, p.end]; }
  };

  // ## Tokenizer

  var pp = Parser.prototype;

  // Move to the next token

  pp.next = function(ignoreEscapeSequenceInKeyword) {
    if (!ignoreEscapeSequenceInKeyword && this.type.keyword && this.containsEsc)
      { this.raiseRecoverable(this.start, "Escape sequence in keyword " + this.type.keyword); }
    if (this.options.onToken)
      { this.options.onToken(new Token(this)); }

    this.lastTokEnd = this.end;
    this.lastTokStart = this.start;
    this.lastTokEndLoc = this.endLoc;
    this.lastTokStartLoc = this.startLoc;
    this.nextToken();
  };

  pp.getToken = function() {
    this.next();
    return new Token(this)
  };

  // If we're in an ES6 environment, make parsers iterable
  if (typeof Symbol !== "undefined")
    { pp[Symbol.iterator] = function() {
      var this$1$1 = this;

      return {
        next: function () {
          var token = this$1$1.getToken();
          return {
            done: token.type === types$1.eof,
            value: token
          }
        }
      }
    }; }

  // Toggle strict mode. Re-reads the next number or string to please
  // pedantic tests (`"use strict"; 010;` should fail).

  // Read a single token, updating the parser object's token-related
  // properties.

  pp.nextToken = function() {
    var curContext = this.curContext();
    if (!curContext || !curContext.preserveSpace) { this.skipSpace(); }

    this.start = this.pos;
    if (this.options.locations) { this.startLoc = this.curPosition(); }
    if (this.pos >= this.input.length) { return this.finishToken(types$1.eof) }

    if (curContext.override) { return curContext.override(this) }
    else { this.readToken(this.fullCharCodeAtPos()); }
  };

  pp.readToken = function(code) {
    // Identifier or keyword. '\uXXXX' sequences are allowed in
    // identifiers, so '\' also dispatches to that.
    if (isIdentifierStart(code, this.options.ecmaVersion >= 6) || code === 92 /* '\' */)
      { return this.readWord() }

    return this.getTokenFromCode(code)
  };

  pp.fullCharCodeAtPos = function() {
    var code = this.input.charCodeAt(this.pos);
    if (code <= 0xd7ff || code >= 0xdc00) { return code }
    var next = this.input.charCodeAt(this.pos + 1);
    return next <= 0xdbff || next >= 0xe000 ? code : (code << 10) + next - 0x35fdc00
  };

  pp.skipBlockComment = function() {
    var startLoc = this.options.onComment && this.curPosition();
    var start = this.pos, end = this.input.indexOf("*/", this.pos += 2);
    if (end === -1) { this.raise(this.pos - 2, "Unterminated comment"); }
    this.pos = end + 2;
    if (this.options.locations) {
      for (var nextBreak = (void 0), pos = start; (nextBreak = nextLineBreak(this.input, pos, this.pos)) > -1;) {
        ++this.curLine;
        pos = this.lineStart = nextBreak;
      }
    }
    if (this.options.onComment)
      { this.options.onComment(true, this.input.slice(start + 2, end), start, this.pos,
                             startLoc, this.curPosition()); }
  };

  pp.skipLineComment = function(startSkip) {
    var start = this.pos;
    var startLoc = this.options.onComment && this.curPosition();
    var ch = this.input.charCodeAt(this.pos += startSkip);
    while (this.pos < this.input.length && !isNewLine(ch)) {
      ch = this.input.charCodeAt(++this.pos);
    }
    if (this.options.onComment)
      { this.options.onComment(false, this.input.slice(start + startSkip, this.pos), start, this.pos,
                             startLoc, this.curPosition()); }
  };

  // Called at the start of the parse and after every token. Skips
  // whitespace and comments, and.

  pp.skipSpace = function() {
    loop: while (this.pos < this.input.length) {
      var ch = this.input.charCodeAt(this.pos);
      switch (ch) {
      case 32: case 160: // ' '
        ++this.pos;
        break
      case 13:
        if (this.input.charCodeAt(this.pos + 1) === 10) {
          ++this.pos;
        }
      case 10: case 8232: case 8233:
        ++this.pos;
        if (this.options.locations) {
          ++this.curLine;
          this.lineStart = this.pos;
        }
        break
      case 47: // '/'
        switch (this.input.charCodeAt(this.pos + 1)) {
        case 42: // '*'
          this.skipBlockComment();
          break
        case 47:
          this.skipLineComment(2);
          break
        default:
          break loop
        }
        break
      default:
        if (ch > 8 && ch < 14 || ch >= 5760 && nonASCIIwhitespace.test(String.fromCharCode(ch))) {
          ++this.pos;
        } else {
          break loop
        }
      }
    }
  };

  // Called at the end of every token. Sets `end`, `val`, and
  // maintains `context` and `exprAllowed`, and skips the space after
  // the token, so that the next one's `start` will point at the
  // right position.

  pp.finishToken = function(type, val) {
    this.end = this.pos;
    if (this.options.locations) { this.endLoc = this.curPosition(); }
    var prevType = this.type;
    this.type = type;
    this.value = val;

    this.updateContext(prevType);
  };

  // ### Token reading

  // This is the function that is called to fetch the next token. It
  // is somewhat obscure, because it works in character codes rather
  // than characters, and because operator parsing has been inlined
  // into it.
  //
  // All in the name of speed.
  //
  pp.readToken_dot = function() {
    var next = this.input.charCodeAt(this.pos + 1);
    if (next >= 48 && next <= 57) { return this.readNumber(true) }
    var next2 = this.input.charCodeAt(this.pos + 2);
    if (this.options.ecmaVersion >= 6 && next === 46 && next2 === 46) { // 46 = dot '.'
      this.pos += 3;
      return this.finishToken(types$1.ellipsis)
    } else {
      ++this.pos;
      return this.finishToken(types$1.dot)
    }
  };

  pp.readToken_slash = function() { // '/'
    var next = this.input.charCodeAt(this.pos + 1);
    if (this.exprAllowed) { ++this.pos; return this.readRegexp() }
    if (next === 61) { return this.finishOp(types$1.assign, 2) }
    return this.finishOp(types$1.slash, 1)
  };

  pp.readToken_mult_modulo_exp = function(code) { // '%*'
    var next = this.input.charCodeAt(this.pos + 1);
    var size = 1;
    var tokentype = code === 42 ? types$1.star : types$1.modulo;

    // exponentiation operator ** and **=
    if (this.options.ecmaVersion >= 7 && code === 42 && next === 42) {
      ++size;
      tokentype = types$1.starstar;
      next = this.input.charCodeAt(this.pos + 2);
    }

    if (next === 61) { return this.finishOp(types$1.assign, size + 1) }
    return this.finishOp(tokentype, size)
  };

  pp.readToken_pipe_amp = function(code) { // '|&'
    var next = this.input.charCodeAt(this.pos + 1);
    if (next === code) {
      if (this.options.ecmaVersion >= 12) {
        var next2 = this.input.charCodeAt(this.pos + 2);
        if (next2 === 61) { return this.finishOp(types$1.assign, 3) }
      }
      return this.finishOp(code === 124 ? types$1.logicalOR : types$1.logicalAND, 2)
    }
    if (next === 61) { return this.finishOp(types$1.assign, 2) }
    return this.finishOp(code === 124 ? types$1.bitwiseOR : types$1.bitwiseAND, 1)
  };

  pp.readToken_caret = function() { // '^'
    var next = this.input.charCodeAt(this.pos + 1);
    if (next === 61) { return this.finishOp(types$1.assign, 2) }
    return this.finishOp(types$1.bitwiseXOR, 1)
  };

  pp.readToken_plus_min = function(code) { // '+-'
    var next = this.input.charCodeAt(this.pos + 1);
    if (next === code) {
      if (next === 45 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 62 &&
          (this.lastTokEnd === 0 || lineBreak.test(this.input.slice(this.lastTokEnd, this.pos)))) {
        // A `-->` line comment
        this.skipLineComment(3);
        this.skipSpace();
        return this.nextToken()
      }
      return this.finishOp(types$1.incDec, 2)
    }
    if (next === 61) { return this.finishOp(types$1.assign, 2) }
    return this.finishOp(types$1.plusMin, 1)
  };

  pp.readToken_lt_gt = function(code) { // '<>'
    var next = this.input.charCodeAt(this.pos + 1);
    var size = 1;
    if (next === code) {
      size = code === 62 && this.input.charCodeAt(this.pos + 2) === 62 ? 3 : 2;
      if (this.input.charCodeAt(this.pos + size) === 61) { return this.finishOp(types$1.assign, size + 1) }
      return this.finishOp(types$1.bitShift, size)
    }
    if (next === 33 && code === 60 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 45 &&
        this.input.charCodeAt(this.pos + 3) === 45) {
      // `<!--`, an XML-style comment that should be interpreted as a line comment
      this.skipLineComment(4);
      this.skipSpace();
      return this.nextToken()
    }
    if (next === 61) { size = 2; }
    return this.finishOp(types$1.relational, size)
  };

  pp.readToken_eq_excl = function(code) { // '=!'
    var next = this.input.charCodeAt(this.pos + 1);
    if (next === 61) { return this.finishOp(types$1.equality, this.input.charCodeAt(this.pos + 2) === 61 ? 3 : 2) }
    if (code === 61 && next === 62 && this.options.ecmaVersion >= 6) { // '=>'
      this.pos += 2;
      return this.finishToken(types$1.arrow)
    }
    return this.finishOp(code === 61 ? types$1.eq : types$1.prefix, 1)
  };

  pp.readToken_question = function() { // '?'
    var ecmaVersion = this.options.ecmaVersion;
    if (ecmaVersion >= 11) {
      var next = this.input.charCodeAt(this.pos + 1);
      if (next === 46) {
        var next2 = this.input.charCodeAt(this.pos + 2);
        if (next2 < 48 || next2 > 57) { return this.finishOp(types$1.questionDot, 2) }
      }
      if (next === 63) {
        if (ecmaVersion >= 12) {
          var next2$1 = this.input.charCodeAt(this.pos + 2);
          if (next2$1 === 61) { return this.finishOp(types$1.assign, 3) }
        }
        return this.finishOp(types$1.coalesce, 2)
      }
    }
    return this.finishOp(types$1.question, 1)
  };

  pp.readToken_numberSign = function() { // '#'
    var ecmaVersion = this.options.ecmaVersion;
    var code = 35; // '#'
    if (ecmaVersion >= 13) {
      ++this.pos;
      code = this.fullCharCodeAtPos();
      if (isIdentifierStart(code, true) || code === 92 /* '\' */) {
        return this.finishToken(types$1.privateId, this.readWord1())
      }
    }

    this.raise(this.pos, "Unexpected character '" + codePointToString(code) + "'");
  };

  pp.getTokenFromCode = function(code) {
    switch (code) {
    // The interpretation of a dot depends on whether it is followed
    // by a digit or another two dots.
    case 46: // '.'
      return this.readToken_dot()

    // Punctuation tokens.
    case 40: ++this.pos; return this.finishToken(types$1.parenL)
    case 41: ++this.pos; return this.finishToken(types$1.parenR)
    case 59: ++this.pos; return this.finishToken(types$1.semi)
    case 44: ++this.pos; return this.finishToken(types$1.comma)
    case 91: ++this.pos; return this.finishToken(types$1.bracketL)
    case 93: ++this.pos; return this.finishToken(types$1.bracketR)
    case 123: ++this.pos; return this.finishToken(types$1.braceL)
    case 125: ++this.pos; return this.finishToken(types$1.braceR)
    case 58: ++this.pos; return this.finishToken(types$1.colon)

    case 96: // '`'
      if (this.options.ecmaVersion < 6) { break }
      ++this.pos;
      return this.finishToken(types$1.backQuote)

    case 48: // '0'
      var next = this.input.charCodeAt(this.pos + 1);
      if (next === 120 || next === 88) { return this.readRadixNumber(16) } // '0x', '0X' - hex number
      if (this.options.ecmaVersion >= 6) {
        if (next === 111 || next === 79) { return this.readRadixNumber(8) } // '0o', '0O' - octal number
        if (next === 98 || next === 66) { return this.readRadixNumber(2) } // '0b', '0B' - binary number
      }

    // Anything else beginning with a digit is an integer, octal
    // number, or float.
    case 49: case 50: case 51: case 52: case 53: case 54: case 55: case 56: case 57: // 1-9
      return this.readNumber(false)

    // Quotes produce strings.
    case 34: case 39: // '"', "'"
      return this.readString(code)

    // Operators are parsed inline in tiny state machines. '=' (61) is
    // often referred to. `finishOp` simply skips the amount of
    // characters it is given as second argument, and returns a token
    // of the type given by its first argument.
    case 47: // '/'
      return this.readToken_slash()

    case 37: case 42: // '%*'
      return this.readToken_mult_modulo_exp(code)

    case 124: case 38: // '|&'
      return this.readToken_pipe_amp(code)

    case 94: // '^'
      return this.readToken_caret()

    case 43: case 45: // '+-'
      return this.readToken_plus_min(code)

    case 60: case 62: // '<>'
      return this.readToken_lt_gt(code)

    case 61: case 33: // '=!'
      return this.readToken_eq_excl(code)

    case 63: // '?'
      return this.readToken_question()

    case 126: // '~'
      return this.finishOp(types$1.prefix, 1)

    case 35: // '#'
      return this.readToken_numberSign()
    }

    this.raise(this.pos, "Unexpected character '" + codePointToString(code) + "'");
  };

  pp.finishOp = function(type, size) {
    var str = this.input.slice(this.pos, this.pos + size);
    this.pos += size;
    return this.finishToken(type, str)
  };

  pp.readRegexp = function() {
    var escaped, inClass, start = this.pos;
    for (;;) {
      if (this.pos >= this.input.length) { this.raise(start, "Unterminated regular expression"); }
      var ch = this.input.charAt(this.pos);
      if (lineBreak.test(ch)) { this.raise(start, "Unterminated regular expression"); }
      if (!escaped) {
        if (ch === "[") { inClass = true; }
        else if (ch === "]" && inClass) { inClass = false; }
        else if (ch === "/" && !inClass) { break }
        escaped = ch === "\\";
      } else { escaped = false; }
      ++this.pos;
    }
    var pattern = this.input.slice(start, this.pos);
    ++this.pos;
    var flagsStart = this.pos;
    var flags = this.readWord1();
    if (this.containsEsc) { this.unexpected(flagsStart); }

    // Validate pattern
    var state = this.regexpState || (this.regexpState = new RegExpValidationState(this));
    state.reset(start, pattern, flags);
    this.validateRegExpFlags(state);
    this.validateRegExpPattern(state);

    // Create Literal#value property value.
    var value = null;
    try {
      value = new RegExp(pattern, flags);
    } catch (e) {
      // ESTree requires null if it failed to instantiate RegExp object.
      // https://github.com/estree/estree/blob/a27003adf4fd7bfad44de9cef372a2eacd527b1c/es5.md#regexpliteral
    }

    return this.finishToken(types$1.regexp, {pattern: pattern, flags: flags, value: value})
  };

  // Read an integer in the given radix. Return null if zero digits
  // were read, the integer value otherwise. When `len` is given, this
  // will return `null` unless the integer has exactly `len` digits.

  pp.readInt = function(radix, len, maybeLegacyOctalNumericLiteral) {
    // `len` is used for character escape sequences. In that case, disallow separators.
    var allowSeparators = this.options.ecmaVersion >= 12 && len === undefined;

    // `maybeLegacyOctalNumericLiteral` is true if it doesn't have prefix (0x,0o,0b)
    // and isn't fraction part nor exponent part. In that case, if the first digit
    // is zero then disallow separators.
    var isLegacyOctalNumericLiteral = maybeLegacyOctalNumericLiteral && this.input.charCodeAt(this.pos) === 48;

    var start = this.pos, total = 0, lastCode = 0;
    for (var i = 0, e = len == null ? Infinity : len; i < e; ++i, ++this.pos) {
      var code = this.input.charCodeAt(this.pos), val = (void 0);

      if (allowSeparators && code === 95) {
        if (isLegacyOctalNumericLiteral) { this.raiseRecoverable(this.pos, "Numeric separator is not allowed in legacy octal numeric literals"); }
        if (lastCode === 95) { this.raiseRecoverable(this.pos, "Numeric separator must be exactly one underscore"); }
        if (i === 0) { this.raiseRecoverable(this.pos, "Numeric separator is not allowed at the first of digits"); }
        lastCode = code;
        continue
      }

      if (code >= 97) { val = code - 97 + 10; } // a
      else if (code >= 65) { val = code - 65 + 10; } // A
      else if (code >= 48 && code <= 57) { val = code - 48; } // 0-9
      else { val = Infinity; }
      if (val >= radix) { break }
      lastCode = code;
      total = total * radix + val;
    }

    if (allowSeparators && lastCode === 95) { this.raiseRecoverable(this.pos - 1, "Numeric separator is not allowed at the last of digits"); }
    if (this.pos === start || len != null && this.pos - start !== len) { return null }

    return total
  };

  function stringToNumber(str, isLegacyOctalNumericLiteral) {
    if (isLegacyOctalNumericLiteral) {
      return parseInt(str, 8)
    }

    // `parseFloat(value)` stops parsing at the first numeric separator then returns a wrong value.
    return parseFloat(str.replace(/_/g, ""))
  }

  function stringToBigInt(str) {
    if (typeof BigInt !== "function") {
      return null
    }

    // `BigInt(value)` throws syntax error if the string contains numeric separators.
    return BigInt(str.replace(/_/g, ""))
  }

  pp.readRadixNumber = function(radix) {
    var start = this.pos;
    this.pos += 2; // 0x
    var val = this.readInt(radix);
    if (val == null) { this.raise(this.start + 2, "Expected number in radix " + radix); }
    if (this.options.ecmaVersion >= 11 && this.input.charCodeAt(this.pos) === 110) {
      val = stringToBigInt(this.input.slice(start, this.pos));
      ++this.pos;
    } else if (isIdentifierStart(this.fullCharCodeAtPos())) { this.raise(this.pos, "Identifier directly after number"); }
    return this.finishToken(types$1.num, val)
  };

  // Read an integer, octal integer, or floating-point number.

  pp.readNumber = function(startsWithDot) {
    var start = this.pos;
    if (!startsWithDot && this.readInt(10, undefined, true) === null) { this.raise(start, "Invalid number"); }
    var octal = this.pos - start >= 2 && this.input.charCodeAt(start) === 48;
    if (octal && this.strict) { this.raise(start, "Invalid number"); }
    var next = this.input.charCodeAt(this.pos);
    if (!octal && !startsWithDot && this.options.ecmaVersion >= 11 && next === 110) {
      var val$1 = stringToBigInt(this.input.slice(start, this.pos));
      ++this.pos;
      if (isIdentifierStart(this.fullCharCodeAtPos())) { this.raise(this.pos, "Identifier directly after number"); }
      return this.finishToken(types$1.num, val$1)
    }
    if (octal && /[89]/.test(this.input.slice(start, this.pos))) { octal = false; }
    if (next === 46 && !octal) { // '.'
      ++this.pos;
      this.readInt(10);
      next = this.input.charCodeAt(this.pos);
    }
    if ((next === 69 || next === 101) && !octal) { // 'eE'
      next = this.input.charCodeAt(++this.pos);
      if (next === 43 || next === 45) { ++this.pos; } // '+-'
      if (this.readInt(10) === null) { this.raise(start, "Invalid number"); }
    }
    if (isIdentifierStart(this.fullCharCodeAtPos())) { this.raise(this.pos, "Identifier directly after number"); }

    var val = stringToNumber(this.input.slice(start, this.pos), octal);
    return this.finishToken(types$1.num, val)
  };

  // Read a string value, interpreting backslash-escapes.

  pp.readCodePoint = function() {
    var ch = this.input.charCodeAt(this.pos), code;

    if (ch === 123) { // '{'
      if (this.options.ecmaVersion < 6) { this.unexpected(); }
      var codePos = ++this.pos;
      code = this.readHexChar(this.input.indexOf("}", this.pos) - this.pos);
      ++this.pos;
      if (code > 0x10FFFF) { this.invalidStringToken(codePos, "Code point out of bounds"); }
    } else {
      code = this.readHexChar(4);
    }
    return code
  };

  pp.readString = function(quote) {
    var out = "", chunkStart = ++this.pos;
    for (;;) {
      if (this.pos >= this.input.length) { this.raise(this.start, "Unterminated string constant"); }
      var ch = this.input.charCodeAt(this.pos);
      if (ch === quote) { break }
      if (ch === 92) { // '\'
        out += this.input.slice(chunkStart, this.pos);
        out += this.readEscapedChar(false);
        chunkStart = this.pos;
      } else if (ch === 0x2028 || ch === 0x2029) {
        if (this.options.ecmaVersion < 10) { this.raise(this.start, "Unterminated string constant"); }
        ++this.pos;
        if (this.options.locations) {
          this.curLine++;
          this.lineStart = this.pos;
        }
      } else {
        if (isNewLine(ch)) { this.raise(this.start, "Unterminated string constant"); }
        ++this.pos;
      }
    }
    out += this.input.slice(chunkStart, this.pos++);
    return this.finishToken(types$1.string, out)
  };

  // Reads template string tokens.

  var INVALID_TEMPLATE_ESCAPE_ERROR = {};

  pp.tryReadTemplateToken = function() {
    this.inTemplateElement = true;
    try {
      this.readTmplToken();
    } catch (err) {
      if (err === INVALID_TEMPLATE_ESCAPE_ERROR) {
        this.readInvalidTemplateToken();
      } else {
        throw err
      }
    }

    this.inTemplateElement = false;
  };

  pp.invalidStringToken = function(position, message) {
    if (this.inTemplateElement && this.options.ecmaVersion >= 9) {
      throw INVALID_TEMPLATE_ESCAPE_ERROR
    } else {
      this.raise(position, message);
    }
  };

  pp.readTmplToken = function() {
    var out = "", chunkStart = this.pos;
    for (;;) {
      if (this.pos >= this.input.length) { this.raise(this.start, "Unterminated template"); }
      var ch = this.input.charCodeAt(this.pos);
      if (ch === 96 || ch === 36 && this.input.charCodeAt(this.pos + 1) === 123) { // '`', '${'
        if (this.pos === this.start && (this.type === types$1.template || this.type === types$1.invalidTemplate)) {
          if (ch === 36) {
            this.pos += 2;
            return this.finishToken(types$1.dollarBraceL)
          } else {
            ++this.pos;
            return this.finishToken(types$1.backQuote)
          }
        }
        out += this.input.slice(chunkStart, this.pos);
        return this.finishToken(types$1.template, out)
      }
      if (ch === 92) { // '\'
        out += this.input.slice(chunkStart, this.pos);
        out += this.readEscapedChar(true);
        chunkStart = this.pos;
      } else if (isNewLine(ch)) {
        out += this.input.slice(chunkStart, this.pos);
        ++this.pos;
        switch (ch) {
        case 13:
          if (this.input.charCodeAt(this.pos) === 10) { ++this.pos; }
        case 10:
          out += "\n";
          break
        default:
          out += String.fromCharCode(ch);
          break
        }
        if (this.options.locations) {
          ++this.curLine;
          this.lineStart = this.pos;
        }
        chunkStart = this.pos;
      } else {
        ++this.pos;
      }
    }
  };

  // Reads a template token to search for the end, without validating any escape sequences
  pp.readInvalidTemplateToken = function() {
    for (; this.pos < this.input.length; this.pos++) {
      switch (this.input[this.pos]) {
      case "\\":
        ++this.pos;
        break

      case "$":
        if (this.input[this.pos + 1] !== "{") {
          break
        }

      // falls through
      case "`":
        return this.finishToken(types$1.invalidTemplate, this.input.slice(this.start, this.pos))

      // no default
      }
    }
    this.raise(this.start, "Unterminated template");
  };

  // Used to read escaped characters

  pp.readEscapedChar = function(inTemplate) {
    var ch = this.input.charCodeAt(++this.pos);
    ++this.pos;
    switch (ch) {
    case 110: return "\n" // 'n' -> '\n'
    case 114: return "\r" // 'r' -> '\r'
    case 120: return String.fromCharCode(this.readHexChar(2)) // 'x'
    case 117: return codePointToString(this.readCodePoint()) // 'u'
    case 116: return "\t" // 't' -> '\t'
    case 98: return "\b" // 'b' -> '\b'
    case 118: return "\u000b" // 'v' -> '\u000b'
    case 102: return "\f" // 'f' -> '\f'
    case 13: if (this.input.charCodeAt(this.pos) === 10) { ++this.pos; } // '\r\n'
    case 10: // ' \n'
      if (this.options.locations) { this.lineStart = this.pos; ++this.curLine; }
      return ""
    case 56:
    case 57:
      if (this.strict) {
        this.invalidStringToken(
          this.pos - 1,
          "Invalid escape sequence"
        );
      }
      if (inTemplate) {
        var codePos = this.pos - 1;

        this.invalidStringToken(
          codePos,
          "Invalid escape sequence in template string"
        );
      }
    default:
      if (ch >= 48 && ch <= 55) {
        var octalStr = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0];
        var octal = parseInt(octalStr, 8);
        if (octal > 255) {
          octalStr = octalStr.slice(0, -1);
          octal = parseInt(octalStr, 8);
        }
        this.pos += octalStr.length - 1;
        ch = this.input.charCodeAt(this.pos);
        if ((octalStr !== "0" || ch === 56 || ch === 57) && (this.strict || inTemplate)) {
          this.invalidStringToken(
            this.pos - 1 - octalStr.length,
            inTemplate
              ? "Octal literal in template string"
              : "Octal literal in strict mode"
          );
        }
        return String.fromCharCode(octal)
      }
      if (isNewLine(ch)) {
        // Unicode new line characters after \ get removed from output in both
        // template literals and strings
        return ""
      }
      return String.fromCharCode(ch)
    }
  };

  // Used to read character escape sequences ('\x', '\u', '\U').

  pp.readHexChar = function(len) {
    var codePos = this.pos;
    var n = this.readInt(16, len);
    if (n === null) { this.invalidStringToken(codePos, "Bad character escape sequence"); }
    return n
  };

  // Read an identifier, and return it as a string. Sets `this.containsEsc`
  // to whether the word contained a '\u' escape.
  //
  // Incrementally adds only escaped chars, adding other chunks as-is
  // as a micro-optimization.

  pp.readWord1 = function() {
    this.containsEsc = false;
    var word = "", first = true, chunkStart = this.pos;
    var astral = this.options.ecmaVersion >= 6;
    while (this.pos < this.input.length) {
      var ch = this.fullCharCodeAtPos();
      if (isIdentifierChar(ch, astral)) {
        this.pos += ch <= 0xffff ? 1 : 2;
      } else if (ch === 92) { // "\"
        this.containsEsc = true;
        word += this.input.slice(chunkStart, this.pos);
        var escStart = this.pos;
        if (this.input.charCodeAt(++this.pos) !== 117) // "u"
          { this.invalidStringToken(this.pos, "Expecting Unicode escape sequence \\uXXXX"); }
        ++this.pos;
        var esc = this.readCodePoint();
        if (!(first ? isIdentifierStart : isIdentifierChar)(esc, astral))
          { this.invalidStringToken(escStart, "Invalid Unicode escape"); }
        word += codePointToString(esc);
        chunkStart = this.pos;
      } else {
        break
      }
      first = false;
    }
    return word + this.input.slice(chunkStart, this.pos)
  };

  // Read an identifier or keyword token. Will check for reserved
  // words when necessary.

  pp.readWord = function() {
    var word = this.readWord1();
    var type = types$1.name;
    if (this.keywords.test(word)) {
      type = keywords[word];
    }
    return this.finishToken(type, word)
  };

  // Acorn is a tiny, fast JavaScript parser written in JavaScript.
  //
  // Acorn was written by Marijn Haverbeke, Ingvar Stepanyan, and
  // various contributors and released under an MIT license.
  //
  // Git repositories for Acorn are available at
  //
  //     http://marijnhaverbeke.nl/git/acorn
  //     https://github.com/acornjs/acorn.git
  //
  // Please use the [github bug tracker][ghbt] to report issues.
  //
  // [ghbt]: https://github.com/acornjs/acorn/issues
  //
  // [walk]: util/walk.js


  var version$1 = "8.10.0";

  Parser.acorn = {
    Parser: Parser,
    version: version$1,
    defaultOptions: defaultOptions,
    Position: Position,
    SourceLocation: SourceLocation,
    getLineInfo: getLineInfo,
    Node: Node$1,
    TokenType: TokenType,
    tokTypes: types$1,
    keywordTypes: keywords,
    TokContext: TokContext,
    tokContexts: types,
    isIdentifierChar: isIdentifierChar,
    isIdentifierStart: isIdentifierStart,
    Token: Token,
    isNewLine: isNewLine,
    lineBreak: lineBreak,
    lineBreakG: lineBreakG,
    nonASCIIwhitespace: nonASCIIwhitespace
  };

  // The main exported interface (under `self.acorn` when in the
  // browser) is a `parse` function that takes a code string and
  // returns an abstract syntax tree as specified by [Mozilla parser
  // API][api].
  //
  // [api]: https://developer.mozilla.org/en-US/docs/SpiderMonkey/Parser_API

  function parse$1(input, options) {
    return Parser.parse(input, options)
  }

  // This function tries to parse a single expression at a given
  // offset in a string. Useful for parsing mixed-language formats
  // that embed JavaScript expressions.

  function parseExpressionAt(input, pos, options) {
    return Parser.parseExpressionAt(input, pos, options)
  }

  // Astring is a tiny and fast JavaScript code generator from an ESTree-compliant AST.
  //
  // Astring was written by David Bonnet and released under an MIT license.
  //
  // The Git repository for Astring is available at:
  // https://github.com/davidbonnet/astring.git
  //
  // Please use the GitHub bug tracker to report issues:
  // https://github.com/davidbonnet/astring/issues

  const { stringify } = JSON;

  /* c8 ignore if */
  if (!String.prototype.repeat) {
    /* c8 ignore next */
    throw new Error(
      'String.prototype.repeat is undefined, see https://github.com/davidbonnet/astring#installation',
    )
  }

  /* c8 ignore if */
  if (!String.prototype.endsWith) {
    /* c8 ignore next */
    throw new Error(
      'String.prototype.endsWith is undefined, see https://github.com/davidbonnet/astring#installation',
    )
  }

  const OPERATOR_PRECEDENCE = {
    '||': 2,
    '??': 3,
    '&&': 4,
    '|': 5,
    '^': 6,
    '&': 7,
    '==': 8,
    '!=': 8,
    '===': 8,
    '!==': 8,
    '<': 9,
    '>': 9,
    '<=': 9,
    '>=': 9,
    in: 9,
    instanceof: 9,
    '<<': 10,
    '>>': 10,
    '>>>': 10,
    '+': 11,
    '-': 11,
    '*': 12,
    '%': 12,
    '/': 12,
    '**': 13,
  };

  // Enables parenthesis regardless of precedence
  const NEEDS_PARENTHESES = 17;

  const EXPRESSIONS_PRECEDENCE = {
    // Definitions
    ArrayExpression: 20,
    TaggedTemplateExpression: 20,
    ThisExpression: 20,
    Identifier: 20,
    PrivateIdentifier: 20,
    Literal: 18,
    TemplateLiteral: 20,
    Super: 20,
    SequenceExpression: 20,
    // Operations
    MemberExpression: 19,
    ChainExpression: 19,
    CallExpression: 19,
    NewExpression: 19,
    // Other definitions
    ArrowFunctionExpression: NEEDS_PARENTHESES,
    ClassExpression: NEEDS_PARENTHESES,
    FunctionExpression: NEEDS_PARENTHESES,
    ObjectExpression: NEEDS_PARENTHESES,
    // Other operations
    UpdateExpression: 16,
    UnaryExpression: 15,
    AwaitExpression: 15,
    BinaryExpression: 14,
    LogicalExpression: 13,
    ConditionalExpression: 4,
    AssignmentExpression: 3,
    YieldExpression: 2,
    RestElement: 1,
  };

  function formatSequence(state, nodes) {
    /*
    Writes into `state` a sequence of `nodes`.
    */
    const { generator } = state;
    state.write('(');
    if (nodes != null && nodes.length > 0) {
      generator[nodes[0].type](nodes[0], state);
      const { length } = nodes;
      for (let i = 1; i < length; i++) {
        const param = nodes[i];
        state.write(', ');
        generator[param.type](param, state);
      }
    }
    state.write(')');
  }

  function expressionNeedsParenthesis(state, node, parentNode, isRightHand) {
    const nodePrecedence = state.expressionsPrecedence[node.type];
    if (nodePrecedence === NEEDS_PARENTHESES) {
      return true
    }
    const parentNodePrecedence = state.expressionsPrecedence[parentNode.type];
    if (nodePrecedence !== parentNodePrecedence) {
      // Different node types
      return (
        (!isRightHand &&
          nodePrecedence === 15 &&
          parentNodePrecedence === 14 &&
          parentNode.operator === '**') ||
        nodePrecedence < parentNodePrecedence
      )
    }
    if (nodePrecedence !== 13 && nodePrecedence !== 14) {
      // Not a `LogicalExpression` or `BinaryExpression`
      return false
    }
    if (node.operator === '**' && parentNode.operator === '**') {
      // Exponentiation operator has right-to-left associativity
      return !isRightHand
    }
    if (
      nodePrecedence === 13 &&
      parentNodePrecedence === 13 &&
      (node.operator === '??' || parentNode.operator === '??')
    ) {
      // Nullish coalescing and boolean operators cannot be combined
      return true
    }
    if (isRightHand) {
      // Parenthesis are used if both operators have the same precedence
      return (
        OPERATOR_PRECEDENCE[node.operator] <=
        OPERATOR_PRECEDENCE[parentNode.operator]
      )
    }
    return (
      OPERATOR_PRECEDENCE[node.operator] <
      OPERATOR_PRECEDENCE[parentNode.operator]
    )
  }

  function formatExpression(state, node, parentNode, isRightHand) {
    /*
    Writes into `state` the provided `node`, adding parenthesis around if the provided `parentNode` needs it. If `node` is a right-hand argument, the provided `isRightHand` parameter should be `true`.
    */
    const { generator } = state;
    if (expressionNeedsParenthesis(state, node, parentNode, isRightHand)) {
      state.write('(');
      generator[node.type](node, state);
      state.write(')');
    } else {
      generator[node.type](node, state);
    }
  }

  function reindent(state, text, indent, lineEnd) {
    /*
    Writes into `state` the `text` string reindented with the provided `indent`.
    */
    const lines = text.split('\n');
    const end = lines.length - 1;
    state.write(lines[0].trim());
    if (end > 0) {
      state.write(lineEnd);
      for (let i = 1; i < end; i++) {
        state.write(indent + lines[i].trim() + lineEnd);
      }
      state.write(indent + lines[end].trim());
    }
  }

  function formatComments(state, comments, indent, lineEnd) {
    /*
    Writes into `state` the provided list of `comments`, with the given `indent` and `lineEnd` strings.
    Line comments will end with `"\n"` regardless of the value of `lineEnd`.
    Expects to start on a new unindented line.
    */
    const { length } = comments;
    for (let i = 0; i < length; i++) {
      const comment = comments[i];
      state.write(indent);
      if (comment.type[0] === 'L') {
        // Line comment
        state.write('// ' + comment.value.trim() + '\n', comment);
      } else {
        // Block comment
        state.write('/*');
        reindent(state, comment.value, indent, lineEnd);
        state.write('*/' + lineEnd);
      }
    }
  }

  function hasCallExpression(node) {
    /*
    Returns `true` if the provided `node` contains a call expression and `false` otherwise.
    */
    let currentNode = node;
    while (currentNode != null) {
      const { type } = currentNode;
      if (type[0] === 'C' && type[1] === 'a') {
        // Is CallExpression
        return true
      } else if (type[0] === 'M' && type[1] === 'e' && type[2] === 'm') {
        // Is MemberExpression
        currentNode = currentNode.object;
      } else {
        return false
      }
    }
  }

  function formatVariableDeclaration(state, node) {
    /*
    Writes into `state` a variable declaration.
    */
    const { generator } = state;
    const { declarations } = node;
    state.write(node.kind + ' ');
    const { length } = declarations;
    if (length > 0) {
      generator.VariableDeclarator(declarations[0], state);
      for (let i = 1; i < length; i++) {
        state.write(', ');
        generator.VariableDeclarator(declarations[i], state);
      }
    }
  }

  let ForInStatement,
    FunctionDeclaration,
    RestElement,
    BinaryExpression,
    ArrayExpression,
    BlockStatement;

  const GENERATOR = {
    /*
    Default generator.
    */
    Program(node, state) {
      const indent = state.indent.repeat(state.indentLevel);
      const { lineEnd, writeComments } = state;
      if (writeComments && node.comments != null) {
        formatComments(state, node.comments, indent, lineEnd);
      }
      const statements = node.body;
      const { length } = statements;
      for (let i = 0; i < length; i++) {
        const statement = statements[i];
        if (writeComments && statement.comments != null) {
          formatComments(state, statement.comments, indent, lineEnd);
        }
        state.write(indent);
        this[statement.type](statement, state);
        state.write(lineEnd);
      }
      if (writeComments && node.trailingComments != null) {
        formatComments(state, node.trailingComments, indent, lineEnd);
      }
    },
    BlockStatement: (BlockStatement = function (node, state) {
      const indent = state.indent.repeat(state.indentLevel++);
      const { lineEnd, writeComments } = state;
      const statementIndent = indent + state.indent;
      state.write('{');
      const statements = node.body;
      if (statements != null && statements.length > 0) {
        state.write(lineEnd);
        if (writeComments && node.comments != null) {
          formatComments(state, node.comments, statementIndent, lineEnd);
        }
        const { length } = statements;
        for (let i = 0; i < length; i++) {
          const statement = statements[i];
          if (writeComments && statement.comments != null) {
            formatComments(state, statement.comments, statementIndent, lineEnd);
          }
          state.write(statementIndent);
          this[statement.type](statement, state);
          state.write(lineEnd);
        }
        state.write(indent);
      } else {
        if (writeComments && node.comments != null) {
          state.write(lineEnd);
          formatComments(state, node.comments, statementIndent, lineEnd);
          state.write(indent);
        }
      }
      if (writeComments && node.trailingComments != null) {
        formatComments(state, node.trailingComments, statementIndent, lineEnd);
      }
      state.write('}');
      state.indentLevel--;
    }),
    ClassBody: BlockStatement,
    StaticBlock(node, state) {
      state.write('static ');
      this.BlockStatement(node, state);
    },
    EmptyStatement(node, state) {
      state.write(';');
    },
    ExpressionStatement(node, state) {
      const precedence = state.expressionsPrecedence[node.expression.type];
      if (
        precedence === NEEDS_PARENTHESES ||
        (precedence === 3 && node.expression.left.type[0] === 'O')
      ) {
        // Should always have parentheses or is an AssignmentExpression to an ObjectPattern
        state.write('(');
        this[node.expression.type](node.expression, state);
        state.write(')');
      } else {
        this[node.expression.type](node.expression, state);
      }
      state.write(';');
    },
    IfStatement(node, state) {
      state.write('if (');
      this[node.test.type](node.test, state);
      state.write(') ');
      this[node.consequent.type](node.consequent, state);
      if (node.alternate != null) {
        state.write(' else ');
        this[node.alternate.type](node.alternate, state);
      }
    },
    LabeledStatement(node, state) {
      this[node.label.type](node.label, state);
      state.write(': ');
      this[node.body.type](node.body, state);
    },
    BreakStatement(node, state) {
      state.write('break');
      if (node.label != null) {
        state.write(' ');
        this[node.label.type](node.label, state);
      }
      state.write(';');
    },
    ContinueStatement(node, state) {
      state.write('continue');
      if (node.label != null) {
        state.write(' ');
        this[node.label.type](node.label, state);
      }
      state.write(';');
    },
    WithStatement(node, state) {
      state.write('with (');
      this[node.object.type](node.object, state);
      state.write(') ');
      this[node.body.type](node.body, state);
    },
    SwitchStatement(node, state) {
      const indent = state.indent.repeat(state.indentLevel++);
      const { lineEnd, writeComments } = state;
      state.indentLevel++;
      const caseIndent = indent + state.indent;
      const statementIndent = caseIndent + state.indent;
      state.write('switch (');
      this[node.discriminant.type](node.discriminant, state);
      state.write(') {' + lineEnd);
      const { cases: occurences } = node;
      const { length: occurencesCount } = occurences;
      for (let i = 0; i < occurencesCount; i++) {
        const occurence = occurences[i];
        if (writeComments && occurence.comments != null) {
          formatComments(state, occurence.comments, caseIndent, lineEnd);
        }
        if (occurence.test) {
          state.write(caseIndent + 'case ');
          this[occurence.test.type](occurence.test, state);
          state.write(':' + lineEnd);
        } else {
          state.write(caseIndent + 'default:' + lineEnd);
        }
        const { consequent } = occurence;
        const { length: consequentCount } = consequent;
        for (let i = 0; i < consequentCount; i++) {
          const statement = consequent[i];
          if (writeComments && statement.comments != null) {
            formatComments(state, statement.comments, statementIndent, lineEnd);
          }
          state.write(statementIndent);
          this[statement.type](statement, state);
          state.write(lineEnd);
        }
      }
      state.indentLevel -= 2;
      state.write(indent + '}');
    },
    ReturnStatement(node, state) {
      state.write('return');
      if (node.argument) {
        state.write(' ');
        this[node.argument.type](node.argument, state);
      }
      state.write(';');
    },
    ThrowStatement(node, state) {
      state.write('throw ');
      this[node.argument.type](node.argument, state);
      state.write(';');
    },
    TryStatement(node, state) {
      state.write('try ');
      this[node.block.type](node.block, state);
      if (node.handler) {
        const { handler } = node;
        if (handler.param == null) {
          state.write(' catch ');
        } else {
          state.write(' catch (');
          this[handler.param.type](handler.param, state);
          state.write(') ');
        }
        this[handler.body.type](handler.body, state);
      }
      if (node.finalizer) {
        state.write(' finally ');
        this[node.finalizer.type](node.finalizer, state);
      }
    },
    WhileStatement(node, state) {
      state.write('while (');
      this[node.test.type](node.test, state);
      state.write(') ');
      this[node.body.type](node.body, state);
    },
    DoWhileStatement(node, state) {
      state.write('do ');
      this[node.body.type](node.body, state);
      state.write(' while (');
      this[node.test.type](node.test, state);
      state.write(');');
    },
    ForStatement(node, state) {
      state.write('for (');
      if (node.init != null) {
        const { init } = node;
        if (init.type[0] === 'V') {
          formatVariableDeclaration(state, init);
        } else {
          this[init.type](init, state);
        }
      }
      state.write('; ');
      if (node.test) {
        this[node.test.type](node.test, state);
      }
      state.write('; ');
      if (node.update) {
        this[node.update.type](node.update, state);
      }
      state.write(') ');
      this[node.body.type](node.body, state);
    },
    ForInStatement: (ForInStatement = function (node, state) {
      state.write(`for ${node.await ? 'await ' : ''}(`);
      const { left } = node;
      if (left.type[0] === 'V') {
        formatVariableDeclaration(state, left);
      } else {
        this[left.type](left, state);
      }
      // Identifying whether node.type is `ForInStatement` or `ForOfStatement`
      state.write(node.type[3] === 'I' ? ' in ' : ' of ');
      this[node.right.type](node.right, state);
      state.write(') ');
      this[node.body.type](node.body, state);
    }),
    ForOfStatement: ForInStatement,
    DebuggerStatement(node, state) {
      state.write('debugger;', node);
    },
    FunctionDeclaration: (FunctionDeclaration = function (node, state) {
      state.write(
        (node.async ? 'async ' : '') +
          (node.generator ? 'function* ' : 'function ') +
          (node.id ? node.id.name : ''),
        node,
      );
      formatSequence(state, node.params);
      state.write(' ');
      this[node.body.type](node.body, state);
    }),
    FunctionExpression: FunctionDeclaration,
    VariableDeclaration(node, state) {
      formatVariableDeclaration(state, node);
      state.write(';');
    },
    VariableDeclarator(node, state) {
      this[node.id.type](node.id, state);
      if (node.init != null) {
        state.write(' = ');
        this[node.init.type](node.init, state);
      }
    },
    ClassDeclaration(node, state) {
      state.write('class ' + (node.id ? `${node.id.name} ` : ''), node);
      if (node.superClass) {
        state.write('extends ');
        const { superClass } = node;
        const { type } = superClass;
        const precedence = state.expressionsPrecedence[type];
        if (
          (type[0] !== 'C' || type[1] !== 'l' || type[5] !== 'E') &&
          (precedence === NEEDS_PARENTHESES ||
            precedence < state.expressionsPrecedence.ClassExpression)
        ) {
          // Not a ClassExpression that needs parentheses
          state.write('(');
          this[node.superClass.type](superClass, state);
          state.write(')');
        } else {
          this[superClass.type](superClass, state);
        }
        state.write(' ');
      }
      this.ClassBody(node.body, state);
    },
    ImportDeclaration(node, state) {
      state.write('import ');
      const { specifiers } = node;
      const { length } = specifiers;
      // TODO: Once babili is fixed, put this after condition
      // https://github.com/babel/babili/issues/430
      let i = 0;
      if (length > 0) {
        for (; i < length; ) {
          if (i > 0) {
            state.write(', ');
          }
          const specifier = specifiers[i];
          const type = specifier.type[6];
          if (type === 'D') {
            // ImportDefaultSpecifier
            state.write(specifier.local.name, specifier);
            i++;
          } else if (type === 'N') {
            // ImportNamespaceSpecifier
            state.write('* as ' + specifier.local.name, specifier);
            i++;
          } else {
            // ImportSpecifier
            break
          }
        }
        if (i < length) {
          state.write('{');
          for (;;) {
            const specifier = specifiers[i];
            const { name } = specifier.imported;
            state.write(name, specifier);
            if (name !== specifier.local.name) {
              state.write(' as ' + specifier.local.name);
            }
            if (++i < length) {
              state.write(', ');
            } else {
              break
            }
          }
          state.write('}');
        }
        state.write(' from ');
      }
      this.Literal(node.source, state);
      state.write(';');
    },
    ImportExpression(node, state) {
      state.write('import(');
      this[node.source.type](node.source, state);
      state.write(')');
    },
    ExportDefaultDeclaration(node, state) {
      state.write('export default ');
      this[node.declaration.type](node.declaration, state);
      if (
        state.expressionsPrecedence[node.declaration.type] != null &&
        node.declaration.type[0] !== 'F'
      ) {
        // All expression nodes except `FunctionExpression`
        state.write(';');
      }
    },
    ExportNamedDeclaration(node, state) {
      state.write('export ');
      if (node.declaration) {
        this[node.declaration.type](node.declaration, state);
      } else {
        state.write('{');
        const { specifiers } = node,
          { length } = specifiers;
        if (length > 0) {
          for (let i = 0; ; ) {
            const specifier = specifiers[i];
            const { name } = specifier.local;
            state.write(name, specifier);
            if (name !== specifier.exported.name) {
              state.write(' as ' + specifier.exported.name);
            }
            if (++i < length) {
              state.write(', ');
            } else {
              break
            }
          }
        }
        state.write('}');
        if (node.source) {
          state.write(' from ');
          this.Literal(node.source, state);
        }
        state.write(';');
      }
    },
    ExportAllDeclaration(node, state) {
      if (node.exported != null) {
        state.write('export * as ' + node.exported.name + ' from ');
      } else {
        state.write('export * from ');
      }
      this.Literal(node.source, state);
      state.write(';');
    },
    MethodDefinition(node, state) {
      if (node.static) {
        state.write('static ');
      }
      const kind = node.kind[0];
      if (kind === 'g' || kind === 's') {
        // Getter or setter
        state.write(node.kind + ' ');
      }
      if (node.value.async) {
        state.write('async ');
      }
      if (node.value.generator) {
        state.write('*');
      }
      if (node.computed) {
        state.write('[');
        this[node.key.type](node.key, state);
        state.write(']');
      } else {
        this[node.key.type](node.key, state);
      }
      formatSequence(state, node.value.params);
      state.write(' ');
      this[node.value.body.type](node.value.body, state);
    },
    ClassExpression(node, state) {
      this.ClassDeclaration(node, state);
    },
    ArrowFunctionExpression(node, state) {
      state.write(node.async ? 'async ' : '', node);
      const { params } = node;
      if (params != null) {
        // Omit parenthesis if only one named parameter
        if (params.length === 1 && params[0].type[0] === 'I') {
          // If params[0].type[0] starts with 'I', it can't be `ImportDeclaration` nor `IfStatement` and thus is `Identifier`
          state.write(params[0].name, params[0]);
        } else {
          formatSequence(state, node.params);
        }
      }
      state.write(' => ');
      if (node.body.type[0] === 'O') {
        // Body is an object expression
        state.write('(');
        this.ObjectExpression(node.body, state);
        state.write(')');
      } else {
        this[node.body.type](node.body, state);
      }
    },
    ThisExpression(node, state) {
      state.write('this', node);
    },
    Super(node, state) {
      state.write('super', node);
    },
    RestElement: (RestElement = function (node, state) {
      state.write('...');
      this[node.argument.type](node.argument, state);
    }),
    SpreadElement: RestElement,
    YieldExpression(node, state) {
      state.write(node.delegate ? 'yield*' : 'yield');
      if (node.argument) {
        state.write(' ');
        this[node.argument.type](node.argument, state);
      }
    },
    AwaitExpression(node, state) {
      state.write('await ', node);
      formatExpression(state, node.argument, node);
    },
    TemplateLiteral(node, state) {
      const { quasis, expressions } = node;
      state.write('`');
      const { length } = expressions;
      for (let i = 0; i < length; i++) {
        const expression = expressions[i];
        const quasi = quasis[i];
        state.write(quasi.value.raw, quasi);
        state.write('${');
        this[expression.type](expression, state);
        state.write('}');
      }
      const quasi = quasis[quasis.length - 1];
      state.write(quasi.value.raw, quasi);
      state.write('`');
    },
    TemplateElement(node, state) {
      state.write(node.value.raw, node);
    },
    TaggedTemplateExpression(node, state) {
      formatExpression(state, node.tag, node);
      this[node.quasi.type](node.quasi, state);
    },
    ArrayExpression: (ArrayExpression = function (node, state) {
      state.write('[');
      if (node.elements.length > 0) {
        const { elements } = node,
          { length } = elements;
        for (let i = 0; ; ) {
          const element = elements[i];
          if (element != null) {
            this[element.type](element, state);
          }
          if (++i < length) {
            state.write(', ');
          } else {
            if (element == null) {
              state.write(', ');
            }
            break
          }
        }
      }
      state.write(']');
    }),
    ArrayPattern: ArrayExpression,
    ObjectExpression(node, state) {
      const indent = state.indent.repeat(state.indentLevel++);
      const { lineEnd, writeComments } = state;
      const propertyIndent = indent + state.indent;
      state.write('{');
      if (node.properties.length > 0) {
        state.write(lineEnd);
        if (writeComments && node.comments != null) {
          formatComments(state, node.comments, propertyIndent, lineEnd);
        }
        const comma = ',' + lineEnd;
        const { properties } = node,
          { length } = properties;
        for (let i = 0; ; ) {
          const property = properties[i];
          if (writeComments && property.comments != null) {
            formatComments(state, property.comments, propertyIndent, lineEnd);
          }
          state.write(propertyIndent);
          this[property.type](property, state);
          if (++i < length) {
            state.write(comma);
          } else {
            break
          }
        }
        state.write(lineEnd);
        if (writeComments && node.trailingComments != null) {
          formatComments(state, node.trailingComments, propertyIndent, lineEnd);
        }
        state.write(indent + '}');
      } else if (writeComments) {
        if (node.comments != null) {
          state.write(lineEnd);
          formatComments(state, node.comments, propertyIndent, lineEnd);
          if (node.trailingComments != null) {
            formatComments(state, node.trailingComments, propertyIndent, lineEnd);
          }
          state.write(indent + '}');
        } else if (node.trailingComments != null) {
          state.write(lineEnd);
          formatComments(state, node.trailingComments, propertyIndent, lineEnd);
          state.write(indent + '}');
        } else {
          state.write('}');
        }
      } else {
        state.write('}');
      }
      state.indentLevel--;
    },
    Property(node, state) {
      if (node.method || node.kind[0] !== 'i') {
        // Either a method or of kind `set` or `get` (not `init`)
        this.MethodDefinition(node, state);
      } else {
        if (!node.shorthand) {
          if (node.computed) {
            state.write('[');
            this[node.key.type](node.key, state);
            state.write(']');
          } else {
            this[node.key.type](node.key, state);
          }
          state.write(': ');
        }
        this[node.value.type](node.value, state);
      }
    },
    PropertyDefinition(node, state) {
      if (node.static) {
        state.write('static ');
      }
      if (node.computed) {
        state.write('[');
      }
      this[node.key.type](node.key, state);
      if (node.computed) {
        state.write(']');
      }
      if (node.value == null) {
        if (node.key.type[0] !== 'F') {
          state.write(';');
        }
        return
      }
      state.write(' = ');
      this[node.value.type](node.value, state);
      state.write(';');
    },
    ObjectPattern(node, state) {
      state.write('{');
      if (node.properties.length > 0) {
        const { properties } = node,
          { length } = properties;
        for (let i = 0; ; ) {
          this[properties[i].type](properties[i], state);
          if (++i < length) {
            state.write(', ');
          } else {
            break
          }
        }
      }
      state.write('}');
    },
    SequenceExpression(node, state) {
      formatSequence(state, node.expressions);
    },
    UnaryExpression(node, state) {
      if (node.prefix) {
        const {
          operator,
          argument,
          argument: { type },
        } = node;
        state.write(operator);
        const needsParentheses = expressionNeedsParenthesis(state, argument, node);
        if (
          !needsParentheses &&
          (operator.length > 1 ||
            (type[0] === 'U' &&
              (type[1] === 'n' || type[1] === 'p') &&
              argument.prefix &&
              argument.operator[0] === operator &&
              (operator === '+' || operator === '-')))
        ) {
          // Large operator or argument is UnaryExpression or UpdateExpression node
          state.write(' ');
        }
        if (needsParentheses) {
          state.write(operator.length > 1 ? ' (' : '(');
          this[type](argument, state);
          state.write(')');
        } else {
          this[type](argument, state);
        }
      } else {
        // FIXME: This case never occurs
        this[node.argument.type](node.argument, state);
        state.write(node.operator);
      }
    },
    UpdateExpression(node, state) {
      // Always applied to identifiers or members, no parenthesis check needed
      if (node.prefix) {
        state.write(node.operator);
        this[node.argument.type](node.argument, state);
      } else {
        this[node.argument.type](node.argument, state);
        state.write(node.operator);
      }
    },
    AssignmentExpression(node, state) {
      this[node.left.type](node.left, state);
      state.write(' ' + node.operator + ' ');
      this[node.right.type](node.right, state);
    },
    AssignmentPattern(node, state) {
      this[node.left.type](node.left, state);
      state.write(' = ');
      this[node.right.type](node.right, state);
    },
    BinaryExpression: (BinaryExpression = function (node, state) {
      const isIn = node.operator === 'in';
      if (isIn) {
        // Avoids confusion in `for` loops initializers
        state.write('(');
      }
      formatExpression(state, node.left, node, false);
      state.write(' ' + node.operator + ' ');
      formatExpression(state, node.right, node, true);
      if (isIn) {
        state.write(')');
      }
    }),
    LogicalExpression: BinaryExpression,
    ConditionalExpression(node, state) {
      const { test } = node;
      const precedence = state.expressionsPrecedence[test.type];
      if (
        precedence === NEEDS_PARENTHESES ||
        precedence <= state.expressionsPrecedence.ConditionalExpression
      ) {
        state.write('(');
        this[test.type](test, state);
        state.write(')');
      } else {
        this[test.type](test, state);
      }
      state.write(' ? ');
      this[node.consequent.type](node.consequent, state);
      state.write(' : ');
      this[node.alternate.type](node.alternate, state);
    },
    NewExpression(node, state) {
      state.write('new ');
      const precedence = state.expressionsPrecedence[node.callee.type];
      if (
        precedence === NEEDS_PARENTHESES ||
        precedence < state.expressionsPrecedence.CallExpression ||
        hasCallExpression(node.callee)
      ) {
        state.write('(');
        this[node.callee.type](node.callee, state);
        state.write(')');
      } else {
        this[node.callee.type](node.callee, state);
      }
      formatSequence(state, node['arguments']);
    },
    CallExpression(node, state) {
      const precedence = state.expressionsPrecedence[node.callee.type];
      if (
        precedence === NEEDS_PARENTHESES ||
        precedence < state.expressionsPrecedence.CallExpression
      ) {
        state.write('(');
        this[node.callee.type](node.callee, state);
        state.write(')');
      } else {
        this[node.callee.type](node.callee, state);
      }
      if (node.optional) {
        state.write('?.');
      }
      formatSequence(state, node['arguments']);
    },
    ChainExpression(node, state) {
      this[node.expression.type](node.expression, state);
    },
    MemberExpression(node, state) {
      const precedence = state.expressionsPrecedence[node.object.type];
      if (
        precedence === NEEDS_PARENTHESES ||
        precedence < state.expressionsPrecedence.MemberExpression
      ) {
        state.write('(');
        this[node.object.type](node.object, state);
        state.write(')');
      } else {
        this[node.object.type](node.object, state);
      }
      if (node.computed) {
        if (node.optional) {
          state.write('?.');
        }
        state.write('[');
        this[node.property.type](node.property, state);
        state.write(']');
      } else {
        if (node.optional) {
          state.write('?.');
        } else {
          state.write('.');
        }
        this[node.property.type](node.property, state);
      }
    },
    MetaProperty(node, state) {
      state.write(node.meta.name + '.' + node.property.name, node);
    },
    Identifier(node, state) {
      state.write(node.name, node);
    },
    PrivateIdentifier(node, state) {
      state.write(`#${node.name}`, node);
    },
    Literal(node, state) {
      if (node.raw != null) {
        // Non-standard property
        state.write(node.raw, node);
      } else if (node.regex != null) {
        this.RegExpLiteral(node, state);
      } else if (node.bigint != null) {
        state.write(node.bigint + 'n', node);
      } else {
        state.write(stringify(node.value), node);
      }
    },
    RegExpLiteral(node, state) {
      const { regex } = node;
      state.write(`/${regex.pattern}/${regex.flags}`, node);
    },
  };

  const EMPTY_OBJECT = {};

  /*
  DEPRECATED: Alternate export of `GENERATOR`.
  */
  const baseGenerator = GENERATOR;

  class State {
    constructor(options) {
      const setup = options == null ? EMPTY_OBJECT : options;
      this.output = '';
      // Functional options
      if (setup.output != null) {
        this.output = setup.output;
        this.write = this.writeToStream;
      } else {
        this.output = '';
      }
      this.generator = setup.generator != null ? setup.generator : GENERATOR;
      this.expressionsPrecedence =
        setup.expressionsPrecedence != null
          ? setup.expressionsPrecedence
          : EXPRESSIONS_PRECEDENCE;
      // Formating setup
      this.indent = setup.indent != null ? setup.indent : '  ';
      this.lineEnd = setup.lineEnd != null ? setup.lineEnd : '\n';
      this.indentLevel =
        setup.startingIndentLevel != null ? setup.startingIndentLevel : 0;
      this.writeComments = setup.comments ? setup.comments : false;
      // Source map
      if (setup.sourceMap != null) {
        this.write =
          setup.output == null ? this.writeAndMap : this.writeToStreamAndMap;
        this.sourceMap = setup.sourceMap;
        this.line = 1;
        this.column = 0;
        this.lineEndSize = this.lineEnd.split('\n').length - 1;
        this.mapping = {
          original: null,
          // Uses the entire state to avoid generating ephemeral objects
          generated: this,
          name: undefined,
          source: setup.sourceMap.file || setup.sourceMap._file,
        };
      }
    }

    write(code) {
      this.output += code;
    }

    writeToStream(code) {
      this.output.write(code);
    }

    writeAndMap(code, node) {
      this.output += code;
      this.map(code, node);
    }

    writeToStreamAndMap(code, node) {
      this.output.write(code);
      this.map(code, node);
    }

    map(code, node) {
      if (node != null) {
        const { type } = node;
        if (type[0] === 'L' && type[2] === 'n') {
          // LineComment
          this.column = 0;
          this.line++;
          return
        }
        if (node.loc != null) {
          const { mapping } = this;
          mapping.original = node.loc.start;
          mapping.name = node.name;
          this.sourceMap.addMapping(mapping);
        }
        if (
          (type[0] === 'T' && type[8] === 'E') ||
          (type[0] === 'L' && type[1] === 'i' && typeof node.value === 'string')
        ) {
          // TemplateElement or Literal string node
          const { length } = code;
          let { column, line } = this;
          for (let i = 0; i < length; i++) {
            if (code[i] === '\n') {
              column = 0;
              line++;
            } else {
              column++;
            }
          }
          this.column = column;
          this.line = line;
          return
        }
      }
      const { length } = code;
      const { lineEnd } = this;
      if (length > 0) {
        if (
          this.lineEndSize > 0 &&
          (lineEnd.length === 1
            ? code[length - 1] === lineEnd
            : code.endsWith(lineEnd))
        ) {
          this.line += this.lineEndSize;
          this.column = 0;
        } else {
          this.column += length;
        }
      }
    }

    toString() {
      return this.output
    }
  }

  function generate(node, options) {
    /*
    Returns a string representing the rendered code of the provided AST `node`.
    The `options` are:

    - `indent`: string to use for indentation (defaults to `␣␣`)
    - `lineEnd`: string to use for line endings (defaults to `\n`)
    - `startingIndentLevel`: indent level to start from (defaults to `0`)
    - `comments`: generate comments if `true` (defaults to `false`)
    - `output`: output stream to write the rendered code to (defaults to `null`)
    - `generator`: custom code generator (defaults to `GENERATOR`)
    - `expressionsPrecedence`: custom map of node types and their precedence level (defaults to `EXPRESSIONS_PRECEDENCE`)
    */
    const state = new State(options);
    // Travel through the AST node and generate the code
    state.generator[node.type](node, state);
    return state.output
  }

  let current_context;

  const get_context = (check) => {
    if (check !== false) assert(current_context, 'Out of context');
    return current_context;
  };

  const use_context = (context, fn) => {
    let prev = current_context;
    try {
      current_context = context;
      return fn.call(context);
    } finally {
      current_context = prev;
    }
  };

  let _svgElements = 'animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,tspan,unknown,use,view';
  let svgElements = {};
  _svgElements.split(',').forEach(k => svgElements[k] = true);

  const last = a => a[a.length - 1];

  function assert(x, info) {
    if (x) return;
    if (typeof(info) == 'string') throw new Error(info);
    throw info;
  }

  function toCamelCase(name) {
    assert(last(name) !== '-', 'Wrong name');
    return name.replace(/(.\-\w)/g, function(part) {
      if(part[0] == '-') return part;
      return part[0] + part[2].toUpperCase();
    });
  }

  function Q(s) {
    if(get_context().config.inlineTemplate) return s.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\n/g, '\\n'); 
    return s.replace(/\\/g, '\\\\').replace(/`/g, '\\`');
  }

  function unwrapExp(e) {
    assert(e, 'Empty expression');
    let rx = e.match(/^\{(.*)\}$/);
    assert(rx, 'Wrong expression: ' + e);
    return rx[1];
  }

  function isSimpleName(name) {
    if(!name) return false;
    if(!name.match(/^([a-zA-Z$_][\w\d$_.]*)$/)) return false;
    if(name[name.length - 1] == '.') return false;
    return true;
  }

  const isNumber = (value) => {
    if(typeof value == 'number') return true;
    if(!value) return false;
    if(typeof value != 'string') return false;
    return !isNaN(value);
  };

  function detectExpressionType(name) {
    /*
      Types:
      * identifier
        `bar`
        `foo.bar`
        `foo[x].bar`
        `foo().bar`
      * function
        `(e) => { foo(e) }`
      * function-call
        `foo()`
      * undefined - another type of expression
    */

    if(isSimpleName(name)) return 'identifier';

    let ast = parse$1(name, { allowReturnOutsideFunction: true, ecmaVersion: 'latest' });

    function checkIdentificator(body) {
      if(body.length != 1) return;
      if(body[0].type != 'ExpressionStatement') return;
      let obj = body[0].expression;
      return obj.type == 'Identifier' || obj.type == 'MemberExpression';
    }

    function checkFunction(body) {
      if(body.length != 1) return;
      if(body[0].type != 'ExpressionStatement') return;
      let obj = body[0].expression;
      if(obj.type != 'ArrowFunctionExpression') return;
      return true;
    }

    function checkFunctionCall(body) {
      if(body.length != 1) return;
      if(body[0].type != 'ExpressionStatement') return;
      let obj = body[0].expression;
      if(obj.type != 'CallExpression') return;
      if(obj.callee?.type == 'Identifier') return obj.callee.name;
    }

    if(checkIdentificator(ast.body)) return 'identifier';
    if(checkFunction(ast.body)) return 'function';

    let fn = checkFunctionCall(ast.body);
    if(fn) return { type: 'function-call', name: fn };
  }


  function checkRootName(name) {
    let rx = name.match(/^([\w$_][\w\d$_]*)/);
    if(!rx) return this.warning({ message: 'Error name: ' + name });
    let root = rx[1];

    if(this.script.rootVariables[root] || this.script.rootFunctions[root]) return true;
    this.warning({ message: 'No name: ' + name });
  }


  function trimEmptyNodes(srcNodes) {
    let nodes = srcNodes.slice();
    while(nodes.length) {
      let n = nodes[0];
      if(n.type == 'text' && !n.value.trim()) nodes.shift();
      else break;
    }
    while(nodes.length) {
      let n = last(nodes);
      if(n.type == 'text' && !n.value.trim()) nodes.pop();
      else break;
    }
    return nodes;
  }


  const genId = () => {
    let id = Math.floor(Date.now() * Math.random()).toString(36);
    if(id.length > 6) id = id.substring(id.length - 6);
    return 'm' + id;
  };


  const extractKeywords = (exp) => {
    let ast = parse$1(exp, { sourceType: 'module', ecmaVersion: 'latest' });

    const keys = new Set();
    const rec = (n) => {
      let self;
      if(n.type) {
        self = n;
        if(n.type == 'Identifier' && (n._parent.type != 'MemberExpression' || n._parent.property !== n)) {
          let name = [n.name];
          let i = n._parent;
          while(i?.type == 'MemberExpression') {
            if(i.property.type == 'Identifier') name.push('.' + i.property.name);
            else if(i.property.type == 'Literal') name.push(`[${i.property.raw}]`);
            else throw `Wrong member type: ${i.property.type}`;
            i = i._parent;
          }
          keys.add(name.join(''));
        }
      }

      for(let k in n) {
        if(k == '_parent') continue;
        let v = n[k];
        if(typeof (v) != 'object') continue;
        if(Array.isArray(v)) {
          v.forEach(i => {
            i._parent = self || n._parent;
            rec(i);
          });
        } else {
          v._parent = self || n._parent;
          rec(v);
        }
      }
    };
    rec(ast);

    return [...keys];
  };


  const replaceKeyword = (exp, fn, option) => {
    let changed = false;
    let r = parseJS(exp, option).transform((n, pk) => {
      if(n.type != 'Identifier') return;
      if(pk == 'property' || pk == 'params') return;
      let name = fn(n.name);
      if(name) {
        n.name = name;
        changed = true;
      }
    });
    return changed ? r.build() : exp;
  };


  const parseJS = (exp, option) => {
    let self = {};
    if(option === true) self.ast = parse$1(exp, { ecmaVersion: 'latest' });
    else self.ast = parseExpressionAt(exp, 0, { ecmaVersion: 'latest' });

    self.transform = function(fn) {
      const rec = (n, pk) => {
        let self;
        if(n.type) {
          self = n;
          fn?.(n, pk);
        }

        for(let k in n) {
          if(k == '_parent') continue;
          let v = n[k];
          if(v == null || typeof (v) != 'object') continue;
          if(Array.isArray(v)) {
            v.forEach(i => {
              i._parent = self || n._parent;
              rec(i, k);
            });
          } else {
            v._parent = self || n._parent;
            rec(v, k);
          }
        }
      };
      rec(self.ast, null);

      return self;
    };

    self.build = function(data) {
      return generate(data || self.ast, { indent: '', lineEnd: '' });
    };
    return self;
  };


  const htmlEntitiesToText = (text) => {
    let entities = [
      [/&amp;/g, '&'],
      [/&apos;/g, '\''],
      [/&#x27;/g, '\''],
      [/&#x2F;/g, '/'],
      [/&#39;/g, '\''],
      [/&#47;/g, '/'],
      [/&lt;/g, '<'],
      [/&gt;/g, '>'],
      [/&nbsp;/g, ' '],
      [/&quot;/g, '"']
    ];
    entities.forEach(([k, v]) => {
      text = text.replace(k, v);
    });
    return text;
  };

  const isFunction = fn => typeof fn == 'function';

  class Reader {
    constructor(source) {
      if(source instanceof Reader) return source;
      this.index = 0;
      this.source = source;
    }

    read(pattern) {
      assert(!this.end(), 'EOF');
      if(pattern == null) {
        return this.source[this.index++];
      } else if(pattern instanceof RegExp) {
        assert(pattern.source[0] == '^');
        const rx = this.source.substring(this.index).match(pattern);
        assert(rx && rx.index == 0, 'Wrong syntax');
        let r = rx[rx.length-1];
        this.index += rx[0].length;
        return r;
      } else throw 'Not implemented';
    }

    probe(pattern) {
      if(pattern instanceof RegExp) {
        assert(pattern.source[0] == '^');
        const r = this.source.substring(this.index).match(pattern);
        if(r) return r[0];
      } else {
        if(this.source[this.index] == pattern[0] && this.source.substr(this.index, pattern.length) == pattern) return pattern;
      }
      return null;
    }

    probeQuote() {
      const a = this.source[this.index];
      return a == '"' || a == "'" || a == '`';
    }

    readIf(pattern) {
      const r = this.probe(pattern);
      if(r != null) this.index += r.length;
      return r;
    }

    end() {
      return this.index >= this.source.length;
    }

    skip() {
      while(!this.end()) {
        if(!this.source[this.index].match(/\s/)) break;
        this.index++;
      }
    }

    readString() {
      let q = this.read();
      assert(q == '"' || q == '`' || q == `'`, 'Wrong syntax');
      let a = null, p, result = q;
      while(true) {
        p = a;
        a = this.read();
        result += a;
        if(a == q && p != '\\') break;
      }
      return result;
    }

    readAttribute() {
      let name = '';
      while(true) {
        if(this.end()) break;
        let a = this.source[this.index];
        if(a == '=' || a == '/' || a == '>' || a == '\t' || a == '\n' || a == '\v' || a == '\f' || a == '\r' || a == ' ' || a == ' ') break;
        name += a;
        this.index++;
      }
      assert(name, 'Syntax error');
      return name;
    }

    sub(start, end) {
      return this.source.substring(start, end || this.index);
    }
  }

  function parseHTML(source) {
    const reader = new Reader(source);

    const readScript = (reader, tag) => {
      tag.type = 'script';

      let isJS = true;
      for (let a of tag.attributes) {
        if (a.name == 'lang' || a.name == 'language' || a.name == 'type') {
          isJS = a.value.indexOf('javascript') >= 0 || a.value.indexOf('ecmascript') >= 0;
          tag.lang = a.value;
          break;
        }
      }
      tag.content = isJS ? readScriptJS(reader) : readScriptRaw();
    };

    const readScriptJS = (reader) => {
      class ScriptParser extends Parser {
        readToken_lt_gt(code) {
          if (this.input.slice(this.pos, this.pos + 9) == '</script>') {
            return this.finishToken(types$1.eof);
          }
          return super.readToken_lt_gt(code);
        }

        scan() {
          this.nextToken();
          while (this.type !== types$1.eof) {
            this.parseStatement(null, true, null);
          }
          return this.end;
        }
      }

      let start = reader.index;
      let parser = new ScriptParser({ ecmaVersion: 'latest', sourceType: 'module' }, reader.source, start);
      let end = parser.scan();
      reader.index = end + 9;
      return reader.sub(start, end);
    };

    const readScriptRaw = () => {
      return reader.read(/^(.*?)<\/script>/s);
    };

    const readStyle = () => {
      return reader.read(/^(.*?)<\/style>/s);
    };

    const readComment = () => {
      return reader.read(/^<!--.*?-->/s);
    };

    const readTemplate = () => {
      return reader.read(/^(.*?)<\/template>/s);
    };

    const go = (parent, push) => {
      let textNode = null;
      if(!push) push = n => parent.body.push(n);

      const addText = v => {
        if(!textNode) {
          textNode = {
            type: 'text',
            value: ''
          };
        }
        textNode.value += v;
      };

      const flushText = () => {
        if(!textNode) return;
        push(textNode);
        textNode = null;
      };

      while(!reader.end()) {
        if(reader.probe('<') && reader.probe(/^<\S/)) {
          flushText();

          if(reader.probe('<!--')) {
            push({
              type: 'comment',
              content: readComment()
            });
            continue;
          }

          if(reader.readIf('</')) { // close tag
            let name = reader.read(/^([^>]*)>/);
            name = name.trim();
            if(name) {
              name = name.split(':')[0];
              assert(name === parent.name, 'Wrong close-tag: ' + parent.name + ' - ' + name);
            }
            return;
          }

          let tag = readTag(reader);
          push(tag);
          if(tag.name === 'script') {
            readScript(reader, tag);
            continue;
          } else if(tag.name === 'template') {
            tag.type = 'template';
            tag.content = readTemplate();
            continue;
          } else if(tag.name === 'style') {
            tag.type = 'style';
            tag.content = readStyle();
            continue;
          } else {
            tag.classes = new Set();
          }

          if(tag.closedTag) continue;

          tag.body = [];
          try {
            go(tag);
          } catch (e) {
            if(typeof e == 'string') e = new Error(e);
            if(!e.details) e.details = tag.openTag;
            throw e;
          }
          continue;
        } else if(reader.probe('{')) {
          if(reader.probe(/^\{[#/:@*]/)) {
            let bind = parseBinding(reader);
            if(bind.value[0] != '*') flushText();
            if(bind.value[0] == '*') {
              addText(bind.raw);
            } else if(bind.value.match(/^@\w+/)) {
              let tag = {
                type: 'systag',
                value: bind.value
              };
              push(tag);
              continue;
            } else if(bind.value.startsWith('#each ')) {
              let tag = {
                type: 'each',
                value: bind.value,
                mainBlock: []
              };
              push(tag);
              go(tag, n => tag.mainBlock.push(n));
              continue;
            } else if(bind.value === ':else' && parent.type === 'each') {
              assert(!parent.elseBlock);
              parent.elseBlock = [];
              return go(parent, n => parent.elseBlock.push(n));
            } else if(bind.value === '/each') {
              assert(parent.type === 'each', 'Bind error: /each');
              return;
            } else if(bind.value.startsWith('#if ')) {
              let tag = {
                type: 'if',
                parts: [{
                  value: bind.value,
                  body: []
                }]
              };
              push(tag);
              go(tag, n => tag.parts[0].body.push(n));
              continue;
            } else if(bind.value.match(/^:elif\s|^:else\s+if\s/)) {
              assert(parent.type === 'if', 'Bind error: :else');
              let part = {
                value: bind.value,
                body: []
              };
              parent.parts.push(part);
              return go(parent, n => part.body.push(n));
            } else if(bind.value === ':else') {
              assert(parent.type === 'if', 'Bind error: :else');
              parent.elsePart = [];
              return go(parent, n => parent.elsePart.push(n));
            } else if(bind.value === '/if') {
              assert(parent.type === 'if', 'Bind error: /if');
              return;
            } else if(bind.value.startsWith('#await ')) {
              let tag = {
                type: 'await',
                value: bind.value,
                parts: { main: [] }
              };
              push(tag);
              go(tag, n => tag.parts.main.push(n));
              continue;
            } else if(bind.value.match(/^:then( |$)/)) {
              assert(parent.type === 'await', 'Bind error: await-then');
              parent.parts.then = [];
              parent.parts.thenValue = bind.value;
              return go(parent, n => parent.parts.then.push(n));
            } else if(bind.value.match(/^:catch( |$)/)) {
              assert(parent.type === 'await', 'Bind error: await-catch');
              parent.parts.catch = [];
              parent.parts.catchValue = bind.value;
              return go(parent, n => parent.parts.catch.push(n));
            } else if(bind.value == '/await') {
              assert(parent.type === 'await', 'Bind error: /await');
              return;
            } else if(bind.value.match(/^#slot(:| |$)/)) {
              let tag = {
                type: 'slot',
                value: bind.value,
                body: []
              };
              push(tag);
              go(tag);
              continue;
            } else if(bind.value == '/slot') {
              assert(parent.type === 'slot', 'Slot error: /slot');
              return;
            } else if(bind.value.startsWith('#fragment:')) {
              let tag = {
                type: 'fragment',
                value: bind.value,
                body: []
              };
              push(tag);
              go(tag);
              continue;
            } else if(bind.value == '/fragment') {
              assert(parent.type === 'fragment', 'Fragment error: /fragment');
              return;
            } else if(bind.value.match(/^#([\w\-]+)/)) {
              const name = bind.value.match(/^#([\w\-]+)/)[1];
              let tag = {
                type: 'block',
                value: bind.value,
                name,
                body: []
              };
              push(tag);
              go(tag);
              continue;
            } else if(bind.value.match(/^\/([\w\-]+)/)) {
              const name = bind.value.match(/^\/([\w\-]+)/)[1];
              assert(parent.type === 'block' && parent.name == name, `Fragment error: ${parent.name} - ${name}`);
              return;
            } else throw 'Error binding: ' + bind.value;
          } else {
            addText(parseBinding(reader).raw);
            continue;
          }
        }

        addText(reader.read());
      }
      flushText();
      assert(parent.type === 'root', 'File ends to early');
    };

    let root = {
      type: 'root',
      body: []
    };
    go(root);

    return root;
  }

  function readTag(reader) {
    const start = reader.index;
    assert(reader.read() === '<', 'Tag error');

    let name = reader.read(/^[\da-zA-Z^\-]+/);
    let elArg = null;

    if(reader.readIf(':')) {
      elArg = reader.read(/^[^\s>/]+/);
    }

    let attributes = parseAttibutes$1(reader, {closedByTag: true});

    let closedTag = false;
    if(reader.readIf('/>')) closedTag = true;
    else assert(reader.readIf('>'));

    const voidTags = ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr'];
    let voidTag = voidTags.indexOf(name) >= 0;
    if(voidTag) closedTag = true;
    return {
      type: 'node',
      name,
      elArg,
      openTag: reader.sub(start),
      start: start,
      end: reader.index,
      closedTag,
      voidTag,
      attributes
    };
  }

  function parseText(source) {
    let i = 0;
    let step = 0;
    let text = '';
    let exp = '';
    let q;
    let len = source.length;
    let parts = [];
    let depth = 0;
    while(i < len) {
      let a = source[i++];
      if(step == 1) {
        if(q) {
          if(a === q) q = null;
          exp += a;
          continue;
        }
        if(a === '"' || a === "'" || a === '`') {
          q = a;
          exp += a;
          continue;
        }
        if(a === '{') depth++;
        else if(a === '}') {
          depth--;
          if(!depth) {
            step = 0;
            let js = exp[0] == '*';
            if(js) exp = exp.substring(1);
            exp = exp.trim();
            if(!exp) throw 'Wrong expression';
            parts.push({ value: exp, type: js ? 'js' : 'exp' });
            exp = '';
            continue;
          }
        }
        exp += a;
        continue;
      }
      if(a === '{') {
        depth++;
        if(text) {
          parts.push({ value: text, type: 'text' });
          text = '';
        }
        step = 1;
        continue;
      }
      text += a;
    }
    if(text) parts.push({ value: text, type: 'text' });
    assert(step == 0, 'Wrong expression: ' + source);
    let staticText = null;
    if(!parts.some(p => p.type == 'exp')) staticText = parts.map(p => p.type == 'text' ? p.value : '').join('');

    let pe = {
      parts,
      staticText,
      binding: parts.length == 1 && parts[0].type == 'exp' ? parts[0].value : null,
      getResult() {
        let result = [];
        this.parts.forEach(p => {
          if(p.type == 'js') return;
          if(p.type == 'exp') result.push(p);
          else {
            let l = last(result);
            if(l?.type == 'text') l.value += p.value;
            else result.push({ ...p });
          }
        });

        return '`' + result.map(p => p.type == 'text' ? Q(p.value) : '${' + p.value + '}').join('') + '`';
      }
    };
    pe.result = pe.getResult();
    return pe;
  }


  const parseBinding = (source) => {
    const reader = new Reader(source);
    let start = reader.index;

    assert(reader.read() === '{', 'Bind error');
    let a = null, p, q;
    let bkt = 1;

    while(true) {
      p = a;
      a = reader.read();

      if(q) {
        if(a != q) continue;
        if(p == '\\') continue;
        q = null;
        continue;
      }
      if(a == '"' || a == "'" || a == '`') {
        q = a;
        continue;
      }
      if(a == '*' && p == '/') {
        // comment block
        while(true) {
          p = a;
          a = reader.read();
          if(a == '/' && p == '*') break;
        }
        continue;
      }

      if(a == '{') {
        bkt++;
        continue;
      }
      if(a == '}') {
        bkt--;
        if(bkt > 0) continue;
      } else continue;

      const raw = reader.sub(start);
      return {
        raw,
        value: raw.substring(1, raw.length - 1).trim()
      };
    }
  };


  const parseAttibutes$1 = (source, option={}) => {
    const r = new Reader(source);
    let result = [];

    while(!r.end()) {
      r.skip();
      if(option.closedByTag) {
        if(r.probe('/>') || r.probe('>')) break;
      } else if(r.end()) break;
      let start = r.index;
      if(r.probe('{*')) {
        const {raw} = parseBinding(r);
        result.push({name: raw, content: raw});
      } else if(r.probe('*{')) {
        r.read();
        let {raw} = parseBinding(r);
        raw = '*' + raw;
        result.push({name: raw, content: raw});
      } else if(r.probe('{...')) {
        let {raw} = parseBinding(r);
        result.push({name: raw, content: raw});
      } else {
        let name = r.readAttribute();
        assert(name, 'Wrong syntax');
        if(r.readIf('=')) {
          if(r.probe('{')) {
            const {raw} = parseBinding(r);
            result.push({name, value: raw, raw, content: r.sub(start), type: 'exp'});
          } else if(r.probeQuote()) {
            const raw = r.readString();
            const value = raw.substring(1, raw.length - 1);
            result.push({name, value, raw, content: r.sub(start), type: 'text'});
          } else {
            const value = r.readIf(/^[^\s<>]+/);
            result.push({name, value, raw: value, content: r.sub(start), type: 'word'});
          }
        } else {
          let value;
          if(name[0] == '{' && last(name) == '}' && !name.startsWith('{...')) {
            value = name;
            name = unwrapExp(name);
            result.push({name, value, raw: value, content: r.sub(start), type: 'exp'});
          } else {
            result.push({name, value, raw: value, content: r.sub(start), type: 'attribute'});
          }
        }
      }
    }

    return result;
  };

  function I(value = 0) {
    this.$indent = value;
  }


  function xWriter(node) {
    this.indent = 0;
    this.write = function(...args) {
      for(let i of args) {
        if(i === true) node.$result.push(new I(this.indent));
        else node.$result.push(i);
      }
    };
    this.writeLine = function(s) { this.write(true, s); };

    this.add = function(n) {
      if(n === null) return;
      assert(n instanceof xNode);
      assert(!n.$inserted, 'already inserted');
      node.$result.push({ node: n, indent: this.indent });
      n.$inserted = true;
    };

    this.isEmpty = function(n) {
      if(n == null) return true;
      assert(n.$done, 'Node is not built');
      return !n.$result.some(r => {
        if(typeof (r) == 'string') return true;
        else if(r.node instanceof xNode) return !this.isEmpty(r.node);
        else if(r instanceof I) return true;
        else {
          console.error('Type', r);
          throw 'error type';
        }
      });
    };
  }


  function xBuild(node, option={}) {
    let pending, trace, active;

    const resolve = n => {
      if (n.__resolving) return;
      n.__resolving = true;
      active = n;
      resolveDependecies(n, {check: true});

      if (!n.$done) {
        let ready = true;
        n.$wait?.forEach(i => {
          if (i == null) return;
          assert(i instanceof xNode, '$wait supports only xNode');
          if (i.$done) return;
          resolve(i);
          if (i.$done) return;
          ready = false;
          trace.push(`${n.$type} -> ${i.$type}`);
        });
        if(ready) {
          let w = new xWriter(n);
          n.$handler(w, n);
          n.$done = true;
        }
      }

      if(n.$done) {
        n.$result.forEach(r => {
          if(r?.node instanceof xNode) resolve(r.node);
        });
      } else pending++;

      n.__resolving = false;
    };

    let depth;
    for(depth = 10; depth > 0; depth--) {
      pending = 0;
      trace = [];
      try {
        resolve(node);
      } catch (e) {
        if (active) console.log('# Error node', active);
        throw e;
      }
      if(!pending) break;
    }
    if(!depth) {
      option.warning?.('(i) Circular dependency:\n' + trace.map(s => ` * ${s}`).join('\n'));
      throw new Error('xNode: Circular dependency');
    }

    let result = [];

    const asm = (n, baseIndent) => {
      if(!n.$done) {
        console.log('not resolved', n);
        throw 'node is not resolved';
      }
      n.$result.forEach(r => {
        if(typeof (r) == 'string') result.push(r);
        else if(r.node instanceof xNode) {
          asm(r.node, r.indent + baseIndent);
        } else if(r instanceof I) {
          r.$indent += baseIndent;
          result.push(r);
        } else {
          console.error('Type', r);
          throw 'error type';
        }
      });
    };
    asm(node, 0);

    for(let i = 0; i < result.length; i++) {
      let r = result[i];
      let next = result[i + 1];

      if(r instanceof I) {
        if(next instanceof I) {
          result[i] = '';
        } else {
          let s = '\n';
          let j = r.$indent;
          while(j--) {
            s += '  ';
          }
          result[i] = s;
        }
      }
    }

    return result.join('');
  }


  function xNode(type, ...args) {
    /*
      xNode(type, data, handler)
      xNode(type, data)
      xNode(type, handler)

      $wait - wait for a node be processed
      $hold - hold a node from processing, such node must be created before building

        xNode('name', {
          $wait: ['apply', 'rootCD', anotherNode],
          $hold: ['apply', anotherNode]
        }, (ctx, node) => {
          this.inuse.apply      // check if apply is used
          this.inuse.rootCD     // check if rootCD is used
          node.$wait[0].value   // check value of first node in $wait
          ctx.add(childNode);   // insert a node
          ...
        })
    */

    if(!(this instanceof xNode)) return new xNode(type, ...args);

    let data, handler;
    if (args.length == 2) {
      [data, handler] = args;
    } else {
      if (isFunction(args[0])) {
        handler = args[0];
        data = {};
      } else {
        data = args[0];
      }
    }

    Object.assign(this, data);

    this.$type = type;
    this.$handler = handler;
    this.$done = false;
    this.$inserted = false;
    this.$result = [];

    this.$setValue = function(value=true) {
      assert(!this.$done, 'Attempt to set active, depends node is already resolved');
      if (typeof(value) == 'object') Object.assign(this, value);
      else this.value = value;
    };
    get_context(false) && resolveDependecies(this);
    return this;
  }

  const resolveDependecies = (node, option) => {
    if (node.$wait) {
      node.$wait = node.$wait.map(n => {
        if(typeof (n) == 'string') {
          const context = get_context();
          if (context.glob[n]) n = context.glob[n];
          else if (option?.check) throw new Error(`Wrong dependency '${n}'`);
        }
        return n;
      });
    }

    if (node.$hold) {
      node.$hold = node.$hold.map(n => {
        if(typeof (n) == 'string') {
          const context = get_context();
          if (context.glob[n]) n = context.glob[n];
          else if (option?.check) throw new Error(`Wrong dependency '${n}'`);
          else return n;
        }

        if(!n.$wait) n.$wait = [];
        if (!n.$wait.includes(node)) {
          assert(!n.$done, 'Attempt to add dependecy, but node is already resolved');
          n.$wait.push(node);
        }

        return n;
      });
    }
  };


  xNode.raw = value => {
    return xNode('raw', {value}, (ctx, node) => {
      ctx.write(true, node.value);
    });
  };


  xNode.block = (data={}) => {
    return xNode('block', {
      body: [],
      push(child) {
        assert(arguments.length == 1, 'Wrong xNode');
        if(typeof child == 'string') child = xNode.raw(child);
        this.body.push(child);
      },
      unshift(child) {
        assert(arguments.length == 1, 'Wrong xNode');
        if(typeof child == 'string') child = xNode.raw(child);
        this.body.unshift(child);
      },
      ...data
    }, (ctx, node) => {
      if(node.scope) {
        ctx.writeLine('{');
        ctx.indent++;
      }
      node.body.forEach(n => {
        if(n == null) return;
        if(typeof n == 'string') {
          if(n) ctx.writeLine(n);
        } else ctx.add(n);
      });
      if(node.scope) {
        ctx.indent--;
        ctx.writeLine('}');
      }
    });
  };


  xNode.baseNode = (type, data, handler) => {
    return xNode(type, {
      bindName() {
        if(!this._boundName) this._boundName = `el${get_context().uniqIndex++}`;
        return this._boundName;
      },
      ...data
    }, handler);
  };


  xNode.node = (data) => {
    return xNode.baseNode('node', {
      children: [],
      attributes: [],
      class: new Set(),
      voidTag: false,
      getLast() { return last(this.children) },
      push(n) {
        if(typeof n == 'string') {
          let p = last(this.children);
          if(p && p.$type == 'node:text') {
            p.value += n;
            return p;
          }
          n = xNode.baseNode('node:text', { value: n }, (ctx, node) => {
            ctx.write(node.value);
          });
        }
        assert(n instanceof xNode);
        this.children.push(n);
        return n;
      },
      ...data
    }, (ctx, node) => {
      if(node.inline) {
        node.children.forEach(n => ctx.add(n));
      } else {
        assert(node.name, 'No node name');
        ctx.write(`<${node.name}`);

        if(node.attributes.length) {
          node.attributes.forEach(p => {
            if(p.name == 'class') {
              if(p.value) p.value.split(/\s+/).forEach(name => node.class.add(name));
              return;
            }

            if(p.value) ctx.write(` ${p.name}="${p.value}"`);
            else ctx.write(` ${p.name}`);
          });
        }

        if (node.class.size) {
          ctx.add(get_context().css.resolveAsNode(node.class, [' class="', '"']));
        }
        
        if(node.children.length) {
          ctx.write('>');
          node.children.forEach(n => ctx.add(n));
          ctx.write(`</${node.name}>`);
        } else {
          if(node.voidTag) ctx.write('/>');
          else ctx.write(`></${node.name}>`);
        }
      }
    });
  };


  xNode.nodeComment = (data) => {
    return xNode.baseNode('node:comment', data, (ctx, node) => {
      const config = get_context().config;
      if(config.debug && config.debugLabel) ctx.write(`<!-- ${node.value} -->`);
      else ctx.write('<!---->');
    });
  };


  xNode.template = (data) => {
    return xNode('template', data, (ctx, node) => {
      const config = get_context().config;
      let template = xBuild(node.body, {warning: config.warning});
      let convert, cloneNode = node.cloneNode;
      if(node.svg) {
        convert = '$runtime.svgToFragment';
        cloneNode = false;
      } else if(!template.match(/[<>]/) && !node.requireFragment) {
        convert = '$runtime.createTextNode';
        cloneNode = false;
        if(!node.raw) template = htmlEntitiesToText(template);
      } else {
        if(config.hideLabel) convert = '$runtime.htmlToFragmentClean';
        else convert = '$runtime.htmlToFragment';
        template = template.replace(/<!---->/g, '<>');
      }
      if(node.raw) {
        ctx.write(Q(template));
      } else if(node.inline) {
        ctx.write(`${convert}(\`${Q(template)}\``);
        if(cloneNode || node.requireFragment) {
          let opt = (cloneNode ? 1 : 0) + (node.requireFragment ? 2 : 0);
          ctx.write(`, ${opt})`);
        } else ctx.write(')');
      } else {
        assert(node.name);
        ctx.write(true, `const ${node.name} = ${convert}(\`${Q(template)}\``);
        if(cloneNode || node.requireFragment) {
          let opt = (cloneNode ? 1 : 0) + (node.requireFragment ? 2 : 0);
          ctx.write(`, ${opt});`);
        } else ctx.write(');');
      }
    });
  };

  const walk = (node, fn) => {
    switch(node.type) {
      case 'node':
      case 'slot':
      case 'block':
      case 'fragment':
      case 'root':
        if(node.body) fn(node.body, node);
        break
      case 'each':
        if(node.mainBlock) fn(node.mainBlock, node);
        if(node.elseBlock) fn(node.elseBlock, node);
        break
      case 'await':
        if(node.parts.main) fn(node.parts.main, node);
        if(node.parts.then) fn(node.parts.then, node);
        if(node.parts.catch) fn(node.parts.catch, node);
        break
      case 'if':
        node.parts.forEach(p => {
          if(p.body) fn(p.body, node);
        });
        if(node.elsePart) fn(node.elsePart, node);
        break
      case 'text':
      case 'comment':
      case 'script':
      case 'style':
      case 'systag':
      case 'template':
        break
      default:
        throw `Not implemented: ${node.type}`;
    }
  };

  function compactDOM() {
    let data = this.DOM;

    function go(body, parentNode) {
      let i;

      const getPrev = () => {
        return i > 0 && body.length ? body[i - 1] : null;
      };

      const getNext = () => {
        return i < body.length ? body[i + 1] : null;
      };

      for(i = 0; i < body.length; i++) {
        let node = body[i];
        if(node.type == 'text') {
          let next = getNext();
          if(next && next.type == 'text') {
            node.value += next.value;
            body.splice(i + 1, 1);
          }

          if(node.value) {
            if(!node.value.trim()) {
              node.value = ' ';
            } else {
              let rx = node.value.match(/^(\s*)(.*?)(\s*)$/);
              if(rx) {
                let r = '';
                if(rx[1]) r += ' ';
                r += rx[2];
                if(rx[3]) r += ' ';
                node.value = r;
              }
            }
          }
        } else {
          if(node.type == 'node' && (node.name == 'pre' || node.name == 'textarea')) continue;
          walk(node, go);
        }
      }

      const isTable = n => ['thead', 'tbody', 'tfoot', 'tr', 'td', 'th', 'colgroup', 'col'].includes(n.name);

      i = 0;
      while(i < body.length) {
        let node = body[i];
        if(node.type == 'text' && !node.value.trim()) {
          if(parentNode && (parentNode.name == 'table' || isTable(parentNode)) && (i == 0 || i == body.length - 1)) {
            body.splice(i, 1);
            continue;
          }

          let prev = getPrev();
          let next = getNext();

          if(next?.type == 'node' && ['br', 'div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7'].includes(next.name)) {
            body.splice(i, 1);
            continue;
          }

          if(prev?.type == 'node' && ['br', 'div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7'].includes(prev.name)) {
            body.splice(i, 1);
            continue;
          }

          if(prev && next) {
            if(prev.type == 'node' && next.type == 'node') {
              if(isTable(prev) && isTable(next) ||
                  prev.name == 'li' && next.name == 'li' ||
                  parentNode?.type == 'node' && parentNode?.name == 'select' && prev.name == 'option' && next.name == 'option' ||
                  prev.name == 'div' && next.name == 'div') {
                body.splice(i, 1);
                continue;
              }
            }
          } else if(parentNode) {
            let p = prev && prev.type == 'node' && prev.name;
            let n = next && next.type == 'node' && next.name;

            if((p == 'td' || n == 'td') && ((parentNode.type == 'node' && parentNode.name == 'tr') || (parentNode.type == 'each'))) {
              body.splice(i, 1);
              continue;
            }
            if((p == 'tbody' || n == 'tbody') && (parentNode.type == 'node' && parentNode.name == 'table')) {
              body.splice(i, 1);
              continue;
            }
            if((p == 'li' || n == 'li') && (parentNode.type == 'node' && parentNode.name == 'ul')) {
              body.splice(i, 1);
              continue;
            }
            if((p == 'option' || n == 'option') && (parentNode.type == 'node' && parentNode.name == 'select')) {
              body.splice(i, 1);
              continue;
            }
            if(parentNode.type == 'node' && ['div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7'].includes(parentNode.name)) {
              body.splice(i, 1);
              continue;
            }
            if(parentNode.type == 'node' && (prev && prev.type == 'each' || next && next.type == 'each')) {
              body.splice(i, 1);
              continue;
            }
            if(parentNode.type == 'node' && parentNode.name == 'button' && (!p || !n)) {
              body.splice(i, 1);
              continue;
            }
          }
        }
        i++;
      }
    }

    function trimNodes(srcNodes) {
      let nodes = srcNodes.slice();
      let ex = [];
      while(nodes.length) {
        let n = nodes[0];
        if(n.type == 'fragment' || n.type == 'comment') {
          ex.push(n);
          nodes.shift();
          continue;
        }
        if(n.type == 'text' && !n.value.trim()) nodes.shift();
        else break;
      }
      nodes = [...ex, ...nodes];
      ex = [];
      while(nodes.length) {
        let n = last(nodes);
        if(n.type == 'fragment' || n.type == 'comment') {
          ex.push(n);
          nodes.pop();
          continue;
        }
        if(n.type == 'text' && !n.value.trim()) nodes.pop();
        else break;
      }
      return [...nodes, ...ex];
    }

    data.body = trimNodes(data.body);

    go(data.body);
  }

  function compactFull() {
    const go = (body) => {
      let i = 0;
      while (i < body.length) {
        let n = body[i];
        if(n.type == 'text') {
          n.value = n.value.trim();
          if(!n.value) {
            body.splice(i, 1);
            continue;
          }
        } else walk(n, go);
        i++;
      }
    };

    walk(this.DOM, go);
  }

  function parse() {
    let source = this.scriptNodes.length ? this.scriptNodes[0].content : null;
    this.script = {
      source,
      imports: [],
      importedNames: [],
      autosubscribeNames: [],
      props: [],
      rootVariables: {},
      rootFunctions: {},
      autoimport: {},
      comments: []
    };
    if(source) {
      source = source.split(/\n/).map(line => {
        let rx = line.match(/^(\s*)\/\/(.*)$/);
        if(!rx) return line;
        let code = rx[2].trim();
        if(code != '!no-check') return line;
        return rx[1] + '$$_noCheck;';
      }).join('\n');

      const onComment = (isBlockComment, value, start, end) => {
        if(isBlockComment) return;
        this.script.comments.push({ start, end, value });
      };
      this.script.ast = parse$1(source, { sourceType: 'module', ecmaVersion: 'latest', onComment });

      if(source.includes('$props')) this.require('$props', 'apply');
      if(source.includes('$attributes')) this.require('$attributes', 'apply');
      if(source.includes('$emit')) this.require('$emit');
      if(source.includes('$onDestroy')) this.require('$onDestroy');
      if(source.includes('$onMount')) this.require('$onMount');
      if(source.includes('$context')) this.require('$context');
      if(source.includes('$component')) this.require('$component');
    } else {
      this.script.ast = {
        body: [],
        sourceType: 'module',
        type: 'Program'
      };
    }
  }

  function transform() {
    const result = this.script;
    const source = this.script.source;
    const ast = this.script.ast;

    let rootVariables = result.rootVariables;
    let rootFunctions = result.rootFunctions;
    ast.body.forEach(n => {
      if(n.type == 'FunctionDeclaration') {
        rootFunctions[n.id.name] = true;
      } else if(n.type == 'VariableDeclaration') {
        n.declarations.forEach(i => {
          rootVariables[i.id.name] = true;
          if(i.init && i.init.type == 'ArrowFunctionExpression') rootFunctions[i.id.name] = true;
        });
      }
    });

    const funcTypes = {
      FunctionDeclaration: 1,
      FunctionExpression: 1,
      ArrowFunctionExpression: 1
    };

    const applyBlock = () => {
      this.require('apply');
      return {
        _apply: true,
        type: 'ExpressionStatement',
        expression: {
          callee: {
            type: 'Identifier',
            name: '$$apply'
          },
          type: 'CallExpression'
        }
      };
    };

    const returnApplyBlock = (a) => {
      this.require('apply');
      return {
        _apply: true,
        callee: {
          type: 'Identifier',
          name: '$$apply'
        },
        type: 'CallExpression',
        arguments: [a]
      };
    };

    function isInLoop(node) {
      if(!node._parent || node._parent.type != 'CallExpression') return false;
      if(node._parent.callee.type != 'MemberExpression') return false;
      let method = node._parent.callee.property.name;
      return ['forEach', 'map', 'filter', 'find', 'findIndex'].includes(method);
    }

    function isNoCheck(node) {
      return node.type == 'ExpressionStatement' && node.expression.type == 'Identifier' && node.expression.name == '$$_noCheck';
    }

    function transformNode(node) {
      if(funcTypes[node.type] && node.body.body && node.body.body.length) {
        if(node._parent.type == 'CallExpression' && node._parent.callee.name == '$onDestroy') return 'stop';
        for(let i = 0; i < node.body.body.length; i++) {
          let n = node.body.body[i];
          if(!isNoCheck(n)) continue;
          node.body.body.splice(i, 1);
          if (i > 0) {
            node.body.body[i - 1].__stop = true;
            return;
          }
          return 'stop';
        }
        if(!isInLoop(node)) {
          node.body.body.unshift(applyBlock());
        }
      } else if(node.type == 'ArrowFunctionExpression') {
        if(node._parent.type == 'CallExpression' && node._parent.callee.name == '$onDestroy') return 'stop';
        if(node.body.type != 'BlockStatement' && node.body.type != 'ArrowFunctionExpression' && !isInLoop(node)) {
          node.body = returnApplyBlock(node.body);
        }
      } else if(node.type == 'AwaitExpression') {
        let n = node, p;
        while(n._parent) {
          p = n._parent;
          if(p.type == 'BlockStatement') break;
          n = p;
          p = null;
        }
        if(p) {
          let i = p.body.indexOf(n);
          if(i >= 0 && !(p.body[i + 1] && p.body[i + 1]._apply)) {
            if(n.type == 'ReturnStatement') {
              n.argument = returnApplyBlock(n.argument);
            } else {
              p.body.splice(i + 1, 0, applyBlock());
            }
          }
        }
      }
    }

    function walk(node, parent, fn) {
      if(typeof node !== 'object') return;

      if(node._apply && node.type == 'ExpressionStatement') return;
      node._parent = parent;
      let forParent = parent;
      if(node.type) {
        if(fn(node) == 'stop') return;
        forParent = node;
      }
      for(let key in node) {
        let child = node[key];
        if(key == '_parent') continue;
        if(!child || typeof child !== 'object') continue;

        if(Array.isArray(child)) {
          for(let i = 0; i < child.length; i++) {
            walk(child[i], forParent, fn);
            if (child[i].__stop) break;
          }
        } else {
          walk(child, forParent, fn);
        }
      }
    }
    walk(ast, null, transformNode);

    function makeVariable(name) {
      return {
        type: 'VariableDeclaration',
        declarations: [{
          type: 'VariableDeclarator',
          id: {
            type: 'Identifier',
            name: name
          },
          init: null
        }],
        kind: 'var'
      };
    }

    let watchers = xNode.block();

    const makeWatch = (n) => {
      function assertExpression(n) {
        if(['Identifier', 'TemplateLiteral', 'Literal'].includes(n.type)) return;
        if(n.type.endsWith('Expression')) return;
        throw 'Wrong expression';
      }

      if(n.body.type != 'ExpressionStatement') throw 'Error';
      if(n.body.expression.type == 'AssignmentExpression') {
        const ex = n.body.expression;
        if(ex.operator != '=') throw 'Error';
        let target;
        if(ex.left.type == 'Identifier') {
          target = ex.left.name;
          if(!(target in rootVariables)) resultBody.push(makeVariable(target));
        } else if(ex.left.type == 'MemberExpression') {
          target = generate(ex.left);
        } else throw 'Error';
        assertExpression(ex.right);
        const exp = generate(ex.right);
        watchers.push(xNode('watch-assign', {
          $wait: ['apply'],
          target,
          exp
        }, (ctx, n) => {
          if(this.inuse.apply) ctx.write(true, `$runtime.prefixPush(() => {${n.target} = ${n.exp};});`);
          else ctx.write(true, `${n.target} = ${n.exp};`);
        }));
      } else if(n.body.expression.type == 'SequenceExpression') {
        const ex = n.body.expression.expressions;
        const handler = last(ex);
        let callback = generate(handler);
        if(handler.type == 'ArrowFunctionExpression' || handler.type == 'FunctionExpression') ; else if(detectExpressionType(callback) == 'identifier') {
          callback = `(v) => { ${callback}(v); }`;
        } else {
          callback = `() => { ${callback}; }`;
        }

        if(ex.length == 2) {
          assertExpression(ex[0]);
          watchers.push(xNode('watch-expression', {
            $wait: ['apply'],
            exp: generate(ex[0]),
            callback
          }, (ctx, n) => {
            if(this.inuse.apply) {
              if(this.config.immutable) ctx.write(true, `$watch(() => (${n.exp}), ${n.callback});`);
              else ctx.write(true, `$watch(() => (${n.exp}), ${n.callback}, {cmp: $runtime.deepComparator(0)});`);
            } else {
              ctx.write(true, `(${n.callback})(${n.exp});`);
            }
          }));
        } else if(ex.length > 2) {
          for(let i = 0; i < ex.length - 1; i++) assertExpression(ex[i]);
          let exp = {
            type: 'ArrayExpression',
            elements: ex.slice(0, ex.length - 1)
          };

          watchers.push(xNode('watch-expression', {
            $wait: ['apply'],
            exp: generate(exp),
            callback
          }, (ctx, n) => {
            if(this.inuse.apply) ctx.write(true, `$watch(() => ${n.exp}, ($args) => { (${n.callback}).apply(null, $args); }, {cmp: $runtime.deepComparator(1)});`);
            else ctx.write(true, `(${n.callback}).apply(null, ${n.exp})`);
          }));
        } else throw 'Error';
      } else throw 'Error';
    };

    let imports = [];
    let resultBody = [];
    let lastPropIndex = null;
    let constantProps = true;

    if(result.comments.length) {
      result.comments.forEach(c => {
        let last;
        for(let i = 0; i < ast.body.length; i++) {
          let n = ast.body[i];
          if(n.start >= c.start) break;
          last = n;
        }
        if(last && last.end <= c.start) last._comment = c.value;
      });
    }

    let exportedFunctions = xNode('exported-functions', {
      $hold: ['$component'],
      list: []
    }, (ctx, n) => {
      if(!n.list.length) return;
      this.require('$component');
      for(let name of n.list) ctx.write(true, `$component.${name} = ${name};`);
    });

    ast.body.forEach(n => {
      if(n.type == 'ImportDeclaration') {
        imports.push(n);
        n.specifiers.forEach(s => {
          if(s.local.type != 'Identifier') return;
          let name = s.local.name;
          result.importedNames.push(name);
          if(name[0].toLowerCase() == name[0]) {
            if(!n._comment || !n._comment.includes('!no-autosubscribe')) result.autosubscribeNames.push(s.local.name);
          }
          if(s.type != 'ImportDefaultSpecifier') return;
          result.imports.push(name);
        });
        return;
      } else if(n.type == 'ExportNamedDeclaration') {
        if(n.declaration.type == 'FunctionDeclaration') {
          exportedFunctions.list.push(n.declaration.id.name);
          resultBody.push(n.declaration);
          return;
        }

        assert(n.declaration.type == 'VariableDeclaration', 'Wrong export');
        if(n.declaration.kind != 'const') constantProps = false;
        n.declaration.declarations.forEach(d => {
          assert(d.type == 'VariableDeclarator', 'Wrong export');
          let p = { name: d.id.name };
          if(d.init) {
            if(d.init.type == 'Literal') {
              p.value = d.init.raw;
            } else {
              p.value = generate(d.init);
            }
          }
          result.props.push(p);
          this.require('$props');
          lastPropIndex = resultBody.length;
        });
        return;
      }

      if(n.type == 'LabeledStatement' && n.label.name == '$') {
        try {
          makeWatch(n);
          return;
        } catch (e) {
          throw new Error(e + ': ' + source.substring(n.start, n.end));
        }
      }
      resultBody.push(n);
    });


    let blockHead = [];
    let blockTail = [];
    if (lastPropIndex != null) {
      blockHead = resultBody.slice(0, lastPropIndex);
      blockTail = resultBody.slice(lastPropIndex);
    } else {
      blockTail = resultBody;
    }

    const $props = xNode('$props', (ctx, n) => {
      n.value && ctx.add(n.value);
    });
    this.module.head.push($props);

    this.module.code.push(nodeAst({ body: blockHead }));
    this.module.code.push(xNode('$props-update', {
      $hold: ['apply', '$props', '$attributes', $props],
      constantProps,
      head: $props
    }, (ctx, n) => {
      const props = this.script.props;
      const $props = this.glob.$props.value;
      const $attributes = this.glob.$attributes.value;

      if (props.length) {
        // exported props
        n.head.value = xNode('$props', {}, (ctx, n) => {
          ctx.write(true, 'let $props = $option.props || {};');
        });
        if(!n.constantProps) this.require('apply');

        if ($attributes) {
          let pa = props.map(p => {
            if (p.value === void 0) return `${p.name}`;
            return `${p.name}=${p.value}`;
          }).join(', ');
          ctx.write(true, `let {${pa}, ...$attributes} = $props;`);

          if(!n.constantProps) {
            ctx.write(true, `$runtime.current_component.$push = ($$props) => ({${props.map(p => p.name + '=' + p.name).join(', ')}, ...$attributes} = $props = $$props);`);
            ctx.write(true, `$runtime.current_component.$exportedProps = () => ({${props.map(p => p.name).join(', ')}});`);
          }
        } else {
          let pa = props.map(p => {
            if (p.value === void 0) return `${p.name}`;
            return `${p.name}=${p.value}`;
          }).join(', ');
          ctx.write(true, `let {${pa}} = $props;`);

          if(!n.constantProps) {
            ctx.write(true, `$runtime.current_component.$push = ($$props) => ({${props.map(p => p.name + '=' + p.name).join(', ')}} = $props = $$props);`);
            ctx.write(true, `$runtime.current_component.$exportedProps = () => ({${props.map(p => p.name).join(', ')}});`);
          }
        }
      } else {
        // no exported props
        n.head.value = xNode('no-props', ctx => {
          if($props && $attributes) {
            ctx.write(true, 'let $props = $option.props || {}, $attributes = $props;');
            ctx.write(true, '$runtime.current_component.$push = ($$props) => $props = $attributes = $$props;');
          } else if($props) {
            ctx.write(true, 'let $props = $option.props || {};');
            ctx.write(true, '$runtime.current_component.$push = ($$props) => $props = $$props;');
          } else if($attributes) {
            ctx.write(true, 'let $attributes = $option.props || {};');
            ctx.write(true, '$runtime.current_component.$push = ($$props) => $attributes = $$props;');
          }
        });
      }
    }));
    this.module.code.push(nodeAst({ body: blockTail }));

    this.module.top.push(xNode('autoimport', (ctx) => {
      Object.values(this.script.autoimport).forEach(l => ctx.writeLine(l));
    }));

    this.module.top.push(nodeAst({ body: imports }));
    this.module.code.push(watchers);

    if(this.scriptNodes[0] && this.scriptNodes[0].attributes.some(a => a.name == 'property') && this.script.props.length) {
      this.require('apply');
      this.module.code.push(xNode('external-property', {
        props: this.script.props
      }, (ctx, n) => {
        n.props.forEach(p => {
          ctx.write(true, `$runtime.makeExternalProperty('${p.name}', () => ${p.name}, _${p.name} => ${p.name} = _${p.name});`);
        });
      }));
    }

    this.module.code.push(exportedFunctions);
  }


  const generator = Object.assign({
    Raw: function(node, state) {
      let value = typeof node.value == 'function' ? node.value() : node.value;
      if(value) {
        let indent = state.indent.repeat(state.indentLevel);
        if(!Array.isArray(value)) value = [value];
        value.forEach(v => {
          state.write(indent + v + state.lineEnd);
        });
      }
    },
    CustomBlock: function(node, state) {
      let indent = state.indent.repeat(state.indentLevel);
      let lineEnd = state.lineEnd;

      let statements = node.body;
      let length = statements.length;

      for(let i = 0; i < length; i++) {
        let statement = statements[i];

        if(statement.type != 'Raw') state.write(indent);
        this[statement.type](statement, state);
        if(statement.type != 'Raw') state.write(lineEnd);
      }
    }
  }, baseGenerator);


  function nodeAst(data) {
    return xNode('ast', data, (ctx, node) => {
      if(!node.body.length) return;
      let code = generate({
        type: 'CustomBlock',
        body: node.body
      }, { generator, startingIndentLevel: 0 });
      code.split(/\n/).forEach(s => {
        if(s) ctx.write(true, s);
      });
    });
  }

  function radioInput(node, el) {
    // Usage: <input type="radio" name={value} value={it} />
    assert(node.name == 'input');
    if (!node.attributes.some(a => a.name == 'type' && a.value == 'radio')) return null;
    const aName = node.attributes.find(a => a.name == 'name');
    if(!aName.value.startsWith('{')) return null;
    const aValue = node.attributes.find(a => a.name == 'value');

    aName._skip = true;
    aValue._skip = true;

    const name = unwrapExp(aName.value);
    assert(detectExpressionType(name) == 'identifier', 'Wrong name for radio input');
    let value = aValue.value;
    if(value.match(/^\{.+\}$/)) value = unwrapExp(aValue.value);
    else value = '`' + value + '`';

    this.require('apply');

    return xNode('radioInput', {
      name,
      value,
      el: el.bindName()
    }, (ctx, n) => {
      ctx.write(true, `$runtime.radioButton(${n.el}, () => (${n.value}), () => (${n.name}), ($$) => {${n.name} = $$; $$apply();});`);
    });
  }

  function buildRuntime() {
    this.module.head.push(xNode('$events', (ctx) => {
      if(this.inuse.$events) ctx.write(true, 'const $events = $option.events || {};');
    }));

    this.glob.$component.$handler = (ctx, n) => {
      if(n.value) {
        this.require('componentFn');
        ctx.write(true, 'const $component = $runtime.current_component;');
      }
    };
    this.module.head.push(this.glob.$component);

    this.module.head.push(xNode('$context', {
      $hold: ['componentFn']
    }, (ctx) => {
      if(this.inuse.$context) {
        this.require('componentFn');
        ctx.write(true, 'const $context = $runtime.$context;');
      }
    }));

    this.module.head.push(this.glob.keepAliveStore = xNode('$$keepAliveStore', {
      value: false
    }, (ctx, n) => {
      if(n.value) ctx.write(true, `const $$keepAliveStore = new Map();`);
    }));

    this.glob.$onMount.$handler = (ctx, n) => {
      if(n.value) ctx.write(true, `import { $onMount } from 'malinajs/runtime.js';`);
    };
    this.module.top.push(this.glob.$onMount);

    this.module.top.push(xNode('$onDestroy', (ctx) => {
      if(this.inuse.$onDestroy) ctx.write(true, `import { $onDestroy } from 'malinajs/runtime.js';`);
    }));

    this.glob.apply.$handler = (ctx, n) => {
      if(n.value || this.inuse.rootCD) {
        this.require('componentFn');
        ctx.writeLine('const $$apply = $runtime.makeApply();');
      }
    };
    this.module.head.unshift(this.glob.apply);

    this.module.head.push(xNode('$emit', (ctx) => {
      if(this.inuse.$emit) ctx.write(true, 'const $emit = $runtime.makeEmitter($option);');
    }));

    if(this.config.autoSubscribe) {
      this.module.head.push(xNode('autoSubscribe', {
        $hold: ['apply'],
        names: this.script.autosubscribeNames
      }, (ctx, n) => {
        if(!n.names.length) return;
        this.require('apply');
        ctx.write(true, `$runtime.autoSubscribe(${n.names.join(', ')});`);
      }));
    }

    let runtime = xNode.block({ scope: true });
    this.module.body.push(runtime);

    let bb = this.buildBlock(this.DOM, {
      inline: true,
      allowSingleBlock: true,
      template: {
        name: '$parentElement',
        cloneNode: true
      }
    });
    if(bb.singleBlock) {
      runtime.push(xNode('attach-block', {
        block: bb.singleBlock,
        reference: bb.reference
      }, (ctx, n) => {
        if(n.reference) {
          ctx.write(true, `${n.reference} = `);
          ctx.add(n.block);
          ctx.write(';');
          ctx.write(true, `let $parentElement = ${n.reference}.$dom;`);
        } else {
          ctx.write(true, `let $parentElement = `);
          ctx.add(n.block);
          ctx.write('.$dom;');
        }
      }));
    } else {
      runtime.push(bb.template);
      runtime.push(xNode('root-event', (ctx) => {
        if(!this.inuse.rootEvent) return;
        ctx.write(true, 'const $$addRootEvent = $runtime.makeRootEvent($parentElement);');
      }));
      runtime.push(bb.source);
    }

    runtime.push(xNode('addStyle', ctx => {
      if(!this.css.active()) return;
      let style = this.css.getContent();
      if(!style) return;
      if(this.config.css) {
        if(typeof this.config.css == 'function') this.config.css(style, this.config.path, this, ctx);
        else ctx.writeLine(`$runtime.addStyles('${this.css.id}', \`${Q(style)}\`);`);
      } else {
        this.css.result = style;
      }
    }));

    runtime.push(xNode('bind-component-element', {
      $wait: ['componentFn']
    }, (ctx) => {
      if(this.inuse.componentFn) ctx.writeLine('return $parentElement;');
      else ctx.writeLine('return {$dom: $parentElement};');
    }));

    if(this.css.active() && this.css.containsExternal()) this.require('apply', 'rootCD');

    this.module.head.push(xNode('resolveClass', (ctx) => {
      if(!this.inuse.resolveClass) return;
      if(this.css.active()) {
        let { classMap, metaClass, main } = this.css.getClassMap();
        if(main) main = `'${main}'`;
        else main = 'null';
        classMap = Object.entries(classMap).map(i => `'${i[0]}': '${i[1]}'`).join(', ');
        metaClass = Object.entries(metaClass).map(i => {
          let value = i[1] === true ? 'true' : `'${i[1]}'`;
          return `'${i[0]}': ${value}`;
        }).join(', ');

        ctx.writeLine('const $$resolveClass = $runtime.makeClassResolver(');
        ctx.indent++;
        ctx.writeLine(`$option, {${classMap}}, {${metaClass}}, ${main}`);
        ctx.indent--;
        ctx.writeLine(');');
      } else {
        ctx.writeLine('const $$resolveClass = $runtime.noop;');
      }
    }));
  }


  function buildBlock(data, option = {}) {
    let rootTemplate = xNode.node({ inline: true });
    let rootSVG = false, requireFragment = option.template?.requireFragment;
    let binds = xNode.block();
    let result = {};
    let inuse = Object.assign({}, this.inuse);

    if(!option.parentElement) option.parentElement = '$parentElement';

    if(option.each?.blockPrefix) binds.push(option.each.blockPrefix);

    if(option.allowSingleBlock) {
      let nodesForSingleBlock = data.body.filter(n => {
        if(n.type == 'comment' && !this.config.preserveComments) return false;
        return true;
      });

      if(nodesForSingleBlock.length == 1) {
        let n = nodesForSingleBlock[0];
        if(n.type == 'node' && n.name.match(/^[A-Z]/)) {
          let component;
          try {
            component = this.makeComponent(n);
          } catch (e) {
            wrapException(e, n);
          }
          return {
            singleBlock: component.bind,
            reference: component.reference
          };
        }
      }
    }

    const go = (data, isRoot, tpl) => {
      let body = data.body.filter(n => {
        if(n.type == 'script' || n.type == 'style' || n.type == 'slot') return false;
        if(n.type == 'comment' && !this.config.preserveComments) return false;
        if(n.type == 'fragment') {
          try {
            let f = this.makeFragment(n);
            f && binds.push(f);
          } catch (e) {
            wrapException(e, n);
          }
          return false;
        }
        return true;
      });

      if(tpl.name == 'table') {
        let result = [], tbody = null;
        body.forEach(n => {
          if(n.type == 'node' && ['thead', 'tbody', 'tfoot', 'colgroup'].includes(n.name)) {
            result.push(n);
            tbody = null;
            return;
          }

          if(!tbody) {
            tbody = { type: 'node', name: 'tbody', body: [], attributes: [], classes: new Set() };
            result.push(tbody);
          }
          tbody.body.push(n);
        });
        body = result;
      }

      {
        let i = 1;
        while(body[i]) {
          if(body[i].type == 'text' && body[i - 1].type == 'text') {
            body[i - 1].value += body[i].value;
            body.splice(i, 1);
          } else i++;
        }
      }

      if(isRoot) {
        let svg = false, other = false;
        body.some(node => {
          if(node.type != 'node') return;
          if(svgElements[node.name]) svg = true;
          else return other = true;
        });
        if(svg && !other) rootSVG = true;
      }

      let labelRequest;

      const requireLabel = (final, noParent) => {
        if(labelRequest) {
          if(labelRequest.final) {
            labelRequest.set(tpl.push(xNode.nodeComment({ label: true, value: '' })));
          } else {
            if(final) labelRequest.final = true;
            if(noParent) labelRequest.noParent = true;
            return labelRequest;
          }
        }
        labelRequest = {
          name: null,
          node: null,
          final,
          noParent,
          set(n) {
            labelRequest.name = n.bindName();
            labelRequest.node = n;
            labelRequest = null;
          },
          resolve() {
            assert(!labelRequest.node);
            if(labelRequest.noParent) {
              labelRequest.set(tpl.push(xNode.nodeComment({ label: true, value: '' })));
            } else if(isRoot) {
              assert(!tpl._boundName);
              labelRequest.name = tpl._boundName = option.parentElement;
            } else {
              labelRequest.name = tpl.bindName();
            }
            labelRequest = null;
          }
        };
        return labelRequest;
      };

      const bindNode = (n, nodeIndex) => {
        if(n.type === 'text') {
          let prev = tpl.getLast();
          if(prev?.$type == 'node:text' && labelRequest) {
            labelRequest.set(tpl.push(xNode.nodeComment({ label: true })));
          }

          if(n.value.indexOf('{') >= 0) {
            const pe = this.parseText(n.value);
            this.detectDependency(pe);

            let textNode;
            if(pe.staticText != null) {
              textNode = tpl.push(pe.staticText);
            } else {
              textNode = tpl.push(' ');
              let bindText = xNode('bindText', {
                $wait: ['apply'],
                el: textNode.bindName(),
                exp: pe.result,
                parsedExpression: pe
              }, (ctx, n) => {
                if(this.inuse.apply) {
                  ctx.writeLine(`$runtime.bindText(${n.el}, () => ${n.exp});`);
                } else ctx.writeLine(`${n.el}.textContent = ${n.exp};`);
              });
              binds.push(bindText);
            }

            pe.parts.forEach(p => {
              if(p.type != 'js') return;
              let exp = p.value;
              if(!exp.endsWith(';')) exp += ';';

              binds.push(xNode('inline-js', {
                value: replaceKeyword(exp, (name) => name == '$element' ? textNode.bindName() : null, true)
              }, (ctx, n) => {
                ctx.write(true, n.value);
              }));

            });

            labelRequest?.set(textNode);
          } else {
            const textNode = tpl.push(n.value);
            labelRequest?.set(textNode);
          }

        } else if(n.type === 'template') {
          const templateNode = xNode.baseNode('node:template', {
            openTag: n.openTag,
            content: n.content
          }, (ctx, n) => {
            ctx.write(n.openTag, n.content, '</template>');
          });
          tpl.push(templateNode);
          labelRequest?.set(templateNode);
        } else if(n.type === 'node') {
          if(n.name == 'malina' && !option.malinaElement) {
            let b;
            if(n.elArg == 'portal') b = this.attachPortal(n);
            else if(['window', 'body', 'head'].includes(n.elArg)) b = this.attachHead(n);
            else if(n.elArg == 'self') {
              this.glob.componentFn.$setValue({self: true});
              const label = requireLabel();
              let component = this.makeComponent(n, {self: true});
              binds.push(insertComponent(component, label));
            } else throw 'Wrong tag';
            b && binds.push(b);
            return;
          }
          if(n.name == 'component' || n.name.match(/^[A-Z]/)) {
            if(n.name == 'component' || !n.elArg) {
              // component
              if(isRoot) requireFragment = true;

              if(n.name == 'component') {
                // dyn-component
                if(isRoot) {
                  requireFragment = true;
                  if(!tpl.getLast()) tpl.push(xNode.nodeComment({ label: true }));
                }
                const label = requireLabel(true, isRoot);
                binds.push(this.makeComponentDyn(n, label));
              } else {
                const label = requireLabel();
                let component = this.makeComponent(n);
                binds.push(insertComponent(component, label));
              }
            } else {
              if(isRoot) requireFragment = true;
              binds.push(this.attchExportedFragment(n, requireLabel(), n.name));
            }
            return;
          }
          if(n.name == 'slot') {
            if(isRoot) requireFragment = true;
            let slotName = n.elArg;
            if(!slotName) {
              if(option.context == 'fragment') {
                binds.push(this.attachFragmentSlot(requireLabel()));
                return;
              } else slotName = 'default';
            }

            let slot = this.attachSlot(slotName, n);

            binds.push(xNode('attach-slot', {
              label: requireLabel(),
              slot
            }, (ctx, n) => {
              if(n.label.node) ctx.write(true, `$runtime.insertBlock(${n.label.name}, `);
              else ctx.write(true, `$runtime.addBlock(${n.label.name}, `);
              ctx.add(n.slot);
              ctx.write(');', true);
            }));
            return;
          }
          if(n.name == 'fragment') {
            assert(n.elArg, 'Fragment name is required');
            if(isRoot) requireFragment = true;
            binds.push(xNode('attach-fragment', {
              label: requireLabel(),
              fragment: this.attachFragment(n)
            }, (ctx, n) => {
              if(n.label.node) ctx.write(true, `$runtime.insertBlock(${n.label.name}, `);
              else ctx.write(true, `$runtime.addBlock(${n.label.name}, `);
              ctx.add(n.fragment);
              ctx.write(')');
            }));
            return;
          }

          let el = xNode.node({ name: n.name });
          if(option.oneElement) el._boundName = option.oneElement;
          tpl.push(el);
          labelRequest?.set(el);

          if(n.attributes.some(a => a.name.startsWith('{...'))) {
            this.require('rootCD');
            n.spreading = [];
            binds.push(xNode('spread-to-element', {
              el: el.bindName(),
              props: n.spreading
            }, (ctx, n) => {
              ctx.writeLine(`$runtime.spreadAttributes(${n.el}, () => ({${n.props.join(', ')}}));`);
            }));
          }

          if(n.name == 'input') {
            const b = radioInput.call(this, n, el);
            b && binds.push(b);
          }

          let bindTail = [];
          n.attributes.forEach(p => {
            if(p._skip) return;
            let b = this.bindProp(p, n, el);
            if(b) {
              if(b.bind) binds.push(b.bind);
              if(b.bindTail) bindTail.push(b.bindTail);
            }
          });
          n.classes.forEach(n => el.class.add(n));

          if(option.bindAttributes && (el.attributes.length || el.class.size)) {
            el.bindName();
            binds.push(xNode('bindAttributes', { el }, (ctx, n) => {
              let elName = n.el.bindName();
              n.el.attributes.forEach(a => {
                ctx.writeLine(`${elName}.setAttribute('${a.name}', \`${Q(a.value)}\`);`);
              });
            }));

            binds.push(xNode('bindClasses', { el }, (ctx, n) => {
              let el = n.el;
              if (!el.class.size) return;
              let elName = el.bindName();
              ctx.add(this.css.resolveAsNode(el.class, [`${elName}.className += ' `, `';`]));
              ctx.write(true);
            }));
          }
          bindTail.forEach(b => binds.push(b));

          el.voidTag = n.voidTag;
          if(!n.closedTag) {
            go(n, false, el);
          }
        } else if(n.type === 'block') {
          if(n.name == 'keep') {
            if(isRoot) requireFragment = true;
            binds.push(xNode('attach-fragment', {
              label: requireLabel(),
              block: this.makeKeepAlive(n)
            }, (ctx, n) => {
              if(n.label.node) ctx.write(true, `$runtime.insertBlock(${n.label.name}, `);
              else ctx.write(true, `$runtime.addBlock(${n.label.name}, `);
              ctx.add(n.block);
              ctx.write(')');
            }));
            return;
          } else wrapException(`wrong block: "${n.name}"`, n);
        } else if(n.type === 'each') {
          if(data.type == 'node' && data.body.length == 1) {
            let eachBlock = this.makeEachBlock(n, {
              label: tpl.bindName(),
              onlyChild: true
            });
            binds.push(eachBlock.source);
            return;
          } else {
            if(isRoot) {
              requireFragment = true;
              if(!tpl.getLast()) tpl.push(xNode.nodeComment({ label: true }));
            }
            let eachBlock = this.makeEachBlock(n, { label: requireLabel(true, isRoot) });
            binds.push(eachBlock.source);
            return;
          }
        } else if(n.type === 'if') {
          if(isRoot) {
            requireFragment = true;
            if(!tpl.getLast()) tpl.push(xNode.nodeComment({ label: true }));
          }
          binds.push(this.makeifBlock(n, requireLabel(true, isRoot)));
          return;
        } else if(n.type === 'systag') {
          let r = n.value.match(/^@(\w+)\s+(.*)$/s);
          let name = r[1];
          let exp = r[2];

          if(name == 'html') {
            if(isRoot) {
              requireFragment = true;
              if(!tpl.getLast()) tpl.push(xNode.nodeComment({ label: true }));
            }
            binds.push(this.makeHtmlBlock(exp, requireLabel(true, true)));
            return;
          } else throw 'Wrong tag';
        } else if(n.type === 'await') {
          if(isRoot) {
            requireFragment = true;
            if(!tpl.getLast()) tpl.push(xNode.nodeComment({ label: true }));
          }
          binds.push(this.makeAwaitBlock(n, requireLabel(true, isRoot)));
          return;
        } else if(n.type === 'comment') {
          const commentNode = tpl.push(n.content);
          labelRequest?.set(commentNode);
        }
      };
      body.forEach((node, i) => {
        try {
          bindNode(node, i);
        } catch (e) {
          wrapException(e, node);
        }
      });
      labelRequest?.resolve();
    };

    go(data, true, rootTemplate);

    let innerBlock = null;
    if(binds.body.length) {
      innerBlock = xNode.block();
      if(!option.oneElement) {
        innerBlock.push(xNode('bindNodes', {
          tpl: rootTemplate,
          root: option.parentElement,
          single: rootTemplate.children.length == 1 && !requireFragment
        }, (ctx, n) => {
          const mark = (node) => {
            let binding = false;
            let next = false;

            if(node._boundName) binding = true;

            if(node.children?.length) {
              let i = node.children.length - 1;
              for(;i >= 0; i--) {
                let n = node.children[i];

                if(mark(n)) {
                  if(next) n.bindName();
                  next = true;
                  binding = true;
                  node._innerBinding = true;
                }
              }
            }
            return binding;
          };
          mark(n.tpl);

          if(this.config.useGroupReferencing) {
            const encodeShift = (i) => {
              if(i <= 42) return String.fromCharCode(48 + i);
              let b = i % 42;
              let a = (i - b) / 42;
              assert(a <= 42, 'Node-shift overflow: ' + i);
              return '!' + String.fromCharCode(48 + a) + String.fromCharCode(48 + b);
            };

            const encodeRef = (i) => {
              if(i <= 26) return String.fromCharCode(97 + i);
              let b = i % 42;
              let a = (i - b) / 42;
              assert(a <= 42, 'Node ref overflow: ' + i);
              return '#' + String.fromCharCode(48 + a) + String.fromCharCode(48 + b);
            };

            let result = [];
            let vars = [];
            let active = null;

            const walk = (node) => {
              let shift = 0;
              let base = null;
              node.children?.forEach((n, i) => {
                if(i == 0) {
                  if(n._boundName) {
                    result.push('+');
                    vars.push(n);
                    active = n;
                    walk(n);
                    if(n != active) base = n;
                  } else if(n._innerBinding) {
                    result.push('>');
                    active = n;
                    walk(n);
                  } else if(node._innerBinding) {
                    result.push('>');
                    active = n;
                    walk(n);
                  }
                } else {
                  if(n._boundName) {
                    if(base) {
                      let x = vars.indexOf(base);
                      result.push(encodeRef(x));
                      base = null;
                    }
                    result.push(encodeShift(shift));
                    result.push('.');
                    shift = 0;
                    active = n;
                    vars.push(n);
                    walk(n);
                    if(n != active) base = n;
                  } else if(n._innerBinding) {
                    if(base) {
                      let x = vars.indexOf(base);
                      result.push(encodeRef(x));
                      base = null;
                    }
                    result.push(encodeShift(shift));
                    active = n;
                    walk(n);
                  }
                }
                shift++;
              });
            };

            if(n.single) {
              let node = n.tpl.children[0];
              if(node._boundName) ctx.write(true, `let ${node._boundName} = ${n.root};`);
              if(node.children) {
                walk(node);
                if(vars.length) {
                  result = result.join('');
                  vars = vars.map(v => v._boundName).join(', ');
                  ctx.write(true, `let [${vars}] = $runtime.refer(${n.root}, '${result}');`);
                }
              }
            } else {
              walk(n.tpl);
              if(vars.length) {
                result = result.join('');
                vars = vars.map(v => v._boundName).join(', ');
                ctx.write(true, `let [${vars}] = $runtime.refer(${n.root}, '${result}');`);
              }
            }
          } else {

            const walk = (node, path) => {
              let shift = 0;
              let base = null;
              node.children?.forEach((n, i) => {
                if(i == 0) {
                  if(n._boundName) {
                    ctx.write(true, `let ${n._boundName} = ${path.join('.')}.firstChild;`);
                    walk(n, [n._boundName]);
                    base = n;
                  } else if(n._innerBinding) {
                    walk(n, [...path, 'firstChild']);
                  } else if(node._innerBinding) {
                    walk(n, [...path, 'firstChild']);
                  }
                } else {
                  if(n._boundName) {
                    if(base) ctx.write(true, `let ${n._boundName} = ${base._boundName}`);
                    else ctx.write(true, `let ${n._boundName} = ${path.join('.')}.firstChild`);
                    while(shift--) ctx.write('.nextSibling');
                    ctx.write(';');
                    walk(n, [n._boundName]);
                    base = n;
                    shift = 0;
                  } else if(n._innerBinding) {
                    let npath;
                    if(base) npath = [base._boundName];
                    else npath = [...path, 'firstChild'];
                    while(shift--) npath.push('nextSibling');
                    walk(n, npath);
                    shift = 0;
                  }
                }
                shift++;
              });
            };

            if(n.single) {
              let node = n.tpl.children[0];
              if(node._boundName) ctx.write(true, `let ${node._boundName} = ${n.root};`);
              if(node.children) walk(node, [n.root]);
            } else {
              walk(n.tpl, [n.root]);
            }
          }
        }));
      }
      innerBlock.push(binds);

      if(option.inline) {
        result.source = innerBlock;
      }
    } else {
      result.name = '$runtime.noop';
      result.source = null;
    }

    if(!option.inline) {
      let template = xNode.template({
        body: rootTemplate,
        svg: rootSVG,
        requireFragment
      });
      if(option.template) Object.assign(template, option.template);
      else template.inline = true;

      result.block = xNode('block', {
        $wait: [innerBlock],
        innerBlock,
        tpl: template,
        each: option.each,
        parentElement: option.parentElement
      }, (ctx, n) => {
        if(n.each) {
          ctx.write('$runtime.makeEachBlock(');
        } else {
          ctx.write('$runtime.makeBlock(');
        }
        ctx.add(n.tpl);
        if(!ctx.isEmpty(n.innerBlock)) {
          if(n.each) {
            ctx.write(`, (${n.parentElement}, ${n.each.itemName}`);
            if(n.each.indexName) ctx.write(`, ${n.each.indexName}`);
            ctx.write(`) => {`, true);
          } else {
            let extra = option.extraArguments ? ', ' + option.extraArguments.join(', ') : '';
            ctx.write(`, (${n.parentElement}${extra}) => {`, true);
          }
          ctx.indent++;
          ctx.add(n.innerBlock);
          if(n.each?.rebind) {
            ctx.write(true, 'return ');
            ctx.add(n.each.rebind);
            ctx.write(';', true);
          }
          ctx.indent--;
          ctx.write(true, '}');
        }
        ctx.write(')');
      });
    } else {
      result.template = xNode.template({
        body: rootTemplate,
        svg: rootSVG,
        requireFragment
      });
      if(option.template) Object.assign(result.template, option.template);
      else result.template.inline = true;
    }

    result.inuse = {};
    for(let k in this.inuse) {
      result.inuse[k] = this.inuse[k] - (inuse[k] || 0);
    }
    return result;
  }

  function wrapException(e, n) {
    if(typeof e === 'string') e = new Error(e);
    if(!e.details) {
      console.log('Node: ', n);
      if(n.type == 'text') e.details = n.value.trim();
      else if(n.type == 'node') e.details = n.openTag.trim();
      else if(n.type == 'each' || n.type == 'block') e.details = n.value.trim();
      else if(n.type == 'if') e.details = n.parts?.[0]?.value.trim() || 'if-block';
    }
    throw e;
  }

  function insertComponent(component, label) {
    return xNode('insert-component', {
      component: component.bind,
      reference: component.reference,
      label
    }, (ctx, n) => {
      if(n.reference) {
        ctx.write(true, `${n.reference} = `);
        ctx.add(n.component);
        if(n.label.node) ctx.write(true, `$runtime.insertBlock(${n.label.name}, ${n.reference});`);
        else ctx.write(true, `$runtime.addBlock(${n.label.name}, ${n.reference});`);
      } else {
        if(n.label.node) ctx.write(true, `$runtime.insertBlock(${n.label.name}, `);
        else ctx.write(true, `$runtime.addBlock(${n.label.name}, `);
        ctx.add(n.component);
        ctx.write(');');
      }
    })
  }

  function constructor() {
      //
      //                              list
      //                            ┌──────┐
      //             ┌──────────────┼─head │
      //             │              │ tail─┼──────────────┐
      //             │              └──────┘              │
      //             ▼                                    ▼
      //            item        item        item        item
      //          ┌──────┐    ┌──────┐    ┌──────┐    ┌──────┐
      //  null ◀──┼─prev │◀───┼─prev │◀───┼─prev │◀───┼─prev │
      //          │ next─┼───▶│ next─┼───▶│ next─┼───▶│ next─┼──▶ null
      //          ├──────┤    ├──────┤    ├──────┤    ├──────┤
      //          │ data │    │ data │    │ data │    │ data │
      //          └──────┘    └──────┘    └──────┘    └──────┘
      //

      function createItem(data) {
          return {
              prev: null,
              next: null,
              data: data
          };
      }

      function allocateCursor(node, prev, next) {
          var cursor;

          if (cursors !== null) {
              cursor = cursors;
              cursors = cursors.cursor;
              cursor.prev = prev;
              cursor.next = next;
              cursor.cursor = node.cursor;
          } else {
              cursor = {
                  prev: prev,
                  next: next,
                  cursor: node.cursor
              };
          }

          node.cursor = cursor;

          return cursor;
      }

      function releaseCursor(node) {
          var cursor = node.cursor;

          node.cursor = cursor.cursor;
          cursor.prev = null;
          cursor.next = null;
          cursor.cursor = cursors;
          cursors = cursor;
      }

      var cursors = null;
      var List = function() {
          this.cursor = null;
          this.head = null;
          this.tail = null;
      };

      List.createItem = createItem;
      List.prototype.createItem = createItem;

      List.prototype.updateCursors = function(prevOld, prevNew, nextOld, nextNew) {
          var cursor = this.cursor;

          while (cursor !== null) {
              if (cursor.prev === prevOld) {
                  cursor.prev = prevNew;
              }

              if (cursor.next === nextOld) {
                  cursor.next = nextNew;
              }

              cursor = cursor.cursor;
          }
      };

      List.prototype.getSize = function() {
          var size = 0;
          var cursor = this.head;

          while (cursor) {
              size++;
              cursor = cursor.next;
          }

          return size;
      };

      List.prototype.fromArray = function(array) {
          var cursor = null;

          this.head = null;

          for (var i = 0; i < array.length; i++) {
              var item = createItem(array[i]);

              if (cursor !== null) {
                  cursor.next = item;
              } else {
                  this.head = item;
              }

              item.prev = cursor;
              cursor = item;
          }

          this.tail = cursor;

          return this;
      };

      List.prototype.toArray = function() {
          var cursor = this.head;
          var result = [];

          while (cursor) {
              result.push(cursor.data);
              cursor = cursor.next;
          }

          return result;
      };

      List.prototype.toJSON = List.prototype.toArray;

      List.prototype.isEmpty = function() {
          return this.head === null;
      };

      List.prototype.first = function() {
          return this.head && this.head.data;
      };

      List.prototype.last = function() {
          return this.tail && this.tail.data;
      };

      List.prototype.each = function(fn, context) {
          var item;

          if (context === undefined) {
              context = this;
          }

          // push cursor
          var cursor = allocateCursor(this, null, this.head);

          while (cursor.next !== null) {
              item = cursor.next;
              cursor.next = item.next;

              fn.call(context, item.data, item, this);
          }

          // pop cursor
          releaseCursor(this);
      };

      List.prototype.forEach = List.prototype.each;

      List.prototype.eachRight = function(fn, context) {
          var item;

          if (context === undefined) {
              context = this;
          }

          // push cursor
          var cursor = allocateCursor(this, this.tail, null);

          while (cursor.prev !== null) {
              item = cursor.prev;
              cursor.prev = item.prev;

              fn.call(context, item.data, item, this);
          }

          // pop cursor
          releaseCursor(this);
      };

      List.prototype.forEachRight = List.prototype.eachRight;

      List.prototype.reduce = function(fn, initialValue, context) {
          var item;

          if (context === undefined) {
              context = this;
          }

          // push cursor
          var cursor = allocateCursor(this, null, this.head);
          var acc = initialValue;

          while (cursor.next !== null) {
              item = cursor.next;
              cursor.next = item.next;

              acc = fn.call(context, acc, item.data, item, this);
          }

          // pop cursor
          releaseCursor(this);

          return acc;
      };

      List.prototype.reduceRight = function(fn, initialValue, context) {
          var item;

          if (context === undefined) {
              context = this;
          }

          // push cursor
          var cursor = allocateCursor(this, this.tail, null);
          var acc = initialValue;

          while (cursor.prev !== null) {
              item = cursor.prev;
              cursor.prev = item.prev;

              acc = fn.call(context, acc, item.data, item, this);
          }

          // pop cursor
          releaseCursor(this);

          return acc;
      };

      List.prototype.nextUntil = function(start, fn, context) {
          if (start === null) {
              return;
          }

          var item;

          if (context === undefined) {
              context = this;
          }

          // push cursor
          var cursor = allocateCursor(this, null, start);

          while (cursor.next !== null) {
              item = cursor.next;
              cursor.next = item.next;

              if (fn.call(context, item.data, item, this)) {
                  break;
              }
          }

          // pop cursor
          releaseCursor(this);
      };

      List.prototype.prevUntil = function(start, fn, context) {
          if (start === null) {
              return;
          }

          var item;

          if (context === undefined) {
              context = this;
          }

          // push cursor
          var cursor = allocateCursor(this, start, null);

          while (cursor.prev !== null) {
              item = cursor.prev;
              cursor.prev = item.prev;

              if (fn.call(context, item.data, item, this)) {
                  break;
              }
          }

          // pop cursor
          releaseCursor(this);
      };

      List.prototype.some = function(fn, context) {
          var cursor = this.head;

          if (context === undefined) {
              context = this;
          }

          while (cursor !== null) {
              if (fn.call(context, cursor.data, cursor, this)) {
                  return true;
              }

              cursor = cursor.next;
          }

          return false;
      };

      List.prototype.map = function(fn, context) {
          var result = new List();
          var cursor = this.head;

          if (context === undefined) {
              context = this;
          }

          while (cursor !== null) {
              result.appendData(fn.call(context, cursor.data, cursor, this));
              cursor = cursor.next;
          }

          return result;
      };

      List.prototype.filter = function(fn, context) {
          var result = new List();
          var cursor = this.head;

          if (context === undefined) {
              context = this;
          }

          while (cursor !== null) {
              if (fn.call(context, cursor.data, cursor, this)) {
                  result.appendData(cursor.data);
              }
              cursor = cursor.next;
          }

          return result;
      };

      List.prototype.clear = function() {
          this.head = null;
          this.tail = null;
      };

      List.prototype.copy = function() {
          var result = new List();
          var cursor = this.head;

          while (cursor !== null) {
              result.insert(createItem(cursor.data));
              cursor = cursor.next;
          }

          return result;
      };

      List.prototype.prepend = function(item) {
          //      head
          //    ^
          // item
          this.updateCursors(null, item, this.head, item);

          // insert to the beginning of the list
          if (this.head !== null) {
              // new item <- first item
              this.head.prev = item;

              // new item -> first item
              item.next = this.head;
          } else {
              // if list has no head, then it also has no tail
              // in this case tail points to the new item
              this.tail = item;
          }

          // head always points to new item
          this.head = item;

          return this;
      };

      List.prototype.prependData = function(data) {
          return this.prepend(createItem(data));
      };

      List.prototype.append = function(item) {
          return this.insert(item);
      };

      List.prototype.appendData = function(data) {
          return this.insert(createItem(data));
      };

      List.prototype.insert = function(item, before) {
          if (before !== undefined && before !== null) {
              // prev   before
              //      ^
              //     item
              this.updateCursors(before.prev, item, before, item);

              if (before.prev === null) {
                  // insert to the beginning of list
                  if (this.head !== before) {
                      throw new Error('before doesn\'t belong to list');
                  }

                  // since head points to before therefore list doesn't empty
                  // no need to check tail
                  this.head = item;
                  before.prev = item;
                  item.next = before;

                  this.updateCursors(null, item);
              } else {

                  // insert between two items
                  before.prev.next = item;
                  item.prev = before.prev;

                  before.prev = item;
                  item.next = before;
              }
          } else {
              // tail
              //      ^
              //      item
              this.updateCursors(this.tail, item, null, item);

              // insert to the ending of the list
              if (this.tail !== null) {
                  // last item -> new item
                  this.tail.next = item;

                  // last item <- new item
                  item.prev = this.tail;
              } else {
                  // if list has no tail, then it also has no head
                  // in this case head points to new item
                  this.head = item;
              }

              // tail always points to new item
              this.tail = item;
          }

          return this;
      };

      List.prototype.insertData = function(data, before) {
          return this.insert(createItem(data), before);
      };

      List.prototype.remove = function(item) {
          //      item
          //       ^
          // prev     next
          this.updateCursors(item, item.prev, item, item.next);

          if (item.prev !== null) {
              item.prev.next = item.next;
          } else {
              if (this.head !== item) {
                  throw new Error('item doesn\'t belong to list');
              }

              this.head = item.next;
          }

          if (item.next !== null) {
              item.next.prev = item.prev;
          } else {
              if (this.tail !== item) {
                  throw new Error('item doesn\'t belong to list');
              }

              this.tail = item.prev;
          }

          item.prev = null;
          item.next = null;

          return item;
      };

      List.prototype.push = function(data) {
          this.insert(createItem(data));
      };

      List.prototype.pop = function() {
          if (this.tail !== null) {
              return this.remove(this.tail);
          }
      };

      List.prototype.unshift = function(data) {
          this.prepend(createItem(data));
      };

      List.prototype.shift = function() {
          if (this.head !== null) {
              return this.remove(this.head);
          }
      };

      List.prototype.prependList = function(list) {
          return this.insertList(list, this.head);
      };

      List.prototype.appendList = function(list) {
          return this.insertList(list);
      };

      List.prototype.insertList = function(list, before) {
          // ignore empty lists
          if (list.head === null) {
              return this;
          }

          if (before !== undefined && before !== null) {
              this.updateCursors(before.prev, list.tail, before, list.head);

              // insert in the middle of dist list
              if (before.prev !== null) {
                  // before.prev <-> list.head
                  before.prev.next = list.head;
                  list.head.prev = before.prev;
              } else {
                  this.head = list.head;
              }

              before.prev = list.tail;
              list.tail.next = before;
          } else {
              this.updateCursors(this.tail, list.tail, null, list.head);

              // insert to end of the list
              if (this.tail !== null) {
                  // if destination list has a tail, then it also has a head,
                  // but head doesn't change

                  // dest tail -> source head
                  this.tail.next = list.head;

                  // dest tail <- source head
                  list.head.prev = this.tail;
              } else {
                  // if list has no a tail, then it also has no a head
                  // in this case points head to new item
                  this.head = list.head;
              }

              // tail always start point to new item
              this.tail = list.tail;
          }

          list.head = null;
          list.tail = null;

          return this;
      };

      List.prototype.replace = function(oldItem, newItemOrList) {
          if ('head' in newItemOrList) {
              this.insertList(newItemOrList, oldItem);
          } else {
              this.insert(newItemOrList, oldItem);
          }

          this.remove(oldItem);
      };

      var List_1 = List;

      var createCustomError = function createCustomError(name, message) {
          // use Object.create(), because some VMs prevent setting line/column otherwise
          // (iOS Safari 10 even throws an exception)
          var error = Object.create(SyntaxError.prototype);
          var errorStack = new Error();

          error.name = name;
          error.message = message;

          Object.defineProperty(error, 'stack', {
              get: function() {
                  return (errorStack.stack || '').replace(/^(.+\n){1,3}/, name + ': ' + message + '\n');
              }
          });

          return error;
      };

      var MAX_LINE_LENGTH = 100;
      var OFFSET_CORRECTION = 60;
      var TAB_REPLACEMENT = '    ';

      function sourceFragment(error, extraLines) {
          function processLines(start, end) {
              return lines.slice(start, end).map(function(line, idx) {
                  var num = String(start + idx + 1);

                  while (num.length < maxNumLength) {
                      num = ' ' + num;
                  }

                  return num + ' |' + line;
              }).join('\n');
          }

          var lines = error.source.split(/\r\n?|\n|\f/);
          var line = error.line;
          var column = error.column;
          var startLine = Math.max(1, line - extraLines) - 1;
          var endLine = Math.min(line + extraLines, lines.length + 1);
          var maxNumLength = Math.max(4, String(endLine).length) + 1;
          var cutLeft = 0;

          // column correction according to replaced tab before column
          column += (TAB_REPLACEMENT.length - 1) * (lines[line - 1].substr(0, column - 1).match(/\t/g) || []).length;

          if (column > MAX_LINE_LENGTH) {
              cutLeft = column - OFFSET_CORRECTION + 3;
              column = OFFSET_CORRECTION - 2;
          }

          for (var i = startLine; i <= endLine; i++) {
              if (i >= 0 && i < lines.length) {
                  lines[i] = lines[i].replace(/\t/g, TAB_REPLACEMENT);
                  lines[i] =
                      (cutLeft > 0 && lines[i].length > cutLeft ? '\u2026' : '') +
                      lines[i].substr(cutLeft, MAX_LINE_LENGTH - 2) +
                      (lines[i].length > cutLeft + MAX_LINE_LENGTH - 1 ? '\u2026' : '');
              }
          }

          return [
              processLines(startLine, line),
              new Array(column + maxNumLength + 2).join('-') + '^',
              processLines(line, endLine)
          ].filter(Boolean).join('\n');
      }

      var SyntaxError$1 = function(message, source, offset, line, column) {
          var error = createCustomError('SyntaxError', message);

          error.source = source;
          error.offset = offset;
          error.line = line;
          error.column = column;

          error.sourceFragment = function(extraLines) {
              return sourceFragment(error, isNaN(extraLines) ? 0 : extraLines);
          };
          Object.defineProperty(error, 'formattedMessage', {
              get: function() {
                  return (
                      'Parse error: ' + error.message + '\n' +
                      sourceFragment(error, 2)
                  );
              }
          });

          // for backward capability
          error.parseError = {
              offset: offset,
              line: line,
              column: column
          };

          return error;
      };

      var _SyntaxError = SyntaxError$1;

      // CSS Syntax Module Level 3
      // https://www.w3.org/TR/css-syntax-3/
      var TYPE = {
          EOF: 0,                 // <EOF-token>
          Ident: 1,               // <ident-token>
          Function: 2,            // <function-token>
          AtKeyword: 3,           // <at-keyword-token>
          Hash: 4,                // <hash-token>
          String: 5,              // <string-token>
          BadString: 6,           // <bad-string-token>
          Url: 7,                 // <url-token>
          BadUrl: 8,              // <bad-url-token>
          Delim: 9,               // <delim-token>
          Number: 10,             // <number-token>
          Percentage: 11,         // <percentage-token>
          Dimension: 12,          // <dimension-token>
          WhiteSpace: 13,         // <whitespace-token>
          CDO: 14,                // <CDO-token>
          CDC: 15,                // <CDC-token>
          Colon: 16,              // <colon-token>     :
          Semicolon: 17,          // <semicolon-token> ;
          Comma: 18,              // <comma-token>     ,
          LeftSquareBracket: 19,  // <[-token>
          RightSquareBracket: 20, // <]-token>
          LeftParenthesis: 21,    // <(-token>
          RightParenthesis: 22,   // <)-token>
          LeftCurlyBracket: 23,   // <{-token>
          RightCurlyBracket: 24,  // <}-token>
          Comment: 25
      };

      var NAME = Object.keys(TYPE).reduce(function(result, key) {
          result[TYPE[key]] = key;
          return result;
      }, {});

      var _const = {
          TYPE: TYPE,
          NAME: NAME
      };

      var EOF = 0;

      // https://drafts.csswg.org/css-syntax-3/
      // § 4.2. Definitions

      // digit
      // A code point between U+0030 DIGIT ZERO (0) and U+0039 DIGIT NINE (9).
      function isDigit(code) {
          return code >= 0x0030 && code <= 0x0039;
      }

      // hex digit
      // A digit, or a code point between U+0041 LATIN CAPITAL LETTER A (A) and U+0046 LATIN CAPITAL LETTER F (F),
      // or a code point between U+0061 LATIN SMALL LETTER A (a) and U+0066 LATIN SMALL LETTER F (f).
      function isHexDigit(code) {
          return (
              isDigit(code) || // 0 .. 9
              (code >= 0x0041 && code <= 0x0046) || // A .. F
              (code >= 0x0061 && code <= 0x0066)    // a .. f
          );
      }

      // uppercase letter
      // A code point between U+0041 LATIN CAPITAL LETTER A (A) and U+005A LATIN CAPITAL LETTER Z (Z).
      function isUppercaseLetter(code) {
          return code >= 0x0041 && code <= 0x005A;
      }

      // lowercase letter
      // A code point between U+0061 LATIN SMALL LETTER A (a) and U+007A LATIN SMALL LETTER Z (z).
      function isLowercaseLetter(code) {
          return code >= 0x0061 && code <= 0x007A;
      }

      // letter
      // An uppercase letter or a lowercase letter.
      function isLetter(code) {
          return isUppercaseLetter(code) || isLowercaseLetter(code);
      }

      // non-ASCII code point
      // A code point with a value equal to or greater than U+0080 <control>.
      function isNonAscii(code) {
          return code >= 0x0080;
      }

      // name-start code point
      // A letter, a non-ASCII code point, or U+005F LOW LINE (_).
      function isNameStart(code) {
          return isLetter(code) || isNonAscii(code) || code === 0x005F;
      }

      // name code point
      // A name-start code point, a digit, or U+002D HYPHEN-MINUS (-).
      function isName(code) {
          return isNameStart(code) || isDigit(code) || code === 0x002D;
      }

      // non-printable code point
      // A code point between U+0000 NULL and U+0008 BACKSPACE, or U+000B LINE TABULATION,
      // or a code point between U+000E SHIFT OUT and U+001F INFORMATION SEPARATOR ONE, or U+007F DELETE.
      function isNonPrintable(code) {
          return (
              (code >= 0x0000 && code <= 0x0008) ||
              (code === 0x000B) ||
              (code >= 0x000E && code <= 0x001F) ||
              (code === 0x007F)
          );
      }

      // newline
      // U+000A LINE FEED. Note that U+000D CARRIAGE RETURN and U+000C FORM FEED are not included in this definition,
      // as they are converted to U+000A LINE FEED during preprocessing.
      // TODO: we doesn't do a preprocessing, so check a code point for U+000D CARRIAGE RETURN and U+000C FORM FEED
      function isNewline(code) {
          return code === 0x000A || code === 0x000D || code === 0x000C;
      }

      // whitespace
      // A newline, U+0009 CHARACTER TABULATION, or U+0020 SPACE.
      function isWhiteSpace(code) {
          return isNewline(code) || code === 0x0020 || code === 0x0009;
      }

      // § 4.3.8. Check if two code points are a valid escape
      function isValidEscape(first, second) {
          // If the first code point is not U+005C REVERSE SOLIDUS (\), return false.
          if (first !== 0x005C) {
              return false;
          }

          // Otherwise, if the second code point is a newline or EOF, return false.
          if (isNewline(second) || second === EOF) {
              return false;
          }

          // Otherwise, return true.
          return true;
      }

      // § 4.3.9. Check if three code points would start an identifier
      function isIdentifierStart(first, second, third) {
          // Look at the first code point:

          // U+002D HYPHEN-MINUS
          if (first === 0x002D) {
              // If the second code point is a name-start code point or a U+002D HYPHEN-MINUS,
              // or the second and third code points are a valid escape, return true. Otherwise, return false.
              return (
                  isNameStart(second) ||
                  second === 0x002D ||
                  isValidEscape(second, third)
              );
          }

          // name-start code point
          if (isNameStart(first)) {
              // Return true.
              return true;
          }

          // U+005C REVERSE SOLIDUS (\)
          if (first === 0x005C) {
              // If the first and second code points are a valid escape, return true. Otherwise, return false.
              return isValidEscape(first, second);
          }

          // anything else
          // Return false.
          return false;
      }

      // § 4.3.10. Check if three code points would start a number
      function isNumberStart(first, second, third) {
          // Look at the first code point:

          // U+002B PLUS SIGN (+)
          // U+002D HYPHEN-MINUS (-)
          if (first === 0x002B || first === 0x002D) {
              // If the second code point is a digit, return true.
              if (isDigit(second)) {
                  return 2;
              }

              // Otherwise, if the second code point is a U+002E FULL STOP (.)
              // and the third code point is a digit, return true.
              // Otherwise, return false.
              return second === 0x002E && isDigit(third) ? 3 : 0;
          }

          // U+002E FULL STOP (.)
          if (first === 0x002E) {
              // If the second code point is a digit, return true. Otherwise, return false.
              return isDigit(second) ? 2 : 0;
          }

          // digit
          if (isDigit(first)) {
              // Return true.
              return 1;
          }

          // anything else
          // Return false.
          return 0;
      }

      //
      // Misc
      //

      // detect BOM (https://en.wikipedia.org/wiki/Byte_order_mark)
      function isBOM(code) {
          // UTF-16BE
          if (code === 0xFEFF) {
              return 1;
          }

          // UTF-16LE
          if (code === 0xFFFE) {
              return 1;
          }

          return 0;
      }

      // Fast code category
      //
      // https://drafts.csswg.org/css-syntax/#tokenizer-definitions
      // > non-ASCII code point
      // >   A code point with a value equal to or greater than U+0080 <control>
      // > name-start code point
      // >   A letter, a non-ASCII code point, or U+005F LOW LINE (_).
      // > name code point
      // >   A name-start code point, a digit, or U+002D HYPHEN-MINUS (-)
      // That means only ASCII code points has a special meaning and we define a maps for 0..127 codes only
      var CATEGORY = new Array(0x80);
      charCodeCategory.Eof = 0x80;
      charCodeCategory.WhiteSpace = 0x82;
      charCodeCategory.Digit = 0x83;
      charCodeCategory.NameStart = 0x84;
      charCodeCategory.NonPrintable = 0x85;

      for (var i = 0; i < CATEGORY.length; i++) {
          switch (true) {
              case isWhiteSpace(i):
                  CATEGORY[i] = charCodeCategory.WhiteSpace;
                  break;

              case isDigit(i):
                  CATEGORY[i] = charCodeCategory.Digit;
                  break;

              case isNameStart(i):
                  CATEGORY[i] = charCodeCategory.NameStart;
                  break;

              case isNonPrintable(i):
                  CATEGORY[i] = charCodeCategory.NonPrintable;
                  break;

              default:
                  CATEGORY[i] = i || charCodeCategory.Eof;
          }
      }

      function charCodeCategory(code) {
          return code < 0x80 ? CATEGORY[code] : charCodeCategory.NameStart;
      }
      var charCodeDefinitions = {
          isDigit: isDigit,
          isHexDigit: isHexDigit,
          isUppercaseLetter: isUppercaseLetter,
          isLowercaseLetter: isLowercaseLetter,
          isLetter: isLetter,
          isNonAscii: isNonAscii,
          isNameStart: isNameStart,
          isName: isName,
          isNonPrintable: isNonPrintable,
          isNewline: isNewline,
          isWhiteSpace: isWhiteSpace,
          isValidEscape: isValidEscape,
          isIdentifierStart: isIdentifierStart,
          isNumberStart: isNumberStart,

          isBOM: isBOM,
          charCodeCategory: charCodeCategory
      };

      var isDigit$1 = charCodeDefinitions.isDigit;
      var isHexDigit$1 = charCodeDefinitions.isHexDigit;
      var isUppercaseLetter$1 = charCodeDefinitions.isUppercaseLetter;
      var isName$1 = charCodeDefinitions.isName;
      var isWhiteSpace$1 = charCodeDefinitions.isWhiteSpace;
      var isValidEscape$1 = charCodeDefinitions.isValidEscape;

      function getCharCode(source, offset) {
          return offset < source.length ? source.charCodeAt(offset) : 0;
      }

      function getNewlineLength(source, offset, code) {
          if (code === 13 /* \r */ && getCharCode(source, offset + 1) === 10 /* \n */) {
              return 2;
          }

          return 1;
      }

      function cmpChar(testStr, offset, referenceCode) {
          var code = testStr.charCodeAt(offset);

          // code.toLowerCase() for A..Z
          if (isUppercaseLetter$1(code)) {
              code = code | 32;
          }

          return code === referenceCode;
      }

      function cmpStr(testStr, start, end, referenceStr) {
          if (end - start !== referenceStr.length) {
              return false;
          }

          if (start < 0 || end > testStr.length) {
              return false;
          }

          for (var i = start; i < end; i++) {
              var testCode = testStr.charCodeAt(i);
              var referenceCode = referenceStr.charCodeAt(i - start);

              // testCode.toLowerCase() for A..Z
              if (isUppercaseLetter$1(testCode)) {
                  testCode = testCode | 32;
              }

              if (testCode !== referenceCode) {
                  return false;
              }
          }

          return true;
      }

      function findWhiteSpaceStart(source, offset) {
          for (; offset >= 0; offset--) {
              if (!isWhiteSpace$1(source.charCodeAt(offset))) {
                  break;
              }
          }

          return offset + 1;
      }

      function findWhiteSpaceEnd(source, offset) {
          for (; offset < source.length; offset++) {
              if (!isWhiteSpace$1(source.charCodeAt(offset))) {
                  break;
              }
          }

          return offset;
      }

      function findDecimalNumberEnd(source, offset) {
          for (; offset < source.length; offset++) {
              if (!isDigit$1(source.charCodeAt(offset))) {
                  break;
              }
          }

          return offset;
      }

      // § 4.3.7. Consume an escaped code point
      function consumeEscaped(source, offset) {
          // It assumes that the U+005C REVERSE SOLIDUS (\) has already been consumed and
          // that the next input code point has already been verified to be part of a valid escape.
          offset += 2;

          // hex digit
          if (isHexDigit$1(getCharCode(source, offset - 1))) {
              // Consume as many hex digits as possible, but no more than 5.
              // Note that this means 1-6 hex digits have been consumed in total.
              for (var maxOffset = Math.min(source.length, offset + 5); offset < maxOffset; offset++) {
                  if (!isHexDigit$1(getCharCode(source, offset))) {
                      break;
                  }
              }

              // If the next input code point is whitespace, consume it as well.
              var code = getCharCode(source, offset);
              if (isWhiteSpace$1(code)) {
                  offset += getNewlineLength(source, offset, code);
              }
          }

          return offset;
      }

      // §4.3.11. Consume a name
      // Note: This algorithm does not do the verification of the first few code points that are necessary
      // to ensure the returned code points would constitute an <ident-token>. If that is the intended use,
      // ensure that the stream starts with an identifier before calling this algorithm.
      function consumeName(source, offset) {
          // Let result initially be an empty string.
          // Repeatedly consume the next input code point from the stream:
          for (; offset < source.length; offset++) {
              var code = source.charCodeAt(offset);

              // name code point
              if (isName$1(code)) {
                  // Append the code point to result.
                  continue;
              }

              // the stream starts with a valid escape
              if (isValidEscape$1(code, getCharCode(source, offset + 1))) {
                  // Consume an escaped code point. Append the returned code point to result.
                  offset = consumeEscaped(source, offset) - 1;
                  continue;
              }

              // anything else
              // Reconsume the current input code point. Return result.
              break;
          }

          return offset;
      }

      // §4.3.12. Consume a number
      function consumeNumber(source, offset) {
          var code = source.charCodeAt(offset);

          // 2. If the next input code point is U+002B PLUS SIGN (+) or U+002D HYPHEN-MINUS (-),
          // consume it and append it to repr.
          if (code === 0x002B || code === 0x002D) {
              code = source.charCodeAt(offset += 1);
          }

          // 3. While the next input code point is a digit, consume it and append it to repr.
          if (isDigit$1(code)) {
              offset = findDecimalNumberEnd(source, offset + 1);
              code = source.charCodeAt(offset);
          }

          // 4. If the next 2 input code points are U+002E FULL STOP (.) followed by a digit, then:
          if (code === 0x002E && isDigit$1(source.charCodeAt(offset + 1))) {
              // 4.1 Consume them.
              // 4.2 Append them to repr.
              code = source.charCodeAt(offset += 2);

              // 4.3 Set type to "number".
              // TODO

              // 4.4 While the next input code point is a digit, consume it and append it to repr.

              offset = findDecimalNumberEnd(source, offset);
          }

          // 5. If the next 2 or 3 input code points are U+0045 LATIN CAPITAL LETTER E (E)
          // or U+0065 LATIN SMALL LETTER E (e), ... , followed by a digit, then:
          if (cmpChar(source, offset, 101 /* e */)) {
              var sign = 0;
              code = source.charCodeAt(offset + 1);

              // ... optionally followed by U+002D HYPHEN-MINUS (-) or U+002B PLUS SIGN (+) ...
              if (code === 0x002D || code === 0x002B) {
                  sign = 1;
                  code = source.charCodeAt(offset + 2);
              }

              // ... followed by a digit
              if (isDigit$1(code)) {
                  // 5.1 Consume them.
                  // 5.2 Append them to repr.

                  // 5.3 Set type to "number".
                  // TODO

                  // 5.4 While the next input code point is a digit, consume it and append it to repr.
                  offset = findDecimalNumberEnd(source, offset + 1 + sign + 1);
              }
          }

          return offset;
      }

      // § 4.3.14. Consume the remnants of a bad url
      // ... its sole use is to consume enough of the input stream to reach a recovery point
      // where normal tokenizing can resume.
      function consumeBadUrlRemnants(source, offset) {
          // Repeatedly consume the next input code point from the stream:
          for (; offset < source.length; offset++) {
              var code = source.charCodeAt(offset);

              // U+0029 RIGHT PARENTHESIS ())
              // EOF
              if (code === 0x0029) {
                  // Return.
                  offset++;
                  break;
              }

              if (isValidEscape$1(code, getCharCode(source, offset + 1))) {
                  // Consume an escaped code point.
                  // Note: This allows an escaped right parenthesis ("\)") to be encountered
                  // without ending the <bad-url-token>. This is otherwise identical to
                  // the "anything else" clause.
                  offset = consumeEscaped(source, offset);
              }
          }

          return offset;
      }

      var utils = {
          consumeEscaped: consumeEscaped,
          consumeName: consumeName,
          consumeNumber: consumeNumber,
          consumeBadUrlRemnants: consumeBadUrlRemnants,

          cmpChar: cmpChar,
          cmpStr: cmpStr,

          getNewlineLength: getNewlineLength,
          findWhiteSpaceStart: findWhiteSpaceStart,
          findWhiteSpaceEnd: findWhiteSpaceEnd
      };

      var TYPE$1 = _const.TYPE;
      var NAME$1 = _const.NAME;


      var cmpStr$1 = utils.cmpStr;

      var EOF$1 = TYPE$1.EOF;
      var WHITESPACE = TYPE$1.WhiteSpace;
      var COMMENT = TYPE$1.Comment;

      var OFFSET_MASK = 0x00FFFFFF;
      var TYPE_SHIFT = 24;

      var TokenStream = function() {
          this.offsetAndType = null;
          this.balance = null;

          this.reset();
      };

      TokenStream.prototype = {
          reset: function() {
              this.eof = false;
              this.tokenIndex = -1;
              this.tokenType = 0;
              this.tokenStart = this.firstCharOffset;
              this.tokenEnd = this.firstCharOffset;
          },

          lookupType: function(offset) {
              offset += this.tokenIndex;

              if (offset < this.tokenCount) {
                  return this.offsetAndType[offset] >> TYPE_SHIFT;
              }

              return EOF$1;
          },
          lookupOffset: function(offset) {
              offset += this.tokenIndex;

              if (offset < this.tokenCount) {
                  return this.offsetAndType[offset - 1] & OFFSET_MASK;
              }

              return this.source.length;
          },
          lookupValue: function(offset, referenceStr) {
              offset += this.tokenIndex;

              if (offset < this.tokenCount) {
                  return cmpStr$1(
                      this.source,
                      this.offsetAndType[offset - 1] & OFFSET_MASK,
                      this.offsetAndType[offset] & OFFSET_MASK,
                      referenceStr
                  );
              }

              return false;
          },
          getTokenStart: function(tokenIndex) {
              if (tokenIndex === this.tokenIndex) {
                  return this.tokenStart;
              }

              if (tokenIndex > 0) {
                  return tokenIndex < this.tokenCount
                      ? this.offsetAndType[tokenIndex - 1] & OFFSET_MASK
                      : this.offsetAndType[this.tokenCount] & OFFSET_MASK;
              }

              return this.firstCharOffset;
          },

          // TODO: -> skipUntilBalanced
          getRawLength: function(startToken, mode) {
              var cursor = startToken;
              var balanceEnd;
              var offset = this.offsetAndType[Math.max(cursor - 1, 0)] & OFFSET_MASK;
              var type;

              loop:
              for (; cursor < this.tokenCount; cursor++) {
                  balanceEnd = this.balance[cursor];

                  // stop scanning on balance edge that points to offset before start token
                  if (balanceEnd < startToken) {
                      break loop;
                  }

                  type = this.offsetAndType[cursor] >> TYPE_SHIFT;

                  // check token is stop type
                  switch (mode(type, this.source, offset)) {
                      case 1:
                          break loop;

                      case 2:
                          cursor++;
                          break loop;

                      default:
                          // fast forward to the end of balanced block
                          if (this.balance[balanceEnd] === cursor) {
                              cursor = balanceEnd;
                          }

                          offset = this.offsetAndType[cursor] & OFFSET_MASK;
                  }
              }

              return cursor - this.tokenIndex;
          },
          isBalanceEdge: function(pos) {
              return this.balance[this.tokenIndex] < pos;
          },
          isDelim: function(code, offset) {
              if (offset) {
                  return (
                      this.lookupType(offset) === TYPE$1.Delim &&
                      this.source.charCodeAt(this.lookupOffset(offset)) === code
                  );
              }

              return (
                  this.tokenType === TYPE$1.Delim &&
                  this.source.charCodeAt(this.tokenStart) === code
              );
          },

          getTokenValue: function() {
              return this.source.substring(this.tokenStart, this.tokenEnd);
          },
          getTokenLength: function() {
              return this.tokenEnd - this.tokenStart;
          },
          substrToCursor: function(start) {
              return this.source.substring(start, this.tokenStart);
          },

          skipWS: function() {
              for (var i = this.tokenIndex, skipTokenCount = 0; i < this.tokenCount; i++, skipTokenCount++) {
                  if ((this.offsetAndType[i] >> TYPE_SHIFT) !== WHITESPACE) {
                      break;
                  }
              }

              if (skipTokenCount > 0) {
                  this.skip(skipTokenCount);
              }
          },
          skipSC: function() {
              while (this.tokenType === WHITESPACE || this.tokenType === COMMENT) {
                  this.next();
              }
          },
          skip: function(tokenCount) {
              var next = this.tokenIndex + tokenCount;

              if (next < this.tokenCount) {
                  this.tokenIndex = next;
                  this.tokenStart = this.offsetAndType[next - 1] & OFFSET_MASK;
                  next = this.offsetAndType[next];
                  this.tokenType = next >> TYPE_SHIFT;
                  this.tokenEnd = next & OFFSET_MASK;
              } else {
                  this.tokenIndex = this.tokenCount;
                  this.next();
              }
          },
          next: function() {
              var next = this.tokenIndex + 1;

              if (next < this.tokenCount) {
                  this.tokenIndex = next;
                  this.tokenStart = this.tokenEnd;
                  next = this.offsetAndType[next];
                  this.tokenType = next >> TYPE_SHIFT;
                  this.tokenEnd = next & OFFSET_MASK;
              } else {
                  this.tokenIndex = this.tokenCount;
                  this.eof = true;
                  this.tokenType = EOF$1;
                  this.tokenStart = this.tokenEnd = this.source.length;
              }
          },

          forEachToken(fn) {
              for (var i = 0, offset = this.firstCharOffset; i < this.tokenCount; i++) {
                  var start = offset;
                  var item = this.offsetAndType[i];
                  var end = item & OFFSET_MASK;
                  var type = item >> TYPE_SHIFT;

                  offset = end;

                  fn(type, start, end, i);
              }
          },

          dump() {
              var tokens = new Array(this.tokenCount);

              this.forEachToken((type, start, end, index) => {
                  tokens[index] = {
                      idx: index,
                      type: NAME$1[type],
                      chunk: this.source.substring(start, end),
                      balance: this.balance[index]
                  };
              });

              return tokens;
          }
      };

      var TokenStream_1 = TokenStream;

      function noop(value) {
          return value;
      }

      function generateMultiplier(multiplier) {
          if (multiplier.min === 0 && multiplier.max === 0) {
              return '*';
          }

          if (multiplier.min === 0 && multiplier.max === 1) {
              return '?';
          }

          if (multiplier.min === 1 && multiplier.max === 0) {
              return multiplier.comma ? '#' : '+';
          }

          if (multiplier.min === 1 && multiplier.max === 1) {
              return '';
          }

          return (
              (multiplier.comma ? '#' : '') +
              (multiplier.min === multiplier.max
                  ? '{' + multiplier.min + '}'
                  : '{' + multiplier.min + ',' + (multiplier.max !== 0 ? multiplier.max : '') + '}'
              )
          );
      }

      function generateTypeOpts(node) {
          switch (node.type) {
              case 'Range':
                  return (
                      ' [' +
                      (node.min === null ? '-∞' : node.min) +
                      ',' +
                      (node.max === null ? '∞' : node.max) +
                      ']'
                  );

              default:
                  throw new Error('Unknown node type `' + node.type + '`');
          }
      }

      function generateSequence(node, decorate, forceBraces, compact) {
          var combinator = node.combinator === ' ' || compact ? node.combinator : ' ' + node.combinator + ' ';
          var result = node.terms.map(function(term) {
              return generate(term, decorate, forceBraces, compact);
          }).join(combinator);

          if (node.explicit || forceBraces) {
              result = (compact || result[0] === ',' ? '[' : '[ ') + result + (compact ? ']' : ' ]');
          }

          return result;
      }

      function generate(node, decorate, forceBraces, compact) {
          var result;

          switch (node.type) {
              case 'Group':
                  result =
                      generateSequence(node, decorate, forceBraces, compact) +
                      (node.disallowEmpty ? '!' : '');
                  break;

              case 'Multiplier':
                  // return since node is a composition
                  return (
                      generate(node.term, decorate, forceBraces, compact) +
                      decorate(generateMultiplier(node), node)
                  );

              case 'Type':
                  result = '<' + node.name + (node.opts ? decorate(generateTypeOpts(node.opts), node.opts) : '') + '>';
                  break;

              case 'Property':
                  result = '<\'' + node.name + '\'>';
                  break;

              case 'Keyword':
                  result = node.name;
                  break;

              case 'AtKeyword':
                  result = '@' + node.name;
                  break;

              case 'Function':
                  result = node.name + '(';
                  break;

              case 'String':
              case 'Token':
                  result = node.value;
                  break;

              case 'Comma':
                  result = ',';
                  break;

              default:
                  throw new Error('Unknown node type `' + node.type + '`');
          }

          return decorate(result, node);
      }

      var generate_1 = function(node, options) {
          var decorate = noop;
          var forceBraces = false;
          var compact = false;

          if (typeof options === 'function') {
              decorate = options;
          } else if (options) {
              forceBraces = Boolean(options.forceBraces);
              compact = Boolean(options.compact);
              if (typeof options.decorate === 'function') {
                  decorate = options.decorate;
              }
          }

          return generate(node, decorate, forceBraces, compact);
      };

      const defaultLoc = { offset: 0, line: 1, column: 1 };

      function locateMismatch(matchResult, node) {
          const tokens = matchResult.tokens;
          const longestMatch = matchResult.longestMatch;
          const mismatchNode = longestMatch < tokens.length ? tokens[longestMatch].node || null : null;
          const badNode = mismatchNode !== node ? mismatchNode : null;
          let mismatchOffset = 0;
          let mismatchLength = 0;
          let entries = 0;
          let css = '';
          let start;
          let end;

          for (let i = 0; i < tokens.length; i++) {
              const token = tokens[i].value;

              if (i === longestMatch) {
                  mismatchLength = token.length;
                  mismatchOffset = css.length;
              }

              if (badNode !== null && tokens[i].node === badNode) {
                  if (i <= longestMatch) {
                      entries++;
                  } else {
                      entries = 0;
                  }
              }

              css += token;
          }

          if (longestMatch === tokens.length || entries > 1) { // last
              start = fromLoc(badNode || node, 'end') || buildLoc(defaultLoc, css);
              end = buildLoc(start);
          } else {
              start = fromLoc(badNode, 'start') ||
                  buildLoc(fromLoc(node, 'start') || defaultLoc, css.slice(0, mismatchOffset));
              end = fromLoc(badNode, 'end') ||
                  buildLoc(start, css.substr(mismatchOffset, mismatchLength));
          }

          return {
              css,
              mismatchOffset,
              mismatchLength,
              start,
              end
          };
      }

      function fromLoc(node, point) {
          const value = node && node.loc && node.loc[point];

          if (value) {
              return 'line' in value ? buildLoc(value) : value;
          }

          return null;
      }

      function buildLoc({ offset, line, column }, extra) {
          const loc = {
              offset,
              line,
              column
          };

          if (extra) {
              const lines = extra.split(/\n|\r\n?|\f/);

              loc.offset += extra.length;
              loc.line += lines.length - 1;
              loc.column = lines.length === 1 ? loc.column + extra.length : lines.pop().length + 1;
          }

          return loc;
      }

      const SyntaxReferenceError = function(type, referenceName) {
          const error = createCustomError(
              'SyntaxReferenceError',
              type + (referenceName ? ' `' + referenceName + '`' : '')
          );

          error.reference = referenceName;

          return error;
      };

      const SyntaxMatchError = function(message, syntax, node, matchResult) {
          const error = createCustomError('SyntaxMatchError', message);
          const {
              css,
              mismatchOffset,
              mismatchLength,
              start,
              end
          } = locateMismatch(matchResult, node);

          error.rawMessage = message;
          error.syntax = syntax ? generate_1(syntax) : '<generic>';
          error.css = css;
          error.mismatchOffset = mismatchOffset;
          error.mismatchLength = mismatchLength;
          error.message = message + '\n' +
              '  syntax: ' + error.syntax + '\n' +
              '   value: ' + (css || '<empty string>') + '\n' +
              '  --------' + new Array(error.mismatchOffset + 1).join('-') + '^';

          Object.assign(error, start);
          error.loc = {
              source: (node && node.loc && node.loc.source) || '<unknown>',
              start,
              end
          };

          return error;
      };

      var error = {
          SyntaxReferenceError,
          SyntaxMatchError
      };

      var hasOwnProperty = Object.prototype.hasOwnProperty;
      var keywords = Object.create(null);
      var properties = Object.create(null);
      var HYPHENMINUS = 45; // '-'.charCodeAt()

      function isCustomProperty(str, offset) {
          offset = offset || 0;

          return str.length - offset >= 2 &&
                 str.charCodeAt(offset) === HYPHENMINUS &&
                 str.charCodeAt(offset + 1) === HYPHENMINUS;
      }

      function getVendorPrefix(str, offset) {
          offset = offset || 0;

          // verdor prefix should be at least 3 chars length
          if (str.length - offset >= 3) {
              // vendor prefix starts with hyper minus following non-hyper minus
              if (str.charCodeAt(offset) === HYPHENMINUS &&
                  str.charCodeAt(offset + 1) !== HYPHENMINUS) {
                  // vendor prefix should contain a hyper minus at the ending
                  var secondDashIndex = str.indexOf('-', offset + 2);

                  if (secondDashIndex !== -1) {
                      return str.substring(offset, secondDashIndex + 1);
                  }
              }
          }

          return '';
      }

      function getKeywordDescriptor(keyword) {
          if (hasOwnProperty.call(keywords, keyword)) {
              return keywords[keyword];
          }

          var name = keyword.toLowerCase();

          if (hasOwnProperty.call(keywords, name)) {
              return keywords[keyword] = keywords[name];
          }

          var custom = isCustomProperty(name, 0);
          var vendor = !custom ? getVendorPrefix(name, 0) : '';

          return keywords[keyword] = Object.freeze({
              basename: name.substr(vendor.length),
              name: name,
              vendor: vendor,
              prefix: vendor,
              custom: custom
          });
      }

      function getPropertyDescriptor(property) {
          if (hasOwnProperty.call(properties, property)) {
              return properties[property];
          }

          var name = property;
          var hack = property[0];

          if (hack === '/') {
              hack = property[1] === '/' ? '//' : '/';
          } else if (hack !== '_' &&
                     hack !== '*' &&
                     hack !== '$' &&
                     hack !== '#' &&
                     hack !== '+' &&
                     hack !== '&') {
              hack = '';
          }

          var custom = isCustomProperty(name, hack.length);

          // re-use result when possible (the same as for lower case)
          if (!custom) {
              name = name.toLowerCase();
              if (hasOwnProperty.call(properties, name)) {
                  return properties[property] = properties[name];
              }
          }

          var vendor = !custom ? getVendorPrefix(name, hack.length) : '';
          var prefix = name.substr(0, hack.length + vendor.length);

          return properties[property] = Object.freeze({
              basename: name.substr(prefix.length),
              name: name.substr(hack.length),
              hack: hack,
              vendor: vendor,
              prefix: prefix,
              custom: custom
          });
      }

      var names = {
          keyword: getKeywordDescriptor,
          property: getPropertyDescriptor,
          isCustomProperty: isCustomProperty,
          vendorPrefix: getVendorPrefix
      };

      var MIN_SIZE = 16 * 1024;
      var SafeUint32Array = typeof Uint32Array !== 'undefined' ? Uint32Array : Array; // fallback on Array when TypedArray is not supported

      var adoptBuffer = function adoptBuffer(buffer, size) {
          if (buffer === null || buffer.length < size) {
              return new SafeUint32Array(Math.max(size + 1024, MIN_SIZE));
          }

          return buffer;
      };

      var TYPE$2 = _const.TYPE;


      var isNewline$1 = charCodeDefinitions.isNewline;
      var isName$2 = charCodeDefinitions.isName;
      var isValidEscape$2 = charCodeDefinitions.isValidEscape;
      var isNumberStart$1 = charCodeDefinitions.isNumberStart;
      var isIdentifierStart$1 = charCodeDefinitions.isIdentifierStart;
      var charCodeCategory$1 = charCodeDefinitions.charCodeCategory;
      var isBOM$1 = charCodeDefinitions.isBOM;


      var cmpStr$2 = utils.cmpStr;
      var getNewlineLength$1 = utils.getNewlineLength;
      var findWhiteSpaceEnd$1 = utils.findWhiteSpaceEnd;
      var consumeEscaped$1 = utils.consumeEscaped;
      var consumeName$1 = utils.consumeName;
      var consumeNumber$1 = utils.consumeNumber;
      var consumeBadUrlRemnants$1 = utils.consumeBadUrlRemnants;

      var OFFSET_MASK$1 = 0x00FFFFFF;
      var TYPE_SHIFT$1 = 24;

      function tokenize(source, stream) {
          function getCharCode(offset) {
              return offset < sourceLength ? source.charCodeAt(offset) : 0;
          }

          // § 4.3.3. Consume a numeric token
          function consumeNumericToken() {
              // Consume a number and let number be the result.
              offset = consumeNumber$1(source, offset);

              // If the next 3 input code points would start an identifier, then:
              if (isIdentifierStart$1(getCharCode(offset), getCharCode(offset + 1), getCharCode(offset + 2))) {
                  // Create a <dimension-token> with the same value and type flag as number, and a unit set initially to the empty string.
                  // Consume a name. Set the <dimension-token>’s unit to the returned value.
                  // Return the <dimension-token>.
                  type = TYPE$2.Dimension;
                  offset = consumeName$1(source, offset);
                  return;
              }

              // Otherwise, if the next input code point is U+0025 PERCENTAGE SIGN (%), consume it.
              if (getCharCode(offset) === 0x0025) {
                  // Create a <percentage-token> with the same value as number, and return it.
                  type = TYPE$2.Percentage;
                  offset++;
                  return;
              }

              // Otherwise, create a <number-token> with the same value and type flag as number, and return it.
              type = TYPE$2.Number;
          }

          // § 4.3.4. Consume an ident-like token
          function consumeIdentLikeToken() {
              const nameStartOffset = offset;

              // Consume a name, and let string be the result.
              offset = consumeName$1(source, offset);

              // If string’s value is an ASCII case-insensitive match for "url",
              // and the next input code point is U+0028 LEFT PARENTHESIS ((), consume it.
              if (cmpStr$2(source, nameStartOffset, offset, 'url') && getCharCode(offset) === 0x0028) {
                  // While the next two input code points are whitespace, consume the next input code point.
                  offset = findWhiteSpaceEnd$1(source, offset + 1);

                  // If the next one or two input code points are U+0022 QUOTATION MARK ("), U+0027 APOSTROPHE ('),
                  // or whitespace followed by U+0022 QUOTATION MARK (") or U+0027 APOSTROPHE ('),
                  // then create a <function-token> with its value set to string and return it.
                  if (getCharCode(offset) === 0x0022 ||
                      getCharCode(offset) === 0x0027) {
                      type = TYPE$2.Function;
                      offset = nameStartOffset + 4;
                      return;
                  }

                  // Otherwise, consume a url token, and return it.
                  consumeUrlToken();
                  return;
              }

              // Otherwise, if the next input code point is U+0028 LEFT PARENTHESIS ((), consume it.
              // Create a <function-token> with its value set to string and return it.
              if (getCharCode(offset) === 0x0028) {
                  type = TYPE$2.Function;
                  offset++;
                  return;
              }

              // Otherwise, create an <ident-token> with its value set to string and return it.
              type = TYPE$2.Ident;
          }

          // § 4.3.5. Consume a string token
          function consumeStringToken(endingCodePoint) {
              // This algorithm may be called with an ending code point, which denotes the code point
              // that ends the string. If an ending code point is not specified,
              // the current input code point is used.
              if (!endingCodePoint) {
                  endingCodePoint = getCharCode(offset++);
              }

              // Initially create a <string-token> with its value set to the empty string.
              type = TYPE$2.String;

              // Repeatedly consume the next input code point from the stream:
              for (; offset < source.length; offset++) {
                  var code = source.charCodeAt(offset);

                  switch (charCodeCategory$1(code)) {
                      // ending code point
                      case endingCodePoint:
                          // Return the <string-token>.
                          offset++;
                          return;

                      // EOF
                      case charCodeCategory$1.Eof:
                          // This is a parse error. Return the <string-token>.
                          return;

                      // newline
                      case charCodeCategory$1.WhiteSpace:
                          if (isNewline$1(code)) {
                              // This is a parse error. Reconsume the current input code point,
                              // create a <bad-string-token>, and return it.
                              offset += getNewlineLength$1(source, offset, code);
                              type = TYPE$2.BadString;
                              return;
                          }
                          break;

                      // U+005C REVERSE SOLIDUS (\)
                      case 0x005C:
                          // If the next input code point is EOF, do nothing.
                          if (offset === source.length - 1) {
                              break;
                          }

                          var nextCode = getCharCode(offset + 1);

                          // Otherwise, if the next input code point is a newline, consume it.
                          if (isNewline$1(nextCode)) {
                              offset += getNewlineLength$1(source, offset + 1, nextCode);
                          } else if (isValidEscape$2(code, nextCode)) {
                              // Otherwise, (the stream starts with a valid escape) consume
                              // an escaped code point and append the returned code point to
                              // the <string-token>’s value.
                              offset = consumeEscaped$1(source, offset) - 1;
                          }
                          break;

                      // anything else
                      // Append the current input code point to the <string-token>’s value.
                  }
              }
          }

          // § 4.3.6. Consume a url token
          // Note: This algorithm assumes that the initial "url(" has already been consumed.
          // This algorithm also assumes that it’s being called to consume an "unquoted" value, like url(foo).
          // A quoted value, like url("foo"), is parsed as a <function-token>. Consume an ident-like token
          // automatically handles this distinction; this algorithm shouldn’t be called directly otherwise.
          function consumeUrlToken() {
              // Initially create a <url-token> with its value set to the empty string.
              type = TYPE$2.Url;

              // Consume as much whitespace as possible.
              offset = findWhiteSpaceEnd$1(source, offset);

              // Repeatedly consume the next input code point from the stream:
              for (; offset < source.length; offset++) {
                  var code = source.charCodeAt(offset);

                  switch (charCodeCategory$1(code)) {
                      // U+0029 RIGHT PARENTHESIS ())
                      case 0x0029:
                          // Return the <url-token>.
                          offset++;
                          return;

                      // EOF
                      case charCodeCategory$1.Eof:
                          // This is a parse error. Return the <url-token>.
                          return;

                      // whitespace
                      case charCodeCategory$1.WhiteSpace:
                          // Consume as much whitespace as possible.
                          offset = findWhiteSpaceEnd$1(source, offset);

                          // If the next input code point is U+0029 RIGHT PARENTHESIS ()) or EOF,
                          // consume it and return the <url-token>
                          // (if EOF was encountered, this is a parse error);
                          if (getCharCode(offset) === 0x0029 || offset >= source.length) {
                              if (offset < source.length) {
                                  offset++;
                              }
                              return;
                          }

                          // otherwise, consume the remnants of a bad url, create a <bad-url-token>,
                          // and return it.
                          offset = consumeBadUrlRemnants$1(source, offset);
                          type = TYPE$2.BadUrl;
                          return;

                      // U+0022 QUOTATION MARK (")
                      // U+0027 APOSTROPHE (')
                      // U+0028 LEFT PARENTHESIS (()
                      // non-printable code point
                      case 0x0022:
                      case 0x0027:
                      case 0x0028:
                      case charCodeCategory$1.NonPrintable:
                          // This is a parse error. Consume the remnants of a bad url,
                          // create a <bad-url-token>, and return it.
                          offset = consumeBadUrlRemnants$1(source, offset);
                          type = TYPE$2.BadUrl;
                          return;

                      // U+005C REVERSE SOLIDUS (\)
                      case 0x005C:
                          // If the stream starts with a valid escape, consume an escaped code point and
                          // append the returned code point to the <url-token>’s value.
                          if (isValidEscape$2(code, getCharCode(offset + 1))) {
                              offset = consumeEscaped$1(source, offset) - 1;
                              break;
                          }

                          // Otherwise, this is a parse error. Consume the remnants of a bad url,
                          // create a <bad-url-token>, and return it.
                          offset = consumeBadUrlRemnants$1(source, offset);
                          type = TYPE$2.BadUrl;
                          return;

                      // anything else
                      // Append the current input code point to the <url-token>’s value.
                  }
              }
          }

          if (!stream) {
              stream = new TokenStream_1();
          }

          // ensure source is a string
          source = String(source || '');

          var sourceLength = source.length;
          var offsetAndType = adoptBuffer(stream.offsetAndType, sourceLength + 1); // +1 because of eof-token
          var balance = adoptBuffer(stream.balance, sourceLength + 1);
          var tokenCount = 0;
          var start = isBOM$1(getCharCode(0));
          var offset = start;
          var balanceCloseType = 0;
          var balanceStart = 0;
          var balancePrev = 0;

          // https://drafts.csswg.org/css-syntax-3/#consume-token
          // § 4.3.1. Consume a token
          while (offset < sourceLength) {
              var code = source.charCodeAt(offset);
              var type = 0;

              balance[tokenCount] = sourceLength;

              switch (charCodeCategory$1(code)) {
                  // whitespace
                  case charCodeCategory$1.WhiteSpace:
                      // Consume as much whitespace as possible. Return a <whitespace-token>.
                      type = TYPE$2.WhiteSpace;
                      offset = findWhiteSpaceEnd$1(source, offset + 1);
                      break;

                  // U+0022 QUOTATION MARK (")
                  case 0x0022:
                      // Consume a string token and return it.
                      consumeStringToken();
                      break;

                  // U+0023 NUMBER SIGN (#)
                  case 0x0023:
                      // If the next input code point is a name code point or the next two input code points are a valid escape, then:
                      if (isName$2(getCharCode(offset + 1)) || isValidEscape$2(getCharCode(offset + 1), getCharCode(offset + 2))) {
                          // Create a <hash-token>.
                          type = TYPE$2.Hash;

                          // If the next 3 input code points would start an identifier, set the <hash-token>’s type flag to "id".
                          // if (isIdentifierStart(getCharCode(offset + 1), getCharCode(offset + 2), getCharCode(offset + 3))) {
                          //     // TODO: set id flag
                          // }

                          // Consume a name, and set the <hash-token>’s value to the returned string.
                          offset = consumeName$1(source, offset + 1);

                          // Return the <hash-token>.
                      } else {
                          // Otherwise, return a <delim-token> with its value set to the current input code point.
                          type = TYPE$2.Delim;
                          offset++;
                      }

                      break;

                  // U+0027 APOSTROPHE (')
                  case 0x0027:
                      // Consume a string token and return it.
                      consumeStringToken();
                      break;

                  // U+0028 LEFT PARENTHESIS (()
                  case 0x0028:
                      // Return a <(-token>.
                      type = TYPE$2.LeftParenthesis;
                      offset++;
                      break;

                  // U+0029 RIGHT PARENTHESIS ())
                  case 0x0029:
                      // Return a <)-token>.
                      type = TYPE$2.RightParenthesis;
                      offset++;
                      break;

                  // U+002B PLUS SIGN (+)
                  case 0x002B:
                      // If the input stream starts with a number, ...
                      if (isNumberStart$1(code, getCharCode(offset + 1), getCharCode(offset + 2))) {
                          // ... reconsume the current input code point, consume a numeric token, and return it.
                          consumeNumericToken();
                      } else {
                          // Otherwise, return a <delim-token> with its value set to the current input code point.
                          type = TYPE$2.Delim;
                          offset++;
                      }
                      break;

                  // U+002C COMMA (,)
                  case 0x002C:
                      // Return a <comma-token>.
                      type = TYPE$2.Comma;
                      offset++;
                      break;

                  // U+002D HYPHEN-MINUS (-)
                  case 0x002D:
                      // If the input stream starts with a number, reconsume the current input code point, consume a numeric token, and return it.
                      if (isNumberStart$1(code, getCharCode(offset + 1), getCharCode(offset + 2))) {
                          consumeNumericToken();
                      } else {
                          // Otherwise, if the next 2 input code points are U+002D HYPHEN-MINUS U+003E GREATER-THAN SIGN (->), consume them and return a <CDC-token>.
                          if (getCharCode(offset + 1) === 0x002D &&
                              getCharCode(offset + 2) === 0x003E) {
                              type = TYPE$2.CDC;
                              offset = offset + 3;
                          } else {
                              // Otherwise, if the input stream starts with an identifier, ...
                              if (isIdentifierStart$1(code, getCharCode(offset + 1), getCharCode(offset + 2))) {
                                  // ... reconsume the current input code point, consume an ident-like token, and return it.
                                  consumeIdentLikeToken();
                              } else {
                                  // Otherwise, return a <delim-token> with its value set to the current input code point.
                                  type = TYPE$2.Delim;
                                  offset++;
                              }
                          }
                      }
                      break;

                  // U+002E FULL STOP (.)
                  case 0x002E:
                      // If the input stream starts with a number, ...
                      if (isNumberStart$1(code, getCharCode(offset + 1), getCharCode(offset + 2))) {
                          // ... reconsume the current input code point, consume a numeric token, and return it.
                          consumeNumericToken();
                      } else {
                          // Otherwise, return a <delim-token> with its value set to the current input code point.
                          type = TYPE$2.Delim;
                          offset++;
                      }

                      break;

                  // U+002F SOLIDUS (/)
                  case 0x002F:
                      // If the next two input code point are U+002F SOLIDUS (/) followed by a U+002A ASTERISK (*),
                      if (getCharCode(offset + 1) === 0x002A) {
                          // ... consume them and all following code points up to and including the first U+002A ASTERISK (*)
                          // followed by a U+002F SOLIDUS (/), or up to an EOF code point.
                          type = TYPE$2.Comment;
                          offset = source.indexOf('*/', offset + 2) + 2;
                          if (offset === 1) {
                              offset = source.length;
                          }
                      } else {
                          type = TYPE$2.Delim;
                          offset++;
                      }
                      break;

                  // U+003A COLON (:)
                  case 0x003A:
                      // Return a <colon-token>.
                      type = TYPE$2.Colon;
                      offset++;
                      break;

                  // U+003B SEMICOLON (;)
                  case 0x003B:
                      // Return a <semicolon-token>.
                      type = TYPE$2.Semicolon;
                      offset++;
                      break;

                  // U+003C LESS-THAN SIGN (<)
                  case 0x003C:
                      // If the next 3 input code points are U+0021 EXCLAMATION MARK U+002D HYPHEN-MINUS U+002D HYPHEN-MINUS (!--), ...
                      if (getCharCode(offset + 1) === 0x0021 &&
                          getCharCode(offset + 2) === 0x002D &&
                          getCharCode(offset + 3) === 0x002D) {
                          // ... consume them and return a <CDO-token>.
                          type = TYPE$2.CDO;
                          offset = offset + 4;
                      } else {
                          // Otherwise, return a <delim-token> with its value set to the current input code point.
                          type = TYPE$2.Delim;
                          offset++;
                      }

                      break;

                  // U+0040 COMMERCIAL AT (@)
                  case 0x0040:
                      // If the next 3 input code points would start an identifier, ...
                      if (isIdentifierStart$1(getCharCode(offset + 1), getCharCode(offset + 2), getCharCode(offset + 3))) {
                          // ... consume a name, create an <at-keyword-token> with its value set to the returned value, and return it.
                          type = TYPE$2.AtKeyword;
                          offset = consumeName$1(source, offset + 1);
                      } else {
                          // Otherwise, return a <delim-token> with its value set to the current input code point.
                          type = TYPE$2.Delim;
                          offset++;
                      }

                      break;

                  // U+005B LEFT SQUARE BRACKET ([)
                  case 0x005B:
                      // Return a <[-token>.
                      type = TYPE$2.LeftSquareBracket;
                      offset++;
                      break;

                  // U+005C REVERSE SOLIDUS (\)
                  case 0x005C:
                      // If the input stream starts with a valid escape, ...
                      if (isValidEscape$2(code, getCharCode(offset + 1))) {
                          // ... reconsume the current input code point, consume an ident-like token, and return it.
                          consumeIdentLikeToken();
                      } else {
                          // Otherwise, this is a parse error. Return a <delim-token> with its value set to the current input code point.
                          type = TYPE$2.Delim;
                          offset++;
                      }
                      break;

                  // U+005D RIGHT SQUARE BRACKET (])
                  case 0x005D:
                      // Return a <]-token>.
                      type = TYPE$2.RightSquareBracket;
                      offset++;
                      break;

                  // U+007B LEFT CURLY BRACKET ({)
                  case 0x007B:
                      // Return a <{-token>.
                      type = TYPE$2.LeftCurlyBracket;
                      offset++;
                      break;

                  // U+007D RIGHT CURLY BRACKET (})
                  case 0x007D:
                      // Return a <}-token>.
                      type = TYPE$2.RightCurlyBracket;
                      offset++;
                      break;

                  // digit
                  case charCodeCategory$1.Digit:
                      // Reconsume the current input code point, consume a numeric token, and return it.
                      consumeNumericToken();
                      break;

                  // name-start code point
                  case charCodeCategory$1.NameStart:
                      // Reconsume the current input code point, consume an ident-like token, and return it.
                      consumeIdentLikeToken();
                      break;

                  // EOF
                  case charCodeCategory$1.Eof:
                      // Return an <EOF-token>.
                      break;

                  // anything else
                  default:
                      // Return a <delim-token> with its value set to the current input code point.
                      type = TYPE$2.Delim;
                      offset++;
              }

              switch (type) {
                  case balanceCloseType:
                      balancePrev = balanceStart & OFFSET_MASK$1;
                      balanceStart = balance[balancePrev];
                      balanceCloseType = balanceStart >> TYPE_SHIFT$1;
                      balance[tokenCount] = balancePrev;
                      balance[balancePrev++] = tokenCount;
                      for (; balancePrev < tokenCount; balancePrev++) {
                          if (balance[balancePrev] === sourceLength) {
                              balance[balancePrev] = tokenCount;
                          }
                      }
                      break;

                  case TYPE$2.LeftParenthesis:
                  case TYPE$2.Function:
                      balance[tokenCount] = balanceStart;
                      balanceCloseType = TYPE$2.RightParenthesis;
                      balanceStart = (balanceCloseType << TYPE_SHIFT$1) | tokenCount;
                      break;

                  case TYPE$2.LeftSquareBracket:
                      balance[tokenCount] = balanceStart;
                      balanceCloseType = TYPE$2.RightSquareBracket;
                      balanceStart = (balanceCloseType << TYPE_SHIFT$1) | tokenCount;
                      break;

                  case TYPE$2.LeftCurlyBracket:
                      balance[tokenCount] = balanceStart;
                      balanceCloseType = TYPE$2.RightCurlyBracket;
                      balanceStart = (balanceCloseType << TYPE_SHIFT$1) | tokenCount;
                      break;
              }

              offsetAndType[tokenCount++] = (type << TYPE_SHIFT$1) | offset;
          }

          // finalize buffers
          offsetAndType[tokenCount] = (TYPE$2.EOF << TYPE_SHIFT$1) | offset; // <EOF-token>
          balance[tokenCount] = sourceLength;
          balance[sourceLength] = sourceLength; // prevents false positive balance match with any token
          while (balanceStart !== 0) {
              balancePrev = balanceStart & OFFSET_MASK$1;
              balanceStart = balance[balancePrev];
              balance[balancePrev] = sourceLength;
          }

          // update stream
          stream.source = source;
          stream.firstCharOffset = start;
          stream.offsetAndType = offsetAndType;
          stream.tokenCount = tokenCount;
          stream.balance = balance;
          stream.reset();
          stream.next();

          return stream;
      }

      // extend tokenizer with constants
      Object.keys(_const).forEach(function(key) {
          tokenize[key] = _const[key];
      });

      // extend tokenizer with static methods from utils
      Object.keys(charCodeDefinitions).forEach(function(key) {
          tokenize[key] = charCodeDefinitions[key];
      });
      Object.keys(utils).forEach(function(key) {
          tokenize[key] = utils[key];
      });

      var tokenizer = tokenize;

      var isDigit$2 = tokenizer.isDigit;
      var cmpChar$1 = tokenizer.cmpChar;
      var TYPE$3 = tokenizer.TYPE;

      var DELIM = TYPE$3.Delim;
      var WHITESPACE$1 = TYPE$3.WhiteSpace;
      var COMMENT$1 = TYPE$3.Comment;
      var IDENT = TYPE$3.Ident;
      var NUMBER = TYPE$3.Number;
      var DIMENSION = TYPE$3.Dimension;
      var PLUSSIGN = 0x002B;    // U+002B PLUS SIGN (+)
      var HYPHENMINUS$1 = 0x002D; // U+002D HYPHEN-MINUS (-)
      var N = 0x006E;           // U+006E LATIN SMALL LETTER N (n)
      var DISALLOW_SIGN = true;
      var ALLOW_SIGN = false;

      function isDelim(token, code) {
          return token !== null && token.type === DELIM && token.value.charCodeAt(0) === code;
      }

      function skipSC(token, offset, getNextToken) {
          while (token !== null && (token.type === WHITESPACE$1 || token.type === COMMENT$1)) {
              token = getNextToken(++offset);
          }

          return offset;
      }

      function checkInteger(token, valueOffset, disallowSign, offset) {
          if (!token) {
              return 0;
          }

          var code = token.value.charCodeAt(valueOffset);

          if (code === PLUSSIGN || code === HYPHENMINUS$1) {
              if (disallowSign) {
                  // Number sign is not allowed
                  return 0;
              }
              valueOffset++;
          }

          for (; valueOffset < token.value.length; valueOffset++) {
              if (!isDigit$2(token.value.charCodeAt(valueOffset))) {
                  // Integer is expected
                  return 0;
              }
          }

          return offset + 1;
      }

      // ... <signed-integer>
      // ... ['+' | '-'] <signless-integer>
      function consumeB(token, offset_, getNextToken) {
          var sign = false;
          var offset = skipSC(token, offset_, getNextToken);

          token = getNextToken(offset);

          if (token === null) {
              return offset_;
          }

          if (token.type !== NUMBER) {
              if (isDelim(token, PLUSSIGN) || isDelim(token, HYPHENMINUS$1)) {
                  sign = true;
                  offset = skipSC(getNextToken(++offset), offset, getNextToken);
                  token = getNextToken(offset);

                  if (token === null && token.type !== NUMBER) {
                      return 0;
                  }
              } else {
                  return offset_;
              }
          }

          if (!sign) {
              var code = token.value.charCodeAt(0);
              if (code !== PLUSSIGN && code !== HYPHENMINUS$1) {
                  // Number sign is expected
                  return 0;
              }
          }

          return checkInteger(token, sign ? 0 : 1, sign, offset);
      }

      // An+B microsyntax https://www.w3.org/TR/css-syntax-3/#anb
      var genericAnPlusB = function anPlusB(token, getNextToken) {
          /* eslint-disable brace-style*/
          var offset = 0;

          if (!token) {
              return 0;
          }

          // <integer>
          if (token.type === NUMBER) {
              return checkInteger(token, 0, ALLOW_SIGN, offset); // b
          }

          // -n
          // -n <signed-integer>
          // -n ['+' | '-'] <signless-integer>
          // -n- <signless-integer>
          // <dashndashdigit-ident>
          else if (token.type === IDENT && token.value.charCodeAt(0) === HYPHENMINUS$1) {
              // expect 1st char is N
              if (!cmpChar$1(token.value, 1, N)) {
                  return 0;
              }

              switch (token.value.length) {
                  // -n
                  // -n <signed-integer>
                  // -n ['+' | '-'] <signless-integer>
                  case 2:
                      return consumeB(getNextToken(++offset), offset, getNextToken);

                  // -n- <signless-integer>
                  case 3:
                      if (token.value.charCodeAt(2) !== HYPHENMINUS$1) {
                          return 0;
                      }

                      offset = skipSC(getNextToken(++offset), offset, getNextToken);
                      token = getNextToken(offset);

                      return checkInteger(token, 0, DISALLOW_SIGN, offset);

                  // <dashndashdigit-ident>
                  default:
                      if (token.value.charCodeAt(2) !== HYPHENMINUS$1) {
                          return 0;
                      }

                      return checkInteger(token, 3, DISALLOW_SIGN, offset);
              }
          }

          // '+'? n
          // '+'? n <signed-integer>
          // '+'? n ['+' | '-'] <signless-integer>
          // '+'? n- <signless-integer>
          // '+'? <ndashdigit-ident>
          else if (token.type === IDENT || (isDelim(token, PLUSSIGN) && getNextToken(offset + 1).type === IDENT)) {
              // just ignore a plus
              if (token.type !== IDENT) {
                  token = getNextToken(++offset);
              }

              if (token === null || !cmpChar$1(token.value, 0, N)) {
                  return 0;
              }

              switch (token.value.length) {
                  // '+'? n
                  // '+'? n <signed-integer>
                  // '+'? n ['+' | '-'] <signless-integer>
                  case 1:
                      return consumeB(getNextToken(++offset), offset, getNextToken);

                  // '+'? n- <signless-integer>
                  case 2:
                      if (token.value.charCodeAt(1) !== HYPHENMINUS$1) {
                          return 0;
                      }

                      offset = skipSC(getNextToken(++offset), offset, getNextToken);
                      token = getNextToken(offset);

                      return checkInteger(token, 0, DISALLOW_SIGN, offset);

                  // '+'? <ndashdigit-ident>
                  default:
                      if (token.value.charCodeAt(1) !== HYPHENMINUS$1) {
                          return 0;
                      }

                      return checkInteger(token, 2, DISALLOW_SIGN, offset);
              }
          }

          // <ndashdigit-dimension>
          // <ndash-dimension> <signless-integer>
          // <n-dimension>
          // <n-dimension> <signed-integer>
          // <n-dimension> ['+' | '-'] <signless-integer>
          else if (token.type === DIMENSION) {
              var code = token.value.charCodeAt(0);
              var sign = code === PLUSSIGN || code === HYPHENMINUS$1 ? 1 : 0;

              for (var i = sign; i < token.value.length; i++) {
                  if (!isDigit$2(token.value.charCodeAt(i))) {
                      break;
                  }
              }

              if (i === sign) {
                  // Integer is expected
                  return 0;
              }

              if (!cmpChar$1(token.value, i, N)) {
                  return 0;
              }

              // <n-dimension>
              // <n-dimension> <signed-integer>
              // <n-dimension> ['+' | '-'] <signless-integer>
              if (i + 1 === token.value.length) {
                  return consumeB(getNextToken(++offset), offset, getNextToken);
              } else {
                  if (token.value.charCodeAt(i + 1) !== HYPHENMINUS$1) {
                      return 0;
                  }

                  // <ndash-dimension> <signless-integer>
                  if (i + 2 === token.value.length) {
                      offset = skipSC(getNextToken(++offset), offset, getNextToken);
                      token = getNextToken(offset);

                      return checkInteger(token, 0, DISALLOW_SIGN, offset);
                  }
                  // <ndashdigit-dimension>
                  else {
                      return checkInteger(token, i + 2, DISALLOW_SIGN, offset);
                  }
              }
          }

          return 0;
      };

      var isHexDigit$2 = tokenizer.isHexDigit;
      var cmpChar$2 = tokenizer.cmpChar;
      var TYPE$4 = tokenizer.TYPE;

      var IDENT$1 = TYPE$4.Ident;
      var DELIM$1 = TYPE$4.Delim;
      var NUMBER$1 = TYPE$4.Number;
      var DIMENSION$1 = TYPE$4.Dimension;
      var PLUSSIGN$1 = 0x002B;     // U+002B PLUS SIGN (+)
      var HYPHENMINUS$2 = 0x002D;  // U+002D HYPHEN-MINUS (-)
      var QUESTIONMARK = 0x003F; // U+003F QUESTION MARK (?)
      var U = 0x0075;            // U+0075 LATIN SMALL LETTER U (u)

      function isDelim$1(token, code) {
          return token !== null && token.type === DELIM$1 && token.value.charCodeAt(0) === code;
      }

      function startsWith(token, code) {
          return token.value.charCodeAt(0) === code;
      }

      function hexSequence(token, offset, allowDash) {
          for (var pos = offset, hexlen = 0; pos < token.value.length; pos++) {
              var code = token.value.charCodeAt(pos);

              if (code === HYPHENMINUS$2 && allowDash && hexlen !== 0) {
                  if (hexSequence(token, offset + hexlen + 1, false) > 0) {
                      return 6; // dissallow following question marks
                  }

                  return 0; // dash at the ending of a hex sequence is not allowed
              }

              if (!isHexDigit$2(code)) {
                  return 0; // not a hex digit
              }

              if (++hexlen > 6) {
                  return 0; // too many hex digits
              }    }

          return hexlen;
      }

      function withQuestionMarkSequence(consumed, length, getNextToken) {
          if (!consumed) {
              return 0; // nothing consumed
          }

          while (isDelim$1(getNextToken(length), QUESTIONMARK)) {
              if (++consumed > 6) {
                  return 0; // too many question marks
              }

              length++;
          }

          return length;
      }

      // https://drafts.csswg.org/css-syntax/#urange
      // Informally, the <urange> production has three forms:
      // U+0001
      //      Defines a range consisting of a single code point, in this case the code point "1".
      // U+0001-00ff
      //      Defines a range of codepoints between the first and the second value, in this case
      //      the range between "1" and "ff" (255 in decimal) inclusive.
      // U+00??
      //      Defines a range of codepoints where the "?" characters range over all hex digits,
      //      in this case defining the same as the value U+0000-00ff.
      // In each form, a maximum of 6 digits is allowed for each hexadecimal number (if you treat "?" as a hexadecimal digit).
      //
      // <urange> =
      //   u '+' <ident-token> '?'* |
      //   u <dimension-token> '?'* |
      //   u <number-token> '?'* |
      //   u <number-token> <dimension-token> |
      //   u <number-token> <number-token> |
      //   u '+' '?'+
      var genericUrange = function urange(token, getNextToken) {
          var length = 0;

          // should start with `u` or `U`
          if (token === null || token.type !== IDENT$1 || !cmpChar$2(token.value, 0, U)) {
              return 0;
          }

          token = getNextToken(++length);
          if (token === null) {
              return 0;
          }

          // u '+' <ident-token> '?'*
          // u '+' '?'+
          if (isDelim$1(token, PLUSSIGN$1)) {
              token = getNextToken(++length);
              if (token === null) {
                  return 0;
              }

              if (token.type === IDENT$1) {
                  // u '+' <ident-token> '?'*
                  return withQuestionMarkSequence(hexSequence(token, 0, true), ++length, getNextToken);
              }

              if (isDelim$1(token, QUESTIONMARK)) {
                  // u '+' '?'+
                  return withQuestionMarkSequence(1, ++length, getNextToken);
              }

              // Hex digit or question mark is expected
              return 0;
          }

          // u <number-token> '?'*
          // u <number-token> <dimension-token>
          // u <number-token> <number-token>
          if (token.type === NUMBER$1) {
              if (!startsWith(token, PLUSSIGN$1)) {
                  return 0;
              }

              var consumedHexLength = hexSequence(token, 1, true);
              if (consumedHexLength === 0) {
                  return 0;
              }

              token = getNextToken(++length);
              if (token === null) {
                  // u <number-token> <eof>
                  return length;
              }

              if (token.type === DIMENSION$1 || token.type === NUMBER$1) {
                  // u <number-token> <dimension-token>
                  // u <number-token> <number-token>
                  if (!startsWith(token, HYPHENMINUS$2) || !hexSequence(token, 1, false)) {
                      return 0;
                  }

                  return length + 1;
              }

              // u <number-token> '?'*
              return withQuestionMarkSequence(consumedHexLength, length, getNextToken);
          }

          // u <dimension-token> '?'*
          if (token.type === DIMENSION$1) {
              if (!startsWith(token, PLUSSIGN$1)) {
                  return 0;
              }

              return withQuestionMarkSequence(hexSequence(token, 1, true), ++length, getNextToken);
          }

          return 0;
      };

      var isIdentifierStart$2 = tokenizer.isIdentifierStart;
      var isHexDigit$3 = tokenizer.isHexDigit;
      var isDigit$3 = tokenizer.isDigit;
      var cmpStr$3 = tokenizer.cmpStr;
      var consumeNumber$2 = tokenizer.consumeNumber;
      var TYPE$5 = tokenizer.TYPE;



      var cssWideKeywords = ['unset', 'initial', 'inherit'];
      var calcFunctionNames = ['calc(', '-moz-calc(', '-webkit-calc('];

      // https://www.w3.org/TR/css-values-3/#lengths
      var LENGTH = {
          // absolute length units
          'px': true,
          'mm': true,
          'cm': true,
          'in': true,
          'pt': true,
          'pc': true,
          'q': true,

          // relative length units
          'em': true,
          'ex': true,
          'ch': true,
          'rem': true,

          // viewport-percentage lengths
          'vh': true,
          'vw': true,
          'vmin': true,
          'vmax': true,
          'vm': true
      };

      var ANGLE = {
          'deg': true,
          'grad': true,
          'rad': true,
          'turn': true
      };

      var TIME = {
          's': true,
          'ms': true
      };

      var FREQUENCY = {
          'hz': true,
          'khz': true
      };

      // https://www.w3.org/TR/css-values-3/#resolution (https://drafts.csswg.org/css-values/#resolution)
      var RESOLUTION = {
          'dpi': true,
          'dpcm': true,
          'dppx': true,
          'x': true      // https://github.com/w3c/csswg-drafts/issues/461
      };

      // https://drafts.csswg.org/css-grid/#fr-unit
      var FLEX = {
          'fr': true
      };

      // https://www.w3.org/TR/css3-speech/#mixing-props-voice-volume
      var DECIBEL = {
          'db': true
      };

      // https://www.w3.org/TR/css3-speech/#voice-props-voice-pitch
      var SEMITONES = {
          'st': true
      };

      // safe char code getter
      function charCode(str, index) {
          return index < str.length ? str.charCodeAt(index) : 0;
      }

      function eqStr(actual, expected) {
          return cmpStr$3(actual, 0, actual.length, expected);
      }

      function eqStrAny(actual, expected) {
          for (var i = 0; i < expected.length; i++) {
              if (eqStr(actual, expected[i])) {
                  return true;
              }
          }

          return false;
      }

      // IE postfix hack, i.e. 123\0 or 123px\9
      function isPostfixIeHack(str, offset) {
          if (offset !== str.length - 2) {
              return false;
          }

          return (
              str.charCodeAt(offset) === 0x005C &&  // U+005C REVERSE SOLIDUS (\)
              isDigit$3(str.charCodeAt(offset + 1))
          );
      }

      function outOfRange(opts, value, numEnd) {
          if (opts && opts.type === 'Range') {
              var num = Number(
                  numEnd !== undefined && numEnd !== value.length
                      ? value.substr(0, numEnd)
                      : value
              );

              if (isNaN(num)) {
                  return true;
              }

              if (opts.min !== null && num < opts.min) {
                  return true;
              }

              if (opts.max !== null && num > opts.max) {
                  return true;
              }
          }

          return false;
      }

      function consumeFunction(token, getNextToken) {
          var startIdx = token.index;
          var length = 0;

          // balanced token consuming
          do {
              length++;

              if (token.balance <= startIdx) {
                  break;
              }
          } while (token = getNextToken(length));

          return length;
      }

      // TODO: implement
      // can be used wherever <length>, <frequency>, <angle>, <time>, <percentage>, <number>, or <integer> values are allowed
      // https://drafts.csswg.org/css-values/#calc-notation
      function calc(next) {
          return function(token, getNextToken, opts) {
              if (token === null) {
                  return 0;
              }

              if (token.type === TYPE$5.Function && eqStrAny(token.value, calcFunctionNames)) {
                  return consumeFunction(token, getNextToken);
              }

              return next(token, getNextToken, opts);
          };
      }

      function tokenType(expectedTokenType) {
          return function(token) {
              if (token === null || token.type !== expectedTokenType) {
                  return 0;
              }

              return 1;
          };
      }

      function func(name) {
          name = name + '(';

          return function(token, getNextToken) {
              if (token !== null && eqStr(token.value, name)) {
                  return consumeFunction(token, getNextToken);
              }

              return 0;
          };
      }

      // =========================
      // Complex types
      //

      // https://drafts.csswg.org/css-values-4/#custom-idents
      // 4.2. Author-defined Identifiers: the <custom-ident> type
      // Some properties accept arbitrary author-defined identifiers as a component value.
      // This generic data type is denoted by <custom-ident>, and represents any valid CSS identifier
      // that would not be misinterpreted as a pre-defined keyword in that property’s value definition.
      //
      // See also: https://developer.mozilla.org/en-US/docs/Web/CSS/custom-ident
      function customIdent(token) {
          if (token === null || token.type !== TYPE$5.Ident) {
              return 0;
          }

          var name = token.value.toLowerCase();

          // The CSS-wide keywords are not valid <custom-ident>s
          if (eqStrAny(name, cssWideKeywords)) {
              return 0;
          }

          // The default keyword is reserved and is also not a valid <custom-ident>
          if (eqStr(name, 'default')) {
              return 0;
          }

          // TODO: ignore property specific keywords (as described https://developer.mozilla.org/en-US/docs/Web/CSS/custom-ident)
          // Specifications using <custom-ident> must specify clearly what other keywords
          // are excluded from <custom-ident>, if any—for example by saying that any pre-defined keywords
          // in that property’s value definition are excluded. Excluded keywords are excluded
          // in all ASCII case permutations.

          return 1;
      }

      // https://drafts.csswg.org/css-variables/#typedef-custom-property-name
      // A custom property is any property whose name starts with two dashes (U+002D HYPHEN-MINUS), like --foo.
      // The <custom-property-name> production corresponds to this: it’s defined as any valid identifier
      // that starts with two dashes, except -- itself, which is reserved for future use by CSS.
      // NOTE: Current implementation treat `--` as a valid name since most (all?) major browsers treat it as valid.
      function customPropertyName(token) {
          // ... defined as any valid identifier
          if (token === null || token.type !== TYPE$5.Ident) {
              return 0;
          }

          // ... that starts with two dashes (U+002D HYPHEN-MINUS)
          if (charCode(token.value, 0) !== 0x002D || charCode(token.value, 1) !== 0x002D) {
              return 0;
          }

          return 1;
      }

      // https://drafts.csswg.org/css-color-4/#hex-notation
      // The syntax of a <hex-color> is a <hash-token> token whose value consists of 3, 4, 6, or 8 hexadecimal digits.
      // In other words, a hex color is written as a hash character, "#", followed by some number of digits 0-9 or
      // letters a-f (the case of the letters doesn’t matter - #00ff00 is identical to #00FF00).
      function hexColor(token) {
          if (token === null || token.type !== TYPE$5.Hash) {
              return 0;
          }

          var length = token.value.length;

          // valid values (length): #rgb (4), #rgba (5), #rrggbb (7), #rrggbbaa (9)
          if (length !== 4 && length !== 5 && length !== 7 && length !== 9) {
              return 0;
          }

          for (var i = 1; i < length; i++) {
              if (!isHexDigit$3(token.value.charCodeAt(i))) {
                  return 0;
              }
          }

          return 1;
      }

      function idSelector(token) {
          if (token === null || token.type !== TYPE$5.Hash) {
              return 0;
          }

          if (!isIdentifierStart$2(charCode(token.value, 1), charCode(token.value, 2), charCode(token.value, 3))) {
              return 0;
          }

          return 1;
      }

      // https://drafts.csswg.org/css-syntax/#any-value
      // It represents the entirety of what a valid declaration can have as its value.
      function declarationValue(token, getNextToken) {
          if (!token) {
              return 0;
          }

          var length = 0;
          var level = 0;
          var startIdx = token.index;

          // The <declaration-value> production matches any sequence of one or more tokens,
          // so long as the sequence ...
          scan:
          do {
              switch (token.type) {
                  // ... does not contain <bad-string-token>, <bad-url-token>,
                  case TYPE$5.BadString:
                  case TYPE$5.BadUrl:
                      break scan;

                  // ... unmatched <)-token>, <]-token>, or <}-token>,
                  case TYPE$5.RightCurlyBracket:
                  case TYPE$5.RightParenthesis:
                  case TYPE$5.RightSquareBracket:
                      if (token.balance > token.index || token.balance < startIdx) {
                          break scan;
                      }

                      level--;
                      break;

                  // ... or top-level <semicolon-token> tokens
                  case TYPE$5.Semicolon:
                      if (level === 0) {
                          break scan;
                      }

                      break;

                  // ... or <delim-token> tokens with a value of "!"
                  case TYPE$5.Delim:
                      if (token.value === '!' && level === 0) {
                          break scan;
                      }

                      break;

                  case TYPE$5.Function:
                  case TYPE$5.LeftParenthesis:
                  case TYPE$5.LeftSquareBracket:
                  case TYPE$5.LeftCurlyBracket:
                      level++;
                      break;
              }

              length++;

              // until balance closing
              if (token.balance <= startIdx) {
                  break;
              }
          } while (token = getNextToken(length));

          return length;
      }

      // https://drafts.csswg.org/css-syntax/#any-value
      // The <any-value> production is identical to <declaration-value>, but also
      // allows top-level <semicolon-token> tokens and <delim-token> tokens
      // with a value of "!". It represents the entirety of what valid CSS can be in any context.
      function anyValue(token, getNextToken) {
          if (!token) {
              return 0;
          }

          var startIdx = token.index;
          var length = 0;

          // The <any-value> production matches any sequence of one or more tokens,
          // so long as the sequence ...
          scan:
          do {
              switch (token.type) {
                  // ... does not contain <bad-string-token>, <bad-url-token>,
                  case TYPE$5.BadString:
                  case TYPE$5.BadUrl:
                      break scan;

                  // ... unmatched <)-token>, <]-token>, or <}-token>,
                  case TYPE$5.RightCurlyBracket:
                  case TYPE$5.RightParenthesis:
                  case TYPE$5.RightSquareBracket:
                      if (token.balance > token.index || token.balance < startIdx) {
                          break scan;
                      }

                      break;
              }

              length++;

              // until balance closing
              if (token.balance <= startIdx) {
                  break;
              }
          } while (token = getNextToken(length));

          return length;
      }

      // =========================
      // Dimensions
      //

      function dimension(type) {
          return function(token, getNextToken, opts) {
              if (token === null || token.type !== TYPE$5.Dimension) {
                  return 0;
              }

              var numberEnd = consumeNumber$2(token.value, 0);

              // check unit
              if (type !== null) {
                  // check for IE postfix hack, i.e. 123px\0 or 123px\9
                  var reverseSolidusOffset = token.value.indexOf('\\', numberEnd);
                  var unit = reverseSolidusOffset === -1 || !isPostfixIeHack(token.value, reverseSolidusOffset)
                      ? token.value.substr(numberEnd)
                      : token.value.substring(numberEnd, reverseSolidusOffset);

                  if (type.hasOwnProperty(unit.toLowerCase()) === false) {
                      return 0;
                  }
              }

              // check range if specified
              if (outOfRange(opts, token.value, numberEnd)) {
                  return 0;
              }

              return 1;
          };
      }

      // =========================
      // Percentage
      //

      // §5.5. Percentages: the <percentage> type
      // https://drafts.csswg.org/css-values-4/#percentages
      function percentage(token, getNextToken, opts) {
          // ... corresponds to the <percentage-token> production
          if (token === null || token.type !== TYPE$5.Percentage) {
              return 0;
          }

          // check range if specified
          if (outOfRange(opts, token.value, token.value.length - 1)) {
              return 0;
          }

          return 1;
      }

      // =========================
      // Numeric
      //

      // https://drafts.csswg.org/css-values-4/#numbers
      // The value <zero> represents a literal number with the value 0. Expressions that merely
      // evaluate to a <number> with the value 0 (for example, calc(0)) do not match <zero>;
      // only literal <number-token>s do.
      function zero(next) {
          if (typeof next !== 'function') {
              next = function() {
                  return 0;
              };
          }

          return function(token, getNextToken, opts) {
              if (token !== null && token.type === TYPE$5.Number) {
                  if (Number(token.value) === 0) {
                      return 1;
                  }
              }

              return next(token, getNextToken, opts);
          };
      }

      // § 5.3. Real Numbers: the <number> type
      // https://drafts.csswg.org/css-values-4/#numbers
      // Number values are denoted by <number>, and represent real numbers, possibly with a fractional component.
      // ... It corresponds to the <number-token> production
      function number(token, getNextToken, opts) {
          if (token === null) {
              return 0;
          }

          var numberEnd = consumeNumber$2(token.value, 0);
          var isNumber = numberEnd === token.value.length;
          if (!isNumber && !isPostfixIeHack(token.value, numberEnd)) {
              return 0;
          }

          // check range if specified
          if (outOfRange(opts, token.value, numberEnd)) {
              return 0;
          }

          return 1;
      }

      // §5.2. Integers: the <integer> type
      // https://drafts.csswg.org/css-values-4/#integers
      function integer(token, getNextToken, opts) {
          // ... corresponds to a subset of the <number-token> production
          if (token === null || token.type !== TYPE$5.Number) {
              return 0;
          }

          // The first digit of an integer may be immediately preceded by `-` or `+` to indicate the integer’s sign.
          var i = token.value.charCodeAt(0) === 0x002B ||       // U+002B PLUS SIGN (+)
                  token.value.charCodeAt(0) === 0x002D ? 1 : 0; // U+002D HYPHEN-MINUS (-)

          // When written literally, an integer is one or more decimal digits 0 through 9 ...
          for (; i < token.value.length; i++) {
              if (!isDigit$3(token.value.charCodeAt(i))) {
                  return 0;
              }
          }

          // check range if specified
          if (outOfRange(opts, token.value, i)) {
              return 0;
          }

          return 1;
      }

      var generic = {
          // token types
          'ident-token': tokenType(TYPE$5.Ident),
          'function-token': tokenType(TYPE$5.Function),
          'at-keyword-token': tokenType(TYPE$5.AtKeyword),
          'hash-token': tokenType(TYPE$5.Hash),
          'string-token': tokenType(TYPE$5.String),
          'bad-string-token': tokenType(TYPE$5.BadString),
          'url-token': tokenType(TYPE$5.Url),
          'bad-url-token': tokenType(TYPE$5.BadUrl),
          'delim-token': tokenType(TYPE$5.Delim),
          'number-token': tokenType(TYPE$5.Number),
          'percentage-token': tokenType(TYPE$5.Percentage),
          'dimension-token': tokenType(TYPE$5.Dimension),
          'whitespace-token': tokenType(TYPE$5.WhiteSpace),
          'CDO-token': tokenType(TYPE$5.CDO),
          'CDC-token': tokenType(TYPE$5.CDC),
          'colon-token': tokenType(TYPE$5.Colon),
          'semicolon-token': tokenType(TYPE$5.Semicolon),
          'comma-token': tokenType(TYPE$5.Comma),
          '[-token': tokenType(TYPE$5.LeftSquareBracket),
          ']-token': tokenType(TYPE$5.RightSquareBracket),
          '(-token': tokenType(TYPE$5.LeftParenthesis),
          ')-token': tokenType(TYPE$5.RightParenthesis),
          '{-token': tokenType(TYPE$5.LeftCurlyBracket),
          '}-token': tokenType(TYPE$5.RightCurlyBracket),

          // token type aliases
          'string': tokenType(TYPE$5.String),
          'ident': tokenType(TYPE$5.Ident),

          // complex types
          'custom-ident': customIdent,
          'custom-property-name': customPropertyName,
          'hex-color': hexColor,
          'id-selector': idSelector, // element( <id-selector> )
          'an-plus-b': genericAnPlusB,
          'urange': genericUrange,
          'declaration-value': declarationValue,
          'any-value': anyValue,

          // dimensions
          'dimension': calc(dimension(null)),
          'angle': calc(dimension(ANGLE)),
          'decibel': calc(dimension(DECIBEL)),
          'frequency': calc(dimension(FREQUENCY)),
          'flex': calc(dimension(FLEX)),
          'length': calc(zero(dimension(LENGTH))),
          'resolution': calc(dimension(RESOLUTION)),
          'semitones': calc(dimension(SEMITONES)),
          'time': calc(dimension(TIME)),

          // percentage
          'percentage': calc(percentage),

          // numeric
          'zero': zero(),
          'number': calc(number),
          'integer': calc(integer),

          // old IE stuff
          '-ms-legacy-expression': func('expression')
      };

      var _SyntaxError$1 = function SyntaxError(message, input, offset) {
          var error = createCustomError('SyntaxError', message);

          error.input = input;
          error.offset = offset;
          error.rawMessage = message;
          error.message = error.rawMessage + '\n' +
              '  ' + error.input + '\n' +
              '--' + new Array((error.offset || error.input.length) + 1).join('-') + '^';

          return error;
      };

      var TAB = 9;
      var N$1 = 10;
      var F = 12;
      var R = 13;
      var SPACE = 32;

      var Tokenizer = function(str) {
          this.str = str;
          this.pos = 0;
      };

      Tokenizer.prototype = {
          charCodeAt: function(pos) {
              return pos < this.str.length ? this.str.charCodeAt(pos) : 0;
          },
          charCode: function() {
              return this.charCodeAt(this.pos);
          },
          nextCharCode: function() {
              return this.charCodeAt(this.pos + 1);
          },
          nextNonWsCode: function(pos) {
              return this.charCodeAt(this.findWsEnd(pos));
          },
          findWsEnd: function(pos) {
              for (; pos < this.str.length; pos++) {
                  var code = this.str.charCodeAt(pos);
                  if (code !== R && code !== N$1 && code !== F && code !== SPACE && code !== TAB) {
                      break;
                  }
              }

              return pos;
          },
          substringToPos: function(end) {
              return this.str.substring(this.pos, this.pos = end);
          },
          eat: function(code) {
              if (this.charCode() !== code) {
                  this.error('Expect `' + String.fromCharCode(code) + '`');
              }

              this.pos++;
          },
          peek: function() {
              return this.pos < this.str.length ? this.str.charAt(this.pos++) : '';
          },
          error: function(message) {
              throw new _SyntaxError$1(message, this.str, this.pos);
          }
      };

      var tokenizer$1 = Tokenizer;

      var TAB$1 = 9;
      var N$2 = 10;
      var F$1 = 12;
      var R$1 = 13;
      var SPACE$1 = 32;
      var EXCLAMATIONMARK = 33;    // !
      var NUMBERSIGN = 35;         // #
      var AMPERSAND = 38;          // &
      var APOSTROPHE = 39;         // '
      var LEFTPARENTHESIS = 40;    // (
      var RIGHTPARENTHESIS = 41;   // )
      var ASTERISK = 42;           // *
      var PLUSSIGN$2 = 43;           // +
      var COMMA = 44;              // ,
      var HYPERMINUS = 45;         // -
      var LESSTHANSIGN = 60;       // <
      var GREATERTHANSIGN = 62;    // >
      var QUESTIONMARK$1 = 63;       // ?
      var COMMERCIALAT = 64;       // @
      var LEFTSQUAREBRACKET = 91;  // [
      var RIGHTSQUAREBRACKET = 93; // ]
      var LEFTCURLYBRACKET = 123;  // {
      var VERTICALLINE = 124;      // |
      var RIGHTCURLYBRACKET = 125; // }
      var INFINITY = 8734;         // ∞
      var NAME_CHAR = createCharMap(function(ch) {
          return /[a-zA-Z0-9\-]/.test(ch);
      });
      var COMBINATOR_PRECEDENCE = {
          ' ': 1,
          '&&': 2,
          '||': 3,
          '|': 4
      };

      function createCharMap(fn) {
          var array = typeof Uint32Array === 'function' ? new Uint32Array(128) : new Array(128);
          for (var i = 0; i < 128; i++) {
              array[i] = fn(String.fromCharCode(i)) ? 1 : 0;
          }
          return array;
      }

      function scanSpaces(tokenizer) {
          return tokenizer.substringToPos(
              tokenizer.findWsEnd(tokenizer.pos)
          );
      }

      function scanWord(tokenizer) {
          var end = tokenizer.pos;

          for (; end < tokenizer.str.length; end++) {
              var code = tokenizer.str.charCodeAt(end);
              if (code >= 128 || NAME_CHAR[code] === 0) {
                  break;
              }
          }

          if (tokenizer.pos === end) {
              tokenizer.error('Expect a keyword');
          }

          return tokenizer.substringToPos(end);
      }

      function scanNumber(tokenizer) {
          var end = tokenizer.pos;

          for (; end < tokenizer.str.length; end++) {
              var code = tokenizer.str.charCodeAt(end);
              if (code < 48 || code > 57) {
                  break;
              }
          }

          if (tokenizer.pos === end) {
              tokenizer.error('Expect a number');
          }

          return tokenizer.substringToPos(end);
      }

      function scanString(tokenizer) {
          var end = tokenizer.str.indexOf('\'', tokenizer.pos + 1);

          if (end === -1) {
              tokenizer.pos = tokenizer.str.length;
              tokenizer.error('Expect an apostrophe');
          }

          return tokenizer.substringToPos(end + 1);
      }

      function readMultiplierRange(tokenizer) {
          var min = null;
          var max = null;

          tokenizer.eat(LEFTCURLYBRACKET);

          min = scanNumber(tokenizer);

          if (tokenizer.charCode() === COMMA) {
              tokenizer.pos++;
              if (tokenizer.charCode() !== RIGHTCURLYBRACKET) {
                  max = scanNumber(tokenizer);
              }
          } else {
              max = min;
          }

          tokenizer.eat(RIGHTCURLYBRACKET);

          return {
              min: Number(min),
              max: max ? Number(max) : 0
          };
      }

      function readMultiplier(tokenizer) {
          var range = null;
          var comma = false;

          switch (tokenizer.charCode()) {
              case ASTERISK:
                  tokenizer.pos++;

                  range = {
                      min: 0,
                      max: 0
                  };

                  break;

              case PLUSSIGN$2:
                  tokenizer.pos++;

                  range = {
                      min: 1,
                      max: 0
                  };

                  break;

              case QUESTIONMARK$1:
                  tokenizer.pos++;

                  range = {
                      min: 0,
                      max: 1
                  };

                  break;

              case NUMBERSIGN:
                  tokenizer.pos++;

                  comma = true;

                  if (tokenizer.charCode() === LEFTCURLYBRACKET) {
                      range = readMultiplierRange(tokenizer);
                  } else {
                      range = {
                          min: 1,
                          max: 0
                      };
                  }

                  break;

              case LEFTCURLYBRACKET:
                  range = readMultiplierRange(tokenizer);
                  break;

              default:
                  return null;
          }

          return {
              type: 'Multiplier',
              comma: comma,
              min: range.min,
              max: range.max,
              term: null
          };
      }

      function maybeMultiplied(tokenizer, node) {
          var multiplier = readMultiplier(tokenizer);

          if (multiplier !== null) {
              multiplier.term = node;
              return multiplier;
          }

          return node;
      }

      function maybeToken(tokenizer) {
          var ch = tokenizer.peek();

          if (ch === '') {
              return null;
          }

          return {
              type: 'Token',
              value: ch
          };
      }

      function readProperty(tokenizer) {
          var name;

          tokenizer.eat(LESSTHANSIGN);
          tokenizer.eat(APOSTROPHE);

          name = scanWord(tokenizer);

          tokenizer.eat(APOSTROPHE);
          tokenizer.eat(GREATERTHANSIGN);

          return maybeMultiplied(tokenizer, {
              type: 'Property',
              name: name
          });
      }

      // https://drafts.csswg.org/css-values-3/#numeric-ranges
      // 4.1. Range Restrictions and Range Definition Notation
      //
      // Range restrictions can be annotated in the numeric type notation using CSS bracketed
      // range notation—[min,max]—within the angle brackets, after the identifying keyword,
      // indicating a closed range between (and including) min and max.
      // For example, <integer [0, 10]> indicates an integer between 0 and 10, inclusive.
      function readTypeRange(tokenizer) {
          // use null for Infinity to make AST format JSON serializable/deserializable
          var min = null; // -Infinity
          var max = null; // Infinity
          var sign = 1;

          tokenizer.eat(LEFTSQUAREBRACKET);

          if (tokenizer.charCode() === HYPERMINUS) {
              tokenizer.peek();
              sign = -1;
          }

          if (sign == -1 && tokenizer.charCode() === INFINITY) {
              tokenizer.peek();
          } else {
              min = sign * Number(scanNumber(tokenizer));
          }

          scanSpaces(tokenizer);
          tokenizer.eat(COMMA);
          scanSpaces(tokenizer);

          if (tokenizer.charCode() === INFINITY) {
              tokenizer.peek();
          } else {
              sign = 1;

              if (tokenizer.charCode() === HYPERMINUS) {
                  tokenizer.peek();
                  sign = -1;
              }

              max = sign * Number(scanNumber(tokenizer));
          }

          tokenizer.eat(RIGHTSQUAREBRACKET);

          // If no range is indicated, either by using the bracketed range notation
          // or in the property description, then [−∞,∞] is assumed.
          if (min === null && max === null) {
              return null;
          }

          return {
              type: 'Range',
              min: min,
              max: max
          };
      }

      function readType(tokenizer) {
          var name;
          var opts = null;

          tokenizer.eat(LESSTHANSIGN);
          name = scanWord(tokenizer);

          if (tokenizer.charCode() === LEFTPARENTHESIS &&
              tokenizer.nextCharCode() === RIGHTPARENTHESIS) {
              tokenizer.pos += 2;
              name += '()';
          }

          if (tokenizer.charCodeAt(tokenizer.findWsEnd(tokenizer.pos)) === LEFTSQUAREBRACKET) {
              scanSpaces(tokenizer);
              opts = readTypeRange(tokenizer);
          }

          tokenizer.eat(GREATERTHANSIGN);

          return maybeMultiplied(tokenizer, {
              type: 'Type',
              name: name,
              opts: opts
          });
      }

      function readKeywordOrFunction(tokenizer) {
          var name;

          name = scanWord(tokenizer);

          if (tokenizer.charCode() === LEFTPARENTHESIS) {
              tokenizer.pos++;

              return {
                  type: 'Function',
                  name: name
              };
          }

          return maybeMultiplied(tokenizer, {
              type: 'Keyword',
              name: name
          });
      }

      function regroupTerms(terms, combinators) {
          function createGroup(terms, combinator) {
              return {
                  type: 'Group',
                  terms: terms,
                  combinator: combinator,
                  disallowEmpty: false,
                  explicit: false
              };
          }

          combinators = Object.keys(combinators).sort(function(a, b) {
              return COMBINATOR_PRECEDENCE[a] - COMBINATOR_PRECEDENCE[b];
          });

          while (combinators.length > 0) {
              var combinator = combinators.shift();
              for (var i = 0, subgroupStart = 0; i < terms.length; i++) {
                  var term = terms[i];
                  if (term.type === 'Combinator') {
                      if (term.value === combinator) {
                          if (subgroupStart === -1) {
                              subgroupStart = i - 1;
                          }
                          terms.splice(i, 1);
                          i--;
                      } else {
                          if (subgroupStart !== -1 && i - subgroupStart > 1) {
                              terms.splice(
                                  subgroupStart,
                                  i - subgroupStart,
                                  createGroup(terms.slice(subgroupStart, i), combinator)
                              );
                              i = subgroupStart + 1;
                          }
                          subgroupStart = -1;
                      }
                  }
              }

              if (subgroupStart !== -1 && combinators.length) {
                  terms.splice(
                      subgroupStart,
                      i - subgroupStart,
                      createGroup(terms.slice(subgroupStart, i), combinator)
                  );
              }
          }

          return combinator;
      }

      function readImplicitGroup(tokenizer) {
          var terms = [];
          var combinators = {};
          var token;
          var prevToken = null;
          var prevTokenPos = tokenizer.pos;

          while (token = peek(tokenizer)) {
              if (token.type !== 'Spaces') {
                  if (token.type === 'Combinator') {
                      // check for combinator in group beginning and double combinator sequence
                      if (prevToken === null || prevToken.type === 'Combinator') {
                          tokenizer.pos = prevTokenPos;
                          tokenizer.error('Unexpected combinator');
                      }

                      combinators[token.value] = true;
                  } else if (prevToken !== null && prevToken.type !== 'Combinator') {
                      combinators[' '] = true;  // a b
                      terms.push({
                          type: 'Combinator',
                          value: ' '
                      });
                  }

                  terms.push(token);
                  prevToken = token;
                  prevTokenPos = tokenizer.pos;
              }
          }

          // check for combinator in group ending
          if (prevToken !== null && prevToken.type === 'Combinator') {
              tokenizer.pos -= prevTokenPos;
              tokenizer.error('Unexpected combinator');
          }

          return {
              type: 'Group',
              terms: terms,
              combinator: regroupTerms(terms, combinators) || ' ',
              disallowEmpty: false,
              explicit: false
          };
      }

      function readGroup(tokenizer) {
          var result;

          tokenizer.eat(LEFTSQUAREBRACKET);
          result = readImplicitGroup(tokenizer);
          tokenizer.eat(RIGHTSQUAREBRACKET);

          result.explicit = true;

          if (tokenizer.charCode() === EXCLAMATIONMARK) {
              tokenizer.pos++;
              result.disallowEmpty = true;
          }

          return result;
      }

      function peek(tokenizer) {
          var code = tokenizer.charCode();

          if (code < 128 && NAME_CHAR[code] === 1) {
              return readKeywordOrFunction(tokenizer);
          }

          switch (code) {
              case RIGHTSQUAREBRACKET:
                  // don't eat, stop scan a group
                  break;

              case LEFTSQUAREBRACKET:
                  return maybeMultiplied(tokenizer, readGroup(tokenizer));

              case LESSTHANSIGN:
                  return tokenizer.nextCharCode() === APOSTROPHE
                      ? readProperty(tokenizer)
                      : readType(tokenizer);

              case VERTICALLINE:
                  return {
                      type: 'Combinator',
                      value: tokenizer.substringToPos(
                          tokenizer.nextCharCode() === VERTICALLINE
                              ? tokenizer.pos + 2
                              : tokenizer.pos + 1
                      )
                  };

              case AMPERSAND:
                  tokenizer.pos++;
                  tokenizer.eat(AMPERSAND);

                  return {
                      type: 'Combinator',
                      value: '&&'
                  };

              case COMMA:
                  tokenizer.pos++;
                  return {
                      type: 'Comma'
                  };

              case APOSTROPHE:
                  return maybeMultiplied(tokenizer, {
                      type: 'String',
                      value: scanString(tokenizer)
                  });

              case SPACE$1:
              case TAB$1:
              case N$2:
              case R$1:
              case F$1:
                  return {
                      type: 'Spaces',
                      value: scanSpaces(tokenizer)
                  };

              case COMMERCIALAT:
                  code = tokenizer.nextCharCode();

                  if (code < 128 && NAME_CHAR[code] === 1) {
                      tokenizer.pos++;
                      return {
                          type: 'AtKeyword',
                          name: scanWord(tokenizer)
                      };
                  }

                  return maybeToken(tokenizer);

              case ASTERISK:
              case PLUSSIGN$2:
              case QUESTIONMARK$1:
              case NUMBERSIGN:
              case EXCLAMATIONMARK:
                  // prohibited tokens (used as a multiplier start)
                  break;

              case LEFTCURLYBRACKET:
                  // LEFTCURLYBRACKET is allowed since mdn/data uses it w/o quoting
                  // check next char isn't a number, because it's likely a disjoined multiplier
                  code = tokenizer.nextCharCode();

                  if (code < 48 || code > 57) {
                      return maybeToken(tokenizer);
                  }

                  break;

              default:
                  return maybeToken(tokenizer);
          }
      }

      function parse(source) {
          var tokenizer = new tokenizer$1(source);
          var result = readImplicitGroup(tokenizer);

          if (tokenizer.pos !== source.length) {
              tokenizer.error('Unexpected input');
          }

          // reduce redundant groups with single group term
          if (result.terms.length === 1 && result.terms[0].type === 'Group') {
              result = result.terms[0];
          }

          return result;
      }

      // warm up parse to elimitate code branches that never execute
      // fix soft deoptimizations (insufficient type feedback)
      parse('[a&&<b>#|<\'c\'>*||e() f{2} /,(% g#{1,2} h{2,})]!');

      var parse_1 = parse;

      var noop$1 = function() {};

      function ensureFunction(value) {
          return typeof value === 'function' ? value : noop$1;
      }

      var walk = function(node, options, context) {
          function walk(node) {
              enter.call(context, node);

              switch (node.type) {
                  case 'Group':
                      node.terms.forEach(walk);
                      break;

                  case 'Multiplier':
                      walk(node.term);
                      break;

                  case 'Type':
                  case 'Property':
                  case 'Keyword':
                  case 'AtKeyword':
                  case 'Function':
                  case 'String':
                  case 'Token':
                  case 'Comma':
                      break;

                  default:
                      throw new Error('Unknown type: ' + node.type);
              }

              leave.call(context, node);
          }

          var enter = noop$1;
          var leave = noop$1;

          if (typeof options === 'function') {
              enter = options;
          } else if (options) {
              enter = ensureFunction(options.enter);
              leave = ensureFunction(options.leave);
          }

          if (enter === noop$1 && leave === noop$1) {
              throw new Error('Neither `enter` nor `leave` walker handler is set or both aren\'t a function');
          }

          walk(node);
      };

      var tokenStream = new TokenStream_1();
      var astToTokens = {
          decorator: function(handlers) {
              var curNode = null;
              var prev = { len: 0, node: null };
              var nodes = [prev];
              var buffer = '';

              return {
                  children: handlers.children,
                  node: function(node) {
                      var tmp = curNode;
                      curNode = node;
                      handlers.node.call(this, node);
                      curNode = tmp;
                  },
                  chunk: function(chunk) {
                      buffer += chunk;
                      if (prev.node !== curNode) {
                          nodes.push({
                              len: chunk.length,
                              node: curNode
                          });
                      } else {
                          prev.len += chunk.length;
                      }
                  },
                  result: function() {
                      return prepareTokens(buffer, nodes);
                  }
              };
          }
      };

      function prepareTokens(str, nodes) {
          var tokens = [];
          var nodesOffset = 0;
          var nodesIndex = 0;
          var currentNode = nodes ? nodes[nodesIndex].node : null;

          tokenizer(str, tokenStream);

          while (!tokenStream.eof) {
              if (nodes) {
                  while (nodesIndex < nodes.length && nodesOffset + nodes[nodesIndex].len <= tokenStream.tokenStart) {
                      nodesOffset += nodes[nodesIndex++].len;
                      currentNode = nodes[nodesIndex].node;
                  }
              }

              tokens.push({
                  type: tokenStream.tokenType,
                  value: tokenStream.getTokenValue(),
                  index: tokenStream.tokenIndex, // TODO: remove it, temporary solution
                  balance: tokenStream.balance[tokenStream.tokenIndex], // TODO: remove it, temporary solution
                  node: currentNode
              });
              tokenStream.next();
              // console.log({ ...tokens[tokens.length - 1], node: undefined });
          }

          return tokens;
      }

      var prepareTokens_1 = function(value, syntax) {
          if (typeof value === 'string') {
              return prepareTokens(value, null);
          }

          return syntax.generate(value, astToTokens);
      };

      var MATCH = { type: 'Match' };
      var MISMATCH = { type: 'Mismatch' };
      var DISALLOW_EMPTY = { type: 'DisallowEmpty' };
      var LEFTPARENTHESIS$1 = 40;  // (
      var RIGHTPARENTHESIS$1 = 41; // )

      function createCondition(match, thenBranch, elseBranch) {
          // reduce node count
          if (thenBranch === MATCH && elseBranch === MISMATCH) {
              return match;
          }

          if (match === MATCH && thenBranch === MATCH && elseBranch === MATCH) {
              return match;
          }

          if (match.type === 'If' && match.else === MISMATCH && thenBranch === MATCH) {
              thenBranch = match.then;
              match = match.match;
          }

          return {
              type: 'If',
              match: match,
              then: thenBranch,
              else: elseBranch
          };
      }

      function isFunctionType(name) {
          return (
              name.length > 2 &&
              name.charCodeAt(name.length - 2) === LEFTPARENTHESIS$1 &&
              name.charCodeAt(name.length - 1) === RIGHTPARENTHESIS$1
          );
      }

      function isEnumCapatible(term) {
          return (
              term.type === 'Keyword' ||
              term.type === 'AtKeyword' ||
              term.type === 'Function' ||
              term.type === 'Type' && isFunctionType(term.name)
          );
      }

      function buildGroupMatchGraph(combinator, terms, atLeastOneTermMatched) {
          switch (combinator) {
              case ' ':
                  // Juxtaposing components means that all of them must occur, in the given order.
                  //
                  // a b c
                  // =
                  // match a
                  //   then match b
                  //     then match c
                  //       then MATCH
                  //       else MISMATCH
                  //     else MISMATCH
                  //   else MISMATCH
                  var result = MATCH;

                  for (var i = terms.length - 1; i >= 0; i--) {
                      var term = terms[i];

                      result = createCondition(
                          term,
                          result,
                          MISMATCH
                      );
                  }
                  return result;

              case '|':
                  // A bar (|) separates two or more alternatives: exactly one of them must occur.
                  //
                  // a | b | c
                  // =
                  // match a
                  //   then MATCH
                  //   else match b
                  //     then MATCH
                  //     else match c
                  //       then MATCH
                  //       else MISMATCH

                  var result = MISMATCH;
                  var map = null;

                  for (var i = terms.length - 1; i >= 0; i--) {
                      var term = terms[i];

                      // reduce sequence of keywords into a Enum
                      if (isEnumCapatible(term)) {
                          if (map === null && i > 0 && isEnumCapatible(terms[i - 1])) {
                              map = Object.create(null);
                              result = createCondition(
                                  {
                                      type: 'Enum',
                                      map: map
                                  },
                                  MATCH,
                                  result
                              );
                          }

                          if (map !== null) {
                              var key = (isFunctionType(term.name) ? term.name.slice(0, -1) : term.name).toLowerCase();
                              if (key in map === false) {
                                  map[key] = term;
                                  continue;
                              }
                          }
                      }

                      map = null;

                      // create a new conditonal node
                      result = createCondition(
                          term,
                          MATCH,
                          result
                      );
                  }
                  return result;

              case '&&':
                  // A double ampersand (&&) separates two or more components,
                  // all of which must occur, in any order.

                  // Use MatchOnce for groups with a large number of terms,
                  // since &&-groups produces at least N!-node trees
                  if (terms.length > 5) {
                      return {
                          type: 'MatchOnce',
                          terms: terms,
                          all: true
                      };
                  }

                  // Use a combination tree for groups with small number of terms
                  //
                  // a && b && c
                  // =
                  // match a
                  //   then [b && c]
                  //   else match b
                  //     then [a && c]
                  //     else match c
                  //       then [a && b]
                  //       else MISMATCH
                  //
                  // a && b
                  // =
                  // match a
                  //   then match b
                  //     then MATCH
                  //     else MISMATCH
                  //   else match b
                  //     then match a
                  //       then MATCH
                  //       else MISMATCH
                  //     else MISMATCH
                  var result = MISMATCH;

                  for (var i = terms.length - 1; i >= 0; i--) {
                      var term = terms[i];
                      var thenClause;

                      if (terms.length > 1) {
                          thenClause = buildGroupMatchGraph(
                              combinator,
                              terms.filter(function(newGroupTerm) {
                                  return newGroupTerm !== term;
                              }),
                              false
                          );
                      } else {
                          thenClause = MATCH;
                      }

                      result = createCondition(
                          term,
                          thenClause,
                          result
                      );
                  }
                  return result;

              case '||':
                  // A double bar (||) separates two or more options:
                  // one or more of them must occur, in any order.

                  // Use MatchOnce for groups with a large number of terms,
                  // since ||-groups produces at least N!-node trees
                  if (terms.length > 5) {
                      return {
                          type: 'MatchOnce',
                          terms: terms,
                          all: false
                      };
                  }

                  // Use a combination tree for groups with small number of terms
                  //
                  // a || b || c
                  // =
                  // match a
                  //   then [b || c]
                  //   else match b
                  //     then [a || c]
                  //     else match c
                  //       then [a || b]
                  //       else MISMATCH
                  //
                  // a || b
                  // =
                  // match a
                  //   then match b
                  //     then MATCH
                  //     else MATCH
                  //   else match b
                  //     then match a
                  //       then MATCH
                  //       else MATCH
                  //     else MISMATCH
                  var result = atLeastOneTermMatched ? MATCH : MISMATCH;

                  for (var i = terms.length - 1; i >= 0; i--) {
                      var term = terms[i];
                      var thenClause;

                      if (terms.length > 1) {
                          thenClause = buildGroupMatchGraph(
                              combinator,
                              terms.filter(function(newGroupTerm) {
                                  return newGroupTerm !== term;
                              }),
                              true
                          );
                      } else {
                          thenClause = MATCH;
                      }

                      result = createCondition(
                          term,
                          thenClause,
                          result
                      );
                  }
                  return result;
          }
      }

      function buildMultiplierMatchGraph(node) {
          var result = MATCH;
          var matchTerm = buildMatchGraph(node.term);

          if (node.max === 0) {
              // disable repeating of empty match to prevent infinite loop
              matchTerm = createCondition(
                  matchTerm,
                  DISALLOW_EMPTY,
                  MISMATCH
              );

              // an occurrence count is not limited, make a cycle;
              // to collect more terms on each following matching mismatch
              result = createCondition(
                  matchTerm,
                  null, // will be a loop
                  MISMATCH
              );

              result.then = createCondition(
                  MATCH,
                  MATCH,
                  result // make a loop
              );

              if (node.comma) {
                  result.then.else = createCondition(
                      { type: 'Comma', syntax: node },
                      result,
                      MISMATCH
                  );
              }
          } else {
              // create a match node chain for [min .. max] interval with optional matches
              for (var i = node.min || 1; i <= node.max; i++) {
                  if (node.comma && result !== MATCH) {
                      result = createCondition(
                          { type: 'Comma', syntax: node },
                          result,
                          MISMATCH
                      );
                  }

                  result = createCondition(
                      matchTerm,
                      createCondition(
                          MATCH,
                          MATCH,
                          result
                      ),
                      MISMATCH
                  );
              }
          }

          if (node.min === 0) {
              // allow zero match
              result = createCondition(
                  MATCH,
                  MATCH,
                  result
              );
          } else {
              // create a match node chain to collect [0 ... min - 1] required matches
              for (var i = 0; i < node.min - 1; i++) {
                  if (node.comma && result !== MATCH) {
                      result = createCondition(
                          { type: 'Comma', syntax: node },
                          result,
                          MISMATCH
                      );
                  }

                  result = createCondition(
                      matchTerm,
                      result,
                      MISMATCH
                  );
              }
          }

          return result;
      }

      function buildMatchGraph(node) {
          if (typeof node === 'function') {
              return {
                  type: 'Generic',
                  fn: node
              };
          }

          switch (node.type) {
              case 'Group':
                  var result = buildGroupMatchGraph(
                      node.combinator,
                      node.terms.map(buildMatchGraph),
                      false
                  );

                  if (node.disallowEmpty) {
                      result = createCondition(
                          result,
                          DISALLOW_EMPTY,
                          MISMATCH
                      );
                  }

                  return result;

              case 'Multiplier':
                  return buildMultiplierMatchGraph(node);

              case 'Type':
              case 'Property':
                  return {
                      type: node.type,
                      name: node.name,
                      syntax: node
                  };

              case 'Keyword':
                  return {
                      type: node.type,
                      name: node.name.toLowerCase(),
                      syntax: node
                  };

              case 'AtKeyword':
                  return {
                      type: node.type,
                      name: '@' + node.name.toLowerCase(),
                      syntax: node
                  };

              case 'Function':
                  return {
                      type: node.type,
                      name: node.name.toLowerCase() + '(',
                      syntax: node
                  };

              case 'String':
                  // convert a one char length String to a Token
                  if (node.value.length === 3) {
                      return {
                          type: 'Token',
                          value: node.value.charAt(1),
                          syntax: node
                      };
                  }

                  // otherwise use it as is
                  return {
                      type: node.type,
                      value: node.value.substr(1, node.value.length - 2).replace(/\\'/g, '\''),
                      syntax: node
                  };

              case 'Token':
                  return {
                      type: node.type,
                      value: node.value,
                      syntax: node
                  };

              case 'Comma':
                  return {
                      type: node.type,
                      syntax: node
                  };

              default:
                  throw new Error('Unknown node type:', node.type);
          }
      }

      var matchGraph = {
          MATCH: MATCH,
          MISMATCH: MISMATCH,
          DISALLOW_EMPTY: DISALLOW_EMPTY,
          buildMatchGraph: function(syntaxTree, ref) {
              if (typeof syntaxTree === 'string') {
                  syntaxTree = parse_1(syntaxTree);
              }

              return {
                  type: 'MatchGraph',
                  match: buildMatchGraph(syntaxTree),
                  syntax: ref || null,
                  source: syntaxTree
              };
          }
      };

      var hasOwnProperty$1 = Object.prototype.hasOwnProperty;

      var MATCH$1 = matchGraph.MATCH;
      var MISMATCH$1 = matchGraph.MISMATCH;
      var DISALLOW_EMPTY$1 = matchGraph.DISALLOW_EMPTY;
      var TYPE$6 = _const.TYPE;

      var STUB = 0;
      var TOKEN = 1;
      var OPEN_SYNTAX = 2;
      var CLOSE_SYNTAX = 3;

      var EXIT_REASON_MATCH = 'Match';
      var EXIT_REASON_MISMATCH = 'Mismatch';
      var EXIT_REASON_ITERATION_LIMIT = 'Maximum iteration number exceeded (please fill an issue on https://github.com/csstree/csstree/issues)';

      var ITERATION_LIMIT = 15000;
      var totalIterationCount = 0;

      function reverseList(list) {
          var prev = null;
          var next = null;
          var item = list;

          while (item !== null) {
              next = item.prev;
              item.prev = prev;
              prev = item;
              item = next;
          }

          return prev;
      }

      function areStringsEqualCaseInsensitive(testStr, referenceStr) {
          if (testStr.length !== referenceStr.length) {
              return false;
          }

          for (var i = 0; i < testStr.length; i++) {
              var testCode = testStr.charCodeAt(i);
              var referenceCode = referenceStr.charCodeAt(i);

              // testCode.toLowerCase() for U+0041 LATIN CAPITAL LETTER A (A) .. U+005A LATIN CAPITAL LETTER Z (Z).
              if (testCode >= 0x0041 && testCode <= 0x005A) {
                  testCode = testCode | 32;
              }

              if (testCode !== referenceCode) {
                  return false;
              }
          }

          return true;
      }

      function isContextEdgeDelim(token) {
          if (token.type !== TYPE$6.Delim) {
              return false;
          }

          // Fix matching for unicode-range: U+30??, U+FF00-FF9F
          // Probably we need to check out previous match instead
          return token.value !== '?';
      }

      function isCommaContextStart(token) {
          if (token === null) {
              return true;
          }

          return (
              token.type === TYPE$6.Comma ||
              token.type === TYPE$6.Function ||
              token.type === TYPE$6.LeftParenthesis ||
              token.type === TYPE$6.LeftSquareBracket ||
              token.type === TYPE$6.LeftCurlyBracket ||
              isContextEdgeDelim(token)
          );
      }

      function isCommaContextEnd(token) {
          if (token === null) {
              return true;
          }

          return (
              token.type === TYPE$6.RightParenthesis ||
              token.type === TYPE$6.RightSquareBracket ||
              token.type === TYPE$6.RightCurlyBracket ||
              token.type === TYPE$6.Delim
          );
      }

      function internalMatch(tokens, state, syntaxes) {
          function moveToNextToken() {
              do {
                  tokenIndex++;
                  token = tokenIndex < tokens.length ? tokens[tokenIndex] : null;
              } while (token !== null && (token.type === TYPE$6.WhiteSpace || token.type === TYPE$6.Comment));
          }

          function getNextToken(offset) {
              var nextIndex = tokenIndex + offset;

              return nextIndex < tokens.length ? tokens[nextIndex] : null;
          }

          function stateSnapshotFromSyntax(nextState, prev) {
              return {
                  nextState: nextState,
                  matchStack: matchStack,
                  syntaxStack: syntaxStack,
                  thenStack: thenStack,
                  tokenIndex: tokenIndex,
                  prev: prev
              };
          }

          function pushThenStack(nextState) {
              thenStack = {
                  nextState: nextState,
                  matchStack: matchStack,
                  syntaxStack: syntaxStack,
                  prev: thenStack
              };
          }

          function pushElseStack(nextState) {
              elseStack = stateSnapshotFromSyntax(nextState, elseStack);
          }

          function addTokenToMatch() {
              matchStack = {
                  type: TOKEN,
                  syntax: state.syntax,
                  token: token,
                  prev: matchStack
              };

              moveToNextToken();
              syntaxStash = null;

              if (tokenIndex > longestMatch) {
                  longestMatch = tokenIndex;
              }
          }

          function openSyntax() {
              syntaxStack = {
                  syntax: state.syntax,
                  opts: state.syntax.opts || (syntaxStack !== null && syntaxStack.opts) || null,
                  prev: syntaxStack
              };

              matchStack = {
                  type: OPEN_SYNTAX,
                  syntax: state.syntax,
                  token: matchStack.token,
                  prev: matchStack
              };
          }

          function closeSyntax() {
              if (matchStack.type === OPEN_SYNTAX) {
                  matchStack = matchStack.prev;
              } else {
                  matchStack = {
                      type: CLOSE_SYNTAX,
                      syntax: syntaxStack.syntax,
                      token: matchStack.token,
                      prev: matchStack
                  };
              }

              syntaxStack = syntaxStack.prev;
          }

          var syntaxStack = null;
          var thenStack = null;
          var elseStack = null;

          // null – stashing allowed, nothing stashed
          // false – stashing disabled, nothing stashed
          // anithing else – fail stashable syntaxes, some syntax stashed
          var syntaxStash = null;

          var iterationCount = 0; // count iterations and prevent infinite loop
          var exitReason = null;

          var token = null;
          var tokenIndex = -1;
          var longestMatch = 0;
          var matchStack = {
              type: STUB,
              syntax: null,
              token: null,
              prev: null
          };

          moveToNextToken();

          while (exitReason === null && ++iterationCount < ITERATION_LIMIT) {
              // function mapList(list, fn) {
              //     var result = [];
              //     while (list) {
              //         result.unshift(fn(list));
              //         list = list.prev;
              //     }
              //     return result;
              // }
              // console.log('--\n',
              //     '#' + iterationCount,
              //     require('util').inspect({
              //         match: mapList(matchStack, x => x.type === TOKEN ? x.token && x.token.value : x.syntax ? ({ [OPEN_SYNTAX]: '<', [CLOSE_SYNTAX]: '</' }[x.type] || x.type) + '!' + x.syntax.name : null),
              //         token: token && token.value,
              //         tokenIndex,
              //         syntax: syntax.type + (syntax.id ? ' #' + syntax.id : '')
              //     }, { depth: null })
              // );
              switch (state.type) {
                  case 'Match':
                      if (thenStack === null) {
                          // turn to MISMATCH when some tokens left unmatched
                          if (token !== null) {
                              // doesn't mismatch if just one token left and it's an IE hack
                              if (tokenIndex !== tokens.length - 1 || (token.value !== '\\0' && token.value !== '\\9')) {
                                  state = MISMATCH$1;
                                  break;
                              }
                          }

                          // break the main loop, return a result - MATCH
                          exitReason = EXIT_REASON_MATCH;
                          break;
                      }

                      // go to next syntax (`then` branch)
                      state = thenStack.nextState;

                      // check match is not empty
                      if (state === DISALLOW_EMPTY$1) {
                          if (thenStack.matchStack === matchStack) {
                              state = MISMATCH$1;
                              break;
                          } else {
                              state = MATCH$1;
                          }
                      }

                      // close syntax if needed
                      while (thenStack.syntaxStack !== syntaxStack) {
                          closeSyntax();
                      }

                      // pop stack
                      thenStack = thenStack.prev;
                      break;

                  case 'Mismatch':
                      // when some syntax is stashed
                      if (syntaxStash !== null && syntaxStash !== false) {
                          // there is no else branches or a branch reduce match stack
                          if (elseStack === null || tokenIndex > elseStack.tokenIndex) {
                              // restore state from the stash
                              elseStack = syntaxStash;
                              syntaxStash = false; // disable stashing
                          }
                      } else if (elseStack === null) {
                          // no else branches -> break the main loop
                          // return a result - MISMATCH
                          exitReason = EXIT_REASON_MISMATCH;
                          break;
                      }

                      // go to next syntax (`else` branch)
                      state = elseStack.nextState;

                      // restore all the rest stack states
                      thenStack = elseStack.thenStack;
                      syntaxStack = elseStack.syntaxStack;
                      matchStack = elseStack.matchStack;
                      tokenIndex = elseStack.tokenIndex;
                      token = tokenIndex < tokens.length ? tokens[tokenIndex] : null;

                      // pop stack
                      elseStack = elseStack.prev;
                      break;

                  case 'MatchGraph':
                      state = state.match;
                      break;

                  case 'If':
                      // IMPORTANT: else stack push must go first,
                      // since it stores the state of thenStack before changes
                      if (state.else !== MISMATCH$1) {
                          pushElseStack(state.else);
                      }

                      if (state.then !== MATCH$1) {
                          pushThenStack(state.then);
                      }

                      state = state.match;
                      break;

                  case 'MatchOnce':
                      state = {
                          type: 'MatchOnceBuffer',
                          syntax: state,
                          index: 0,
                          mask: 0
                      };
                      break;

                  case 'MatchOnceBuffer':
                      var terms = state.syntax.terms;

                      if (state.index === terms.length) {
                          // no matches at all or it's required all terms to be matched
                          if (state.mask === 0 || state.syntax.all) {
                              state = MISMATCH$1;
                              break;
                          }

                          // a partial match is ok
                          state = MATCH$1;
                          break;
                      }

                      // all terms are matched
                      if (state.mask === (1 << terms.length) - 1) {
                          state = MATCH$1;
                          break;
                      }

                      for (; state.index < terms.length; state.index++) {
                          var matchFlag = 1 << state.index;

                          if ((state.mask & matchFlag) === 0) {
                              // IMPORTANT: else stack push must go first,
                              // since it stores the state of thenStack before changes
                              pushElseStack(state);
                              pushThenStack({
                                  type: 'AddMatchOnce',
                                  syntax: state.syntax,
                                  mask: state.mask | matchFlag
                              });

                              // match
                              state = terms[state.index++];
                              break;
                          }
                      }
                      break;

                  case 'AddMatchOnce':
                      state = {
                          type: 'MatchOnceBuffer',
                          syntax: state.syntax,
                          index: 0,
                          mask: state.mask
                      };
                      break;

                  case 'Enum':
                      if (token !== null) {
                          var name = token.value.toLowerCase();

                          // drop \0 and \9 hack from keyword name
                          if (name.indexOf('\\') !== -1) {
                              name = name.replace(/\\[09].*$/, '');
                          }

                          if (hasOwnProperty$1.call(state.map, name)) {
                              state = state.map[name];
                              break;
                          }
                      }

                      state = MISMATCH$1;
                      break;

                  case 'Generic':
                      var opts = syntaxStack !== null ? syntaxStack.opts : null;
                      var lastTokenIndex = tokenIndex + Math.floor(state.fn(token, getNextToken, opts));

                      if (!isNaN(lastTokenIndex) && lastTokenIndex > tokenIndex) {
                          while (tokenIndex < lastTokenIndex) {
                              addTokenToMatch();
                          }

                          state = MATCH$1;
                      } else {
                          state = MISMATCH$1;
                      }

                      break;

                  case 'Type':
                  case 'Property':
                      var syntaxDict = state.type === 'Type' ? 'types' : 'properties';
                      var dictSyntax = hasOwnProperty$1.call(syntaxes, syntaxDict) ? syntaxes[syntaxDict][state.name] : null;

                      if (!dictSyntax || !dictSyntax.match) {
                          throw new Error(
                              'Bad syntax reference: ' +
                              (state.type === 'Type'
                                  ? '<' + state.name + '>'
                                  : '<\'' + state.name + '\'>')
                          );
                      }

                      // stash a syntax for types with low priority
                      if (syntaxStash !== false && token !== null && state.type === 'Type') {
                          var lowPriorityMatching =
                              // https://drafts.csswg.org/css-values-4/#custom-idents
                              // When parsing positionally-ambiguous keywords in a property value, a <custom-ident> production
                              // can only claim the keyword if no other unfulfilled production can claim it.
                              (state.name === 'custom-ident' && token.type === TYPE$6.Ident) ||

                              // https://drafts.csswg.org/css-values-4/#lengths
                              // ... if a `0` could be parsed as either a <number> or a <length> in a property (such as line-height),
                              // it must parse as a <number>
                              (state.name === 'length' && token.value === '0');

                          if (lowPriorityMatching) {
                              if (syntaxStash === null) {
                                  syntaxStash = stateSnapshotFromSyntax(state, elseStack);
                              }

                              state = MISMATCH$1;
                              break;
                          }
                      }

                      openSyntax();
                      state = dictSyntax.match;
                      break;

                  case 'Keyword':
                      var name = state.name;

                      if (token !== null) {
                          var keywordName = token.value;

                          // drop \0 and \9 hack from keyword name
                          if (keywordName.indexOf('\\') !== -1) {
                              keywordName = keywordName.replace(/\\[09].*$/, '');
                          }

                          if (areStringsEqualCaseInsensitive(keywordName, name)) {
                              addTokenToMatch();
                              state = MATCH$1;
                              break;
                          }
                      }

                      state = MISMATCH$1;
                      break;

                  case 'AtKeyword':
                  case 'Function':
                      if (token !== null && areStringsEqualCaseInsensitive(token.value, state.name)) {
                          addTokenToMatch();
                          state = MATCH$1;
                          break;
                      }

                      state = MISMATCH$1;
                      break;

                  case 'Token':
                      if (token !== null && token.value === state.value) {
                          addTokenToMatch();
                          state = MATCH$1;
                          break;
                      }

                      state = MISMATCH$1;
                      break;

                  case 'Comma':
                      if (token !== null && token.type === TYPE$6.Comma) {
                          if (isCommaContextStart(matchStack.token)) {
                              state = MISMATCH$1;
                          } else {
                              addTokenToMatch();
                              state = isCommaContextEnd(token) ? MISMATCH$1 : MATCH$1;
                          }
                      } else {
                          state = isCommaContextStart(matchStack.token) || isCommaContextEnd(token) ? MATCH$1 : MISMATCH$1;
                      }

                      break;

                  case 'String':
                      var string = '';

                      for (var lastTokenIndex = tokenIndex; lastTokenIndex < tokens.length && string.length < state.value.length; lastTokenIndex++) {
                          string += tokens[lastTokenIndex].value;
                      }

                      if (areStringsEqualCaseInsensitive(string, state.value)) {
                          while (tokenIndex < lastTokenIndex) {
                              addTokenToMatch();
                          }

                          state = MATCH$1;
                      } else {
                          state = MISMATCH$1;
                      }

                      break;

                  default:
                      throw new Error('Unknown node type: ' + state.type);
              }
          }

          totalIterationCount += iterationCount;

          switch (exitReason) {
              case null:
                  console.warn('[csstree-match] BREAK after ' + ITERATION_LIMIT + ' iterations');
                  exitReason = EXIT_REASON_ITERATION_LIMIT;
                  matchStack = null;
                  break;

              case EXIT_REASON_MATCH:
                  while (syntaxStack !== null) {
                      closeSyntax();
                  }
                  break;

              default:
                  matchStack = null;
          }

          return {
              tokens: tokens,
              reason: exitReason,
              iterations: iterationCount,
              match: matchStack,
              longestMatch: longestMatch
          };
      }

      function matchAsList(tokens, matchGraph, syntaxes) {
          var matchResult = internalMatch(tokens, matchGraph, syntaxes || {});

          if (matchResult.match !== null) {
              var item = reverseList(matchResult.match).prev;

              matchResult.match = [];

              while (item !== null) {
                  switch (item.type) {
                      case STUB:
                          break;

                      case OPEN_SYNTAX:
                      case CLOSE_SYNTAX:
                          matchResult.match.push({
                              type: item.type,
                              syntax: item.syntax
                          });
                          break;

                      default:
                          matchResult.match.push({
                              token: item.token.value,
                              node: item.token.node
                          });
                          break;
                  }

                  item = item.prev;
              }
          }

          return matchResult;
      }

      function matchAsTree(tokens, matchGraph, syntaxes) {
          var matchResult = internalMatch(tokens, matchGraph, syntaxes || {});

          if (matchResult.match === null) {
              return matchResult;
          }

          var item = matchResult.match;
          var host = matchResult.match = {
              syntax: matchGraph.syntax || null,
              match: []
          };
          var hostStack = [host];

          // revert a list and start with 2nd item since 1st is a stub item
          item = reverseList(item).prev;

          // build a tree
          while (item !== null) {
              switch (item.type) {
                  case OPEN_SYNTAX:
                      host.match.push(host = {
                          syntax: item.syntax,
                          match: []
                      });
                      hostStack.push(host);
                      break;

                  case CLOSE_SYNTAX:
                      hostStack.pop();
                      host = hostStack[hostStack.length - 1];
                      break;

                  default:
                      host.match.push({
                          syntax: item.syntax || null,
                          token: item.token.value,
                          node: item.token.node
                      });
              }

              item = item.prev;
          }

          return matchResult;
      }

      var match = {
          matchAsList: matchAsList,
          matchAsTree: matchAsTree,
          getTotalIterationCount: function() {
              return totalIterationCount;
          }
      };

      function getTrace(node) {
          function shouldPutToTrace(syntax) {
              if (syntax === null) {
                  return false;
              }

              return (
                  syntax.type === 'Type' ||
                  syntax.type === 'Property' ||
                  syntax.type === 'Keyword'
              );
          }

          function hasMatch(matchNode) {
              if (Array.isArray(matchNode.match)) {
                  // use for-loop for better perfomance
                  for (var i = 0; i < matchNode.match.length; i++) {
                      if (hasMatch(matchNode.match[i])) {
                          if (shouldPutToTrace(matchNode.syntax)) {
                              result.unshift(matchNode.syntax);
                          }

                          return true;
                      }
                  }
              } else if (matchNode.node === node) {
                  result = shouldPutToTrace(matchNode.syntax)
                      ? [matchNode.syntax]
                      : [];

                  return true;
              }

              return false;
          }

          var result = null;

          if (this.matched !== null) {
              hasMatch(this.matched);
          }

          return result;
      }

      function testNode(match, node, fn) {
          var trace = getTrace.call(match, node);

          if (trace === null) {
              return false;
          }

          return trace.some(fn);
      }

      function isType(node, type) {
          return testNode(this, node, function(matchNode) {
              return matchNode.type === 'Type' && matchNode.name === type;
          });
      }

      function isProperty(node, property) {
          return testNode(this, node, function(matchNode) {
              return matchNode.type === 'Property' && matchNode.name === property;
          });
      }

      function isKeyword(node) {
          return testNode(this, node, function(matchNode) {
              return matchNode.type === 'Keyword';
          });
      }

      var trace = {
          getTrace: getTrace,
          isType: isType,
          isProperty: isProperty,
          isKeyword: isKeyword
      };

      function getFirstMatchNode(matchNode) {
          if ('node' in matchNode) {
              return matchNode.node;
          }

          return getFirstMatchNode(matchNode.match[0]);
      }

      function getLastMatchNode(matchNode) {
          if ('node' in matchNode) {
              return matchNode.node;
          }

          return getLastMatchNode(matchNode.match[matchNode.match.length - 1]);
      }

      function matchFragments(lexer, ast, match, type, name) {
          function findFragments(matchNode) {
              if (matchNode.syntax !== null &&
                  matchNode.syntax.type === type &&
                  matchNode.syntax.name === name) {
                  var start = getFirstMatchNode(matchNode);
                  var end = getLastMatchNode(matchNode);

                  lexer.syntax.walk(ast, function(node, item, list) {
                      if (node === start) {
                          var nodes = new List_1();

                          do {
                              nodes.appendData(item.data);

                              if (item.data === end) {
                                  break;
                              }

                              item = item.next;
                          } while (item !== null);

                          fragments.push({
                              parent: list,
                              nodes: nodes
                          });
                      }
                  });
              }

              if (Array.isArray(matchNode.match)) {
                  matchNode.match.forEach(findFragments);
              }
          }

          var fragments = [];

          if (match.matched !== null) {
              findFragments(match.matched);
          }

          return fragments;
      }

      var search = {
          matchFragments: matchFragments
      };

      var hasOwnProperty$2 = Object.prototype.hasOwnProperty;

      function isValidNumber(value) {
          // Number.isInteger(value) && value >= 0
          return (
              typeof value === 'number' &&
              isFinite(value) &&
              Math.floor(value) === value &&
              value >= 0
          );
      }

      function isValidLocation(loc) {
          return (
              Boolean(loc) &&
              isValidNumber(loc.offset) &&
              isValidNumber(loc.line) &&
              isValidNumber(loc.column)
          );
      }

      function createNodeStructureChecker(type, fields) {
          return function checkNode(node, warn) {
              if (!node || node.constructor !== Object) {
                  return warn(node, 'Type of node should be an Object');
              }

              for (var key in node) {
                  var valid = true;

                  if (hasOwnProperty$2.call(node, key) === false) {
                      continue;
                  }

                  if (key === 'type') {
                      if (node.type !== type) {
                          warn(node, 'Wrong node type `' + node.type + '`, expected `' + type + '`');
                      }
                  } else if (key === 'loc') {
                      if (node.loc === null) {
                          continue;
                      } else if (node.loc && node.loc.constructor === Object) {
                          if (typeof node.loc.source !== 'string') {
                              key += '.source';
                          } else if (!isValidLocation(node.loc.start)) {
                              key += '.start';
                          } else if (!isValidLocation(node.loc.end)) {
                              key += '.end';
                          } else {
                              continue;
                          }
                      }

                      valid = false;
                  } else if (fields.hasOwnProperty(key)) {
                      for (var i = 0, valid = false; !valid && i < fields[key].length; i++) {
                          var fieldType = fields[key][i];

                          switch (fieldType) {
                              case String:
                                  valid = typeof node[key] === 'string';
                                  break;

                              case Boolean:
                                  valid = typeof node[key] === 'boolean';
                                  break;

                              case null:
                                  valid = node[key] === null;
                                  break;

                              default:
                                  if (typeof fieldType === 'string') {
                                      valid = node[key] && node[key].type === fieldType;
                                  } else if (Array.isArray(fieldType)) {
                                      valid = node[key] instanceof List_1;
                                  }
                          }
                      }
                  } else {
                      warn(node, 'Unknown field `' + key + '` for ' + type + ' node type');
                  }

                  if (!valid) {
                      warn(node, 'Bad value for `' + type + '.' + key + '`');
                  }
              }

              for (var key in fields) {
                  if (hasOwnProperty$2.call(fields, key) &&
                      hasOwnProperty$2.call(node, key) === false) {
                      warn(node, 'Field `' + type + '.' + key + '` is missed');
                  }
              }
          };
      }

      function processStructure(name, nodeType) {
          var structure = nodeType.structure;
          var fields = {
              type: String,
              loc: true
          };
          var docs = {
              type: '"' + name + '"'
          };

          for (var key in structure) {
              if (hasOwnProperty$2.call(structure, key) === false) {
                  continue;
              }

              var docsTypes = [];
              var fieldTypes = fields[key] = Array.isArray(structure[key])
                  ? structure[key].slice()
                  : [structure[key]];

              for (var i = 0; i < fieldTypes.length; i++) {
                  var fieldType = fieldTypes[i];
                  if (fieldType === String || fieldType === Boolean) {
                      docsTypes.push(fieldType.name);
                  } else if (fieldType === null) {
                      docsTypes.push('null');
                  } else if (typeof fieldType === 'string') {
                      docsTypes.push('<' + fieldType + '>');
                  } else if (Array.isArray(fieldType)) {
                      docsTypes.push('List'); // TODO: use type enum
                  } else {
                      throw new Error('Wrong value `' + fieldType + '` in `' + name + '.' + key + '` structure definition');
                  }
              }

              docs[key] = docsTypes.join(' | ');
          }

          return {
              docs: docs,
              check: createNodeStructureChecker(name, fields)
          };
      }

      var structure = {
          getStructureFromConfig: function(config) {
              var structure = {};

              if (config.node) {
                  for (var name in config.node) {
                      if (hasOwnProperty$2.call(config.node, name)) {
                          var nodeType = config.node[name];

                          if (nodeType.structure) {
                              structure[name] = processStructure(name, nodeType);
                          } else {
                              throw new Error('Missed `structure` field in `' + name + '` node type definition');
                          }
                      }
                  }
              }

              return structure;
          }
      };

      var SyntaxReferenceError$1 = error.SyntaxReferenceError;
      var SyntaxMatchError$1 = error.SyntaxMatchError;






      var buildMatchGraph$1 = matchGraph.buildMatchGraph;
      var matchAsTree$1 = match.matchAsTree;


      var getStructureFromConfig = structure.getStructureFromConfig;
      var cssWideKeywords$1 = buildMatchGraph$1('inherit | initial | unset');
      var cssWideKeywordsWithExpression = buildMatchGraph$1('inherit | initial | unset | <-ms-legacy-expression>');

      function dumpMapSyntax(map, compact, syntaxAsAst) {
          var result = {};

          for (var name in map) {
              if (map[name].syntax) {
                  result[name] = syntaxAsAst
                      ? map[name].syntax
                      : generate_1(map[name].syntax, { compact: compact });
              }
          }

          return result;
      }

      function dumpAtruleMapSyntax(map, compact, syntaxAsAst) {
          const result = {};

          for (const [name, atrule] of Object.entries(map)) {
              result[name] = {
                  prelude: atrule.prelude && (
                      syntaxAsAst
                          ? atrule.prelude.syntax
                          : generate_1(atrule.prelude.syntax, { compact })
                  ),
                  descriptors: atrule.descriptors && dumpMapSyntax(atrule.descriptors, compact, syntaxAsAst)
              };
          }

          return result;
      }

      function valueHasVar(tokens) {
          for (var i = 0; i < tokens.length; i++) {
              if (tokens[i].value.toLowerCase() === 'var(') {
                  return true;
              }
          }

          return false;
      }

      function buildMatchResult(match, error, iterations) {
          return {
              matched: match,
              iterations: iterations,
              error: error,
              getTrace: trace.getTrace,
              isType: trace.isType,
              isProperty: trace.isProperty,
              isKeyword: trace.isKeyword
          };
      }

      function matchSyntax(lexer, syntax, value, useCommon) {
          var tokens = prepareTokens_1(value, lexer.syntax);
          var result;

          if (valueHasVar(tokens)) {
              return buildMatchResult(null, new Error('Matching for a tree with var() is not supported'));
          }

          if (useCommon) {
              result = matchAsTree$1(tokens, lexer.valueCommonSyntax, lexer);
          }

          if (!useCommon || !result.match) {
              result = matchAsTree$1(tokens, syntax.match, lexer);
              if (!result.match) {
                  return buildMatchResult(
                      null,
                      new SyntaxMatchError$1(result.reason, syntax.syntax, value, result),
                      result.iterations
                  );
              }
          }

          return buildMatchResult(result.match, null, result.iterations);
      }

      var Lexer = function(config, syntax, structure) {
          this.valueCommonSyntax = cssWideKeywords$1;
          this.syntax = syntax;
          this.generic = false;
          this.atrules = {};
          this.properties = {};
          this.types = {};
          this.structure = structure || getStructureFromConfig(config);

          if (config) {
              if (config.types) {
                  for (var name in config.types) {
                      this.addType_(name, config.types[name]);
                  }
              }

              if (config.generic) {
                  this.generic = true;
                  for (var name in generic) {
                      this.addType_(name, generic[name]);
                  }
              }

              if (config.atrules) {
                  for (var name in config.atrules) {
                      this.addAtrule_(name, config.atrules[name]);
                  }
              }

              if (config.properties) {
                  for (var name in config.properties) {
                      this.addProperty_(name, config.properties[name]);
                  }
              }
          }
      };

      Lexer.prototype = {
          structure: {},
          checkStructure: function(ast) {
              function collectWarning(node, message) {
                  warns.push({
                      node: node,
                      message: message
                  });
              }

              var structure = this.structure;
              var warns = [];

              this.syntax.walk(ast, function(node) {
                  if (structure.hasOwnProperty(node.type)) {
                      structure[node.type].check(node, collectWarning);
                  } else {
                      collectWarning(node, 'Unknown node type `' + node.type + '`');
                  }
              });

              return warns.length ? warns : false;
          },

          createDescriptor: function(syntax, type, name, parent = null) {
              var ref = {
                  type: type,
                  name: name
              };
              var descriptor = {
                  type: type,
                  name: name,
                  parent: parent,
                  syntax: null,
                  match: null
              };

              if (typeof syntax === 'function') {
                  descriptor.match = buildMatchGraph$1(syntax, ref);
              } else {
                  if (typeof syntax === 'string') {
                      // lazy parsing on first access
                      Object.defineProperty(descriptor, 'syntax', {
                          get: function() {
                              Object.defineProperty(descriptor, 'syntax', {
                                  value: parse_1(syntax)
                              });

                              return descriptor.syntax;
                          }
                      });
                  } else {
                      descriptor.syntax = syntax;
                  }

                  // lazy graph build on first access
                  Object.defineProperty(descriptor, 'match', {
                      get: function() {
                          Object.defineProperty(descriptor, 'match', {
                              value: buildMatchGraph$1(descriptor.syntax, ref)
                          });

                          return descriptor.match;
                      }
                  });
              }

              return descriptor;
          },
          addAtrule_: function(name, syntax) {
              if (!syntax) {
                  return;
              }

              this.atrules[name] = {
                  type: 'Atrule',
                  name: name,
                  prelude: syntax.prelude ? this.createDescriptor(syntax.prelude, 'AtrulePrelude', name) : null,
                  descriptors: syntax.descriptors
                      ? Object.keys(syntax.descriptors).reduce((res, descName) => {
                          res[descName] = this.createDescriptor(syntax.descriptors[descName], 'AtruleDescriptor', descName, name);
                          return res;
                      }, {})
                      : null
              };
          },
          addProperty_: function(name, syntax) {
              if (!syntax) {
                  return;
              }

              this.properties[name] = this.createDescriptor(syntax, 'Property', name);
          },
          addType_: function(name, syntax) {
              if (!syntax) {
                  return;
              }

              this.types[name] = this.createDescriptor(syntax, 'Type', name);

              if (syntax === generic['-ms-legacy-expression']) {
                  this.valueCommonSyntax = cssWideKeywordsWithExpression;
              }
          },

          checkAtruleName: function(atruleName) {
              if (!this.getAtrule(atruleName)) {
                  return new SyntaxReferenceError$1('Unknown at-rule', '@' + atruleName);
              }
          },
          checkAtrulePrelude: function(atruleName, prelude) {
              let error = this.checkAtruleName(atruleName);

              if (error) {
                  return error;
              }

              var atrule = this.getAtrule(atruleName);

              if (!atrule.prelude && prelude) {
                  return new SyntaxError('At-rule `@' + atruleName + '` should not contain a prelude');
              }

              if (atrule.prelude && !prelude) {
                  return new SyntaxError('At-rule `@' + atruleName + '` should contain a prelude');
              }
          },
          checkAtruleDescriptorName: function(atruleName, descriptorName) {
              let error = this.checkAtruleName(atruleName);

              if (error) {
                  return error;
              }

              var atrule = this.getAtrule(atruleName);
              var descriptor = names.keyword(descriptorName);

              if (!atrule.descriptors) {
                  return new SyntaxError('At-rule `@' + atruleName + '` has no known descriptors');
              }

              if (!atrule.descriptors[descriptor.name] &&
                  !atrule.descriptors[descriptor.basename]) {
                  return new SyntaxReferenceError$1('Unknown at-rule descriptor', descriptorName);
              }
          },
          checkPropertyName: function(propertyName) {
              var property = names.property(propertyName);

              // don't match syntax for a custom property
              if (property.custom) {
                  return new Error('Lexer matching doesn\'t applicable for custom properties');
              }

              if (!this.getProperty(propertyName)) {
                  return new SyntaxReferenceError$1('Unknown property', propertyName);
              }
          },

          matchAtrulePrelude: function(atruleName, prelude) {
              var error = this.checkAtrulePrelude(atruleName, prelude);

              if (error) {
                  return buildMatchResult(null, error);
              }

              if (!prelude) {
                  return buildMatchResult(null, null);
              }

              return matchSyntax(this, this.getAtrule(atruleName).prelude, prelude, false);
          },
          matchAtruleDescriptor: function(atruleName, descriptorName, value) {
              var error = this.checkAtruleDescriptorName(atruleName, descriptorName);

              if (error) {
                  return buildMatchResult(null, error);
              }

              var atrule = this.getAtrule(atruleName);
              var descriptor = names.keyword(descriptorName);

              return matchSyntax(this, atrule.descriptors[descriptor.name] || atrule.descriptors[descriptor.basename], value, false);
          },
          matchDeclaration: function(node) {
              if (node.type !== 'Declaration') {
                  return buildMatchResult(null, new Error('Not a Declaration node'));
              }

              return this.matchProperty(node.property, node.value);
          },
          matchProperty: function(propertyName, value) {
              var error = this.checkPropertyName(propertyName);

              if (error) {
                  return buildMatchResult(null, error);
              }

              return matchSyntax(this, this.getProperty(propertyName), value, true);
          },
          matchType: function(typeName, value) {
              var typeSyntax = this.getType(typeName);

              if (!typeSyntax) {
                  return buildMatchResult(null, new SyntaxReferenceError$1('Unknown type', typeName));
              }

              return matchSyntax(this, typeSyntax, value, false);
          },
          match: function(syntax, value) {
              if (typeof syntax !== 'string' && (!syntax || !syntax.type)) {
                  return buildMatchResult(null, new SyntaxReferenceError$1('Bad syntax'));
              }

              if (typeof syntax === 'string' || !syntax.match) {
                  syntax = this.createDescriptor(syntax, 'Type', 'anonymous');
              }

              return matchSyntax(this, syntax, value, false);
          },

          findValueFragments: function(propertyName, value, type, name) {
              return search.matchFragments(this, value, this.matchProperty(propertyName, value), type, name);
          },
          findDeclarationValueFragments: function(declaration, type, name) {
              return search.matchFragments(this, declaration.value, this.matchDeclaration(declaration), type, name);
          },
          findAllFragments: function(ast, type, name) {
              var result = [];

              this.syntax.walk(ast, {
                  visit: 'Declaration',
                  enter: function(declaration) {
                      result.push.apply(result, this.findDeclarationValueFragments(declaration, type, name));
                  }.bind(this)
              });

              return result;
          },

          getAtrule: function(atruleName, fallbackBasename = true) {
              var atrule = names.keyword(atruleName);
              var atruleEntry = atrule.vendor && fallbackBasename
                  ? this.atrules[atrule.name] || this.atrules[atrule.basename]
                  : this.atrules[atrule.name];

              return atruleEntry || null;
          },
          getAtrulePrelude: function(atruleName, fallbackBasename = true) {
              const atrule = this.getAtrule(atruleName, fallbackBasename);

              return atrule && atrule.prelude || null;
          },
          getAtruleDescriptor: function(atruleName, name) {
              return this.atrules.hasOwnProperty(atruleName) && this.atrules.declarators
                  ? this.atrules[atruleName].declarators[name] || null
                  : null;
          },
          getProperty: function(propertyName, fallbackBasename = true) {
              var property = names.property(propertyName);
              var propertyEntry = property.vendor && fallbackBasename
                  ? this.properties[property.name] || this.properties[property.basename]
                  : this.properties[property.name];

              return propertyEntry || null;
          },
          getType: function(name) {
              return this.types.hasOwnProperty(name) ? this.types[name] : null;
          },

          validate: function() {
              function validate(syntax, name, broken, descriptor) {
                  if (broken.hasOwnProperty(name)) {
                      return broken[name];
                  }

                  broken[name] = false;
                  if (descriptor.syntax !== null) {
                      walk(descriptor.syntax, function(node) {
                          if (node.type !== 'Type' && node.type !== 'Property') {
                              return;
                          }

                          var map = node.type === 'Type' ? syntax.types : syntax.properties;
                          var brokenMap = node.type === 'Type' ? brokenTypes : brokenProperties;

                          if (!map.hasOwnProperty(node.name) || validate(syntax, node.name, brokenMap, map[node.name])) {
                              broken[name] = true;
                          }
                      }, this);
                  }
              }

              var brokenTypes = {};
              var brokenProperties = {};

              for (var key in this.types) {
                  validate(this, key, brokenTypes, this.types[key]);
              }

              for (var key in this.properties) {
                  validate(this, key, brokenProperties, this.properties[key]);
              }

              brokenTypes = Object.keys(brokenTypes).filter(function(name) {
                  return brokenTypes[name];
              });
              brokenProperties = Object.keys(brokenProperties).filter(function(name) {
                  return brokenProperties[name];
              });

              if (brokenTypes.length || brokenProperties.length) {
                  return {
                      types: brokenTypes,
                      properties: brokenProperties
                  };
              }

              return null;
          },
          dump: function(syntaxAsAst, pretty) {
              return {
                  generic: this.generic,
                  types: dumpMapSyntax(this.types, !pretty, syntaxAsAst),
                  properties: dumpMapSyntax(this.properties, !pretty, syntaxAsAst),
                  atrules: dumpAtruleMapSyntax(this.atrules, !pretty, syntaxAsAst)
              };
          },
          toString: function() {
              return JSON.stringify(this.dump());
          }
      };

      var Lexer_1 = Lexer;

      var definitionSyntax = {
          SyntaxError: _SyntaxError$1,
          parse: parse_1,
          generate: generate_1,
          walk: walk
      };

      var isBOM$2 = tokenizer.isBOM;

      var N$3 = 10;
      var F$2 = 12;
      var R$2 = 13;

      function computeLinesAndColumns(host, source) {
          var sourceLength = source.length;
          var lines = adoptBuffer(host.lines, sourceLength); // +1
          var line = host.startLine;
          var columns = adoptBuffer(host.columns, sourceLength);
          var column = host.startColumn;
          var startOffset = source.length > 0 ? isBOM$2(source.charCodeAt(0)) : 0;

          for (var i = startOffset; i < sourceLength; i++) { // -1
              var code = source.charCodeAt(i);

              lines[i] = line;
              columns[i] = column++;

              if (code === N$3 || code === R$2 || code === F$2) {
                  if (code === R$2 && i + 1 < sourceLength && source.charCodeAt(i + 1) === N$3) {
                      i++;
                      lines[i] = line;
                      columns[i] = column;
                  }

                  line++;
                  column = 1;
              }
          }

          lines[i] = line;
          columns[i] = column;

          host.lines = lines;
          host.columns = columns;
      }

      var OffsetToLocation = function() {
          this.lines = null;
          this.columns = null;
          this.linesAndColumnsComputed = false;
      };

      OffsetToLocation.prototype = {
          setSource: function(source, startOffset, startLine, startColumn) {
              this.source = source;
              this.startOffset = typeof startOffset === 'undefined' ? 0 : startOffset;
              this.startLine = typeof startLine === 'undefined' ? 1 : startLine;
              this.startColumn = typeof startColumn === 'undefined' ? 1 : startColumn;
              this.linesAndColumnsComputed = false;
          },

          ensureLinesAndColumnsComputed: function() {
              if (!this.linesAndColumnsComputed) {
                  computeLinesAndColumns(this, this.source);
                  this.linesAndColumnsComputed = true;
              }
          },
          getLocation: function(offset, filename) {
              this.ensureLinesAndColumnsComputed();

              return {
                  source: filename,
                  offset: this.startOffset + offset,
                  line: this.lines[offset],
                  column: this.columns[offset]
              };
          },
          getLocationRange: function(start, end, filename) {
              this.ensureLinesAndColumnsComputed();

              return {
                  source: filename,
                  start: {
                      offset: this.startOffset + start,
                      line: this.lines[start],
                      column: this.columns[start]
                  },
                  end: {
                      offset: this.startOffset + end,
                      line: this.lines[end],
                      column: this.columns[end]
                  }
              };
          }
      };

      var OffsetToLocation_1 = OffsetToLocation;

      var TYPE$7 = tokenizer.TYPE;
      var WHITESPACE$2 = TYPE$7.WhiteSpace;
      var COMMENT$2 = TYPE$7.Comment;

      var sequence = function readSequence(recognizer) {
          var children = this.createList();
          var child = null;
          var context = {
              recognizer: recognizer,
              space: null,
              ignoreWS: false,
              ignoreWSAfter: false
          };

          this.scanner.skipSC();

          while (!this.scanner.eof) {
              switch (this.scanner.tokenType) {
                  case COMMENT$2:
                      this.scanner.next();
                      continue;

                  case WHITESPACE$2:
                      if (context.ignoreWS) {
                          this.scanner.next();
                      } else {
                          context.space = this.WhiteSpace();
                      }
                      continue;
              }

              child = recognizer.getNode.call(this, context);

              if (child === undefined) {
                  break;
              }

              if (context.space !== null) {
                  children.push(context.space);
                  context.space = null;
              }

              children.push(child);

              if (context.ignoreWSAfter) {
                  context.ignoreWSAfter = false;
                  context.ignoreWS = true;
              } else {
                  context.ignoreWS = false;
              }
          }

          return children;
      };

      var { findWhiteSpaceStart: findWhiteSpaceStart$1, cmpStr: cmpStr$4 } = utils;

      var noop$2 = function() {};

      var TYPE$8 = _const.TYPE;
      var NAME$2 = _const.NAME;
      var WHITESPACE$3 = TYPE$8.WhiteSpace;
      var COMMENT$3 = TYPE$8.Comment;
      var IDENT$2 = TYPE$8.Ident;
      var FUNCTION = TYPE$8.Function;
      var URL = TYPE$8.Url;
      var HASH = TYPE$8.Hash;
      var PERCENTAGE = TYPE$8.Percentage;
      var NUMBER$2 = TYPE$8.Number;
      var NUMBERSIGN$1 = 0x0023; // U+0023 NUMBER SIGN (#)
      var NULL = 0;

      function createParseContext(name) {
          return function() {
              return this[name]();
          };
      }

      function processConfig(config) {
          var parserConfig = {
              context: {},
              scope: {},
              atrule: {},
              pseudo: {}
          };

          if (config.parseContext) {
              for (var name in config.parseContext) {
                  switch (typeof config.parseContext[name]) {
                      case 'function':
                          parserConfig.context[name] = config.parseContext[name];
                          break;

                      case 'string':
                          parserConfig.context[name] = createParseContext(config.parseContext[name]);
                          break;
                  }
              }
          }

          if (config.scope) {
              for (var name in config.scope) {
                  parserConfig.scope[name] = config.scope[name];
              }
          }

          if (config.atrule) {
              for (var name in config.atrule) {
                  var atrule = config.atrule[name];

                  if (atrule.parse) {
                      parserConfig.atrule[name] = atrule.parse;
                  }
              }
          }

          if (config.pseudo) {
              for (var name in config.pseudo) {
                  var pseudo = config.pseudo[name];

                  if (pseudo.parse) {
                      parserConfig.pseudo[name] = pseudo.parse;
                  }
              }
          }

          if (config.node) {
              for (var name in config.node) {
                  parserConfig[name] = config.node[name].parse;
              }
          }

          return parserConfig;
      }

      var create = function createParser(config) {
          var parser = {
              scanner: new TokenStream_1(),
              locationMap: new OffsetToLocation_1(),

              filename: '<unknown>',
              needPositions: false,
              onParseError: noop$2,
              onParseErrorThrow: false,
              parseAtrulePrelude: true,
              parseRulePrelude: true,
              parseValue: true,
              parseCustomProperty: false,

              readSequence: sequence,

              createList: function() {
                  return new List_1();
              },
              createSingleNodeList: function(node) {
                  return new List_1().appendData(node);
              },
              getFirstListNode: function(list) {
                  return list && list.first();
              },
              getLastListNode: function(list) {
                  return list.last();
              },

              parseWithFallback: function(consumer, fallback) {
                  var startToken = this.scanner.tokenIndex;

                  try {
                      return consumer.call(this);
                  } catch (e) {
                      if (this.onParseErrorThrow) {
                          throw e;
                      }

                      var fallbackNode = fallback.call(this, startToken);

                      this.onParseErrorThrow = true;
                      this.onParseError(e, fallbackNode);
                      this.onParseErrorThrow = false;

                      return fallbackNode;
                  }
              },

              lookupNonWSType: function(offset) {
                  do {
                      var type = this.scanner.lookupType(offset++);
                      if (type !== WHITESPACE$3) {
                          return type;
                      }
                  } while (type !== NULL);

                  return NULL;
              },

              eat: function(tokenType) {
                  if (this.scanner.tokenType !== tokenType) {
                      var offset = this.scanner.tokenStart;
                      var message = NAME$2[tokenType] + ' is expected';

                      // tweak message and offset
                      switch (tokenType) {
                          case IDENT$2:
                              // when identifier is expected but there is a function or url
                              if (this.scanner.tokenType === FUNCTION || this.scanner.tokenType === URL) {
                                  offset = this.scanner.tokenEnd - 1;
                                  message = 'Identifier is expected but function found';
                              } else {
                                  message = 'Identifier is expected';
                              }
                              break;

                          case HASH:
                              if (this.scanner.isDelim(NUMBERSIGN$1)) {
                                  this.scanner.next();
                                  offset++;
                                  message = 'Name is expected';
                              }
                              break;

                          case PERCENTAGE:
                              if (this.scanner.tokenType === NUMBER$2) {
                                  offset = this.scanner.tokenEnd;
                                  message = 'Percent sign is expected';
                              }
                              break;

                          default:
                              // when test type is part of another token show error for current position + 1
                              // e.g. eat(HYPHENMINUS) will fail on "-foo", but pointing on "-" is odd
                              if (this.scanner.source.charCodeAt(this.scanner.tokenStart) === tokenType) {
                                  offset = offset + 1;
                              }
                      }

                      this.error(message, offset);
                  }

                  this.scanner.next();
              },

              consume: function(tokenType) {
                  var value = this.scanner.getTokenValue();

                  this.eat(tokenType);

                  return value;
              },
              consumeFunctionName: function() {
                  var name = this.scanner.source.substring(this.scanner.tokenStart, this.scanner.tokenEnd - 1);

                  this.eat(FUNCTION);

                  return name;
              },

              getLocation: function(start, end) {
                  if (this.needPositions) {
                      return this.locationMap.getLocationRange(
                          start,
                          end,
                          this.filename
                      );
                  }

                  return null;
              },
              getLocationFromList: function(list) {
                  if (this.needPositions) {
                      var head = this.getFirstListNode(list);
                      var tail = this.getLastListNode(list);
                      return this.locationMap.getLocationRange(
                          head !== null ? head.loc.start.offset - this.locationMap.startOffset : this.scanner.tokenStart,
                          tail !== null ? tail.loc.end.offset - this.locationMap.startOffset : this.scanner.tokenStart,
                          this.filename
                      );
                  }

                  return null;
              },

              error: function(message, offset) {
                  var location = typeof offset !== 'undefined' && offset < this.scanner.source.length
                      ? this.locationMap.getLocation(offset)
                      : this.scanner.eof
                          ? this.locationMap.getLocation(findWhiteSpaceStart$1(this.scanner.source, this.scanner.source.length - 1))
                          : this.locationMap.getLocation(this.scanner.tokenStart);

                  throw new _SyntaxError(
                      message || 'Unexpected input',
                      this.scanner.source,
                      location.offset,
                      location.line,
                      location.column
                  );
              }
          };

          config = processConfig(config || {});
          for (var key in config) {
              parser[key] = config[key];
          }

          return function(source, options) {
              options = options || {};

              var context = options.context || 'default';
              var onComment = options.onComment;
              var ast;

              tokenizer(source, parser.scanner);
              parser.locationMap.setSource(
                  source,
                  options.offset,
                  options.line,
                  options.column
              );

              parser.filename = options.filename || '<unknown>';
              parser.needPositions = Boolean(options.positions);
              parser.onParseError = typeof options.onParseError === 'function' ? options.onParseError : noop$2;
              parser.onParseErrorThrow = false;
              parser.parseAtrulePrelude = 'parseAtrulePrelude' in options ? Boolean(options.parseAtrulePrelude) : true;
              parser.parseRulePrelude = 'parseRulePrelude' in options ? Boolean(options.parseRulePrelude) : true;
              parser.parseValue = 'parseValue' in options ? Boolean(options.parseValue) : true;
              parser.parseCustomProperty = 'parseCustomProperty' in options ? Boolean(options.parseCustomProperty) : false;

              if (!parser.context.hasOwnProperty(context)) {
                  throw new Error('Unknown context `' + context + '`');
              }

              if (typeof onComment === 'function') {
                  parser.scanner.forEachToken((type, start, end) => {
                      if (type === COMMENT$3) {
                          const loc = parser.getLocation(start, end);
                          const value = cmpStr$4(source, end - 2, end, '*/')
                              ? source.slice(start + 2, end - 2)
                              : source.slice(start + 2, end);

                          onComment(value, loc);
                      }
                  });
              }

              ast = parser.context[context].call(parser, options);

              if (!parser.scanner.eof) {
                  parser.error();
              }

              return ast;
          };
      };

      /* -*- Mode: js; js-indent-level: 2; -*- */
      /*
       * Copyright 2011 Mozilla Foundation and contributors
       * Licensed under the New BSD license. See LICENSE or:
       * http://opensource.org/licenses/BSD-3-Clause
       */

      var intToCharMap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');

      /**
       * Encode an integer in the range of 0 to 63 to a single base 64 digit.
       */
      var encode = function (number) {
        if (0 <= number && number < intToCharMap.length) {
          return intToCharMap[number];
        }
        throw new TypeError("Must be between 0 and 63: " + number);
      };

      /**
       * Decode a single base 64 character code digit to an integer. Returns -1 on
       * failure.
       */
      var decode = function (charCode) {
        var bigA = 65;     // 'A'
        var bigZ = 90;     // 'Z'

        var littleA = 97;  // 'a'
        var littleZ = 122; // 'z'

        var zero = 48;     // '0'
        var nine = 57;     // '9'

        var plus = 43;     // '+'
        var slash = 47;    // '/'

        var littleOffset = 26;
        var numberOffset = 52;

        // 0 - 25: ABCDEFGHIJKLMNOPQRSTUVWXYZ
        if (bigA <= charCode && charCode <= bigZ) {
          return (charCode - bigA);
        }

        // 26 - 51: abcdefghijklmnopqrstuvwxyz
        if (littleA <= charCode && charCode <= littleZ) {
          return (charCode - littleA + littleOffset);
        }

        // 52 - 61: 0123456789
        if (zero <= charCode && charCode <= nine) {
          return (charCode - zero + numberOffset);
        }

        // 62: +
        if (charCode == plus) {
          return 62;
        }

        // 63: /
        if (charCode == slash) {
          return 63;
        }

        // Invalid base64 digit.
        return -1;
      };

      var base64 = {
      	encode: encode,
      	decode: decode
      };

      /* -*- Mode: js; js-indent-level: 2; -*- */
      /*
       * Copyright 2011 Mozilla Foundation and contributors
       * Licensed under the New BSD license. See LICENSE or:
       * http://opensource.org/licenses/BSD-3-Clause
       *
       * Based on the Base 64 VLQ implementation in Closure Compiler:
       * https://code.google.com/p/closure-compiler/source/browse/trunk/src/com/google/debugging/sourcemap/Base64VLQ.java
       *
       * Copyright 2011 The Closure Compiler Authors. All rights reserved.
       * Redistribution and use in source and binary forms, with or without
       * modification, are permitted provided that the following conditions are
       * met:
       *
       *  * Redistributions of source code must retain the above copyright
       *    notice, this list of conditions and the following disclaimer.
       *  * Redistributions in binary form must reproduce the above
       *    copyright notice, this list of conditions and the following
       *    disclaimer in the documentation and/or other materials provided
       *    with the distribution.
       *  * Neither the name of Google Inc. nor the names of its
       *    contributors may be used to endorse or promote products derived
       *    from this software without specific prior written permission.
       *
       * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
       * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
       * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
       * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
       * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
       * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
       * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
       * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
       * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
       * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
       * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
       */



      // A single base 64 digit can contain 6 bits of data. For the base 64 variable
      // length quantities we use in the source map spec, the first bit is the sign,
      // the next four bits are the actual value, and the 6th bit is the
      // continuation bit. The continuation bit tells us whether there are more
      // digits in this value following this digit.
      //
      //   Continuation
      //   |    Sign
      //   |    |
      //   V    V
      //   101011

      var VLQ_BASE_SHIFT = 5;

      // binary: 100000
      var VLQ_BASE = 1 << VLQ_BASE_SHIFT;

      // binary: 011111
      var VLQ_BASE_MASK = VLQ_BASE - 1;

      // binary: 100000
      var VLQ_CONTINUATION_BIT = VLQ_BASE;

      /**
       * Converts from a two-complement value to a value where the sign bit is
       * placed in the least significant bit.  For example, as decimals:
       *   1 becomes 2 (10 binary), -1 becomes 3 (11 binary)
       *   2 becomes 4 (100 binary), -2 becomes 5 (101 binary)
       */
      function toVLQSigned(aValue) {
        return aValue < 0
          ? ((-aValue) << 1) + 1
          : (aValue << 1) + 0;
      }

      /**
       * Converts to a two-complement value from a value where the sign bit is
       * placed in the least significant bit.  For example, as decimals:
       *   2 (10 binary) becomes 1, 3 (11 binary) becomes -1
       *   4 (100 binary) becomes 2, 5 (101 binary) becomes -2
       */
      function fromVLQSigned(aValue) {
        var isNegative = (aValue & 1) === 1;
        var shifted = aValue >> 1;
        return isNegative
          ? -shifted
          : shifted;
      }

      /**
       * Returns the base 64 VLQ encoded value.
       */
      var encode$1 = function base64VLQ_encode(aValue) {
        var encoded = "";
        var digit;

        var vlq = toVLQSigned(aValue);

        do {
          digit = vlq & VLQ_BASE_MASK;
          vlq >>>= VLQ_BASE_SHIFT;
          if (vlq > 0) {
            // There are still more digits in this value, so we must make sure the
            // continuation bit is marked.
            digit |= VLQ_CONTINUATION_BIT;
          }
          encoded += base64.encode(digit);
        } while (vlq > 0);

        return encoded;
      };

      /**
       * Decodes the next base 64 VLQ value from the given string and returns the
       * value and the rest of the string via the out parameter.
       */
      var decode$1 = function base64VLQ_decode(aStr, aIndex, aOutParam) {
        var strLen = aStr.length;
        var result = 0;
        var shift = 0;
        var continuation, digit;

        do {
          if (aIndex >= strLen) {
            throw new Error("Expected more digits in base 64 VLQ value.");
          }

          digit = base64.decode(aStr.charCodeAt(aIndex++));
          if (digit === -1) {
            throw new Error("Invalid base64 digit: " + aStr.charAt(aIndex - 1));
          }

          continuation = !!(digit & VLQ_CONTINUATION_BIT);
          digit &= VLQ_BASE_MASK;
          result = result + (digit << shift);
          shift += VLQ_BASE_SHIFT;
        } while (continuation);

        aOutParam.value = fromVLQSigned(result);
        aOutParam.rest = aIndex;
      };

      var base64Vlq = {
      	encode: encode$1,
      	decode: decode$1
      };

      function createCommonjsModule(fn, module) {
      	return module = { exports: {} }, fn(module, module.exports), module.exports;
      }

      function getCjsExportFromNamespace (n) {
      	return n && n['default'] || n;
      }

      var util = createCommonjsModule(function (module, exports) {
      /* -*- Mode: js; js-indent-level: 2; -*- */
      /*
       * Copyright 2011 Mozilla Foundation and contributors
       * Licensed under the New BSD license. See LICENSE or:
       * http://opensource.org/licenses/BSD-3-Clause
       */

      /**
       * This is a helper function for getting values from parameter/options
       * objects.
       *
       * @param args The object we are extracting values from
       * @param name The name of the property we are getting.
       * @param defaultValue An optional value to return if the property is missing
       * from the object. If this is not specified and the property is missing, an
       * error will be thrown.
       */
      function getArg(aArgs, aName, aDefaultValue) {
        if (aName in aArgs) {
          return aArgs[aName];
        } else if (arguments.length === 3) {
          return aDefaultValue;
        } else {
          throw new Error('"' + aName + '" is a required argument.');
        }
      }
      exports.getArg = getArg;

      var urlRegexp = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/;
      var dataUrlRegexp = /^data:.+\,.+$/;

      function urlParse(aUrl) {
        var match = aUrl.match(urlRegexp);
        if (!match) {
          return null;
        }
        return {
          scheme: match[1],
          auth: match[2],
          host: match[3],
          port: match[4],
          path: match[5]
        };
      }
      exports.urlParse = urlParse;

      function urlGenerate(aParsedUrl) {
        var url = '';
        if (aParsedUrl.scheme) {
          url += aParsedUrl.scheme + ':';
        }
        url += '//';
        if (aParsedUrl.auth) {
          url += aParsedUrl.auth + '@';
        }
        if (aParsedUrl.host) {
          url += aParsedUrl.host;
        }
        if (aParsedUrl.port) {
          url += ":" + aParsedUrl.port;
        }
        if (aParsedUrl.path) {
          url += aParsedUrl.path;
        }
        return url;
      }
      exports.urlGenerate = urlGenerate;

      /**
       * Normalizes a path, or the path portion of a URL:
       *
       * - Replaces consecutive slashes with one slash.
       * - Removes unnecessary '.' parts.
       * - Removes unnecessary '<dir>/..' parts.
       *
       * Based on code in the Node.js 'path' core module.
       *
       * @param aPath The path or url to normalize.
       */
      function normalize(aPath) {
        var path = aPath;
        var url = urlParse(aPath);
        if (url) {
          if (!url.path) {
            return aPath;
          }
          path = url.path;
        }
        var isAbsolute = exports.isAbsolute(path);

        var parts = path.split(/\/+/);
        for (var part, up = 0, i = parts.length - 1; i >= 0; i--) {
          part = parts[i];
          if (part === '.') {
            parts.splice(i, 1);
          } else if (part === '..') {
            up++;
          } else if (up > 0) {
            if (part === '') {
              // The first part is blank if the path is absolute. Trying to go
              // above the root is a no-op. Therefore we can remove all '..' parts
              // directly after the root.
              parts.splice(i + 1, up);
              up = 0;
            } else {
              parts.splice(i, 2);
              up--;
            }
          }
        }
        path = parts.join('/');

        if (path === '') {
          path = isAbsolute ? '/' : '.';
        }

        if (url) {
          url.path = path;
          return urlGenerate(url);
        }
        return path;
      }
      exports.normalize = normalize;

      /**
       * Joins two paths/URLs.
       *
       * @param aRoot The root path or URL.
       * @param aPath The path or URL to be joined with the root.
       *
       * - If aPath is a URL or a data URI, aPath is returned, unless aPath is a
       *   scheme-relative URL: Then the scheme of aRoot, if any, is prepended
       *   first.
       * - Otherwise aPath is a path. If aRoot is a URL, then its path portion
       *   is updated with the result and aRoot is returned. Otherwise the result
       *   is returned.
       *   - If aPath is absolute, the result is aPath.
       *   - Otherwise the two paths are joined with a slash.
       * - Joining for example 'http://' and 'www.example.com' is also supported.
       */
      function join(aRoot, aPath) {
        if (aRoot === "") {
          aRoot = ".";
        }
        if (aPath === "") {
          aPath = ".";
        }
        var aPathUrl = urlParse(aPath);
        var aRootUrl = urlParse(aRoot);
        if (aRootUrl) {
          aRoot = aRootUrl.path || '/';
        }

        // `join(foo, '//www.example.org')`
        if (aPathUrl && !aPathUrl.scheme) {
          if (aRootUrl) {
            aPathUrl.scheme = aRootUrl.scheme;
          }
          return urlGenerate(aPathUrl);
        }

        if (aPathUrl || aPath.match(dataUrlRegexp)) {
          return aPath;
        }

        // `join('http://', 'www.example.com')`
        if (aRootUrl && !aRootUrl.host && !aRootUrl.path) {
          aRootUrl.host = aPath;
          return urlGenerate(aRootUrl);
        }

        var joined = aPath.charAt(0) === '/'
          ? aPath
          : normalize(aRoot.replace(/\/+$/, '') + '/' + aPath);

        if (aRootUrl) {
          aRootUrl.path = joined;
          return urlGenerate(aRootUrl);
        }
        return joined;
      }
      exports.join = join;

      exports.isAbsolute = function (aPath) {
        return aPath.charAt(0) === '/' || urlRegexp.test(aPath);
      };

      /**
       * Make a path relative to a URL or another path.
       *
       * @param aRoot The root path or URL.
       * @param aPath The path or URL to be made relative to aRoot.
       */
      function relative(aRoot, aPath) {
        if (aRoot === "") {
          aRoot = ".";
        }

        aRoot = aRoot.replace(/\/$/, '');

        // It is possible for the path to be above the root. In this case, simply
        // checking whether the root is a prefix of the path won't work. Instead, we
        // need to remove components from the root one by one, until either we find
        // a prefix that fits, or we run out of components to remove.
        var level = 0;
        while (aPath.indexOf(aRoot + '/') !== 0) {
          var index = aRoot.lastIndexOf("/");
          if (index < 0) {
            return aPath;
          }

          // If the only part of the root that is left is the scheme (i.e. http://,
          // file:///, etc.), one or more slashes (/), or simply nothing at all, we
          // have exhausted all components, so the path is not relative to the root.
          aRoot = aRoot.slice(0, index);
          if (aRoot.match(/^([^\/]+:\/)?\/*$/)) {
            return aPath;
          }

          ++level;
        }

        // Make sure we add a "../" for each component we removed from the root.
        return Array(level + 1).join("../") + aPath.substr(aRoot.length + 1);
      }
      exports.relative = relative;

      var supportsNullProto = (function () {
        var obj = Object.create(null);
        return !('__proto__' in obj);
      }());

      function identity (s) {
        return s;
      }

      /**
       * Because behavior goes wacky when you set `__proto__` on objects, we
       * have to prefix all the strings in our set with an arbitrary character.
       *
       * See https://github.com/mozilla/source-map/pull/31 and
       * https://github.com/mozilla/source-map/issues/30
       *
       * @param String aStr
       */
      function toSetString(aStr) {
        if (isProtoString(aStr)) {
          return '$' + aStr;
        }

        return aStr;
      }
      exports.toSetString = supportsNullProto ? identity : toSetString;

      function fromSetString(aStr) {
        if (isProtoString(aStr)) {
          return aStr.slice(1);
        }

        return aStr;
      }
      exports.fromSetString = supportsNullProto ? identity : fromSetString;

      function isProtoString(s) {
        if (!s) {
          return false;
        }

        var length = s.length;

        if (length < 9 /* "__proto__".length */) {
          return false;
        }

        if (s.charCodeAt(length - 1) !== 95  /* '_' */ ||
            s.charCodeAt(length - 2) !== 95  /* '_' */ ||
            s.charCodeAt(length - 3) !== 111 /* 'o' */ ||
            s.charCodeAt(length - 4) !== 116 /* 't' */ ||
            s.charCodeAt(length - 5) !== 111 /* 'o' */ ||
            s.charCodeAt(length - 6) !== 114 /* 'r' */ ||
            s.charCodeAt(length - 7) !== 112 /* 'p' */ ||
            s.charCodeAt(length - 8) !== 95  /* '_' */ ||
            s.charCodeAt(length - 9) !== 95  /* '_' */) {
          return false;
        }

        for (var i = length - 10; i >= 0; i--) {
          if (s.charCodeAt(i) !== 36 /* '$' */) {
            return false;
          }
        }

        return true;
      }

      /**
       * Comparator between two mappings where the original positions are compared.
       *
       * Optionally pass in `true` as `onlyCompareGenerated` to consider two
       * mappings with the same original source/line/column, but different generated
       * line and column the same. Useful when searching for a mapping with a
       * stubbed out mapping.
       */
      function compareByOriginalPositions(mappingA, mappingB, onlyCompareOriginal) {
        var cmp = strcmp(mappingA.source, mappingB.source);
        if (cmp !== 0) {
          return cmp;
        }

        cmp = mappingA.originalLine - mappingB.originalLine;
        if (cmp !== 0) {
          return cmp;
        }

        cmp = mappingA.originalColumn - mappingB.originalColumn;
        if (cmp !== 0 || onlyCompareOriginal) {
          return cmp;
        }

        cmp = mappingA.generatedColumn - mappingB.generatedColumn;
        if (cmp !== 0) {
          return cmp;
        }

        cmp = mappingA.generatedLine - mappingB.generatedLine;
        if (cmp !== 0) {
          return cmp;
        }

        return strcmp(mappingA.name, mappingB.name);
      }
      exports.compareByOriginalPositions = compareByOriginalPositions;

      /**
       * Comparator between two mappings with deflated source and name indices where
       * the generated positions are compared.
       *
       * Optionally pass in `true` as `onlyCompareGenerated` to consider two
       * mappings with the same generated line and column, but different
       * source/name/original line and column the same. Useful when searching for a
       * mapping with a stubbed out mapping.
       */
      function compareByGeneratedPositionsDeflated(mappingA, mappingB, onlyCompareGenerated) {
        var cmp = mappingA.generatedLine - mappingB.generatedLine;
        if (cmp !== 0) {
          return cmp;
        }

        cmp = mappingA.generatedColumn - mappingB.generatedColumn;
        if (cmp !== 0 || onlyCompareGenerated) {
          return cmp;
        }

        cmp = strcmp(mappingA.source, mappingB.source);
        if (cmp !== 0) {
          return cmp;
        }

        cmp = mappingA.originalLine - mappingB.originalLine;
        if (cmp !== 0) {
          return cmp;
        }

        cmp = mappingA.originalColumn - mappingB.originalColumn;
        if (cmp !== 0) {
          return cmp;
        }

        return strcmp(mappingA.name, mappingB.name);
      }
      exports.compareByGeneratedPositionsDeflated = compareByGeneratedPositionsDeflated;

      function strcmp(aStr1, aStr2) {
        if (aStr1 === aStr2) {
          return 0;
        }

        if (aStr1 === null) {
          return 1; // aStr2 !== null
        }

        if (aStr2 === null) {
          return -1; // aStr1 !== null
        }

        if (aStr1 > aStr2) {
          return 1;
        }

        return -1;
      }

      /**
       * Comparator between two mappings with inflated source and name strings where
       * the generated positions are compared.
       */
      function compareByGeneratedPositionsInflated(mappingA, mappingB) {
        var cmp = mappingA.generatedLine - mappingB.generatedLine;
        if (cmp !== 0) {
          return cmp;
        }

        cmp = mappingA.generatedColumn - mappingB.generatedColumn;
        if (cmp !== 0) {
          return cmp;
        }

        cmp = strcmp(mappingA.source, mappingB.source);
        if (cmp !== 0) {
          return cmp;
        }

        cmp = mappingA.originalLine - mappingB.originalLine;
        if (cmp !== 0) {
          return cmp;
        }

        cmp = mappingA.originalColumn - mappingB.originalColumn;
        if (cmp !== 0) {
          return cmp;
        }

        return strcmp(mappingA.name, mappingB.name);
      }
      exports.compareByGeneratedPositionsInflated = compareByGeneratedPositionsInflated;

      /**
       * Strip any JSON XSSI avoidance prefix from the string (as documented
       * in the source maps specification), and then parse the string as
       * JSON.
       */
      function parseSourceMapInput(str) {
        return JSON.parse(str.replace(/^\)]}'[^\n]*\n/, ''));
      }
      exports.parseSourceMapInput = parseSourceMapInput;

      /**
       * Compute the URL of a source given the the source root, the source's
       * URL, and the source map's URL.
       */
      function computeSourceURL(sourceRoot, sourceURL, sourceMapURL) {
        sourceURL = sourceURL || '';

        if (sourceRoot) {
          // This follows what Chrome does.
          if (sourceRoot[sourceRoot.length - 1] !== '/' && sourceURL[0] !== '/') {
            sourceRoot += '/';
          }
          // The spec says:
          //   Line 4: An optional source root, useful for relocating source
          //   files on a server or removing repeated values in the
          //   “sources” entry.  This value is prepended to the individual
          //   entries in the “source” field.
          sourceURL = sourceRoot + sourceURL;
        }

        // Historically, SourceMapConsumer did not take the sourceMapURL as
        // a parameter.  This mode is still somewhat supported, which is why
        // this code block is conditional.  However, it's preferable to pass
        // the source map URL to SourceMapConsumer, so that this function
        // can implement the source URL resolution algorithm as outlined in
        // the spec.  This block is basically the equivalent of:
        //    new URL(sourceURL, sourceMapURL).toString()
        // ... except it avoids using URL, which wasn't available in the
        // older releases of node still supported by this library.
        //
        // The spec says:
        //   If the sources are not absolute URLs after prepending of the
        //   “sourceRoot”, the sources are resolved relative to the
        //   SourceMap (like resolving script src in a html document).
        if (sourceMapURL) {
          var parsed = urlParse(sourceMapURL);
          if (!parsed) {
            throw new Error("sourceMapURL could not be parsed");
          }
          if (parsed.path) {
            // Strip the last path component, but keep the "/".
            var index = parsed.path.lastIndexOf('/');
            if (index >= 0) {
              parsed.path = parsed.path.substring(0, index + 1);
            }
          }
          sourceURL = join(urlGenerate(parsed), sourceURL);
        }

        return normalize(sourceURL);
      }
      exports.computeSourceURL = computeSourceURL;
      });
      util.getArg;
      util.urlParse;
      util.urlGenerate;
      util.normalize;
      util.join;
      util.isAbsolute;
      util.relative;
      util.toSetString;
      util.fromSetString;
      util.compareByOriginalPositions;
      util.compareByGeneratedPositionsDeflated;
      util.compareByGeneratedPositionsInflated;
      util.parseSourceMapInput;
      util.computeSourceURL;

      /* -*- Mode: js; js-indent-level: 2; -*- */
      /*
       * Copyright 2011 Mozilla Foundation and contributors
       * Licensed under the New BSD license. See LICENSE or:
       * http://opensource.org/licenses/BSD-3-Clause
       */


      var has = Object.prototype.hasOwnProperty;
      var hasNativeMap = typeof Map !== "undefined";

      /**
       * A data structure which is a combination of an array and a set. Adding a new
       * member is O(1), testing for membership is O(1), and finding the index of an
       * element is O(1). Removing elements from the set is not supported. Only
       * strings are supported for membership.
       */
      function ArraySet() {
        this._array = [];
        this._set = hasNativeMap ? new Map() : Object.create(null);
      }

      /**
       * Static method for creating ArraySet instances from an existing array.
       */
      ArraySet.fromArray = function ArraySet_fromArray(aArray, aAllowDuplicates) {
        var set = new ArraySet();
        for (var i = 0, len = aArray.length; i < len; i++) {
          set.add(aArray[i], aAllowDuplicates);
        }
        return set;
      };

      /**
       * Return how many unique items are in this ArraySet. If duplicates have been
       * added, than those do not count towards the size.
       *
       * @returns Number
       */
      ArraySet.prototype.size = function ArraySet_size() {
        return hasNativeMap ? this._set.size : Object.getOwnPropertyNames(this._set).length;
      };

      /**
       * Add the given string to this set.
       *
       * @param String aStr
       */
      ArraySet.prototype.add = function ArraySet_add(aStr, aAllowDuplicates) {
        var sStr = hasNativeMap ? aStr : util.toSetString(aStr);
        var isDuplicate = hasNativeMap ? this.has(aStr) : has.call(this._set, sStr);
        var idx = this._array.length;
        if (!isDuplicate || aAllowDuplicates) {
          this._array.push(aStr);
        }
        if (!isDuplicate) {
          if (hasNativeMap) {
            this._set.set(aStr, idx);
          } else {
            this._set[sStr] = idx;
          }
        }
      };

      /**
       * Is the given string a member of this set?
       *
       * @param String aStr
       */
      ArraySet.prototype.has = function ArraySet_has(aStr) {
        if (hasNativeMap) {
          return this._set.has(aStr);
        } else {
          var sStr = util.toSetString(aStr);
          return has.call(this._set, sStr);
        }
      };

      /**
       * What is the index of the given string in the array?
       *
       * @param String aStr
       */
      ArraySet.prototype.indexOf = function ArraySet_indexOf(aStr) {
        if (hasNativeMap) {
          var idx = this._set.get(aStr);
          if (idx >= 0) {
              return idx;
          }
        } else {
          var sStr = util.toSetString(aStr);
          if (has.call(this._set, sStr)) {
            return this._set[sStr];
          }
        }

        throw new Error('"' + aStr + '" is not in the set.');
      };

      /**
       * What is the element at the given index?
       *
       * @param Number aIdx
       */
      ArraySet.prototype.at = function ArraySet_at(aIdx) {
        if (aIdx >= 0 && aIdx < this._array.length) {
          return this._array[aIdx];
        }
        throw new Error('No element indexed by ' + aIdx);
      };

      /**
       * Returns the array representation of this set (which has the proper indices
       * indicated by indexOf). Note that this is a copy of the internal array used
       * for storing the members so that no one can mess with internal state.
       */
      ArraySet.prototype.toArray = function ArraySet_toArray() {
        return this._array.slice();
      };

      var ArraySet_1 = ArraySet;

      var arraySet = {
      	ArraySet: ArraySet_1
      };

      /* -*- Mode: js; js-indent-level: 2; -*- */
      /*
       * Copyright 2014 Mozilla Foundation and contributors
       * Licensed under the New BSD license. See LICENSE or:
       * http://opensource.org/licenses/BSD-3-Clause
       */



      /**
       * Determine whether mappingB is after mappingA with respect to generated
       * position.
       */
      function generatedPositionAfter(mappingA, mappingB) {
        // Optimized for most common case
        var lineA = mappingA.generatedLine;
        var lineB = mappingB.generatedLine;
        var columnA = mappingA.generatedColumn;
        var columnB = mappingB.generatedColumn;
        return lineB > lineA || lineB == lineA && columnB >= columnA ||
               util.compareByGeneratedPositionsInflated(mappingA, mappingB) <= 0;
      }

      /**
       * A data structure to provide a sorted view of accumulated mappings in a
       * performance conscious manner. It trades a neglibable overhead in general
       * case for a large speedup in case of mappings being added in order.
       */
      function MappingList() {
        this._array = [];
        this._sorted = true;
        // Serves as infimum
        this._last = {generatedLine: -1, generatedColumn: 0};
      }

      /**
       * Iterate through internal items. This method takes the same arguments that
       * `Array.prototype.forEach` takes.
       *
       * NOTE: The order of the mappings is NOT guaranteed.
       */
      MappingList.prototype.unsortedForEach =
        function MappingList_forEach(aCallback, aThisArg) {
          this._array.forEach(aCallback, aThisArg);
        };

      /**
       * Add the given source mapping.
       *
       * @param Object aMapping
       */
      MappingList.prototype.add = function MappingList_add(aMapping) {
        if (generatedPositionAfter(this._last, aMapping)) {
          this._last = aMapping;
          this._array.push(aMapping);
        } else {
          this._sorted = false;
          this._array.push(aMapping);
        }
      };

      /**
       * Returns the flat, sorted array of mappings. The mappings are sorted by
       * generated position.
       *
       * WARNING: This method returns internal data without copying, for
       * performance. The return value must NOT be mutated, and should be treated as
       * an immutable borrow. If you want to take ownership, you must make your own
       * copy.
       */
      MappingList.prototype.toArray = function MappingList_toArray() {
        if (!this._sorted) {
          this._array.sort(util.compareByGeneratedPositionsInflated);
          this._sorted = true;
        }
        return this._array;
      };

      var MappingList_1 = MappingList;

      var mappingList = {
      	MappingList: MappingList_1
      };

      /* -*- Mode: js; js-indent-level: 2; -*- */
      /*
       * Copyright 2011 Mozilla Foundation and contributors
       * Licensed under the New BSD license. See LICENSE or:
       * http://opensource.org/licenses/BSD-3-Clause
       */



      var ArraySet$1 = arraySet.ArraySet;
      var MappingList$1 = mappingList.MappingList;

      /**
       * An instance of the SourceMapGenerator represents a source map which is
       * being built incrementally. You may pass an object with the following
       * properties:
       *
       *   - file: The filename of the generated source.
       *   - sourceRoot: A root for all relative URLs in this source map.
       */
      function SourceMapGenerator(aArgs) {
        if (!aArgs) {
          aArgs = {};
        }
        this._file = util.getArg(aArgs, 'file', null);
        this._sourceRoot = util.getArg(aArgs, 'sourceRoot', null);
        this._skipValidation = util.getArg(aArgs, 'skipValidation', false);
        this._sources = new ArraySet$1();
        this._names = new ArraySet$1();
        this._mappings = new MappingList$1();
        this._sourcesContents = null;
      }

      SourceMapGenerator.prototype._version = 3;

      /**
       * Creates a new SourceMapGenerator based on a SourceMapConsumer
       *
       * @param aSourceMapConsumer The SourceMap.
       */
      SourceMapGenerator.fromSourceMap =
        function SourceMapGenerator_fromSourceMap(aSourceMapConsumer) {
          var sourceRoot = aSourceMapConsumer.sourceRoot;
          var generator = new SourceMapGenerator({
            file: aSourceMapConsumer.file,
            sourceRoot: sourceRoot
          });
          aSourceMapConsumer.eachMapping(function (mapping) {
            var newMapping = {
              generated: {
                line: mapping.generatedLine,
                column: mapping.generatedColumn
              }
            };

            if (mapping.source != null) {
              newMapping.source = mapping.source;
              if (sourceRoot != null) {
                newMapping.source = util.relative(sourceRoot, newMapping.source);
              }

              newMapping.original = {
                line: mapping.originalLine,
                column: mapping.originalColumn
              };

              if (mapping.name != null) {
                newMapping.name = mapping.name;
              }
            }

            generator.addMapping(newMapping);
          });
          aSourceMapConsumer.sources.forEach(function (sourceFile) {
            var sourceRelative = sourceFile;
            if (sourceRoot !== null) {
              sourceRelative = util.relative(sourceRoot, sourceFile);
            }

            if (!generator._sources.has(sourceRelative)) {
              generator._sources.add(sourceRelative);
            }

            var content = aSourceMapConsumer.sourceContentFor(sourceFile);
            if (content != null) {
              generator.setSourceContent(sourceFile, content);
            }
          });
          return generator;
        };

      /**
       * Add a single mapping from original source line and column to the generated
       * source's line and column for this source map being created. The mapping
       * object should have the following properties:
       *
       *   - generated: An object with the generated line and column positions.
       *   - original: An object with the original line and column positions.
       *   - source: The original source file (relative to the sourceRoot).
       *   - name: An optional original token name for this mapping.
       */
      SourceMapGenerator.prototype.addMapping =
        function SourceMapGenerator_addMapping(aArgs) {
          var generated = util.getArg(aArgs, 'generated');
          var original = util.getArg(aArgs, 'original', null);
          var source = util.getArg(aArgs, 'source', null);
          var name = util.getArg(aArgs, 'name', null);

          if (!this._skipValidation) {
            this._validateMapping(generated, original, source, name);
          }

          if (source != null) {
            source = String(source);
            if (!this._sources.has(source)) {
              this._sources.add(source);
            }
          }

          if (name != null) {
            name = String(name);
            if (!this._names.has(name)) {
              this._names.add(name);
            }
          }

          this._mappings.add({
            generatedLine: generated.line,
            generatedColumn: generated.column,
            originalLine: original != null && original.line,
            originalColumn: original != null && original.column,
            source: source,
            name: name
          });
        };

      /**
       * Set the source content for a source file.
       */
      SourceMapGenerator.prototype.setSourceContent =
        function SourceMapGenerator_setSourceContent(aSourceFile, aSourceContent) {
          var source = aSourceFile;
          if (this._sourceRoot != null) {
            source = util.relative(this._sourceRoot, source);
          }

          if (aSourceContent != null) {
            // Add the source content to the _sourcesContents map.
            // Create a new _sourcesContents map if the property is null.
            if (!this._sourcesContents) {
              this._sourcesContents = Object.create(null);
            }
            this._sourcesContents[util.toSetString(source)] = aSourceContent;
          } else if (this._sourcesContents) {
            // Remove the source file from the _sourcesContents map.
            // If the _sourcesContents map is empty, set the property to null.
            delete this._sourcesContents[util.toSetString(source)];
            if (Object.keys(this._sourcesContents).length === 0) {
              this._sourcesContents = null;
            }
          }
        };

      /**
       * Applies the mappings of a sub-source-map for a specific source file to the
       * source map being generated. Each mapping to the supplied source file is
       * rewritten using the supplied source map. Note: The resolution for the
       * resulting mappings is the minimium of this map and the supplied map.
       *
       * @param aSourceMapConsumer The source map to be applied.
       * @param aSourceFile Optional. The filename of the source file.
       *        If omitted, SourceMapConsumer's file property will be used.
       * @param aSourceMapPath Optional. The dirname of the path to the source map
       *        to be applied. If relative, it is relative to the SourceMapConsumer.
       *        This parameter is needed when the two source maps aren't in the same
       *        directory, and the source map to be applied contains relative source
       *        paths. If so, those relative source paths need to be rewritten
       *        relative to the SourceMapGenerator.
       */
      SourceMapGenerator.prototype.applySourceMap =
        function SourceMapGenerator_applySourceMap(aSourceMapConsumer, aSourceFile, aSourceMapPath) {
          var sourceFile = aSourceFile;
          // If aSourceFile is omitted, we will use the file property of the SourceMap
          if (aSourceFile == null) {
            if (aSourceMapConsumer.file == null) {
              throw new Error(
                'SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, ' +
                'or the source map\'s "file" property. Both were omitted.'
              );
            }
            sourceFile = aSourceMapConsumer.file;
          }
          var sourceRoot = this._sourceRoot;
          // Make "sourceFile" relative if an absolute Url is passed.
          if (sourceRoot != null) {
            sourceFile = util.relative(sourceRoot, sourceFile);
          }
          // Applying the SourceMap can add and remove items from the sources and
          // the names array.
          var newSources = new ArraySet$1();
          var newNames = new ArraySet$1();

          // Find mappings for the "sourceFile"
          this._mappings.unsortedForEach(function (mapping) {
            if (mapping.source === sourceFile && mapping.originalLine != null) {
              // Check if it can be mapped by the source map, then update the mapping.
              var original = aSourceMapConsumer.originalPositionFor({
                line: mapping.originalLine,
                column: mapping.originalColumn
              });
              if (original.source != null) {
                // Copy mapping
                mapping.source = original.source;
                if (aSourceMapPath != null) {
                  mapping.source = util.join(aSourceMapPath, mapping.source);
                }
                if (sourceRoot != null) {
                  mapping.source = util.relative(sourceRoot, mapping.source);
                }
                mapping.originalLine = original.line;
                mapping.originalColumn = original.column;
                if (original.name != null) {
                  mapping.name = original.name;
                }
              }
            }

            var source = mapping.source;
            if (source != null && !newSources.has(source)) {
              newSources.add(source);
            }

            var name = mapping.name;
            if (name != null && !newNames.has(name)) {
              newNames.add(name);
            }

          }, this);
          this._sources = newSources;
          this._names = newNames;

          // Copy sourcesContents of applied map.
          aSourceMapConsumer.sources.forEach(function (sourceFile) {
            var content = aSourceMapConsumer.sourceContentFor(sourceFile);
            if (content != null) {
              if (aSourceMapPath != null) {
                sourceFile = util.join(aSourceMapPath, sourceFile);
              }
              if (sourceRoot != null) {
                sourceFile = util.relative(sourceRoot, sourceFile);
              }
              this.setSourceContent(sourceFile, content);
            }
          }, this);
        };

      /**
       * A mapping can have one of the three levels of data:
       *
       *   1. Just the generated position.
       *   2. The Generated position, original position, and original source.
       *   3. Generated and original position, original source, as well as a name
       *      token.
       *
       * To maintain consistency, we validate that any new mapping being added falls
       * in to one of these categories.
       */
      SourceMapGenerator.prototype._validateMapping =
        function SourceMapGenerator_validateMapping(aGenerated, aOriginal, aSource,
                                                    aName) {
          // When aOriginal is truthy but has empty values for .line and .column,
          // it is most likely a programmer error. In this case we throw a very
          // specific error message to try to guide them the right way.
          // For example: https://github.com/Polymer/polymer-bundler/pull/519
          if (aOriginal && typeof aOriginal.line !== 'number' && typeof aOriginal.column !== 'number') {
              throw new Error(
                  'original.line and original.column are not numbers -- you probably meant to omit ' +
                  'the original mapping entirely and only map the generated position. If so, pass ' +
                  'null for the original mapping instead of an object with empty or null values.'
              );
          }

          if (aGenerated && 'line' in aGenerated && 'column' in aGenerated
              && aGenerated.line > 0 && aGenerated.column >= 0
              && !aOriginal && !aSource && !aName) {
            // Case 1.
            return;
          }
          else if (aGenerated && 'line' in aGenerated && 'column' in aGenerated
                   && aOriginal && 'line' in aOriginal && 'column' in aOriginal
                   && aGenerated.line > 0 && aGenerated.column >= 0
                   && aOriginal.line > 0 && aOriginal.column >= 0
                   && aSource) {
            // Cases 2 and 3.
            return;
          }
          else {
            throw new Error('Invalid mapping: ' + JSON.stringify({
              generated: aGenerated,
              source: aSource,
              original: aOriginal,
              name: aName
            }));
          }
        };

      /**
       * Serialize the accumulated mappings in to the stream of base 64 VLQs
       * specified by the source map format.
       */
      SourceMapGenerator.prototype._serializeMappings =
        function SourceMapGenerator_serializeMappings() {
          var previousGeneratedColumn = 0;
          var previousGeneratedLine = 1;
          var previousOriginalColumn = 0;
          var previousOriginalLine = 0;
          var previousName = 0;
          var previousSource = 0;
          var result = '';
          var next;
          var mapping;
          var nameIdx;
          var sourceIdx;

          var mappings = this._mappings.toArray();
          for (var i = 0, len = mappings.length; i < len; i++) {
            mapping = mappings[i];
            next = '';

            if (mapping.generatedLine !== previousGeneratedLine) {
              previousGeneratedColumn = 0;
              while (mapping.generatedLine !== previousGeneratedLine) {
                next += ';';
                previousGeneratedLine++;
              }
            }
            else {
              if (i > 0) {
                if (!util.compareByGeneratedPositionsInflated(mapping, mappings[i - 1])) {
                  continue;
                }
                next += ',';
              }
            }

            next += base64Vlq.encode(mapping.generatedColumn
                                       - previousGeneratedColumn);
            previousGeneratedColumn = mapping.generatedColumn;

            if (mapping.source != null) {
              sourceIdx = this._sources.indexOf(mapping.source);
              next += base64Vlq.encode(sourceIdx - previousSource);
              previousSource = sourceIdx;

              // lines are stored 0-based in SourceMap spec version 3
              next += base64Vlq.encode(mapping.originalLine - 1
                                         - previousOriginalLine);
              previousOriginalLine = mapping.originalLine - 1;

              next += base64Vlq.encode(mapping.originalColumn
                                         - previousOriginalColumn);
              previousOriginalColumn = mapping.originalColumn;

              if (mapping.name != null) {
                nameIdx = this._names.indexOf(mapping.name);
                next += base64Vlq.encode(nameIdx - previousName);
                previousName = nameIdx;
              }
            }

            result += next;
          }

          return result;
        };

      SourceMapGenerator.prototype._generateSourcesContent =
        function SourceMapGenerator_generateSourcesContent(aSources, aSourceRoot) {
          return aSources.map(function (source) {
            if (!this._sourcesContents) {
              return null;
            }
            if (aSourceRoot != null) {
              source = util.relative(aSourceRoot, source);
            }
            var key = util.toSetString(source);
            return Object.prototype.hasOwnProperty.call(this._sourcesContents, key)
              ? this._sourcesContents[key]
              : null;
          }, this);
        };

      /**
       * Externalize the source map.
       */
      SourceMapGenerator.prototype.toJSON =
        function SourceMapGenerator_toJSON() {
          var map = {
            version: this._version,
            sources: this._sources.toArray(),
            names: this._names.toArray(),
            mappings: this._serializeMappings()
          };
          if (this._file != null) {
            map.file = this._file;
          }
          if (this._sourceRoot != null) {
            map.sourceRoot = this._sourceRoot;
          }
          if (this._sourcesContents) {
            map.sourcesContent = this._generateSourcesContent(map.sources, map.sourceRoot);
          }

          return map;
        };

      /**
       * Render the source map being generated to a string.
       */
      SourceMapGenerator.prototype.toString =
        function SourceMapGenerator_toString() {
          return JSON.stringify(this.toJSON());
        };

      var SourceMapGenerator_1 = SourceMapGenerator;

      var sourceMapGenerator = {
      	SourceMapGenerator: SourceMapGenerator_1
      };

      var SourceMapGenerator$1 = sourceMapGenerator.SourceMapGenerator;
      var trackNodes = {
          Atrule: true,
          Selector: true,
          Declaration: true
      };

      var sourceMap = function generateSourceMap(handlers) {
          var map = new SourceMapGenerator$1();
          var line = 1;
          var column = 0;
          var generated = {
              line: 1,
              column: 0
          };
          var original = {
              line: 0, // should be zero to add first mapping
              column: 0
          };
          var sourceMappingActive = false;
          var activatedGenerated = {
              line: 1,
              column: 0
          };
          var activatedMapping = {
              generated: activatedGenerated
          };

          var handlersNode = handlers.node;
          handlers.node = function(node) {
              if (node.loc && node.loc.start && trackNodes.hasOwnProperty(node.type)) {
                  var nodeLine = node.loc.start.line;
                  var nodeColumn = node.loc.start.column - 1;

                  if (original.line !== nodeLine ||
                      original.column !== nodeColumn) {
                      original.line = nodeLine;
                      original.column = nodeColumn;

                      generated.line = line;
                      generated.column = column;

                      if (sourceMappingActive) {
                          sourceMappingActive = false;
                          if (generated.line !== activatedGenerated.line ||
                              generated.column !== activatedGenerated.column) {
                              map.addMapping(activatedMapping);
                          }
                      }

                      sourceMappingActive = true;
                      map.addMapping({
                          source: node.loc.source,
                          original: original,
                          generated: generated
                      });
                  }
              }

              handlersNode.call(this, node);

              if (sourceMappingActive && trackNodes.hasOwnProperty(node.type)) {
                  activatedGenerated.line = line;
                  activatedGenerated.column = column;
              }
          };

          var handlersChunk = handlers.chunk;
          handlers.chunk = function(chunk) {
              for (var i = 0; i < chunk.length; i++) {
                  if (chunk.charCodeAt(i) === 10) { // \n
                      line++;
                      column = 0;
                  } else {
                      column++;
                  }
              }

              handlersChunk(chunk);
          };

          var handlersResult = handlers.result;
          handlers.result = function() {
              if (sourceMappingActive) {
                  map.addMapping(activatedMapping);
              }

              return {
                  css: handlersResult(),
                  map: map
              };
          };

          return handlers;
      };

      var hasOwnProperty$3 = Object.prototype.hasOwnProperty;

      function processChildren(node, delimeter) {
          var list = node.children;
          var prev = null;

          if (typeof delimeter !== 'function') {
              list.forEach(this.node, this);
          } else {
              list.forEach(function(node) {
                  if (prev !== null) {
                      delimeter.call(this, prev);
                  }

                  this.node(node);
                  prev = node;
              }, this);
          }
      }

      var create$1 = function createGenerator(config) {
          function processNode(node) {
              if (hasOwnProperty$3.call(types, node.type)) {
                  types[node.type].call(this, node);
              } else {
                  throw new Error('Unknown node type: ' + node.type);
              }
          }

          var types = {};

          if (config.node) {
              for (var name in config.node) {
                  types[name] = config.node[name].generate;
              }
          }

          return function(node, options) {
              var buffer = '';
              var handlers = {
                  children: processChildren,
                  node: processNode,
                  chunk: function(chunk) {
                      buffer += chunk;
                  },
                  result: function() {
                      return buffer;
                  }
              };

              if (options) {
                  if (typeof options.decorator === 'function') {
                      handlers = options.decorator(handlers);
                  }

                  if (options.sourceMap) {
                      handlers = sourceMap(handlers);
                  }
              }

              handlers.node(node);

              return handlers.result();
          };
      };

      var create$2 = function createConvertors(walk) {
          return {
              fromPlainObject: function(ast) {
                  walk(ast, {
                      enter: function(node) {
                          if (node.children && node.children instanceof List_1 === false) {
                              node.children = new List_1().fromArray(node.children);
                          }
                      }
                  });

                  return ast;
              },
              toPlainObject: function(ast) {
                  walk(ast, {
                      leave: function(node) {
                          if (node.children && node.children instanceof List_1) {
                              node.children = node.children.toArray();
                          }
                      }
                  });

                  return ast;
              }
          };
      };

      var hasOwnProperty$4 = Object.prototype.hasOwnProperty;
      var noop$3 = function() {};

      function ensureFunction$1(value) {
          return typeof value === 'function' ? value : noop$3;
      }

      function invokeForType(fn, type) {
          return function(node, item, list) {
              if (node.type === type) {
                  fn.call(this, node, item, list);
              }
          };
      }

      function getWalkersFromStructure(name, nodeType) {
          var structure = nodeType.structure;
          var walkers = [];

          for (var key in structure) {
              if (hasOwnProperty$4.call(structure, key) === false) {
                  continue;
              }

              var fieldTypes = structure[key];
              var walker = {
                  name: key,
                  type: false,
                  nullable: false
              };

              if (!Array.isArray(structure[key])) {
                  fieldTypes = [structure[key]];
              }

              for (var i = 0; i < fieldTypes.length; i++) {
                  var fieldType = fieldTypes[i];
                  if (fieldType === null) {
                      walker.nullable = true;
                  } else if (typeof fieldType === 'string') {
                      walker.type = 'node';
                  } else if (Array.isArray(fieldType)) {
                      walker.type = 'list';
                  }
              }

              if (walker.type) {
                  walkers.push(walker);
              }
          }

          if (walkers.length) {
              return {
                  context: nodeType.walkContext,
                  fields: walkers
              };
          }

          return null;
      }

      function getTypesFromConfig(config) {
          var types = {};

          for (var name in config.node) {
              if (hasOwnProperty$4.call(config.node, name)) {
                  var nodeType = config.node[name];

                  if (!nodeType.structure) {
                      throw new Error('Missed `structure` field in `' + name + '` node type definition');
                  }

                  types[name] = getWalkersFromStructure(name, nodeType);
              }
          }

          return types;
      }

      function createTypeIterator(config, reverse) {
          var fields = config.fields.slice();
          var contextName = config.context;
          var useContext = typeof contextName === 'string';

          if (reverse) {
              fields.reverse();
          }

          return function(node, context, walk, walkReducer) {
              var prevContextValue;

              if (useContext) {
                  prevContextValue = context[contextName];
                  context[contextName] = node;
              }

              for (var i = 0; i < fields.length; i++) {
                  var field = fields[i];
                  var ref = node[field.name];

                  if (!field.nullable || ref) {
                      if (field.type === 'list') {
                          var breakWalk = reverse
                              ? ref.reduceRight(walkReducer, false)
                              : ref.reduce(walkReducer, false);

                          if (breakWalk) {
                              return true;
                          }
                      } else if (walk(ref)) {
                          return true;
                      }
                  }
              }

              if (useContext) {
                  context[contextName] = prevContextValue;
              }
          };
      }

      function createFastTraveralMap(iterators) {
          return {
              Atrule: {
                  StyleSheet: iterators.StyleSheet,
                  Atrule: iterators.Atrule,
                  Rule: iterators.Rule,
                  Block: iterators.Block
              },
              Rule: {
                  StyleSheet: iterators.StyleSheet,
                  Atrule: iterators.Atrule,
                  Rule: iterators.Rule,
                  Block: iterators.Block
              },
              Declaration: {
                  StyleSheet: iterators.StyleSheet,
                  Atrule: iterators.Atrule,
                  Rule: iterators.Rule,
                  Block: iterators.Block,
                  DeclarationList: iterators.DeclarationList
              }
          };
      }

      var create$3 = function createWalker(config) {
          var types = getTypesFromConfig(config);
          var iteratorsNatural = {};
          var iteratorsReverse = {};
          var breakWalk = Symbol('break-walk');
          var skipNode = Symbol('skip-node');

          for (var name in types) {
              if (hasOwnProperty$4.call(types, name) && types[name] !== null) {
                  iteratorsNatural[name] = createTypeIterator(types[name], false);
                  iteratorsReverse[name] = createTypeIterator(types[name], true);
              }
          }

          var fastTraversalIteratorsNatural = createFastTraveralMap(iteratorsNatural);
          var fastTraversalIteratorsReverse = createFastTraveralMap(iteratorsReverse);

          var walk = function(root, options) {
              function walkNode(node, item, list) {
                  var enterRet = enter.call(context, node, item, list);

                  if (enterRet === breakWalk) {
                      return true;
                  }

                  if (enterRet === skipNode) {
                      return false;
                  }

                  if (iterators.hasOwnProperty(node.type)) {
                      if (iterators[node.type](node, context, walkNode, walkReducer)) {
                          return true;
                      }
                  }

                  if (leave.call(context, node, item, list) === breakWalk) {
                      return true;
                  }

                  return false;
              }

              var walkReducer = (ret, data, item, list) => ret || walkNode(data, item, list);
              var enter = noop$3;
              var leave = noop$3;
              var iterators = iteratorsNatural;
              var context = {
                  break: breakWalk,
                  skip: skipNode,

                  root: root,
                  stylesheet: null,
                  atrule: null,
                  atrulePrelude: null,
                  rule: null,
                  selector: null,
                  block: null,
                  declaration: null,
                  function: null
              };

              if (typeof options === 'function') {
                  enter = options;
              } else if (options) {
                  enter = ensureFunction$1(options.enter);
                  leave = ensureFunction$1(options.leave);

                  if (options.reverse) {
                      iterators = iteratorsReverse;
                  }

                  if (options.visit) {
                      if (fastTraversalIteratorsNatural.hasOwnProperty(options.visit)) {
                          iterators = options.reverse
                              ? fastTraversalIteratorsReverse[options.visit]
                              : fastTraversalIteratorsNatural[options.visit];
                      } else if (!types.hasOwnProperty(options.visit)) {
                          throw new Error('Bad value `' + options.visit + '` for `visit` option (should be: ' + Object.keys(types).join(', ') + ')');
                      }

                      enter = invokeForType(enter, options.visit);
                      leave = invokeForType(leave, options.visit);
                  }
              }

              if (enter === noop$3 && leave === noop$3) {
                  throw new Error('Neither `enter` nor `leave` walker handler is set or both aren\'t a function');
              }

              walkNode(root);
          };

          walk.break = breakWalk;
          walk.skip = skipNode;

          walk.find = function(ast, fn) {
              var found = null;

              walk(ast, function(node, item, list) {
                  if (fn.call(this, node, item, list)) {
                      found = node;
                      return breakWalk;
                  }
              });

              return found;
          };

          walk.findLast = function(ast, fn) {
              var found = null;

              walk(ast, {
                  reverse: true,
                  enter: function(node, item, list) {
                      if (fn.call(this, node, item, list)) {
                          found = node;
                          return breakWalk;
                      }
                  }
              });

              return found;
          };

          walk.findAll = function(ast, fn) {
              var found = [];

              walk(ast, function(node, item, list) {
                  if (fn.call(this, node, item, list)) {
                      found.push(node);
                  }
              });

              return found;
          };

          return walk;
      };

      var clone = function clone(node) {
          var result = {};

          for (var key in node) {
              var value = node[key];

              if (value) {
                  if (Array.isArray(value) || value instanceof List_1) {
                      value = value.map(clone);
                  } else if (value.constructor === Object) {
                      value = clone(value);
                  }
              }

              result[key] = value;
          }

          return result;
      };

      const hasOwnProperty$5 = Object.prototype.hasOwnProperty;
      const shape = {
          generic: true,
          types: appendOrAssign,
          atrules: {
              prelude: appendOrAssignOrNull,
              descriptors: appendOrAssignOrNull
          },
          properties: appendOrAssign,
          parseContext: assign,
          scope: deepAssign,
          atrule: ['parse'],
          pseudo: ['parse'],
          node: ['name', 'structure', 'parse', 'generate', 'walkContext']
      };

      function isObject(value) {
          return value && value.constructor === Object;
      }

      function copy(value) {
          return isObject(value)
              ? Object.assign({}, value)
              : value;
      }

      function assign(dest, src) {
          return Object.assign(dest, src);
      }

      function deepAssign(dest, src) {
          for (const key in src) {
              if (hasOwnProperty$5.call(src, key)) {
                  if (isObject(dest[key])) {
                      deepAssign(dest[key], copy(src[key]));
                  } else {
                      dest[key] = copy(src[key]);
                  }
              }
          }

          return dest;
      }

      function append(a, b) {
          if (typeof b === 'string' && /^\s*\|/.test(b)) {
              return typeof a === 'string'
                  ? a + b
                  : b.replace(/^\s*\|\s*/, '');
          }

          return b || null;
      }

      function appendOrAssign(a, b) {
          if (typeof b === 'string') {
              return append(a, b);
          }

          const result = Object.assign({}, a);
          for (let key in b) {
              if (hasOwnProperty$5.call(b, key)) {
                  result[key] = append(hasOwnProperty$5.call(a, key) ? a[key] : undefined, b[key]);
              }
          }

          return result;
      }

      function appendOrAssignOrNull(a, b) {
          const result = appendOrAssign(a, b);

          return !isObject(result) || Object.keys(result).length
              ? result
              : null;
      }

      function mix(dest, src, shape) {
          for (const key in shape) {
              if (hasOwnProperty$5.call(shape, key) === false) {
                  continue;
              }

              if (shape[key] === true) {
                  if (key in src) {
                      if (hasOwnProperty$5.call(src, key)) {
                          dest[key] = copy(src[key]);
                      }
                  }
              } else if (shape[key]) {
                  if (typeof shape[key] === 'function') {
                      const fn = shape[key];
                      dest[key] = fn({}, dest[key]);
                      dest[key] = fn(dest[key] || {}, src[key]);
                  } else if (isObject(shape[key])) {
                      const result = {};

                      for (let name in dest[key]) {
                          result[name] = mix({}, dest[key][name], shape[key]);
                      }

                      for (let name in src[key]) {
                          result[name] = mix(result[name] || {}, src[key][name], shape[key]);
                      }

                      dest[key] = result;
                  } else if (Array.isArray(shape[key])) {
                      const res = {};
                      const innerShape = shape[key].reduce(function(s, k) {
                          s[k] = true;
                          return s;
                      }, {});

                      for (const [name, value] of Object.entries(dest[key] || {})) {
                          res[name] = {};
                          if (value) {
                              mix(res[name], value, innerShape);
                          }
                      }

                      for (const name in src[key]) {
                          if (hasOwnProperty$5.call(src[key], name)) {
                              if (!res[name]) {
                                  res[name] = {};
                              }

                              if (src[key] && src[key][name]) {
                                  mix(res[name], src[key][name], innerShape);
                              }
                          }
                      }

                      dest[key] = res;
                  }
              }
          }
          return dest;
      }

      var mix_1 = (dest, src) => mix(dest, src, shape);

      function createSyntax(config) {
          var parse = create(config);
          var walk = create$3(config);
          var generate = create$1(config);
          var convert = create$2(walk);

          var syntax = {
              List: List_1,
              SyntaxError: _SyntaxError,
              TokenStream: TokenStream_1,
              Lexer: Lexer_1,

              vendorPrefix: names.vendorPrefix,
              keyword: names.keyword,
              property: names.property,
              isCustomProperty: names.isCustomProperty,

              definitionSyntax: definitionSyntax,
              lexer: null,
              createLexer: function(config) {
                  return new Lexer_1(config, syntax, syntax.lexer.structure);
              },

              tokenize: tokenizer,
              parse: parse,
              walk: walk,
              generate: generate,

              find: walk.find,
              findLast: walk.findLast,
              findAll: walk.findAll,

              clone: clone,
              fromPlainObject: convert.fromPlainObject,
              toPlainObject: convert.toPlainObject,

              createSyntax: function(config) {
                  return createSyntax(mix_1({}, config));
              },
              fork: function(extension) {
                  var base = mix_1({}, config); // copy of config
                  return createSyntax(
                      typeof extension === 'function'
                          ? extension(base, Object.assign)
                          : mix_1(base, extension)
                  );
              }
          };

          syntax.lexer = new Lexer_1({
              generic: true,
              types: config.types,
              atrules: config.atrules,
              properties: config.properties,
              node: config.node
          }, syntax);

          return syntax;
      }
      var create_1 = function(config) {
          return createSyntax(mix_1({}, config));
      };

      var create$4 = {
      	create: create_1
      };

      var data = {
          "generic": true,
          "types": {
              "absolute-size": "xx-small|x-small|small|medium|large|x-large|xx-large|xxx-large",
              "alpha-value": "<number>|<percentage>",
              "angle-percentage": "<angle>|<percentage>",
              "angular-color-hint": "<angle-percentage>",
              "angular-color-stop": "<color>&&<color-stop-angle>?",
              "angular-color-stop-list": "[<angular-color-stop> [, <angular-color-hint>]?]# , <angular-color-stop>",
              "animateable-feature": "scroll-position|contents|<custom-ident>",
              "attachment": "scroll|fixed|local",
              "attr()": "attr( <attr-name> <type-or-unit>? [, <attr-fallback>]? )",
              "attr-matcher": "['~'|'|'|'^'|'$'|'*']? '='",
              "attr-modifier": "i|s",
              "attribute-selector": "'[' <wq-name> ']'|'[' <wq-name> <attr-matcher> [<string-token>|<ident-token>] <attr-modifier>? ']'",
              "auto-repeat": "repeat( [auto-fill|auto-fit] , [<line-names>? <fixed-size>]+ <line-names>? )",
              "auto-track-list": "[<line-names>? [<fixed-size>|<fixed-repeat>]]* <line-names>? <auto-repeat> [<line-names>? [<fixed-size>|<fixed-repeat>]]* <line-names>?",
              "baseline-position": "[first|last]? baseline",
              "basic-shape": "<inset()>|<circle()>|<ellipse()>|<polygon()>|<path()>",
              "bg-image": "none|<image>",
              "bg-layer": "<bg-image>||<bg-position> [/ <bg-size>]?||<repeat-style>||<attachment>||<box>||<box>",
              "bg-position": "[[left|center|right|top|bottom|<length-percentage>]|[left|center|right|<length-percentage>] [top|center|bottom|<length-percentage>]|[center|[left|right] <length-percentage>?]&&[center|[top|bottom] <length-percentage>?]]",
              "bg-size": "[<length-percentage>|auto]{1,2}|cover|contain",
              "blur()": "blur( <length> )",
              "blend-mode": "normal|multiply|screen|overlay|darken|lighten|color-dodge|color-burn|hard-light|soft-light|difference|exclusion|hue|saturation|color|luminosity",
              "box": "border-box|padding-box|content-box",
              "brightness()": "brightness( <number-percentage> )",
              "calc()": "calc( <calc-sum> )",
              "calc-sum": "<calc-product> [['+'|'-'] <calc-product>]*",
              "calc-product": "<calc-value> ['*' <calc-value>|'/' <number>]*",
              "calc-value": "<number>|<dimension>|<percentage>|( <calc-sum> )",
              "cf-final-image": "<image>|<color>",
              "cf-mixing-image": "<percentage>?&&<image>",
              "circle()": "circle( [<shape-radius>]? [at <position>]? )",
              "clamp()": "clamp( <calc-sum>#{3} )",
              "class-selector": "'.' <ident-token>",
              "clip-source": "<url>",
              "color": "<rgb()>|<rgba()>|<hsl()>|<hsla()>|<hex-color>|<named-color>|currentcolor|<deprecated-system-color>",
              "color-stop": "<color-stop-length>|<color-stop-angle>",
              "color-stop-angle": "<angle-percentage>{1,2}",
              "color-stop-length": "<length-percentage>{1,2}",
              "color-stop-list": "[<linear-color-stop> [, <linear-color-hint>]?]# , <linear-color-stop>",
              "combinator": "'>'|'+'|'~'|['||']",
              "common-lig-values": "[common-ligatures|no-common-ligatures]",
              "compat-auto": "searchfield|textarea|push-button|slider-horizontal|checkbox|radio|square-button|menulist|listbox|meter|progress-bar|button",
              "composite-style": "clear|copy|source-over|source-in|source-out|source-atop|destination-over|destination-in|destination-out|destination-atop|xor",
              "compositing-operator": "add|subtract|intersect|exclude",
              "compound-selector": "[<type-selector>? <subclass-selector>* [<pseudo-element-selector> <pseudo-class-selector>*]*]!",
              "compound-selector-list": "<compound-selector>#",
              "complex-selector": "<compound-selector> [<combinator>? <compound-selector>]*",
              "complex-selector-list": "<complex-selector>#",
              "conic-gradient()": "conic-gradient( [from <angle>]? [at <position>]? , <angular-color-stop-list> )",
              "contextual-alt-values": "[contextual|no-contextual]",
              "content-distribution": "space-between|space-around|space-evenly|stretch",
              "content-list": "[<string>|contents|<image>|<quote>|<target>|<leader()>|<attr()>|counter( <ident> , <'list-style-type'>? )]+",
              "content-position": "center|start|end|flex-start|flex-end",
              "content-replacement": "<image>",
              "contrast()": "contrast( [<number-percentage>] )",
              "counter()": "counter( <custom-ident> , <counter-style>? )",
              "counter-style": "<counter-style-name>|symbols( )",
              "counter-style-name": "<custom-ident>",
              "counters()": "counters( <custom-ident> , <string> , <counter-style>? )",
              "cross-fade()": "cross-fade( <cf-mixing-image> , <cf-final-image>? )",
              "cubic-bezier-timing-function": "ease|ease-in|ease-out|ease-in-out|cubic-bezier( <number [0,1]> , <number> , <number [0,1]> , <number> )",
              "deprecated-system-color": "ActiveBorder|ActiveCaption|AppWorkspace|Background|ButtonFace|ButtonHighlight|ButtonShadow|ButtonText|CaptionText|GrayText|Highlight|HighlightText|InactiveBorder|InactiveCaption|InactiveCaptionText|InfoBackground|InfoText|Menu|MenuText|Scrollbar|ThreeDDarkShadow|ThreeDFace|ThreeDHighlight|ThreeDLightShadow|ThreeDShadow|Window|WindowFrame|WindowText",
              "discretionary-lig-values": "[discretionary-ligatures|no-discretionary-ligatures]",
              "display-box": "contents|none",
              "display-inside": "flow|flow-root|table|flex|grid|ruby",
              "display-internal": "table-row-group|table-header-group|table-footer-group|table-row|table-cell|table-column-group|table-column|table-caption|ruby-base|ruby-text|ruby-base-container|ruby-text-container",
              "display-legacy": "inline-block|inline-list-item|inline-table|inline-flex|inline-grid",
              "display-listitem": "<display-outside>?&&[flow|flow-root]?&&list-item",
              "display-outside": "block|inline|run-in",
              "drop-shadow()": "drop-shadow( <length>{2,3} <color>? )",
              "east-asian-variant-values": "[jis78|jis83|jis90|jis04|simplified|traditional]",
              "east-asian-width-values": "[full-width|proportional-width]",
              "element()": "element( <custom-ident> , [first|start|last|first-except]? )|element( <id-selector> )",
              "ellipse()": "ellipse( [<shape-radius>{2}]? [at <position>]? )",
              "ending-shape": "circle|ellipse",
              "env()": "env( <custom-ident> , <declaration-value>? )",
              "explicit-track-list": "[<line-names>? <track-size>]+ <line-names>?",
              "family-name": "<string>|<custom-ident>+",
              "feature-tag-value": "<string> [<integer>|on|off]?",
              "feature-type": "@stylistic|@historical-forms|@styleset|@character-variant|@swash|@ornaments|@annotation",
              "feature-value-block": "<feature-type> '{' <feature-value-declaration-list> '}'",
              "feature-value-block-list": "<feature-value-block>+",
              "feature-value-declaration": "<custom-ident> : <integer>+ ;",
              "feature-value-declaration-list": "<feature-value-declaration>",
              "feature-value-name": "<custom-ident>",
              "fill-rule": "nonzero|evenodd",
              "filter-function": "<blur()>|<brightness()>|<contrast()>|<drop-shadow()>|<grayscale()>|<hue-rotate()>|<invert()>|<opacity()>|<saturate()>|<sepia()>",
              "filter-function-list": "[<filter-function>|<url>]+",
              "final-bg-layer": "<'background-color'>||<bg-image>||<bg-position> [/ <bg-size>]?||<repeat-style>||<attachment>||<box>||<box>",
              "fit-content()": "fit-content( [<length>|<percentage>] )",
              "fixed-breadth": "<length-percentage>",
              "fixed-repeat": "repeat( [<positive-integer>] , [<line-names>? <fixed-size>]+ <line-names>? )",
              "fixed-size": "<fixed-breadth>|minmax( <fixed-breadth> , <track-breadth> )|minmax( <inflexible-breadth> , <fixed-breadth> )",
              "font-stretch-absolute": "normal|ultra-condensed|extra-condensed|condensed|semi-condensed|semi-expanded|expanded|extra-expanded|ultra-expanded|<percentage>",
              "font-variant-css21": "[normal|small-caps]",
              "font-weight-absolute": "normal|bold|<number [1,1000]>",
              "frequency-percentage": "<frequency>|<percentage>",
              "general-enclosed": "[<function-token> <any-value> )]|( <ident> <any-value> )",
              "generic-family": "serif|sans-serif|cursive|fantasy|monospace|-apple-system",
              "generic-name": "serif|sans-serif|cursive|fantasy|monospace",
              "geometry-box": "<shape-box>|fill-box|stroke-box|view-box",
              "gradient": "<linear-gradient()>|<repeating-linear-gradient()>|<radial-gradient()>|<repeating-radial-gradient()>|<conic-gradient()>|<-legacy-gradient>",
              "grayscale()": "grayscale( <number-percentage> )",
              "grid-line": "auto|<custom-ident>|[<integer>&&<custom-ident>?]|[span&&[<integer>||<custom-ident>]]",
              "historical-lig-values": "[historical-ligatures|no-historical-ligatures]",
              "hsl()": "hsl( <hue> <percentage> <percentage> [/ <alpha-value>]? )|hsl( <hue> , <percentage> , <percentage> , <alpha-value>? )",
              "hsla()": "hsla( <hue> <percentage> <percentage> [/ <alpha-value>]? )|hsla( <hue> , <percentage> , <percentage> , <alpha-value>? )",
              "hue": "<number>|<angle>",
              "hue-rotate()": "hue-rotate( <angle> )",
              "image": "<url>|<image()>|<image-set()>|<element()>|<paint()>|<cross-fade()>|<gradient>",
              "image()": "image( <image-tags>? [<image-src>? , <color>?]! )",
              "image-set()": "image-set( <image-set-option># )",
              "image-set-option": "[<image>|<string>] <resolution>",
              "image-src": "<url>|<string>",
              "image-tags": "ltr|rtl",
              "inflexible-breadth": "<length>|<percentage>|min-content|max-content|auto",
              "inset()": "inset( <length-percentage>{1,4} [round <'border-radius'>]? )",
              "invert()": "invert( <number-percentage> )",
              "keyframes-name": "<custom-ident>|<string>",
              "keyframe-block": "<keyframe-selector># { <declaration-list> }",
              "keyframe-block-list": "<keyframe-block>+",
              "keyframe-selector": "from|to|<percentage>",
              "leader()": "leader( <leader-type> )",
              "leader-type": "dotted|solid|space|<string>",
              "length-percentage": "<length>|<percentage>",
              "line-names": "'[' <custom-ident>* ']'",
              "line-name-list": "[<line-names>|<name-repeat>]+",
              "line-style": "none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset",
              "line-width": "<length>|thin|medium|thick",
              "linear-color-hint": "<length-percentage>",
              "linear-color-stop": "<color> <color-stop-length>?",
              "linear-gradient()": "linear-gradient( [<angle>|to <side-or-corner>]? , <color-stop-list> )",
              "mask-layer": "<mask-reference>||<position> [/ <bg-size>]?||<repeat-style>||<geometry-box>||[<geometry-box>|no-clip]||<compositing-operator>||<masking-mode>",
              "mask-position": "[<length-percentage>|left|center|right] [<length-percentage>|top|center|bottom]?",
              "mask-reference": "none|<image>|<mask-source>",
              "mask-source": "<url>",
              "masking-mode": "alpha|luminance|match-source",
              "matrix()": "matrix( <number>#{6} )",
              "matrix3d()": "matrix3d( <number>#{16} )",
              "max()": "max( <calc-sum># )",
              "media-and": "<media-in-parens> [and <media-in-parens>]+",
              "media-condition": "<media-not>|<media-and>|<media-or>|<media-in-parens>",
              "media-condition-without-or": "<media-not>|<media-and>|<media-in-parens>",
              "media-feature": "( [<mf-plain>|<mf-boolean>|<mf-range>] )",
              "media-in-parens": "( <media-condition> )|<media-feature>|<general-enclosed>",
              "media-not": "not <media-in-parens>",
              "media-or": "<media-in-parens> [or <media-in-parens>]+",
              "media-query": "<media-condition>|[not|only]? <media-type> [and <media-condition-without-or>]?",
              "media-query-list": "<media-query>#",
              "media-type": "<ident>",
              "mf-boolean": "<mf-name>",
              "mf-name": "<ident>",
              "mf-plain": "<mf-name> : <mf-value>",
              "mf-range": "<mf-name> ['<'|'>']? '='? <mf-value>|<mf-value> ['<'|'>']? '='? <mf-name>|<mf-value> '<' '='? <mf-name> '<' '='? <mf-value>|<mf-value> '>' '='? <mf-name> '>' '='? <mf-value>",
              "mf-value": "<number>|<dimension>|<ident>|<ratio>",
              "min()": "min( <calc-sum># )",
              "minmax()": "minmax( [<length>|<percentage>|min-content|max-content|auto] , [<length>|<percentage>|<flex>|min-content|max-content|auto] )",
              "named-color": "transparent|aliceblue|antiquewhite|aqua|aquamarine|azure|beige|bisque|black|blanchedalmond|blue|blueviolet|brown|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|cyan|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkgrey|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen|fuchsia|gainsboro|ghostwhite|gold|goldenrod|gray|green|greenyellow|grey|honeydew|hotpink|indianred|indigo|ivory|khaki|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightgrey|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightslategrey|lightsteelblue|lightyellow|lime|limegreen|linen|magenta|maroon|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|navy|oldlace|olive|olivedrab|orange|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|purple|rebeccapurple|red|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|silver|skyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|teal|thistle|tomato|turquoise|violet|wheat|white|whitesmoke|yellow|yellowgreen|<-non-standard-color>",
              "namespace-prefix": "<ident>",
              "ns-prefix": "[<ident-token>|'*']? '|'",
              "number-percentage": "<number>|<percentage>",
              "numeric-figure-values": "[lining-nums|oldstyle-nums]",
              "numeric-fraction-values": "[diagonal-fractions|stacked-fractions]",
              "numeric-spacing-values": "[proportional-nums|tabular-nums]",
              "nth": "<an-plus-b>|even|odd",
              "opacity()": "opacity( [<number-percentage>] )",
              "overflow-position": "unsafe|safe",
              "outline-radius": "<length>|<percentage>",
              "page-body": "<declaration>? [; <page-body>]?|<page-margin-box> <page-body>",
              "page-margin-box": "<page-margin-box-type> '{' <declaration-list> '}'",
              "page-margin-box-type": "@top-left-corner|@top-left|@top-center|@top-right|@top-right-corner|@bottom-left-corner|@bottom-left|@bottom-center|@bottom-right|@bottom-right-corner|@left-top|@left-middle|@left-bottom|@right-top|@right-middle|@right-bottom",
              "page-selector-list": "[<page-selector>#]?",
              "page-selector": "<pseudo-page>+|<ident> <pseudo-page>*",
              "path()": "path( [<fill-rule> ,]? <string> )",
              "paint()": "paint( <ident> , <declaration-value>? )",
              "perspective()": "perspective( <length> )",
              "polygon()": "polygon( <fill-rule>? , [<length-percentage> <length-percentage>]# )",
              "position": "[[left|center|right]||[top|center|bottom]|[left|center|right|<length-percentage>] [top|center|bottom|<length-percentage>]?|[[left|right] <length-percentage>]&&[[top|bottom] <length-percentage>]]",
              "pseudo-class-selector": "':' <ident-token>|':' <function-token> <any-value> ')'",
              "pseudo-element-selector": "':' <pseudo-class-selector>",
              "pseudo-page": ": [left|right|first|blank]",
              "quote": "open-quote|close-quote|no-open-quote|no-close-quote",
              "radial-gradient()": "radial-gradient( [<ending-shape>||<size>]? [at <position>]? , <color-stop-list> )",
              "relative-selector": "<combinator>? <complex-selector>",
              "relative-selector-list": "<relative-selector>#",
              "relative-size": "larger|smaller",
              "repeat-style": "repeat-x|repeat-y|[repeat|space|round|no-repeat]{1,2}",
              "repeating-linear-gradient()": "repeating-linear-gradient( [<angle>|to <side-or-corner>]? , <color-stop-list> )",
              "repeating-radial-gradient()": "repeating-radial-gradient( [<ending-shape>||<size>]? [at <position>]? , <color-stop-list> )",
              "rgb()": "rgb( <percentage>{3} [/ <alpha-value>]? )|rgb( <number>{3} [/ <alpha-value>]? )|rgb( <percentage>#{3} , <alpha-value>? )|rgb( <number>#{3} , <alpha-value>? )",
              "rgba()": "rgba( <percentage>{3} [/ <alpha-value>]? )|rgba( <number>{3} [/ <alpha-value>]? )|rgba( <percentage>#{3} , <alpha-value>? )|rgba( <number>#{3} , <alpha-value>? )",
              "rotate()": "rotate( [<angle>|<zero>] )",
              "rotate3d()": "rotate3d( <number> , <number> , <number> , [<angle>|<zero>] )",
              "rotateX()": "rotateX( [<angle>|<zero>] )",
              "rotateY()": "rotateY( [<angle>|<zero>] )",
              "rotateZ()": "rotateZ( [<angle>|<zero>] )",
              "saturate()": "saturate( <number-percentage> )",
              "scale()": "scale( <number> , <number>? )",
              "scale3d()": "scale3d( <number> , <number> , <number> )",
              "scaleX()": "scaleX( <number> )",
              "scaleY()": "scaleY( <number> )",
              "scaleZ()": "scaleZ( <number> )",
              "self-position": "center|start|end|self-start|self-end|flex-start|flex-end",
              "shape-radius": "<length-percentage>|closest-side|farthest-side",
              "skew()": "skew( [<angle>|<zero>] , [<angle>|<zero>]? )",
              "skewX()": "skewX( [<angle>|<zero>] )",
              "skewY()": "skewY( [<angle>|<zero>] )",
              "sepia()": "sepia( <number-percentage> )",
              "shadow": "inset?&&<length>{2,4}&&<color>?",
              "shadow-t": "[<length>{2,3}&&<color>?]",
              "shape": "rect( <top> , <right> , <bottom> , <left> )|rect( <top> <right> <bottom> <left> )",
              "shape-box": "<box>|margin-box",
              "side-or-corner": "[left|right]||[top|bottom]",
              "single-animation": "<time>||<timing-function>||<time>||<single-animation-iteration-count>||<single-animation-direction>||<single-animation-fill-mode>||<single-animation-play-state>||[none|<keyframes-name>]",
              "single-animation-direction": "normal|reverse|alternate|alternate-reverse",
              "single-animation-fill-mode": "none|forwards|backwards|both",
              "single-animation-iteration-count": "infinite|<number>",
              "single-animation-play-state": "running|paused",
              "single-transition": "[none|<single-transition-property>]||<time>||<timing-function>||<time>",
              "single-transition-property": "all|<custom-ident>",
              "size": "closest-side|farthest-side|closest-corner|farthest-corner|<length>|<length-percentage>{2}",
              "step-position": "jump-start|jump-end|jump-none|jump-both|start|end",
              "step-timing-function": "step-start|step-end|steps( <integer> [, <step-position>]? )",
              "subclass-selector": "<id-selector>|<class-selector>|<attribute-selector>|<pseudo-class-selector>",
              "supports-condition": "not <supports-in-parens>|<supports-in-parens> [and <supports-in-parens>]*|<supports-in-parens> [or <supports-in-parens>]*",
              "supports-in-parens": "( <supports-condition> )|<supports-feature>|<general-enclosed>",
              "supports-feature": "<supports-decl>|<supports-selector-fn>",
              "supports-decl": "( <declaration> )",
              "supports-selector-fn": "selector( <complex-selector> )",
              "symbol": "<string>|<image>|<custom-ident>",
              "target": "<target-counter()>|<target-counters()>|<target-text()>",
              "target-counter()": "target-counter( [<string>|<url>] , <custom-ident> , <counter-style>? )",
              "target-counters()": "target-counters( [<string>|<url>] , <custom-ident> , <string> , <counter-style>? )",
              "target-text()": "target-text( [<string>|<url>] , [content|before|after|first-letter]? )",
              "time-percentage": "<time>|<percentage>",
              "timing-function": "linear|<cubic-bezier-timing-function>|<step-timing-function>",
              "track-breadth": "<length-percentage>|<flex>|min-content|max-content|auto",
              "track-list": "[<line-names>? [<track-size>|<track-repeat>]]+ <line-names>?",
              "track-repeat": "repeat( [<positive-integer>] , [<line-names>? <track-size>]+ <line-names>? )",
              "track-size": "<track-breadth>|minmax( <inflexible-breadth> , <track-breadth> )|fit-content( [<length>|<percentage>] )",
              "transform-function": "<matrix()>|<translate()>|<translateX()>|<translateY()>|<scale()>|<scaleX()>|<scaleY()>|<rotate()>|<skew()>|<skewX()>|<skewY()>|<matrix3d()>|<translate3d()>|<translateZ()>|<scale3d()>|<scaleZ()>|<rotate3d()>|<rotateX()>|<rotateY()>|<rotateZ()>|<perspective()>",
              "transform-list": "<transform-function>+",
              "translate()": "translate( <length-percentage> , <length-percentage>? )",
              "translate3d()": "translate3d( <length-percentage> , <length-percentage> , <length> )",
              "translateX()": "translateX( <length-percentage> )",
              "translateY()": "translateY( <length-percentage> )",
              "translateZ()": "translateZ( <length> )",
              "type-or-unit": "string|color|url|integer|number|length|angle|time|frequency|cap|ch|em|ex|ic|lh|rlh|rem|vb|vi|vw|vh|vmin|vmax|mm|Q|cm|in|pt|pc|px|deg|grad|rad|turn|ms|s|Hz|kHz|%",
              "type-selector": "<wq-name>|<ns-prefix>? '*'",
              "var()": "var( <custom-property-name> , <declaration-value>? )",
              "viewport-length": "auto|<length-percentage>",
              "wq-name": "<ns-prefix>? <ident-token>",
              "-legacy-gradient": "<-webkit-gradient()>|<-legacy-linear-gradient>|<-legacy-repeating-linear-gradient>|<-legacy-radial-gradient>|<-legacy-repeating-radial-gradient>",
              "-legacy-linear-gradient": "-moz-linear-gradient( <-legacy-linear-gradient-arguments> )|-webkit-linear-gradient( <-legacy-linear-gradient-arguments> )|-o-linear-gradient( <-legacy-linear-gradient-arguments> )",
              "-legacy-repeating-linear-gradient": "-moz-repeating-linear-gradient( <-legacy-linear-gradient-arguments> )|-webkit-repeating-linear-gradient( <-legacy-linear-gradient-arguments> )|-o-repeating-linear-gradient( <-legacy-linear-gradient-arguments> )",
              "-legacy-linear-gradient-arguments": "[<angle>|<side-or-corner>]? , <color-stop-list>",
              "-legacy-radial-gradient": "-moz-radial-gradient( <-legacy-radial-gradient-arguments> )|-webkit-radial-gradient( <-legacy-radial-gradient-arguments> )|-o-radial-gradient( <-legacy-radial-gradient-arguments> )",
              "-legacy-repeating-radial-gradient": "-moz-repeating-radial-gradient( <-legacy-radial-gradient-arguments> )|-webkit-repeating-radial-gradient( <-legacy-radial-gradient-arguments> )|-o-repeating-radial-gradient( <-legacy-radial-gradient-arguments> )",
              "-legacy-radial-gradient-arguments": "[<position> ,]? [[[<-legacy-radial-gradient-shape>||<-legacy-radial-gradient-size>]|[<length>|<percentage>]{2}] ,]? <color-stop-list>",
              "-legacy-radial-gradient-size": "closest-side|closest-corner|farthest-side|farthest-corner|contain|cover",
              "-legacy-radial-gradient-shape": "circle|ellipse",
              "-non-standard-font": "-apple-system-body|-apple-system-headline|-apple-system-subheadline|-apple-system-caption1|-apple-system-caption2|-apple-system-footnote|-apple-system-short-body|-apple-system-short-headline|-apple-system-short-subheadline|-apple-system-short-caption1|-apple-system-short-footnote|-apple-system-tall-body",
              "-non-standard-color": "-moz-ButtonDefault|-moz-ButtonHoverFace|-moz-ButtonHoverText|-moz-CellHighlight|-moz-CellHighlightText|-moz-Combobox|-moz-ComboboxText|-moz-Dialog|-moz-DialogText|-moz-dragtargetzone|-moz-EvenTreeRow|-moz-Field|-moz-FieldText|-moz-html-CellHighlight|-moz-html-CellHighlightText|-moz-mac-accentdarkestshadow|-moz-mac-accentdarkshadow|-moz-mac-accentface|-moz-mac-accentlightesthighlight|-moz-mac-accentlightshadow|-moz-mac-accentregularhighlight|-moz-mac-accentregularshadow|-moz-mac-chrome-active|-moz-mac-chrome-inactive|-moz-mac-focusring|-moz-mac-menuselect|-moz-mac-menushadow|-moz-mac-menutextselect|-moz-MenuHover|-moz-MenuHoverText|-moz-MenuBarText|-moz-MenuBarHoverText|-moz-nativehyperlinktext|-moz-OddTreeRow|-moz-win-communicationstext|-moz-win-mediatext|-moz-activehyperlinktext|-moz-default-background-color|-moz-default-color|-moz-hyperlinktext|-moz-visitedhyperlinktext|-webkit-activelink|-webkit-focus-ring-color|-webkit-link|-webkit-text",
              "-non-standard-image-rendering": "optimize-contrast|-moz-crisp-edges|-o-crisp-edges|-webkit-optimize-contrast",
              "-non-standard-overflow": "-moz-scrollbars-none|-moz-scrollbars-horizontal|-moz-scrollbars-vertical|-moz-hidden-unscrollable",
              "-non-standard-width": "fill-available|min-intrinsic|intrinsic|-moz-available|-moz-fit-content|-moz-min-content|-moz-max-content|-webkit-min-content|-webkit-max-content",
              "-webkit-gradient()": "-webkit-gradient( <-webkit-gradient-type> , <-webkit-gradient-point> [, <-webkit-gradient-point>|, <-webkit-gradient-radius> , <-webkit-gradient-point>] [, <-webkit-gradient-radius>]? [, <-webkit-gradient-color-stop>]* )",
              "-webkit-gradient-color-stop": "from( <color> )|color-stop( [<number-zero-one>|<percentage>] , <color> )|to( <color> )",
              "-webkit-gradient-point": "[left|center|right|<length-percentage>] [top|center|bottom|<length-percentage>]",
              "-webkit-gradient-radius": "<length>|<percentage>",
              "-webkit-gradient-type": "linear|radial",
              "-webkit-mask-box-repeat": "repeat|stretch|round",
              "-webkit-mask-clip-style": "border|border-box|padding|padding-box|content|content-box|text",
              "-ms-filter-function-list": "<-ms-filter-function>+",
              "-ms-filter-function": "<-ms-filter-function-progid>|<-ms-filter-function-legacy>",
              "-ms-filter-function-progid": "'progid:' [<ident-token> '.']* [<ident-token>|<function-token> <any-value>? )]",
              "-ms-filter-function-legacy": "<ident-token>|<function-token> <any-value>? )",
              "-ms-filter": "<string>",
              "age": "child|young|old",
              "attr-name": "<wq-name>",
              "attr-fallback": "<any-value>",
              "border-radius": "<length-percentage>{1,2}",
              "bottom": "<length>|auto",
              "generic-voice": "[<age>? <gender> <integer>?]",
              "gender": "male|female|neutral",
              "left": "<length>|auto",
              "mask-image": "<mask-reference>#",
              "name-repeat": "repeat( [<positive-integer>|auto-fill] , <line-names>+ )",
              "paint": "none|<color>|<url> [none|<color>]?|context-fill|context-stroke",
              "page-size": "A5|A4|A3|B5|B4|JIS-B5|JIS-B4|letter|legal|ledger",
              "ratio": "<integer> / <integer>",
              "right": "<length>|auto",
              "svg-length": "<percentage>|<length>|<number>",
              "svg-writing-mode": "lr-tb|rl-tb|tb-rl|lr|rl|tb",
              "top": "<length>|auto",
              "track-group": "'(' [<string>* <track-minmax> <string>*]+ ')' ['[' <positive-integer> ']']?|<track-minmax>",
              "track-list-v0": "[<string>* <track-group> <string>*]+|none",
              "track-minmax": "minmax( <track-breadth> , <track-breadth> )|auto|<track-breadth>|fit-content",
              "x": "<number>",
              "y": "<number>",
              "declaration": "<ident-token> : <declaration-value>? ['!' important]?",
              "declaration-list": "[<declaration>? ';']* <declaration>?",
              "url": "url( <string> <url-modifier>* )|<url-token>",
              "url-modifier": "<ident>|<function-token> <any-value> )",
              "number-zero-one": "<number [0,1]>",
              "number-one-or-greater": "<number [1,∞]>",
              "positive-integer": "<integer [0,∞]>",
              "-non-standard-display": "-ms-inline-flexbox|-ms-grid|-ms-inline-grid|-webkit-flex|-webkit-inline-flex|-webkit-box|-webkit-inline-box|-moz-inline-stack|-moz-box|-moz-inline-box"
          },
          "properties": {
              "--*": "<declaration-value>",
              "-ms-accelerator": "false|true",
              "-ms-block-progression": "tb|rl|bt|lr",
              "-ms-content-zoom-chaining": "none|chained",
              "-ms-content-zooming": "none|zoom",
              "-ms-content-zoom-limit": "<'-ms-content-zoom-limit-min'> <'-ms-content-zoom-limit-max'>",
              "-ms-content-zoom-limit-max": "<percentage>",
              "-ms-content-zoom-limit-min": "<percentage>",
              "-ms-content-zoom-snap": "<'-ms-content-zoom-snap-type'>||<'-ms-content-zoom-snap-points'>",
              "-ms-content-zoom-snap-points": "snapInterval( <percentage> , <percentage> )|snapList( <percentage># )",
              "-ms-content-zoom-snap-type": "none|proximity|mandatory",
              "-ms-filter": "<string>",
              "-ms-flow-from": "[none|<custom-ident>]#",
              "-ms-flow-into": "[none|<custom-ident>]#",
              "-ms-grid-columns": "none|<track-list>|<auto-track-list>",
              "-ms-grid-rows": "none|<track-list>|<auto-track-list>",
              "-ms-high-contrast-adjust": "auto|none",
              "-ms-hyphenate-limit-chars": "auto|<integer>{1,3}",
              "-ms-hyphenate-limit-lines": "no-limit|<integer>",
              "-ms-hyphenate-limit-zone": "<percentage>|<length>",
              "-ms-ime-align": "auto|after",
              "-ms-overflow-style": "auto|none|scrollbar|-ms-autohiding-scrollbar",
              "-ms-scrollbar-3dlight-color": "<color>",
              "-ms-scrollbar-arrow-color": "<color>",
              "-ms-scrollbar-base-color": "<color>",
              "-ms-scrollbar-darkshadow-color": "<color>",
              "-ms-scrollbar-face-color": "<color>",
              "-ms-scrollbar-highlight-color": "<color>",
              "-ms-scrollbar-shadow-color": "<color>",
              "-ms-scrollbar-track-color": "<color>",
              "-ms-scroll-chaining": "chained|none",
              "-ms-scroll-limit": "<'-ms-scroll-limit-x-min'> <'-ms-scroll-limit-y-min'> <'-ms-scroll-limit-x-max'> <'-ms-scroll-limit-y-max'>",
              "-ms-scroll-limit-x-max": "auto|<length>",
              "-ms-scroll-limit-x-min": "<length>",
              "-ms-scroll-limit-y-max": "auto|<length>",
              "-ms-scroll-limit-y-min": "<length>",
              "-ms-scroll-rails": "none|railed",
              "-ms-scroll-snap-points-x": "snapInterval( <length-percentage> , <length-percentage> )|snapList( <length-percentage># )",
              "-ms-scroll-snap-points-y": "snapInterval( <length-percentage> , <length-percentage> )|snapList( <length-percentage># )",
              "-ms-scroll-snap-type": "none|proximity|mandatory",
              "-ms-scroll-snap-x": "<'-ms-scroll-snap-type'> <'-ms-scroll-snap-points-x'>",
              "-ms-scroll-snap-y": "<'-ms-scroll-snap-type'> <'-ms-scroll-snap-points-y'>",
              "-ms-scroll-translation": "none|vertical-to-horizontal",
              "-ms-text-autospace": "none|ideograph-alpha|ideograph-numeric|ideograph-parenthesis|ideograph-space",
              "-ms-touch-select": "grippers|none",
              "-ms-user-select": "none|element|text",
              "-ms-wrap-flow": "auto|both|start|end|maximum|clear",
              "-ms-wrap-margin": "<length>",
              "-ms-wrap-through": "wrap|none",
              "-moz-appearance": "none|button|button-arrow-down|button-arrow-next|button-arrow-previous|button-arrow-up|button-bevel|button-focus|caret|checkbox|checkbox-container|checkbox-label|checkmenuitem|dualbutton|groupbox|listbox|listitem|menuarrow|menubar|menucheckbox|menuimage|menuitem|menuitemtext|menulist|menulist-button|menulist-text|menulist-textfield|menupopup|menuradio|menuseparator|meterbar|meterchunk|progressbar|progressbar-vertical|progresschunk|progresschunk-vertical|radio|radio-container|radio-label|radiomenuitem|range|range-thumb|resizer|resizerpanel|scale-horizontal|scalethumbend|scalethumb-horizontal|scalethumbstart|scalethumbtick|scalethumb-vertical|scale-vertical|scrollbarbutton-down|scrollbarbutton-left|scrollbarbutton-right|scrollbarbutton-up|scrollbarthumb-horizontal|scrollbarthumb-vertical|scrollbartrack-horizontal|scrollbartrack-vertical|searchfield|separator|sheet|spinner|spinner-downbutton|spinner-textfield|spinner-upbutton|splitter|statusbar|statusbarpanel|tab|tabpanel|tabpanels|tab-scroll-arrow-back|tab-scroll-arrow-forward|textfield|textfield-multiline|toolbar|toolbarbutton|toolbarbutton-dropdown|toolbargripper|toolbox|tooltip|treeheader|treeheadercell|treeheadersortarrow|treeitem|treeline|treetwisty|treetwistyopen|treeview|-moz-mac-unified-toolbar|-moz-win-borderless-glass|-moz-win-browsertabbar-toolbox|-moz-win-communicationstext|-moz-win-communications-toolbox|-moz-win-exclude-glass|-moz-win-glass|-moz-win-mediatext|-moz-win-media-toolbox|-moz-window-button-box|-moz-window-button-box-maximized|-moz-window-button-close|-moz-window-button-maximize|-moz-window-button-minimize|-moz-window-button-restore|-moz-window-frame-bottom|-moz-window-frame-left|-moz-window-frame-right|-moz-window-titlebar|-moz-window-titlebar-maximized",
              "-moz-binding": "<url>|none",
              "-moz-border-bottom-colors": "<color>+|none",
              "-moz-border-left-colors": "<color>+|none",
              "-moz-border-right-colors": "<color>+|none",
              "-moz-border-top-colors": "<color>+|none",
              "-moz-context-properties": "none|[fill|fill-opacity|stroke|stroke-opacity]#",
              "-moz-float-edge": "border-box|content-box|margin-box|padding-box",
              "-moz-force-broken-image-icon": "<integer [0,1]>",
              "-moz-image-region": "<shape>|auto",
              "-moz-orient": "inline|block|horizontal|vertical",
              "-moz-outline-radius": "<outline-radius>{1,4} [/ <outline-radius>{1,4}]?",
              "-moz-outline-radius-bottomleft": "<outline-radius>",
              "-moz-outline-radius-bottomright": "<outline-radius>",
              "-moz-outline-radius-topleft": "<outline-radius>",
              "-moz-outline-radius-topright": "<outline-radius>",
              "-moz-stack-sizing": "ignore|stretch-to-fit",
              "-moz-text-blink": "none|blink",
              "-moz-user-focus": "ignore|normal|select-after|select-before|select-menu|select-same|select-all|none",
              "-moz-user-input": "auto|none|enabled|disabled",
              "-moz-user-modify": "read-only|read-write|write-only",
              "-moz-window-dragging": "drag|no-drag",
              "-moz-window-shadow": "default|menu|tooltip|sheet|none",
              "-webkit-appearance": "none|button|button-bevel|caps-lock-indicator|caret|checkbox|default-button|inner-spin-button|listbox|listitem|media-controls-background|media-controls-fullscreen-background|media-current-time-display|media-enter-fullscreen-button|media-exit-fullscreen-button|media-fullscreen-button|media-mute-button|media-overlay-play-button|media-play-button|media-seek-back-button|media-seek-forward-button|media-slider|media-sliderthumb|media-time-remaining-display|media-toggle-closed-captions-button|media-volume-slider|media-volume-slider-container|media-volume-sliderthumb|menulist|menulist-button|menulist-text|menulist-textfield|meter|progress-bar|progress-bar-value|push-button|radio|scrollbarbutton-down|scrollbarbutton-left|scrollbarbutton-right|scrollbarbutton-up|scrollbargripper-horizontal|scrollbargripper-vertical|scrollbarthumb-horizontal|scrollbarthumb-vertical|scrollbartrack-horizontal|scrollbartrack-vertical|searchfield|searchfield-cancel-button|searchfield-decoration|searchfield-results-button|searchfield-results-decoration|slider-horizontal|slider-vertical|sliderthumb-horizontal|sliderthumb-vertical|square-button|textarea|textfield|-apple-pay-button",
              "-webkit-border-before": "<'border-width'>||<'border-style'>||<'color'>",
              "-webkit-border-before-color": "<'color'>",
              "-webkit-border-before-style": "<'border-style'>",
              "-webkit-border-before-width": "<'border-width'>",
              "-webkit-box-reflect": "[above|below|right|left]? <length>? <image>?",
              "-webkit-line-clamp": "none|<integer>",
              "-webkit-mask": "[<mask-reference>||<position> [/ <bg-size>]?||<repeat-style>||[<box>|border|padding|content|text]||[<box>|border|padding|content]]#",
              "-webkit-mask-attachment": "<attachment>#",
              "-webkit-mask-clip": "[<box>|border|padding|content|text]#",
              "-webkit-mask-composite": "<composite-style>#",
              "-webkit-mask-image": "<mask-reference>#",
              "-webkit-mask-origin": "[<box>|border|padding|content]#",
              "-webkit-mask-position": "<position>#",
              "-webkit-mask-position-x": "[<length-percentage>|left|center|right]#",
              "-webkit-mask-position-y": "[<length-percentage>|top|center|bottom]#",
              "-webkit-mask-repeat": "<repeat-style>#",
              "-webkit-mask-repeat-x": "repeat|no-repeat|space|round",
              "-webkit-mask-repeat-y": "repeat|no-repeat|space|round",
              "-webkit-mask-size": "<bg-size>#",
              "-webkit-overflow-scrolling": "auto|touch",
              "-webkit-tap-highlight-color": "<color>",
              "-webkit-text-fill-color": "<color>",
              "-webkit-text-stroke": "<length>||<color>",
              "-webkit-text-stroke-color": "<color>",
              "-webkit-text-stroke-width": "<length>",
              "-webkit-touch-callout": "default|none",
              "-webkit-user-modify": "read-only|read-write|read-write-plaintext-only",
              "align-content": "normal|<baseline-position>|<content-distribution>|<overflow-position>? <content-position>",
              "align-items": "normal|stretch|<baseline-position>|[<overflow-position>? <self-position>]",
              "align-self": "auto|normal|stretch|<baseline-position>|<overflow-position>? <self-position>",
              "align-tracks": "[normal|<baseline-position>|<content-distribution>|<overflow-position>? <content-position>]#",
              "all": "initial|inherit|unset|revert",
              "animation": "<single-animation>#",
              "animation-delay": "<time>#",
              "animation-direction": "<single-animation-direction>#",
              "animation-duration": "<time>#",
              "animation-fill-mode": "<single-animation-fill-mode>#",
              "animation-iteration-count": "<single-animation-iteration-count>#",
              "animation-name": "[none|<keyframes-name>]#",
              "animation-play-state": "<single-animation-play-state>#",
              "animation-timing-function": "<timing-function>#",
              "appearance": "none|auto|textfield|menulist-button|<compat-auto>",
              "aspect-ratio": "auto|<ratio>",
              "azimuth": "<angle>|[[left-side|far-left|left|center-left|center|center-right|right|far-right|right-side]||behind]|leftwards|rightwards",
              "backdrop-filter": "none|<filter-function-list>",
              "backface-visibility": "visible|hidden",
              "background": "[<bg-layer> ,]* <final-bg-layer>",
              "background-attachment": "<attachment>#",
              "background-blend-mode": "<blend-mode>#",
              "background-clip": "<box>#",
              "background-color": "<color>",
              "background-image": "<bg-image>#",
              "background-origin": "<box>#",
              "background-position": "<bg-position>#",
              "background-position-x": "[center|[[left|right|x-start|x-end]? <length-percentage>?]!]#",
              "background-position-y": "[center|[[top|bottom|y-start|y-end]? <length-percentage>?]!]#",
              "background-repeat": "<repeat-style>#",
              "background-size": "<bg-size>#",
              "block-overflow": "clip|ellipsis|<string>",
              "block-size": "<'width'>",
              "border": "<line-width>||<line-style>||<color>",
              "border-block": "<'border-top-width'>||<'border-top-style'>||<'color'>",
              "border-block-color": "<'border-top-color'>{1,2}",
              "border-block-style": "<'border-top-style'>",
              "border-block-width": "<'border-top-width'>",
              "border-block-end": "<'border-top-width'>||<'border-top-style'>||<'color'>",
              "border-block-end-color": "<'border-top-color'>",
              "border-block-end-style": "<'border-top-style'>",
              "border-block-end-width": "<'border-top-width'>",
              "border-block-start": "<'border-top-width'>||<'border-top-style'>||<'color'>",
              "border-block-start-color": "<'border-top-color'>",
              "border-block-start-style": "<'border-top-style'>",
              "border-block-start-width": "<'border-top-width'>",
              "border-bottom": "<line-width>||<line-style>||<color>",
              "border-bottom-color": "<'border-top-color'>",
              "border-bottom-left-radius": "<length-percentage>{1,2}",
              "border-bottom-right-radius": "<length-percentage>{1,2}",
              "border-bottom-style": "<line-style>",
              "border-bottom-width": "<line-width>",
              "border-collapse": "collapse|separate",
              "border-color": "<color>{1,4}",
              "border-end-end-radius": "<length-percentage>{1,2}",
              "border-end-start-radius": "<length-percentage>{1,2}",
              "border-image": "<'border-image-source'>||<'border-image-slice'> [/ <'border-image-width'>|/ <'border-image-width'>? / <'border-image-outset'>]?||<'border-image-repeat'>",
              "border-image-outset": "[<length>|<number>]{1,4}",
              "border-image-repeat": "[stretch|repeat|round|space]{1,2}",
              "border-image-slice": "<number-percentage>{1,4}&&fill?",
              "border-image-source": "none|<image>",
              "border-image-width": "[<length-percentage>|<number>|auto]{1,4}",
              "border-inline": "<'border-top-width'>||<'border-top-style'>||<'color'>",
              "border-inline-end": "<'border-top-width'>||<'border-top-style'>||<'color'>",
              "border-inline-color": "<'border-top-color'>{1,2}",
              "border-inline-style": "<'border-top-style'>",
              "border-inline-width": "<'border-top-width'>",
              "border-inline-end-color": "<'border-top-color'>",
              "border-inline-end-style": "<'border-top-style'>",
              "border-inline-end-width": "<'border-top-width'>",
              "border-inline-start": "<'border-top-width'>||<'border-top-style'>||<'color'>",
              "border-inline-start-color": "<'border-top-color'>",
              "border-inline-start-style": "<'border-top-style'>",
              "border-inline-start-width": "<'border-top-width'>",
              "border-left": "<line-width>||<line-style>||<color>",
              "border-left-color": "<color>",
              "border-left-style": "<line-style>",
              "border-left-width": "<line-width>",
              "border-radius": "<length-percentage>{1,4} [/ <length-percentage>{1,4}]?",
              "border-right": "<line-width>||<line-style>||<color>",
              "border-right-color": "<color>",
              "border-right-style": "<line-style>",
              "border-right-width": "<line-width>",
              "border-spacing": "<length> <length>?",
              "border-start-end-radius": "<length-percentage>{1,2}",
              "border-start-start-radius": "<length-percentage>{1,2}",
              "border-style": "<line-style>{1,4}",
              "border-top": "<line-width>||<line-style>||<color>",
              "border-top-color": "<color>",
              "border-top-left-radius": "<length-percentage>{1,2}",
              "border-top-right-radius": "<length-percentage>{1,2}",
              "border-top-style": "<line-style>",
              "border-top-width": "<line-width>",
              "border-width": "<line-width>{1,4}",
              "bottom": "<length>|<percentage>|auto",
              "box-align": "start|center|end|baseline|stretch",
              "box-decoration-break": "slice|clone",
              "box-direction": "normal|reverse|inherit",
              "box-flex": "<number>",
              "box-flex-group": "<integer>",
              "box-lines": "single|multiple",
              "box-ordinal-group": "<integer>",
              "box-orient": "horizontal|vertical|inline-axis|block-axis|inherit",
              "box-pack": "start|center|end|justify",
              "box-shadow": "none|<shadow>#",
              "box-sizing": "content-box|border-box",
              "break-after": "auto|avoid|always|all|avoid-page|page|left|right|recto|verso|avoid-column|column|avoid-region|region",
              "break-before": "auto|avoid|always|all|avoid-page|page|left|right|recto|verso|avoid-column|column|avoid-region|region",
              "break-inside": "auto|avoid|avoid-page|avoid-column|avoid-region",
              "caption-side": "top|bottom|block-start|block-end|inline-start|inline-end",
              "caret-color": "auto|<color>",
              "clear": "none|left|right|both|inline-start|inline-end",
              "clip": "<shape>|auto",
              "clip-path": "<clip-source>|[<basic-shape>||<geometry-box>]|none",
              "color": "<color>",
              "color-adjust": "economy|exact",
              "column-count": "<integer>|auto",
              "column-fill": "auto|balance|balance-all",
              "column-gap": "normal|<length-percentage>",
              "column-rule": "<'column-rule-width'>||<'column-rule-style'>||<'column-rule-color'>",
              "column-rule-color": "<color>",
              "column-rule-style": "<'border-style'>",
              "column-rule-width": "<'border-width'>",
              "column-span": "none|all",
              "column-width": "<length>|auto",
              "columns": "<'column-width'>||<'column-count'>",
              "contain": "none|strict|content|[size||layout||style||paint]",
              "content": "normal|none|[<content-replacement>|<content-list>] [/ <string>]?",
              "counter-increment": "[<custom-ident> <integer>?]+|none",
              "counter-reset": "[<custom-ident> <integer>?]+|none",
              "counter-set": "[<custom-ident> <integer>?]+|none",
              "cursor": "[[<url> [<x> <y>]? ,]* [auto|default|none|context-menu|help|pointer|progress|wait|cell|crosshair|text|vertical-text|alias|copy|move|no-drop|not-allowed|e-resize|n-resize|ne-resize|nw-resize|s-resize|se-resize|sw-resize|w-resize|ew-resize|ns-resize|nesw-resize|nwse-resize|col-resize|row-resize|all-scroll|zoom-in|zoom-out|grab|grabbing|hand|-webkit-grab|-webkit-grabbing|-webkit-zoom-in|-webkit-zoom-out|-moz-grab|-moz-grabbing|-moz-zoom-in|-moz-zoom-out]]",
              "direction": "ltr|rtl",
              "display": "[<display-outside>||<display-inside>]|<display-listitem>|<display-internal>|<display-box>|<display-legacy>|<-non-standard-display>",
              "empty-cells": "show|hide",
              "filter": "none|<filter-function-list>|<-ms-filter-function-list>",
              "flex": "none|[<'flex-grow'> <'flex-shrink'>?||<'flex-basis'>]",
              "flex-basis": "content|<'width'>",
              "flex-direction": "row|row-reverse|column|column-reverse",
              "flex-flow": "<'flex-direction'>||<'flex-wrap'>",
              "flex-grow": "<number>",
              "flex-shrink": "<number>",
              "flex-wrap": "nowrap|wrap|wrap-reverse",
              "float": "left|right|none|inline-start|inline-end",
              "font": "[[<'font-style'>||<font-variant-css21>||<'font-weight'>||<'font-stretch'>]? <'font-size'> [/ <'line-height'>]? <'font-family'>]|caption|icon|menu|message-box|small-caption|status-bar",
              "font-family": "[<family-name>|<generic-family>]#",
              "font-feature-settings": "normal|<feature-tag-value>#",
              "font-kerning": "auto|normal|none",
              "font-language-override": "normal|<string>",
              "font-optical-sizing": "auto|none",
              "font-variation-settings": "normal|[<string> <number>]#",
              "font-size": "<absolute-size>|<relative-size>|<length-percentage>",
              "font-size-adjust": "none|<number>",
              "font-smooth": "auto|never|always|<absolute-size>|<length>",
              "font-stretch": "<font-stretch-absolute>",
              "font-style": "normal|italic|oblique <angle>?",
              "font-synthesis": "none|[weight||style]",
              "font-variant": "normal|none|[<common-lig-values>||<discretionary-lig-values>||<historical-lig-values>||<contextual-alt-values>||stylistic( <feature-value-name> )||historical-forms||styleset( <feature-value-name># )||character-variant( <feature-value-name># )||swash( <feature-value-name> )||ornaments( <feature-value-name> )||annotation( <feature-value-name> )||[small-caps|all-small-caps|petite-caps|all-petite-caps|unicase|titling-caps]||<numeric-figure-values>||<numeric-spacing-values>||<numeric-fraction-values>||ordinal||slashed-zero||<east-asian-variant-values>||<east-asian-width-values>||ruby]",
              "font-variant-alternates": "normal|[stylistic( <feature-value-name> )||historical-forms||styleset( <feature-value-name># )||character-variant( <feature-value-name># )||swash( <feature-value-name> )||ornaments( <feature-value-name> )||annotation( <feature-value-name> )]",
              "font-variant-caps": "normal|small-caps|all-small-caps|petite-caps|all-petite-caps|unicase|titling-caps",
              "font-variant-east-asian": "normal|[<east-asian-variant-values>||<east-asian-width-values>||ruby]",
              "font-variant-ligatures": "normal|none|[<common-lig-values>||<discretionary-lig-values>||<historical-lig-values>||<contextual-alt-values>]",
              "font-variant-numeric": "normal|[<numeric-figure-values>||<numeric-spacing-values>||<numeric-fraction-values>||ordinal||slashed-zero]",
              "font-variant-position": "normal|sub|super",
              "font-weight": "<font-weight-absolute>|bolder|lighter",
              "gap": "<'row-gap'> <'column-gap'>?",
              "grid": "<'grid-template'>|<'grid-template-rows'> / [auto-flow&&dense?] <'grid-auto-columns'>?|[auto-flow&&dense?] <'grid-auto-rows'>? / <'grid-template-columns'>",
              "grid-area": "<grid-line> [/ <grid-line>]{0,3}",
              "grid-auto-columns": "<track-size>+",
              "grid-auto-flow": "[row|column]||dense",
              "grid-auto-rows": "<track-size>+",
              "grid-column": "<grid-line> [/ <grid-line>]?",
              "grid-column-end": "<grid-line>",
              "grid-column-gap": "<length-percentage>",
              "grid-column-start": "<grid-line>",
              "grid-gap": "<'grid-row-gap'> <'grid-column-gap'>?",
              "grid-row": "<grid-line> [/ <grid-line>]?",
              "grid-row-end": "<grid-line>",
              "grid-row-gap": "<length-percentage>",
              "grid-row-start": "<grid-line>",
              "grid-template": "none|[<'grid-template-rows'> / <'grid-template-columns'>]|[<line-names>? <string> <track-size>? <line-names>?]+ [/ <explicit-track-list>]?",
              "grid-template-areas": "none|<string>+",
              "grid-template-columns": "none|<track-list>|<auto-track-list>|subgrid <line-name-list>?",
              "grid-template-rows": "none|<track-list>|<auto-track-list>|subgrid <line-name-list>?",
              "hanging-punctuation": "none|[first||[force-end|allow-end]||last]",
              "height": "auto|<length>|<percentage>|min-content|max-content|fit-content( <length-percentage> )",
              "hyphens": "none|manual|auto",
              "image-orientation": "from-image|<angle>|[<angle>? flip]",
              "image-rendering": "auto|crisp-edges|pixelated|optimizeSpeed|optimizeQuality|<-non-standard-image-rendering>",
              "image-resolution": "[from-image||<resolution>]&&snap?",
              "ime-mode": "auto|normal|active|inactive|disabled",
              "initial-letter": "normal|[<number> <integer>?]",
              "initial-letter-align": "[auto|alphabetic|hanging|ideographic]",
              "inline-size": "<'width'>",
              "inset": "<'top'>{1,4}",
              "inset-block": "<'top'>{1,2}",
              "inset-block-end": "<'top'>",
              "inset-block-start": "<'top'>",
              "inset-inline": "<'top'>{1,2}",
              "inset-inline-end": "<'top'>",
              "inset-inline-start": "<'top'>",
              "isolation": "auto|isolate",
              "justify-content": "normal|<content-distribution>|<overflow-position>? [<content-position>|left|right]",
              "justify-items": "normal|stretch|<baseline-position>|<overflow-position>? [<self-position>|left|right]|legacy|legacy&&[left|right|center]",
              "justify-self": "auto|normal|stretch|<baseline-position>|<overflow-position>? [<self-position>|left|right]",
              "justify-tracks": "[normal|<content-distribution>|<overflow-position>? [<content-position>|left|right]]#",
              "left": "<length>|<percentage>|auto",
              "letter-spacing": "normal|<length-percentage>",
              "line-break": "auto|loose|normal|strict|anywhere",
              "line-clamp": "none|<integer>",
              "line-height": "normal|<number>|<length>|<percentage>",
              "line-height-step": "<length>",
              "list-style": "<'list-style-type'>||<'list-style-position'>||<'list-style-image'>",
              "list-style-image": "<url>|none",
              "list-style-position": "inside|outside",
              "list-style-type": "<counter-style>|<string>|none",
              "margin": "[<length>|<percentage>|auto]{1,4}",
              "margin-block": "<'margin-left'>{1,2}",
              "margin-block-end": "<'margin-left'>",
              "margin-block-start": "<'margin-left'>",
              "margin-bottom": "<length>|<percentage>|auto",
              "margin-inline": "<'margin-left'>{1,2}",
              "margin-inline-end": "<'margin-left'>",
              "margin-inline-start": "<'margin-left'>",
              "margin-left": "<length>|<percentage>|auto",
              "margin-right": "<length>|<percentage>|auto",
              "margin-top": "<length>|<percentage>|auto",
              "margin-trim": "none|in-flow|all",
              "mask": "<mask-layer>#",
              "mask-border": "<'mask-border-source'>||<'mask-border-slice'> [/ <'mask-border-width'>? [/ <'mask-border-outset'>]?]?||<'mask-border-repeat'>||<'mask-border-mode'>",
              "mask-border-mode": "luminance|alpha",
              "mask-border-outset": "[<length>|<number>]{1,4}",
              "mask-border-repeat": "[stretch|repeat|round|space]{1,2}",
              "mask-border-slice": "<number-percentage>{1,4} fill?",
              "mask-border-source": "none|<image>",
              "mask-border-width": "[<length-percentage>|<number>|auto]{1,4}",
              "mask-clip": "[<geometry-box>|no-clip]#",
              "mask-composite": "<compositing-operator>#",
              "mask-image": "<mask-reference>#",
              "mask-mode": "<masking-mode>#",
              "mask-origin": "<geometry-box>#",
              "mask-position": "<position>#",
              "mask-repeat": "<repeat-style>#",
              "mask-size": "<bg-size>#",
              "mask-type": "luminance|alpha",
              "masonry-auto-flow": "[pack|next]||[definite-first|ordered]",
              "math-style": "normal|compact",
              "max-block-size": "<'max-width'>",
              "max-height": "none|<length-percentage>|min-content|max-content|fit-content( <length-percentage> )",
              "max-inline-size": "<'max-width'>",
              "max-lines": "none|<integer>",
              "max-width": "none|<length-percentage>|min-content|max-content|fit-content( <length-percentage> )|<-non-standard-width>",
              "min-block-size": "<'min-width'>",
              "min-height": "auto|<length>|<percentage>|min-content|max-content|fit-content( <length-percentage> )",
              "min-inline-size": "<'min-width'>",
              "min-width": "auto|<length-percentage>|min-content|max-content|fit-content( <length-percentage> )|<-non-standard-width>",
              "mix-blend-mode": "<blend-mode>",
              "object-fit": "fill|contain|cover|none|scale-down",
              "object-position": "<position>",
              "offset": "[<'offset-position'>? [<'offset-path'> [<'offset-distance'>||<'offset-rotate'>]?]?]! [/ <'offset-anchor'>]?",
              "offset-anchor": "auto|<position>",
              "offset-distance": "<length-percentage>",
              "offset-path": "none|ray( [<angle>&&<size>&&contain?] )|<path()>|<url>|[<basic-shape>||<geometry-box>]",
              "offset-position": "auto|<position>",
              "offset-rotate": "[auto|reverse]||<angle>",
              "opacity": "<alpha-value>",
              "order": "<integer>",
              "orphans": "<integer>",
              "outline": "[<'outline-color'>||<'outline-style'>||<'outline-width'>]",
              "outline-color": "<color>|invert",
              "outline-offset": "<length>",
              "outline-style": "auto|<'border-style'>",
              "outline-width": "<line-width>",
              "overflow": "[visible|hidden|clip|scroll|auto]{1,2}|<-non-standard-overflow>",
              "overflow-anchor": "auto|none",
              "overflow-block": "visible|hidden|clip|scroll|auto",
              "overflow-clip-box": "padding-box|content-box",
              "overflow-inline": "visible|hidden|clip|scroll|auto",
              "overflow-wrap": "normal|break-word|anywhere",
              "overflow-x": "visible|hidden|clip|scroll|auto",
              "overflow-y": "visible|hidden|clip|scroll|auto",
              "overscroll-behavior": "[contain|none|auto]{1,2}",
              "overscroll-behavior-block": "contain|none|auto",
              "overscroll-behavior-inline": "contain|none|auto",
              "overscroll-behavior-x": "contain|none|auto",
              "overscroll-behavior-y": "contain|none|auto",
              "padding": "[<length>|<percentage>]{1,4}",
              "padding-block": "<'padding-left'>{1,2}",
              "padding-block-end": "<'padding-left'>",
              "padding-block-start": "<'padding-left'>",
              "padding-bottom": "<length>|<percentage>",
              "padding-inline": "<'padding-left'>{1,2}",
              "padding-inline-end": "<'padding-left'>",
              "padding-inline-start": "<'padding-left'>",
              "padding-left": "<length>|<percentage>",
              "padding-right": "<length>|<percentage>",
              "padding-top": "<length>|<percentage>",
              "page-break-after": "auto|always|avoid|left|right|recto|verso",
              "page-break-before": "auto|always|avoid|left|right|recto|verso",
              "page-break-inside": "auto|avoid",
              "paint-order": "normal|[fill||stroke||markers]",
              "perspective": "none|<length>",
              "perspective-origin": "<position>",
              "place-content": "<'align-content'> <'justify-content'>?",
              "place-items": "<'align-items'> <'justify-items'>?",
              "place-self": "<'align-self'> <'justify-self'>?",
              "pointer-events": "auto|none|visiblePainted|visibleFill|visibleStroke|visible|painted|fill|stroke|all|inherit",
              "position": "static|relative|absolute|sticky|fixed|-webkit-sticky",
              "quotes": "none|auto|[<string> <string>]+",
              "resize": "none|both|horizontal|vertical|block|inline",
              "right": "<length>|<percentage>|auto",
              "rotate": "none|<angle>|[x|y|z|<number>{3}]&&<angle>",
              "row-gap": "normal|<length-percentage>",
              "ruby-align": "start|center|space-between|space-around",
              "ruby-merge": "separate|collapse|auto",
              "ruby-position": "over|under|inter-character",
              "scale": "none|<number>{1,3}",
              "scrollbar-color": "auto|dark|light|<color>{2}",
              "scrollbar-gutter": "auto|[stable|always]&&both?&&force?",
              "scrollbar-width": "auto|thin|none",
              "scroll-behavior": "auto|smooth",
              "scroll-margin": "<length>{1,4}",
              "scroll-margin-block": "<length>{1,2}",
              "scroll-margin-block-start": "<length>",
              "scroll-margin-block-end": "<length>",
              "scroll-margin-bottom": "<length>",
              "scroll-margin-inline": "<length>{1,2}",
              "scroll-margin-inline-start": "<length>",
              "scroll-margin-inline-end": "<length>",
              "scroll-margin-left": "<length>",
              "scroll-margin-right": "<length>",
              "scroll-margin-top": "<length>",
              "scroll-padding": "[auto|<length-percentage>]{1,4}",
              "scroll-padding-block": "[auto|<length-percentage>]{1,2}",
              "scroll-padding-block-start": "auto|<length-percentage>",
              "scroll-padding-block-end": "auto|<length-percentage>",
              "scroll-padding-bottom": "auto|<length-percentage>",
              "scroll-padding-inline": "[auto|<length-percentage>]{1,2}",
              "scroll-padding-inline-start": "auto|<length-percentage>",
              "scroll-padding-inline-end": "auto|<length-percentage>",
              "scroll-padding-left": "auto|<length-percentage>",
              "scroll-padding-right": "auto|<length-percentage>",
              "scroll-padding-top": "auto|<length-percentage>",
              "scroll-snap-align": "[none|start|end|center]{1,2}",
              "scroll-snap-coordinate": "none|<position>#",
              "scroll-snap-destination": "<position>",
              "scroll-snap-points-x": "none|repeat( <length-percentage> )",
              "scroll-snap-points-y": "none|repeat( <length-percentage> )",
              "scroll-snap-stop": "normal|always",
              "scroll-snap-type": "none|[x|y|block|inline|both] [mandatory|proximity]?",
              "scroll-snap-type-x": "none|mandatory|proximity",
              "scroll-snap-type-y": "none|mandatory|proximity",
              "shape-image-threshold": "<alpha-value>",
              "shape-margin": "<length-percentage>",
              "shape-outside": "none|<shape-box>||<basic-shape>|<image>",
              "tab-size": "<integer>|<length>",
              "table-layout": "auto|fixed",
              "text-align": "start|end|left|right|center|justify|match-parent",
              "text-align-last": "auto|start|end|left|right|center|justify",
              "text-combine-upright": "none|all|[digits <integer>?]",
              "text-decoration": "<'text-decoration-line'>||<'text-decoration-style'>||<'text-decoration-color'>||<'text-decoration-thickness'>",
              "text-decoration-color": "<color>",
              "text-decoration-line": "none|[underline||overline||line-through||blink]|spelling-error|grammar-error",
              "text-decoration-skip": "none|[objects||[spaces|[leading-spaces||trailing-spaces]]||edges||box-decoration]",
              "text-decoration-skip-ink": "auto|all|none",
              "text-decoration-style": "solid|double|dotted|dashed|wavy",
              "text-decoration-thickness": "auto|from-font|<length>|<percentage>",
              "text-emphasis": "<'text-emphasis-style'>||<'text-emphasis-color'>",
              "text-emphasis-color": "<color>",
              "text-emphasis-position": "[over|under]&&[right|left]",
              "text-emphasis-style": "none|[[filled|open]||[dot|circle|double-circle|triangle|sesame]]|<string>",
              "text-indent": "<length-percentage>&&hanging?&&each-line?",
              "text-justify": "auto|inter-character|inter-word|none",
              "text-orientation": "mixed|upright|sideways",
              "text-overflow": "[clip|ellipsis|<string>]{1,2}",
              "text-rendering": "auto|optimizeSpeed|optimizeLegibility|geometricPrecision",
              "text-shadow": "none|<shadow-t>#",
              "text-size-adjust": "none|auto|<percentage>",
              "text-transform": "none|capitalize|uppercase|lowercase|full-width|full-size-kana",
              "text-underline-offset": "auto|<length>|<percentage>",
              "text-underline-position": "auto|from-font|[under||[left|right]]",
              "top": "<length>|<percentage>|auto",
              "touch-action": "auto|none|[[pan-x|pan-left|pan-right]||[pan-y|pan-up|pan-down]||pinch-zoom]|manipulation",
              "transform": "none|<transform-list>",
              "transform-box": "content-box|border-box|fill-box|stroke-box|view-box",
              "transform-origin": "[<length-percentage>|left|center|right|top|bottom]|[[<length-percentage>|left|center|right]&&[<length-percentage>|top|center|bottom]] <length>?",
              "transform-style": "flat|preserve-3d",
              "transition": "<single-transition>#",
              "transition-delay": "<time>#",
              "transition-duration": "<time>#",
              "transition-property": "none|<single-transition-property>#",
              "transition-timing-function": "<timing-function>#",
              "translate": "none|<length-percentage> [<length-percentage> <length>?]?",
              "unicode-bidi": "normal|embed|isolate|bidi-override|isolate-override|plaintext|-moz-isolate|-moz-isolate-override|-moz-plaintext|-webkit-isolate|-webkit-isolate-override|-webkit-plaintext",
              "user-select": "auto|text|none|contain|all",
              "vertical-align": "baseline|sub|super|text-top|text-bottom|middle|top|bottom|<percentage>|<length>",
              "visibility": "visible|hidden|collapse",
              "white-space": "normal|pre|nowrap|pre-wrap|pre-line|break-spaces",
              "widows": "<integer>",
              "width": "auto|<length>|<percentage>|min-content|max-content|fit-content( <length-percentage> )|fit-content|-moz-fit-content|-webkit-fit-content",
              "will-change": "auto|<animateable-feature>#",
              "word-break": "normal|break-all|keep-all|break-word",
              "word-spacing": "normal|<length-percentage>",
              "word-wrap": "normal|break-word",
              "writing-mode": "horizontal-tb|vertical-rl|vertical-lr|sideways-rl|sideways-lr|<svg-writing-mode>",
              "z-index": "auto|<integer>",
              "zoom": "normal|reset|<number>|<percentage>",
              "-moz-background-clip": "padding|border",
              "-moz-border-radius-bottomleft": "<'border-bottom-left-radius'>",
              "-moz-border-radius-bottomright": "<'border-bottom-right-radius'>",
              "-moz-border-radius-topleft": "<'border-top-left-radius'>",
              "-moz-border-radius-topright": "<'border-bottom-right-radius'>",
              "-moz-control-character-visibility": "visible|hidden",
              "-moz-osx-font-smoothing": "auto|grayscale",
              "-moz-user-select": "none|text|all|-moz-none",
              "-ms-flex-align": "start|end|center|baseline|stretch",
              "-ms-flex-item-align": "auto|start|end|center|baseline|stretch",
              "-ms-flex-line-pack": "start|end|center|justify|distribute|stretch",
              "-ms-flex-negative": "<'flex-shrink'>",
              "-ms-flex-pack": "start|end|center|justify|distribute",
              "-ms-flex-order": "<integer>",
              "-ms-flex-positive": "<'flex-grow'>",
              "-ms-flex-preferred-size": "<'flex-basis'>",
              "-ms-interpolation-mode": "nearest-neighbor|bicubic",
              "-ms-grid-column-align": "start|end|center|stretch",
              "-ms-grid-row-align": "start|end|center|stretch",
              "-ms-hyphenate-limit-last": "none|always|column|page|spread",
              "-webkit-background-clip": "[<box>|border|padding|content|text]#",
              "-webkit-column-break-after": "always|auto|avoid",
              "-webkit-column-break-before": "always|auto|avoid",
              "-webkit-column-break-inside": "always|auto|avoid",
              "-webkit-font-smoothing": "auto|none|antialiased|subpixel-antialiased",
              "-webkit-mask-box-image": "[<url>|<gradient>|none] [<length-percentage>{4} <-webkit-mask-box-repeat>{2}]?",
              "-webkit-print-color-adjust": "economy|exact",
              "-webkit-text-security": "none|circle|disc|square",
              "-webkit-user-drag": "none|element|auto",
              "-webkit-user-select": "auto|none|text|all",
              "alignment-baseline": "auto|baseline|before-edge|text-before-edge|middle|central|after-edge|text-after-edge|ideographic|alphabetic|hanging|mathematical",
              "baseline-shift": "baseline|sub|super|<svg-length>",
              "behavior": "<url>+",
              "clip-rule": "nonzero|evenodd",
              "cue": "<'cue-before'> <'cue-after'>?",
              "cue-after": "<url> <decibel>?|none",
              "cue-before": "<url> <decibel>?|none",
              "dominant-baseline": "auto|use-script|no-change|reset-size|ideographic|alphabetic|hanging|mathematical|central|middle|text-after-edge|text-before-edge",
              "fill": "<paint>",
              "fill-opacity": "<number-zero-one>",
              "fill-rule": "nonzero|evenodd",
              "glyph-orientation-horizontal": "<angle>",
              "glyph-orientation-vertical": "<angle>",
              "kerning": "auto|<svg-length>",
              "marker": "none|<url>",
              "marker-end": "none|<url>",
              "marker-mid": "none|<url>",
              "marker-start": "none|<url>",
              "pause": "<'pause-before'> <'pause-after'>?",
              "pause-after": "<time>|none|x-weak|weak|medium|strong|x-strong",
              "pause-before": "<time>|none|x-weak|weak|medium|strong|x-strong",
              "rest": "<'rest-before'> <'rest-after'>?",
              "rest-after": "<time>|none|x-weak|weak|medium|strong|x-strong",
              "rest-before": "<time>|none|x-weak|weak|medium|strong|x-strong",
              "shape-rendering": "auto|optimizeSpeed|crispEdges|geometricPrecision",
              "src": "[<url> [format( <string># )]?|local( <family-name> )]#",
              "speak": "auto|none|normal",
              "speak-as": "normal|spell-out||digits||[literal-punctuation|no-punctuation]",
              "stroke": "<paint>",
              "stroke-dasharray": "none|[<svg-length>+]#",
              "stroke-dashoffset": "<svg-length>",
              "stroke-linecap": "butt|round|square",
              "stroke-linejoin": "miter|round|bevel",
              "stroke-miterlimit": "<number-one-or-greater>",
              "stroke-opacity": "<number-zero-one>",
              "stroke-width": "<svg-length>",
              "text-anchor": "start|middle|end",
              "unicode-range": "<urange>#",
              "voice-balance": "<number>|left|center|right|leftwards|rightwards",
              "voice-duration": "auto|<time>",
              "voice-family": "[[<family-name>|<generic-voice>] ,]* [<family-name>|<generic-voice>]|preserve",
              "voice-pitch": "<frequency>&&absolute|[[x-low|low|medium|high|x-high]||[<frequency>|<semitones>|<percentage>]]",
              "voice-range": "<frequency>&&absolute|[[x-low|low|medium|high|x-high]||[<frequency>|<semitones>|<percentage>]]",
              "voice-rate": "[normal|x-slow|slow|medium|fast|x-fast]||<percentage>",
              "voice-stress": "normal|strong|moderate|none|reduced",
              "voice-volume": "silent|[[x-soft|soft|medium|loud|x-loud]||<decibel>]"
          },
          "atrules": {
              "charset": {
                  "prelude": "<string>",
                  "descriptors": null
              },
              "counter-style": {
                  "prelude": "<counter-style-name>",
                  "descriptors": {
                      "additive-symbols": "[<integer>&&<symbol>]#",
                      "fallback": "<counter-style-name>",
                      "negative": "<symbol> <symbol>?",
                      "pad": "<integer>&&<symbol>",
                      "prefix": "<symbol>",
                      "range": "[[<integer>|infinite]{2}]#|auto",
                      "speak-as": "auto|bullets|numbers|words|spell-out|<counter-style-name>",
                      "suffix": "<symbol>",
                      "symbols": "<symbol>+",
                      "system": "cyclic|numeric|alphabetic|symbolic|additive|[fixed <integer>?]|[extends <counter-style-name>]"
                  }
              },
              "document": {
                  "prelude": "[<url>|url-prefix( <string> )|domain( <string> )|media-document( <string> )|regexp( <string> )]#",
                  "descriptors": null
              },
              "font-face": {
                  "prelude": null,
                  "descriptors": {
                      "font-display": "[auto|block|swap|fallback|optional]",
                      "font-family": "<family-name>",
                      "font-feature-settings": "normal|<feature-tag-value>#",
                      "font-variation-settings": "normal|[<string> <number>]#",
                      "font-stretch": "<font-stretch-absolute>{1,2}",
                      "font-style": "normal|italic|oblique <angle>{0,2}",
                      "font-weight": "<font-weight-absolute>{1,2}",
                      "font-variant": "normal|none|[<common-lig-values>||<discretionary-lig-values>||<historical-lig-values>||<contextual-alt-values>||stylistic( <feature-value-name> )||historical-forms||styleset( <feature-value-name># )||character-variant( <feature-value-name># )||swash( <feature-value-name> )||ornaments( <feature-value-name> )||annotation( <feature-value-name> )||[small-caps|all-small-caps|petite-caps|all-petite-caps|unicase|titling-caps]||<numeric-figure-values>||<numeric-spacing-values>||<numeric-fraction-values>||ordinal||slashed-zero||<east-asian-variant-values>||<east-asian-width-values>||ruby]",
                      "src": "[<url> [format( <string># )]?|local( <family-name> )]#",
                      "unicode-range": "<urange>#"
                  }
              },
              "font-feature-values": {
                  "prelude": "<family-name>#",
                  "descriptors": null
              },
              "import": {
                  "prelude": "[<string>|<url>] [<media-query-list>]?",
                  "descriptors": null
              },
              "keyframes": {
                  "prelude": "<keyframes-name>",
                  "descriptors": null
              },
              "media": {
                  "prelude": "<media-query-list>",
                  "descriptors": null
              },
              "namespace": {
                  "prelude": "<namespace-prefix>? [<string>|<url>]",
                  "descriptors": null
              },
              "page": {
                  "prelude": "<page-selector-list>",
                  "descriptors": {
                      "bleed": "auto|<length>",
                      "marks": "none|[crop||cross]",
                      "size": "<length>{1,2}|auto|[<page-size>||[portrait|landscape]]"
                  }
              },
              "property": {
                  "prelude": "<custom-property-name>",
                  "descriptors": {
                      "syntax": "<string>",
                      "inherits": "true|false",
                      "initial-value": "<string>"
                  }
              },
              "supports": {
                  "prelude": "<supports-condition>",
                  "descriptors": null
              },
              "viewport": {
                  "prelude": null,
                  "descriptors": {
                      "height": "<viewport-length>{1,2}",
                      "max-height": "<viewport-length>",
                      "max-width": "<viewport-length>",
                      "max-zoom": "auto|<number>|<percentage>",
                      "min-height": "<viewport-length>",
                      "min-width": "<viewport-length>",
                      "min-zoom": "auto|<number>|<percentage>",
                      "orientation": "auto|portrait|landscape",
                      "user-zoom": "zoom|fixed",
                      "viewport-fit": "auto|contain|cover",
                      "width": "<viewport-length>{1,2}",
                      "zoom": "auto|<number>|<percentage>"
                  }
              }
          }
      };

      var cmpChar$3 = tokenizer.cmpChar;
      var isDigit$4 = tokenizer.isDigit;
      var TYPE$9 = tokenizer.TYPE;

      var WHITESPACE$4 = TYPE$9.WhiteSpace;
      var COMMENT$4 = TYPE$9.Comment;
      var IDENT$3 = TYPE$9.Ident;
      var NUMBER$3 = TYPE$9.Number;
      var DIMENSION$2 = TYPE$9.Dimension;
      var PLUSSIGN$3 = 0x002B;    // U+002B PLUS SIGN (+)
      var HYPHENMINUS$3 = 0x002D; // U+002D HYPHEN-MINUS (-)
      var N$4 = 0x006E;           // U+006E LATIN SMALL LETTER N (n)
      var DISALLOW_SIGN$1 = true;
      var ALLOW_SIGN$1 = false;

      function checkInteger$1(offset, disallowSign) {
          var pos = this.scanner.tokenStart + offset;
          var code = this.scanner.source.charCodeAt(pos);

          if (code === PLUSSIGN$3 || code === HYPHENMINUS$3) {
              if (disallowSign) {
                  this.error('Number sign is not allowed');
              }
              pos++;
          }

          for (; pos < this.scanner.tokenEnd; pos++) {
              if (!isDigit$4(this.scanner.source.charCodeAt(pos))) {
                  this.error('Integer is expected', pos);
              }
          }
      }

      function checkTokenIsInteger(disallowSign) {
          return checkInteger$1.call(this, 0, disallowSign);
      }

      function expectCharCode(offset, code) {
          if (!cmpChar$3(this.scanner.source, this.scanner.tokenStart + offset, code)) {
              var msg = '';

              switch (code) {
                  case N$4:
                      msg = 'N is expected';
                      break;
                  case HYPHENMINUS$3:
                      msg = 'HyphenMinus is expected';
                      break;
              }

              this.error(msg, this.scanner.tokenStart + offset);
          }
      }

      // ... <signed-integer>
      // ... ['+' | '-'] <signless-integer>
      function consumeB$1() {
          var offset = 0;
          var sign = 0;
          var type = this.scanner.tokenType;

          while (type === WHITESPACE$4 || type === COMMENT$4) {
              type = this.scanner.lookupType(++offset);
          }

          if (type !== NUMBER$3) {
              if (this.scanner.isDelim(PLUSSIGN$3, offset) ||
                  this.scanner.isDelim(HYPHENMINUS$3, offset)) {
                  sign = this.scanner.isDelim(PLUSSIGN$3, offset) ? PLUSSIGN$3 : HYPHENMINUS$3;

                  do {
                      type = this.scanner.lookupType(++offset);
                  } while (type === WHITESPACE$4 || type === COMMENT$4);

                  if (type !== NUMBER$3) {
                      this.scanner.skip(offset);
                      checkTokenIsInteger.call(this, DISALLOW_SIGN$1);
                  }
              } else {
                  return null;
              }
          }

          if (offset > 0) {
              this.scanner.skip(offset);
          }

          if (sign === 0) {
              type = this.scanner.source.charCodeAt(this.scanner.tokenStart);
              if (type !== PLUSSIGN$3 && type !== HYPHENMINUS$3) {
                  this.error('Number sign is expected');
              }
          }

          checkTokenIsInteger.call(this, sign !== 0);
          return sign === HYPHENMINUS$3 ? '-' + this.consume(NUMBER$3) : this.consume(NUMBER$3);
      }

      // An+B microsyntax https://www.w3.org/TR/css-syntax-3/#anb
      var AnPlusB = {
          name: 'AnPlusB',
          structure: {
              a: [String, null],
              b: [String, null]
          },
          parse: function() {
              /* eslint-disable brace-style*/
              var start = this.scanner.tokenStart;
              var a = null;
              var b = null;

              // <integer>
              if (this.scanner.tokenType === NUMBER$3) {
                  checkTokenIsInteger.call(this, ALLOW_SIGN$1);
                  b = this.consume(NUMBER$3);
              }

              // -n
              // -n <signed-integer>
              // -n ['+' | '-'] <signless-integer>
              // -n- <signless-integer>
              // <dashndashdigit-ident>
              else if (this.scanner.tokenType === IDENT$3 && cmpChar$3(this.scanner.source, this.scanner.tokenStart, HYPHENMINUS$3)) {
                  a = '-1';

                  expectCharCode.call(this, 1, N$4);

                  switch (this.scanner.getTokenLength()) {
                      // -n
                      // -n <signed-integer>
                      // -n ['+' | '-'] <signless-integer>
                      case 2:
                          this.scanner.next();
                          b = consumeB$1.call(this);
                          break;

                      // -n- <signless-integer>
                      case 3:
                          expectCharCode.call(this, 2, HYPHENMINUS$3);

                          this.scanner.next();
                          this.scanner.skipSC();

                          checkTokenIsInteger.call(this, DISALLOW_SIGN$1);

                          b = '-' + this.consume(NUMBER$3);
                          break;

                      // <dashndashdigit-ident>
                      default:
                          expectCharCode.call(this, 2, HYPHENMINUS$3);
                          checkInteger$1.call(this, 3, DISALLOW_SIGN$1);
                          this.scanner.next();

                          b = this.scanner.substrToCursor(start + 2);
                  }
              }

              // '+'? n
              // '+'? n <signed-integer>
              // '+'? n ['+' | '-'] <signless-integer>
              // '+'? n- <signless-integer>
              // '+'? <ndashdigit-ident>
              else if (this.scanner.tokenType === IDENT$3 || (this.scanner.isDelim(PLUSSIGN$3) && this.scanner.lookupType(1) === IDENT$3)) {
                  var sign = 0;
                  a = '1';

                  // just ignore a plus
                  if (this.scanner.isDelim(PLUSSIGN$3)) {
                      sign = 1;
                      this.scanner.next();
                  }

                  expectCharCode.call(this, 0, N$4);

                  switch (this.scanner.getTokenLength()) {
                      // '+'? n
                      // '+'? n <signed-integer>
                      // '+'? n ['+' | '-'] <signless-integer>
                      case 1:
                          this.scanner.next();
                          b = consumeB$1.call(this);
                          break;

                      // '+'? n- <signless-integer>
                      case 2:
                          expectCharCode.call(this, 1, HYPHENMINUS$3);

                          this.scanner.next();
                          this.scanner.skipSC();

                          checkTokenIsInteger.call(this, DISALLOW_SIGN$1);

                          b = '-' + this.consume(NUMBER$3);
                          break;

                      // '+'? <ndashdigit-ident>
                      default:
                          expectCharCode.call(this, 1, HYPHENMINUS$3);
                          checkInteger$1.call(this, 2, DISALLOW_SIGN$1);
                          this.scanner.next();

                          b = this.scanner.substrToCursor(start + sign + 1);
                  }
              }

              // <ndashdigit-dimension>
              // <ndash-dimension> <signless-integer>
              // <n-dimension>
              // <n-dimension> <signed-integer>
              // <n-dimension> ['+' | '-'] <signless-integer>
              else if (this.scanner.tokenType === DIMENSION$2) {
                  var code = this.scanner.source.charCodeAt(this.scanner.tokenStart);
                  var sign = code === PLUSSIGN$3 || code === HYPHENMINUS$3;

                  for (var i = this.scanner.tokenStart + sign; i < this.scanner.tokenEnd; i++) {
                      if (!isDigit$4(this.scanner.source.charCodeAt(i))) {
                          break;
                      }
                  }

                  if (i === this.scanner.tokenStart + sign) {
                      this.error('Integer is expected', this.scanner.tokenStart + sign);
                  }

                  expectCharCode.call(this, i - this.scanner.tokenStart, N$4);
                  a = this.scanner.source.substring(start, i);

                  // <n-dimension>
                  // <n-dimension> <signed-integer>
                  // <n-dimension> ['+' | '-'] <signless-integer>
                  if (i + 1 === this.scanner.tokenEnd) {
                      this.scanner.next();
                      b = consumeB$1.call(this);
                  } else {
                      expectCharCode.call(this, i - this.scanner.tokenStart + 1, HYPHENMINUS$3);

                      // <ndash-dimension> <signless-integer>
                      if (i + 2 === this.scanner.tokenEnd) {
                          this.scanner.next();
                          this.scanner.skipSC();
                          checkTokenIsInteger.call(this, DISALLOW_SIGN$1);
                          b = '-' + this.consume(NUMBER$3);
                      }
                      // <ndashdigit-dimension>
                      else {
                          checkInteger$1.call(this, i - this.scanner.tokenStart + 2, DISALLOW_SIGN$1);
                          this.scanner.next();
                          b = this.scanner.substrToCursor(i + 1);
                      }
                  }
              } else {
                  this.error();
              }

              if (a !== null && a.charCodeAt(0) === PLUSSIGN$3) {
                  a = a.substr(1);
              }

              if (b !== null && b.charCodeAt(0) === PLUSSIGN$3) {
                  b = b.substr(1);
              }

              return {
                  type: 'AnPlusB',
                  loc: this.getLocation(start, this.scanner.tokenStart),
                  a: a,
                  b: b
              };
          },
          generate: function(node) {
              var a = node.a !== null && node.a !== undefined;
              var b = node.b !== null && node.b !== undefined;

              if (a) {
                  this.chunk(
                      node.a === '+1' ? '+n' : // eslint-disable-line operator-linebreak, indent
                      node.a ===  '1' ?  'n' : // eslint-disable-line operator-linebreak, indent
                      node.a === '-1' ? '-n' : // eslint-disable-line operator-linebreak, indent
                      node.a + 'n'             // eslint-disable-line operator-linebreak, indent
                  );

                  if (b) {
                      b = String(node.b);
                      if (b.charAt(0) === '-' || b.charAt(0) === '+') {
                          this.chunk(b.charAt(0));
                          this.chunk(b.substr(1));
                      } else {
                          this.chunk('+');
                          this.chunk(b);
                      }
                  }
              } else {
                  this.chunk(String(node.b));
              }
          }
      };

      var TYPE$a = tokenizer.TYPE;

      var WhiteSpace = TYPE$a.WhiteSpace;
      var Semicolon = TYPE$a.Semicolon;
      var LeftCurlyBracket = TYPE$a.LeftCurlyBracket;
      var Delim = TYPE$a.Delim;
      var EXCLAMATIONMARK$1 = 0x0021; // U+0021 EXCLAMATION MARK (!)

      function getOffsetExcludeWS() {
          if (this.scanner.tokenIndex > 0) {
              if (this.scanner.lookupType(-1) === WhiteSpace) {
                  return this.scanner.tokenIndex > 1
                      ? this.scanner.getTokenStart(this.scanner.tokenIndex - 1)
                      : this.scanner.firstCharOffset;
              }
          }

          return this.scanner.tokenStart;
      }

      // 0, 0, false
      function balanceEnd() {
          return 0;
      }

      // LEFTCURLYBRACKET, 0, false
      function leftCurlyBracket(tokenType) {
          return tokenType === LeftCurlyBracket ? 1 : 0;
      }

      // LEFTCURLYBRACKET, SEMICOLON, false
      function leftCurlyBracketOrSemicolon(tokenType) {
          return tokenType === LeftCurlyBracket || tokenType === Semicolon ? 1 : 0;
      }

      // EXCLAMATIONMARK, SEMICOLON, false
      function exclamationMarkOrSemicolon(tokenType, source, offset) {
          if (tokenType === Delim && source.charCodeAt(offset) === EXCLAMATIONMARK$1) {
              return 1;
          }

          return tokenType === Semicolon ? 1 : 0;
      }

      // 0, SEMICOLON, true
      function semicolonIncluded(tokenType) {
          return tokenType === Semicolon ? 2 : 0;
      }

      var Raw = {
          name: 'Raw',
          structure: {
              value: String
          },
          parse: function(startToken, mode, excludeWhiteSpace) {
              var startOffset = this.scanner.getTokenStart(startToken);
              var endOffset;

              this.scanner.skip(
                  this.scanner.getRawLength(startToken, mode || balanceEnd)
              );

              if (excludeWhiteSpace && this.scanner.tokenStart > startOffset) {
                  endOffset = getOffsetExcludeWS.call(this);
              } else {
                  endOffset = this.scanner.tokenStart;
              }

              return {
                  type: 'Raw',
                  loc: this.getLocation(startOffset, endOffset),
                  value: this.scanner.source.substring(startOffset, endOffset)
              };
          },
          generate: function(node) {
              this.chunk(node.value);
          },

          mode: {
              default: balanceEnd,
              leftCurlyBracket: leftCurlyBracket,
              leftCurlyBracketOrSemicolon: leftCurlyBracketOrSemicolon,
              exclamationMarkOrSemicolon: exclamationMarkOrSemicolon,
              semicolonIncluded: semicolonIncluded
          }
      };

      var TYPE$b = tokenizer.TYPE;
      var rawMode = Raw.mode;

      var ATKEYWORD = TYPE$b.AtKeyword;
      var SEMICOLON = TYPE$b.Semicolon;
      var LEFTCURLYBRACKET$1 = TYPE$b.LeftCurlyBracket;
      var RIGHTCURLYBRACKET$1 = TYPE$b.RightCurlyBracket;

      function consumeRaw(startToken) {
          return this.Raw(startToken, rawMode.leftCurlyBracketOrSemicolon, true);
      }

      function isDeclarationBlockAtrule() {
          for (var offset = 1, type; type = this.scanner.lookupType(offset); offset++) {
              if (type === RIGHTCURLYBRACKET$1) {
                  return true;
              }

              if (type === LEFTCURLYBRACKET$1 ||
                  type === ATKEYWORD) {
                  return false;
              }
          }

          return false;
      }

      var Atrule = {
          name: 'Atrule',
          structure: {
              name: String,
              prelude: ['AtrulePrelude', 'Raw', null],
              block: ['Block', null]
          },
          parse: function() {
              var start = this.scanner.tokenStart;
              var name;
              var nameLowerCase;
              var prelude = null;
              var block = null;

              this.eat(ATKEYWORD);

              name = this.scanner.substrToCursor(start + 1);
              nameLowerCase = name.toLowerCase();
              this.scanner.skipSC();

              // parse prelude
              if (this.scanner.eof === false &&
                  this.scanner.tokenType !== LEFTCURLYBRACKET$1 &&
                  this.scanner.tokenType !== SEMICOLON) {
                  if (this.parseAtrulePrelude) {
                      prelude = this.parseWithFallback(this.AtrulePrelude.bind(this, name), consumeRaw);

                      // turn empty AtrulePrelude into null
                      if (prelude.type === 'AtrulePrelude' && prelude.children.head === null) {
                          prelude = null;
                      }
                  } else {
                      prelude = consumeRaw.call(this, this.scanner.tokenIndex);
                  }

                  this.scanner.skipSC();
              }

              switch (this.scanner.tokenType) {
                  case SEMICOLON:
                      this.scanner.next();
                      break;

                  case LEFTCURLYBRACKET$1:
                      if (this.atrule.hasOwnProperty(nameLowerCase) &&
                          typeof this.atrule[nameLowerCase].block === 'function') {
                          block = this.atrule[nameLowerCase].block.call(this);
                      } else {
                          // TODO: should consume block content as Raw?
                          block = this.Block(isDeclarationBlockAtrule.call(this));
                      }

                      break;
              }

              return {
                  type: 'Atrule',
                  loc: this.getLocation(start, this.scanner.tokenStart),
                  name: name,
                  prelude: prelude,
                  block: block
              };
          },
          generate: function(node) {
              this.chunk('@');
              this.chunk(node.name);

              if (node.prelude !== null) {
                  this.chunk(' ');
                  this.node(node.prelude);
              }

              if (node.block) {
                  this.node(node.block);
              } else {
                  this.chunk(';');
              }
          },
          walkContext: 'atrule'
      };

      var TYPE$c = tokenizer.TYPE;

      var SEMICOLON$1 = TYPE$c.Semicolon;
      var LEFTCURLYBRACKET$2 = TYPE$c.LeftCurlyBracket;

      var AtrulePrelude = {
          name: 'AtrulePrelude',
          structure: {
              children: [[]]
          },
          parse: function(name) {
              var children = null;

              if (name !== null) {
                  name = name.toLowerCase();
              }

              this.scanner.skipSC();

              if (this.atrule.hasOwnProperty(name) &&
                  typeof this.atrule[name].prelude === 'function') {
                  // custom consumer
                  children = this.atrule[name].prelude.call(this);
              } else {
                  // default consumer
                  children = this.readSequence(this.scope.AtrulePrelude);
              }

              this.scanner.skipSC();

              if (this.scanner.eof !== true &&
                  this.scanner.tokenType !== LEFTCURLYBRACKET$2 &&
                  this.scanner.tokenType !== SEMICOLON$1) {
                  this.error('Semicolon or block is expected');
              }

              if (children === null) {
                  children = this.createList();
              }

              return {
                  type: 'AtrulePrelude',
                  loc: this.getLocationFromList(children),
                  children: children
              };
          },
          generate: function(node) {
              this.children(node);
          },
          walkContext: 'atrulePrelude'
      };

      var TYPE$d = tokenizer.TYPE;

      var IDENT$4 = TYPE$d.Ident;
      var STRING = TYPE$d.String;
      var COLON = TYPE$d.Colon;
      var LEFTSQUAREBRACKET$1 = TYPE$d.LeftSquareBracket;
      var RIGHTSQUAREBRACKET$1 = TYPE$d.RightSquareBracket;
      var DOLLARSIGN = 0x0024;       // U+0024 DOLLAR SIGN ($)
      var ASTERISK$1 = 0x002A;         // U+002A ASTERISK (*)
      var EQUALSSIGN = 0x003D;       // U+003D EQUALS SIGN (=)
      var CIRCUMFLEXACCENT = 0x005E; // U+005E (^)
      var VERTICALLINE$1 = 0x007C;     // U+007C VERTICAL LINE (|)
      var TILDE = 0x007E;            // U+007E TILDE (~)

      function getAttributeName() {
          if (this.scanner.eof) {
              this.error('Unexpected end of input');
          }

          var start = this.scanner.tokenStart;
          var expectIdent = false;
          var checkColon = true;

          if (this.scanner.isDelim(ASTERISK$1)) {
              expectIdent = true;
              checkColon = false;
              this.scanner.next();
          } else if (!this.scanner.isDelim(VERTICALLINE$1)) {
              this.eat(IDENT$4);
          }

          if (this.scanner.isDelim(VERTICALLINE$1)) {
              if (this.scanner.source.charCodeAt(this.scanner.tokenStart + 1) !== EQUALSSIGN) {
                  this.scanner.next();
                  this.eat(IDENT$4);
              } else if (expectIdent) {
                  this.error('Identifier is expected', this.scanner.tokenEnd);
              }
          } else if (expectIdent) {
              this.error('Vertical line is expected');
          }

          if (checkColon && this.scanner.tokenType === COLON) {
              this.scanner.next();
              this.eat(IDENT$4);
          }

          return {
              type: 'Identifier',
              loc: this.getLocation(start, this.scanner.tokenStart),
              name: this.scanner.substrToCursor(start)
          };
      }

      function getOperator() {
          var start = this.scanner.tokenStart;
          var code = this.scanner.source.charCodeAt(start);

          if (code !== EQUALSSIGN &&        // =
              code !== TILDE &&             // ~=
              code !== CIRCUMFLEXACCENT &&  // ^=
              code !== DOLLARSIGN &&        // $=
              code !== ASTERISK$1 &&          // *=
              code !== VERTICALLINE$1         // |=
          ) {
              this.error('Attribute selector (=, ~=, ^=, $=, *=, |=) is expected');
          }

          this.scanner.next();

          if (code !== EQUALSSIGN) {
              if (!this.scanner.isDelim(EQUALSSIGN)) {
                  this.error('Equal sign is expected');
              }

              this.scanner.next();
          }

          return this.scanner.substrToCursor(start);
      }

      // '[' <wq-name> ']'
      // '[' <wq-name> <attr-matcher> [ <string-token> | <ident-token> ] <attr-modifier>? ']'
      var AttributeSelector = {
          name: 'AttributeSelector',
          structure: {
              name: 'Identifier',
              matcher: [String, null],
              value: ['String', 'Identifier', null],
              flags: [String, null]
          },
          parse: function() {
              var start = this.scanner.tokenStart;
              var name;
              var matcher = null;
              var value = null;
              var flags = null;

              this.eat(LEFTSQUAREBRACKET$1);
              this.scanner.skipSC();

              name = getAttributeName.call(this);
              this.scanner.skipSC();

              if (this.scanner.tokenType !== RIGHTSQUAREBRACKET$1) {
                  // avoid case `[name i]`
                  if (this.scanner.tokenType !== IDENT$4) {
                      matcher = getOperator.call(this);

                      this.scanner.skipSC();

                      value = this.scanner.tokenType === STRING
                          ? this.String()
                          : this.Identifier();

                      this.scanner.skipSC();
                  }

                  // attribute flags
                  if (this.scanner.tokenType === IDENT$4) {
                      flags = this.scanner.getTokenValue();
                      this.scanner.next();

                      this.scanner.skipSC();
                  }
              }

              this.eat(RIGHTSQUAREBRACKET$1);

              return {
                  type: 'AttributeSelector',
                  loc: this.getLocation(start, this.scanner.tokenStart),
                  name: name,
                  matcher: matcher,
                  value: value,
                  flags: flags
              };
          },
          generate: function(node) {
              var flagsPrefix = ' ';

              this.chunk('[');
              this.node(node.name);

              if (node.matcher !== null) {
                  this.chunk(node.matcher);

                  if (node.value !== null) {
                      this.node(node.value);

                      // space between string and flags is not required
                      if (node.value.type === 'String') {
                          flagsPrefix = '';
                      }
                  }
              }

              if (node.flags !== null) {
                  this.chunk(flagsPrefix);
                  this.chunk(node.flags);
              }

              this.chunk(']');
          }
      };

      var TYPE$e = tokenizer.TYPE;
      var rawMode$1 = Raw.mode;

      var WHITESPACE$5 = TYPE$e.WhiteSpace;
      var COMMENT$5 = TYPE$e.Comment;
      var SEMICOLON$2 = TYPE$e.Semicolon;
      var ATKEYWORD$1 = TYPE$e.AtKeyword;
      var LEFTCURLYBRACKET$3 = TYPE$e.LeftCurlyBracket;
      var RIGHTCURLYBRACKET$2 = TYPE$e.RightCurlyBracket;

      function consumeRaw$1(startToken) {
          return this.Raw(startToken, null, true);
      }
      function consumeRule() {
          return this.parseWithFallback(this.Rule, consumeRaw$1);
      }
      function consumeRawDeclaration(startToken) {
          return this.Raw(startToken, rawMode$1.semicolonIncluded, true);
      }
      function consumeDeclaration() {
          if (this.scanner.tokenType === SEMICOLON$2) {
              return consumeRawDeclaration.call(this, this.scanner.tokenIndex);
          }

          var node = this.parseWithFallback(this.Declaration, consumeRawDeclaration);

          if (this.scanner.tokenType === SEMICOLON$2) {
              this.scanner.next();
          }

          return node;
      }

      var Block = {
          name: 'Block',
          structure: {
              children: [[
                  'Atrule',
                  'Rule',
                  'Declaration'
              ]]
          },
          parse: function(isDeclaration) {
              var consumer = isDeclaration ? consumeDeclaration : consumeRule;

              var start = this.scanner.tokenStart;
              var children = this.createList();

              this.eat(LEFTCURLYBRACKET$3);

              scan:
              while (!this.scanner.eof) {
                  switch (this.scanner.tokenType) {
                      case RIGHTCURLYBRACKET$2:
                          break scan;

                      case WHITESPACE$5:
                      case COMMENT$5:
                          this.scanner.next();
                          break;

                      case ATKEYWORD$1:
                          children.push(this.parseWithFallback(this.Atrule, consumeRaw$1));
                          break;

                      default:
                          children.push(consumer.call(this));
                  }
              }

              if (!this.scanner.eof) {
                  this.eat(RIGHTCURLYBRACKET$2);
              }

              return {
                  type: 'Block',
                  loc: this.getLocation(start, this.scanner.tokenStart),
                  children: children
              };
          },
          generate: function(node) {
              this.chunk('{');
              this.children(node, function(prev) {
                  if (prev.type === 'Declaration') {
                      this.chunk(';');
                  }
              });
              this.chunk('}');
          },
          walkContext: 'block'
      };

      var TYPE$f = tokenizer.TYPE;

      var LEFTSQUAREBRACKET$2 = TYPE$f.LeftSquareBracket;
      var RIGHTSQUAREBRACKET$2 = TYPE$f.RightSquareBracket;

      var Brackets = {
          name: 'Brackets',
          structure: {
              children: [[]]
          },
          parse: function(readSequence, recognizer) {
              var start = this.scanner.tokenStart;
              var children = null;

              this.eat(LEFTSQUAREBRACKET$2);

              children = readSequence.call(this, recognizer);

              if (!this.scanner.eof) {
                  this.eat(RIGHTSQUAREBRACKET$2);
              }

              return {
                  type: 'Brackets',
                  loc: this.getLocation(start, this.scanner.tokenStart),
                  children: children
              };
          },
          generate: function(node) {
              this.chunk('[');
              this.children(node);
              this.chunk(']');
          }
      };

      var CDC = tokenizer.TYPE.CDC;

      var CDC_1 = {
          name: 'CDC',
          structure: [],
          parse: function() {
              var start = this.scanner.tokenStart;

              this.eat(CDC); // -->

              return {
                  type: 'CDC',
                  loc: this.getLocation(start, this.scanner.tokenStart)
              };
          },
          generate: function() {
              this.chunk('-->');
          }
      };

      var CDO = tokenizer.TYPE.CDO;

      var CDO_1 = {
          name: 'CDO',
          structure: [],
          parse: function() {
              var start = this.scanner.tokenStart;

              this.eat(CDO); // <!--

              return {
                  type: 'CDO',
                  loc: this.getLocation(start, this.scanner.tokenStart)
              };
          },
          generate: function() {
              this.chunk('<!--');
          }
      };

      var TYPE$g = tokenizer.TYPE;

      var IDENT$5 = TYPE$g.Ident;
      var FULLSTOP = 0x002E; // U+002E FULL STOP (.)

      // '.' ident
      var ClassSelector = {
          name: 'ClassSelector',
          structure: {
              name: String
          },
          parse: function() {
              if (!this.scanner.isDelim(FULLSTOP)) {
                  this.error('Full stop is expected');
              }

              this.scanner.next();

              return {
                  type: 'ClassSelector',
                  loc: this.getLocation(this.scanner.tokenStart - 1, this.scanner.tokenEnd),
                  name: this.consume(IDENT$5)
              };
          },
          generate: function(node) {
              this.chunk('.');
              this.chunk(node.name);
          }
      };

      var TYPE$h = tokenizer.TYPE;

      var IDENT$6 = TYPE$h.Ident;
      var PLUSSIGN$4 = 0x002B;        // U+002B PLUS SIGN (+)
      var SOLIDUS = 0x002F;         // U+002F SOLIDUS (/)
      var GREATERTHANSIGN$1 = 0x003E; // U+003E GREATER-THAN SIGN (>)
      var TILDE$1 = 0x007E;           // U+007E TILDE (~)

      // + | > | ~ | /deep/
      var Combinator = {
          name: 'Combinator',
          structure: {
              name: String
          },
          parse: function() {
              var start = this.scanner.tokenStart;
              var code = this.scanner.source.charCodeAt(this.scanner.tokenStart);

              switch (code) {
                  case GREATERTHANSIGN$1:
                  case PLUSSIGN$4:
                  case TILDE$1:
                      this.scanner.next();
                      break;

                  case SOLIDUS:
                      this.scanner.next();

                      if (this.scanner.tokenType !== IDENT$6 || this.scanner.lookupValue(0, 'deep') === false) {
                          this.error('Identifier `deep` is expected');
                      }

                      this.scanner.next();

                      if (!this.scanner.isDelim(SOLIDUS)) {
                          this.error('Solidus is expected');
                      }

                      this.scanner.next();
                      break;

                  default:
                      this.error('Combinator is expected');
              }

              return {
                  type: 'Combinator',
                  loc: this.getLocation(start, this.scanner.tokenStart),
                  name: this.scanner.substrToCursor(start)
              };
          },
          generate: function(node) {
              this.chunk(node.name);
          }
      };

      var TYPE$i = tokenizer.TYPE;

      var COMMENT$6 = TYPE$i.Comment;
      var ASTERISK$2 = 0x002A;        // U+002A ASTERISK (*)
      var SOLIDUS$1 = 0x002F;         // U+002F SOLIDUS (/)

      // '/*' .* '*/'
      var Comment = {
          name: 'Comment',
          structure: {
              value: String
          },
          parse: function() {
              var start = this.scanner.tokenStart;
              var end = this.scanner.tokenEnd;

              this.eat(COMMENT$6);

              if ((end - start + 2) >= 2 &&
                  this.scanner.source.charCodeAt(end - 2) === ASTERISK$2 &&
                  this.scanner.source.charCodeAt(end - 1) === SOLIDUS$1) {
                  end -= 2;
              }

              return {
                  type: 'Comment',
                  loc: this.getLocation(start, this.scanner.tokenStart),
                  value: this.scanner.source.substring(start + 2, end)
              };
          },
          generate: function(node) {
              this.chunk('/*');
              this.chunk(node.value);
              this.chunk('*/');
          }
      };

      var isCustomProperty$1 = names.isCustomProperty;
      var TYPE$j = tokenizer.TYPE;
      var rawMode$2 = Raw.mode;

      var IDENT$7 = TYPE$j.Ident;
      var HASH$1 = TYPE$j.Hash;
      var COLON$1 = TYPE$j.Colon;
      var SEMICOLON$3 = TYPE$j.Semicolon;
      var DELIM$2 = TYPE$j.Delim;
      var WHITESPACE$6 = TYPE$j.WhiteSpace;
      var EXCLAMATIONMARK$2 = 0x0021; // U+0021 EXCLAMATION MARK (!)
      var NUMBERSIGN$2 = 0x0023;      // U+0023 NUMBER SIGN (#)
      var DOLLARSIGN$1 = 0x0024;      // U+0024 DOLLAR SIGN ($)
      var AMPERSAND$1 = 0x0026;       // U+0026 ANPERSAND (&)
      var ASTERISK$3 = 0x002A;        // U+002A ASTERISK (*)
      var PLUSSIGN$5 = 0x002B;        // U+002B PLUS SIGN (+)
      var SOLIDUS$2 = 0x002F;         // U+002F SOLIDUS (/)

      function consumeValueRaw(startToken) {
          return this.Raw(startToken, rawMode$2.exclamationMarkOrSemicolon, true);
      }

      function consumeCustomPropertyRaw(startToken) {
          return this.Raw(startToken, rawMode$2.exclamationMarkOrSemicolon, false);
      }

      function consumeValue() {
          var startValueToken = this.scanner.tokenIndex;
          var value = this.Value();

          if (value.type !== 'Raw' &&
              this.scanner.eof === false &&
              this.scanner.tokenType !== SEMICOLON$3 &&
              this.scanner.isDelim(EXCLAMATIONMARK$2) === false &&
              this.scanner.isBalanceEdge(startValueToken) === false) {
              this.error();
          }

          return value;
      }

      var Declaration = {
          name: 'Declaration',
          structure: {
              important: [Boolean, String],
              property: String,
              value: ['Value', 'Raw']
          },
          parse: function() {
              var start = this.scanner.tokenStart;
              var startToken = this.scanner.tokenIndex;
              var property = readProperty$1.call(this);
              var customProperty = isCustomProperty$1(property);
              var parseValue = customProperty ? this.parseCustomProperty : this.parseValue;
              var consumeRaw = customProperty ? consumeCustomPropertyRaw : consumeValueRaw;
              var important = false;
              var value;

              this.scanner.skipSC();
              this.eat(COLON$1);

              const valueStart = this.scanner.tokenIndex;

              if (!customProperty) {
                  this.scanner.skipSC();
              }

              if (parseValue) {
                  value = this.parseWithFallback(consumeValue, consumeRaw);
              } else {
                  value = consumeRaw.call(this, this.scanner.tokenIndex);
              }

              if (customProperty && value.type === 'Value' && value.children.isEmpty()) {
                  for (let offset = valueStart - this.scanner.tokenIndex; offset <= 0; offset++) {
                      if (this.scanner.lookupType(offset) === WHITESPACE$6) {
                          value.children.appendData({
                              type: 'WhiteSpace',
                              loc: null,
                              value: ' '
                          });
                          break;
                      }
                  }
              }

              if (this.scanner.isDelim(EXCLAMATIONMARK$2)) {
                  important = getImportant.call(this);
                  this.scanner.skipSC();
              }

              // Do not include semicolon to range per spec
              // https://drafts.csswg.org/css-syntax/#declaration-diagram

              if (this.scanner.eof === false &&
                  this.scanner.tokenType !== SEMICOLON$3 &&
                  this.scanner.isBalanceEdge(startToken) === false) {
                  this.error();
              }

              return {
                  type: 'Declaration',
                  loc: this.getLocation(start, this.scanner.tokenStart),
                  important: important,
                  property: property,
                  value: value
              };
          },
          generate: function(node) {
              this.chunk(node.property);
              this.chunk(':');
              this.node(node.value);

              if (node.important) {
                  this.chunk(node.important === true ? '!important' : '!' + node.important);
              }
          },
          walkContext: 'declaration'
      };

      function readProperty$1() {
          var start = this.scanner.tokenStart;

          // hacks
          if (this.scanner.tokenType === DELIM$2) {
              switch (this.scanner.source.charCodeAt(this.scanner.tokenStart)) {
                  case ASTERISK$3:
                  case DOLLARSIGN$1:
                  case PLUSSIGN$5:
                  case NUMBERSIGN$2:
                  case AMPERSAND$1:
                      this.scanner.next();
                      break;

                  // TODO: not sure we should support this hack
                  case SOLIDUS$2:
                      this.scanner.next();
                      if (this.scanner.isDelim(SOLIDUS$2)) {
                          this.scanner.next();
                      }
                      break;
              }
          }

          if (this.scanner.tokenType === HASH$1) {
              this.eat(HASH$1);
          } else {
              this.eat(IDENT$7);
          }

          return this.scanner.substrToCursor(start);
      }

      // ! ws* important
      function getImportant() {
          this.eat(DELIM$2);
          this.scanner.skipSC();

          var important = this.consume(IDENT$7);

          // store original value in case it differ from `important`
          // for better original source restoring and hacks like `!ie` support
          return important === 'important' ? true : important;
      }

      var TYPE$k = tokenizer.TYPE;
      var rawMode$3 = Raw.mode;

      var WHITESPACE$7 = TYPE$k.WhiteSpace;
      var COMMENT$7 = TYPE$k.Comment;
      var SEMICOLON$4 = TYPE$k.Semicolon;

      function consumeRaw$2(startToken) {
          return this.Raw(startToken, rawMode$3.semicolonIncluded, true);
      }

      var DeclarationList = {
          name: 'DeclarationList',
          structure: {
              children: [[
                  'Declaration'
              ]]
          },
          parse: function() {
              var children = this.createList();

              
              while (!this.scanner.eof) {
                  switch (this.scanner.tokenType) {
                      case WHITESPACE$7:
                      case COMMENT$7:
                      case SEMICOLON$4:
                          this.scanner.next();
                          break;

                      default:
                          children.push(this.parseWithFallback(this.Declaration, consumeRaw$2));
                  }
              }

              return {
                  type: 'DeclarationList',
                  loc: this.getLocationFromList(children),
                  children: children
              };
          },
          generate: function(node) {
              this.children(node, function(prev) {
                  if (prev.type === 'Declaration') {
                      this.chunk(';');
                  }
              });
          }
      };

      var consumeNumber$3 = utils.consumeNumber;
      var TYPE$l = tokenizer.TYPE;

      var DIMENSION$3 = TYPE$l.Dimension;

      var Dimension = {
          name: 'Dimension',
          structure: {
              value: String,
              unit: String
          },
          parse: function() {
              var start = this.scanner.tokenStart;
              var numberEnd = consumeNumber$3(this.scanner.source, start);

              this.eat(DIMENSION$3);

              return {
                  type: 'Dimension',
                  loc: this.getLocation(start, this.scanner.tokenStart),
                  value: this.scanner.source.substring(start, numberEnd),
                  unit: this.scanner.source.substring(numberEnd, this.scanner.tokenStart)
              };
          },
          generate: function(node) {
              this.chunk(node.value);
              this.chunk(node.unit);
          }
      };

      var TYPE$m = tokenizer.TYPE;

      var RIGHTPARENTHESIS$2 = TYPE$m.RightParenthesis;

      // <function-token> <sequence> )
      var _Function = {
          name: 'Function',
          structure: {
              name: String,
              children: [[]]
          },
          parse: function(readSequence, recognizer) {
              var start = this.scanner.tokenStart;
              var name = this.consumeFunctionName();
              var nameLowerCase = name.toLowerCase();
              var children;

              children = recognizer.hasOwnProperty(nameLowerCase)
                  ? recognizer[nameLowerCase].call(this, recognizer)
                  : readSequence.call(this, recognizer);

              if (!this.scanner.eof) {
                  this.eat(RIGHTPARENTHESIS$2);
              }

              return {
                  type: 'Function',
                  loc: this.getLocation(start, this.scanner.tokenStart),
                  name: name,
                  children: children
              };
          },
          generate: function(node) {
              this.chunk(node.name);
              this.chunk('(');
              this.children(node);
              this.chunk(')');
          },
          walkContext: 'function'
      };

      var TYPE$n = tokenizer.TYPE;

      var HASH$2 = TYPE$n.Hash;

      // '#' ident
      var Hash = {
          name: 'Hash',
          structure: {
              value: String
          },
          parse: function() {
              var start = this.scanner.tokenStart;

              this.eat(HASH$2);

              return {
                  type: 'Hash',
                  loc: this.getLocation(start, this.scanner.tokenStart),
                  value: this.scanner.substrToCursor(start + 1)
              };
          },
          generate: function(node) {
              this.chunk('#');
              this.chunk(node.value);
          }
      };

      var TYPE$o = tokenizer.TYPE;

      var IDENT$8 = TYPE$o.Ident;

      var Identifier = {
          name: 'Identifier',
          structure: {
              name: String
          },
          parse: function() {
              return {
                  type: 'Identifier',
                  loc: this.getLocation(this.scanner.tokenStart, this.scanner.tokenEnd),
                  name: this.consume(IDENT$8)
              };
          },
          generate: function(node) {
              this.chunk(node.name);
          }
      };

      var TYPE$p = tokenizer.TYPE;

      var HASH$3 = TYPE$p.Hash;

      // <hash-token>
      var IdSelector = {
          name: 'IdSelector',
          structure: {
              name: String
          },
          parse: function() {
              var start = this.scanner.tokenStart;

              // TODO: check value is an ident
              this.eat(HASH$3);

              return {
                  type: 'IdSelector',
                  loc: this.getLocation(start, this.scanner.tokenStart),
                  name: this.scanner.substrToCursor(start + 1)
              };
          },
          generate: function(node) {
              this.chunk('#');
              this.chunk(node.name);
          }
      };

      var TYPE$q = tokenizer.TYPE;

      var IDENT$9 = TYPE$q.Ident;
      var NUMBER$4 = TYPE$q.Number;
      var DIMENSION$4 = TYPE$q.Dimension;
      var LEFTPARENTHESIS$2 = TYPE$q.LeftParenthesis;
      var RIGHTPARENTHESIS$3 = TYPE$q.RightParenthesis;
      var COLON$2 = TYPE$q.Colon;
      var DELIM$3 = TYPE$q.Delim;

      var MediaFeature = {
          name: 'MediaFeature',
          structure: {
              name: String,
              value: ['Identifier', 'Number', 'Dimension', 'Ratio', null]
          },
          parse: function() {
              var start = this.scanner.tokenStart;
              var name;
              var value = null;

              this.eat(LEFTPARENTHESIS$2);
              this.scanner.skipSC();

              name = this.consume(IDENT$9);
              this.scanner.skipSC();

              if (this.scanner.tokenType !== RIGHTPARENTHESIS$3) {
                  this.eat(COLON$2);
                  this.scanner.skipSC();

                  switch (this.scanner.tokenType) {
                      case NUMBER$4:
                          if (this.lookupNonWSType(1) === DELIM$3) {
                              value = this.Ratio();
                          } else {
                              value = this.Number();
                          }

                          break;

                      case DIMENSION$4:
                          value = this.Dimension();
                          break;

                      case IDENT$9:
                          value = this.Identifier();

                          break;

                      default:
                          this.error('Number, dimension, ratio or identifier is expected');
                  }

                  this.scanner.skipSC();
              }

              this.eat(RIGHTPARENTHESIS$3);

              return {
                  type: 'MediaFeature',
                  loc: this.getLocation(start, this.scanner.tokenStart),
                  name: name,
                  value: value
              };
          },
          generate: function(node) {
              this.chunk('(');
              this.chunk(node.name);
              if (node.value !== null) {
                  this.chunk(':');
                  this.node(node.value);
              }
              this.chunk(')');
          }
      };

      var TYPE$r = tokenizer.TYPE;

      var WHITESPACE$8 = TYPE$r.WhiteSpace;
      var COMMENT$8 = TYPE$r.Comment;
      var IDENT$a = TYPE$r.Ident;
      var LEFTPARENTHESIS$3 = TYPE$r.LeftParenthesis;

      var MediaQuery = {
          name: 'MediaQuery',
          structure: {
              children: [[
                  'Identifier',
                  'MediaFeature',
                  'WhiteSpace'
              ]]
          },
          parse: function() {
              this.scanner.skipSC();

              var children = this.createList();
              var child = null;
              var space = null;

              scan:
              while (!this.scanner.eof) {
                  switch (this.scanner.tokenType) {
                      case COMMENT$8:
                          this.scanner.next();
                          continue;

                      case WHITESPACE$8:
                          space = this.WhiteSpace();
                          continue;

                      case IDENT$a:
                          child = this.Identifier();
                          break;

                      case LEFTPARENTHESIS$3:
                          child = this.MediaFeature();
                          break;

                      default:
                          break scan;
                  }

                  if (space !== null) {
                      children.push(space);
                      space = null;
                  }

                  children.push(child);
              }

              if (child === null) {
                  this.error('Identifier or parenthesis is expected');
              }

              return {
                  type: 'MediaQuery',
                  loc: this.getLocationFromList(children),
                  children: children
              };
          },
          generate: function(node) {
              this.children(node);
          }
      };

      var COMMA$1 = tokenizer.TYPE.Comma;

      var MediaQueryList = {
          name: 'MediaQueryList',
          structure: {
              children: [[
                  'MediaQuery'
              ]]
          },
          parse: function(relative) {
              var children = this.createList();

              this.scanner.skipSC();

              while (!this.scanner.eof) {
                  children.push(this.MediaQuery(relative));

                  if (this.scanner.tokenType !== COMMA$1) {
                      break;
                  }

                  this.scanner.next();
              }

              return {
                  type: 'MediaQueryList',
                  loc: this.getLocationFromList(children),
                  children: children
              };
          },
          generate: function(node) {
              this.children(node, function() {
                  this.chunk(',');
              });
          }
      };

      var Nth = {
          name: 'Nth',
          structure: {
              nth: ['AnPlusB', 'Identifier'],
              selector: ['SelectorList', null]
          },
          parse: function(allowOfClause) {
              this.scanner.skipSC();

              var start = this.scanner.tokenStart;
              var end = start;
              var selector = null;
              var query;

              if (this.scanner.lookupValue(0, 'odd') || this.scanner.lookupValue(0, 'even')) {
                  query = this.Identifier();
              } else {
                  query = this.AnPlusB();
              }

              this.scanner.skipSC();

              if (allowOfClause && this.scanner.lookupValue(0, 'of')) {
                  this.scanner.next();

                  selector = this.SelectorList();

                  if (this.needPositions) {
                      end = this.getLastListNode(selector.children).loc.end.offset;
                  }
              } else {
                  if (this.needPositions) {
                      end = query.loc.end.offset;
                  }
              }

              return {
                  type: 'Nth',
                  loc: this.getLocation(start, end),
                  nth: query,
                  selector: selector
              };
          },
          generate: function(node) {
              this.node(node.nth);
              if (node.selector !== null) {
                  this.chunk(' of ');
                  this.node(node.selector);
              }
          }
      };

      var NUMBER$5 = tokenizer.TYPE.Number;

      var _Number = {
          name: 'Number',
          structure: {
              value: String
          },
          parse: function() {
              return {
                  type: 'Number',
                  loc: this.getLocation(this.scanner.tokenStart, this.scanner.tokenEnd),
                  value: this.consume(NUMBER$5)
              };
          },
          generate: function(node) {
              this.chunk(node.value);
          }
      };

      // '/' | '*' | ',' | ':' | '+' | '-'
      var Operator = {
          name: 'Operator',
          structure: {
              value: String
          },
          parse: function() {
              var start = this.scanner.tokenStart;

              this.scanner.next();

              return {
                  type: 'Operator',
                  loc: this.getLocation(start, this.scanner.tokenStart),
                  value: this.scanner.substrToCursor(start)
              };
          },
          generate: function(node) {
              this.chunk(node.value);
          }
      };

      var TYPE$s = tokenizer.TYPE;

      var LEFTPARENTHESIS$4 = TYPE$s.LeftParenthesis;
      var RIGHTPARENTHESIS$4 = TYPE$s.RightParenthesis;

      var Parentheses = {
          name: 'Parentheses',
          structure: {
              children: [[]]
          },
          parse: function(readSequence, recognizer) {
              var start = this.scanner.tokenStart;
              var children = null;

              this.eat(LEFTPARENTHESIS$4);

              children = readSequence.call(this, recognizer);

              if (!this.scanner.eof) {
                  this.eat(RIGHTPARENTHESIS$4);
              }

              return {
                  type: 'Parentheses',
                  loc: this.getLocation(start, this.scanner.tokenStart),
                  children: children
              };
          },
          generate: function(node) {
              this.chunk('(');
              this.children(node);
              this.chunk(')');
          }
      };

      var consumeNumber$4 = utils.consumeNumber;
      var TYPE$t = tokenizer.TYPE;

      var PERCENTAGE$1 = TYPE$t.Percentage;

      var Percentage = {
          name: 'Percentage',
          structure: {
              value: String
          },
          parse: function() {
              var start = this.scanner.tokenStart;
              var numberEnd = consumeNumber$4(this.scanner.source, start);

              this.eat(PERCENTAGE$1);

              return {
                  type: 'Percentage',
                  loc: this.getLocation(start, this.scanner.tokenStart),
                  value: this.scanner.source.substring(start, numberEnd)
              };
          },
          generate: function(node) {
              this.chunk(node.value);
              this.chunk('%');
          }
      };

      var TYPE$u = tokenizer.TYPE;

      var IDENT$b = TYPE$u.Ident;
      var FUNCTION$1 = TYPE$u.Function;
      var COLON$3 = TYPE$u.Colon;
      var RIGHTPARENTHESIS$5 = TYPE$u.RightParenthesis;

      // : [ <ident> | <function-token> <any-value>? ) ]
      var PseudoClassSelector = {
          name: 'PseudoClassSelector',
          structure: {
              name: String,
              children: [['Raw'], null]
          },
          parse: function() {
              var start = this.scanner.tokenStart;
              var children = null;
              var name;
              var nameLowerCase;

              this.eat(COLON$3);

              if (this.scanner.tokenType === FUNCTION$1) {
                  name = this.consumeFunctionName();
                  nameLowerCase = name.toLowerCase();

                  if (this.pseudo.hasOwnProperty(nameLowerCase)) {
                      this.scanner.skipSC();
                      children = this.pseudo[nameLowerCase].call(this);
                      this.scanner.skipSC();
                  } else {
                      children = this.createList();
                      children.push(
                          this.Raw(this.scanner.tokenIndex, null, false)
                      );
                  }

                  this.eat(RIGHTPARENTHESIS$5);
              } else {
                  name = this.consume(IDENT$b);
              }

              return {
                  type: 'PseudoClassSelector',
                  loc: this.getLocation(start, this.scanner.tokenStart),
                  name: name,
                  children: children
              };
          },
          generate: function(node) {
              this.chunk(':');
              this.chunk(node.name);

              if (node.children !== null) {
                  this.chunk('(');
                  this.children(node);
                  this.chunk(')');
              }
          },
          walkContext: 'function'
      };

      var TYPE$v = tokenizer.TYPE;

      var IDENT$c = TYPE$v.Ident;
      var FUNCTION$2 = TYPE$v.Function;
      var COLON$4 = TYPE$v.Colon;
      var RIGHTPARENTHESIS$6 = TYPE$v.RightParenthesis;

      // :: [ <ident> | <function-token> <any-value>? ) ]
      var PseudoElementSelector = {
          name: 'PseudoElementSelector',
          structure: {
              name: String,
              children: [['Raw'], null]
          },
          parse: function() {
              var start = this.scanner.tokenStart;
              var children = null;
              var name;
              var nameLowerCase;

              this.eat(COLON$4);
              this.eat(COLON$4);

              if (this.scanner.tokenType === FUNCTION$2) {
                  name = this.consumeFunctionName();
                  nameLowerCase = name.toLowerCase();

                  if (this.pseudo.hasOwnProperty(nameLowerCase)) {
                      this.scanner.skipSC();
                      children = this.pseudo[nameLowerCase].call(this);
                      this.scanner.skipSC();
                  } else {
                      children = this.createList();
                      children.push(
                          this.Raw(this.scanner.tokenIndex, null, false)
                      );
                  }

                  this.eat(RIGHTPARENTHESIS$6);
              } else {
                  name = this.consume(IDENT$c);
              }

              return {
                  type: 'PseudoElementSelector',
                  loc: this.getLocation(start, this.scanner.tokenStart),
                  name: name,
                  children: children
              };
          },
          generate: function(node) {
              this.chunk('::');
              this.chunk(node.name);

              if (node.children !== null) {
                  this.chunk('(');
                  this.children(node);
                  this.chunk(')');
              }
          },
          walkContext: 'function'
      };

      var isDigit$5 = tokenizer.isDigit;
      var TYPE$w = tokenizer.TYPE;

      var NUMBER$6 = TYPE$w.Number;
      var DELIM$4 = TYPE$w.Delim;
      var SOLIDUS$3 = 0x002F;  // U+002F SOLIDUS (/)
      var FULLSTOP$1 = 0x002E; // U+002E FULL STOP (.)

      // Terms of <ratio> should be a positive numbers (not zero or negative)
      // (see https://drafts.csswg.org/mediaqueries-3/#values)
      // However, -o-min-device-pixel-ratio takes fractional values as a ratio's term
      // and this is using by various sites. Therefore we relax checking on parse
      // to test a term is unsigned number without an exponent part.
      // Additional checking may be applied on lexer validation.
      function consumeNumber$5() {
          this.scanner.skipWS();

          var value = this.consume(NUMBER$6);

          for (var i = 0; i < value.length; i++) {
              var code = value.charCodeAt(i);
              if (!isDigit$5(code) && code !== FULLSTOP$1) {
                  this.error('Unsigned number is expected', this.scanner.tokenStart - value.length + i);
              }
          }

          if (Number(value) === 0) {
              this.error('Zero number is not allowed', this.scanner.tokenStart - value.length);
          }

          return value;
      }

      // <positive-integer> S* '/' S* <positive-integer>
      var Ratio = {
          name: 'Ratio',
          structure: {
              left: String,
              right: String
          },
          parse: function() {
              var start = this.scanner.tokenStart;
              var left = consumeNumber$5.call(this);
              var right;

              this.scanner.skipWS();

              if (!this.scanner.isDelim(SOLIDUS$3)) {
                  this.error('Solidus is expected');
              }
              this.eat(DELIM$4);
              right = consumeNumber$5.call(this);

              return {
                  type: 'Ratio',
                  loc: this.getLocation(start, this.scanner.tokenStart),
                  left: left,
                  right: right
              };
          },
          generate: function(node) {
              this.chunk(node.left);
              this.chunk('/');
              this.chunk(node.right);
          }
      };

      var TYPE$x = tokenizer.TYPE;
      var rawMode$4 = Raw.mode;

      var LEFTCURLYBRACKET$4 = TYPE$x.LeftCurlyBracket;

      function consumeRaw$3(startToken) {
          return this.Raw(startToken, rawMode$4.leftCurlyBracket, true);
      }

      function consumePrelude() {
          var prelude = this.SelectorList();

          if (prelude.type !== 'Raw' &&
              this.scanner.eof === false &&
              this.scanner.tokenType !== LEFTCURLYBRACKET$4) {
              this.error();
          }

          return prelude;
      }

      var Rule = {
          name: 'Rule',
          structure: {
              prelude: ['SelectorList', 'Raw'],
              block: ['Block']
          },
          parse: function() {
              var startToken = this.scanner.tokenIndex;
              var startOffset = this.scanner.tokenStart;
              var prelude;
              var block;

              if (this.parseRulePrelude) {
                  prelude = this.parseWithFallback(consumePrelude, consumeRaw$3);
              } else {
                  prelude = consumeRaw$3.call(this, startToken);
              }

              block = this.Block(true);

              return {
                  type: 'Rule',
                  loc: this.getLocation(startOffset, this.scanner.tokenStart),
                  prelude: prelude,
                  block: block
              };
          },
          generate: function(node) {
              this.node(node.prelude);
              this.node(node.block);
          },
          walkContext: 'rule'
      };

      var Selector = {
          name: 'Selector',
          structure: {
              children: [[
                  'TypeSelector',
                  'IdSelector',
                  'ClassSelector',
                  'AttributeSelector',
                  'PseudoClassSelector',
                  'PseudoElementSelector',
                  'Combinator',
                  'WhiteSpace'
              ]]
          },
          parse: function() {
              var children = this.readSequence(this.scope.Selector);

              // nothing were consumed
              if (this.getFirstListNode(children) === null) {
                  this.error('Selector is expected');
              }

              return {
                  type: 'Selector',
                  loc: this.getLocationFromList(children),
                  children: children
              };
          },
          generate: function(node) {
              this.children(node);
          }
      };

      var TYPE$y = tokenizer.TYPE;

      var COMMA$2 = TYPE$y.Comma;

      var SelectorList = {
          name: 'SelectorList',
          structure: {
              children: [[
                  'Selector',
                  'Raw'
              ]]
          },
          parse: function() {
              var children = this.createList();

              while (!this.scanner.eof) {
                  children.push(this.Selector());

                  if (this.scanner.tokenType === COMMA$2) {
                      this.scanner.next();
                      continue;
                  }

                  break;
              }

              return {
                  type: 'SelectorList',
                  loc: this.getLocationFromList(children),
                  children: children
              };
          },
          generate: function(node) {
              this.children(node, function() {
                  this.chunk(',');
              });
          },
          walkContext: 'selector'
      };

      var STRING$1 = tokenizer.TYPE.String;

      var _String = {
          name: 'String',
          structure: {
              value: String
          },
          parse: function() {
              return {
                  type: 'String',
                  loc: this.getLocation(this.scanner.tokenStart, this.scanner.tokenEnd),
                  value: this.consume(STRING$1)
              };
          },
          generate: function(node) {
              this.chunk(node.value);
          }
      };

      var TYPE$z = tokenizer.TYPE;

      var WHITESPACE$9 = TYPE$z.WhiteSpace;
      var COMMENT$9 = TYPE$z.Comment;
      var ATKEYWORD$2 = TYPE$z.AtKeyword;
      var CDO$1 = TYPE$z.CDO;
      var CDC$1 = TYPE$z.CDC;
      var EXCLAMATIONMARK$3 = 0x0021; // U+0021 EXCLAMATION MARK (!)

      function consumeRaw$4(startToken) {
          return this.Raw(startToken, null, false);
      }

      var StyleSheet = {
          name: 'StyleSheet',
          structure: {
              children: [[
                  'Comment',
                  'CDO',
                  'CDC',
                  'Atrule',
                  'Rule',
                  'Raw'
              ]]
          },
          parse: function() {
              var start = this.scanner.tokenStart;
              var children = this.createList();
              var child;

              
              while (!this.scanner.eof) {
                  switch (this.scanner.tokenType) {
                      case WHITESPACE$9:
                          this.scanner.next();
                          continue;

                      case COMMENT$9:
                          // ignore comments except exclamation comments (i.e. /*! .. */) on top level
                          if (this.scanner.source.charCodeAt(this.scanner.tokenStart + 2) !== EXCLAMATIONMARK$3) {
                              this.scanner.next();
                              continue;
                          }

                          child = this.Comment();
                          break;

                      case CDO$1: // <!--
                          child = this.CDO();
                          break;

                      case CDC$1: // -->
                          child = this.CDC();
                          break;

                      // CSS Syntax Module Level 3
                      // §2.2 Error handling
                      // At the "top level" of a stylesheet, an <at-keyword-token> starts an at-rule.
                      case ATKEYWORD$2:
                          child = this.parseWithFallback(this.Atrule, consumeRaw$4);
                          break;

                      // Anything else starts a qualified rule ...
                      default:
                          child = this.parseWithFallback(this.Rule, consumeRaw$4);
                  }

                  children.push(child);
              }

              return {
                  type: 'StyleSheet',
                  loc: this.getLocation(start, this.scanner.tokenStart),
                  children: children
              };
          },
          generate: function(node) {
              this.children(node);
          },
          walkContext: 'stylesheet'
      };

      var TYPE$A = tokenizer.TYPE;

      var IDENT$d = TYPE$A.Ident;
      var ASTERISK$4 = 0x002A;     // U+002A ASTERISK (*)
      var VERTICALLINE$2 = 0x007C; // U+007C VERTICAL LINE (|)

      function eatIdentifierOrAsterisk() {
          if (this.scanner.tokenType !== IDENT$d &&
              this.scanner.isDelim(ASTERISK$4) === false) {
              this.error('Identifier or asterisk is expected');
          }

          this.scanner.next();
      }

      // ident
      // ident|ident
      // ident|*
      // *
      // *|ident
      // *|*
      // |ident
      // |*
      var TypeSelector = {
          name: 'TypeSelector',
          structure: {
              name: String
          },
          parse: function() {
              var start = this.scanner.tokenStart;

              if (this.scanner.isDelim(VERTICALLINE$2)) {
                  this.scanner.next();
                  eatIdentifierOrAsterisk.call(this);
              } else {
                  eatIdentifierOrAsterisk.call(this);

                  if (this.scanner.isDelim(VERTICALLINE$2)) {
                      this.scanner.next();
                      eatIdentifierOrAsterisk.call(this);
                  }
              }

              return {
                  type: 'TypeSelector',
                  loc: this.getLocation(start, this.scanner.tokenStart),
                  name: this.scanner.substrToCursor(start)
              };
          },
          generate: function(node) {
              this.chunk(node.name);
          }
      };

      var isHexDigit$4 = tokenizer.isHexDigit;
      var cmpChar$4 = tokenizer.cmpChar;
      var TYPE$B = tokenizer.TYPE;
      var NAME$3 = tokenizer.NAME;

      var IDENT$e = TYPE$B.Ident;
      var NUMBER$7 = TYPE$B.Number;
      var DIMENSION$5 = TYPE$B.Dimension;
      var PLUSSIGN$6 = 0x002B;     // U+002B PLUS SIGN (+)
      var HYPHENMINUS$4 = 0x002D;  // U+002D HYPHEN-MINUS (-)
      var QUESTIONMARK$2 = 0x003F; // U+003F QUESTION MARK (?)
      var U$1 = 0x0075;            // U+0075 LATIN SMALL LETTER U (u)

      function eatHexSequence(offset, allowDash) {
          for (var pos = this.scanner.tokenStart + offset, len = 0; pos < this.scanner.tokenEnd; pos++) {
              var code = this.scanner.source.charCodeAt(pos);

              if (code === HYPHENMINUS$4 && allowDash && len !== 0) {
                  if (eatHexSequence.call(this, offset + len + 1, false) === 0) {
                      this.error();
                  }

                  return -1;
              }

              if (!isHexDigit$4(code)) {
                  this.error(
                      allowDash && len !== 0
                          ? 'HyphenMinus' + (len < 6 ? ' or hex digit' : '') + ' is expected'
                          : (len < 6 ? 'Hex digit is expected' : 'Unexpected input'),
                      pos
                  );
              }

              if (++len > 6) {
                  this.error('Too many hex digits', pos);
              }    }

          this.scanner.next();
          return len;
      }

      function eatQuestionMarkSequence(max) {
          var count = 0;

          while (this.scanner.isDelim(QUESTIONMARK$2)) {
              if (++count > max) {
                  this.error('Too many question marks');
              }

              this.scanner.next();
          }
      }

      function startsWith$1(code) {
          if (this.scanner.source.charCodeAt(this.scanner.tokenStart) !== code) {
              this.error(NAME$3[code] + ' is expected');
          }
      }

      // https://drafts.csswg.org/css-syntax/#urange
      // Informally, the <urange> production has three forms:
      // U+0001
      //      Defines a range consisting of a single code point, in this case the code point "1".
      // U+0001-00ff
      //      Defines a range of codepoints between the first and the second value, in this case
      //      the range between "1" and "ff" (255 in decimal) inclusive.
      // U+00??
      //      Defines a range of codepoints where the "?" characters range over all hex digits,
      //      in this case defining the same as the value U+0000-00ff.
      // In each form, a maximum of 6 digits is allowed for each hexadecimal number (if you treat "?" as a hexadecimal digit).
      //
      // <urange> =
      //   u '+' <ident-token> '?'* |
      //   u <dimension-token> '?'* |
      //   u <number-token> '?'* |
      //   u <number-token> <dimension-token> |
      //   u <number-token> <number-token> |
      //   u '+' '?'+
      function scanUnicodeRange() {
          var hexLength = 0;

          // u '+' <ident-token> '?'*
          // u '+' '?'+
          if (this.scanner.isDelim(PLUSSIGN$6)) {
              this.scanner.next();

              if (this.scanner.tokenType === IDENT$e) {
                  hexLength = eatHexSequence.call(this, 0, true);
                  if (hexLength > 0) {
                      eatQuestionMarkSequence.call(this, 6 - hexLength);
                  }
                  return;
              }

              if (this.scanner.isDelim(QUESTIONMARK$2)) {
                  this.scanner.next();
                  eatQuestionMarkSequence.call(this, 5);
                  return;
              }

              this.error('Hex digit or question mark is expected');
              return;
          }

          // u <number-token> '?'*
          // u <number-token> <dimension-token>
          // u <number-token> <number-token>
          if (this.scanner.tokenType === NUMBER$7) {
              startsWith$1.call(this, PLUSSIGN$6);
              hexLength = eatHexSequence.call(this, 1, true);

              if (this.scanner.isDelim(QUESTIONMARK$2)) {
                  eatQuestionMarkSequence.call(this, 6 - hexLength);
                  return;
              }

              if (this.scanner.tokenType === DIMENSION$5 ||
                  this.scanner.tokenType === NUMBER$7) {
                  startsWith$1.call(this, HYPHENMINUS$4);
                  eatHexSequence.call(this, 1, false);
                  return;
              }

              return;
          }

          // u <dimension-token> '?'*
          if (this.scanner.tokenType === DIMENSION$5) {
              startsWith$1.call(this, PLUSSIGN$6);
              hexLength = eatHexSequence.call(this, 1, true);

              if (hexLength > 0) {
                  eatQuestionMarkSequence.call(this, 6 - hexLength);
              }

              return;
          }

          this.error();
      }

      var UnicodeRange = {
          name: 'UnicodeRange',
          structure: {
              value: String
          },
          parse: function() {
              var start = this.scanner.tokenStart;

              // U or u
              if (!cmpChar$4(this.scanner.source, start, U$1)) {
                  this.error('U is expected');
              }

              if (!cmpChar$4(this.scanner.source, start + 1, PLUSSIGN$6)) {
                  this.error('Plus sign is expected');
              }

              this.scanner.next();
              scanUnicodeRange.call(this);

              return {
                  type: 'UnicodeRange',
                  loc: this.getLocation(start, this.scanner.tokenStart),
                  value: this.scanner.substrToCursor(start)
              };
          },
          generate: function(node) {
              this.chunk(node.value);
          }
      };

      var isWhiteSpace$2 = tokenizer.isWhiteSpace;
      var cmpStr$5 = tokenizer.cmpStr;
      var TYPE$C = tokenizer.TYPE;

      var FUNCTION$3 = TYPE$C.Function;
      var URL$1 = TYPE$C.Url;
      var RIGHTPARENTHESIS$7 = TYPE$C.RightParenthesis;

      // <url-token> | <function-token> <string> )
      var Url = {
          name: 'Url',
          structure: {
              value: ['String', 'Raw']
          },
          parse: function() {
              var start = this.scanner.tokenStart;
              var value;

              switch (this.scanner.tokenType) {
                  case URL$1:
                      var rawStart = start + 4;
                      var rawEnd = this.scanner.tokenEnd - 1;

                      while (rawStart < rawEnd && isWhiteSpace$2(this.scanner.source.charCodeAt(rawStart))) {
                          rawStart++;
                      }

                      while (rawStart < rawEnd && isWhiteSpace$2(this.scanner.source.charCodeAt(rawEnd - 1))) {
                          rawEnd--;
                      }

                      value = {
                          type: 'Raw',
                          loc: this.getLocation(rawStart, rawEnd),
                          value: this.scanner.source.substring(rawStart, rawEnd)
                      };

                      this.eat(URL$1);
                      break;

                  case FUNCTION$3:
                      if (!cmpStr$5(this.scanner.source, this.scanner.tokenStart, this.scanner.tokenEnd, 'url(')) {
                          this.error('Function name must be `url`');
                      }

                      this.eat(FUNCTION$3);
                      this.scanner.skipSC();
                      value = this.String();
                      this.scanner.skipSC();
                      this.eat(RIGHTPARENTHESIS$7);
                      break;

                  default:
                      this.error('Url or Function is expected');
              }

              return {
                  type: 'Url',
                  loc: this.getLocation(start, this.scanner.tokenStart),
                  value: value
              };
          },
          generate: function(node) {
              this.chunk('url');
              this.chunk('(');
              this.node(node.value);
              this.chunk(')');
          }
      };

      var Value = {
          name: 'Value',
          structure: {
              children: [[]]
          },
          parse: function() {
              var start = this.scanner.tokenStart;
              var children = this.readSequence(this.scope.Value);

              return {
                  type: 'Value',
                  loc: this.getLocation(start, this.scanner.tokenStart),
                  children: children
              };
          },
          generate: function(node) {
              this.children(node);
          }
      };

      var WHITESPACE$a = tokenizer.TYPE.WhiteSpace;
      var SPACE$2 = Object.freeze({
          type: 'WhiteSpace',
          loc: null,
          value: ' '
      });

      var WhiteSpace$1 = {
          name: 'WhiteSpace',
          structure: {
              value: String
          },
          parse: function() {
              this.eat(WHITESPACE$a);
              return SPACE$2;

              // return {
              //     type: 'WhiteSpace',
              //     loc: this.getLocation(this.scanner.tokenStart, this.scanner.tokenEnd),
              //     value: this.consume(WHITESPACE)
              // };
          },
          generate: function(node) {
              this.chunk(node.value);
          }
      };

      var node = {
          AnPlusB: AnPlusB,
          Atrule: Atrule,
          AtrulePrelude: AtrulePrelude,
          AttributeSelector: AttributeSelector,
          Block: Block,
          Brackets: Brackets,
          CDC: CDC_1,
          CDO: CDO_1,
          ClassSelector: ClassSelector,
          Combinator: Combinator,
          Comment: Comment,
          Declaration: Declaration,
          DeclarationList: DeclarationList,
          Dimension: Dimension,
          Function: _Function,
          Hash: Hash,
          Identifier: Identifier,
          IdSelector: IdSelector,
          MediaFeature: MediaFeature,
          MediaQuery: MediaQuery,
          MediaQueryList: MediaQueryList,
          Nth: Nth,
          Number: _Number,
          Operator: Operator,
          Parentheses: Parentheses,
          Percentage: Percentage,
          PseudoClassSelector: PseudoClassSelector,
          PseudoElementSelector: PseudoElementSelector,
          Ratio: Ratio,
          Raw: Raw,
          Rule: Rule,
          Selector: Selector,
          SelectorList: SelectorList,
          String: _String,
          StyleSheet: StyleSheet,
          TypeSelector: TypeSelector,
          UnicodeRange: UnicodeRange,
          Url: Url,
          Value: Value,
          WhiteSpace: WhiteSpace$1
      };

      var lexer = {
          generic: true,
          types: data.types,
          atrules: data.atrules,
          properties: data.properties,
          node: node
      };

      var cmpChar$5 = tokenizer.cmpChar;
      var cmpStr$6 = tokenizer.cmpStr;
      var TYPE$D = tokenizer.TYPE;

      var IDENT$f = TYPE$D.Ident;
      var STRING$2 = TYPE$D.String;
      var NUMBER$8 = TYPE$D.Number;
      var FUNCTION$4 = TYPE$D.Function;
      var URL$2 = TYPE$D.Url;
      var HASH$4 = TYPE$D.Hash;
      var DIMENSION$6 = TYPE$D.Dimension;
      var PERCENTAGE$2 = TYPE$D.Percentage;
      var LEFTPARENTHESIS$5 = TYPE$D.LeftParenthesis;
      var LEFTSQUAREBRACKET$3 = TYPE$D.LeftSquareBracket;
      var COMMA$3 = TYPE$D.Comma;
      var DELIM$5 = TYPE$D.Delim;
      var NUMBERSIGN$3 = 0x0023;  // U+0023 NUMBER SIGN (#)
      var ASTERISK$5 = 0x002A;    // U+002A ASTERISK (*)
      var PLUSSIGN$7 = 0x002B;    // U+002B PLUS SIGN (+)
      var HYPHENMINUS$5 = 0x002D; // U+002D HYPHEN-MINUS (-)
      var SOLIDUS$4 = 0x002F;     // U+002F SOLIDUS (/)
      var U$2 = 0x0075;           // U+0075 LATIN SMALL LETTER U (u)

      var _default = function defaultRecognizer(context) {
          switch (this.scanner.tokenType) {
              case HASH$4:
                  return this.Hash();

              case COMMA$3:
                  context.space = null;
                  context.ignoreWSAfter = true;
                  return this.Operator();

              case LEFTPARENTHESIS$5:
                  return this.Parentheses(this.readSequence, context.recognizer);

              case LEFTSQUAREBRACKET$3:
                  return this.Brackets(this.readSequence, context.recognizer);

              case STRING$2:
                  return this.String();

              case DIMENSION$6:
                  return this.Dimension();

              case PERCENTAGE$2:
                  return this.Percentage();

              case NUMBER$8:
                  return this.Number();

              case FUNCTION$4:
                  return cmpStr$6(this.scanner.source, this.scanner.tokenStart, this.scanner.tokenEnd, 'url(')
                      ? this.Url()
                      : this.Function(this.readSequence, context.recognizer);

              case URL$2:
                  return this.Url();

              case IDENT$f:
                  // check for unicode range, it should start with u+ or U+
                  if (cmpChar$5(this.scanner.source, this.scanner.tokenStart, U$2) &&
                      cmpChar$5(this.scanner.source, this.scanner.tokenStart + 1, PLUSSIGN$7)) {
                      return this.UnicodeRange();
                  } else {
                      return this.Identifier();
                  }

              case DELIM$5:
                  var code = this.scanner.source.charCodeAt(this.scanner.tokenStart);

                  if (code === SOLIDUS$4 ||
                      code === ASTERISK$5 ||
                      code === PLUSSIGN$7 ||
                      code === HYPHENMINUS$5) {
                      return this.Operator(); // TODO: replace with Delim
                  }

                  // TODO: produce a node with Delim node type

                  if (code === NUMBERSIGN$3) {
                      this.error('Hex or identifier is expected', this.scanner.tokenStart + 1);
                  }

                  break;
          }
      };

      var atrulePrelude = {
          getNode: _default
      };

      var TYPE$E = tokenizer.TYPE;

      var DELIM$6 = TYPE$E.Delim;
      var IDENT$g = TYPE$E.Ident;
      var DIMENSION$7 = TYPE$E.Dimension;
      var PERCENTAGE$3 = TYPE$E.Percentage;
      var NUMBER$9 = TYPE$E.Number;
      var HASH$5 = TYPE$E.Hash;
      var COLON$5 = TYPE$E.Colon;
      var LEFTSQUAREBRACKET$4 = TYPE$E.LeftSquareBracket;
      var NUMBERSIGN$4 = 0x0023;      // U+0023 NUMBER SIGN (#)
      var ASTERISK$6 = 0x002A;        // U+002A ASTERISK (*)
      var PLUSSIGN$8 = 0x002B;        // U+002B PLUS SIGN (+)
      var SOLIDUS$5 = 0x002F;         // U+002F SOLIDUS (/)
      var FULLSTOP$2 = 0x002E;        // U+002E FULL STOP (.)
      var GREATERTHANSIGN$2 = 0x003E; // U+003E GREATER-THAN SIGN (>)
      var VERTICALLINE$3 = 0x007C;    // U+007C VERTICAL LINE (|)
      var TILDE$2 = 0x007E;           // U+007E TILDE (~)

      function getNode(context) {
          switch (this.scanner.tokenType) {
              case LEFTSQUAREBRACKET$4:
                  return this.AttributeSelector();

              case HASH$5:
                  return this.IdSelector();

              case COLON$5:
                  if (this.scanner.lookupType(1) === COLON$5) {
                      return this.PseudoElementSelector();
                  } else {
                      return this.PseudoClassSelector();
                  }

              case IDENT$g:
                  return this.TypeSelector();

              case NUMBER$9:
              case PERCENTAGE$3:
                  return this.Percentage();

              case DIMENSION$7:
                  // throws when .123ident
                  if (this.scanner.source.charCodeAt(this.scanner.tokenStart) === FULLSTOP$2) {
                      this.error('Identifier is expected', this.scanner.tokenStart + 1);
                  }
                  break;

              case DELIM$6:
                  var code = this.scanner.source.charCodeAt(this.scanner.tokenStart);

                  switch (code) {
                      case PLUSSIGN$8:
                      case GREATERTHANSIGN$2:
                      case TILDE$2:
                          context.space = null;
                          context.ignoreWSAfter = true;
                          return this.Combinator();

                      case SOLIDUS$5:  // /deep/
                          return this.Combinator();

                      case FULLSTOP$2:
                          return this.ClassSelector();

                      case ASTERISK$6:
                      case VERTICALLINE$3:
                          return this.TypeSelector();

                      case NUMBERSIGN$4:
                          return this.IdSelector();
                  }

                  break;
          }
      }
      var selector = {
          getNode: getNode
      };

      // legacy IE function
      // expression( <any-value> )
      var expression = function() {
          return this.createSingleNodeList(
              this.Raw(this.scanner.tokenIndex, null, false)
          );
      };

      var TYPE$F = tokenizer.TYPE;
      var rawMode$5 = Raw.mode;

      var COMMA$4 = TYPE$F.Comma;
      var WHITESPACE$b = TYPE$F.WhiteSpace;

      // var( <ident> , <value>? )
      var _var = function() {
          var children = this.createList();

          this.scanner.skipSC();

          // NOTE: Don't check more than a first argument is an ident, rest checks are for lexer
          children.push(this.Identifier());

          this.scanner.skipSC();

          if (this.scanner.tokenType === COMMA$4) {
              children.push(this.Operator());

              const startIndex = this.scanner.tokenIndex;
              const value = this.parseCustomProperty
                  ? this.Value(null)
                  : this.Raw(this.scanner.tokenIndex, rawMode$5.exclamationMarkOrSemicolon, false);

              if (value.type === 'Value' && value.children.isEmpty()) {
                  for (let offset = startIndex - this.scanner.tokenIndex; offset <= 0; offset++) {
                      if (this.scanner.lookupType(offset) === WHITESPACE$b) {
                          value.children.appendData({
                              type: 'WhiteSpace',
                              loc: null,
                              value: ' '
                          });
                          break;
                      }
                  }
              }

              children.push(value);
          }

          return children;
      };

      var value = {
          getNode: _default,
          'expression': expression,
          'var': _var
      };

      var scope = {
          AtrulePrelude: atrulePrelude,
          Selector: selector,
          Value: value
      };

      var fontFace = {
          parse: {
              prelude: null,
              block: function() {
                  return this.Block(true);
              }
          }
      };

      var TYPE$G = tokenizer.TYPE;

      var STRING$3 = TYPE$G.String;
      var IDENT$h = TYPE$G.Ident;
      var URL$3 = TYPE$G.Url;
      var FUNCTION$5 = TYPE$G.Function;
      var LEFTPARENTHESIS$6 = TYPE$G.LeftParenthesis;

      var _import = {
          parse: {
              prelude: function() {
                  var children = this.createList();

                  this.scanner.skipSC();

                  switch (this.scanner.tokenType) {
                      case STRING$3:
                          children.push(this.String());
                          break;

                      case URL$3:
                      case FUNCTION$5:
                          children.push(this.Url());
                          break;

                      default:
                          this.error('String or url() is expected');
                  }

                  if (this.lookupNonWSType(0) === IDENT$h ||
                      this.lookupNonWSType(0) === LEFTPARENTHESIS$6) {
                      children.push(this.WhiteSpace());
                      children.push(this.MediaQueryList());
                  }

                  return children;
              },
              block: null
          }
      };

      var media = {
          parse: {
              prelude: function() {
                  return this.createSingleNodeList(
                      this.MediaQueryList()
                  );
              },
              block: function() {
                  return this.Block(false);
              }
          }
      };

      var page = {
          parse: {
              prelude: function() {
                  return this.createSingleNodeList(
                      this.SelectorList()
                  );
              },
              block: function() {
                  return this.Block(true);
              }
          }
      };

      var TYPE$H = tokenizer.TYPE;

      var WHITESPACE$c = TYPE$H.WhiteSpace;
      var COMMENT$a = TYPE$H.Comment;
      var IDENT$i = TYPE$H.Ident;
      var FUNCTION$6 = TYPE$H.Function;
      var COLON$6 = TYPE$H.Colon;
      var LEFTPARENTHESIS$7 = TYPE$H.LeftParenthesis;

      function consumeRaw$5() {
          return this.createSingleNodeList(
              this.Raw(this.scanner.tokenIndex, null, false)
          );
      }

      function parentheses() {
          this.scanner.skipSC();

          if (this.scanner.tokenType === IDENT$i &&
              this.lookupNonWSType(1) === COLON$6) {
              return this.createSingleNodeList(
                  this.Declaration()
              );
          }

          return readSequence.call(this);
      }

      function readSequence() {
          var children = this.createList();
          var space = null;
          var child;

          this.scanner.skipSC();

          scan:
          while (!this.scanner.eof) {
              switch (this.scanner.tokenType) {
                  case WHITESPACE$c:
                      space = this.WhiteSpace();
                      continue;

                  case COMMENT$a:
                      this.scanner.next();
                      continue;

                  case FUNCTION$6:
                      child = this.Function(consumeRaw$5, this.scope.AtrulePrelude);
                      break;

                  case IDENT$i:
                      child = this.Identifier();
                      break;

                  case LEFTPARENTHESIS$7:
                      child = this.Parentheses(parentheses, this.scope.AtrulePrelude);
                      break;

                  default:
                      break scan;
              }

              if (space !== null) {
                  children.push(space);
                  space = null;
              }

              children.push(child);
          }

          return children;
      }

      var supports = {
          parse: {
              prelude: function() {
                  var children = readSequence.call(this);

                  if (this.getFirstListNode(children) === null) {
                      this.error('Condition is expected');
                  }

                  return children;
              },
              block: function() {
                  return this.Block(false);
              }
          }
      };

      var atrule = {
          'font-face': fontFace,
          'import': _import,
          'media': media,
          'page': page,
          'supports': supports
      };

      var dir = {
          parse: function() {
              return this.createSingleNodeList(
                  this.Identifier()
              );
          }
      };

      var has$1 = {
          parse: function() {
              return this.createSingleNodeList(
                  this.SelectorList()
              );
          }
      };

      var lang = {
          parse: function() {
              return this.createSingleNodeList(
                  this.Identifier()
              );
          }
      };

      var selectorList = {
          parse: function selectorList() {
              return this.createSingleNodeList(
                  this.SelectorList()
              );
          }
      };

      var matches = selectorList;

      var not = selectorList;

      var ALLOW_OF_CLAUSE = true;

      var nthWithOfClause = {
          parse: function nthWithOfClause() {
              return this.createSingleNodeList(
                  this.Nth(ALLOW_OF_CLAUSE)
              );
          }
      };

      var nthChild = nthWithOfClause;

      var nthLastChild = nthWithOfClause;

      var DISALLOW_OF_CLAUSE = false;

      var nth = {
          parse: function nth() {
              return this.createSingleNodeList(
                  this.Nth(DISALLOW_OF_CLAUSE)
              );
          }
      };

      var nthLastOfType = nth;

      var nthOfType = nth;

      var slotted = {
          parse: function compoundSelector() {
              return this.createSingleNodeList(
                  this.Selector()
              );
          }
      };

      var pseudo = {
          'dir': dir,
          'has': has$1,
          'lang': lang,
          'matches': matches,
          'not': not,
          'nth-child': nthChild,
          'nth-last-child': nthLastChild,
          'nth-last-of-type': nthLastOfType,
          'nth-of-type': nthOfType,
          'slotted': slotted
      };

      var parser = {
          parseContext: {
              default: 'StyleSheet',
              stylesheet: 'StyleSheet',
              atrule: 'Atrule',
              atrulePrelude: function(options) {
                  return this.AtrulePrelude(options.atrule ? String(options.atrule) : null);
              },
              mediaQueryList: 'MediaQueryList',
              mediaQuery: 'MediaQuery',
              rule: 'Rule',
              selectorList: 'SelectorList',
              selector: 'Selector',
              block: function() {
                  return this.Block(true);
              },
              declarationList: 'DeclarationList',
              declaration: 'Declaration',
              value: 'Value'
          },
          scope: scope,
          atrule: atrule,
          pseudo: pseudo,
          node: node
      };

      var walker = {
          node: node
      };

      var version = "1.1.3";
      var _package = {
      	version: version
      };

      var _package$1 = /*#__PURE__*/Object.freeze({
          __proto__: null,
          version: version,
          'default': _package
      });

      var require$$4 = getCjsExportFromNamespace(_package$1);

      function merge() {
          var dest = {};

          for (var i = 0; i < arguments.length; i++) {
              var src = arguments[i];
              for (var key in src) {
                  dest[key] = src[key];
              }
          }

          return dest;
      }

      var syntax = create$4.create(
          merge(
              lexer,
              parser,
              walker
          )
      );
      var version$1 = require$$4.version;
      syntax.version = version$1;

      var lib = syntax;

      return lib;

  }

  var csstree = constructor();

  /*
   * Copyright (C) 2007-2019 Diego Perini
   * All rights reserved.
   *
   * nwsapi.js - Fast CSS Selectors API Engine
   *
   * Author: Diego Perini <diego.perini at gmail com>
   * Version: 2.2.0
   * Created: 20070722
   * Release: 20191102
   *
   * License:
   *  http://javascript.nwbox.com/nwsapi/MIT-LICENSE
   * Download:
   *  http://javascript.nwbox.com/nwsapi/nwsapi.js
   */

  function Factory(global, Export) {

    var version = 'nwsapi-2.2.0',

    doc = global.document,
    root = doc.documentElement,
    slice = Array.prototype.slice,

    WSP = '[\\x20\\t\\r\\n\\f]',

    CFG = {
      // extensions
      operators: '[~*^$|]=|=',
      combinators: '[\\x20\\t>+~](?=[^>+~])'
    },

    NOT = {
      // not enclosed in double/single/parens/square
      double_enc: '(?=(?:[^"]*["][^"]*["])*[^"]*$)',
      single_enc: "(?=(?:[^']*['][^']*['])*[^']*$)",
      parens_enc: '(?![^\\x28]*\\x29)',
      square_enc: '(?![^\\x5b]*\\x5d)'
    },

    REX = {
      // regular expressions
      HasEscapes: RegExp('\\\\'),
      HexNumbers: RegExp('^[0-9a-fA-F]'),
      EscOrQuote: RegExp('^\\\\|[\\x22\\x27]'),
      RegExpChar: RegExp('(?:(?!\\\\)[\\\\^$.*+?()[\\]{}|\\/])', 'g'),
      TrimSpaces: RegExp('[\\r\\n\\f]|^' + WSP + '+|' + WSP + '+$', 'g'),
      CommaGroup: RegExp('(\\s*,\\s*)' + NOT.square_enc + NOT.parens_enc, 'g'),
      SplitGroup: RegExp('((?:\\x28[^\\x29]*\\x29|\\[[^\\]]*\\]|\\\\.|[^,])+)', 'g'),
      FixEscapes: RegExp('\\\\([0-9a-fA-F]{1,6}' + WSP + '?|.)|([\\x22\\x27])', 'g'),
      CombineWSP: RegExp('[\\n\\r\\f\\x20]+' + NOT.single_enc + NOT.double_enc, 'g'),
      TabCharWSP: RegExp('(\\x20?\\t+\\x20?)' + NOT.single_enc + NOT.double_enc, 'g'),
      PseudosWSP: RegExp('\\s+([-+])\\s+' + NOT.square_enc, 'g')
    },

    STD = {
      combinator: RegExp('\\s?([>+~])\\s?', 'g'),
      apimethods: RegExp('^(?:[a-z]+|\\*)\\|', 'i'),
      namespaces: RegExp('(\\*|[a-z]+)\\|[-a-z]+', 'i')
    },

    GROUPS = {
      // pseudo-classes requiring parameters
      linguistic: '(dir|lang)\\x28\\s?([-\\w]{2,})\\s?(?:\\x29|$)',
      logicalsel: '(matches|not)\\x28\\s?([^()]*|[^\\x28]*\\x28[^\\x29]*\\x29)\\s?(?:\\x29|$)',
      treestruct: '(nth(?:-last)?(?:-child|-of-type))(?:\\x28\\s?(even|odd|(?:[-+]?\\d*)(?:n\\s?[-+]?\\s?\\d*)?)\\s?(?:\\x29|$))',
      // pseudo-classes not requiring parameters
      locationpc: '(link|visited|target)\\b',
      useraction: '(hover|active|focus|focus-within)\\b',
      structural: '(root|empty|(?:(?:first|last|only)(?:-child|-of-type)))\\b',
      inputstate: '(enabled|disabled|read-only|read-write|placeholder-shown|default)\\b',
      inputvalue: '(checked|indeterminate|required|optional|valid|invalid|in-range|out-of-range)\\b',
      // pseudo-elements starting with single colon (:)
      pseudo_sng: '(after|before|first-letter|first-line)\\b',
      // pseudo-elements starting with double colon (::)
      pseudo_dbl: ':(after|before|first-letter|first-line|selection|placeholder|-webkit-[-a-zA-Z0-9]{2,})\\b'
    },

    Patterns = {
      // pseudo-classes
      treestruct: RegExp('^:(?:' + GROUPS.treestruct + ')(.*)', 'i'),
      structural: RegExp('^:(?:' + GROUPS.structural + ')(.*)', 'i'),
      linguistic: RegExp('^:(?:' + GROUPS.linguistic + ')(.*)', 'i'),
      useraction: RegExp('^:(?:' + GROUPS.useraction + ')(.*)', 'i'),
      inputstate: RegExp('^:(?:' + GROUPS.inputstate + ')(.*)', 'i'),
      inputvalue: RegExp('^:(?:' + GROUPS.inputvalue + ')(.*)', 'i'),
      locationpc: RegExp('^:(?:' + GROUPS.locationpc + ')(.*)', 'i'),
      logicalsel: RegExp('^:(?:' + GROUPS.logicalsel + ')(.*)', 'i'),
      pseudo_dbl: RegExp('^:(?:' + GROUPS.pseudo_dbl + ')(.*)', 'i'),
      pseudo_sng: RegExp('^:(?:' + GROUPS.pseudo_sng + ')(.*)', 'i'),
      // combinator symbols
      children: RegExp('^' + WSP + '?\\>' + WSP + '?(.*)'),
      adjacent: RegExp('^' + WSP + '?\\+' + WSP + '?(.*)'),
      relative: RegExp('^' + WSP + '?\\~' + WSP + '?(.*)'),
      ancestor: RegExp('^' + WSP + '+(.*)'),
     // universal & namespace
     universal: RegExp('^\\*(.*)'),
     namespace: RegExp('^(\\w+|\\*)?\\|(.*)')
    },

    // regexp to aproximate detection of RTL languages (Arabic)
    RTL = RegExp('^[\\u0591-\\u08ff\\ufb1d-\\ufdfd\\ufe70-\\ufefc ]+$'),

    // emulate firefox error strings
    qsNotArgs = 'Not enough arguments',
    qsInvalid = ' is not a valid selector',

    // detect structural pseudo-classes in selectors
    reNthElem = RegExp('(:nth(?:-last)?-child)', 'i'),
    reNthType = RegExp('(:nth(?:-last)?-of-type)', 'i'),

    // placeholder for global regexp
    reOptimizer,
    reValidator,

    // special handling configuration flags
    Config = {
      IDS_DUPES: true,
      MIXEDCASE: true,
      LOGERRORS: true,
      VERBOSITY: true
    },

    NAMESPACE,
    QUIRKS_MODE,
    HTML_DOCUMENT,

    ATTR_STD_OPS = {
      '=': 1, '^=': 1, '$=': 1, '|=': 1, '*=': 1, '~=': 1
    },

    HTML_TABLE = {
      'accept': 1, 'accept-charset': 1, 'align': 1, 'alink': 1, 'axis': 1,
      'bgcolor': 1, 'charset': 1, 'checked': 1, 'clear': 1, 'codetype': 1, 'color': 1,
      'compact': 1, 'declare': 1, 'defer': 1, 'dir': 1, 'direction': 1, 'disabled': 1,
      'enctype': 1, 'face': 1, 'frame': 1, 'hreflang': 1, 'http-equiv': 1, 'lang': 1,
      'language': 1, 'link': 1, 'media': 1, 'method': 1, 'multiple': 1, 'nohref': 1,
      'noresize': 1, 'noshade': 1, 'nowrap': 1, 'readonly': 1, 'rel': 1, 'rev': 1,
      'rules': 1, 'scope': 1, 'scrolling': 1, 'selected': 1, 'shape': 1, 'target': 1,
      'text': 1, 'type': 1, 'valign': 1, 'valuetype': 1, 'vlink': 1
    },

    Combinators = { },

    Selectors = { },

    Operators = {
       '=': { p1: '^',
              p2: '$',
              p3: 'true' },
      '^=': { p1: '^',
              p2: '',
              p3: 'true' },
      '$=': { p1: '',
              p2: '$',
              p3: 'true' },
      '*=': { p1: '',
              p2: '',
              p3: 'true' },
      '|=': { p1: '^',
              p2: '(-|$)',
              p3: 'true' },
      '~=': { p1: '(^|\\s)',
              p2: '(\\s|$)',
              p3: 'true' }
    },

    concatCall =
      function(nodes, callback) {
        var i = 0, l = nodes.length, list = Array(l);
        while (l > i) {
          if (false === callback(list[i] = nodes[i])) break;
          ++i;
        }
        return list;
      },

    concatList =
      function(list, nodes) {
        var i = -1, l = nodes.length;
        while (l--) { list[list.length] = nodes[++i]; }
        return list;
      },

    documentOrder =
      function(a, b) {
        if (!hasDupes && a === b) {
          hasDupes = true;
          return 0;
        }
        return a.compareDocumentPosition(b) & 4 ? -1 : 1;
      },

    hasDupes = false,

    unique =
      function(nodes) {
        var i = 0, j = -1, l = nodes.length + 1, list = [ ];
        while (--l) {
          if (nodes[i++] === nodes[i]) continue;
          list[++j] = nodes[i - 1];
        }
        hasDupes = false;
        return list;
      },

    // check context for mixed content
    hasMixedCaseTagNames =
      function(context) {
        var ns, api = 'getElementsByTagNameNS';

        // current host context (ownerDocument)
        context = context.ownerDocument || context;

        // documentElement (root) element namespace or default html/xhtml namespace
        ns = context.documentElement.namespaceURI || 'http://www.w3.org/1999/xhtml';

        // checking the number of non HTML nodes in the document
        return (context[api]('*', '*').length - context[api](ns, '*').length) > 0;
      },

    switchContext =
      function(context, force) {
        var oldDoc = doc;
        doc = context.ownerDocument || context;
        if (force || oldDoc !== doc) {
          // force a new check for each document change
          // performed before the next select operation
          root = doc.documentElement;
          HTML_DOCUMENT = isHTML(doc);
          QUIRKS_MODE = HTML_DOCUMENT &&
            doc.compatMode.indexOf('CSS') < 0;
          NAMESPACE = root && root.namespaceURI;
          Snapshot.doc = doc;
          Snapshot.root = root;
        }
        return (Snapshot.from = context);
      },

    // convert single codepoint to UTF-16 encoding
    codePointToUTF16 =
      function(codePoint) {
        // out of range, use replacement character
        if (codePoint < 1 || codePoint > 0x10ffff ||
          (codePoint > 0xd7ff && codePoint < 0xe000)) {
          return '\\ufffd';
        }
        // javascript strings are UTF-16 encoded
        if (codePoint < 0x10000) {
          var lowHex = '000' + codePoint.toString(16);
          return '\\u' + lowHex.substr(lowHex.length - 4);
        }
        // supplementary high + low surrogates
        return '\\u' + (((codePoint - 0x10000) >> 0x0a) + 0xd800).toString(16) +
               '\\u' + (((codePoint - 0x10000) % 0x400) + 0xdc00).toString(16);
      },

    // convert single codepoint to string
    stringFromCodePoint =
      function(codePoint) {
        // out of range, use replacement character
        if (codePoint < 1 || codePoint > 0x10ffff ||
          (codePoint > 0xd7ff && codePoint < 0xe000)) {
          return '\ufffd';
        }
        if (codePoint < 0x10000) {
          return String.fromCharCode(codePoint);
        }
        return String.fromCodePoint ?
          String.fromCodePoint(codePoint) :
          String.fromCharCode(
            ((codePoint - 0x10000) >> 0x0a) + 0xd800,
            ((codePoint - 0x10000) % 0x400) + 0xdc00);
      },

    // convert escape sequence in a CSS string or identifier
    // to javascript string with javascript escape sequences
    convertEscapes =
      function(str) {
        return REX.HasEscapes.test(str) ?
          str.replace(REX.FixEscapes,
            function(substring, p1, p2) {
              // unescaped " or '
              return p2 ? '\\' + p2 :
                // javascript strings are UTF-16 encoded
                REX.HexNumbers.test(p1) ? codePointToUTF16(parseInt(p1, 16)) :
                // \' \"
                REX.EscOrQuote.test(p1) ? substring :
                // \g \h \. \# etc
                p1;
            }
          ) : str;
      },

    // convert escape sequence in a CSS string or identifier
    // to javascript string with characters representations
    unescapeIdentifier =
      function(str) {
        return REX.HasEscapes.test(str) ?
          str.replace(REX.FixEscapes,
            function(substring, p1, p2) {
              // unescaped " or '
              return p2 ? p2 :
                // javascript strings are UTF-16 encoded
                REX.HexNumbers.test(p1) ? stringFromCodePoint(parseInt(p1, 16)) :
                // \' \"
                REX.EscOrQuote.test(p1) ? substring :
                // \g \h \. \# etc
                p1;
            }
          ) : str;
      },

    method = {
      '#': 'getElementById',
      '*': 'getElementsByTagNameNS',
      '.': 'getElementsByClassName'
      },

    compat = {
      '#': function(c, n) { REX.HasEscapes.test(n) && (n = unescapeIdentifier(n)); return function(e, f) { return byId(n, c); }; },
      '*': function(c, n) { REX.HasEscapes.test(n) && (n = unescapeIdentifier(n)); return function(e, f) { return byTag(n, c); }; },
      '.': function(c, n) { REX.HasEscapes.test(n) && (n = unescapeIdentifier(n)); return function(e, f) { return byClass(n, c); }; }
      },

    // find duplicate ids using iterative walk
    byIdRaw =
      function(id, context) {
        var node = context, nodes = [ ], next = node.firstElementChild;
        while ((node = next)) {
          (node.id == id || node.dynId) && (nodes[nodes.length] = node);
          if ((next = node.firstElementChild || node.nextElementSibling)) continue;
          while (!next && (node = node.parentElement) && node !== context) {
            next = node.nextElementSibling;
          }
        }
        return nodes;
      },

    // context agnostic getElementById
    byId =
      function(id, context) {
        var e, nodes, api = method['#'];

        // duplicates id allowed
        if (Config.IDS_DUPES === false) {
          if (api in context) {
            return (e = context[api](id)) ? [ e ] : none;
          }
        } else {
          if ('all' in context) {
            if ((e = context.all[id])) {
              if (e.nodeType == 1) return e.getAttribute('id') != id ? [ ] : [ e ];
              else if (id == 'length') return (e = context[api](id)) ? [ e ] : none;
              for (i = 0, l = e.length, nodes = [ ]; l > i; ++i) {
                if (e[i].id == id) nodes[nodes.length] = e[i];
              }
              return nodes && nodes.length ? nodes : [ nodes ];
            } else return none;
          }
        }

        return byIdRaw(id, context);
      },

    // context agnostic getElementsByTagName
    byTag =
      function(tag, context) {
        var e, nodes, api = method['*'];
        // DOCUMENT_NODE (9) & ELEMENT_NODE (1)
        if (api in context) {
          return slice.call(context[api]('*', tag));
        } else {
          // DOCUMENT_FRAGMENT_NODE (11)
          if ((e = context.firstElementChild)) {
            tag = tag.toLowerCase();
            if (!(e.nextElementSibling || tag == '*' || e.nodeName.toLowerCase() == tag)) {
              return slice.call(e[api]('*', tag));
            } else {
              nodes = [ ];
              do {
                if (tag == '*' || e.nodeName.toLowerCase() == tag) nodes[nodes.length] = e;
                concatList(nodes, e[api]('*', tag));
              } while ((e = e.nextElementSibling));
            }
          } else nodes = none;
        }
        return nodes;
      },

    // context agnostic getElementsByClassName
    byClass =
      function(cls, context) {
        var e, nodes, api = method['.'], reCls;
        // DOCUMENT_NODE (9) & ELEMENT_NODE (1)
        if (api in context) {
          return slice.call(context[api](cls));
        } else {
          // DOCUMENT_FRAGMENT_NODE (11)
          if ((e = context.firstElementChild)) {
            reCls = RegExp('(^|\\s)' + cls + '(\\s|$)', QUIRKS_MODE ? 'i' : '');
            if (!(e.nextElementSibling || reCls.test(e.className))) {
              return slice.call(e[api](cls));
            } else {
              nodes = [ ];
              do {
                if (reCls.test(e.className)) nodes[nodes.length] = e;
                concatList(nodes, e[api](cls));
              } while ((e = e.nextElementSibling));
            }
          } else nodes = none;
        }
        return nodes;
      },

    // namespace aware hasAttribute
    // helper for XML/XHTML documents
    hasAttributeNS =
      function(e, name) {
        var i, l, attr = e.getAttributeNames();
        name = RegExp(':?' + name + '$', HTML_DOCUMENT ? 'i' : '');
        for (i = 0, l = attr.length; l > i; ++i) {
          if (name.test(attr[i])) return true;
        }
        return false;
      },

    // fast resolver for the :nth-child() and :nth-last-child() pseudo-classes
    nthElement = (function() {
      var idx = 0, len = 0, set = 0, parent = undefined, parents = Array(), nodes = Array();
      return function(element, dir) {
        // ensure caches are emptied after each run, invoking with dir = 2
        if (dir == 2) {
          idx = 0; len = 0; set = 0; nodes.length = 0;
          parents.length = 0; parent = undefined;
          return -1;
        }
        var e, i, j, k, l;
        if (parent === element.parentElement) {
          i = set; j = idx; l = len;
        } else {
          l = parents.length;
          parent = element.parentElement;
          for (i = -1, j = 0, k = l - 1; l > j; ++j, --k) {
            if (parents[j] === parent) { i = j; break; }
            if (parents[k] === parent) { i = k; break; }
          }
          if (i < 0) {
            parents[i = l] = parent;
            l = 0; nodes[i] = Array();
            e = parent && parent.firstElementChild || element;
            while (e) { nodes[i][l] = e; if (e === element) j = l; e = e.nextElementSibling; ++l; }
            set = i; idx = 0; len = l;
            if (l < 2) return l;
          } else {
            l = nodes[i].length;
            set = i;
          }
        }
        if (element !== nodes[i][j] && element !== nodes[i][j = 0]) {
          for (j = 0, e = nodes[i], k = l - 1; l > j; ++j, --k) {
            if (e[j] === element) { break; }
            if (e[k] === element) { j = k; break; }
          }
        }
        idx = j + 1; len = l;
        return dir ? l - j : idx;
      };
    })(),

    // fast resolver for the :nth-of-type() and :nth-last-of-type() pseudo-classes
    nthOfType = (function() {
      var idx = 0, len = 0, set = 0, parent = undefined, parents = Array(), nodes = Array();
      return function(element, dir) {
        // ensure caches are emptied after each run, invoking with dir = 2
        if (dir == 2) {
          idx = 0; len = 0; set = 0; nodes.length = 0;
          parents.length = 0; parent = undefined;
          return -1;
        }
        var e, i, j, k, l, name = element.nodeName;
        if (nodes[set] && nodes[set][name] && parent === element.parentElement) {
          i = set; j = idx; l = len;
        } else {
          l = parents.length;
          parent = element.parentElement;
          for (i = -1, j = 0, k = l - 1; l > j; ++j, --k) {
            if (parents[j] === parent) { i = j; break; }
            if (parents[k] === parent) { i = k; break; }
          }
          if (i < 0 || !nodes[i][name]) {
            parents[i = l] = parent;
            nodes[i] || (nodes[i] = Object());
            l = 0; nodes[i][name] = Array();
            e = parent && parent.firstElementChild || element;
            while (e) { if (e === element) j = l; if (e.nodeName == name) { nodes[i][name][l] = e; ++l; } e = e.nextElementSibling; }
            set = i; idx = j; len = l;
            if (l < 2) return l;
          } else {
            l = nodes[i][name].length;
            set = i;
          }
        }
        if (element !== nodes[i][name][j] && element !== nodes[i][name][j = 0]) {
          for (j = 0, e = nodes[i][name], k = l - 1; l > j; ++j, --k) {
            if (e[j] === element) { break; }
            if (e[k] === element) { j = k; break; }
          }
        }
        idx = j + 1; len = l;
        return dir ? l - j : idx;
      };
    })(),

    // check if the document type is HTML
    isHTML =
      function(node) {
        var doc = node.ownerDocument || node;
        return doc.nodeType == 9 &&
          // contentType not in IE <= 11
          'contentType' in doc ?
            doc.contentType.indexOf('/html') > 0 :
            doc.createElement('DiV').nodeName == 'DIV';
      },

    // configure the engine to use special handling
    configure =
      function(option, clear) {
        if (typeof option == 'string') { return !!Config[option]; }
        if (typeof option != 'object') { return Config; }
        for (var i in option) {
          Config[i] = !!option[i];
        }
        // clear lambda cache
        if (clear) {
          matchResolvers = { };
          selectResolvers = { };
        }
        setIdentifierSyntax();
        return true;
      },

    // centralized error and exceptions handling
    emit =
      function(message, proto) {
        var err;
        if (Config.VERBOSITY) {
          if (proto) {
            err = new proto(message);
          } else {
            err = new global.DOMException(message, 'SyntaxError');
          }
          throw err;
        }
        if (Config.LOGERRORS && console && console.log) {
          console.log(message);
        }
      },

    // execute the engine initialization code
    initialize =
      function(doc) {
        setIdentifierSyntax();
        lastContext = switchContext(doc, true);
      },

    // build validation regexps used by the engine
    setIdentifierSyntax =
      function() {

        //
        // NOTE: SPECIAL CASES IN CSS SYNTAX PARSING RULES
        //
        // The <EOF-token> https://drafts.csswg.org/css-syntax/#typedef-eof-token
        // allow mangled|unclosed selector syntax at the end of selectors strings
        //
        // Literal equivalent hex representations of the characters: " ' ` ] )
        //
        //     \\x22 = " - double quotes    \\x5b = [ - open square bracket
        //     \\x27 = ' - single quote     \\x5d = ] - closed square bracket
        //     \\x60 = ` - back tick        \\x28 = ( - open round parens
        //     \\x5c = \ - back slash       \\x29 = ) - closed round parens
        //
        // using hex format prevents false matches of opened/closed instances
        // pairs, coloring breakage and other editors highlightning problems.
        //

        var identifier =
          // doesn't start with a digit
          '(?=[^0-9])' +
          // can start with double dash
          '(?:-{2}' +
            // may include ascii chars
            '|[a-zA-Z0-9-_]' +
            // non-ascii chars
            '|[^\\x00-\\x9f]' +
            // escaped chars
            '|\\\\[^\\r\\n\\f0-9a-fA-F]' +
            // unicode chars
            '|\\\\[0-9a-fA-F]{1,6}(?:\\r\\n|\\s)?' +
            // any escaped chars
            '|\\\\.' +
          ')+',

        pseudonames = '[-\\w]+',
        pseudoparms = '(?:[-+]?\\d*)(?:n\\s?[-+]?\\s?\\d*)',
        doublequote = '"[^"\\\\]*(?:\\\\.[^"\\\\]*)*(?:"|$)',
        singlequote = "'[^'\\\\]*(?:\\\\.[^'\\\\]*)*(?:'|$)",

        attrparser = identifier + '|' + doublequote + '|' + singlequote,

        attrvalues = '([\\x22\\x27]?)((?!\\3)*|(?:\\\\?.)*?)(?:\\3|$)',

        attributes =
          '\\[' +
            // attribute presence
            '(?:\\*\\|)?' +
            WSP + '?' +
            '(' + identifier + '(?::' + identifier + ')?)' +
            WSP + '?' +
            '(?:' +
              '(' + CFG.operators + ')' + WSP + '?' +
              '(?:' + attrparser + ')' +
            ')?' +
            // attribute case sensitivity
            WSP + '?' + '(i)?' + WSP + '?' +
          '(?:\\]|$)',

        attrmatcher = attributes.replace(attrparser, attrvalues),

        pseudoclass =
          '(?:\\x28' + WSP + '*' +
            '(?:' + pseudoparms + '?)?|' +
            // universal * &
            // namespace *|*
            '(?:\\*|\\|)|' +
            '(?:' +
              '(?::' + pseudonames +
              '(?:\\x28' + pseudoparms + '?(?:\\x29|$))?|' +
            ')|' +
            '(?:[.#]?' + identifier + ')|' +
            '(?:' + attributes + ')' +
            ')+|' +
            '(?:' + WSP + '?,' + WSP + '?)|' +
            '(?:' + WSP + '?)|' +
            '(?:\\x29|$))*',

        standardValidator =
          '(?=' + WSP + '?[^>+~(){}<>])' +
          '(?:' +
            // universal * &
            // namespace *|*
            '(?:\\*|\\|)|' +
            '(?:[.#]?' + identifier + ')+|' +
            '(?:' + attributes + ')+|' +
            '(?:::?' + pseudonames + pseudoclass + ')|' +
            '(?:' + WSP + '?' + CFG.combinators + WSP + '?)|' +
            '(?:' + WSP + '?,' + WSP + '?)|' +
            '(?:' + WSP + '?)' +
          ')+';

        // the following global RE is used to return the
        // deepest nodeName in selector strings and then
        // use it to retrieve all possible matching nodes
        // that will be filtered by compiled resolvers
        reOptimizer = RegExp(
          '(?:([.:#*]?)' +
          '(' + identifier + ')' +
          '(?:' +
            ':[-\\w]+|' +
            '\\[[^\\]]+(?:\\]|$)|' +
            '\\x28[^\\x29]+(?:\\x29|$)' +
          ')*)$');

        // global
        reValidator = RegExp(standardValidator, 'g');

        Patterns.id = RegExp('^#(' + identifier + ')(.*)');
        Patterns.tagName = RegExp('^(' + identifier + ')(.*)');
        Patterns.className = RegExp('^\\.(' + identifier + ')(.*)');
        Patterns.attribute = RegExp('^(?:' + attrmatcher + ')(.*)');
      },

    F_INIT = '"use strict";return function Resolver(c,f,x,r)',

    S_HEAD = 'var lvl=[],e,n,o,j=r.length-1,k=-1',
    M_HEAD = 'var e,n,o',

    S_LOOP = 'main:while((e=c[++k]))',
    N_LOOP = 'main:while((e=c.item(++k)))',
    M_LOOP = 'e=c;',

    S_BODY = 'r[++j]={node:c[k],lvl:lvl};lvl=[];',
    N_BODY = 'r[++j]=c.item(k);',
    M_BODY = '',

    S_TAIL = 'continue main;',
    M_TAIL = 'r=true;',

    S_TEST = 'if(f(c[k])){break main;}',
    N_TEST = 'if(f(c.item(k))){break main;}',
    M_TEST = 'f(c);',

    S_VARS = [ ],
    M_VARS = [ ],

    // compile groups or single selector strings into
    // executable functions for matching or selecting
    compile =
      function(selector, mode, callback) {
        var factory, head = '', loop = '', macro = '', source = '', vars = '';

        // 'mode' can be boolean or null
        // true = select / false = match
        // null to use collection.item()
        switch (mode) {
          case true:
            if (selectLambdas[selector]) { return selectLambdas[selector]; }
            macro = S_BODY + (callback ? S_TEST : '') + S_TAIL;
            head = S_HEAD;
            loop = S_LOOP;
            break;
          case false:
            if (matchLambdas[selector]) { return matchLambdas[selector]; }
            macro = M_BODY + (callback ? M_TEST : '') + M_TAIL;
            head = M_HEAD;
            loop = M_LOOP;
            break;
          case null:
            if (selectLambdas[selector]) { return selectLambdas[selector]; }
            macro = N_BODY + (callback ? N_TEST : '') + S_TAIL;
            head = S_HEAD;
            loop = N_LOOP;
            break;
        }

        source = compileSelector(selector, macro, mode, callback, false);

        loop += mode || mode === null ? '{' + source + '}' : source;

        if (mode || mode === null && selector.includes(':nth')) {
          loop += reNthElem.test(selector) ? 's.nthElement(null, 2);' : '';
          loop += reNthType.test(selector) ? 's.nthOfType(null, 2);' : '';
        }

        if (S_VARS[0] || M_VARS[0]) {
          vars = ',' + (S_VARS.join(',') || M_VARS.join(','));
          S_VARS.length = 0;
          M_VARS.length = 0;
        }

        factory = Function('s', F_INIT + '{' + head + vars + ';' + loop + 'return r;}')(Snapshot);

        return mode || mode === null ? (selectLambdas[selector] = factory) : (matchLambdas[selector] = factory);
      },

    // build conditional code to check components of selector strings
    compileSelector =
      function(expression, source, mode, callback, not) {

        // N is the negation pseudo-class flag
        // D is the default inverted negation flag
        var a, b, n, f, i, l, name, nested, NS,
        N = not ? '!' : '', D = not ? '' : '!',
        compat, expr, match, result, status, symbol, test,
        type, selector = expression, selector_string, vars;

        // original 'select' or 'match' selector string before normalization
        selector_string = mode ? lastSelected : lastMatched;

        // isolate selector combinators/components and normalize whitespace
        selector = selector.replace(STD.combinator, '$1');//.replace(STD.whitespace, ' ');

        var index = 0;
        while (selector) {
          source = 'lvl[' + (index++) + ']=e;' + source;  // collect all related nodes

          // get namespace prefix if present or get first char of selector
          symbol = STD.apimethods.test(selector) ? '|' : selector[0];

          switch (symbol) {

            // universal resolver
            case '*':
              match = selector.match(Patterns.universal);
              if (N == '!') {
                source = 'if(' + N + 'true' +
                  '){' + source + '}';
              }
              break;

            // id resolver
            case '#':
              match = selector.match(Patterns.id);
              source = 'if(' + N + '(/^' + match[1] + '$/.test(e.getAttribute("id"))' +
                ')){' + source + '}';
              break;

            // class name resolver
            case '.':
              match = selector.match(Patterns.className);
              compat = (QUIRKS_MODE ? 'i' : '') + '.test(e.getAttribute("class"))';
              source = 'if(' + N + '(/(^|\\s)' + match[1] + '(\\s|$)/' + compat +
                ')){' + source + '}';
              break;

            // tag name resolver
            case (/[a-z]/i.test(symbol) ? symbol : undefined):
              match = selector.match(Patterns.tagName);
              source = 'if(' + N + '(e.nodeName' +
                (Config.MIXEDCASE || hasMixedCaseTagNames(doc) ?
                  '.toLowerCase()=="' + match[1].toLowerCase() + '"' :
                  '=="' + match[1].toUpperCase() + '"') +
                ')){' + source + '}';
              break;

            // namespace resolver
            case '|':
              match = selector.match(Patterns.namespace);
              if (match[1] == '*') {
                source = 'if(' + N + 'true){' + source + '}';
              } else if (!match[1]) {
                source = 'if(' + N + '(!e.namespaceURI)){' + source + '}';
              } else if (typeof match[1] == 'string' && root.prefix == match[1]) {
                source = 'if(' + N + '(e.namespaceURI=="' + NAMESPACE + '")){' + source + '}';
              } else {
                emit('\'' + selector_string + '\'' + qsInvalid);
              }
              break;

            // attributes resolver
            case '[':
              match = selector.match(Patterns.attribute);
              NS = match[0].match(STD.namespaces);
              name = match[1];
              expr = name.split(':');
              expr = expr.length == 2 ? expr[1] : expr[0];
              if (match[2] && !(test = Operators[match[2]])) {
                emit('\'' + selector_string + '\'' + qsInvalid);
                return '';
              }
              if (match[4] === '') {
                test = match[2] == '~=' ?
                  { p1: '^\\s', p2: '+$', p3: 'true' } :
                    match[2] in ATTR_STD_OPS && match[2] != '~=' ?
                  { p1: '^',    p2: '$',  p3: 'true' } : test;
              } else if (match[2] == '~=' && match[4].includes(' ')) {
                // whitespace separated list but value contains space
                source = 'if(' + N + 'false){' + source + '}';
                break;
              } else if (match[4]) {
                match[4] = convertEscapes(match[4]).replace(REX.RegExpChar, '\\$&');
              }
              type = match[5] == 'i' || (HTML_DOCUMENT && HTML_TABLE[expr.toLowerCase()]) ? 'i' : '';
              source = 'if(' + N + '(' +
                (!match[2] ? (NS ? 's.hasAttributeNS(e,"' + name + '")' : 'e.hasAttribute("' + name + '")') :
                !match[4] && ATTR_STD_OPS[match[2]] && match[2] != '~=' ? 'e.getAttribute("' + name + '")==""' :
                '(/' + test.p1 + match[4] + test.p2 + '/' + type + ').test(e.getAttribute("' + name + '"))==' + test.p3) +
                ')){' + source + '}';
              break;

            // *** General sibling combinator
            // E ~ F (F relative sibling of E)
            case '~':
              match = selector.match(Patterns.relative);
              source = 'n=e;while((e=e.previousElementSibling)){' + source + '}e=n;';
              break;
            // *** Adjacent sibling combinator
            // E + F (F adiacent sibling of E)
            case '+':
              match = selector.match(Patterns.adjacent);
              source = 'n=e;if((e=e.previousElementSibling)){' + source + '}e=n;';
              break;
            // *** Descendant combinator
            // E F (E ancestor of F)
            case '\x09':
            case '\x20':
              match = selector.match(Patterns.ancestor);
              source = 'n=e;while((e=e.parentElement)){' + source + '}e=n;';
              break;
            // *** Child combinator
            // E > F (F children of E)
            case '>':
              match = selector.match(Patterns.children);
              source = 'n=e;if((e=e.parentElement)){' + source + '}e=n;';
              break;

            // *** user supplied combinators extensions
            case (symbol in Combinators ? symbol : undefined):
              // for other registered combinators extensions
              match[match.length - 1] = '*';
              source = Combinators[symbol](match) + source;
              break;

            // *** tree-structural pseudo-classes
            // :root, :empty, :first-child, :last-child, :only-child, :first-of-type, :last-of-type, :only-of-type
            case ':':
              if ((match = selector.match(Patterns.structural))) {
                match[1] = match[1].toLowerCase();
                switch (match[1]) {
                  case 'root':
                    // there can only be one :root element, so exit the loop once found
                    source = 'if(' + N + '(e===s.root)){' + source + (mode ? 'break main;' : '') + '}';
                    break;
                  case 'empty':
                    // matches elements that don't contain elements or text nodes
                    source = 'n=e.firstChild;while(n&&!(/1|3/).test(n.nodeType)){n=n.nextSibling}if(' + D + 'n){' + source + '}';
                    break;

                  // *** child-indexed pseudo-classes
                  // :first-child, :last-child, :only-child
                  case 'only-child':
                    source = 'if(' + N + '(!e.nextElementSibling&&!e.previousElementSibling)){' + source + '}';
                    break;
                  case 'last-child':
                    source = 'if(' + N + '(!e.nextElementSibling)){' + source + '}';
                    break;
                  case 'first-child':
                    source = 'if(' + N + '(!e.previousElementSibling)){' + source + '}';
                    break;

                  // *** typed child-indexed pseudo-classes
                  // :only-of-type, :last-of-type, :first-of-type
                  case 'only-of-type':
                    source = 'o=e.nodeName;' +
                      'n=e;while((n=n.nextElementSibling)&&n.nodeName!=o);if(!n){' +
                      'n=e;while((n=n.previousElementSibling)&&n.nodeName!=o);}if(' + D + 'n){' + source + '}';
                    break;
                  case 'last-of-type':
                    source = 'n=e;o=e.nodeName;while((n=n.nextElementSibling)&&n.nodeName!=o);if(' + D + 'n){' + source + '}';
                    break;
                  case 'first-of-type':
                    source = 'n=e;o=e.nodeName;while((n=n.previousElementSibling)&&n.nodeName!=o);if(' + D + 'n){' + source + '}';
                    break;
                  default:
                    emit('\'' + selector_string + '\'' + qsInvalid);
                    break;
                }
              }

              // *** child-indexed & typed child-indexed pseudo-classes
              // :nth-child, :nth-of-type, :nth-last-child, :nth-last-of-type
              else if ((match = selector.match(Patterns.treestruct))) {
                match[1] = match[1].toLowerCase();
                switch (match[1]) {
                  case 'nth-child':
                  case 'nth-of-type':
                  case 'nth-last-child':
                  case 'nth-last-of-type':
                    expr = /-of-type/i.test(match[1]);
                    if (match[1] && match[2]) {
                      type = /last/i.test(match[1]);
                      if (match[2] == 'n') {
                        source = 'if(' + N + 'true){' + source + '}';
                        break;
                      } else if (match[2] == '1') {
                        test = type ? 'next' : 'previous';
                        source = expr ? 'n=e;o=e.nodeName;' +
                          'while((n=n.' + test + 'ElementSibling)&&n.nodeName!=o);if(' + D + 'n){' + source + '}' :
                          'if(' + N + '!e.' + test + 'ElementSibling){' + source + '}';
                        break;
                      } else if (match[2] == 'even' || match[2] == '2n0' || match[2] == '2n+0' || match[2] == '2n') {
                        test = 'n%2==0';
                      } else if (match[2] == 'odd'  || match[2] == '2n1' || match[2] == '2n+1') {
                        test = 'n%2==1';
                      } else {
                        f = /n/i.test(match[2]);
                        n = match[2].split('n');
                        a = parseInt(n[0], 10) || 0;
                        b = parseInt(n[1], 10) || 0;
                        if (n[0] == '-') { a = -1; }
                        if (n[0] == '+') { a = +1; }
                        test = (b ? '(n' + (b > 0 ? '-' : '+') + Math.abs(b) + ')' : 'n') + '%' + a + '==0' ;
                        test =
                          a >= +1 ? (f ? 'n>' + (b - 1) + (Math.abs(a) != 1 ? '&&' + test : '') : 'n==' + a) :
                          a <= -1 ? (f ? 'n<' + (b + 1) + (Math.abs(a) != 1 ? '&&' + test : '') : 'n==' + a) :
                          a === 0 ? (n[0] ? 'n==' + b : 'n>' + (b - 1)) : 'false';
                      }
                      expr = expr ? 'OfType' : 'Element';
                      type = type ? 'true' : 'false';
                      source = 'n=s.nth' + expr + '(e,' + type + ');if(' + N + '(' + test + ')){' + source + '}';
                    } else {
                      emit('\'' + selector_string + '\'' + qsInvalid);
                    }
                    break;
                  default:
                    emit('\'' + selector_string + '\'' + qsInvalid);
                    break;
                }
              }

              // *** logical combination pseudo-classes
              // :matches( s1, [ s2, ... ]), :not( s1, [ s2, ... ])
              else if ((match = selector.match(Patterns.logicalsel))) {
                match[1] = match[1].toLowerCase();
                switch (match[1]) {
                  case 'matches':
                    if (not === true || nested === true) {
                      emit(':matches() pseudo-class cannot be nested');
                    }
                    nested = true;
                    expr = match[2].replace(REX.CommaGroup, ',').replace(REX.TrimSpaces, '');
                    // check nested compound selectors s1, s2
                    expr = match[2].match(REX.SplitGroup);
                    for (i = 0, l = expr.length; l > i; ++i) {
                      expr[i] = expr[i].replace(REX.TrimSpaces, '');
                      source = 'if(s.match("' + expr[i].replace(/\x22/g, '\\"') + '",e)){' + source + '}';
                    }
                    break;
                  case 'not':
                    if (not === true || nested === true) {
                      emit(':not() pseudo-class cannot be nested');
                    }
                    expr = match[2].replace(REX.CommaGroup, ',').replace(REX.TrimSpaces, '');
                    // check nested compound selectors s1, s2
                    expr = match[2].match(REX.SplitGroup);
                    for (i = 0, l = expr.length; l > i; ++i) {
                      expr[i] = expr[i].replace(REX.TrimSpaces, '');
                      source = compileSelector(expr[i], source, false, callback, true);
                    }
                    break;
                  default:
                    emit('\'' + selector_string + '\'' + qsInvalid);
                    break;
                }
              }

              // *** linguistic pseudo-classes
              // :dir( ltr / rtl ), :lang( en )
              else if ((match = selector.match(Patterns.linguistic))) {
                match[1] = match[1].toLowerCase();
                switch (match[1]) {
                  case 'dir':
                    source = 'var p;if(' + N + '(' +
                      '(/' + match[2] + '/i.test(e.dir))||(p=s.ancestor("[dir]", e))&&' +
                      '(/' + match[2] + '/i.test(p.dir))||(e.dir==""||e.dir=="auto")&&' +
                      '(' + (match[2] == 'ltr' ? '!':'')+ RTL +'.test(e.textContent)))' +
                      '){' + source + '};';
                    break;
                  case 'lang':
                    expr = '(?:^|-)' + match[2] + '(?:-|$)';
                    source = 'var p;if(' + N + '(' +
                      '(e.isConnected&&(e.lang==""&&(p=s.ancestor("[lang]",e)))&&' +
                      '(p.lang=="' + match[2] + '")||/'+ expr +'/i.test(e.lang)))' +
                      '){' + source + '};';
                    break;
                  default:
                    emit('\'' + selector_string + '\'' + qsInvalid);
                    break;
                }
              }

              // *** location pseudo-classes
              // :link, :visited, :target
              else if ((match = selector.match(Patterns.locationpc))) {
                match[1] = match[1].toLowerCase();
                switch (match[1]) {
                  case 'link':
                    source = 'if(' + N + '(/^a|area|link$/i.test(e.nodeName)&&e.hasAttribute("href"))){' + source + '}';
                    break;
                  case 'visited':
                    source = 'if(' + N + '(/^a|area|link$/i.test(e.nodeName)&&e.hasAttribute("href")&&e.visited)){' + source + '}';
                    break;
                  case 'target':
                    source = 'if(' + N + '((s.doc.compareDocumentPosition(e)&16)&&s.doc.location.hash&&e.id==s.doc.location.hash.slice(1))){' + source + '}';
                    break;
                  default:
                    emit('\'' + selector_string + '\'' + qsInvalid);
                    break;
                }
              }

              // *** user actions pseudo-classes
              // :hover, :active, :focus
              else if ((match = selector.match(Patterns.useraction))) {
                match[1] = match[1].toLowerCase();
                switch (match[1]) {
                  case 'hover':
                    source = 'hasFocus' in doc && doc.hasFocus() ?
                      'if(' + N + '(e===s.doc.hoverElement)){' + source + '}' :
                      'if(' + D + 'true){' + source + '}';
                    break;
                  case 'active':
                    source = 'hasFocus' in doc && doc.hasFocus() ?
                      'if(' + N + '(e===s.doc.activeElement)){' + source + '}' :
                      'if(' + D + 'true){' + source + '}';
                    break;
                  case 'focus':
                    source = 'hasFocus' in doc ?
                      'if(' + N + '(e===s.doc.activeElement&&s.doc.hasFocus()&&(e.type||e.href||typeof e.tabIndex=="number"))){' + source + '}' :
                      'if(' + N + '(e===s.doc.activeElement&&(e.type||e.href))){' + source + '}';
                    break;
                  case 'focus-within':
                    source = 'hasFocus' in doc ?
                      'n=s.doc.activeElement;while(e){if(e===n||e.parentNode===n)break;}' +
                      'if(' + N + '(e===n&&s.doc.hasFocus()&&(e.type||e.href||typeof e.tabIndex=="number"))){' + source + '}' : source;
                    break;
                  default:
                    emit('\'' + selector_string + '\'' + qsInvalid);
                    break;
                }
              }

              // *** user interface and form pseudo-classes
              // :enabled, :disabled, :read-only, :read-write, :placeholder-shown, :default
              else if ((match = selector.match(Patterns.inputstate))) {
                match[1] = match[1].toLowerCase();
                switch (match[1]) {
                  case 'enabled':
                    source = 'if(' + N + '(("form" in e||/^optgroup$/i.test(e.nodeName))&&"disabled" in e &&e.disabled===false' +
                      ')){' + source + '}';
                    break;
                  case 'disabled':
                    // https://www.w3.org/TR/html5/forms.html#enabling-and-disabling-form-controls:-the-disabled-attribute
                    source = 'if(' + N + '(("form" in e||/^optgroup$/i.test(e.nodeName))&&"disabled" in e&&' +
                      '(e.disabled===true||(n=s.ancestor("fieldset",e))&&(n=s.first("legend",n))&&!n.contains(e))' +
                      ')){' + source + '}';
                    break;
                  case 'read-only':
                    source =
                      'if(' + N + '(' +
                        '(/^textarea$/i.test(e.nodeName)&&(e.readOnly||e.disabled))||' +
                        '("|password|text|".includes("|"+e.type+"|")&&e.readOnly)' +
                      ')){' + source + '}';
                    break;
                  case 'read-write':
                    source =
                      'if(' + N + '(' +
                        '((/^textarea$/i.test(e.nodeName)&&!e.readOnly&&!e.disabled)||' +
                        '("|password|text|".includes("|"+e.type+"|")&&!e.readOnly&&!e.disabled))||' +
                        '(e.hasAttribute("contenteditable")||(s.doc.designMode=="on"))' +
                      ')){' + source + '}';
                    break;
                  case 'placeholder-shown':
                    source =
                      'if(' + N + '(' +
                        '(/^input|textarea$/i.test(e.nodeName))&&e.hasAttribute("placeholder")&&' +
                        '("|textarea|password|number|search|email|text|tel|url|".includes("|"+e.type+"|"))&&' +
                        '(!s.match(":focus",e))' +
                      ')){' + source + '}';
                    break;
                  case 'default':
                    source =
                      'if(' + N + '("form" in e && e.form)){' +
                        'var x=0;n=[];' +
                        'if(e.type=="image")n=e.form.getElementsByTagName("input");' +
                        'if(e.type=="submit")n=e.form.elements;' +
                        'while(n[x]&&e!==n[x]){' +
                          'if(n[x].type=="image")break;' +
                          'if(n[x].type=="submit")break;' +
                          'x++;' +
                        '}' +
                      '}' +
                      'if(' + N + '(e.form&&(e===n[x]&&"|image|submit|".includes("|"+e.type+"|"))||' +
                        '((/^option$/i.test(e.nodeName))&&e.defaultSelected)||' +
                        '(("|radio|checkbox|".includes("|"+e.type+"|"))&&e.defaultChecked)' +
                      ')){' + source + '}';
                    break;
                  default:
                    emit('\'' + selector_string + '\'' + qsInvalid);
                    break;
                }
              }

              // *** input pseudo-classes (for form validation)
              // :checked, :indeterminate, :valid, :invalid, :in-range, :out-of-range, :required, :optional
              else if ((match = selector.match(Patterns.inputvalue))) {
                match[1] = match[1].toLowerCase();
                switch (match[1]) {
                  case 'checked':
                    source = 'if(' + N + '(/^input$/i.test(e.nodeName)&&' +
                      '("|radio|checkbox|".includes("|"+e.type+"|")&&e.checked)||' +
                      '(/^option$/i.test(e.nodeName)&&(e.selected||e.checked))' +
                      ')){' + source + '}';
                    break;
                  case 'indeterminate':
                    source =
                      'if(' + N + '(/^progress$/i.test(e.nodeName)&&!e.hasAttribute("value"))||' +
                        '(/^input$/i.test(e.nodeName)&&("checkbox"==e.type&&e.indeterminate)||' +
                        '("radio"==e.type&&e.name&&!s.first("input[name="+e.name+"]:checked",e.form))' +
                      ')){' + source + '}';
                    break;
                  case 'required':
                    source =
                      'if(' + N +
                        '(/^input|select|textarea$/i.test(e.nodeName)&&e.required)' +
                      '){' + source + '}';
                    break;
                  case 'optional':
                    source =
                      'if(' + N +
                        '(/^input|select|textarea$/i.test(e.nodeName)&&!e.required)' +
                      '){' + source + '}';
                    break;
                  case 'invalid':
                    source =
                      'if(' + N + '((' +
                        '(/^form$/i.test(e.nodeName)&&!e.noValidate)||' +
                        '(e.willValidate&&!e.formNoValidate))&&!e.checkValidity())||' +
                        '(/^fieldset$/i.test(e.nodeName)&&s.first(":invalid",e))' +
                      '){' + source + '}';
                    break;
                  case 'valid':
                    source =
                      'if(' + N + '((' +
                        '(/^form$/i.test(e.nodeName)&&!e.noValidate)||' +
                        '(e.willValidate&&!e.formNoValidate))&&e.checkValidity())||' +
                        '(/^fieldset$/i.test(e.nodeName)&&s.first(":valid",e))' +
                      '){' + source + '}';
                    break;
                  case 'in-range':
                    source =
                      'if(' + N +
                        '(/^input$/i.test(e.nodeName))&&' +
                        '(e.willValidate&&!e.formNoValidate)&&' +
                        '(!e.validity.rangeUnderflow&&!e.validity.rangeOverflow)&&' +
                        '("|date|datetime-local|month|number|range|time|week|".includes("|"+e.type+"|"))&&' +
                        '("range"==e.type||e.getAttribute("min")||e.getAttribute("max"))' +
                      '){' + source + '}';
                    break;
                  case 'out-of-range':
                    source =
                      'if(' + N +
                        '(/^input$/i.test(e.nodeName))&&' +
                        '(e.willValidate&&!e.formNoValidate)&&' +
                        '(e.validity.rangeUnderflow||e.validity.rangeOverflow)&&' +
                        '("|date|datetime-local|month|number|range|time|week|".includes("|"+e.type+"|"))&&' +
                        '("range"==e.type||e.getAttribute("min")||e.getAttribute("max"))' +
                      '){' + source + '}';
                    break;
                  default:
                    emit('\'' + selector_string + '\'' + qsInvalid);
                    break;
                }
              }

              // allow pseudo-elements starting with single colon (:)
              // :after, :before, :first-letter, :first-line
              else if ((match = selector.match(Patterns.pseudo_sng))) {
                source = 'if(' + D + '(e.nodeType==1)){' + source + '}';
              }

              // allow pseudo-elements starting with double colon (::)
              // ::after, ::before, ::marker, ::placeholder, ::inactive-selection, ::selection, ::-webkit-<foo-bar>
              else if ((match = selector.match(Patterns.pseudo_dbl))) {
                source = 'if(' + D + '(e.nodeType==1)){' + source + '}';
              }

              else {

                // reset
                expr = false;
                status = false;

                // process registered selector extensions
                for (expr in Selectors) {
                  if ((match = selector.match(Selectors[expr].Expression))) {
                    result = Selectors[expr].Callback(match, source, mode, callback);
                    if ('match' in result) { match = result.match; }
                    vars = result.modvar;
                    if (mode) {
                       // add extra select() vars
                       vars && S_VARS.indexOf(vars) < 0 && (S_VARS[S_VARS.length] = vars);
                    } else {
                       // add extra match() vars
                       vars && M_VARS.indexOf(vars) < 0 && (M_VARS[M_VARS.length] = vars);
                    }
                    // extension source code
                    source = result.source;
                    // extension status code
                    status = result.status;
                    // break on status error
                    if (status) { break; }
                  }
                }

                if (!status) {
                  emit('unknown pseudo-class selector \'' + selector + '\'');
                  return '';
                }

                if (!expr) {
                  emit('unknown token in selector \'' + selector + '\'');
                  return '';
                }

              }
              break;

          default:
            emit('\'' + selector_string + '\'' + qsInvalid);
            break;

          }
          // end of switch symbol

          if (!match) {
            emit('\'' + selector_string + '\'' + qsInvalid);
            return '';
          }

          // pop last component
          selector = match.pop();
        }
        // end of while selector

        return source;
      },

    // replace ':scope' pseudo-class with element references
    makeref =
      function(selectors, element) {
        return selectors.replace(/:scope/ig,
          element.nodeName.toLowerCase() +
          (element.id ? '#' + element.id : '') +
          (element.className ? '.' + element.classList[0] : ''));
      },

    // equivalent of w3c 'closest' method
    ancestor =
      function _closest(selectors, element, callback) {

        if ((/:scope/i).test(selectors)) {
          selectors = makeref(selectors, element);
        }

        while (element) {
          if (match(selectors, element, callback)) break;
          element = element.parentElement;
        }
        return element;
      },

    match_assert =
      function(f, element, callback) {
        for (var i = 0, l = f.length, r = false; l > i; ++i)
          f[i](element, callback, null, false) && (r = true);
        return r;
      },

    match_collect =
      function(selectors, callback) {
        for (var i = 0, l = selectors.length, f = [ ]; l > i; ++i)
          f[i] = compile(selectors[i], false, callback);
        return { factory: f };
      },

    // equivalent of w3c 'matches' method
    match =
      function _matches(selectors, element, callback) {

        var expressions, parsed;

        if (element && matchResolvers[selectors]) {
          return match_assert(matchResolvers[selectors].factory, element, callback);
        }

        lastMatched = selectors;

        // arguments validation
        if (arguments.length === 0) {
          emit(qsNotArgs, TypeError);
          return Config.VERBOSITY ? undefined : false;
        } else if (arguments[0] === '') {
          emit('\'\'' + qsInvalid);
          return Config.VERBOSITY ? undefined : false;
        }

        // input NULL or UNDEFINED
        if (typeof selectors != 'string') {
          selectors = '' + selectors;
        }

        if ((/:scope/i).test(selectors)) {
          selectors = makeref(selectors, element);
        }

        // normalize input string
        parsed = selectors.
          replace(/\x00|\\$/g, '\ufffd').
          replace(REX.CombineWSP, '\x20').
          replace(REX.PseudosWSP, '$1').
          replace(REX.TabCharWSP, '\t').
          replace(REX.CommaGroup, ',').
          replace(REX.TrimSpaces, '');

        // parse, validate and split possible compound selectors
        if ((expressions = parsed.match(reValidator)) && expressions.join('') == parsed) {
          expressions = parsed.match(REX.SplitGroup);
          if (parsed[parsed.length - 1] == ',') {
            emit(qsInvalid);
            return Config.VERBOSITY ? undefined : false;
          }
        } else {
          emit('\'' + selectors + '\'' + qsInvalid);
          return Config.VERBOSITY ? undefined : false;
        }

        matchResolvers[selectors] = match_collect(expressions, callback);

        return match_assert(matchResolvers[selectors].factory, element, callback);
      },

    // equivalent of w3c 'querySelector' method
    first =
      function _querySelector(selectors, context, callback) {
        if (arguments.length === 0) {
          emit(qsNotArgs, TypeError);
        }
        return select(selectors, context,
          typeof callback == 'function' ?
          function firstMatch(element) {
            callback(element);
            return false;
          } :
          function firstMatch() {
            return false;
          }
        )[0] || null;
      },

    // equivalent of w3c 'querySelectorAll' method
    select =
      function _querySelectorAll(selectors, context, callback) {

        var expressions, nodes, parsed, resolver;

        context || (context = doc);

        if (selectors) {
          if ((resolver = selectResolvers[selectors])) {
            if (resolver.context === context && resolver.callback === callback) {
              var f = resolver.factory, h = resolver.htmlset, n = resolver.nodeset, nodes = [ ];
              if (n.length > 1) {
                for (var i = 0, l = n.length, list; l > i; ++i) {
                  list = compat[n[i][0]](context, n[i].slice(1))();
                  if (f[i] !== null) {
                    f[i](list, callback, context, nodes);
                  } else {
                    nodes = nodes.concat(list);
                  }
                }
                if (l > 1 && nodes.length > 1) {
                  nodes.sort(documentOrder);
                  hasDupes && (nodes = unique(nodes));
                }
              } else {
                if (f[0]) {
                  nodes = f[0](h[0](), callback, context, nodes);
                } else {
                  nodes = h[0]();
                }
              }
              return typeof callback == 'function' ?
                concatCall(nodes, callback) : nodes;
            }
          }
        }

        lastSelected = selectors;

        // arguments validation
        if (arguments.length === 0) {
          emit(qsNotArgs, TypeError);
          return Config.VERBOSITY ? undefined : none;
        } else if (arguments[0] === '') {
          emit('\'\'' + qsInvalid);
          return Config.VERBOSITY ? undefined : none;
        } else if (lastContext !== context) {
          lastContext = switchContext(context);
        }

        // input NULL or UNDEFINED
        if (typeof selectors != 'string') {
          selectors = '' + selectors;
        }

        if ((/:scope/i).test(selectors)) {
          selectors = makeref(selectors, context);
        }

        // normalize input string
        parsed = selectors.
          replace(/\x00|\\$/g, '\ufffd').
          replace(REX.CombineWSP, '\x20').
          replace(REX.PseudosWSP, '$1').
          replace(REX.TabCharWSP, '\t').
          replace(REX.CommaGroup, ',').
          replace(REX.TrimSpaces, '');

        // parse, validate and split possible compound selectors
        if ((expressions = parsed.match(reValidator)) && expressions.join('') == parsed) {
          expressions = parsed.match(REX.SplitGroup);
          if (parsed[parsed.length - 1] == ',') {
            emit(qsInvalid);
            return Config.VERBOSITY ? undefined : false;
          }
        } else {
          emit('\'' + selectors + '\'' + qsInvalid);
          return Config.VERBOSITY ? undefined : false;
        }

        // save/reuse factory and closure collection
        selectResolvers[selectors] = collect(expressions, context, callback);

        if(context._extraNodes) return selectResolvers[selectors].extraNodes;

        nodes = selectResolvers[selectors].results;

        return typeof callback == 'function' ?
          concatCall(nodes, callback) : nodes;
      },

    // optimize selectors avoiding duplicated checks
    optimize =
      function(selector, token) {
        var index = token.index,
        length = token[1].length + token[2].length;
        return selector.slice(0, index) +
          (' >+~'.indexOf(selector.charAt(index - 1)) > -1 ?
            (':['.indexOf(selector.charAt(index + length + 1)) > -1 ?
            '*' : '') : '') + selector.slice(index + length - (token[1] == '*' ? 1 : 0));
      },

    // prepare factory resolvers and closure collections
    collect =
      function(selectors, context, callback) {

        var i, l, seen = { }, token = ['', '*', '*'], optimized = selectors,
        factory = [ ], htmlset = [ ], nodeset = [ ], results = [ ], type;

        for (i = 0, l = selectors.length; l > i; ++i) {

          if (!seen[selectors[i]] && (seen[selectors[i]] = true)) {
            type = selectors[i].match(reOptimizer);
            if (type && type[1] != ':' && (token = type)) {
              token[1] || (token[1] = '*');
              optimized[i] = optimize(optimized[i], token);
            } else {
              token = ['', '*', '*'];
            }
  		}

          nodeset[i] = token[1] + token[2];
          htmlset[i] = compat[token[1]](context, token[2]);
          factory[i] = compile(optimized[i], true, null);

          factory[i] ?
            factory[i](htmlset[i](), callback, context, results) :
            result.concat(htmlset[i]());
        }

        var extraNodes = [];
        results = results.map(function(i) {
          if(!i.node) return i;
          extraNodes.push(i);
          return i.node;
        });

        if (l > 1) {
          results.sort(documentOrder);
          hasDupes && (results = unique(results));
        }

        return {
          callback: callback,
          context: context,
          factory: factory,
          htmlset: htmlset,
          nodeset: nodeset,
          results: results,
          extraNodes: extraNodes
        };

      },

    // QSA placeholders to native references
    _closest, _matches, _querySelector, _querySelectorAll,

    // overrides QSA methods (only for browsers)
    install =
      function(all) {

        // save native QSA references
        _closest = Element.prototype.closest;
        _matches = Element.prototype.matches;
        _querySelector = Document.prototype.querySelector;
        _querySelectorAll = Document.prototype.querySelectorAll;

        Element.prototype.closest =
          function closest() {
            var ctor = Object.getPrototypeOf(this).__proto__.__proto__.constructor.name;
            if (!('nodeType' in this)) { emit('\'closest\' called on an object that does not implement interface ' + ctor + '.', TypeError); }
            return arguments.length < 1 ? ancestor.apply(this, [ ]) :
                   arguments.length < 2 ? ancestor.apply(this, [ arguments[0], this ]) :
                                          ancestor.apply(this, [ arguments[0], this, typeof arguments[1] == 'function' ? arguments[1] : undefined ]);
          };

        Element.prototype.matches =
          function matches() {
            var ctor = Object.getPrototypeOf(this).__proto__.__proto__.constructor.name;
            if (!('nodeType' in this)) { emit('\'matches\' called on an object that does not implement interface ' + ctor + '.', TypeError); }
            return arguments.length < 1 ? match.apply(this, [ ]) :
                   arguments.length < 2 ? match.apply(this, [ arguments[0], this ]) :
                                          match.apply(this, [ arguments[0], this, typeof arguments[1] == 'function' ? arguments[1] : undefined ]);
          };

        Element.prototype.querySelector =
        Document.prototype.querySelector =
        DocumentFragment.prototype.querySelector =
          function querySelector() {
            var ctor = Object.getPrototypeOf(this).__proto__.__proto__.constructor.name;
            if (!('nodeType' in this)) { emit('\'querySelector\' called on an object that does not implement interface ' + ctor + '.', TypeError); }
            return arguments.length < 1 ? first.apply(this, [ ]) :
                   arguments.length < 2 ? first.apply(this, [ arguments[0], this ]) :
                                          first.apply(this, [ arguments[0], this, typeof arguments[1] == 'function' ? arguments[1] : undefined ]);
          };

        Element.prototype.querySelectorAll =
        Document.prototype.querySelectorAll =
        DocumentFragment.prototype.querySelectorAll =
          function querySelectorAll() {
            var ctor = Object.getPrototypeOf(this).__proto__.__proto__.constructor.name;
            if (!('nodeType' in this)) { emit('\'querySelectorAll\' called on an object that does not implement interface ' + ctor + '.', TypeError); }
            return arguments.length < 1 ? select.apply(this, [ ]) :
                   arguments.length < 2 ? select.apply(this, [ arguments[0], this ]) :
                                          select.apply(this, [ arguments[0], this, typeof arguments[1] == 'function' ? arguments[1] : undefined ]);
          };

        if (all) {
          document.addEventListener('load', function(e) {
            var c, d, r, s, t = e.target;
            if (/iframe/i.test(t.nodeName)) {
              c = '(' + Export + ')(this, ' + Factory + ');'; d = t.contentDocument;
              s = d.createElement('script'); s.textContent = c + 'NW.Dom.install()';
              r = d.documentElement; r.removeChild(r.insertBefore(s, r.firstChild));
            }
          }, true);
        }

      },

    // restore QSA methods (only for browsers)
    uninstall =
      function() {
        // reinstates QSA native references
        Element.prototype.closest = _closest;
        Element.prototype.matches = _matches;
        Element.prototype.querySelector =
        Document.prototype.querySelector =
        DocumentFragment.prototype.querySelector = _querySelector;
        Element.prototype.querySelectorAll =
        Document.prototype.querySelectorAll =
        DocumentFragment.prototype.querySelectorAll = _querySelectorAll;
      },

    // empty set
    none = Array(),

    // context
    lastContext,

    // selector
    lastMatched,
    lastSelected,

    // cached lambdas
    matchLambdas = { },
    selectLambdas = { },

    // cached resolvers
    matchResolvers = { },
    selectResolvers = { },

    // passed to resolvers
    Snapshot = {

      doc: doc,
      from: doc,
      root: root,

      byTag: byTag,

      first: first,
      match: match,

      ancestor: ancestor,

      nthOfType: nthOfType,
      nthElement: nthElement,

      hasAttributeNS: hasAttributeNS
    },

    // public exported methods/objects
    Dom = {

      // exported cache objects

      lastMatched: lastMatched,
      lastSelected: lastSelected,

      matchLambdas: matchLambdas,
      selectLambdas: selectLambdas,

      matchResolvers: matchResolvers,
      selectResolvers: selectResolvers,

      // exported compiler macros

      CFG: CFG,

      M_BODY: M_BODY,
      S_BODY: S_BODY,
      M_TEST: M_TEST,
      S_TEST: S_TEST,

      // exported engine methods

      byId: byId,
      byTag: byTag,
      byClass: byClass,

      match: match,
      first: first,
      select: select,
      closest: ancestor,

      compile: compile,
      configure: configure,

      emit: emit,
      Config: Config,
      Snapshot: Snapshot,

      Version: version,

      install: install,
      uninstall: uninstall,

      Operators: Operators,
      Selectors: Selectors,

      // register a new selector combinator symbol and its related function resolver
      registerCombinator:
        function(combinator, resolver) {
          var i = 0, l = combinator.length, symbol;
          for (; l > i; ++i) {
            if (combinator[i] != '=') {
              symbol = combinator[i];
              break;
            }
          }
          if (CFG.combinators.indexOf(symbol) < 0) {
            CFG.combinators = CFG.combinators.replace('](', symbol + '](');
            CFG.combinators = CFG.combinators.replace('])', symbol + '])');
            Combinators[combinator] = resolver;
            setIdentifierSyntax();
          } else {
            console.warn('Warning: the \'' + combinator + '\' combinator is already registered.');
          }
        },

      // register a new attribute operator symbol and its related function resolver
      registerOperator:
        function(operator, resolver) {
          var i = 0, l = operator.length, symbol;
          for (; l > i; ++i) {
            if (operator[i] != '=') {
              symbol = operator[i];
              break;
            }
          }
          if (CFG.operators.indexOf(symbol) < 0 && !Operators[operator]) {
            CFG.operators = CFG.operators.replace(']=', symbol + ']=');
            Operators[operator] = resolver;
            setIdentifierSyntax();
          } else {
            console.warn('Warning: the \'' + operator + '\' operator is already registered.');
          }
        },

      // register a new selector symbol and its related function resolver
      registerSelector:
        function(name, rexp, func) {
          Selectors[name] || (Selectors[name] = {
            Expression: rexp,
            Callback: func
          });
        }

    };

    initialize(doc);

    return Dom;

  }

  function processCSS() {
    let styleNodes = this.styleNodes;
    const genId$1 = () => this.config.cssGenId ? this.config.cssGenId() : genId();

    let self = this.css = { id: genId$1(), externalMainName: null };
    let astList = [];
    let selectors = {};
    let removeBlocks = [];
    let active = false;

    const selector2str = (sel) => {
      if(!sel.children) sel = { type: 'Selector', children: sel };
      return csstree.generate(sel);
    };

    const convertAst = (node, parent) => {
      if(!node) return node;
      if(typeof node != 'object') return node;
      if(Array.isArray(node)) return node.map(i => convertAst(i, parent));
      if(node.toArray) return node.toArray().map(i => convertAst(i, parent));
      let r = { parent };
      let newParent = node.type ? r : parent;
      for(let k in node) r[k] = convertAst(node[k], newParent);
      return r;
    };

    const parseCSS = (content, option) => {
      let ast = csstree.parse(content, option);
      return convertAst(ast, null);
    };

    const isKeyframes = (name) => name == 'keyframes' || name == '-webkit-keyframes' || name == '-moz-keyframes' || name == '-o-keyframes';

    styleNodes.forEach(transform);

    function transform(styleNode) {
      active = true;
      let external = false;
      let globalBlock = false;
      styleNode.attributes.forEach(a => {
        if(a.name == 'external') self.hasExternal = external = true;
        else if(a.name == 'main') self.externalMainName = a.value;
        else if(a.name == 'global') globalBlock = true;
      });

      let ast = parseCSS(styleNode.content);
      astList.push(ast);

      csstree.walk(ast, function(node) {
        if(node.type == 'Declaration') {
          if(node.property == 'animation' || node.property == 'animation-name') {
            let c = node.value.children[0];
            if(!c) return;
            if(c.type == 'Identifier') {
              c.name += '-' + self.id;
            } else {
              c = last(node.value.children);
              if(c.type == 'Identifier') c.name += '-' + self.id;
            }
          }
        } else if(node.type === 'Atrule') {
          if(isKeyframes(node.name)) {
            node.prelude.children[0].name += '-' + self.id;
          }
        } else if(node.type === 'Rule') {
          if(node.parent.parent && node.parent.parent.type == 'Atrule') {
            if(isKeyframes(node.parent.parent.name)) return;
          }

          assert(node.prelude.type == 'SelectorList');

          let emptyBlock = node.block.children.length == 0;
          if(emptyBlock) removeBlocks.push(node);

          let selectorList = node.prelude.children;
          for(let i = 0; i < selectorList.length; i++) {
            processSelector(selectorList[i]);
          }

          function processSelector(fullSelector) {
            assert(fullSelector.type == 'Selector');
            let origin = [];
            fullSelector.children.forEach(sel => {
              if(sel.type == 'PseudoClassSelector' && sel.name == 'global') {
                sel = sel.children[0];
                assert(sel.type == 'Raw');
                let a = parseCSS(sel.value, { context: 'selector' });
                assert(a.type == 'Selector');
                a.children.forEach(sel => {
                  sel.global = true;
                  origin.push(sel);
                });
              } else {
                origin.push(sel);
              }
            });

            assert(origin.length);

            let cleanSelectorItems = [];
            for(let i = 0; i < origin.length; i++) {
              let s = origin[i];
              if(s.global) continue;
              if(s.type == 'PseudoClassSelector' || s.type == 'PseudoElementSelector') {
                let prev = origin[i - 1];
                if(!prev || prev.type == 'Combinator' || prev.type == 'WhiteSpace') {
                  cleanSelectorItems.push({ type: 'TypeSelector', name: '*' });
                }
              } else cleanSelectorItems.push(s);
            }
            while(cleanSelectorItems.length && ['WhiteSpace', 'Combinator'].includes(cleanSelectorItems[0].type)) cleanSelectorItems.shift();
            while(cleanSelectorItems.length && ['WhiteSpace', 'Combinator'].includes(last(cleanSelectorItems).type)) cleanSelectorItems.pop();
            if(!cleanSelectorItems.length || globalBlock) { // fully global?
              assert(origin.length);
              fullSelector.children = origin;
              return;
            }
            let cleanSelector = selector2str(cleanSelectorItems);

            let sobj = selectors[cleanSelector];
            if(!sobj) {
              let isSimple = false;
              if(cleanSelectorItems[0].type == 'ClassSelector') {
                isSimple = true;
                for(let i = 1; i < cleanSelectorItems.length; i++) {
                  if(cleanSelectorItems[i].type != 'AttributeSelector') {
                    isSimple = false;
                    break;
                  }
                }
              }

              selectors[cleanSelector] = sobj = {
                cleanSelector,
                isSimple,
                source: [],
                fullyGlobal: origin.every(i => i.global),
                hashedSelectors: []
              };
            }

            if(external) {
              assert(sobj.isSimple);
              if(!sobj.external) sobj.external = emptyBlock ? true : genId$1();
            } else if(!sobj.local) {
              sobj.local = true;
            }

            if(emptyBlock) fullSelector.emptyBlock = true;
            sobj.source.push(fullSelector);

            let hashed = origin.slice();
            hashed._external = external;
            sobj.hashedSelectors.push(hashed);

            const insert = (i) => {
              hashed.splice(i, 0, { type: 'ClassSelector', loc: null, name: null, __hash: true });
            };

            for(let i = hashed.length - 1; i >= 0; i--) {
              let sel = hashed[i];
              let left = hashed[i - 1];
              let right = hashed[i + 1];
              if(sel.global) continue;
              if(sel.type == 'PseudoClassSelector' || sel.type == 'PseudoElementSelector') {
                if(!left || left.type == 'Combinator' || left.type == 'WhiteSpace') insert(i);
                continue;
              } else if(sel.type == 'Combinator' || sel.type == 'WhiteSpace') continue;
              if(!right || ['PseudoClassSelector', 'PseudoElementSelector', 'Combinator', 'WhiteSpace'].includes(right.type)) insert(i + 1);
            }

            fullSelector.children = hashed;
          }
        }
      });
    }

    self.isExternalClass = (name) => {
      let sobj = selectors['.' + name];
      return sobj && sobj.external;
    };

    self.markAsExternal = (name) => {
      let sobj = selectors['.' + name];
      if(!sobj) selectors['.' + name] = sobj = { isSimple: true, cleanSelector: '.' + name };
      assert(!sobj.resolved);
      if(!sobj.external) sobj.external = true;
      active = true;
    };

    self.active = () => active;

    self.containsExternal = () => {
      return Object.values(selectors).some(sel => {
        if(!sel.isSimple) return;
        return sel.external;
      });
    };

    let _hashesResolved = false;
    const resolveHashes = () => {
      if(_hashesResolved) return;
      _hashesResolved = true;
      Object.values(selectors).forEach(sel => {
        if(!sel.hashedSelectors) return;
        if(sel.resolved) return;
        sel.resolved = true;
        if(sel.external) {
          if(sel.local === true) {
            if(self.passingClass) sel.local = genId$1();
            else sel.local = self.id;
          }
        } else {
          assert(sel.local === true);
          if(self.passingClass) sel.local = genId$1();
          else sel.local = self.id;
        }
        sel.hashedSelectors.forEach(hashed => {
          let hash = hashed._external ? sel.external : sel.local;
          assert(hash);
          hashed.forEach(n => {
            if(!n.__hash) return;
            n.name = hash;
          });
        });
      });
    };

    self.getClassMap = () => {
      resolveHashes();
      let classMap = {};
      let metaClass = {};
      Object.values(selectors).forEach(sel => {
        if(!sel.isSimple) return;

        let className = sel.source ? sel.source[0].children[0].name : sel.cleanSelector.substring(1);
        if(sel.external) {
          metaClass[className] = sel.external;
        }
        if(sel.local) {
          classMap[className] = sel.local;
        }
      });
      return { classMap, metaClass, main: self.externalMainName };
    };

    self.process = function(data) {
      let dom = makeDom(data);
      const nw = Factory({
        document: dom,
        DOMException: function() {}
      });

      Object.values(selectors).forEach(sel => {
        sel.$selector = true;
        if(sel.fullyGlobal || !sel.local) return;
        let selected;
        try {
          selected = nw.select([sel.cleanSelector]);
        } catch (_) {
          let e = new Error(`CSS error: '${selector2str(sel.source[0])}'`);
          e.details = `selector: '${selector2str(sel.source[0])}'`;
          throw e;
        }
        selected.forEach(s => {
          s.node.__node.classes.add(sel);
          s.lvl.forEach(l => l.__node.classes.add(sel));
        });
      });
    };

    self.resolve = sel => {
      resolveHashes();
      assert(sel.resolved);
      if(sel.external) {
        assert(sel.external !== true);
        return sel.external;
      }
      assert(sel.local && sel.local !== true);
      return sel.local;
    };

    self.resolveAsNode = function(classList, wrap) {
      return xNode('resolve-class', { classList, wrap }, (ctx, n) => {
        let className = {};
        n.classList.forEach(sel => {
          if(sel.$selector) sel = this.resolve(sel);
          className[sel] = true;
        });
        className = Object.keys(className).join(' ');
        if(className) ctx.write(`${n.wrap[0]}${className}${n.wrap[1]}`);
      });
    };

    self.getContent = function() {
      removeBlocks.forEach(node => {
        let i = node.parent.children.indexOf(node);
        if(i >= 0) node.parent.children.splice(i, 1);
      });
      resolveHashes();

      return astList.map(ast => csstree.generate(ast)).join('');
    };
  }


  function makeDom(data) {
    function build(parent, list) {
      list.forEach(e => {
        if(e.type == 'fragment' || e.type == 'slot' || e.type == 'block') {
          if(e.body && e.body.length) build(parent, e.body);
          return;
        } else if(e.type == 'each') {
          build(parent, e.mainBlock);
          e.elseBlock?.length && build(parent, e.elseBlock);
          return;
        } else if(e.type == 'if') {
          e.parts.forEach(p => build(parent, p.body));
          e.elsePart?.length && build(parent, e.elsePart);
          return;
        } else if(e.type == 'await') {
          if(e.parts.main && e.parts.main.length) build(parent, e.parts.main);
          if(e.parts.then && e.parts.then.length) build(parent, e.parts.then);
          if(e.parts.catch && e.parts.catch.length) build(parent, e.parts.catch);
          return;
        } else if(e.type != 'node') return;
        // if(e.name[0].match(/[A-Z]/)) return;
        let n = new Node(e.name, { __node: e });
        e.attributes.forEach(a => {
          if(a.name == 'class') {
            if(a.value != null) {
              if(a.value.includes('{')) n.dynClass = true;
              else n.className += ' ' + a.value;
            }
            n.attributes[a.name] = a.value;
          } else if(a.name == 'id') {
            if (a.value?.includes('{')) n.dynId = true;
            n.attributes.id = n.id = a.value;
          } else if(a.name.startsWith('class:')) {
            n.className += ' ' + a.name.substring(6);
          } else n.attributes[a.name] = a.value;
        });
        n.className = n.className.trim();
        parent.appendChild(n);
        if(e.body && e.body.length) build(n, e.body);
      });
    }

    let body = new Node('body', {
      nodeType: 9,
      contentType: 'text/html',
      compatMode: '',
      _extraNodes: true
    });
    body.documentElement = body;
    build(body, data.body);

    return body;
  }

  function Node(name, data, children) {
    this.nodeName = name;
    this.childNodes = [];
    this.className = '';
    this.attributes = {};

    this.parentElement = null;
    this.firstElementChild = null;
    this.lastElementChild = null;
    this.nextElementSibling = null;
    this.previousElementSibling = null;

    if(data) Object.assign(this, data);
    if(children) children.forEach(c => this.appendChild(c));
  }

  Node.prototype.getAttribute = function(n) {
    if(n == 'class') return this.className;
    if(n == 'id') return this.id;
    return this.attributes[n];
  };

  Node.prototype.hasAttribute = function(n) {
    return n in this.attributes;
  };

  Node.prototype.appendChild = function(n) {
    n.parentElement = this;
    this.childNodes.push(n);
    if(!this.firstElementChild) this.firstElementChild = n;
    if(this.lastElementChild) {
      this.lastElementChild.nextElementSibling = n;
      n.previousElementSibling = this.lastElementChild;
      this.lastElementChild = n;
    } else this.lastElementChild = n;
  };

  Node.prototype.getElementsByTagNameNS = function(ns, name) {
    return this.getElementsByTagName(name);
  };

  Node.prototype.getElementsByTagName = function(name) {
    let result = [];
    this.childNodes.forEach(n => {
      if(name == '*' || n.nodeName == name) result.push(n);
      result.push.apply(result, n.getElementsByTagName(name));
    });
    return result;
  };

  Node.prototype.getElementsByClassName = function(names) {
    names = names.split(/\s+/);
    if(names.length != 1) throw 'Not supported';
    let cls = names[0];

    let rx = RegExp('(^|\\s)' + cls + '(\\s|$)', 'i');
    let result = [];
    const walk = (node) => {
      node.childNodes.forEach(n => {
        if(n.dynClass) result.push(n);
        else if(rx.test(n.className)) result.push(n);
        walk(n);
      });
    };
    walk(this);
    return result;
  };

  function makeComponent(node, option={}) {
    let propList = node.attributes;

    this.require('$context');

    let deepChecking = this.config.deepCheckingProps;
    let reference = null;
    let propsFn = [], propsSetter = [], $class = [], staticProps = true;
    let slotBlocks = [];
    let anchorBlocks = [];

    let componentName = option.self ? '$$selfComponent' : node.name;
    if(componentName != 'component' && this.config.autoimport && !option.self) {
      let imported = this.script.autoimport[componentName] || this.script.importedNames.includes(componentName) ||
        this.script.rootVariables[componentName] || this.script.rootFunctions[componentName];

      if(!imported) {
        let r = this.config.autoimport(componentName, this.config.path, this);
        if(r) this.script.autoimport[componentName] = r;
      }
    }

    // events
    let forwardAllEvents = false;
    let events = {};
    const passEvent = (name, bind) => {
      if(!events[name]) events[name] = [];
      events[name].push(bind);
    };

    if(node.body && node.body.length) {
      let slots = {};
      let anchors = [];
      let defaultSlot = {
        name: 'default',
        type: 'slot'
      };
      defaultSlot.body = trimEmptyNodes(node.body.filter(n => {
        if(n.type == 'node' && n.name[0] == '^') {
          anchors.push(n);
          return false;
        }
        if(n.type != 'slot') return true;
        let rx = n.value.match(/^#slot:(\S+)/);
        if(rx) n.name = rx[1];
        else n.name = 'default';
        assert(!slots[n], 'double slot');
        slots[n.name] = n;
      }));

      if(!slots.default && defaultSlot.body.length) slots.default = defaultSlot;

      Object.values(slots).forEach(slot => {
        if(!slot.body.length) return;
        assert(isSimpleName(slot.name));

        let props;
        let rx = slot.value && slot.value.match(/^#slot\S*\s+(.*)$/s);
        if(rx) {
          props = rx[1].trim().split(/[\s,]+/);
          assert(props.length);
          props.forEach(n => {
            assert(isSimpleName(n), 'Wrong prop for slot');
          });
        }

        let contentNodes = trimEmptyNodes(slot.body);
        if(contentNodes.length == 1 && contentNodes[0].type == 'node' && contentNodes[0].name == 'slot') {
          let parentSlot = contentNodes[0];
          if(!parentSlot.body || !parentSlot.body.length) {
            slotBlocks.push(xNode('empty-slot', {
              childName: slot.name,
              parentName: parentSlot.elArg || 'default'
            }, (ctx, n) => {
              ctx.write(true, `${n.childName}: $option.slots?.${n.parentName}`);
            }));
            return;
          }
        }

        if(props) this.require('apply');

        let block = this.buildBlock(slot, { inline: true });

        slotBlocks.push(xNode('slot', {
          $wait: ['apply'],
          name: slot.name,
          template: block.template,
          bind: block.source,
          componentName,
          props
        }, (ctx, n) => {
          if(n.bind) {
            ctx.write(true, `${n.name}: $runtime.makeSlot(`);
            ctx.add(n.template);
            ctx.write(`, ($parentElement, $context, $instance_${n.componentName}`);
            if(n.props) ctx.write(', $localProps');
            ctx.write(') => {', true);
            ctx.indent++;
            if(n.props) ctx.write(true, `let {${n.props.join(', ')}} = $localProps || {};`);
            ctx.add(n.bind);

            if(n.props && this.inuse.apply) ctx.write(true, `return ($localProps) => ({${n.props.join(', ')}} = $localProps, $$apply());`);
            ctx.indent--;
            ctx.writeLine('})');
          } else {
            ctx.write(true, `${n.name}: $runtime.makeBlock(`);
            ctx.add(n.template);
            ctx.write(')');
          }
        }));
      });

      anchors.forEach(n => {
        let bb = this.buildBlock({ body: [n] }, { inline: true, oneElement: 'el', bindAttributes: true });
        let block = bb.source;
        let name = n.name.slice(1) || 'default';
        assert(isSimpleName(name));

        anchorBlocks.push(xNode('anchor', {
          name,
          block
        }, (ctx, n) => {
          ctx.write(`${n.name}: $runtime.makeAnchor((el) => {`);
          ctx.indent++;
          ctx.add(n.block);
          ctx.indent--;
          ctx.write(true, '})');
        }));
      });
    }

    propList = propList.filter(({ name }) => {
      if(name == '@@') {
        forwardAllEvents = true;
        this.require('$events');
        return false;
      } else if(name == 'this') {
        return false;
      }
      return true;
    });

    propList.forEach(prop => {
      let name = prop.name;
      let value = prop.value;
      if(name[0] == '#') {
        assert(!value, 'Wrong ref');
        name = name.substring(1);
        assert(detectExpressionType(name) == 'identifier', name);
        reference = name;
        return;
      } else if(name[0] == ':' || name.startsWith('bind:')) {
        let inner, outer;
        if(name[0] == ':') inner = name.substring(1);
        else inner = name.substring(5);
        let mods = inner.split('|');
        inner = mods.shift();
        mods.forEach(mod => {
          if (mod == 'deep') deepChecking = true;
          else throw new Error('Wrong modifier: ' + mod);
        });
        if(value) outer = unwrapExp(value);
        else outer = inner;
        assert(isSimpleName(inner), `Wrong property: '${inner}'`);
        assert(detectExpressionType(outer) == 'identifier', 'Wrong bind name: ' + outer);
        this.detectDependency(outer);

        this.require('apply');
        staticProps = false;

        if(inner == outer) propsFn.push(`${inner}`);
        else propsFn.push(`${inner}: ${outer}`);
        propsSetter.push(`${inner}: ${outer} = ${outer}`);

        return;
      } else if(name[0] == '{') {
        value = name;
        name = unwrapExp(name);
        if(name.startsWith('...')) {
          name = name.substring(3);
          assert(detectExpressionType(name) == 'identifier', 'Wrong prop');
          this.detectDependency(name);
          staticProps = false;
          propsFn.push(`...${name}`);
          return;
        }
        assert(detectExpressionType(name) == 'identifier', 'Wrong prop');
      } else if(name[0] == '@' || name.startsWith('on:')) {
        if(name.startsWith('@@')) {
          let event = name.substring(2);
          assert(!value);
          this.require('$events');
          passEvent(event, xNode('forwardEvent', {
            event
          }, (ctx, n) => {
            ctx.write(`$events.${n.event}`);
          }));
          return;
        }

        let { event, fn } = this.makeEventProp(prop, () => {
          throw new Error('$element is not available for component, use $event instead');
        });

        passEvent(event, xNode('passEvent', {
          fn
        }, (ctx, n) => {
          ctx.add(n.fn);
        }));
        return;
      } else if(this.config.passClass && (name == 'class' || name.startsWith('class:'))) {
        let metaClass, args = name.split(':');
        if (args.length == 1) {
          metaClass = '$$main';
        } else {
          assert(args.length == 2);
          metaClass = args[1];
          assert(metaClass);
          if (!value) value = metaClass;
        }
        assert(value);
        this.css.passingClass = true;

        const parsed = this.parseText(value);
        this.detectDependency(parsed);
        let exp = parsed.result;
        $class.push(`${metaClass}: $$resolveClass(${exp})`);

        this.require('resolveClass');
        return;
      }

      let ip = this.inspectProp(prop);
      if(ip.name == ip.value) propsFn.push(`${ip.name}`);
      else propsFn.push(`${ip.name}: ${ip.value}`);
      if(!ip.static) staticProps = false;
      if(ip.mod.deep) deepChecking = true;
    });


    if(Object.keys(events).length == 0) events = null;

    let result = xNode('component', {
      $wait: ['apply'],
      componentName,
      staticProps,
      props: propsFn,
      propsSetter,
      $class,
      forwardAllEvents,
      events,
      slots: slotBlocks.length ? slotBlocks : null,
      anchors: anchorBlocks.length ? anchorBlocks : null,
      deepChecking
    }, (ctx, n) => {
      let comma = false;

      if(this.inuse.apply && (n.$class.length || n.propsSetter.length || n.props.length && !n.staticProps)) {
        ctx.write(`$runtime.callComponentDyn(${n.componentName}, $context, {`);
      } else ctx.write(`$runtime.callComponent(${n.componentName}, $context, {`);

      if(n.props.length && (n.staticProps || !this.inuse.apply)) {
        ctx.write(`props: {${n.props.join(', ')}}`);
        comma = true;
        n.props = [];
      }
      ctx.indent++;
      if(n.forwardAllEvents && !n.events) {
        if(comma) ctx.write(', ');
        comma = true;
        ctx.write('events: $events');
      } else if(n.events) {
        if(comma) ctx.write(',', true);
        comma = true;
        if(n.forwardAllEvents) ctx.write('events: $runtime.mergeAllEvents($events, {');
        else ctx.write('events: {');
        ctx.indent++;
        ctx.write(true);
        Object.entries(n.events).forEach(([event, list], index) => {
          if(index) ctx.write(',', true);
          ctx.write(event + ': ');
          if(list.length == 1) ctx.add(list[0]);
          else {
            ctx.write('$runtime.mergeEvents(');
            list.forEach((b, i) => {
              if(i) ctx.write(', ');
              ctx.add(b);
            });
            ctx.write(')');
          }
        });
        ctx.indent--;
        if(n.forwardAllEvents) ctx.write(true, '})');
        else ctx.write(true, '}');
      }
      if(n.slots) {
        if(comma) ctx.write(', ');
        comma = true;
        ctx.write('slots: {');
        ctx.indent++;
        n.slots.forEach((slot, i) => {
          if(i) ctx.write(',');
          ctx.write(true);
          ctx.add(slot);
        });
        ctx.indent--;
        ctx.write(true, '}');
      }
      if(n.anchors) {
        if(comma) ctx.write(', ');
        comma = true;
        ctx.write('anchor: {');
        ctx.indent++;
        n.anchors.forEach((anchor, i) => {
          if(i) ctx.write(',');
          ctx.write(true);
          ctx.add(anchor);
        });
        ctx.indent--;
        ctx.write(true, '}');
      }
      if(n.$class.length && !this.inuse.apply) {
        if(comma) ctx.write(', ');
        comma = true;
        ctx.write(`$class: {${n.$class.join(', ')}}`);
      }
      ctx.write('}');

      let other = '';
      if(n.props.length) ctx.write(',\n', true, `() => ({${n.props.join(', ')}})`);
      else other = ', null';

      if(this.inuse.apply && n.props.length) {
        if(other) ctx.write(other);
        other = '';
        ctx.write(',');
        if(n.props.length) ctx.write('\n', true);
        if(n.deepChecking) ctx.write('$runtime.compareDeep');
        else ctx.write('$runtime.keyComparator');
      } else other += ', null';

      if(n.propsSetter.length && this.inuse.apply) {
        if(other) ctx.write(other);
        other = '';
        ctx.write(',\n', true, `($$_value) => ({${n.propsSetter.join(', ')}} = $$_value)`);
      } else other += ', null';

      if(n.$class.length && this.inuse.apply) {
        if(other) ctx.write(other);
        other = '';
        ctx.write(',\n', true, `() => ({${n.$class.join(', ')}})`);
      } else other += ', null';

      ctx.indent--;
      ctx.write(true, ')');
    });

    return { bind: result, reference };
  }

  function makeComponentDyn(node, label) {
    let dynamicComponent;

    if(node.elArg) {
      dynamicComponent = node.elArg[0] == '{' ? unwrapExp(node.elArg) : node.elArg;
    } else {
      node.props.some(({ name, value }) => {
        if(name == 'this') {
          dynamicComponent = unwrapExp(value);
          return true;
        }
      });
    }

    assert(dynamicComponent);
    this.require('apply');
    this.detectDependency(dynamicComponent);

    let { bind: component, reference } = this.makeComponent(node);

    component.componentName = '$ComponentConstructor';
    return xNode('dyn-component', {
      label,
      exp: dynamicComponent,
      component,
      reference
    }, (ctx, n) => {
      ctx.write(true, `$runtime.attachDynComponent(${n.label.name}, () => ${n.exp}, ($ComponentConstructor) => `);
      if(n.reference) ctx.write(`${n.reference} = `);
      ctx.add(n.component);
      if(n.label.node) ctx.write(')');
      else ctx.write(', true)');
    });
  }

  function bindProp(prop, node, element) {
    let name, arg;

    if(prop.content.startsWith('{*')) {
      const pe = this.parseText(prop.content);
      assert(pe.parts[0].type == 'js');
      let exp = pe.parts[0].value;
      if(!exp.endsWith(';')) exp += ';';
      return {
        bind: xNode('inline-js', {
          exp: replaceKeyword(exp, (name) => name == '$element' ? element.bindName() : null, true)
        }, (ctx, n) => {
          ctx.write(true, n.exp);
        })
      };
    }

    if(prop.name[0] == '@' || prop.name.startsWith('on:')) name = 'event';
    else if(prop.name[0] == ':') {
      name = 'bind';
      arg = prop.name.substring(1);
    } else if(prop.name[0] == '*') {
      let rx = prop.name.match(/^\*\{.*\}$/);
      if(rx) {
        assert(prop.value == null, 'wrong binding: ' + prop.content);
        name = 'use';
        prop.value = prop.name.substring(1);
      } else {
        name = 'use';
        arg = prop.name.substring(1);
      }
    } else if(prop.value == null) {
      let rx = prop.name.match(/^\{(.*)\}$/);
      if(rx) {
        name = rx[1];
        if(name.startsWith('...')) {
          // spread operator
          name = name.substring(3);
          assert(detectExpressionType(name) == 'identifier');
          this.detectDependency(name);
          return node.spreading.push(`...${name}`);
        } else {
          prop.value = prop.name;
        }
      }
    }
    if(!name) {
      let r = prop.name.match(/^(\w+):(.*)$/);
      if(r) {
        name = r[1];
        arg = r[2];
      } else name = prop.name;
    }

    const isExpression = s => s[0] == '{' && last(s) == '}';

    if(name[0] == '#') {
      let target = name.substring(1);
      assert(detectExpressionType(target) == 'identifier', name);
      return {
        bind: xNode('reference-to-element', {
          target,
          el: element.bindName()
        }, (ctx, n) => {
          ctx.write(true, `${n.target} = ${n.el};`);
          ctx.write(true, `$runtime.$onDestroy(() => ${n.target} = null);`);
        })
      };
    } else if(name == 'event') {
      if(prop.name.startsWith('@@')) {
        assert(!prop.value);
        this.require('$events');
        if(prop.name == '@@') {
          return {
            bind: xNode('forwardAllEvents', {
              el: element.bindName()
            }, (ctx, data) => {
              ctx.write(true, 'for(let event in $events)');
              this.indent++;
              ctx.write(true, `$runtime.addEvent(${data.el}, event, $events[event]);`);
              this.indent--;
            })
          };
        }

        return {
          bind: xNode('forwardEvent', {
            event: prop.name.substring(2),
            el: element.bindName()
          }, (ctx, n) => {
            ctx.writeLine(`$events.${n.event} && $runtime.addEvent(${n.el}, '${n.event}', $events.${n.event});`);
          })
        };
      }

      let { event, fn, rootModifier } = this.makeEventProp(prop, () => element.bindName());
      if(rootModifier) this.require('rootEvent');

      return {
        bind: xNode('bindEvent', {
          event,
          fn,
          el: element.bindName(),
          rootModifier
        }, (ctx, n) => {
          if(n.rootModifier) ctx.write(true, `$$addRootEvent(${n.el}, '${n.event}', `);
          else ctx.write(true, `$runtime.addEvent(${n.el}, '${n.event}', `);
          ctx.add(n.fn);
          ctx.write(');');
        })
      };
    } else if(name == 'bind' && arg) {
      this.require('apply');
      let exp;
      arg = arg.split(/[:|]/);
      let attr = arg.shift();
      assert(attr, prop.content);

      if(prop.value) exp = unwrapExp(prop.value);
      else {
        if(arg.length) exp = arg.pop();
        else exp = attr;
      }
      let inputType = null;
      if(node.name == 'input') {
        node.attributes.some(a => {
          if(a.name == 'type') {
            inputType = a.value;
            return true;
          }
        });
      }

      assert(['value', 'checked', 'valueAsNumber', 'valueAsDate', 'selectedIndex'].includes(attr), 'Not supported: ' + prop.content);
      assert(detectExpressionType(exp) == 'identifier', 'Wrong bind name: ' + prop.content);
      assert(arg.length == 0);
      this.detectDependency(exp);
      let argName = '$$a' + (this.uniqIndex++);

      if(node.name == 'select' && attr == 'value') {
        return {
          bind: xNode('bindInput', {
            el: element.bindName(),
            exp,
            attr,
            argName
          }, (ctx, n) => {
            ctx.write(true, `$runtime.selectElement(${n.el}, () => ${n.exp}, ${n.argName} => {${n.exp} = ${n.argName}; $$apply();});`);
          })
        }
      }

      if(attr == 'value' && ['number', 'range'].includes(inputType)) attr = 'valueAsNumber';

      return {
        bind: xNode('bindInput', {
          el: element.bindName(),
          exp,
          attr,
          argName
        }, (ctx, n) => {
          ctx.write(true, `$runtime.bindInput(${n.el}, '${n.attr}', () => ${n.exp}, ${n.argName} => {${n.exp} = ${n.argName}; $$apply();});`);
        })
      };
    } else if(name == 'style' && arg) {
      let styleName = arg;
      let exp;
      if(prop.value) {
        if(isExpression(prop.value)) {
          exp = unwrapExp(prop.value);
          this.detectDependency(exp);
        } else {
          if(prop.value.includes('{')) {
            const parsed = this.parseText(prop.value);
            this.detectDependency(parsed);
            exp = parsed.result;
          } else {
            return {
              bind: xNode('staticStyle', {
                el: element.bindName(),
                name: styleName,
                value: prop.value
              }, (ctx, n) => {
                ctx.writeLine(`${n.el}.style.${toCamelCase(n.name)} = \`${Q(n.value)}\`;`);
              })
            };
          }
        }
      } else {
        exp = toCamelCase(styleName);
      }

      let hasElement = exp.includes('$element');
      return {
        bind: xNode.block({
          scope: hasElement,
          body: [xNode('bindStyle', {
            el: element.bindName(),
            styleName,
            exp,
            hasElement
          }, (ctx, n) => {
            if(n.hasElement) ctx.writeLine(`let $element=${n.el};`);
            if(this.inuse.apply) {
              ctx.writeLine(`$runtime.bindStyle(${n.el}, '${n.styleName}', () => (${n.exp}));`);
            } else {
              ctx.writeLine(`${n.el}.style.${toCamelCase(n.styleName)} = ${n.exp};`);
            }
          })]
        })
      };
    } else if(name == 'use') {
      if(arg) {
        assert(isSimpleName(arg), 'Wrong name: ' + arg);
        this.checkRootName(arg);
        let args = prop.value ? `, () => [${unwrapExp(prop.value)}]` : '';
        this.detectDependency(args);
        return {
          bind: xNode('action', {
            $wait: ['apply'],
            name: arg,
            args,
            el: element.bindName()
          }, (ctx, n) => {
            if(this.inuse.apply && n.args) {
              ctx.writeLine(`$runtime.bindAction(${n.el}, ${n.name}${n.args}, $runtime.__bindActionSubscribe);`);
            } else {
              ctx.writeLine(`$runtime.bindAction(${n.el}, ${n.name}${n.args});`);
            }
          })
        };
      }
      let exp = unwrapExp(prop.value);
      this.detectDependency(exp);
      let hasElement = exp.includes('$element');
      return {
        bind: xNode('inline-action', {
          exp,
          el: hasElement && element.bindName(),
          element,
          hasElement
        }, (ctx, n) => {
          ctx.writeLine('$runtime.$tick(() => {');
          this.indent++;
          if(n.hasElement) ctx.writeLine(`let $element=${n.el};`);
          ctx.writeLine(n.exp);
          if(this.inuse.apply) ctx.writeLine('$$apply();');
          this.indent--;
          ctx.writeLine('});');
        })
      };
    } else if(name == 'class') {
      if(node.__skipClass) return {};
      node.__skipClass = true;

      let props = node.attributes.filter(a => a.name == 'class' || a.name.startsWith('class:'));

      let compound = false;
      props.forEach(prop => {
        let classes = [];
        if(prop.name == 'class') {
          if(!prop.value) return;
          let parsed = this.parseText(prop.value);
          for(let p of parsed.parts) {
            if(p.type == 'text') {
              classes = classes.concat(p.value.trim().split(/\s+/));
            } else if(p.type == 'exp') compound = true;
          }
        } else {
          classes = [prop.name.slice(6)];
        }
        return this.config.passClass && classes.some(name => {
          if(this.css.isExternalClass(name)) {
            compound = true;
            this.require('apply');
          } else if(name[0] == '$') {
            this.css.markAsExternal(name.substring(1));
            compound = true;
            this.require('apply');
          }
        });
      });

      if(compound) {
        let classes = Array.from(node.classes);
        node.classes.clear();
        if(this.config.passClass) this.require('resolveClass');
        let exp = props.map(prop => {
          if(prop.name == 'class') {
            return this.parseText(prop.value).result;
          } else {
            let className = prop.name.slice(6);
            assert(className);
            let exp = prop.value ? unwrapExp(prop.value) : className;
            this.detectDependency(exp);
            return `(${exp}) ? \`${Q(className)}\` : ''`;
          }
        }).join(') + \' \' + (');
        const bind = xNode('compound-class', {
          $wait: ['apply'],
          el: element.bindName(),
          exp,
          classes
        }, (ctx, n) => {
          let base = '';
          if(n.classes.length) {
            if(this.css.passingClass) {
              base = [];
              n.classes.forEach(c => {
                if(c.local) base.push(this.css.resolve(c));
              });
              base = base.join(' ');
              if(base) base = `, '${base}'`;
            } else {
              if(n.classes.some(c => c.local)) base = `,'${this.css.id}'`;
            }
          }

          if(this.inuse.resolveClass) {
            if(this.inuse.apply) {
              ctx.write(true, `$runtime.bindClassExp(${n.el}, () => $$resolveClass((${n.exp})${base}))`);
            } else {
              ctx.write(true, `$runtime.setClassToElement(${n.el}, $$resolveClass((${n.exp})${base}));`);
            }
          } else {
            if(this.inuse.apply) {
              ctx.write(true, `$runtime.bindClassExp(${n.el}, () => (${n.exp})${base})`);
            } else {
              ctx.write(true, `$runtime.setClassToElement(${n.el}, ${n.exp}${base});`);
            }
          }
        });
        return { bind };
      } else {
        let bind = xNode.block();
        props.forEach(prop => {
          if(prop.name == 'class') {
            prop.value && prop.value.trim().split(/\s+/).forEach(name => {
              node.classes.add(name);
            });
          } else {
            let className = prop.name.slice(6);
            assert(className);
            let exp = prop.value ? unwrapExp(prop.value) : className;
            this.detectDependency(exp);

            let n = xNode('bindClass', {
              $wait: ['apply'],
              el: element.bindName(),
              className,
              exp,
              $element: exp.includes('$element')
            }, (ctx, n) => {
              if(n.$element) {
                ctx.writeLine('{');
                ctx.indent++;
                ctx.writeLine(`let $element = ${n.el};`);
              }
              if(this.inuse.apply) {
                ctx.writeLine(`$runtime.bindClass(${n.el}, () => !!(${n.exp}), '${n.className}');`);
              } else {
                ctx.writeLine(`(${n.exp}) && $runtime.addClass(${n.el}, '${n.className}');`);
              }
              if(n.$element) {
                ctx.indent--;
                ctx.writeLine('}');
              }
            });
            bind.push(n);
          }
        });
        return { bind: bind.body.length ? bind : null };
      }
    } else if(name[0] == '^') {
      return {
        bindTail: xNode('bindAnchor', {
          name: name.slice(1) || 'default',
          el: element.bindName()
        }, (ctx, n) => {
          ctx.write(true, `$runtime.attachAnchor($option, ${n.el}`);
          if(n.name == 'default') ctx.write(');');
          else ctx.write(`, '${n.name}');`);
        })
      };
    } else {
      if (prop.raw && prop.raw.includes('{') || prop.type == 'word') {
        let exp;
        if (prop.type == 'text') {
          const parsed = this.parseText(prop.value);
          this.detectDependency(parsed);
          exp = parsed.result;
        } else if (prop.type == 'exp') {
          exp = unwrapExp(prop.raw);
          this.detectDependency(exp);
        } else {
          assert(prop.type == 'word', 'Wrong prop type: ' + prop.type);
          exp = prop.value;
          this.detectDependency(exp);
        }

        let el = element.bindName();
        exp = replaceKeyword(exp, (name) => name == '$element' ? el : null, true);

        if (node.spreading) return node.spreading.push(`${name}: ${exp}`);

        if (node.name == 'option' && name == 'value' && (prop.type == 'exp' || prop.type == 'word')) {
          return {
            bind: xNode('bindOptionValue', {
              el: element.bindName(),
              value: exp
            }, (ctx, n) => {
              ctx.write(true, `$runtime.selectOption(${n.el}, () => (${n.value}));`);
            })
          }
        }

        const propList = {
          hidden: true,
          checked: true,
          value: true,
          disabled: true,
          selected: true,
          innerHTML: true,
          innerText: true,
          multiple: node.name == 'select',
          src: true,
          readonly: 'readOnly'
        };

        return {
          bind: xNode('bindAttribute', {
            $wait: ['apply'],
            name,
            exp,
            el
          }, (ctx, data) => {
            if(propList[name]) {
              let propName = propList[name] === true ? name : propList[name];
              if(this.inuse.apply) {
                ctx.writeLine(`$watch(() => (${data.exp}), (value) => {${data.el}.${propName} = value;});`);
              } else {
                ctx.writeLine(`${data.el}.${propName} = ${data.exp};`);
              }
            } else {
              if(this.inuse.apply) {
                ctx.writeLine(`$runtime.bindAttribute(${data.el}, '${data.name}', () => (${data.exp}));`);
              } else {
                ctx.writeLine(`$runtime.bindAttributeBase(${data.el}, '${data.name}', ${data.exp});`);
              }
            }
          })
        };
      }

      if(node.spreading) return node.spreading.push(`${name}: \`${Q(prop.value)}\``);

      element.attributes.push({
        name: prop.name,
        value: prop.value
      });
    }
  }

  function makeifBlock(data, label) {
    const getBlock = b => {
      if(b.singleBlock) {
        return xNode('make-block', {
          block: b.singleBlock
        }, (ctx, n) => {
          ctx.write('() => ');
          ctx.add(n.block);
        });
      }
      return b.block;
    };

    let elseBlock, parts = [];
    data.parts.forEach(part => {
      let rx = part.value.match(/^(#if|:elif|:else\s+if)\s(.*)$/s);
      let exp = rx[2]?.trim();
      assert(exp, 'Wrong binding: ' + part.value);
      this.detectDependency(exp);
      parts.push({
        exp,
        block: getBlock(this.buildBlock(part, { allowSingleBlock: true }))
      });
    });
    if(data.elsePart) elseBlock = getBlock(this.buildBlock({ body: data.elsePart }, { allowSingleBlock: true }));

    return xNode('if:bind', {
      $wait: ['apply'],
      label,
      parts,
      elseBlock
    }, (ctx, n) => {
      if(this.inuse.apply) {
        ctx.write(true, `$runtime.ifBlock(${n.label.name}, `);
      } else {
        ctx.write(true, `$runtime.ifBlockReadOnly(${n.label.name}, `);
      }

      if(n.parts.length == 1) {
        if(n.elseBlock) ctx.write(`() => (${n.parts[0].exp}) ? 0 : 1`);
        else ctx.write(`() => (${n.parts[0].exp}) ? 0 : null`);
        ctx.indent++;
      } else {
        ctx.write(`() => {`);
        ctx.indent++;
        n.parts.forEach((p, i) => {
          ctx.write(true, `if(${p.exp}) return ${i};`);
        });
        if(n.elseBlock) ctx.write(true, `return ${n.parts.length};`);
        ctx.write(true, `}`);
      }
      ctx.write(`, [`);
      n.elseBlock && n.parts.push({ block: n.elseBlock });
      n.parts.forEach((p, i) => {
        if(i) ctx.write(', ');
        ctx.add(p.block);
      });
      ctx.write(']');

      ctx.indent--;
      ctx.write(true);
      if(!n.label.node) ctx.write(', true');
      ctx.write(');', true);
    });
  }

  function makeEachBlock(data, option) {
    this.require('rootCD');

    // #each items as item, index (key)
    let rx = data.value.match(/^#each\s+(.+)\s+as\s+(.+)$/s);
    assert(rx, `Wrong #each expression '${data.value}'`);
    let arrayName = rx[1];
    let right = rx[2];
    let keyName, keyFunction = null;

    // get keyName
    rx = right.match(/^(.*)\s*\(\s*([^()]+)\s*\)\s*$/s);
    if(rx) {
      right = rx[1];
      keyName = rx[2];
    }
    right = right.trim();

    const makeKeyFunction = (keyLink) => {
      keyFunction = xNode('key-function', {
        exp: replaceKeyword(keyName, n => keyLink[n])
      }, (ctx, n) => {
        ctx.write(`($$item, $index) => ${n.exp}`);
      });
    };

    let itemName, indexName = null, blockPrefix = null;
    if(right[0] == '{' || right[0] == '[') {
      let keywords, unwrap;
      try {
        let exp = `[${right}]`;
        let e = parseJS(exp);
        assert(e.ast.elements.length == 1 || e.ast.elements.length == 2);
        itemName = '$$item';

        unwrap = e.build(e.ast.elements[0]);

        if(e.ast.elements.length == 2) {
          let b = e.ast.elements[1];
          assert(b.type == 'Identifier');
          indexName = e.build(b);
        }

        e = parseJS(`(${unwrap} = $$item)`);
        let l = e.ast.left;
        if(l.type == 'ArrayPattern') {
          keywords = l.elements.map(p => p.name);

          if(keyName) {
            let keyLink = {};
            if(indexName) keyLink[indexName] = '$index';
            for(let i in keywords) keyLink[keywords[i]] = `$$item[${i}]`;
            makeKeyFunction(keyLink);
          }
        } else {
          assert(l.type == 'ObjectPattern');
          keywords = l.properties.map(p => p.key.name);

          if(keyName) {
            let keyLink = {};
            if(indexName) keyLink[indexName] = '$index';
            for(let k of keywords) keyLink[k] = `$$item.${k}`;
            makeKeyFunction(keyLink);
          }
        }
      } catch (e) {
        throw new Error('Wrong destructuring in each: ' + data.value);
      }

      blockPrefix = xNode('each:unwrap', {
        unwrap,
        keywords
      }, (ctx, n) => {
        ctx.writeLine(`let ${n.keywords.join(', ')};`);
        ctx.writeLine(`$runtime.prefixPush(() => (${n.unwrap} = $$item));`);
      });
    } else {
      rx = right.trim().split(/\s*\,\s*/);
      assert(rx.length <= 2, `Wrong #each expression '${data.value}'`);
      itemName = rx[0];
      indexName = rx[1] || null;
      if(keyName) {
        if(keyName == itemName) keyFunction = 'noop';
        else {
          let keyLink = { [itemName]: '$$item' };
          if(indexName) keyLink[indexName] = '$index';
          makeKeyFunction(keyLink);
        }
      }
    }
    assert(isSimpleName(itemName), `Wrong name '${itemName}'`);

    let rebind;
    if(!indexName && keyName == itemName) rebind = null;
    else {
      rebind = xNode('rebind', {
        itemName,
        indexName
      }, (ctx, n) => {
        if(n.indexName) ctx.write(`(_${n.itemName}, _${n.indexName}) => {${n.itemName}=_${n.itemName}; ${n.indexName}=_${n.indexName};}`);
        else ctx.write(`(_${n.itemName}) => {${n.itemName}=_${n.itemName};}`);
      });
    }

    let nodeItems = trimEmptyNodes(data.mainBlock);
    if(!nodeItems.length) nodeItems = [data.mainBlock[0]];

    let itemBlock, block = this.buildBlock({ body: nodeItems }, {
      allowSingleBlock: !blockPrefix,
      each: {
        blockPrefix,
        rebind,
        itemName,
        indexName
      }
    });

    if(block.singleBlock) {
      itemBlock = xNode('each-component', {
        block: block.singleBlock,
        reference: block.reference,
        rebind,
        itemName,
        indexName
      }, (ctx, n) => {
        ctx.write(`$runtime.makeEachSingleBlock((${n.itemName}`);
        if (n.indexName) ctx.write(`, ${n.indexName}`);
        ctx.write(') => [');
        ctx.indent++;
        ctx.write(true);
        if (n.rebind) ctx.add(n.rebind);
        else ctx.write('null');
        ctx.write(',', true);
        if (n.reference) {
          ctx.write(true, `(${n.reference} = `);
          ctx.add(n.block);
          ctx.write(')', true);
        } else {
          ctx.add(n.block);
        }
        ctx.indent--;
        ctx.write(true, '])');
      });
    } else itemBlock = block.block;

    let elseBlock = null;
    if(data.elseBlock) {
      let block = this.buildBlock({ body: data.elseBlock }, {
        allowSingleBlock: false
      });
      elseBlock = block.block;
    }

    const source = xNode('each', {
      keyFunction,
      block: itemBlock,
      elseBlock,
      label: option.label,
      onlyChild: option.onlyChild
    }, (ctx, n) => {
      let el = n.onlyChild ? n.label : n.label.name;
      let mode = 0;
      if(n.onlyChild) mode = 1;
      else if(!n.label.node) mode = 2;
      ctx.writeLine(`$runtime.$$eachBlock(${el}, ${mode}, () => (${arrayName}),`);
      ctx.indent++;
      ctx.write(true);
      if(n.keyFunction === 'noop') ctx.write('$runtime.noop');
      else if(n.keyFunction) ctx.add(n.keyFunction);
      else ctx.write('$runtime.eachDefaultKey');
      ctx.write(',');
      ctx.add(n.block);
      if(n.elseBlock) {
        ctx.write(', $runtime.makeEachElseBlock(');
        ctx.add(n.elseBlock);
        ctx.write(')');
      }
      ctx.indent--;
      ctx.write(true, ');', true);
    });
    this.detectDependency(arrayName);

    return { source };
  }

  function makeHtmlBlock(exp, label) {
    this.detectDependency(exp);
    return xNode('html-block', {
      $wait: ['apply'],
      label,
      exp
    }, (ctx, n) => {
      if(this.inuse.apply) ctx.write(true, `$runtime.htmlBlock(${n.label.name}, () => (${n.exp}));`);
      else ctx.write(true, `$runtime.htmlBlockStatic(${n.label.name}, ${n.exp});`);
    });
  }

  function makeAwaitBlock(node, label) {
    let valueForThen, exp;

    let rx = node.value.match(/^#await\s+(.+)\s+then\s+(\S+)\s*$/s);
    if(rx) {
      assert(!node.parts.then);
      node.parts.then = node.parts.main;
      node.parts.main = null;
      exp = rx[1];
      valueForThen = rx[2];
    } else {
      rx = node.value.match(/^#await\s+(.+)\s*$/s);
      assert(rx);
      exp = rx[1].trim();
    }

    let keywords = extractKeywords(exp);

    let parts = [null, null, null];
    if(node.parts.main && node.parts.main.length) {
      parts[0] = this.buildBlock({ body: node.parts.main });
    }
    if(node.parts.then && node.parts.then.length) {
      let args = [];
      if(valueForThen) {
        assert(isSimpleName(valueForThen));
        args.push(valueForThen);
      } else {
        let rx = node.parts.thenValue.match(/^[^ ]+\s+(.*)$/s);
        if(rx) {
          assert(isSimpleName(rx[1]));
          args.push(rx[1]);
        }
      }
      parts[1] = this.buildBlock({ body: node.parts.then }, { extraArguments: args });
    }
    if(node.parts.catch && node.parts.catch.length) {
      let args = [];
      let rx = node.parts.catchValue.match(/^[^ ]+\s+(.*)$/s);
      if(rx) {
        assert(isSimpleName(rx[1]));
        args.push(rx[1]);
      }
      parts[2] = this.buildBlock({ body: node.parts.catch }, { extraArguments: args });
    }

    this.detectDependency(exp);
    this.require('apply');

    return xNode('await', {
      label,
      exp,
      parts,
      keywords
    }, (ctx, n) => {
      ctx.write(true, `$runtime.awaitBlock(${n.label.name}, ${n.label.node ? 0 : 1}, () => [${n.keywords.join(', ')}], () => ${n.exp},`);
      ctx.indent++;
      n.parts.forEach((part, index) => {
        if(index) ctx.write(', ');
        if(part) {
          ctx.write(true);
          ctx.add(part.block);
        } else ctx.write('null');
      });
      ctx.indent--;
      ctx.write(');', true);
    });
  }

  function attachSlot(slotName, node) {
    let props = [], staticProps = true, deepChecking = false;

    if(node.attributes && node.attributes.length) {
      node.attributes.forEach(prop => {
        let { name, value, ...ip } = this.inspectProp(prop);
        if(!ip.static) staticProps = false;
        if(ip.mod.deep) deepChecking = true;
        props.push(xNode('slot-prop', {
          name,
          value
        }, (ctx, n) => {
          ctx.write(`${n.name}: ${n.value}`);
        }));
      });
    }

    let placeholder;
    if(node.body?.length) placeholder = this.buildBlock(node).block;

    this.require('$context');
    this.require('$component');

    let result = xNode('slot', {
      $wait: ['apply'],
      name: slotName,
      props,
      staticProps,
      placeholder,
      deepChecking
    }, (ctx, n) => {
      let dynamicProps = this.inuse.apply && !n.staticProps;

      let missed = '', slotName = n.name == 'default' ? 'null' : `'${n.name}'`;
      if(dynamicProps) ctx.write(`$runtime.invokeSlot($component, ${slotName}, $context`);
      else ctx.write(`$runtime.invokeSlotBase($component, ${slotName}, $context`);

      if(n.props.length) {
        if(dynamicProps) ctx.write(', () => ({');
        else ctx.write(', {');
        n.props.forEach((prop, i) => {
          if(i) ctx.write(', ');
          ctx.add(prop);
        });
        ctx.write('}');
        if(dynamicProps) ctx.write(')');
      } else missed += ', null';

      if(n.placeholder) {
        ctx.write(missed, ', ');
        missed = '';
        ctx.add(n.placeholder);
      } else missed += ', null';

      if(dynamicProps) {
        ctx.write(missed, ', ');
        if(n.deepChecking) ctx.write('$runtime.compareDeep');
        else ctx.write('$runtime.keyComparator');
      }
      ctx.write(')');
    });
    return result;
  }

  function makeFragment(node) {
    let rx = node.value.match(/#fragment:(\S+)(.*)$/s);
    assert(rx);
    let name = rx[1], external = false;
    assert(isSimpleName(name));
    let props = rx[2] ? rx[2].trim() : null;
    if(props) {
      props = props.split(/[\s,]+/).filter(p => {
        if(p == 'export') {
          external = true;
          return false;
        }
        return true;
      });
    }

    let block;
    if(node.body && node.body.length) {
      block = this.buildBlock({ body: trimEmptyNodes(node.body) }, { inline: true, context: 'fragment', parentElement: '$dom' });
    } else {
      this.warning(`Empty fragment: '${node.value}'`);
      return xNode('empty-fragment', { name }, (ctx, n) => {
        ctx.writeLine(`function $fragment_${n.name}() {};`);
      });
    }

    if(external) {
      this.require('$component');
      if(props?.length) this.require('apply');
    }

    return xNode('fragment', {
      $wait: [block.source],
      name,
      props,
      external,
      block
    }, (ctx, n) => {
      if(ctx.isEmpty(n.block.source)) {
        ctx.write(true, `let $fragment_${n.name} = $runtime.makeBlock(`);
        ctx.add(n.block.template);
        ctx.write(');');
      } else {
        ctx.write(true, `function $fragment_${n.name}($props, $events={}, $$fragmentSlot) {`);
        ctx.indent++;

        if(n.props?.length) {
          if(this.inuse.apply) {
            ctx.writeLine('let ' + n.props.join(', ') + ';');
            ctx.writeLine(`$runtime.unwrapProps($props, ($$) => ({${n.props.join(', ')}} = $$));`);
          } else {
            ctx.writeLine('let ' + n.props.join(', ') + ';');
            ctx.writeLine(`$props && ({${n.props.join(', ')}} = ($runtime.isFunction($props) ? $props() : $props));`);
          }
        }

        ctx.write(true, 'let $dom = ');
        n.block.template.cloneNode = true;
        ctx.add(n.block.template);
        ctx.write(';');

        ctx.add(n.block.source);
        ctx.write(true, 'return $dom;');

        ctx.indent--;
        ctx.writeLine('}');
      }
      if(n.external) ctx.writeLine(`$runtime.exportFragment($component, '${n.name}', $fragment_${n.name});`);
    });
  }


  function parseAttibutes(attributes) {
    let props = [];
    let events = [];
    let forwardAllEvents;
    let staticProps = true;
    let deepChecking = false;

    attributes.forEach(prop => {
      let name = prop.name;

      if(name[0] == '@' || name.startsWith('on:')) {
        if(name.startsWith('@@')) {
          this.require('$events');
          if(name == '@@') forwardAllEvents = true;
          else {
            name = name.substring(2);
            events.push({
              name,
              callback: `$events.${name}`
            });
          }
          return;
        }

        let { event, fn } = this.makeEventProp(prop);
        events.push({ name: event, fn });
      } else {
        let ip = this.inspectProp(prop);
        props.push(ip);
        if(!ip.static) staticProps = false;
        if(ip.mod.deep) deepChecking = true;
      }
    });

    return { props, events, forwardAllEvents, staticProps, deepChecking };
  }


  function attachFragment(node) {
    let name = node.elArg;
    assert(isSimpleName(name));

    let slot = null;
    if(node.body?.length) slot = this.buildBlock({ body: trimEmptyNodes(node.body) }, { inline: true });

    let { props, events, forwardAllEvents, staticProps } = parseAttibutes.call(this, node.attributes);

    return xNode('call-fragment', {
      $wait: [slot?.source],
      forwardAllEvents,
      name,
      events,
      props,
      slot,
      staticProps
    }, (ctx, n) => {
      ctx.write(`$fragment_${n.name}(`);
      let missed = '';
      ctx.indent++;

      if(n.props.length) {
        ctx.write(true);

        const writeProps = () => ctx.write('{' + n.props.map(p => p.name == p.value ? p.name : `${p.name}: ${p.value}`).join(', ') + '}');

        if(n.staticProps || !this.inuse.apply) writeProps();
        else {
          ctx.write('() => (');
          writeProps();
          ctx.write(')');
        }
      } else missed = 'null';

      if(n.forwardAllEvents) {
        if(n.events.length) this.warning(`Fragment: mixing binding and forwarding is not supported: '${node.openTag}'`);
        ctx.write(missed, ', $events');
        missed = '';
      } else if(n.events.length) {
        ctx.write(missed, ',', true, '{');
        missed = '';

        n.events.forEach((e, i) => {
          if(i) ctx.write(', ');
          if(e.callback) {
            if(e.name == e.callback) ctx.write(e.name);
            ctx.write(`${e.name}: ${e.callback}`);
          } else {
            assert(e.fn);
            ctx.write(`${e.name}: `);
            ctx.add(e.fn);
          }
        });
        ctx.write('}');
      } else missed += ', 0';

      if(n.slot) {
        ctx.write(missed, ',', true);
        missed = '';
        if(ctx.isEmpty(n.slot.source)) {
          ctx.write('$runtime.makeBlock(');
          ctx.add(n.slot.template);
          ctx.write(')');
        } else {
          ctx.write('$runtime.makeBlock(');
          ctx.add(n.slot.template);
          ctx.write(', ($parentElement) => {', true);
          ctx.indent++;
          ctx.add(n.slot.source);
          ctx.indent--;
          ctx.write(true, '})');
        }
      }

      ctx.indent--;
      if(n.props.length || n.events.length || n.slot) ctx.write(true, ')');
      else ctx.write(')');
    });
  }


  function attachFragmentSlot(label) {
    return xNode('fragment-slot', {
      label
    }, (ctx, n) => {
      if(n.label.node) ctx.write(true, `$runtime.insertBlock(${n.label.name}, $$fragmentSlot?.())`);
      else ctx.write(true, `$runtime.addBlock(${n.label.name}, $$fragmentSlot?.())`);
    });
  }


  function attchExportedFragment(node, label, componentName) {
    let data = {
      name: node.elArg,
      componentName,
      label
    };

    let body = trimEmptyNodes(node.body || []);
    if(body.length) {
      data.slot = this.buildBlock({ body }, { inline: true });
      data.$wait = [data.slot.requireCD, data.slot.source];
      // assert(!data.slot.template.svg, 'SVG is not supported for exported fragment');
    }

    let pa = parseAttibutes.call(this, node.attributes);
    data = { ...pa, ...data };

    return xNode('attach-exported-fragment', data, (ctx, n) => {
      if(n.label.node) ctx.write(true, `$runtime.insertBlock(${n.label.name}, $runtime.callExportedFragment($instance_${n.componentName}, '${n.name}'`);
      else ctx.write(true, `$runtime.addBlock(${n.label.name}, $runtime.callExportedFragment($instance_${n.componentName}, '${n.name}'`);
      ctx.indent++;
      let missed = '';

      if(n.slot) {
        ctx.write(',', true);

        if(ctx.isEmpty(n.slot.source)) {
          ctx.write('$runtime.makeBlock(');
          ctx.add(n.slot.template);
          ctx.write(')');
        } else {
          ctx.add(xNode('make-block', {
            $wait: ['apply'],
            template: n.slot.template,
            source: n.slot.source
          }, (ctx, n) => {
            if(this.inuse.apply) ctx.write('$runtime.makeBlockBound(');
            else ctx.write('$runtime.makeBlock(');
            ctx.add(n.template);
            ctx.write(', ($parentElement) => {', true);
            ctx.indent++;
            ctx.add(n.source);
            ctx.indent--;
            ctx.write(true, '})');
          }));
        }
      } else missed = ', null';

      if(n.forwardAllEvents) {
        if(n.events.length) this.warning(`Fragment: mixing binding and forwarding is not supported: '${node.openTag}'`);
        ctx.write(missed, ', $events');
        missed = '';
      } else if(n.events.length) {
        ctx.write(missed, ',', true, '{');
        missed = '';

        n.events.forEach((e, i) => {
          if(i) ctx.write(', ');
          if(e.callback) {
            if(e.name == e.callback) ctx.write(e.name);
            ctx.write(`${e.name}: ${e.callback}`);
          } else {
            assert(e.fn);
            ctx.write(`${e.name}: `);
            ctx.add(e.fn);
          }
        });
        ctx.write('}');
      } else missed += ', null';

      if(n.props.length) {
        if(missed) ctx.write(missed);
        missed = '';
        ctx.write(',', true);

        const writeProps = () => ctx.write('{' + n.props.map(p => p.name == p.value ? p.name : `${p.name}: ${p.value}`).join(', ') + '}');

        if(n.staticProps) writeProps();
        else {
          ctx.write('() => (');
          writeProps();
          ctx.write('), ');
          if(n.deepChecking) ctx.write('$runtime.compareDeep');
          else ctx.write('$runtime.keyComparator');
        }
      }

      ctx.indent--;
      ctx.write('));');
    });
  }

  function attachHead(n) {
    if(n.elArg == 'window' || n.elArg == 'body') {
      let name = 'el' + (this.uniqIndex++);
      let block = this.buildBlock({ body: [n] }, { malinaElement: true, inline: true, oneElement: name, bindAttributes: true });
      if(block.source) {
        return xNode('attach-head', {
          name,
          target: n.elArg,
          source: block.source
        }, (ctx, n) => {
          if(n.target == 'window') ctx.writeLine(`let ${n.name} = window;`);
          else ctx.writeLine(`let ${n.name} = document.body;`);
          ctx.add(n.source);
        });
      }
    } else if(n.elArg == 'head') {
      let title;
      let body = (n.body || []).filter(n => {
        if(n.type == 'text') return false;
        if(n.name == 'title') {
          title = n;
          return false;
        }
        return true;
      });

      let d = {
        $wait: ['apply']
      };
      if(title?.body?.[0]) {
        assert(title.body[0].type == 'text');
        let r = this.parseText(title.body[0].value);
        if(r.parts.some(i => i.type == 'exp')) {
          d.dynTitle = r.result;
        } else {
          d.title = r.result;
        }
      }
      if(body.length) {
        let bb = this.buildBlock({ body }, {
          inline: true,
          template: {
            name: '$parentElement',
            cloneNode: true,
            requireFragment: true
          }
        });
        d.source = bb.source;
        d.template = bb.template;

        this.require('$onDestroy');
      }

      const result = xNode('malina:head', d, (ctx, n) => {
        if(n.title != null) ctx.writeLine(`document.title = ${n.title};`);
        if(n.dynTitle) {
          if(this.inuse.apply) {
            ctx.writeLine(`$watch(() => (${n.dynTitle}), (value) => {document.title = value;});`);
          } else ctx.writeLine(`document.title = ${n.dynTitle};`);
        }

        if(n.template) {
          ctx.writeLine('{');
          ctx.indent++;
          ctx.add(n.template);
          ctx.add(n.source);
          ctx.writeLine('let a=$parentElement.firstChild, b=$parentElement.lastChild;');
          ctx.writeLine('$onDestroy(() => {$runtime.removeElements(a, b)});');
          ctx.writeLine('document.head.appendChild($parentElement);');
          ctx.indent--;
          ctx.writeLine('}');
        }
      });
      return result;
    } else throw 'Wrong tag';
  }

  function inspectProp(prop) {
    let { name, value } = prop, mod = {};
    if(name[0] == '{') {
      assert(!prop.value);
      value = name;
      name = unwrapExp(name);
    } else {
      const p = name.split('|');
      name = p[0];
      p.slice(1).forEach(n => mod[n] = true);
    }

    assert(name.match(/^([\w$_][\w\d$_.\-|]*)$/), `Wrong property: '${name}'`);
    name = toCamelCase(name);
    if(name == 'class') name = '_class';

    let statical = false;

    if(value && value.includes('{')) {
      const pe = parseBinding(value);
      const v = pe.value;
      this.detectDependency(v);

      if(isNumber(v)) {
        value = v;
        statical = true;
      } else if(v == 'true' || v == 'false') {
        value = v;
        statical = true;
      } else if(v == 'null') {
        value = 'null';
        statical = true;
      } else {
        value = v;
      }
    } else if(value) {
      value = '`' + Q(value) + '`';
      statical = true;
    } else {
      value = 'true';
      statical = true;
    }

    return { name, value, static: statical, mod };
  }

  function attachPortal(node) {
    let body = trimEmptyNodes(node.body || []);
    if(!body.length) return;

    let bb = this.buildBlock({ body }, {
      inline: true,
      template: {
        name: '$parentElement',
        cloneNode: true,
        requireFragment: true
      }
    });

    let mount = node.attributes.find(a => a.name == 'mount')?.value;
    if(mount) mount = unwrapExp(mount);

    const result = xNode('portal', {
      mount,
      source: bb.source,
      template: bb.template
    }, (ctx, n) => {
      let label = n.mount || 'document.body';
      ctx.writeLine('{');
      ctx.indent++;
      ctx.add(n.template);
      ctx.add(n.source);
      ctx.writeLine('let $$first = $parentElement.firstChild;');
      ctx.writeLine('let $$last = $parentElement.lastChild;');
      ctx.writeLine(`$runtime.$onDestroy(() => $runtime.removeElements($$first, $$last));`);
      ctx.writeLine(`$runtime.$tick(() => ${label}.appendChild($parentElement));`);
      ctx.indent--;
      ctx.writeLine('}');
    });
    return result;
  }

  function makeEventProp(prop, requireElement) {
    const assert$1 = x => {
      assert(x, `Wrong event prop: ${prop.content}`);
    };

    let name = prop.name;
    if(name.startsWith('@@')) {
      assert$1(!prop.raw);
      return { forward: true, name };
    }
    if(name.startsWith('on:')) name = name.substring(3);
    else {
      assert$1(name[0] == '@');
      name = name.substring(1);
    }

    // parse event
    let modList = name.split('|');
    let event = modList.shift();
    let globalFunction = false;

    let handler, exp;
    if (prop.type == 'attribute') {
      assert$1(!prop.raw);
      handler = event;
      globalFunction = !!this.script.rootFunctions[handler];
    } else if (prop.type == 'word') {
      handler = prop.raw;
      assert$1(detectExpressionType(handler) == 'identifier');
      globalFunction = !!this.script.rootFunctions[handler];
    } else if (prop.type == 'exp') {
      exp = unwrapExp(prop.raw);
      this.detectDependency(exp);
      let type = detectExpressionType(exp);
      if (type == 'identifier') {
        handler = exp;
        exp = null;
      } else if (type?.type == 'function-call') {
        globalFunction = !!this.script.rootFunctions[type.name];
        exp = replaceKeyword(exp, (name) => {
          if(name == '$element') return requireElement();
        }, true);
      } else {
        assert$1(!type);
        exp = replaceKeyword(exp, (name) => {
          if(name == '$element') return requireElement();
        }, true);
        this.require('apply');
      }
    } else assert$1(false);

    // modifiers

    let keyEvent = ['keydown', 'keypress', 'keyup'].includes(event);
    let keyCodes = {
      enter: 'Enter',
      tab: 'Tab',
      esc: 'Escape',
      escape: 'Escape',
      space: ' ',
      up: 'ArrowUp',
      down: 'ArrowDown',
      left: 'ArrowLeft',
      right: 'ArrowRight'
    };

    let mods = [];
    let rootModifier = false;
    modList.forEach(opt => {
      if(opt == 'root') {
        rootModifier = true;
        return;
      }
      if(opt == 'preventDefault' || opt == 'prevent') {
        mods.push('$event.preventDefault();');
        return;
      } else if(opt == 'stopPropagation' || opt == 'stop') {
        mods.push('$event.stopPropagation();');
        return;
      }

      if(keyEvent) {
        if(opt === 'delete') {
          mods.push('if($event.key != \'Backspace\' && $event.key != \'Delete\') return;');
          return;
        }
        let keyCode = keyCodes[opt];
        if(keyCode) {
          mods.push(`if($event.key != '${keyCode}') return;`);
          return;
        }
      }

      if(opt == 'ctrl') { mods.push('if(!$event.ctrlKey) return;'); return; }
      if(opt == 'alt') { mods.push('if(!$event.altKey) return;'); return; }
      if(opt == 'shift') { mods.push('if(!$event.shiftKey) return;'); return; }
      if(opt == 'meta') { mods.push('if(!$event.metaKey) return;'); return; }

      throw 'Wrong modificator: ' + opt;
    });
    mods = mods.join(' ');

    let fn = xNode('event-callback', {
      exp,
      handlerName: handler,
      mods,
      globalFunction
    }, (ctx, n) => {
      if (n.handlerName && !n.mods && (n.globalFunction || !this.inuse.apply)) return ctx.write(n.handlerName);
      ctx.write('($event) => { ');
      if(n.mods) ctx.write(n.mods, ' ');
      if(n.handlerName) ctx.write(`${n.handlerName}($event);`);
      else {
        assert$1(n.exp);
        ctx.write(n.exp);
        if(last(n.exp) != ';') ctx.write(';');
      }
      if(this.inuse.apply && !n.globalFunction) ctx.write(' $$apply();');
      ctx.write('}');
    });

    return { event, fn, rootModifier };
  }

  function makeKeepAlive(node) {
    let block;
    if(node.body && node.body.length) {
      block = this.buildBlock({ body: trimEmptyNodes(node.body) }, { }).block;
    } else {
      this.warning(`Empty block: '${node.value}'`);
      return xNode('empty-block', (ctx, n) => {
        ctx.writeLine(`function $block() {};`);
      });
    }

    let key = null;
    let args = node.value.substr(6);
    if(args) {
      args = parseAttibutes$1(args);
      const a = args.find(a => a.name == 'key');
      if(a) {
        let value = a.value;
        if(value[0] == '{') value = unwrapExp(value);
        key = `() => (${value})`;
      }
    }

    if(!key) key = `() => '$$${this.uniqIndex++}'`;

    this.glob.keepAliveStore.$setValue();

    return xNode('keep-alive', {
      block,
      key
    }, (ctx, n) => {
      ctx.write(`$runtime.keepAlive($$keepAliveStore, ${n.key}, `);
      ctx.add(n.block);
      ctx.write(')');
    });
  }

  const version = '0.8.0-a2';


  async function compile(source, config = {}) {
    config = Object.assign({
      inlineTemplate: false,
      hideLabel: false,
      compact: true,
      autoSubscribe: false,
      cssGenId: null,
      plugins: [],
      debug: true,
      css: true,
      passClass: true,
      immutable: false,
      deepCheckingProps: false,
      useGroupReferencing: true,
      preserveComments: false,
      debugLabel: false,
      autoimport: null
    }, config);

    const ctx = {
      source,
      config,
      uniqIndex: 0,
      warning: config.warning || (w => console.warn('!', w.message || w)),

      buildBlock,
      bindProp,
      makeEachBlock,
      makeifBlock,
      makeComponent,
      makeComponentDyn,
      makeHtmlBlock,
      parseText,
      makeAwaitBlock,
      attachSlot,
      makeFragment,
      attachFragmentSlot,
      attachFragment,
      attchExportedFragment,
      attachHead,
      inspectProp,
      attachPortal,
      makeEventProp,
      makeKeepAlive,
      checkRootName: checkRootName,

      inuse: {},
      glob: {
        $component: xNode('$component', { $hold: ['componentFn'] }),
        rootCD: xNode('root-cd', () => {}),
        apply: xNode('apply', { $hold: ['componentFn'], $wait: ['rootCD'] }),
        componentFn: xNode('componentFn'),
        $onMount: xNode('$onMount'),
        $props: xNode('$props'),
        $attributes: xNode('$attributes')
      },
      require: function(...args) {
        for(let name of args) {
          if (ctx.inuse[name] == null) ctx.inuse[name] = 0;
          ctx.inuse[name]++;
          if (['apply', '$onMount', '$component', 'componentFn', 'rootCD', '$props', '$attributes'].includes(name)) ctx.glob[name].$setValue();
        }
      },
      detectDependency,

      DOM: null,
      parseHTML: function() {
        this.DOM = parseHTML(this.source);
      },
      compactDOM: config.compact == 'full' ? compactFull : compactDOM,

      script: null,
      scriptNodes: null,
      js_parse: parse,
      js_transform: transform,

      styleNodes: null,
      css: null,
      processCSS,

      runtime: {},
      result: null,
      buildRuntime,

      module: {
        top: xNode.block(),
        head: xNode.block(),
        code: xNode.block(),
        body: xNode.block()
      }
    };

    use_context(ctx, setup);

    await hook(ctx, 'dom:before');
    ctx.parseHTML();
    await hook(ctx, 'dom');
    ctx.scriptNodes = [];
    ctx.styleNodes = [];
    ctx.DOM.body = ctx.DOM.body.filter(n => {
      if(n.type == 'script') {
        ctx.scriptNodes.push(n);
        return false;
      }
      if(n.type == 'style') {
        ctx.styleNodes.push(n);
        return false;
      }
      return true;
    });
    await hook(ctx, 'dom:check');
    assert(ctx.scriptNodes.length <= 1, 'Only one script section');
    await hook(ctx, 'dom:compact');
    if(config.compact) ctx.compactDOM();
    await hook(ctx, 'dom:after');

    await hook(ctx, 'js:before');
    ctx.js_parse();
    await hook(ctx, 'js');
    use_context(ctx, ctx.js_transform);
    await hook(ctx, 'js:after');

    await hook(ctx, 'css:before');
    ctx.processCSS();
    if(ctx.css.active()) ctx.css.process(ctx.DOM);
    await hook(ctx, 'css');

    await hook(ctx, 'runtime:before');
    use_context(ctx, ctx.buildRuntime);
    await hook(ctx, 'runtime');

    await hook(ctx, 'build:before');

    use_context(ctx, function() {
      const root = xNode('root', (ctx) => {
        ctx.write(true, `import * as $runtime from 'malinajs/runtime.js';`);
        ctx.write(true, 'import { $watch } from \'malinajs/runtime.js\';');
        ctx.add(this.module.top);
        const componentFn = this.glob.componentFn;

        if(componentFn.self) {
          ctx.write(true, 'const $$selfComponent = ');
          ctx.add(componentFn);
          ctx.write(true, 'export default $$selfComponent;');
        } else {
          ctx.write(true, 'export default ');
          ctx.add(componentFn);
        }
      });

      for (let k in this.glob) resolveDependecies(this.glob[k]);
      this.result = xBuild(root, {warning: this.config.warning});
    });

    await hook(ctx, 'build');
    return ctx;
  }


  async function hook(ctx, name) {
    for(let i = 0; i < ctx.config.plugins.length; i++) {
      const fn = ctx.config.plugins[i][name];
      if(fn) await use_context(ctx, () => fn.call(ctx, ctx));
    }
  }


  function detectDependency(data) {
    const check = name => {
      for (let k of ['$props', '$attributes', '$emit', '$context']) {
        if (name.includes(k)) {
          this.require(k);
          if (k == '$props' || k == '$attributes') this.require('apply');
        }
      }
    };

    if(typeof data == 'string') {
      check(data);
    } else {
      assert(data.parts);

      for(let p of data.parts) {
        if(p.type == 'exp' || p.type == 'js') check(p.value);
      }
    }
  }


  function setup() {
    Object.assign(this.glob.componentFn, {
      $wait: [this.glob.rootCD],
      module: this.module,
      $handler: (ctx, n) => {
        if (this.glob.rootCD.value) n.value = true;

        if (n.value) ctx.write('$runtime.makeComponent($option => {');
        else ctx.write('($option={}) => {', true);

        ctx.indent++;
        ctx.add(this.module.head);
        ctx.add(this.module.code);
        ctx.add(this.module.body);
        ctx.indent--;

        if (n.value) ctx.write(true, '});');
        else ctx.write(true, '}');
      }
    });
  }

  exports.compile = compile;
  exports.get_context = get_context;
  exports.parseAttibutes = parseAttibutes$1;
  exports.parseBinding = parseBinding;
  exports.parseHTML = parseHTML;
  exports.parseText = parseText;
  exports.use_context = use_context;
  exports.version = version;
  exports.xBuild = xBuild;
  exports.xNode = xNode;

}));
