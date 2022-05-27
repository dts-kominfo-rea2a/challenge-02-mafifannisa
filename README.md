# Tantangan: JS Alur Logika

Buatlah sebuah aplikasi untuk menghitung jumlah pegawai yang ada di sebuah perusahaan dengan ketentuan sebagai berikut:

- Diberikan sebuah data dengan nama `data-customer.json` (data ini berupa array of object)
- Diberikan sebuah variabel dengan nama `hasilLooping`, variabel ini akan berisi seluruh nama pegawai yang ada di data-customer.json yang sudah digabung nama depan dan nama belakangnya. variabel ini akan menghasilkan `array of string`
- Diberikan sebuah variabel dengan nama `jumlahPria`, variabel ini akan berisi jumlah pegawai Pria yang ada di data-customer.json, data ini dilihat apabila jenisKelamin dari pegawai adalah `M`
- Diberikan sebuah variabel dengan nama `jumlahWanita`, variabel ini akan berisi jumlah pegawai Wanita yang ada di data-customer.json, data ini dilihat apabila jenisKelamin dari pegawai adalah `F`
- Diberikan sebuah variabel dengan nama `komentar`, variabel ini akan membandingkan jumlah pegawai Pria dan jumlah pegawai Wanita dan memberikan komentar sebagai berikut:
    - Apabila Pria lebih banyak dari Wanita, maka komentar akan berisi: `Jumlah Pria lebih banyak dari Wanita`
    - Apabila Wanita lebih banyak dari Pria, maka komentar akan berisi: `Jumlah Wanita lebih banyak dari Pria`
    - Apabila imbang, maka komentar akan berisi: `Jumlah Pria dan Wanita berimbang`
