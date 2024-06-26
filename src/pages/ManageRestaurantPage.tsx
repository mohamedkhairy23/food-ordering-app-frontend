import {
  useCreateMyRestaurant,
  useGetMyRestaurant,
  useGetMyRestaurantOrders,
  useUpdateMyRestaurant,
} from "@/api/MyRestaurantApi";
import OrderItemCard from "@/components/OrderItemCard";
import Spinner from "@/components/Spinner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ManageRestaurantForm from "@/forms/manage-restaurant-form/ManageRestaurantForm";

const ManageRestaurantPage = () => {
  const { createRestaurant, isLoading: isLoadingCreate } =
    useCreateMyRestaurant();

  const { restaurant, isLoading: isLoadingGetMyRestaurant } =
    useGetMyRestaurant();

  const { updateRestaurant, isLoading: isLoadingUpdate } =
    useUpdateMyRestaurant();

  const { orders, isLoading: isLoadingGetMyOrders } =
    useGetMyRestaurantOrders();

  // !!restaurant synatax mean give me truthy value if a restaurant exists or not
  const isEditting = !!restaurant;

  if (isLoadingGetMyRestaurant || isLoadingGetMyOrders) {
    return (
      <Spinner isLoading={isLoadingGetMyRestaurant || isLoadingGetMyOrders} />
    );
  }

  return (
    <Tabs defaultValue="orders">
      <TabsList>
        <TabsTrigger value="orders">Orders</TabsTrigger>{" "}
        <TabsTrigger value="manage-restaurant">Manage Restaurant</TabsTrigger>
      </TabsList>
      <TabsContent
        value="orders"
        className="space-y-5 bg-gray-50 pg-10 rounded-lg"
      >
        <h2 className="text-2xl font-bold">{orders?.length} active orders</h2>
        {orders?.map((order) => (
          <OrderItemCard order={order} />
        ))}
      </TabsContent>
      <TabsContent
        value="manage-restaurant"
        className="space-y-5 bg-gray-50 pg-10 rounded-lg"
      >
        <ManageRestaurantForm
          restaurant={restaurant}
          onSave={isEditting ? updateRestaurant : createRestaurant}
          isLoading={isLoadingCreate || isLoadingUpdate}
        />
      </TabsContent>
    </Tabs>
  );
};

export default ManageRestaurantPage;
