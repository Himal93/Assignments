// Use + as a unary, binary operator and list the possible ways it can be used.
let assignment = "1";
console.log(typeof assignment);
console.log("...after use of + as a unary operator");
assignment = +"1";
console.log(typeof assignment);

let firstName = "Himal";
let lastName = "Rana";
console.log(firstName + " " + lastName);

let a = "4";
let b = "6";
console.log(firstName + a);
console.log(a + b);
a = +a;
b = +b;
console.log(a + b);
console.log((a += 16));

let x = 1;
console.log("x is", x++);
let y = 1;
console.log("y is", ++y);

// Create a JS object that represent a product name(string) and Expiry Date(Data object)
// The object should have a method called isExpired() that: checks if product is expired ans returns true if it is expired else false
let product = {
  ProductName: "Noodles",
  ExpiryDate: "Mar 25 2019",
  amount: Math.ceil(Math.random() * 100),
  isExpired: function () {
    if (new Date(this.ExpiryDate) < new Date()) {
      console.log(`The  ${product.ProductName} is expired`);
    } else {
      console.log(`The  ${product.ProductName} is not expired`);
    }
  },
};
console.log(product);
// let currentDate = new Date();

// var isExpired = (product, currentDate) => {
//   if (new Date(product.ExpiryDate) < currentDate) {
//     console.log(`The  ${product.ProductName} is expired`);
//   } else {
//     console.log(`The  ${product.ProductName} is not expired`);
//   }
// };

// isExpired(product, currentDate);
product.isExpired();

// Create function called checkStock(product) that returns a Promise. This function should simulate checking if a product
// is in stock br using Math.randon() to determine sucess or failure. If value is even, assume product is in stock else not.
// Promise should:
//    Resolve after 2 sec with message:"Product [productname] is available!"
//    Reject after 2 sec with error message: "Sorry, [product name] is out of stock!"
// Use both async/await and the...catch syntax for checking
checkStock = async (product) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (product.amount % 2 === 0) {
        resolve(`Product ${product.ProductName} is avalilabe!`);
      } else {
        reject(new Error(`Sorry, ${product.ProductName} is out of stock!`));
      }
    }, 2000);
  });
};
checkStock(product)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

checkProductStock = async (product) => {
  try {
    const result = await checkStock(product);
    console.log(product);
  } catch (err) {
    console.log(err);
  }
};
