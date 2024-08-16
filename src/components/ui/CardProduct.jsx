import { Link } from "react-router-dom"

export default function CardProduct({ product }) {
    return (
      // max-w-sm w-full sm:max-w-md lg:max-w-lg => gpt responsif
        <div className="max-w-sm w-full sm:max-w-md lg:max-w-lg bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 transition-all duration-300 ease-in-out hover:shadow-lg">
  <a href="#">
    <img className="rounded-t-lg w-full " src={product.thumbnail} alt={product.title} />
  </a>
  <div className="p-5">
    <a href="#">
      <h5 className="mb-2 text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {product.title}
      </h5>
    </a>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci exercitationem mollitia reprehenderit obcaecati dignissimos accusantium in possimus consequuntur officia minima.
    </p>
    <Link
      to={"/product/" + product.id}
      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Read more
      <svg
        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M1 5h12m0 0L9 1m4 4L9 9"
        />
      </svg>
    </Link>
  </div>
</div>

    )
}
