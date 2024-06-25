import {
  useCreateMyRestaurant,
  useGetMyRestaurant,
  useUpdateMyRestaurant,
} from "@/api/MyRestaurantApi";
import Spinner from "@/components/Spinner";
import ManageRestaurantForm from "@/forms/manage-restaurant-form/ManageRestaurantForm";

const ManageRestaurantPage = () => {
  const { createRestaurant, isLoading: isLoadingCreate } =
    useCreateMyRestaurant();
  const { restaurant, isLoading } = useGetMyRestaurant();
  const { updateRestaurant, isLoading: isLoadingUpdate } =
    useUpdateMyRestaurant();

  // !!restaurant synatax mean give me truthy value if a restaurant exists or not
  const isEditting = !!restaurant;

  if (isLoading) {
    return <Spinner isLoading={isLoading} />;
  }

  return (
    <ManageRestaurantForm
      restaurant={restaurant}
      onSave={isEditting ? updateRestaurant : createRestaurant}
      isLoading={isLoadingCreate || isLoadingUpdate}
    />
  );
};

export default ManageRestaurantPage;
