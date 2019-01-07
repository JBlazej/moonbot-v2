import {Office} from '../models/v1/office'

export async function createOffice (id, monday, tuesday, wednesday, thursday, friday){
    const office = new Office({
        id: id, 
        monday: monday,
        tuesday: tuesday,
        wednesday: wednesday,
        thursday : thursday,
        friday: friday
    })
    
    office.save()

    return office
}

export async function getOfficeById (id) {
    const office = Office.find({"id": id})
    
    return office
}