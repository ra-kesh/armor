import faker from "faker";

faker.seed(123);

const jacketImageArray = [
  "https://cdn.shopify.com/s/files/1/1947/9551/products/Rynox_Tornado_Pro_3_Jacket_Orange_1_376x.jpg?v=1611827730",
  "https://cdn.shopify.com/s/files/1/1947/9551/products/Rynox_Tornado_Pro_3_Jacket_Blue_1_376x.jpg?v=1611827799",
  "https://cdn.shopify.com/s/files/1/1947/9551/products/Rynox_Tornado_Pro_3_Jacket_Red_1_376x.jpg?v=1611828010",
  "https://cdn.shopify.com/s/files/1/1947/9551/products/Rynox_Tornado_Pro_3_Jacket_Black_1_376x.jpg?v=1611828010",
  "https://cdn.shopify.com/s/files/1/1947/9551/products/Rynox_Storm_Off_White-01_376x.jpg?v=1610443950",
  "https://cdn.shopify.com/s/files/1/1947/9551/products/Rynox_AirGT_3_Jacket_Black-01_376x.jpg?v=1607064220",
  "https://cdn.shopify.com/s/files/1/1947/9551/products/Rynox_AirGT_3_Jacket_Dark_Grey-Red-01_376x.jpg?v=1607064220",
  "https://cdn.shopify.com/s/files/1/1947/9551/products/Rynox_AirGT_3_Jacket_Grey-Hi-viz_Green-01_376x.jpg?v=1607064063",
  "https://cdn.shopify.com/s/files/1/1947/9551/products/RynoxUrbanJacket_EarthBrown-01_376x.jpg?v=1606896792",
  "https://cdn.shopify.com/s/files/1/1947/9551/products/RynoxUrbanJacket_StoneGrey-01_376x.jpg?v=1606896792",
  "https://cdn.shopify.com/s/files/1/1947/9551/products/RynoxUrbanJacket_BattleGreen-01_376x.jpg?v=1606884954",
  "https://cdn.shopify.com/s/files/1/1947/9551/products/Rynox_Storm_Grey-01_376x.jpg?v=1610447203",
];

export const brandNameArray = ["RYNOX", "MUNRO", "SCIMITAR", "MACNA", "ASPIDA"];

const descriptionArray = [
  "STEALTH EVO 3 JACKET",
  "TORNADO PRO 3 JACKET",
  "STORM EVO JACKET",
  "URBAN JACKET",
  "AIR GT 3 JACKET",
];

const priceArray = [6000, 8000, 7000, 9000, 5000];

const discountArray = [10, 20, 30];

const ratingArray = [1, 2, 3, 4, 5];

const countArray = [2, 20, 50, 6, 10, 15];

const sellerArray = ["Gear UP", "Riding Kart", "Motonation", "Biking Spirit"];

export const allJackets = [...Array(12)].map((item) => ({
  id: faker.datatype.uuid(),
  image: faker.random.arrayElement(jacketImageArray),
  brandName: faker.random.arrayElement(brandNameArray),
  description: faker.random.arrayElement(descriptionArray),
  price: faker.random.arrayElement(priceArray),
  isnew: faker.datatype.boolean(),
  sale: faker.datatype.boolean(),
  fastDelivery: faker.datatype.boolean(),
  inStock: faker.datatype.boolean(),
  discountByPercentage: faker.random.arrayElement(discountArray),
  rating: faker.random.arrayElement(ratingArray),
  count: faker.random.arrayElement(countArray),
  isInWishlist: false,
  isInCart: false,
  seller: faker.random.arrayElement(sellerArray),
  type: "male",
  quantity: 1,
}));
