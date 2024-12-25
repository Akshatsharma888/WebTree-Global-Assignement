import PropTypes from "prop-types";

const Card = ({ user }) => {
  return (
    <header className="container mt-20 lg:mt-50 h-auto lg:h-[500px] w-full lg:w-[50%] flex justify-center items-center overflow-hidden p-4 lg:p-0 rounded-lg shadow-lg bg-black animate-fade-in shadow-red-500">
      <div className="border-2 border-none bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full lg:w-[85%] h-auto lg:h-[90%] p-4 lg:p-20 rounded-lg">
        <div className="flex flex-col lg:flex-row h-auto lg:h-full">
          {/* Image Section */}
          <div className="w-full lg:w-1/3 flex justify-center items-center">
            <img
              src={user.picture.large}
              alt={`${user.name.first} ${user.name.last}`}
              className="h-[150px] w-[150px] sm:h-[200px] sm:w-[200px] md:h-[250px] md:w-[250px] lg:h-full lg:w-full object-cover shadow-lg shadow-blue-500/50 rounded-full lg:rounded-lg border-4 border-white hover:scale-110 hover:rotate-6 hover:shadow-2xl hover:shadow-pink-500 transition-transform duration-500 ease-in-out"
            />
          </div>
          {/* Details Section */}
          <div className="w-full lg:w-2/3 lg:pl-20 flex flex-col justify-center space-y-4 lg:space-y-8 mt-4 lg:mt-0">
            <p className="text-center lg:text-left cursor-pointer text-lg lg:text-4xl text-black font-extrabold tracking-wide hover:text-white transition-colors duration-300">
              {user.name.first} {user.name.last}
            </p>
            <p className="text-center lg:text-left cursor-pointer text-lg lg:text-4xl text-black font-medium hover:text-white transition-colors duration-300">
              {user.gender}
            </p>
            <p className="text-center lg:text-left cursor-pointer text-lg lg:text-4xl text-black font-medium hover:text-white transition-colors duration-300">
              {user.phone}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

Card.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.shape({
      first: PropTypes.string.isRequired,
      last: PropTypes.string.isRequired,
    }).isRequired,
    gender: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    picture: PropTypes.shape({
      large: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Card;