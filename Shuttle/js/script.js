window.onload = (e) => { document.querySelector("#search").onclick = searchButtonClicked };




function searchButtonClicked() {
    //Selects the currently selected Bus Stop
    let selectType = document.querySelector('#location');

    // if(selectType.value == "skip")
    // {
    // selectType.value = "";
    // }
    console.log(selectType.value);

    
    var listOfLists = [];

    var listOfBusStops = [];

    var offCampus = ["1 Off Campus Express", "7am - 10:50pm"]

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // let li = document.createElement("li");
    // // li.setAttribute("id", "listElement")
    // li.innerHTML = "NULL";

    if (selectType.value == "Off Campus") {
        console.log(document.querySelector('tbody').getElementsByTagName('tr').length);
        // let busList = [{ id: "listElement", name: "1 Off Campus Express" }, { id: "listElement", name: "1 Off Campus Express" }, { id: "listElement", name: "12 Weekend Retail" }]

        // for (let i = 0; i < busList.length; i++) {
        //     li.setAttribute("id", busList[i].id);
        //     li.innerHTML(busList[i].name);
        // }
        //     li.innerHTML = "1 Off Campus Express"
        // document.getElementById("test").append(li);

        // li.innerHTML = "12 Weekend Retail"
        // document.getElementById("test").append(li);
    }

    // if(selectType.value == "Apex")
    // {
    //     console.log("overwrite?");
    // li.innerHTML = "2 Apex"
    // document.getElementById("test").append(li);
    // }

    // if(selectType.value == "Apex" || selectType.value == "RIT Inn")
    // {
    // li.innerHTML = "3 Apex - RIT Inn"
    // document.getElementById("test").append(li);
    //}

    // let loopcheck = false;
    // console.log(document.querySelector('#test').getElementsByTagName('li').length);
    // for (let i = 0; i < document.querySelector('#test').getElementsByTagName('li').length; i++) {

    //     if (document.querySelector('#test').getElementsByTagName('li')[i].innerHTML == li.innerHTML) {

    //         loopcheck = true;
    //     }
    // }
    // if(!loopcheck)
    // {
    // document.getElementById("test").append(li);
    // }

    // console.log(document.getElementById("test"));

}