
function logIN(e){
    var playername1;
    var playername2;
    playername1=document.getElementById("player1_name_input").value;
    playername2=document.getElementById("player2_name_input").value;
    localStorage.setItem("player1_name_input", playername1);
    localStorage.setItem("player2_name_input", playername2);
    window.location="game.html";
}