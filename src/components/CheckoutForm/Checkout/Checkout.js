import React, { useState, useEffect } from 'react';
import { Paper, Stepper, Step, StepLabel, Typography } from '@material-ui/core';
import useStyles from './styles';
import { commerce } from '../../../lib/commerce';
import ContactInfoForm from '../ContactInfoForm';
import PaymentForm from '../PaymentForm';

const steps = ['Shipping Details', 'Payment Details'];

const Checkout = ({ cart, onCaptureCheckout, error }) => {
    const [activeStep, setActiveStep] = useState(0);
    const [shippingData, setShippingData] = useState({});
    const [checkoutToken, setCheckoutToken] = useState(null);
    const classes = useStyles();
    useEffect(() => {
        const generateToken = async () => {
            try {
                const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });
                setCheckoutToken(token);
            } catch (error) {

            }
        }
        generateToken();
    }, [cart.id]);

    const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
    const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

    const next = (data) => {
        setShippingData(data);
        nextStep();
    }

    const Confirmation = () => {
        return (<div>Purchase Confirmed</div>)
    }
    const Form = () => activeStep === 0
        ? <ContactInfoForm next={next} checkoutToken={checkoutToken}/>
        : <PaymentForm nextStep={nextStep} onCaptureCheckout={onCaptureCheckout} backStep={backStep} checkoutToken={checkoutToken} shippingData={shippingData}/>
    return (
        <>
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography variant="h4" align="center">Checkout</Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        {steps.map((step) => (
                            <Step key={step}>
                                <StepLabel>{step}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length ? <Confirmation/> : checkoutToken && <Form/>}
                </Paper>
            </main>
        </>
    )
}

export default Checkout;