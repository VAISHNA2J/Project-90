function addUser()
{
    player_1_name = document.getElementById("player_1_name_input").value;
    player_2_name = document.getElementById("player_2_name_input").value;

    localStorage.setItme("player_1_name", player_1_name);
    localStorage.setItme("player_2_name", player_2_name);

     window.location = "quiz_game_page.html";
}