var rp = require('request-promise');

const promise = rp('http://nikgrozev.com/2017/10/01/async-await/')
  .then(() => {
    console.log('success 1');
  })
  .catch(e => {
    console.log('failed 1 ');
  });

// 2 
const success = Promise.resolve('promise resolved');
success.then(() => {
  console.log('success 2 ');
}).catch(e => {
  console.log('failed 2 ' + e);
});

// 3
function f() {
  return Promise.resolve('promise resolved')
};

f();  // nothing will happen unless doing the following 
f().then(res => {
  console.log('success 3 ' + res);
});

// 4 ways to create promise
const purchasePhone = new Promise((resolve, reject) => {
  if (true)
    resolve({ model: 'iPhone X', color: 'grey' });
  else
    reject('phone is out of stock');
});

function postToSocialMedia(phone) {
  if (phone)
    return Promise.resolve('bought new ' + phone.color + ' ' + phone.model);
  else
    return Promise.reject('error posting to social media');
}

purchasePhone
  .then(postToSocialMedia)
  .then(message => { console.log('Posted message ' + message); })
  .catch(e => { console.log('error happened ' + e); });



console.log("*** program ended...");

// babel: http://ccoenraets.github.io/es6-tutorial/setup-babel/
// browserify: https://scotch.io/tutorials/getting-started-with-browserify