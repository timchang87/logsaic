import { FC } from 'react';
import { HomePageNavigation } from './products/Homepage/components/Navigation/HomePageNavigation';

const App: FC = () => {
  const path = window.location.pathname;

  return !path.includes('/app') && <HomePageNavigation />;
};

export default App;
