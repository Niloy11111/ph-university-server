### How to use this project to create APIS

### Faculty -> Academic Department

```javascript
ph-local-url="http://localhost:5000/api/v1"
step1 --> create academic faculty by superAdmin
** body = {
    "name" : "Faculty of Programming"
}
** Headers.Authorization = superAdmin Login Token

step2 --> create academic faculty by super Admin
url --> {{ph-local-url}}/academic-departments/create-academic-department
** body = {
    "name" : "Department of Phitron",
    "academicFaculty" : "6787fadd0d054d01a10ac09f" // any academic faculty objectID
}
** Headers.Authorization = superAdmin Login Token

step3 --> create academic semester by super Admin
url --> {{ph-local-url}}/academic-semesters/create-academic-semester
** body = {
  "name": "Autumn",
  "code": "01",
  "year": "2025",
  "startMonth": "January",
  "endMonth": "April"
}

=> to create another semester
** body = {
  "name": "Summer",
  "code": "02",
  "year": "2025",
  "startMonth": "May",
  "endMonth": "August"
}
=> to create another semester
** body ={
  "name": "Fall",
  "code": "03",
  "year": "2025",
  "startMonth": "September",
  "endMonth": "December"
}

** Headers.Authorization = Does not need

step4 --> create Student
url --> {{ph-local-url}}/users/create-student
** form-data -> file = a picture from computer
** form-data -> data = {
    "password" : "student123",
    "student" : {
  "id": "S12345",
  "name": {
    "firstName": "Student1",
    "middleName": "A",
    "lastName": "Good"
  },
  "gender": "male",
  "dateOfBirth": "2000-05-15T00:00:00.000Z",
  "email": "student1@gmail.com",
  "contactNo": "+1234567890",
  "emergencyContact": "+0987654321",
  "bloodGroup": "O+",
  "presentAddress": "123 Present St, Cityville",
  "paremenentAddress": "456 Permanent Rd, Townsville",
  "guardian": {
    "fatherName": "Richard Doe",
    "fatherOccupation": "Engineer",
    "fatherContactNo": "+1234567891",
    "motherName": "Jane Doe",
    "motherOccupation": "Doctor",
    "motherContactNo": "+1234567892"
  },
  "localGuardian": {
    "name": "Uncle Sam",
    "occupation": "Businessman",
    "contactNo": "+1234567893",
    "address": "789 Guardian Lane, Villagetown"
  },
  "admissionSemester": "678806d70d054d01a10ac0aa",// any admission semester objectID
  "isDeleted": false,
  "academicDepartment": "6787fcd10d054d01a10ac0a7"// any academic department objectID
}
}
** Headers.Authorization = superAdmin Login Token

step5 --> create a Faculty [Teacher]
url --> {{ph-local-url}}/users/create-faculty
** form-data -> file = a picture from computer
** form-data -> data = {
  "password" : "faculty123",
  "faculty" : {
  "designation": "Professor",
  "name": {
    "firstName": "Faculty1",
    "middleName": "A.",
    "lastName": "Doe"
  },
  "gender": "male",
  "dateOfBirth": "1980-05-15",
  "email": "faculty1@gmail.com",
  "contactNo": "1234567890",
  "emergencyContactNo": "0987654321",
  "bloodGroup": "O+",
  "presentAddress": "123 Main Street, Cityville",
  "permanentAddress": "456 Elm Street, Townsville",
  "academicDepartment": "6787fcd10d054d01a10ac0a7", // any academic department objectID
  "isDeleted": false
  }
}
** Headers.Authorization = superAdmin Login Token

step6 --> create a Admin by superAdmin (yet all was handled by superAdmin ,now admin is creating)
url --> {{ph-local-url}}/users/create-admin
** form-data -> file = a picture from computer
** form-data -> data = {
    "password" : "admin123",
    "admin" : {
  "designation": "Admin",
  "name": {
    "firstName": "Jhankar",
    "middleName": "",
    "lastName": "Mahbub"
  },
  "gender": "male",
  "dateOfBirth": "1985-06-15",
  "email": "jhankar@example.com",
  "contactNo": "+1234567890",
  "emergencyContactNo": "+0987654321",
  "bloogGroup": "O+",
  "presentAddress": "123 Main St, Springfield, USA",
  "permanentAddress": "456 Elm St, Springfield, USA",

  "isDeleted": false
}
}
** Headers.Authorization = superAdmin Login Token

step7 --> create course by Admin
url -->{{ph-local-url}}/courses/create-course
** body = {
    "title" : "BASIC Computer Skill",
    "prefix" : "BASIC",
    "code" : 100,
    "credits" : 3,
    "isDeleted" : false
}
## create 2nd course with prerequisite
** body = {
    "title" : "Hyper Text Markup Language",
    "prefix" : "HTML",
    "code" : 101,
    "credits" : 3,
    "isDeleted" : false,
    "preRequisiteCourses" : [
        {
            "course" : "6788d0387639ed5d11c31aa7",//this is BASIC course objectID
            "isDeleted" : false
        }
    ]
}
## create 3rd course with prerequisite
** body = {
    "title" : "Cascading Style Sheet",
    "prefix" : "CSS",
    "code" : 102,
    "credits" : 3,
    "isDeleted" : false,
    "preRequisiteCourses" : [
        {
            "course" : "6788d1357639ed5d11c31aab",//this is html objectID
            "isDeleted" : false
        }
    ]
}

** Headers.Authorization = just Admin Login Token

## create Basic JavaScript as 4th course to create two preRequsiteCourse

## now create Problem Solving with JS course with Basic JavaScript Prerequisite as 5th course to create two preRequsiteCourse course

## create the two prerequisite Dom manipulation course as 6th course
** body = ## create 3rd course with prerequisite
** body = {
    "title" : "Dom Manipulation",
    "prefix" : "JS",
    "code" : 108,
    "credits" : 3,
    "isDeleted" : false,
     "preRequisiteCourses" : [
        {
            "course" : "6788d1d37639ed5d11c31aaf",//css
            "isDeleted" : false
        },
        {
            "course" : "6788d3547639ed5d11c31ab6",//povlem solving js
            "isDeleted" : false
        }
    ]

}

##** Now we need to create semesterRegistration in order to offer course
** url = {{ph-local-url}}/semester-registrations/create-semester-registration
** body = {
  "academicSemester": "678806d70d054d01a10ac0aa",
  "status": "UPCOMING",
 "startDate": "2025-01-01T00:00:00.000Z",
  "endDate": "2025-04-30T23:59:59.999Z",
  "minCredit": 3,
  "maxCredit": 16
}
##** Now update semesterRegistration to move status from UPCOMING to ONGOING
** url = {{ph-local-url}}/semester-registrations/678a350fb4b83ee41574000a

** body = {
    "status" : "ONGOING"
}
##** Now to asssign faculties(meaning teacher)

** url = {{ph-local-url}}/courses/6788d0387639ed5d11c31aa7/assign-faculties // this is course _id

** body = {
    "faculties" : ["6788c008384cc31a6d2d6971", "6788c0b0384cc31a6d2d6979"]
}

Response will be : {
    "success": true,
    "message": "faculties assigns successfully",
    "data": {
        "_id": "6788d0387639ed5d11c31aa7",
        "__v": 0,
        "course": "6788d0387639ed5d11c31aa7",
        "faculties": [
            "6788c008384cc31a6d2d6971",
            "6788c0b0384cc31a6d2d6979"
        ]
    }
} // a courseFaculties collection is created , this means the course class will be takend by these two faculties

## Now you can getFaculties by this
** url = {{ph-local-url}}/courses/6788d0387639ed5d11c31aa7/get-faculties // here the id is a course field id from courseFaculty collection


## Now you can offere course for students
** url = {{ph-local-url}}/offered-courses/create-offered-course
** body = {
  "semesterRegistration": "678a350fb4b83ee41574000a",// a semester registration _id
  "academicFaculty": "6787fae70d054d01a10ac0a2", // a academic faculties _id
  "academicDepartment": "6787fcd10d054d01a10ac0a7", // need to find the Academic department _id of this 6787fae70d054d01a10ac0a2 academic faculties id
  "course": "6788d0387639ed5d11c31aa7",
  "faculty": "6788c008384cc31a6d2d6971",
  "section": 1,
  "maxCapacity": 30,
  "days": ["Sun", "Tue"],
  "startTime": "10:30",
  "endTime": "12:30"
}

```

```javascript
##** Now to asssign faculties(meaning teacher) again for HTML

** url = {{ph-local-url}}/courses/6788d1357639ed5d11c31aab/assign-faculties // this is course _id

## do assign faculties for all course like css,basic js,problem solving

### Create another offered course
** body = {
  "semesterRegistration": "678a350fb4b83ee41574000a",// a semester registration _id
  "academicFaculty": "6787fae70d054d01a10ac0a2", // a academic faculties _id
  "academicDepartment": "6787fcd10d054d01a10ac0a7", // need to find the 6787fae70d054d01a10ac0a2 academic faculties Academic department _id
  "course": "6788d1357639ed5d11c31aab", // here just changed this course and the time ,because the first one also this faculty(teacher)
  "faculty": "6788c008384cc31a6d2d6971",
  "section": 1,
  "maxCapacity": 30,
  "days": ["Sun", "Tue"],
  "startTime": "12:30",
  "endTime": "14:30"
}
## do again create offer course for basic JavaScript,Problem solving and dom manipulation course  and if faculty same then change the time.


## Now a student can enroll to his faculty and academicDepartement ONGOING  semester.
** to enroll
url = {{ph-local-url}}/enrolled-courses/create-enrolled-course
** body = {
    "offeredCourse" : "678a4a03c3a574a3f1e741ba" // is a students myOfferedCourse ObjectId
}

```

#### these are for disconnect to github and disconnect vercel if you are willing to work as a new file

```javascript
### rm -rf .git
### rm -rf .vercel
```

#### Module-8 project setup note

=======

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

```javascript
//  What i need to work about token,refresh token,authorization,passoword reset

// to create a refresh token you need to understand what is for this refresh token .
// this is for to have access when the original token is expired
// it will create i by hiting this route /auth/refresh-token (it will create by res.cookie data, res.cookie set by jwt also for this refresh token so dont warry about how without token in authorization this route creates refresh token)

// and then if hit /auth/forget-password this route a email goes to user email address wiht a reset password link there has a token , copy that token and set in /auth/reset-password route authorization and give data to reset password like thats it
{
    "id" : "A-0001",
    "newPassword": "adminNew"
}

```
