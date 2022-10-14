export function updateHour(hour: any, hours: any) {
  return hours?.hours.filter((e: any) => e != hour);
}
