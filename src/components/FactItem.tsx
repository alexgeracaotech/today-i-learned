import type { Fact } from "../types";
import { CATEGORIES } from "../constants";

interface FactItemProps {
  fact: Fact;
};

export default function FactItem({ fact }: FactItemProps) {
  const category = CATEGORIES.find(object => fact.category === object.value);

  return (
    <>
      <li className="bg-stone-700 px-6 py-4 flex justify-between items-center rounded-2xl">
        <div className="flex items-center gap-3">
          <p
            className="text-[20px]"
          >{ fact.text }</p>
          <a
            href={ fact.source }
            target="_blank"
            className="text-stone-400 text-[20px] capitalize hover:text-blue-500 transition duration-150"  
          >(fonte)</a>
        </div>
        <span
          className={`${category?.color} text-[14px] uppercase pt-0.75 px-2.5 rounded-full `}
        >{ category?.label }</span>
      </li>
    </>
  );
};
