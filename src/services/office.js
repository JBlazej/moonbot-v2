import {Office} from '../models/v1/office'

export async function createOffice (id, college, name, time){
    const office = new Office({
        id: id, 
        college: college,
        name: name,
        opening: time
        
    })
    
    office.save()

    return office
}

export async function getOfficeById (id) {
    const office = Office.find({"id": id})
    
    return office
}