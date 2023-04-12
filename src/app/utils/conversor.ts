import { Injectable } from '@angular/core'
import { formatNumber } from '@angular/common'

@Injectable({
  providedIn: 'root',
})
export class Conversor {
  public toNumber(value: string): number {
    const prefix = '$ '

    if (!value.startsWith(prefix)) {
      return 0
    }

    return Number(value.split(prefix)[1].replace('.', ''))
  }

  public toCash(value: number): string {
    return `$ ${formatNumber(value, 'es-CO', '0')}`
  }
}
