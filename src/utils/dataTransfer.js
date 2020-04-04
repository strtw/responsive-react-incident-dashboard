import {baseUrl} from '../shared/baseUrl';


export function fetchIncidents (callback){
    return fetch(baseUrl + 'incidents')
        .then(response => {//response from server
            if(response.ok){
                return response;
            }else{
                var error = new Error('Error ' + response.status + ": " + response.statusText)
                error.response = response;
                throw error;
            }
        },
        error =>{ //no response from server
            var errmess = new Error(error.message)
            throw errmess;
        })
        .then(response => response.json())
        .then(incidents => this.setState({incidents:incidents, isLoading:false},callback) )
        .catch(error => this.setState({fetchError:error.message}))
}