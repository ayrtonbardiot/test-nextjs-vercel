import { Label, TextInput, Checkbox, Button, Card } from "flowbite-react";
import Image from "next/image";
import Logo from "../public/logo.png";

export default function Home() {
  return (
    <div>
      <div className="m-10 flex">
        <form className="flex flex-col rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800">
          <Image src={Logo} width={175} alt="Logo" />
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
              id="email1"
              type="email"
              placeholder="name@flowbite.com"
              required={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput id="password1" type="password" required={true} />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <Button type="submit">Submit</Button>
        </form>
        <Card href="#" className="ml-auto">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Bienvenue sur Nom !
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Test est un jeu en ligne virtuel et GRATUIT, pour faire des
            nouvelles rencontres, t&apos;amuser et bien plus encore ! 😉
          </p>
        </Card>
      </div>
      <div className="flex flex-row justify-center gap-5">
        <div className="max-w-sm">
          <Card
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="https://pbs.twimg.com/media/FPnKklZX0AAzE5z.png"
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </Card>
        </div>
        <div className="max-w-sm">
          <Card
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="https://pbs.twimg.com/media/FPnKklZX0AAzE5z.png"
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </Card>
        </div>
        <div className="max-w-sm">
          <Card
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="https://pbs.twimg.com/media/FPnKklZX0AAzE5z.png"
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </Card>
        </div>
      </div>
      <Image
        src="http://images.habbo.com/c_images/reception/background_right_easter2016.png"
        alt="Hôtel"
        width={484}
        height={463}
        className="absolute right-0 bottom-0 z-[-10]"
      />
    </div>
  );
}
