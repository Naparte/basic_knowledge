function nthUglyNumber(n: number): number {
  let result: number[] = [1];
  let p2 = 0,
    p5 = 0,
    p3 = 0;

    while(result.length < n) {
      let max = result[result.length -1];

      while(result[p2] * 2 <= max){
        p2++;
      }
      while(result[p3] * 3 <= max){
        p3++;
      }
      while(result[p5] * 5 <= max){
        p5++;
      }

      result.push(Math.min(result[p2] * 2,result[p3] * 3,result[p5] * 5));
    }




    return result[result.length - 1];
}
