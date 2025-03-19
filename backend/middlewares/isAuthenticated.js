import jwt from 'jsonwebtoken';

const isAuthenticated = async (req, res, next) => {
    try{
        console.log("here");
        const token = req.cookies.xchange;
        if(!token){
            return res
                    .status(401)
                    .json({message : "User not authenticated"});
        }
        console.log("token");
        const decode = jwt.verify(token, process.env.JWT_SECRET_KEY)

        if(!decode){
            return res
                    .status(400)
                    .json({message : "Invalid token"});
        }

        req.userId = decode.userId;
        // console.log(req.userId);
        next();
    }
    catch(err){
        console.log("Error : ",err);
    }
}

export default isAuthenticated;