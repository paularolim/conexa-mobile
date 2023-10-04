import moment from 'moment';

export function dateFormatter(pattern: string, value: Date) {
  return moment(value).format(pattern);
}
