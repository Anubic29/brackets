module.exports = function check(str, bracketsConfig) {
  closes = '';
  str.split('').some(sym => {
    const pos = bracketsConfig.find((arr, index) => {
      if (arr.includes(sym)) return arr;
    })
    if (pos !== undefined) {
      if (sym === pos[0]) {
        if (sym === pos[1]) {
          if (closes.startsWith(sym)) {
            closes = closes.substring(1);
          } else {
            closes = `${pos[1]}${closes}`;
          }
        } else {
          closes = `${pos[1]}${closes}`;
        }
      } else {
        if (closes.startsWith(sym)) {
          closes = closes.substring(1);
        } else {
          closes = `${pos[1]}${closes}`;
        }
      }
    }
  });
  if (closes === '') return true;
  return false;
}
