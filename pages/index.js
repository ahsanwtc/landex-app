import { MongoClient } from 'mongodb';
import MeetupList from '../components/meetups/MeetupList';

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

  const uri = `mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@cluster0.hhxotqv.mongodb.net/?retryWrites=true&w=majority`;
  const client = new MongoClient(uri);
  const db = client.db(process.env.DATABASE_NAME);
  const collection = db.collection('meetups');
  const meetups = (await collection.find().toArray()).map(meetup => ({ ...meetup, id: meetup._id.toString(), _id: '' }));
  await client.close();

  return {
    props: {
      meetups
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
