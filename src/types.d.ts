type Category =
  | 'sukienki'
  | 'marynarki'
  | 'koszule'
  | 'bluzki'
  | 'T-shirty'
  | 'topy'
  | 'szorty'
  | 'spodnie'
  | 'jeansy'
  | 'spódnice'
  | 'kurtki'
  | 'płaszcze'
  | 'swetry'
  | 'bluzy'
  | 'piżamy'
  | 'biustonosze';

type Collection =
  | 'wiosna/lato'
  | 'jesień/zima'
  | 'casual'
  | 'biznesowe'
  | 'wieczorowe'
  | 'sportowe';

type SizeN = 34 | 36 | 38 | 40 | 42 | 44 | 46;

type SizeS = 'XXS' | 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL';

type Size = SizeN | SizeS;

type AvailableSize = {
  size: Size;
  soldOut: boolean;
};

type AvailableColor = {
  color: string;
  sizes: Array<AvailableSize>;
};

type Fabric = {
  fabric: string;
  percentage: number;
};

type Pattern = 'w paski' | 'w kratę' | 'jednolity' | 'wzorzysty';

type Item = {
  id: number;
  name: string;
  description: string;
  category: Category;
  collections: Array<Collection>;
  brand?: string;
  size: Size;
  color: string;
  availableColors: Array<AvailableColor>;
  price: number;
  discount: number | null;
  createdAt: string;
  fabrics: Array<Fabric>;
  pattern: Pattern;
  soldCount: number;
  inFashion: boolean;
};
