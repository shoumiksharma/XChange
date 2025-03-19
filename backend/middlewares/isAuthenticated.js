import jwt from 'jsonwebtoken';

const isAuthenticated = async (req, res, next) => {
    try{
        const token = req.cookies.xchange;
        if(!token){
            return res
                    .status(401)
                    .json({message : "User not authenticated"});
        }
        const decode = jwt.verify(token, process.env.JWT_SECRET_KEY)

        if(!decode){
            return res
                    .status(400)
                    .json({message : "Invalid token"});
        }

        req.userId = decode.userId;
        next();
    }
    catch(err){
        console.log("Error : ",err);
    }
}

export default isAuthenticated;