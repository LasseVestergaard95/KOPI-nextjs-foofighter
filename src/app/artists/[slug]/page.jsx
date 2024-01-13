import Image from "next/image";
import Link from "next/link";
import CalenderLogo from "../../components/CalenderLogo";
import LocationLogo from "../../components/LocationLogo";

export async function generateMetadata({ params }) {
  const { slug } = params;
  const res = await fetch(`https://fe-fi-foofest.glitch.me/bands/${slug}`);
  const data = await res.json();

  return {
    title: data.name,
    description: `${data.name} consist of the members ${data.members.map((member) => member)}`,
  };
}

export async function generateStaticParams() {
  const res = await fetch("https://fe-fi-foofest.glitch.me/bands");
  const pages = await res.json();

  const paths = pages.map((page) => {
    return { slug: page.slug };
  });
  return paths;
}

export default async function Kunstner({ params }) {
  const { slug } = params;
  const res = await fetch(`https://fe-fi-foofest.glitch.me/bands/${slug}`);
  const data = await res.json();

  return (
    <main className="pt-[72px]">
      <Link className="underline px-3" href="/artists" prefetch={false}>
        Back to artists
      </Link>

      <div className="bandsection md:flex md:justify-center md:px-10 mx-auto py-5 md:py-10">
        <div className="h-full w-full md:min-w-1/2 md:max-w-lg">
          <Image src={data.logo.startsWith("https") ? data.logo : `https://fe-fi-foofest.glitch.me/logos/${data.logo}`} width="200" height="200" className="aspect-square object-cover w-full" alt={data.name} />
          <p className="px-5 md:px-0 mb-5 mt-1 font-extralight text-xs">{data.logoCredits}</p>
        </div>

        <div className="bandinfo px-5 pt-3 md:pt-0 pb-5">
          <h1 className="text-3xl font-bold">{data.name}</h1>
          <h2 className="text-xl font-semibold mb-5">{data.genre}</h2>
          <div className="flex gap-10 mb-6">
            <p className="flex gap-2">
              <span>
                <CalenderLogo />
              </span>
              Monday
            </p>
            <p className="flex gap-2">
              <span>
                <LocationLogo />
              </span>
              Midgard
            </p>
          </div>
          <div className="bandmedlemmer flex flex-wrap gap-x-10 mb-10">
            {data.members.map((member) => (
              <p key={data.member}>{member}</p>
            ))}
          </div>
          <div className=" border w-2/4 mx-auto border-accent my-7"></div>
          <p className="font-thin max-w-prose">{data.bio}</p>
        </div>
      </div>
    </main>
  );
}
