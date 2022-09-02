import MeetupList from '../components/meetups/MeetupList';
import { getAllEvents } from '../dummy-data';


const MEETUPS = [];

export default function Home() {
  return (
    <MeetupList meetups={getAllEvents()} />
  )
}
