// pages/more-educational-opportunities.js

import React from "react";

const educationalOpportunities = [
  {
    category: "Kids",
    opportunities: [
      {
        title: "Young Explorers Summer Camp",
        requirements: "Age range between 5 and 12 years old, enthusiasm for learning and exploration",
        description:"The Young Explorers Summer Camp is an exciting educational opportunity for young kids aged between 5 and 12 years old from Kazakhstan. This annual summer camp offers a fun-filled and educational experience where children can engage in various hands-on activities, games, and interactive workshops. Led by experienced instructors, the camp focuses on fostering creativity, critical thinking, and teamwork. Young participants will have the chance to explore different subjects, such as science, arts, nature, and sports, while making new friends and building lasting memories.",
        deadline: "May 31, 2023",
      },
      {
        title: "Junior Language Immersion Program",
        requirements: " Age range between 5 and 12 years old, interest in language learning and cultural exchange",
        description:"The Junior Language Immersion Program provides a wonderful opportunity for young kids aged between 5 and 12 years old from Kazakhstan to immerse themselves in a language-rich environment. This yearly program encourages participants to learn a foreign language through interactive lessons, games, and cultural activities. Led by native-speaking teachers, the program aims to enhance language skills while promoting cross-cultural understanding. Young learners will have a memorable experience exploring new languages, traditions, and customs during this enriching language immersion journey.",
        deadline: "April 15, 2023",
      },
      {
        title: "STEAM Discovery Camp",
        requirements: "Age range between 5 and 12 years old, curiosity about Science, Technology, Engineering, Arts, and Mathematics (STEAM)",
        description:"The STEAM Discovery Camp is an annual educational opportunity designed to ignite the curiosity and passion for STEAM subjects among young kids aged between 5 and 12 years old from Kazakhstan. Through hands-on experiments, creative arts projects, and interactive challenges, participants will explore the fascinating world of STEAM and its real-world applications. Led by qualified educators and experts, the camp aims to foster problem-solving skills, teamwork, and a love for learning. Join the STEAM Discovery Camp to unlock the wonders of science, technology, engineering, arts, and mathematics in a fun and engaging way.",
        deadline: "June 30, 2023",
      },
      // Add more educational opportunities for kids here...
    ],
  },
  {
    category: "Teenagers",
    opportunities: [
      {
        title: "Future Leaders Exchange Program",
        requirements: "Different for each country. For Kazakstan: 01.01.2007 - 15.07.2009 / 8-10 grader. ",
        description:"The Future Leaders Exchange (FLEX) Program is a prestigious educational opportunity designed to foster international understanding and leadership skills among young individuals. elected participants will embark on a year-long cultural exchange journey in the United States, immersing themselves in American society, attending a U.S. high school, and living with a host family. ",
        deadline: "1 August - 19 September, 2023",
      },
      {
        title: "STEM Summer Camp",
        requirements: "Age 13 and above, interest in Science, Technology, Engineering, and Mathematics (STEM) ",
        description:"The STEM Summer Camp is a yearly educational opportunity for young individuals aged 13 and above from Kazakhstan who have a passion for STEM fields. This camp offers an immersive learning experience, where participants will engage in hands-on experiments, interactive workshops, and exciting projects led by experienced mentors. Explore the wonders of science, discover cutting-edge technologies, and unleash your creativity during this enriching summer camp. Ignite your curiosity and pave the way for a future in STEM with the STEM Summer Camp.",
        deadline: "June 30, 2023",
      },
      {
        title: "Young Entrepreneurs Challenge",
        requirements: "Age 13 and above, creative business idea ",
        description:" The Young Entrepreneurs Challenge is a yearly educational opportunity for young visionaries aged 13 and above from Kazakhstan. This challenge invites participants to pitch their innovative business ideas to a panel of seasoned entrepreneurs and investors. Through mentorship and workshops, young entrepreneurs will refine their business plans and presentation skills. Showcasing creativity and ambition, the Young Entrepreneurs Challenge empowers young minds to become the leaders of tomorrow and turn their dreams into successful ventures.",
        deadline: "November 15, 2023",
      },
      // Add more educational opportunities for teenagers here...
    ],
  },
  {
    category: "Adults",
    opportunities: [
      {
        title: "Entrepreneurship Incubator Program",
        requirements: "Age 18 and above, Kazakhstani citizenship or residency, business idea or startup project",
        description:"The Entrepreneurship Incubator Program is a yearly educational opportunity aimed at aspiring entrepreneurs aged 18 and above from Kazakhstan. This program provides a nurturing environment for individuals with innovative business ideas or early-stage startups. Through mentorship, workshops, and access to resources, participants will receive valuable guidance and support to transform their entrepreneurial visions into successful ventures. Join the Entrepreneurship Incubator Program and embark on a journey of creativity, problem-solving, and business growth.",
        deadline: "December 31, 2023",
      },
      {
        title: "Digital Skills for Career Advancement",
        requirements: "Age 18 and above, basic computer literacy",
        description:"Digital Skills for Career Advancement is an annual educational opportunity for Kazakhstani adults aged 18 and above. In today's digital world, staying ahead requires proficiency in various digital tools and technologies. This program equips participants with essential digital skills, including digital marketing, data analysis, and online collaboration. Enhance your employability, advance your career, or explore new opportunities in the digital landscape with this comprehensive digital skills program.",
        deadline: "February 28, 2023",
      },
      {
        title: "Environmental Conservation Workshop",
        requirements: "Age 18 and above, interest in environmental sustainability",
        description:"The Environmental Conservation Workshop offers an annual educational platform for individuals aged 18 and above who are passionate about environmental sustainability. Participants will engage in hands-on activities, discussions with experts, and field visits to learn about conservation practices and ecological preservation. Embrace your role as a responsible global citizen and contribute to environmental stewardship through this transformative workshop.",
        deadline: "May 15, 2023",
      },
      // Add more educational opportunities for adults here...
    ],
  },
  {
    category: "Older People",
    opportunities: [
      {
        title: "Lifelong Learning Scholarships",
        requirements: "Age 35 and above, Kazakhstani citizenship or residency, commitment to continuous education",
        description: "Lifelong Learning Scholarships are annual educational opportunities tailored for individuals aged 35 and above from Kazakhstan. These scholarships aim to promote a culture of lifelong learning by supporting individuals in their pursuit of higher education, professional development, and personal growth. Whether you aspire to enroll in a degree program, attend skill-building workshops, or explore new fields of study, these scholarships offer financial assistance to fuel your educational journey. Embrace the joy of learning and expand your horizons with Lifelong Learning Scholarships.",
        deadline: "December 31, 2023",
      },
      {
        title: "Senior Leadership Development Program",
        requirements: " Age 35 and above, proven leadership experience, fluency in English (preferred)",
        description: "The Senior Leadership Development Program caters to experienced professionals aged 35 and above who aspire to further enhance their leadership abilities. This annual program offers a comprehensive curriculum designed to strengthen leadership skills, strategic thinking, and managerial expertise. Participants will engage in intensive workshops, executive coaching, and networking sessions to foster leadership excellence. Empower yourself as a senior leader and drive positive change within your organization and the broader community through this transformative leadership program.",
        deadline: "February 28, 2023",
      },
      {
        title: "Cultural Exchange and Heritage Preservation Workshop",
        requirements: "Age 35 and above, passion for cultural heritage, basic computer skills",
        description: "The Cultural Exchange and Heritage Preservation Workshop provide a unique opportunity for individuals aged 35 and above to delve into the rich cultural heritage of Kazakhstan. This annual workshop celebrates traditional arts, crafts, and customs while promoting their preservation for future generations. Participants will engage in hands-on activities, interactive discussions, and cultural exchange with local artisans and experts. Immerse yourself in the cultural tapestry of Kazakhstan and become an ambassador for preserving and promoting the nation's unique heritage.",
        deadline: "May 15, 2023",
      },
      // Add more educational opportunities for old people here...
    ],
  },
];

const MoreEducationalOpportunitiesPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">More Educational Opportunities</h1>
      {educationalOpportunities.map((category) => (
        <div key={category.category} className="mb-8">
          <h2 className="text-xl font-bold mb-4">{category.category}</h2>
          <ul>
            {category.opportunities.map((opportunity) => (
              <li key={opportunity.title} className="mb-4">
                <h3 className="text-lg font-bold">{opportunity.title}</h3>
                <p>Requirements: {opportunity.requirements}</p>
                <p>Deadline: {opportunity.deadline}</p>
                <p>Description: {opportunity.description}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default MoreEducationalOpportunitiesPage;
