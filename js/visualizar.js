var activities = document.getElementById("Enfermedades");

activities.addEventListener("change", function() {
    addActivityItem();
});

function addActivityItem() {
    if(activities.value === "si")
    {
        document.getElementById("bop").style.display = "block";
    }
    else{
        document.getElementById("bop").style.display = "none";
    }
}