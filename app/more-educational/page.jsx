// pages/more-educational-opportunities.js

import React from "react";

const educationalOpportunities = [
  {
    category: "Kids",
    opportunities: [
      {
        title: "Art Workshop for Kids",
        requirements: "Age 6-10, basic art supplies",
        deadline: "August 15, 2023",
      },
      {
        title: "Art Workshop for Kids",
        requirements: "Age 6-10, basic art supplies",
        deadline: "August 15, 2023",
      },
      {
        title: "Art Workshop for Kids",
        requirements: "Age 6-10, basic art supplies",
        deadline: "August 15, 2023",
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
        deadline: "1 August - 19 September, 2023",
      },
      {
        title: "Future Leaders Exchange Program",
        requirements: "Different for each country. For Kazakstan: 01.01.2007 - 15.07.2009 / 8-10 grader. ",
        deadline: "1 August - 19 September, 2023",
      },
      {
        title: "Future Leaders Exchange Program",
        requirements: "Different for each country. For Kazakstan: 01.01.2007 - 15.07.2009 / 8-10 grader. ",
        deadline: "1 August - 19 September, 2023",
      },
      // Add more educational opportunities for teenagers here...
    ],
  },
  {
    category: "Adults",
    opportunities: [
      {
        title: "Language Course for Adults",
        requirements: "Age 18+, no prerequisites",
        deadline: "October 10, 2023",
      },
      {
        title: "Language Course for Adults",
        requirements: "Age 18+, no prerequisites",
        deadline: "October 10, 2023",
      },
      {
        title: "Language Course for Adults",
        requirements: "Age 18+, no prerequisites",
        deadline: "October 10, 2023",
      },
      // Add more educational opportunities for adults here...
    ],
  },
  {
    category: "Old People",
    opportunities: [
      {
        title: "Senior Citizen Learning Program",
        requirements: "Age 60+, passion for learning",
        deadline: "November 20, 2023",
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
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default MoreEducationalOpportunitiesPage;
