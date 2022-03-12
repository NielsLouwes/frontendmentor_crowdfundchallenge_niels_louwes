import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import StandCard from '../StandCard'

describe('StandCard component', () => {
    // it('renders label of product', () => {
    //     render(<StandCard title="bamboo stand" />)
    //     const labelComponent = screen.getByText(/bamboo stand/i)
    //     expect(labelComponent).toBeInTheDocument();
    //     screen.debuf(screen.getByText(/bamboo stand/i))
    // })

     it('renders select reward button', () => {
        render(<StandCard title="bamboo stand" />)
        const buttonComponent = screen.getByRole('button', {  name: /select reward/i})
        expect(buttonComponent).toBeInTheDocument();
        screen.debug()
    })

     it('renders amount of product left', () => {
        render(<StandCard title="bamboo stand" />)
        const leftComponent = screen.getByText(/left/i)
        expect(leftComponent).toBeInTheDocument();
        // eslint-disable-next-line testing-library/no-debugging-utils
        screen.debug(screen.getByText(/left/i))
    })

    it('renders -1 product left when select reward button is clicked', () => {
        render(<StandCard title="bamboo stand" amountLeft={60} increment={}/>)
        const leftComponent = screen.getByText(/60/i)
        const buttonComponent = screen.getByRole('button', {  name: /select reward/i})
        expect(leftComponent).toBeInTheDocument();
        userEvent.click(buttonComponent);
        expect(leftComponent.value).toBe(/59/i);
        // eslint-disable-next-line testing-library/no-debugging-utils
        screen.debug()
    })
})