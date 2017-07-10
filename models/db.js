var mysql     = require('mysql');
var pool = mysql.createPool({
    host      : 'localhost',
    user      : 'root',
    password  : 'root',
    database  : 'nodejs'
});
var query = function(sql,callback){
    pool.getConnection(function(err,conn){
        if(err){
            //callback(err,null,null);
        }else{
            conn.query(sql,function(qerr,result){
                //释放连接
                conn.release();
                //事件驱动回调
                callback(result);
            });
        }
    });
};
module.exports = query;
//exports.query = function(sql,callback) {
//  pool.getConnection(function(err,conn){
//      if(err){
//          callback(err,null,null);
//      }else{
//          conn.query(sql,function(qerr,result){
//              conn.release();
//              callback(result);
//          });
//      }
//  });
//};
