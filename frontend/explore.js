function init() {
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

    for(var i = 0; i < content.length ; i++){
        //TODO befülle tabelle
    }
}
