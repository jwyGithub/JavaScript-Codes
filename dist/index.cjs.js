var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  default: () => src_default
});
module.exports = __toCommonJS(src_exports);

// src/shared.ts
var import_fs = require("fs");
var import_path = require("path");
var isDir = /* @__PURE__ */ __name((path) => {
  return (0, import_fs.lstatSync)(path).isDirectory();
}, "isDir");
var isFile = /* @__PURE__ */ __name((path) => {
  return (0, import_fs.lstatSync)(path).isFile();
}, "isFile");
var getFiles = /* @__PURE__ */ __name((path) => {
  const dirs = (0, import_fs.readdirSync)(path);
  return dirs.reduce((result, name) => {
    const fullPath = (0, import_path.join)(path, name);
    isFile(fullPath) && result.push({
      fileName: name,
      filePath: fullPath
    });
    return result;
  }, []);
}, "getFiles");
function mergeConfig(source, target) {
  const isObject = /* @__PURE__ */ __name((data) => Object.prototype.toString.call(data) === "[object Object]", "isObject");
  const hasKey = /* @__PURE__ */ __name((data, key) => isObject(data) && Reflect.has(data, key), "hasKey");
  for (const key in target) {
    if (!hasKey(source, key)) {
      source[key] = target[key];
      isObject(target[key]) && mergeConfig(source[key], target[key]);
    } else {
      isObject(target[key]) && mergeConfig(source[key], target[key]);
    }
  }
  return source;
}
__name(mergeConfig, "mergeConfig");
function extract(files, suffixs) {
  return suffixs.reduce((result, suffix) => {
    result[suffix] = files.filter((item) => item.fileName.endsWith(".".concat(suffix)));
    return result;
  }, {});
}
__name(extract, "extract");

// src/config.ts
var import_path2 = require("path");
var PLUGIN_NAME = "vue-cli-plugin-inject-style";
var styleConfig = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: ""
      },
      less: {
        additionalData: ""
      }
    }
  }
};
var getPluginConfig = /* @__PURE__ */ __name((root) => {
  return {
    [PLUGIN_NAME]: {
      path: (0, import_path2.join)(root, "src", "style"),
      suffixs: [
        "scss",
        "less"
      ]
    }
  };
}, "getPluginConfig");

// src/index.ts
function injectStyle(api, options) {
  const { css = {}, pluginOptions = {} } = options;
  const root = api.getCwd();
  const pluginConfig = mergeConfig(pluginOptions, getPluginConfig(root))[PLUGIN_NAME];
  if (!isDir(pluginConfig.path))
    return;
  const files = getFiles(pluginConfig.path);
  const extractStyle = extract(files, pluginConfig.suffixs);
  const cssOptions = mergeConfig(css, styleConfig.css);
  Object.keys(extractStyle).forEach((suffix) => {
    var _a;
    const additionalData = (_a = cssOptions.loaderOptions[suffix].additionalData) != null ? _a : "";
    cssOptions.loaderOptions[suffix].additionalData = extractStyle[suffix].map((item) => '@import "'.concat(item.filePath.replace(/\\/g, "/"), '";')).join("") + "".concat(typeof additionalData === "string" ? additionalData : "");
  });
  options.css = cssOptions;
}
__name(injectStyle, "injectStyle");
var src_default = injectStyle;
