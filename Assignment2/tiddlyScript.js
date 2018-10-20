/*Creates an array of the pictures which are going to be slide showed*/
var images = new Array("tiddlywinksimg1.jpg", "tiddlywinksimg2.jpg", "tiddlywinksimg3.jpg","tiddlywinksimg4.jpg","tiddlywinksimg5.jpg");
/*The current index of the array*/
var index = 0;

/*Used to rotate through the array of pitures automatically with a given time*/
function goSlideShow(){
var img = document.getElementById("picture");
index = index + 1;
if(index == images.length){
index = 0;
}
img.src = images[index];
}
/*Will call the slide show function every 5 seconds automatically */
window.setInterval(function(){
 goSlideShow()
}, 5000);


/* Used to determine if the user has already used the function to select an event */
var tuesdayexec=false;
var fridayexec=false;
var tour1exec=false;
var tour2exec=false;

/*Function for selecting a date from the table and putting it into the form */
function tuesday() {

    var day = document.getElementById("tugame_date").innerHTML,
        time = document.getElementById("tugame_time").innerHTML,
        room = document.getElementById("tugame_room").innerHTML,
        y = document.getElementById("game_day_input");
		if(tuesdayexec==false){
    y.value+=(room+" "+time+" "+day+" / ");
	tuesdayexec=true;
		}
} 




/*Function for selecting a date from the table and putting it into the form */
function friday() {

    var day = document.getElementById("fgame_date").innerHTML,
        time = document.getElementById("fgame_time").innerHTML,
        room = document.getElementById("fgame_room").innerHTML,
        y = document.getElementById("game_day_input");
   if(fridayexec==false){
    y.value+=(room+" "+time+" "+day+ " / ");
	fridayexec=true;
		}
} 

/*Function for selecting a date from the table and putting it into the form */
function friday() {

    var day = document.getElementById("fgame_date").innerHTML,
        time = document.getElementById("fgame_time").innerHTML,
        room = document.getElementById("fgame_room").innerHTML,
        y = document.getElementById("game_day_input");
   if(fridayexec==false){
    y.value+=(room+" "+time+" "+day+ " / ");
	fridayexec=true;
		}
} 
/*Function for selecting a date from the table and putting it into the form */
function tour1() {


      var name = document.getElementById("tour1game_name").innerHTML,
        y = document.getElementById("game_day_input");
   if(tour1exec==false){
    y.value+=(name+ " / ");
	tour1exec=true;
		}
} 

/*Function for selecting a date from the table and putting it into the form */
function tour2() {

       var name = document.getElementById("tour2game_name").innerHTML,
        y = document.getElementById("game_day_input");
   if(tour2exec==false){
    y.value+=(name+ " / ");
	tour2exec=true;
		}
} 














/*Will reset the table function if the reset button is pressed by the user */
function resetexec(){
	tuesdayexec=false;
	fridayexec=false;
	tour1exec=false;
   tour2exec=false;
}
