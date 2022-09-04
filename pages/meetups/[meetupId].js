import { MongoClient, ObjectId } from 'mongodb';
import Head from 'next/head';

import MeetupDetailsReact from "../../components/meetups/MeetupDetails";;

const MeetupDetails = ({ meetup }) => {
  return (
    <>
      <Head>
        <title>{meetup.title}</title>
        <meta name='description' content={meetup.description} />
      </Head>
      <MeetupDetailsReact {...meetup} />
    </>
  );
};

export const getStaticProps = async context => {
  const { params: { meetupId }} = context;
  
  const uri = `mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@cluster0.hhxotqv.mongodb.net/?retryWrites=true&w=majority`;
  const client = new MongoClient(uri);
  const db = client.db(process.env.DATABASE_NAME);
  const collection = db.collection('meetups');
  const meetup = await collection.findOne({ _id: ObjectId(meetupId) });
  meetup.id = meetup._id.toString();
  meetup._id = '';
  await client.close();

  return {
    props: {
      meetup
    }
  };
};

export const getStaticPaths = async () => {
  const uri = `mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@cluster0.hhxotqv.mongodb.net/?retryWrites=true&w=majority`;
  const client = new MongoClient(uri);
  const db = client.db(process.env.DATABASE_NAME);
  const collection = db.collection('meetups');
  const paths = (await collection.find({}, { _id: 1 }).toArray()).map(meetup => ({ params: { meetupId: meetup._id.toString() }}));
  await client.close();

  return {
    // paths: [
    //   { params: { meetupId: 'e1' }},
    //   { params: { meetupId: 'e2' }},
    //   { params: { meetupId: 'e3' }}
    // ],
    paths,
    fallback: false
  };
};

export default MeetupDetails;