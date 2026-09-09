import CategoryPage from "./CategoryPage";
import { getCategoryByRoute } from "../data/categories";

const category = getCategoryByRoute("/crush-flirting");

export default function CrushFlirting() {
  return <CategoryPage category={category} />;
}
