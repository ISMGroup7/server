const router = require('express').Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://studentpad:studentpad@cluster0.5ha3n.mongodb.net/";

router.get('/', async (req, res) => {
    MongoClient.connect(url, function(err, client) {
        if (err) throw err;
        var myobj = {
            name: "Apartment 53",
            address_line_1: "Dunaras Village",
            address_line_2: "Bishop O'Donell Road",
            county: "Galway",
            country: "Ireland",
            owner_id: 324324234,
            coordinates: {
                latitude: 53.271719,
                longitude: -9.0873027
            },
            rooms: {
                living_room: 1,
                total_bedrooms: 3,
                single_bedroom: 1,
                double_bedroom: 1,
                twin_bedroom: 1,
                kitchen: 1,
                bathroom: 1
            },
            utilities: ["air fryer", "microwave", "oven", "heater", "pans", "utensils"],
            views: 1000,
            ratings: 4.5,
            rent_breakdown: {
                electricity: 200.00,
                deposit: 500.00,
                utilities: 100.00,
                bin: 20.00,
                wifi: 50.00,
                gas: 30.00,
                rent_per_month: 450.00
            },
            supermarket: [
                {
                    name: "ALDI",
                    distance: 699
                }
            ],
            university: [
                {
                    name: "Dunnes Stores",
                    distance: 500
                }
            ],
            photos: [{
                    secure_url: "https://res.cloudinary.com/dhe6u66uy/image/upload/v1641888547/5_xshxbq.webp"
                },
                    {
                    secure_url: "https://res.cloudinary.com/dhe6u66uy/image/upload/v1641888547/3_et9rh4.webp"
                    
                    },
                    {
                    secure_url: "https://res.cloudinary.com/dhe6u66uy/image/upload/v1641888547/4_vx9sfa.webp"
                    
                    },
                    {
                    secure_url: "https://res.cloudinary.com/dhe6u66uy/image/upload/v1641888548/2_pvjdz7.webp"
                    
                    },
                    {
                    secure_url: "http://res.cloudinary.com/dhe6u66uy/image/upload/v1641888549/1_zuk9uv.webp"
                    }
            ],
            video: "https://www.youtube.com/embed/mgM4s_6-opE",
            viewings: 1,
            viewing_info: {
                tenant_id: 345345345,
                date: "22/05/2022",
                result: 0
            },
            sold: 0,
            available_date: "01/06/2022",
            rennovated_date: "01/06/2022",
            verified: 1,
            property_type: "apartments",
            description: "",
            post_date: "22/05/2022",
            furnished: true
        };
        client.db('studentpad').collection("properties").insertOne(myobj, function(err, res) {
          if (err) throw err;
          console.log("1 document inserted");
          client.close();
        });
        return res.status(200).send('inserted')
    });
})

module.exports = router;