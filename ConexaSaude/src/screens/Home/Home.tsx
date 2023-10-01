import { HomeView } from './HomeView';
import { useHomeViewModel } from './useHomeViewModel';

export function Home() {
  const props = useHomeViewModel();
  return <HomeView {...props} />;
}
