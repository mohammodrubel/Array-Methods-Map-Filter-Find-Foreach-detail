
// array map find forEach function 

const myObject = [
    {name:'laptop',price:34543,brand:'hp',color:'black'},
    {name:'mobile',price:70000,brand:'OnPlus',color:'Golden'},
    {name:'Camara',price:80000,brand:'canon',color:'gry'},
    {name:'watch',price:9000,brand:'casio',color:'yellow'},
    {name:'computer',price:100000,brand:'custom',color:'black'}
]
    // map function implement 
const myProduct = myObject.map(product => product.name)
console.log(myProduct)
const productPrice = myObject.map(productPriceAmount => productPriceAmount.price)
console.log(productPrice)

    // ForEach function implement 
    // ফরইচ ফাংশনে যেহেতু রিটার্ন করবো না তাই আমরা ফরইচ এর মদ্ধে কনসল করে দেখাইছি তাই ভেরিয়েবল ডিক্লিয়ার করার দরকার হয় নাই 
myObject.forEach(singleProduct => console.log(singleProduct))
myObject.forEach(singleProduct => console.log(singleProduct.color))
myObject.forEach(singleProduct => {
    console.log(singleProduct.price)
})

    // Felter function implement 
// আমরা ফিল্টার এর মাধ্যমে একটা এরে পাবো , এবং একটা শর্ত দিবো যে ৭০ হাজার এর নিচের প্রাইজ গুলি কে আমরা দেখতে চাই 
// সে ক্ষেত্রে আমরা একটা ফিল্টার লুপ চালিয়ে দেখতে পারি যেমণ 

const myPersonalProduct = myObject.filter(myFelter => myFelter.price > 70000 )
console.log(myPersonalProduct)

// আমরা কোনো একটা অক্ষর দিয়ে ও ফিল্টার করতে পারি যেমন 
const needProduct = myObject.filter(product => product.name.includes('c'))
console.log(needProduct)


    // find function implement 
// ফাইন্ড এবং ফিল্টারের মদ্ধে একটু ডিফারেন্স আছে যেমন ফাইন্ড এর মদ্ধে যদি কিছু ম্যাচ করে তাহলে প্রথম টা দিয়ে দিবে 
const spicalName = myObject.find(product => product.name.includes('c'))
console.log(spicalName)