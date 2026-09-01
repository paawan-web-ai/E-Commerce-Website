import { useState } from "react";

const fruitCategories = [
  "Bananas",
  "Apples & Pears",
  "Berries & Cherries",
  "Oranges & Citrus Fruit",
  "Grapes",
];

const vegetableCategories = [
  "Potatoes & Sweet Potatoes",
  "Onions & Leeks",
  "Carrots & Root Vegetables",
  "Broccoli & Cauliflower",
  "Cabbage & Greens",
];

const saladCategories = [
  "Lettuce & Salad Bags",
  "Tomatoes",
  "Cucumber",
  "Celery",
  "Peppers",
];

const filterOptions = {
  Size: ["S (4)", "M (12)", "L (12)", "XL (12)"],
  Property: ["Long Sleeves (2)", "Short Sleeves (2)"],
  Composition: ["Ceramic (7)", "Cotton (4)", "Matt Paper (6)"],
  Brand: ["Graphic Corner (6)", "Studio Design (11)"],
};

const categoryList = (categories) => (
  <ul className="flex flex-col gap-1 p-2">
    {categories.map((category) => (
      <li key={category}>
        <button
          type="button"
          className="w-full p-2 text-left text-lg hover:text-green-600"
        >
          {category}
        </button>
      </li>
    ))}
  </ul>
);

const FilterList = ({ options }) => (
  <div className="space-y-2 pt-3">
    {options.map((option) => (
      <label
        key={option}
        className="flex cursor-pointer items-center gap-2 text-sm text-gray-600"
      >
        <input type="checkbox" className="h-4 w-4 accent-green-600" />
        {option}
      </label>
    ))}
  </div>
);

const Leftsidebar = () => {
  const [isFruitOpen, setIsFruitOpen] = useState(false);
  const [isVegetableOpen, setIsVegetableOpen] = useState(false);
  const [isSaladOpen, setIsSaladOpen] = useState(false);

  const expandableCategory = (title, categories, isOpen, setIsOpen, id) => (
    <>
      <button
        type="button"
        onClick={() => setIsOpen((previous) => !previous)}
        aria-expanded={isOpen}
        aria-controls={id}
        className="flex w-full items-center justify-between px-2 py-2 text-left text-lg font-semibold hover:text-green-600"
      >
        {title}
        <i
          className={`ri-arrow-down-s-line text-2xl transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        id={id}
        className={`overflow-hidden bg-white transition-all duration-300 ${isOpen ? "visible max-h-96 opacity-100" : "invisible max-h-0 opacity-0"}`}
      >
        {categoryList(categories)}
      </div>
    </>
  );

  return (
    <div>
      <div className="left-bar">
        <div className="relative w-64">
          <h2>Home Decor</h2>
          {expandableCategory(
            "Fresh Fruit",
            fruitCategories,
            isFruitOpen,
            setIsFruitOpen,
            "fresh-fruit-list",
          )}
          {expandableCategory(
            "Fresh Vegetables",
            vegetableCategories,
            isVegetableOpen,
            setIsVegetableOpen,
            "fresh-vegetable-list",
          )}
          {expandableCategory(
            "Fresh Salad",
            saladCategories,
            isSaladOpen,
            setIsSaladOpen,
            "fresh-salad-list",
          )}

          <div className="mt-4 space-y-4">
            {Object.entries(filterOptions).map(([title, options]) => (
              <section key={title}>
                <h2 className="text-lg font-semibold">{title}</h2>
                <FilterList options={options} />
              </section>
            ))}
            <section>
              <h2 className="text-lg font-semibold">Color</h2>
              <div className="space-y-2 pt-3">
                {[
                  ["White", "bg-white"],
                  ["Black", "bg-black"],
                ].map(([name, swatch]) => (
                  <label
                    key={name}
                    className="flex cursor-pointer items-center gap-2 text-sm text-gray-600"
                  >
                    <input
                      type="checkbox"
                      className="h-4 w-4 accent-green-600"
                    />
                    <span
                      className={`h-5 w-5 rounded border border-gray-300 ${swatch}`}
                      aria-label={`${name} color`}
                    />
                    {name} (2)
                  </label>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="right-card"></div>
    </div>
  );
};

export default Leftsidebar;
