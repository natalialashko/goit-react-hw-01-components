import PropTypes from 'prop-types';
import FriendListItem from 'components/FriendListItem/FriendListItem';
import css from './FriendList.module.css';
const FriendList = ({ friends }) => {
    return (
        <ul className={css.friend_list}>
            {friends.map(({name, isOnline, avatar, id}) => (
                < FriendListItem
                    name={name}
                    isOnline={isOnline}
                    avatar={avatar}
                    key={id}
                />
            )
            )}
        </ul>
    )
};
FriendList.propTypes = {
    friend: PropTypes.arrayOf(
        PropTypes.exact({
            name: PropTypes.string.isRequired,
            avatar: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        }))
}

export default FriendList;