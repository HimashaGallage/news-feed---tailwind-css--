import React, { useEffect, useState } from 'react';
import { strings } from '../../constants';
import { fetchNewsList } from '../../services/NewsService';
import Error from '../../components/shared/Error/Error';
import Loading from '../../components/shared/Loader/Loader';
import NewsCard from '../../components/NewsCard/NewsCard';

const NewsFeed = () => {
    const [newsList, setNewsList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;
        const getNews = async () => {
            try {
                setLoading(true);
                const fetchedNews = await fetchNewsList();
                if (isMounted) {
                    setNewsList(fetchedNews);
                }
            } catch (error) {
                if (isMounted) {
                    setError(strings.error_generic);
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        };

        getNews();
        return () => {
            isMounted = false;
        };
    }, []);

    if (loading) return <Loading />;
    if (error) return <Error message={error} />;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 bg-primary text-secondary">
            {newsList.map((newsItem) => (
            <NewsCard key={newsItem.id} newsItem={newsItem} />
        ))}
        </div>
    );
};

export default NewsFeed;
