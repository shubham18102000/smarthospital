import React from "react";
import {
  FaHeartbeat,
  FaLaptopMedical,
  FaFileMedical,
  FaUserMd,
  FaShieldAlt,
} from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const services = [
  {
    image:
      "https://images.unsplash.com/photo-1588776814546-ec5d2ed3b756?auto=format&fit=crop&w=800&q=80",
    icon: <FaFileMedical size={40} className="text-blue-600" />,
    title: "Patient Management",
    description:
      "Digital patient records, automated appointment scheduling, and remote monitoring.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1581093588401-22b4c3b1df1e?auto=format&fit=crop&w=800&q=80",
    icon: <FaLaptopMedical size={40} className="text-blue-600" />,
    title: "IoMT Device Integration",
    description:
      "Seamless connectivity with smart medical devices for real-time monitoring.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1603398938378-cfe94d37b62e?auto=format&fit=crop&w=800&q=80",
    icon: <FaUserMd size={40} className="text-blue-600" />,
    title: "Doctor & Staff Management",
    description:
      "Efficient shift scheduling, duty tracking, and performance insights.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1612277792510-b5e3d5656f5b?auto=format&fit=crop&w=800&q=80",
    icon: <FaShieldAlt size={40} className="text-blue-600" />,
    title: "Security & Compliance",
    description:
      "HIPAA & GDPR-compliant data security and patient confidentiality.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1601987077688-7894602b2b91?auto=format&fit=crop&w=800&q=80",
    icon: <FaHeartbeat size={40} className="text-blue-600" />,
    title: "Emergency & Alerts",
    description:
      "Automated emergency response and critical alerts for real-time action.",
  },
];

const ServicesSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Our Services
        </h2>
        <Slider {...settings} className="px-3">
          {services.map((service, index) => (
            <div key={index} className="px-4">
              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col h-full gap-4">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-5 flex flex-col items-center text-center gap-2">
                  <div className="mb-2">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-700">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ServicesSection;






