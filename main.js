function preload(){

}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/vRctajOdQ/',modelLoaded());

}
 function modelLoaded(){
    console.log('Model has been loaded!');
 }


function draw(){
    image(img,0,0,300,300);
    classifier.classify(video,gotReult);
}

function gotResult(error,result){
    if (error) {
        console.error(error)
        
    } else {
        console.log(result)
        document.getElementById("result_object_name").innerHTML=result[0].label;
        document.getElementById("result_object_accuracy").innerHTML=result[0].confidence.toFixed(2);

    }

}

