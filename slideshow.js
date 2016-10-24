/**
 * Created by jaWeber on 9/24/16.
 */
var $ = function (id) {
    return document.getElementById(id);
};

var slide = new(Image);
var slides = ["images/JSSlideShow01.png","images/JSSlideShow02.png","images/JSSlideShow03.png","images/JSSlideShow04.png",
    "images/JSSlideShow05.png","images/JSSlideShow06.png","images/JSSlideShow07.png","images/JSSlideShow08.png",
    "images/JSSlideShow09.png","images/JSSLideShow10.png","images/JSSLideShow11.png"];
var titles = ["Pink Clematis", "Purple Ball Flower", "Japanese Iris", "Mums", "Blue/Purple Flower", "Mini, Pink Flowers",
    "More Mini, Pink FLowers", "Still More Mini, Pink Flowers","Day Lily", "Sunset", "Ringed Sun"];
var captions = ["A beautiful climbing perenial flower, six inches across - growing along the wall below our deck.",
    "A perenial plant that blooms early in the spring with heights reaching 5 ft!  In the bed directly in back of our house.",
    "A perenial plant with huge blossoms six inches across that bloooms in early spring.  We have a 3 square foot clump of these " +
    "in our rear bed away from the house.",
    "A fall favorite.  These are inside on the kitchen table.  Taken on an August evening 2016.",
    "A perenial that blooms mid-summer with samller blooms 1.5-2 inches across. These are in the bed directly in back of our house.",
    "An annual - not sure what it is - some kind of mini-wave-petunia, I think. These are in several of our deck containers",
    "An annual - another type of wave-petunia, I think.  Also in several of our deck containers and hanging baskets.",
    "An annual - not sure what it is - and really don't have a good guess. These are in our hanging baskets and deck containers.",
    "A perenial plant that blooms in early summer with heights ranging from 3-4 feet.  These are along the walk near out front door.",
    "A beautiful August evening (2016) from our driveway looking west (duh!).",
    "I was perched on my towel at Crystal Lake Main Beach several years ago and looked up.  So pretty I tried to capture it!"];
var count = slides.length;
var currentSlide = 0;
var timer;

// preloading the images for the slide show
var preload = function()
{
    for (var i=0; i<count; i++) {
        slide.src = slides[i];
        slides.push(slide);
    }
};  // end of preload

//changing the play / pause settings
var slidecontrol = function () {
    var path=$("playpause").src;
    //alert (path);
    var testState = new RegExp("play");
    if(testState.test(path)) {
        $("playpause").src = "images/pause.png";
        displayImage();
    }
    else {
        $("playpause").src = "images/play.png";
        clearTimeout(timer);
    }
};  // end of slidecontrol


var displayImage = function()
{
    if (currentSlide > 10) {
        currentSlide = 0;
    }

    $("main_image").src = slides[currentSlide];
    $("title").innerHTML =titles[currentSlide];
    $("caption").innerHTML =captions[currentSlide];

    currentSlide++;
    timer = setTimeout(displayImage, 5500);
};  // end of displayImage()


window.onload = function() {
    preload();
};