export interface Ingredient {
  name: string
  amount: string
}

export interface Instruction {
  step: number
  text: string
}

export interface RecipeDetail {
  id: number
  focus: string
  ingredients: Ingredient[]
  instructions: Instruction[]
}

// Recipe details data
export const recipeDetails: Record<number, RecipeDetail> = {
  1: {
    id: 1,
    focus: 'Chicken',
    ingredients: [
      { name: 'Chicken pieces (thighs or breasts)', amount: '1.5 lbs, cut into 1-inch cubes' },
      { name: 'Potatoes', amount: '2, cubed' },
      { name: 'Carrots', amount: '2, sliced' },
      { name: 'Onion', amount: '1, quartered' },
      { name: 'Garlic', amount: '3 cloves, minced' },
      { name: 'Olive Oil', amount: '2 tbsp' },
      { name: 'Salt', amount: '1 tsp' },
      { name: 'Black Pepper', amount: '½ tsp' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Preheat oven to 400°F (200°C).',
      },
      {
        step: 2,
        text: 'In a large bowl, toss the Chicken, Potatoes, Carrots, and Onion with Olive Oil, minced Garlic, Salt, and Black Pepper.',
      },
      {
        step: 3,
        text: 'Spread the mixture in a single layer on a baking sheet. Roast for 25–30 minutes, or until the chicken is cooked through and the vegetables are tender.',
      },
    ],
  },
  2: {
    id: 2,
    focus: 'Pork',
    ingredients: [
      { name: 'Pork (shoulder or loin)', amount: '1 lb, thinly sliced' },
      { name: 'Cabbage', amount: '½ head, thinly sliced' },
      { name: 'Ginger', amount: '1 inch, grated' },
      { name: 'Soy Sauce', amount: '2 tbsp' },
      { name: 'Cooking Oil', amount: '1 tbsp' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Heat oil in a large skillet or wok over medium-high heat. Add Pork and stir-fry for 3–4 minutes until browned. Remove pork and set aside.',
      },
      {
        step: 2,
        text: 'Add Cabbage and grated Ginger to the same skillet. Stir-fry for 3–5 minutes until the Cabbage is wilted but still crisp.',
      },
      {
        step: 3,
        text: 'Return the Pork to the skillet. Pour in the Soy Sauce. Toss everything together for 1 minute until the sauce coats the ingredients.',
      },
    ],
  },
  3: {
    id: 3,
    focus: 'Egg',
    ingredients: [
      { name: 'Eggs', amount: '3 large' },
      { name: 'Milk', amount: '2 tbsp' },
      { name: 'Butter', amount: '1 tsp' },
      { name: 'Salt', amount: '¼ tsp' },
      { name: 'Cheese', amount: '2 tbsp (optional, shredded)' },
    ],
    instructions: [
      {
        step: 1,
        text: 'In a bowl, whisk the Eggs, Milk, and Salt vigorously until slightly frothy.',
      },
      {
        step: 2,
        text: 'Melt the Butter in an 8-inch non-stick skillet over medium-low heat until it foams.',
      },
      {
        step: 3,
        text: 'Pour the egg mixture into the skillet. Let it cook undisturbed for about 3–4 minutes, pulling the edges inward occasionally to allow uncooked egg to flow underneath.',
      },
      {
        step: 4,
        text: 'Sprinkle Cheese over one half of the omelet. Carefully fold the omelet in half and slide it onto a plate.',
      },
    ],
  },
  4: {
    id: 4,
    focus: 'Sausage',
    ingredients: [
      { name: 'Sausage (Italian or any type)', amount: '8 oz, sliced' },
      { name: 'Noodles (Pasta)', amount: '8 oz, such as penne or spaghetti' },
      { name: 'Spinach', amount: '2 cups' },
      { name: 'Garlic', amount: '2 cloves, minced' },
      { name: 'Olive Oil', amount: '1 tbsp' },
      { name: 'Salt', amount: '½ tsp' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Bring a pot of salted water to a boil. Cook Noodles according to package directions. Drain, reserving ½ cup of the pasta water.',
      },
      {
        step: 2,
        text: 'While the pasta cooks, heat oil in a skillet over medium heat. Add Sausage and cook until browned. Add minced Garlic and cook for 1 minute.',
      },
      {
        step: 3,
        text: 'Add the Spinach to the skillet and cook until wilted.',
      },
      {
        step: 4,
        text: 'Add the cooked Noodles to the skillet along with a splash of the reserved pasta water. Toss everything together to coat and serve immediately.',
      },
    ],
  },
  5: {
    id: 5,
    focus: 'Bacon',
    ingredients: [
      { name: 'Bacon', amount: '4 slices' },
      { name: 'Bread', amount: '2 slices' },
      { name: 'Tomato', amount: '1 large, sliced' },
      { name: 'Lettuce', amount: '2 pieces' },
      { name: 'Mayonnaise', amount: 'as needed' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Cook Bacon in a skillet over medium heat until crispy. Place the cooked bacon on a paper towel to drain excess grease.',
      },
      {
        step: 2,
        text: 'Toast the Bread slices until golden brown.',
      },
      {
        step: 3,
        text: 'Spread mayonnaise on both slices of toast. Layer the Lettuce, sliced Tomato, and crispy Bacon on one slice. Top with the other slice of toast.',
      },
    ],
  },
  6: {
    id: 6,
    focus: 'Potato',
    ingredients: [
      { name: 'Potatoes', amount: '3 large, peeled and quartered' },
      { name: 'Garlic', amount: '3 cloves, smashed' },
      { name: 'Milk', amount: '¼ cup, warmed' },
      { name: 'Butter', amount: '3 tbsp' },
      { name: 'Salt', amount: '1 tsp' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Place Potatoes and smashed Garlic in a pot and cover with cold, salted water. Bring to a boil and cook for 15–20 minutes, or until the potatoes are fork-tender.',
      },
      {
        step: 2,
        text: 'Drain the potatoes and Garlic well. Return them to the pot.',
      },
      {
        step: 3,
        text: 'Add Butter, warm Milk, and Salt. Using a potato masher, mash until smooth and creamy.',
      },
    ],
  },
  7: {
    id: 7,
    focus: 'Broccoli',
    ingredients: [
      { name: 'Broccoli', amount: '1 head, cut into florets' },
      { name: 'Garlic', amount: '2 cloves, minced' },
      { name: 'Ginger', amount: '½ inch, grated' },
      { name: 'Soy Sauce', amount: '1 tbsp' },
      { name: 'Sesame Oil', amount: '1 tsp' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Steam the Broccoli florets for 5–7 minutes until tender-crisp.',
      },
      {
        step: 2,
        text: 'While the Broccoli is steaming, heat Sesame Oil in a small pan over medium heat. Add minced Garlic and grated Ginger and cook for 30 seconds until fragrant.',
      },
      {
        step: 3,
        text: 'Add the steamed Broccoli to the pan. Drizzle with Soy Sauce and toss to coat. Serve immediately.',
      },
    ],
  },
  8: {
    id: 8,
    focus: 'Tomato',
    ingredients: [
      { name: 'Bread', amount: '2 slices' },
      { name: 'Tomato', amount: '1 large, sliced' },
      { name: 'Cheese', amount: '½ cup, shredded (Cheddar or Mozzarella)' },
      { name: 'Salt', amount: 'Pinch' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Preheat oven to 350°F (175°C) or use a toaster oven.',
      },
      {
        step: 2,
        text: 'Place the Bread slices on a baking sheet. Layer with sliced Tomato. Sprinkle the shredded Cheese and a pinch of Salt on top.',
      },
      {
        step: 3,
        text: 'Bake for 5–8 minutes, or until the cheese is melted and bubbly.',
      },
    ],
  },
  9: {
    id: 9,
    focus: 'Zucchini',
    ingredients: [
      { name: 'Zucchini', amount: '2 medium, spiralized into noodles' },
      { name: 'Garlic', amount: '2 cloves, minced' },
      { name: 'Olive Oil', amount: '1 tbsp' },
      { name: 'Salt', amount: '¼ tsp' },
    ],
    instructions: [
      {
        step: 1,
        text: 'If you don\'t have a spiralizer, slice the Zucchini thinly into long strips. Pat them dry with a paper towel.',
      },
      {
        step: 2,
        text: 'Heat oil in a skillet over medium heat. Add minced Garlic and cook for 30 seconds.',
      },
      {
        step: 3,
        text: 'Add Zucchini Noodles to the skillet. Sauté quickly for 2–3 minutes. Season with Salt. Do not overcook; the noodles should remain slightly crisp.',
      },
    ],
  },
  10: {
    id: 10,
    focus: 'Cabbage',
    ingredients: [
      { name: 'Cabbage', amount: '¼ head, very thinly sliced' },
      { name: 'Carrot', amount: '1 small, shredded' },
      { name: 'Soy Sauce', amount: '1 tbsp' },
      { name: 'Rice Vinegar', amount: '1 tbsp' },
      { name: 'Sugar', amount: '½ tsp' },
    ],
    instructions: [
      {
        step: 1,
        text: 'In a large bowl, combine the sliced Cabbage and shredded Carrot.',
      },
      {
        step: 2,
        text: 'In a small bowl, whisk together Soy Sauce, Rice Vinegar, and Sugar until the sugar is dissolved.',
      },
      {
        step: 3,
        text: 'Pour the dressing over the Cabbage and Carrot mixture. Toss well to coat. Let it sit for 5 minutes before serving to soften the Cabbage slightly.',
      },
    ],
  },
  11: {
    id: 11,
    focus: 'Spinach',
    ingredients: [
      { name: 'Spinach', amount: '4 cups (fresh)' },
      { name: 'Garlic', amount: '2 cloves, sliced' },
      { name: 'Olive Oil', amount: '1 tbsp' },
      { name: 'Salt', amount: 'Pinch' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Heat oil in a large skillet over medium-high heat. Add sliced Garlic and cook for 30 seconds until fragrant (be careful not to burn it).',
      },
      {
        step: 2,
        text: 'Add the Spinach to the skillet. Cook, stirring occasionally, until the Spinach wilts completely, about 2–3 minutes.',
      },
      {
        step: 3,
        text: 'Season with a pinch of Salt and serve immediately.',
      },
    ],
  },
  12: {
    id: 12,
    focus: 'Rice',
    ingredients: [
      { name: 'Rice', amount: '2 cups, cold cooked' },
      { name: 'Egg', amount: '1 large' },
      { name: 'Soy Sauce', amount: '2 tbsp' },
      { name: 'Scallion', amount: '2 tbsp, sliced' },
      { name: 'Cooking Oil', amount: '1 tbsp' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Heat oil in a wok or large skillet over medium-high heat. Quickly scramble the Egg. Remove the egg and set aside.',
      },
      {
        step: 2,
        text: 'Add cold Rice to the skillet. Break up any clumps and fry for 2–3 minutes until heated through.',
      },
      {
        step: 3,
        text: 'Stir the Soy Sauce into the Rice. Add the scrambled Egg and sliced Scallion. Toss everything together for 1 minute and serve.',
      },
    ],
  },
  13: {
    id: 13,
    focus: 'Noodles',
    ingredients: [
      { name: 'Noodles (Pasta)', amount: '8 oz' },
      { name: 'Butter', amount: '3 tbsp' },
      { name: 'Garlic', amount: '3 cloves, minced' },
      { name: 'Salt', amount: '¼ tsp' },
      { name: 'Grated Cheese', amount: 'optional garnish' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Cook Noodles according to package directions in salted boiling water. Reserve ½ cup of the starchy cooking water before draining.',
      },
      {
        step: 2,
        text: 'In the now-empty pot, melt the Butter over medium-low heat. Add minced Garlic and cook for 1 minute until fragrant.',
      },
      {
        step: 3,
        text: 'Add the drained Noodles to the pot. Pour in 2–3 tablespoons of the reserved pasta water to create a light sauce. Toss well to coat and season with Salt.',
      },
    ],
  },
  14: {
    id: 14,
    focus: 'Bread',
    ingredients: [
      { name: 'Bread', amount: '4 slices' },
      { name: 'Butter', amount: '3 tbsp, softened' },
      { name: 'Garlic', amount: '2 cloves, minced' },
      { name: 'Cheese', amount: '½ cup, shredded (Mozzarella or blend)' },
      { name: 'Salt', amount: 'Pinch' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Preheat oven to 375°F (190°C).',
      },
      {
        step: 2,
        text: 'In a small bowl, combine the softened Butter, minced Garlic, and a pinch of Salt.',
      },
      {
        step: 3,
        text: 'Spread the garlic butter mixture evenly over the Bread slices. Top generously with shredded Cheese.',
      },
      {
        step: 4,
        text: 'Bake for 6–8 minutes, or until the cheese is melted and the edges of the bread are golden brown.',
      },
    ],
  },
  15: {
    id: 15,
    focus: 'Milk',
    ingredients: [
      { name: 'Milk (Dairy or Non-Dairy)', amount: '1 cup' },
      { name: 'Cocoa Powder', amount: '2 tbsp' },
      { name: 'Sugar', amount: '2 tbsp' },
      { name: 'Salt', amount: 'Pinch' },
    ],
    instructions: [
      {
        step: 1,
        text: 'In a small saucepan, whisk together the Cocoa Powder, Sugar, and a pinch of Salt.',
      },
      {
        step: 2,
        text: 'Gradually whisk in the Milk until the mixture is smooth and lump-free.',
      },
      {
        step: 3,
        text: 'Heat the saucepan over medium-low heat, stirring occasionally, until the hot chocolate is heated through and steaming (do not boil).',
      },
      {
        step: 4,
        text: 'Pour into a mug and enjoy.',
      },
    ],
  },
  16: {
    id: 16,
    focus: 'Cheese',
    ingredients: [
      { name: 'Tortillas', amount: '2' },
      { name: 'Cheese', amount: '1 cup, shredded' },
      { name: 'Butter', amount: '1 tbsp (for frying)' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Spread Butter on one side of each Tortilla.',
      },
      {
        step: 2,
        text: 'Place one Tortilla (butter-side down) in a non-stick skillet over medium heat. Sprinkle the shredded Cheese evenly over the Tortilla. Top with the second Tortilla (butter-side up).',
      },
      {
        step: 3,
        text: 'Cook for 3–4 minutes until the bottom is golden brown. Carefully flip the Quesadilla and cook for another 3–4 minutes until the other side is golden and the cheese is completely melted.',
      },
      {
        step: 4,
        text: 'Slice into wedges.',
      },
    ],
  },
  17: {
    id: 17,
    focus: 'Salmon',
    ingredients: [
      { name: 'Salmon Fillets', amount: '2' },
      { name: 'Green Beans (or Broccoli)', amount: '1 bunch' },
      { name: 'Garlic', amount: '3 cloves, minced' },
      { name: 'Olive Oil', amount: '1 tbsp' },
      { name: 'Salt', amount: '1 tsp' },
      { name: 'Black Pepper', amount: '½ tsp' },
      { name: 'Lemon', amount: '1, sliced' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Preheat oven to 400°F (200°C).',
      },
      {
        step: 2,
        text: 'Toss Green Beans with oil, garlic, salt, and pepper. Spread on a baking sheet.',
      },
      {
        step: 3,
        text: 'Place salmon on top. Squeeze lemon juice over salmon and place slices on top.',
      },
      {
        step: 4,
        text: 'Bake for 12–15 minutes, until salmon flakes easily.',
      },
    ],
  },
  18: {
    id: 18,
    focus: 'Ground Beef',
    ingredients: [
      { name: 'Ground Beef', amount: '1 lb' },
      { name: 'Onion', amount: '1, diced' },
      { name: 'Salt', amount: '1 tsp' },
      { name: 'Water', amount: '½ cup' },
      { name: 'Tortillas', amount: '6' },
      { name: 'Shredded Lettuce', amount: '½ cup' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Brown Ground Beef and diced Onion in a skillet. Drain excess grease.',
      },
      {
        step: 2,
        text: 'Season with Salt (and assumed Chili Powder). Add Water and simmer for 5 minutes.',
      },
      {
        step: 3,
        text: 'Warm Tortillas.',
      },
      {
        step: 4,
        text: 'Serve beef mixture in tortillas, topped with Lettuce.',
      },
    ],
  },
  19: {
    id: 19,
    focus: 'Turkey',
    ingredients: [
      { name: 'Quinoa', amount: '1 cup' },
      { name: 'Water', amount: '2 cups' },
      { name: 'Turkey', amount: '1 cup, cooked, shredded' },
      { name: 'Cucumber', amount: '1, diced' },
      { name: 'Tomato', amount: '1, diced' },
      { name: 'Olive Oil', amount: '2 tbsp' },
      { name: 'Lemon Juice', amount: '1 tbsp' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Rinse Quinoa. Boil Quinoa in 2 cups of Water until absorbed (15 min). Fluff and cool.',
      },
      {
        step: 2,
        text: 'In a bowl, combine cooled Quinoa, Turkey, Cucumber, and Tomato.',
      },
      {
        step: 3,
        text: 'Whisk oil and lemon juice for dressing. Pour over salad and toss.',
      },
    ],
  },
  20: {
    id: 20,
    focus: 'Pork',
    ingredients: [
      { name: 'Pork', amount: '1 lb, sliced' },
      { name: 'Mushroom', amount: '1 cup, sliced' },
      { name: 'Garlic', amount: '2 cloves, minced' },
      { name: 'Soy Sauce', amount: '2 tbsp' },
      { name: 'Cooking Oil', amount: '1 tbsp' },
      { name: 'Rice', amount: '1 cup, cooked' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Heat oil in a wok. Stir-fry Pork until browned. Remove.',
      },
      {
        step: 2,
        text: 'Add Mushroom and Garlic to the wok. Stir-fry for 3 minutes.',
      },
      {
        step: 3,
        text: 'Return Pork. Add Soy Sauce. Stir-fry for 1 minute to coat.',
      },
      {
        step: 4,
        text: 'Serve immediately over cooked Rice.',
      },
    ],
  },
  21: {
    id: 21,
    focus: 'Chicken',
    ingredients: [
      { name: 'Chicken', amount: '1 lb, cubed' },
      { name: 'Potatoes', amount: '2, parboiled, cubed' },
      { name: 'Bell Pepper', amount: '1, cubed' },
      { name: 'Oil', amount: '1 tbsp' },
      { name: 'Salt', amount: '1 tsp' },
      { name: 'Skewers', amount: 'tool' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Preheat grill/oven to medium-high.',
      },
      {
        step: 2,
        text: 'Thread Chicken, Potato, and Bell Pepper onto skewers.',
      },
      {
        step: 3,
        text: 'Brush with oil and season with Salt.',
      },
      {
        step: 4,
        text: 'Grill/Roast for 15–20 minutes, turning occasionally, until chicken is cooked through.',
      },
    ],
  },
  22: {
    id: 22,
    focus: 'Beef',
    ingredients: [
      { name: 'Beef', amount: '1 lb, cubed' },
      { name: 'Water/Broth', amount: '2 cups' },
      { name: 'Carrots', amount: '2, chopped' },
      { name: 'Potatoes', amount: '2, cubed' },
      { name: 'Onion', amount: '1, chopped' },
      { name: 'Salt', amount: '1 tsp' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Brown Beef cubes in a large pot. Drain.',
      },
      {
        step: 2,
        text: 'Add Carrots, Potatoes, Onion, Salt, and Water/Broth.',
      },
      {
        step: 3,
        text: 'Bring to a boil, then reduce heat, cover, and simmer for 1.5–2 hours until beef is tender.',
      },
    ],
  },
  23: {
    id: 23,
    focus: 'Chicken Breast',
    ingredients: [
      { name: 'Chicken Breast', amount: '1' },
      { name: 'Zucchini', amount: '2, spiralized' },
      { name: 'Garlic', amount: '2 cloves, minced' },
      { name: 'Olive Oil', amount: '1 tbsp' },
      { name: 'Salt', amount: '½ tsp' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Slice Chicken Breast thinly. Season with Salt.',
      },
      {
        step: 2,
        text: 'Heat oil in a skillet. Cook Chicken until done (5-7 min). Remove.',
      },
      {
        step: 3,
        text: 'Add Zucchini Noodles and Garlic to the skillet. Sauté for 2 minutes.',
      },
      {
        step: 4,
        text: 'Return Chicken to the pan, toss, and serve.',
      },
    ],
  },
  24: {
    id: 24,
    focus: 'Sausage',
    ingredients: [
      { name: 'Sausage links', amount: '2, cooked, sliced' },
      { name: 'Eggs', amount: '2, scrambled' },
      { name: 'Cheese', amount: '¼ cup, shredded' },
      { name: 'Tortillas', amount: '2' },
      { name: 'Butter', amount: '1 tbsp' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Melt Butter in a skillet. Heat Tortillas until soft.',
      },
      {
        step: 2,
        text: 'Place Cheese, scrambled Egg, and Sausage slices inside each Tortilla.',
      },
      {
        step: 3,
        text: 'Fold into a burrito and serve.',
      },
    ],
  },
  25: {
    id: 25,
    focus: 'Bacon',
    ingredients: [
      { name: 'Bacon', amount: '4 slices, cooked, crumbled' },
      { name: 'Eggs', amount: '4' },
      { name: 'Milk', amount: '¼ cup' },
      { name: 'Spinach', amount: '1 cup' },
      { name: 'Cheese', amount: '¼ cup, crumbled' },
      { name: 'Salt', amount: '1 tsp' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Preheat oven to 350°F (175°C).',
      },
      {
        step: 2,
        text: 'Whisk Eggs, Milk, and Salt. Stir in Bacon, Spinach, and Cheese.',
      },
      {
        step: 3,
        text: 'Pour mixture into a buttered pie dish or oven-safe skillet.',
      },
      {
        step: 4,
        text: 'Bake for 20–25 minutes, until set and golden.',
      },
    ],
  },
  26: {
    id: 26,
    focus: 'Shrimp',
    ingredients: [
      { name: 'Shrimp', amount: '1 cup' },
      { name: 'White Radish', amount: '1 cup, sliced' },
      { name: 'Water/Broth', amount: '3 cups' },
      { name: 'Ginger', amount: '1 inch, sliced' },
      { name: 'Salt', amount: '½ tsp' },
      { name: 'Scallion', amount: 'garnish' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Bring Water/Broth, White Radish, and Ginger to a boil. Reduce heat and simmer for 15 minutes.',
      },
      {
        step: 2,
        text: 'Add Shrimp and Salt. Cook for 3–5 minutes until shrimp is pink and opaque.',
      },
      {
        step: 3,
        text: 'Garnish with Scallion before serving.',
      },
    ],
  },
  27: {
    id: 27,
    focus: 'Tofu',
    ingredients: [
      { name: 'Tofu', amount: '1 block, firm, crumbled' },
      { name: 'Onion', amount: '½, diced' },
      { name: 'Spinach', amount: '½ cup' },
      { name: 'Turmeric', amount: '1 tsp' },
      { name: 'Oil', amount: '1 tbsp' },
      { name: 'Salt', amount: '½ tsp' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Heat oil in a skillet. Sauté Onion for 3 minutes.',
      },
      {
        step: 2,
        text: 'Add crumbled Tofu, Turmeric, and Salt. Cook for 5–7 minutes, breaking up the Tofu.',
      },
      {
        step: 3,
        text: 'Stir in Spinach until wilted. Serve on Toast or Tortilla.',
      },
    ],
  },
  28: {
    id: 28,
    focus: 'Quinoa',
    ingredients: [
      { name: 'Quinoa', amount: '1 cup, cooked' },
      { name: 'Broccoli', amount: '1 cup, florets' },
      { name: 'Carrot', amount: '1 cup, cubed' },
      { name: 'Bell Pepper', amount: '½ cup, cubed' },
      { name: 'Oil', amount: '1 tbsp' },
      { name: 'Salt', amount: '1 tsp' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Preheat oven to 400°F (200°C).',
      },
      {
        step: 2,
        text: 'Toss Broccoli, Carrot, and Bell Pepper with oil and Salt. Roast for 15–20 minutes.',
      },
      {
        step: 3,
        text: 'Serve roasted vegetables over warm, cooked Quinoa.',
      },
    ],
  },
  29: {
    id: 29,
    focus: 'Mushroom',
    ingredients: [
      { name: 'Tortillas', amount: '4' },
      { name: 'Mushroom', amount: '1 cup, sliced' },
      { name: 'Bell Pepper', amount: '½ cup, sliced' },
      { name: 'Cheese', amount: '½ cup, shredded' },
      { name: 'Oil', amount: '1 tbsp' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Heat Tortillas in the oven or toaster oven until crisp (Tostadas).',
      },
      {
        step: 2,
        text: 'Sauté Mushroom and Bell Pepper in oil until tender.',
      },
      {
        step: 3,
        text: 'Layer the Tostada with Cheese, then the sautéed vegetables.',
      },
      {
        step: 4,
        text: 'Optionally return to the oven for 2 minutes to melt the cheese.',
      },
    ],
  },
  30: {
    id: 30,
    focus: 'Oats',
    ingredients: [
      { name: 'Oats', amount: '½ cup' },
      { name: 'Milk (or Water)', amount: '1 cup' },
      { name: 'Honey (or Sugar)', amount: '1 tbsp' },
      { name: 'Salt', amount: '½ tsp' },
      { name: 'Berries', amount: 'as garnish' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Combine Oats, Milk (or Water), and Salt in a saucepan.',
      },
      {
        step: 2,
        text: 'Bring to a simmer over medium heat, stirring occasionally. Cook for 5 minutes.',
      },
      {
        step: 3,
        text: 'Stir in Honey/Sugar. Serve immediately, topped with berries.',
      },
    ],
  },
  31: {
    id: 31,
    focus: 'Noodles',
    ingredients: [
      { name: 'Noodles', amount: '6 oz, cooked' },
      { name: 'Cabbage', amount: '1 cup, shredded' },
      { name: 'Carrot', amount: '½ cup, shredded' },
      { name: 'Soy Sauce', amount: '2 tbsp' },
      { name: 'Peanut Butter', amount: '2 tbsp' },
      { name: 'Hot Sauce', amount: '1 tbsp' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Whisk Soy Sauce, Peanut Butter, and Hot Sauce until smooth (add water if too thick).',
      },
      {
        step: 2,
        text: 'Sauté Cabbage and Carrot until tender-crisp (3 min).',
      },
      {
        step: 3,
        text: 'Add cooked Noodles and Peanut Sauce. Toss quickly to coat everything.',
      },
    ],
  },
  32: {
    id: 32,
    focus: 'Eggplant',
    ingredients: [
      { name: 'Eggplant', amount: '1 large, cubed' },
      { name: 'Pork', amount: '8 oz, sliced' },
      { name: 'Garlic', amount: '3 cloves, minced' },
      { name: 'Soy Sauce', amount: '2 tbsp' },
      { name: 'Cooking Oil', amount: '1 tbsp' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Heat oil, stir-fry Pork until browned. Remove.',
      },
      {
        step: 2,
        text: 'Add Eggplant and Garlic, stir-fry until soft (5 min).',
      },
      {
        step: 3,
        text: 'Return Pork, add Soy Sauce. Stir-fry for 1 min to coat.',
      },
    ],
  },
  33: {
    id: 33,
    focus: 'Chicken',
    ingredients: [
      { name: 'Rice', amount: '2 cups, cold cooked' },
      { name: 'Chicken', amount: '1 cup, cooked, cubed' },
      { name: 'Celery', amount: '1 cup, diced' },
      { name: 'Egg', amount: '1 large' },
      { name: 'Soy Sauce', amount: '2 tbsp' },
      { name: 'Oil', amount: '1 tbsp' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Scramble Egg, remove.',
      },
      {
        step: 2,
        text: 'Sauté Chicken and Celery for 3 min.',
      },
      {
        step: 3,
        text: 'Add Rice and Soy Sauce, fry until heated.',
      },
      {
        step: 4,
        text: 'Return Egg, mix well.',
      },
    ],
  },
  34: {
    id: 34,
    focus: 'Tomato',
    ingredients: [
      { name: 'Tomato', amount: '1 large, diced' },
      { name: 'Onion', amount: '½, diced' },
      { name: 'Milk', amount: '1 cup' },
      { name: 'Cheese (Parmesan/shredded)', amount: '¼ cup' },
      { name: 'Butter', amount: '1 tbsp' },
      { name: 'Salt', amount: '1 tsp' },
      { name: 'Pasta', amount: 'Serve over (assumed)' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Sauté Onion in Butter until soft. Add Tomato and Salt, simmer for 10 min.',
      },
      {
        step: 2,
        text: 'Stir in Milk. Heat through (do not boil).',
      },
      {
        step: 3,
        text: 'Remove from heat, stir in Cheese until melted. Serve over cooked Pasta.',
      },
    ],
  },
  35: {
    id: 35,
    focus: 'Broccoli',
    ingredients: [
      { name: 'Broccoli', amount: '1 cup, chopped' },
      { name: 'Eggs', amount: '4 large' },
      { name: 'Milk', amount: '¼ cup' },
      { name: 'Cheese', amount: '½ cup, shredded' },
      { name: 'Salt', amount: '½ tsp' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Preheat oven to 350°F (175°C).',
      },
      {
        step: 2,
        text: 'Steam/sauté Broccoli until tender-crisp.',
      },
      {
        step: 3,
        text: 'Whisk Eggs, Milk, and Salt. Stir in Broccoli and Cheese.',
      },
      {
        step: 4,
        text: 'Pour into a buttered pie dish. Bake for 20-25 min until set.',
      },
    ],
  },
  36: {
    id: 36,
    focus: 'White Radish',
    ingredients: [
      { name: 'Water/Broth', amount: '4 cups' },
      { name: 'White Radish', amount: '1 cup, sliced' },
      { name: 'Pork', amount: '4 oz, sliced' },
      { name: 'Soy Sauce', amount: '2 tbsp' },
      { name: 'Vinegar', amount: '1 tbsp' },
      { name: 'Ginger', amount: '1 inch, sliced' },
      { name: 'Salt', amount: '½ tsp' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Boil Water/Broth, Radish, Ginger, and Salt. Simmer for 10 min.',
      },
      {
        step: 2,
        text: 'Add Pork and Soy Sauce, cook until Pork is done (5 min).',
      },
      {
        step: 3,
        text: 'Stir in Vinegar and serve.',
      },
    ],
  },
  37: {
    id: 37,
    focus: 'Tofu',
    ingredients: [
      { name: 'Tofu', amount: '1 block, firm, crumbled' },
      { name: 'Onion', amount: '½, diced' },
      { name: 'Garlic', amount: '2 cloves, minced' },
      { name: 'Spinach', amount: '1 cup' },
      { name: 'Oil', amount: '1 tbsp' },
      { name: 'Salt', amount: '½ tsp' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Sauté Onion and Garlic in oil.',
      },
      {
        step: 2,
        text: 'Add crumbled Tofu and Salt. Cook for 5 min, breaking up Tofu.',
      },
      {
        step: 3,
        text: 'Stir in Spinach until wilted. Serve.',
      },
    ],
  },
  38: {
    id: 38,
    focus: 'Zucchini',
    ingredients: [
      { name: 'Zucchini', amount: '1 cup, shredded' },
      { name: 'Corn', amount: '½ cup' },
      { name: 'Egg', amount: '1 large' },
      { name: 'Flour', amount: '¼ cup' },
      { name: 'Salt', amount: '½ tsp' },
      { name: 'Oil', amount: 'for frying' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Squeeze excess moisture from Zucchini.',
      },
      {
        step: 2,
        text: 'Mix Zucchini, Corn, Egg, Flour, and Salt.',
      },
      {
        step: 3,
        text: 'Drop spoonfuls of batter into hot oil. Fry for 3 min per side until golden.',
      },
    ],
  },
  39: {
    id: 39,
    focus: 'Cabbage',
    ingredients: [
      { name: 'Cabbage', amount: '2 cups, shredded' },
      { name: 'Carrot', amount: '1 large, shredded' },
      { name: 'Mayonnaise', amount: '¼ cup' },
      { name: 'Vinegar', amount: '1 tbsp' },
      { name: 'Salt', amount: '½ tsp' },
    ],
    instructions: [
      {
        step: 1,
        text: 'In a large bowl, combine Cabbage and Carrot.',
      },
      {
        step: 2,
        text: 'Whisk Mayonnaise, Vinegar, and Salt for dressing.',
      },
      {
        step: 3,
        text: 'Pour dressing over the vegetables and toss to coat evenly. Chill before serving.',
      },
    ],
  },
  40: {
    id: 40,
    focus: 'Beef',
    ingredients: [
      { name: 'Water/Broth', amount: '4 cups' },
      { name: 'Beef', amount: '1 cup, cubed' },
      { name: 'White Radish', amount: '1 cup, sliced' },
      { name: 'Soy Sauce', amount: '3 tbsp' },
      { name: 'Garlic', amount: '2 cloves, minced' },
      { name: 'Sesame Oil', amount: '1 tsp' },
    ],
    instructions: [
      {
        step: 1,
        text: 'In a pot, sauté Beef, Garlic, and 1 tbsp Soy Sauce until meat is browned.',
      },
      {
        step: 2,
        text: 'Add Water/Broth, Radish, and remaining Soy Sauce.',
      },
      {
        step: 3,
        text: 'Bring to a boil, then simmer for 40 min until Radish is translucent. Stir in Sesame Oil.',
      },
    ],
  },
  41: {
    id: 41,
    focus: 'Egg',
    ingredients: [
      { name: 'Eggs', amount: '2 large' },
      { name: 'Water', amount: 'as needed' },
      { name: 'Salt', amount: '½ tsp' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Place Eggs in a pot, cover with cold water (1 inch above eggs). Add Salt.',
      },
      {
        step: 2,
        text: 'Bring to a rolling boil. Turn off heat, cover, and let sit for 10–12 min.',
      },
      {
        step: 3,
        text: 'Drain, cool in ice water, and peel.',
      },
    ],
  },
  42: {
    id: 42,
    focus: 'Cheese',
    ingredients: [
      { name: 'Bread', amount: '2 slices' },
      { name: 'Cheese', amount: '1 slice' },
      { name: 'Butter', amount: '1 tbsp' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Spread Butter on both sides of the Bread.',
      },
      {
        step: 2,
        text: 'Place one slice of Bread (butter-side down) in a skillet over medium heat.',
      },
      {
        step: 3,
        text: 'Add Cheese, top with the other slice of Bread.',
      },
      {
        step: 4,
        text: 'Grill for 3 min per side until golden and cheese is melted.',
      },
    ],
  },
  43: {
    id: 43,
    focus: 'Potato',
    ingredients: [
      { name: 'Potato', amount: '1 large' },
      { name: 'Butter', amount: '1 tbsp' },
      { name: 'Salt', amount: 'Pinch' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Pierce Potato all over with a fork (approx. 6–8 times).',
      },
      {
        step: 2,
        text: 'Place Potato on a paper towel in the microwave. Cook on high for 5–7 min (depending on size), turning halfway.',
      },
      {
        step: 3,
        text: 'Slice open, add Butter and Salt.',
      },
    ],
  },
  44: {
    id: 44,
    focus: 'Cabbage',
    ingredients: [
      { name: 'Chinese Cabbage', amount: '2 cups, cut' },
      { name: 'Soy Sauce', amount: '1 tbsp' },
      { name: 'Oil', amount: '1 tbsp' },
      { name: 'Garlic', amount: '1 clove, sliced' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Heat oil in a skillet. Sauté Garlic until fragrant.',
      },
      {
        step: 2,
        text: 'Add Cabbage. Stir-fry for 3–5 min until wilted but still crisp.',
      },
      {
        step: 3,
        text: 'Drizzle with Soy Sauce, toss, and serve.',
      },
    ],
  },
  45: {
    id: 45,
    focus: 'Celery',
    ingredients: [
      { name: 'Celery sticks', amount: '1 cup' },
      { name: 'Cheese (cream cheese or shredded)', amount: '¼ cup' },
      { name: 'Milk (or Butter)', amount: '2 tbsp' },
    ],
    instructions: [
      {
        step: 1,
        text: 'In a small bowl, mix Cheese and Milk until smooth and dippable (heat slightly if using hard cheese/butter).',
      },
      {
        step: 2,
        text: 'Serve the dip alongside the Celery sticks.',
      },
    ],
  },
  46: {
    id: 46,
    focus: 'Corn',
    ingredients: [
      { name: 'Water/Broth', amount: '3 cups' },
      { name: 'Corn', amount: '½ cup' },
      { name: 'Egg', amount: '1 large, beaten' },
      { name: 'Salt', amount: '½ tsp' },
      { name: 'Scallion', amount: '1, sliced' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Bring Water/Broth and Corn to a boil. Season with Salt.',
      },
      {
        step: 2,
        text: 'Reduce heat to a simmer. Slowly pour the beaten Egg into the swirling water in a thin stream.',
      },
      {
        step: 3,
        text: 'Garnish with Scallion and serve immediately.',
      },
    ],
  },
  47: {
    id: 47,
    focus: 'Tomato',
    ingredients: [
      { name: 'Tomato', amount: '1 large, diced' },
      { name: 'Cucumber', amount: '1 large, diced' },
      { name: 'Onion', amount: '¼, thinly sliced' },
      { name: 'Olive Oil', amount: '1 tbsp' },
      { name: 'Salt', amount: '½ tsp' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Combine Tomato, Cucumber, and Onion in a bowl.',
      },
      {
        step: 2,
        text: 'Drizzle with Olive Oil and season with Salt. Toss gently.',
      },
    ],
  },
  48: {
    id: 48,
    focus: 'Ginger',
    ingredients: [
      { name: 'Ginger', amount: '1 inch, minced' },
      { name: 'Scallions', amount: '2, thinly sliced' },
      { name: 'Cooking Oil', amount: '2 tbsp' },
      { name: 'Salt', amount: '½ tsp' },
      { name: 'Rice', amount: 'Serve over (assumed)' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Combine minced Ginger and sliced Scallions in a small heatproof bowl. Add Salt.',
      },
      {
        step: 2,
        text: 'Heat oil in a saucepan until shimmering hot.',
      },
      {
        step: 3,
        text: 'Carefully pour the hot oil over the Ginger and Scallion mixture.',
      },
      {
        step: 4,
        text: 'Serve a spoonful of the topping over hot Rice.',
      },
    ],
  },
  49: {
    id: 49,
    focus: 'Bread',
    ingredients: [
      { name: 'Bread', amount: '2 slices' },
      { name: 'Butter', amount: '2 tbsp' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Toast the Bread to desired crispness.',
      },
      {
        step: 2,
        text: 'Spread Butter evenly over the hot toast.',
      },
    ],
  },
  50: {
    id: 50,
    focus: 'Milk',
    ingredients: [
      { name: 'Milk', amount: '1 cup' },
      { name: 'Instant Noodles', amount: '1 packet, cooked per package directions' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Prepare Instant Noodles according to package directions.',
      },
      {
        step: 2,
        text: 'Pour Milk into a glass. (This is a simple combination entry, not a cooking recipe).',
      },
    ],
  },
  51: {
    id: 51,
    focus: 'Salmon',
    ingredients: [
      { name: 'Salmon Fillets', amount: '2' },
      { name: 'Green Beans', amount: '1 cup' },
      { name: 'Garlic', amount: '3 cloves, minced' },
      { name: 'Olive Oil', amount: '1 tbsp' },
      { name: 'Salt', amount: '1 tsp' },
      { name: 'Lemon', amount: '1, sliced' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Preheat oven to 400°F (200°C).',
      },
      {
        step: 2,
        text: 'Toss Green Beans with oil, garlic, and salt. Spread on a baking sheet.',
      },
      {
        step: 3,
        text: 'Place salmon on top. Squeeze lemon juice over salmon and place slices on top.',
      },
      {
        step: 4,
        text: 'Bake for 12–15 minutes.',
      },
    ],
  },
  52: {
    id: 52,
    focus: 'Ground Beef',
    ingredients: [
      { name: 'Ground Beef', amount: '1 lb' },
      { name: 'Onion', amount: '1, diced' },
      { name: 'Salt', amount: '1 tsp (plus assumed taco seasoning)' },
      { name: 'Tortillas', amount: '6' },
      { name: 'Shredded Lettuce', amount: '½ cup' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Brown Ground Beef and diced Onion in a skillet. Drain grease.',
      },
      {
        step: 2,
        text: 'Season with Salt and (assumed) seasoning. Add Water and simmer for 5 minutes.',
      },
      {
        step: 3,
        text: 'Warm Tortillas.',
      },
      {
        step: 4,
        text: 'Serve beef mixture in tortillas, topped with Lettuce.',
      },
    ],
  },
  53: {
    id: 53,
    focus: 'Turkey',
    ingredients: [
      { name: 'Quinoa', amount: '1 cup' },
      { name: 'Water', amount: '2 cups' },
      { name: 'Turkey', amount: '1 cup, cooked, shredded' },
      { name: 'Cucumber', amount: '1, diced' },
      { name: 'Tomato', amount: '1, diced' },
      { name: 'Olive Oil', amount: '2 tbsp' },
      { name: 'Lemon Juice', amount: '1 tbsp (Seasoning)' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Rinse Quinoa. Boil Quinoa in 2 cups of Water until absorbed (15 min). Cool.',
      },
      {
        step: 2,
        text: 'Combine Quinoa, Turkey, Cucumber, and Tomato.',
      },
      {
        step: 3,
        text: 'Whisk oil and lemon juice for dressing. Pour over salad and toss.',
      },
    ],
  },
  54: {
    id: 54,
    focus: 'Pork',
    ingredients: [
      { name: 'Pork', amount: '1 lb, sliced' },
      { name: 'Mushroom', amount: '1 cup, sliced' },
      { name: 'Garlic', amount: '2 cloves, minced' },
      { name: 'Soy Sauce', amount: '2 tbsp' },
      { name: 'Cooking Oil', amount: '1 tbsp' },
      { name: 'Rice', amount: '1 cup, cooked' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Heat oil. Stir-fry Pork until browned. Remove.',
      },
      {
        step: 2,
        text: 'Add Mushroom and Garlic to the wok. Stir-fry for 3 minutes.',
      },
      {
        step: 3,
        text: 'Return Pork. Add Soy Sauce. Stir-fry for 1 minute to coat.',
      },
      {
        step: 4,
        text: 'Serve over cooked Rice.',
      },
    ],
  },
  55: {
    id: 55,
    focus: 'Chicken',
    ingredients: [
      { name: 'Chicken', amount: '1 lb, cubed' },
      { name: 'Potatoes', amount: '2, parboiled, cubed' },
      { name: 'Bell Pepper', amount: '1, cubed' },
      { name: 'Oil', amount: '1 tbsp' },
      { name: 'Salt', amount: '1 tsp' },
      { name: 'Skewers', amount: 'Tool' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Preheat grill/oven.',
      },
      {
        step: 2,
        text: 'Thread Chicken, Potato, and Bell Pepper onto skewers.',
      },
      {
        step: 3,
        text: 'Brush with oil and season with Salt.',
      },
      {
        step: 4,
        text: 'Grill/Roast for 15–20 minutes, turning occasionally.',
      },
    ],
  },
  56: {
    id: 56,
    focus: 'Beef',
    ingredients: [
      { name: 'Beef', amount: '1 lb, cubed' },
      { name: 'Water/Broth', amount: '2 cups (Seasoning)' },
      { name: 'Carrots', amount: '2, chopped' },
      { name: 'Potatoes', amount: '2, cubed' },
      { name: 'Onion', amount: '1, chopped' },
      { name: 'Salt', amount: '1 tsp' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Brown Beef cubes in a large pot. Drain.',
      },
      {
        step: 2,
        text: 'Add Carrots, Potatoes, Onion, Salt, and Water/Broth.',
      },
      {
        step: 3,
        text: 'Bring to a boil, then cover and simmer for 1.5–2 hours until beef is tender.',
      },
    ],
  },
  57: {
    id: 57,
    focus: 'Chicken Breast',
    ingredients: [
      { name: 'Chicken Breast', amount: '1' },
      { name: 'Zucchini', amount: '2, spiralized' },
      { name: 'Garlic', amount: '2 cloves, minced' },
      { name: 'Olive Oil', amount: '1 tbsp' },
      { name: 'Salt', amount: '½ tsp' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Slice Chicken Breast thinly. Season with Salt.',
      },
      {
        step: 2,
        text: 'Heat oil in a skillet. Cook Chicken until done (5-7 min). Remove.',
      },
      {
        step: 3,
        text: 'Add Zucchini Noodles and Garlic to the skillet. Sauté for 2 minutes.',
      },
      {
        step: 4,
        text: 'Return Chicken to the pan, toss, and serve.',
      },
    ],
  },
  58: {
    id: 58,
    focus: 'Sausage',
    ingredients: [
      { name: 'Sausage links', amount: '2, cooked, sliced' },
      { name: 'Eggs', amount: '2, scrambled' },
      { name: 'Cheese', amount: '¼ cup, shredded' },
      { name: 'Tortillas', amount: '2' },
      { name: 'Butter', amount: '1 tbsp' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Melt Butter. Heat Tortillas until soft.',
      },
      {
        step: 2,
        text: 'Place Cheese, scrambled Egg, and Sausage slices inside each Tortilla.',
      },
      {
        step: 3,
        text: 'Fold into a burrito and serve.',
      },
    ],
  },
  59: {
    id: 59,
    focus: 'Bacon',
    ingredients: [
      { name: 'Bacon', amount: '4 slices, cooked, crumbled' },
      { name: 'Eggs', amount: '4' },
      { name: 'Milk', amount: '¼ cup' },
      { name: 'Spinach', amount: '1 cup' },
      { name: 'Cheese', amount: '¼ cup, crumbled' },
      { name: 'Salt', amount: '1 tsp' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Preheat oven to 350°F (175°C).',
      },
      {
        step: 2,
        text: 'Whisk Eggs, Milk, and Salt. Stir in Bacon, Spinach, and Cheese.',
      },
      {
        step: 3,
        text: 'Pour mixture into a baking dish.',
      },
      {
        step: 4,
        text: 'Bake for 20–25 minutes, until set.',
      },
    ],
  },
  60: {
    id: 60,
    focus: 'Shrimp',
    ingredients: [
      { name: 'Shrimp', amount: '1 cup' },
      { name: 'White Radish', amount: '1 cup, sliced' },
      { name: 'Water/Broth', amount: '3 cups (Seasoning)' },
      { name: 'Ginger', amount: '1 inch, sliced' },
      { name: 'Salt', amount: '½ tsp' },
      { name: 'Scallion', amount: 'Garnish' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Boil Water/Broth, Radish, and Ginger. Simmer for 15 minutes.',
      },
      {
        step: 2,
        text: 'Add Shrimp and Salt. Cook for 3–5 minutes.',
      },
      {
        step: 3,
        text: 'Garnish with Scallion before serving.',
      },
    ],
  },
  61: {
    id: 61,
    focus: 'Tofu',
    ingredients: [
      { name: 'Tofu', amount: '1 block, firm, crumbled' },
      { name: 'Onion', amount: '½, diced' },
      { name: 'Spinach', amount: '½ cup' },
      { name: 'Turmeric', amount: '1 tsp (Seasoning)' },
      { name: 'Oil', amount: '1 tbsp' },
      { name: 'Salt', amount: '½ tsp' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Heat oil. Sauté Onion for 3 minutes.',
      },
      {
        step: 2,
        text: 'Add crumbled Tofu, Turmeric, and Salt. Cook for 5–7 minutes.',
      },
      {
        step: 3,
        text: 'Stir in Spinach until wilted. Serve.',
      },
    ],
  },
  62: {
    id: 62,
    focus: 'Quinoa',
    ingredients: [
      { name: 'Quinoa', amount: '1 cup, cooked' },
      { name: 'Broccoli', amount: '1 cup, florets' },
      { name: 'Carrot', amount: '1 cup, cubed' },
      { name: 'Bell Pepper', amount: '½ cup, cubed' },
      { name: 'Oil', amount: '1 tbsp' },
      { name: 'Salt', amount: '1 tsp' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Preheat oven to 400°F (200°C).',
      },
      {
        step: 2,
        text: 'Toss Broccoli, Carrot, and Bell Pepper with oil and Salt. Roast for 15–20 minutes.',
      },
      {
        step: 3,
        text: 'Serve roasted vegetables over warm, cooked Quinoa.',
      },
    ],
  },
  63: {
    id: 63,
    focus: 'Mushroom',
    ingredients: [
      { name: 'Tortillas', amount: '4' },
      { name: 'Mushroom', amount: '1 cup, sliced' },
      { name: 'Bell Pepper', amount: '½ cup, sliced' },
      { name: 'Cheese', amount: '½ cup, shredded' },
      { name: 'Oil', amount: '1 tbsp' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Heat Tortillas until crisp (Tostadas).',
      },
      {
        step: 2,
        text: 'Sauté Mushroom and Bell Pepper in oil until tender.',
      },
      {
        step: 3,
        text: 'Layer the Tostada with Cheese, then the sautéed vegetables.',
      },
      {
        step: 4,
        text: 'Optionally melt the cheese in the oven for 2 minutes.',
      },
    ],
  },
  64: {
    id: 64,
    focus: 'Oats',
    ingredients: [
      { name: 'Oats', amount: '½ cup' },
      { name: 'Milk (or Water)', amount: '1 cup' },
      { name: 'Honey (or Sugar)', amount: '1 tbsp' },
      { name: 'Salt', amount: '½ tsp' },
      { name: 'Berries', amount: 'Assumed garnish' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Combine Oats, Milk (or Water), and Salt in a saucepan.',
      },
      {
        step: 2,
        text: 'Bring to a simmer over medium heat, stirring occasionally. Cook for 5 minutes.',
      },
      {
        step: 3,
        text: 'Stir in Honey/Sugar. Top with berries.',
      },
    ],
  },
  65: {
    id: 65,
    focus: 'Noodles',
    ingredients: [
      { name: 'Noodles', amount: '6 oz, cooked' },
      { name: 'Cabbage', amount: '1 cup, shredded' },
      { name: 'Carrot', amount: '½ cup, shredded' },
      { name: 'Soy Sauce', amount: '2 tbsp' },
      { name: 'Peanut Butter', amount: '2 tbsp (Needs to be added)' },
      { name: 'Hot Sauce', amount: '1 tbsp (Seasoning)' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Whisk Soy Sauce, Peanut Butter, and Hot Sauce for sauce.',
      },
      {
        step: 2,
        text: 'Sauté Cabbage and Carrot until tender-crisp.',
      },
      {
        step: 3,
        text: 'Add cooked Noodles and Peanut Sauce. Toss quickly to coat everything.',
      },
    ],
  },
  66: {
    id: 66,
    focus: 'Potato',
    ingredients: [
      { name: 'Potatoes', amount: '2 large' },
      { name: 'Potato Starch', amount: '2 tbsp' },
      { name: 'Olive Oil', amount: '1 tbsp' },
      { name: 'Salt', amount: '1 tsp' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Preheat oven to 425°F (220°C).',
      },
      {
        step: 2,
        text: 'Cut Potatoes into fries, rinse, and pat dry.',
      },
      {
        step: 3,
        text: 'Toss fries with Olive Oil, Salt, and Potato Starch to coat.',
      },
      {
        step: 4,
        text: 'Bake for 25–30 minutes, flipping halfway, until crispy.',
      },
    ],
  },
  67: {
    id: 67,
    focus: 'Chickpeas',
    ingredients: [
      { name: 'Chickpeas', amount: '1 can' },
      { name: 'Celery', amount: '1 stalk, diced' },
      { name: 'Onion', amount: '¼, minced' },
      { name: 'Vegan Mayonnaise', amount: '2 tbsp' },
      { name: 'Salt', amount: '½ tsp' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Drain and mash Chickpeas coarsely in a bowl.',
      },
      {
        step: 2,
        text: 'Stir in diced Celery, minced Onion, and Salt.',
      },
      {
        step: 3,
        text: 'Mix in Vegan Mayonnaise until creamy.',
      },
      {
        step: 4,
        text: 'Serve on Bread or with Lettuce wraps.',
      },
    ],
  },
  68: {
    id: 68,
    focus: 'Broccoli',
    ingredients: [
      { name: 'Broccoli', amount: '1 cup, chopped' },
      { name: 'Eggs', amount: '4 large' },
      { name: 'Milk', amount: '¼ cup' },
      { name: 'Cheese', amount: '½ cup, shredded' },
      { name: 'Salt', amount: '¼ tsp' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Preheat oven to 350°F (175°C). Grease a muffin tin.',
      },
      {
        step: 2,
        text: 'Whisk Eggs, Milk, and Salt.',
      },
      {
        step: 3,
        text: 'Fill each cup with Broccoli and Cheese.',
      },
      {
        step: 4,
        text: 'Pour egg mixture over fillings.',
      },
      {
        step: 5,
        text: 'Bake for 15–20 minutes, until set.',
      },
    ],
  },
  69: {
    id: 69,
    focus: 'Tofu',
    ingredients: [
      { name: 'Tofu', amount: '8 oz, crumbled' },
      { name: 'Garlic', amount: '2 cloves, minced' },
      { name: 'Ginger', amount: '1 inch, grated' },
      { name: 'Soy Sauce', amount: '2 tbsp' },
      { name: 'Lettuce', amount: '4 leaves, large' },
      { name: 'Oil', amount: '1 tbsp' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Heat oil in a skillet. Sauté Garlic and Ginger for 30 seconds.',
      },
      {
        step: 2,
        text: 'Add crumbled Tofu and cook for 5 min.',
      },
      {
        step: 3,
        text: 'Stir in Soy Sauce.',
      },
      {
        step: 4,
        text: 'Spoon the mixture into Lettuce leaves to serve as wraps.',
      },
    ],
  },
  70: {
    id: 70,
    focus: 'Corn',
    ingredients: [
      { name: 'Corn', amount: '2 ears, on the cob' },
      { name: 'Water', amount: '1 cup' },
      { name: 'Butter', amount: '1 tbsp' },
      { name: 'Salt', amount: 'Pinch' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Place Corn in a steamer basket over 1 inch of boiling water in a pot.',
      },
      {
        step: 2,
        text: 'Cover and Steam for 5–7 minutes.',
      },
      {
        step: 3,
        text: 'Serve hot, rubbed with Butter and seasoned with Salt.',
      },
    ],
  },
  71: {
    id: 71,
    focus: 'Beef',
    ingredients: [
      { name: 'Ground Beef', amount: '1 lb' },
      { name: 'Onion', amount: '½, diced' },
      { name: 'Garlic', amount: '2 cloves, minced' },
      { name: 'Tomato', amount: '1 large (or 1 can diced tomatoes)' },
      { name: 'Salt', amount: '½ tsp' },
      { name: 'Pasta', amount: 'Serve over (assumed)' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Brown Ground Beef in a pot. Drain grease.',
      },
      {
        step: 2,
        text: 'Add Onion and Garlic, cook until soft.',
      },
      {
        step: 3,
        text: 'Stir in diced Tomato and Salt. Simmer for 20 minutes.',
      },
      {
        step: 4,
        text: 'Serve over cooked Pasta.',
      },
    ],
  },
  72: {
    id: 72,
    focus: 'Rice Noodles',
    ingredients: [
      { name: 'Rice Noodles', amount: '4 oz' },
      { name: 'Broth', amount: '4 cups' },
      { name: 'Chicken', amount: '4 oz, cooked, shredded' },
      { name: 'Scallion', amount: '1, sliced' },
      { name: 'Soy Sauce', amount: '1 tbsp' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Cook Rice Noodles. Drain.',
      },
      {
        step: 2,
        text: 'Bring Broth to a simmer. Add Soy Sauce and shredded Chicken.',
      },
      {
        step: 3,
        text: 'Place Noodles in a bowl, pour soup over, and garnish with Scallion.',
      },
    ],
  },
  73: {
    id: 73,
    focus: 'Potato',
    ingredients: [
      { name: 'Potatoes', amount: '3 large, sliced' },
      { name: 'Bacon', amount: '4 slices, cooked, crumbled' },
      { name: 'Milk', amount: '½ cup' },
      { name: 'Cheese', amount: '1 cup, shredded' },
      { name: 'Salt', amount: '½ tsp' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Preheat oven to 375°F (190°C).',
      },
      {
        step: 2,
        text: 'Layer Potato slices in a dish. Pour Milk over. Top with Bacon and Cheese.',
      },
      {
        step: 3,
        text: 'Bake for 30–40 minutes, until tender.',
      },
    ],
  },
  74: {
    id: 74,
    focus: 'Instant Noodles',
    ingredients: [
      { name: 'Instant Noodles', amount: '1 pack' },
      { name: 'Egg', amount: '1 large' },
      { name: 'Spinach', amount: '1 cup' },
      { name: 'Carrot', amount: '½ cup, shredded' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Cook Instant Noodles. Reserve broth.',
      },
      {
        step: 2,
        text: 'Simmer broth. Add Carrot and Spinach.',
      },
      {
        step: 3,
        text: 'Crack Egg directly into the simmering broth and poach for 3 minutes.',
      },
      {
        step: 4,
        text: 'Serve noodles and vegetables with the poached egg and broth.',
      },
    ],
  },
  75: {
    id: 75,
    focus: 'Bread',
    ingredients: [
      { name: 'Bread', amount: '2 slices' },
      { name: 'Cheese', amount: '1 slice' },
      { name: 'Butter', amount: '1 tbsp' },
      { name: 'Tomato', amount: '1 large, diced (for soup base)' },
      { name: 'Water/Broth', amount: '½ cup' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Make Grilled Cheese: Spread Butter on Bread, grill with Cheese inside.',
      },
      {
        step: 2,
        text: 'Make Soup: Simmer Tomato in Broth/Water with Salt until soft. Blend or mash.',
      },
      {
        step: 3,
        text: 'Serve the Grilled Cheese with the Tomato Soup.',
      },
    ],
  },
  76: {
    id: 76,
    focus: 'Tuna',
    ingredients: [
      { name: 'Tuna', amount: '1 can' },
      { name: 'Bread', amount: '2 slices' },
      { name: 'Cheese', amount: '1 slice' },
      { name: 'Mayonnaise', amount: '2 tbsp' },
      { name: 'Onion', amount: '¼, minced' },
      { name: 'Butter', amount: '1 tbsp' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Mix Tuna, Mayonnaise, and minced Onion.',
      },
      {
        step: 2,
        text: 'Grill Bread with Butter. Top with Tuna mixture and Cheese.',
      },
      {
        step: 3,
        text: 'Grill until golden and cheese is melted.',
      },
    ],
  },
  77: {
    id: 77,
    focus: 'Chicken',
    ingredients: [
      { name: 'Rice', amount: '2 cups, cooked' },
      { name: 'Chicken', amount: '1 cup, cooked, cubed' },
      { name: 'Broccoli', amount: '1 cup, chopped' },
      { name: 'Cream Soup', amount: '1 cup' },
      { name: 'Cheese', amount: '½ cup, shredded' },
      { name: 'Salt', amount: '½ tsp' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Preheat oven to 375°F (190°C).',
      },
      {
        step: 2,
        text: 'Combine Rice, Chicken, Broccoli, Cream Soup, and Salt.',
      },
      {
        step: 3,
        text: 'Pour into a dish. Top with Cheese.',
      },
      {
        step: 4,
        text: 'Bake for 25–30 minutes.',
      },
    ],
  },
  78: {
    id: 78,
    focus: 'Pork',
    ingredients: [
      { name: 'Noodles', amount: '8 oz, cooked' },
      { name: 'Pork', amount: '8 oz, sliced' },
      { name: 'Cabbage', amount: '1 cup, shredded' },
      { name: 'Soy Sauce', amount: '2 tbsp' },
      { name: 'Oil', amount: '1 tbsp' },
      { name: 'Garlic', amount: '1 clove, minced' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Stir-fry Pork. Remove.',
      },
      {
        step: 2,
        text: 'Add Cabbage and Garlic, stir-fry until tender-crisp.',
      },
      {
        step: 3,
        text: 'Return Pork. Add cooked Noodles and Soy Sauce. Toss well for 2 minutes.',
      },
    ],
  },
  79: {
    id: 79,
    focus: 'Turkey',
    ingredients: [
      { name: 'Rice', amount: '2 cups, cold cooked' },
      { name: 'Turkey', amount: '6 oz, cooked, cubed' },
      { name: 'Egg', amount: '1 large' },
      { name: 'Carrot', amount: '½ cup, diced' },
      { name: 'Onion', amount: '½ cup, diced' },
      { name: 'Soy Sauce', amount: '2 tbsp' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Scramble Egg, remove.',
      },
      {
        step: 2,
        text: 'Sauté Carrot and Onion.',
      },
      {
        step: 3,
        text: 'Add Rice, Turkey, and Soy Sauce. Fry until heated through.',
      },
      {
        step: 4,
        text: 'Return Egg, mix well.',
      },
    ],
  },
  80: {
    id: 80,
    focus: 'Pasta',
    ingredients: [
      { name: 'Pasta', amount: '8 oz, cooked' },
      { name: 'Butter', amount: '2 tbsp' },
      { name: 'Cheese (Parmesan/shredded)', amount: '½ cup' },
      { name: 'Salt', amount: '½ tsp' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Cook Pasta. Reserve ½ cup pasta water.',
      },
      {
        step: 2,
        text: 'Add Butter and Salt to the pot, stir over low heat until melted.',
      },
      {
        step: 3,
        text: 'Add drained Pasta and reserved water. Toss.',
      },
      {
        step: 4,
        text: 'Stir in Cheese just before serving.',
      },
    ],
  },
  81: {
    id: 81,
    focus: 'Rice',
    ingredients: [
      { name: 'Rice', amount: '2 cups, cold cooked' },
      { name: 'Kimchi', amount: '1 cup' },
      { name: 'Egg', amount: '1 large' },
      { name: 'Pork', amount: '¼ cup, cooked, cubed' },
      { name: 'Soy Sauce', amount: '1 tbsp' },
      { name: 'Oil', amount: '1 tbsp' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Fry Pork in oil until browned. Add Kimchi, cook for 2 min.',
      },
      {
        step: 2,
        text: 'Add Rice and Soy Sauce. Fry until heated through.',
      },
      {
        step: 3,
        text: 'Fry Egg separately (sunny-side up).',
      },
      {
        step: 4,
        text: 'Serve rice topped with the fried Egg.',
      },
    ],
  },
  82: {
    id: 82,
    focus: 'Chicken',
    ingredients: [
      { name: 'Broth', amount: '4 cups' },
      { name: 'Chicken', amount: '1 cup, cubed' },
      { name: 'Corn', amount: '1 cup' },
      { name: 'Egg', amount: '1 large, beaten' },
      { name: 'Ginger', amount: '1 inch, sliced' },
      { name: 'Salt', amount: '½ tsp' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Bring Broth to a boil. Add Chicken, Corn, and Ginger. Simmer for 10 min.',
      },
      {
        step: 2,
        text: 'Reduce heat. Stirring slowly, pour in the beaten Egg to form ribbons.',
      },
      {
        step: 3,
        text: 'Remove Ginger, season with Salt, and serve.',
      },
    ],
  },
  83: {
    id: 83,
    focus: 'Salmon',
    ingredients: [
      { name: 'Salmon fillet', amount: '1, cooked, flaked' },
      { name: 'Lettuce', amount: '2 cups' },
      { name: 'Cucumber', amount: '½, sliced' },
      { name: 'Tomato', amount: '1, wedged' },
      { name: 'Onion', amount: '¼, thinly sliced' },
      { name: 'Olive Oil', amount: '2 tbsp' },
    ],
    instructions: [
      {
        step: 1,
        text: 'In a large bowl, combine Lettuce, Cucumber, Tomato, and Onion.',
      },
      {
        step: 2,
        text: 'Flake the cooked Salmon over the vegetables.',
      },
      {
        step: 3,
        text: 'Drizzle with Olive Oil and a squeeze of Lemon. Toss gently.',
      },
    ],
  },
  84: {
    id: 84,
    focus: 'Rice',
    ingredients: [
      { name: 'Rice', amount: '1 cup, cooked' },
      { name: 'Black Beans', amount: '1 can' },
      { name: 'Onion', amount: '½, diced' },
      { name: 'Bell Pepper', amount: '½, diced' },
      { name: 'Garlic', amount: '2 cloves, minced' },
      { name: 'Oil', amount: '1 tbsp' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Sauté Onion, Bell Pepper, and Garlic in oil until soft (5 min).',
      },
      {
        step: 2,
        text: 'Add Black Beans (drained and rinsed), and ½ cup Water/Broth. Simmer for 10 min.',
      },
      {
        step: 3,
        text: 'Serve the beans mixture over hot Rice.',
      },
    ],
  },
  85: {
    id: 85,
    focus: 'Potato',
    ingredients: [
      { name: 'Potatoes', amount: '2 large, cubed' },
      { name: 'Spinach', amount: '2 cups' },
      { name: 'Onion', amount: '½, diced' },
      { name: 'Garlic', amount: '2 cloves, minced' },
      { name: 'Curry Powder', amount: '1 tbsp' },
      { name: 'Water/Broth', amount: '2 cups' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Sauté Onion and Garlic until soft. Add Curry Powder, cook for 1 min.',
      },
      {
        step: 2,
        text: 'Add Potatoes and Water/Broth. Bring to a boil, then simmer for 15 min.',
      },
      {
        step: 3,
        text: 'Stir in Spinach until wilted. Season with Salt.',
      },
    ],
  },
  86: {
    id: 86,
    focus: 'Tortilla',
    ingredients: [
      { name: 'Tortillas', amount: '2' },
      { name: 'Cheese', amount: '1 cup, shredded' },
      { name: 'Chicken', amount: '4 oz, cooked, shredded' },
      { name: 'Onion', amount: '¼, minced' },
      { name: 'Butter', amount: '1 tbsp' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Spread Butter on one side of each Tortilla.',
      },
      {
        step: 2,
        text: 'Place one Tortilla (butter-side down) in a skillet. Layer with Chicken, Onion, and Cheese. Top with the second Tortilla.',
      },
      {
        step: 3,
        text: 'Grill for 3 min per side until golden and melted.',
      },
    ],
  },
  87: {
    id: 87,
    focus: 'Beef',
    ingredients: [
      { name: 'Beef', amount: '8 oz, sliced' },
      { name: 'Bell Pepper', amount: '1, sliced' },
      { name: 'Soy Sauce', amount: '2 tbsp' },
      { name: 'Garlic', amount: '2 cloves, minced' },
      { name: 'Oil', amount: '1 tbsp' },
      { name: 'Fresh Basil', amount: 'as needed' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Stir-fry Beef in oil until browned. Remove.',
      },
      {
        step: 2,
        text: 'Add Bell Pepper and Garlic, stir-fry for 3 min.',
      },
      {
        step: 3,
        text: 'Return Beef. Add Soy Sauce and Basil. Toss quickly. Serve immediately with Rice.',
      },
    ],
  },
  88: {
    id: 88,
    focus: 'Eggplant',
    ingredients: [
      { name: 'Eggplant', amount: '1 medium, halved' },
      { name: 'Cheese', amount: '¼ cup, shredded' },
      { name: 'Olive Oil', amount: '1 tbsp' },
      { name: 'Garlic', amount: '1 clove, minced' },
      { name: 'Salt', amount: 'Pinch' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Score the flesh of the Eggplant halves. Brush with oil and season with Salt and Garlic.',
      },
      {
        step: 2,
        text: 'Microwave on high for 5–7 min until tender.',
      },
      {
        step: 3,
        text: 'Sprinkle with Cheese and microwave for 1 more min until melted.',
      },
    ],
  },
  89: {
    id: 89,
    focus: 'Cabbage',
    ingredients: [
      { name: 'Cabbage', amount: '2 cups, shredded' },
      { name: 'Ground Beef', amount: '8 oz' },
      { name: 'Rice', amount: '½ cup, uncooked' },
      { name: 'Tomato', amount: '1 large, diced (as sauce base)' },
      { name: 'Water/Broth', amount: '1 cup' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Brown Ground Beef. Drain.',
      },
      {
        step: 2,
        text: 'Add Rice, Cabbage, Tomato, and Water/Broth. Season with Salt.',
      },
      {
        step: 3,
        text: 'Bring to a boil, reduce heat, cover, and simmer for 25–30 minutes until Rice is cooked.',
      },
    ],
  },
  90: {
    id: 90,
    focus: 'Tofu',
    ingredients: [
      { name: 'Tofu', amount: '1 block, cubed' },
      { name: 'Zucchini', amount: '1, cubed' },
      { name: 'Bell Pepper', amount: '1, cubed' },
      { name: 'Soy Sauce', amount: '2 tbsp' },
      { name: 'Honey (or Sugar)', amount: '1 tbsp' },
      { name: 'Skewers', amount: 'tool' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Combine Soy Sauce and Honey/Sugar for glaze.',
      },
      {
        step: 2,
        text: 'Thread Tofu, Zucchini, and Bell Pepper onto skewers.',
      },
      {
        step: 3,
        text: 'Brush with glaze.',
      },
      {
        step: 4,
        text: 'Grill or Roast at 400°F (200°C) for 15 min, brushing with glaze halfway.',
      },
    ],
  },
  91: {
    id: 91,
    focus: 'Egg',
    ingredients: [
      { name: 'Hard-Boiled Eggs', amount: '2, diced' },
      { name: 'Mayonnaise', amount: '2 tbsp' },
      { name: 'Celery', amount: '1 stalk, diced' },
      { name: 'Bread', amount: '2 slices' },
      { name: 'Salt', amount: '¼ tsp' },
    ],
    instructions: [
      {
        step: 1,
        text: 'In a bowl, mash diced Eggs and Celery.',
      },
      {
        step: 2,
        text: 'Stir in Mayonnaise and Salt until well combined.',
      },
      {
        step: 3,
        text: 'Spread the egg salad mixture onto one slice of Bread and top with the second slice.',
      },
    ],
  },
  92: {
    id: 92,
    focus: 'Egg',
    ingredients: [
      { name: 'Eggs', amount: '3 large' },
      { name: 'Spinach', amount: '1 cup' },
      { name: 'Mushroom', amount: '½ cup, sliced' },
      { name: 'Cheese', amount: '¼ cup, shredded' },
      { name: 'Milk', amount: '¼ cup' },
      { name: 'Butter', amount: '1 tsp' },
      { name: 'Salt', amount: '¼ tsp' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Sauté Mushroom and Spinach in a skillet with a bit of Butter until wilted.',
      },
      {
        step: 2,
        text: 'Whisk Eggs, Milk, and Salt. Pour into the skillet over the vegetables.',
      },
      {
        step: 3,
        text: 'Cook until the edges set. Sprinkle with Cheese.',
      },
      {
        step: 4,
        text: 'Finish under a broiler or cover until set.',
      },
    ],
  },
  93: {
    id: 93,
    focus: 'Chicken',
    ingredients: [
      { name: 'Rice', amount: '1 cup' },
      { name: 'Water/Broth', amount: '6 cups' },
      { name: 'Chicken', amount: '4 oz, cubed' },
      { name: 'Ginger', amount: '1 inch, sliced' },
      { name: 'Scallion', amount: 'for garnish' },
      { name: 'Salt', amount: '½ tsp' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Combine Rice, Water/Broth, and Ginger in a large pot. Bring to a boil, then reduce heat and simmer for 45–60 min, stirring occasionally, until creamy.',
      },
      {
        step: 2,
        text: 'Add Chicken and Salt. Cook for 5 more min.',
      },
      {
        step: 3,
        text: 'Garnish with Scallion before serving.',
      },
    ],
  },
  94: {
    id: 94,
    focus: 'Cabbage',
    ingredients: [
      { name: 'Cabbage', amount: '2 cups, shredded' },
      { name: 'Carrot', amount: '1 large, shredded' },
      { name: 'White Radish', amount: '½ cup, shredded' },
      { name: 'Mayonnaise', amount: '¼ cup' },
      { name: 'Vinegar', amount: '1 tbsp' },
      { name: 'Salt', amount: '½ tsp' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Combine Cabbage, Carrot, and White Radish in a large bowl.',
      },
      {
        step: 2,
        text: 'Whisk Mayonnaise, Vinegar, and Salt for dressing.',
      },
      {
        step: 3,
        text: 'Pour dressing over the vegetables and toss well to coat.',
      },
    ],
  },
  95: {
    id: 95,
    focus: 'Sausage',
    ingredients: [
      { name: 'Sausage', amount: '8 oz, sliced' },
      { name: 'Bell Pepper', amount: '1, sliced' },
      { name: 'Onion', amount: '½, sliced' },
      { name: 'Garlic', amount: '2 cloves, minced' },
      { name: 'Soy Sauce', amount: '1 tbsp' },
      { name: 'Oil', amount: '1 tbsp' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Fry Sausage in oil until browned. Remove.',
      },
      {
        step: 2,
        text: 'Add Bell Pepper and Onion, stir-fry for 5 min until softened.',
      },
      {
        step: 3,
        text: 'Add Garlic, cook for 1 min.',
      },
      {
        step: 4,
        text: 'Return Sausage. Stir in Soy Sauce and serve.',
      },
    ],
  },
  96: {
    id: 96,
    focus: 'Shrimp',
    ingredients: [
      { name: 'Pasta', amount: '8 oz, cooked' },
      { name: 'Shrimp', amount: '8 oz' },
      { name: 'Butter', amount: '3 tbsp' },
      { name: 'Garlic', amount: '3 cloves, minced' },
      { name: 'Salt', amount: '¼ tsp' },
      { name: 'Parsley', amount: '1 tbsp (garnish)' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Cook Pasta according to package directions.',
      },
      {
        step: 2,
        text: 'Melt Butter in a skillet over medium heat. Add Garlic and cook for 30 seconds.',
      },
      {
        step: 3,
        text: 'Add Shrimp and Salt. Cook for 3–5 minutes until shrimp is pink and opaque.',
      },
      {
        step: 4,
        text: 'Add cooked Pasta to the skillet and toss to coat. Garnish with parsley.',
      },
    ],
  },
  97: {
    id: 97,
    focus: 'Eggplant',
    ingredients: [
      { name: 'Eggplant', amount: '1 medium, sliced' },
      { name: 'Tomato', amount: '1 large, diced (as simple sauce)' },
      { name: 'Cheese', amount: '1 cup, shredded' },
      { name: 'Bread crumbs', amount: '¼ cup' },
      { name: 'Oil', amount: '1 tbsp' },
      { name: 'Salt', amount: '½ tsp' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Preheat oven to 400°F (200°C). Brush Eggplant slices with oil, season with Salt.',
      },
      {
        step: 2,
        text: 'Place Eggplant on a baking sheet, bake for 10 min.',
      },
      {
        step: 3,
        text: 'Top each slice with diced Tomato, then a sprinkle of Bread crumbs and shredded Cheese.',
      },
      {
        step: 4,
        text: 'Bake for 8–10 more minutes until cheese is melted.',
      },
    ],
  },
  98: {
    id: 98,
    focus: 'Tuna',
    ingredients: [
      { name: 'Tuna', amount: '1 can' },
      { name: 'Onion', amount: '¼, minced' },
      { name: 'Celery', amount: '1 stalk, diced' },
      { name: 'Mayonnaise', amount: '2 tbsp' },
      { name: 'Salt', amount: '¼ tsp' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Drain Tuna well and place in a bowl.',
      },
      {
        step: 2,
        text: 'Stir in minced Onion and diced Celery.',
      },
      {
        step: 3,
        text: 'Mix in Mayonnaise and Salt until the salad reaches a creamy consistency.',
      },
      {
        step: 4,
        text: 'Serve on Lettuce, Bread, or with crackers.',
      },
    ],
  },
  99: {
    id: 99,
    focus: 'Carrot',
    ingredients: [
      { name: 'Water/Broth', amount: '3 cups' },
      { name: 'Carrots', amount: '3 large, chopped' },
      { name: 'Ginger', amount: '1 inch, peeled, sliced' },
      { name: 'Milk (or cream)', amount: '¼ cup' },
      { name: 'Salt', amount: '½ tsp' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Combine Water/Broth, Carrots, Ginger, and Salt in a pot. Bring to a boil, then simmer for 20 min until carrots are very tender.',
      },
      {
        step: 2,
        text: 'Remove Ginger slices.',
      },
      {
        step: 3,
        text: 'Use a blender or immersion blender to blend the soup until smooth.',
      },
      {
        step: 4,
        text: 'Stir in Milk and heat gently (do not boil).',
      },
    ],
  },
  100: {
    id: 100,
    focus: 'Turkey',
    ingredients: [
      { name: 'Ground Turkey', amount: '1 lb' },
      { name: 'Egg', amount: '1 large' },
      { name: 'Bread crumbs', amount: '¼ cup' },
      { name: 'Onion', amount: '¼, minced' },
      { name: 'Salt', amount: '½ tsp' },
      { name: 'Rice', amount: 'Serve with (assumed)' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Preheat oven to 400°F (200°C).',
      },
      {
        step: 2,
        text: 'In a bowl, combine Ground Turkey, Egg, Bread crumbs, Onion, and Salt. Mix well.',
      },
      {
        step: 3,
        text: 'Roll mixture into small meatballs (approx. 1 inch).',
      },
      {
        step: 4,
        text: 'Place on a baking sheet and bake for 18–20 minutes until cooked through. Serve over Rice.',
      },
    ],
  },
  101: {
    id: 101,
    focus: 'Lamb',
    ingredients: [
      { name: 'Lamb Chops (Rib or Loin)', amount: '4 chops, approx. 1.5 inches thick' },
      { name: 'Olive Oil', amount: '2 tbsp (plus more for cooking)' },
      { name: 'Garlic', amount: '2 cloves, minced' },
      { name: 'Fresh Rosemary', amount: '1 tbsp, chopped' },
      { name: 'Salt', amount: 'to taste' },
      { name: 'Black Pepper', amount: 'to taste' },
      { name: 'Unsalted Butter', amount: '1 tbsp' },
      { name: 'Whole Garlic Cloves', amount: '2-3 cloves (for basting)' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Marinate: Pat the chops dry. In a bowl, rub the chops with 2 tbsp olive oil, minced garlic, chopped rosemary, salt, and pepper. Let them rest at room temperature for at least 30 minutes.',
      },
      {
        step: 2,
        text: 'Sear: Heat a cast-iron skillet over medium-high heat with a little olive oil. Once hot, place the chops in the pan. Sear the fatty edge first until crisp.',
      },
      {
        step: 3,
        text: 'Cook: Sear each side for 2-3 minutes for a medium-rare result. For thicker chops, you may need a little longer.',
      },
      {
        step: 4,
        text: 'Basting: In the final 1-2 minutes, add the butter and whole garlic cloves to the pan. Tilt the pan and continuously spoon the melted butter mixture over the chops (basting) to enhance the flavor.',
      },
      {
        step: 5,
        text: 'Rest and Serve: Remove the chops, tent them loosely with foil, and let them rest for 5 minutes before serving.',
      },
    ],
  },
  102: {
    id: 102,
    focus: 'Lamb',
    ingredients: [
      { name: 'Lamb Shoulder', amount: '2 lbs, cut into 1.5-inch chunks' },
      { name: 'Olive Oil', amount: '2 tbsp' },
      { name: 'Onion', amount: '1 large, chopped' },
      { name: 'Carrots', amount: '2, chopped' },
      { name: 'Garlic', amount: '2 cloves, minced' },
      { name: 'Cumin', amount: '2 tsp' },
      { name: 'Coriander', amount: '1 tsp' },
      { name: 'Turmeric', amount: '1 tsp' },
      { name: 'Cinnamon', amount: '½ tsp' },
      { name: 'Ras el Hanout', amount: '1 tsp (optional, but recommended)' },
      { name: 'Tomato Paste', amount: '1 tbsp' },
      { name: 'Dried Apricots', amount: '½ cup, halved' },
      { name: 'Beef or Chicken Stock', amount: '4 cups (low sodium)' },
      { name: 'Salt', amount: 'to taste' },
      { name: 'Pepper', amount: 'to taste' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Sear: Season the lamb chunks with salt and pepper. Heat olive oil in a large Dutch oven (or heavy pot) over high heat. Sear the lamb in batches until browned on all sides. Remove and set aside.',
      },
      {
        step: 2,
        text: 'Sauté Aromatics: Reduce the heat to medium. Add the onions and carrots, and sauté until soft (about 5 minutes). Add the minced garlic, tomato paste, and all the spices. Cook for 1 minute until fragrant.',
      },
      {
        step: 3,
        text: 'Braise: Return the lamb to the pot. Add the dried apricots and pour in the stock until the lamb is about halfway submerged. Bring to a simmer.',
      },
      {
        step: 4,
        text: 'Slow Cook: Cover the pot tightly. Transfer to a 325°F (160°C) oven and cook for 3-4 hours, or until the lamb is fork-tender and easily falls apart.',
      },
      {
        step: 5,
        text: 'Serve: Serve over rice or quinoa (naturally GF).',
      },
    ],
  },
  103: {
    id: 103,
    focus: 'Lamb',
    ingredients: [
      { name: 'Leg of Lamb', amount: '1 (5-6 lb), bone-in or boneless' },
      { name: 'Garlic', amount: '1 whole head, cloves peeled and sliced' },
      { name: 'Olive Oil', amount: '¼ cup' },
      { name: 'Fresh Lemon Juice', amount: '¼ cup' },
      { name: 'Fresh Oregano or Rosemary', amount: '2 tbsp, chopped' },
      { name: 'Salt', amount: '2 tsp' },
      { name: 'Black Pepper', amount: '1 tsp' },
    ],
    instructions: [
      {
        step: 1,
        text: 'Prep Lamb: Preheat your oven to 400°F (200°C). Pat the lamb leg dry. Use a sharp knife to make 15-20 small incisions (holes) evenly across the surface.',
      },
      {
        step: 2,
        text: 'Stuff: Insert the sliced garlic pieces into all the incisions, pushing them deep into the meat.',
      },
      {
        step: 3,
        text: 'Rub: In a small bowl, whisk together the olive oil, lemon juice, chopped herbs, salt, and pepper. Rub this mixture thoroughly all over the lamb leg.',
      },
      {
        step: 4,
        text: 'Roast (High/Low Method): Place the lamb in a roasting pan. Roast at 400°F for 20 minutes to sear the outside.',
      },
      {
        step: 5,
        text: 'Continue Cooking: Reduce the oven temperature to 325°F (160°C) and continue roasting until the internal temperature reaches your desired doneness (use a meat thermometer): Medium-Rare: 130°F, Medium: 140°F, Well-Done: 160°F.',
      },
      {
        step: 6,
        text: 'Rest and Carve: Remove the lamb from the oven and tent it loosely with foil. Crucially, let it rest for 15-20 minutes before carving to ensure maximum juiciness.',
      },
    ],
  },
}

