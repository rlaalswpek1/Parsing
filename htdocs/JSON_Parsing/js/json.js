$(document).ready(function(){
    var obj = new Object();
    obj.name = "LCK"
    obj.teams = ["SKT", "KT", "KZ", "MVP", "KSV", "BBQ", "ROX"];
    obj.winners = {"2017 Spring":"SKT", "2017 Summer":"KZ", "2017 MSI":"SKT", "2017 LoLWorldcup":"KSV"};
    
    var obj_s = JSON.stringify(obj, null, "\t");
    
    var dataUri = "data:application/json;charset=utf-8,"+ encodeURIComponent(obj_s);
    var link = $("#link").attr("href",dataUri);
});