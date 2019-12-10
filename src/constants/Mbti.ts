import { Dichotomy, GaugeSettings } from '@/types/mbti';

const ISFP = require('../../assets/types/isfp.png');
const ISTP = require('../../assets/types/istp.png');
const ISTJ = require('../../assets/types/istj.png');
const INTJ = require('../../assets/types/intj.png');
const INFJ = require('../../assets/types/infj.png');
const ENFJ = require('../../assets/types/enfj.png');
const ESFJ = require('../../assets/types/esfj.png');
const ESTJ = require('../../assets/types/estj.png');
const ENTJ = require('../../assets/types/entj.png');
const ENTP = require('../../assets/types/entp.png');
const INTP = require('../../assets/types/intp.png');
const ENFP = require('../../assets/types/enfp.png');
const INFP = require('../../assets/types/infp.png');
const ISFJ = require('../../assets/types/isfj.png');
const ESTP = require('../../assets/types/estp.png');
const ESFP = require('../../assets/types/esfp.png');

const analysts = require('../../assets/categories/analysts.png');
const diplomats = require('../../assets/categories/diplomats.png');
const sentinels = require('../../assets/categories/sentinels.png');
const explorers = require('../../assets/categories/explorers.png');

export const types: string[] = [
  'ISFP', 'ISTP', 'ISTJ', 'INTJ',
  'INFJ', 'ENFJ', 'ESFJ', 'ESTJ',
  'ENTJ', 'ENTP', 'INTP', 'ENFP',
  'INFP', 'ISFJ', 'ESTP', 'ESFP',
];

export const gaugeSettings: GaugeSettings = [
  {
    name: 'mind',
    color: '#51A9AB',
    fields: [
      { dichotomy: 'E' },
      { dichotomy: 'I' },
    ],
  },
  {
    name: 'energy',
    color: '#E2A942',
    fields: [
      { dichotomy: 'N' },
      { dichotomy: 'S' },
    ],
  },
  {
    name: 'nature',
    color: '#56AC8A',
    fields: [
      { dichotomy: 'T' },
      { dichotomy: 'F' },
    ],
  },
  {
    name: 'tactics',
    color: '#CFA0B6',
    fields: [
      { dichotomy: 'J' },
      { dichotomy: 'P' },
    ],
  },
];

export const couples: [Dichotomy, Dichotomy][] = [
  ['E', 'I'], ['N', 'S'], ['T', 'F'], ['J', 'P']
];

export const pics = {
  ISFP, ISTP, ISTJ, INTJ,
  INFJ, ENFJ, ESFJ, ESTJ,
  ENTJ, ENTP, INFP, ENFP,
  INTP, ISFJ, ESTP, ESFP,
};

export const categories = {
  analysts: [
    'INTJ',
    'INTP',
    'ENTJ',
    'ENTP',
  ],
  diplomats: [
    'INFJ',
    'INFP',
    'ENFJ',
    'ENFP',
  ],
  sentinels: [
    'ISTJ',
    'ISFJ',
    'ESTJ',
    'ESFJ',
  ],
  explorers: [
    'ISTP',
    'ISFP',
    'ESTP',
    'ESFP',
  ],
}

export const categoriesPics = {
  analysts,
  diplomats,
  sentinels,
  explorers
}
