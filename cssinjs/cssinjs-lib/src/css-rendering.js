let counter = 0;

const css = styles => {
  const classes = {};
  let cssRules = [];

  for (const ruleName in styles) {
    const decl = styles[ruleName];
    let declStr = ``;
    if (typeof decl === "string") {
      declStr = decl;
    } else {
      for (const prop in decl) {
        declStr += `  ${prop}: ${decl[prop]};\n`;
      }
    }

    classes[ruleName] = `${ruleName}-${++counter}`;

    cssRules.push(`\n.${classes[ruleName]} {${declStr}}`);
  }

  const style = document.createElement("style");
  document.head.appendChild(style);
  style.textContent = cssRules.join("\n");

  //cssRules.forEach((ruleStr, index) => {
  //  style.sheet.insertRule(ruleStr, index)
  //})

  return classes;
};

const classes = css({
  cssInJsBtn1: {
    color: "white",
    background: "green",
    padding: "10px 13px"
  },
  cssInJsBtn2: `
    color: green;
    background: white;
    padding: 10px 13px;
  `
});

console.log(classes);

document.body.innerHTML = `
  <button class=${classes.cssInJsBtn1} type="button">Click me 1</button>
  <button class=${classes.cssInJsBtn2} type="button">Click me 2</button>
`;
