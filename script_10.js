// <========================> 1-masala <===========================>

// function teskari(soz) {
//   let  teskariSoz = soz.split('').reverse().join('');
//   return teskariSoz;
// }

// let boshSoz = "Salom";
// let teskariNatija = teskari(boshSoz);
// console.log(boshSoz);
// console.log(teskariNatija);

// <========================> 2-masala <===========================>

// function unliTop(soz) {
//   let unliHarflar = "aeiouAEIOU"; // Unli harflar
//   let unliCounter = 0;

//   for (let i = 0; i < soz.length; i++) {
//     if (unliHarflar.indexOf(soz[i]) !== -1) {
//       unliCounter++;
//     }
//   }

//   return unliCounter;
// }

// // Test qilish
// let soz = "Ramazon";
// let unliCounter = unliTop(soz);
// console.log("So'z: " + soz);
// console.log("Unli harflar soni: " + unliCounter);

// <========================> 3-masala <===========================>

// function palindromTekshir(soz) {
//   let kichikHarf = soz.toLowerCase();

// let teskariYoz = kichikHarf.split('').reverse().join('');

//   return kichikHarf === teskariYoz;
// }

// let testSoz1 = "Alla";

// let result = (palindromTekshir(testSoz1));

// // console.log(result);
// if (result == true) {
//   console.log(testSoz1 + " - bu so'z palindrom!");
// } else {
//   console.log(testSoz1 + " - bu so'z palindrom emas!");
// }

// <========================> 4-masala <===========================>

// function engUzunSozniAniqla(gap) {

//   let sozlar = gap.split(' ');

//   let engUzunSoz = sozlar[0];

//   for (let i = 1; i < sozlar.length; i++) {
//       if (sozlar[i].length > engUzunSoz.length) {
//           engUzunSoz = sozlar[i];
//       }
//   }

//   return engUzunSoz;
// }

// let testGap = "Bu javascript dasturlash tilidir!";
// let uzunSoz = engUzunSozniAniqla(testGap);
// console.log("Test gap: " + testGap);
// console.log("Eng uzun so'z: " + uzunSoz);

// <========================> 5-masala <===========================>
function KattaBilanYozish(gap) {
  if (gap.length > 0) {

    let birinchiHarf = gap.charAt(0);

    let kattaBilanYozilgan = birinchiHarf.toUpperCase() + gap.slice(1);

    // Yangi gapni qaytarish
    return kattaBilanYozilgan;
  } else {
    // Agar gap bo'sh bo'lsa, gapni o'ziga o'zini qaytarish
    return gap;
  }
}

let oddiyGap = "javascript eng zo'r dasturlash tili ";
let boshGap = KattaBilanYozish(oddiyGap);
console.log(boshGap);

