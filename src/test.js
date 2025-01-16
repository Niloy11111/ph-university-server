// NODE_ENV=development
// PORT=5000
// DATABASE_URL=mongodb+srv://secret url
// BCRYPT_SALT_ROUNDS=12
// DEFAULT_PASS=phuniversity!@#
// JWT_ACCESS_SECRET=9e2d84fb2ab1c394647ca4e98b5ff8a91a4ca434638fc29a2d5c1e961cf9191c
// JWT_REFRESH_SECRET=4cd25e32d12365b34ebf87287de35b6fcdeeca419d78bbbb8acb337243d8d18566a5fd80e267d780ace852f8c3cf
// 89e5d16565fa113f63ab28d928f10177d8d8

// JWT_ACCESS_EXPIRES_IN=1d
// JWT_REFRESH_EXPIRES_IN=365d
// RESET_PASS_UI_LINK=http://localhost:3000
// CLOUDINARY_API_SECRET=OcyeJCD2SpI5q5V-CPOt2tS2IqA
// CLOUDINARY_API_KEY=817156129884873
// CLOUDINARY_API_NAME=dofbykuhh
// SUPER_ADMIN_PASSWORD=superAdmin12345

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
