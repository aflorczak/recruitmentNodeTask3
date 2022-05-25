import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();

app.set('PORT', process.env.PORT || 80);
app.set('NODE_ENV', process.env.NODE_ENV || 'production');


app.get('/', (req: Request, res: Response) => {
    res.send('Hello World !');
});



app.listen(app.get('PORT'),() => {
    console.log(`
        SERVER: running
        PORT:   ${app.get('PORT')}
        ENV:    ${app.get("NODE_ENV")}
    `);
})