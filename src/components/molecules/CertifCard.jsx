const CertifCard = ({ image, title, description }) => {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-md hover:scale-105 transition-transform duration-300 ease-in-out">
      <a href="">
        <img src={image} alt={title} className="rounded-lg p-4"/>
      </a>
      <div className="p-5">
        <h4 className="mb-2 text-2xl font-bold">{title}</h4>
        <p className="mb-4 text-gray-600">{description}</p>
          <a href={"/certificate"} className="inline-flex items-center px-3 py-2 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Detail...
        </a>
      </div>
    </div>
  )
}

export default CertifCard;