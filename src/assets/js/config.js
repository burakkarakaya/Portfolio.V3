import icons from "@assets/icons.svg";

const config = [
  {
    key: "projects",
    button: {
      title: "Projects",
      degree: 202,
      degreeMobile: 260,
    },
    layer: {
      color: "#e9e6c4",
      distance: 50,
      radius: 55,
      speed: 0,
      duration: 0.2,
    },
    svg: {
      fill: "#ffffff",
      width: "580.205",
      height: "144.304",
      source: "/assets/svg/sections/projects/",
      letters: [
        {
          key: "p",
          path: "M 0 109.352 L 11.7 109.352 L 11.7 58.802 L 40.05 58.802 A 41.672 41.672 0 0 0 57.922 55.071 C 67.79 50.385 74.25 41.402 74.25 28.802 A 27.144 27.144 0 0 0 69.024 12.206 C 65.529 7.541 60.407 4.072 54.049 2.049 A 46.685 46.685 0 0 0 39.9 0.002 L 0 0.002 L 0 109.352 Z M 11.7 11.402 L 39.45 11.402 C 54.685 11.402 62.334 18.392 62.4 29.41 A 24.047 24.047 0 0 1 62.4 29.552 C 62.4 38.425 56.934 44.018 49.15 46.269 A 30.701 30.701 0 0 1 40.65 47.402 L 11.7 47.402 L 11.7 11.402 Z",
        },

        {
          key: "r",
          path: "M 91.2 109.352 L 101.7 109.352 L 101.7 64.202 C 101.7 52.863 109.174 43.422 118.003 41.472 A 15.5 15.5 0 0 1 121.35 41.102 A 12.243 12.243 0 0 1 127.776 42.788 C 130.496 44.43 132.388 47.166 133.397 50.53 A 21.548 21.548 0 0 1 134.25 56.702 L 144.6 54.902 A 25.215 25.215 0 0 0 141.675 42.881 A 21.022 21.022 0 0 0 123.3 31.502 C 113.85 31.502 105.45 36.602 101.7 42.602 L 101.7 32.702 L 91.2 32.702 L 91.2 109.352 Z",
        },

        {
          key: "o",
          path: "M 152.55 70.952 C 152.55 94.352 166.95 110.702 187.5 110.702 A 34.649 34.649 0 0 0 206.361 105.519 C 216.731 98.922 222.75 86.491 222.75 70.952 A 44.935 44.935 0 0 0 218.737 51.97 C 214.758 43.39 208.14 37.032 200.344 33.784 A 31.378 31.378 0 0 0 188.25 31.352 A 34.548 34.548 0 0 0 154.578 56.776 A 48.226 48.226 0 0 0 152.55 70.952 Z M 206.769 89.306 A 36.681 36.681 0 0 0 211.65 70.502 A 37.993 37.993 0 0 0 208.921 55.988 A 22.647 22.647 0 0 0 187.8 40.802 A 26.656 26.656 0 0 0 187.098 40.812 C 177.413 41.067 170.53 46.607 166.824 54.775 A 38.58 38.58 0 0 0 163.65 70.652 A 38.076 38.076 0 0 0 166.678 85.778 A 22.615 22.615 0 0 0 187.5 100.652 A 22.002 22.002 0 0 0 206.769 89.306 Z",
        },

        {
          key: "j",
          path: "M 273.9 32.852 L 262.65 32.852 L 262.65 118.802 C 262.778 130.819 258.439 134.229 255.111 135.067 A 8.113 8.113 0 0 1 253.5 135.302 C 249.101 135.449 244.416 132.299 244.207 126.554 A 11.048 11.048 0 0 1 244.2 126.152 L 234 128.252 C 233.851 135.393 241.227 144.304 252.908 144.304 A 23.063 23.063 0 0 0 253.2 144.302 A 23.506 23.506 0 0 0 254.05 144.274 C 263.975 143.769 273.9 136.907 273.9 119.552 L 273.9 32.852 Z M 266.82 16.384 A 9.761 9.761 0 0 0 268.35 16.502 C 272.621 16.502 275.704 13.89 276.332 9.933 A 9.761 9.761 0 0 0 276.45 8.402 C 276.45 4.131 273.837 1.048 269.88 0.42 A 9.761 9.761 0 0 0 268.35 0.302 C 264.079 0.302 260.996 2.915 260.368 6.872 A 9.761 9.761 0 0 0 260.25 8.402 C 260.25 12.673 262.863 15.757 266.82 16.384 Z",
        },

        {
          key: "e",
          path: "M 358.35 85.202 L 348 82.952 A 21.236 21.236 0 0 1 335.426 99.021 A 21.384 21.384 0 0 1 326.85 100.802 C 313.323 100.802 303.11 91.139 302.302 74.328 A 45.312 45.312 0 0 1 302.25 72.152 L 359.4 72.152 C 360 47.252 343.95 32.102 326.4 32.102 A 33.502 33.502 0 0 0 304.754 39.558 C 298.73 44.504 294.452 51.65 292.442 60.193 A 50.268 50.268 0 0 0 291.15 71.702 A 43.892 43.892 0 0 0 296.216 92.806 C 301.657 102.771 311.223 109.445 323.634 110.427 A 40.767 40.767 0 0 0 326.85 110.552 C 343.95 110.552 356.55 98.102 358.35 85.202 Z M 347.4 63.152 L 303 63.152 A 24.394 24.394 0 0 1 320.562 42.249 A 24.111 24.111 0 0 1 326.4 41.552 C 338.55 41.552 346.35 51.602 347.4 63.152 Z",
        },

        {
          key: "c",
          path: "M 424.8 56.552 L 434.7 55.052 A 21.633 21.633 0 0 0 434.161 52.073 C 432.133 44.06 425.453 36.046 414.941 32.969 A 33.677 33.677 0 0 0 405.45 31.652 A 35.41 35.41 0 0 0 371.988 57.839 A 46.147 46.147 0 0 0 369.9 71.702 A 37.707 37.707 0 0 0 394.049 108.8 A 37.973 37.973 0 0 0 406.2 110.702 A 30.689 30.689 0 0 0 424.424 104.931 A 29.243 29.243 0 0 0 436.2 84.602 L 426 82.652 C 425.308 90.96 419.12 99.267 408.381 100.497 A 24.437 24.437 0 0 1 405.6 100.652 A 24.722 24.722 0 0 1 394.588 98.271 C 385.425 93.775 381 83.415 381 71.552 C 381 59.577 385.591 49.964 392.917 44.934 A 21.86 21.86 0 0 1 405.45 41.102 A 20.508 20.508 0 0 1 412.077 42.164 C 419.842 44.8 424.083 51.771 424.8 56.552 Z",
        },

        {
          key: "t",
          path: "M 467.7 13.202 L 456.75 13.202 L 456.75 24.152 L 456.75 21.902 L 456.75 32.852 L 444.9 32.852 L 444.9 41.552 L 456.75 41.552 L 456.75 77.852 C 456.606 97.987 464.874 109.435 479.834 110.344 A 32.405 32.405 0 0 0 481.8 110.402 C 494.613 110.402 505.502 99.008 505.502 84.892 A 27.486 27.486 0 0 0 505.5 84.602 L 496.5 82.652 C 495 95.402 488.25 100.652 481.95 100.652 A 13.875 13.875 0 0 1 475.248 99.122 C 470.988 96.817 468.647 91.984 467.857 85.144 A 50.717 50.717 0 0 1 467.55 79.352 L 467.55 41.552 L 501.45 41.552 L 501.45 32.852 L 467.55 32.852 C 467.55 32.852 467.7 13.202 467.7 13.202 Z",
        },

        {
          key: "s",
          path: "M 527.7 84.152 L 517.5 86.702 A 14.896 14.896 0 0 0 517.498 86.935 C 517.498 95.401 524.649 107.424 542.266 110.142 A 50.057 50.057 0 0 0 549.9 110.702 A 45.563 45.563 0 0 0 560.42 109.56 C 573.87 106.369 579.892 96.98 580.19 87.591 A 23.175 23.175 0 0 0 580.2 87.152 A 23.581 23.581 0 0 0 580.202 86.82 C 580.202 77.964 575.197 69.476 563.801 65.854 A 38.292 38.292 0 0 0 556.65 64.352 L 540.75 62.552 C 534.45 61.802 530.55 58.202 530.55 52.502 A 7.162 7.162 0 0 1 530.786 50.705 C 532.127 45.529 539.103 40.352 549.45 40.352 A 25.856 25.856 0 0 1 554.462 40.81 C 564.088 42.711 566.631 50.118 567.15 55.052 L 576.75 53.102 A 15.27 15.27 0 0 0 576.525 50.621 C 575.383 43.801 569.475 31.652 549.45 31.652 A 41.852 41.852 0 0 0 539.915 32.695 C 527.38 35.624 520.97 44.188 520.265 51.467 A 13.86 13.86 0 0 0 520.2 52.802 A 21.667 21.667 0 0 0 521.224 59.566 C 523.996 68.053 531.858 72.024 538.05 72.752 L 553.8 74.552 A 33.251 33.251 0 0 1 562.046 76.334 C 565.672 77.735 568.375 80.077 569.164 84.12 A 13.461 13.461 0 0 1 569.4 86.702 A 12.495 12.495 0 0 1 561.922 98.497 C 558.843 100.001 554.888 100.802 550.2 100.802 C 536.628 100.802 529.571 94.162 527.999 86.377 A 17.224 17.224 0 0 1 527.7 84.152 Z",
        },
      ],
    },
    content: {
      type: "list",
      data: [
        {
          name: "Nike Geç Kendini",
          link: "https://player.vimeo.com/video/132407281?h=dc31d97a5e",
          agency: "minus99",
          technologies: ["CreateJS", "JQuery", "HTML5", "CSS3"],
          video: true,
          media: [
            'https://www.minus99.com/wp-content/uploads/nike-thumbnail.jpg'
          ],
          type: "Web",
          awards: [
            {
              ico: "fwa",
              link: "https://thefwa.com/cases/nike-ge-kendini",
              title: "Site of the day",
            },

            {
              ico: "webby",
              link: "https://winners.webbyawards.com/2016/websites/features-design/best-use-of-video-or-moving-image/161069/nike-ge%C3%A7-kendini",
              title:
                "Websites and Mobile Sites, Best Use of Video or Moving Image 2016",
            },

            {
              ico: "awwwards",
              link: "https://www.awwwards.com/sites/nike-gec-kendini-experience",
              title: "Site of the day",
            },

            {
              ico: "altinorumcek",
              link: "https://www.altinorumcek.com/ajanslar/99-design-studio/",
              title: "Site of the day",
            },

            {
              ico: "cssda",
              link: "https://www.cssdesignawards.com/sites/nike-gec-kendini/26711/",
              title: "",
            },

            {
              ico: "communicator",
              link: "",
              title: "",
            },

            {
              ico: "w3",
              link: "",
              title: "",
            },
          ],
          description: "",
        },

        {
          name: "Vakko Özeldikim",
          link: "https://www.youtube.com/embed/017X_WLPCj8?si=Noiu7oAP1DavRIRt",
          agency: "minus99",
          technologies: ["Canvas", "JQuery", "HTML5", "CSS3"],
          video: true,
          media: ['https://www.cssdesignawards.com/cdasites/2013/201312/20131213033322.jpg'],
          type: "Web",
          awards: [
            {
              ico: "awwwards",
              link: "www.awwards.com/nikelidyana.com",
              title: "Site of the day",
            },
            {
              ico: "altinorumcek",
              link: "",
              title: "",
            },
          ],
          description: "",
        },

        {
          name: "Flormar Mobile App",
          link: "javascript:void(0);",
          agency: "proj-e",
          technologies: ["CMS", "React Native"],
          media: ['https://www.minus99.com/wp-content/uploads/flormar-thumbnail.jpg'],
          type: "App",
          awards: [],
          description: "",
        },

        {
          name: "Cosmetica Mobile App",
          link: "javascript:void(0);",
          agency: "proj-e",
          technologies: ["CMS", "React Native"],
          media: ['https://hcdn.proj-e.com/proje/uploads/works/cosmetica-poster.jpg'],
          type: "App",
          awards: [],
          description: "",
        },

        {
          name: "VitrA",
          link: "https://www.vitra.com.tr/",
          agency: "proj-e",
          technologies: ["CMS", "C#", "Razor", "Vanilla JS"],
          media: ['https://hcdn.proj-e.com/proje/uploads/works/vitra-cover.jpg'],
          type: "Web",
          awards: [],
          description: "",
        },

        {
          name: "Newbalance",
          link: "https://www.newbalance.com.tr/",
          agency: "proj-e",
          technologies: ["CMS", "C#", "Razor", "Vanilla JS"],
          media: ['https://hcdn.proj-e.com/proje/uploads/works/newbalance-poster.jpg'],
          type: "Web",
          awards: [],
          description: "",
        },

        {
          name: "Kartalyuvasi",
          link: "https://www.kartalyuvasi.com.tr/",
          agency: "proj-e",
          technologies: ["CMS", "C#", "Razor", "Vanilla JS"],
          media: ['https://www.minus99.com/wp-content/uploads/bjk-thumbnail.jpg'],
          type: "Web",
          awards: [],
          description: "",
        },

        {
          name: "Korayspor",
          link: "https://www.korayspor.com/",
          agency: "proj-e",
          technologies: ["CMS", "C#", "Razor", "Vanilla JS"],
          media: ['https://www.minus99.com/wp-content/uploads/korayspor-thumbnail.jpg'],
          type: "Web",
          awards: [],
          description: "",
        },

        {
          name: "Monsternotebook",
          link: "https://www.monsternotebook.com.tr/",
          agency: "proj-e",
          technologies: ["CMS", "C#", "Razor", "Vanilla JS"],
          media: ['https://hcdn.proj-e.com/proje/uploads/works/monster-cover.jpg'],
          type: "Web",
          awards: [],
          description: "",
        },

        {
          name: "Lescon",
          link: "https://www.lescon.com.tr/",
          agency: "proj-e",
          technologies: ["CMS", "C#", "Razor", "Vanilla JS"],
          media: ['https://hcdn.proj-e.com/proje/uploads/works/Lescon.jpg'],
          type: "Web",
          awards: [],
          description: "",
        },

        {
          name: "Unibaby",
          link: "https://www.unibaby.com.tr/",
          agency: "proj-e",
          technologies: ["CMS", "C#", "Razor", "Vanilla JS"],
          media: ['https://www.minus99.com/wp-content/uploads/unibaby-thumbnail.jpg'],
          type: "Web",
          awards: [],
          description: "",
        },

        {
          name: "Machka",
          link: "https://www.machka.com.tr/",
          agency: "proj-e",
          technologies: ["CMS", "C#", "Razor", "Vanilla JS"],
          media: ['https://www.minus99.com/wp-content/uploads/machka-thumbnail.jpg'],
          type: "Web",
          awards: [],
          description: "",
        },

        {
          name: "İpekyol",
          link: "https://www.ipekyol.com.tr/",
          agency: "proj-e",
          technologies: ["CMS", "C#", "Razor", "Vanilla JS"],
          media: ['https://www.minus99.com/wp-content/uploads/ipekyol-thumbnail.jpg'],
          type: "Web",
          awards: [],
          description: "",
        },

        {
          name: "Twist",
          link: "https://www.twist.com.tr/",
          agency: "proj-e",
          technologies: ["CMS", "C#", "Razor", "Vanilla JS"],
          media: ['https://www.minus99.com/wp-content/uploads/machka-thumbnail.jpg'],
          type: "Web",
          awards: [],
          description: "",
        },

        {
          name: "Ok",
          link: "https://www.ok.com.tr/",
          agency: "proj-e",
          technologies: ["CMS", "C#", "Razor", "Vanilla JS"],
          media: [],
          type: "Web",
          awards: [],
          description: "",
        },
      ],
    },
  },

  {
    key: "awards",
    button: {
      title: "Awards",
      degree: 210,
      degreeMobile: 240,
    },
    layer: {
      color: "#bee7c3",
      distance: 50,
      radius: 44,
      speed: 0,
      duration: 0.4,
    },
    svg: {
      fill: "#ffffff",
      width: "504.605",
      height: "110.702",
      source: "/assets/svg/sections/awards/",
      letters: [
        {
          key: "A-",
          path: "M 12 109.35 L 26.25 70.2 L 69.6 70.2 L 83.85 109.35 L 95.85 109.35 L 55.8 0 L 40.2 0 L 0 109.35 L 12 109.35 Z M 48 10.5 L 65.85 60 L 30 60 L 48 10.5 Z",
        },

        {
          key: "w",
          path: "M 117.75 109.35 L 133.65 109.35 L 150.6 44.4 L 166.65 109.35 L 182.85 109.35 L 203.1 32.7 L 192 32.7 L 174.45 101.1 L 158.1 32.85 L 143.25 32.85 L 126 100.8 L 108.45 32.85 L 97.35 32.85 L 117.75 109.35 Z",
        },

        {
          key: "a",
          path: "M 262.35 95.25 L 262.35 109.35 L 273.3 109.35 L 273.3 62.55 C 273.3 43.144 261.177 32.416 245.38 31.556 A 38.262 38.262 0 0 0 243.3 31.5 C 226.43 31.5 215.455 42.661 213.698 51.911 A 13.627 13.627 0 0 0 213.45 54.45 L 223.5 56.7 C 223.766 50.31 230.177 42.738 238.957 41.116 A 18.936 18.936 0 0 1 242.4 40.8 A 18.769 18.769 0 0 1 260.097 50.692 C 261.137 52.816 261.836 55.314 262.091 58.216 A 28.864 28.864 0 0 1 262.2 60.75 L 262.2 62.55 C 216.736 64.695 211.471 78.285 211.077 88.776 A 40.602 40.602 0 0 0 211.05 90.3 C 211.05 99.43 217.664 107.678 229.475 109.846 A 35.014 35.014 0 0 0 235.8 110.4 A 37.196 37.196 0 0 0 243.581 109.619 C 254.052 107.384 259.653 100.766 262.35 95.25 Z M 262.35 72 L 262.35 77.25 C 262.2 90.45 249.75 100.65 238.95 100.5 A 26.5 26.5 0 0 1 230.944 99.358 C 225.557 97.636 221.942 93.967 222.15 88.35 A 11.06 11.06 0 0 1 226.101 80.121 C 230.899 75.882 240.911 72.673 260.52 72.05 A 207.042 207.042 0 0 1 262.35 72 Z",
        },

        {
          key: "r",
          path: "M 291.9 109.35 L 302.4 109.35 L 302.4 64.2 C 302.4 52.861 309.874 43.42 318.703 41.469 A 15.5 15.5 0 0 1 322.05 41.1 A 12.243 12.243 0 0 1 328.476 42.786 C 331.196 44.427 333.088 47.164 334.097 50.528 A 21.548 21.548 0 0 1 334.95 56.7 L 345.3 54.9 A 25.215 25.215 0 0 0 342.375 42.878 A 21.022 21.022 0 0 0 324 31.5 C 314.55 31.5 306.15 36.6 302.4 42.6 L 302.4 32.7 L 291.9 32.7 L 291.9 109.35 Z",
        },

        {
          key: "d",
          path: "M 412.95 96.9 L 412.95 109.35 L 424.2 109.35 L 424.2 4.35 L 412.95 4.35 L 412.95 46.2 C 407.1 37.35 397.95 31.35 387 31.35 C 369.495 31.35 354.598 46.035 353.336 67.923 A 52.597 52.597 0 0 0 353.25 70.95 A 50.602 50.602 0 0 0 356.497 89.467 C 361.63 102.527 372.628 110.7 387.9 110.7 A 29.696 29.696 0 0 0 399.346 108.509 A 30.038 30.038 0 0 0 412.95 96.9 Z M 367.045 56.927 A 37.315 37.315 0 0 0 364.65 70.5 A 37.677 37.677 0 0 0 367.624 85.529 A 22.014 22.014 0 0 0 388.05 99.9 A 22.905 22.905 0 0 0 406.949 89.533 A 33.111 33.111 0 0 0 412.65 70.65 A 35.292 35.292 0 0 0 410.407 57.97 A 23.756 23.756 0 0 0 387.75 41.85 C 378.023 41.85 370.63 47.757 367.045 56.927 Z",
        },

        {
          key: "s",
          path: "M 452.1 84.15 L 441.9 86.7 A 14.896 14.896 0 0 0 441.898 86.933 C 441.898 95.399 449.049 107.422 466.666 110.14 A 50.057 50.057 0 0 0 474.3 110.7 A 45.563 45.563 0 0 0 484.82 109.557 C 498.27 106.367 504.292 96.978 504.59 87.589 A 23.175 23.175 0 0 0 504.6 87.15 A 23.581 23.581 0 0 0 504.602 86.818 C 504.602 77.962 499.597 69.473 488.201 65.851 A 38.292 38.292 0 0 0 481.05 64.35 L 465.15 62.55 C 458.85 61.8 454.95 58.2 454.95 52.5 A 7.162 7.162 0 0 1 455.186 50.702 C 456.527 45.526 463.503 40.35 473.85 40.35 A 25.856 25.856 0 0 1 478.862 40.807 C 488.488 42.709 491.031 50.116 491.55 55.05 L 501.15 53.1 A 15.27 15.27 0 0 0 500.925 50.618 C 499.783 43.799 493.875 31.65 473.85 31.65 A 41.852 41.852 0 0 0 464.315 32.693 C 451.78 35.622 445.37 44.186 444.665 51.465 A 13.86 13.86 0 0 0 444.6 52.8 A 21.667 21.667 0 0 0 445.624 59.564 C 448.396 68.05 456.258 72.022 462.45 72.75 L 478.2 74.55 A 33.251 33.251 0 0 1 486.446 76.331 C 490.072 77.733 492.775 80.075 493.564 84.118 A 13.461 13.461 0 0 1 493.8 86.7 A 12.495 12.495 0 0 1 486.322 98.495 C 483.243 99.999 479.287 100.8 474.6 100.8 C 461.028 100.8 453.971 94.159 452.399 86.375 A 17.224 17.224 0 0 1 452.1 84.15 Z",
        },
      ],
    },
    content: {
      type: "list",
      data: [
        {
          name: "Nike Geç Kendini",
          link: "https://player.vimeo.com/video/132407281?h=dc31d97a5e",
          agency: "minus99",
          technologies: ["CreateJS", "JQuery", "HTML5", "CSS3"],
          video: true,
          media: [
            'https://www.minus99.com/wp-content/uploads/nike-thumbnail.jpg'
          ],
          type: "Web",
          awards: [
            {
              ico: "fwa",
              link: "https://thefwa.com/cases/nike-ge-kendini",
              title: "Site of the day",
            },

            {
              ico: "webby",
              link: "https://winners.webbyawards.com/2016/websites/features-design/best-use-of-video-or-moving-image/161069/nike-ge%C3%A7-kendini",
              title:
                "Websites and Mobile Sites, Best Use of Video or Moving Image 2016",
            },

            {
              ico: "awwwards",
              link: "https://www.awwwards.com/sites/nike-gec-kendini-experience",
              title: "Site of the day",
            },

            {
              ico: "altinorumcek",
              link: "https://www.altinorumcek.com/ajanslar/99-design-studio/",
              title: "Site of the day",
            },

            {
              ico: "cssda",
              link: "https://www.cssdesignawards.com/sites/nike-gec-kendini/26711/",
              title: "",
            },

            {
              ico: "communicator",
              link: "",
              title: "",
            },

            {
              ico: "w3",
              link: "",
              title: "",
            },
          ],
          description: "",
        },

        {
          name: "Vakko Özeldikim",
          link: "https://www.youtube.com/embed/017X_WLPCj8?si=Noiu7oAP1DavRIRt",
          agency: "minus99",
          technologies: ["Canvas", "JQuery", "HTML5", "CSS3"],
          video: true,
          media: ['https://www.cssdesignawards.com/cdasites/2013/201312/20131213033322.jpg'],
          type: "Web",
          awards: [
            {
              ico: "awwwards",
              link: "www.awwards.com/nikelidyana.com",
              title: "Site of the day",
            },
            {
              ico: "altinorumcek",
              link: "",
              title: "",
            },
          ],
          description: "",
        },

        {
          name: "Ramsey",
          link: "https://www.ramsey.com.tr",
          agency: "minus99",
          technologies: ["Flash", "Actionscript 3.0"],
          media: [],
          type: "Web",
          awards: [
            {
              ico: "",
              link: "",
              title: "Designlicks",
            },
          ],
          description: "",
        },
      ],
    },
  },

  {
    key: "skills",
    button: {
      title: "Skills",
      degree: 215,
      degreeMobile: 250,
    },
    layer: {
      color: "#c7dcd9",
      distance: 50,
      radius: 33,
      speed: 0,
      duration: 0.6,
    },
    svg: {
      fill: "#ffffff",
      width: "333.026",
      height: "111.903",
      source: "/assets/svg/sections/skills/",
      letters: [
        {
          key: "S-",
          path: "M 47.871 47.252 L 28.071 43.202 A 21.834 21.834 0 0 1 22.746 41.406 C 20.495 40.277 18.784 38.803 17.551 37.057 A 15.053 15.053 0 0 1 15.021 28.202 A 16.07 16.07 0 0 1 23.212 14.146 C 27.14 11.767 32.44 10.352 39.021 10.352 C 55.111 10.352 64.228 18.632 64.228 30.475 A 23.372 23.372 0 0 1 64.221 31.052 L 75.021 28.802 C 75.021 15.425 64.952 1.221 42.302 0.076 A 59.065 59.065 0 0 0 39.321 0.002 A 49.59 49.59 0 0 0 25.25 1.916 C 12.297 5.744 4.715 14.808 3.383 24.508 A 22.732 22.732 0 0 0 3.171 27.602 A 29.758 29.758 0 0 0 5.264 38.991 C 8.402 46.613 14.941 51.719 24.021 53.702 L 44.271 58.052 A 98.184 98.184 0 0 1 51.62 59.921 C 66.708 64.457 67.971 70.314 67.971 79.502 C 67.971 88.732 62.024 98.595 45.598 100.142 A 49.35 49.35 0 0 1 40.971 100.352 C 23.667 100.352 10.446 92.04 11.66 72.541 A 42.648 42.648 0 0 1 11.721 71.702 L 0.021 73.952 A 41.919 41.919 0 0 0 0.005 75.092 C 0.005 96.522 16.632 111.152 39.921 111.152 A 58.858 58.858 0 0 0 54.451 109.468 C 59.936 108.071 64.495 105.861 68.173 103.054 A 30.673 30.673 0 0 0 80.121 78.002 C 80.121 64.881 73.197 55.222 57.237 49.76 A 76.424 76.424 0 0 0 47.871 47.252 Z",
        },

        {
          key: "k",
          path: "M 96.021 1.052 L 96.021 110.552 L 107.121 110.702 L 106.971 86.402 L 119.571 72.752 L 147.171 110.552 L 160.971 110.552 L 126.471 65.702 L 154.521 34.052 L 141.171 34.052 L 107.121 71.402 L 107.121 1.052 L 96.021 1.052 Z",
        },

        {
          key: "i",
          path: "M 177.471 110.552 L 188.721 110.552 L 188.721 34.052 L 177.471 34.052 L 177.471 110.552 Z M 181.491 17.584 A 9.761 9.761 0 0 0 183.021 17.702 C 187.292 17.702 190.375 15.089 191.003 11.132 A 9.761 9.761 0 0 0 191.121 9.602 C 191.121 5.331 188.508 2.248 184.551 1.62 A 9.761 9.761 0 0 0 183.021 1.502 C 178.75 1.502 175.667 4.114 175.039 8.072 A 9.761 9.761 0 0 0 174.921 9.602 C 174.921 13.873 177.533 16.956 181.491 17.584 Z",
        },

        {
          key: "l",
          path: "M 211.071 110.552 L 221.871 110.552 L 221.871 1.052 L 211.221 1.052 L 211.071 110.552 Z",
        },

        {
          key: "l",
          path: "M 241.821 110.552 L 252.621 110.552 L 252.621 1.052 L 241.971 1.052 L 241.821 110.552 Z",
        },

        {
          key: "s",
          path: "M 280.521 85.352 L 270.321 87.902 A 14.896 14.896 0 0 0 270.319 88.134 C 270.319 96.601 277.47 108.624 295.086 111.341 A 50.057 50.057 0 0 0 302.721 111.902 A 45.563 45.563 0 0 0 313.24 110.759 C 326.691 107.568 332.713 98.179 333.011 88.791 A 23.175 23.175 0 0 0 333.021 88.352 A 23.581 23.581 0 0 0 333.023 88.02 C 333.023 79.163 328.017 70.675 316.622 67.053 A 38.292 38.292 0 0 0 309.471 65.552 L 293.571 63.752 C 287.271 63.002 283.371 59.402 283.371 53.702 A 7.162 7.162 0 0 1 283.607 51.904 C 284.948 46.728 291.924 41.552 302.271 41.552 A 25.856 25.856 0 0 1 307.283 42.009 C 316.909 43.91 319.451 51.317 319.971 56.252 L 329.571 54.302 A 15.27 15.27 0 0 0 329.346 51.82 C 328.204 45.001 322.295 32.852 302.271 32.852 A 41.852 41.852 0 0 0 292.736 33.895 C 280.201 36.824 273.791 45.388 273.086 52.667 A 13.86 13.86 0 0 0 273.021 54.002 A 21.667 21.667 0 0 0 274.044 60.766 C 276.817 69.252 284.679 73.223 290.871 73.952 L 306.621 75.752 A 33.251 33.251 0 0 1 314.867 77.533 C 318.493 78.935 321.196 81.277 321.985 85.319 A 13.461 13.461 0 0 1 322.221 87.902 A 12.495 12.495 0 0 1 314.743 99.697 C 311.663 101.201 307.708 102.002 303.021 102.002 C 289.449 102.002 282.392 95.361 280.82 87.577 A 17.224 17.224 0 0 1 280.521 85.352 Z",
        },
      ],
    },
    content: {
      type: "text",
      data: `

            <span class="animated skills-title">
            
            <div class="text">
            <h1>
              <span>Hello, I'm </span>
                  <span class="vert-slider">
                    <div class="vert-slider-text3 word">Burak Karakaya</div>
                    <div class="vert-slider-text2 word">a Javascript Developer</div>
                </span>
            </h1> 
            </div>

            </span>

            
            <p class="animated skills-text">
              I am a seasoned professional with <mark>14 years of experience in JavaScript and frontend development</mark>. Throughout my career, I've developed a deep understanding of web development, responsive design, mobile app development, and the e-commerce sector. My areas of expertise include <mark>React</mark> and <mark>React Native technologies</mark>, interactive animations, and third-party integrations. I've refined these skills through hands-on experience and continuous learning.
            </p>

            <p class="animated skills-text">
              Over the course of my career, I've contributed to more than 100 e-commerce projects. In these projects, I created innovative features and interactive elements to enhance user experience. I have extensive experience in both web and mobile app development and have developed mobile applications for brands like Cosmetica and Flormar using React Native.
            </p>

            <p class="animated skills-text">
              My work philosophy promotes collaboration and creativity. While providing user-centric and innovative solutions, I also dive into the technical aspects of projects to ensure their quality. Additionally, my experience as a <mark>Frontend Team Lead</mark> has equipped me with strong team management and mentoring skills.
            </p>

            <p class="animated skills-text">
              Here are some highlights from my career:
              <br>
              <br>
              Achievements: I've earned national and <mark>international awards</mark> for projects with brands like Nike and Vakko. The Nike project, in particular, received "Site of The Day" and Webby Awards, among other prestigious recognitions.
              <br>
              Roles and Responsibilities: I have extensive experience in frontend architecture, custom module development, and third-party integrations. For the past three years, I've served as a Frontend Team Lead, guiding and mentoring my team.
              <br>
              Looking Ahead: I'm always eager to explore new opportunities and potential collaborations. If you're interested in discussing industry trends, innovation, or new projects, feel free to reach out to me. Let's create something amazing together!
            </p>
            
            <p class="animated skills-text">
                <svg viewBox="0 0 200 200" class="textcircle">
                    <title>Projects &amp; client work 2020</title>
                    <defs>
                        <path id="textcircle" d="M100,150 a50,50 0 0,1 0,-100a50,50 0 0,1 0,100Z"></path>
                    </defs>
                    <text>
                        <textPath xlink:href="#textcircle" aria-label="Projects &amp; client work 2020" textLength="300">Senior - Javascript - Developer</textPath>
                    </text>
                </svg>
            </p>

            `,
    },
  },

  {
    key: "contact",
    button: {
      title: "Contact",
      degree: 220,
      degreeMobile: 260,
    },
    layer: {
      color: "#f5e4d9",
      distance: 50,
      radius: 22,
      speed: 0,
      duration: 0.8,
    },
    svg: {
      fill: "#ffffff",
      width: "551.257",
      height: "112.806",
      source: "/assets/svg/sections/contact/",
      letters: [
        {
          key: "C-",
          path: "M 79.955 36 L 91.055 33.9 C 90.155 21 75.455 0 49.505 0 C 28.412 0 6.872 16.3 1.355 42.927 A 66.329 66.329 0 0 0 0.005 56.4 A 68.604 68.604 0 0 0 4.596 81.928 A 47.015 47.015 0 0 0 49.955 112.5 A 43.955 43.955 0 0 0 62.723 110.669 C 82.7 104.638 91.869 85.33 92.964 77.424 A 13.991 13.991 0 0 0 93.005 77.1 L 81.905 74.55 A 18.389 18.389 0 0 1 81.322 76.733 C 78.865 84.295 69.628 101.55 50.255 101.55 A 36.567 36.567 0 0 1 15.453 75.815 A 55.237 55.237 0 0 1 12.305 57 A 55.74 55.74 0 0 1 15.386 38.317 C 20.846 22.914 32.772 13.29 44.698 11.325 A 27.721 27.721 0 0 1 49.205 10.95 C 68.105 10.95 78.605 26.7 79.955 36 Z",
        },

        {
          key: "o",
          path: "M 105.755 73.05 C 105.755 96.45 120.155 112.8 140.705 112.8 A 34.649 34.649 0 0 0 159.566 107.617 C 169.936 101.02 175.955 88.589 175.955 73.05 A 44.935 44.935 0 0 0 171.942 54.068 C 167.963 45.488 161.345 39.13 153.549 35.882 A 31.378 31.378 0 0 0 141.455 33.45 A 34.548 34.548 0 0 0 107.783 58.874 A 48.226 48.226 0 0 0 105.755 73.05 Z M 159.974 91.404 A 36.681 36.681 0 0 0 164.855 72.6 A 37.993 37.993 0 0 0 162.126 58.086 A 22.647 22.647 0 0 0 141.005 42.9 A 26.656 26.656 0 0 0 140.303 42.909 C 130.618 43.165 123.736 48.705 120.029 56.873 A 38.58 38.58 0 0 0 116.855 72.75 A 38.076 38.076 0 0 0 119.883 87.876 A 22.615 22.615 0 0 0 140.705 102.75 A 22.002 22.002 0 0 0 159.974 91.404 Z",
        },

        {
          key: "n",
          path: "M 191.705 111.45 L 202.505 111.45 L 202.505 70.35 A 29.555 29.555 0 0 1 208.034 53.018 A 21.273 21.273 0 0 1 225.005 43.65 A 20.491 20.491 0 0 1 233.972 45.532 C 238.484 47.702 241.599 51.657 243.256 56.913 A 33.301 33.301 0 0 1 244.655 66.9 L 244.655 111.45 L 255.755 111.45 L 255.755 66.15 A 39.336 39.336 0 0 0 253.084 51.49 C 248.619 40.337 239.02 33.6 227.855 33.6 A 30.4 30.4 0 0 0 212.61 37.436 A 26.64 26.64 0 0 0 202.805 47.25 A 0.563 0.563 0 0 0 202.725 47.35 C 202.648 47.473 202.622 47.616 202.505 47.85 L 202.505 34.95 L 191.705 34.95 L 191.705 111.45 Z",
        },

        {
          key: "t",
          path: "M 291.755 15.3 L 280.805 15.3 L 280.805 26.25 L 280.805 24 L 280.805 34.95 L 268.955 34.95 L 268.955 43.65 L 280.805 43.65 L 280.805 79.95 C 280.661 100.085 288.929 111.532 303.889 112.442 A 32.405 32.405 0 0 0 305.855 112.5 C 318.668 112.5 329.557 101.106 329.557 86.99 A 27.486 27.486 0 0 0 329.555 86.7 L 320.555 84.75 C 319.055 97.5 312.305 102.75 306.005 102.75 A 13.875 13.875 0 0 1 299.303 101.22 C 295.043 98.915 292.702 94.082 291.913 87.242 A 50.717 50.717 0 0 1 291.605 81.45 L 291.605 43.65 L 325.505 43.65 L 325.505 34.95 L 291.605 34.95 C 291.605 34.95 291.755 15.3 291.755 15.3 Z",
        },

        {
          key: "a",
          path: "M 391.355 97.35 L 391.355 111.45 L 402.305 111.45 L 402.305 64.65 C 402.305 45.244 390.182 34.516 374.385 33.656 A 38.262 38.262 0 0 0 372.305 33.6 C 355.436 33.6 344.46 44.761 342.703 54.011 A 13.627 13.627 0 0 0 342.455 56.55 L 352.505 58.8 C 352.771 52.41 359.182 44.838 367.962 43.216 A 18.936 18.936 0 0 1 371.405 42.9 A 18.769 18.769 0 0 1 389.102 52.792 C 390.142 54.916 390.841 57.414 391.097 60.317 A 28.864 28.864 0 0 1 391.205 62.85 L 391.205 64.65 C 345.741 66.795 340.476 80.386 340.082 90.877 A 40.602 40.602 0 0 0 340.055 92.4 C 340.055 101.53 346.669 109.778 358.48 111.947 A 35.014 35.014 0 0 0 364.805 112.5 A 37.196 37.196 0 0 0 372.587 111.719 C 383.057 109.484 388.659 102.866 391.355 97.35 Z M 391.355 74.1 L 391.355 79.35 C 391.205 92.55 378.755 102.75 367.955 102.6 A 26.5 26.5 0 0 1 359.949 101.458 C 354.562 99.737 350.947 96.067 351.155 90.45 A 11.06 11.06 0 0 1 355.106 82.221 C 359.905 77.983 369.916 74.774 389.525 74.15 A 207.042 207.042 0 0 1 391.355 74.1 Z",
        },

        {
          key: "c",
          path: "M 470.555 58.65 L 480.455 57.15 A 21.633 21.633 0 0 0 479.916 54.171 C 477.889 46.158 471.208 38.144 460.697 35.067 A 33.677 33.677 0 0 0 451.205 33.75 A 35.41 35.41 0 0 0 417.743 59.937 A 46.147 46.147 0 0 0 415.655 73.8 A 37.707 37.707 0 0 0 439.804 110.898 A 37.973 37.973 0 0 0 451.955 112.8 A 30.689 30.689 0 0 0 470.179 107.029 A 29.243 29.243 0 0 0 481.955 86.7 L 471.755 84.75 C 471.063 93.058 464.875 101.365 454.136 102.594 A 24.437 24.437 0 0 1 451.355 102.75 A 24.722 24.722 0 0 1 440.343 100.369 C 431.181 95.873 426.755 85.513 426.755 73.65 C 426.755 61.675 431.346 52.062 438.672 47.032 A 21.86 21.86 0 0 1 451.205 43.2 A 20.508 20.508 0 0 1 457.832 44.262 C 465.597 46.898 469.838 53.869 470.555 58.65 Z",
        },

        {
          key: "t",
          path: "M 513.455 15.3 L 502.505 15.3 L 502.505 26.25 L 502.505 24 L 502.505 34.95 L 490.655 34.95 L 490.655 43.65 L 502.505 43.65 L 502.505 79.95 C 502.361 100.085 510.629 111.532 525.589 112.442 A 32.405 32.405 0 0 0 527.555 112.5 C 540.368 112.5 551.257 101.106 551.257 86.99 A 27.486 27.486 0 0 0 551.255 86.7 L 542.255 84.75 C 540.755 97.5 534.005 102.75 527.705 102.75 A 13.875 13.875 0 0 1 521.003 101.22 C 516.743 98.915 514.402 94.082 513.613 87.242 A 50.717 50.717 0 0 1 513.305 81.45 L 513.305 43.65 L 547.205 43.65 L 547.205 34.95 L 513.305 34.95 C 513.305 34.95 513.455 15.3 513.455 15.3 Z",
        },
      ],
    },
    content: {
      type: "text",
      data: `
              <div class="animated social-wrapper">
                <span class="mail-text animated">
                <small>Hello there <span class="waving-hand">👋</span></small>
                <span class="t1">Let’s</span> <span class="t2">start</span> <span class="t3">talking!</span>
                </span>

                <a class="mail-button animated" href="mailto:hello@burak.works">hello@burak.works</a>

                <div class="animated social d-flex">

                    <a title="github" class="d-flex" target="_blank" href="https://github.com/burakkarakaya">
                        <span>Github</span>
                    </a>

                    <a title="linkedin" class="d-flex" target="_blank" href="https://www.linkedin.com/in/brkkrky/">
                        <span>Linkedin</span>
                    </a>

                    <a title="instagram" class="d-flex fs-20" target="_blank" href="https://www.instagram.com/travel.with.burak/">
                        <span>Instagram</span>
                    </a>

                    <a title="twitter" class="d-flex" target="_blank" href="https://twitter.com/brk_efe">
                        <span>Twitter</span>
                    </a>

                </div>
              </div>
            `,
    },
  },

  {
    key: "center",
    layer: {
      color: "#000000",
      distance: 50,
      radius: 11,
      speed: 0,
      duration: 1,
    },
  },
];

const colorSchemes = [
  ["#e9e6c4", "#bee7c3", "#c7dcd9", "#f5e4d9"],

  ["#CD8D7A", "#FFE4C9", "#E78895", "#E2BFB3"],
  ["#7BD3EA", "#A1EEBD", "#F6F7C4", "#F6D6D6"],
  ["#8E7AB5", "#B784B7", "#E493B3", "#EEA5A6"],
  ["#944E63", "#B47B84", "#CAA6A6", "#FFE7E7"],
  ["#FF407D", "#FFCAD4", "#40679E", "#1B3C73"],
  ["#35374B", "#344955", "#50727B", "#78A083"],
  ["#5E1675", "#EE4266", "#FFD23F", "#337357"],
];

export { config, colorSchemes };
