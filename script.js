// Product Data (100+ products with sizes added)
const products = [
    { id: 1, name: "Men's Casual Shirt", price: 1599, category: "fashion", rating: 4.5, reviews: 128, image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80", badge: "New", sizes: ['S', 'M', 'L', 'XL'] },
    { id: 2, name: "Women's Summer Dress", price: 2499, category: "fashion", rating: 4.7, reviews: 96, image: "https://images.unsplash.com/photo-1529903384028-929ae4dcc8b3?q=80", badge: "Sale", sizes: ['S', 'M', 'L'] },
    { id: 3, name: "Designer Jeans", price: 2299, category: "fashion", rating: 4.3, reviews: 245, image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80", sizes: ['28', '30', '32', '34'] },
    { id: 4, name: "Leather Jacket", price: 5999, category: "fashion", rating: 4.8, reviews: 87, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80", badge: "Premium", sizes: ['S', 'M', 'L', 'XL'] },
    { id: 5, name: "Women's Handbag", price: 3499, category: "fashion", rating: 4.6, reviews: 142, image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80" },
    { id: 6, name: "Men's Formal Suit", price: 8499, oldPrice: 10999, category: "fashion", rating: 4.9, reviews: 78, image: "https://images.unsplash.com/photo-1598808503746-f34cfb6c2524?q=80", badge: "-20%", sizes: ['38', '40', '42', '44'] },
    { id: 7, name: "Women's High Heels", price: 2799, category: "fashion", rating: 4.2, reviews: 201, image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80", sizes: ['6', '7', '8', '9'] },
    { id: 8, name: "Unisex Sneakers", price: 3299, category: "fashion", rating: 4.5, reviews: 112, image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?q=80", sizes: ['6', '7', '8', '9', '10'] },
    { id: 9, name: "Designer Sunglasses", price: 1999, oldPrice: 2599, category: "fashion", rating: 4.4, reviews: 189, image: "https://images.unsplash.com/photo-1577803645773-f96470509666?q=80", badge: "Sale" },
    { id: 10, name: "Women's Winter Coat", price: 4999, category: "fashion", rating: 4.7, reviews: 94, image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80", sizes: ['S', 'M', 'L'] },
    { id: 11, name: "Men's Sportswear Set", price: 2999, category: "fashion", rating: 4.3, reviews: 67, image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80", sizes: ['S', 'M', 'L', 'XL'] },
    { id: 12, name: "Designer Watch", price: 8999, category: "fashion", rating: 4.9, reviews: 123, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80", badge: "Luxury" },
    { id: 13, name: "Women's Jewelry Set", price: 4599, category: "fashion", rating: 4.8, reviews: 56, image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80" },
    { id: 14, name: "Men's Casual Shoes", price: 2499, oldPrice: 3299, category: "fashion", rating: 4.1, reviews: 88, image: "https://images.unsplash.com/photo-1605812860427-4024433a70fd?q=80", badge: "-25%", sizes: ['8', '9', '10', '11'] },
    { id: 15, name: "Kids T-Shirt Pack", price: 1499, category: "fashion", rating: 4.6, reviews: 45, image: "https://images.unsplash.com/photo-1609505848916-c9f6f4bd0b57?q=80", sizes: ['3-4', '5-6', '7-8'] },
    { id: 16, name: "Designer Handbag", price: 6999, category: "fashion", rating: 4.9, reviews: 167, image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80" },
    { id: 17, name: "Women's Leggings", price: 1299, category: "fashion", rating: 4.4, reviews: 102, image: "https://images.unsplash.com/photo-1609505848916-c9f6f4bd0b57?q=80", sizes: ['S', 'M', 'L'] },
    { id: 18, name: "Men's Wallet", price: 1799, category: "fashion", rating: 4.3, reviews: 73, image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80" },
    { id: 19, name: "Women's Scarf Set", price: 999, oldPrice: 1499, category: "fashion", rating: 4.5, reviews: 134, image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80", badge: "-33%" },
    { id: 20, name: "Designer Belt", price: 1999, category: "fashion", rating: 4.2, reviews: 89, image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80", sizes: ['30', '32', '34', '36'] },
    { id: 21, name: "Men's Polo Shirt", price: 1299, category: "fashion", rating: 4.4, reviews: 112, image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80", sizes: ['S', 'M', 'L', 'XL', 'XXL'] },
    { id: 22, name: "Women's Blouse", price: 1799, category: "fashion", rating: 4.3, reviews: 87, image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?q=80", sizes: ['XS', 'S', 'M', 'L'] },
    { id: 23, name: "Men's Slim Fit Jeans", price: 2499, category: "fashion", rating: 4.5, reviews: 156, image: "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80", sizes: ['30', '32', '34', '36', '38'] },
    { id: 24, name: "Women's Cardigan", price: 1899, category: "fashion", rating: 4.2, reviews: 78, image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80", badge: "New", sizes: ['S', 'M', 'L', 'XL'] },
    { id: 25, name: "Men's Hoodie", price: 1999, category: "fashion", rating: 4.6, reviews: 203, image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80", sizes: ['S', 'M', 'L', 'XL', 'XXL'] },
    { id: 26, name: "Women's Yoga Pants", price: 1599, category: "fashion", rating: 4.7, reviews: 167, image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?q=80", sizes: ['XS', 'S', 'M', 'L'] },
    { id: 27, name: "Men's Blazer", price: 4999, category: "fashion", rating: 4.8, reviews: 92, image: "https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?q=80", badge: "Premium", sizes: ['38', '40', '42', '44', '46'] },
    { id: 28, name: "Women's Maxi Dress", price: 2799, category: "fashion", rating: 4.4, reviews: 124, image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80", sizes: ['S', 'M', 'L', 'XL'] },
    { id: 29, name: "Men's Cargo Pants", price: 1899, category: "fashion", rating: 4.1, reviews: 86, image: "https://images.unsplash.com/photo-1517438476312-10d79c077509?q=80", sizes: ['30', '32', '34', '36', '38'] },
    { id: 30, name: "Women's Denim Jacket", price: 2499, oldPrice: 2999, category: "fashion", rating: 4.5, reviews: 143, image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80", badge: "-17%", sizes: ['XS', 'S', 'M', 'L', 'XL'] },
    { id: 31, name: "Men's V-Neck T-Shirt", price: 899, category: "fashion", rating: 4.3, reviews: 178, image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?q=80", sizes: ['S', 'M', 'L', 'XL', 'XXL'] },
    { id: 32, name: "Women's Pencil Skirt", price: 1699, category: "fashion", rating: 4.6, reviews: 97, image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80", sizes: ['XS', 'S', 'M', 'L'] },
    { id: 33, name: "Men's Denim Shirt", price: 1799, category: "fashion", rating: 4.4, reviews: 112, image: "https://images.unsplash.com/photo-1589310243389-96a5483213a8?q=80", sizes: ['S', 'M', 'L', 'XL'] },
    { id: 34, name: "Women's Crop Top", price: 999, category: "fashion", rating: 4.2, reviews: 87, image: "https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?q=80", badge: "Hot", sizes: ['XS', 'S', 'M', 'L'] },
    { id: 35, name: "Men's Chino Shorts", price: 1299, category: "fashion", rating: 4.3, reviews: 76, image: "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?q=80", sizes: ['30', '32', '34', '36', '38'] },
    { id: 36, name: "Women's Jumpsuit", price: 2999, category: "fashion", rating: 4.7, reviews: 134, image: "https://images.unsplash.com/photo-1529903384028-929ae4dcc8b3?q=80", sizes: ['XS', 'S', 'M', 'L'] },
    { id: 37, name: "Men's Sweater", price: 2199, category: "fashion", rating: 4.5, reviews: 98, image: "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?q=80", sizes: ['S', 'M', 'L', 'XL', 'XXL'] },
    { id: 38, name: "Women's Palazzo Pants", price: 1899, category: "fashion", rating: 4.4, reviews: 87, image: "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?q=80", sizes: ['S', 'M', 'L', 'XL'] },
    { id: 39, name: "Men's Track Pants", price: 1499, category: "fashion", rating: 4.2, reviews: 112, image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?q=80", sizes: ['S', 'M', 'L', 'XL', 'XXL'] },
    { id: 40, name: "Women's Tunic Top", price: 1299, category: "fashion", rating: 4.3, reviews: 76, image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?q=80", sizes: ['XS', 'S', 'M', 'L', 'XL'] },
    { id: 41, name: "Men's Linen Shirt", price: 1899, category: "fashion", rating: 4.6, reviews: 89, image: "https://images.unsplash.com/photo-1598032895397-b9472444bf93?q=80", badge: "Summer", sizes: ['S', 'M', 'L', 'XL'] },
    { id: 42, name: "Women's Denim Shorts", price: 1199, category: "fashion", rating: 4.4, reviews: 123, image: "https://images.unsplash.com/photo-1591347887817-173e3d3ce731?q=80", sizes: ['XS', 'S', 'M', 'L'] },
    { id: 43, name: "Men's Bomber Jacket", price: 3499, category: "fashion", rating: 4.7, reviews: 87, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80", sizes: ['S', 'M', 'L', 'XL'] },
    { id: 44, name: "Women's Wrap Dress", price: 2499, category: "fashion", rating: 4.5, reviews: 98, image: "https://images.unsplash.com/photo-1529903384028-929ae4dcc8b3?q=80", sizes: ['XS', 'S', 'M', 'L'] },
    { id: 45, name: "Men's Henley Shirt", price: 1299, category: "fashion", rating: 4.3, reviews: 76, image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?q=80", sizes: ['S', 'M', 'L', 'XL', 'XXL'] },
    { id: 46, name: "Women's Bodycon Dress", price: 1999, category: "fashion", rating: 4.4, reviews: 112, image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80", badge: "Trending", sizes: ['XS', 'S', 'M', 'L'] },
    { id: 47, name: "Men's Puffer Jacket", price: 3999, category: "fashion", rating: 4.6, reviews: 87, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80", sizes: ['S', 'M', 'L', 'XL', 'XXL'] },
    { id: 48, name: "Women's Turtleneck Sweater", price: 1899, category: "fashion", rating: 4.5, reviews: 98, image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80", sizes: ['XS', 'S', 'M', 'L', 'XL'] },
    { id: 49, name: "Men's Flannel Shirt", price: 1599, category: "fashion", rating: 4.4, reviews: 123, image: "https://images.unsplash.com/photo-1589310243389-96a5483213a8?q=80", sizes: ['S', 'M', 'L', 'XL', 'XXL'] },
    { id: 50, name: "Women's Midi Skirt", price: 1799, category: "fashion", rating: 4.3, reviews: 87, image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80", sizes: ['XS', 'S', 'M', 'L'] },
    { id: 51, name: "Men's Graphic T-Shirt", price: 999, category: "fashion", rating: 4.2, reviews: 145, image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?q=80", badge: "New", sizes: ['S', 'M', 'L', 'XL', 'XXL'] },
    { id: 52, name: "Women's Off-Shoulder Top", price: 1399, category: "fashion", rating: 4.5, reviews: 98, image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?q=80", sizes: ['XS', 'S', 'M', 'L'] },
    { id: 53, name: "Men's Ripped Jeans", price: 2299, category: "fashion", rating: 4.3, reviews: 112, image: "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80", sizes: ['30', '32', '34', '36', '38'] },
    { id: 54, name: "Women's Peplum Top", price: 1599, category: "fashion", rating: 4.4, reviews: 87, image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?q=80", sizes: ['XS', 'S', 'M', 'L'] },
    { id: 55, name: "Men's Quilted Jacket", price: 2999, category: "fashion", rating: 4.6, reviews: 76, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80", sizes: ['S', 'M', 'L', 'XL'] },
    { id: 56, name: "Women's Culotte Pants", price: 1899, category: "fashion", rating: 4.3, reviews: 98, image: "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?q=80", sizes: ['XS', 'S', 'M', 'L'] },
    { id: 57, name: "Men's Oxford Shirt", price: 1799, category: "fashion", rating: 4.5, reviews: 123, image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80", badge: "Classic", sizes: ['S', 'M', 'L', 'XL', 'XXL'] },
    { id: 58, name: "Women's Shift Dress", price: 2199, category: "fashion", rating: 4.4, reviews: 87, image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80", sizes: ['XS', 'S', 'M', 'L', 'XL'] },
    { id: 59, name: "Men's Corduroy Pants", price: 2099, category: "fashion", rating: 4.2, reviews: 76, image: "https://images.unsplash.com/photo-1517438476312-10d79c077509?q=80", sizes: ['30', '32', '34', '36', '38'] },
    { id: 60, name: "Women's Ruffled Blouse", price: 1499, category: "fashion", rating: 4.3, reviews: 98, image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?q=80", sizes: ['XS', 'S', 'M', 'L'] },
    { id: 61, name: "Men's Varsity Jacket", price: 3299, category: "fashion", rating: 4.5, reviews: 87, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80", badge: "Trending", sizes: ['S', 'M', 'L', 'XL'] },
    { id: 62, name: "Women's A-Line Skirt", price: 1699, category: "fashion", rating: 4.4, reviews: 76, image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80", sizes: ['XS', 'S', 'M', 'L'] },
    { id: 63, name: "Men's Striped Shirt", price: 1399, category: "fashion", rating: 4.3, reviews: 98, image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80", sizes: ['S', 'M', 'L', 'XL', 'XXL'] },
    { id: 64, name: "Women's Bell Sleeve Top", price: 1599, category: "fashion", rating: 4.2, reviews: 87, image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?q=80", sizes: ['XS', 'S', 'M', 'L'] },
    { id: 65, name: "Men's Distressed Jeans", price: 2399, category: "fashion", rating: 4.4, reviews: 123, image: "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80", sizes: ['30', '32', '34', '36', '38'] },
    { id: 66, name: "Women's Cold Shoulder Top", price: 1299, category: "fashion", rating: 4.3, reviews: 98, image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?q=80", badge: "Sale", sizes: ['XS', 'S', 'M', 'L'] },
    { id: 67, name: "Men's Windbreaker", price: 2499, category: "fashion", rating: 4.5, reviews: 87, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80", sizes: ['S', 'M', 'L', 'XL', 'XXL'] },
    { id: 68, name: "Women's Pleated Skirt", price: 1799, category: "fashion", rating: 4.4, reviews: 76, image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80", sizes: ['XS', 'S', 'M', 'L'] },
    { id: 69, name: "Men's Mandarin Collar Shirt", price: 1899, category: "fashion", rating: 4.6, reviews: 98, image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80", sizes: ['S', 'M', 'L', 'XL'] },
    { id: 70, name: "Women's Halter Neck Dress", price: 2299, category: "fashion", rating: 4.5, reviews: 87, image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80", sizes: ['XS', 'S', 'M', 'L'] },
    { id: 71, name: "Men's Plaid Shirt", price: 1599, category: "fashion", rating: 4.3, reviews: 123, image: "https://images.unsplash.com/photo-1589310243389-96a5483213a8?q=80", badge: "Classic", sizes: ['S', 'M', 'L', 'XL', 'XXL'] },
    { id: 72, name: "Women's High-Waisted Jeans", price: 2199, category: "fashion", rating: 4.7, reviews: 145, image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80", sizes: ['26', '28', '30', '32', '34'] },
    { id: 73, name: "Men's Turtleneck Sweater", price: 1999, category: "fashion", rating: 4.4, reviews: 87, image: "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?q=80", sizes: ['S', 'M', 'L', 'XL'] },
    { id: 74, name: "Women's Floral Dress", price: 2499, category: "fashion", rating: 4.5, reviews: 98, image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80", badge: "Summer", sizes: ['XS', 'S', 'M', 'L', 'XL'] },
    { id: 75, name: "Men's Slim Fit Trousers", price: 2299, category: "fashion", rating: 4.3, reviews: 76, image: "https://images.unsplash.com/photo-1517438476312-10d79c077509?q=80", sizes: ['30', '32', '34', '36', '38'] },
    { id: 76, name: "Women's Lace Top", price: 1699, category: "fashion", rating: 4.4, reviews: 87, image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?q=80", sizes: ['XS', 'S', 'M', 'L'] },
    { id: 77, name: "Men's Denim Jacket", price: 2799, category: "fashion", rating: 4.6, reviews: 123, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80", badge: "Vintage", sizes: ['S', 'M', 'L', 'XL', 'XXL'] },
    { id: 78, name: "Women's Culottes", price: 1899, category: "fashion", rating: 4.3, reviews: 76, image: "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?q=80", sizes: ['XS', 'S', 'M', 'L'] },
    { id: 79, name: "Men's Printed T-Shirt", price: 999, category: "fashion", rating: 4.2, reviews: 98, image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?q=80", sizes: ['S', 'M', 'L', 'XL', 'XXL'] },
    { id: 80, name: "Women's Bodysuit", price: 1499, category: "fashion", rating: 4.4, reviews: 87, image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?q=80", sizes: ['XS', 'S', 'M', 'L'] },
    { id: 81, name: "Men's Cargo Shorts", price: 1399, category: "fashion", rating: 4.1, reviews: 76, image: "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?q=80", badge: "Summer", sizes: ['30', '32', '34', '36', '38'] },
    { id: 82, name: "Women's Kimono", price: 1999, category: "fashion", rating: 4.5, reviews: 98, image: "https://images.unsplash.com/photo-1529903384028-929ae4dcc8b3?q=80", sizes: ['S/M', 'L/XL'] },
    { id: 83, name: "Men's Polo Sweater", price: 2299, category: "fashion", rating: 4.4, reviews: 87, image: "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?q=80", sizes: ['S', 'M', 'L', 'XL'] },
    { id: 84, name: "Women's Denim Skirt", price: 1599, category: "fashion", rating: 4.3, reviews: 123, image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80", sizes: ['XS', 'S', 'M', 'L'] },
    { id: 85, name: "Men's Shawl Collar Cardigan", price: 2499, category: "fashion", rating: 4.6, reviews: 76, image: "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?q=80", badge: "Premium", sizes: ['S', 'M', 'L', 'XL'] },
    { id: 86, name: "Women's Boyfriend Jeans", price: 2199, category: "fashion", rating: 4.4, reviews: 98, image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80", sizes: ['26', '28', '30', '32', '34'] },
    { id: 87, name: "Men's Utility Jacket", price: 2999, category: "fashion", rating: 4.5, reviews: 87, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80", sizes: ['S', 'M', 'L', 'XL', 'XXL'] },
    { id: 88, name: "Women's Puffer Vest", price: 1899, category: "fashion", rating: 4.3, reviews: 76, image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80", sizes: ['XS', 'S', 'M', 'L'] },
    { id: 89, name: "Men's Crewneck Sweatshirt", price: 1699, category: "fashion", rating: 4.4, reviews: 123, image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80", badge: "Cozy", sizes: ['S', 'M', 'L', 'XL', 'XXL'] },
    { id: 90, name: "Women's Trench Coat", price: 3999, category: "fashion", rating: 4.7, reviews: 87, image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80", sizes: ['XS', 'S', 'M', 'L', 'XL'] },
    { id: 91, name: "Men's Relaxed Fit Jeans", price: 1999, category: "fashion", rating: 4.3, reviews: 98, image: "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80", sizes: ['30', '32', '34', '36', '38', '40'] },
    { id: 92, name: "Women's Knit Sweater", price: 1799, category: "fashion", rating: 4.5, reviews: 76, image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80", badge: "Warm", sizes: ['XS', 'S', 'M', 'L'] },
    { id: 93, name: "Men's Checkered Shirt", price: 1499, category: "fashion", rating: 4.2, reviews: 87, image: "https://images.unsplash.com/photo-1589310243389-96a5483213a8?q=80", sizes: ['S', 'M', 'L', 'XL', 'XXL'] },
    { id: 94, name: "Women's Leather Skirt", price: 2499, category: "fashion", rating: 4.4, reviews: 98, image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80", badge: "Trending", sizes: ['XS', 'S', 'M', 'L'] },
    { id: 95, name: "Men's Zip-Up Hoodie", price: 1899, category: "fashion", rating: 4.5, reviews: 123, image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80", sizes: ['S', 'M', 'L', 'XL', 'XXL'] },
    { id: 96, name: "Women's Capri Pants", price: 1599, category: "fashion", rating: 4.3, reviews: 76, image: "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?q=80", sizes: ['XS', 'S', 'M', 'L'] },
    { id: 97, name: "Men's Thermal Henley", price: 1299, category: "fashion", rating: 4.4, reviews: 87, image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?q=80", badge: "Winter", sizes: ['S', 'M', 'L', 'XL'] },
    { id: 98, name: "Women's Sheath Dress", price: 2799, category: "fashion", rating: 4.6, reviews: 98, image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80", sizes: ['XS', 'S', 'M', 'L', 'XL'] },
    { id: 99, name: "Men's Twill Pants", price: 1999, category: "fashion", rating: 4.3, reviews: 76, image: "https://images.unsplash.com/photo-1517438476312-10d79c077509?q=80", sizes: ['30', '32', '34', '36', '38'] },
    { id: 100, name: "Women's Camisole", price: 899, category: "fashion", rating: 4.2, reviews: 87, image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?q=80", sizes: ['XS', 'S', 'M', 'L'] },
    { id: 101, name: "Men's Pea Coat", price: 4499, category: "fashion", rating: 4.7, reviews: 65, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80", badge: "Premium", sizes: ['S', 'M', 'L', 'XL'] },
    { id: 102, name: "Women's Poncho", price: 1799, category: "fashion", rating: 4.4, reviews: 78, image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80", sizes: ['S/M', 'L/XL'] },
    { id: 103, name: "Men's Muscle Fit T-Shirt", price: 1199, category: "fashion", rating: 4.3, reviews: 92, image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?q=80", badge: "Fitness", sizes: ['S', 'M', 'L', 'XL'] },
    { id: 104, name: "Women's Wrap Skirt", price: 1599, category: "fashion", rating: 4.5, reviews: 83, image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80", sizes: ['XS', 'S', 'M', 'L'] },
    { id: 105, name: "Men's Velvet Blazer", price: 4999, category: "fashion", rating: 4.8, reviews: 57, image: "https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?q=80", badge: "Luxury", sizes: ['38', '40', '42', '44', '46'] },
    { id: 106, name: "Women's Ruffle Dress", price: 2399, category: "fashion", rating: 4.4, reviews: 74, image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80", sizes: ['XS', 'S', 'M', 'L'] },
    { id: 107, name: "Men's Jogger Pants", price: 1699, category: "fashion", rating: 4.5, reviews: 118, image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?q=80", badge: "Comfort", sizes: ['S', 'M', 'L', 'XL', 'XXL'] },
    { id: 108, name: "Women's Bolero Jacket", price: 1899, category: "fashion", rating: 4.3, reviews: 62, image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80", sizes: ['XS', 'S', 'M', 'L'] },
    { id: 109, name: "Men's Tuxedo Shirt", price: 2299, category: "fashion", rating: 4.6, reviews: 48, image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80", badge: "Formal", sizes: ['S', 'M', 'L', 'XL'] },
    { id: 110, name: "Women's Harem Pants", price: 1799, category: "fashion", rating: 4.2, reviews: 86, image: "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?q=80", sizes: ['XS', 'S', 'M', 'L'] },
    { id: 111, name: "Men's Raglan Shirt", price: 1299, category: "fashion", rating: 4.3, reviews: 73, image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?q=80", sizes: ['S', 'M', 'L', 'XL', 'XXL'] },
    { id: 112, name: "Women's Peasant Blouse", price: 1499, category: "fashion", rating: 4.4, reviews: 91, image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?q=80", badge: "Boho", sizes: ['XS', 'S', 'M', 'L'] },
    { id: 113, name: "Men's Sherpa Jacket", price: 3299, category: "fashion", rating: 4.7, reviews: 67, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80", badge: "Winter", sizes: ['S', 'M', 'L', 'XL'] },
    { id: 114, name: "Women's Tennis Skirt", price: 1399, category: "fashion", rating: 4.5, reviews: 82, image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80", badge: "Sport", sizes: ['XS', 'S', 'M', 'L'] },
    { id: 115, name: "Men's Pinstripe Shirt", price: 1899, category: "fashion", rating: 4.4, reviews: 58, image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80", badge: "Business", sizes: ['S', 'M', 'L', 'XL', 'XXL'] },
    { id: 116, name: "Women's Tiered Dress", price: 2599, category: "fashion", rating: 4.6, reviews: 74, image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80", sizes: ['XS', 'S', 'M', 'L'] },
    { id: 117, name: "Men's Fleece Pullover", price: 1799, category: "fashion", rating: 4.3, reviews: 93, image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80", badge: "Cozy", sizes: ['S', 'M', 'L', 'XL', 'XXL'] },
    { id: 118, name: "Women's Cigarette Pants", price: 1999, category: "fashion", rating: 4.5, reviews: 68, image: "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?q=80", sizes: ['XS', 'S', 'M', 'L'] },
    { id: 119, name: "Men's Anorak Jacket", price: 2799, category: "fashion", rating: 4.4, reviews: 57, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80", badge: "Outdoor", sizes: ['S', 'M', 'L', 'XL'] },
    { id: 120, name: "Women's Slip Dress", price: 1899, category: "fashion", rating: 4.3, reviews: 81, image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80", sizes: ['XS', 'S', 'M', 'L'] }
];

// Shopping cart
let cart = [];
let wishlist = [];
let currentUser = null;
let orders = [];
let currentOrder = null;
let users = []; // Initialize users array

// DOM elements
const productGrid = document.getElementById('productGrid');
const cartIcon = document.getElementById('cartIcon');
const cartSidebar = document.getElementById('cartSidebar');
const closeCart = document.getElementById('closeCart');
const cartBackBtn = document.getElementById('cartBackBtn');
const overlay = document.getElementById('overlay');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const cartCount = document.querySelector('.cart-count');
const wishlistCount = document.querySelector('.wishlist-count');
const wishlistIcon = document.getElementById('wishlistIcon');
const filterBtns = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('searchInput');
const toast = document.getElementById('toast');
const profileIcon = document.getElementById('profileIcon');
const authModal = document.getElementById('authModal');
const closeAuthModal = document.getElementById('closeAuthModal');
const loginTab = document.getElementById('loginTab');
const registerTab = document.getElementById('registerTab');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const checkoutBtn = document.getElementById('checkoutBtn');
const addressModal = document.getElementById('addressModal');
const closeAddressModal = document.getElementById('closeAddressModal');
const validateAddressContinueBtn = document.getElementById('validateAddressContinueBtn');
const paymentModal = document.getElementById('paymentModal');
const closePaymentModal = document.getElementById('closePaymentModal');
const placeOrderBtn = document.getElementById('placeOrderBtn');
const confirmationModal = document.getElementById('confirmationModal');
const closeConfirmationModal = document.getElementById('closeConfirmationModal');
const downloadInvoiceBtn = document.getElementById('downloadInvoiceBtn');
const continueShoppingBtn = document.getElementById('continueShoppingBtn');
const orderIdPlaceholder = document.getElementById('orderIdPlaceholder');

// Profile Sidebar Elements
const profileSidebar = document.getElementById('profileSidebar');
const closeProfileSidebar = document.getElementById('closeProfileSidebar');
const profileSidebarItems = document.querySelectorAll('.profile-sidebar-item');
const sidebarUserName = document.getElementById('sidebarUserName');
const sidebarUserEmail = document.getElementById('sidebarUserEmail');

// Address Modal Elements
const shippingStateSelect = document.getElementById('shippingState');
const billingStateSelect = document.getElementById('billingState');
const sameAsShippingCheckbox = document.getElementById('sameAsShipping');
const billingSection = document.getElementById('billingSection');

// New DOM elements for address selection/form
const savedAddressesContainer = document.getElementById('savedAddressesContainer');
const addressFormContainer = document.getElementById('addressFormContainer');
const addNewAddressFormBtn = document.getElementById('addNewAddressFormBtn');
const saveAsDefaultCheckbox = document.getElementById('saveAsDefault');


// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    loadUserData();
    renderProducts(products);
    updateCartCount();
    updateWishlistCount();

    // Event listeners
    cartIcon.addEventListener('click', openCart);
    closeCart.addEventListener('click', closeCartHandler);
    if (cartBackBtn) {
        cartBackBtn.addEventListener('click', closeCartHandler);
    }
    overlay.addEventListener('click', () => {
        closeCartHandler();
        closeProfileSidebarHandler();
        closeAuthModalHandler();
        closePaymentModalHandler();
        closeConfirmationModalHandler();
        // Ensure address modal is also closed if overlay is clicked
        addressModal.classList.remove('active');
    });
    
    wishlistIcon.addEventListener('click', () => {
        if (currentUser) {
            openProfileSidebar();
            showProfileSection('wishlist');
        } else {
            showToast('Please login to view your wishlist');
            toggleAuthModal();
        }
    });

    // Filter buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;
            filterProducts(filter);
        });
    });

    // Search functionality
    searchInput.addEventListener('input', enhancedHandleSearch); // Changed to enhancedHandleSearch

    // Auth functionality
    profileIcon.addEventListener('click', () => {
        if (currentUser) {
            openProfileSidebar();
        } else {
            toggleAuthModal();
        }
    });
    
    closeAuthModal.addEventListener('click', closeAuthModalHandler);
    loginTab.addEventListener('click', () => switchAuthTab('login'));
    registerTab.addEventListener('click', () => switchAuthTab('register'));
    loginBtn.addEventListener('click', loginUser);
    registerBtn.addEventListener('click', registerUser);
    
    // Modified checkout button listener to use enhancedCheckout
    checkoutBtn.removeEventListener('click', checkout); // Remove the old listener if it exists
    checkoutBtn.addEventListener('click', enhancedCheckout); // Add the new enhanced listener

    closePaymentModal.addEventListener('click', closePaymentModalHandler);
    placeOrderBtn.addEventListener('click', placeOrder);
    
    // Close address modal listener
    closeAddressModal.addEventListener('click', () => {
        addressModal.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    });

    sameAsShippingCheckbox.addEventListener('change', (e) => {
        billingSection.style.display = e.target.checked ? 'none' : 'block';
        if (e.target.checked) {
            // If checked, copy shipping to billing
            const shippingAddress = getAddressFromForm('shipping');
            populateAddressForm(shippingAddress, 'billing');
        }
    });

    // Populate billing states when shipping state changes or on load
    shippingStateSelect.addEventListener('change', () => {
        populateBillingStates(shippingStateSelect.value);
    });
    populateBillingStates(shippingStateSelect.value); // Initial population

    // **Crucial Change Here:**
    // This event listener now handles the transition from address validation to payment.
    validateAddressContinueBtn.addEventListener('click', handleAddressValidationAndProceed);
    
    // Event listener for "Add New Address" button in the address selection modal
    if (addNewAddressFormBtn) {
        addNewAddressFormBtn.addEventListener('click', showAddressFormForNewEntry);
    }

    // Order confirmation modal
    closeConfirmationModal.addEventListener('click', closeConfirmationModalHandler);
    downloadInvoiceBtn.addEventListener('click', downloadInvoiceHandler);
    continueShoppingBtn.addEventListener('click', continueShoppingHandler);

    // Profile sidebar navigation
    profileSidebarItems.forEach(item => {
        item.addEventListener('click', () => {
            if (item.id === 'logoutBtn') {
                logoutUser();
                return;
            }
            
            const section = item.dataset.section;
            if (section) {
                profileSidebarItems.forEach(i => i.classList.remove('active'));
                item.classList.add('active');
                showProfileSection(section);
            }
        });
    });
}); // End of DOMContentLoaded

// Helper to get address from form fields
function getAddressFromForm(prefix) {
    const val = (id, def='') => {
        const el = document.getElementById(`${prefix}${id}`);
        return el ? (el.value || '').trim() : def;
    };
    return {
        name: val('Name'),
        email: val('Email'),
        phone: val('Phone'),
        address1: val('Address1'),
        address2: val('Address2'),
        city: val('City'),
        state: val('State'),
        zip: val('Zip'),
        country: val('Country','India')
    };
}

// Helper to populate form fields with address data
function populateAddressForm(address, prefix) {
    const setVal = (id, value='') => {
        const el = document.getElementById(`${prefix}${id}`);
        if (el) el.value = value;
    };
    setVal('Name', address.name || '');
    setVal('Email', address.email || '');
    setVal('Phone', address.phone || '');
    setVal('Address1', address.address1 || '');
    setVal('Address2', address.address2 || '');
    setVal('City', address.city || '');
    setVal('State', address.state || '');
    setVal('Zip', address.zip || '');
    setVal('Country', address.country || 'India');
}

// Helper to compare two address objects
function isAddressEqual(addr1, addr2) {
    // Simple comparison, might need deeper logic for complex objects
    return JSON.stringify(addr1) === JSON.stringify(addr2);
}

// Populate billing states based on shipping states
function populateBillingStates(selectedShippingState) {
    if (!shippingStateSelect || !billingStateSelect) { return; }
    const shippingOptions = Array.from(shippingStateSelect.options).map(option => ({
        value: option.value,
        text: option.text
    }));

    billingStateSelect.innerHTML = ''; // Clear existing options

    shippingOptions.forEach(option => {
        const newOption = document.createElement('option');
        newOption.value = option.value;
        newOption.textContent = option.text;
        billingStateSelect.appendChild(newOption);
    });

    // Set selected state if available in billing address
    if (currentUser && currentUser.billing && currentUser.billing.state) {
        billingStateSelect.value = currentUser.billing.state;
    } else {
        billingStateSelect.value = selectedShippingState; // Default to shipping state
    }
}


// Render products with size selection
function renderProducts(productsToRender) {
    productGrid.innerHTML = '';

    productsToRender.forEach(product => {
        const isInWishlist = wishlist.includes(product.id);

        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
            <div class="product-img">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <div class="product-category">${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</div>
                <h3 class="product-title">${product.name}</h3>
                <div class="product-price">
                    ₹${product.price.toLocaleString()}
                    ${product.oldPrice ? `<span class="old-price">₹${product.oldPrice.toLocaleString()}</span>` : ''}
                </div>
                ${product.sizes ? `
                <div class="product-sizes">
                    <select class="size-select" data-id="${product.id}">
                        ${product.sizes.map(size => `<option value="${size}">${size}</option>`).join('')}
                    </select>
                </div>
                ` : ''}
                <div class="product-rating">
                    ${renderRating(product.rating)} (${product.reviews})
                </div>
                <div class="product-actions">
                    <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
                    <button class="wishlist" data-id="${product.id}">
                        <i class="${isInWishlist ? 'fas' : 'far'} fa-heart"></i>
                    </button>
                </div>
            </div>
        `;

        productGrid.appendChild(productCard);
    });

    // Add event listeners to buttons
    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', addToCart);
    });

    document.querySelectorAll('.wishlist').forEach(btn => {
        btn.addEventListener('click', toggleWishlist);
    });

    document.querySelectorAll('.product-title').forEach(title => {
        title.addEventListener('click', () => {
            const productId = title.closest('.product-card').querySelector('.add-to-cart').dataset.id;
            const product = products.find(p => p.id == productId);
            showProductDetails(product);
        });
    });
}

// Render rating stars
function renderRating(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }

    if (halfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }

    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }

    return stars;
}

// Add to cart with size selection
function addToCart(e) {
    const productId = parseInt(e.target.dataset.id);
    const product = products.find(p => p.id === productId);
    const sizeSelect = e.target.closest('.product-card').querySelector('.size-select');
     // If the product has sizes but no selection was made
     if (sizeSelect) {
        const size = sizeSelect.value;
        if (!size || size.trim() === "") {
            showToast("Please select a size before adding to cart");
            sizeSelect.focus();
            return; // Stop execution
        }
    }
    const size = sizeSelect ? sizeSelect.value : null;
     
    // Check if product is already in cart with same size
    const existingItem = cart.find(item => item.id === productId && (!size || item.size === size));

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1,
            image: product.image,
            size: size
        });
    }

    updateCartCount();
    showToast(`Item added to cart${size ? " (" + size + ")" : ""}!`);

    // If cart is open, update it
    if (cartSidebar.classList.contains('active')) {
        renderCartItems();
    }
}

// Toggle wishlist
function toggleWishlist(e) {
    if (!currentUser) {
        showToast('Please login to add items to wishlist');
        toggleAuthModal();
        return;
    }

    const productId = parseInt(e.target.closest('.wishlist').dataset.id);
    const index = wishlist.indexOf(productId);

    if (index === -1) {
        wishlist.push(productId);
        e.target.innerHTML = '<i class="fas fa-heart"></i>';
        e.target.style.color = 'var(--accent)';
        showToast('Added to wishlist!');
    } else {
        wishlist.splice(index, 1);
        e.target.innerHTML = '<i class="far fa-heart"></i>';
        e.target.style.color = '';
        showToast('Removed from wishlist');
    }

    updateWishlistCount();
}

// Update cart count
function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = count;
    localStorage.setItem('mm_cart', JSON.stringify(cart));
}

// Update wishlist count
function updateWishlistCount() {
    wishlistCount.textContent = wishlist.length;
    localStorage.setItem('mm_wishlist', JSON.stringify(wishlist));
}

// Open cart
function openCart() {
    cartSidebar.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    renderCartItems();
}

// Close cart
function closeCartHandler() {
    cartSidebar.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Render cart items with size information
function renderCartItems() {
    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; padding: 20px;">Your cart is empty</p>';
        cartTotal.textContent = '₹0.00';
        return;
    }

    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-img">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-details">
                <div class="cart-item-title">${item.name}</div>
                ${item.size ? `<div class="cart-item-size">Size: ${item.size}</div>` : ''}
                <div class="cart-item-price">₹${item.price.toLocaleString()}</div>
                <div class="cart-item-actions">
                    <div class="cart-item-quantity">
                        <button class="quantity-btn minus" data-id="${item.id}" data-size="${item.size || ''}">-</button>
                        <input type="number" class="quantity-input" value="${item.quantity}" min="1" data-id="${item.id}" data-size="${item.size || ''}">
                        <button class="quantity-btn plus" data-id="${item.id}" data-size="${item.size || ''}">+</button>
                    </div>
                    <button class="remove-item" data-id="${item.id}" data-size="${item.size || ''}" title="Remove item">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            </div>
        `;

        cartItems.appendChild(cartItem);
    });

    cartTotal.textContent = `₹${total.toLocaleString()}`;

    // Add event listeners to quantity controls
    document.querySelectorAll('.minus').forEach(btn => {
        btn.addEventListener('click', decreaseQuantity);
    });

    document.querySelectorAll('.plus').forEach(btn => {
        btn.addEventListener('click', increaseQuantity);
    });

    document.querySelectorAll('.quantity-input').forEach(input => {
        input.addEventListener('change', updateQuantity);
    });

    document.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', removeItem);
    });
}

// Decrease quantity
function decreaseQuantity(e) {
    const productId = parseInt(e.target.dataset.id);
    const size = e.target.dataset.size;
    const item = cart.find(item => item.id === productId && (!size || item.size === size));

    if (item.quantity > 1) {
        item.quantity--;
    } else {
        cart = cart.filter(item => !(item.id === productId && (!size || item.size === size)));
        showToast('Item removed from cart');
    }

    updateCartCount();
    renderCartItems();
}

// Increase quantity
function increaseQuantity(e) {
    const productId = parseInt(e.target.dataset.id);
    const size = e.target.dataset.size;
    const item = cart.find(item => item.id === productId && (!size || item.size === size));
    item.quantity++;
    updateCartCount();
    renderCartItems();
}

// Update quantity
function updateQuantity(e) {
    const productId = parseInt(e.target.dataset.id);
    const size = e.target.dataset.size;
    const item = cart.find(item => item.id === productId && (!size || item.size === size));
    const newQuantity = parseInt(e.target.value) || 1;

    if (newQuantity < 1) {
        item.quantity = 1;
        e.target.value = 1;
    } else {
        item.quantity = newQuantity;
    }

    updateCartCount();
    renderCartItems();
}

// Remove item
function removeItem(e) {
    const productId = parseInt(e.target.closest('.remove-item').dataset.id);
    const size = e.target.closest('.remove-item').dataset.size;
    cart = cart.filter(item => !(item.id === productId && (!size || item.size === size)));
    updateCartCount();
    renderCartItems();
    showToast('Item removed from cart');
}

// Filter products
function filterProducts(category) {
    if (category === 'all') {
        renderProducts(products);
        return;
    }

    const filteredProducts = products.filter(product => product.category === category);
    renderProducts(filteredProducts);
}

// Show product details (simulated)



// Show toast notification
function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// User Authentication Functions
function toggleAuthModal() {
    authModal.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeAuthModalHandler() {
    authModal.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

function closePaymentModalHandler() {
    paymentModal.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

function closeConfirmationModalHandler() {
    confirmationModal.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

function switchAuthTab(tab) {
    loginTab.classList.toggle('active', tab === 'login');
    registerTab.classList.toggle('active', tab === 'register');
    loginForm.classList.toggle('active', tab === 'login');
    registerForm.classList.toggle('active', tab === 'register');
}

function loadUserData() {
    const storedUsers = localStorage.getItem('mm_users');
    const storedCurrentUser = localStorage.getItem('mm_currentUser');
    const storedOrders = localStorage.getItem('mm_orders');
    const storedCart = localStorage.getItem('mm_cart');
    const storedWishlist = localStorage.getItem('mm_wishlist');

    if (storedUsers) {
        users = JSON.parse(storedUsers);
    }

    if (storedCurrentUser) {
        currentUser = JSON.parse(storedCurrentUser);
        updateSidebarUserInfo();
    }

    if (storedOrders) {
        orders = JSON.parse(storedOrders);
    }

    if (storedCart) {
        cart = JSON.parse(storedCart);
        updateCartCount();
    }

    if (storedWishlist) {
        wishlist = JSON.parse(storedWishlist);
        updateWishlistCount();
    }
}

function saveUserData() {
    localStorage.setItem('mm_currentUser', JSON.stringify(currentUser));
    localStorage.setItem('mm_orders', JSON.stringify(orders));
    localStorage.setItem('mm_cart', JSON.stringify(cart));
    localStorage.setItem('mm_wishlist', JSON.stringify(wishlist));
    localStorage.setItem('mm_users', JSON.stringify(users)); // Ensure users array is saved
}

function registerUser() {
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const address = document.getElementById('registerAddress').value;
    const phone = document.getElementById('registerPhone').value;

    // Simple validation
    if (!name || !email || !password || !address || !phone) {
        showToast('Please fill all fields');
        return;
    }

    // Check if user already exists
    if (users.find(user => user.email === email)) {
        showToast('Email already registered');
        return;
    }

    // Create new user
    const newUser = {
        id: Date.now(),
        name,
        email,
        password,
        address, // This is the primary address, but we'll also use `addresses` array
        phone,
        createdAt: new Date().toISOString(),
        addresses: [] // Initialize addresses array for the new user
    };

    // Add the initial address to the addresses array
    newUser.addresses.push({
        id: Date.now(), // Assign an ID to the initial address
        name, email, phone,
        address1: address, // Assuming registerAddress is address1
        address2: '', // No address2 from registration form
        city: '', state: '', zip: '', country: 'India', // No detailed address from registration form
        isDefault: true, // Make the first address default
        type: 'shipping' // Assume initial address is for shipping
    });

    users.push(newUser);
    saveUserData(); // Save the updated users array

    // Auto-login the new user
    currentUser = newUser;
    saveUserData(); // Save currentUser
    updateSidebarUserInfo();

    showToast('Registration successful!');
    closeAuthModalHandler();
}

function loginUser() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    if (!users || users.length === 0) {
        showToast('No users registered yet');
        return;
    }

    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        currentUser = user;
        saveUserData();
        updateSidebarUserInfo();
        showToast(`Welcome back, ${user.name.split(' ')[0]}!`);
        closeAuthModalHandler();
    } else {
        showToast('Invalid email or password');
    }
}

function logoutUser() {
    currentUser = null;
    saveUserData();
    showToast('Logged out successfully');
    closeProfileSidebarHandler();
}

// Open profile sidebar
function openProfileSidebar() {
    if (!profileSidebar) return;
    
    profileSidebar.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Update user info in sidebar
    updateSidebarUserInfo();
    
    // Load dashboard by default
    showProfileSection('dashboard');
}

// Close profile sidebar
function closeProfileSidebarHandler() {
    if (!profileSidebar) return;
    
    profileSidebar.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

function updateSidebarUserInfo() {
    if (currentUser && sidebarUserName && sidebarUserEmail) {
        sidebarUserName.textContent = `Welcome, ${currentUser.name}`;
        sidebarUserEmail.textContent = currentUser.email;
    }
}

function showProfileSection(sectionName) {
    // Hide all sections
    const allSections = document.querySelectorAll('.profile-content-section');
    allSections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Show selected section
    const targetSection = document.getElementById(sectionName + 'Section');
    if (targetSection) {
        targetSection.classList.add('active');
        
        // Load section-specific data
        switch(sectionName) {
            case 'dashboard':
                loadDashboardData();
                break;
            case 'passwordReset':
                loadPasswordResetSection();
                break;
            case 'accountSettings':
                loadAccountSettingsData();
                break;
            case 'siteAnalytics':
                loadSiteAnalytics();
                break;
            case 'addressValidation':
                loadAddressValidation();
                break;
            case 'orderHistory':
                loadSidebarOrderHistory();
                break;
            case 'wishlist':
                loadSidebarWishlist();
                break;
        }
    }
}

function loadDashboardData() {
    if (!currentUser) return;
    
    // Load dashboard statistics
    const orders = JSON.parse(localStorage.getItem('mm_orders') || '[]');
    const userOrders = orders.filter(order => order.userId === currentUser.id);
    const totalSpent = userOrders.reduce((sum, order) => sum + order.total, 0);
    
    // Update stats
    const totalOrdersEl = document.getElementById('totalOrders');
    const totalWishlistEl = document.getElementById('totalWishlist');
    const totalSpentEl = document.getElementById('totalSpent');
    
    if (totalOrdersEl) totalOrdersEl.textContent = userOrders.length;
    if (totalWishlistEl) totalWishlistEl.textContent = wishlist.length;
    if (totalSpentEl) totalSpentEl.textContent = `₹${totalSpent.toFixed(2)}`;
    
    // Load recent activity
    loadRecentActivity();
}

function loadRecentActivity() {
    const recentActivityList = document.getElementById('recentActivityList');
    if (!recentActivityList || !currentUser) return;
    
    const orders = JSON.parse(localStorage.getItem('mm_orders') || '[]');
    const userOrders = orders.filter(order => order.userId === currentUser.id)
                           .sort((a, b) => new Date(b.date) - new Date(a.date))
                           .slice(0, 5);
    
    if (userOrders.length === 0) {
        recentActivityList.innerHTML = '<p>No recent activity</p>';
        return;
    }
    
    recentActivityList.innerHTML = userOrders.map(order => `
        <div class="activity-item">
            <div class="activity-icon">
                <i class="fas fa-shopping-bag"></i>
            </div>
            <div class="activity-details">
                <p><strong>Order #${order.id}</strong></p>
                <p>₹${order.total.toFixed(2)} • ${new Date(order.date).toLocaleDateString()}</p>
            </div>
            <div class="activity-status">
                <span class="status ${order.status}">${order.status}</span>
            </div>
        </div>
    `).join('');
}

function loadSidebarWishlist() {
    const sidebarWishlistItems = document.getElementById('sidebarWishlistItems');
    if (!sidebarWishlistItems) return;
    
    if (wishlist.length === 0) {
        sidebarWishlistItems.innerHTML = '<div class="empty-state"><p>Your wishlist is empty</p></div>';
        return;
    }
    
    const wishlistProducts = products.filter(product => wishlist.includes(product.id));
    
    sidebarWishlistItems.innerHTML = wishlistProducts.map(product => `
        <div class="wishlist-item">
            <img src="${product.image}" alt="${product.name}">
            <h4>${product.name}</h4>
            <div class="price">₹${product.price.toFixed(2)}</div>
            <div class="wishlist-actions">
                <button class="btn btn-sm" onclick="addToCartFromWishlist(${product.id})">Add to Cart</button>
                <button class="btn btn-outline btn-sm" onclick="removeFromWishlist(${product.id})">Remove</button>
            </div>
        </div>
    `).join('');
}

function addToCartFromWishlist(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const existingItem = cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: 1,
                image: product.image,
                size: product.sizes ? product.sizes[0] : null
            });
        }
        
        updateCartCount();
        showToast('Item added to cart!');
        
        if (cartSidebar.classList.contains('active')) {
            renderCartItems();
        }
    }
}

function removeFromWishlist(productId) {
    const index = wishlist.indexOf(productId);
    if (index > -1) {
        wishlist.splice(index, 1);
        updateWishlistCount();
        loadSidebarWishlist();
        showToast('Removed from wishlist');
    }
}

// Original checkout function (now replaced by enhancedCheckout)
function checkout() { // This function is now replaced by enhancedCheckout
    if (cart.length === 0) {
        showToast('Your cart is empty');
        return;
    }

  // Close cart sidebar if open
  cartSidebar.classList.remove('active');
    
  // Open address modal
  addressModal.classList.add('active');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function placeOrder() {
    if (cart.length === 0) {
        showToast('Your cart is empty');
        return;
    }

    if (!currentUser) {
        showToast('Please login to place order');
        return;
    }

    // Calculate total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    // Create order
    const order = {
        id: Date.now(),
        userId: currentUser.id,
        items: [...cart],
        total,
        date: new Date().toISOString(),
        status: 'Processing',
        paymentMethod: 'Cash on Delivery',
        shippingAddress: currentUser.shipping, // Save the selected shipping address
        billingAddress: currentUser.billing // Save the selected billing address
    };

    // Save order
    orders.push(order);
    currentOrder = order;

    // Clear the cart after successful order placement
    cart = [];
    updateCartCount();

    // Save user data after clearing cart
    saveUserData();

    // Show confirmation modal
    orderIdPlaceholder.textContent = `#${order.id}`;
    paymentModal.classList.remove('active');
    confirmationModal.classList.add('active');

    showToast('Order placed successfully!');
}

function downloadInvoiceHandler() {
    if (currentOrder) {
        generateInvoice(currentOrder);
    }
    closeConfirmationModalHandler();
}

function continueShoppingHandler() {
    closeConfirmationModalHandler();
    // Cart is already cleared in placeOrder function
    // Close any open modals
    cartSidebar.classList.remove('active');
    paymentModal.classList.remove('active');
    // Scroll to top
    window.scrollTo(0, 0);
}

function generateInvoice(order) {
    // Create a new jsPDF instance
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Add logo and title
    doc.setFontSize(22);
    doc.text('Mighty Mahal', 105, 20, null, null, 'center');
    doc.setFontSize(16);
    doc.text('Order Invoice', 105, 30, null, null, 'center');
    doc.setFontSize(10);
    doc.text(`Invoice #: ${order.id}`, 105, 40, null, null, 'center');
    doc.text(`Date: ${new Date(order.date).toLocaleDateString()}`, 105, 45, null, null, 'center');

    // Customer Information (using shipping address from order)
    doc.setFontSize(12);
    doc.text('Shipping Information:', 20, 60);
    doc.setFontSize(10);
    doc.text(`Name: ${order.shippingAddress.name}`, 20, 70);
    doc.text(`Email: ${order.shippingAddress.email}`, 20, 75);
    doc.text(`Phone: ${order.shippingAddress.phone}`, 20, 80);
    doc.text(`Address: ${order.shippingAddress.address1}, ${order.shippingAddress.address2 ? order.shippingAddress.address2 + ', ' : ''}${order.shippingAddress.city}, ${order.shippingAddress.state} - ${order.shippingAddress.zip}, ${order.shippingAddress.country}`, 20, 85);

    // Order details
    doc.setFontSize(12);
    doc.text('Order Details:', 20, 95);

    // Table header
    doc.setFillColor(44, 62, 80);
    doc.setTextColor(255, 255, 255);
    doc.rect(20, 100, 170, 10, 'F');
    doc.text('Product', 25, 106);
    doc.text('Size', 80, 106);
    doc.text('Price', 120, 106);
    doc.text('Qty', 150, 106);
    doc.text('Total', 170, 106);

    // Reset text color
    doc.setTextColor(0, 0, 0);

    // Order items
    let y = 115;
    order.items.forEach(item => {
        doc.text(item.name, 25, y);
        doc.text(item.size || '-', 80, y);
        doc.text(`₹${item.price.toLocaleString()}`, 120, y);
        doc.text(item.quantity.toString(), 150, y);
        doc.text(`₹${(item.price * item.quantity).toLocaleString()}`, 170, y);
        y += 7;
    });

    // Order summary
    doc.setFontSize(12);
    doc.text(`Subtotal: ₹${order.total.toLocaleString()}`, 150, y + 10);
    doc.text(`Tax: ₹${(order.total * 0.18).toLocaleString()}`, 150, y + 20);
    doc.text(`Shipping: ₹0.00`, 150, y + 30);
    doc.text(`Grand Total: ₹${(order.total * 1.18).toLocaleString()}`, 150, y + 40);

    // Payment method
    doc.text(`Payment Method: ${order.paymentMethod}`, 20, y + 50);

    // Save the PDF
    doc.save(`invoice-${order.id}.pdf`);
}




// Helper functions for other sections (simplified implementations)









// Password Reset Section Implementation
function loadPasswordResetSection() {
    const currentPasswordReset = document.getElementById('currentPasswordReset');
    const newPasswordReset = document.getElementById('newPasswordReset');
    const confirmPasswordReset = document.getElementById('confirmPasswordReset');
    const resetPasswordBtn = document.getElementById('resetPasswordBtn');
    const passwordStrength = document.getElementById('passwordStrength');
    const reqLength = document.getElementById('req-length');
    const reqUppercase = document.getElementById('req-uppercase');
    const reqLowercase = document.getElementById('req-lowercase');
    const reqNumber = document.getElementById('req-number');
    const reqSpecial = document.getElementById('req-special');

    // Password strength checker
    newPasswordReset.addEventListener('input', () => {
        const password = newPasswordReset.value;
        let strength = 0;
        
        // Check length
        if (password.length >= 8) {
            strength++;
            reqLength.classList.add('valid');
        } else {
            reqLength.classList.remove('valid');
        }
        
        // Check uppercase
        if (/[A-Z]/.test(password)) {
            strength++;
            reqUppercase.classList.add('valid');
        } else {
            reqUppercase.classList.remove('valid');
        }
        
        // Check lowercase
        if (/[a-z]/.test(password)) {
            strength++;
            reqLowercase.classList.add('valid');
        } else {
            reqLowercase.classList.remove('valid');
        }
        
        // Check number
        if (/\d/.test(password)) {
            strength++;
            reqNumber.classList.add('valid');
        } else {
            reqNumber.classList.remove('valid');
        }
        
        // Check special character
        if (/[^A-Za-z0-9]/.test(password)) {
            strength++;
            reqSpecial.classList.add('valid');
        } else {
            reqSpecial.classList.remove('valid');
        }
        
        // Update strength meter
        passwordStrength.className = 'password-strength';
        if (password.length > 0) {
            if (strength < 3) {
                passwordStrength.classList.add('weak');
            } else if (strength < 5) {
                passwordStrength.classList.add('medium');
            } else {
                passwordStrength.classList.add('strong');
            }
        }
    });

    resetPasswordBtn.addEventListener('click', () => {
        if (!currentUser) {
            showToast('Please login to change password');
            return;
        }

        if (!currentPasswordReset.value || !newPasswordReset.value || !confirmPasswordReset.value) {
            showToast('Please fill all fields');
            return;
        }

        if (currentPasswordReset.value !== currentUser.password) {
            showToast('Current password is incorrect');
            return;
        }

        if (newPasswordReset.value !== confirmPasswordReset.value) {
            showToast('New passwords do not match');
            return;
        }

        // Check password strength
        const password = newPasswordReset.value;
        if (password.length < 8 || !/[A-Z]/.test(password) || 
            !/[a-z]/.test(password) || !/\d/.test(password) || 
            !/[^A-Za-z0-9]/.test(password)) {
            showToast('Password does not meet requirements');
            return;
        }

        // Update password
        currentUser.password = newPasswordReset.value;
        
        // Update in users array
        const userIndex = users.findIndex(u => u.id === currentUser.id);
        if (userIndex !== -1) {
            users[userIndex] = currentUser;
            saveUserData();
            
            // Clear fields
            currentPasswordReset.value = '';
            newPasswordReset.value = '';
            confirmPasswordReset.value = '';
            passwordStrength.className = 'password-strength';
            
            showToast('Password changed successfully');
        }
    });
}

// Account Settings Implementation
function loadAccountSettingsData() {
    if (!currentUser) return;

    // Personal Info Tab
    const settingsName = document.getElementById('settingsName');
    const settingsEmail = document.getElementById('settingsEmail');
    const settingsPhone = document.getElementById('settingsPhone');
    const settingsDOB = document.getElementById('settingsDOB');
    const settingsAddress = document.getElementById('settingsAddress');
    const savePersonalSettings = document.getElementById('savePersonalSettings');

    // Set current values
    settingsName.value = currentUser.name;
    settingsEmail.value = currentUser.email;
    settingsPhone.value = currentUser.phone || '';
    settingsDOB.value = currentUser.dob || '';
    settingsAddress.value = currentUser.address || '';

    savePersonalSettings.addEventListener('click', () => {
        if (!settingsName.value || !settingsPhone.value || !settingsAddress.value) {
            showToast('Please fill all required fields');
            return;
        }

        currentUser.name = settingsName.value;
        currentUser.phone = settingsPhone.value;
        currentUser.dob = settingsDOB.value;
        currentUser.address = settingsAddress.value;

        // Update in users array
        const userIndex = users.findIndex(u => u.id === currentUser.id);
        if (userIndex !== -1) {
            users[userIndex] = currentUser;
            saveUserData();
            updateSidebarUserInfo();
            showToast('Profile updated successfully');
        }
    });

    // Notifications Tab
    const saveNotificationBtn = document.getElementById('saveNotificationBtn');
    saveNotificationBtn.addEventListener('click', () => {
        const emailOrderUpdates = document.getElementById('emailOrderUpdates').checked;
        const emailPromotions = document.getElementById('emailPromotions').checked;
        const emailNewsletter = document.getElementById('emailNewsletter').checked;
        const smsOrderUpdates = document.getElementById('smsOrderUpdates').checked;
        const smsDelivery = document.getElementById('smsDelivery').checked;

        // Save notification preferences
        currentUser.notifications = {
            emailOrderUpdates,
            emailPromotions,
            emailNewsletter,
            smsOrderUpdates,
            smsDelivery
        };

        saveUserData();
        showToast('Notification preferences saved');
    });

    // Privacy Tab
    const savePrivacySettings = document.getElementById('savePrivacySettings');
    savePrivacySettings.addEventListener('click', () => {
        const profileVisibility = document.getElementById('profileVisibility').value;
        const allowDataCollection = document.getElementById('allowDataCollection').checked;
        const allowMarketing = document.getElementById('allowMarketing').checked;

        // Save privacy settings
        currentUser.privacy = {
            profileVisibility,
            allowDataCollection,
            allowMarketing
        };

        saveUserData();
        showToast('Privacy settings saved');
    });

    // Security Tab
    const enable2FA = document.getElementById('enable2FA');
    const viewSessions = document.getElementById('viewSessions');
    const deleteAccountSidebar = document.getElementById('deleteAccountSidebar');

    enable2FA.addEventListener('click', () => {
        showToast('Two-factor authentication setup will be sent to your email');
    });

    viewSessions.addEventListener('click', () => {
        showToast('Active sessions will be displayed here');
    });

    deleteAccountSidebar.addEventListener('click', () => {
        if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
            // Remove user from users array
            const userIndex = users.findIndex(u => u.id === currentUser.id);
            if (userIndex !== -1) {
                users.splice(userIndex, 1); // Remove the user
                
                // Clear user data
                currentUser = null;
                cart = [];
                wishlist = [];
                orders = orders.filter(order => order.userId !== currentUser.id); // Remove user's orders
                saveUserData();
                updateCartCount();
                updateWishlistCount();
                closeProfileSidebarHandler();
                showToast('Account deleted successfully');
            }
        }
    });
}

// Site Analytics Implementation
function loadSiteAnalytics() {
    if (!currentUser) return;

    // Simulate analytics data
    const totalVisits = document.getElementById('totalVisits');
    const avgSessionTime = document.getElementById('avgSessionTime');
    const pagesViewed = document.getElementById('pagesViewed');

    // Generate random data for demo purposes
    totalVisits.textContent = Math.floor(Math.random() * 100) + 20;
    avgSessionTime.textContent = Math.floor(Math.random() * 10) + 2 + ' min';
    pagesViewed.textContent = Math.floor(Math.random() * 30) + 5;

    // Update shopping chart data
    const shoppingChart = document.getElementById('shoppingChart');
    const categories = ['Electronics', 'Fashion', 'Home & Kitchen', 'Beauty', 'Books'];
    shoppingChart.innerHTML = '';

    categories.forEach(category => {
        const percentage = Math.floor(Math.random() * 60) + 10;
        const chartItem = document.createElement('div');
        chartItem.className = 'chart-item';
        chartItem.innerHTML = `
            <span class="chart-label">${category}</span>
            <div class="chart-bar">
                <div class="chart-fill" style="width: ${percentage}%"></div>
            </div>
            <span class="chart-value">${percentage}%</span>
        `;
        shoppingChart.appendChild(chartItem);
    });
}

// Address Validation Implementation
function loadAddressValidation() {
    const addressToValidate = document.getElementById('addressToValidate');
    const validateAddressBtn = document.getElementById('validateAddressBtn');
    const validationResult = document.getElementById('validationResult');
    const resultContent = document.getElementById('resultContent');
    const savedAddressList = document.getElementById('savedAddressList');
    const addNewAddressBtn = document.getElementById('addNewAddressBtn');

    // Initialize saved addresses
    renderSavedAddresses(getUserAddresses());

    validateAddressBtn.addEventListener('click', () => {
        const address = addressToValidate.value.trim();
        
        if (!address) {
            showToast('Please enter an address to validate');
            return;
        }

        // For demo purposes, we'll simulate validation
        validationResult.style.display = 'block';
        validationResult.className = 'validation-result';
        
        // In a real implementation, you would call an address validation API here
        const isValid = Math.random() > 0.3;
        
        if (isValid) {
            validationResult.classList.add('success');
            resultContent.innerHTML = `
                <div class="validation-success">
                    <i class="fas fa-check-circle"></i>
                    <h4>Address is valid</h4>
                    <p>We can deliver to this address</p>
                    <button class="btn" id="saveValidatedAddress">Save Address</button>
                </div>
            `;
            
            document.getElementById('saveValidatedAddress')?.addEventListener('click', () => {
                // Parse the address into components (in a real app, this would come from the validation API)
                const addressComponents = {
                    address1: address,
                    city: 'Sample City',
                    state: 'Sample State',
                    zip: '123456'
                };
                
                // Prompt user to complete the address
                const name = prompt('Please enter your full name for this address:');
                if (!name) return;
                
                const phone = prompt('Please enter your phone number:');
                if (!phone) return;
                
                const addressData = {
                    name,
                    phone,
                    ...addressComponents
                };
                
                if (saveUserAddress(addressData, 'shipping', false)) {
                    showToast('Address saved successfully');
                    validationResult.style.display = 'none';
                    renderSavedAddresses(getUserAddresses());
                }
            });
        } else {
            validationResult.classList.add('error');
            resultContent.innerHTML = `
                <div class="validation-error">
                    <i class="fas fa-times-circle"></i>
                    <h4>Address could not be verified</h4>
                    <p>Please check the address and try again</p>
                    <ul>
                        <li>Make sure the street name is correct</li>
                        <li>Include city and postal code</li>
                        <li>Check for typos</li>
                    </ul>
                </div>
            `;
        }
    });

    addNewAddressBtn.addEventListener('click', () => {
        showAddressEntryModal();
    });

    function renderSavedAddresses(addresses) {
        if (!savedAddressList) return;
        
        if (addresses.length === 0) {
            savedAddressList.innerHTML = '<div class="empty-state"><p>No saved addresses</p></div>';
            return;
        }
        
        savedAddressList.innerHTML = addresses.map(address => `
            <div class="address-item ${address.isDefault ? 'default' : ''}">
                <div class="address-header">
                    <h4>${address.name} ${address.isDefault ? '(Default)' : ''}</h4>
                    <div class="address-type">${address.type === 'shipping' ? 'Shipping' : 'Billing'}</div>
                </div>
                <p>${address.address1}, ${address.city}, ${address.state} - ${address.zip}</p>
                <p>Phone: ${address.phone}</p>
                <div class="address-actions">
                    <button class="btn btn-sm" onclick="setDefaultAddress(${address.id})" ${address.isDefault ? 'disabled' : ''}>Set Default</button>
                    <button class="btn btn-outline btn-sm" onclick="deleteAddress(${address.id})">Delete</button>
                </div>
            </div>
        `).join('');
    }
}

// Address management functions
function selectAddressForCheckout(index) {
    if (!currentUser || !currentUser.addresses || index >= currentUser.addresses.length) return;
    
    const selectedAddress = currentUser.addresses[index];
    
    // Pre-fill shipping address fields in the checkout modal
    populateAddressForm(selectedAddress, 'shipping');
    
    // If "same as shipping" is checked, also pre-fill billing
    if (sameAsShippingCheckbox.checked) {
        populateAddressForm(selectedAddress, 'billing');
        billingSection.style.display = 'none';
    } else {
        billingSection.style.display = 'block';
    }

    // Close profile sidebar and open address modal
    closeProfileSidebarHandler();
    addressModal.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';

    showToast('Address selected for checkout.');
}

function editAddress(index) {
    if (!currentUser || !currentUser.addresses || index >= currentUser.addresses.length) return;

    const addressToEdit = currentUser.addresses[index];
    
    // Populate the address validation textarea with the address string
    document.getElementById('addressToValidate').value = 
        `${addressToEdit.address1}${addressToEdit.address2 ? ', ' + addressToEdit.address2 : ''}, ${addressToEdit.city}, ${addressToEdit.state} - ${addressToEdit.zip}, ${addressToEdit.country}`;
    
    // Show the validation result section, ready for re-validation or saving
    document.getElementById('validationResult').style.display = 'block';
    document.getElementById('validationResult').className = 'validation-result'; // Reset classes
    document.getElementById('resultContent').innerHTML = `
        <h4>Edit Address</h4>
        <p>Modify the address above and click "Validate Address" to save changes.</p>
        <button class="btn" id="updateEditedAddress" data-index="${index}">Update Address</button>
    `;

    document.getElementById('updateEditedAddress')?.addEventListener('click', (e) => {
        const updatedAddressString = document.getElementById('addressToValidate').value.trim();
        if (!updatedAddressString) {
            showToast('Address cannot be empty.');
            return;
        }
        
        // For simplicity, update only address1 and keep other fields as they were or infer
        const updatedAddress = {
            ...addressToEdit, // Keep existing details
            address1: updatedAddressString, // Update the main address line
            // You might want to parse the string to update city, state, zip etc.
            // For this demo, we'll just update address1
        };

        currentUser.addresses[index] = updatedAddress;
        saveUserData();
        renderSavedAddresses(currentUser.addresses);
        showToast('Address updated successfully!');
        document.getElementById('validationResult').style.display = 'none';
        document.getElementById('addressToValidate').value = '';
    });
}


function removeAddress(index) {
    if (!currentUser || !currentUser.addresses || index >= currentUser.addresses.length) return;
    
    if (confirm('Are you sure you want to remove this address?')) {
        currentUser.addresses.splice(index, 1);
        saveUserData();
        showToast('Address removed');
        loadAddressValidation(); // Refresh the view
    }
}

// Initialize all sections when profile sidebar is opened
function initializeProfileSections() {
    loadDashboardData();
    loadPasswordResetSection();
    loadAccountSettingsData();
    loadSiteAnalytics();
    loadAddressValidation();
}

// Add to global scope for HTML onclick handlers
window.addToCartFromWishlist = addToCartFromWishlist;
window.removeFromWishlist = removeFromWishlist;
window.selectAddressForCheckout = selectAddressForCheckout; // New global function
window.editAddress = editAddress; // New global function
window.removeAddress = removeAddress;

// Initialize the application
window.onload = function() {
    loadUserData();
    renderProducts(products);
    updateCartCount();
    updateWishlistCount();
    
    // Initialize scroll animations
    initScrollAnimations();
};

// Scroll animations
function initScrollAnimations() {
    // Add animation classes to elements
    document.querySelectorAll('.section-title').forEach(el => {
        el.classList.add('fade-in');
    });
    
    document.querySelectorAll('.category-card').forEach((el, index) => {
        if (index % 2 === 0) {
            el.classList.add('slide-in-left');
        } else {
            el.classList.add('slide-in-right');
        }
    });
    
    document.querySelectorAll('.product-card').forEach(el => {
        el.classList.add('fade-in');
    });
    
    // Check for elements in viewport on scroll
    function checkVisibility() {
        const elements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
        elements.forEach(element => {
            const position = element.getBoundingClientRect();
            // If element is in viewport
            if(position.top < window.innerHeight && position.bottom >= 0) {
                element.classList.add('visible');
            }
        });
    }
    
    // Initial check
    checkVisibility();
    
    // Check on scroll
    window.addEventListener('scroll', checkVisibility);
}
// Additional Utility Functions

// Format currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-IN', { 
        style: 'currency', 
        currency: 'INR',
        maximumFractionDigits: 0
    }).format(amount);
}

// Generate random ID
function generateId() {
    return Math.floor(Math.random() * 1000000) + 100000;
}

// Validate email format
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Validate phone number



// Enhanced Product Filtering
function enhancedFilterProducts(category, searchTerm = '') {
    let filteredProducts = products;
    
    if (category !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.category === category);
    }
    
    if (searchTerm) {
        const term = searchTerm.toLowerCase();
        filteredProducts = filteredProducts.filter(product =>
            product.name.toLowerCase().includes(term) ||
            product.category.toLowerCase().includes(term) ||
            (product.description && product.description.toLowerCase().includes(term))
        );
    }
    
    return filteredProducts;
}

// Product Detail Modal
function showProductDetails(product) {
    // Create modal elements
    const modal = document.createElement('div');
    modal.className = 'product-modal';
    modal.innerHTML = `
        <div class="product-modal-content">
            <span class="close-modal">&times;</span>
            <div class="product-modal-body">
                <div class="product-modal-images">
                    <div class="main-image">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                </div>
                <div class="product-modal-info">
                    <h2>${product.name}</h2>
                    <div class="product-modal-price">
                        ${formatCurrency(product.price)}
                        ${product.oldPrice ? `<span class="old-price">${formatCurrency(product.oldPrice)}</span>` : ''}
                    </div>
                    <div class="product-modal-rating">
                        ${renderRating(product.rating)} (${product.reviews} reviews)
                    </div>
                    ${product.sizes ? `
                    <div class="product-modal-sizes">
                        <h4>Size:</h4>
                        <div class="size-options">
                            ${product.sizes.map(size => `
                                <button class="size-option" data-size="${size}">${size}</button>
                            `).join('')}
                        </div>
                    </div>
                    ` : ''}
                    <div class="product-modal-actions">
                        <button class="btn add-to-cart-modal" data-id="${product.id}">Add to Cart</button>
                        <button class="btn btn-outline wishlist-modal" data-id="${product.id}">
                            <i class="${wishlist.includes(product.id) ? 'fas' : 'far'} fa-heart"></i> Wishlist
                        </button>
                    </div>
                    <div class="product-modal-description">
                        <h4>Description</h4>
                        <p>${product.description || 'No description available'}</p>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    // Add event listeners
    modal.querySelector('.close-modal').addEventListener('click', () => {
        document.body.removeChild(modal);
        document.body.style.overflow = '';
    });
    
    modal.querySelector('.add-to-cart-modal').addEventListener('click', (e) => {
        const productId = parseInt(e.target.dataset.id);
        const size = modal.querySelector('.size-option.selected')?.dataset.size || null;
        addToCart({ target: { dataset: { id: productId }, closest: () => modal } }, size);
        showToast('Added to cart!');
    });
    
    modal.querySelector('.wishlist-modal').addEventListener('click', (e) => {
        const productId = parseInt(e.target.closest('button').dataset.id);
        toggleWishlist({ target: e.target.closest('button') });
    });
    
    // Size selection
    modal.querySelectorAll('.size-option').forEach(option => {
        option.addEventListener('click', () => {
            modal.querySelectorAll('.size-option').forEach(opt => opt.classList.remove('selected'));
            option.classList.add('selected');
        });
    });
    
    // Close when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
            document.body.style.overflow = '';
        }
    });
}

// Enhanced Search with Debounce
let searchTimeout;
function enhancedHandleSearch() {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        const searchTerm = searchInput.value.trim().toLowerCase();
        const activeFilter = document.querySelector('.filter-btn.active')?.dataset.filter || 'all';
        
        if (searchTerm.length >= 2 || searchTerm.length === 0) {
            const filteredProducts = enhancedFilterProducts(activeFilter, searchTerm);
            renderProducts(filteredProducts);
        }
    }, 300);
}

// Update event listener for enhanced search
searchInput.addEventListener('input', enhancedHandleSearch);

// Order Status Tracking
function trackOrder(orderId) {
    const order = orders.find(o => o.id === orderId);
    if (!order) return null;
    
    const statusStages = [
        { status: 'Processing', description: 'Order received', time: order.date },
        { status: 'Confirmed', description: 'Payment confirmed', time: addTime(order.date, 1) },
        { status: 'Shipped', description: 'Shipped with tracking', time: addTime(order.date, 2) },
        { status: 'Out for Delivery', description: 'With delivery agent', time: addTime(order.date, 3) },
        { status: 'Delivered', description: 'Order delivered', time: addTime(order.date, 4) }
    ];
    
    // Simulate current status based on order date
    const now = new Date();
    const orderDate = new Date(order.date);
    const hoursSinceOrder = (now - orderDate) / (1000 * 60 * 60);
    
    let currentStage = Math.floor(hoursSinceOrder / 24);
    if (currentStage >= statusStages.length) currentStage = statusStages.length - 1;
    
    return {
        currentStatus: statusStages[currentStage].status,
        stages: statusStages,
        currentStage
    };
}

function addTime(dateString, daysToAdd) {
    const date = new Date(dateString);
    date.setDate(date.getDate() + daysToAdd);
    return date.toISOString();
}

// Order Tracking Modal
function showOrderTracking(orderId) {
    const trackingInfo = trackOrder(orderId);
    if (!trackingInfo) {
        showToast('Order not found');
        return;
    }
    
    const modal = document.createElement('div');
    modal.className = 'tracking-modal';
    modal.innerHTML = `
        <div class="tracking-modal-content">
            <span class="close-modal">&times;</span>
            <h2>Order #${orderId} Tracking</h2>
            <div class="tracking-status">
                <div class="status-badge ${trackingInfo.currentStatus.toLowerCase().replace(' ', '-')}">
                    ${trackingInfo.currentStatus}
                </div>
            </div>
            <div class="tracking-timeline">
                ${trackingInfo.stages.map((stage, index) => `
                    <div class="timeline-step ${index <= trackingInfo.currentStage ? 'completed' : ''}">
                        <div class="timeline-marker"></div>
                        <div class="timeline-content">
                            <h4>${stage.status}</h4>
                            <p>${stage.description}</p>
                            <small>${new Date(stage.time).toLocaleString()}</small>
                        </div>
                    </div>
                `).join('')}
            </div>
            <div class="tracking-actions">
                <button class="btn">Contact Support</button>
                <button class="btn btn-outline">View Order Details</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    // Add event listeners
    modal.querySelector('.close-modal').addEventListener('click', () => {
        document.body.removeChild(modal);
        document.body.style.overflow = '';
    });
    
    // Close when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
            document.body.style.overflow = '';
        }
    });
}

// Enhanced Checkout Process
function enhancedCheckout() {
    if (!currentUser) {
        showToast('Please login to checkout');
        toggleAuthModal();
        return;
    }
    if (cart.length === 0) {
        showToast('Your cart is empty');
        return;
    }

    cartSidebar.classList.remove('active');
    overlay.classList.add('active');
    addressModal.classList.add('active');
    document.body.style.overflow = 'hidden';

    renderAddressSelection();
}

function renderAddressSelection() {
    const savedAddresses = currentUser.addresses || [];
    
    savedAddressesContainer.innerHTML = ''; // Clear previous content
    addressFormContainer.style.display = 'none'; // Hide form by default

    if (savedAddresses.length > 0) {
        savedAddressesContainer.style.display = 'block';
        savedAddressesContainer.innerHTML = '<h3>Your Saved Addresses</h3>'; // Add title

        savedAddresses.forEach((addr, index) => {
            const addressElement = document.createElement('div');
            addressElement.className = `address-option ${addr.isDefault ? 'default' : ''}`;
            addressElement.innerHTML = `
                <div class="address-details">
                    <h4>${addr.name} ${addr.isDefault ? '(Default)' : ''}</h4>
                    <p>${addr.address1}${addr.address2 ? ', ' + addr.address2 : ''}, ${addr.city}, ${addr.state} - ${addr.zip}</p>
                    <p>Phone: ${addr.phone}</p>
                </div>
                <div class="address-actions">
                    <button class="btn btn-sm use-address-btn" data-id="${addr.id}">Deliver Here</button>
                    ${!addr.isDefault ? `<button class="btn btn-outline btn-sm set-default-btn" data-id="${addr.id}">Set Default</button>` : ''}
                    <button class="btn btn-outline btn-sm delete-address-btn" data-id="${addr.id}">Delete</button>
                </div>
            `;
            savedAddressesContainer.appendChild(addressElement);
        });
        
        // Add "Add New Address" button below saved addresses
        const addNewBtn = document.createElement('button');
        addNewBtn.className = 'btn btn-outline';
        addNewBtn.textContent = 'Add New Address';
        addNewBtn.style.width = '100%';
        addNewBtn.style.marginTop = '15px';
        addNewBtn.addEventListener('click', showAddressFormForNewEntry);
        savedAddressesContainer.appendChild(addNewBtn);

    } else {
        // No saved addresses → show form directly
        showAddressFormForNewEntry();
    }

    // Add event listeners for address actions (delegated or re-attached)
    document.querySelectorAll('.use-address-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const addressId = parseInt(e.target.dataset.id);
            const address = savedAddresses.find(addr => addr.id === addressId);
            if (address) {
                // Set this address as the current shipping and billing address for the order
                currentUser.shipping = address;
                currentUser.billing = address; // Assuming billing is same as shipping if selected from saved
                saveUserData();
                proceedToPayment();
            }
        });
    });
    
    document.querySelectorAll('.set-default-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const addressId = parseInt(e.target.dataset.id);
            if (setDefaultAddress(addressId)) {
                showToast('Default address updated');
                renderAddressSelection(); // Re-render to update default status
            }
        });
    });
    
    document.querySelectorAll('.delete-address-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const addressId = parseInt(e.target.dataset.id);
            if (confirm('Are you sure you want to delete this address?')) {
                if (deleteAddress(addressId)) {
                    showToast('Address deleted');
                    renderAddressSelection(); // Re-render after deletion
                }
            }
        });
    });
}

// Show modal to enter new address
function showAddressFormForNewEntry() {
    savedAddressesContainer.style.display = 'none';
    addressFormContainer.style.display = 'block';
    
    // Clear and pre-fill form with current user info if available
    populateAddressForm({
        name: currentUser.name || '',
        email: currentUser.email || '',
        phone: currentUser.phone || '',
        address1: currentUser.address || '', // Use primary address from registration
        address2: '',
        city: '',
        state: '',
        zip: '',
        country: 'India'
    }, 'shipping');
    
    // Reset billing section and checkbox
    sameAsShippingCheckbox.checked = true;
    billingSection.style.display = 'none';
    populateAddressForm({}, 'billing'); // Clear billing form
    
    // Ensure "Save this address" is checked by default for new entries
    if (saveAsDefaultCheckbox) {
        saveAsDefaultCheckbox.checked = true;
    }
}

// Proceed to payment after address validation
function proceedToPayment() {
    addressModal.classList.remove('active');
    paymentModal.classList.add('active');
    
    // Pre-fill payment method if previously used (not implemented in this snippet)
    // if (currentUser.preferredPaymentMethod) {
    //     document.querySelector(`input[name="paymentMethod"][value="${currentUser.preferredPaymentMethod}"]`).checked = true;
    // }
}

// Handle address validation and proceed to payment
function handleAddressValidationAndProceed() {
    // Clear previous error highlights
    document.querySelectorAll('.input-error').forEach(el => el.classList.remove('input-error'));

    const shippingAddress = getAddressFromForm('shipping');
    let billingAddress = {};

    const shippingValidation = validateAddress(shippingAddress, 'shipping');
    if (!shippingValidation.isValid) {
        showToast(shippingValidation.message);
        shippingValidation.missingFields.forEach(field => {
            markInvalidField(document.getElementById(`shipping${field.charAt(0).toUpperCase() + field.slice(1)}`), false);
        });
        if (shippingValidation.invalidField) {
            markInvalidField(document.getElementById(`shipping${shippingValidation.invalidField.charAt(0).toUpperCase() + shippingValidation.invalidField.slice(1)}`), false);
        }
        return;
    }
    
    if (!sameAsShippingCheckbox.checked) {
        billingAddress = getAddressFromForm('billing');
        const billingValidation = validateAddress(billingAddress, 'billing');
        if (!billingValidation.isValid) {
            showToast(billingValidation.message);
            billingValidation.missingFields.forEach(field => {
                markInvalidField(document.getElementById(`billing${field.charAt(0).toUpperCase() + field.slice(1)}`), false);
            });
            if (billingValidation.invalidField) {
                markInvalidField(document.getElementById(`billing${billingValidation.invalidField.charAt(0).toUpperCase() + billingValidation.invalidField.slice(1)}`), false);
            }
            return;
        }
    } else {
        billingAddress = shippingAddress;
    }
    
    // Save addresses to user profile if "Save this address" is checked
    const saveAsDefault = saveAsDefaultCheckbox ? saveAsDefaultCheckbox.checked : false;
    if (saveAsDefault) {
        saveUserAddress(shippingAddress, 'shipping', true); // Always set shipping as default if saving
        if (!isAddressEqual(shippingAddress, billingAddress)) {
            saveUserAddress(billingAddress, 'billing', false); // Don't set billing as default if different
        }
    }
    
    // Set current addresses for this order (regardless of saving to profile)
    currentUser.shipping = shippingAddress;
    currentUser.billing = billingAddress;
    saveUserData();
    
    // Proceed to payment
    proceedToPayment();
}

// Order History with Tracking
function loadEnhancedOrderHistory() {
    if (!currentUser) return;

    const userOrders = orders.filter(order => order.userId === currentUser.id);
    const orderList = document.getElementById('sidebarOrderList');

    if (userOrders.length === 0) {
        orderList.innerHTML = '<div class="empty-state"><p>You have no orders yet</p></div>';
        return;
    }

    orderList.innerHTML = userOrders.sort((a, b) => new Date(b.date) - new Date(a.date)).map(order => `
        <div class="order-card">
            <div class="order-header">
                <div>
                    <strong>Order #${order.id}</strong>
                    <div>${new Date(order.date).toLocaleDateString()}</div>
                </div>
                <div>
                    <span class="order-status ${order.status.toLowerCase().replace(' ', '-')}">${order.status}</span>
                </div>
            </div>
            <div class="order-summary">
                <div>Total:</div>
                <div>${formatCurrency(order.total)}</div>
            </div>
            <div class="order-actions">
                <button class="btn btn-sm track-order" data-id="${order.id}">Track Order</button>
                <button class="btn btn-outline btn-sm invoice-btn" data-id="${order.id}">Invoice</button>
            </div>
        </div>
    `).join('');

    // Add event listeners
    document.querySelectorAll('.track-order').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const orderId = parseInt(e.target.dataset.id);
            showOrderTracking(orderId);
        });
    });

    document.querySelectorAll('.invoice-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const orderId = parseInt(e.target.dataset.id);
            const order = orders.find(o => o.id === orderId);
            if (order) generateInvoice(order);
        });
    });
}

// Replace original order history loader
function loadSidebarOrderHistory() {
    loadEnhancedOrderHistory();
}

// Product Review System
function submitProductReview(productId, rating, comment) {
    const product = products.find(p => p.id === productId);
    if (!product) return false;
    
    if (!product.reviewsData) {
        product.reviewsData = [];
    }
    
    const review = {
        id: generateId(),
        userId: currentUser?.id || null,
        userName: currentUser?.name || 'Anonymous',
        rating,
        comment,
        date: new Date().toISOString()
    };
    
    product.reviewsData.push(review);
    
    // Update average rating
    const totalRatings = product.reviewsData.reduce((sum, r) => sum + r.rating, 0);
    product.rating = parseFloat((totalRatings / product.reviewsData.length).toFixed(1));
    product.reviews = product.reviewsData.length;
    
    return true;
}

// Review Modal
function showReviewModal(productId) {
    if (!currentUser) {
        showToast('Please login to leave a review');
        toggleAuthModal();
        return;
    }
    
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const modal = document.createElement('div');
    modal.className = 'review-modal';
    modal.innerHTML = `
        <div class="review-modal-content">
            <span class="close-modal">&times;</span>
            <h2>Review ${product.name}</h2>
            <div class="review-rating">
                <div class="rating-stars">
                    ${[1, 2, 3, 4, 5].map(i => `
                        <i class="far fa-star" data-rating="${i}"></i>
                    `).join('')}
                </div>
                <div class="rating-text">Select rating</div>
            </div>
            <div class="review-comment">
                <textarea placeholder="Share your experience with this product..." rows="5"></textarea>
            </div>
            <button class="btn submit-review">Submit Review</button>
        </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    let selectedRating = 0;
    const stars = modal.querySelectorAll('.rating-stars i');
    const ratingText = modal.querySelector('.rating-text');
    
    stars.forEach(star => {
        star.addEventListener('click', () => {
            const rating = parseInt(star.dataset.rating);
            selectedRating = rating;
            
            stars.forEach((s, i) => {
                if (i < rating) {
                    s.classList.remove('far');
                    s.classList.add('fas');
                } else {
                    s.classList.remove('fas');
                    s.classList.add('far');
                }
            });
            
            const ratingTexts = [
                'Poor',
                'Fair',
                'Good',
                'Very Good',
                'Excellent'
            ];
            
            ratingText.textContent = ratingTexts[rating - 1];
        });
        
        star.addEventListener('mouseover', () => {
            const rating = parseInt(star.dataset.rating);
            
            stars.forEach((s, i) => {
                if (i < rating) {
                    s.classList.add('hover');
                } else {
                    s.classList.remove('hover');
                }
            });
        });
        
        star.addEventListener('mouseout', () => {
            stars.forEach(s => s.classList.remove('hover'));
        });
    });
    
    modal.querySelector('.submit-review').addEventListener('click', () => {
        const comment = modal.querySelector('textarea').value.trim();
        
        if (selectedRating === 0) {
            showToast('Please select a rating');
            return;
        }
        
        if (submitProductReview(productId, selectedRating, comment)) {
            showToast('Thank you for your review!');
            document.body.removeChild(modal);
            document.body.style.overflow = '';
            
            // Refresh product display if needed
            const activeFilter = document.querySelector('.filter-btn.active')?.dataset.filter || 'all';
            const filteredProducts = enhancedFilterProducts(activeFilter, searchInput.value.trim());
            renderProducts(filteredProducts);
        } else {
            showToast('Failed to submit review');
        }
    });
    
    modal.querySelector('.close-modal').addEventListener('click', () => {
        document.body.removeChild(modal);
        document.body.style.overflow = '';
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
            document.body.style.overflow = '';
        }
    });
}

// Add review button to product details
function addReviewButton(productId) {
    const reviewBtn = document.createElement('button');
    reviewBtn.className = 'btn btn-outline btn-sm review-btn';
    reviewBtn.textContent = 'Write a Review';
    reviewBtn.addEventListener('click', () => showReviewModal(productId));
    return reviewBtn;
}

// Initialize all components
function initializeAll() {
    loadUserData();
    renderProducts(products);
    updateCartCount();
    updateWishlistCount();
    
    // Add any additional initialization needed
    if (currentUser) {
        updateSidebarUserInfo();
    }
}

// Final initialization
document.addEventListener('DOMContentLoaded', initializeAll);
// Service page navigation
function showServicePage(pageId) {
    document.getElementById('main-content').style.display = 'none';
    document.getElementById('service-pages').style.display = 'block';
    
    // Hide all service pages
    document.querySelectorAll('.service-page').forEach(page => {
        page.style.display = 'none';
    });
    
    // Show the requested page
    document.getElementById(pageId).style.display = 'block';
    
    // Scroll to top
    window.scrollTo(0, 0);
}

function showMainContent() {
    document.getElementById('main-content').style.display = 'block';
    document.getElementById('service-pages').style.display = 'none';
    window.scrollTo(0, 0);
}

// FAQ accordion functionality
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('faq-question') || 
        e.target.parentElement.classList.contains('faq-question')) {
        const question = e.target.classList.contains('faq-question') 
            ? e.target 
            : e.target.parentElement;
        const answer = question.nextElementSibling;
        
        question.classList.toggle('active');
        answer.classList.toggle('active');
    }
});
// Enhanced Address Validation System
// Function to validate name (letters and spaces only)
function isValidName(name) {
    return /^[A-Za-z\s]+$/.test(name.trim()) && name.trim().length > 0;
}

// Function to validate phone number (10 digits)
function isValidPhone(phone) {
    return /^\d{10}$/.test(phone.trim());
}

// Function to validate ZIP code (6 digits)
function isValidZip(zip) {
    return /^\d{6}$/.test(zip.trim());
}

// Function to validate address data
function validateAddress(address, prefix = '') {
    const missingFields = [];
    let invalidField = null;
    
    // Check required fields
    if (!address.name || address.name.trim() === '') {
        missingFields.push('name');
    }
    
    if (!address.email || address.email.trim() === '') {
        missingFields.push('email');
    } else if (!isValidEmail(address.email)) {
        invalidField = 'email';
    }
    
    if (!address.phone || address.phone.trim() === '') {
        missingFields.push('phone');
    } else if (!isValidPhone(address.phone)) {
        invalidField = 'phone';
    }
    
    if (!address.address1 || address.address1.trim() === '') {
        missingFields.push('address1');
    }
    
    if (!address.city || address.city.trim() === '') {
        missingFields.push('city');
    }
    
    if (!address.state || address.state.trim() === '') {
        missingFields.push('state');
    }
    
    if (!address.zip || address.zip.trim() === '') {
        missingFields.push('zip');
    } else if (!isValidZip(address.zip)) {
        invalidField = 'zip';
    }
    
    if (!address.country || address.country.trim() === '') {
        missingFields.push('country');
    }
    
    const isValid = missingFields.length === 0 && !invalidField;
    let message = '';
    
    if (missingFields.length > 0) {
        message = `Please fill in all required ${prefix} address fields: ${missingFields.join(', ')}`;
    } else if (invalidField) {
        switch (invalidField) {
            case 'email':
                message = `Please enter a valid ${prefix} email address`;
                break;
            case 'phone':
                message = `Please enter a valid ${prefix} phone number (10 digits)`;
                break;
            case 'zip':
                message = `Please enter a valid ${prefix} PIN code (6 digits)`;
                break;
            default:
                message = `Please check the ${prefix} ${invalidField} field`;
        }
    }
    
    return {
        isValid,
        message,
        missingFields,
        invalidField
    };
}

// Function to highlight invalid fields
function markInvalidField(fieldElement, isValid) {
    if (fieldElement) {
        if (!isValid) {
            fieldElement.classList.add('input-error');
        } else {
            fieldElement.classList.remove('input-error');
        }
    }
}

// Save address to user profile
function saveUserAddress(addressData, type = 'shipping', setAsDefault = false) {
    if (!currentUser) return false;
    
    // Initialize addresses array if it doesn't exist
    if (!currentUser.addresses) {
        currentUser.addresses = [];
    }
    
    // Check if an identical address already exists to prevent duplicates
    const isDuplicate = currentUser.addresses.some(existingAddr => 
        existingAddr.name === addressData.name &&
        existingAddr.phone === addressData.phone &&
        existingAddr.address1 === addressData.address1 &&
        existingAddr.city === addressData.city &&
        existingAddr.state === addressData.state &&
        existingAddr.zip === addressData.zip
    );

    if (isDuplicate) {
        // Optionally, show a toast that address already exists
        // showToast('This address is already saved.');
        return false; // Do not save duplicate
    }

    // Create address object
    const address = {
        id: Date.now(), // Unique ID for the address
        type, // 'shipping' or 'billing'
        ...addressData,
        isDefault: setAsDefault,
        createdAt: new Date().toISOString()
    };
    
    // If setting as default, remove default flag from other addresses of the same type
    if (setAsDefault) {
        currentUser.addresses.forEach(addr => {
            if (addr.type === type) { // Only affect addresses of the same type
                addr.isDefault = false;
            }
        });
    }
    
    // Add the new address
    currentUser.addresses.push(address);
    
    // Also set as current shipping/billing address if it's the default
    if (setAsDefault) {
        currentUser[type] = address;
    }
    
    saveUserData();
    return true;
}

// Get user addresses
function getUserAddresses(type = null) {
    if (!currentUser || !currentUser.addresses) return [];
    
    if (type) {
        return currentUser.addresses.filter(addr => addr.type === type);
    }
    
    return currentUser.addresses;
}

// Set default address
function setDefaultAddress(addressId) {
    if (!currentUser || !currentUser.addresses) return false;
    
    const addressToSetDefault = currentUser.addresses.find(addr => addr.id === addressId);
    if (!addressToSetDefault) return false;
    
    // Remove default flag from all addresses of the same type
    currentUser.addresses.forEach(addr => {
        if (addr.type === addressToSetDefault.type) {
            addr.isDefault = false;
        }
    });
    
    // Set this address as default
    addressToSetDefault.isDefault = true;
    
    // Also update current shipping/billing reference
    currentUser[addressToSetDefault.type] = addressToSetDefault;
    
    saveUserData();
    return true;
}

// Delete address
function deleteAddress(addressId) {
    if (!currentUser || !currentUser.addresses) return false;
    
    const index = currentUser.addresses.findIndex(addr => addr.id === addressId);
    if (index === -1) return false;
    
    const deletedAddress = currentUser.addresses[index];
    
    // Remove the address
    currentUser.addresses.splice(index, 1);
    
    // If it was the default, set a new default if available
    if (deletedAddress.isDefault) {
        const remainingAddressesOfType = currentUser.addresses.filter(
            addr => addr.type === deletedAddress.type
        );
        
        if (remainingAddressesOfType.length > 0) {
            remainingAddressesOfType[0].isDefault = true;
            currentUser[remainingAddressesOfType[0].type] = remainingAddressesOfType[0];
        } else {
            // No more addresses of this type, clear current shipping/billing
            currentUser[deletedAddress.type] = null;
        }
    }
    
    saveUserData();
    return true;
}

// Add these functions to the global scope if they are called from HTML onclick attributes
window.useSavedAddress = (addressId) => {
    const address = currentUser.addresses.find(addr => addr.id === addressId);
    if (address) {
        currentUser.shipping = address;
        currentUser.billing = address; // Assuming billing is same as shipping if selected from saved
        saveUserData();
        proceedToPayment();
    }
};
window.setDefaultAddress = setDefaultAddress;
window.deleteAddress = deleteAddress;

// ===== CHATBOT FUNCTIONALITY =====

// Chatbot functionality
function initializeChatbot() {
    const chatbotToggle = document.getElementById('chatbotToggle');
    const chatbotContainer = document.getElementById('chatbotContainer');
    const closeChatbot = document.getElementById('closeChatbot');
    const chatMessages = document.getElementById('chatMessages');
    const chatInput = document.getElementById('chatInput');
    const sendMessage = document.getElementById('sendMessage');
    const welcomePopup = document.getElementById('welcomePopup');
    const closeWelcomePopup = document.getElementById('closeWelcomePopup');

    if (!chatbotToggle || !chatbotContainer) return; // Exit if elements don't exist

    // Show welcome popup after 2 seconds
    setTimeout(() => {
        if (welcomePopup) {
            welcomePopup.style.display = 'block';
            setTimeout(() => {
                welcomePopup.classList.add('show');
            }, 100);
        }
    }, 2000);

    // Close welcome popup
    if (closeWelcomePopup) {
        closeWelcomePopup.addEventListener('click', () => {
            welcomePopup.classList.remove('show');
            setTimeout(() => {
                welcomePopup.style.display = 'none';
            }, 300);
        });
    }

    // Auto close welcome popup after 10 seconds
    setTimeout(() => {
        if (welcomePopup && welcomePopup.classList.contains('show')) {
            welcomePopup.classList.remove('show');
            setTimeout(() => {
                welcomePopup.style.display = 'none';
            }, 300);
        }
    }, 12000);

    // Toggle chatbot
    chatbotToggle.addEventListener('click', () => {
        chatbotContainer.classList.toggle('active');
        if (chatbotContainer.classList.contains('active')) {
            chatInput.focus();
        }
    });

    // Close chatbot
    if (closeChatbot) {
        closeChatbot.addEventListener('click', () => {
            chatbotContainer.classList.remove('active');
        });
    }

    // Send message
    function sendChatMessage() {
        const message = chatInput.value.trim();
        if (message) {
            addMessage(message, 'user');
            chatInput.value = '';
            
            // Simulate bot response
            setTimeout(() => {
                const response = getBotResponse(message);
                addMessage(response, 'bot');
            }, 1000);
        }
    }

    if (sendMessage) {
        sendMessage.addEventListener('click', sendChatMessage);
    }
    
    if (chatInput) {
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendChatMessage();
            }
        });
    }

    // Add message to chat
    function addMessage(message, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `chat-message ${sender}`;
        
        if (sender === 'bot') {
            messageDiv.innerHTML = `
                <div class="message-avatar">
                    <i class="fas fa-crown"></i>
                </div>
                <div class="message-content">${message}</div>
            `;
        } else {
            messageDiv.innerHTML = `
                <div class="message-content">${message}</div>
                <div class="message-avatar">
                    <i class="fas fa-user"></i>
                </div>
            `;
        }
        
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Add options message
    function addOptionsMessage() {
        const optionsDiv = document.createElement('div');
        optionsDiv.className = 'chat-message bot';
        optionsDiv.innerHTML = `
            <div class="message-avatar">
                <i class="fas fa-crown"></i>
            </div>
            <div class="message-content options-message">
                <p>Choose what you'd like to know about:</p>
                <div class="chat-options">
                    <button class="chat-option" onclick="handleOptionClick('products')">
                        <i class="fas fa-shopping-bag"></i> Our Products
                    </button>
                    <button class="chat-option" onclick="handleOptionClick('shipping')">
                        <i class="fas fa-truck"></i> Shipping Info
                    </button>
                    <button class="chat-option" onclick="handleOptionClick('returns')">
                        <i class="fas fa-undo"></i> Returns Policy
                    </button>
                    <button class="chat-option" onclick="handleOptionClick('contact')">
                        <i class="fas fa-phone"></i> Contact Us
                    </button>
                    <button class="chat-option" onclick="handleOptionClick('deals')">
                        <i class="fas fa-tags"></i> Current Deals
                    </button>
                    <button class="chat-option" onclick="handleOptionClick('account')">
                        <i class="fas fa-user"></i> Account Help
                    </button>
                </div>
            </div>
        `;
        chatMessages.appendChild(optionsDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Handle option clicks
    window.handleOptionClick = function(option) {
        // Add user message showing what they selected
        addMessage(`Tell me about ${option}`, 'user');
        
        // Get appropriate response
        setTimeout(() => {
            let response = '';
            switch(option) {
                case 'products':
                    response = "We have a wide range of products including:<br>• Electronics & Gadgets<br>• Fashion & Clothing<br>• Home & Garden<br>• Sports & Fitness<br>• Beauty & Personal Care<br><br>You can browse our categories or use the search function to find specific items!";
                    break;
                case 'shipping':
                    response = "🚚 <strong>Shipping Information:</strong><br>• Standard delivery: 3-5 business days<br>• Express delivery: 1-2 business days<br>• Free shipping on orders over ₹500<br>• Same-day delivery available in select cities<br>• Track your order anytime with order ID";
                    break;
                case 'returns':
                    response = "🔄 <strong>Returns & Exchange Policy:</strong><br>• 30-day hassle-free returns<br>• Items must be in original condition<br>• Free return pickup available<br>• Instant refunds to original payment method<br>• Exchange available for size/color changes";
                    break;
                case 'contact':
                    response = "📞 <strong>Contact Information:</strong><br>• Phone: +91 9876543210<br>• Email: support@mightymahal.com<br>• Address: Gomti Nagar, Lucknow, UP<br>• Support Hours: Mon-Fri, 9 AM - 8 PM<br>• Live Chat: Available 24/7";
                    break;
                case 'deals':
                    response = "🎉 <strong>Current Offers:</strong><br>• 20% off on first order<br>• Buy 2 Get 1 Free on fashion items<br>• Flat ₹200 off on orders above ₹1000<br>• Free shipping on all orders<br>• Special weekend flash sales<br><br>Check our deals section for more!";
                    break;
                case 'account':
                    response = "👤 <strong>Account Help:</strong><br>• Create account for faster checkout<br>• Track your orders easily<br>• Save favorite items to wishlist<br>• Get personalized recommendations<br>• Manage addresses and payments<br><br>Click the profile icon to get started!";
                    break;
                default:
                    response = "I'm here to help! What would you like to know more about?";
            }
            addMessage(response, 'bot');
        }, 1000);
    }

    // Bot responses
    function getBotResponse(message) {
        const lowerMessage = message.toLowerCase();
        
        if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
            setTimeout(() => {
                addOptionsMessage();
            }, 500);
            return "Hello! Welcome to Mighty Mahal! 👋 How can I help you today?";
        }
        
        if (lowerMessage.includes('product') || lowerMessage.includes('item')) {
            return "We have a wide range of products including electronics, fashion, home & garden, and more! You can browse our categories or use the search function to find specific items.";
        }
        
        if (lowerMessage.includes('shipping') || lowerMessage.includes('delivery')) {
            return "We offer fast and reliable shipping! Standard delivery takes 3-5 business days, and express delivery is available for 1-2 days. Free shipping on orders over ₹500!";
        }
        
        if (lowerMessage.includes('return') || lowerMessage.includes('exchange')) {
            return "We have a hassle-free 30-day return policy! Items must be in original condition. You can initiate returns through your account or contact our support team.";
        }
        
        if (lowerMessage.includes('contact') || lowerMessage.includes('support')) {
            return "You can reach us at:<br>📞 +91 9876543210<br>📧 support@mightymahal.com<br>🏪 Visit our store in Gomti Nagar, Lucknow<br>Our support team is available Mon-Fri, 9 AM - 8 PM.";
        }
        
        if (lowerMessage.includes('payment') || lowerMessage.includes('pay')) {
            return "We accept all major payment methods including credit/debit cards, UPI, net banking, and cash on delivery. All transactions are secure and encrypted.";
        }
        
        if (lowerMessage.includes('account') || lowerMessage.includes('profile')) {
            return "You can create an account to track orders, save favorites, and get personalized recommendations. Click on the profile icon in the top right to get started!";
        }
        
        if (lowerMessage.includes('deal') || lowerMessage.includes('offer') || lowerMessage.includes('discount')) {
            return "Check out our amazing deals section for the latest offers! We regularly update with flash sales, seasonal discounts, and exclusive member deals.";
        }
        
        if (lowerMessage.includes('thank')) {
            return "You're welcome! Is there anything else I can help you with? 😊";
        }
        
        if (lowerMessage.includes('bye') || lowerMessage.includes('goodbye')) {
            return "Goodbye! Thanks for visiting Mighty Mahal. Have a great day! 👋";
        }
        
        // Default response
        return "I'm here to help! You can ask me about our products, shipping, returns, payments, or any other questions about Mighty Mahal. What would you like to know?";
    }

    // Add initial bot message
    setTimeout(() => {
        addMessage("Hi there! I'm your Mighty Mahal assistant. How can I help you today? 😊", 'bot');
    }, 500);
}

// Initialize chatbot when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeChatbot);
