import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { SideBar } from "../components/SideBar";
import { Video } from "../components/Video";

export function Event() {
  const { slug } = useParams<{ slug: string}>();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        {slug ? 
          <Video lessonSlug={slug} /> : 
          <div className="flex-1 flex justify-center items-center">
            <h1 className="bold text-6xl">Selecione uma aula ao lado para assistir! 👉</h1>
          </div>
        }
        <SideBar />
      </main>
    </div>
  )
}