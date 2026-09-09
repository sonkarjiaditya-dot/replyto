import CategoryPage from "./CategoryPage";
import { getCategoryByRoute } from "../data/categories";

const category = getCategoryByRoute("/boss");

export default function Boss() {
  return <CategoryPage category={category} />;
}
