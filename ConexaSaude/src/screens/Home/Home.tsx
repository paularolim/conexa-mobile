import { HomeView } from './HomeView';
import { ScreenProps } from './types';
import { useHomeViewModel } from './useHomeViewModel';

export function Home(screenProps: ScreenProps) {
  const props = useHomeViewModel(screenProps);
  return <HomeView {...props} />;
}
