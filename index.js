
module.exports = function(from, to, step, inclusive){
  var ret = [];
  if (!(typeof step == "number")) {
    inclusive = step;
    to < from ? step = -1 : step = 1;
  };
  step = step || 1;
  var reverse = step < 0;
  if (inclusive) {
    reverse ? to-- : to++;
  }

  for (var n = from; ((!reverse && n < to) || (reverse && n > to )); n=n+step) {
    ret.push(n);
  }

  return ret;
}