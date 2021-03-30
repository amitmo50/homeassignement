import React, {useState, useEffect} from 'react';
import { InputLabel, Select, Button, MenuItem, Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import { commerce } from '../../lib/commerce';
import { Link } from 'react-router-dom';
import FormInput from './FormInput';

const ContactInfoForm = ({ checkoutToken, next }) => {
    const [shippingCountries, setShippingCountries] = useState([]);
    const [shippingCountry, setShippingCountry] = useState('');
    const methods = useForm();
    const fetchShippingCountries = async (checkoutTokenId) => {
        const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId);
        setShippingCountries(countries);
        setShippingCountry(Object.keys(countries)[0]);
    };

    useEffect(() => {
        fetchShippingCountries(checkoutToken.id);
    }, [checkoutToken.id]);
    
    return (
        <>
            <Typography gutterBottom variant="h6">Shipping Info</Typography>
            <FormProvider {...methods }>
                <form onSubmit={methods.handleSubmit((data) => next({ ...data, shippingCountry }))}>
                    <Grid container spacing={3} style={{justifyContent: 'center'}}>
                        <FormInput required name="phone" label="Phone Numer"/>
                        <FormInput required name="address" label="Shipping Address"/>
                        <FormInput required name="email" label="Email"/>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Country</InputLabel>
                            <Select value={shippingCountry} fullWidth onChange={(e) => setShippingCountry(e.target.value)}>
                                {Object.entries(shippingCountries).map(([code, name]) => ({ id: code, label: name })).map((item) => (
                                <MenuItem key={item.id} value={item.id}>
                                    {item.label}
                                </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                    </Grid>
                    <br/>
                    <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                        <Button component={Link} to="/cart" variant="outlined">Back to Cart</Button>
                        <Button type="submit" variant="contained" color="primary">Next</Button>
                    </div>
                </form>
            </FormProvider>
        </>
    )
}

export default ContactInfoForm;