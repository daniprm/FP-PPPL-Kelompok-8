const usdToIdr = (usd) => usd * 15000;
const sqftToM2 = (sqft) => Math.round(sqft * 0.092903);

const data = [
  {
    sys: { id: '1' },
    fields: {
      name: 'single economy',
      slug: 'single-economy',
      type: 'single',
      price: usdToIdr(100),
      size: sqftToM2(200),
      featured: false,
      description: 'Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.',
      extras: [
        'Plush pillows and breathable bed linens',
        'Soft, oversized bath towels',
        'Full-sized, pH-balanced toiletries',
        'Complimentary refreshments',
        'Adequate safety/security',
        'Internet',
        'Comfortable beds'
      ],
      images: [
        {
          fields: {
            file: {
              url: '/images/jpeg/details-4.jpeg'
            }
          }
        },
        {
          fields: {
            file: {
              url: '/images/jpeg/details-2.jpeg'
            }
          }
        },
        {
          fields: {
            file: {
              url: '/images/jpeg/details-3.jpeg'
            }
          }
        },
        {
          fields: {
            file: {
              url: '/images/jpeg/details-4.jpeg'
            }
          }
        }
      ]
    }
  },
  {
    sys: { id: '2' },
    fields: {
      name: 'single basic',
      slug: 'single-basic',
      type: 'single',
      price: usdToIdr(150),
      size: sqftToM2(250),
      featured: false,
      description:
        'Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.',
      extras: [
        'Plush pillows and breathable bed linens',
        'Soft, oversized bath towels',
        'Full-sized, pH-balanced toiletries',
        'Complimentary refreshments',
        'Adequate safety/security',
        'Internet',
        'Comfortable beds'
      ],
      images: [
        {
          fields: {
            file: {
              url: '/images/jpeg/room-2.jpeg'
            }
          }
        },
        {
          fields: {
            file: {
              url: '/images/jpeg/details-2.jpeg'
            }
          }
        },
        {
          fields: {
            file: {
              url: '/images/jpeg/details-3.jpeg'
            }
          }
        },
        {
          fields: {
            file: {
              url: '/images/jpeg/details-4.jpeg'
            }
          }
        }
      ]
    }
  },
  {
    sys: { id: '3' },
    fields: {
      name: 'single standard',
      slug: 'single-standard',
      type: 'single',
      price: usdToIdr(250),
      size: sqftToM2(300),
      featured: false,
      description:
        'Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.',
      extras: [
        'Plush pillows and breathable bed linens',
        'Soft, oversized bath towels',
        'Full-sized, pH-balanced toiletries',
        'Complimentary refreshments',
        'Adequate safety/security',
        'Internet',
        'Comfortable beds'
      ],
      images: [
        {
          fields: {
            file: {
              url: '/images/jpeg/room-3.jpeg'
            }
          }
        },
        {
          fields: {
            file: {
              url: '/images/jpeg/details-2.jpeg'
            }
          }
        },
        {
          fields: {
            file: {
              url: '/images/jpeg/details-3.jpeg'
            }
          }
        },
        {
          fields: {
            file: {
              url: '/images/jpeg/details-4.jpeg'
            }
          }
        }
      ]
    }
  },
  {
    sys: { id: '4' },
    fields: {
      name: 'single deluxe',
      slug: 'single-deluxe',
      type: 'single',
      price: usdToIdr(300),
      size: sqftToM2(400),
      featured: false,
      description:
        'Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.',
      extras: [
        'Plush pillows and breathable bed linens',
        'Soft, oversized bath towels',
        'Full-sized, pH-balanced toiletries',
        'Complimentary refreshments',
        'Adequate safety/security',
        'Internet',
        'Comfortable beds'
      ],
      images: [
        {
          fields: {
            file: {
              url: '/images/jpeg/room-4.jpeg'
            }
          }
        },
        {
          fields: {
            file: {
              url: '/images/jpeg/details-2.jpeg'
            }
          }
        },
        {
          fields: {
            file: {
              url: '/images/jpeg/details-3.jpeg'
            }
          }
        },
        {
          fields: {
            file: {
              url: '/images/jpeg/details-4.jpeg'
            }
          }
        }
      ]
    }
  },
  {
    sys: { id: '5' },
    fields: {
      name: 'double economy',
      slug: 'double-economy',
      type: 'double',
      price: usdToIdr(200),
      size: sqftToM2(300),
      featured: false,
      description:
        'Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.',
      extras: [
        'Plush pillows and breathable bed linens',
        'Soft, oversized bath towels',
        'Full-sized, pH-balanced toiletries',
        'Complimentary refreshments',
        'Adequate safety/security',
        'Internet',
        'Comfortable beds'
      ],
      images: [
        {
          fields: {
            file: {
              url: '/images/jpeg/room-5.jpeg'
            }
          }
        },
        {
          fields: {
            file: {
              url: '/images/jpeg/details-2.jpeg'
            }
          }
        },
        {
          fields: {
            file: {
              url: '/images/jpeg/details-3.jpeg'
            }
          }
        },
        {
          fields: {
            file: {
              url: '/images/jpeg/details-4.jpeg'
            }
          }
        }
      ]
    }
  },
  {
    sys: { id: '6' },
    fields: {
      name: 'double basic',
      slug: 'double-basic',
      type: 'double',
      price: usdToIdr(250),
      size: sqftToM2(350),
      featured: false,
      description:
        'Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.',
      extras: [
        'Plush pillows and breathable bed linens',
        'Soft, oversized bath towels',
        'Full-sized, pH-balanced toiletries',
        'Complimentary refreshments',
        'Adequate safety/security',
        'Internet',
        'Comfortable beds'
      ],
      images: [
        {
          fields: {
            file: {
              url: '/images/jpeg/room-6.jpeg'
            }
          }
        },
        {
          fields: {
            file: {
              url: '/images/jpeg/details-2.jpeg'
            }
          }
        },
        {
          fields: {
            file: {
              url: '/images/jpeg/details-3.jpeg'
            }
          }
        },
        {
          fields: {
            file: {
              url: '/images/jpeg/details-4.jpeg'
            }
          }
        }
      ]
    }
  },
  {
    sys: { id: '7' },
    fields: {
      name: 'double standard',
      slug: 'double-standard',
      type: 'double',
      price: usdToIdr(300),
      size: sqftToM2(400),
      featured: false,
      description:
        'Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.',
      extras: [
        'Plush pillows and breathable bed linens',
        'Soft, oversized bath towels',
        'Full-sized, pH-balanced toiletries',
        'Complimentary refreshments',
        'Adequate safety/security',
        'Internet',
        'Comfortable beds'
      ],
      images: [
        {
          fields: {
            file: {
              url: '/images/jpeg/room-7.jpeg'
            }
          }
        },
        {
          fields: {
            file: {
              url: '/images/jpeg/details-2.jpeg'
            }
          }
        },
        {
          fields: {
            file: {
              url: '/images/jpeg/details-3.jpeg'
            }
          }
        },
        {
          fields: {
            file: {
              url: '/images/jpeg/details-4.jpeg'
            }
          }
        }
      ]
    }
  },
  {
    sys: { id: '8' },
    fields: {
      name: 'double deluxe',
      slug: 'double-deluxe',
      type: 'double',
      price: usdToIdr(400),
      size: sqftToM2(500),
      featured: true,
      description:
        'Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.',
      extras: [
        'Plush pillows and breathable bed linens',
        'Soft, oversized bath towels',
        'Full-sized, pH-balanced toiletries',
        'Complimentary refreshments',
        'Adequate safety/security',
        'Internet',
        'Comfortable beds'
      ],
      images: [
        {
          fields: {
            file: {
              url: '/images/jpeg/room-8.jpeg'
            }
          }
        },
        {
          fields: {
            file: {
              url: '/images/jpeg/details-2.jpeg'
            }
          }
        },
        {
          fields: {
            file: {
              url: '/images/jpeg/details-3.jpeg'
            }
          }
        },
        {
          fields: {
            file: {
              url: '/images/jpeg/details-4.jpeg'
            }
          }
        }
      ]
    }
  },
  {
    sys: { id: '9' },
    fields: {
      name: 'family economy',
      slug: 'family-economy',
      type: 'family',
      price: usdToIdr(300),
      size: sqftToM2(500),
      featured: false,
      description:
        'Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.',
      extras: [
        'Plush pillows and breathable bed linens',
        'Soft, oversized bath towels',
        'Full-sized, pH-balanced toiletries',
        'Complimentary refreshments',
        'Adequate safety/security',
        'Internet',
        'Comfortable beds'
      ],
      images: [
        {
          fields: {
            file: {
              url: '/images/jpeg/room-9.jpeg'
            }
          }
        },
        {
          fields: {
            file: {
              url: '/images/jpeg/details-2.jpeg'
            }
          }
        },
        {
          fields: {
            file: {
              url: '/images/jpeg/details-3.jpeg'
            }
          }
        },
        {
          fields: {
            file: {
              url: '/images/jpeg/details-4.jpeg'
            }
          }
        }
      ]
    }
  },
  {
    sys: { id: '10' },
    fields: {
      name: 'family basic',
      slug: 'family-basic',
      type: 'family',
      price: usdToIdr(350),
      size: sqftToM2(550),
      featured: false,
      description:
        'Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.',
      extras: [
        'Plush pillows and breathable bed linens',
        'Soft, oversized bath towels',
        'Full-sized, pH-balanced toiletries',
        'Complimentary refreshments',
        'Adequate safety/security',
        'Internet',
        'Comfortable beds'
      ],
      images: [
        {
          fields: {
            file: {
              url: '/images/jpeg/room-10.jpeg'
            }
          }
        },
        {
          fields: {
            file: {
              url: '/images/jpeg/details-2.jpeg'
            }
          }
        },
        {
          fields: {
            file: {
              url: '/images/jpeg/details-3.jpeg'
            }
          }
        },
        {
          fields: {
            file: {
              url: '/images/jpeg/details-4.jpeg'
            }
          }
        }
      ]
    }
  },
  {
    sys: { id: '11' },
    fields: {
      name: 'family standard',
      slug: 'family-standard',
      type: 'family',
      price: usdToIdr(400),
      size: sqftToM2(600),
      featured: false,
      description:
        'Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.',
      extras: [
        'Plush pillows and breathable bed linens',
        'Soft, oversized bath towels',
        'Full-sized, pH-balanced toiletries',
        'Complimentary refreshments',
        'Adequate safety/security',
        'Internet',
        'Comfortable beds'
      ],
      images: [
        {
          fields: {
            file: {
              url: '/images/jpeg/room-11.jpeg'
            }
          }
        },
        {
          fields: {
            file: {
              url: '/images/jpeg/details-2.jpeg'
            }
          }
        },
        {
          fields: {
            file: {
              url: '/images/jpeg/details-3.jpeg'
            }
          }
        },
        {
          fields: {
            file: {
              url: '/images/jpeg/details-4.jpeg'
            }
          }
        }
      ]
    }
  },
  {
    sys: { id: '12' },
    fields: {
      name: 'family deluxe',
      slug: 'family-deluxe',
      type: 'family',
      price: usdToIdr(500),
      size: sqftToM2(700),
      featured: true,
      description:
        'Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.',
      extras: [
        'Plush pillows and breathable bed linens',
        'Soft, oversized bath towels',
        'Full-sized, pH-balanced toiletries',
        'Complimentary refreshments',
        'Adequate safety/security',
        'Internet',
        'Comfortable beds'
      ],
      images: [
        {
          fields: {
            file: {
              url: '/images/jpeg/room-12.jpeg'
            }
          }
        },
        {
          fields: {
            file: {
              url: '/images/jpeg/details-2.jpeg'
            }
          }
        },
        {
          fields: {
            file: {
              url: '/images/jpeg/details-3.jpeg'
            }
          }
        },
        {
          fields: {
            file: {
              url: '/images/jpeg/details-4.jpeg'
            }
          }
        }
      ]
    }
  },
  {
    sys: { id: '13' },
    fields: {
      name: 'presidential',
      slug: 'presidential-room',
      type: 'presidential',
      price: usdToIdr(600),
      size: sqftToM2(1000),
      featured: true,
      description:
        'Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.',
      extras: [
        'Plush pillows and breathable bed linens',
        'Soft, oversized bath towels',
        'Full-sized, pH-balanced toiletries',
        'Complimentary refreshments',
        'Adequate safety/security',
        'Internet',
        'Comfortable beds'
      ],
      images: [
        {
          fields: {
            file: {
              url: '/images/jpeg/details-1.jpeg'
            }
          }
        },
        {
          fields: {
            file: {
              url: '/images/jpeg/details-2.jpeg'
            }
          }
        },
        {
          fields: {
            file: {
              url: '/images/jpeg/details-3.jpeg'
            }
          }
        },
        {
          fields: {
            file: {
              url: '/images/jpeg/details-4.jpeg'
            }
          }
        }
      ]
    }
  }
];

export default data;
