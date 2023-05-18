import { type } from '@testing-library/user-event/dist/type';
import React, { useEffect, useState } from 'react';

type TypeBookOptionProps = { onClick: () => void };
export function BookOption({ onClick }: TypeBookOptionProps) {
	return (
		<li>
			<p>문제 범위</p>
			<button onClick={onClick}>{/* {selectedBookNames} */}선택</button>
		</li>
	);
}

type TypeOptionProps = { value: string; onChange: (value: string) => void };
export function TypeOption({ value, onChange }: TypeOptionProps) {
	return (
		<li>
			<p>문제 타입</p>
			<label htmlFor='word-type'>
				단어
				<input
					type='radio'
					id='word-type'
					name='type'
					value='word'
					checked={value === 'word'}
					onChange={e => {
						onChange(e.target.value);
					}}
				/>
			</label>
			<label>
				의미
				<input
					type='radio'
					id='meaning-type'
					name='type'
					value='meaning'
					checked={value === 'meaning'}
					onChange={e => {
						onChange(e.target.value);
					}}
				/>
			</label>
		</li>
	);
}

type NumberOptionProps = {
	value: number;
	onChange: (value: number) => void;
};
export function NumberOption({ value, onChange }: NumberOptionProps) {
	return (
		<li>
			<p>문제 개수</p>
			<input
				type='number'
				step={5}
				min={5}
				max={50}
				value={value}
				onChange={e => {
					onChange(Number(e.target.value));
				}}></input>
		</li>
	);
}

type WordStatusOptionProps = {
	value: number[];
	onChange: (value: number[]) => void;
};
export function WordStatusOption({ value, onChange }: WordStatusOptionProps) {
	const handleCheckboxChange = (e: { target: { value: string } }) => {
		const inputValue = Number(e.target.value);
		if (value.includes(inputValue)) {
			const newTypeOption = value.filter(state => state !== inputValue);
			onChange(newTypeOption);
		} else {
			const newTypeOption = [...value, inputValue];
			onChange(newTypeOption);
		}
	};

	return (
		<li>
			<p>문제 상태</p>
			<label>
				미분류 단어
				<input
					id='0-type'
					type='checkbox'
					name='type'
					value='0'
					checked={value.includes(0)}
					onChange={e => handleCheckboxChange(e)}
				/>
			</label>
			<label>
				외운 단어
				<input
					id='1-type'
					type='checkbox'
					name='type'
					value='1'
					checked={value.includes(1)}
					onChange={e => handleCheckboxChange(e)}
				/>
			</label>
			<label>
				헷갈리는 단어
				<input
					id='2-type'
					type='checkbox'
					name='type'
					value='2'
					checked={value.includes(2)}
					onChange={e => handleCheckboxChange(e)}
				/>
			</label>
		</li>
	);
}