// creating temporary file to store data manually before backend is created;

const surveyData = {
  selectOpt : {
    mealCount : [{val:3, text:"Three"},{val:5, text:"Five"},{val:2, text:"Two"}],
    planType :[{val:7, text:"Weekly"},{val:1, text:"Daily"}],
  },
  dietSpec : [
    {name: "balanced", text: "Balanced Diet (Recommended)"},
    {name: "low-carb", text: "Low-Carb (Less than 20% of total calories from carbs)"},
    {name: "low-fat", text: "Low-Fat (Less than 15% of total calories from fat)"},
  ],
  healthSpec : [
    {name: "vegan", text: "Vegan (No meat, poultry, fish, dairy, eggs or honey)"},
    {name: "vegetarian", text: "Vegetarian (No wheat, can have gluten though)"},
    {name: "alcohol-free", text: "Alcohol-free (No alcohol used or contained)"},
    {name: "peanut-free", text: "Peanut Free (No peanuts or products containing peanuts)"},
  ],
  mealTypes : {
    3: ["Breakfast","Lunch","Dinner"],
    5: ["Breakfast Snack","Breakfast","Lunch","Afternoon Snack","Dinner"],
    2: ["Brunch","Dinner"],
  },
  calories : {
    min:1800,
    max:2500,
  },
}
const API = {
  ID : "2038341a",
  KEY : "82899232e623d06305802dc7dfb95592",
  URL : "https://api.edamam.com/search?",
}
export {
  API, surveyData as Survey
}

