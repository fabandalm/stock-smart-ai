INSERT INTO public."role" ("name")
VALUES
    ('Technician'),
    ('Engineer'),
    ('Operator'),
    ('Supervisor');

INSERT INTO category (name, description) VALUES
                                             ('Electronics', 'Devices and gadgets including smartphones, laptops, and accessories'),
                                             ('Clothing', 'Men and women apparel, footwear, and accessories'),
                                             ('Home & Kitchen', 'Appliances, furniture, and decor for home and kitchen'),
                                             ('Books', 'Fiction, non-fiction, textbooks, and reference books'),
                                             ('Toys & Games', 'Board games, action figures, puzzles, and educational toys'),
                                             ('Sports & Outdoors', 'Equipment, apparel, and accessories for sports and outdoor activities'),
                                             ('Beauty & Personal Care', 'Cosmetics, skincare, and grooming products'),
                                             ('Health & Wellness', 'Supplements, fitness gear, and medical supplies'),
                                             ('Automotive', 'Car accessories, tools, and maintenance equipment'),
                                             ('Jewelry & Watches', 'Rings, necklaces, watches, and other accessories'),
                                             ('Grocery', 'Food items, beverages, and pantry staples'),
                                             ('Pet Supplies', 'Food, toys, and accessories for pets'),
                                             ('Office Supplies', 'Stationery, printers, and office essentials'),
                                             ('Music Instruments', 'Guitars, keyboards, drums, and other musical instruments'),
                                             ('Movies & TV', 'DVDs, Blu-rays, and streaming subscriptions'),
                                             ('Gaming', 'Video games, consoles, and gaming accessories'),
                                             ('Baby Products', 'Diapers, baby food, toys, and essentials for infants'),
                                             ('Garden & Outdoors', 'Plants, gardening tools, and outdoor furniture'),
                                             ('Industrial & Scientific', 'Lab equipment, industrial tools, and research materials'),
                                             ('Furniture', 'Living room, bedroom, and office furniture'),
                                             ('Handmade', 'Custom and handmade crafts, gifts, and artwork'),
                                             ('Luggage & Travel', 'Suitcases, backpacks, and travel accessories'),
                                             ('Collectibles & Memorabilia', 'Rare items, vintage collections, and autographs'),
                                             ('Photography', 'Cameras, lenses, tripods, and accessories'),
                                             ('Smart Home', 'Home automation devices, security cameras, and smart assistants'),
                                             ('Wearable Technology', 'Smartwatches, fitness trackers, and AR/VR devices'),
                                             ('Art & Crafts', 'Painting, knitting, DIY kits, and art supplies'),
                                             ('Bicycles & Accessories', 'Bicycles, helmets, and biking gear'),
                                             ('Luxury Items', 'High-end fashion, jewelry, and accessories');

-- SQL Script to insert 50 random suppliers into the public.supplier table

INSERT INTO public.supplier (address, contact, "name", telephone)
VALUES
    ('1234 Elm St, Springfield', 'John Doe', 'Springfield Electronics', '555-0101'),
    ('5678 Oak St, Riverside', 'Jane Smith', 'Riverside Textiles', '555-0202'),
    ('91011 Pine St, Hill Valley', 'Jim Beam', 'Hill Valley Autos', '555-0303'),
    ('1213 Maple St, Gotham', 'Jill St. Claire', 'Gotham Supplies', '555-0404'),
    ('1415 Birch St, Metropolis', 'Clark Kent', 'Metropolis Innovations', '555-0505'),
    ('1617 Cedar St, Star City', 'Oliver Queen', 'Star City Equipment', '555-0606'),
    ('1819 Spruce St, Central City', 'Barry Allen', 'Central City Machineries', '555-0707'),
    ('2021 Ash St, Smallville', 'Lex Luthor', 'Smallville Essentials', '555-0808'),
    ('2223 Willow St, Neptune', 'Veronica Mars', 'Neptune Gadgets', '555-0909'),
    ('2425 Cypress St, Sunnydale', 'Buffy Summers', 'Sunnydale Imports', '555-1010'),
    ('2627 Alder St, Charming', 'Jax Teller', 'Charming Auto Parts', '555-1111'),
    ('2829 Elmwood St, Pawnee', 'Leslie Knope', 'Pawnee Stationery', '555-1212'),
    ('3031 Redwood St, Eureka', 'Jack Carter', 'Eureka Tech Supplies', '555-1313'),
    ('3233 Hawthorn St, Twin Peaks', 'Dale Cooper', 'Twin Peaks Forestry Supplies', '555-1414'),
    ('3435 Sycamore St, White Collar', 'Neal Caffrey', 'White Collar Fine Arts', '555-1515'),
    ('3637 Palm St, Mystic Falls', 'Elena Gilbert', 'Mystic Falls Crafts', '555-1616'),
    ('3839 Ironwood St, Santa Barbara', 'Shawn Spencer', 'Santa Barbara Gift Shop', '555-1717'),
    ('4041 Cedarwood St, Capeside', 'Joey Potter', 'Capeside Marine Supplies', '555-1818'),
    ('4243 Pinewood St, Bon Temps', 'Sookie Stackhouse', 'Bon Temps Grocery', '555-1919'),
    ('4445 Fir St, Jersey Shore', 'Snooki Polizzi', 'Jersey Shore Souvenirs', '555-2020'),
    ('4647 Cedar Ave, Hogsmeade', 'Harry Potter', 'Hogsmeade Magic Supplies', '555-2121'),
    ('4849 Oakwood St, Stars Hollow', 'Lorelai Gilmore', 'Stars Hollow Antiques', '555-2222'),
    ('5051 Maplewood St, South Park', 'Eric Cartman', 'South Park Toys', '555-2323'),
    ('5253 Birchwood St, Springfield', 'Ned Flanders', 'Springfield Garden Supplies', '555-2424'),
    ('5455 Elmwood Ave, Quahog', 'Peter Griffin', 'Quahog Home Goods', '555-2525'),
    ('5657 Oakwood Ave, Mayberry', 'Andy Taylor', 'Mayberry Auto Repairs', '555-2626'),
    ('5859 Pine Ave, Hawkins', 'Jim Hopper', 'Hawkins Electrical', '555-2727'),
    ('6061 Maple Ave, Kings Landing', 'Tyrion Lannister', 'Kings Landing Winery', '555-2828'),
    ('6263 Birch Ave, Blackwater', 'Roland Deschain', 'Blackwater Armory', '555-2929'),
    ('6465 Elm Ave, Arkham', 'Harley Quinn', 'Arkham Asylum Supplies', '555-3030'),
    ('6667 Oak Ave, Wonderland', 'Alice Liddell', 'Wonderland Curiosities', '555-3131'),
    ('6869 Pine St, Neverland', 'Peter Pan', 'Neverland Adventures', '555-3232'),
    ('7071 Maple St, Bedrock', 'Fred Flintstone', 'Bedrock Stone Supplies', '555-3333'),
    ('7273 Birch St, Middle Earth', 'Bilbo Baggins', 'Middle Earth Treasures', '555-3434'),
    ('7475 Elm St, Narnia', 'Lucy Pevensie', 'Narnia Crafts', '555-3535'),
    ('7677 Oak St, Sparta', 'Leonidas', 'Sparta Shields', '555-3636'),
    ('7879 Pine St, Westworld', 'Dolores Abernathy', 'Westworld Robotics', '555-3737'),
    ('8081 Maple St, Atlantis', 'Aqua Man', 'Atlantis Marine Goods', '555-3838'),
    ('8283 Birch St, Camelot', 'Arthur Pendragon', 'Camelot Armaments', '555-3939'),
    ('8485 Elm St, Gotham', 'Bruce Wayne', 'Gotham Enterprises', '555-4040'),
    ('8687 Oak St, Asgard', 'Thor Odinson', 'Asgardian Relics', '555-4141'),
    ('8889 Pine St, Discworld', 'Samuel Vimes', 'Discworld Novelties', '555-4242'),
    ('9091 Maple St, Metropolis', 'Lois Lane', 'Metropolis Press', '555-4343'),
    ('9293 Birch St, Pandora', 'Jake Sully', 'Pandora Expeditions', '555-4444'),
    ('9495 Elm St, The Shire', 'Samwise Gamgee', 'The Shire Garden Supplies', '555-4545'),
    ('9697 Oak St, The Matrix', 'Neo', 'The Matrix Tech', '555-4646'),
    ('9899 Pine St, The Grid', 'Kevin Flynn', 'The Grid Electronics', '555-4747'),
    ('10101 Maple St, Vulcan', 'Spock', 'Vulcan Logic Puzzles', '555-4848'),
    ('10303 Birch St, The Island', 'Jack Shephard', 'The Island Medical Supplies', '555-4949'),
    ('10505 Elm St, Area 51', 'Fox Mulder', 'Area 51 Secrets', '555-5050');

-- SQL Script to insert 50 random products into the public.product table

INSERT INTO public.product (bar_code, description, "name", price, quantity, category_id, supplier_id)
VALUES
    ('123456789012', 'High-performance gaming laptop', 'Gaming Laptop', 1200.00, 10, 2, 1),
    ('234567890123', 'Latest model 4K television', '4K Television', 800.00, 15, 2, 2),
    ('345678901234', 'Professional studio microphone', 'Studio Microphone', 150.00, 20, 14, 3),
    ('456789012345', 'Leather office chair', 'Office Chair', 250.00, 5, 20, 4);

/* ,
 ('567890123456', 'Bluetooth running headphones', 'Running Headphones', 90.00, 30, 16, 5),
 ('678901234567', 'Smart home speaker', 'Home Speaker', 99.99, 40, 25, 6),
 ('789012345678', 'Stainless steel microwave', 'Microwave', 300.00, 25, 3, 7),
 ('890123456789', 'Mens waterproof hiking boots', 'Hiking Boots', 150.00, 20, 6, 8),
 ('901234567890', 'Ergonomic wireless mouse', 'Wireless Mouse', 25.99, 50, 13, 9),
 ('012345678901', 'Durable yoga mat', 'Yoga Mat', 35.00, 45, 8, 10),
 ('112345678902', 'Classic wooden baseball bat', 'Baseball Bat', 80.00, 15, 6, 11),
 ('212345678903', 'Multi-vitamin supplements', 'Multi-vitamins', 29.95, 40, 8, 12),
 ('312345678904', 'Electric hand mixer', 'Hand Mixer', 70.00, 25, 3, 13),
 ('412345678905', 'Action figure collectible', 'Action Figure', 45.00, 30, 5, 14),
 ('512345678906', 'Romantic comedy DVD set', 'RomCom DVDs', 19.99, 50, 15, 15),
 ('612345678907', 'Sci-fi spaceship LEGO set', 'LEGO Spaceship', 130.00, 25, 5, 16),
 ('712345678908', 'Outdoor patio furniture set', 'Patio Furniture', 600.00, 8, 3, 17),
 ('812345678909', 'Synthetic mountain climbing rope', 'Climbing Rope', 75.00, 20, 6, 18),
 ('912345678910', 'Adjustable dumbbells', 'Dumbbells', 200.00, 15, 8, 19),
 ('102345678911', 'High-quality oil paint set', 'Oil Paint Set', 50.00, 40, 27, 20),
 ('112345678912', 'Silicone baking mats', 'Baking Mats', 25.00, 35, 3, 21),
 ('122345678913', 'Full-frame digital SLR camera', 'SLR Camera', 1500.00, 10, 24, 22),
 ('132345678914', 'Wireless video game controller', 'Game Controller', 60.00, 30, 16, 23),
 ('142345678915', 'Compact binoculars', 'Binoculars', 120.00, 22, 6, 24),
 ('152345678916', 'Baby high chair', 'High Chair', 100.00, 18, 17, 25),
 ('162345678917', 'Electronic drum set', 'Drum Set', 899.99, 12, 14, 26),
 ('172345678918', 'Professional electric guitar', 'Electric Guitar', 650.00, 15, 14, 27),
 ('182345678919', 'Portable camping stove', 'Camping Stove', 45.00, 25, 18, 28),
 ('192345678920', 'Retro style bicycle', 'Retro Bicycle', 485.00, 20, 28, 29),
 ('202345678921', 'Luxury mens watch', 'Mens Watch', 2500.00, 5, 10, 30),
 ('212345678922', 'Interactive pet toy', 'Pet Toy', 29.99, 40, 12, 31),
 ('222345678923', 'Robotic vacuum cleaner', 'Vacuum Cleaner', 499.99, 15, 25, 32),
 ('232345678924', 'Architectural model building kit', 'Model Kit', 165.00, 10, 5, 33),
 ('242345678925', 'Professional hair dryer', 'Hair Dryer', 85.00, 30, 7, 34),
 ('252345678926', 'Rugged all-terrain tires', 'AT Tires', 650.00, 20, 9, 35),
 ('262345678927', 'Compact portable charger', 'Portable Charger', 24.99, 50, 16, 36),
 ('272345678928', 'Eco-friendly notebook set', 'Notebook Set', 15.00, 80, 13, 37),
 ('282345678929', 'High-end leather wallet', 'Leather Wallet', 55.00, 40, 10, 38),
 ('292345678930', 'Designer fragrance for men', 'Mens Fragrance', 85.00, 25, 7, 39),
 ('302345678931', 'Advanced drone with camera', 'Drone', 1400.00, 15, 24, 40),
 ('312345678932', 'Professional road bicycle', 'Road Bicycle', 1120.00, 10, 28, 41),
 ('322345678933', 'Organic dog food', 'Dog Food', 60.00, 50, 12, 42),
 ('332345678934', 'Childrens storybook collection', 'Storybooks', 120.00, 30, 4, 43),
 ('342345678935', 'Premium espresso machine', 'Espresso Machine', 700.00, 15, 3, 44),
 ('352345678936', 'Stainless steel water bottle', 'Water Bottle', 25.00, 80, 18, 45),
 ('362345678937', 'Beginners guitar kit', 'Guitar Kit', 99.99, 25, 14, 46),
 ('372345678938', 'Comprehensive tool set', 'Tool Set', 250.00, 20, 19, 47),
 ('382345678939', 'Single malt scotch', 'Scotch', 85.00, 25, 7, 48),
 ('392345678940', 'LED light bulbs (pack of 10)', 'LED Bulbs', 19.99, 100, 25, 49),
 ('402345678941', 'Soft plush teddy bear', 'Teddy Bear', 19.95, 50, 5, 50);*/

