import {
  useCreateMyRestaurant,
  useGetMyRestaurant,
  useUpdateMyRestaurant,
} from "@/api/MyRestaurantApi";
import ManageRestaurantForm from "@/forms/manage-restaurant-form/ManageRestaurantForm";

const ManageRestaurantPage = () => {
  const { createRestaurant, isLoading: isLoadingCreate } =
    useCreateMyRestaurant();
  const { restaurant } = useGetMyRestaurant();
  const { updateRestaurant, isLoading: isLoadingUpdate } =
    useUpdateMyRestaurant();

  // !!restaurant synatax mean give me truthy value if a restaurant exists or not
  const isEditting = !!restaurant;

  return (
    <ManageRestaurantForm
      restaurant={restaurant}
      onSave={isEditting ? updateRestaurant : createRestaurant}
      isLoading={isLoadingCreate || isLoadingUpdate}
    />
  );
};

export default ManageRestaurantPage;
