import Image from 'next/image';

const Block = () => {
  return (
    <div className="py-16">  
      <div className="container m-auto px-6 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <Image src='/footprint.svg' layout='responsive' width="320" height="280" alt="image" className='w-full h-full' />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-heading font-bold md:text-4xl">Acquire better deals in no time</h2>
            <p className="mt-6">Instead of wasting time with the agents, quickly find what is available in the market. No need to book apointments, no need to call anybody.</p>
            <p className="mt-4">Everything is transparent and available 24/7 for you to browse. And once you find something you like, just do a transaction and you are done!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Block;