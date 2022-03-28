var shoeArray = {  //Passing JSON data into shoeArray
  "shoes": [
  {   
    "id":"shoe1",
    "name":"Pure Easy",
    "gender":"Women",
    "style":"Flat",
    "sizes":[4, 4.5, 5, 5.5, 6, 6.5, 7],
    "price":95.00,
    "colour":"Brown",
    "description":"These chic snake print shoes are crafted from a combination of soft leather and nubuck. For ultimate versatility, they feature a heel piece that folds down - allowing them to be worn as slip-ons or mules. The simple yet sophisticated upper is teamed with a low 2cm heel and rubber outsole to help with grip, while a leather lining and sock work together with our dual density Cushion Plus™ technology to provide comfort in every step.",
    "picture":"images/shoe2.webp",
    "url":"shoe0.html"
  },
  {
    "id":"shoe2",
    "name":"Orianna apline",
    "gender":"Women",
    "style":"Boot",
    "sizes":[5, 6, 7],
    "price":89.00,
    "colour":"Brown",
    "description":"Refreshing our bestselling Orinoco profile, a lace-up ankle boot that stays all day wearable. The premium dark olive leather upper stays classic and crafted while the cleated sole with 3cm heel feels durable and adds grip. Perfect to step into the season with casual style.",
    "picture":"images/shoe1.webp",
    "url":"shoe1.html"
  },
  {
    "id":"shoe3",
    "name":"Desert boot",
    "gender":"Men",
    "style":"Boot",
    "sizes":[4, 5, 6, 7, 8],
    "price":110.00,
    "colour":"Black",
    "description":"An icon, re-engineered for modern life: introducing the Desert Boot 2, finished in premium black suede. Remaining true to the authentic, instantly recognisable design of Nathan Clark’s pioneering Desert Boot created in 1950, it delivers enhanced, unrivalled comfort credentials for the effortless all-day wear that 21st-century life demands.",
    "picture":"images/shoe3.webp",
    "url":"shoe2.html"
  },
  {
    "id":"shoe4",
    "name":"Wave 2.0",
    "gender":"Men",
    "style":"Sports",
    "sizes":[5, 6, 7, 9],
    "price":100.00,
    "colour":"Black",
    "description":"Wave2.0 Vibe – This waterproof Unstructured style features a sleek upper built from full grain leather and lightweight textile, and the combination of a rubber outsole with an EVA midsole gives it long-term walking power without bulk. ",
    "picture":"images/shoe4.webp",
    "url":"shoe3.html"
  },
  {
    "id":"shoe5",
    "name":"Tri path trek",
    "gender":"Men",
    "style":"Sports",
    "sizes":[4, 5, 6, 7],
    "price":200.00,
    "colour":"White",
    "description":"Crafted for the outdoors, active TriPathTrekGTX has a grey combi upper with breathable GORE-TEX® waterproof technology, rugged hiker lacing and a padded collar for ankle support. Underfoot, the partly recycled Eco Foam footbed and lightweight cushioning team with gait reactive Trigenic flex grooves to allow freedom of movement.",
    "picture":"images/shoe5.webp",
    "url":"shoe4.html"
  },
  {
    "id":"shoe6",
    "name":"Wallabee Boot",
    "gender":"Women",
    "style":"Boot",
    "sizes":[5, 6, 7],
    "price":130.00,
    "colour":"White",
    "description":"The shoe of choice for revolutionaries, free thinkers, and counter-culture icons for almost 50 years, we’ve reimagined our iconic profile for effortless 21st century wear: introducing the Wallabee 2 ",
    "picture":"images/shoe6.webp",
    "url":"shoe5.html"
  },
  {
    "id":"shoe7",
    "name":"Pure Ballet 2",
    "gender":"Women",
    "style":"Flat",
    "sizes":[5, 6, 7],
    "price":30.00,
    "colour":"Red",
    "description":"Elegant and minimal, the ballet pump is eternally chic. Crafted in soft wine leather, Pure Ballet 2 refreshes the classic profile with an on-trend square toe – a simple, contemporary aesthetic that elevates any look and offers all-day comfort.",
    "picture":"images/shoe7.webp",
    "url":"shoe6.html"
  }

  ]}

  //Looping through each element in shoeArray and creating the html structure for each shoe in the product section and the favourite section
    jQuery.each( shoeArray.shoes, function( i, shoe) {
      var src=shoe.picture;
      var url=shoe.url;
      var id =shoe.id;
      var style = shoe.style;
      var name = shoe.name;
      var price=shoe.price;

      var object= "<li id='"+id+"' class='draggable'>  <img src ='"+src+"'> <h2>"+name+"</h2><h4>"+style+"</h4><h3>$"+price+"</h3><br> <i class='bx bxs-heart bx-border bx-sm' val='"+id+"' type=\"add\" ></i></li>";
      $(".search ul").append(object);

      var favObject= "<li id='fav_"+id+"' class='favShoes'><a href='"+url+"'>  <img src ='"+src+"'> <h2>"+name+"</h2><br> </a><i class='bx bx-x bx-border bx-sm' val='"+"fav_"+id+"' type=\"remove\" ></i></li>";
      $(".favorites ul").append(favObject);


    });


//function to run once document is loaded    
    $( document ).ready(function() {


    //retrieving data from local storage  
    var localShoe=[];
    if (localStorage.getItem("localShoe")!= null) {

    var localShoe=JSON.parse(localStorage.getItem("localShoe"));
        $(localShoe).each(function(index,value){
          $("#fav_"+value).css("display","block");   //displaying each shoe in favourites tab
          $("#clearButton").css("display","block");

        })

    }
    //Adding data into Shoe pages
      if($("#body").hasClass("shoe")){ 

      
      var index=$("#body").attr("value");
      var indexInt = parseInt(index);
      indexInt++;
      $("title").html(shoeArray.shoes[index].name);                                                         //retrieving data from shoeArray and adding into the specific shoe page
      for (var i =1; i <= 5; i++) {
      $(".images").append("<li><img src='shoe"+index+"_images/pic"+i+".jfif' class='thumbnail'></li>");
      }
      $("#imgMain").append("<img src='shoe"+index+"_images/pic6.jfif' class='thumbnail' id='mainImage'>");
 
      $(".description ").append("<h1>"+shoeArray.shoes[index].name+"</h1><hr>")
      $(".description ").append("<p> GENDER - "+shoeArray.shoes[index].gender+"</p>")
      $(".description ").append("<p> STYLE - "+shoeArray.shoes[index].style+"</p>")
      $(".description ").append("<p> SIZES - "+shoeArray.shoes[index].sizes+"</p>")
      $(".description ").append("<p> COLOUR - "+shoeArray.shoes[index].colour+"</p><hr>")
      $(".description ").append("<h2>$"+shoeArray.shoes[index].price+".00</h2>")
      $("#tabs1").append(shoeArray.shoes[index].description)

      
      $(".description").append("<i class='bx bxs-heart bx-border bx-sm' val='shoe"+indexInt+"' type='add'></i>")


    }

  var count=0;

    $("i").click(function favorite() {       //function to run on click of any icon

      var id=$(this).attr("val");
      var type=$(this).attr("type");
      if (type=="add") { // if button is to add
        if($("#fav_"+id).css("display")==="none"){ // if not already on favourite list push to local storage
        localShoe.push(id);

      
        }


        $("#clearButton").css("display","block");  //displaying shoe to user on favourites
        $("#fav_"+id).css("display","block");
        count++;
        
      }
      else{ //if button is to remove
        $("#"+id).css("display","none");

        $(localShoe).each(function(index,value){
          if(("fav_"+value) ===id){
            localShoe.splice(index,1);

          }

        })


        count--;

      }

      if (count==0) {
        $("#clearButton").css("display","none");
      }

      localStorage.setItem('localShoe',JSON.stringify(localShoe)); // push local array into local storage
    })


    $("#clearButton").click(function favorite() {    //clears favourites and clears local storage
      $(".favShoes").css("display","none");
      $("#clearButton").css("display","none");
      localStorage.removeItem("localShoe");

    })


    $(".draggable").css("background-color","white"); // makes products draggable
    $(".draggable").draggable({ 

      scroll:false,
      helper: 'clone',
      revert: 'invalid',
      appendTo: 'body'


    });;
    $(".favorites").droppable({ //makes products droppable
      drop:function(event,ui){

       var id=ui.draggable.attr("id");
       if($("#fav_"+id).css("display")==="none"){
        localShoe.push(id);
        localStorage.setItem('localShoe',JSON.stringify(localShoe));
      
        }
       $("#clearButton").css("display","block");
       $("#fav_"+id).css("display","block");



     }
   });
    $(".thumbnail").click(function preview() { //function to swap out thumbnail images with main image in shoe pages
    var src=$(this).attr("src");
    var mainSrc=$("#mainImage").attr("src");
    $(this).attr("src",mainSrc);
    $("#mainImage").attr("src",src);








  } )






  });



// creating jquery UI elements

  $( "#mySliderDiv" ).slider({
    orientation: "horizontal",
    min: 0,
    max: 150,
    value: 75
  });
  $( "#gender" )
  .selectmenu()
  .selectmenu( "menuWidget" )
  .addClass( "overflow" );
  $(".selectMenu").selectmenu({width:200});
  $( "#style" )
  .selectmenu()
  .selectmenu( "menuWidget" )
  .addClass( "overflow" );
  $( "#color" )
  .selectmenu()
  .selectmenu( "menuWidget" )
  .addClass( "overflow" );


  $( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 25, 470 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
  } );



  $( function() {
    $( "#size-range" ).slider({
      min: 4,
      max: 12,
      values: [7],
      slide: function( event, ui ) {
        $( "#size-amount" ).val(ui.values[ 0 ]);
      }
    });
    $( "#size-amount" ).val( $( "#size-range" ).slider( "values", 0 ) );
  } );



//search function

  $("#submitButton").click(function(){

   var gender =$("#gender").find(":selected").text();
    var style = $("#style").find(":selected").text();
    var color = $("#color").find(":selected").text();
    var minPrice = $( "#slider-range" ).slider( "values", 0 );
    var maxPrice = $( "#slider-range" ).slider( "values", 1 );
    var size= $( "#size-range" ).slider( "values", 0 ) ;

    for (var i = 0; i < shoeArray.shoes.length; i++) {
      $("#"+shoeArray.shoes[i].id).css("display","none");



    }

    for (var i = 0; i < shoeArray.shoes.length; i++) {
      var valid=true;
      if (gender!=shoeArray.shoes[i].gender&& gender !="Any") {
        valid=false;

      }
      if(style!=shoeArray.shoes[i].style && style!="Any"){
        valid=false;

      }
      if(color!=shoeArray.shoes[i].colour&&color !="Any"){
        valid=false;
      }
      var found=false;
      console.log(size);
      for (var j = 0; j < shoeArray.shoes[i].sizes.length; j++) {
        if (size ==shoeArray.shoes[i].sizes[j]){
          found=true;
        }
      }if (found!=true) {valid=false;}
      var price=shoeArray.shoes[i].price;
      if (price>=maxPrice || price <= minPrice) {
        valid=false;
      }

      if(valid==true){
        $("#"+shoeArray.shoes[i].id).css("display","block");
        $(".header").css("display","block");

      }




    }

  })


  $( ".description input" ).button();
  $( "#submitButton" ).button();
  $( "#clearButton" ).button();
  $( function() {
    $( "#tabs" ).tabs();
  } );
