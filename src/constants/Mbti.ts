import { Dichotomy } from '@/types/mbti';

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

export const types: string[] = [
  'ISFP', 'ISTP', 'ISTJ', 'INTJ',
  'INFJ', 'ENFJ', 'ESFJ', 'ESTJ',
  'ENTJ', 'ENTP', 'INTP', 'ENFP',
  'INFP', 'ISFJ', 'ESTP', 'ESFP',
];

export const couples: [Dichotomy, Dichotomy][] = [['E', 'I'], ['N', 'S'], ['F', 'T'], ['P', 'J']];

export const pics = {
  ISFP, ISTP, ISTJ, INTJ,
  INFJ, ENFJ, ESFJ, ESTJ,
  ENTJ, ENTP, INFP, ENFP,
  INTP, ISFJ, ESTP, ESFP,
};
