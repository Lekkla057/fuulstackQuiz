const pgp = require('pg-promise')();

var db = pgp('postgres://wziandmiibgdhb:6ee79894520868a909eec7fb079f4b5265edf4886097f34d92428fa6a5a55274@ec2-50-19-127-158.compute-1.amazonaws.com:5432/d9slu0tufletpv?ssl=true');

function getAllProducts(req, res) {
    db.any('select * from products')
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL products'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}
function getProductByID(req, res) {
    db.any('select * from products where id =' + req.params.id)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved products id:' +
                        req.params.id
                });
        })
        .catch(function (error) {
            res.status(500).json({
                status: 'failed',
                message: 'Failed to retriave Product ID:' + req.params.id
            });

        })
}
function insertProduct(req, res) {
    db.none('insert into products(id, title, price, created_at, tags)' +
        'values(${id}, ${title}, ${price}, ${created_at}, ${tags})',
        req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Inserted one product'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

function updateProduct(req, res) {
    db.none('update products set title=${title},price=${price},created_at=${created_at} where id=' + req.params.id,
        req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Inserted one product'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

function deleteProduct(req, res) {
    db.none('DELETE FROM products where id =' + req.params.id,
        req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Inserted one product'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

//Purchase_item
function getPurchase_item(req, res) {
    db.any('select * from purchase_items')
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL Purchase_item'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}
function getPurchase_itemByID(req, res) {
    db.any('select * from purchase_items where id =' + req.params.id)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved Purchase_items id:' + req.params.id
                });
        })
        .catch(function (error) {
            res.status(200).json({
                status: 'failed',
                message: 'Failed to retriave Product ID:' + req.params.id
            });

        })
}

function insertPurchase_item(req, res) {
    db.any('insert into purchase_items(id, purchase_id, product_id,price,quantity)' +
        'values(${id}, ${purchase_id}, ${product_id}, ${price}, ${quantity})',
        req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Inserted one Purchase_item'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })

    db.any('select * from purchase_items').then(function (data) {
        res.status(200)
            .json({
                status: 'success',
                data: data,
                message: 'Delete id=' + req.params.id
            });
    })
}
function updatePurchase_item(req, res) {
    db.any('update purchase_items set purchase_id=${purchase_id},product_id=${product_id},price=${price},quantity=${quantity} where id =' + req.params.id,
        req.body)
        .then(function (data) {
            res.status(200).json({
                status: 'success',
                data: data,
                message: 'Update Purchase_item id=' + req.params.id
            });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

function DeletePurchase_item(req, res) {
    db.any('DELETE from purchase_items where id=' + req.params.id)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Delete id=' + req.params.id
                })
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
        
}

//Purchase
function getPurchase(req, res) {
    db.any('select * from purchases')
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL Purchase'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}
function getPurchaseByID(req, res) {
    db.any('select * from purchases where id=' + req.params.id)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved Purchase id:' + req.params.id
                });
        })
        .catch(function (error) {
            res.status(500)
                .json({ status: "fail", message: "Mission Fail get back" })
            console.log('ERROR:', error)
        })
}
function insertPurchase(req, res) {
    db.any('insert into purchases(id,created_at,name,address,state,zipcode,user_id)' +
        'values(${id}, ${created_at}, ${name}, ${address}, ${state},${zipcode},${user_id})',
        req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Inserted one Purchase'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })

}
function updatePurchase(req, res) {
    db.any('update purchases set created_at=${created_at},name=${name},address=${address},state=${state},zipcode=${zipcode},user_id=${user_id} where id =' + req.params.id,
        req.body)
        .then(function (data) {
            res.status(200).json({
                status: 'success',
                data: data,
                message: 'Update Purchase id=' + req.params.id
            });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}
function DeletePurchase(req, res) {
    db.any('DELETE from purchases where id=' + req.params.id)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Delete id=' + req.params.id
                })
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
    db.any('select * from purchases').then(function (data) {
        res.status(200)
            .json({
                status: 'success',
                data: data,
                message: 'Delete id=' + req.params.id
            });
    })
}



//user
function getUser(req, res) {
    db.any('select * from users')
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL User'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}
function getUserByID(req, res) {
    db.any('select * from users where id =' + req.params.id)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved Purchase_items id:' + req.params.id
                });
        })
        .catch(function (error) {
            res.status(500)
                .json({ status: "fail", message: "Mission Fail get back" })
            console.log('ERROR:', error)
        })
}
function insertUser(req, res) {
    db.any('insert into users(id,email,password,details,created_at)' +
        'values(${id}, ${email}, ${password}, ${details}, ${created_at}',
        req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Inserted one purchase'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })

    
}
function DeleteUser(req, res) {
    db.any('DELETE from users where id=' + req.params.id)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Delete id=' + req.params.id
                })
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
    db.any('select * from users').then(function (data) {
        res.status(200)
            .json({
                status: 'success',
                data: data,
                message: 'Delete id=' + req.params.id
            });
    })
}
function updateUser(req, res) {
    db.any('update users set email=${email},password=${password},details=${details},created_at=${created_at} where id =' + req.params.id,
        req.body)
        .then(function (data) {
            res.status(200).json({
                status: 'success',
                data: data,
                message: 'update purchase id=' + req.params.id
            });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}








module.exports = {
    getAllProducts,
    getProductByID,
    insertProduct,
    updateProduct,
    deleteProduct,
    getPurchase_item,
    getPurchase_itemByID,
    insertPurchase_item,
    updatePurchase_item,
    DeletePurchase_item,
    getPurchase,
    insertPurchase,
    updatePurchase,
    DeletePurchase,
    getPurchaseByID,
    getUser,
    getUserByID,
    insertUser,
    DeleteUser,
    updateUser
}