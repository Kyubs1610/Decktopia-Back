import { Pool } from "./dbPool.mjs";

export const dbConnect = () =>{
    Pool.connect((err) =>{
        if (err) {
            console.log("failed to connect", err.stack);
            Pool.end();
        } else {
            console.log("connected to database");
        }
    })
}