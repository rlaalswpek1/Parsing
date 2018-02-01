$(document).ready(function () {
    $.getJSON("sample.json", function (data) {
        $("#gname").html(data["name"]);
        $(data["teams"]).each(function (i, team) {
            if (i != 0) {
                $("#teams").append("ㆍ");
            }
            $("#teams").append(team);
        });
        $.each(data["winners"], function (key, value) {
            $("#winners").append("<li>" + key + " : " + value + "</li>\n");
        });
    });
});
