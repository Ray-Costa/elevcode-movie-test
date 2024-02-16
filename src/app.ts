import "reflect-metadata"
import express from "express"
import { userRoutes } from './routes/user.routes';
import { loginRoutes } from './routes/login.routes';
import { movieRoutes } from './routes/movie.routes';

const app = express()
app.use(express.json())

app.use("/users", userRoutes)
app.use("/login", loginRoutes)
app.use("/movies", movieRoutes)


export default app
