// September 28th 2020 

var collection = [];
console.log(collection.length);

collection = [0,1,1,2,3,5,8];
collection = ['String',0,false,true,undefined,null,'whatever'];
console.log(collection);


collection = [
    function (a,b) {
        return a + b
    },
    'hello world',
    {
        akey: "value",
        aFunction: function(a,b) {
            return a - b
        }
    }
];

collection = [1,2,3];
collection[0] = 19;
console.log(collection);
var tuna = collection[0];
tuna = 10;
console.log(collection[0])

var name = {
    firstName: "Austin",
    lastName: "Wilson"
}

console.log(name.firstName)
console.log(name["firstName"])
collection.push(name)

var power_puff_girls = ["Bubbles","Buttercup","Blossom"];

power_puff_girls.map(element => element.replace("B","P"));

// for(let i=0;i < power_puff_girls.length; i++) {
//     power_puff_girls[i] = power_puff_girls[i].replace("B","P")
// }

console.log(power_puff_girls)