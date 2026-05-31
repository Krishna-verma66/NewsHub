import axios from "axios"


const API = axios.create({
    baseURL: 'https://surfacing-twice-backyard.ngrok-free.dev',
    headers: {
        "ngrok-skip-browser-warning": "true"
    }
});


export const fetchSavedData = () => {
    let data = JSON.parse(localStorage.getItem('savedNews')) || [];
    return data;
}

export const fetchNews = async () => {
    try {
        let response = await API.get('/news');
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }

}

export const fetchAllCategoty = async () => {
    try {
        let response = await API.get('/news/all');
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }

}

export const fetchBusinessCategoty = async () => {
    try {
        let response = await API.get('/news/business');
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }

}

export const fetchTechnologyCategoty = async () => {
    try {
        let response = await API.get('/news/technology');
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }

}

export const fetchHealthCategoty = async () => {
    try {
        let response = await API.get('/news/health');
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }

}

export const fetchSportsCategoty = async () => {
    try {
        let response = await API.get('/news/sports');
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }

}

export const fetchEntertainmentCategoty = async () => {
    try {
        let response = await API.get('/news/entertainment');
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }

}

export const fetchScienceCategoty = async () => {
    try {
        let response = await API.get('/news/science');
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }

}


export const fetchSearchedCategoty = async (query) => {

    try {

        let queryparas = query.replaceAll(' ', '&');

        console.log(queryparas);

        let response = await API.get(`/news/search?query=${queryparas}`);
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }

}

