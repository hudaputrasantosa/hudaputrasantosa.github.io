import {
  require_react_dom
} from "./chunk-PXJLUKTU.js";
import {
  require_react
} from "./chunk-FQO5W7GE.js";
import {
  __toESM
} from "./chunk-ZS7NZCD4.js";

// node_modules/react-medium-image-zoom/dist/index.js
var import_react = __toESM(require_react());
var import_react_dom = __toESM(require_react_dom());
function ICompress() {
  return import_react.default.createElement(
    "svg",
    { "aria-hidden": "true", "data-rmiz-btn-unzoom-icon": true, fill: "currentColor", focusable: "false", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg" },
    import_react.default.createElement("path", { d: "M 14.144531 1.148438 L 9 6.292969 L 9 3 L 8 3 L 8 8 L 13 8 L 13 7 L 9.707031 7 L 14.855469 1.851563 Z M 8 8 L 3 8 L 3 9 L 6.292969 9 L 1.148438 14.144531 L 1.851563 14.855469 L 7 9.707031 L 7 13 L 8 13 Z" })
  );
}
function IEnlarge() {
  return import_react.default.createElement(
    "svg",
    { "aria-hidden": "true", "data-rmiz-btn-zoom-icon": true, fill: "currentColor", focusable: "false", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg" },
    import_react.default.createElement("path", { d: "M 9 1 L 9 2 L 12.292969 2 L 2 12.292969 L 2 9 L 1 9 L 1 14 L 6 14 L 6 13 L 2.707031 13 L 13 2.707031 L 13 6 L 14 6 L 14 1 Z" })
  );
}
var testElType = (type, el) => {
  var _a, _b;
  return type === ((_b = (_a = el == null ? void 0 : el.tagName) == null ? void 0 : _a.toUpperCase) == null ? void 0 : _b.call(_a));
};
var testDiv = (el) => testElType("DIV", el) || testElType("SPAN", el);
var testImg = (el) => testElType("IMG", el);
var testImgLoaded = (el) => el.complete && el.naturalHeight !== 0;
var testSvg = (el) => testElType("SVG", el);
var getScaleToWindow = ({ height, offset, width }) => {
  return Math.min((window.innerWidth - offset * 2) / width, (window.innerHeight - offset * 2) / height);
};
var getScaleToWindowMax = ({ containerHeight, containerWidth, offset, targetHeight, targetWidth }) => {
  const scale = getScaleToWindow({
    height: targetHeight,
    offset,
    width: targetWidth
  });
  const ratio = targetWidth > targetHeight ? targetWidth / containerWidth : targetHeight / containerHeight;
  return scale > 1 ? ratio : scale * ratio;
};
var getScale = ({ containerHeight, containerWidth, hasScalableSrc, offset, targetHeight, targetWidth }) => {
  if (!containerHeight || !containerWidth) {
    return 1;
  }
  return !hasScalableSrc && targetHeight && targetWidth ? getScaleToWindowMax({
    containerHeight,
    containerWidth,
    offset,
    targetHeight,
    targetWidth
  }) : getScaleToWindow({
    height: containerHeight,
    offset,
    width: containerWidth
  });
};
var URL_REGEX = /url(?:\(['"]?)(.*?)(?:['"]?\))/;
var getImgSrc = (imgEl) => {
  var _a;
  if (imgEl) {
    if (testImg(imgEl)) {
      return imgEl.currentSrc;
    } else if (testDiv(imgEl)) {
      const bgImg = window.getComputedStyle(imgEl).backgroundImage;
      if (bgImg) {
        return (_a = URL_REGEX.exec(bgImg)) == null ? void 0 : _a[1];
      }
    }
  }
};
var getImgAlt = (imgEl) => {
  if (imgEl) {
    if (testImg(imgEl)) {
      return imgEl.alt ?? void 0;
    } else {
      return imgEl.getAttribute("aria-label") ?? void 0;
    }
  }
};
var getImgRegularStyle = ({ containerHeight, containerLeft, containerTop, containerWidth, hasScalableSrc, offset, targetHeight, targetWidth }) => {
  const scale = getScale({
    containerHeight,
    containerWidth,
    hasScalableSrc,
    offset,
    targetHeight,
    targetWidth
  });
  return {
    top: containerTop,
    left: containerLeft,
    width: containerWidth * scale,
    height: containerHeight * scale,
    transform: `translate(0,0) scale(${1 / scale})`
  };
};
var parsePosition = ({ position, relativeNum }) => {
  const positionNum = parseFloat(position);
  return position.endsWith("%") ? relativeNum * positionNum / 100 : positionNum;
};
var getImgObjectFitStyle = ({ containerHeight, containerLeft, containerTop, containerWidth, hasScalableSrc, objectFit, objectPosition, offset, targetHeight, targetWidth }) => {
  if (objectFit === "scale-down") {
    if (targetWidth <= containerWidth && targetHeight <= containerHeight) {
      objectFit = "none";
    } else {
      objectFit = "contain";
    }
  }
  if (objectFit === "cover" || objectFit === "contain") {
    const widthRatio = containerWidth / targetWidth;
    const heightRatio = containerHeight / targetHeight;
    const ratio = objectFit === "cover" ? Math.max(widthRatio, heightRatio) : Math.min(widthRatio, heightRatio);
    const [posLeft = "50%", posTop = "50%"] = objectPosition.split(" ");
    const posX = parsePosition({ position: posLeft, relativeNum: containerWidth - targetWidth * ratio });
    const posY = parsePosition({ position: posTop, relativeNum: containerHeight - targetHeight * ratio });
    const scale = getScale({
      containerHeight: targetHeight * ratio,
      containerWidth: targetWidth * ratio,
      hasScalableSrc,
      offset,
      targetHeight,
      targetWidth
    });
    return {
      top: containerTop + posY,
      left: containerLeft + posX,
      width: targetWidth * ratio * scale,
      height: targetHeight * ratio * scale,
      transform: `translate(0,0) scale(${1 / scale})`
    };
  } else if (objectFit === "none") {
    const [posLeft = "50%", posTop = "50%"] = objectPosition.split(" ");
    const posX = parsePosition({ position: posLeft, relativeNum: containerWidth - targetWidth });
    const posY = parsePosition({ position: posTop, relativeNum: containerHeight - targetHeight });
    const scale = getScale({
      containerHeight: targetHeight,
      containerWidth: targetWidth,
      hasScalableSrc,
      offset,
      targetHeight,
      targetWidth
    });
    return {
      top: containerTop + posY,
      left: containerLeft + posX,
      width: targetWidth * scale,
      height: targetHeight * scale,
      transform: `translate(0,0) scale(${1 / scale})`
    };
  } else if (objectFit === "fill") {
    const widthRatio = containerWidth / targetWidth;
    const heightRatio = containerHeight / targetHeight;
    const ratio = Math.max(widthRatio, heightRatio);
    const scale = getScale({
      containerHeight: targetHeight * ratio,
      containerWidth: targetWidth * ratio,
      hasScalableSrc,
      offset,
      targetHeight,
      targetWidth
    });
    return {
      width: containerWidth * scale,
      height: containerHeight * scale,
      transform: `translate(0,0) scale(${1 / scale})`
    };
  } else {
    return {};
  }
};
var getDivImgStyle = ({ backgroundPosition, backgroundSize, containerHeight, containerLeft, containerTop, containerWidth, hasScalableSrc, offset, targetHeight, targetWidth }) => {
  if (backgroundSize === "cover" || backgroundSize === "contain") {
    const widthRatio = containerWidth / targetWidth;
    const heightRatio = containerHeight / targetHeight;
    const ratio = backgroundSize === "cover" ? Math.max(widthRatio, heightRatio) : Math.min(widthRatio, heightRatio);
    const [posLeft = "50%", posTop = "50%"] = backgroundPosition.split(" ");
    const posX = parsePosition({ position: posLeft, relativeNum: containerWidth - targetWidth * ratio });
    const posY = parsePosition({ position: posTop, relativeNum: containerHeight - targetHeight * ratio });
    const scale = getScale({
      containerHeight: targetHeight * ratio,
      containerWidth: targetWidth * ratio,
      hasScalableSrc,
      offset,
      targetHeight,
      targetWidth
    });
    return {
      top: containerTop + posY,
      left: containerLeft + posX,
      width: targetWidth * ratio * scale,
      height: targetHeight * ratio * scale,
      transform: `translate(0,0) scale(${1 / scale})`
    };
  } else if (backgroundSize === "auto") {
    const [posLeft = "50%", posTop = "50%"] = backgroundPosition.split(" ");
    const posX = parsePosition({ position: posLeft, relativeNum: containerWidth - targetWidth });
    const posY = parsePosition({ position: posTop, relativeNum: containerHeight - targetHeight });
    const scale = getScale({
      containerHeight: targetHeight,
      containerWidth: targetWidth,
      hasScalableSrc,
      offset,
      targetHeight,
      targetWidth
    });
    return {
      top: containerTop + posY,
      left: containerLeft + posX,
      width: targetWidth * scale,
      height: targetHeight * scale,
      transform: `translate(0,0) scale(${1 / scale})`
    };
  } else {
    const [sizeW = "50%", sizeH = "50%"] = backgroundSize.split(" ");
    const sizeWidth = parsePosition({ position: sizeW, relativeNum: containerWidth });
    const sizeHeight = parsePosition({ position: sizeH, relativeNum: containerHeight });
    const widthRatio = sizeWidth / targetWidth;
    const heightRatio = sizeHeight / targetHeight;
    const ratio = Math.min(widthRatio, heightRatio);
    const [posLeft = "50%", posTop = "50%"] = backgroundPosition.split(" ");
    const posX = parsePosition({ position: posLeft, relativeNum: containerWidth - targetWidth * ratio });
    const posY = parsePosition({ position: posTop, relativeNum: containerHeight - targetHeight * ratio });
    const scale = getScale({
      containerHeight: targetHeight * ratio,
      containerWidth: targetWidth * ratio,
      hasScalableSrc,
      offset,
      targetHeight,
      targetWidth
    });
    return {
      top: containerTop + posY,
      left: containerLeft + posX,
      width: targetWidth * ratio * scale,
      height: targetHeight * ratio * scale,
      transform: `translate(0,0) scale(${1 / scale})`
    };
  }
};
var SRC_SVG_REGEX = /\.svg$/i;
var getStyleModalImg = ({ hasZoomImg, imgSrc, isSvg, isZoomed, loadedImgEl, offset, shouldRefresh, targetEl }) => {
  var _a;
  const hasScalableSrc = isSvg || ((_a = imgSrc == null ? void 0 : imgSrc.slice) == null ? void 0 : _a.call(imgSrc, 0, 18)) === "data:image/svg+xml" || hasZoomImg || !!(imgSrc && SRC_SVG_REGEX.test(imgSrc));
  const imgRect = targetEl.getBoundingClientRect();
  const targetElComputedStyle = window.getComputedStyle(targetEl);
  const isDivImg = loadedImgEl != null && testDiv(targetEl);
  const isImgObjectFit = loadedImgEl != null && !isDivImg;
  const styleImgRegular = getImgRegularStyle({
    containerHeight: imgRect.height,
    containerLeft: imgRect.left,
    containerTop: imgRect.top,
    containerWidth: imgRect.width,
    hasScalableSrc,
    offset,
    targetHeight: (loadedImgEl == null ? void 0 : loadedImgEl.naturalHeight) ?? imgRect.height,
    targetWidth: (loadedImgEl == null ? void 0 : loadedImgEl.naturalWidth) ?? imgRect.width
  });
  const styleImgObjectFit = isImgObjectFit ? getImgObjectFitStyle({
    containerHeight: imgRect.height,
    containerLeft: imgRect.left,
    containerTop: imgRect.top,
    containerWidth: imgRect.width,
    hasScalableSrc,
    objectFit: targetElComputedStyle.objectFit,
    objectPosition: targetElComputedStyle.objectPosition,
    offset,
    targetHeight: loadedImgEl.naturalHeight,
    targetWidth: loadedImgEl.naturalWidth
  }) : void 0;
  const styleDivImg = isDivImg ? getDivImgStyle({
    backgroundPosition: targetElComputedStyle.backgroundPosition,
    backgroundSize: targetElComputedStyle.backgroundSize,
    containerHeight: imgRect.height,
    containerLeft: imgRect.left,
    containerTop: imgRect.top,
    containerWidth: imgRect.width,
    hasScalableSrc,
    offset,
    targetHeight: loadedImgEl.naturalHeight,
    targetWidth: loadedImgEl.naturalWidth
  }) : void 0;
  const style = Object.assign({}, styleImgRegular, styleImgObjectFit, styleDivImg);
  if (isZoomed) {
    const viewportX = window.innerWidth / 2;
    const viewportY = window.innerHeight / 2;
    const childCenterX = parseFloat(String(style.left || 0)) + parseFloat(String(style.width || 0)) / 2;
    const childCenterY = parseFloat(String(style.top || 0)) + parseFloat(String(style.height || 0)) / 2;
    const translateX = viewportX - childCenterX;
    const translateY = viewportY - childCenterY;
    if (shouldRefresh) {
      style.transitionDuration = "0.01ms";
    }
    style.transform = `translate(${translateX}px,${translateY}px) scale(1)`;
  }
  return style;
};
var getStyleGhost = (imgEl) => {
  if (!imgEl) {
    return {};
  }
  if (testSvg(imgEl)) {
    const parentEl = imgEl.parentElement;
    const rect = imgEl.getBoundingClientRect();
    if (parentEl) {
      const parentRect = parentEl.getBoundingClientRect();
      return {
        height: rect.height,
        left: parentRect.left - rect.left,
        top: parentRect.top - rect.top,
        width: rect.width
      };
    } else {
      return {
        height: rect.height,
        left: rect.left,
        width: rect.width,
        top: rect.top
      };
    }
  } else {
    return {
      height: imgEl.offsetHeight,
      left: imgEl.offsetLeft,
      width: imgEl.offsetWidth,
      top: imgEl.offsetTop
    };
  }
};
var IMAGE_QUERY = ["img", "svg", '[role="img"]', "[data-zoom]"].map((x) => `${x}:not([aria-hidden="true"])`).join(",");
var defaultBodyAttrs = {
  overflow: "",
  width: ""
};
function Controlled(props) {
  return import_react.default.createElement(ControlledBase, { ...props });
}
var ControlledBase = class extends import_react.Component {
  constructor() {
    super(...arguments);
    this.state = {
      id: "",
      isZoomImgLoaded: false,
      loadedImgEl: void 0,
      modalState: "UNLOADED",
      shouldRefresh: false
    };
    this.refContent = (0, import_react.createRef)();
    this.refDialog = (0, import_react.createRef)();
    this.refModalContent = (0, import_react.createRef)();
    this.refModalImg = (0, import_react.createRef)();
    this.refWrap = (0, import_react.createRef)();
    this.imgEl = null;
    this.prevBodyAttrs = defaultBodyAttrs;
    this.styleModalImg = {};
    this.getDialogContainer = () => {
      let el = document.querySelector("[data-rmiz-portal]");
      if (el == null) {
        el = document.createElement("div");
        el.setAttribute("data-rmiz-portal", "");
        document.body.appendChild(el);
      }
      return el;
    };
    this.setId = () => {
      const gen4 = () => Math.random().toString(16).slice(-4);
      this.setState({ id: gen4() + gen4() + gen4() });
    };
    this.setAndTrackImg = () => {
      var _a, _b, _c, _d, _e, _f;
      const contentEl = this.refContent.current;
      if (!contentEl)
        return;
      this.imgEl = contentEl.querySelector(IMAGE_QUERY);
      if (this.imgEl) {
        (_b = (_a = this.changeObserver) == null ? void 0 : _a.disconnect) == null ? void 0 : _b.call(_a);
        (_d = (_c = this.imgEl) == null ? void 0 : _c.addEventListener) == null ? void 0 : _d.call(_c, "load", this.handleImgLoad);
        (_f = (_e = this.imgEl) == null ? void 0 : _e.addEventListener) == null ? void 0 : _f.call(_e, "click", this.handleZoom);
        if (!this.state.loadedImgEl) {
          this.handleImgLoad();
        }
        this.imgElObserver = new ResizeObserver((entries) => {
          const entry = entries[0];
          if (entry == null ? void 0 : entry.target) {
            this.imgEl = entry.target;
            this.setState({});
          }
        });
        this.imgElObserver.observe(this.imgEl);
      } else if (!this.changeObserver) {
        this.changeObserver = new MutationObserver(this.setAndTrackImg);
        this.changeObserver.observe(contentEl, { childList: true, subtree: true });
      }
    };
    this.handleIfZoomChanged = (prevIsZoomed) => {
      const { isZoomed } = this.props;
      if (!prevIsZoomed && isZoomed) {
        this.zoom();
      } else if (prevIsZoomed && !isZoomed) {
        this.unzoom();
      }
    };
    this.handleImgLoad = () => {
      const { imgEl } = this;
      const imgSrc = getImgSrc(imgEl);
      if (!imgSrc)
        return;
      const img = new Image();
      if (testImg(imgEl)) {
        img.sizes = imgEl.sizes;
        img.srcset = imgEl.srcset;
      }
      img.src = imgSrc;
      const setLoaded = () => {
        this.setState({ loadedImgEl: img });
      };
      img.decode().then(setLoaded).catch(() => {
        if (testImgLoaded(img)) {
          setLoaded();
          return;
        }
        img.onload = setLoaded;
      });
    };
    this.handleZoom = () => {
      var _a, _b;
      (_b = (_a = this.props).onZoomChange) == null ? void 0 : _b.call(_a, true);
    };
    this.handleUnzoom = () => {
      var _a, _b;
      (_b = (_a = this.props).onZoomChange) == null ? void 0 : _b.call(_a, false);
    };
    this.handleDialogCancel = (e) => {
      e.preventDefault();
    };
    this.handleDialogClick = (e) => {
      if (e.target === this.refModalContent.current || e.target === this.refModalImg.current) {
        this.handleUnzoom();
      }
    };
    this.handleKeyDown = (e) => {
      if (e.key === "Escape" || e.keyCode === 27) {
        e.preventDefault();
        e.stopPropagation();
        this.handleUnzoom();
      }
    };
    this.handleWheel = (e) => {
      if (e.ctrlKey)
        return;
      e.stopPropagation();
      queueMicrotask(() => {
        this.handleUnzoom();
      });
    };
    this.handleTouchStart = (e) => {
      if (e.changedTouches.length === 1 && e.changedTouches[0]) {
        this.touchYStart = e.changedTouches[0].screenY;
      }
    };
    this.handleTouchMove = (e) => {
      if (this.touchYStart != null && e.changedTouches[0]) {
        this.touchYEnd = e.changedTouches[0].screenY;
        const max = Math.max(this.touchYStart, this.touchYEnd);
        const min = Math.min(this.touchYStart, this.touchYEnd);
        const delta = Math.abs(max - min);
        const threshold = 10;
        if (delta > threshold) {
          this.touchYStart = void 0;
          this.touchYEnd = void 0;
          this.handleUnzoom();
        }
      }
    };
    this.handleTouchCancel = () => {
      this.touchYStart = void 0;
      this.touchYEnd = void 0;
    };
    this.handleResize = () => {
      this.setState({ shouldRefresh: true });
    };
    this.zoom = () => {
      var _a, _b, _c, _d;
      this.bodyScrollDisable();
      (_b = (_a = this.refDialog.current) == null ? void 0 : _a.showModal) == null ? void 0 : _b.call(_a);
      this.setState({ modalState: "LOADING" });
      this.loadZoomImg();
      window.addEventListener("wheel", this.handleWheel, { passive: true });
      window.addEventListener("touchstart", this.handleTouchStart, { passive: true });
      window.addEventListener("touchmove", this.handleTouchMove, { passive: true });
      window.addEventListener("touchcancel", this.handleTouchCancel, { passive: true });
      document.addEventListener("keydown", this.handleKeyDown, true);
      (_d = (_c = this.refModalImg.current) == null ? void 0 : _c.addEventListener) == null ? void 0 : _d.call(_c, "transitionend", this.handleZoomEnd, { once: true });
    };
    this.handleZoomEnd = () => {
      setTimeout(() => {
        this.setState({ modalState: "LOADED" });
        window.addEventListener("resize", this.handleResize, { passive: true });
      }, 0);
    };
    this.unzoom = () => {
      var _a, _b;
      this.setState({ modalState: "UNLOADING" });
      window.removeEventListener("wheel", this.handleWheel);
      window.removeEventListener("touchstart", this.handleTouchStart);
      window.removeEventListener("touchmove", this.handleTouchMove);
      window.removeEventListener("touchcancel", this.handleTouchCancel);
      document.removeEventListener("keydown", this.handleKeyDown, true);
      (_b = (_a = this.refModalImg.current) == null ? void 0 : _a.addEventListener) == null ? void 0 : _b.call(_a, "transitionend", this.handleUnzoomEnd, { once: true });
    };
    this.handleUnzoomEnd = () => {
      setTimeout(() => {
        var _a, _b;
        window.removeEventListener("resize", this.handleResize);
        this.setState({
          shouldRefresh: false,
          modalState: "UNLOADED"
        });
        (_b = (_a = this.refDialog.current) == null ? void 0 : _a.close) == null ? void 0 : _b.call(_a);
        this.bodyScrollEnable();
      }, 0);
    };
    this.bodyScrollDisable = () => {
      this.prevBodyAttrs = {
        overflow: document.body.style.overflow,
        width: document.body.style.width
      };
      const clientWidth = document.body.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.width = `${clientWidth}px`;
    };
    this.bodyScrollEnable = () => {
      document.body.style.width = this.prevBodyAttrs.width;
      document.body.style.overflow = this.prevBodyAttrs.overflow;
      this.prevBodyAttrs = defaultBodyAttrs;
    };
    this.loadZoomImg = () => {
      const { props: { zoomImg } } = this;
      const zoomImgSrc = zoomImg == null ? void 0 : zoomImg.src;
      if (zoomImgSrc) {
        const img = new Image();
        img.sizes = (zoomImg == null ? void 0 : zoomImg.sizes) ?? "";
        img.srcset = (zoomImg == null ? void 0 : zoomImg.srcSet) ?? "";
        img.src = zoomImgSrc;
        const setLoaded = () => {
          this.setState({ isZoomImgLoaded: true });
        };
        img.decode().then(setLoaded).catch(() => {
          if (testImgLoaded(img)) {
            setLoaded();
            return;
          }
          img.onload = setLoaded;
        });
      }
    };
    this.UNSAFE_handleSvg = () => {
      var _a, _b, _c, _d, _e;
      const { imgEl, refModalImg, styleModalImg } = this;
      if (testSvg(imgEl)) {
        const tmp = document.createElement("div");
        tmp.innerHTML = imgEl.outerHTML;
        tmp.querySelectorAll("mask[id]").forEach((maskEl) => {
          const newId = maskEl.id + "-zoom";
          tmp.querySelectorAll(`[mask="url(#${maskEl.id})"]`).forEach((maskedEl) => {
            maskedEl.setAttribute("mask", `url(#${newId})`);
          });
          maskEl.id = newId;
        });
        const svg = tmp.firstChild;
        svg.style.width = `${styleModalImg.width || 0}px`;
        svg.style.height = `${styleModalImg.height || 0}px`;
        svg.addEventListener("click", this.handleUnzoom);
        (_c = (_b = (_a = refModalImg.current) == null ? void 0 : _a.firstChild) == null ? void 0 : _b.remove) == null ? void 0 : _c.call(_b);
        (_e = (_d = refModalImg.current) == null ? void 0 : _d.appendChild) == null ? void 0 : _e.call(_d, svg);
      }
    };
  }
  render() {
    const { handleDialogCancel, handleDialogClick, handleUnzoom, handleZoom, imgEl, props: { a11yNameButtonUnzoom, a11yNameButtonZoom, children, classDialog, IconUnzoom, IconZoom, isZoomed, wrapElement: WrapElement, ZoomContent, zoomImg, zoomMargin }, refContent, refDialog, refModalContent, refModalImg, refWrap, state: { id, isZoomImgLoaded, loadedImgEl, modalState, shouldRefresh } } = this;
    const idModal = `rmiz-modal-${id}`;
    const idModalImg = `rmiz-modal-img-${id}`;
    const isDiv = testDiv(imgEl);
    const isImg = testImg(imgEl);
    const isSvg = testSvg(imgEl);
    const imgAlt = getImgAlt(imgEl);
    const imgSrc = getImgSrc(imgEl);
    const imgSizes = isImg ? imgEl.sizes : void 0;
    const imgSrcSet = isImg ? imgEl.srcset : void 0;
    const hasZoomImg = !!(zoomImg == null ? void 0 : zoomImg.src);
    const hasImage = imgEl && (loadedImgEl || isSvg) && window.getComputedStyle(imgEl).display !== "none";
    const labelBtnZoom = imgAlt ? `${a11yNameButtonZoom}: ${imgAlt}` : a11yNameButtonZoom;
    const isModalActive = modalState === "LOADING" || modalState === "LOADED";
    const dataContentState = hasImage ? "found" : "not-found";
    const dataOverlayState = modalState === "UNLOADED" || modalState === "UNLOADING" ? "hidden" : "visible";
    const styleContent = {
      visibility: modalState === "UNLOADED" ? "visible" : "hidden"
    };
    const styleGhost = getStyleGhost(imgEl);
    this.styleModalImg = hasImage ? getStyleModalImg({
      hasZoomImg,
      imgSrc,
      isSvg,
      isZoomed: isZoomed && isModalActive,
      loadedImgEl,
      offset: zoomMargin,
      shouldRefresh,
      targetEl: imgEl
    }) : {};
    let modalContent = null;
    if (hasImage) {
      const modalImg = isImg || isDiv ? import_react.default.createElement("img", { alt: imgAlt, sizes: imgSizes, src: imgSrc, srcSet: imgSrcSet, ...isZoomImgLoaded && modalState === "LOADED" ? zoomImg : {}, "data-rmiz-modal-img": "", height: this.styleModalImg.height || void 0, id: idModalImg, ref: refModalImg, style: this.styleModalImg, width: this.styleModalImg.width || void 0 }) : isSvg ? import_react.default.createElement("div", { "data-rmiz-modal-img": true, ref: refModalImg, style: this.styleModalImg }) : null;
      const modalBtnUnzoom = import_react.default.createElement(
        "button",
        { "aria-label": a11yNameButtonUnzoom, "data-rmiz-btn-unzoom": "", onClick: handleUnzoom, type: "button" },
        import_react.default.createElement(IconUnzoom, null)
      );
      modalContent = ZoomContent ? import_react.default.createElement(ZoomContent, { buttonUnzoom: modalBtnUnzoom, modalState, img: modalImg, onUnzoom: handleUnzoom }) : import_react.default.createElement(
        import_react.default.Fragment,
        null,
        modalImg,
        modalBtnUnzoom
      );
    }
    return import_react.default.createElement(
      WrapElement,
      { "aria-owns": idModal, "data-rmiz": "", ref: refWrap },
      import_react.default.createElement(WrapElement, { "data-rmiz-content": dataContentState, ref: refContent, style: styleContent }, children),
      hasImage && import_react.default.createElement(
        WrapElement,
        { "data-rmiz-ghost": "", style: styleGhost },
        import_react.default.createElement(
          "button",
          { "aria-label": labelBtnZoom, "data-rmiz-btn-zoom": "", onClick: handleZoom, type: "button" },
          import_react.default.createElement(IconZoom, null)
        )
      ),
      hasImage && (0, import_react_dom.createPortal)(import_react.default.createElement(
        "dialog",
        { "aria-labelledby": idModalImg, "aria-modal": "true", className: classDialog, "data-rmiz-modal": "", id: idModal, onClick: handleDialogClick, onClose: handleUnzoom, onCancel: handleDialogCancel, ref: refDialog, role: "dialog" },
        import_react.default.createElement("div", { "data-rmiz-modal-overlay": dataOverlayState }),
        import_react.default.createElement("div", { "data-rmiz-modal-content": "", ref: refModalContent }, modalContent)
      ), this.getDialogContainer())
    );
  }
  componentDidMount() {
    this.setId();
    this.setAndTrackImg();
    this.handleImgLoad();
    this.UNSAFE_handleSvg();
  }
  componentWillUnmount() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
    if (this.state.modalState !== "UNLOADED") {
      this.bodyScrollEnable();
    }
    (_b = (_a = this.changeObserver) == null ? void 0 : _a.disconnect) == null ? void 0 : _b.call(_a);
    (_d = (_c = this.imgElObserver) == null ? void 0 : _c.disconnect) == null ? void 0 : _d.call(_c);
    (_f = (_e = this.imgEl) == null ? void 0 : _e.removeEventListener) == null ? void 0 : _f.call(_e, "load", this.handleImgLoad);
    (_h = (_g = this.imgEl) == null ? void 0 : _g.removeEventListener) == null ? void 0 : _h.call(_g, "click", this.handleZoom);
    (_j = (_i = this.refModalImg.current) == null ? void 0 : _i.removeEventListener) == null ? void 0 : _j.call(_i, "transitionend", this.handleZoomEnd);
    (_l = (_k = this.refModalImg.current) == null ? void 0 : _k.removeEventListener) == null ? void 0 : _l.call(_k, "transitionend", this.handleUnzoomEnd);
    window.removeEventListener("wheel", this.handleWheel);
    window.removeEventListener("touchstart", this.handleTouchStart);
    window.removeEventListener("touchmove", this.handleTouchMove);
    window.removeEventListener("touchcancel", this.handleTouchCancel);
    window.removeEventListener("resize", this.handleResize);
    document.removeEventListener("keydown", this.handleKeyDown, true);
  }
  componentDidUpdate(prevProps) {
    this.UNSAFE_handleSvg();
    this.handleIfZoomChanged(prevProps.isZoomed);
  }
};
ControlledBase.defaultProps = {
  a11yNameButtonUnzoom: "Minimize image",
  a11yNameButtonZoom: "Expand image",
  IconUnzoom: ICompress,
  IconZoom: IEnlarge,
  wrapElement: "div",
  zoomMargin: 0
};
function Uncontrolled(props) {
  const [isZoomed, setIsZoomed] = (0, import_react.useState)(false);
  return import_react.default.createElement(Controlled, { ...props, isZoomed, onZoomChange: setIsZoomed });
}
export {
  Controlled,
  Uncontrolled as default
};
//# sourceMappingURL=react-medium-image-zoom.js.map
