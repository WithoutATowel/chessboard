function buildWhite(){
    var content = "<table id='chessBoard'>";
    for(var j=8; j>0; j--){
        content += "<tr>"
        for(var i=0; i<8; i++) {
            content += "<td id='" + String.fromCharCode(i+65) + (j) + "' class='a" + ((i + j) % 2) + "'></td>";
        };
        content += "</tr>";
    };
    content += "</table>";
    $("#board").html(content);
};

function buildBlack(){
    var content = "<table id='chessBoard'>";
    for(var j=1; j<=8; j++){
        content += "<tr>"
        for(var i=1; i<=8; i++) {
            content += "<td id='" + String.fromCharCode(73-i) + (j) + "' class='a" + ((i + j + 1) % 2) + "'></td>";
        };
        content += "</tr>";
    };
    content += "</table>";
    $("#board").html(content);
};

function showClicked(){
    $('td').html("");
    $(this).html($(this).attr('id'));
    if($(this).attr('id') == $("#promptValue").html()) {
        prompt();
    }
};

function prompt(){
    var column = String.fromCharCode(65 + Math.floor(Math.random()*8));
    var row = Math.floor(Math.random()*8+1);
    $("#promptValue").html(column + row);
}

$(document).ready(function(){
    buildWhite();
    prompt();
    $('td').click(showClicked);
    $("#white").click(function() {
        buildWhite();
        $('td').click(showClicked)
    });
    $("#black").click(function() {
        buildBlack()
        $('td').click(showClicked)
    });
});