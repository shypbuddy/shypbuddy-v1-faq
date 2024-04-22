import Image from 'next/image';
import { LuArrowDownNarrowWide } from "react-icons/lu";
import { HiOutlineUserGroup } from "react-icons/hi";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { PiHandCoins } from "react-icons/pi";
import { MdOutlineImageSearch } from "react-icons/md";

const data = [
  {
    icon: <Image src='/buddyshield.png' className='py-auto' width={45} height={45} alt="Icon" />,
    name: 'BUDDYSHIELD Guaranteed ',
  },
  {
    icon: <PiHandCoins size={40} className='py-auto' color="blue" />,
    name: 'COD remittance : D+1, D+2',
  },
  {
    icon: <TfiHeadphoneAlt size={40} color="blue" />,
    name: 'Dedicated KAM',
  },
  {
    icon: <LuArrowDownNarrowWide size={40} color="blue" />,
    name: 'Reduced NDRs',
  },
  {
    icon: <HiOutlineUserGroup size={40} color="blue" />,
    name: 'Customer Satisfaction',
  },
  {
    icon: <MdOutlineImageSearch size={40} color="blue" />,
    name: 'Seller Data Analytics',
  },
];

const Marketing = () => {
  return (
    <>
      <div className="mx-auto mt-0 px-10 rounded-sm font-poppins">
        <div className="grid grid-cols-2 shadow-2xl  rounded-md bg-white md:grid-cols-2 lg:grid-cols-6  text-gray-500">
          {data.map((item, index) => (
            <div
              key={index}
              className="text-center rounded-md  p-4 md:col-span-1 lg:col-span-1 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col items-center">
               {item.icon}
                
                <p className="text-center  text-slate-900 text-sm">
                  {item.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Marketing;
