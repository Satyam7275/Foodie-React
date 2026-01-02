const mockMenu = {
  data: {
    cards: [
      {
        card: {
          card: {
            info: {
              name: "Mr. Brown - Danbro",
              costForTwoMessage: "₹350 for two",
              cuisines: ["Bakery", "Cakes & Pastries"],
              avgRating: "4.5",
            },
          },
        },
      },
      {},
      {
        groupedCard: {
          cardGroupMap: {
            REGULAR: {
              cards: [
                // Category: Recommended (example)
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Recommended",
                      itemCards: [
                        {
                          card: {
                            info: {
                              id: "107121186",
                              name: "Small Christmas Plum Cake 150gm",
                              description:
                                "Dry plum cake, rich & moist | Eggless",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/12/8/629d0ad6-57bc-4e-b84e",
                              price: 24286,
                              isVeg: true,
                              avgRating: "4.3",
                              ratingCount: "16",
                            },
                          },
                        },
                        {
                          card: {
                            info: {
                              id: "107121187",
                              name: "Medium Christmas Plum Cake 300gm",
                              description:
                                "Dry plum cake with rich flavor | Eggless",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/12/8/2226d781-a399-4a",
                              price: 48571,
                              isVeg: true,
                              avgRating: "5.0",
                              ratingCount: "5",
                            },
                          },
                        },
                        {
                          card: {
                            info: {
                              id: "107121189",
                              name: "Small Christmas Rich Plum Cake 150gm",
                              description:
                                "Dense plum cake with dried fruits | Eggless",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/12/8/451c16a2-a630-497b",
                              price: 25714,
                              isVeg: true,
                              avgRating: "5.0",
                              ratingCount: "3",
                            },
                          },
                        },
                      ],
                    },
                  },
                },
                // (You can add more categories here using same pattern)
              ],
            },
          },
        },
      },
    ],
  },
};

export default mockMenu;
