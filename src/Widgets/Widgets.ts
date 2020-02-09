import CheckboxWidget from '../CheckboxWidget/CheckboxWidget';
import CheckboxesWidget from '../CheckboxesWidget/CheckboxesWidget';
import PasswordWidget from '../PasswordWidget/PasswordWidget';
import RadioWidget from '../RadioWidget/RadioWidget';
import RangeWidget from '../RangeWidget/RangeWidget';
import SelectWidget from '../SelectWidget/SelectWidget';
import TextareaWidget from '../TextareaWidget/TextareaWidget';
import TextWidget from '../TextWidget/TextWidget';
import UpDownWidget from '../UpDownWidget/UpDownWidget';
import EmailWidget from '../EmailWidget/EmailWidget';
import DateTimeWidget from '../DateTimeWidget/DateTimeWidget';
import DateWidget from '../DateWidget/DateWidget';
import TimeWidget from '../TimeWidget/TimeWidget';
import ComboBoxWidget from '../ComboBoxWidget/ComboBoxWidget';

export default {
  CheckboxWidget,
  CheckboxesWidget,
  PasswordWidget,
  RadioWidget,
  RangeWidget,
  SelectWidget,
  TextareaWidget,
  TextWidget,
  UpDownWidget,
  EmailWidget,
  DateTimeWidget,
  AltDateTimeWidget: DateTimeWidget,
  DateWidget,
  combo: ComboBoxWidget,
  time: TimeWidget,
};
