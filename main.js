$(document).ready(
    function()
    {
        var model =
        {
            iterator : 0,

            avengers : [
                {
                    id : 0 , 
                    imageURL : "Images/thor_painting_romero.jpg" , 
                    name : "Thor" , 
                    description : "This is a description" ,
                    numberOfClicks : 0
                } , 
                {
                    id : 1 , imageURL : "Images/ironman_painting_romero.jpg" , 
                    name : "Iron Man" , 
                    description : "This is a description" , 
                    numberOfClicks : 0
                } ,
                {
                    id : 2 , 
                    imageURL : "Images/captainamerica_painting_romero.jpg" , 
                    name : "Captain America" , 
                    description : "This is a description" ,
                    numberOfClicks : 0
                } ,
                {
                    id : 3 , 
                    imageURL : "Images/hulk_painting_romero.jpg" , 
                    name : "Hulk" , 
                    description : "This is a description" , 
                    numberOfClicks : 0
                } ,
                {
                    id : 4 , 
                    imageURL : "Images/antman_painting_romero.jpg" , 
                    name : "Ant Man" , 
                    description : "This is a description" , 
                    numberOfClicks : 0
                } ,
                {
                    id : 5 , 
                    imageURL : "Images/deadpool_painting.png" , 
                    name : "Deadpool" , 
                    description : "This is a description" , 
                    numberOfClicks : 0
                } 
            ]
        }


        var controller = 
        {
            
        }


        var view = 
        {
            init : function ()
            {
                var mainImage = $(".displayImage img");
            },
            render : function ()
            {
                this.mainImage.addEventListener("click" , (event) => 
                {
                    console.log(event.target.getAttribute("identification"));
                    avengers[event.target.getAttribute("identification")].numberOfClicks++;             
                    document.querySelector(".displayImage h3").innerHTML = avengers[event.target.getAttribute("identification")].numberOfClicks;
                });
            }
        }
        createAvengersScroller();
   
    }   
);




const createAvengersScroller = () =>
{
    var divRow = document.querySelector(".mainBody");

    var divScroller = document.createElement("div");
    divScroller.className = "col-sm-2 scroller";

    var divDisplayArea = document.createElement("div");
    divDisplayArea.className = "col-sm-4 displayImage";

    var divDisplayAreaImage = document.createElement("img");
    divDisplayAreaImage.src = avengers[0].imageURL;
    divDisplayAreaImage.setAttribute("identification" , 0);
    divDisplayAreaImage.addEventListener("click" , (event) => 
        {
            console.log(event.target.getAttribute("identification"));
            avengers[event.target.getAttribute("identification")].numberOfClicks++;             
            document.querySelector(".displayImage h3").innerHTML = avengers[event.target.getAttribute("identification")].numberOfClicks;
        })
    var divDisplayAreaName = document.createElement("h2");
    divDisplayAreaName.innerHTML = avengers[0].name;
    var divDisplayAreaClicks = document.createElement("h3");
    divDisplayAreaClicks.innerHTML = avengers[0].numberOfClicks;

    divDisplayArea.appendChild(divDisplayAreaImage);
    divDisplayArea.appendChild(divDisplayAreaName);
    divDisplayArea.appendChild(divDisplayAreaClicks);
    
    for(var i =0; i<avengers.length; i++)
    {
        var cardImage = document.createElement("img");
        cardImage.className = "card-img-top";
        cardImage.src = avengers[i].imageURL;
        cardImage.id = avengers[i].id;
        cardImage.addEventListener("click" , (event) => 
        {             
            document.querySelector(".displayImage img").src = avengers[event.target.id].imageURL;
            document.querySelector(".displayImage img").setAttribute("identification", event.target.id);
            document.querySelector(".displayImage h2").innerHTML = avengers[event.target.id].name;
            document.querySelector(".displayImage h3").innerHTML = avengers[event.target.id].numberOfClicks;
        })
        divScroller.appendChild(cardImage);
    }
   divRow.appendChild(divScroller);
   divRow.appendChild(divDisplayArea);

}


