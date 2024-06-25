import { useGetMyUser, useUpdateMyUser } from "@/api/MyUserApi";
import Spinner from "@/components/Spinner";
import UserProfileForm from "@/forms/user-profile-form/UserProfileForm";

const UserProfilePage = () => {
  const { currentUser, isLoading: isGetLoading } = useGetMyUser();
  const { updateUser, isLoading: isUpdateLoading } = useUpdateMyUser();

  if (isGetLoading) {
    return <Spinner isLoading={isGetLoading} />;
  }
  if (!currentUser) {
    return <span>No user found</span>;
  }

  return (
    <UserProfileForm
      currentUser={currentUser}
      onSave={updateUser}
      isLoading={isUpdateLoading}
    />
  );
};

export default UserProfilePage;
