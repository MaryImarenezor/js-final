/*Grading NOTES---------
 - i tried to fix up the bug with the event selector with the submit button. I commented it out so the code could be functional
 - i was able to pull up a marker that displayed the user's location
 - the map was able to show up

*/

/* Part 1 NOTES--------
 get API from twelvedata or from any alternative api generator site

for getting the user's location, adding it to the map, getting the selected location, and adding info to the map, refer to activity and documentation for help
use geolocation to get the user's location

selesct interface
    insert a dropbox in html
    create a space for the map (use documentation for help)
*/

/* Part 2 NOTES--------

hardcode in the coordinates = place in filler coordinates until api is set up
2.
build the rest of the map by following along with leaflet startup guide
wrap this around a funciton and use 'coords' as a paramater to replace the filler coords
insert a marker for the user's location

1. 
receive the users coords

3 and 4.
use an addEventListener to get the data from the user
    when using the addEventListener, use the submit button as a way for the querySelector
    use the addEventListener with the 'click' as the first parameter and the searchFunction as a way to filter the results
    for the createAMarker function, try and doing this:
        function createAMarker(put "this" as a parameter) {}
        replace the coords.lat, coords.long with this.lat, this.long
        invoke the funciton but put 'coords' as the parameter


set the view in the code below to the users lat and long instead of the set coordinates
    var map = L.map('map').setView([51.505, -0.09], 13);


*/
async function getUsersLocation() {
    let pos = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
    })

    return [Math.floor(pos.coords.latitude), Math.floor(pos.coords.longitude)]
}

//replace the x and y coords with user's x and y coords.
function createMap(coords) { 
    var map = L.map('map').setView(coords, 13)
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    var marker = L.marker(coords).bindPopup("<p1><b>You Are Here<b><br><p1>").addTo(map);

}



document.getElementById("submit").addEventListener("click", async (event) => {
    event.preventDefault()
    let locations = document.getElementById("locations").value
})


//////a function main will be at the very bottom of this code/////////
async function main() {
    //all the functions we created will be invoked here
    let coords = await getUsersLocation()
    createMap(coords)
}
main()


