Webcam.set({
    width:400,
    height:300,
    image_format : 'png',
    png_quality : 100
});

Webcam.attach("#camera");

function capture(){
    Webcam.snap(function(selfie){
        document.getElementById("result").innerHTML = "<img src = "+selfie+" id='imgsave'>";
    });
}
console.log('ml5version',ml5.version);

classifier = ml5.imageClassifier("https://storage.googleapis.com/tm-model/Des8D-AbF/model.json",modelloaded);

function modelloaded(){
    console.log('model is loaded');
}

function identify(){
    classifier.classify(document.getElementById("imgsave"),gotresult);
}

function gotresult(error,result){
    if(error){
        console.error(error);
    }
    else{
        console.log(result);
        document.getElementById("object").innerHTML = result[0].label;
        document.getElementById("accuracy").innerHTML = (result[0].confidence*100).toFixed(2) + "%";
    }
}

function reset(){
    location.reload();
}           