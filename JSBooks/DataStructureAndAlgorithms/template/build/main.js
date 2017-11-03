console.log('program started...');

const success = Promise.resolve('promise resolved');
success.then(message => {
  console.log(message + 'success ');
}).catch(e => {
  console.log('failed ' + e);
});

