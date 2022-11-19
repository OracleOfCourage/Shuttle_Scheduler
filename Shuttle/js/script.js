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

    var jefferson = [busOne, busTwelve];

    var apex = [busTwo, busThree, busNine, busEleven, busThirteen];

    var globalVillage = [bus1One, busTwelve];

    var offCampusExpress = [busOne, busTwelve];

    var parkPoint = [bus1One, busTwelve];

    var perkins = [bus1One, busTwelve];

    var province = [bus1One, busTwelve];

    var resHalls = [bus1One, busTwelve];

    var ritInn = [bus1One, busTwelve];

    var uCommons = [bus1One, busTwelve];



    var busOne = ["1 Off Campus Express", "7am - 10:50pm"]

    var busTwo = ["2 Apex", "7am - 6:06pm"]

    var busThree = ["3 Apex - RIT Inn", "6:30am - 6:17pm"]

    var busFour = ["4 Park Point - 175 Jefferson", "7am - 6:17pm"]

    var busFive = ["5 Perkins", "7am - 6:07pm"]

    var busSix = ["6 Province", "7am - 6:12pm"]
    
    var busSeven = ["7 175 Jefferson - Park Point - Province 	", "7:20am - 11:55am"]

    var busEight = ["8 RIT Inn", "6:30am - 12:52am"]
    
    var busNine = ["9 Apex / Province", "6:10pm - 8:46pm"]

    var busTen = ["10 175 Jefferson - Perkins - Park Point", "6:10pm - 8:58pm"]

    var busEleven = ["11 Campus Shuttle", "9:15pm - 1:51am"]

    var busTwelve = ["12 Weekend Retail", "6:30am - 11:12pm"]

    var busThirteen = ["13 Weekend Campus", "7am - 1:52am"]

    var busFourteen = ["14 Weekend RIT Inn", "7am - 1:42am"]




    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
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