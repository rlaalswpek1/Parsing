$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "xml_tw.xml",
        success: function (xml) {
            $(xml).find("twice").each(function () {
                $("#gname").html($(this).find("name").text());
                $(this).find("member").each(function (i) {
                    if (i != 0) {
                        $("#members").append(" ㆍ ");
                    }
                    $("#members").append($(this).text());
                });
                $(this).find("album").each(function () {
                    $("#albums").append("<li>" + $(this).attr("order") +
                        " : " + $(this).text() + "</li>\n");
                });
            }); 
        }
    });
});