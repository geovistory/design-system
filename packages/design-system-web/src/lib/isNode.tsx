// test if we are in Node environment (assuming that global scope is bound to "global")
export const isNode = new Function('try {return this===global && (this.process.title==="node" || this.process.browser===false);}catch(e){return false;}');
