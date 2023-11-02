import StatsCard from "../components/StatsCard";
import { GiStoneSphere } from "react-icons/gi"
import { MdOutlinePersonalVideo } from "react-icons/md";
import { TbBrandApple } from "react-icons/tb";
import { FiThumbsUp } from "react-icons/fi";
import BarChart from "../components/charts/BarChart";


const legend: { color: string; meaning: string }[] = [
  { color: "#085497", meaning: "First Label" },
  { color: "#2a88ba", meaning: "Second Label" },
  { color: "#E0DE40", meaning: "Third Label" },
];

export default function Overview() {
  return (
    <div className="w-full flex flex-col justify-center h-screen">
      <div>

     
      <div className="mx-auto  px-4 sm:px-6">
        <h2 className="text-lg font-medium leading-6 text-gray-900">Overview</h2>
        <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <StatsCard name='Patients' value={12} Icon={GiStoneSphere} />
          <StatsCard name='Another Stats' value={"A value"} Icon={MdOutlinePersonalVideo} />
          <StatsCard name='Yet Another Stats' value={67} Icon={TbBrandApple} />
          <StatsCard name='Final Stats' value={"another val p   ue"} Icon={FiThumbsUp} />
        </div>
      </div>
      <div className='min-h-[50vh]  m-6 '>
        <h2 className="text-lg font-medium leading-6 text-gray-900">Some Analytics</h2>
        <div className="flex space-x-6 py-4 ">
          {legend.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div
                className="w-4 h-4"
                style={{ backgroundColor: item.color }}
              ></div>
              <p className="opacity-75 2sm:text-base xs:text-sm text-xs">
                {item.meaning}
              </p>
            </div>
          ))}
        </div>
       
      </div>
      </div>
    </div>
  )
}
