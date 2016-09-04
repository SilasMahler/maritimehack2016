function refreshData() {
    var ship = {
        id: number,
        name: String,
        typ: String,
        length: String,
        beam: number,
        manager: String,
        owner: String,
        insurer: String,
        eng_builder: String
    }


    $.get("https://vesseltrip.schroeer.co/vessels", function (data, status) {
        var content = JSON.parse(data);
    });

    alert(content.length);
    for(var i = 0; i < content.length ; i++){
        $("#ships_entries").appendChild(
            '<tr> ' +
            '<td>content[i].id ,</td>' +
            '<td>Name: content[i].name ,</td>' +
            '<td>Typ: content[i].type</td>' +
            '<td>Length: content[i].length</td>' +
            '<td>Beam: content[i].beam</td>' +
            '<td>Manager: content[i].manager</td>' +
            '<td>Owner: content[i].owner</td>' +
            '<td>Insurer: content[i].insurer</td>' +
            '<td>Eng_builder: content[i].eng_builder</td>' +
            '</tr>'
        )
    }
}
