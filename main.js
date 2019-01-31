$(document).ready(
    function()
    {
        var model =
        {
            identity : 0,

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


        var octopus = 
        {
            init : function()
            {
                view.init();
            },

            getAvengers : function()
            {
                return model.avengers;
            },

            incrementClicks : function(index)
            {
                model.avengers[index].numberOfClicks++;
            },

            getClicks : function (index)
            {
                return  model.avengers[index].numberOfClicks;
            },
            setNewData : function(index, imageURL, name, description)
            {
                if(imageURL != "")
                    model.avengers[index].imageURL = imageURL;
                if(name != "")
                    model.avengers[index].name = name;
                if(description != "")
                    model.avengers[index].description = description;
                view.render();
            },
            getIdentity : function()
            {
                return model.identity;
            },
            setIdentity : function(newIdentity)
            {
                model.identity = newIdentity;
            }
        }


        var view = 
        {
            init : function ()
            {
                this.mainImage = $(".displayImage img")[0];
                this.$scroller = $(".scroller");
                this.avengers = octopus.getAvengers();
                this.$adminbutton = $("#admin-btn");
                this.$admindatabutton = $("#admindatabutton");
                this.$adminbutton.click(function()
                {
                    var $admin = $(".admin-panel");
                    if($admin[0].hidden == true)
                        $admin[0].hidden = false;
                    else if($admin[0].hidden == false)
                        $admin[0].hidden = true;
                    
                });
                
                this.$admindatabutton.click(function()
                {
                    var imageID = $(".displayImage img")[0].getAttribute("identification");
                    octopus.setNewData(imageID,$("#adminURLNew")[0].value, $("#adminNameNew")[0].value, $("#adminDescriptionNew")[0].value);
                });
                this.mainImage.addEventListener("click" , (event) => 
                {
                    octopus.incrementClicks(event.target.getAttribute("identification"));             
                    document.querySelector(".displayImage h3").innerHTML = octopus.getClicks(event.target.getAttribute("identification"));
                });
                this.render();
            },
            render : function ()
            {
                var avengers = this.avengers;
                var identity = octopus.getIdentity();
                document.querySelector(".displayImage img").src = avengers[identity].imageURL;
                document.querySelector(".displayImage img").setAttribute("identification", identity);
                document.querySelector(".displayImage h2").innerHTML = avengers[identity].name;
                document.querySelector(".displayImage h3").innerHTML = avengers[identity].numberOfClicks;
               
                this.$scroller.html('');
                for(let i =0; i<avengers.length; i++)
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
                        octopus.setIdentity(event.target.id);
                    })
                    this.$scroller[0].appendChild(cardImage);
                }

               
            }
        }
        
        octopus.init();
    }   
);


