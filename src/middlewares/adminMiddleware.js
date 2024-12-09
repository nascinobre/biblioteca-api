function verificarAdm(req, res, next) {
    const { admin } = req.headers;

    if(admin) {
        next();
        
    }else {
        res.status(403).json ({
            mensagem:"acesso nao permitido"
        });
    }
}

export default verificarAdm;