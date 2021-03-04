const User = require('../models/user')
exports.outcontroler = async(req,rest) => {
    const{
        foto,nombre,email,password
    } = req.body;
    try{
        const user = await User.findOne({
            email 
        })
        if (user){
            return rest.status(400).json({errorMessage:'el email existe'})
        }
        const newuser = new User();
        newuser.foto = foto;
        newuser.nombre = nombre;
        newuser.email = email;
        newuser.password = password;
        await newuser.save();
        rest.json({
            successMessage:'resigtro correcto'
        })
        
    }
    catch(err){
        rest.status(500).json({
            errorMessage:'error de servicio'
        })

    }
}