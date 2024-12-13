import React from 'react';

const NewsCard = ({ newsItem, index}) => {
  return (
    <div key={index} className="flex flex-row sm:flex-col sm:p-4 rounded-lg bg-primary">
      <img src={newsItem.bannerImage} alt="" className="w-1/3 ml-4 mb-2 sm:w-full h-40 sm:object-cover sm:rounded-lg sm:mb-4 " />
      <div className="float-right w-2/3 sm:w-full ml-4">
        <div className="text-sm md:text-sm lg:text-sm bg-primary text-secondary">{newsItem.reference}
          <span className="text-sm md:text-sm lg:text-sm float-right text-secondary">{newsItem.timestamp}</span>
        </div>
        <h2 className="text-base md:text-base lg:text-md font-semibold mt-2 text-secondary">{newsItem.title}</h2>
      </div>
    </div>
  );
};

export default NewsCard;