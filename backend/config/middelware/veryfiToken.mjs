import JWT from "jsonwebtoken";
import { promisify } from "util";

promisify(JWT.verify);

// middleware pour l'authentification du token
export const jwtAuthentification = async (req, res, next) => {

    const token = await req.cookies.access_token;

    if (!token) {
      return res.status(401).send({ error: 'Unauthorized first' });
    }

    JWT.verify(token, process.env.JWT, (err, decoded) => {

      if (err) {
        return res.status(401).send({ error: 'Unauthorized' });
      }
      req.decoded = decoded;
      next();
    });
  }