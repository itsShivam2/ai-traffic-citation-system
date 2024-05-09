<div className="container mx-auto mt-8">
            {/* Introduction Section */}
            <section className="mb-8">
              <h1 className="text-4xl text-center font-bold mb-4">
                Welcome to Traffic Management System
              </h1>
              <p className="text-gray-600 text-center">
                Effectively manage traffic rule violations, enforce penalties,
                and improve road safety with our advanced system.
              </p>
            </section>

            {/* Key Features */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-2">Key Features</h2>
              <ul className="list-disc list-inside text-gray-600">
                <li>Real-time license plate detection</li>
                <li>Streamlined penalty management through E-challan</li>
                <li>Reduction of manual work for officials</li>
              </ul>
            </section>

            {/* User Benefits */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-2">User Benefits</h2>
              <p className="text-gray-600">
                Experience faster processing of challans, improved traffic
                regulation, and enhanced road safety.
              </p>
            </section>

            {/* Call-to-Action Buttons */}
            <section className="mb-8 flex space-x-4">
              <Link
                to="/login"
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
              >
                Sign Up
              </Link>
            </section>

            {/* Visuals */}
            <section className="mb-8">
              <img
                className="w-full rounded"
                src="path/to/visuals-image.png"
                alt="System in action"
              />
            </section>

            {/* System Statistics */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-2">System Statistics</h2>
              <p className="text-gray-600">Over 10,000 challans processed</p>
              <p className="text-gray-600">50% reduction in manual workload</p>
            </section>

            {/* Testimonials */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-2">What Users Say</h2>
              <p className="text-gray-600">
                "The system has significantly improved our traffic management
                efficiency." - John Doe
              </p>
            </section>
          </div>