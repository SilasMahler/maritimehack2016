function refreshData() {
    var ship = {
        id: String,
        name: String,
        typ: String,
        length: String,
        beam: String,
        manager: String,
        owner: String,
        insurer: String,
        eng_builder: String
    }

    $.get("https://vesseltrip.schroeer.co/vessels", function (data, status) {
        var content = JSON.parse(data);
        $("#ships_entries").empty();
        for (var i = 0; i < content.length; i++) {
            $("#ships_entries").append(
                '<tr> ' +
                '<td></td>' +
                '<td>' + content[i].id + '</td>' +
                '<td>' + content[i].name + '</td>' +
                '<td>' + content[i].type + '</td>' +
                '<td>' + content[i].length + '</td>' +
                '<td>' + content[i].beam + '</td>' +
                '<td>' + content[i].manager + '</td>' +
                '<td>' + content[i].owner + ' </td>' +
                '<td>' + content[i].insurer + '</td>' +
                '<td>' + content[i].eng_builder + '</td>' +
                '</tr>'
            )
        }
    });

    $.get("https://vesseltrip.schroeer.co/ports", function (data, status) {
        var content = JSON.parse(data);
        $("#ports_entries").empty();
        for (var i = 0; i < content.length; i++) {
            $("#ports_entries").append(
                '<tr> ' +
                '<td></td>' +
                '<td>' + content[i].id + '</td>' +
                '<td>' + content[i].name + '</td>' +
                '<td>' + content[i].longitude + '</td>' +
                '<td>' + content[i].latitude + '</td>' +
                '</tr>'
            )
        }
    });
}
document.onload(refreshData());
