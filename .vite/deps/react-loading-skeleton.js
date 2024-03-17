"use client";
import {
  require_react
} from "./chunk-FQO5W7GE.js";
import {
  __toESM
} from "./chunk-ZS7NZCD4.js";

// node_modules/react-loading-skeleton/dist/index.js
var import_react = __toESM(require_react());
var SkeletonThemeContext = import_react.default.createContext({});
var defaultEnableAnimation = true;
function styleOptionsToCssProperties({ baseColor, highlightColor, width, height, borderRadius, circle, direction, duration, enableAnimation = defaultEnableAnimation }) {
  const style = {};
  if (direction === "rtl")
    style["--animation-direction"] = "reverse";
  if (typeof duration === "number")
    style["--animation-duration"] = `${duration}s`;
  if (!enableAnimation)
    style["--pseudo-element-display"] = "none";
  if (typeof width === "string" || typeof width === "number")
    style.width = width;
  if (typeof height === "string" || typeof height === "number")
    style.height = height;
  if (typeof borderRadius === "string" || typeof borderRadius === "number")
    style.borderRadius = borderRadius;
  if (circle)
    style.borderRadius = "50%";
  if (typeof baseColor !== "undefined")
    style["--base-color"] = baseColor;
  if (typeof highlightColor !== "undefined")
    style["--highlight-color"] = highlightColor;
  return style;
}
function Skeleton({ count = 1, wrapper: Wrapper, className: customClassName, containerClassName, containerTestId, circle = false, style: styleProp, ...originalPropsStyleOptions }) {
  var _a, _b, _c;
  const contextStyleOptions = import_react.default.useContext(SkeletonThemeContext);
  const propsStyleOptions = { ...originalPropsStyleOptions };
  for (const [key, value] of Object.entries(originalPropsStyleOptions)) {
    if (typeof value === "undefined") {
      delete propsStyleOptions[key];
    }
  }
  const styleOptions = {
    ...contextStyleOptions,
    ...propsStyleOptions,
    circle
  };
  const style = {
    ...styleProp,
    ...styleOptionsToCssProperties(styleOptions)
  };
  let className = "react-loading-skeleton";
  if (customClassName)
    className += ` ${customClassName}`;
  const inline = (_a = styleOptions.inline) !== null && _a !== void 0 ? _a : false;
  const elements = [];
  const countCeil = Math.ceil(count);
  for (let i = 0; i < countCeil; i++) {
    let thisStyle = style;
    if (countCeil > count && i === countCeil - 1) {
      const width = (_b = thisStyle.width) !== null && _b !== void 0 ? _b : "100%";
      const fractionalPart = count % 1;
      const fractionalWidth = typeof width === "number" ? width * fractionalPart : `calc(${width} * ${fractionalPart})`;
      thisStyle = { ...thisStyle, width: fractionalWidth };
    }
    const skeletonSpan = import_react.default.createElement("span", { className, style: thisStyle, key: i }, "‌");
    if (inline) {
      elements.push(skeletonSpan);
    } else {
      elements.push(import_react.default.createElement(
        import_react.default.Fragment,
        { key: i },
        skeletonSpan,
        import_react.default.createElement("br", null)
      ));
    }
  }
  return import_react.default.createElement("span", { className: containerClassName, "data-testid": containerTestId, "aria-live": "polite", "aria-busy": (_c = styleOptions.enableAnimation) !== null && _c !== void 0 ? _c : defaultEnableAnimation }, Wrapper ? elements.map((el, i) => import_react.default.createElement(Wrapper, { key: i }, el)) : elements);
}
function SkeletonTheme({ children, ...styleOptions }) {
  return import_react.default.createElement(SkeletonThemeContext.Provider, { value: styleOptions }, children);
}
export {
  SkeletonTheme,
  Skeleton as default
};
//# sourceMappingURL=react-loading-skeleton.js.map
