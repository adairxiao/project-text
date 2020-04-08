// 封装数据库通用apl

var mysql = require('mysql');

exports.base = (sql ,data,callback) => {

    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'admin2201',
        database: 'meikong'
    });
    // 执行连接操作
    connection.connect();

    // 操作数据库
    connection.query(sql, data, function (error, results, fields) {
        if (error) throw error;
        callback(results);
    });
    // 关闭数据库
    connection.end();

};