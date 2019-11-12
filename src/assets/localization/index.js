import LocalizedStrings from 'react-localization';
import en_US from './en_US';
import sr_RS from './sr_RS';

let strings = new LocalizedStrings({
  en_US: { ...en_US},
  sr_RS: { ...sr_RS}
});

export default strings;
