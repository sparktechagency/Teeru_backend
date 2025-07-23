/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import globalErrorHandler from './app/middleware/globalErrorhandler';
// import notFound from './app/middleware/notfound';
import router from './app/routes';
import notFound from './app/middleware/notfound';
import serverHomePage from './app/helpers/serverHomePage';
const app: Application = express();
app.use(express.static('public'));

app.use(express.json({ limit: '50mb' })); // or larger if needed
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

app.use(cookieParser());
app.use(
  cors({
    // origin: true,
    origin: ['https://teerusn.com'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  }),
);

// Remove duplicate static middleware
// app.use(app.static('public'));

// application routes
app.use('/api/v1', router);

app.get('/', async (req: Request, res: Response) => {
  const htmlContent = await serverHomePage(); // Wait for HTML generation
  res.send(htmlContent); // Send the generated HTML
});

app.use(globalErrorHandler);

//Not Found
app.use(notFound);

export default app;
