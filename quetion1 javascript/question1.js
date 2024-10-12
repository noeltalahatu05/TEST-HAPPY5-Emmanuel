const pakaian = ["shirt", "pants", "jacket"];
const warna = ["black", "white"];
const ukuran = ["S", "M", "L"];

const buatDaftar = () => {
  const hasil = [];
  pakaian.forEach(p => {
    warna.forEach(w => {
      ukuran.forEach(u => {
        hasil.push(`${p} ${w} ${u}`);
      });
    });
  });
  return hasil;
}

const daftar = buatDaftar();
console.log(daftar);
