import { render, screen} from '@testing-library/react';
import StandCard from '../StandCard'

describe('StandCard component', () => {
    it('renders label of product', () => {
        render(<StandCard label="bamboo stand" />)
        const labelComponent = screen.getByText(/bamboo stand/i)
        expect(labelComponent).toBeInTheDocument();
        
    })

    it('renders label of product 2', () => {
        render(<StandCard label="black edition stand" />)
        const labelComponent = screen.getByText(/black edition stand/i)
        expect(labelComponent).toBeInTheDocument();
    })

     it('renders select reward button', () => {
        render(<StandCard title="bamboo stand" />)
        const buttonComponent = screen.getByRole('button', {  name: /select reward/i})
        expect(buttonComponent).toBeInTheDocument();
        // screen.debug()
    })

     it('renders an 64 items left', () => {
        render(<StandCard label="bamboo stand" amountLeft="64" />)
        const leftComponent = screen.getByText(/64/i)
        expect(leftComponent).toBeInTheDocument();
     })

     it('renders left', () => {
        render(<StandCard title="bamboo stand" />)
        const leftComponent = screen.getByText(/left/i)
        expect(leftComponent).toBeInTheDocument();
    })

    // it('renders -1 product left when select reward button is clicked', () => {
    //     render(<StandCard title="bamboo stand" amountLeft= "60" />)
    //     const leftComponent = screen.getByText(/60/i)
    //     const buttonComponent = screen.getByRole('button', {  name: /select reward/i})
    //     render(<StandCard title="bamboo stand" amountLeft= "61" />)
    //     expect(leftComponent).toBeInTheDocument();
    //     userEvent.click(buttonComponent);
    //     expect(leftComponent.value).toBe(/59/i);
    //     // eslint-disable-next-line testing-library/no-debugging-utils
    //     screen.debug()
    // })
})