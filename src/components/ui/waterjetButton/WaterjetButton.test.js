/* eslint-disable no-undef */
import { expect } from 'vitest'
import WaterjetButton from './WaterjetButton.vue'
import { render } from '@testing-library/vue'

describe('WaterjetButton', () => {
    it('Без пропсов на кнопке отображается надпись default', async () => {
        const wrapper = render(WaterjetButton)

        expect(wrapper.container.getElementsByTagName('span')[0].innerHTML).toBe('Default')
    })

    it('Кнопка имеет надпись из пропса label', async () => {
        const wrapper = render(WaterjetButton, {
            props: {
                label: 'Сохранить'
            }
        })

        expect(wrapper.container.getElementsByTagName('span')[0].innerHTML).toBe('Сохранить')
    })

    it('Кнопка имеет надпись и иконку из пропса label', async () => {
        const wrapper = render(WaterjetButton, {
            props: {
                label: 'Сохранить',
                icon: 'WaterjetDeliveryIcon'
            }
        })

        expect(wrapper.container.getElementsByTagName('span')).length(2)
    })
})