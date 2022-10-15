export function updateHour(arrHours: any, hours:any) {
  arrHours.forEach((hour:any) => {
   return hours.filter((e:any) => {e != hour}) 
  })
};

