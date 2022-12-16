import { Label, TextInput, Checkbox, Button, Card } from "flowbite-react";
import Image from "next/image";
import Logo from "../public/logo.png";

export default function Home() {
  return (
    <div>
      <div className="m-10 flex gap-5">
        <form className="flex flex-col p-5 rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 w-1/6">
          <Image src={Logo} width={175} alt="Logo" />
          <div className="my-4">
            <div className="mb-2 block">
              <Label htmlFor="username" value="Ton pseudo" />
            </div>
            <TextInput
              id="username"
              type="text"
              placeholder="Pseudonyme"
              required={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Ton mot de passe" />
            </div>
            <TextInput
              id="password1"
              type="password"
              placeholder="********"
              required={true}
            />
          </div>
          <div className="flex items-center gap-2 my-5">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <Button type="submit">Submit</Button>
        </form>
        <Card href="#" className="">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Bienvenue sur Nom !
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Test est un jeu en ligne virtuel et GRATUIT, pour faire des
            nouvelles rencontres, t&apos;amuser et bien plus encore ! 😉
          </p>
        </Card>
      </div>
      <h1 className="mx-10 mb-5 font-bold text-white text-3xl drop-shadow-lg">
        Les derniers articles...
      </h1>
      <div className="flex flex-row mx-10 mb-5 gap-5">
        {/*<Card
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="https://pbs.twimg.com/media/FPnKklZX0AAzE5z.png"
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Fais-toi de nouveaux amis !
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </Card>*/}
        <div className="bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <Image
              className="rounded-t-lg"
              src="https://pbs.twimg.com/media/FPnKklZX0AAzE5z.png"
              alt=""
              width={736}
              height={546}
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                aria-hidden="true"
                className="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        {/*<Card
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="https://pbs.twimg.com/media/FPnKklZX0AAzE5z.png"
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Fais-toi de nouveaux amis !
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </Card>*/}
        <div className="bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <Image
              className="rounded-t-lg"
              src="https://pbs.twimg.com/media/FPnKklZX0AAzE5z.png"
              alt=""
              width={736}
              height={546}
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                aria-hidden="true"
                className="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        {/*<Card
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="https://pbs.twimg.com/media/FPnKklZX0AAzE5z.png"
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Fais-toi de nouveaux amis !
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </Card>*/}
        <div className="bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <Image
              className="rounded-t-lg"
              src="https://pbs.twimg.com/media/FPnKklZX0AAzE5z.png"
              alt=""
              width={736}
              height={546}
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                aria-hidden="true"
                className="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <h5 className="text-center font-bold text-white text-base drop-shadow-lg mb-1">
        Summer a01 by nota - Made with ❤️
      </h5>
      <Image
        src="http://images.habbo.com/c_images/reception/background_right_easter2016.png"
        alt="Hôtel"
        width={484}
        height={463}
        className="fixed right-0 bottom-0 z-[-10]"
      />
      <Image
        src="http://images.habbo.com/c_images/reception/mute_reception_backdrop_left.png"
        alt="Hôtel"
        width={1006}
        height={998}
        className="fixed left-0 bottom-0 z-[-10] opacity-60"
      />
    </div>
  );
}
