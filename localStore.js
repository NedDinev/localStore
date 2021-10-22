function localStore(product, city, quantity) {
  city = city.toLowerCase();
  quantity = Number(quantity);

  if (city == "sofia") {
    if (product == "coffee") {
      console.log(Math.round((0.5 * quantity + Number.EPSILON) * 100) / 100);
    } else if (product == "water") {
      console.log(Math.round((0.8 * quantity + Number.EPSILON) * 100) / 100);
    } else if (product == "beer") {
      console.log(Math.round((1.2 * quantity + Number.EPSILON) * 100) / 100);
    } else if (product == "sweets") {
      console.log(Math.round((1.45 * quantity + Number.EPSILON) * 100) / 100);
    } else if (product == "peanuts") {
      console.log(Math.round((1.6 * quantity + Number.EPSILON) * 100) / 100);
    }
  } else if (city == "plovdiv") {
    if (product == "coffee") {
      console.log(Math.round((0.4 * quantity + Number.EPSILON) * 100) / 100);
    } else if (product == "water") {
      console.log(Math.round((0.7 * quantity + Number.EPSILON) * 100) / 100);
    } else if (product == "beer") {
      console.log(Math.round((1.15 * quantity + Number.EPSILON) * 100) / 100);
    } else if (product == "sweets") {
      console.log(Math.round((1.3 * quantity + Number.EPSILON) * 100) / 100);
    } else if (product == "peanuts") {
      console.log(Math.round((1.5 * quantity + Number.EPSILON) * 100) / 100);
    }
  } else if (city == "varna") {
    if (product == "coffee") {
      console.log(Math.round((0.45 * quantity + Number.EPSILON) * 100) / 100);
    } else if (product == "water") {
      console.log(Math.round((0.7 * quantity + Number.EPSILON) * 100) / 100);
    } else if (product == "beer") {
      console.log(Math.round((1.1 * quantity + Number.EPSILON) * 100) / 100);
    } else if (product == "sweets") {
      console.log(Math.round((1.35 * quantity + Number.EPSILON) * 100) / 100);
    } else if (product == "peanuts") {
      console.log(Math.round((1.55 * quantity + Number.EPSILON) * 100) / 100);
    }
  }
}

localStore("coffee", "Varna", 2);
localStore("peanuts", "Plovdiv", 1);
localStore("beer", "Sofia", 6);
localStore("water", "Plovdiv", 3);
localStore("sweets", "Sofia", 2.23);
