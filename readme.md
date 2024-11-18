#### Module-8 project setup note

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
