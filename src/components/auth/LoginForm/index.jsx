import React from 'react'
import { Button, Card, CardText, CardActions, CardTitle, Textfield } from 'react-mdl'
import style from './style'

const handleSubmit = (e) => {
  e.preventDefault();
  console.log('Submit form', e); // eslint-disable-line no-console
}

const LoginForm = () => (
  <div className="login-form">
    <Card shadow={0} style={{margin: 'auto'}}>
      <CardTitle>Login</CardTitle>
      <form className={style.test} action="#" onSubmit={handleSubmit}>
        <CardText>
            <Textfield label="Username" id="username" type="email" error="Input is not a email address."/>
            <Textfield label="Password" id="password" type="password"/>
        </CardText>
        <CardActions border>
          <Button colored onClick={handleSubmit}>Login</Button>
        </CardActions>
      </form>
    </Card>
  </div>
)

export default LoginForm
