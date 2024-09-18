import { useEffect, useState } from "react";

import { Option } from "../components/GenericSelector/types";

export const useTriviaCategories = () => {
  const [categories, setCategories] = useState<Option[]>([]);

  useEffect(() => {
    const controller = new AbortController();
    fetch("https://opentdb.com/api_category.php", {
      signal: controller.signal,
    })
      .then(async (response) => {
        const data = await response.json();
        const formattedCategories = data.trivia_categories.map(
          (category: { id: number; name: string }) => ({
            value: category.id.toString(),
            label: category.name,
          })
        );
        setCategories(formattedCategories);
      })
      .catch((error) => {
        // Ignore abort errors
        if (error.name !== "AbortError") {
          console.error(error);
        }
      });
    return () => {
      controller.abort();
    };
  }, []);

  return categories;
};
