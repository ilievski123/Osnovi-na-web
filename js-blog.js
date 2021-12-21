function funk(){
    let pom1 = document.getElementById("naslov").value;
    let pom2 = document.getElementById("blog").value;

    if(pom1 == '' || pom2 == ''){
        window.alert("Please fill in the required fields.")
    }
    else{

    var datum = new Date();
    var denesen = datum.getHours() + ":" + datum.getMinutes() + ":" + datum.getSeconds() + " - " + datum.getDay() + "/" + datum.getMonth() + "/" + datum.getFullYear();

    const tatko = document.createElement("div");
    let val1 = document.createElement("h2");
    let val2 = document.createElement("p");
    let val3 = document.createElement("p");

    val3.style.float = "right";
    val3.style.color = "grey";

    val1.style.textAlign = "center";
    val2.style.textAlign = "center";

    val1.innerHTML = pom1;
    val2.innerHTML = pom2;
    val3.innerHTML = denesen;
    val3.style.float = "right";
    val3.style.color = "grey";
    
    tatko.appendChild(val1);
    tatko.appendChild(val2);
    tatko.appendChild(val3);

    document.getElementById("bl").appendChild(tatko);
    document.getElementById("bl").appendChild(document.createElement('br'));
    document.getElementById("bl").appendChild(document.createElement('hr'));
    }
}
