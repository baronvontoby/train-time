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
        var trainFirst = parseInt($("#first-train-input").val().trim());
        
        database.ref().push({
            trainName: trainName,
            trainDestination: trainDestination,
            trainFrequency: trainFrequency,
            trainFirst: trainFirst
        });
        console.log(trainName);
        console.log(trainDestination);
        console.log(trainFrequency);
        console.log(trainFirst);

        let newRow = $("<div>");
        newRow.addClass("row new-train-row");
        $("#train-rows").append(newRow);

        let newNameCol = $("<div>");
        newNameCol.addClass("col-3");
        newNameCol.attr("id", "train-name-display");
        $(".new-train-row").append(newNameCol);

        let newDestinationCol = $("<div>");
        newDestinationCol.addClass("col-3");
        newDestinationCol.attr("id", "destination-display");
        $(".new-train-row").append(newDestinationCol);

        let newFrequencyCol = $("<div>");
        newFrequencyCol.addClass("col-2");
        newFrequencyCol.attr("id", "frequency-display");
        $(".new-train-row").append(newFrequencyCol);

        let nextArrivalCol = $("<div>");
        nextArrivalCol.addClass("col-2");
        nextArrivalCol.attr("id", "next-arrival-display");
        $(".new-train-row").append(nextArrivalCol);

        let minutesAwayCol = $("<div>");
        minutesAwayCol.addClass("col-2");
        minutesAwayCol.attr("id", "minutes-away-display");
        $(".new-train-row").append(minutesAwayCol);
        
        let newName = $("<p>");
        newName.attr("id", "new-train");
        newName.text(trainName);
        $("#train-name-display").append(newName);
        
        let newDestination = $("<p>");
        newDestination.attr("id", "new-destination");
        newDestination.text(trainDestination);
        $("#destination-display").append(newDestination);
        
        let newFrequency = $("<p>");
        newFrequency.attr("id", "new-frequency");
        newFrequency.text(trainFrequency);
        $("#frequency-display").append(newFrequency);

        let nextArrival = $("<p>");
        nextArrival.attr("id", "next-arrival");
        nextArrival.text(arrival());
        $("#next-arrival-display").append(nextArrival);

        let minutesAway = $("<p>");
        minutesAway.attr("id", "minutes-away");
        minutesAway.text(timeAway());
        $("#minutes-away-display").append(minutesAway);

        function timeAway () {
            var firstTimeConverted = moment(trainFirst, "HH:mm").subtract(1, "years");
            var currentTime = moment();
            moment(currentTime).format("HH:mm");
            var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
            var tRemainder = diffTime % trainFrequency;
            var timeAway = trainFrequency - tRemainder;
            return timeAway;
        }
        
        function arrival () {
           var arrivalTime = moment().add(timeAway(),"minutes");
           return moment(arrivalTime).format("hh:mm:a");
        }
    });

})