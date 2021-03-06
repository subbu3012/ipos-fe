export interface MainItemCategory {
  id: number;
  name: string;
  mainItemList?: MainItem[];
}

export interface MainItem {
  id: number;
  name: string;
  imagePath: string;
}
export interface SubItem {
  id: number;
  name: string;
  price: number;
  type: number;
  count?: number;
  active?: boolean;
  childItemList?: ChildItem[];
}

export interface ChildItem {
  id: number;
  name: string;
}

export interface Table {
  id: number;
  name: string;
  lapsedTime: string;
  status: string;
  active?: boolean;
}

export interface PaymentMethod {
  id: number;
  name: string;
  description: string;
  imagePath: string;
  active?: boolean;
}

export interface Customer {
  id: number;
  name: string;
  phone: string;
  location: string;
  active?: boolean;
}

export const CUSTOMER_LIST: Customer[] = [
  {
    id: 1,
    name: 'Basi Babu',
    phone: '888-771-2244',
    location: 'Dubai'
  },
  {
    id: 2,
    name: 'John Doe',
    phone: '888-771-2244',
    location: 'New York, U.S.'
  },
  {
    id: 3,
    name: 'Binoy Rasool',
    phone: '888-771-2244',
    location: 'Calicut, India',
    active: true
  },
  {
    id: 4,
    name: 'Nadeem Mamood',
    phone: '888-771-2244',
    location: 'Dubai'
  }
];

export const PAYMENT_METHODS: PaymentMethod[] = [
  {
    id: 1,
    name: 'cash',
    description: 'Cash',
    imagePath: 'cash',
    active: true
  },
  {
    id: 2,
    name: 'card',
    description: 'Credit Card',
    imagePath: 'card'
  },
  {
    id: 3,
    name: 'foreign',
    description: 'Foreign CCY',
    imagePath: 'foreign'
  },
  {
    id: 4,
    name: 'others',
    description: 'Other Providers',
    imagePath: 'others'
  }
];

export const MAIN_ITEM_WIDTH = '90px';
export const MAIN_ITEM_HEIGHT = '85px';

export const SUB_ITEM_WIDTH = '130px';
export const SUB_ITEM_HEIGHT = '65px';

export const SUB_ITEM_CART_ITEM_LIST: SubItem[] = [
  {
    id: 1,
    name: 'Veggie Burger',
    price: 20.0,
    type: 1,
    count: 1
  },
  {
    id: 5,
    name: 'Potato Wedges',
    price: 30.0,
    type: 2,
    count: 3
  },
  {
    id: 7,
    name: 'et 300ml',
    price: 20,
    type: 1,
    count: 2
  }
];

export const ORDER_CART_ITEM_LIST: SubItem[] = [
  {
    id: 1,
    name: 'Veggie Burger',
    price: 20.0,
    type: 1,
    count: 1
  },
  {
    id: 2,
    name: 'Chapil Burger - Meal',
    price: 30.0,
    type: 2,
    count: 1,
    childItemList: [
      {
        id: 1,
        name: 'Chapil Kebab Burger - 1'
      },
      {
        id: 2,
        name: 'Portion of potato wedges - 1'
      },
      {
        id: 1,
        name: 'Mountain dew 300ML - 1'
      }
    ]
  },
  {
    id: 3,
    name: 'et 300ml',
    price: 20,
    type: 1,
    count: 2,
    active: true
  }
];

export const PAY_CART_ITEM_LIST: SubItem[] = [
  {
    id: 1,
    name: 'Veggie Burger',
    price: 20.0,
    type: 1,
    count: 1
  },
  {
    id: 2,
    name: 'Chapil Burger - Meal',
    price: 30.0,
    type: 2,
    count: 1,
    childItemList: [
      {
        id: 1,
        name: 'Chapil Kebab Burger - 1'
      },
      {
        id: 2,
        name: 'Portion of potato wedges - 1'
      },
      {
        id: 1,
        name: 'Mountain dew 300ML - 1'
      }
    ]
  },
  {
    id: 3,
    name: 'et 300ml',
    price: 20,
    type: 1,
    count: 2
  }
];

export const SUB_ITEM_LIST: SubItem[] = [
  {
    id: 1,
    name: 'Veggie Burger',
    price: 20.0,
    type: 1,
    count: 1
  },
  {
    id: 2,
    name: 'Veggie Bean Burger',
    price: 30.0,
    type: 1
  },
  {
    id: 3,
    name: 'Beef Burger',
    price: 20.0,
    type: 2
  },
  {
    id: 4,
    name: 'Fish Burger',
    price: 35.0,
    type: 2
  },
  {
    id: 5,
    name: 'Peri Peri Chicken Burger',
    price: 30.0,
    type: 2,
    count: 2
  },
  {
    id: 6,
    name: 'Fried Chicken Burger',
    price: 25.0,
    type: 2
  },
  {
    id: 7,
    name: 'Aubergine Burger',
    price: 20,
    type: 1
  },
  {
    id: 8,
    name: 'Chapil Kebab Burger',
    price: 30.0,
    type: 2
  },
  {
    id: 9,
    name: 'Halloumi Burger',
    price: 25.0,
    type: 1
  }
];

export const TABLE_LIST: Table[] = [
  {
    id: 1,
    name: 'Table 1',
    lapsedTime: '03m 24s',
    status: 'ordering'
  },
  {
    id: 2,
    name: 'Table 2',
    lapsedTime: '00m 00s',
    status: 'available',
    active: true
  },
  {
    id: 3,
    name: 'Table 3',
    lapsedTime: '08m 24s',
    status: 'billing'
  },
  {
    id: 4,
    name: 'Table 4',
    lapsedTime: '00m 00s',
    status: 'available'
  },
  {
    id: 5,
    name: 'Table 5',
    lapsedTime: '03m 24s',
    status: 'ordering'
  },
  {
    id: 6,
    name: 'Table 6',
    lapsedTime: '08m 24s',
    status: 'billing'
  },
  {
    id: 7,
    name: 'Table 7',
    lapsedTime: '00m 00s',
    status: 'available'
  },
  {
    id: 8,
    name: 'Table 8',
    lapsedTime: '03m 24s',
    status: 'ordering'
  },
  {
    id: 9,
    name: 'Table 9',
    lapsedTime: '08m 24s',
    status: 'billing'
  },
  {
    id: 10,
    name: 'Table 10',
    lapsedTime: '00m 00s',
    status: 'available'
  }
];

export const MAIN_ITEM_CATEGORY_LIST: MainItemCategory[] = [
  {
    id: 1,
    name: 'All'
  },
  {
    id: 2,
    name: 'Apetizers'
  },
  {
    id: 3,
    name: 'Main Course'
  },
  {
    id: 4,
    name: 'Desserts'
  },
  {
    id: 5,
    name: 'Drinks'
  }
];

export const MAIN_ITEM_LIST: MainItem[] = [
  {
    id: 1,
    name: 'Rolls',
    imagePath: 'rolls.png'
  },
  {
    id: 2,
    name: 'Noodles',
    imagePath: 'noodles.png'
  },
  {
    id: 3,
    name: 'Pasta',
    imagePath: 'pasta.png'
  },
  {
    id: 4,
    name: 'Pizza',
    imagePath: 'pizza.png'
  },
  {
    id: 5,
    name: 'Rice',
    imagePath: 'rice.png'
  }
];

export const MAIN_ITEM_LOOPED_LIST: MainItem[] = [
  ...MAIN_ITEM_LIST,
  ...MAIN_ITEM_LIST,
  ...MAIN_ITEM_LIST,
  ...MAIN_ITEM_LIST,
  ...MAIN_ITEM_LIST
];
