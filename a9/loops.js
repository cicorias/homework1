

console.log('\tFirst loop - simple for');
var maxtimes = 10;

for (var i = 0; i < maxtimes; i++){
  console.log('currently at %d', i);
}

console.log('\tNext loop - while loop')

var y = 0;
while( y < maxtimes) {
  console.log('currently at %d', y);
  y++;
}

console.log('\tNext loop - do loop')
var z = 0;
do {
  console.log('currently at %d', z);
  z++;
} while (z < maxtimes)


console.log('\tNext loop2');
var a1 =  [ "a", "b", "c", "d", "e" ]; 


a1.forEach( function( currentItem, index, theArra){
  console.log('current item %s', currentItem);
  console.log('current index %d', index);
  console.log('the array %d', theArra.length);
})

 