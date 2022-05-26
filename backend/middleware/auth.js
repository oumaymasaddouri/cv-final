const users = require("../models/user");
const jwt = require("jsonwebtoken");
exports.isAuth = async (req, res, next) => {
    
    try {
        const token = req.headers['auth'];
        if (!token) {
            return res.status(400).send("you are not authorized");
        }
        const decoded = jwt.verify(token, process.env.privateKey);
        const user = await users.findById(decoded.id);
        const recruiter = await user.select("-password")
        if(!recruiter) {return res.status(400).json({success : false ,message: ResponseMessage.AccountNotExist, data:""})}

    req.user = recruiter;
            if (!users){
                return res.json({message:'not authorized users' })
            }
        next();
    } catch (error) {
        console.log("server error");
    }
};
