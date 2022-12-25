import { FC, useState } from 'react';
import { TableBoxHeader } from '../TableBoxHeader';
import {
	AFFIRMATIVE_SENTENCE,
	aspectTenseVerbArray,
	PAST_TENSE,
	pronounArray,
	PRONOUN_I,
	SIMPLE_ASPECT,
	tenseVerbArray,
	TO_BE,
	typeOfSentenceArray,
} from './constants';
import { Sentence } from './sentence';
import { sentObj } from './sentObj';
import { TAspectTenseVerb, TPronoun, TTenseVerb, TToBeOrNotToBe, TTypeOfSentence } from './types';

export const Verb: FC = () => {
	const [tenseVerb, setTenseVerb] = useState<TTenseVerb>(PAST_TENSE);
	const [aspectTenseVerb, setAspectTenseVerb] = useState<TAspectTenseVerb>(SIMPLE_ASPECT);
	const [typeOfSentence, setTypeOfSentence] = useState<TTypeOfSentence>(AFFIRMATIVE_SENTENCE);
	const [toBeOrNotToBe, setToBeOrNotToBe] = useState<TToBeOrNotToBe>(TO_BE);
	const [pronoun, setPronoun] = useState<TPronoun>(PRONOUN_I);

	const [subject, setSubject] = useState('');
	const [predicate, setPredicate] = useState('');
	const [object, setObject] = useState('');
	const [adverbialModifierOfPlace, setAdverbialModifierOfPlace] = useState('');
	const [adverbialModifierOfTime, setAdverbialModifierOfTime] = useState('');

	const InputSentence = new Sentence({
		subject,
		predicate,
		object,
		adverbialModifierOfPlace,
		adverbialModifierOfTime,
	});

	const setSubjectHandler = (txt: string) => {
		setSubject(txt);
	};
	const setPredicateHandler = (txt: string) => {
		setPredicate(txt);
	};
	const setObjectHandler = (txt: string) => {
		setObject(txt);
	};
	const setAdverbialModifierOfPlaceHandler = (txt: string) => {
		setAdverbialModifierOfPlace(txt);
	};
	const setAdverbialModifierOfTimeHandler = (txt: string) => {
		setAdverbialModifierOfTime(txt);
	};

	const tenseVerbHandler = (tense: TTenseVerb) => {
		setTenseVerb(tense);
	};
	const aspectTenseVerbHandler = (aspect: TAspectTenseVerb) => {
		setAspectTenseVerb(aspect);
	};
	const typeOfSentenceHandler = (sentense: TTypeOfSentence) => {
		setTypeOfSentence(sentense);
	};
	const toBeOrNotToBeHandler = (sentence: TToBeOrNotToBe) => {
		setToBeOrNotToBe(sentence);
	};
	const pronounHandler = (pr: TPronoun) => {
		setSubjectHandler(pr);
		setPronoun(pr);
	};

	return (
		<div className="box">
			<TableBoxHeader title="What tense is the  sentence?" text="" />
			<div className="button-block">
				{tenseVerbArray.map((item) => (
					<button
						type="button"
						className={`button ${item === tenseVerb ? 'active' : ''}`}
						onClick={() => tenseVerbHandler(item)}
					>
						{item}
					</button>
				))}
			</div>
			{/* <div className="button-block">
				{toBeOrNotToBeArray.map((item) => (
					<button
						type="button"
						className={`button ${item === toBeOrNotToBe ? 'active' : ''}`}
						onClick={() => toBeOrNotToBeHandler(item)}
					>
						{item}
					</button>
				))}
			</div>
 */}
			{/* {toBeOrNotToBe === NOT_TO_BE && ( */}
			<div className="button-block">
				{aspectTenseVerbArray.map((item) => (
					<button
						type="button"
						className={`button ${item === aspectTenseVerb ? 'active' : ''}`}
						onClick={() => aspectTenseVerbHandler(item)}
					>
						{item}
					</button>
				))}
			</div>
			{/* )} */}
			<div className="button-block">
				{typeOfSentenceArray.map((item) => (
					<button
						type="button"
						className={`button ${item === typeOfSentence ? 'active' : ''}`}
						onClick={() => typeOfSentenceHandler(item)}
					>
						{item}
					</button>
				))}
			</div>
			<div className="button-block">
				{pronounArray.map((item) => (
					<button
						type="button"
						className={`button ${item === pronoun ? 'active' : ''}`}
						onClick={() => pronounHandler(item)}
					>
						{item}
					</button>
				))}
			</div>
			<div className="total">
				<p>{`${tenseVerb} ${aspectTenseVerb} / ${typeOfSentence}`}</p>
				<p>{sentObj?.[tenseVerb]?.[aspectTenseVerb]?.[typeOfSentence]?.Scheme ?? ''}</p>
				<p>
					<input
						type="text"
						placeholder="subject"
						value={subject}
						onChange={(e) => setSubjectHandler(e.target.value)}
					/>{' '}
					<input
						type="text"
						placeholder="predicate"
						onChange={(e) => setPredicateHandler(e.target.value)}
					/>{' '}
					<input
						type="text"
						placeholder="object"
						onChange={(e) => setObjectHandler(e.target.value)}
					/>{' '}
					<input
						type="text"
						placeholder="adverbial modifier of place"
						onChange={(e) => setAdverbialModifierOfPlace(e.target.value)}
					/>{' '}
					<input
						type="text"
						placeholder="adverbial modifier of time"
						onChange={(e) => setAdverbialModifierOfTime(e.target.value)}
					/>
				</p>
			</div>
			<div className="result">{InputSentence.setAspectTence(tenseVerb, aspectTenseVerb)}</div>
			<hr style={{ margin: '0 20px' }} />

			<div className="result">
				{sentObj?.[tenseVerb]?.[aspectTenseVerb]?.[typeOfSentence]?.[pronoun] ?? 'Еще не учили!'}
			</div>
		</div>
	);
};
