import { shallowMount, mount } from '@vue/test-utils'
import Counter from '@/components/Counter'

describe('Counter Component', () => {

    let wrapper;

    beforeEach( () => {
        wrapper  = shallowMount( Counter )
    } )

    // test('Debe de hacer match', () => {
    //     const wrapper = shallowMount( Counter )

    //     expect( wrapper.html() ).toMatchSnapshot()
    // })
    test('H2 debe de tener el valor por defecto Counter', () => {

        
        expect( wrapper.find('h2').exists() ).toBeTruthy()
        // const h2 = wrapper.find('h2')
        const h2 = wrapper.find('h2').text()
        // console.log(h2.text());

        expect( h2 ).toBe('Counter')
    })

    test('El valor debe de ser 100 en la etiqueta p', async() => {
        // Wrapper
        //pTags
        // const pTags = wrapper.findAll('p')
        const value = wrapper.find('[data-testid="counter"]').text()
        // Expect segundo p
        // console.log(pTags);
        expect( value ).toBe('100')
        const [ incBtn, decBtn ] = wrapper.findAll('button')

        await incBtn.trigger('click')
    })

    test('Debe de incrementar y decrementar el valor en 1', async() => {
        // Agarro 
        
        const [ incBtn, decBtn ] = wrapper.findAll('button')

        await incBtn.trigger('click')
        await incBtn.trigger('click')
        await incBtn.trigger('click')

        await decBtn.trigger('click')
        await decBtn.trigger('click')

        let value = wrapper.find('[data-testid="counter"]').text()

        expect(value).toBe('101')
    })

    test('Debe de establecer el valor por defecto', () => {

        const { start } = wrapper.props()

        const value = wrapper.find('[data-testid="counter"]').text()

        expect(Number(value)).toBe(start)
    
    })

    test('Debe de mostrar el props del title', () => {

        const title = 'Hola Mundo!!!'
        const wrapper = shallowMount(Counter, {
            props: {
                title,
            }
        })

        expect( wrapper.find( 'h2' ).text() ).toBe( title )


    })
})