var userModel = require('../models/userModel.js');

exports.reg = function(req,res){
    var name = req.body.username;
    var pwd = req.body.password;
    req.session.username = name;
    //console.log('用户名:' + name + ',密码：' + pwd);
    //res.send('用户名:' + name + ',密码：' + pwd);

    var result = userModel.save(name,pwd,function(result){

        if(result){

            res.render('result',{content:666});
        }else{
           res.send('注册失败，请重新注册');
        }


    });
};


exports.login = function(req,res){
        var name = req.body.username;
        var pwd = req.body.password;

        var result = userModel.selectByNamePwd(name,pwd,function(result){

           if(result!=""){
                //console.log(result);
               req.session.user_id = result[0].user_id;
               console.log(req.session.user_id);
                res.redirect('/users/list');
            }else{
                res.render('login1');

            }
        });
};
//exports.list = function(req,res){
//
//    var result = userModel.getAll(function(result){
//        if(result){
//            res.render('userlist',{users: result});
//        }else{
//            res.send('查询失败');
//        }
//    });
//
//};
exports.list = function(req,res){

    var result = userModel.getAlljd(function(result){

        if(result){
            res.render('page_blog',{jds: result});
        }else{
            res.send('查询失败');
        }
    });

};

exports.detailjd = function(req,res){
    var jd_id = req.query.jd_id;
    var result = userModel.getJddetailByJd_Id(jd_id,function(result){
        console.log(result);
        if(result){
            res.render('page_blog_item',{jds:result});
        }else{
            res.send('查看失败');
        }

    });

};
exports.pinglun = function(req,res){
    var name = req.body.name;
    var email = req.body.email;
    var jd_id = req.query.jd_id;
    var content = req.body.content;
    var user_id = 1;

    var result = userModel.saveContent(user_id,jd_id,content,function(result){

        if(result!=""){
          res.send("评论成功");
        }else{
            res.render("评论失败，请重试");

        }
    });
};
exports.menpiao = function(req,res){
    var result = userModel.getAllMenpiao(function(result){

        if(result){
            res.render('allmenpiao',{menpiaos: result});
        }else{
            res.send('查询失败');
        }
    });
};
exports.dingpiao = function(req,res){
    var jd_id = req.query.jd_id;
    var result = userModel.savemenpiao(jd_id,function(result){

        if(result){
            res.send('订票成功');
        }else{
            res.send('订票失败');
        }
    });
};