//objects
const tony = {
    name: "Tony",
    weight: 30,
    bread: "bullpit",
    vaccination: true,
    age: 1

}
const billu = {
    name: "Billu",
    weight: 35,
    bread: "mini",
    vaccination: true,
    age: 2
}
const jimmy = {
    name: "jimmy",
    weight: 55,
    bread: "anyone",
    vaccination: true,
    age: 2
}
const biny = {
    name: "biny",
    weight: 30,
    bread: "mini",
    vaccination: true,
    age: 1

}
//dog collection in aray
const dogscollection = []
//.push for pushing different name object in dog collection
dogscollection.push(tony)
dogscollection.push(billu)
dogscollection.push(jimmy)
dogscollection.push(biny)

const park = {
    name: "Franky pierce park",
    largeArea: [],
    mediumArea: [],
    smallArea: [],
    vaccination: []

}
const dogHTMLRepresentation = (dogObject) => {
    return `<li>${dogObject.name}</li>`}
document.querySelector(".parkName").innerHTML = park.name

    for (const dogObject of dogscollection) {
        let html = dogHTMLRepresentation(dogObject)
        //only dog vaccinated dog go to park
        if (dogObject.vaccination || dogObject.age < 1) {
            console.log("in the vaccination if")
            if (dogObject.weight <= 30) {
                //Dog less then and equal then 30 will go to small area
                park.smallArea.push(dogObject)
                document.querySelector(".smallDogs")
                    .innerHTML += html

            } else if
             (dogObject.weight >= 31 && dogObject.weight <= 50) {
                park.mediumArea.push(dogObject)
                document.querySelector(".mediumDogs")
                    .innerHTML += html


            } else {
                //Dog greater then 30 pond will go to big area
                park.largeArea.push(dogObject)
                dogHTMLRepresentation(dogObject)
                document.querySelector(".largeDogs")
                    .innerHTML += html
            }
        }

    }

console.log(park)
