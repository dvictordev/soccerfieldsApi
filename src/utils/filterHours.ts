import { matchProps } from "../types/match.type"

export function filterHours(matchs:any, hours:any){
    matchs.forEach((match:matchProps)  => {
        if(hours?.hours.includes(match.hour)){
          let index = hours.hours.indexOf(match.hour)
          return hours.hours.splice(index, 1)
        }
      })
 }