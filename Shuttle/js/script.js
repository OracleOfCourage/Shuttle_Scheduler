window.onload = (e) => { document.querySelector("#search").onclick = searchButtonClicked };




function searchButtonClicked() {
    //Selects the currently selected Bus Stop
    let selectType = document.querySelector('#location');

    // if(selectType.value == "skip")
    // {
    // selectType.value = "";
    // }


    var busOne = ["1 Off Campus Express", "7am - 10:50pm"]

    var busTwo = ["2 Apex", "7am - 6:06pm"]

    var busThree = ["3 Apex - RIT Inn", "6:30am - 6:17pm"]

    var busFour = ["4 Park Point - 175 Jefferson", "7am - 6:17pm"]

    var busFive = ["5 Perkins", "7am - 6:07pm"]

    var busSix = ["6 Province", "7am - 6:12pm"]

    var busSeven = ["7 175 Jefferson - Park Point - Province", "7:20am - 11:55am"]

    var busEight = ["8 RIT Inn", "6:30am - 12:52am"]

    var busNine = ["9 Apex / Province", "6:10pm - 8:46pm"]

    var busTen = ["10 175 Jefferson - Perkins - Park Point", "6:10pm - 8:58pm"]

    var busEleven = ["11 Campus Shuttle", "9:15pm - 1:51am"]

    var busTwelve = ["12 Weekend Retail", "6:30am - 11:12pm"]

    var busThirteen = ["13 Weekend Campus", "7am - 1:52am"]

    var busFourteen = ["14 Weekend RIT Inn", "7am - 1:42am"]



    var jefferson = [busFour, busSeven, busTen, busEleven, busThirteen];

    var apex = [busTwo, busThree, busNine, busEleven, busThirteen];

    var globalVillage = [busEight, busEleven, busThirteen, busFourteen];

    var offCampusExpress = [busOne, busTwelve];

    var parkPoint = [busFour, busSeven, busTen, busEleven, busThirteen];

    var perkins = [busFive, busTen, busEleven, busThirteen];

    var province = [busSix, busSeven, busNine, busEleven, busThirteen];

    var resHalls = [busFour, busFive, busSix, busSeven, busNine, busTen, busEleven, busTwelve, busThirteen];

    var ritInn = [busThree, busEight, busFourteen];

    var uCommons = [busEight, busEleven, busThirteen, busFourteen];



    var listOfbusses = [jefferson, apex, globalVillage, offCampusExpress, parkPoint, perkins, province, resHalls, ritInn, uCommons];





    var tableArea = document.getElementById('tableArea');

    let test = tableArea.querySelector('table')
    if (test) {
        test.remove();
    }

    tableThing = document.createElement('table');

    tHead = document.createElement('tr');
    tHead.appendChild(document.createElement('th'));
    tHead.appendChild(document.createElement('th'));

    tHead.cells[0].appendChild(document.createTextNode("Shuttle Route"));
    tHead.cells[1].appendChild(document.createTextNode("Hours of Operation"));

    tableThing.appendChild(tHead);

    let busStop = 0;

    switch (selectType.value) {
        case "175 Jefferson":
            busStop = 0;
            break;
        case "Apex":
            busStop = 1;
            break;
        case "Global Village / Riverknoll":
            busStop = 2;
            break;
        case "Off Campus":
            busStop = 3;
            break;
        case "Park Point":
            busStop = 4;
            break;
        case "Perkins":
            busStop = 5;
            break;
        case "Province":
            busStop = 6;
            break;
        case "Residence Halls":
            busStop = 7;
            break;
        case "RIT Inn":
            busStop = 8;
            break;
        case "University Commons":
            busStop = 9;
            break;
        default:
            busStop = null;
            break;
    }

    if (busStop != null) {
        for (let i = 0; i < listOfbusses[busStop].length; i++) {

            tr = document.createElement('tr');

            console.log(listOfbusses[busStop][i]);


            tr.appendChild(document.createElement('td'));
            tr.appendChild(document.createElement('td'));

            a = document.createElement('a');
            a.setAttribute("target", "_blank");
            switch (listOfbusses[busStop][i][0]) {
                case "1 Off Campus Express":
                    a.setAttribute("href", "https://www.rit.edu/parking/1-campus-express");
                    var linkText = document.createTextNode("1 Off Campus Express");
                    break;
                case "2 Apex":
                    a.setAttribute("href", "https://www.rit.edu/parking/2-apex");
                    var linkText = document.createTextNode("2 Apex");
                    break;
                case "3 Apex - RIT Inn":
                    a.setAttribute("href", "https://www.rit.edu/parking/3-apex-rit-inn");
                    var linkText = document.createTextNode("3 Apex - RIT Inn");
                    break;
                case "4 Park Point - 175 Jefferson":
                    a.setAttribute("href", "https://www.rit.edu/parking/4-park-point-175-jefferson");
                    var linkText = document.createTextNode("4 Park Point - 175 Jefferson");
                    break;
                case "5 Perkins":
                    a.setAttribute("href", "https://www.rit.edu/parking/5-perkins-green");
                    var linkText = document.createTextNode("5 Perkins");
                    break;
                case "6 Province":
                    a.setAttribute("href", "https://www.rit.edu/parking/6-province");
                    var linkText = document.createTextNode("6 Province");
                    break;
                case "7 175 Jefferson - Park Point - Province":
                    a.setAttribute("href", "https://www.rit.edu/parking/7-175-jefferson-park-point-province");
                    var linkText = document.createTextNode("7 175 Jefferson - Park Point - Province");
                    break;
                case "8 RIT Inn":
                    a.setAttribute("href", "https://www.rit.edu/parking/8-rit-inn");
                    var linkText = document.createTextNode("8 RIT Inn");
                    break;
                case "9 Apex / Province":
                    a.setAttribute("href", "https://www.rit.edu/parking/9-apex-province");
                    var linkText = document.createTextNode("9 Apex / Province");
                    break;
                case "10 175 Jefferson - Perkins - Park Point":
                    a.setAttribute("href", "https://www.rit.edu/parking/10-175-jefferson-perkins-park-point");
                    var linkText = document.createTextNode("10 175 Jefferson - Perkins - Park Point");
                    break;
                case "11 Campus Shuttle":
                    a.setAttribute("href", "https://www.rit.edu/parking/11-campus-shuttle");
                    var linkText = document.createTextNode("11 Campus Shuttle");
                    break;
                case "12 Weekend Retail":
                    a.setAttribute("href", "https://www.rit.edu/parking/12-weekend-retail-shuttle");
                    var linkText = document.createTextNode("12 Weekend Retail");
                    break;
                case "13 Weekend Campus":
                    a.setAttribute("href", "https://www.rit.edu/parking/13-weekend-campus-shuttle");
                    var linkText = document.createTextNode("13 Weekend Campus");
                    break;
                case "14 Weekend RIT Inn":
                    a.setAttribute("href", "https://www.rit.edu/parking/14-weekend-rit-inn");
                    var linkText = document.createTextNode("14 Weekend RIT Inn");
                    break;
                default:
                    a.setAttribute("href", "https://people.rit.edu/cal7183/Shuttle_Scheduler/Shuttle/");
                    var linkText = document.createTextNode("ERROR");
                    break;
            }

            a.appendChild(linkText);

            // tr.cells[0].appendChild(document.createTextNode(listOfbusses[busStop][i][0]));
            tr.cells[0].appendChild(a);
            tr.cells[1].appendChild(document.createTextNode(listOfbusses[busStop][i][1]));


            // tr.cells[0].setAttribute("href", "http://www.microsoft.com");

            tableThing.appendChild(tr);
            tableArea.appendChild(tableThing);
        }
    }
}