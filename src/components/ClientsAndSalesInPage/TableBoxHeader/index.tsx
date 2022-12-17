import { FC } from 'react';
import { TTableBoxHeaderProps } from './types';

export const TableBoxHeader: FC<TTableBoxHeaderProps> = ({ title, text }) => {
	return (
		<div className="andrii-table-box-header">
			<h2 className="andrii-table-box-header--text"> {title}</h2>
			<p style={{ margin: 0 }}>
				<small className="andrii-table-box-header--text">{text}</small>
			</p>
		</div>
	);
};
