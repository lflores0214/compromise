'use strict';
//
const topk = function(n) {
  //count occurance
  let count = {};
  this.terms.forEach((t) => {
    count[t.normal] = count[t.normal] || 0;
    count[t.normal] += 1;
  });
  //turn into an array
  let all = [];
  Object.keys(count).forEach((k) => {
    all.push({
      term: k,
      count: count[k],
    });
  });
  //add percentage
  all.forEach((o) => {
    o.percent = ((o.count / all.length) * 100).toFixed(2);
  });
  //sort by freq
  all = all.sort((a, b) => {
    if (a.count > b.count) {
      return -1;
    }
    return 1;
  });
  if (n) {
    all = all.splice(0, n);
  }
  return all;
};

module.exports = topk;
