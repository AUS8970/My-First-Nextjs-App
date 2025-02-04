import Link from 'next/link'
import React from 'react'

export const metadata = {
  title: "Services",
  description: "Our pupoler services",
};

export default function ServicesPage() {
  const data = [
    {
      _id: "1",
      service_name: "Web Development",
      service_image: "https://example.com/images/web-development.jpg",
      service_description: "Build modern and responsive websites using the latest technologies, including HTML, CSS, JavaScript, and frameworks like React or Angular."
    },
    {
      _id: "2",
      service_name: "Mobile App Development",
      service_image: "https://example.com/images/mobile-app-development.jpg",
      service_description: "Develop cross-platform mobile applications using Flutter, React Native, or native technologies for iOS and Android."
    },
    {
      _id: "3",
      service_name: "Digital Marketing",
      service_image: "https://example.com/images/digital-marketing.jpg",
      service_description: "Boost your business with SEO, social media marketing, email campaigns, and targeted ads to reach your ideal customers."
    },
    {
      _id: "4",
      service_name: "Graphic Design",
      service_image: "https://example.com/images/graphic-design.jpg",
      service_description: "Create stunning designs for branding, advertisements, and marketing materials, including logos, posters, and social media graphics."
    },
    {
      _id: "5",
      service_name: "Cloud Solutions",
      service_image: "https://example.com/images/cloud-solutions.jpg",
      service_description: "Implement secure and scalable cloud infrastructure, with services like AWS, Azure, and Google Cloud, tailored to your business needs."
    },
  ]
  
  return (
    <div>
      <p className='font-bold text-5xl py-5 text-center'> Services Page </p>
      <div className="grid grid-cols-3 gap-5 px-20">
        {data.map(d => {
          return(
            <div key={d._id} className="border p-5">
              <Link href={`services/${d._id}`}>
                <h2 className="font-bold text-2xl text-center">{d.service_name}</h2>
                <p className="text-sm py-2 text-slate-300 text-center">{d.service_description}</p>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}
