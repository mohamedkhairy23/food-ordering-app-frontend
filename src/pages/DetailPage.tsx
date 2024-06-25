import { useGetRestaurant } from "@/api/RestaurantApi";
import Spinner from "@/components/Spinner";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const { restaurantId } = useParams();
  const { restaurant, isLoading } = useGetRestaurant(restaurantId);

  console.log(restaurant);
  if (isLoading) {
    return <Spinner isLoading={isLoading} />;
  }

  return <div>detailPage</div>;
};

export default DetailPage;
