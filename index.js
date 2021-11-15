const emoji = require('node-emoji');
const plist = require('plist');

const data =  Object.entries(emoji.emoji).map(([code, em]) => { return { phrase: em, shortcut: `:${code}:` }; });
const output = plist.build(data);
console.log(output);

