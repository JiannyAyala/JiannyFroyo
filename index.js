const Froyo = prompt(
  "What Froyo's do you like? (seperate by comma)",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);
const FroyoFlavor = Froyo.split(",");
const Total = Amount(FroyoFlavor);

function Amount(list) {
  const Total = {};
  for (const Froyo1 of list) {
    if (!(Froyo1 in Total)) {
      Total[Froyo1] = 0;
    }
    Total[Froyo1] += 1;
  }
  return Total;
}

function AmountFlavors(flavors) {
  const Total = {};
  for (const FroyoFlavor of flavors) {
    if (flavor in Total) {
      Total[FroyoFlavor] += 1;
    } else {
      Total[FroyoFlavor] = 1;
    }
  }
  return Total;
}
