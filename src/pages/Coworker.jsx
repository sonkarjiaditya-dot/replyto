import CategoryPage from "./CategoryPage";
import { getCategoryByRoute } from "../data/categories";

const category = getCategoryByRoute("/coworker");

export default function Coworker() {
  return <CategoryPage category={category} />;
}
