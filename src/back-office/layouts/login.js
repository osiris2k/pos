import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';

class Login extends Component {
	constructor() {
		super();
		this.state = {
			username: '',
			password: '',
			remember_me: '',
		};
	}

	postLogin = (e) => {
		e.preventDefault();
		const { history } = this.props;
		const { username, password, remember_me } = this.state;
		const data = {
			username: username,
			password: password
		}
		sessionStorage.setItem('login',username);
		console.log(data);
		history.push('/users');
		return <Redirect to="/dashboard" />;
	}

	onChange = (e) => {
		const state = this.state;
		state[e.target.name] = e.target.value;
		this.setState(state);
		console.log(e.target);
	}

	render() {
		const {username, password} = this.state;
		return (
			<div className="form-box" id="login-box">
				<div className="header">เข้าสู่ระบบ</div>
				<form onSubmit={this.postLogin}>
					<div className="body bg-gray">
						<div className="form-group">
							<input type="text" name="username" className="form-control" placeholder="Username" value={username}
								   onChange={this.onChange}/>
						</div>
						<div className="form-group">
							<input type="password" name="password" className="form-control" placeholder="Password" value={password}
								   onChange={this.onChange}/>
						</div>
						<div className="form-group">
							<input type="checkbox" name="remember_me" id="remember_me" value="yes" onChange={this.onChange}/> จดจำฉัน
						</div>
					</div>
					<div className="footer">
						<button type="submit" className="btn bg-olive btn-block">ลงชื่อเข้าใช้งาน</button>
						<p><a href="/forgot-password">ลืมรหัสผ่าน</a></p>
					</div>
				</form>
			</div>
		)
	}
}

export default Login;