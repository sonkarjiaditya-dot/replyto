import CategoryPage from "./CategoryPage";
import { getCategoryByRoute } from "../data/categories";

const category = getCategoryByRoute("/interviewer");

export default function Interviewer() {
  return <CategoryPage category={category} />;
}
