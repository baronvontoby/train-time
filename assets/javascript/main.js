$(document).ready(function(){

    
    var firebaseConfig = {
        apiKey: "AIzaSyBodAJBSWVixO9VGK__lTgevxL4srIQbGk",
        authDomain: "all-aboard-my-train.firebaseapp.com",
        databaseURL: "https://all-aboard-my-train.firebaseio.com",
        projectId: "all-aboard-my-train",
        storageBucket: "all-aboard-my-train.appspot.com",
        messagingSenderId: "1072338119898",
        appId: "1:1072338119898:web:c63a705348b1c640"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    var database = firebase.database();
    
    $("#btn-submit").on("click", function(event){
        event.preventDefault();
        
        var trainName = $("#train-name-input").val().trim();
        var trainDestination = $("#destination-input").val().trim();
        var trainFrequency = parseInt($("#frequency-input").val().trim());
        var trainFrist = parseInt($("#first-train-input").val().trim());
        
        console.log(trainName);
        console.log(trainDestination);
        console.log(trainFrequency);
        console.log(trainFrist);
        
        let newName = $("<p>");
        newName.attr("id", "new-train");
        newName.addClass("row");
        newName.text(trainName);
        $("#train-name-display").append(newName);
        
        let newDestination = $("<p>");
        newDestination.attr("id", "new-destination");
        newDestination.addClass("row");
        newDestination.text(trainDestination);
        $("#destination-display").append(newDestination);
        
        let newFrequency = $("<p>");
        newFrequency.attr("id", "new-frequency");
        newFrequency.addClass("row");
        newFrequency.text(trainFrequency);
        $("#frequency-display").append(newFrequency);
        
    });


})