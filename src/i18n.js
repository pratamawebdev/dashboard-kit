import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        titleNavbarOverview: "Overview",
        otherStatus: {
          resolved: "Resolved",
          received: "Received",
        },
        content: {
          description:
            "Earth is the third planet from the Sun and the only astronomical object known to harbor life. According to radiometric dating estimation and other evidence, Earth formed over 4.5 billion years ago. Earth's gravity interacts with other objects in space, especially the Sun and the Moon, which is Earth's only natural satellite. Earth orbits around the Sun in 365.256 solar days, a period known as an Earth side real year. During this time, Earth rotates about its axis 366.256 times, that is, a side real year has 366.256 side real days.",
          source: "Source: ",
        },
      },
    },
    id: {
      translation: {
        titleNavbarOverview: "Ikhtisar",
        otherStatus: {
          resolved: "Diperiksa",
          received: "Diterima",
        },
        content: {
          description:
            "Bumi adalah planet ketiga dari Matahari dan satu-satunya objek astronomi yang diketahui memiliki kehidupan. Menurut estimasi penanggalan radiometrik dan bukti lainnya, Bumi terbentuk lebih dari 4,5 miliar tahun yang lalu. Gravitasi bumi berinteraksi dengan benda-benda lain di ruang angkasa, terutama Matahari dan Bulan, yang merupakan satu-satunya satelit alami Bumi. Bumi mengorbit di sekitar Matahari dalam 365,256 hari matahari, periode yang dikenal sebagai tahun nyata sisi Bumi. Selama waktu ini, Bumi berputar sekitar porosnya 366,256 kali, yaitu tahun sisi samping memiliki 366,256 sisi hari nyata.",
          source: "Sumber: ",
        },
      },
    },
  },
  lng: "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
