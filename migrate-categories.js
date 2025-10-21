const mongoose = require('mongoose');
require('dotenv').config({ path: './backend/.env' });

const Category = require('./backend/models/Category');
const Product = require('./backend/models/Product');

const defaultCategories = [
  { name: 'Vegetables', description: 'Fresh vegetables from local farms' },
  { name: 'Fruits', description: 'Seasonal fruits and berries' },
  { name: 'Dairy', description: 'Milk, cheese, and dairy products' },
  { name: 'Grains', description: 'Rice, wheat, and other grains' },
  { name: 'Others', description: 'Other farm products' }
];

async function migrateCategories() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Create default categories
    const categoryMap = {};
    for (const catData of defaultCategories) {
      let category = await Category.findOne({ name: catData.name });
      if (!category) {
        category = await Category.create(catData);
        console.log(`Created category: ${category.name}`);
      }
      categoryMap[catData.name] = category._id;
    }

    // Update existing products
    const products = await Product.find({});
    for (const product of products) {
      if (typeof product.category === 'string') {
        const categoryId = categoryMap[product.category];
        if (categoryId) {
          await Product.findByIdAndUpdate(product._id, { category: categoryId });
          console.log(`Updated product: ${product.name}`);
        }
      }
    }

    console.log('Migration completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Migration failed:', error);
    process.exit(1);
  }
}

migrateCategories();