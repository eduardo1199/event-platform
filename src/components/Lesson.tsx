import { CheckCircle, Lock  } from 'phosphor-react';
import { isPast, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Link, useParams } from 'react-router-dom';
import className from 'classnames';

interface LessonProps {
  title: string
  slug: string;
  availableAt: Date;
  type: 'live' | 'class';
}

export function Lesson(props: LessonProps) {
  const isLessonAvailable = isPast(props.availableAt);

  const { slug } = useParams<{slug: string}>();

  const availableAtFormatted = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'K'h'MM", {
    locale: ptBR
  });

  const isActiveLesson = props.slug === slug;

  return (
    <Link to={`/event/lesson/${props.slug}`} className="group">
      <span className="text-gray-300">
        {availableAtFormatted}
      </span>

      <div className={className('rounded border border-gray-400 p-4 mt-2 group-hover:border-green-500 transition-colors', {
        'bg-green-500': isActiveLesson
      })}>
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span className={className('text-sm  font-medium flex items-center gap-2', {
              'text-blue-500': !isActiveLesson,
              'text-white': isActiveLesson
            })}>
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ):(
            <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
              <Lock size={20} />
              Em breve
            </span>
          )}
          <span className={className('text-xs rounded px-2 py-[0.125rem] text-white border border-green-300 font-bold', {
            'border-white': isActiveLesson,
            'border-green-300': !isActiveLesson
          })}>
            {props.type === 'live' ? 'AO VIVO': 'AULA PRÁTICA'}
          </span>
        </header>

        <strong className={className('mt-5 block', {
          'text-gray-200': !isActiveLesson,
          'text-white': isActiveLesson,
        })}>
          {props.title}
        </strong>
      </div>
    </Link>
  )
}