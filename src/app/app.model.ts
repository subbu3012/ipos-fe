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

export interface Table {
  id: number;
  name: string;
  lapsedTime: string;
  status: string;
  active?: boolean;
}

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
    status: 'available',
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

export const MAIN_ITEM_WIDTH = '90px';
export const MAIN_ITEM_HEIGHT = '85px';

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
