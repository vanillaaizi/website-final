import Image from "next/image";

const AboutMePage = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <div className="flex items-center justify-center space-x-8">
        <div className="flex-shrink-0 w-1/3">
          <Image
            src="/aizi.jpg"
            alt="Aizere Seitjan"
            width={400}
            height={400}
            className="rounded-full"
          />
        </div>
        <div className="w-2/3">
          <h1 className="text-3xl font-bold">Aizere Seitjan</h1>
          <p className="text-lg">This is me</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMePage;