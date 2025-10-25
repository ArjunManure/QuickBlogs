import jwt from 'jsonwebtoken';

export const adminLogin = async(req,res) =>{
    try {
        const{email,password} = req.body;

        if(email !== process.env.EMAIL || password !== process.env.PASS){
            return res.json({success: "fail" ,message: "Invalid credentials"})
        }

        const token =  jwt.sign({email} , process.env.SECRET_KEY);
        
        res.json({success: "Pass" , token} )

    } catch (error) {
        res.json({success: "fail",message: error.message})
    }
}
