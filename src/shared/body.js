const cache = new Map();
const elements = [
  {
    selector: "body",
    property: "paddingRight",
  },
  {
    selector: ".nav-toggle",
    property: "marginRight",
  },
  {
    selector: ".kds-header__wrap > .l-container--section", // announcement bar
    property: "paddingRight",
  },
];

function setStyle(value) {
  elements.forEach(({ selector, property, negative }) => {
    if (!cache.has(selector)) {
      const element = document.querySelector(selector);
      if (!element) {
        return;
      }
      cache.set(selector, element);
    }
    cache.get(selector).style[property] = `${
      value && negative ? "-" : ""
    }${value}`;
  });
}

export default {
  lock() {
    setStyle(`${window.innerWidth - document.body.offsetWidth}px`);
    document.documentElement.classList.add("overlay-open");
  },

  reset() {
    setStyle("");
    requestAnimationFrame(() => {
      document.documentElement.classList.remove("overlay-open");
    });
  },
};
