const data = {
  email: "sales@tech-wolf.com",
  name: "Tech WOLF SRL",
  address: {
    create: {
      street: "19 Union Terrace",
      city: "London",
      postCode: "E1 3EZ",
      country: "United Kingdom",
    },
  },
  invoices: {
    create: [
      {
        createdAt: new Date("2021-08-18"),
        paymentTerms: "60",
        paymentDue: new Date("2021-08-19"),
        description: "Re-branding",
        status: "PAID",
        total: 1800.9,
        client: {
          create: {
            name: "Jensen Huang",
            email: "jensenh@mail.com",
            address: {
              create: {
                street: "106 Kendell Street",
                city: "Sharrington",
                postCode: "NR24 5WQ",
                country: "United Kingdom",
              },
            },
          },
        },

        products: {
          create: [
            {
              name: "Brand Guidelines",
              quantity: 1,
              price: 1800.9,
              total: 1800.9,
            },
            {
              name: "Website Redesign",
              quantity: 555,
              price: 45,
              total: 24975,
            },
          ],
        },
      },
      {
        createdAt: new Date("2021-08-21"),
        paymentTerms: "30",
        paymentDue: new Date("2021-09-20"),
        description: "Graphic Design",
        status: "PENDING",
        total: 556.0,
        client: {
          create: {
            name: "Alex Grim",
            email: "alexgrim@mail.com",
            address: {
              create: {
                street: "84 Church Way",
                city: "Bradford",
                postCode: "BD1 9PB",
                country: "United Kingdom",
              },
            },
          },
        },
        products: {
          create: [
            {
              name: "Banner Design",
              quantity: 1,
              price: 156.0,
              total: 156.0,
            },
            {
              name: "Email Design",
              quantity: 2,
              price: 200.0,
              total: 400.0,
            },
          ],
        },
      },
      {
        createdAt: new Date("2021-09-24"),
        paymentTerms: "7",
        paymentDue: new Date("2021-10-01"),
        description: "Website Redesign",
        status: "PAID",
        total: 14002.33,
        client: {
          create: {
            name: "John Morrison",
            email: "jm@myco.com",
            address: {
              create: {
                street: "79 Dover Road",
                city: "Westhall",
                postCode: "IP19 3PF",
                country: "United Kingdom",
              },
            },
          },
        },
        products: {
          create: [
            {
              name: "Website Redesign",
              quantity: 1,
              price: 14002.33,
              total: 14002.33,
            },
          ],
        },
      },
      {
        createdAt: new Date("2021-10-11"),
        paymentTerms: "1",
        paymentDue: new Date("2021-10-12"),
        description: "Logo Concept",
        status: "PENDING",
        total: 102.04,
        client: {
          create: {
            name: "Alysa Werner",
            email: "alysa@email.co.uk",
            address: {
              create: {
                street: "63 Warwick Road",
                city: "Carlisle",
                postCode: "CA20 2TG",
                country: "United Kingdom",
              },
            },
          },
        },
        products: {
          create: [
            {
              name: "Logo Sketches",
              quantity: 1,
              price: 102.04,
              total: 102.04,
            },
          ],
        },
      },
      {
        createdAt: new Date("2021-10-7"),
        paymentTerms: "30",
        paymentDue: new Date("2021-10-14"),
        description: "Re-branding",
        status: "PENDING",
        total: 4032.33,
        client: {
          create: {
            name: "Mellisa Clarke",
            email: "mellisa.clarke@example.com",
            address: {
              create: {
                street: "46 Abbey Row",
                city: "Cambridge",
                postCode: "CB5 6EG",
                country: "United Kingdom",
              },
            },
          },
        },
        products: {
          create: [
            {
              name: "New Logo",
              quantity: 1,
              price: 1532.33,
              total: 1532.33,
            },
            {
              name: "Brand Guidelines",
              quantity: 1,
              price: 2500.0,
              total: 2500.0,
            },
          ],
        },
      },
      {
        createdAt: new Date("2021-10-01"),
        paymentTerms: "30",
        paymentDue: new Date("2021-10-31"),
        description: "Landing Page Design",
        status: "PENDING",
        total: 6155.91,
        client: {
          create: {
            name: "Thomas Wayne",
            email: "thomas@dc.com",
            address: {
              create: {
                street: "3964 Queens Lane",
                city: "Gotham",
                postCode: "60457",
                country: "United States of America",
              },
            },
          },
        },
      },

      {
        createdAt: new Date("2023-03-25"),
        paymentTerms: "30",
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
        paymentTerms: "30",
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
        paymentTerms: "30",
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
        paymentTerms: "30",
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
        paymentTerms: "30",
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
    ],
  },
};

module.exports = data;
