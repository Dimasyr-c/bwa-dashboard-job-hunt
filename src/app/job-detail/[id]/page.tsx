import React, { FC } from 'react';
import Link from 'next/link';
import { ArrowLeftIcon } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";



interface JobDetailPageProps {
  
}

const JobDetailPage: FC<JobDetailPageProps> = ({}) => {
  return (
    <div>
      <div className='inline-flex items-center gap-5 mb-5'>
        <div >
            <Link href='/job-listings'> <ArrowLeftIcon className='w-6 h-6'/>
            </Link>
        </div>
        <div>
            <div className='text-2xl font-semibold mb-1'>
                Brand Designer
            </div>
            <div>Design . Full time . 1/10 Hired </div>
        </div>
      </div>

      <Tabs defaultValue="applicants">
        <TabsList className='mb-4'>
            <TabsTrigger value="applicants">Applicants</TabsTrigger>
            <TabsTrigger value="jobDetails">Job Details</TabsTrigger>
        </TabsList>
        <TabsContent value="applicants">
            Make changes to your account here.
        </TabsContent>
        <TabsContent value="jobDetails">
            Change your password here.
        </TabsContent>
    </Tabs>

    </div>
  );
};

export default JobDetailPage;
