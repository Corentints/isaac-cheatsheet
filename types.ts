export interface Item {
  name: string;
  id: string;
  image: string;
  quote: string;
  description: string;
  type: string;
}

export interface Trinket {
  name: string;
  id: string;
  image: string;
  quote: string;
  description: string;
}

export interface CardRune {
  name: string;
  id: string;
  image: string;
  unlock: string;
  message: string;
  description: string;
}

export interface DiceRoom {
  id: string;
  name: string;
  image: string;
  description: string;
}
