import { Fragment } from 'react';

const MeetupDetails = props => {
  const { image, title, address, description } = props;
  return (
    <Fragment>
      <img src={image} alt={title}/>
      <h1>{title}</h1>
      <address>{address}</address>
      <p>{description}</p>
    </Fragment>
  );
};

export default MeetupDetails;