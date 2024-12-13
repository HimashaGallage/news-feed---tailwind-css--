import React, { useEffect, useState } from 'react';
import { fetchNewsList } from '../services/NewsService';
import NewsCard from '../components/NewsCard';
import Error from '../components/shared/Error/Error';

const NewsFeed = () => {
    const [newsList, setNewsList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    console.log(newsList);

    useEffect(() => {
        const getNews = async () => {
            try {
                setLoading(true);
                const fetchedNews = await fetchNewsList();
                setNewsList(fetchedNews);
            } catch (error) {
                console.log(error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        getNews();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <Error />;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 bg-primary text-secondary">
            {newsList.map((newsItem, index) => (
               <NewsCard key={index} newsItem={newsItem} />
            ))}
        </div>
    );
};

export default NewsFeed;
