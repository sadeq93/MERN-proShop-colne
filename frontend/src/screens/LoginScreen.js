import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Col, Button, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';
import { login } from '../actions/userActions';

export const LoginScreen = ({ location, history }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const userLogin = useSelector((state) => state.userLogin);
    const { loading, error, userInfo } = userLogin;

    const redirect = location.search ? location.search.split('=')[1] : '/';
    
    const submitHanler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }
    useEffect(() =>{
        if(userInfo) {
            history.push(redirect)
        }
    }, [history, userInfo, redirect])


    return (
        <FormContainer>
            <h1>Sign in</h1>
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader/>}
            <Form onSubmit={submitHanler}> 
                <Form.Group controlId='email'>
                    <Form.Label>Email adress</Form.Label>
                    <Form.Control 
                    type='email'
                    defaultValue={email}
                    placeholder='Enter email'
                    onChange={(e) => setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                    type='password'
                    defaultValue={password}
                    placeholder='Enter passwordl'
                    onChange={(e) => setPassword(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Button type='submit' variant='primary'>Sign in</Button>
            </Form>
            <Row className='py-3'>
                <Col>
                    New customer?{' '}
                    <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>Register</Link>
                </Col>
            </Row>
        </FormContainer>
    )
}
