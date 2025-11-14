export interface Recipe {
  id: number
  name: string
  keyIngredients: string[]
  categories: string[]
}

export const recipes: Recipe[] = [
  {
    id: 1,
    name: 'Chicken and Broccoli Stir-Fry',
    keyIngredients: ['Chicken', 'Broccoli', 'Soy Sauce', 'Garlic', 'Rice'],
    categories: ['Meat', 'Veg', 'Seasoning', 'Staple'],
  },
  {
    id: 2,
    name: 'Pork and Scallion Noodles',
    keyIngredients: ['Pork', 'Scallion', 'Noodles', 'Soy Sauce'],
    categories: ['Meat', 'Seasoning', 'Staple'],
  },
  {
    id: 3,
    name: 'Bacon and Egg Fried Rice',
    keyIngredients: ['Bacon', 'Egg', 'Rice', 'Soy Sauce'],
    categories: ['Meat', 'Meat', 'Staple', 'Seasoning'],
  },
  {
    id: 4,
    name: 'Sausage and Tomato Pasta',
    keyIngredients: ['Sausage', 'Tomato', 'Noodles'],
    categories: ['Meat', 'Veg', 'Staple'],
  },
  {
    id: 5,
    name: 'Ginger Soy Chicken Skewers',
    keyIngredients: ['Chicken', 'Ginger', 'Soy Sauce'],
    categories: ['Meat', 'Seasoning'],
  },
  {
    id: 6,
    name: 'Pork and Tofu Stir-Fry',
    keyIngredients: ['Pork', 'Tofu', 'Cabbage', 'Soy Sauce'],
    categories: ['Meat', 'Veg', 'Veg', 'Seasoning'],
  },
  {
    id: 7,
    name: 'Lunch Meat & Cabbage Soup',
    keyIngredients: ['Lunch Meat', 'Cabbage', 'Salt'],
    categories: ['Meat', 'Veg', 'Seasoning'],
  },
  {
    id: 8,
    name: 'Crispy Bacon Wrapped Asparagus',
    keyIngredients: ['Bacon', 'Green Beans', 'Garlic', 'Salt'],
    categories: ['Meat', 'Veg', 'Seasoning'],
  },
  {
    id: 9,
    name: 'Simple Scrambled Eggs with Milk',
    keyIngredients: ['Egg', 'Milk', 'Salt', 'Butter'],
    categories: ['Meat', 'Dairy', 'Seasoning', 'Dairy'],
  },
  {
    id: 10,
    name: 'Chicken, Potato and Carrot Stew',
    keyIngredients: ['Chicken', 'Potato', 'Carrot', 'Onion', 'Salt'],
    categories: ['Meat', 'Veg', 'Veg', 'Veg', 'Seasoning'],
  },
  {
    id: 11,
    name: 'Garlic Butter Mushroom Toast',
    keyIngredients: ['Mushroom', 'Garlic', 'Butter', 'Bread'],
    categories: ['Veg', 'Seasoning', 'Dairy', 'Staple'],
  },
  {
    id: 12,
    name: 'Spicy Tofu with Soy Sauce',
    keyIngredients: ['Tofu', 'Ginger', 'Soy Sauce', 'Scallion'],
    categories: ['Veg', 'Seasoning', 'Seasoning', 'Seasoning'],
  },
  {
    id: 13,
    name: 'Roasted Root Vegetables',
    keyIngredients: ['Potato', 'Carrot', 'White Radish', 'Salt'],
    categories: ['Veg', 'Veg', 'Veg', 'Seasoning'],
  },
  {
    id: 14,
    name: 'Creamy Cheesy Zucchini Bake',
    keyIngredients: ['Zucchini', 'Cheese', 'Milk', 'Butter', 'Salt'],
    categories: ['Veg', 'Dairy', 'Dairy', 'Dairy', 'Seasoning'],
  },
  {
    id: 15,
    name: 'Tomato and Egg Drop Soup',
    keyIngredients: ['Tomato', 'Egg', 'Scallion', 'Salt'],
    categories: ['Veg', 'Meat', 'Seasoning', 'Seasoning'],
  },
  {
    id: 16,
    name: 'Cabbage and Ginger Salad',
    keyIngredients: ['Cabbage', 'Ginger', 'Salt'],
    categories: ['Veg', 'Seasoning', 'Seasoning'],
  },
  {
    id: 17,
    name: 'Sauteed Spinach with Garlic',
    keyIngredients: ['Spinach', 'Garlic', 'Salt'],
    categories: ['Veg', 'Seasoning', 'Seasoning'],
  },
  {
    id: 18,
    name: 'Cucumber and White Radish Pickle',
    keyIngredients: ['Cucumber', 'White Radish', 'Salt'],
    categories: ['Veg', 'Veg', 'Seasoning'],
  },
  {
    id: 19,
    name: 'Broccoli and Cheese Soup',
    keyIngredients: ['Broccoli', 'Cheese', 'Milk', 'Onion'],
    categories: ['Veg', 'Dairy', 'Dairy', 'Veg'],
  },
  {
    id: 20,
    name: 'Corn and Butter Side Dish',
    keyIngredients: ['Corn', 'Butter', 'Salt'],
    categories: ['Veg', 'Dairy', 'Seasoning'],
  },
  {
    id: 21,
    name: 'Instant Noodle with Egg and Scallion',
    keyIngredients: ['Instant Noodles', 'Egg', 'Scallion'],
    categories: ['Staple', 'Meat', 'Seasoning'],
  },
  {
    id: 22,
    name: 'Grilled Cheese Sandwich',
    keyIngredients: ['Bread', 'Cheese', 'Butter'],
    categories: ['Staple', 'Dairy', 'Dairy'],
  },
  {
    id: 23,
    name: 'Milk Toast',
    keyIngredients: ['Bread', 'Milk', 'Butter'],
    categories: ['Staple', 'Dairy', 'Dairy'],
  },
  {
    id: 24,
    name: 'Rice Porridge (Congee)',
    keyIngredients: ['Rice', 'Ginger', 'Salt'],
    categories: ['Staple', 'Seasoning', 'Seasoning'],
  },
  {
    id: 25,
    name: 'Chicken and Rice Bowl',
    keyIngredients: ['Chicken', 'Rice', 'Soy Sauce', 'Scallion'],
    categories: ['Meat', 'Staple', 'Seasoning', 'Seasoning'],
  },
  {
    id: 26,
    name: 'Garlic Bread',
    keyIngredients: ['Bread', 'Garlic', 'Butter'],
    categories: ['Staple', 'Seasoning', 'Dairy'],
  },
  {
    id: 27,
    name: 'Egg and Cheese Croissant',
    keyIngredients: ['Egg', 'Cheese', 'Butter'],
    categories: ['Meat', 'Dairy', 'Dairy'],
  },
  {
    id: 28,
    name: 'Mushroom and Spinach Omelet',
    keyIngredients: ['Egg', 'Mushroom', 'Spinach', 'Milk'],
    categories: ['Meat', 'Veg', 'Veg', 'Dairy'],
  },
  {
    id: 29,
    name: 'Noodles with Peanut Sauce',
    keyIngredients: ['Noodles', 'Soy Sauce', 'Garlic'],
    categories: ['Staple', 'Seasoning', 'Seasoning'],
  },
  {
    id: 30,
    name: 'Onion and Garlic Rice',
    keyIngredients: ['Rice', 'Onion', 'Garlic', 'Butter'],
    categories: ['Staple', 'Veg', 'Seasoning', 'Dairy'],
  },
  {
    id: 31,
    name: 'Pork and Chinese Cabbage Dumplings',
    keyIngredients: ['Pork', 'Chinese Cabbage', 'Ginger', 'Soy Sauce'],
    categories: ['Meat', 'Veg', 'Seasoning', 'Seasoning'],
  },
  {
    id: 32,
    name: 'Eggplant and Pork Stir-Fry',
    keyIngredients: ['Eggplant', 'Pork', 'Garlic', 'Soy Sauce'],
    categories: ['Veg', 'Meat', 'Seasoning', 'Seasoning'],
  },
  {
    id: 33,
    name: 'Chicken and Celery Fried Rice',
    keyIngredients: ['Chicken', 'Celery', 'Rice', 'Soy Sauce', 'Egg'],
    categories: ['Meat', 'Veg', 'Staple', 'Seasoning', 'Meat'],
  },
  {
    id: 34,
    name: 'Creamy Tomato Pasta Sauce',
    keyIngredients: ['Tomato', 'Onion', 'Milk', 'Cheese', 'Butter'],
    categories: ['Veg', 'Veg', 'Dairy', 'Dairy', 'Dairy'],
  },
  {
    id: 35,
    name: 'Broccoli and Cheese Frittata',
    keyIngredients: ['Broccoli', 'Cheese', 'Egg', 'Milk', 'Salt'],
    categories: ['Veg', 'Dairy', 'Meat', 'Dairy', 'Seasoning'],
  },
  {
    id: 36,
    name: 'Hot and Sour White Radish Soup',
    keyIngredients: ['White Radish', 'Pork', 'Ginger', 'Scallion'],
    categories: ['Veg', 'Meat', 'Seasoning', 'Seasoning'],
  },
  {
    id: 37,
    name: 'Savory Tofu Scramble',
    keyIngredients: ['Tofu', 'Onion', 'Garlic', 'Salt', 'Spinach'],
    categories: ['Veg', 'Veg', 'Seasoning', 'Seasoning', 'Veg'],
  },
  {
    id: 38,
    name: 'Zucchini and Corn Fritters',
    keyIngredients: ['Zucchini', 'Corn', 'Egg', 'Scallion'],
    categories: ['Veg', 'Veg', 'Meat', 'Seasoning'],
  },
  {
    id: 39,
    name: 'Cabbage and Carrot Coleslaw',
    keyIngredients: ['Cabbage', 'Carrot', 'Milk'],
    categories: ['Veg', 'Veg', 'Dairy'],
  },
  {
    id: 40,
    name: 'Korean Beef & Radish Soup (Sogogi-Muguk)',
    keyIngredients: ['Lunch Meat', 'White Radish', 'Soy Sauce', 'Garlic'],
    categories: ['Meat', 'Veg', 'Seasoning', 'Seasoning'],
  },
  {
    id: 41,
    name: 'Hard-Boiled Eggs',
    keyIngredients: ['Egg', 'Salt'],
    categories: ['Meat', 'Seasoning'],
  },
  {
    id: 42,
    name: 'Sliced Cheese and Butter Sandwich',
    keyIngredients: ['Cheese', 'Butter', 'Bread'],
    categories: ['Dairy', 'Dairy', 'Staple'],
  },
  {
    id: 43,
    name: 'Microwave Baked Potato',
    keyIngredients: ['Potato', 'Butter', 'Salt'],
    categories: ['Veg', 'Dairy', 'Seasoning'],
  },
  {
    id: 44,
    name: 'Chinese Cabbage with Soy Sauce',
    keyIngredients: ['Chinese Cabbage', 'Soy Sauce', 'Garlic'],
    categories: ['Veg', 'Seasoning', 'Seasoning'],
  },
  {
    id: 45,
    name: 'Celery Sticks with Cheese Dip',
    keyIngredients: ['Celery', 'Cheese', 'Milk'],
    categories: ['Veg', 'Dairy', 'Dairy'],
  },
  {
    id: 46,
    name: 'Quick Corn & Egg Drop Soup',
    keyIngredients: ['Corn', 'Egg', 'Salt'],
    categories: ['Veg', 'Meat', 'Seasoning'],
  },
  {
    id: 47,
    name: 'Tomato and Cucumber Salad',
    keyIngredients: ['Tomato', 'Cucumber', 'Salt'],
    categories: ['Veg', 'Veg', 'Seasoning'],
  },
  {
    id: 48,
    name: 'Ginger and Scallion Rice Topping',
    keyIngredients: ['Ginger', 'Scallion', 'Soy Sauce', 'Rice'],
    categories: ['Seasoning', 'Seasoning', 'Seasoning', 'Staple'],
  },
  {
    id: 49,
    name: 'Simple Buttered Toast',
    keyIngredients: ['Butter', 'Bread'],
    categories: ['Dairy', 'Staple'],
  },
  {
    id: 50,
    name: 'Plain Milk and Instant Noodles',
    keyIngredients: ['Milk', 'Instant Noodles'],
    categories: ['Dairy', 'Staple'],
  },
]

// 食材名称映射（将界面显示的食材名称映射到食谱中的食材名称）
export const ingredientMapping: Record<string, string[]> = {
  potato: ['Potato'],
  carrot: ['Carrot'],
  broccoli: ['Broccoli'],
  radish: ['White Radish'],
  zucchini: ['Zucchini'],
  tomato: ['Tomato'],
  'lunch-meat': ['Lunch Meat'],
  sausage: ['Sausage'],
  bacon: ['Bacon'],
  chicken: ['Chicken'],
  pork: ['Pork'],
  egg: ['Egg'],
  noodles: ['Noodles'],
  bread: ['Bread'],
  rice: ['Rice'],
  'instant-noodles': ['Instant Noodles'],
}

// 匹配食谱函数
export function matchRecipes(selectedIngredientIds: string[]): Recipe[] {
  if (selectedIngredientIds.length === 0) {
    return []
  }

  // 将选中的食材ID转换为食谱中的食材名称
  const selectedIngredients = new Set<string>()
  selectedIngredientIds.forEach((id) => {
    const mapped = ingredientMapping[id] || []
    mapped.forEach((ing) => selectedIngredients.add(ing))
  })

  // 匹配食谱：如果食谱的关键食材中有任何一个在选中的食材中，就匹配
  return recipes.filter((recipe) =>
    recipe.keyIngredients.some((ing) => selectedIngredients.has(ing))
  )
}

