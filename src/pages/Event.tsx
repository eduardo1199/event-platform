import { useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { SideBar } from "../components/SideBar";
import { Video } from "../components/Video";

export function Event() {
  const { slug } = useParams<{ slug: string}>();
  const [isOpenSideBar, setIsOpenSideBar] = useState<boolean>(false);

  const onOpenSideBar = () => {
    setIsOpenSideBar(prev => !prev);
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header onOpenSideBar={onOpenSideBar} />
      <main className="flex flex-1 relative overflow-x-hidden">
        {slug ? 
          <Video lessonSlug={slug} isOpenSideBar={isOpenSideBar} onOpenSideBar={onOpenSideBar} /> : 
          <div className="flex-1 flex justify-center items-center">
            <h1 className="bold text-6xl">Selecione uma aula ao lado para assistir! 👉</h1>
          </div>
        }
        <SideBar openSideBar={isOpenSideBar} />
      </main>
    </div>
  )
}