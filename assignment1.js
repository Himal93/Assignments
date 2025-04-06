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
let product = {
  ProductName: "Noodles",
  ExpiryDate: "Mar 25 2019",
  amount: Math.ceil(Math.random() * 100),
};
console.log(product);
let currentDate = new Date();

var isExpired = (product, currentDate) => {
  if (new Date(product.ExpiryDate) < currentDate) {
    console.log(`The  ${product.ProductName} is expired`);
  } else {
    console.log(`The  ${product.ProductName} is not expired`);
  }
};

isExpired(product, currentDate);

// Create function called checkStock(product) that returns a Promise
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
