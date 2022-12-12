import "dotenv/config"
import express from "express"

// import sub-routers
import { routes } from './routes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/', routes);

// start the server
app.listen(process.env.PORT, () => {
    console.log(
        `server running : http://${process.env.HOST}:${process.env.PORT}`
    );
});