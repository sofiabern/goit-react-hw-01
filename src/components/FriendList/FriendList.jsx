import styles from './FriendList.module.css';
import clsx from "clsx";

export default function FriendList({ friends }) {
  return (
    <ul className={styles['friend-list']}>
      {friends.map(friend => (
        <li key={friend.id} className={styles['friend-item']}>
          <FriendListItem friend={friend} />
        </li>
      ))}
    </ul>
  );
}

function FriendListItem({ friend: {avatar, name, isOnline} }) {
  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={styles['friend-name']}>{name}</p>
      <p className={clsx(styles['friend-status'], isOnline ? styles.green : styles.red )}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
}
