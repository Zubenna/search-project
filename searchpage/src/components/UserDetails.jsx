import '../Styles/UserDetails.styles.css';
import placeholderImg from '../assets/placeholderimage.png';
import {Link} from "react-router-dom";

const UserDetails = ({foundname}) => {
    const {name, username, professionalHeadline, imageUrl} = foundname;

    const saveRecent = async () => {
            console.log("Link was clicked to save in database ")
            const data = {
                full_name: name,
                username,
                professionalHeadline,
                imageUrl
            }
            try {
                const response = await fetch(`http://localhost:4050/user/saveUser/`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                });
                const result = await response.json();
                console.log("Success:", result);
            } catch (error) {
                console.error("Error:", error);
            }
    }

    return (
        <Link className="userlink"
            onClick={saveRecent}
            to={
                `https://torre.ai/${username}`
        }>

            <div className="name-container">
                {
                imageUrl ? (
                    <img alt={
                            `${name}`
                        }
                        src={
                            `${imageUrl}`
                        }
                        width={
                            `${45}`
                        }
                        height={
                            `${45}`
                        }/>
                ) : (
                    <img alt={
                            `${name}`
                        }
                        src={
                            `${placeholderImg}`
                        }
                        width={
                            `${45}`
                        }
                        height={
                            `${45}`
                        }/>
                )
            }
                <div className='name-box'>
                    <h2>{name}</h2>
                    <p>{professionalHeadline}</p>
                </div>
            </div>
        </Link>
    )
}

export default UserDetails;
