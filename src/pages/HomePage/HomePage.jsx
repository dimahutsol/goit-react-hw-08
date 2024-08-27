import clsx from 'clsx';
import s from './HomePage.module.css';

const HomePage = () => {
	return (
		<div className={clsx(s.wrapper)}>
			<div className={clsx(s.middleBox)}>
				<h1 className={clsx(s.title)}>
					Welcome to the<span className={clsx(s.accent)}>GoContacts</span>
				</h1>
				<p className={clsx(s.subtitle)}>
					Save your contacts here and always have access to them.
				</p>
				<ul className={clsx(s.list)}>
					<li className={clsx(s.listItem)}>
						<p className={clsx(s.listItemText)}>Add new</p>
					</li>
					<li className={clsx(s.listItem)}>
						<p className={clsx(s.listItemText)}>Edit existing</p>
					</li>
					<li className={clsx(s.listItem)}>
						<p className={clsx(s.listItemText)}>Delete unnecessary</p>
					</li>
					<li className={clsx(s.listItem)}>
						<p className={clsx(s.listItemText)}>Enjoy!</p>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default HomePage;
