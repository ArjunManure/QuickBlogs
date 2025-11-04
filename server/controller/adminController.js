import jwt from 'jsonwebtoken';

export const adminLogin = async(req,res) =>{
    try {
        const{email,password} = req.body;

        if(email !== process.env.EMAIL || password !== process.env.PASS){
            return res.status(401).json({success: false ,message: "Invalid credentials"})
        }

        const token =  jwt.sign({email} , process.env.SECRET_KEY);
        
        res.json({success: true , token} )

    } catch (error) {
        res.json({success: false ,message: error.message})
    }
}
