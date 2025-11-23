require('dotenv').config();
const mongoose = require('mongoose');
const Project = require('./models/Project');

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB Connected for Seeding'))
    .catch(err => console.error('MongoDB Connection Error:', err));

const projects = [
    {
        projectName: "Parkside Living Room",
        projectImage: "https://plus.unsplash.com/premium_photo-1723901831135-782c98d8d8e0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGl2aW5nJTIwcm9vbSUyMGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww&fm=jpg&q=60&w=3000",
        tags: ["Interior", "Matte + Semi-Gloss"],
    },
    {
        projectName: "Oakridge Exterior",
        projectImage: "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SG91c2UlMjBFeHRlcmlvcnxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000",
        tags: ["Exterior", "Weatherproof"],
    },
    {
        projectName: "Beacon Office Suite",
        projectImage: "https://images.unsplash.com/photo-1604328702728-d26d2062c20b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8b2ZmaWNlJTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
        tags: ["Commercial", "Low Odour"],
    },
    {
        projectName: "Parkside Living Room",
        projectImage: "https://plus.unsplash.com/premium_photo-1723901831135-782c98d8d8e0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGl2aW5nJTIwcm9vbSUyMGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww&fm=jpg&q=60&w=3000",
        tags: ["Interior", "Matte + Semi-Gloss"],
    },
    {
        projectName: "Oakridge Exterior",
        projectImage: "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SG91c2UlMjBFeHRlcmlvcnxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000",
        tags: ["Exterior", "Weatherproof"],
    },
    {
        projectName: "Beacon Office Suite",
        projectImage: "https://images.unsplash.com/photo-1604328702728-d26d2062c20b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8b2ZmaWNlJTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
        tags: ["Commercial", "Low Odour"],
    },
    {
        projectName: "Parkside Living Room",
        projectImage: "https://plus.unsplash.com/premium_photo-1723901831135-782c98d8d8e0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGl2aW5nJTIwcm9vbSUyMGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww&fm=jpg&q=60&w=3000",
        tags: ["Interior", "Matte + Semi-Gloss"],
    },
    {
        projectName: "Oakridge Exterior",
        projectImage: "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SG91c2UlMjBFeHRlcmlvcnxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000",
        tags: ["Exterior", "Weatherproof"],
    },
    {
        projectName: "Beacon Office Suite",
        projectImage: "https://images.unsplash.com/photo-1604328702728-d26d2062c20b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8b2ZmaWNlJTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
        tags: ["Commercial", "Low Odour"],
    }
];

const seedDB = async () => {
    try {
        await Project.deleteMany({});
        await Project.insertMany(projects);
        console.log('Database Seeded Successfully');
    } catch (err) {
        console.error('Error Seeding Database:', err);
    } finally {
        mongoose.connection.close();
    }
};

seedDB();
