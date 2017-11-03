console.log('program started...');

const success = Promise.resolve('promise');
success.then(message => {
  console.log(message + ' resolved successfully ');
}).catch(e => {
  console.log(' failed ro resolve' + e);
});

