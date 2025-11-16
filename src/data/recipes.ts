export interface Recipe {
  id: number
  name: string
  keyIngredients: string[]
  categories: string[]
  cookingMethod?: string[]
  dietaryRestrictions?: string[]
}

export const recipes: Recipe[] = [
  {
    id: 1,
    name: 'One-Pan Roasted Chicken & Veggies',
    keyIngredients: ['Chicken', 'Potato', 'Carrot', 'Onion', 'Garlic'],
    categories: ['Meat', 'Veg', 'Veg', 'Veg', 'Seasoning'],
    cookingMethod: ['roast'],
    dietaryRestrictions: ['dairy-free', 'gluten-free'],
  },
  {
    id: 2,
    name: 'Pork & Cabbage Stir-Fry',
    keyIngredients: ['Pork', 'Cabbage', 'Ginger', 'Soy Sauce'],
    categories: ['Meat', 'Veg', 'Seasoning', 'Seasoning'],
    cookingMethod: ['stir-fry'],
    dietaryRestrictions: ['dairy-free', 'nut-free'],
  },
  {
    id: 3,
    name: 'Classic Omelet',
    keyIngredients: ['Egg', 'Milk', 'Butter', 'Cheese'],
    categories: ['Meat', 'Dairy', 'Dairy', 'Dairy'],
    cookingMethod: ['fry'],
    dietaryRestrictions: ['gluten-free', 'nut-free'],
  },
  {
    id: 4,
    name: 'Sausage & Spinach Pasta',
    keyIngredients: ['Sausage', 'Noodles', 'Spinach', 'Garlic'],
    categories: ['Meat', 'Staple', 'Veg', 'Seasoning'],
    cookingMethod: ['boil', 'fry'],
    dietaryRestrictions: ['nut-free', 'egg-free'],
  },
  {
    id: 5,
    name: 'Bacon & Tomato Sandwich',
    keyIngredients: ['Bacon', 'Bread', 'Tomato', 'Lettuce'],
    categories: ['Meat', 'Staple', 'Veg', 'Veg'],
    cookingMethod: ['fry'],
    dietaryRestrictions: ['shellfish-free', 'nut-free'],
  },
  {
    id: 6,
    name: 'Garlic Mashed Potatoes',
    keyIngredients: ['Potato', 'Garlic', 'Milk', 'Butter'],
    categories: ['Veg', 'Seasoning', 'Dairy', 'Dairy'],
    cookingMethod: ['boil'],
    dietaryRestrictions: ['gluten-free', 'nut-free'],
  },
  {
    id: 7,
    name: 'Broccoli with Garlic & Ginger',
    keyIngredients: ['Broccoli', 'Garlic', 'Ginger', 'Soy Sauce'],
    categories: ['Veg', 'Seasoning', 'Seasoning', 'Seasoning'],
    cookingMethod: ['steam'],
    dietaryRestrictions: ['vegan', 'dairy-free', 'gluten-free'],
  },
  {
    id: 8,
    name: 'Simple Tomato & Cheese Toast',
    keyIngredients: ['Bread', 'Tomato', 'Cheese'],
    categories: ['Staple', 'Veg', 'Dairy'],
    cookingMethod: ['bake'],
    dietaryRestrictions: ['vegetarian', 'egg-free'],
  },
  {
    id: 9,
    name: 'Zucchini Noodles with Garlic',
    keyIngredients: ['Zucchini', 'Garlic'],
    categories: ['Veg', 'Seasoning'],
    cookingMethod: ['fry'],
    dietaryRestrictions: ['vegan', 'gluten-free', 'keto'],
  },
  {
    id: 10,
    name: 'Vinegar-Dressed Cabbage Salad',
    keyIngredients: ['Cabbage', 'Carrot', 'Soy Sauce'],
    categories: ['Veg', 'Veg', 'Seasoning'],
    cookingMethod: ['salad'],
    dietaryRestrictions: ['vegan', 'dairy-free', 'gluten-free'],
  },
  {
    id: 11,
    name: 'Sautéed Spinach with Garlic',
    keyIngredients: ['Spinach', 'Garlic'],
    categories: ['Veg', 'Seasoning'],
    cookingMethod: ['fry'],
    dietaryRestrictions: ['vegan', 'dairy-free', 'gluten-free'],
  },
  {
    id: 12,
    name: 'Simple Fried Rice',
    keyIngredients: ['Rice', 'Egg', 'Soy Sauce', 'Scallion'],
    categories: ['Staple', 'Meat', 'Seasoning', 'Seasoning'],
    cookingMethod: ['fry'],
    dietaryRestrictions: ['dairy-free', 'nut-free'],
  },
  {
    id: 13,
    name: 'Garlic Butter Noodles',
    keyIngredients: ['Noodles', 'Butter', 'Garlic'],
    categories: ['Staple', 'Dairy', 'Seasoning'],
    cookingMethod: ['boil'],
    dietaryRestrictions: ['vegetarian', 'nut-free'],
  },
  {
    id: 14,
    name: 'Garlic Cheese Bread',
    keyIngredients: ['Bread', 'Butter', 'Garlic', 'Cheese'],
    categories: ['Staple', 'Dairy', 'Seasoning', 'Dairy'],
    cookingMethod: ['bake'],
    dietaryRestrictions: ['vegetarian', 'egg-free'],
  },
  {
    id: 15,
    name: 'Hot Chocolate',
    keyIngredients: ['Milk', 'Cocoa Powder', 'Sugar'],
    categories: ['Dairy', 'Seasoning', 'Seasoning'],
    cookingMethod: ['boil'],
    dietaryRestrictions: ['vegetarian', 'nut-free'],
  },
  {
    id: 16,
    name: 'Quick Cheese Quesadilla',
    keyIngredients: ['Tortilla', 'Cheese', 'Butter'],
    categories: ['Staple', 'Dairy', 'Dairy'],
    cookingMethod: ['fry'],
    dietaryRestrictions: ['vegetarian', 'egg-free'],
  },
  {
    id: 17,
    name: 'Cabbage and Ginger Salad',
    keyIngredients: ['Cabbage', 'Ginger', 'Salt'],
    categories: ['Veg', 'Seasoning', 'Seasoning'],
  },
  {
    id: 18,
    name: 'Sauteed Spinach with Garlic',
    keyIngredients: ['Spinach', 'Garlic', 'Salt'],
    categories: ['Veg', 'Seasoning', 'Seasoning'],
  },
  {
    id: 19,
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
    cookingMethod: ['stir-fry'],
    dietaryRestrictions: ['gluten-free', 'dairy-free', 'nut-free'],
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
    cookingMethod: ['stir-fry'],
    dietaryRestrictions: ['vegetarian', 'vegan', 'gluten-free', 'nut-free', 'egg-free', 'dairy-free'],
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
    keyIngredients: ['Spam', 'White Radish', 'Soy Sauce', 'Garlic'],
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
    cookingMethod: ['salad'],
    dietaryRestrictions: ['gluten-free', 'dairy-free', 'sugar-free'],
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
  // New recipes (51-100)
  {
    id: 51,
    name: 'Lemon Garlic Salmon with Asparagus',
    keyIngredients: ['Salmon', 'Garlic', 'Green Beans', 'Lemon'],
    categories: ['Meat', 'Seasoning', 'Veg', 'Seasoning'],
    cookingMethod: ['bake', 'roast'],
    dietaryRestrictions: ['nut-free', 'dairy-free'],
  },
  {
    id: 52,
    name: 'Ground Beef & Onion Tacos',
    keyIngredients: ['Ground Beef', 'Onion', 'Tortilla', 'Bell Pepper'],
    categories: ['Meat', 'Veg', 'Staple', 'Veg'],
    cookingMethod: ['fry', 'grill'],
    dietaryRestrictions: ['nut-free', 'egg-free'],
  },
  {
    id: 53,
    name: 'Turkey and Quinoa Salad',
    keyIngredients: ['Turkey', 'Quinoa', 'Cucumber', 'Tomato'],
    categories: ['Meat', 'Staple', 'Veg', 'Veg'],
    cookingMethod: ['salad'],
    dietaryRestrictions: ['dairy-free', 'gluten-free'],
  },
  {
    id: 54,
    name: 'Pork and Mushroom Stir-Fry',
    keyIngredients: ['Pork', 'Mushroom', 'Soy Sauce', 'Rice'],
    categories: ['Meat', 'Veg', 'Seasoning', 'Staple'],
    cookingMethod: ['stir-fry'],
    dietaryRestrictions: ['nut-free', 'egg-free'],
  },
  {
    id: 55,
    name: 'Chicken & Potato Skewers',
    keyIngredients: ['Chicken', 'Potato', 'Scallion', 'Ginger'],
    categories: ['Meat', 'Veg', 'Seasoning', 'Seasoning'],
    cookingMethod: ['grill'],
    dietaryRestrictions: ['dairy-free', 'gluten-free'],
  },
  {
    id: 56,
    name: 'Classic Beef Stew',
    keyIngredients: ['Beef', 'Carrot', 'Potato', 'Celery'],
    categories: ['Meat', 'Veg', 'Veg', 'Veg'],
    cookingMethod: ['soup', 'boil'],
    dietaryRestrictions: ['dairy-free', 'egg-free'],
  },
  {
    id: 57,
    name: 'Chicken Breast with Zucchini Noodles',
    keyIngredients: ['Chicken Breast', 'Zucchini', 'Garlic', 'Oil'],
    categories: ['Meat', 'Veg', 'Seasoning', 'Seasoning'],
    cookingMethod: ['fry'],
    dietaryRestrictions: ['keto', 'low-carb'],
  },
  {
    id: 58,
    name: 'Sausage, Egg & Cheese Breakfast Burrito',
    keyIngredients: ['Sausage', 'Egg', 'Cheese', 'Tortilla'],
    categories: ['Meat', 'Meat', 'Dairy', 'Staple'],
    cookingMethod: ['fry'],
  },
  {
    id: 59,
    name: 'Bacon & Spinach Frittata',
    keyIngredients: ['Bacon', 'Egg', 'Spinach', 'Milk'],
    categories: ['Meat', 'Meat', 'Veg', 'Dairy'],
    cookingMethod: ['bake'],
    dietaryRestrictions: ['gluten-free'],
  },
  {
    id: 60,
    name: 'Spicy Shrimp & White Radish Soup',
    keyIngredients: ['Shrimp', 'White Radish', 'Ginger', 'Scallion'],
    categories: ['Meat', 'Veg', 'Seasoning', 'Seasoning'],
    cookingMethod: ['soup', 'boil'],
    dietaryRestrictions: ['dairy-free', 'nut-free'],
  },
  {
    id: 61,
    name: 'Tofu Scramble with Turmeric',
    keyIngredients: ['Tofu', 'Onion', 'Tomato', 'Spinach'],
    categories: ['Veg', 'Veg', 'Veg', 'Veg'],
    cookingMethod: ['fry'],
    dietaryRestrictions: ['vegan', 'dairy-free'],
  },
  {
    id: 62,
    name: 'Quinoa Bowl with Roasted Vegetables',
    keyIngredients: ['Quinoa', 'Broccoli', 'Carrot', 'Eggplant'],
    categories: ['Staple', 'Veg', 'Veg', 'Veg'],
    cookingMethod: ['roast'],
    dietaryRestrictions: ['vegan', 'gluten-free', 'low-carb'],
  },
  {
    id: 63,
    name: 'Mushroom & Bell Pepper Tostadas',
    keyIngredients: ['Mushroom', 'Bell Pepper', 'Tortilla', 'Cheese'],
    categories: ['Veg', 'Veg', 'Staple', 'Dairy'],
    cookingMethod: ['bake'],
    dietaryRestrictions: ['egg-free'],
  },
  {
    id: 64,
    name: 'Oats with Berries and Honey',
    keyIngredients: ['Oats', 'Honey', 'Milk'],
    categories: ['Staple', 'Seasoning', 'Dairy'],
    cookingMethod: ['boil'],
    dietaryRestrictions: ['egg-free', 'soy-free'],
  },
  {
    id: 65,
    name: 'Spicy Peanut Noodle Stir-Fry',
    keyIngredients: ['Noodles', 'Cabbage', 'Carrot'],
    categories: ['Staple', 'Veg', 'Veg'],
    cookingMethod: ['stir-fry'],
    dietaryRestrictions: ['vegetarian'],
  },
  {
    id: 66,
    name: 'Baked Sweet Potato Starch Fries',
    keyIngredients: ['Potato Starch', 'Potato', 'Salt', 'Oil'],
    categories: ['Staple', 'Veg', 'Seasoning', 'Seasoning'],
    cookingMethod: ['bake'],
    dietaryRestrictions: ['gluten-free', 'vegan'],
  },
  {
    id: 67,
    name: 'Vegan "Tuna" Chickpea Salad',
    keyIngredients: ['Celery', 'Onion', 'Lemon'],
    categories: ['Veg', 'Veg', 'Seasoning'],
    cookingMethod: ['salad'],
    dietaryRestrictions: ['vegan', 'dairy-free'],
  },
  {
    id: 68,
    name: 'Broccoli & Cheese Egg Cups',
    keyIngredients: ['Broccoli', 'Egg', 'Cheese', 'Salt'],
    categories: ['Veg', 'Meat', 'Dairy', 'Seasoning'],
    cookingMethod: ['bake'],
    dietaryRestrictions: ['low-carb', 'gluten-free'],
  },
  {
    id: 69,
    name: 'Garlic Ginger Tofu Lettuce Wraps',
    keyIngredients: ['Tofu', 'Ginger', 'Garlic', 'Lettuce'],
    categories: ['Veg', 'Seasoning', 'Seasoning', 'Veg'],
    cookingMethod: ['stir-fry'],
    dietaryRestrictions: ['low-carb', 'vegan', 'dairy-free'],
  },
  {
    id: 70,
    name: 'Corn on the Cob (Steamed)',
    keyIngredients: ['Corn', 'Butter', 'Salt'],
    categories: ['Veg', 'Dairy', 'Seasoning'],
    cookingMethod: ['steam'],
    dietaryRestrictions: ['gluten-free', 'vegetarian'],
  },
  {
    id: 71,
    name: 'Classic Beef Bolognese',
    keyIngredients: ['Beef', 'Pasta', 'Tomato', 'Onion', 'Garlic'],
    categories: ['Meat', 'Staple', 'Veg', 'Veg', 'Seasoning'],
    cookingMethod: ['boil'],
    dietaryRestrictions: ['nut-free', 'shellfish-free'],
  },
  {
    id: 72,
    name: 'Simple Rice Noodle Soup',
    keyIngredients: ['Rice Noodles', 'Scallion', 'Chicken'],
    categories: ['Staple', 'Seasoning', 'Meat'],
    cookingMethod: ['soup', 'boil'],
    dietaryRestrictions: ['dairy-free', 'gluten-free'],
  },
  {
    id: 73,
    name: 'Cheesy Potato & Bacon Bake',
    keyIngredients: ['Potato', 'Cheese', 'Bacon', 'Milk'],
    categories: ['Veg', 'Dairy', 'Meat', 'Dairy'],
    cookingMethod: ['bake'],
    dietaryRestrictions: ['egg-free'],
  },
  {
    id: 74,
    name: 'Instant Noodle Upgrade (with Egg & Veggies)',
    keyIngredients: ['Instant Noodles', 'Egg', 'Spinach', 'Carrot'],
    categories: ['Staple', 'Meat', 'Veg', 'Veg'],
    cookingMethod: ['boil'],
    dietaryRestrictions: ['nut-free'],
  },
  {
    id: 75,
    name: 'Grilled Cheese & Tomato Soup',
    keyIngredients: ['Bread', 'Cheese', 'Tomato', 'Butter'],
    categories: ['Staple', 'Dairy', 'Veg', 'Dairy'],
    cookingMethod: ['fry', 'grill'],
    dietaryRestrictions: ['egg-free', 'shellfish-free'],
  },
  {
    id: 76,
    name: 'Tuna Melt Sandwich',
    keyIngredients: ['Tuna', 'Cheese', 'Bread', 'Onion'],
    categories: ['Meat', 'Dairy', 'Staple', 'Veg'],
    cookingMethod: ['fry', 'grill'],
    dietaryRestrictions: ['egg-free'],
  },
  {
    id: 77,
    name: 'Chicken, Broccoli & Rice Casserole',
    keyIngredients: ['Chicken', 'Broccoli', 'Rice', 'Cheese'],
    categories: ['Meat', 'Veg', 'Staple', 'Dairy'],
    cookingMethod: ['bake'],
    dietaryRestrictions: ['nut-free'],
  },
  {
    id: 78,
    name: 'Pork and Noodle Lo Mein',
    keyIngredients: ['Pork', 'Noodles', 'Cabbage', 'Soy Sauce'],
    categories: ['Meat', 'Staple', 'Veg', 'Seasoning'],
    cookingMethod: ['stir-fry'],
    dietaryRestrictions: ['nut-free'],
  },
  {
    id: 79,
    name: 'Turkey and Vegetable Fried Rice',
    keyIngredients: ['Turkey', 'Rice', 'Carrot', 'Egg'],
    categories: ['Meat', 'Staple', 'Veg', 'Meat'],
    cookingMethod: ['fry'],
    dietaryRestrictions: ['dairy-free', 'nut-free'],
  },
  {
    id: 80,
    name: 'Quick Pasta with Butter and Cheese',
    keyIngredients: ['Pasta', 'Butter', 'Cheese', 'Salt'],
    categories: ['Staple', 'Dairy', 'Dairy', 'Seasoning'],
    cookingMethod: ['boil'],
    dietaryRestrictions: ['egg-free'],
  },
  {
    id: 81,
    name: 'Korean Kimchi Fried Rice',
    keyIngredients: ['Rice', 'Egg', 'Scallion', 'Pork'],
    categories: ['Staple', 'Meat', 'Seasoning', 'Meat'],
    cookingMethod: ['fry'],
    dietaryRestrictions: ['dairy-free'],
  },
  {
    id: 82,
    name: 'Chinese Chicken & Corn Soup',
    keyIngredients: ['Chicken', 'Corn', 'Egg', 'Ginger'],
    categories: ['Meat', 'Veg', 'Meat', 'Seasoning'],
    cookingMethod: ['soup', 'boil'],
    dietaryRestrictions: ['dairy-free', 'gluten-free'],
  },
  {
    id: 83,
    name: 'Mediterranean Salmon Salad',
    keyIngredients: ['Salmon', 'Lettuce', 'Cucumber', 'Tomato', 'Onion'],
    categories: ['Meat', 'Veg', 'Veg', 'Veg', 'Veg'],
    cookingMethod: ['salad'],
    dietaryRestrictions: ['dairy-free', 'keto'],
  },
  {
    id: 84,
    name: 'Cuban Black Beans & Rice',
    keyIngredients: ['Rice', 'Onion', 'Bell Pepper', 'Garlic'],
    categories: ['Staple', 'Veg', 'Veg', 'Seasoning'],
    cookingMethod: ['boil'],
    dietaryRestrictions: ['vegan', 'gluten-free'],
  },
  {
    id: 85,
    name: 'Indian Potato & Spinach Curry',
    keyIngredients: ['Potato', 'Spinach', 'Onion', 'Garlic'],
    categories: ['Veg', 'Veg', 'Veg', 'Seasoning'],
    cookingMethod: ['soup', 'boil'],
    dietaryRestrictions: ['vegan', 'dairy-free', 'gluten-free'],
  },
  {
    id: 86,
    name: 'Quick Quesadillas',
    keyIngredients: ['Tortilla', 'Cheese', 'Chicken', 'Onion'],
    categories: ['Staple', 'Dairy', 'Meat', 'Veg'],
    cookingMethod: ['fry'],
    dietaryRestrictions: ['vegetarian'],
  },
  {
    id: 87,
    name: 'Thai Basil Beef Stir-Fry',
    keyIngredients: ['Beef', 'Bell Pepper', 'Ginger'],
    categories: ['Meat', 'Veg', 'Seasoning'],
    cookingMethod: ['stir-fry'],
    dietaryRestrictions: ['dairy-free', 'nut-free'],
  },
  {
    id: 88,
    name: 'Microwave Baked Eggplant',
    keyIngredients: ['Eggplant', 'Garlic', 'Cheese'],
    categories: ['Veg', 'Seasoning', 'Dairy'],
    cookingMethod: ['bake'],
    dietaryRestrictions: ['gluten-free'],
  },
  {
    id: 89,
    name: 'Cabbage Rolls (Unstuffed)',
    keyIngredients: ['Cabbage', 'Ground Beef', 'Rice', 'Tomato'],
    categories: ['Veg', 'Meat', 'Staple', 'Veg'],
    cookingMethod: ['soup', 'boil'],
    dietaryRestrictions: ['nut-free'],
  },
  {
    id: 90,
    name: 'Tofu & Veggie Skewers with Soy Glaze',
    keyIngredients: ['Tofu', 'Zucchini', 'Bell Pepper', 'Soy Sauce'],
    categories: ['Veg', 'Veg', 'Veg', 'Seasoning'],
    cookingMethod: ['grill'],
    dietaryRestrictions: ['vegan', 'dairy-free'],
  },
  {
    id: 91,
    name: 'Hard-Boiled Egg Salad Sandwich',
    keyIngredients: ['Egg', 'Bread', 'Celery'],
    categories: ['Meat', 'Staple', 'Veg'],
    cookingMethod: ['boil'],
    dietaryRestrictions: ['nut-free'],
  },
  {
    id: 92,
    name: 'Spinach and Mushroom Omelet',
    keyIngredients: ['Egg', 'Spinach', 'Mushroom', 'Cheese'],
    categories: ['Meat', 'Veg', 'Veg', 'Dairy'],
    cookingMethod: ['fry'],
    dietaryRestrictions: ['low-carb', 'gluten-free'],
  },
  {
    id: 93,
    name: 'Chicken and Rice Porridge (Congee)',
    keyIngredients: ['Chicken', 'Rice', 'Ginger', 'Scallion'],
    categories: ['Meat', 'Staple', 'Seasoning', 'Seasoning'],
    cookingMethod: ['soup', 'boil'],
    dietaryRestrictions: ['dairy-free', 'gluten-free'],
  },
  {
    id: 94,
    name: 'Coleslaw with White Radish',
    keyIngredients: ['Cabbage', 'White Radish', 'Carrot'],
    categories: ['Veg', 'Veg', 'Veg'],
    cookingMethod: ['salad'],
    dietaryRestrictions: ['egg-free'],
  },
  {
    id: 95,
    name: 'Sausage and Bell Pepper Stir-Fry',
    keyIngredients: ['Sausage', 'Bell Pepper', 'Onion', 'Garlic'],
    categories: ['Meat', 'Veg', 'Veg', 'Seasoning'],
    cookingMethod: ['stir-fry'],
    dietaryRestrictions: ['dairy-free', 'nut-free'],
  },
  {
    id: 96,
    name: 'Shrimp Scampi (with Pasta)',
    keyIngredients: ['Shrimp', 'Pasta', 'Garlic', 'Butter'],
    categories: ['Meat', 'Staple', 'Seasoning', 'Dairy'],
    cookingMethod: ['fry'],
    dietaryRestrictions: ['egg-free'],
  },
  {
    id: 97,
    name: 'Eggplant Parmesan (Simplified)',
    keyIngredients: ['Eggplant', 'Cheese', 'Tomato', 'Bread'],
    categories: ['Veg', 'Dairy', 'Veg', 'Staple'],
    cookingMethod: ['bake'],
    dietaryRestrictions: ['vegetarian'],
  },
  {
    id: 98,
    name: 'Simple Tuna Salad',
    keyIngredients: ['Tuna', 'Celery', 'Onion'],
    categories: ['Meat', 'Veg', 'Veg'],
    cookingMethod: ['salad'],
    dietaryRestrictions: ['gluten-free'],
  },
  {
    id: 99,
    name: 'Carrot and Ginger Soup',
    keyIngredients: ['Carrot', 'Ginger', 'Milk'],
    categories: ['Veg', 'Seasoning', 'Dairy'],
    cookingMethod: ['soup', 'boil'],
    dietaryRestrictions: ['vegan'],
  },
  {
    id: 100,
    name: 'Turkey Meatballs with Rice',
    keyIngredients: ['Turkey', 'Egg', 'Onion', 'Rice'],
    categories: ['Meat', 'Meat', 'Veg', 'Staple'],
    cookingMethod: ['bake', 'fry'],
    dietaryRestrictions: ['gluten-free'],
  },
]

// 食材名称映射（将界面显示的食材名称映射到食谱中的食材名称）
export const ingredientMapping: Record<string, string[]> = {
  // Vegetables
  potato: ['Potato'],
  carrot: ['Carrot'],
  broccoli: ['Broccoli'],
  radish: ['White Radish'],
  zucchini: ['Zucchini'],
  tomato: ['Tomato'],
  onion: ['Onion'],
  garlic: ['Garlic'],
  'bell-pepper': ['Bell Pepper'],
  cucumber: ['Cucumber'],
  spinach: ['Spinach'],
  cabbage: ['Cabbage'],
  mushroom: ['Mushroom'],
  corn: ['Corn'],
  celery: ['Celery'],
  lettuce: ['Lettuce'],
  eggplant: ['Eggplant'],
  'green-beans': ['Green Beans'],
  scallion: ['Scallion'],
  ginger: ['Ginger'],
  // Meats (ordered as specified)
  chicken: ['Chicken', 'Chicken Breast'],
  egg: ['Egg'],
  beef: ['Beef', 'Ground Beef'],
  pork: ['Pork'],
  'ground-beef': ['Beef', 'Ground Beef'],
  salmon: ['Fish', 'Salmon'],
  tofu: ['Tofu'],
  bacon: ['Bacon'],
  sausage: ['Sausage'],
  turkey: ['Turkey'],
  shrimp: ['Shrimp'],
  lamb: ['Lamb'],
  fish: ['Fish', 'Salmon'],
  'deli-meat': ['Deli Meat'],
  'oysters-clams': ['Oysters', 'Clams'],
  veal: ['Veal'],
  'lunch-meat': ['Spam'],
  'chicken-breast': ['Chicken', 'Chicken Breast'],
  // Staples
  noodles: ['Noodles'],
  bread: ['Bread'],
  rice: ['Rice'],
  'instant-noodles': ['Instant Noodles'],
  pasta: ['Pasta', 'Noodles'],
  oats: ['Oats'],
  'potato-starch': ['Potato Starch'],
  tortilla: ['Tortilla'],
  'rice-noodles': ['Rice Noodles', 'Noodles'],
  // Additional ingredients for new recipes
  tuna: ['Tuna'],
  lemon: ['Lemon'],
  cheese: ['Cheese'],
  butter: ['Butter'],
  milk: ['Milk'],
  honey: ['Honey'],
  oil: ['Oil'],
}

// 获取今日推荐食谱（基于日期，每天显示不同的推荐）
export function getRecipesOfTheDay(): Recipe[] {
  // 使用日期作为种子，确保每天显示相同的推荐
  const today = new Date()
  const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000)
  
  // 简单的伪随机数生成器
  let seed = dayOfYear
  const random = () => {
    seed = (seed * 9301 + 49297) % 233280
    return seed / 233280
  }
  
  // 创建推荐食谱列表（可以选择一些受欢迎的食谱）
  const featuredRecipeIds = [
    1, 2, 3, 5, 7, 10, 12, 15, 18, 20, 22, 25, 28, 30, 32, 35, 38, 40, 42, 45,
    48, 50, 52, 55, 58, 60, 62, 65, 68, 70, 72, 75, 78, 80, 82, 85, 88, 90, 92, 95
  ]
  
  // 使用种子随机选择6个推荐食谱
  const shuffled = [...featuredRecipeIds].sort(() => random() - 0.5)
  
  const selectedIds = shuffled.slice(0, 6)
  return recipes.filter(recipe => selectedIds.includes(recipe.id))
}

// 匹配食谱函数
export function matchRecipes(
  selectedIngredientIds: string[],
  selectedCookingMethods: string[] = [],
  selectedDietaryRestrictions: string[] = []
): Recipe[] {
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
  let matched = recipes.filter((recipe) =>
    recipe.keyIngredients.some((ing) => selectedIngredients.has(ing))
  )

  // 应用烹饪方式过滤
  if (selectedCookingMethods.length > 0) {
    matched = matched.filter((recipe) => {
      if (!recipe.cookingMethod || recipe.cookingMethod.length === 0) {
        return true // 如果没有指定烹饪方式，则显示
      }
      return recipe.cookingMethod.some((method) =>
        selectedCookingMethods.includes(method)
      )
    })
  }

  // 应用饮食限制过滤
  if (selectedDietaryRestrictions.length > 0) {
    matched = matched.filter((recipe) => {
      if (!recipe.dietaryRestrictions || recipe.dietaryRestrictions.length === 0) {
        return false // 如果没有指定饮食限制，则不显示（严格模式）
      }
      // 食谱必须包含所有选中的饮食限制
      return selectedDietaryRestrictions.every((restriction) =>
        recipe.dietaryRestrictions?.includes(restriction)
      )
    })
  }

  return matched
}

