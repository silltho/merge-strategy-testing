import React from 'react';

const Component1 = () => {
  console.log("LOG Component1");
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", null, "test"));
};

const Component2 = () => {
  console.log("LOG Component2");
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", null, "Component2"), /* @__PURE__ */ React.createElement(Component1, null));
};

export { Component2 };
