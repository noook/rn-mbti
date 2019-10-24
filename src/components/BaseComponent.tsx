import { Component, ReactNode } from 'react';
import translator, { Translator } from '@/translations/index';
import { TranslatorParam } from '@/types/translator';

export default abstract class BaseComponent<P = {}, S = {}, SS = any> extends Component<P, S, SS> {
  public $translator: Translator = translator;

  $t(key: string, params?: TranslatorParam): string {
    return this.$translator.trans(key, params);
  }

  abstract render(): ReactNode
}