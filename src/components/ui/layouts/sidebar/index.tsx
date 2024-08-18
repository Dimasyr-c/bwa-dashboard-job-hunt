import React, { FC } from 'react';
import { Button } from '../../button';
import { Ghost } from 'lucide-react';
// ini Import Icons
import { BiHome } from "react-icons/bi";
import { AiOutlineMessage } from "react-icons/ai";
import { FaRegBuilding, FaRegUser } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import { AiOutlineSchedule } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";

interface SidebarProps {

}
const Sidebar: FC<SidebarProps> = ({ }) => {
    return (
      <div className="pb-12 min-h-screen">
        <div className='space-y-4 py-4'>
            <div className='px-3 py-2'>
                <h2 className='mb-2 px-4 text-lg font-semibold'>
                    Dashboard
                </h2>
                <div className='space-y-3'>
                    <Button variant={'ghost'} 
                    className='w-full justify-start rounded-none  hover:text-primary'
                    >
                    <BiHome className='m-2 text-lg'/>
                        Home
                    </Button>
                    <Button variant={'ghost'} 
                    className='w-full justify-start rounded-none  hover:text-primary'
                    >
                    <AiOutlineMessage className='m-2 text-lg'/>
                        Message
                    </Button>
                    <Button variant={'ghost'} 
                    className='w-full justify-start rounded-none  hover:text-primary'
                    >
                    <FaRegBuilding className='m-2 text-lg'/>
                        Company Profile
                    </Button>
                    <Button variant={'ghost'} 
                    className='w-full justify-start rounded-none  hover:text-primary'
                    >
                    <FaRegUser className='m-2 text-lg'/>
                        All Aplicants
                    </Button>
                    <Button variant={'ghost'} 
                    className='w-full justify-start rounded-none  hover:text-primary'
                    >
                    <CgFileDocument className='m-2 text-lg'/>
                        Job Listing
                    </Button>
                    <Button variant={'ghost'} 
                    className='w-full justify-start rounded-none  hover:text-primary'
                    >
                    <AiOutlineSchedule  className='m-2 text-lg'/>
                        My Schedule
                    </Button>
                </div>
            </div>
        </div>
        <div className='space-y-4 py-4'>
                <div className='px-3 py-2'>
                <h2 className='mb-2 px-4 text-lg font-semibold'>
                    Settings
                </h2>
                <Button variant={'ghost'} 
                    className='w-full justify-start rounded-none  hover:text-primary'
                    >
                    <IoSettingsOutline className='m-2 text-lg'/>
                        Settings
                    </Button>
                    <Button variant={'ghost'} 
                    className='w-full text-red-500 hover:text-red-500 hover:bg-red-200 justify-start rounded-none'
                    >
                    <IoIosLogOut className='m-2 text-lg'/>
                        Logout
                    </Button>
                </div>
            </div>
      </div>
    );
  };
  
  export default Sidebar;
  