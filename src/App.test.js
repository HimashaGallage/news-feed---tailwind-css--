import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Header and NewsFeed components', () => {
  render(<App />);
  
  // Check for elements that should be rendered by Header and NewsFeed
  const headerElement = screen.getByRole('heading'); // Assuming Header renders a heading
  expect(headerElement).toBeInTheDocument();

  const newsFeedElement = screen.getByText(/news/i); // Adjust this based on actual text in NewsFeed
  expect(newsFeedElement).toBeInTheDocument();
});