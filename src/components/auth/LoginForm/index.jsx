import React from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

// import { Button, Card, CardText, CardActions, CardTitle, Textfield } from 'react-mdl'
// import style from './style'

const handleSubmit = (e) => {
  e.preventDefault();
  console.log('Submit form', e); // eslint-disable-line no-console
}

const LoginForm = () => (
  <div className="login-form">
    <Card style={{maxWidth: '90%', margin: '0 auto'}}>
      <CardHeader
        title="URL Avatar"
        subtitle="Subtitle"
        avatar="images/jsa-128.jpg"
      />
      <CardMedia
        overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
      >
        <img src="images/nature-600-337.jpg" alt="" />
      </CardMedia>
      <CardTitle title="Card title" subtitle="Card subtitle" />
      <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
      </CardText>
      <CardActions>
        <FlatButton label="Login" onClick={handleSubmit} />
        <FlatButton label="Action2" />
      </CardActions>
    </Card>
    {/* <Card shadow={0} style={{margin: 'auto'}}>
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
    </Card> */}
  </div>
)

export default LoginForm
