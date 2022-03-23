function login(){
    player_1=document.getElementById("player_1").value;
    player_2=document.getElementById("player_2").value;
    localStorage.setItem("player 1 name",player_1);
    localStorage.setItem("player 2 name",player_2);
    window.location="gamepg.html";
}