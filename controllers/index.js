
exports.getIndex = (req, res, next)=>{
    res.render('index');
}

exports.getEJS = (req, res, next)=>{
    res.render('ejs'); 
}