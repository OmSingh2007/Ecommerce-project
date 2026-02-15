import { it, expect, describe } from 'vitest';
import { formatMoney } from './money'
describe('formatMoney', () => {
    it('1999 Cents is equals to $19.99 ', () => {
        expect(formatMoney(1999)).toBe('$19.99')
    })

    it('Display 2 decimals ', () => {
        expect(formatMoney(1090)).toBe('$10.90')
    })
})
