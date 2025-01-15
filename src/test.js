// async function fetchData() {
//   return 'Data loaded';
// }

// Promise.resolve(fetchData()).then((res) => console.log(res));

const payload = {
  name,
  gender: 'male',
  address: 'feni',
};

const { name, ...remaining } = payload;

const modifiedUpdatedData = { ...remaining };

// const name = {
//   firstName: 'x',
//   middleName: 'y',
//   lastName: 'z',
// };

for (const [key, value] of Object.entries(name)) {
  modifiedUpdatedData[`name.${key}`] = value;
}

const course = {
  classTest1: 18,
  midTerm: 45,
  classTest2: 19,
  finalTerm: 80,
};

console.log({ ...course });
