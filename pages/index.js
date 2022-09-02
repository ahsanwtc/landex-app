import MeetupList from '../components/meetups/MeetupList';
import { getAllEvents } from '../dummy-data';

export default function Home() {
  return (
    <MeetupList meetups={getAllEvents()} />
  )
}
