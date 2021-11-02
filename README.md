# shift_academy

### Installation
1. `npm install`
2. fill `env` from the `env.example`

### How to run
1. `npm start`

### Version
1. Node v16.13.0

### Description

Di project ini ada 4 API, yaitu;

1. Create [POST]
API ini digunakan untuk membuat sebuah variable/id/data yang akan mengisi table dalam database
caranya;
buka postman/Insomnia lalu masuk ke API, pilih POST dan masukkan routenya
https:localhost:5675/article
untuk membuat sebuah variable maka harus request melalui body dan kalian pilih raw lalu ganti Text menjadi JSON, setelah itu masukkan attributes-nya dan isi dengan data.


2. Read [GET]
API ini digunakan untuk melihat variable/data yang sudah ada di dalam table di database
caranya;
buka postman/Insomnia lalu masuk ke API, pilih GET dan masukkan routenya
https:localhost:5675/article
send request melalui param, setelah itu dapat terlihat data data yang ada di dalam table.


3. Update [PUT]
API ini digunakan untuk merubah variable/data yang sudah ada di dalam table di database
caranya;
buka postman/Insomnia lalu masuk ke API, pilih PUT dan masukkan routenya
https:localhost:5675/article/(pilih id yang datanya akan dirubah)
untuk merubah sebuah variable maka harus request melalui body dan kalian pilih raw lalu ganti Text menjadi JSON, setelah itu masukkan attributes-nya dan rubah isi datanya.


4. Delete [DELETE]
API ini digunakan untuk merubah variable/data yang sudah ada di dalam table di database
caranya;
buka postman/Insomnia lalu masuk ke API, pilih DELETE dan masukkan routenya
https:localhost:5675/article/(pilih id yang datanya akan dirubah)
send request melalui param lalu data dengan id yang dipilih akan terhapus.