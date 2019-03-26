const request = require('request-promise')
const BASE_URL = 'http://swapi.co/api'


console.log('before')
getLinks((veh) =>{
    // for (let i = 0; i < veh.length; i++) {
        values = Object.values(veh)
        car1 = values[0]
        car2 = values[1]
        // getCars(car1)
        console.log(values)
        // values.forEach(function(element) {
        //     console.log(element);
        //   });
    //     const  element = veh[i];  
    // console.log(element)  
// }
})
getCars((auto)=>{
    values = Object.values(auto)
    console.log(auto)
})

console.log('after')

    async function getLinks(callback){
        const person = await request(`${BASE_URL}/people/1`)
        const Person_obj = JSON.parse(person)
        const vehicles_links = (Person_obj.vehicles)
        console.log('Working hard to get links for vehicles')
        callback(vehicles_links)
    }

    async function getCars(callback){
        const cars1 = await request('http://swapi.co/api/vehicles/14')
        const car_obj = JSON.parse(cars1)
        const auto = (car_obj.name)
        console.log('Working hard to get actuall Vehicles')
        callback(auto)
    }