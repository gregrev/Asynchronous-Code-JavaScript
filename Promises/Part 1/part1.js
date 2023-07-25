let url = "http://numbersapi.com/";
num = 10;

// #1
$.getJSON(`${url}${num}?json`).then(data => {
  console.log(data);
});


// #2
let nums = [8, 12, 22, 25, 14];

nums.forEach(num => {
  $.getJSON(`${url}${num}?json`).then(data => {
    $("body").append(`<p>${data.text}</p>`);
  });
});


// #3
Promise.all(
  Array.from({ length: 4 }, () => {
    return $.getJSON(`${url}${num}?json`);
  })
).then(facts => {
  facts.forEach(data => $("ul").append(`<li>${data.text}</li>`));
});
