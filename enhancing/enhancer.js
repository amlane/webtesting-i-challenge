module.exports = {
  succeed,
  fail,
  repair,
  get
};

function succeed(item) {
  if (item.enhancement < 20) {
    ++item.enhancement;
  }
  return { ...item };
}

function fail(item) {
  if (item.enhancement < 15) item.durability -= 5;
  else if (item.enhancement >= 15) item.durability -= 10;
  else if (item.enhancement >= 16) item.enhancement -= 1;
  else if (item.enhancement === 0) item.durability;
  else if (item.durability === 0) item.durability;
  return { ...item };
}

function repair(item) {
  item = { ...item, durability: 100 };
  return item;
}

function get(item) {
  return { ...item };
}
