import GalleryGridColumn from "@/components/gallery/gallery-grid-col";
import Header from "@/components/ui/header";
import prismadb from "@/lib/prismadb";

const GalleryPage = async () => {
  const images = await prismadb.images.findMany({ orderBy: { id: "asc" } });

  return (
    <main className="min-h-[500px] mt-10 pb-[30px] small:mt-0 xsmall:mt-0 px-24">
      <Header title="Gallery" />
      <div className="grid grid-cols-2 gap-4">
        <GalleryGridColumn images={images.slice(0, 7)} fullSetImages={images} />
        <GalleryGridColumn
          images={images.slice(8, 16)}
          fullSetImages={images}
        />
      </div>
    </main>
  );
};

export default GalleryPage;
