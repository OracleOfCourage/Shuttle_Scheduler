window.onload = (e) => { document.querySelector("#search").onclick = searchButtonClicked };




function searchButtonClicked()
{
    //Selects the currently selected Bus Stop
    let selectType = document.querySelector('#location');

if(selectType.value == "skip")
{
selectType.value = "";
}
    console.log(selectType.value);
}