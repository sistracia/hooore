import type { Portfolio } from "@/types/portfolio";

const contents: Portfolio["contents"] = [
  {
    type: "wrapper_one_column",
    align: "center",
    items: [
      {
        type: "image",
        full: true,
        src: "https://res.cloudinary.com/dcej6w6ct/image/upload/v1720777849/hooore-web-profile/person-smile.png",
        alt: "Portfolio Thumbnail",
      },
    ],
  },
  {
    type: "divider",
    subtle: false,
  },
  {
    type: "wrapper_one_column",
    align: "center",
    items: [
      {
        type: "identity",
        items: [
          {
            title: "Cliet",
            content: {
              type: "identity_text",
              text: "InstaGo",
            },
          },
          {
            title: "Year",
            content: {
              type: "identity_text",
              text: "2024",
            },
          },
          {
            title: "Service",
            content: {
              type: "identity_list",
              ordered: false,
              items: ["Product Design", "Marketing", "3D Model"],
            },
          },
          {
            title: "Award",
            content: {
              type: "identity_text",
              text: "Best Design SComplex 2024 ",
            },
          },
        ],
      },
    ],
  },
  {
    type: "divider",
    subtle: false,
  },
  {
    type: "wrapper_one_column",
    align: "center",
    items: [
      {
        type: "list",
        items: [
          {
            title: "Product Design",
            titleVariant: "h2",
            description:
              "Just take out whatever you don't want. It'll change your entire perspective. In this world, everything can be happy. I will take some magic white, and a little bit of Vandyke brown and a little touch of yellow. Volunteering your time; it pays you and your whole community fantastic dividends. Fluff it up a little and hypnotize it. Take your time. Speed will come later.",
          },
          {
            title: "Marketing",
            titleVariant: "h2",
            description:
              "You can create the world you want to see and be a part of. You have that power. Trees grow however makes them happy. We'll take a little bit of Van Dyke Brown. You want your tree to have some character. Make it special. If you don't think every day is a good day - try missing a few. You'll see. We'll paint one happy little tree right here. Son of a gun.",
          },
          {
            title: "3D Model",
            titleVariant: "h2",
            description:
              "Trees get lonely too, so we'll give him a little friend. It's a good way of getting rid of all your anxieties and hostilities. You can create anything that makes you happy. And just raise cain. Now, we're going to fluff this cloud. Sometimes you learn more from your mistakes than you do from your masterpieces. Here's something that's fun.",
          },
        ],
      },
    ],
  },
  {
    type: "divider",
    subtle: false,
  },
  {
    type: "wrapper_one_column",
    align: "left",
    items: [
      {
        type: "title",
        titleVariant: "h2",
        text: "Efisiensi Operasional",
      },
      {
        type: "subtitle",
        text: "Optimalisasi Proses Bisnis",
      },
      {
        type: "paragraph",
        text: "Solusi software yang disesuaikan dirancang khusus untuk memenuhi kebutuhan unik bisnis Anda. Ini berarti setiap fitur dan fungsi dalam software tersebut dapat dioptimalkan untuk meningkatkan efisiensi operasional. Dengan proses bisnis yang otomatis dan terintegrasi, Anda dapat mengurangi waktu dan biaya yang dihabiskan untuk tugas-tugas manual, sehingga memungkinkan tim Anda fokus pada tugas yang lebih strategis.",
      },
      {
        type: "image",
        full: true,
        src: "https://res.cloudinary.com/dcej6w6ct/image/upload/v1720777849/hooore-web-profile/person-smile.png",
        alt: "Efisiensi Operasional Image",
      },
    ],
  },
  {
    type: "divider",
    subtle: false,
  },
  {
    type: "wrapper_two_column",
    title: "Keamanan Data",
    items: [
      {
        type: "list",
        items: [
          {
            title: "Perusahaan Logistik XYZ",
            titleVariant: "h3",
            description:
              "Perusahaan Logistik XYZ mengalami peningkatan efisiensi sebesar 30% setelah mengimplementasikan solusi software khusus untuk manajemen rantai pasokan mereka. Dengan fitur-fitur yang disesuaikan, seperti pelacakan pengiriman real-time dan analisis kinerja kendaraan, mereka dapat mengoptimalkan rute pengiriman dan mengurangi biaya operasional.",
            image: {
              type: "image",
              full: true,
              src: "https://res.cloudinary.com/dcej6w6ct/image/upload/v1720777849/hooore-web-profile/person-smile.png",
              alt: "Perusahaan Logistik XYZ Image",
            },
          },
        ],
      },
    ],
  },
];

const portfolios: Portfolio[] = [
  {
    title: "3D Tissue Max",
    description:
      "Artikel ini menjelaskan pentingnya memiliki solusi software yang disesuaikan dengan kebutuhan bisnis untuk meningkatkan efisiensi dan produktivitas.",
    thumbnail_url:
      "https://res.cloudinary.com/dcej6w6ct/image/upload/v1720777849/hooore-web-profile/person-smile.png",
    thumbnail_alt: "3D Tissue Max portfolio thumbnail",
    slug: "3d-tissue-max-1",
    tags: ["Website"],
    contents,
  },
  {
    title: "3D Tissue Max",
    description:
      "Artikel ini menjelaskan pentingnya memiliki solusi software yang disesuaikan dengan kebutuhan bisnis untuk meningkatkan efisiensi dan produktivitas.",
    thumbnail_url:
      "https://res.cloudinary.com/dcej6w6ct/image/upload/v1720777849/hooore-web-profile/person-smile.png",
    thumbnail_alt: "3D Tissue Max portfolio thumbnail",
    slug: "3d-tissue-max-2",
    tags: ["Website"],
    contents,
  },
  {
    title: "3D Tissue Max",
    description:
      "Artikel ini menjelaskan pentingnya memiliki solusi software yang disesuaikan dengan kebutuhan bisnis untuk meningkatkan efisiensi dan produktivitas.",
    thumbnail_url:
      "https://res.cloudinary.com/dcej6w6ct/image/upload/v1720777849/hooore-web-profile/person-smile.png",
    thumbnail_alt: "3D Tissue Max portfolio thumbnail",
    slug: "3d-tissue-max-3",
    tags: ["Website"],
    contents,
  },
];

export default portfolios;
