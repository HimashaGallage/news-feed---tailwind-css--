import './App.css';
import NewsFeed from './screens/NewsFeed';
import Header from './components/Header';

function App() {
  return (
    <div className="container mx-auto p-4 bg-primary">
      <Header />
      <NewsFeed />
    </div>
  );
}

export default App;
