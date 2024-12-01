import TeamPhoto from '../../assets/images/team.jpg';

const AboutUs = () => {
  return (
    <section id="about-us" className="py-20 bg-gray-100">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <img src={TeamPhoto} alt="Team Photo" className="rounded-lg shadow-lg" />
        </div>
        <div className="lg:w-1/2 lg:pl-12">
          <h2 className="text-3xl font-bold mb-4">Our Mission: Empowering Education Through Innovation</h2>
          <p className="text-gray-700 mb-4">
            At FundMyFuture, we believe in the power of education to transform lives. Our mission is to provide students with the financial support and resources they need to achieve their educational goals. Through our innovative platform, we connect students with funders and mentors who are passionate about making a difference.
          </p>
          <p className="text-gray-700 font-semibold">
            10,000+ students impacted globally.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;