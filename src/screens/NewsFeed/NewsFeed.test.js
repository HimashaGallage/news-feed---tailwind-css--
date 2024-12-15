import React from 'react';
import { render, screen, waitFor, act } from '@testing-library/react';
import NewsFeed from './NewsFeed';
import { fetchNewsList } from '../../services/NewsService';
import Error from '../../components/shared/Error/Error';

jest.mock('../../services/NewsService');

describe('NewsFeed', () => {
    const mockNews = [
        { id: 1, title: 'News 1', reference: 'Ref 1', timestamp: '2023-10-01', bannerImage: 'https://example.com/image1.jpg' },
        { id: 2, title: 'News 2', reference: 'Ref 2', timestamp: '2023-10-02', bannerImage: 'https://example.com/image2.jpg' },
    ];

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('renders news cards when fetch is successful', async () => {
        fetchNewsList.mockResolvedValueOnce(mockNews);
        
        // Wrap the render call in act
        await act(async () => {
            render(<NewsFeed />);
        });
        
        // Wait for loading to finish
        await waitFor(() => expect(screen.queryByText(/Loading/i)).not.toBeInTheDocument());
        
        // Check if news cards are rendered
        expect(screen.getByText('News 1')).toBeInTheDocument();
        expect(screen.getByText('News 2')).toBeInTheDocument();
    });
});