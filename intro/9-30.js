// loops 

for (var i = 0; i < 10; i++) {
    console.log(i);
}

// infinite loop
for(let counter = 0;counter < 5;counter++) {
    console.log('ahh');
}

// while loop
let bool_ = true; 
// setInterval(() => {
//     console.log('out of time');
//     bool_ = false;
// },100)
// while(bool_) {
//     // bool_ = false;
//     console.log('whatever')
// }

var counter = 0;
do {
    console.log(counter);
    counter++;
} while(counter < 10);