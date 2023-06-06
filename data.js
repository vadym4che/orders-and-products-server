export const orders = [
  {
    id: 1,
    title: 'Длинное предлинное длиннючее название прихода',
    date: '2017-06-29 12:09:33',
    group: 'Длинное предлинное длиннючее название группьі',
    owner: null,
    get products () { return products.filter(p => p.order === this.id) },
  },
  {
    id: 2,
    title: 'Длинное название прихода',
    date: '2017-06-29 12:09:33',
    group: 'Длинное предлинное длиннючее название группьі',
    owner: null,
    get products () { return products.filter(p => p.order === this.id) },
  },
  {
    id: 3,
    title: 'Длинное предлинное длиннючее название прихода',
    date: '2017-06-29 12:09:33',
    group: null,
    owner: 'Христорождественский Александр',
    get products () { return products.filter(p => p.order === this.id) },
  },
  {
    id: 4,
    title: 'Длинное предлинное название прихода',
    date: '2017-06-29 12:09:33',
    group: 'Длинное предлинное длиннючее название группьі',
    owner: null,
    get products () { return products.filter(p => p.order === this.id) },
  },
]

export const products = [
  {
    id: 1,
    serialNumber: 1234,
    isNew: 1,
    photo: 'shopping.webp',
    title: 'Gigabyte M27F A 27" 165 Hz KVM Gaming Monitor',
    type: 'Monitors',
    specification: 'Specification 1',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33',
    },
    price: [
      {value: 100, symbol: 'USD', isDefault: 0},
      {value: 2600, symbol: 'UAH', isDefault: 1},
    ],
    order: 1,
    date: '2017-06-29 12:09:33',
  },
  {
    id: 1,
    serialNumber: 1234,
    isNew: 1,
    photo: 'shopping.webp',
    title: 'Gigabyte M27F A 27" 165 Hz KVM Gaming Monitor',
    type: 'Monitors',
    specification: 'Specification 1',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33',
    },
    price: [
      {value: 100, symbol: 'USD', isDefault: 0},
      {value: 2600, symbol: 'UAH', isDefault: 1},
    ],
    order: 1,
    date: '2017-06-29 12:09:33',
  },
  {
    id: 1,
    serialNumber: 1234,
    isNew: 0,
    photo: 'shopping.webp',
    title: 'Gigabyte M27F A 27" 165 Hz KVM Gaming Monitor',
    type: 'Monitors',
    specification: 'Specification 1',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33',
    },
    price: [
      {value: 100, symbol: 'USD', isDefault: 0},
      {value: 2600, symbol: 'UAH', isDefault: 1},
    ],
    order: 2,
    date: '2017-06-29 12:09:33',
  },
  {
    id: 1,
    serialNumber: 1234,
    isNew: 1,
    photo: 'shopping.webp',
    title: 'Gigabyte M27F A 27" 165 Hz KVM Gaming Monitor',
    type: 'Monitors',
    specification: 'Specification 1',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33',
    },
    price: [
      {value: 100, symbol: 'USD', isDefault: 0},
      {value: 2600, symbol: 'UAH', isDefault: 1},
    ],
    order: 3,
    date: '2017-06-29 12:09:33',
  },
  {
    id: 1,
    serialNumber: 1234,
    isNew: 0,
    photo: 'shopping.webp',
    title: 'Gigabyte M27F A 27" 165 Hz KVM Gaming Monitor',
    type: 'Monitors',
    specification: 'Specification 1',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33',
    },
    price: [
      {value: 100, symbol: 'USD', isDefault: 0},
      {value: 2600, symbol: 'UAH', isDefault: 1},
    ],
    order: 4,
    date: '2017-06-29 12:09:33',
  }
]