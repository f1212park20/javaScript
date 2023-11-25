var color = document.getElementsByName('color');

document.getElementById('submit').onclick = function() {
    var selected = document.querySelector('input[type=radio][name=telecom]:checked');
    alert(selected.value);
    let colorChoice=[]
    for(let i=0; i<color.length; i++) {
        if(color[i].checked) {
            colorChoice.push(color[i].value)
        }
        
    }
    alert(colorChoice)
   
    


}

