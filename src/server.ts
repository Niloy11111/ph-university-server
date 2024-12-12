import { Server } from 'http';
import mongoose from 'mongoose';
import app from './app';
import config from './app/config';

let server: Server;

async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    server = app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();

// this is for asynchronous function
// this function is for not closing suddendly the server ,rather in a decet way closing
process.on('unhandledRejection', () => {
  console.log(`unhandledRejection is detected now`);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }

  process.exit(1);
});
// this is for synchronous function
process.on('uncaughtException', () => {
  console.log(`uncaughtException is detected now`);
  process.exit(1);
});
