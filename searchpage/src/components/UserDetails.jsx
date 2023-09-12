import '../Styles/UserDetails.styles.css';
import placeholderImg from '../assets/placeholderimage.png';

const UserDetails = ({foundname}) =>{

const {ggId, name, professionalHeadline, imageUrl} = foundname;

console.log('Sample Foundname Object', foundname)
      return (
            <div className="name-container" key={ggId}>
          {
            imageUrl? ( <img alt={`${name}`} src={`${imageUrl}`} width={`${45}`} height={`${45}`} />) : (<img alt={`${name}`} src={`${placeholderImg}`} width={`${45}`} height={`${45}`} />)
          }
            <div className='name-box'>
            <h2>{name}</h2>
            <p>{professionalHeadline}</p>
            </div>
            </div>
      )
    }

export default UserDetails;



