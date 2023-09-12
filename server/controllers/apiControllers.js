const axios = require("axios");
const userUrl = 'https://torre.bio/api/bios/';
const userSearchUrl = 'https://search.torre.co/people/_search';
// const userSearchUrl = 'http://arda.torre.co/entities/_search';

const getUser = async (req, res) => {
    try {
        const {username} = req.params;
        const response = await axios.get(`${userUrl}${username}`);
        const {
            person: {
                location: {
                    country
                },
                name,
                picture,
                professionalHeadline
            }
        } = response.data;
        const personData = {
            name,
            country,
            picture,
            professionalHeadline
        };
        return res.send(personData);
    } catch (error) {
        res.status(404).send(error)
    }
}

const searchName = async (req, res) => {
    console.log('Hitting searching')
        const data = {
        page: 10,
        periodicity: 'hourly',
        lang: 'en',
        size: 20,
        agregate: false,
        offset: 100,
    }
    try {
        const response = await fetch(`${userSearchUrl}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        const result = await response.json();
        console.log("Success:", result);
        return res.send(result);
    } catch (error) {
        console.error("Error:", error);
    }
}

module.exports = {
    getUser,
    searchName
}
