const a = 'IMG_E1234.jpg'
const a2 = 'IMG_2345.jpg'
if(a.match('E')){
    console.log('right');
} else {
    console.log('wrong');
}
if(a2.match('E')){
    console.log('right');
} else {
    console.log('wrong');
}


const b = a.split('E');
const c = b.join('')
console.log(c);