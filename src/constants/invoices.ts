const invoices = [
  {
    createdAt: new Date("2023-03-25"),
    paymentDue: new Date("2023-04-25"),
    description: "Logo Design",
    status: "PENDING",
    total: 1500.75,
    client: {
      create: {
        name: "Alice Smith",
        email: "alices@mail.com",
        address: {
          create: {
            street: "123 Elm Street",
            city: "New York",
            postCode: "10001",
            country: "USA",
          },
        },
      },
    },
    company: {
      create: {
        name: "ABC Graphics",
        email: "info@abcgraphics.com",
        address: {
          create: {
            street: "456 Oak Avenue",
            city: "Los Angeles",
            postCode: "90001",
            country: "USA",
          },
        },
      },
    },
    products: {
      create: [
        {
          name: "Logo Design",
          quantity: 1,
          price: 1500.75,
          total: 1500.75,
        },
      ],
    },
  },
  {
    createdAt: new Date("2023-03-26"),
    paymentDue: new Date("2023-04-26"),
    description: "Web Development",
    status: "PENDING",
    total: 2500.95,
    client: {
      create: {
        name: "John Johnson",
        email: "johnj@mail.com",
        address: {
          create: {
            street: "567 Oak Lane",
            city: "Chicago",
            postCode: "60601",
            country: "USA",
          },
        },
      },
    },
    company: {
      create: {
        name: "XYZ Web Solutions",
        email: "info@xyzwebsolutions.com",
        address: {
          create: {
            street: "789 Maple Road",
            city: "San Francisco",
            postCode: "94101",
            country: "USA",
          },
        },
      },
    },
    products: {
      create: [
        {
          name: "Website Development",
          quantity: 1,
          price: 2500.95,
          total: 2500.95,
        },
      ],
    },
  },
  {
    createdAt: new Date("2023-03-27"),
    paymentDue: new Date("2023-04-27"),
    description: "Marketing Campaign",
    status: "PENDING",
    total: 1800.25,
    client: {
      create: {
        name: "David Davis",
        email: "davidd@mail.com",
        address: {
          create: {
            street: "789 Pine Street",
            city: "Houston",
            postCode: "77001",
            country: "USA",
          },
        },
      },
    },
    company: {
      create: {
        name: "Marketing Pros",
        email: "info@marketingpros.com",
        address: {
          create: {
            street: "123 Elm Road",
            city: "Miami",
            postCode: "33101",
            country: "USA",
          },
        },
      },
    },
    products: {
      create: [
        {
          name: "Marketing Campaign",
          quantity: 1,
          price: 1800.25,
          total: 1800.25,
        },
      ],
    },
  },
  {
    createdAt: new Date("2023-03-28"),
    paymentDue: new Date("2023-04-28"),
    description: "App Development",
    status: "PENDING",
    total: 3200.5,
    client: {
      create: {
        name: "Emily Evans",
        email: "emilye@mail.com",
        address: {
          create: {
            street: "456 Maple Lane",
            city: "Seattle",
            postCode: "98101",
            country: "USA",
          },
        },
      },
    },
    company: {
      create: {
        name: "App Creations",
        email: "info@appcreations.com",
        address: {
          create: {
            street: "654 Oak Street",
            city: "San Diego",
            postCode: "92101",
            country: "USA",
          },
        },
      },
    },
    products: {
      create: [
        {
          name: "App Development",
          quantity: 1,
          price: 3200.5,
          total: 3200.5,
        },
      ],
    },
  },
  {
    createdAt: new Date("2023-03-29"),
    paymentDue: new Date("2023-04-29"),
    description: "Social Media Marketing",
    status: "PENDING",
    total: 2100.75,
    client: {
      create: {
        name: "Olivia Olson",
        email: "oliviao@mail.com",
        address: {
          create: {
            street: "321 Pine Road",
            city: "Denver",
            postCode: "80201",
            country: "USA",
          },
        },
      },
    },
    company: {
      create: {
        name: "Social Media Strategies",
        email: "info@socialmediastrategies.com",
        address: {
          create: {
            street: "789 Oak Avenue",
            city: "Phoenix",
            postCode: "85001",
            country: "USA",
          },
        },
      },
    },
    products: {
      create: [
        {
          name: "Social Media Marketing",
          quantity: 1,
          price: 2100.75,
          total: 2100.75,
        },
      ],
    },
  },
];
module.exports = {
  invoice1: invoices[0],
  invoice2: invoices[1],
  invoice3: invoices[2],
  invoice4: invoices[3],
  invoice5: invoices[4],
};
