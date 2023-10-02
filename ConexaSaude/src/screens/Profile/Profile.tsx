import { ProfileView } from './ProfileView';
import { useProfileViewModel } from './useProfileViewModel';

export function Profile() {
  const props = useProfileViewModel();
  return <ProfileView {...props} />;
}
