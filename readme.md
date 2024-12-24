#### Module-8 project setup note dd

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
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { UserService } from './user.service';
const createStudent = catchAsync(async (req, res, next) => {
  //creating schema validation with zod

  const { password, student: studentData } = req.body;

  //data validation using joi
  // const { error, value } = studentValidationSchema.validate(studentData);

  // const result = await StudentServices.createStudentIntoDB(studentData);

  // if (error) {
  //   res.status(500).json({
  //     success: false,
  //     message: 'something wrong',
  //     error,
  //   });
  // }

  //data validation using zod
  //   const zodparsedData = studentValidationSchema.parse(studentData);

  const result = await UserService.createStudentIntoDB(password, studentData);

  // res.status(200).json({
  //   success: true,
  //   message: 'student is created',
  //   data: result,
  // });
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student created successfully',
    data: result,
  });
});

export const UserControllers = {
  createStudent,
};


import config from '../../config';
import { TStudent } from '../student/student.interface';
import { Student } from '../student/student.model';
import { TUser } from './user.interface';
import { User } from './user.model';

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  // if (await Student.isUserExists(studentData.id)) {
  //   throw new Error('User already exists');
  // }
  //create a user object
  const userData: Partial<TUser> = {};

  //if password is not given, use default password
  userData.password = password || (config.default_password as string);

  //set student role
  userData.role = 'student';

  // set manually generated id
  userData.id = '2030100001';

  //create a user
  const newUser = await User.create(userData); // built in static method

  //create a student
  if (Object.keys(newUser).length) {
    //set id , _id as user
    studentData.id = newUser.id;
    studentData.user = newUser._id; // reference _id

    const newStudent = await Student.create(studentData);
    return newStudent;
  }

  // const student = new Student(studentData); // create an instance
  // if (await student.isUserExists(studentData.id)) {
  //   throw new Error('User already exists');
  // }
  // const result = await student.save(); //built in instance method
};

export const UserService = {
  createStudentIntoDB,
};

```

<!-- video 17-10 and 17-11 is about what ? -->
<!--
 when user changed password then we should not give access to use the previously created token.we should create new valid token for that user.this is doing in 10,11 video-
 note : i can forget thats why i wrote it, i skip fast these 2 videos.
 to do like Mezba vai -
 - first: remove all admins,user,students,faculties from DB
 - second : create a admin and acess a get route
 - third : update password and see yet you can get that get routes data ,it should not be
 -- fourth - thats why all the code is done in 10,11 videos
 -->
