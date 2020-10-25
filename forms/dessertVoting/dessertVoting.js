
//create an array for the dessert list 
var dessertList = ['Chocolate Cake','Cream Brulee','Cheesecake',
                  'Keylime Pie','Cherry Cobbler','Chocolate Chip Cookies']
//will show all of the desserts in the array in the drop down
dessertVoting.onshow=function(){
    drpDesserts.clear()   
  for (i = 0; i <= dessertList.length -1; i++)
    drpDesserts.addItem(dessertList[i])
}

//on the click submits and then shows in a label what the user submits 
drpDesserts.onclick=function(s){
   // this 'if' kicks user out if they  just clicked on control 
 // but not on one item in the list.
    if (typeof(s) == "object")   
                    
        drpDesserts.value = s
        lblDessert.value = `You Picked ${drpDesserts.selection}- that is a great choice!`
}

//when the user clicks the button will change to descibe you page 

btnDescribeYou.onclick=function(){
  ChangeForm(describeYou)
}

