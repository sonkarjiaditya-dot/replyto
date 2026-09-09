import CategoryPage from "./CategoryPage";
import { getCategoryByRoute } from "../data/categories";

const category = getCategoryByRoute("/gf-bf");

export default function GfBf() {
  return <CategoryPage category={category} />;
}
