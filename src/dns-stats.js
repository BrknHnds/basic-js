const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let res = {};
  let domainsArr = domains.map(e => e.split('.').map(e => e = '.' + e).reverse());
  domainsArr.forEach(e1 => {
      e1.reduce((acc, e2) => {
          acc = acc + e2;
          if (!res[acc]) {
              res[acc] = 1;
          } else res[acc] += 1;
          return acc;
      }, '')
  })
  return res;
}

module.exports = {
  getDNSStats
};
