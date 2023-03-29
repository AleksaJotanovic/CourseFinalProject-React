import { React, useState, createContext } from "react";
import product1 from "../resources/products/simpathy/product1.PNG";
import product2 from "../resources/products/simpathy/product2.PNG";
import product3 from "../resources/products/simpathy/product3.PNG";
import product4 from "../resources/products/simpathy/product4.PNG";
import product5 from "../resources/products/simpathy/product5.PNG";
import product6 from "../resources/products/simpathy/product6.PNG";
import product7 from "../resources/products/simpathy/product7.PNG";
import product8 from "../resources/products/simpathy/product8.PNG";
import product9 from "../resources/products/simpathy/product9.PNG";
import product10 from "../resources/products/simpathy/product10.PNG";
import product11 from "../resources/products/simpathy/product11.PNG";
import product12 from "../resources/products/simpathy/product12.PNG";
import product13 from "../resources/products/get-well/product13.PNG";
import product14 from "../resources/products/get-well/product14.PNG";
import product15 from "../resources/products/get-well/product15.PNG";
import product16 from "../resources/products/get-well/product16.PNG";
import product17 from "../resources/products/get-well/product17.PNG";
import product18 from "../resources/products/anniversary/product18.PNG";
import product19 from "../resources/products/anniversary/product19.PNG";
import product20 from "../resources/products/anniversary/product20.PNG";
import product21 from "../resources/products/anniversary/product21.PNG";
import product22 from "../resources/products/anniversary/product22.PNG";
import product23 from "../resources/products/congrulations/product23.PNG";
import product24 from "../resources/products/congrulations/product24.PNG";
import product25 from "../resources/products/congrulations/product25.PNG";
import product26 from "../resources/products/congrulations/product26.PNG";

export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      category: "simpathy",
      title: "Beautiful Spirit Basket",
      price: "105",
      quantity: 0,
      description:
        "Let them know how much you care with a gorgeous bouquet that features carnations, stock, roses, lilies and Fuji mums. Each bloom is a thoughtful reminder of your support and love, while sitting in a beautifully crafted basket.",
      photo: product1,
    },
    {
      id: 2,
      category: "simpathy",
      title: "The Spathiphyllum Plant",
      price: "80",
      quantity: 0,
      description:
        "Everyone could use a little peace in their life! Commonly known as the peace lily, our spathiphyllum plant is a favorite among just about everyone and perfect for every occasion. This beautiful plant is long–lasting and has an amazing effect on any room with its lush leaves and white flowers.",
      photo: product2,
    },
    {
      id: 3,
      category: "simpathy",
      title: "Comfort Planter",
      price: "66",
      quantity: 0,
      description:
        'The Comfort Planter offers unspoken words of hope and peace during this time of loss and sadness. Our stylish and sophisticated white ceramic planter holds an elegant 6" peace lily plant, which exhibits brilliant white tear-shaped blooms amongst dark green foliage for a simply beautiful effect.',
      photo: product3,
    },
    {
      id: 4,
      category: "simpathy",
      title: "Eternal Friendship Bouquet",
      price: "100",
      quantity: 0,
      description:
        'An exuberance of bright and beautiful white blossoms provides an exquisite way to deliver your expressions of sympathy and comfort. This life affirming tribute combines white roses, snapdragons and Asiatic lilies accented by lush greens arranged in a clear glass 8" vase. An excellent choice for a wake, funeral service or for sending your condolences to the home of grieving family or friends.',
      photo: product4,
    },
    {
      id: 5,
      category: "simpathy",
      title: "Long Stem Pink Rose Bouquet",
      price: "200",
      quantity: 0,
      description:
        "Enjoy the classic beauty of the rose with a playful twist in our Long Stem Pink Rose Bouquet. This arrangement features all pink roses that will look especially pretty in the hands of those you cherish most.",
      photo: product5,
    },
    {
      id: 6,
      category: "simpathy",
      title: "Clear Skies Bouquet",
      price: "135",
      quantity: 0,
      description:
        "Let this uplifting arrangement be reminders of the clear skies ahead. Capturing the feeling of hope that a new day brings, this bouquet is composed of voluminous hydrangea blooms and vibrant belladonna delphinium to refresh their mood.",
      photo: product6,
    },
    {
      id: 7,
      category: "simpathy",
      title: "Beyond Blue Bouquet",
      price: "92",
      quantity: 0,
      description:
        "There is something about the shade of blue that brings a sense of calmness and serenity. Our Beyond Blue bouquet is designed with billowing white blooms and pops of bold florals to deliver just the right sentiment for any reason.",
      photo: product7,
    },
    {
      id: 8,
      category: "simpathy",
      title: "Alluring Elegance Bouquet",
      price: "115",
      quantity: 0,
      description:
        "An illuminating array of florals brings an air of elegance to any room it's placed. This arrangement features refined florals like lilies, Queen Anne's Lace and Veronica in a clear glass vase to add a touch of sophisticated style to your special occasions.",
      photo: product8,
    },
    {
      id: 9,
      category: "simpathy",
      title: "Beach House Bouquet",
      price: "125",
      quantity: 0,
      description:
        "Take yourself on a seaside getaway with our Beach House Bouquet. The calming blue hydrangea is the perfect pair for the peach carnations and roses. Enjoy the fun lavender button pompons as a colorful contrast to the classic blooms.",
      photo: product9,
    },
    {
      id: 10,
      category: "simpathy",
      title: "Pastel Peace Basket",
      price: "105",
      quantity: 0,
      description:
        "The Pastel Peace Basket is a sweet and simple way to offer your condolences. Lavender roses, fuchsia gerbera daisies, lavender daisies, purple larkspur, purple matsumoto asters, pink mini carnations and lush greens are arranged to perfection in a round whitewash handled basket to create a gift that expresses your wishes for sympathy and peace.",
      photo: product10,
    },
    {
      id: 11,
      category: "simpathy",
      title: "Picnic Tulips",
      price: "70",
      quantity: 0,
      description:
        "Celebrate mom with the classic beauty of our Picnic Tulips. These captivating colors shine brightest in spring around fun birthdays, anniversaries and as a Mother's Day surprise.",
      photo: product11,
    },
    {
      id: 12,
      category: "simpathy",
      title: "Sunshine & Joy Garden",
      price: "65",
      quantity: 0,
      description:
        "The color yellow expresses happiness, imagination and fun, as does this garden! The perfect present for anyone on any occasion, this plant is filled to the brim with smiles. This garden is overflowing with a collection of two yellow Kalanchoes, a golden Pothos and a Croton plant. The flowers may arrive in buds, only to bloom in a short time.",
      photo: product12,
    },
    {
      id: 13,
      category: "anniversary",
      title: "Truly Stunning Bouquet",
      price: "108",
      quantity: 0,
      description:
        "This dreamy jewel toned bouquet combines bold color and eye catching texture to make a statement. Featuring a thoughtful array of both roses and lilies, this dazzling assortment is bound to impress your recipient.",
      photo: product18,
    },
    {
      id: 14,
      category: "anniversary",
      title: "You're Precious Bouquet",
      price: "90",
      quantity: 0,
      description:
        "Blushing shades of pink blooms are nestled in lush greens to charm anyone's day. This bouquet is abundant with a classic assortment of pretty florals – roses, alstroemeria and carnations to name a few.",
      photo: product19,
    },
    {
      id: 15,
      category: "anniversary",
      title: "Long Stem Red Rose Bouquet",
      price: "200",
      quantity: 0,
      description:
        "You can never go wrong with a bouquet of hand delivered long stem red roses from a local florist. Let our network of expert florists design this timeless red bouquet to make a statement for your special someone. Red flowers are an elegant, iconic and romantic gift for anyone close to your heart. Each rose is handcrafted and hand delivered to say I love you directly from a local florist to their home or office.",
      photo: product20,
    },
    {
      id: 16,
      category: "anniversary",
      title: "Pretty in Pink Belgian Chocolate Truffles",
      price: "45",
      quantity: 0,
      description:
        "Send a little piece of your heart with the Pretty in Pink Truffles. Adorably designed in heart shapes with a pink and red coating for the holiday of love, this treat comes neatly packaged with 15 truffles aligned with their shade of pink.",
      photo: product21,
    },
    {
      id: 17,
      category: "anniversary",
      title: "Valentine's Day Belgian Chocolate Covered Treat Sampler",
      price: "45",
      quantity: 0,
      description:
        "Don’t make that special someone chose this February, and send the Valentine's Day Belgian Chocolate Covered Treat Sampler instead. Try an assortment of holiday treats such as chocolate-dipped Rice Krispie® treats, chocolate cookies, mini chocolate pretzel twists, and more.",
      photo: product22,
    },
    {
      id: 18,
      category: "congratulations",
      title: "Bliss White Orchid",
      price: "68",
      quantity: 0,
      description:
        "The most popular variety of this plant, the Phalaenopsis orchid makes a great gift for plant lovers and plant beginners alike! White orchids are easy to care for and add a touch of delicate beauty to any home, office or table.",
      photo: product23,
    },
    {
      id: 19,
      category: "congratulations",
      title: "CLASSIC WHITE CALLA LILY",
      price: "58",
      quantity: 0,
      description:
        "This houseplant is great for making every day bright. Whether perched on a windowsill or gifted to a friend in need of a smile, the pure white tones and healthy greenery add a delicate touch to any space. This plant loves rich soil and plenty of sun.",
      photo: product24,
    },
    {
      id: 20,
      category: "congratulations",
      title: "SPRING FLING TULIP BULB GARDEN",
      price: "45",
      quantity: 0,
      description:
        "Grow a pop of color for the changing season with the Assorted Spring Tulip Garden blooming pink, yellow and purple flowers. Nothing revitalizes a space like fresh flowers. Packed with bold bell-shaped blooms, this bulb garden is the perfect gift for any occasion.",
      photo: product25,
    },
    {
      id: 21,
      category: "congratulations",
      title: "CONGRATS BELGIAN CHOCOLATE COVERED BERRY-GRAM",
      price: "55",
      quantity: 0,
      description:
        "Artisan Crafted Belgian Chocolate Covered Treats Crafted in a Small Batch Kitchen 12 Strawberries Hand Dipped in Belgian Dark Chocolate Hand Decorated with drizzles and White Chocolate Letters spelling out CONGRATS Arrives in an Elegant Gift Box",
      photo: product26,
    },
    {
      id: 22,
      category: "getwell",
      title: "Fiesta Bouquet",
      price: "95",
      quantity: 0,
      description:
        "The Fiesta Bouquet is composed of a lively mix, fit to celebrate any and every moment. With a combination of vibrant flowers, this florist–designed arrangement brings a pop of color and a burst of excitement as soon as it arrives.",
      photo: product13,
    },
    {
      id: 23,
      category: "getwell",
      title: "Alluring Elegance Bouquet",
      price: "115",
      quantity: 0,
      description:
        "An illuminating array of florals brings an air of elegance to any room it's placed. This arrangement features refined florals like lilies, Queen Anne's Lace and Veronica in a clear glass vase to add a touch of sophisticated style to your special occasions.",
      photo: product14,
    },
    {
      id: 24,
      category: "getwell",
      title: "Beyond Blue Bouquet",
      price: "92",
      quantity: 0,
      description:
        "There is something about the shade of blue that brings a sense of calmness and serenity. Our Beyond Blue bouquet is designed with billowing white blooms and pops of bold florals to deliver just the right sentiment for any reason.",
      photo: product15,
    },
    {
      id: 25,
      category: "getwell",
      title: "Clear Skies Bouquet",
      price: "135",
      quantity: 0,
      description:
        "Let this uplifting arrangement be reminders of the clear skies ahead. Capturing the feeling of hope that a new day brings, this bouquet is composed of voluminous hydrangea blooms and vibrant belladonna delphinium to refresh their mood.",
      photo: product16,
    },
    {
      id: 26,
      category: "getwell",
      title: "Light of My Life Bouquet",
      price: "80",
      quantity: 0,
      description:
        "The Light of My Life Bouquet blossoms with brilliant color and a sweet sophistication to create the perfect impression! Pink Lilies make the eyes dance across the unique design of this flower bouquet, surrounded by the blushing colors of orange roses, lavender cushion poms, hot pink carnations, and lush greens. Presented in a clear glass vase, this fresh flower arrangement has been created just for you to help you send your sweetest thank you, happy anniversary, or thinking of you wishes.",
      photo: product17,
    },
  ]);
  const [cart, setCart] = useState([]);

  const [subtotal, setSubtotal] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  const _getProductById = (id) => {
    let filteredProducts = products.filter(function (product) {
      return product.id === id;
    });
    if (filteredProducts.length) {
      return filteredProducts[0];
    } else {
      return undefined;
    }
  };

  const getProductById = (id) => {};

  const orderTheProduct = (id, qty) => {
    let orderingProducts = products.filter(function (product) {
      return product.id === id;
    });

    let cartHasProduct = false;

    for (let i in cart) {
      if (cart[i].id === orderingProducts[0].id) {
        cart[i].quantity++;
        cartHasProduct = true;
        break;
      }
    }

    if (!cartHasProduct) {
      let ordered = {
        id: orderingProducts[0].id,
        category: orderingProducts[0].category,
        title: orderingProducts[0].title,
        price: orderingProducts[0].price,
        quantity: qty,
        description: orderingProducts[0].description,
        photo: orderingProducts[0].photo,
      };
      setCart([...cart, ordered]);
    }

    computeCartTotals();
  };

  const computeCartTotals = () => {
    let totalPriceValue = 0;
    let totalQuantityValue = 0;

    for (let currentProd of cart) {
      totalPriceValue += currentProd.quantity * currentProd.price;
      totalQuantityValue += Number(currentProd.quantity);
    }

    setSubtotal(totalPriceValue);
    setTotalQuantity(totalQuantityValue);
  };

  const decrementQuantity = (product) => {
    product.quantity--;

    if (product.quantity === 0) {
      remove(product);
    } else {
      computeCartTotals();
    }
  };

  const incrementQuantity = (product) => {
    orderTheProduct(product.id, product.quantity);
  };

  const remove = (product) => {
    const index = cart.findIndex((prod) => prod.id === product.id);

    if (index > -1) {
      cart.splice(index, 1);
      computeCartTotals();
    }
  };

  const empty = () => {
    setCart([]);
    computeCartTotals();
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        getProductById,
        cart,
        orderTheProduct,
        subtotal,
        computeCartTotals,
        totalQuantity,
        decrementQuantity,
        incrementQuantity,
        remove,
        empty,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
