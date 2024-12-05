import NavBar from "./navBar";

function App() {
  return (
    <div className="min-h-screen bg-neutral-900">
      <NavBar />

      {/* Hero Section */}
      <section
        className="bg-cover bg-center h-[500px] relative"
        style={{
          backgroundImage: "url('https://source.unsplash.com/1600x900/?plane')",
        }}
      >
        <div className="absolute inset-0 bg-zinc-900 bg-opacity-50"></div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-4xl font-bold mb-4">
            Find your next destination
          </h1>
          <p className="mb-6">
            Compare flights, explore destinations, and book effortlessly.
          </p>

          {/* Search Bar */}
          <div className="bg-white rounded-lg shadow-lg p-4 w-full max-w-3xl">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="From"
                className="border border-gray-300 rounded-lg p-3 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <input
                type="text"
                placeholder="To"
                className="border border-gray-300 rounded-lg p-3 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            Popular Destinations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Destination Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://source.unsplash.com/400x300/?city"
                alt="City"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">New York</h3>
                <p className="text-gray-600">
                  Explore the Big Apple with top attractions and iconic
                  landmarks.
                </p>
              </div>
            </div>
            {/* Repeat for other destinations */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
