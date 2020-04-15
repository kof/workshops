let counter = 0;

const css = (styles) => {
  const rules = [];
  for (const ruleName in styles) {
    rules.push(`.${ruleName}-${++counter} {
      ${styles[ruleName]}
    }`);
  }
  return rules.join('\n');
};

const cssString = css({
  cssInJsBtn: `
    color: white;
    background: green;
    padding: 10px 13px;
    font-size: 1.2rem;
    border-radius: 7px;
    box-shadow: 0px 4px 5px #666, 2px 6px 10px #999;
  `
});
// console.log(cssString);
