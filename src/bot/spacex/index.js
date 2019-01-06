import request from 'request-promise'

/**
 * flight_number
 * mission_name
 * launch_year
 * launch_date_utc
 * rocket: {
 *  rocket_name
 *  rocket_type
 *  first_stage: {
 *   cores: [
 *     {
 *      core_serial
 *      flight
 *      block
 *     } 
 *   ]
 *  }
 *  second_stage:{
 *   block
 *   nationality 
 *   manufacturer
 *   payload_type
 *   payload_mass_kg
 *   orbit
 *  }
 * }
 * telemetry: {
 *  flight_club
 * }
 * details
 * launch_success
 * links: {
 *  mission_patch
 *  mission_patch_small
 *  flicker_images:[]
 * }
 * 
 */
function getRequestBody(url, callback) {
    request.get(url, (error, response, body) => {
        if (!error && response.statusCode == 200) {
        const info = JSON.parse(body)
      
        callback(null, info)
        }
    }) 
}

function getSpacex () {
    const URL = 'https://api.spacexdata.com/v3/launches/latest'

    getRequestBody(URL, (error, body) => {
        if(error){
            console.log(error)
        }else {
            console.log(body)
        }
    })
}

getSpacex()