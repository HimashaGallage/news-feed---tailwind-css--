import React from 'react';
import { render, screen } from '@testing-library/react';
import NewsCard from './NewsCard';

describe('NewsCard', () => {
  const mockNewsItem = {
    bannerImage: 'https://example.com/image.jpg',
    reference: 'News Reference',
    timestamp: '2023-10-01',
    title: 'News Title',
  };

  test('renders news card with correct content', () => {
    render(<NewsCard newsItem={mockNewsItem} />);

    // Check if the image is rendered
    const image = screen.getByAltText('Placeholder for news item');
    expect(image).toHaveAttribute('src', mockNewsItem.bannerImage);

    // Check if the reference is rendered
    expect(screen.getByText(mockNewsItem.reference)).toBeInTheDocument();

    // Check if the timestamp is rendered
    expect(screen.getByText(mockNewsItem.timestamp)).toBeInTheDocument();

    // Check if the title is rendered
    expect(screen.getByText(mockNewsItem.title)).toBeInTheDocument();
  });

  test('applies hover styles on hover', () => {
    const { container } = render(<NewsCard newsItem={mockNewsItem} />);
    const article = container.querySelector('article');

    // Simulate hover
    article.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));
    
    // Check if the hover class is applied (you may need to adjust this based on your CSS)
    expect(article).toHaveClass('hover:bg-hover');
  });
});