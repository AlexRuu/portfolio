import HomeDisplay from "@/app/(landing)/components/home-display";
import prismadb from "@/lib/prismadb";
import BelowDisplay from "./components/below-display";

const HomePage = async () => {
  const images = await prismadb.images.findMany({
    where: { width: 6000 },
    orderBy: { id: "asc" },
  });

  return (
    <main className="min-h-[500px] mt-10 pb-[30px] small:mt-0 xsmall:mt-0 px-24">
      <div className="flex flex-col">
        <HomeDisplay images={images} />
        <BelowDisplay />
      </div>
    </main>
  );
};

export default HomePage;
