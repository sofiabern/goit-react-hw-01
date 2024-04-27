import styles from "./Profile.module.css"
export default function Profile ({name, tag, location, image, stats:{followers, views, likes}}){
    return <div className={styles['card-wrapper']}>
    <div className={styles['main-info-wrapper']}>
      <img className={styles['user-img']}
        src={image}
        alt="User avatar"
      />
      <p className={styles['user-name']}>{name}</p>
      <p className={styles['user-tag']} >@{tag}</p>
      <p className={styles['user-location']} >{location}</p>
    </div>
  
    <ul className={styles['stats-info']}>
      <li className={styles['stats-info-item']}>
        <span>Followers</span>
        <span className={styles['stats-num']}>{followers}</span>
      </li>
      <li className={styles['stats-info-item']}>
        <span>Views</span>
        <span className={styles['stats-num']}>{views}</span>
      </li>
      <li className={styles['stats-info-item']}>
        <span>Likes</span>
        <span className={styles['stats-num']}>{likes}</span>
      </li>
    </ul>
  </div>
}