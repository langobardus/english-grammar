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
import { sentObj } from './sentObj';
import { TAspectTenseVerb, TPronoun, TTenseVerb, TToBeOrNotToBe, TTypeOfSentence } from './types';

export const Verb: FC = () => {
	const [tenseVerb, setTenseVerb] = useState<TTenseVerb>(PAST_TENSE);
	const [aspectTenseVerb, setAspectTenseVerb] = useState<TAspectTenseVerb>(SIMPLE_ASPECT);
	const [typeOfSentence, setTypeOfSentence] = useState<TTypeOfSentence>(AFFIRMATIVE_SENTENCE);
	const [toBeOrNotToBe, setToBeOrNotToBe] = useState<TToBeOrNotToBe>(TO_BE);
	const [pronoun, setPronoun] = useState<TPronoun>(PRONOUN_I);

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
		setPronoun(pr);
	};

	return (
		<div className="box">
			<TableBoxHeader title="В каком времени предложение?" text="" />
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
			</div>

			<div className="result">
				{sentObj?.[tenseVerb]?.[aspectTenseVerb]?.[typeOfSentence]?.[pronoun] ?? 'Еще не учили!'}
			</div>
		</div>
	);
};
