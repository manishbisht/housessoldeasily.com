let SERVER_ADDR = 'https://developer.housessoldeasily.com/api/v1';

const API = {
    createAccount: (data) => {
        let url = SERVER_ADDR + "/signup";
        return fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
            mode: 'cors'
        }).then((response) => {
            return response.json();
        });
    },
    isAccountValid: (data) => {
        let url = SERVER_ADDR + "/login";
        return fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
            mode: 'cors'
        }).then((response) => {
            return response.json();
        });
    },
};

export default API;