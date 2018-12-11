import axios from 'axios';

class SessionManager {
    makeUrlRequest(url, callback) {
        if (sessionStorage.getItem(url) === null) {
            axios(url).then(result => 
                {
                    sessionStorage.setItem(url, JSON.stringify(result));
                    callback(result);
                });
        }
        else {
            callback(JSON.parse(sessionStorage.getItem(url)));
        }
    }
}

export { SessionManager };
export default SessionManager;