import MeetupDetailsReact from "../../components/meetups/MeetupDetails";;

const MeetupDetails = () => {
  return <MeetupDetailsReact 
    image='' title='' address='' description='This is the event description'
  />;
};

export const getStaticProps = async context => {
  const { params: { meetupId }} = context;
  console.log({meetupId});

  return {
    props: {
      meetup: {
        image: '/images/coding-event.jpg',
        id: meetupId,
        title: 'Some Event',
        address: 'New Street 10, 666 Strage City',
        description: 'This is the event description'
      }
    }
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { meetupId: 'e1' }},
      { params: { meetupId: 'e2' }},
      { params: { meetupId: 'e3' }}
    ],
    fallback: false
  };
};

export default MeetupDetails;