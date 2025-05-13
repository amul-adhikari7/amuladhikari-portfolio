const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 px-6">
      <div className="max-w-4xl mx-auto text-center text-sm">
        © {new Date().getFullYear()} My Portfolio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
