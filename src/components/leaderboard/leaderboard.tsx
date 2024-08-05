import { cn } from "@/utils/common";
import { FC } from "react";

const LeaderboardTable: FC = () => {
    type CustomStyleProperties = {
        [key: string]: string | number;
    };

    return (
      <div className="h-full w-full overflow-y-scroll">
        <table className="min-w-full border-collapse text-[1vw] mb:text-xs">
          <thead className="sticky top-0 z-10 bg-[#FCBE66]">
            <tr className="text-[#FFF9D0]">
              <th className="w-2/12 mb:w-[12.5%] px-4 py-2 border-b-2 border-r border-gray-200 bg-contain bg-center bg-no-repeat bg-[image:var(--table-title-bg-url)]" style={{'--table-title-bg-url': `url(/images/event-loidai/table-title-bg-1.png)`} as CustomStyleProperties}>Hạng</th>
              <th className="w-4/12 mb:w-[37.5%] px-4 py-2 border-b-2 border-r border-gray-200 bg-contain bg-center bg-no-repeat bg-[image:var(--table-title-bg-url)]" style={{'--table-title-bg-url': `url(/images/event-loidai/table-title-bg-2.png)`} as CustomStyleProperties}>Đại Cao Thủ</th>
              <th className="w-3/12 mb:w-[25%] px-4 py-2 border-b-2 border-r border-gray-200 bg-contain bg-center bg-no-repeat bg-[image:var(--table-title-bg-url)]" style={{'--table-title-bg-url': `url(/images/event-loidai/table-title-bg-3.png)`} as CustomStyleProperties}>Máy Chủ</th>
              <th className="w-3/12 mb:w-[25%] px-4 py-2 border-b-2 border-r border-gray-200 bg-contain bg-center bg-no-repeat bg-[image:var(--table-title-bg-url)]" style={{'--table-title-bg-url': `url(/images/event-loidai/table-title-bg-3.png)`} as CustomStyleProperties}>Lực Chiến</th>
            </tr>
          </thead>
          <tbody className="sticky">
            {[...Array(100)].map((_, index) => (
              <tr key={index}>
                <td className={cn("px-4 py-2 text-center border-b border-r border-gray-200 w-auto flex justify-center")} >
                    <div className={cn(index < 3 ? "w-[20%] mb:w-[50%] aspect-[1/1] bg-cover bg-center bg-no-repeat bg-[image:var(--table-ranking-bg-url)]" : "")} style={{'--table-ranking-bg-url': 'url(/images/event-loidai/table-ranking-bg.png)'} as CustomStyleProperties}>{index + 1}</div>
                </td>
                <td className={cn("w-4/12 px-4 py-2 text-center border-b border-r border-gray-200")}>Tên ở đây</td>
                <td className={cn("w-3/12 px-4 py-2 text-center border-b border-r border-gray-200")}>{index + 1}</td>
                <td className={cn("w-3/12 px-4 py-2 text-center border-b border-gray-200")}>{index + 1}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default LeaderboardTable;
  