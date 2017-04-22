/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Replace the n/a with the following:

Tay-Tay*/
var idName1 = document.getElementById("name1");
idName1.innerHTML = "Tay Tay";




/*2. Replace the n/a with the following: 

Project Manager*/
var idPosition2 = document.getElementById("position2");
idPosition2.innerHTML = "Project Manager";



/*3. Replace the n/a with the following:

Concatenation*/
var idAlias3 = document.getElementById("alias3");
idAlias3.innerHTML = "Concatenation";



/*4. Replace the n/a for Snoop with the gangsta lorem ipsum*/
var clProfile0 = document.getElementsByClassName("profile");

clProfile0[0].innerHTML = "Lorem ipsizzle dolor dizzle amizzle, hizzle adipiscing elizzle. Break it down yippiyo , shut the shizzle up volutpat, suscipit shiz, gravida vizzle, arcu. Shizznit doggy bow wow wow. Sizzle fo. Doggy izzle dolor dapibizzle turpis tempizzle crunk. Maurizzle mah nizzle nibh et turpis. Crunk izzle owned. Pellentesque sizzle rhoncizzle shizznit. Yo its fo rizzle habitasse go to hizzle dictumst. Get down get down dapibizzle. Bow wow wow tellus , shiz dang, ac, dope vitae, nunc. Dope suscipizzle. Integizzle we gonna chung velizzle sizzle fo shizzle mah nizzle fo rizzle, mah home g-dizzle.";



/*5. Relace the n/a for Samuel L Jackson with his lorem ipsum*/
var clProfile2 = document.getElementsByClassName("profile");
clProfile2[2].innerHTML = "Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they're actually proud of that shit. ";




/*6. Create a div element for Chuck Norris and give it an id of "name7". Inside this div element, give it the contents of "Chuck Norris".

Append this div element to the nameBox div*/

var newDiv = document.createElement("div");
newDiv.id = "name7";
newDiv.innerHTML = "Chuck Norris";
nameBox.appendChild(newDiv);


 

/*7. Create a div element for Grimmace and give it an id of "alias8". Inside this div element, give it the contents of "The Purple Monster".

Append this div element to the aliasBox div.*/

var newDiv2 = document.createElement("div");
newDiv2.id = "alias8";
newDiv2.innerHTML = "The Purple Monster";
aliasBox.appendChild(newDiv2);




//Final Boss
/*8. Create your own profile.*/

var newImg = document.getElementsByClassName("block3");
newImg[2].id = "myPic";
console.log(newImg);
newImg[2].innerHTML = "<img src=https://yt3.ggpht.com/-v0soe-ievYE/AAAAAAAAAAI/AAAAAAAAAAA/OixOH_h84Po/s900-c-k-no-mo-rj-c0xffffff/photo.jpg>";




var myName = document.createElement("div");
myName.id = "name9";
myName.innerHTML = "Brendan Hazama";
myPic.appendChild(myName);




var myPosition = document.createElement("div");
myPosition.id = "position9";
myPosition.innerHTML = "Script Kiddie";
myPic.appendChild(myPosition);


var myAlias = document.createElement("div");
myAlias.id = "alias9";
myAlias.innerHTML = "Brendan";
myPic.appendChild(myAlias);

var myBio = document.createElement("div");
myBio.id = "bio9";
myBio.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed massa felis, feugiat non malesuada at, porta non neque.";
myPic.appendChild(myBio);









