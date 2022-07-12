import { gql, useQuery } from "@apollo/client";
import { useGetLessonsQuery } from "../graphql/generated";
import { Lesson } from "./Lesson";

import className from 'classnames';

interface SideBarProps {
  openSideBar: boolean;
}

export function SideBar({ openSideBar }: SideBarProps) {
  const { data } = useGetLessonsQuery();

  return (
    <aside className={className("w-[348px] right-0 absolute top-18 h-full bg-gray-700 p-6 border-l border-gray-600 ease-in-out duration-300", {
      "translate-x-0": openSideBar,
      "translate-x-full": !openSideBar
    })}>
      <span className={className("font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block", {
        
      })}>
        Cronograma de aulas
      </span>

      <div className={className("flex flex-col gap-8", {
        
      })}>
        {data?.lessons.map(lesson => {
          return (
            <Lesson 
              key={lesson.id}
              title={lesson.title}
              slug={lesson.slug}
              availableAt={new Date(lesson.availableAt)}
              type={lesson.lessonType}
            />
          )
        })}
      </div>
    </aside>
  )
}