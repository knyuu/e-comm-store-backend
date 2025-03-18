const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const cors = require("cors");
const categoryRoutes = require('./routes/category');
const brandRoutes = require('./routes/brand');
const productRoutes = require('./routes/product')

// Khởi động server
app.listen(port, () => {
    console.log(`🚀 Server is running on port ${port}`);
});

// Route mặc định
app.get("/", (req, res) => {
    res.send('Server is running');
});

// PARSE JSON sang Object thuần
app.use(cors());
app.use(express.json());

// Kết nối MongoDB
async function connectDb () {
    try {
        await mongoose.connect('mongodb://localhost:27017/', {
            dbName: 'e-comm-store'
        });
        console.log('✅ Database connected successfully');
    } catch (err) {
        console.error('❌ Database connection failed:', err);
    }
}
connectDb();

// Sử dụng route cho category
app.use("/category", categoryRoutes);
app.use("/brand", brandRoutes);
app.use("/products", productRoutes)

