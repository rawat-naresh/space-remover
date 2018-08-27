module.exports = function tiny(string) {
  if (typeof string !== "string") throw new TypeError("Tiny wants a string!");
  return string.replace(/\s/g, "");
};
/*This is just another branch of the space remover
for testing purpose
*/
// this is for testing purpose comment added

//make this somethig else

// i tried making by adding this
