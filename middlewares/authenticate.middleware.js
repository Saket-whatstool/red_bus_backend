const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
    const token = req.headers.authorization;
    if(token) {
        const decoded = jwt.verify(token, "masai")
        if(decoded) {
            const userID = decoded.userID
            req.body.userID = userID
            next();
        } else {
            res.send("Please Login First")
        }
    } else {
        res.status(400).json({message :"unSuccessFull"})
    }
};


module.exports = {
    authenticate
}