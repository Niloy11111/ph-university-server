import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import globalErrorHanler from './app/middleware/globalErrorHandler';
import notFound from './app/middleware/notFound';
import router from './app/routes';

const app: Application = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ['http://localhost:5173'],
  }),
);

//importing router from routes/index.ts
app.use('/api/v1', router);

app.get('/', (req: Request, res: Response) => {
  res.send('hello');
});

app.use(globalErrorHanler);

// not found route
app.use(notFound);

export default app;
