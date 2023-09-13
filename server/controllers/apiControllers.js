
const userSearchUrl = 'https://arda.torre.co/entities/_search';

const searchName = async (req, res) => {
       const {dename} = req.params;
        const data = {                
        query: `${dename}`,
        identityType: "person",
        limit: 10,
        meta: true,
        excludeContacts: true
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
    searchName
}
