//https://teachablemachine.withgoogle.com/models/hNa5uMjNc/
Webcam.attach("#camera");
camera = document.getElementById("camera");
Webcam.set({
    width:340,
    height:300,
    image_format:"png",
    png_quality:90
});
function capturar() {
    Webcam.snap(function(data_uri){
        document.getElementById("imagem").innerHTML = '<img id="img" src="'+data_uri+'">;'
    });
}
console.log("ml5.version", ml5.version );
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/hNa5uMjNc/model.json", modelLoad);
function modelLoad() {
    console.log("modelo carregado");
}
function identificar() {
    img = document.getElementById("img");
    classifier.classify(img, gotResults);
}
function gotResults(error, results) {
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("resultado").innerHTML = results[0].label;
        document.getElementById("precisao").innerHTML = results[0].confidence.toFixed(3);
    }
}