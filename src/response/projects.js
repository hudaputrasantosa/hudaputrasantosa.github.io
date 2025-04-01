const baseUrlImages =
  "https://res.cloudinary.com/daxz4cuqx/image/upload/v1709809962/assets";
const baseUrl =
  "https://raw.githubusercontent.com/hudaputrasantosa/hudaputrasantosa.github.io/main/public/assets";
const githubUrl = "https://github.com/hudaputrasantosa";

const webProjects = [
  {
    image: `${baseUrlImages}/images/projects/project-7_zscbbq.png`,
    title: "Web Portofolio v2",
    description:
      "Aplikasi portofolio pribadi yang memuat informasi tentang diri, pengalaman, kemampuan atau keterampilan, project yang telah dikerjakan dan sertifikasi.",
    stacks: [
      `${baseUrl}/icons/react.svg`,
      `${baseUrl}/icons/tailwind.svg`,
      `${baseUrl}/icons/flowbite.svg`,
      `${baseUrl}/icons/firebase.svg`,
      `${baseUrl}/icons/api.svg`,
    ],
    repo: `${githubUrl}/hudaputrasantosa.github.io`,
    link: "https://hudaputrasantosa.github.io",
  },
  {
    image: `${baseUrlImages}/images/projects/project-4_rfeauk.png`,
    title: "SiTukang - Sistem Penyedia Portofolio Tukang Bangunan",
    description:
      "Aplikasi untuk mendapatkan informasi terkait keahlian, pengalaman, serta rentang harga dari tukang bangunan, baik secara individu maupun kelompok.",

    stacks: [
      `${baseUrl}/icons/laravel.svg`,
      `${baseUrl}/icons/javascript.svg`,
      `${baseUrl}/icons/jquery.svg`,
      `${baseUrl}/icons/alpine.svg`,
      `${baseUrl}/icons/tailwind.svg`,
      `${baseUrl}/icons/mysql.svg`,
    ],
    repo: `${githubUrl}/situkang-app`,
    link: "",
  },
  {
    image: `${baseUrlImages}/images/projects/project-6_vzm4mm.png`,
    title: "BurnCaloriz - Perencanaan Pembakaran Kalori",
    description:
      "Aplikasi untuk mengoptimalkan perencanaan pembakaran kalori melalui kalkulasi BMR dan prediksi kalori yang terbakar melalui berbagai aktivitas olahraga.",
    stacks: [
      `${baseUrl}/icons/react.svg`,
      `${baseUrl}/icons/tailwind.svg`,
      `${baseUrl}/icons/api.svg`,
    ],
    repo: `${githubUrl}/caloriz-application`,
    link: "https://caloriz-application.vercel.app",
  },
  {
    image: `${baseUrlImages}/images/projects/project-2_aujvn3.png`,
    title: "Ngekoss.id - Sistem Penyedia Sewa Tempat Kos",
    description:
      "Aplikasi untuk mengatasi kesulitan masyarakat dalam mendapatkan informasi mengenai tempat kos pada setiap daerah tertentu",
    stacks: [
      `${baseUrl}/icons/react.svg`,
      `${baseUrl}/icons/express.svg`,
      `${baseUrl}/icons/css.svg`,
      `${baseUrl}/icons/mongodb.svg`,
      `${baseUrl}/icons/prisma.svg`,
    ],
    repo: `${githubUrl}/ngekos-app-client`,
    link: "",
  },
  {
    image: `${baseUrlImages}/images/projects/project-5_eipl83.png`,
    title:
      "Sistem Informasi Desawisata Karangtengah, Kec. Cilongok Kab. Banyumas",
    description:
      "Sistem informasi pada desa karangtengah, kec. cilongok, Kab. Banyumas yang bertujuan untuk memanajmene data informasi mengenai pemerintahan desa",
    stacks: [
      `${baseUrl}/icons/php.svg`,
      `${baseUrl}/icons/javascript.svg`,
      `${baseUrl}/icons/bootstrap.svg`,
      `${baseUrl}/icons/mysql.svg`,
    ],
    repo: `${githubUrl}/website-desawisata-karangtengah`,
    link: "",
  },
];

const apiProjects = [
  {
    image: `${baseUrlImages}/images/projects/project-4.png`,
    title: "Microservice App - Common Package",
    description:
      "Backend Service untuk memberikan sebuah layanan API berupa Restful API atau gRPC pada service sistem pengelolaan user account seperti autentikasi dan manajemen data",
    stacks: [
      `${baseUrl}/icons/golang.svg`,
      `${baseUrl}/icons/redis.svg`,
      `${baseUrl}/icons/docker.svg`,
      `${baseUrl}/icons/swagger.svg`,
    ],
    repo: `${githubUrl}/common-package-microapp`,
  },
  {
    image: `${baseUrlImages}/images/projects/project-4.png`,
    title: "Microservice App - User Account",
    description:
      "Backend Service untuk memberikan sebuah layanan API berupa Restful API atau gRPC pada service sistem pengelolaan user account seperti autentikasi dan manajemen data",
    stacks: [
      `${baseUrl}/icons/golang.svg`,
      `${baseUrl}/icons/postgresql.svg`,
      `https://res.cloudinary.com/daxz4cuqx/image/upload/v1711812293/assets/icons/gorm_j9gw6g.svg`,
      `${baseUrl}/icons/redis.svg`,
      `${baseUrl}/icons/docker.svg`,
      `${baseUrl}/icons/swagger.svg`,
    ],
    repo: `${githubUrl}/auth-users-api`,
  },
  {
    image: `${baseUrlImages}/images/projects/project-4.png`,
    title: "Air Polution Integration API",
    description:
      "Backend Service untuk memberikan sebuah layanan API pada sistem informasi kualitas udara berdasarkan daerah",
    stacks: [
      `${baseUrl}/icons/express.svg`,
      `${baseUrl}/icons/typescript.svg`,
      `${baseUrl}/icons/axios.svg`,
      `${baseUrl}/icons/redis.svg`,
    ],
    repo: `${githubUrl}/air-polution-cached`,
  },
  {
    image: `${baseUrlImages}/images/projects/project-4.png`,
    title: "REST API Booking book",
    description:
      "Backend Service untuk memberikan sebuah layanan API pada sistem peminjaman buku oleh peminjam kepada admin perpustakaan",
    stacks: [
      `${baseUrl}/icons/express.svg`,
      `${baseUrl}/icons/mysql.svg`,
      `${baseUrl}/icons/sequelize.svg`,
      `${baseUrl}/icons/jest.svg`,
      `${baseUrl}/icons/swagger.svg`,
    ],
    repo: `${githubUrl}/rest-api-book-test`,
  },
  {
    image: `${baseUrlImages}/images/projects/project-4.png`,
    title: "REST API Marketplace",
    description:
      "Backend Service untuk memberikan sebuah layanan API pada sistem marketplace atau jual beli produk antara pembeli dengan admin atau penjual",
    stacks: [
      `${baseUrl}/icons/express.svg`,
      `${baseUrl}/icons/mysql.svg`,
      `${baseUrl}/icons/sequelize.svg`,
      `${baseUrl}/icons/jest.svg`,
      `${baseUrl}/icons/swagger.svg`,
    ],
    repo: `${githubUrl}/marketplace-api`,
  },
  {
    image: `${baseUrlImages}/images/projects/project-4.png`,
    title: "REST API Ngekoss.id Application",
    description:
      "Backend Service untuk memberikan sebuah layanan API pada sistem penyewaan tempat kos di daerah indonesia",
    stacks: [
      `${baseUrl}/icons/express.svg`,
      `${baseUrl}/icons/mongodb.svg`,
      `${baseUrl}/icons/prisma.svg`,
      `${baseUrl}/icons/postman.svg`,
    ],
    repo: `${githubUrl}/ngekos-api-dev`,
  },
  {
    image: `${baseUrlImages}/images/projects/project-4.png`,
    title: "REST API Todolist",
    description:
      "Backend Service untuk memberikan sebuah layanan API pada sistem Todo List",
    stacks: [
      `${baseUrl}/icons/express.svg`,
      `${baseUrl}/icons/mongodb.svg`,
      `${baseUrl}/icons/prisma.svg`,
      `${baseUrl}/icons/postman.svg`,
    ],
    repo: `${githubUrl}/todolist-with-mevn`,
  },
];

export { webProjects, apiProjects };
