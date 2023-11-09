//https://teachablemachine.withgoogle.com/models/jzRSXGVB8/
function startclassification() {
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/jzRSXGVB8/model.json",model_ready)

}
 function model_ready() {
classifier.classify(got_results)
 }
 function got_results(error,results) {
    console.log('got_results')
    if (error) {
        console.log(error)

    }
    else {
        console.log(results)
        r=Math.floor(Math.random()*255)+1
        g=Math.floor(Math.random()*255)+1
        b=Math.floor(Math.random()*255)+1
        document.getElementById("result_label").innerHTML='I can hear - '+results[0].label
        document.getElementById("result_confidence").innerHTML='Accuracy - '+(results[0].confidence*100).toFixed(2)+"%"
        document.getElementById("result_label").style.color="rgb("+r+","+g+","+b+")"
        document.getElementById("result_confidence").style.color="rgb("+r+","+g+","+b+")"
        img1=document.getElementById("Alien_1")
        img2=document.getElementById("Alien_2")
        img3=document.getElementById("Alien_3")
        img4=document.getElementById("Alien_4")
        if (results[0].label=="clap") {
            img1.src="aliens-01.gif"
            img2.src="aliens-02.png"
            img3.src="aliens-03.png"
            img4.src="aliens-04.png"
        }
        else if (results[0].label=="snap") {
            img1.src="aliens-01.png"
            img2.src="aliens-02.gif"
            img3.src="aliens-03.png"
            img4.src="aliens-04.png"
        }
        else if (results[0].label=="rubbing") {
            img1.src="aliens-01.png"
            img2.src="aliens-02.png"
            img3.src="aliens-03.gif"
            img4.src="aliens-04.png"
        }
        else {
            img1.src="aliens-01.png"
            img2.src="aliens-02.png"
            img3.src="aliens-03.png"
            img4.src="aliens-04.gif"
        }
    }
 }
 