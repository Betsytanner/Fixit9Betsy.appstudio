
hmbMenu.onclick=function(s){
  if (typeof(s) == "object") {   
    return
  } else {
  switch(s) {
case "Login":
  ChangeForm(CUlogin)
  break;
case "Favorite Foods":
  ChangeForm(favFoods)
  break;
case "Dessert Voting":
  ChangeForm(dessertVoting)
  break;
case "Describe You":
  ChangeForm(describeYou)
  break;
case "Favorite Exercises":
  ChangeForm(favExercises)
  break;
}
}
}