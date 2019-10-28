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

export interface UserType {
  type: string;
  ratios: {
    [key in Dichotomy]: number
  }
}

export interface GaugeSettingsField {
  dichotomy: Dichotomy;
}

export type GaugeSettings = {
  name: string;
  color: string;
  fields: [GaugeSettingsField, GaugeSettingsField];
}[]

export interface MbtiTypeItem {
  aka: string;
  name: string;
  summary: string;
}
