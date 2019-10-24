export type QuestionPosition = 'left' | 'right';

export type Dichotomy = 'E' | 'I' | 'N' | 'S' | 'T' | 'F' | 'J' | 'P';

export interface MbtiQuestion {
  position: QuestionPosition | string;
  label: {
    [key: string]: string;
  };
  value: Dichotomy | string;
}

export type MbtiResults = {
  [key in Dichotomy]: number;
}
