const Display = () => {
    let userageYear = document.querySelector("#AgeYear");
    let userAgeMonth = document.querySelector("#AgeMonth");
    let userAgeDay = document.querySelector("#AgeDay");
    let Chnage=document.querySelector("#Chnage")
    let userAge = document.querySelector("#AgeInput").value;

    let errors = document.querySelector("#emptys");
    if (userAge === "") {
        errors.innerHTML = "Please Select Your Birth Date";
        errors.style.color = "red";
        userageYear.innerHTML = "";
        userAgeMonth.innerHTML = "";
        userAgeDay.innerHTML = "";
        return;
    } else {
        errors.innerHTML = ""; 
        errors.style.background = "transparent"; 
        Chnage.innerHTML="Your age is " 
    }

    
    let currentDates = new Date();
    let currentDate = currentDates.getDate();
    let currentMonth = currentDates.getMonth(); 
    let currentYear = currentDates.getFullYear();


    let userDates = new Date(userAge);
    let userDate = userDates.getDate();
    let userMonth = userDates.getMonth(); 
    let userYear = userDates.getFullYear();

  
    let ageYear = currentYear - userYear;
    let ageMonth = currentMonth - userMonth;
    let ageDay = currentDate - userDate;

    
    if (ageDay < 0) {
        ageMonth--;
        ageDay += new Date(currentYear, currentMonth, 0).getDate();  
    }

    if (ageMonth < 0) {
        ageYear--;
        ageMonth += 12;  
    }

    // Displaying the Results:
    userageYear.innerHTML = ageYear;
    userAgeMonth.innerHTML = ageMonth;
    userAgeDay.innerHTML = ageDay;
}

