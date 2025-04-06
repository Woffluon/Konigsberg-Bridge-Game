export interface Point {
  x: number;
  y: number;
}

export interface BridgeInteraction {
  id: number; // Benzersiz köprü ID'si
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface Level {
  name: string;
  backgroundImage: string; // Arka plan görselinin URL'si
  viewBox: string; // SVG viewBox boyutu (görselin en boy oranıyla uyumlu)
  bridges: BridgeInteraction[]; // Köprü etkileşim alanları
  totalBridges: number; // Toplam köprü sayısı (görseldeki)
}

// Seviye 1: Königsberg Klasik
const konigsbergLevel: Level = {
  name: "Königsberg Klasik",
  backgroundImage: "https://lh3.googleusercontent.com/fife/ALs6j_Glget5JQuGuM9KWqaeF-qeHQ2BkeBkr0k_XnpeVXCIPB5JwXq4o-cCT5LGdVcqRZii0DHK1sxijwQYe3HPHYlcg0TGmdxrQ93dQ4QBNMIk453lutXKYBbTmKC-6bOpYUz7gconjz3edkD5M2OdYh41fqw_LH6jXXrjDftPzTfo6MS1F47I2iTFlbFWbxSipDTuEtPdzJKel2keZMsBc6Vzjkjsrm5YXAfE50z8yRqi7ScrNHqBDAmIhEtamA0xKZHTpepb8f4urZ-q5hqUfOA2WGiPTzxri4FtztJ4t-SpcGSF3RFUn3nLN99vNgKM3qs_KdcVGuMBrX2P9GrgPmY4TRbfhmF5fJS9MZw9Wk1wQYi4ZTCKB73LYJV4PTSppEVj0GOn7Y4GqBx77Eg7yyrXtU0KE4n5dZU-xhCrDkSw2z-qxcmXmgot2UnvYx1dcZgokQoLpMTEBOPtFwUGAm6OI0M-Oume2x41mlPPw7wxm6A4-yoRVA_CW6NW_HpkSr6N78wt5AHOcGhRZPdcYHEWQ1sF3Jf4A-8fvwtXZ0bs-e4iGCQ69LXZ49yBqYTHOyXhKbKGp3EN__7DX54BX31RRvjbdjAYVZhfw2yW2IiisOsgNqxMD-nEquwtqzOzkCOTx9muTIPJTlhk6FpdKGUdL1OYSg9fWn3jpqcUhCWvW9Y1EahQcRxlYa2VPh7gJ_EJl3OvjTVRMawUZczz6Oa7bOBLDVdmqo4PfTafoDxTET5DqkHMedXe0hKv9A2OvzaVcKYH3OVdudK7gvMcrU9tFwmzvlqOvq8KuMtKeemEPpvDb4orD3fzUzTeWatOzj2W0fTtbIPN7ERyP4I5Wt_OVToQda6Nz6IBnZmqJN4_t8_7pVh5k6OmcDmiysdinPKJ1dzyy4QsFuPFmmljs3H8_UYVdZJf3F6tjjUIWeinYI-UA_OhNcHRewXiK_RKhW-7fKVXfvVB3d-rdk5S3sCQn-3b_adxH5Q4wNqsxFqzszCqz2ZKuEkw7WAtdOtmsLm7rrFKWFAA-hZ_by7w_XGUzBCa0wRz-UqIKaL2ZiciRTuzJuLo_MQIFpHNfALyyJ6zRY2xa7MdveFRp5Zn5ixZP7LLOUlzXshbwDzx2FD39jZrcV9A5m6XoI-Hhqil66tv5EDxobV6R3TW3T2zg0qJKEWCfEmUHqEty4lJxoV9BAtDaZ6WYhmeXSLwX48gvV_CqL1tvJNAg1XBN1nZiaZ6FxlM-6z6dec0DyIPT8F3BlFd6xIUrySVe72XM4jEhz7j8OZ4AcX2JH6MjZqKYTgvtviOSRlxjm5Eu4Q7vqMC2X6aXssDSK0yVSKVotjYmzSmp4rhe4Ok1I5Vn3qGjZZEwdYBdDAZVYl-DK2MTJo3ceKs8--xlPpJyfEcABonIqODWHMBITML9mx2ZFgIYQR7E-7lLfuYOu9YkOFS_wZsmEqxMHu57EegCW6-O2fxeGmN9EQGB_6Rvw8T5whc7tWLqLaHTY2Pb11zgOggoI5QoxwLGIv9uwhZBsgRE8LGGRbrb-ozjGzWgTW3RqSsIY8FAkkfXk05QzDMf19bbM1m6WaUurk2oN1IvCbAayPz6dzkoEpqjjzdfZLZtKY=w1920-h919", // Yeni URL ile güncellendi
  viewBox: "0 0 800 383", // Görselin en boy oranına göre ayarlandı (1920/919 ≈ 800/383)
  totalBridges: 7, // Görseldeki köprü sayısını kontrol edin!
  bridges: [
    // *** BU KOORDİNATLAR GÜNCELLENMELİDİR! ***
    { id: 0, x: 60, y: 135, width: 40, height: 70 },
    { id: 1, x: 190, y: 135, width: 40, height: 70 },
    { id: 2, x: 380, y: 40, width: 40, height: 70 },
    { id: 3, x: 380, y: 135, width: 40, height: 70 },
    { id: 4, x: 190, y: 235, width: 40, height: 70 }, // Bu köprü görselde yok gibi? Kontrol edin.
    { id: 5, x: 380, y: 235, width: 40, height: 70 },
    { id: 6, x: 590, y: 135, width: 40, height: 70 },
  ]
};

// Seviye 2: Dairesel Yol
const circularLevel: Level = {
  name: "Dairesel Yol",
  backgroundImage: "https://lh3.googleusercontent.com/fife/ALs6j_F2ZxV_HmtuZDjgztMyBzRJ_8eqcrIHQg7jfmmxIv-csD2XfKyVO8-D5TvnKSG9__oXBhVDObCPa-66IS-twtEzKrpvQI7veGggOypvbXWygfBe5ckNGuxIcTdbMInvTEug1Us58ad4R9tBxKruEm7En1cyKxlZ65-jBV10HJhd2CGy7blWpU8pPzLfqP_51JQMOqt5aZhz-G_9_TU5tL4pIaH97Z7iUjPSoA6S-xDF8-KOFxcjRTnZARejrv5vi5Hfrr0mwzebmJ-Qdt8ACdPixgATeD8MsCvT6-LegQRCsmrcv3L7oJWGqNvvelNpKNGvMqmehaDoSM51f-xc-H6GsoMyw6svFrLJJd0aM6nZckmm9h0Cbrhaev5ECTfhJ0m540s0gmmrJBYLUAfG3_YoxoNi6hSmkh2oWhsK_iwEfIKtR4XvdK4E84u7cc8wJwka_ekBCe8_y8F2vnsLHFjFd8m1DcU73E0eaKsp8s2wp_17C0L4gt0d_bzTwna5PnVyi4xUL8zZ2lIhD9ARZc92Xz4C-vrgsyDyCh-VN9adsz6M01P9UX94_GIAVrONzhdfO7zwcn1pZJ42ncyOmSkwzAhAFOL98aggjM-uoKLUpIejoXyWBO663Z5ox-qj4h-3G5DxqOwcvStPu1qgMxwInYqQCWNFsayJEiv_-aXTHoAc2COSsr9o_5E7_yQ5wHtmvzdEiBiYYmO1nhmdJiL6cB7UWlBJ65w7uIkejA4LKrCAG7bk7GwUxYvIb5id5aSC0nQpPjaYndRcmSGEz93G1azHK7hNWIBfMcpRGdxb5pe2w3RcGERh8OfpLzQPhkWCZqeLNdiQxXtpoY0hqQYagDt3zp4taJF2CV0Zgg3MaIUUbaOqfFiaWUHWesxZoACg_OQiQwdyOAswQUxmA7e-9rb_-TtriV05qxDp7rn1W4sOnUkxctp4AgGSfu6sNcL7fv-PZqDQaV0T_7cxf9R8xyyZrujoIEcDQ16kEqOs73Pv420hRlKcHc0Cy9OsAJEzvxim2scG1j_QkDeC1Dn_4eNO3pJwF96qHsfiZFwWSiobcr17J9s0zVfsHiqSNrKNFYG-xi-CM72xI2dQo61VdcYZRnzkJq3QK9AO45kIqPy8TUSIC2eHTHDURgaoADJO6h4d5y7RT6dDhRNkje7OzFAmZiKG5g3cSv_eluMUfDTLO7wv4cYxp_Zrvb8gCUQMuEwidUthOz_Fh-iQzaKvAD8MTC_Ua2UuLPvxn2SvS3rSA8RKnutGgPa4RY8F-BcQbrTLlWWeSbhjq5H5vk6boo4rV6CF99SSum5aNOwT0Z-xHRjS-cI1Xfh0Tdk2Mbx3nOAYJ0CAyGv7VQiJeYsLV0NM2Dy6GV5YC5-ltTWBzOyjVH-O68Vu2DH5hMpda7JyuY8aCHfgxFyW2fKhXXxYjZKm3zt6qffM6z3AXoCiAdBIG5YzSm7WRiqbWVnFGgNTf6mYY85qgOaPHL70RsFJpz3i73CFR4gN0Yk_qouLj7IoJKv3PuLmOvvdvol0_ck_c8XnHB_FLSIyPAeVdr7UYSsFGbm_8loEhtCN4-ypGCSD5-MVfHpex0Mswhx7-8J8ppMnU5wJmZD743kj-g=w1920-h919",
  viewBox: "0 0 800 383", // Görselin en boy oranına göre ayarlandı (1920/919 ≈ 800/383)
  totalBridges: 7, // Görseldeki köprü sayısını kontrol edin!
  bridges: [
    // *** BU KOORDİNATLAR GÜNCELLENMELİDİR! ***
    { id: 0, x: 100, y: 180, width: 100, height: 40 }, // Sol
    { id: 1, x: 250, y: 80, width: 40, height: 100 },  // Sol Üst
    { id: 2, x: 450, y: 80, width: 40, height: 100 },  // Sağ Üst
    { id: 3, x: 600, y: 180, width: 100, height: 40 }, // Sağ
    { id: 4, x: 450, y: 270, width: 40, height: 100 }, // Sağ Alt
    { id: 5, x: 250, y: 270, width: 40, height: 100 }, // Sol Alt
    { id: 6, x: 350, y: 350, width: 100, height: 40 }, // Alt
  ]
};

// Seviye 3: Königsberg Varyant (3. URL için)
const konigsbergVariantLevel: Level = {
  name: "Königsberg Varyant",
  backgroundImage: "https://lh3.googleusercontent.com/fife/ALs6j_EwXCfsOE9rAFX_Qwcr64MtH9grp73h8g80SRUDuj5MUhoQAEKwlq3TENl3dXHNh_a2ePwIebIteKCLHXo7AfTPfJPiWSYF8xw1WLe3LHzxoFE4ChxLy8utl3b8fEbDi2qiZv0RsiJSBBLreIxbr_R3wfF1-T-X8YISRY0gnuNO92GeqS7fHaLfWmlYM4gVCP-gH5NugwBfcOZutNb_J093Q_HbwJpGC16Usm42AuN7_Lym1XE6yW8NqcNIFolaE8JnV-u1K4mP9OQ59E-V2bZDGyh-93nZ15956UyVsMmzvMbYtHUc3i0QqB2UFtVPG34ngabL_bphShcTW1fka6iNSa5bGH2PtEp5PZBi0YQnR1kOKMWnlgjWKkii3nTHg6g0ePj0cUtFqwhAypJyaOd5YDdmuR7bCJ3MXQRXInR6C7knJQXhQBFt6Zo7DcwizR9i9kxc8VgQrwbSgYkms25Lnb1SzBj7bV-P4fcyffcGGXlBL5sLdCkxNi7CSK6AzHOB3obzv27dCzQVdf2qK14JnrmMJZ7R-G4ODHYCUYbmgGWWpH5-vpT_cruIdkjAz9W4NXUKcAJXAGd4of1K24d_85hs-Mju7e49zoJWow5JQ2b27Vkh2AIURmCzOb2Tmd5Cm7nb-bmpctBjkFKEjmzDiGbSiYXG1gZ_Nq2PVHpPAhGlMZIq9Nebd2LxlM-TiImsua4wMyX4CBO0q73iU3-3XQgOZkvccCaZaYiZB6BE0BtcAQ1o9m_3Q_7U8VANImJUZPtIaoOPTQJmNLhV4pQJCOLsCAvahjc2ALVPxshzvDwQFFk3Oy4ps0bCCuHw0SsbUtq8SobXytgbQumhWpRD1WC9eAtUz6y4Axw2sicZSfyk3SlG8m4ybujm32pzU15jJfNjwf9_1ptRHNSkxacib0D79ssPqSUUmBOH_wjRy5Xx_y0Iwtu3ShStMY2ygYkHCJ_tVAvRZCKoqFsXBXF2rSKyT7qomsF9QCEUw4rAumiw2QL2b2DQKqkqikkTJ2DiUthKC38nriaaHRgQWVrh7Ig4VLPHflluChmfmKJSe5DXH4JDg7bKoVU62ZT1obfwy53uJLPYIqR7438JqP6MLs8rgs3cHJTvQ8nG6PWyW4D36D4C-YioNyIhS7RYdfDCjr_1bEU-WTApyUL9HPATveo8GUCZBMWywWTPp5GhZqWqKQKPabqCfRNSSLFtX9cQsi6XPfXmUxEsJfyAH7FsLtUbL89poTHgtTWEFzONy9__jJTvLkwX1XPcBgKEu8uXhOSC5t88CKvsCDFKLG5Fdv7lKI8-QGX4mA4Btiexwmi1r28OoWqixTGw5EvU9Z5OJYaC7Mb5AHZeQft9_Yge0cqrvEM0uS7JVeUEPCLmTMKS3yiMHvpb-xBDCihoWvOZ2CafQDqywbOxUI7ITepFqNh7d34Owzi7HD6d0478VrYzHGhAjySOhCM0SlFvMH-s0p7Z9YQrobkPn2jgkjNnNdJF5H3gfHOZBgfXRcqLUcdKkEgnBNE5S1wXQulWBm4P4Nc7aXA6JVcPBQInwubj1pP3P3VdxOUPTxlAX818AZXoQI2LA7T4QJB40rFYfAm-AwIxZItCgMcqxh9mcQ=w1920-h919",
  viewBox: "0 0 800 383", // Görselin en boy oranına göre ayarlandı
  totalBridges: 7, // Görseldeki köprü sayısını kontrol edin!
  bridges: [
    // *** BU KOORDİNATLAR GÜNCELLENMELİDİR! (Muhtemelen Seviye 1 ile aynı) ***
    { id: 0, x: 60, y: 135, width: 40, height: 70 },
    { id: 1, x: 190, y: 135, width: 40, height: 70 },
    { id: 2, x: 380, y: 40, width: 40, height: 70 },
    { id: 3, x: 380, y: 135, width: 40, height: 70 },
    { id: 4, x: 190, y: 235, width: 40, height: 70 }, // Kontrol edin.
    { id: 5, x: 380, y: 235, width: 40, height: 70 },
    { id: 6, x: 590, y: 135, width: 40, height: 70 },
  ]
};


export const levels: Level[] = [
  konigsbergLevel,
  circularLevel,
  konigsbergVariantLevel, // Üçüncü seviyeyi ekledik
];

// Çizgi segmenti ve dikdörtgen kesişimini kontrol eden fonksiyon
export function intersectLineRectangle(p1: Point, p2: Point, rect: BridgeInteraction): boolean {
  const minX = rect.x;
  const maxX = rect.x + rect.width;
  const minY = rect.y;
  const maxY = rect.y + rect.height;

  // Basit sınırlayıcı kutu kontrolü
  if ((p1.x < minX && p2.x < minX) || (p1.x > maxX && p2.x > maxX) ||
      (p1.y < minY && p2.y < minY) || (p1.y > maxY && p2.y > maxY)) {
    return false;
  }

  // Çizgi denklemi: y = mx + c veya x = k
  const dx = p2.x - p1.x;
  const dy = p2.y - p1.y;

  if (Math.abs(dx) < 1e-6 && Math.abs(dy) < 1e-6) return false; // Nokta ise kesişmez

  // Cohen-Sutherland algoritması veya Liang-Barsky algoritması daha sağlamdır,
  // ancak basitlik için çizginin dikdörtgen kenarlarıyla kesişimini kontrol edebiliriz.

  // Sol kenarla kesişim
  if (intersectLineSegment(p1, p2, { x: minX, y: minY }, { x: minX, y: maxY })) return true;
  // Sağ kenarla kesişim
  if (intersectLineSegment(p1, p2, { x: maxX, y: minY }, { x: maxX, y: maxY })) return true;
  // Üst kenarla kesişim
  if (intersectLineSegment(p1, p2, { x: minX, y: minY }, { x: maxX, y: minY })) return true;
  // Alt kenarla kesişim
  if (intersectLineSegment(p1, p2, { x: minX, y: maxY }, { x: maxX, y: maxY })) return true;

  // Çizginin tamamen dikdörtgen içinde olup olmadığını kontrol et (nadiren gerekli)
  // if (p1.x >= minX && p1.x <= maxX && p1.y >= minY && p1.y <= maxY &&
  //     p2.x >= minX && p2.x <= maxX && p2.y >= minY && p2.y <= maxY) return true;


  return false; // Yukarıdakilerin hiçbiri değilse kesişim yok
}

// İki çizgi segmentinin kesişip kesişmediğini kontrol eden yardımcı fonksiyon
// Kaynak: https://stackoverflow.com/a/24392281/1491109 (Basitleştirilmiş)
function intersectLineSegment(p1: Point, p2: Point, p3: Point, p4: Point): boolean {
    function orientation(p: Point, q: Point, r: Point): number {
        const val = (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y);
        if (val === 0) return 0; // Collinear
        return (val > 0) ? 1 : 2; // Clockwise or Counterclockwise
    }

    function onSegment(p: Point, q: Point, r: Point): boolean {
        return (q.x <= Math.max(p.x, r.x) && q.x >= Math.min(p.x, r.x) &&
                q.y <= Math.max(p.y, r.y) && q.y >= Math.min(p.y, r.y));
    }

    const o1 = orientation(p1, p2, p3);
    const o2 = orientation(p1, p2, p4);
    const o3 = orientation(p3, p4, p1);
    const o4 = orientation(p3, p4, p2);

    if (o1 !== o2 && o3 !== o4) return true; // Genel durum

    // Özel durumlar (collinear)
    if (o1 === 0 && onSegment(p1, p3, p2)) return true;
    if (o2 === 0 && onSegment(p1, p4, p2)) return true;
    if (o3 === 0 && onSegment(p3, p1, p4)) return true;
    if (o4 === 0 && onSegment(p3, p2, p4)) return true;

    return false;
}
