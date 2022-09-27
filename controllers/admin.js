exports.getAddProduct = (req, res, next)=>{
    console.log('Đã vào đây'); 
    res.render('admin/add-product'); 
}

exports.postAddProduct = (req, res, next)=>{
    res.render('ejs'); 
}