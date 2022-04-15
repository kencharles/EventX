/* eslint-disable no-unused-vars */
import logo from './logo.svg'
import './App.css'
import React, { useEffect, useState } from 'react'
import { Input } from 'antd'

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<p>
					<Input placeholder='请输入内容' />
				</p>
				<a
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'
				>
					Learn React
				</a>
			</header>
		</div>
	)
}

export default App
