let url = "http://numbersapi.com/";
num = 12;

// #1
async function first() {
  let data = await $.getJSON(`${url}${num}?json`);
  console.log(data);
}
first();


// #2
const nums = [8, 12, 22, 25, 14];
async function part2() {
  let data = await $.getJSON(`${url}${nums}?json`);
  console.log(data);
}
part2();


// nums.forEach(num => {
//   $.getJSON(`${url}${num}?json`).then(data => {
//     $("body").append(`<p>${data.text}</p>`);
//   });
// });


// #3

async function part3() {
  let facts = await Promise.all(
    Array.from({ length: 4 }, () => $.getJSON(`${url}${num}?json`))
  );
  // once promise is fulfilled, then v
  facts.forEach(data => {
    $('body').append(`<p>${data.text}</p>`);
  });
}
part3();



// Promise.all(
//   Array.from({ length: 4 }, () => {
//     return $.getJSON(`${url}${num}?json`);
//   })
// ).then(facts => {
//   facts.forEach(data => $("ul").append(`<li>${data.text}</li>`));
// });
