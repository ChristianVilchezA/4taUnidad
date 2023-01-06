import { Pipe, PipeTransform } from "@angular/core";

 @Pipe({
     name: 'FilterPipe'
 })

export class FilterPipe implements PipeTransform {

    transform(value: string, ...arg: any): any {
       if (value) {
        const date = new Date(value)
        const now = new Date()
        const diff= now.getTime() - date.getTime()
        const minutos = Math.floor(diff/60000)
        const horas  = Math.floor(minutos/60)
        const dias = Math.floor(horas / 24)

        if (minutos < 60 ){
            return 'hace ' + minutos + ' min'
        } else if (horas < 24) {
            return 'hace ' + horas + ' hrs'
        } else if (dias < 10) {
            return 'hace ' + dias + ' days'
        } else {
            return  date.toLocaleDateString('es-ES', {day: '2-digit', month: "short"})
        }
       }
    }
}