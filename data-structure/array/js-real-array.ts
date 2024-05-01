// Here is the example of the real array in JS

const memory8 = new ArrayBuffer(10);

// contiguous chunk of memory 10x1byte
console.log(memory8); //<00 00 00 00 00 00 00 00 00 00>

// creating 8 bit array using the piece of memory created earlier
const array8 = new Uint8Array(memory8);

array8[1] = 9;

//second element was changed
console.log(memory8); //<00 09 00 00 00 00 00 00 00 00>

// creating 16 bit array using the piece of memory created earlier
const array16 = new Uint16Array(memory8);

array16[1] = 511;

//3rd and 4th element were changed
console.log(memory8); //<00 09 ff 01 00 00 00 00 00 00>
