import { AspectRatio } from "@/components/ui/aspect-ratio";
import Header from "@/components/ui/header";
import Image from "next/image";

import { Metadata } from "next";
import Link from "next/link";

export const generateMetadata = (): Metadata => {
  return {
    title: "About Me",
    description: "Get to know me!",
  };
};

const AboutPage = () => {
  return (
    <main className="min-h-[500px] h-full mt-10 pb-[30px] small:mt-0 xsmall:mt-0 px-20">
      <Header title="About Me" />
      <div className="w-full flex lg:flex-row flex-col">
        <div className="w-full lg:w-1/2 lg:pr-2">
          <AspectRatio ratio={6 / 5}>
            <Image
              src={
                "https://res.cloudinary.com/dxnvintom/image/upload/v1713649339/me_ycb5uh.jpg"
              }
              alt="Alex"
              width={1024}
              height={768}
              className="rounded-[20px]"
            />
          </AspectRatio>
        </div>
        <div className="w-full mt-5 lg:mt-0 lg:w-1/2 lg:pl-2">
          <p className="py-2">
            Hello! Welcome to my little corner on the this vass place called the
            Internet. My name is Alex Ru and I&apos;m a developer, photographer
            and home baker. I&apos;m constantly looking for new things to learn,
            but currently my main focus is learning Korean.
          </p>
          <p className="py-2">
            As a developer, I have experience with Javascript and Python as my
            main languages. You can check out some of my work{" "}
            <span className="text-blue-300">
              <Link href="/projects">here.</Link>
            </span>{" "}
            I&apos;m still working on a few projects, and hope to complete it
            soon enough! One of the projects I&apos;m working on would be to
            create a resource to help others learn Korean the way that I am
            currently learning.
          </p>
          <p className="py-2">
            Photography has always been a passion of mine, and my forte would be
            with portrait photography. I shoot with a Nikon D750 at the moment,
            but have been looking into getting a mirrorless full frame as my
            next camera. Feel free to take a look at some of my{" "}
            <span className="text-blue-300">
              <Link href="gallery">work!</Link>
            </span>{" "}
            If you&apos;re interested in shooting with me or have any tips and
            tricks in other styles of photography, like nature, urban, sports,
            etc., feel free to reach out!
          </p>
          <p className="py-2">
            Lastly, if you&apos;re interested in some of my favourite recipes
            that I&apos;ve made, why not take a gander at{" "}
            <span>
              <Link href="/recipes" className="text-blue-300">
                them.
              </Link>
            </span>{" "}
            Maybe you&apos;ll find something you enjoy as well!
          </p>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
