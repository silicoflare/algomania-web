import { Slide } from "react-awesome-reveal";
import Markdown from "react-markdown";

export default function InfoCard({
  title,
  children,
}: {
  title: string;
  children: string;
}) {
  return (
    <div className="w-full flex flex-col border border-transparent rounded-md">
      <div className="bg-orange-600 p-2 md:p-4 flex flex-col text-white font-semibold font-heading text-xl rounded-t-md">
        {title}
      </div>
      <Markdown className="bg-white p-2 md:p-4 flex flex-col text-black rounded-b-md">
        {children}
      </Markdown>
    </div>
  );
}
