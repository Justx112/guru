
export interface Icard {
  id: number;
  oldPrice: number;
  price:number;
  title:string;
  seen:boolean;
  locality:string;
  date:number;
}

export interface IcardElement extends Icard {
  countLoaded: React.Dispatch<React.SetStateAction<boolean[]>>
}

export interface Iimage {
  isLoaded: boolean;
}
