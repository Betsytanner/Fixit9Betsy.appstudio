//once the button is selected will output a message

radDescribeYou.onchange=function(){
  lblForm.value = `I agree you are a very ${$("input[name=radDescribeYou]:checked").prop("value")} person!`
}
//on the next two button will change the form
btnNextTwo.onclick=function(){
  ChangeForm(favExercises)
}




