let counter = 0;

const css = (styles) => {
  const rules = [];
  for (const ruleName in styles) {
    const decl = styles[ruleName];
    let declStr = ``;
    if (typeof decl === 'string') {
      declStr = decl;
    } else {
      for (const prop in decl) {
        const value = decl[prop];
        declStr += `  ${prop}: ${value};\n`;
      }
    }
    rules.push(`
      .${ruleName}-${++counter} {
        ${declStr}
      }`);
  }
  return rules.join('\n');
};

const cssString = css({
  cssInJsBtn1: {
    color: 'white',
    background: 'green',
    padding: '10px 13px'
  },
  cssInJsBtn2: `
    color: green;
    background: white;
    padding: 10px 13px;
  `
});

// console.log(cssString);
