// src/components/NewsletterSignup.jsx

const NewsletterSignup = () => {
  return (
    <section className="py-20 text-white newsletter">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Subscribe to our Newsletter</h2>
        <p className="mb-8">Get the latest news and updates delivered to your inbox.</p>
        <form className="flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-1/2 px-4 py-2 text-gray-700 rounded-l"
          />
          <button
            type="submit"
            className="bg-white text-blue-600 px-6 py-2 rounded-r font-semibold"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSignup;
