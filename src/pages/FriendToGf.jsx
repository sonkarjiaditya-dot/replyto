import CategoryPage from "./CategoryPage";
import { getCategoryByRoute } from "../data/categories";

const category = getCategoryByRoute("/friend-to-gf");

export default function FriendToGf() {
  return <CategoryPage category={category} />;
}
