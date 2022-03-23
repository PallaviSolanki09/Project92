player_1 = localStorage.getItem("player 1 name");
player_2 = localStorage.getItem("player 2 name");
player1_score = 0;
player2_score = 0;
console.log(player_1);
console.log(player_2);

document.getElementById("pl_1_name").innerHTML = player_1 + " : ";
document.getElementById("pl_2_name").innerHTML = player_2 + " : ";

document.getElementById("pl_1_score").innerHTML = player1_score;
document.getElementById("pl_2_score").innerHTML = player2_score;

document.getElementById("pl_que").innerHTML = "Question Turn - " + player_1;
document.getElementById("pl_ans").innerHTML = "Answer Turn - " + player_2;

function send(){
    number1 = document.getElementById("Number1").value;
    number2 = document.getElementById("Number2").value;
    actual_ans = parseInt(number1) * parseInt(number2);

    que_no = "<h4>" + number1 + " X " + number2 + "</h4>";
    input_box = "<br>Answer : <input id='check_box'>";
    check_btn = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>"
    row = que_no + input_box + check_btn;

    document.getElementById("output").innerHTML = row;
    document.getElementById("Number1").value = "";
    document.getElementById("Number2").value = "";
}

que_turn = "player1";
ans_turn = "player2";

function check(){
    get_ans = document.getElementById("check_box").value;
    if(get_ans == actual_ans){
        if(ans_turn == "player1"){
            pl1_new_score = player1_score + 1;
            document.getElementById("pl_1_score").innerHTML = pl1_new_score;
        }
        else{
            pl2_new_score = player2_score + 1;
            document.getElementById("pl_2_score").innerHTML = pl2_new_score;
        }

    }

    if(que_turn == "player1"){
        que_turn = "player2"
        document.getElementById("pl_que").innerHTML = "Question Turn - " + player_2;
    }
    else{
        que_turn = "player1"
        document.getElementById("pl_que").innerHTML = "Question Turn - " + player_1;
    }

    if(ans_turn == "player1"){
       ans_turn = "player2"
       document.getElementById("pl_ans").innerHTML = "Answer Turn - " + player_2;
    }
    else{
       ans_turn = "player1"
       document.getElementById("pl_ans").innerHTML = "Answer Turn - " + player_1;
    }

    document.getElementById("output").innerHTML = "";
}
