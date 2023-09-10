const axios = require("axios");
const userUrl = 'https://torre.bio/api/bios/';
// const userSearchUrl = 'https://search.torre.co/people/_search';

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



module.exports = {
    getUser
}
