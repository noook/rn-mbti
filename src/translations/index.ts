import { Platform, NativeModules } from 'react-native'
import { TranslatorParam, Translations } from '@/types/translator';
import commonFr from './common.fr';
import commonEn from './common.en';
import mbtiFr from './mbti.fr';
import mbtiEn from './mbti.en';
import routesEn from './routes.en';
import routesFr from './routes.fr';
import questionsEn from './questions.en.json';
import questionsFr from './questions.fr.json';

export enum TranslatorLangs {
  FR = 'fr',
  EN = 'en',
}

function getSystemLocale(): string {
  let locale: string;
  if (
    NativeModules.SettingsManager &&
    NativeModules.SettingsManager.settings &&
    NativeModules.SettingsManager.settings.AppleLanguages
  ) {
    locale = NativeModules.SettingsManager.settings.AppleLanguages[0];
  } else if (NativeModules.I18nManager) {
    locale = NativeModules.I18nManager.localeIdentifier;
  }

  if (typeof locale === 'undefined') {
    console.log('Couldnt get locale');
    return 'fr';
  }

  return locale.split('_')[0];
}

export class Translator {
  private translations: Translations;
  public deviceLanguage: string = getSystemLocale();

  constructor() {
    this.translations = {
      [TranslatorLangs.FR]: {
        ...commonFr,
        ...mbtiFr,
        ...questionsFr,
        ...routesFr,
      },
      [TranslatorLangs.EN]: {
        ...commonEn,
        ...mbtiEn,
        ...questionsEn,
        ...routesEn,
      },
    };
  }

  private deepTrans(tree: string[], curr: TranslatorParam): string {
    const current = curr[tree.shift()];
    if (!tree.length) return current as string;

    return this.deepTrans(tree, current as TranslatorParam);
  }

  public trans(key: string, params?: TranslatorParam): string {
    let translation = this.deepTrans(key.split('.'), this.translations[this.deviceLanguage]);
    if (!params) return translation.trim();

    Object.entries(params).forEach(([key, value]) => {
      translation = translation.replace(`{:${key}}`, value.toString());
    });

    return translation.trim();
  }
}

export default new Translator;
