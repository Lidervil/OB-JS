const NAME = 'George';
const LASTNAME = 'Villarroel';
const STUDENT = NAME.concat(' ' + LASTNAME);
const UPPERSTUDENT = STUDENT.toUpperCase();
const LOWERSTUDENT = STUDENT.toLowerCase();
const STUDENTLEN = STUDENT.length();
const FCHARNAME = NAME.charAt(0);
const LCHARLASTNAME = LASTNAME.charAt(LASTNAME.length()-1);
const NOSPACES = STUDENT.replace(' ', '');
const INCLUDES = STUDENT.includes(NAME);