import Link from "next/link";
import { dataIcon } from "../assets";
import Image from "next/image";

function MovieCard({ img, title, starring, features, releaseDate, id }) {
  return (
    <Link
      href={id ? "/boking/" + id : null}
      className="flex-1 flex flex-col items-center gap-4 p-4 rounded-2xl bg-white shadow-md dark:shadow-darkShadow dark:bg-dark sm:flex-row"
    >
      <Image
        src={img}
        alt={title + " poster"}
        className="w-full h-full max-h-64 object-contain rounded-lg border-yellow-500 border-2 sm:w-32 sm:max-h-full"
      />

      <div className="w-full sm:w-auto">
        <h1 className="font-light text-base text-dark mb-1 dark:text-white">
          {title}
        </h1>

        <h2 className="font-light text-base text-dark mb-4 dark:text-white">
          Starring: {starring}
        </h2>

        {features && (
          <ul className="flex justify-between items-center flex-wrap gap-y-2 mb-4">
            {features.map((feature, index) => (
              <li key={index} className="w-1/2 flex items-center gap-2">
                <Image
                  src={dataIcon}
                  alt="data icon"
                  className="w-6 h-6 object-contain dark:invert"
                />

                <span className="text-base font-light text-dark dark:text-white">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        )}

        <h3 className="text-base font-light text-dark dark:text-white">
          Release date:{releaseDate}
        </h3>
      </div>
    </Link>
  );
}

export default MovieCard;
