import { useRouter } from 'next/router';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

export default function NewMeetup() {
  const router = useRouter();
  const addMeetupHandler = async meetup => {
    console.log(meetup);
    const response = await fetch('/api/meetups', {
      method: 'POST',
      body: JSON.stringify(meetup),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();
    console.log(data);
    router.replace('/');
  };

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />
};