import Image from "next/image";
import Link from "next/link";
import CalenderLogo from "./CalenderLogo";
import LocationLogo from "./LocationLogo";
export default function ArtistCard({ data }) {
  return (
    <Link href={`/artists/${data.slug}`} prefetch={false} className="@container relative aspect-square overflow-hidden rounded-md hover:brightness-150">
      <Image
        src={data.logo.startsWith("https") ? data.logo : `https://fe-fi-foofest.glitch.me/logos/${data.logo}`}
        width="200"
        height="100"
        className="h-full w-full object-cover brightness-[.65]"
        alt={data.name}
        sizes="(max-width: 300px) 100vw, 300px"
      />

      <div className="absolute bottom-0 px-3 w-full">
        <h2 className=" @[15rem]:text-2xl font-bold text-lg">{data.name}</h2>
        <p className="@[15rem]:text-lg text-sm ">{data.genre}</p>
        <div className="flex gap-6 mb-4 mt-4 text-sm">
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
      </div>
    </Link>
  );
}
