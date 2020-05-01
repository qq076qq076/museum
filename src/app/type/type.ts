export interface Question {
  type: 'text' | 'image';
  topic: string;
  value?: Option;
  optionList: Option[];
  background: string;
  font?: 'small';
}

export interface Option {
  text?: string;
  value: string;
  src?: string;
  next?: number;
}
