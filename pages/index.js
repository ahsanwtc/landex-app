import MeetupList from '../components/meetups/MeetupList';
import { getAllEvents } from '../dummy-data';

export default function Home(props) {
  const { meetups } = props;
  return (
    <MeetupList meetups={meetups} />
  )
}

export async function getStaticProps() {
  /* fetch data from an api */
  /* get data from db */
  /* this code runs on server and not on client side */

  return {
    props: {
      meetups: getAllEvents()
    },
    revalidate: 10
  };
};

// export async function getServerSideProps(context) {
//   const { req, res } = context;

//   return {
//     props: {
//       meetups: getAllEvents()
//     }
//   };
// };
