import CategoryPage from "./CategoryPage";
import { getCategoryByRoute } from "../data/categories";

const category = getCategoryByRoute("/friends");

export default function Friends() {
  return <CategoryPage category={category} />;
}
