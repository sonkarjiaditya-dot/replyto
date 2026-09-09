import CategoryPage from "./CategoryPage";
import { getCategoryByRoute } from "../data/categories";

const category = getCategoryByRoute("/client");

export default function Client() {
  return <CategoryPage category={category} />;
}
