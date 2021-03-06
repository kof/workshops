let counter = 0;

const css = (styles) => {
  const rules = [];
  for (const ruleName in styles) {
    const decl = styles[ruleName];
    let declStr = ``;
    for (const prop in decl) {
      const value = decl[prop];
      declStr += `  ${prop}: ${value};\n`;
    }
    rules.push(`.${ruleName}-${++counter} {
${declStr}}`);
  }
  return rules.join('\n');
};

const cssString = css({
  cssInJsBtn: {
    color: 'white',
    background: 'green',
    padding: '10px 13px',
    fontSize: '1.2rem',
    borderRadius: '7px',
    boxShadow: '0px 4px 5px #666, 2px 6px 10px #999'
  }
});

//console.log(cssString);
