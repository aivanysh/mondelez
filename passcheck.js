var express = require('express');
var app = express();
var url = require('url');
var resp = 'false1';

var adminUA = {
	login: 'admin',
	pass: '123'
}

var adminNM = {
	login: 'admin',
	pass: '321'
}


app.get('/passcheck1', function (req, res) {
res.header("Access-Control-Allow-Origin", "http://localhost:8080");
   var q = url.parse(req.url, true).query; 
   	if (adminUA.login == q.login && adminUA.pass == q.pass){
	resp = true;
	} else {
		resp = false;
	} 
   res.send(resp);
        });

app.get('/passcheck2', function (req, res) {
res.header("Access-Control-Allow-Origin", "http://localhost:8080");
   var q = url.parse(req.url, true).query; 
   	if (adminNM.login == q.login && adminNM.pass == q.pass){
	resp = true;
	} else {
		resp = false;
	} 
   res.send(resp);
        });

app.get('/ua', function (req, res) {
res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    var sql = require("mssql");

    var config = {
        user: 'sa',
        password: 'intra666',
        server: '192.168.1.35\\SQLEXPRESS', 
        database: 'Kharkiv' 
    };

    sql.connect(config, function (err) {
        if (err) console.log(err);
        var request = new sql.Request();
        request.query('select ost.Name,ost.OrgStructureOldId, mmu.MobileVersion from tblOrganizationalStructure ost join tblMobileModuleUser mmu on ost.OrgStructureID = mmu.OrgStructureID where mmu.Status = 2 and ost.Status = 2', function (err, recordset) {
            if (err) console.log(err)
            res.send(recordset);
            sql.close();  
        });   
    });
});

app.get('/nm', function (req, res) {
res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    var sql = require("mssql");

    var config = {
        user: 'sa',
        password: 'intra666',
        server: '192.168.1.35\\SQLEXPRESS', 
        database: 'Kharkiv' 
    };

    sql.connect(config, function (err) {
        if (err) console.log(err);
        var request = new sql.Request();
        request.query('select ost.Name,ost.OrgStructureOldId, mmu.MobileVersion from tblOrganizationalStructure ost join tblMobileModuleUser mmu on ost.OrgStructureID = mmu.OrgStructureID where mmu.Status = 2 and ost.Status = 2', function (err, recordset) {
            if (err) console.log(err)
            res.send(recordset);
            sql.close();  
        });   
    });
});

var server = app.listen(5000, function () {
    console.log('Server is running..');
});
