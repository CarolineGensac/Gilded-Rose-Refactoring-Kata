class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }

  decreaseQuality(item, amount) {
    if (item.quality > 0) {
      item.quality -= amount;
    }
  }

  increaseQuality(item, amount) {
    if (item.quality < 50) {
      item.quality += amount;
    }
  }

  updateQuality() {
    for (const item of this.items) {
      if (item.name === 'Aged Brie') {
        this.increaseQuality(item, 1);
      } else if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
        if (item.sellIn < 0) {
          item.quality = 0;
        } else if (item.sellIn <= 5) {
          this.increaseQuality(item, 3);
        } else if (item.sellIn <= 10) {
          this.increaseQuality(item, 2);
        } else {
          this.increaseQuality(item, 1);
        }
      } else if (item.name === 'Conjured Mana Cake') {
        this.decreaseQuality(item, 2);
      } else if (item.name !== 'Sulfuras, Hand of Ragnaros') {
        this.decreaseQuality(item, 1);
      }

      if (item.name !== 'Sulfuras, Hand of Ragnaros') {
        item.sellIn -= 1;
      }

      this.limitQuality(item);
    }

    return this.items;
  }

  limitQuality(item) {
    if (item.name != 'Sulfuras, Hand of Ragnaros') {
    item.quality = Math.min(item.quality, 50);
  }
 }
}

module.exports = {
  Item,
  Shop
};
