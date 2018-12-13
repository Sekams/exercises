const solution = (S) => {
  if (S.length % 2 !== 0) return 0;
  const opens = S.replace(/[^\(\{\[]/g, '').split('');
  const closes = S.replace(/[^\)\}\]]/g, '').split('');
  if (opens.length !== closes.length) return 0;
  const length = opens.length - 1;
  const isClosed = (closes, closer, i) => closes[i] === closer || closes[length - i] === closer;
  for (let i = length; i >= 0; i--){
    if (opens[i] === '(' && !isClosed(closes, ')', i)) {
      return 0;
    } else if (opens[i] === '{' && !isClosed(closes, '}', i)) {
      return 0;
    } else if (opens[i] === '[' && !isClosed(closes, ']', i)) {
      return 0;
    } 
  }
  return 1;
} 
