var query = require('./db');
exports.save = function(name,pwd,callback){
    //connection.connect();
    //var post = {username: name, password: pwd};
    //connection.query('INSERT INTO t_user SET ?',post,function(err,result){
    //    if(result.affectedRows > 0){
    //        callback(true);
    //    }else{
    //       callback(false);
    //    }
    //    connection.end();
    //});

    var sql ="INSERT INTO t_user(username,password) values('"+name+"','"+pwd+"')";
    query(sql,callback);
    
};
exports.selectByNamePwd = function(name,pwd,callback){
    //connection.connect();
    //var sql = 'SELECT * FROM t_user where username=? and password=?';
    //connection.query(sql,[name,pwd],function(err,result){
    //   if(result.length > 0){
    //       callback(true);
    //   }else{
    //       callback(false);
    //   }
    //   connection.end();
    //});
    var sql = "SELECT * FROM t_user where username='"+name+"' and password='"+pwd+"'";
    query(sql,callback);
};
exports.getAll = function(callback){
    var sql = 'SELECT * FROM t_user';
    query(sql,callback);
};
exports.getAlljd = function(callback){
    var sql = 'SELECT * FROM t_jd';
    query(sql,callback);
}
exports.getJddetailByJd_Id = function(jd_id,callback){
    var sql = "SELECT * FROM t_comment c,t_jd jd,t_user u where c.jd_id = jd.jd_id and c.COMMENTOR = u.user_id and jd.jd_id = '"+jd_id+"'";
    query(sql,callback);

};
exports.saveContent = function(user_id,jd_id,content,callback){


    var sql ="INSERT INTO t_comment(COMMENTOR,jd_id,content) values('"+user_id+"','"+jd_id+"','"+content+"')";
    query(sql,callback);
};
exports.getAllMenpiao = function(callback){
    var sql = 'SELECT * FROM t_jd';
    query(sql,callback);
};
exports.savemenpiao = function(jd_id,callback){
    //connection.connect();
    //var post = {username: name, password: pwd};
    //connection.query('INSERT INTO t_user SET ?',post,function(err,result){
    //    if(result.affectedRows > 0){
    //        callback(true);
    //    }else{
    //       callback(false);
    //    }
    //    connection.end();
    //});

    var sql ="UPDATE t_jd SET jd_count = jd_count-1 WHERE jd_id = jd_id" ;
    query(sql,callback);
};
