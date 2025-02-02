import NotFoundPage from '@/app/not-found';
import React from 'react'

export default function ServiceDetailPage({ params }) {
  const id = params?.id;

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

  const singleData = data.find(d => d._id == id);

  if(singleData){
    return (
      <div className='flex flex-col items-center'>
        <p className="text-center text-4xl font-semibold"> {singleData.service_name} </p>
        <p className="text-center py-4 w-1/2"> {singleData.service_description} </p>
      </div>
    )
  } else {
    return <NotFoundPage />
  }
}
