import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';
import {getAllFilms} from "./services";

dotenv.config();

const app: Express = express();

app.set('PORT', process.env.PORT || 80);
app.set('NODE_ENV', process.env.NODE_ENV || 'production');


app.get('/films', async (req: Request, res: Response) => {
    let films = await getAllFilms();
    res.json(films);
});



app.listen(app.get('PORT'),() => {
    console.log(`
        SERVER: running
        PORT:   ${app.get('PORT')}
        ENV:    ${app.get("NODE_ENV")}
    `);
})