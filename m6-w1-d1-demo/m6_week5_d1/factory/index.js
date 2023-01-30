const gadgetFactory = require("./gadgetFactory");

const myLaptop = gadgetFactory.createGadget("Laptop", {
  ram: 8,
  ssd: 256,
  name: "Bab's MacBook Pro"
});

const myTablet = gadgetFactory.createGadget("Tablet", {
  ram: 4,
  hdd: 128,
  network: "4G",
  name: "Bab's iPad"
});

// add console.log here
console.log(myLaptop);
console.log(myTablet);
