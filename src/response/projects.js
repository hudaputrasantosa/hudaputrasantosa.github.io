const baseUrl =
  "https://raw.githubusercontent.com/hudaputrasantosa/hudaputrasantosa.github.io/main";
const webProjects = [
  {
    image: `${baseUrl}/src/assets/img/projects/project-7.png`,
    title: "Web Portofolio v2",
    description:
      "Aplikasi portofolio pribadi yang memuat informasi tentang diri, pengalaman, kemampuan atau keterampilan, project yang telah dikerjakan dan sertifikasi.",
    stacks: [
      `${baseUrl}/src/assets/icons/react.svg`,
      `${baseUrl}/src/assets/icons/tailwind.svg`,
      `${baseUrl}/src/assets/icons/flowbite.svg`,
      `${baseUrl}/src/assets/icons/api.svg`,
    ],
    repo: "https://github.com/hudaputrasantosa/hudaputrasantosa.github.io",
    link: "https://hudaputrasantosa.github.io",
  },
  {
    image: `${baseUrl}/src/assets/img/projects/project-4.png`,
    title: "SiTukang - Sistem Penyedia Portofolio Tukang Bangunan",
    description:
      "Aplikasi untuk mendapatkan informasi terkait keahlian, pengalaman, serta rentang harga dari tukang bangunan, baik secara individu maupun kelompok.",

    stacks: [
      `${baseUrl}/src/assets/icons/laravel.svg`,
      `${baseUrl}/src/assets/icons/javascript.svg`,
      `${baseUrl}/src/assets/icons/tailwind.svg`,
      `${baseUrl}/src/assets/icons/mysql.svg`,
    ],
    repo: "https://github.com/hudaputrasantosa/situkang-app",
    link: "",
  },
  {
    image: `${baseUrl}/src/assets/img/projects/project-6.png`,
    title: "BurnCaloriz - Perencanaan Pembakaran Kalori",
    description:
      "Aplikasi untuk mengoptimalkan perencanaan pembakaran kalori melalui kalkulasi BMR dan prediksi kalori yang terbakar melalui berbagai aktivitas olahraga.",
    stacks: [
      `${baseUrl}/src/assets/icons/react.svg`,
      `${baseUrl}/src/assets/icons/tailwind.svg`,
      `${baseUrl}/src/assets/icons/api.svg`,
    ],
    repo: "https://github.com/hudaputrasantosa/caloriz-application",
    link: "https://caloriz-application.vercel.app",
  },
  {
    image: `${baseUrl}/src/assets/img/projects/project-2.png`,
    title: "Ngekoss.id - Sistem Penyedia Sewa Tempat Kos",
    description:
      "Aplikasi untuk mengatasi kesulitan masyarakat dalam mendapatkan informasi mengenai tempat kos pada setiap daerah tertentu",
    stacks: [
      `${baseUrl}/src/assets/icons/react.svg`,
      `${baseUrl}/src/assets/icons/express.svg`,
      `${baseUrl}/src/assets/icons/css.svg`,
      `${baseUrl}/src/assets/icons/mongodb.svg`,
      `${baseUrl}/src/assets/icons/prisma.svg`,
    ],
    repo: "https://github.com/hudaputrasantosa/ngekos-app-client",
    link: "",
  },
  {
    image: `${baseUrl}/src/assets/img/projects/project-5.png`,
    title:
      "Sistem Informasi Desawisata Karangtengah, Kec. Cilongok Kab. Banyumas",
    description:
      "Sistem informasi pada desa karangtengah, kec. cilongok, Kab. Banyumas yang bertujuan untuk memanajmene data informasi mengenai pemerintahan desa",
    stacks: [
      `${baseUrl}/src/assets/icons/php.svg`,
      `${baseUrl}/src/assets/icons/javascript.svg`,
      `${baseUrl}/src/assets/icons/bootstrap.svg`,
      `${baseUrl}/src/assets/icons/mysql.svg`,
    ],
    repo: "https://github.com/hudaputrasantosa/website-desawisata-karangtengah",
    link: "",
  },
];

const apiProjects = [
  {
    image: `${baseUrl}/src/assets/img/projects/project-4.png`,
    title: "REST API Booking book",
    description:
      "Backend Service untuk memberikan sebuah layanan API pada sistem peminjaman buku oleh peminjam kepada admin perpustakaan",
    stacks: [
      `${baseUrl}/src/assets/icons/express.svg`,
      `${baseUrl}/src/assets/icons/mysql.svg`,
      `${baseUrl}/src/assets/icons/sequelize.svg`,
      `${baseUrl}/src/assets/icons/jest.svg`,
      `${baseUrl}/src/assets/icons/swagger.svg`,
    ],
    repo: "https://github.com/hudaputrasantosa/rest-api-book-test",
  },
  {
    image: `${baseUrl}/src/assets/img/projects/project-4.png`,
    title: "REST API Marketplace",
    description:
      "Backend Service untuk memberikan sebuah layanan API pada sistem marketplace atau jual beli produk antara pembeli dengan admin atau penjual",
    stacks: [
      `${baseUrl}/src/assets/icons/express.svg`,
      `${baseUrl}/src/assets/icons/mysql.svg`,
      `${baseUrl}/src/assets/icons/sequelize.svg`,
      `${baseUrl}/src/assets/icons/jest.svg`,
      `${baseUrl}/src/assets/icons/swagger.svg`,
    ],
    repo: "https://github.com/hudaputrasantosa/marketplace-api",
  },
  {
    image: `${baseUrl}/src/assets/img/projects/project-4.png`,
    title: "REST API Ngekoss.id Application",
    description:
      "Backend Service untuk memberikan sebuah layanan API pada sistem penyewaan tempat kos di daerah indonesia",
    stacks: [
      `${baseUrl}/src/assets/icons/express.svg`,
      `${baseUrl}/src/assets/icons/mongodb.svg`,
      `${baseUrl}/src/assets/icons/prisma.svg`,
      `${baseUrl}/src/assets/icons/postman.svg`,
    ],
    repo: "https://github.com/hudaputrasantosa/ngekos-api-dev",
  },
  {
    image: `${baseUrl}/src/assets/img/projects/project-4.png`,
    title: "REST API Todolist",
    description:
      "Backend Service untuk memberikan sebuah layanan API pada sistem Todo List",
    stacks: [
      `${baseUrl}/src/assets/icons/express.svg`,
      `${baseUrl}/src/assets/icons/mongodb.svg`,
      `${baseUrl}/src/assets/icons/prisma.svg`,
    ],
    repo: "https://github.com/hudaputrasantosa/todolist-with-mevn",
  },
];

export { webProjects, apiProjects };
