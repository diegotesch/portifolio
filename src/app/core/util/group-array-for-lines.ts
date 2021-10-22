export const groupArrayForLines = (array: any[], cols: number) => {
  let aux: any[] = [];
  return array.reduce((acc: any, curr: any, index: number) => {
    aux.push(curr);
    if ((index + 1) % cols === 0) {
      acc.push(aux);
      aux = [];
    }
    return acc;
  }, []);
};
