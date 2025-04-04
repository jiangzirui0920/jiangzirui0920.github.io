function music(){
     var music = $("audio")[0];
     music.play();
}

$(function(){
    var musiclink = $(".music-stop");
    var music = $("audio")[0];
    music.play();
    musiclink.click(function(){
        if(music.paused){
            music.play();
            musiclink.attr("src","/static/images/m2.png");
        }else{
            music.pause();
            musiclink.attr("src","/static/images/m1.png");
        }
    });
});