import React, { Fragment, useState } from 'react';
import './App.css';

const style = {
	table: {
		borderCollapse: 'collapse',
	},
	tableCell: {
		border: '1px solid gray',
		margin: 0,
		padding: '5px 10px',
		width: 'max-content',
		minWidth: '150px',
	},
	form: {
		container: {
			padding: '20px',
			border: '1px solid #F0F8FF',
			borderRadius: '15px',
			width: 'max-content',
			marginBottom: '40px',
		},
		inputs: {
			marginBottom: '5px',
		},
		submitBtn: {
			marginTop: '10px',
			padding: '10px 15px',
			border: 'none',
			backgroundColor: 'lightseagreen',
			fontSize: '14px',
			borderRadius: '5px',
		},
	},
};

const PhoneBookForm = ({ addEntryToPhoneBook }) => {
	const [userFirstName, setuserFirstName] = useState('');
	const [userLastName, setuserLastName] = useState('');
	const [userPhone, setuserPhone] = useState('');
	const [submitFirstName, setsubmitFirstName] = useState('');
	const [submitLastName, setsubmitLastName] = useState('');
	const [submitPhone, setsubmitPhone] = useState('');

	const handleFirstName = (e) => {
		setuserFirstName(e.target.value);
	};
	const handleLastName = (e) => {
		setuserLastName(e.target.value);
	};
	const handlePhone = (e) => {
		setuserPhone(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setsubmitFirstName(userFirstName);
		setsubmitLastName(userLastName);
		setsubmitPhone(userPhone);
		setuserFirstName('');
		setuserLastName('');
		setuserPhone('');
	};

	return (
		<Fragment>
			<form onSubmit={handleSubmit} style={style.form.container}>
				<label>First name:</label>
				<br />
				<input
					type='text'
					style={style.form.inputs}
					name='userFirstName'
					className='userFirstName'
					value={userFirstName}
					onChange={handleFirstName}
				/>
				<br />
				<label>Last name:</label>
				<br />
				<input
					type='text'
					style={style.form.inputs}
					name='userLastName'
					className='userLastName'
					value={userLastName}
					onChange={handleLastName}
				/>
				<br />
				<label>Phone:</label>
				<br />
				<input
					type='text'
					style={style.form.inputs}
					name='userPhone'
					className='userPhone'
					value={userPhone}
					onChange={handlePhone}
				/>
				<br />
				<input
					type='submit'
					value='Add User'
					style={style.form.submitBtn}
				/>
			</form>
			<InformationTable
				firstName={submitFirstName}
				lastName={submitLastName}
				phone={submitPhone}
			/>
		</Fragment>
	);
};

const InformationTable = (props) => {
	return (
		<Fragment>
			<table style={style.table} className='InformationTable'>
				<thead style={style.tableCell}>
					<tr>
						<th style={style.tableCell}>First name</th>
						<th style={style.tableCell}>Last name</th>
						<th style={style.tableCell}>Phone </th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>First name = {props.firstName}</td>
						<td>Last name = {props.lastName}</td>
						<td>Phone = {props.phone}</td>
					</tr>
				</tbody>
			</table>
		</Fragment>
	);
};

const App = () => {
	return (
		<section>
			<PhoneBookForm />
		</section>
	);
};

export default App;
