module.exports = function toReadable (number) {
    const str = String(number);
  if (number <= 20 || (number < 100 && number % 10 === 0)) {    
    return numbers_name(str);  
  } else if (number >= 100 && number % 100 === 0 && number < 1000) {
    return `${numbers_name(str[0])} hundred`;
  } else if (number > 20 && number < 100) {
    return `${numbers_name(String(Number(str[0]) * 10))} ${numbers_name(str[1])}`;
  } else if ((number > 100 && (Number(str.slice(1)) <= 20 && Number(str.slice(1)) >= 10)) || (number > 100 && number % 10 === 0)) {
    return `${numbers_name(str[0])} hundred ${numbers_name(str.slice(1))}`;
  } else if (number > 100 && (Number(str.slice(1)) > 0 && Number(str.slice(1)) < 10)) {
    return `${numbers_name(str[0])} hundred ${numbers_name(str[2])}`;
  } else if (number > 120 && number % 10 !== 0){
    return `${numbers_name(str[0])} hundred ${numbers_name(String(Number(str[1]) * 10))} ${numbers_name(str[2])}`
  }
}

function numbers_name(num) {
    switch(num) {
        case '0': return 'zero';
        case '1': return 'one';
        case '2': return 'two';
        case '3': return 'three';
        case '4': return 'four';
        case '5': return 'five';
        case '6': return 'six';
        case '7': return 'seven';
        case '8': return 'eight';
        case '9': return 'nine';
        case '10': return 'ten';
        case '11': return 'eleven';
        case '12': return 'twelve';
        case '13': return 'thirteen';
        case '14': return 'fourteen';
        case '15': return 'fifteen';
        case '16': return 'sixteen';
        case '17': return 'seventeen';
        case '18': return 'eighteen';
        case '19': return 'nineteen';
        case '20': return 'twenty';
        case '30': return 'thirty';
        case '40': return 'forty';
        case '50': return 'fifty';
        case '60': return 'sixty';
        case '70': return 'seventy';
        case '80': return 'eighty';
        case '90': return 'ninety';
    }
}
