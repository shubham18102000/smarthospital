import React from "react";

const testimonials = [
  {
    name: "Emily R.",
    role: "Patient",
    text: "Dr. Smith truly changed my life. The care and attention I received were beyond anything I’ve ever experienced.",
    rating: 5,
    image: "https://i.pravatar.cc/100?img=1",
  },
  {
    name: "Marcus D.",
    role: "Patient",
    text: "At first, I was nervous about the treatment, but Dr. Lee made me feel comfortable from day one. I’m so thankful.",
    rating: 5,
    image: "https://i.pravatar.cc/100?img=2",
  },
  {
    name: "Sarah M.",
    role: "Patient",
    text: "This clinic has the most compassionate staff I’ve ever encountered. Dr. Patel’s professionalism stands out.",
    rating: 5,
    image: "https://i.pravatar.cc/100?img=3",
  },
];

const services = [
  {
    title: "Real-Time Patient Monitoring",
    description: "Track patient vitals and health metrics 24/7 through connected IoMT devices.",
    icon: "🩺",
    name: "VitalTrack"
  },
  {
    title: "Smart Appointment Scheduling",
    description: "Optimize doctor availability and reduce patient wait time using AI scheduling.",
    icon: "📅",
    name: "MediSched"
  },
  {
    title: "Automated Alerts & Notifications",
    description: "Receive alerts for critical patient events directly to medical staff devices.",
    icon: "🚨",
    name: "AlertIQ"
  },
];

const StarRating = ({ count }) => (
  <div style={{ display: 'flex', gap: '4px' }}>
    {Array.from({ length: count }).map((_, idx) => (
      <span key={idx} style={{ color: '#facc15', fontSize: '18px' }}>★</span>
    ))}
  </div>
);

const PatientTestimonials = () => {
  return (
    <div style={{ backgroundColor: '#f9fafb', padding: '40px 16px' }}>
      <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '24px', textAlign: 'center' }}>Patient Testimonials</h2>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap', gap: '24px', maxWidth: '1200px', margin: '0 auto' }}>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            style={{
              width: '100%',
              maxWidth: '350px',
              border: '1px solid #e5e7eb',
              borderRadius: '16px',
              padding: '24px',
              backgroundColor: 'white',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              transition: 'box-shadow 0.3s ease-in-out'
            }}
          >
            <StarRating count={testimonial.rating} />
            <p style={{ color: '#374151', marginTop: '16px', marginBottom: '24px' }}>
              "{testimonial.text}"
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <img
                src={testimonial.image}
                alt={testimonial.name}
                style={{ width: '48px', height: '48px', borderRadius: '9999px' }}
              />
              <div>
                <p style={{ fontWeight: '600' }}>{testimonial.name}</p>
                <p style={{ fontSize: '14px', color: '#6b7280' }}>{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 style={{ fontSize: '28px', fontWeight: 'bold', margin: '60px 0 24px', textAlign: 'center' }}>Our Smart Hospital Services</h2>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap', gap: '24px', maxWidth: '1200px', margin: '0 auto' }}>
        {services.map((service, index) => (
          <div
            key={index}
            style={{
              width: '100%',
              maxWidth: '350px',
              border: '1px solid #e5e7eb',
              borderRadius: '16px',
              padding: '24px',
              backgroundColor: 'white',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              textAlign: 'center',
              transition: 'box-shadow 0.3s ease-in-out'
            }}
          >
            <div style={{ fontSize: '36px', marginBottom: '16px' }}>{service.icon}</div>
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '8px' }}>{service.name}</h3>
            <p style={{ fontSize: '16px', fontWeight: '500', color: '#1f2937', marginBottom: '12px' }}>{service.title}</p>
            <p style={{ color: '#4b5563' }}>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientTestimonials;

