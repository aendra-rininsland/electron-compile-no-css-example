(function() {
  new Promise(res => {
    res(true);
  }).then(() => alert('done'));
})();


// Doesn't matter whether it's async or not, I get the same behaviour.

// (async function() {
//   await new Promise(res => {
//     res(true);
//   });
//
//   alert('done');
// })();
//
