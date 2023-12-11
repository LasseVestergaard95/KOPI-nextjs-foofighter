import Image from "next/image";
import Link from "next/link";
export default function ImageAndText(props) {
  const isReversed = props.layout === "reversed";
  return (
    <article className={`py-10 md:flex ${isReversed ? "flex-row-reverse" : ""} justify-around items-center sm:gap-7 md:px-16`}>
      <Image className="w-full md:max-w-screen-sm  object-cover aspect-[5/3]" src={"/" + props.image + ".jpg"} alt={props.image} width={300} height={100} />
      <div className="py-5 md:py-0 px-5">
        <h2 className="mb-3 text-4xl md:text-6xl font-semibold">{props.overskrift}</h2>
        <p className="mb-5 md:text-lg max-w-prose">{props.text}</p>
        <Link className="underline cursor-pointer md:text-lg" href="/" prefetch={false}>
          Læs mere her
        </Link>
      </div>
    </article>
  );
}
 