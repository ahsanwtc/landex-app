import Image from 'next/image';

const Hero = ({ heading, message }) => {
	message = 'Onchain solution for buying, selling and trading your realestate. Own the rights to your property by simply holding the token in your wallet. And like any token, lend it, trade it or sell it.';
	const subtitle = 'The best solution for tokenizing real world assets.';
  return (
    <>
			<div className="pt-32 pb-20 md:pt-40">
				<div className="container m-auto px-6 md:px-12 lg:px-6">
					<div className="lg:flex lg:items-center lg:gap-x-16">
						<div className="space-y-8 lg:w-7/12">
							<h1 className=" font-bold text-heading text-4xl md:text-5xl">Realestate Onchain</h1>
							<p className="lg:w-11/12">{message}</p>
							<span className="block font-semibold">{subtitle}</span>
						</div>

						<div hidden className="lg:block lg:w-5/12">
							<Image src="/logistics.svg" className="w-full -z-10" alt="wath illustration" width="420" height="380" />
						</div>
					</div>
				</div>
			</div>

{/* <div className="pb-8">
    <div className="container m-auto px-6 md:px-12 lg:px-6">
        <div className="py-8 px-12 bg-gray-500 rounded-2xl">
            <span className="block text-center font-medium">Powered by Blockchain technologies</span>
            <div className="mt-8 flex justify-center flex-wrap items-center gap-4 md:gap-6 lg:gap-8">
                <div className="flex items-center">
									<Image className="w-36" src="/images/blockchain.png" alt="blockchain logo" width="150" height="150" layout="fixed"/>
                    {/* <img className="w-36" src="images/clients/microsoft.png" alt="client logo" loading="lazy" width="584" height="122"/> *
                </div>
                <div className="flex items-center">
                    <img className="w-28" src="images/clients/myob.png" alt="client logo" loading="lazy" width="400" height="219"/>
                </div>
                <div className="flex items-center">
                    <img className="w-28" src="images/clients/grabyo.png" alt="client logo" loading="lazy" width="400" height="219"/>
                </div>
                <div className="flex items-center">
                    <img className="w-32" src="images/clients/lifegroups.png" alt="client logo" loading="lazy" width="400" height="219"/>
                </div>
                <div className="flex items-center">
                    <img className="w-24" src="images/clients/lilly.png" alt="client logo" loading="lazy" width="400" height="219"/>
                </div>
                <div className="flex items-center">
                    <img className="w-28" src="images/clients/grabyo.png" alt="client logo" loading="lazy" width="400" height="219"/>
                </div>
                <div className="flex items-center">
                    <img className="w-32" src="images/clients/lifegroups.png" alt="client logo" loading="lazy" width="400" height="219"/>
                </div>
            </div>
        </div>
    </div>
</div> */}
</>
  );
};

export default Hero;
