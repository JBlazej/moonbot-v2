import {Dormitory} from '../models/v1/dormitory'



export async function createDormitory (id, title, headName, headEmail, headPhone, repName, repEmail, repEmail, adressURL) {
    const dormitory = new Dormitory({
        id: id, 
        title: title, 
        contact: {
            head: {
                name: headName,
                email: headEmail,
                phone: headPhone
            },
            representative: {
                name: repName, 
                email: repEmail, 
                phone: repEmail
            }
        },
        adressURL: adressURL})
    
    dormitory.save()

    return dormitory
}