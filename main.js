function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/7SRlwHo7v/",modelLoaded);
}
function modelLoaded(){
    classifier.classify(gotResults);
}
function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_r=Math.floor(Math.random()*255)+1;
        random_g=Math.floor(Math.random()*255)+1;
        random_b=Math.floor(Math.random()*255)+1;

        document.getElementById("result_label").innerHTML="I can hear- "+results[0].label;
        document.getElementById("result_confidence").innerHTML="Accuracy- "+(results[0].confidence*100).toFixed(2)+"%";

        document.getElementById("result_label").style.color="RGB("+random_r+","+random_g+","+random_b+")";
        document.getElementById("result_confidence").style.color="RGB("+random_r+","+random_g+","+random_b+")";

        img1=document.getElementById("zebra");
        img2=document.getElementById("lion");
        img3=document.getElementById("cat");
        img4=document.getElementById("dog");

        if(results[0].label=="clap"){
            img1.src="aliens-01.gif";
            img2.src="aliens-02.png";
            img3.src="aliens-03.png";
            img4.src="aliens-04.png";
        }
        else if(results[0].label=="ringtone1"){
            img1.src="aliens-01.png";
            img2.src="aliens-02.gif";
            img3.src="aliens-03.png";
            img4.src="aliens-04.png";
        }
        else if(results[0].label=="ringtone2"){
            img1.src="aliens-01.png";
            img2.src="aliens-02.png";
            img3.src="aliens-03.gif";
            img4.src="aliens-04.png";
        }
        else if(results[0].label=="Background Noise"){
            img1.src="aliens-01.png";
            img2.src="aliens-02.png";
            img3.src="aliens-03.png";
            img4.src="aliens-04.gif";
        }
    }
}