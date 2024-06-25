import { MenuListItem } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

type Props = {
  menuItem: MenuListItem;
};

const MenuItem = ({ menuItem }: Props) => {
  return (
    <Card className="cursor-pointer">
      <CardHeader>
        <CardTitle>{menuItem.name}</CardTitle>
      </CardHeader>
      <CardContent className="font-bold">
        £ {menuItem.price.toFixed(2)}
      </CardContent>
    </Card>
  );
};

export default MenuItem;