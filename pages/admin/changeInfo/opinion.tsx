import React from "react";
import Layout from "../Layout";

function opinion() {
  const idea = [
    {
      img: "/images/landin/smiling.png",
      show: "نمایش",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
        >
          <path
            d="M6.49166 4.99948C6.49166 5.82448 5.825 6.49115 5 6.49115C4.175 6.49115 3.50833 5.82448 3.50833 4.99948C3.50833 4.17448 4.175 3.50781 5 3.50781C5.825 3.50781 6.49166 4.17448 6.49166 4.99948Z"
            stroke="#288E87"
            stroke-width="0.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5 8.44662C6.47083 8.44662 7.84166 7.57995 8.79583 6.07995C9.17083 5.49245 9.17083 4.50495 8.79583 3.91745C7.84166 2.41745 6.47083 1.55078 5 1.55078C3.52916 1.55078 2.15833 2.41745 1.20416 3.91745C0.829163 4.50495 0.829163 5.49245 1.20416 6.07995C2.15833 7.57995 3.52916 8.44662 5 8.44662Z"
            stroke="#288E87"
            stroke-width="0.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      delite: "حذف",
      svg2: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="7"
          height="8"
          viewBox="0 0 7 8"
          fill="none"
        >
          <path
            d="M1.3125 7.22266C1.1225 7.22266 0.932502 7.15266 0.782502 7.00266C0.492502 6.71266 0.492502 6.23266 0.782502 5.94266L5.7225 1.00266C6.0125 0.712656 6.4925 0.712656 6.7825 1.00266C7.0725 1.29266 7.0725 1.77266 6.7825 2.06266L1.8425 7.00266C1.6925 7.15266 1.5025 7.22266 1.3125 7.22266Z"
            fill="#C70000"
          />
          <path
            d="M6.2525 7.22289C6.0625 7.22289 5.8725 7.15289 5.7225 7.00289L0.782502 2.05289C0.492502 1.76289 0.492502 1.28289 0.782502 0.992891C1.0725 0.702891 1.5525 0.702891 1.8425 0.992891L6.7825 5.94289C7.0725 6.23289 7.0725 6.71289 6.7825 7.00289C6.6325 7.15289 6.4425 7.22289 6.2525 7.22289Z"
            fill="#C70000"
          />
        </svg>
      ),
      name: "امیر رئیسی",
      resault: "علت مراجعه : عمل لیزیک",
      date: "1402/03/05",
      hour: "16:04",
      text: "من مشکل بینایی داشتم. بعد از سه ماه رفتن به دکترهای دیگر به هیچ نتیجه‌‌ای نرسیدم. به آقای دکتر مکارمی مراجعه کردم و ایشان به بهترین نحو مشکل بینایی منو به صورت کامل برطرف کردن. از لطف و زحمات ایشون بسیار سپاسگزارم.",
    },
    {
      img: "/images/landin/smiling.png",
      show: "نمایش",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
        >
          <path
            d="M6.49166 4.99948C6.49166 5.82448 5.825 6.49115 5 6.49115C4.175 6.49115 3.50833 5.82448 3.50833 4.99948C3.50833 4.17448 4.175 3.50781 5 3.50781C5.825 3.50781 6.49166 4.17448 6.49166 4.99948Z"
            stroke="#288E87"
            stroke-width="0.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5 8.44662C6.47083 8.44662 7.84166 7.57995 8.79583 6.07995C9.17083 5.49245 9.17083 4.50495 8.79583 3.91745C7.84166 2.41745 6.47083 1.55078 5 1.55078C3.52916 1.55078 2.15833 2.41745 1.20416 3.91745C0.829163 4.50495 0.829163 5.49245 1.20416 6.07995C2.15833 7.57995 3.52916 8.44662 5 8.44662Z"
            stroke="#288E87"
            stroke-width="0.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      delite: "حذف",
      svg2: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="7"
          height="8"
          viewBox="0 0 7 8"
          fill="none"
        >
          <path
            d="M1.3125 7.22266C1.1225 7.22266 0.932502 7.15266 0.782502 7.00266C0.492502 6.71266 0.492502 6.23266 0.782502 5.94266L5.7225 1.00266C6.0125 0.712656 6.4925 0.712656 6.7825 1.00266C7.0725 1.29266 7.0725 1.77266 6.7825 2.06266L1.8425 7.00266C1.6925 7.15266 1.5025 7.22266 1.3125 7.22266Z"
            fill="#C70000"
          />
          <path
            d="M6.2525 7.22289C6.0625 7.22289 5.8725 7.15289 5.7225 7.00289L0.782502 2.05289C0.492502 1.76289 0.492502 1.28289 0.782502 0.992891C1.0725 0.702891 1.5525 0.702891 1.8425 0.992891L6.7825 5.94289C7.0725 6.23289 7.0725 6.71289 6.7825 7.00289C6.6325 7.15289 6.4425 7.22289 6.2525 7.22289Z"
            fill="#C70000"
          />
        </svg>
      ),
      name: "امیر رئیسی",
      resault: "علت مراجعه : عمل لیزیک",
      date: "1402/03/05",
      hour: "16:04",

      text: "من مشکل بینایی داشتم. بعد از سه ماه رفتن به دکترهای دیگر به هیچ نتیجه‌‌ای نرسیدم. به آقای دکتر مکارمی مراجعه کردم و ایشان به بهترین نحو مشکل بینایی منو به صورت کامل برطرف کردن. از لطف و زحمات ایشون بسیار سپاسگزارم.",
    },
    {
      img: "/images/landin/smiling.png",
      show: "نمایش",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
        >
          <path
            d="M6.49166 4.99948C6.49166 5.82448 5.825 6.49115 5 6.49115C4.175 6.49115 3.50833 5.82448 3.50833 4.99948C3.50833 4.17448 4.175 3.50781 5 3.50781C5.825 3.50781 6.49166 4.17448 6.49166 4.99948Z"
            stroke="#288E87"
            stroke-width="0.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5 8.44662C6.47083 8.44662 7.84166 7.57995 8.79583 6.07995C9.17083 5.49245 9.17083 4.50495 8.79583 3.91745C7.84166 2.41745 6.47083 1.55078 5 1.55078C3.52916 1.55078 2.15833 2.41745 1.20416 3.91745C0.829163 4.50495 0.829163 5.49245 1.20416 6.07995C2.15833 7.57995 3.52916 8.44662 5 8.44662Z"
            stroke="#288E87"
            stroke-width="0.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      delite: "حذف",
      svg2: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="7"
          height="8"
          viewBox="0 0 7 8"
          fill="none"
        >
          <path
            d="M1.3125 7.22266C1.1225 7.22266 0.932502 7.15266 0.782502 7.00266C0.492502 6.71266 0.492502 6.23266 0.782502 5.94266L5.7225 1.00266C6.0125 0.712656 6.4925 0.712656 6.7825 1.00266C7.0725 1.29266 7.0725 1.77266 6.7825 2.06266L1.8425 7.00266C1.6925 7.15266 1.5025 7.22266 1.3125 7.22266Z"
            fill="#C70000"
          />
          <path
            d="M6.2525 7.22289C6.0625 7.22289 5.8725 7.15289 5.7225 7.00289L0.782502 2.05289C0.492502 1.76289 0.492502 1.28289 0.782502 0.992891C1.0725 0.702891 1.5525 0.702891 1.8425 0.992891L6.7825 5.94289C7.0725 6.23289 7.0725 6.71289 6.7825 7.00289C6.6325 7.15289 6.4425 7.22289 6.2525 7.22289Z"
            fill="#C70000"
          />
        </svg>
      ),
      name: "امیر رئیسی",
      resault: "علت مراجعه : عمل لیزیک",
      date: "1402/03/05",
      hour: "16:04",

      text: "من مشکل بینایی داشتم. بعد از سه ماه رفتن به دکترهای دیگر به هیچ نتیجه‌‌ای نرسیدم. به آقای دکتر مکارمی مراجعه کردم و ایشان به بهترین نحو مشکل بینایی منو به صورت کامل برطرف کردن. از لطف و زحمات ایشون بسیار سپاسگزارم.",
    },
  ];
  const other = [
    {
      img: "/images/landin/smiling.png",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
        >
          <path
            d="M6.49166 4.99948C6.49166 5.82448 5.825 6.49115 5 6.49115C4.175 6.49115 3.50833 5.82448 3.50833 4.99948C3.50833 4.17448 4.175 3.50781 5 3.50781C5.825 3.50781 6.49166 4.17448 6.49166 4.99948Z"
            stroke="#064247"
            stroke-width="0.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5 8.44662C6.47083 8.44662 7.84166 7.57995 8.79583 6.07995C9.17083 5.49245 9.17083 4.50495 8.79583 3.91745C7.84166 2.41745 6.47083 1.55078 5 1.55078C3.52916 1.55078 2.15833 2.41745 1.20416 3.91745C0.829163 4.50495 0.829163 5.49245 1.20416 6.07995C2.15833 7.57995 3.52916 8.44662 5 8.44662Z"
            stroke="#064247"
            stroke-width="0.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      namayesh: "نمایش",
      svg2: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
        >
          <path
            d="M6.05416 3.94531L3.94583 6.05365C3.675 5.78281 3.50833 5.41198 3.50833 4.99948C3.50833 4.17448 4.175 3.50781 5 3.50781C5.4125 3.50781 5.78333 3.67448 6.05416 3.94531Z"
            stroke="#C70000"
            stroke-width="0.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.425 2.40469C6.69583 1.85469 5.8625 1.55469 5 1.55469C3.52916 1.55469 2.15833 2.42135 1.20416 3.92135C0.829163 4.50885 0.829163 5.49635 1.20416 6.08385C1.53333 6.60052 1.91666 7.04635 2.33333 7.40469"
            stroke="#C70000"
            stroke-width="0.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3.50833 8.13802C3.98333 8.33802 4.4875 8.44635 5 8.44635C6.47083 8.44635 7.84167 7.57969 8.79583 6.07969C9.17083 5.49219 9.17083 4.50469 8.79583 3.91719C8.65833 3.70052 8.50833 3.49635 8.35416 3.30469"
            stroke="#C70000"
            stroke-width="0.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.46251 5.29102C6.35417 5.87852 5.87501 6.35768 5.28751 6.46602"
            stroke="#C70000"
            stroke-width="0.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3.94584 6.05469L0.833344 9.16719"
            stroke="#C70000"
            stroke-width="0.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.16667 0.833984L6.05417 3.94648"
            stroke="#C70000"
            stroke-width="0.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      dontnamayesh: "عدم نمایش",
      flname: "امیر رئیسی",
      elat: "علت مراجعه : عمل لیزیک",
      tarikh: "1402/03/05",
      saat: "16:04",
      matn: "من مشکل بینایی داشتم. بعد از سه ماه رفتن به دکترهای دیگر به هیچ نتیجه‌‌ای نرسیدم. به آقای دکتر مکارمی مراجعه کردم و ایشان به بهترین نحو مشکل بینایی منو به صورت کامل برطرف کردن. از لطف و زحمات ایشون بسیار سپاسگزارم.",
    },
    {
      img: "/images/landin/smiling.png",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
        >
          <path
            d="M6.49166 4.99948C6.49166 5.82448 5.825 6.49115 5 6.49115C4.175 6.49115 3.50833 5.82448 3.50833 4.99948C3.50833 4.17448 4.175 3.50781 5 3.50781C5.825 3.50781 6.49166 4.17448 6.49166 4.99948Z"
            stroke="#064247"
            stroke-width="0.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5 8.44662C6.47083 8.44662 7.84166 7.57995 8.79583 6.07995C9.17083 5.49245 9.17083 4.50495 8.79583 3.91745C7.84166 2.41745 6.47083 1.55078 5 1.55078C3.52916 1.55078 2.15833 2.41745 1.20416 3.91745C0.829163 4.50495 0.829163 5.49245 1.20416 6.07995C2.15833 7.57995 3.52916 8.44662 5 8.44662Z"
            stroke="#064247"
            stroke-width="0.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      namayesh: "نمایش",
      svg2: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
        >
          <path
            d="M6.05416 3.94531L3.94583 6.05365C3.675 5.78281 3.50833 5.41198 3.50833 4.99948C3.50833 4.17448 4.175 3.50781 5 3.50781C5.4125 3.50781 5.78333 3.67448 6.05416 3.94531Z"
            stroke="#C70000"
            stroke-width="0.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.425 2.40469C6.69583 1.85469 5.8625 1.55469 5 1.55469C3.52916 1.55469 2.15833 2.42135 1.20416 3.92135C0.829163 4.50885 0.829163 5.49635 1.20416 6.08385C1.53333 6.60052 1.91666 7.04635 2.33333 7.40469"
            stroke="#C70000"
            stroke-width="0.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3.50833 8.13802C3.98333 8.33802 4.4875 8.44635 5 8.44635C6.47083 8.44635 7.84167 7.57969 8.79583 6.07969C9.17083 5.49219 9.17083 4.50469 8.79583 3.91719C8.65833 3.70052 8.50833 3.49635 8.35416 3.30469"
            stroke="#C70000"
            stroke-width="0.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.46251 5.29102C6.35417 5.87852 5.87501 6.35768 5.28751 6.46602"
            stroke="#C70000"
            stroke-width="0.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3.94584 6.05469L0.833344 9.16719"
            stroke="#C70000"
            stroke-width="0.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.16667 0.833984L6.05417 3.94648"
            stroke="#C70000"
            stroke-width="0.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      dontnamayesh: "عدم نمایش",
      flname: "امیر رئیسی",
      elat: "علت مراجعه : عمل لیزیک",
      tarikh: "1402/03/05",
      saat: "16:04",
      matn: "من مشکل بینایی داشتم. بعد از سه ماه رفتن به دکترهای دیگر به هیچ نتیجه‌‌ای نرسیدم. به آقای دکتر مکارمی مراجعه کردم و ایشان به بهترین نحو مشکل بینایی منو به صورت کامل برطرف کردن. از لطف و زحمات ایشون بسیار سپاسگزارم.",
    },
    {
      img: "/images/landin/smiling.png",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
        >
          <path
            d="M6.49166 4.99948C6.49166 5.82448 5.825 6.49115 5 6.49115C4.175 6.49115 3.50833 5.82448 3.50833 4.99948C3.50833 4.17448 4.175 3.50781 5 3.50781C5.825 3.50781 6.49166 4.17448 6.49166 4.99948Z"
            stroke="#064247"
            stroke-width="0.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5 8.44662C6.47083 8.44662 7.84166 7.57995 8.79583 6.07995C9.17083 5.49245 9.17083 4.50495 8.79583 3.91745C7.84166 2.41745 6.47083 1.55078 5 1.55078C3.52916 1.55078 2.15833 2.41745 1.20416 3.91745C0.829163 4.50495 0.829163 5.49245 1.20416 6.07995C2.15833 7.57995 3.52916 8.44662 5 8.44662Z"
            stroke="#064247"
            stroke-width="0.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      namayesh: "نمایش",
      svg2: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
        >
          <path
            d="M6.05416 3.94531L3.94583 6.05365C3.675 5.78281 3.50833 5.41198 3.50833 4.99948C3.50833 4.17448 4.175 3.50781 5 3.50781C5.4125 3.50781 5.78333 3.67448 6.05416 3.94531Z"
            stroke="#C70000"
            stroke-width="0.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.425 2.40469C6.69583 1.85469 5.8625 1.55469 5 1.55469C3.52916 1.55469 2.15833 2.42135 1.20416 3.92135C0.829163 4.50885 0.829163 5.49635 1.20416 6.08385C1.53333 6.60052 1.91666 7.04635 2.33333 7.40469"
            stroke="#C70000"
            stroke-width="0.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3.50833 8.13802C3.98333 8.33802 4.4875 8.44635 5 8.44635C6.47083 8.44635 7.84167 7.57969 8.79583 6.07969C9.17083 5.49219 9.17083 4.50469 8.79583 3.91719C8.65833 3.70052 8.50833 3.49635 8.35416 3.30469"
            stroke="#C70000"
            stroke-width="0.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.46251 5.29102C6.35417 5.87852 5.87501 6.35768 5.28751 6.46602"
            stroke="#C70000"
            stroke-width="0.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3.94584 6.05469L0.833344 9.16719"
            stroke="#C70000"
            stroke-width="0.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.16667 0.833984L6.05417 3.94648"
            stroke="#C70000"
            stroke-width="0.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      dontnamayesh: "عدم نمایش",
      flname: "امیر رئیسی",
      elat: "علت مراجعه : عمل لیزیک",
      tarikh: "1402/03/05",
      saat: "16:04",
      matn: "من مشکل بینایی داشتم. بعد از سه ماه رفتن به دکترهای دیگر به هیچ نتیجه‌‌ای نرسیدم. به آقای دکتر مکارمی مراجعه کردم و ایشان به بهترین نحو مشکل بینایی منو به صورت کامل برطرف کردن. از لطف و زحمات ایشون بسیار سپاسگزارم.",
    },
  ];
  return (
    <Layout>
      <div className="mt-[3%] mr-[5%] overflow-y-auto" >
        <div className="flex items-center">
          <p className="text-[16px] text-[#45CBC2]">تغییر اطلاعات</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="9"
            height="14"
            viewBox="0 0 9 14"
            fill="none"
            className="mx-[2%]"
          >
            <path
              d="M8 1.5L2 7L8 12.5"
              stroke="#064247"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
          <p className="text-[20px] text-[#757575]">نظرات</p>
        </div>
        <div style={{direction:"ltr"}}  className="w-[957px] h-[521px] bg-[#D9D2F9] rounded-md mt-[5%] gap-1 overflow-y-auto border-[#D9D2F9] border-t-[45px] border-b-[30px] border-r-[30px]" >
          <p className="text-[14px] text-[#064247] font-medium mr-[5%]">
            نظرات جدید
          </p>
          {idea.map((item) => {
            return (
              <div  className=" bg-white w-[875px] h-[193px] rounded-xl mt-[1%] flex mx-auto ">
                <div className=" mr-[1%] ml-[2%]">
                  <img
                    src={item.img}
                    alt="img"
                    className="w-[65px] h-[65px] rounded-full bg-gray-200"
                  />
                </div>
                <div className="flex flex-col w-[85%]">
                  <div className="flex items-center mt-[2%]">
                    {item.svg}
                    <button className="text-[#064247] text-[12px] mx-[1%] ">
                    
                      {item.show}
                    </button>
                    <p className="mx-[1%]"> {item.svg2}</p>
                    <button className="text-[#C70000] text-[12px]">
                     
                      {item.delite}
                    </button>
                  </div>
                  <p className="text-[18px] mt-[1%] mb-[1%]"> {item.name}</p>
                  <p className="text-[#0D0630] text-[12px] mb-[1%]">
                  
                    {item.resault}
                  </p>
                  <div className=" flex ">
                    <p className="text-[12px] mb-[1%] ml-[3%]"> {item.date}</p>
                    <p className="text-[12px]"> {item.hour}</p>
                  </div>
                  <p className="text-[14px] text-[#064247] font-iranSansLight"> {item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div style={{direction:"ltr"}} className="w-[957px] h-[521px] bg-[#D6F3F1] rounded-md mt-[5%] gap-1 overflow-y-auto border-[#D6F3F1] border-t-[45px] border-b-[30px] border-r-[30px]">
          <p className="text-[14px] text-[#064247] mr-[5%]">
            نظرات قرارگرفته در سایت
          </p>
          {other.map((item) => {
            return (
              <div dir="rtl" className="flex bg-white rounded-xl w-[875px] max-h-[193px] mx-auto mt-[1%] ">
                <div className="w-[63px] h-[63px] bg-gray-200 rounded-full  mt-[2%] mr-[1%] ml-[2%]">
                  <img src={item.img} alt="img" className="rounded-full " />
                </div>
                <div className="flex flex-col w-[85%]">
                  <div className="flex items-center  mt-[2%]">
                   {item.svg}
                    <button className="mx-[1%] text-[12px] text-[#064247] font-medium">{item.namayesh}</button>
                   <p className="mx-[1%] "> {item.svg2}</p>
                   <button className="text-[#C70000] text-[12px] font-medium"> {item.dontnamayesh}</button>
                  </div>
                  <p className="text-[18px] font-light my-[1%]"> {item.flname}</p>
                  <p className="text-[12px]"> {item.elat}</p>
                 <div className="flex my-[1%]">
                 <p className="text-[12px] ml-[1%]">{item.tarikh}</p>
                  <p className="text-[12px]"> {item.saat}</p>
                 </div>
                  <p className="text-[14px] text-[#064247]"> {item.matn}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

export default opinion;
