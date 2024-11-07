
// 1. შექმენით რიცხვების მასივი და თითოეული რიცხვისთვის foreach ციკლით დაბეჭდეთ მათი კვადრატი.
let nums = [1, 2, 3, 4, 5, 6, 7];

nums.forEach((number, index) => {
    nums[index] = number * number;
});
console.log(nums);
// 2. შექმენით ხილის სახელების მასივი და foreach ციკლით დაბეჭდეთ თითოეული ხილის სახელი.

let fruits = ["apple", "banana", "orange", "mango"];

fruits.forEach((fruit, index) => {
    console.log(fruits[index]);
});
// 3. მასივში არსებული რიცხვების ჯამი გამოიანგარიშეთ foreach ციკლით.

let numbers = [3, 7, 12, 5];
let sum = 0;
numbers.forEach((number, index) => {
    sum += number;
});
console.log(sum);
// 4. შექმენით მასივი სტუდენტების სახელებით და foreach ციკლით დაბეჭდეთ, რომელი სტუდენტი რომელ ადგილზეა.

let names = ["Andria", "Grigoli", "Vaxo", "Gela"];
names.forEach((name, index) => {
    console.log(`${index} = ${name}`);
});
// 5. შექმენით მასივი და მასში ჩაწერეთ მთელი რიცხვები. foreach ციკლით მხოლოდ ლუწი რიცხვები დაბეჭდეთ.

let num = [1, 4, 6, 3, 8, 9];

num.forEach((number, index) => {
    if (number % 2 === 0) {
        console.log(num[index]);
    }
});
// 6. შექმენით რიცხვების მასივი და map მეთოდის საშუალებით მიიღეთ მათი კვადრატების ახალი მასივი.

let array1 = [1, 4, 9, 16];

let map1 = array1.map((number) => number * number);
console.log(map1);
// 7. მასივში ჩაწერეთ სახელები და map მეთოდის გამოყენებით ყოველი სახელი ყველა ასოს პატარა ასოზე გადააკეთეთ.

let array3 = names.map((name) => name.toLowerCase());
console.log(array3.join(" "));
// 8. შექმენით რიცხვების მასივი და map მეთოდით მიიღეთ მასივი, სადაც ყველა რიცხვი 10-ზე გაიზარდა.

let arr4 = num.map((number) => number * 10);
console.log(arr4);
// 9. შექმენით ობიექტების მასივი, სადაც თითოეულ ობიექტში არის სტუდენტის სახელი და ქულა. map მეთოდით მიიღეთ ახალი მასივი მხოლოდ სტუდენტების სახელებით.

let objects = [
    {
        name: "Andria",
        point: 10,
    },
    {
        name: "gio",
        point: 9,
    },
    {
        name: "sandro",
        point: 9,
    },
    {
        name: "gio",
        point: 9,
    },
];

let arr6 = objects.map(
    (object) =>
        // console.log(object.name)
    object.name
);

console.log(arr6);
// 10. შექმენით რიცხვების მასივი და map მეთოდით მიიღეთ მასივი, რომელშიც ყველა ლუწი რიცხვი გაორმაგებულია, ხოლო კენტი არ შეცვლილა.

const arr7 = num.map((number) => {
    if (number % 2 === 0) {
        return number * 2;
    } else {
        return number;
    }
});
console.log(arr7);
// 11. შექმენით რიცხვების მასივი და filter მეთოდით მიიღეთ მხოლოდ ლუწი რიცხვების მასივი.

let even = num.filter((number) => number % 2 === 0);
console.log(even);
// 12. შექმენით სახელების მასივი და filter მეთოდით მხოლოდ ის სახელები ამოიღეთ, რომლებიც 5-ზე მეტ სიმბოლოს შეიცავს.

let nameLength = names.filter((name) => name.length > 5);
console.log(nameLength);
// 13. შექმენით რიცხვების მასივი და filter მეთოდით მხოლოდ დადებითი რიცხვები მიიღეთ.

let numbers2 = [-3, -5, 10, -8, 3, 1, 6];
let positiveNum = numbers2.filter((positive) => positive > 0);

console.log(positiveNum);
// 14. შექმენით ობიექტების მასივი, სადაც თითოეულ ობიექტში არის პროდუქტების სახელები და ფასები. filter მეთოდით მიიღეთ მხოლოდ ის პროდუქტები, რომელთა ფასი 100-ზე მეტია.
let products = [
    {
        ProductsName: "Banana",
        price: 40,
    },
    {
        ProductsName: "Apple",
        price: 50,
    },
    {
        ProductsName: "Toy",
        price: 140,
    },
    {
        ProductsName: "Shoes",
        price: 230,
    },
    {
        ProductsName: "Meat",
        price: 110,
    },
];

let newProducts = products.filter((product) => product.price > 100);
console.log(newProducts);
// 15. შექმენით რიცხვების მასივი და filter მეთოდით მიიღეთ ყველა რიცხვი, რომელიც 50-ს აღემატება..
let numbers6 = [12, 67, 69, 55, 3, 2, 99, 24];

let moreThan50 = numbers6.filter((number) => number > 50);
console.log(moreThan50);
// 16. დაწერეთ კოდი, რომელიც while ციკლით 1-დან 10-მდე რიცხვებს დაბეჭდავს.

let numberWhile = 0;
while (numberWhile < 10) {
    numberWhile++;
    console.log(numberWhile);
}
// 17. დაწერეთ პროგრამა, რომელიც while ციკლით მასივში არსებული რიცხვების ჯამს გამოიანგარიშებს.

let num10 = [10, 45, 34, 65, 78];

let i = 0;
let s = 0;

while (i < num10.length) {
    s += num10[i];
    i++;
}
console.log(s);
// 18. შექმენით ცვლადი რიცხვით 1 და while ციკლით იმატეთ 2-ით, სანამ რიცხვი არ მიაღწევს 20-ს.

let o = 1;
while (o < 20) {
    o += 2;
}
console.log(o);

// 19. დაწერეთ პროგრამა, რომელიც while ციკლით რიცხვებს დაბეჭდავს 20-დან 10-მდე დაღმავალი თანმიმდევრობით.
let t = 20;
while (t >= 10) {
    console.log(t);
    t--;
}
// 20. დაწერეთ პროგრამა, რომელიც while ციკლით მასივში ყველა ობიექტს გამოიკვლევს და თითოეული მათგანის სახელს დაბეჭდავს.
let j = 0;
let arr87 = ["gio" , "niki" , "vaxo" , "zura"]

while(j < arr87.length){
    console.log(arr87[j])
    j++
}