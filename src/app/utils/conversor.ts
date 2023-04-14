import { Injectable } from '@angular/core'
import { formatNumber } from '@angular/common'

@Injectable({
  providedIn: 'root',
})
export class Conversor {
  public toNumber(value: string): number {
    const prefix = '$ '
    const result = value.startsWith(prefix)
      ? Number(value.split(prefix)[1].replaceAll('.', ''))
      : Number(value)

    if (!isFinite(result)) {
      throw new Error(`'${value}' is not a valid number`)
    }

    return result
  }

  public toCash(value: number): string {
    return `$ ${formatNumber(value, 'es-CO')}`
  }
}
