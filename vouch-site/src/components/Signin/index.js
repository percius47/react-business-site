import React from 'react';
import { Container,
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    FormButton,
    Text



} from './SigninElements';

const SignIn = () => {
    return (
        <div>
            <Container>
                <FormWrap>
                <Icon to="/">Vouch Systems </Icon>
                <FormContent>
                <Form>
                    <FormH1>Sign in to your Account</FormH1>
                    <FormLabel htmlFor='for'>Email</FormLabel>
                    <FormInput type='email' required/>
                    <FormLabel htmlFor='for'>Password</FormLabel>
                    <FormInput type='password' required/>
                    <FormButton type='submit'>Submit</FormButton>
                    <Text>Forgot Password?</Text>
                </Form>
                </FormContent>
                </FormWrap>
            </Container>
        </div>
    )
}

export default SignIn
