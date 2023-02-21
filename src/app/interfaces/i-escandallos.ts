export interface IEscandallo {
  warehouse: string;
  userName: string;
  ref: number;
  provider: string;
  product: string;
  variety:  string;

  data: {
    brix:  number[];
    firmness: number[];
    sizeMain: {
      caliberRef: string;
      percentage: number;
    }
    sizeSecond: {
      caliberRef: string;
      percentage: number;
    };
  };
  photos: string[];
  qualityIndicator: string;
  defects: string[];
  MediaBrix: number;
  MediaFirmness: number;
  comments: string;
}
