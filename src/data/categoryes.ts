const brandMobileContent = [
  { id: 1, content: "گوشی اپل" },
  { id: 2, content: "گوشی سامسونگ" },
  { id: 3, content: "گوشی شیائومی" },
  { id: 4, content: "گوشی نوکیا" },
  { id: 5, content: "گوشی هواوی" },
  { id: 6, content: "گوشی آنر" },
  { id: 7, content: "گوشی موتورولا" },
  { id: 8, content: "گوشی ریلمی" },
  { id: 9, content: "گوشی ناتینگ" },
  { id: 10, content: "گوشی ارد" },
  { id: 11, content: "گوشی جی پلاس" },
  { id: 12, content: "گوشی وان پلاس" },
  { id: 13, content: "گوشی جی ال ایکس" },
];
const mobilePrice = [
  { id: 1, content: "گوشی تا 2 میلیون" },
  { id: 2, content: "گوشی تا 5 میلیون" },
  { id: 3, content: "گوشی تا 7 میلیوت" },
  { id: 4, content: "گوشی تا 15 میلیون" },
  { id: 4, content: "گوشی بالای 15 میلیون" },
];
const mobileRam = [
  { id: 1, content: "گوشی تا 16 گیگابایت" },
  { id: 2, content: "گوشی تا 32 گیگابایت" },
  { id: 3, content: "گوشی تا 64 گیگابایت" },
  { id: 4, content: "گوشی تا 128 گیگابایت" },
  { id: 4, content: "گوشی تا 256 گیگابایت" },
  { id: 4, content: "گوشی تا 1 ترابایت" },
];
const mobileResPhoto = [
  { id: 1, content: "گوشی تا 13 میگاپیکسل" },
  { id: 2, content: "گوشی تا 16 میگاپیکسل" },
  { id: 3, content: "گوشی تا 48 میگاپیکسل" },
  { id: 4, content: "گوشی تا 64 میگاپیکسل" },
  { id: 4, content: "گوشی تا 108 میگاپیکسل" },
];
const mobileKarbord = [
  { id: 1, content: "گوشی گیمینگ " },
  { id: 2, content: "گوشی اقتصادی" },
  { id: 3, content: "گوشی میانرده" },
  { id: 4, content: "گوشی دانش آموزی" },
  { id: 4, content: "گوشی پرچمدار" },
];

const mobileHeading = [
  { id: 1, title: "برندهای مختلف گوشی موبایل", content: brandMobileContent },
  { id: 2, title: "گوشی بر اساس قیمت", content: mobilePrice },
  { id: 3, title: "گوشی براساس حافظه داخلی", content: mobileRam },
  { id: 4, title: "رزولوشن عکس", content: mobileResPhoto },
  { id: 5, title: "گوشی براساس کاربری", content: mobileKarbord },
];

const kalaHeading = [
  { id: 1, title: "لوازم جانبی گوشی", content: brandMobileContent },
  { id: 2, title: "لوازم جانبی لپ تاپ", content: mobilePrice },
  { id: 3, title: "گوشی موبایل", content: mobileRam },
  { id: 4, title: "تلویزیون", content: mobileResPhoto },
  { id: 5, title: "دوربین", content: mobileKarbord },
];

const homeHeading = [
  { id: 1, title: "تلویزیون", content: brandMobileContent },
  { id: 2, title: "یخچال و فریزر", content: mobilePrice },
  { id: 3, title: "دکوراتیو", content: mobileRam },
  { id: 4, title: "لوازم برقی خانگی", content: mobileResPhoto },
  { id: 5, title: "آشپزخانه", content: mobileKarbord },
];

export const headingCategorys = [
  { id: 1, title: "موبایل", content: mobileHeading },
  { id: 2, title: "کالای دیجیتال", content: kalaHeading },
  { id: 3, title: "خانه و آشپزخانه", content: homeHeading },
];
