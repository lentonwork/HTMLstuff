var count = 1;

function eatChorizo(btn){
    var property = btn;
        if (count == 0) {
            property.style.backgroundColor = "#FFFFFF"
            count = 1;        
        }
        else {
            property.style.backgroundColor = "#7FFF00"
            count = 0;
        }
        alert("You are in trouble sir")
}