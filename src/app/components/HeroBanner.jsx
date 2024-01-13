import Image from "next/image";
export default function HeroBanner() {
  return (
    <section
      className="w-full h-full sm:max-h-[32rem] grid md:pr-[50%] bg-cover sm:bg-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1484494789010-20fc1a011197?q=80&w=2573&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-background bg-opacity-70 h-full pl-16 pr-5 pt-10">
        <Image
        // Her har jeg fjernet "." fra src så logo ikke længere forsvinder
        src="/foo-festival-logo.svg"
        alt="Foo Festival logo"
        width={277}
        height={488}></Image>
        <p className="text-3xl mt-10">15. January - 21. January</p>
        <p className="text-3xl mb-4">Copenhagen</p>
        <p className="max-w-prose text-xl hidden sm:block mb-3">
          We gathered 120 artist from all over the world and bring them to you
          in a week full of togetherness and music.
        </p>
      </div>
    </section>
  );
}
