import PropTypes from 'prop-types';
import css from "./FriendListItem.module.css"

const FriendListItem = ({ name, isOnline, avatar, id }) => {
    return (
            <li className={css.item} key={id}>
                {isOnline ?
                    <span className={css.status} style={{ backgroundColor: 'green' }}></span>
                    :
                    <span className={css.status} style={{ backgroundColor: 'red' }}></span>}
                <img className="avatar" src={avatar} alt="User avatar" width="150" />
                <p className={css.name}>{name}</p>
            </li>
        )
                
}
FriendListItem.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
} 
    
export default FriendListItem;