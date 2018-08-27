module.exports = function tiny(string) {
  if (typeof string !== "string") throw new TypeError("Tiny wants a string!");
  return string.replace(/\s/g, "");
};

//this is another modification
/**
 * hi this
 * is
 * another modigfication
 * 
 * 
 * 
 * thi sis akdfhdlksf
 * adfgdg
 */

