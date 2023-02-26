export interface IEscandallo {
  // _id: string;
  warehouse?: string;
  userName?: string;
  ref: number;
  provider: string;
  product: string;
  variety: string;

  data: {
    brix: number[];
    firmness: number[];
    caliberRef1: string;
    percentage1: number;
    caliberRef2: string;
    percentage2: number;
  };
  photos: string[];
  qualityIndicator: string;
  defects: string[];
  MediaBrix: number;
  MediaFirmness: number;
  comments: string;
}

export interface IEscandalloDB {
  _id: string;
  warehouse?: string;
  userName?: string;
  ref: number;
  provider: string;
  product: string;
  variety: string;

  data: {
    brix: number[];
    firmness: number[];
    caliberRef1: string;
    percentage1: number;
    caliberRef2: string;
    percentage2: number;
  };
  photos: string[];
  qualityIndicator: string;
  defects: string[];
  MediaBrix: number;
  MediaFirmness: number;
  comments: string;
}
