export const generateData = () => {
  let data = [];

  for(let i=0;i<10;i++){
    data.push({
      id: `${i}`,
      name: Math.random().toString(36).substring(7),
      amount: i*i,
    });
  }

  return data;
}
