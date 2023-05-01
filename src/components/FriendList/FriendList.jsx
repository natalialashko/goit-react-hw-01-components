import PropTypes from 'prop-types';
import css from './FriendList.module.css'
const FriendList = ({ friends }) => {
    return (
        <ul className={css.friend_list}>
            {friends.map((friend) => (
                <li className={css.item} key={friend.id}>
                    {friend.isOnline ?
                        <span className={css.status}style={{ backgroundColor: 'green' }}></span>
                        :
                        <span className={css.status} style={{ backgroundColor: 'red' }}></span>}
                    <img className="avatar" src={friend.avatar} alt="User avatar" width="150" />
                    <p className={css.name}>{friend.name}</p>
                </li>
            ))
                
            }
        </ul>
    )
};
FriendList.propTypes = {
    friend: PropTypes.arrayOf(
        PropTypes.exact({
            name: PropTypes.string.isRequired,
            avatar: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        }))
}

export default FriendList;