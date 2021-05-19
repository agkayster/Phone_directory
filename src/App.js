import React, { useState } from 'react';
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

function PhoneBookForm({ addEntryToPhoneBook }) {
	const [userFirstname, setuserfirstname] = useState('');
	const [userLastname, setuserlastname] = useState('');
	const [userPhone, setuserphone] = useState('');
	const [submitFirstName, setsubmitFirstName] = useState('');
	const [submitLastName, setsubmitLastName] = useState('');
	const [submitPhone, setsubmitPhone] = useState('');

	const handleFirstname = (e) => {
		setuserfirstname(e.target.value);
	};

	const handleLastname = (e) => {
		setuserlastname(e.target.value);
	};

	const handlePhone = (e) => {
		setuserphone(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setsubmitFirstName(userFirstname);
		setsubmitLastName(userLastname);
		setsubmitPhone(userPhone);
		setuserfirstname('');
		setuserlastname('');
		setuserphone('');
	};

	return (
		<div>
			<form onSubmit={handleSubmit} style={style.form.container}>
				<label>First name:</label>
				<br />
				<input
					style={style.form.inputs}
					className='userFirstname'
					name='userFirstname'
					type='text'
					value={userFirstname}
					onChange={handleFirstname}
				/>
				<br />
				<label>Last name:</label>
				<br />
				<input
					style={style.form.inputs}
					className='userLastname'
					name='userLastname'
					type='text'
					value={userLastname}
					onChange={handleLastname}
				/>
				<br />
				<label>Phone:</label>
				<br />
				<input
					style={style.form.inputs}
					className='userPhone'
					name='userPhone'
					type='text'
					value={userPhone}
					onChange={handlePhone}
				/>
				<br />
				<input
					style={style.form.submitBtn}
					className='submitButton'
					type='submit'
					value='Add User'
				/>
			</form>
			<InformationTable
				FirstName={submitFirstName}
				LastName={submitLastName}
				Phone={submitPhone}
			/>
		</div>
	);
}

function InformationTable(props) {
	return (
		<table style={style.table} className='informationTable'>
			<thead>
				<tr>
					<th style={style.tableCell}>First name</th>
					<th style={style.tableCell}>Last name</th>
					<th style={style.tableCell}>Phone</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td> First name = {props.FirstName}</td>
					<td> Last name = {props.LastName}</td>
					<td> Phone = {props.Phone}</td>
				</tr>
			</tbody>
		</table>
	);
}

function App(props) {
	return (
		<section>
			<PhoneBookForm />
			{/* <InformationTable /> */}
		</section>
	);
}

export default App;
