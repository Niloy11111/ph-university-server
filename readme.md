<<<<<<< HEAD
#### these are for disconnect to github and disconnect vercel if you are willing to work as a new file

```javascript
### rm -rf .git
### rm -rf .vercel
```

#### Module-8 project setup note
=======
#### Module-8 project setup note dd
>>>>>>> 6561ed4e2ef4536474fbf13b5252408f71513d4f

#### First command

```javascript
npm init -y
```

#### 2nd command

```javascript
npm install express
```

#### 3rd command

```javascript
npm install mongoose --save
```

#### 4th command

```javascript
npm install typescript --save-dev
```

#### 4th command

```javascript
npm i cors
npm i dotenv
```

#### 5th command

```javascript
tsc - init;
```

#### make rootDir ./src and outDir ./dist

```javascript
    "rootDir": "./src",
    "outDir": "./dist",
```

#### then make the sripts with tsc and run npm run build to make copy of ts file to js in dist folder

```javascript
  "scripts": {
    "build": "tsc"
  },
  npm run build
```

#### after completing some task

```javascript
npm i --save-dev @types/express
npm i --save-dev @types/cors
```

#### in tsconfig.json

```javascript
 "include": ["src"], // which files to compile
  "exclude": ["node_modules"], // which files to skip
```

#### from typescript eslint blog

```javascript
npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev
```

```javascript
npx eslint --init
```

```javascript
npm i -D eslint@9.14.0
```

```javascript
npm i -D --exact prettier
```

#### to not confict in eslint and prettier

```javascript
npm install --save-dev eslint-config-prettier
```

#### createStudent controller from module-9 , i save it for better understand of what static and instance methods are

```javascript
//create a user
const newUser = await User.create(userData); // built in static method
const result = await student.save(); //built in instance method
```

```javascript
require('crypto').randomBytes(64).toString('hex') -->

// video 17-10 and 17-11 is about what ? -->

// when user changed password then we should not give access to use the previously created token.we should create new valid token for that user.this is doing in 10,11 video-
// note : i can forget thats why i wrote it, i skip fast these 2 videos.
// to do like Mezba vai -

// - first: remove all admins,user,students,faculties from DB
// - second : create a admin and acess a get route
// - third : update password and see yet you can get that get routes data ,it should not be
//   -- fourth - thats why all the code is done in 10,11 videos

// video 17-13
// we save refresh token in cookies thats why we get
// {
// refreshToken : "ksdjfs... the token" in res.cookies
// }
```
