export interface GameData {
  id: number;
  name: string;
  description: string;
  image: string;
  label: string;
  price: number;
}

export interface GameDataApiResponse {
  content: GameData[];
  totalPages: number;
  totalElements: number;
  last: boolean;
  numberOfElements: number;
  first: boolean;
  size: number;
  number: number;
  sort: {
    sorted: boolean;
    unsorted: boolean;
    empty: boolean;
  };
  empty: boolean;
}
