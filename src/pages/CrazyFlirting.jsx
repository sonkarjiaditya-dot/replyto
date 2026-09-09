import CategoryPage from "./CategoryPage";
import { getCategoryByRoute } from "../data/categories";

const category = getCategoryByRoute("/crazy-flirting");

export default function CrazyFlirting() {
  return <CategoryPage category={category} />;
}
