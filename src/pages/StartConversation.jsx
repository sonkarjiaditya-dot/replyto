import CategoryPage from "./CategoryPage";
import { getCategoryByRoute } from "../data/categories";

const category = getCategoryByRoute("/start-conversation");

export default function StartConversation() {
  return <CategoryPage category={category} />;
}
