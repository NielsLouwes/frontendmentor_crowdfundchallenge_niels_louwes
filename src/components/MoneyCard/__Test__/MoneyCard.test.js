import { render, screen} from '@testing-library/react';
import MoneyCard from '../MoneyCard'

describe('MoneyCard', () => {
    it('renders backers amount', () => {
        render(<MoneyCard backers="5000" />)
        const backerComponent = screen.getByText(/5000/i)
        expect(backerComponent).toBeInTheDocument();
    })

    it('renders total backers text', () => {
        render(<MoneyCard backers="5000" />)
        const totalBackersText = screen.getByText(/total backers/i)
        expect(totalBackersText).toBeInTheDocument();
    })

     it('renders days left text', () => {
        render(<MoneyCard backers="5000" />)
        const daysLeftText = screen.getByText(/days left/i)
        expect(daysLeftText).toBeInTheDocument();
    })

     it('renders 56 days left', () => {
        render(<MoneyCard backers="5000" />)
        const daysLeftValue = screen.getByText(/56/i)
        expect(daysLeftValue).toBeInTheDocument();
    })


    // it('renders the progress bar', () => {
    //     render(<MoneyCard  />)
    //     const progressBarComponent = screen.getByTestId("progress-bar-testid")
    //     expect(progressBarComponent).toBeInTheDocument();
    //
    // })

})