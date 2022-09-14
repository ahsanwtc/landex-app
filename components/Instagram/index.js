import Item from './item';

const Instagram = ({ snaps }) => {
  return (
    <div className='max-w-[1240px] mx-auto text-center py-24'>
      <p className='text-2xl font-bold'>Follow us on Instagram</p>
      <p className='pb-4'>@landex-app</p>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
        {snaps.map((snap, index) => <Item key={index} image={snap.image} />)}
      </div>
    </div>
  );
};

export default Instagram;