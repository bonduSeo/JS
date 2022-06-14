const obj = {
  a: 1,
  b: 2,
  e: 3,
};

for (const key in obj) {
  console.log(key);
}

for (const key in obj) {
  console.log(obj[key]);
}
