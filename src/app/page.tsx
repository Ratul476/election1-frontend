import Image from "next/image";
import BodyHeader from './../components/Specific/BodyHeader';
import PresidentPart from "@/components/Specific/PresidentPart";
import ResultByStatePart from "@/components/Specific/ResultByStatePart";
import LatestResult from "@/components/Specific/LatestResult";
import PostPulse from "@/components/Specific/PostPulse";
import LatestUpdate from "@/components/Specific/LatestUpdate";
import KeyState from "@/components/Specific/KeyState";
import KeyDistrict from "@/components/Specific/KeyDistrict";
import MorePost from "@/components/Specific/MorePost";
import ResultByState from "@/components/Specific/ResultByState";
import Election2024 from "@/components/Specific/Election2024";
import ReportPage from "@/components/Specific/ReportPage";

export default function Home() {
  return (
    <div className="">
      <div className="border-b-[1px] border-gray-300 pt-5 pb-9">
        <div className='container mx-auto flex justify-center'>
          <div className='bg-gray-300 w-[970px] h-[90px]'></div>
        </div>
      </div>

      <BodyHeader />
      <PresidentPart />
      <ResultByStatePart />
      <div className="max-w-7xl mx-auto  mt-16">
        <div className="">
          <div className="grid grid-cols-6 md:grid-cols-5">
            <div className="col-span-1 md:col-span-2 border-t-[1px] border-gray-400"></div>
            <div className="col-span-4 md:col-span-1 text-xs md:text-sm text-center relative bottom-2 md:bottom-3 left-0 text-gray-700">Story continues below advertisement</div>
            <div className="col-span-1 md:col-span-2 border-t-[1px] border-gray-400"></div>
          </div>

          <div className="border-b-[1px] border-gray-400 pb-5">
            <div className='container mx-auto flex justify-center mt-5 mb-5'>
              <div className='bg-gray-400 w-[970px] h-[90px]'></div>
            </div>
          </div>
        </div>
      </div>
      <LatestResult />
      <PostPulse />

      <LatestUpdate />
      <div className="max-w-7xl mx-auto  mt-16">
        <div className="">
          <div className="grid grid-cols-5">
            <div className="col-span-2 border-t-[1px] border-gray-300"></div>
            <div className="text-sm text-center relative bottom-3 left-0 text-gray-700">Story continues below advertisement</div>
            <div className="col-span-2 border-t-[1px] border-gray-300"></div>
          </div>

          <div className="border-b-[1px] border-gray-300 pb-5">
            <div className='flex justify-center mt-5 mb-5'>
              <div className='bg-gray-300 w-[970px] h-[90px]'></div>
            </div>
          </div>
        </div>
      </div>
      <KeyState />
      <KeyDistrict />
      <div className="max-w-7xl mx-auto  mt-16">
        <div className="">
          <div className="grid grid-cols-5">
            <div className="col-span-2 border-t-[1px] border-gray-300"></div>
            <div className="text-sm text-center relative bottom-3 left-0 text-gray-700">Story continues below advertisement</div>
            <div className="col-span-2 border-t-[1px] border-gray-300"></div>
          </div>

          <div className="border-b-[1px] border-gray-300 pb-5">
            <div className='flex justify-center mt-5 mb-5'>
              <div className='bg-gray-300 w-[970px] h-[90px]'></div>
            </div>
          </div>
        </div>
      </div>
      <MorePost />
      <ResultByState />
      <Election2024 />
      <ReportPage/>
      
    </div>
  );
}
