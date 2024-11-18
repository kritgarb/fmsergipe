import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';

const IconsButton = () => (
  <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
    <a
      href="https://www.instagram.com/fmsergipe/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-2 text-white rounded-md text-xl bg-[#FF060B] hover:bg-[#D00406] hover:shadow-lg transition-all duration-300 ease-in-out px-6 py-2"
    >
      <FaInstagram size={24} />
      Instagram
    </a>

    <a
      href="https://www.facebook.com/fmsergipe"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-2 text-white rounded-md text-xl bg-[#FF060B] hover:bg-[#D00406] hover:shadow-lg transition-all duration-300 ease-in-out px-6 py-2"
    >
      <FaFacebookF size={24} />
      Facebook
    </a>

    <a
      href="https://twitter.com/fmsergipe"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-2 text-white rounded-md text-xl bg-[#FF060B] hover:bg-[#D00406] hover:shadow-lg transition-all duration-300 ease-in-out px-6 py-2"
    >
      <FaTwitter size={24} />
      Twitter
    </a>
  </div>
);

export default IconsButton;

