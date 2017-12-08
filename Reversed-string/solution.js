
function solution(str) {
  str = str.split('');
  let final = [];
  for (let i = 1; i <= str.length; i++) {
    final.push(str[str.length - i])
  }
  final = final.join('');
  return final;
}
