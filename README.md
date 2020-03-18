# Exercise2
Exercise 2
Programming Exercise 
Submission Requirement: 
● commit and push source codes to your own github 
● submit to us your github link 
● Time : 30 mins 
● Programming Language: plain javascript 
Question 1 : PT XYZ memiliki beberapa gudang untuk menyimpan berbagai macam barang dengan SKU yang berbeda. Setiap gudang memiliki kapasitas maksimal yang berbeda-beda. Tetapi PT XYZ tidak dapat mengetahui jumlah stok tersedia dari tiap SKU barang yang disimpan dalam gudang. 
PT XYZ memerlukan bantuan Anda untuk membuat sebuah sistem stok manajemen. Konsep yang diperlukan: 
● Ketika ada barang yang dimasukkan ke dalam salah satu gudang 
○ kapasitas maksimal gudang tersebut akan berkurang 
○ jumlah stok yang tersedia akan bertambah. 
● Ketika barang itu dikeluarkan dari gudang 
○ kapasitas maksimal gudang tersebut akan bertambah 
○ jumlah stok yang tersedia dalam gudang tersebut akan berkurang 
Contoh: 
Input 1. createWarehouse(0001, 500) 
2. insertGoods(0001, SKU502, 100) 3. getGoods(0001, SKU502, 50) 4. insertGoods(0002, SKU503, 150) 5. getGoods(0001, SKU503, 25) 6. insertGoods(0001, SKU503, 500) 
Output 
Berhasil membuat gudang ID 0001 dengan kapasitas 500 Berhasil memasukkan barang SKU502 ke dalam gudang 0001 dengan stok tersedia 100 Berhasil mengambil barang SKU502 dari gudang 0001 dengan jumlah 50 Gudang tidak ditemukan Barang tidak ditemukan dalam gudang 0001 Kapasitas gudang sudah penuh 
