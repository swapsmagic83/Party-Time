import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
//|| "http://localhost:3001"

class EventApi {

    static async request(endpoint, data = {}, method = 'get'){
        console.log('API Call:', endpoint, data, method);

        const url = `${BASE_URL}/${endpoint}`;
        const params = (method === "get")
            ? data
            : {};

        try {
            const res = await axios({url,method,data,params});
            return res.data;
        }
        catch(err){
            console.error("API Error:", err.response);
            let message = err.response.data.error.message;
            throw Array.isArray(message) ? message : [message];
        }
    }
    static async getCardsByOccasion(occasion){
        const res = await this.request(`${occasion}`);
        return res.cards;
    }
    static async getEventLinkByInviteId(invite_id){
        const res = await this.request(`${invite_id}`);
        return res;
    }
    
    static async saveEventAndHost(eventData,hostData){
        const res = await this.request("events",{eventData,hostData},"post");
        return res;
    }
    static async findHostByEmail(email){
        const res = await this.request(`${email}`);
        return res;
    }
    static async getEventbyHostEvent(event_id){
        const res = await this.request(`${event_id}`);
        return res;
    }
    static async findEventsByEmail(email){
        const res = await this.request(`${email}`);
        return res;
    }
    
}
export default EventApi;