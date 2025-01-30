
"use client";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import React, { useState } from 'react';

function Footer() {
  const footerData = [
    {
      title: 'Company',
      linksData: [
        { title: 'About The Post' },
        { title: 'Newsroom Policies & Standards' },
        { title: 'Diversity & Inclusion' },
        { title: 'Careers' },
        { title: 'Media & Community Relations' },
        { title: 'WP Creative Group' },
        { title: 'Accessibility Statement' },
      ],
    },
    {
      title: 'Sections',
      linksData: [
        { title: 'Trending' },
        { title: 'Politics' },
        { title: 'Elections' },
        { title: 'Opinions' },
        { title: 'National' },
        { title: 'World' },
        { title: 'Style' },
        { title: 'Sports' },
        { title: 'Business' },
        { title: 'Climate' },
        { title: 'Well+Bing' },
        { title: 'D.C,Md.,& Va.' },
        { title: 'Obi..' },
        { title: 'Weather' },
        { title: 'Arts & Entertainment' },
        { title: 'Recipes' },
      ],
    },
    {
      title: 'Get The Post',
      linksData: [
        { title: 'Become a Subscriber' },
        { title: 'Gift Subscriptions' },
        { title: 'Mobile & Apps' },
        { title: 'Newsletters & Alerts' },
        { title: 'Washington Post Live' },
        { title: 'Reprints & Permissions' },
        { title: 'Post Store' },
        { title: 'Books & E-Books' },
        { title: 'Print Special Editions Store' },
        { title: 'Today’s Paper' },
        { title: 'Public Notices' },
      ],
    },
    {
      title: 'Contact Us',
      linksData: [
        { title: 'Contact The Newsroom' },
        { title: 'Contact Customer Care' },
        { title: 'Contact the Opinions Team' },
        { title: 'Advertise' },
        { title: 'Licensing & Syndication' },
        { title: 'Request a Correction' },
        { title: 'Send a News Tip' },
        { title: 'Report a Vulnerability' },
      ],
    },
    {
      title: 'Terms of Use',
      linksData: [
        { title: 'Digital Products Terms' },
        { title: 'Print Products Terms of Sale' },
        { title: 'Terms of Service' },
        { title: 'Privacy Policy' },
        { title: 'Submissions & Discussion Policy' },
        { title: 'RSS Terms of Service' },
        { title: 'Sitemap' },
        { title: 'Ad Choices' },
      ],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(4);

  const handleToggle = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto border-t-[1px] border-gray-300 px-6 py-2 mt-4">
      <div className="font-bold text-2xl md:text-3xl mt-3">
        <p>The Washington Post</p>
      </div>

      <div className="grid grid-cols-5 mt-8">
        {footerData.map((data, index) => (
          <div
            key={index}
            className="col-span-5 md:col-span-1 border-b-[1px] md:border-b-0 border-gray-300 py-4"
          >
            <div className="group">
              <div
                className="text-base font-bold flex justify-between items-center cursor-pointer md:cursor-auto"
                onClick={() => handleToggle(index)}
              >
                {data.title}
                <span className="md:hidden">
                  {activeIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </span>
              </div>
              <div
                className={`${activeIndex === index || window.innerWidth >= 768
                    ? 'block'
                    : 'hidden'
                  } md:block`}
              >
                {data.linksData.map((link, linkIndex) => (
                  <div key={linkIndex} className="text-sm mt-1">
                    {link.title}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Footer;
