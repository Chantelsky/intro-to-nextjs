import Image from 'next/image'
import NewTodoForm from './components/NewTodoForm'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Announcing our next round of funding.{' '}
            <a href="#" className="font-semibold text-indigo-600">
              <span className="absolute inset-0" aria-hidden="true" />
              Read more <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Todo App to increase productivity!
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
        </div>
      </div>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Link
          href="#"
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm 
          hover:bg-indigo-500 focus-visible:outline 
          focus-visible:outline-2 
          focus-visible:outline-offset-2
           focus-visible:outline-indigo-600"
        >
          Get Started
        </Link>
        <Link
          href="#"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Learn More <span aria-hidden="true"> → </span>
        </Link>
      </div>
    </>
  )
}
