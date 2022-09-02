import { Fragment } from 'react';
import styles from './MeetupDetails.module.css';

const MeetupDetails = props => {
  const { image, title, address, description } = props;
  return (
    <section className={styles.detail}>
      <img src={image} alt={title}/>
      <h1>{title}</h1>
      <address>{address}</address>
      <p>{description}</p>
    </section>
  );
};

export default MeetupDetails;