/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let obj = {};
  
  for(let partStr of str.split(' ')) {   
   partStr
     .split(',')
     .filter(item => isFinite(item) && item !== '')
     .forEach(item => {
      obj.min = (obj.min == undefined) ? +item : Math.min(obj.min, +item);
      obj.max = (obj.max == undefined) ? +item : Math.max(obj.max, +item);
    });   
  }  
  return obj;
}
