// document.write('<ul>');
// document.write('<li>item</li>');
// document.write('<li>item</li>');
// document.write('<li>item</li>');
// document.write('<li>item</li>');
// document.write('<li>item</li>');
// document.write('</ul>');

//////////////////////////////////



// document.write('<ul>');
// for (let i = 0; i < 100; i++) {
//     document.write(`<li> item ${i} </li>`);
// }
// document.write('</ul>');

////////////////////////////////////////////////

// let menu = ['bob', 'lol', 'pab', 'nav', 'fuf'];
// document.write('<ul>');
// for (let i = 0; i < menu.length; i++) {
//     document.write(`<li> ${menu[i]} ${i} </li>`);
// }
// document.write('</ul>');

//////////////////////////////////////////////////////


let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://th.bing.com/th/id/R.681874f6b11f19afbd41507f70f35b7b?rik=cg%2fFMnxvUg9hGA&riu=http%3a%2f%2ffindfood.ru%2fattaches%2fproduct%2fmolochnie%2fmoloko-korovj%d0%b5.jpg&ehk=Wmypysq7vsJXuC4oH6K34c9wIlLdddHNl7yBzQij0bM%3d&risl=&pid=ImgRaw&r=0'
    },
{
        title: 'juice',
        price: 27,
        image: 'https://th.bing.com/th/id/OIP.BXGP0fDS58YgeEv0qW8D0wHaIx?pid=ImgDet&rs=1'
    },
{
        title: 'tomato',
        price: 47,
        image: 'https://th.bing.com/th/id/OIP.BDihZZH52qoMZXSR-PCLBQHaHa?pid=ImgDet&rs=1'
    },
{
        title: 'tea',
        price: 15,
        image: 'https://th.bing.com/th/id/R.68a9c8e6fd97933db8a78983edfcad08?rik=SfzR3ZJWe28wXw&pid=ImgRaw&r=0'
    },

];


        document.write(`<ul>`)

      for (let i = 0; i < products.length; i++) {
          let product = products[i];
          if (product.price > 10) {
              document.write(`<li class="target"> ${product.title} ${product.price} <img src="${product.image}" alt="">  </li>`)
          }

}
     document.write(`</ul>`)
