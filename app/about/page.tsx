import { AspectRatio } from "@/components/ui/aspect-ratio";
import Header from "@/components/ui/header";
import Image from "next/image";

const AboutPage = () => {
  return (
    <main className="min-h-[500px] mt-10 pb-[30px] small:mt-0 xsmall:mt-0 px-24">
      <div className="w-full ">
        <Header title="About Me" />
        <div className="">
          <AspectRatio ratio={6 / 4}>
            <Image
              src={
                "https://res.cloudinary.com/dxnvintom/image/upload/v1713649339/me_ycb5uh.jpg"
              }
              alt="Profile"
              height={400}
              width={600}
              className="object-contain"
            />
          </AspectRatio>
        </div>
        <div>
          <p>
            Hello, I&apos;m Alex! Welcome to my little corner on the internet
            where I can share a bit about myself and my creations. I&apos;m a
            developer and photographer with a background in chemistry.
          </p>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
