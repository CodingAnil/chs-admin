const categoryOptions = {
  "Healthcare Devices": [
    "Oximeters",
    "Thermometers",
    "Inhalers",
    "Blood Pressure Monitors",
    "Glucometers",
  ],
  "Personal Care": [
    "Bath Products",
    "Skincare Essentials",
    "Razor Blades",
    "Oral Care",
    "Wet Wipes",
    "Lip Balms",
    "Face Masks",
    "Hand Sanitizers",
  ],
  "Nutrition and Fitness Supplements": [
    "Health Drinks",
    "Nutritional Powders",
    "Nutrition Tablets/Capsules",
  ],
  "Ayurvedic Care": ["Aloe Vera Juice", "Moringa Capsules", "Garlic Capsules"],
  "Home Care": ["Disinfectant Sprays", "Phenyl", "Dishwashing Liquids"],
  "Mother and Baby Care": [
    "Diapers",
    "Baby Bath Products",
    "Infant Formula Food",
    "Mother’s Health Drinks",
    "Diaper Rash Creams",
    "Baby Wipes",
  ],
};

const dataArray = [
  {
    name: "test",
    discount: "20%",
    status: "Published",
    updatedAt: "2025-02-15T14:23:42.660Z",
  },
  {
    name: "test2",
    discount: "30%",
    status: "Hold",
    updatedAt: "2025-03-15T14:23:42.660Z",
  },
  {
    name: "test3",
    discount: "20%",
    status: "Published",
    updatedAt: "2025-02-15T14:23:42.660Z",
  },
  {
    name: "test4",
    discount: "20%",
    status: "Published",
    updatedAt: "2025-02-15T14:23:42.660Z",
  },
  {
    name: "test5",
    discount: "10%",
    status: "Pending",
    updatedAt: "2025-01-02T14:23:42.660Z",
  },
  {
    name: "test6",
    discount: "20%",
    status: "Published",
    updatedAt: "2025-02-15T14:23:42.660Z",
  },
];

export { categoryOptions, dataArray };
