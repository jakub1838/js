//document.body
document.addEventListener('keypress', onKeyPress)

function onKeyPress(event) {
    var key = event.key
    //ktory dzwiek w zaleznosci od klawisza
    var sound ="clap"
    
    if(key == "1"){
       sound = "boom"
    }else if(key == "2"){
       sound = "clap"
    }else if(key == "3"){
       sound = "hihat"
    }else if(key == "4"){
       sound = "kick"
    }else if(key == "5"){
       sound = "openhat"
    }else if(key == "6"){
       sound = "ride"
    }else if(key == "7"){
       sound = "snare"
    }else if(key == "8"){
       sound = "tink"
    }else if(key == "9"){
       sound = "tonk"
    }else if(key == "0"){
        metronom()
    } 
    playSound(sound)
}

function playSound(sound){
    const audioTag = document.querySelector('#' + sound)
    audioTag.currentTime = 0
    audioTag.play()
}

/*
function metronom(){
    const audioTag = document.querySelector("#tink")
    var isOn = 0
    if(isOn == 0){
        isOn = 1
        audioTag.play()
    }else{
        isOn = 0
    }
}
*/
//do tablicy i timestampy odjąć od siebie
//set time out