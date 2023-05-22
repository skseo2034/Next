import React, { FC, FormEvent, useLayoutEffect, useRef } from 'react';
import Button from '@/components/ui/Button';
import classes from './EventsSearch.module.css';
import { EventItemInterface } from '@/interfaces/CommonInterface';

interface Props {
	onSearch: (selectedYear: string, selectedMonth: string) => void;
}

const EventsSearch: FC<Props> = (props: Props) => {
	console.log('EventsSearch props', props);
	const yearInputRef = useRef<HTMLSelectElement>(null);
	const monthInputRef = useRef<HTMLSelectElement>(null);

	const submitHandler = (e: FormEvent) => {
		e.preventDefault();
		// 선택된 값을 가직 오는 방법은 2가지가 있다. useRef, useState
		// 여기에서는 선택된 value 값은 모두 양식이 제출되었을 시 한 번만 보니까 ref를 사용한다.

		const selectedYear = yearInputRef.current ? yearInputRef.current.value : '';
		const selectedMonth = monthInputRef.current ? monthInputRef.current.value : '';

		props.onSearch(selectedYear, selectedMonth);
	};
	return (
		<form className={classes.form} onSubmit={submitHandler}>
			<div className={classes.controls}>
				<div className={classes.control}>
					<label htmlFor="year">Year</label>
					<select id="year" ref={yearInputRef}>
						<option value="2021">2021</option>
						<option value="2022">2022</option>
					</select>
				</div>
				<div className={classes.control}>
					<label htmlFor="month">Month</label>
					<select id="month" ref={monthInputRef}>
						<option value="1">Jan</option>
						<option value="2">Feb</option>
						<option value="3">Mar</option>
						<option value="4">Apr</option>
						<option value="5">May</option>
						<option value="6">Jun</option>
						<option value="7">Jul</option>
						<option value="8">Aug</option>
						<option value="9">Sep</option>
						<option value="10">Oct</option>
						<option value="11">Nov</option>
						<option value="12">Dec</option>
					</select>
				</div>
			</div>
			<Button>Find Events</Button>
		</form>
	);
};

export default EventsSearch;
