const { all } = require("axios");

const products = [
  { id: 1, name: "Laptop", price: 50000, category: "electronics", inStock: true },
  { id: 2, name: "Mouse", price: 500, category: "electronics", inStock: true },
  { id: 3, name: "Shirt", price: 1200, category: "clothing", inStock: false },
  { id: 4, name: "Shoes", price: 3000, category: "clothing", inStock: true },
  { id: 5, name: "Keyboard", price: 1500, category: "electronics", inStock: false },
];

const names = products.map((product) => product.name);
console.log(names)

const dicountedPrices = products.map((product) => product.price * 0.9);
console.log(dicountedPrices)

const strings = products.map((product) => `${product.name} - ${product.price}`)
console.log(strings) 

const inStockItem = products.filter((product) => product.inStock);
console.log(inStockItem)

const underThousand = products.filter((product) => product.category === "electronics" && product.price > 1000)
console.log(underThousand)

const outStockItem = products.filter((product) => !product.inStock);
console.log(outStockItem)

const outOfStockNames = outStockItem.map((product) => product.name)
console.log(outOfStockNames)


const Shirt = products.find((product) => product.id === 3);
console.log(Shirt);

const expensiveProduct = products.some((product) => product.price > 40000)
console.log(expensiveProduct)

const allProduct = products.every((product) => product.inStock)
console.log(allProduct)

const totalPrice = products.reduce((sum,product) => sum + product.price , 0);
console.log(totalPrice)

const stockedPrice = products.filter((product) => product.inStock)
const reducedPrice = stockedPrice.reduce((sum , product) => sum + product.price , 0);
console.log(reducedPrice)

const namesDestructed = products.map(({name}) => name )
console.log(namesDestructed);

const { name, category } = products[0];
console.log(name, category);

const updatedMouse = {...products[1] , price:600}
console.log(updatedMouse)
console.log(products[1])

const first = [1,2,3,4]
const secomd = [5,6,7,8]
const combined = [...first , ...secomd]
console.log(combined)

const {id , ...others} = products[0]
console.log(others)