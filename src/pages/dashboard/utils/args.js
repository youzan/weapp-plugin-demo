const obj2UrlString = (obj) => {
  let string = '';
  for (let key in obj) { // eslint-disable-line
    if (obj[key] === '') {
      continue;
    }
    string += key.trim() + '=' + obj[key] + '&';
  }
  return string ? '?' + string.slice(0, string.length - 1) : '';
};

function addParameter(url, obj, encode = false) {
  if (!url || url.length === 0 || url.trim().indexOf('javascript') === 0) {
    return '';
  }
  const hashArray = url.split('#');
  const paraArray = hashArray[0].split('?');
  const para = getAllParameter(url);

  // 将需要添加的参数放入para对象
  Object.keys(obj).forEach((key) => {
    para[key.trim()] = encode ? encodeURIComponent(obj[key]) : obj[key];
  });
  // 重组url
  url = paraArray[0] + obj2UrlString(para);

  return hashArray[1] ? url += '#' + hashArray[1] : url;
}

function getAllParameter(url = '') {
  const hashArray = url.split('#');
  const paraArray = hashArray[0].split('?');
  const para = {};
  // 原有参数放入para对象
  if (paraArray[1]) {
    paraArray[1].split('&').forEach((item) => {
      const tempArr = item.split('=');
      // 参数值中有等号，做处理
      para[tempArr[0]] = tempArr.slice(1).join('=');
    });
  }

  return para;
}

export default {
  add: addParameter,
  getAll: getAllParameter
};
