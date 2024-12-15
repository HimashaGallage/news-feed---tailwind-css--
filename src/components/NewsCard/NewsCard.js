import React from 'react';

//pass id for improvement purpose
const NewsCard = ({id, newsItem}) => {
  return (
    <article id={id} className="group flex flex-row sm:flex-col sm:p-4 bg-primary transition duration-75 hover:bg-hover">
      <img 
        src={newsItem.bannerImage}
        alt='Placeholder for news item' 
        className="w-1/3 p-2 sm:ml-0 sm:w-full h-40 sm:object-cover" 
      />
      <div className="float-right w-2/3 sm:w-full ml-1 sm:ml-0 p-2">
        <div className="text-sm bg-primary text-secondary transition duration-75 group-hover:bg-hover">
          {newsItem.reference}
          <span className="float-right text-secondary transition duration-75 group-hover:bg-hover">
            {newsItem.timestamp}
          </span>
        </div>
        <h2 className="text-base font-semibold mt-2 text-secondary transition duration-75 group-hover:bg-hover">
          {newsItem.title}
        </h2>
      </div>
    </article>
  );
};

export default NewsCard;