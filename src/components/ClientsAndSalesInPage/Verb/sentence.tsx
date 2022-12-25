/* eslint-disable consistent-return */
import {
	ADVERBIAL_MODIFIER_OF_INDEFINITE_TIME_ARRAY,
	CONSONANTS,
	CONTINUOUS_ASPECT,
	IRREGULAR_VERBS,
	PAST_TENSE,
	PRESENT_TENSE,
	PRONOUN_HE,
	PRONOUN_I,
	PRONOUN_IT,
	PRONOUN_SHE,
	PRONOUN_THEY,
	PRONOUN_WE,
	PRONOUN_YOU,
	SIMPLE_ASPECT,
	VOWELS,
} from './constants';
import { TAspectTenseVerb, TTenseVerb } from './types';

export type TSentence = {
	subject: string;
	predicate: string;
	object?: string;
	adverbialModifierOfTime?: string;
	adverbialModifierOfPlace?: string;
};

export class Sentence {
	sentence: TSentence;

	tence: TTenseVerb = PRESENT_TENSE;

	aspectTence: TAspectTenseVerb = SIMPLE_ASPECT;

	// private adverbialModifierOfTime = '';

	// private adverbialModifierOfPlace = '';

	constructor(sentence: TSentence) {
		this.sentence = sentence;
	}

	static isThirdPersonSingular(pron: string) {
		return pron === PRONOUN_HE || pron === PRONOUN_SHE || pron === PRONOUN_IT;
	}

	static isFirstPersonSingular(pron: string) {
		return pron === PRONOUN_I;
	}

	static isPlural(pron: string) {
		return pron === PRONOUN_YOU || pron === PRONOUN_WE || pron === PRONOUN_THEY;
	}

	static getToBe(pron: string) {
		if (Sentence.isFirstPersonSingular(pron)) return Sentence.red('am');
		if (Sentence.isThirdPersonSingular(pron)) return Sentence.red('is');
		return Sentence.red('are');
	}

	static red = (text: string) => <b style={{ color: '#a40101' }}>{text}</b>;

	static blue = (text: string) => <b style={{ color: '#40a9ff' }}>{text}</b>;

	static green = (text: string) => <b style={{ color: '#95be47' }}>{text}</b>;

	static bold = (text: string) => <b>{text}</b>;

	static tag = (text: string, num?: number) => {
		return <span className="tag">{text}</span>;
	};

	adverbialModifierOfTimeTag = () => (
		<i style={{ color: '#59ad71' }}> {this.sentence.adverbialModifierOfTime}</i>
	);

	adverbialModifierOfPlaceTag = () => (
		<i style={{ color: '#8673ab' }}>{this.sentence.adverbialModifierOfPlace}</i>
	);

	changeSubject(sbj: string) {
		this.sentence.subject = sbj;
		return this;
	}

	setTence(tence: TTenseVerb) {
		this.tence = tence;
		if (this.tence === PRESENT_TENSE) return this.toPresentSimple();
		if (this.tence === PAST_TENSE) return this.toPastSimple();
	}

	setAspectTence(tence: TTenseVerb, aspect: TAspectTenseVerb) {
		this.tence = tence;
		this.aspectTence = aspect;
		if (this.tence === PRESENT_TENSE && this.aspectTence === SIMPLE_ASPECT)
			return this.toPresentSimple();
		if (this.tence === PRESENT_TENSE && this.aspectTence === CONTINUOUS_ASPECT)
			return this.toPresentContinuous();

		if (this.tence === PAST_TENSE) return this.toPastSimple();
	}

	setAdverbialModifierOfTime(txt: string) {
		this.sentence.adverbialModifierOfTime = txt;
		return this;
	}

	setAdverbialModifierOfPlace(txt: string) {
		this.sentence.adverbialModifierOfTime = txt;
		return this;
	}

	static isAdverbialModifierOfIndefiniteTime(txt: string) {
		return ADVERBIAL_MODIFIER_OF_INDEFINITE_TIME_ARRAY.includes(txt);
	}

	static isVowels = (txt: string) => VOWELS.includes(txt);

	static isConsonants = (txt: string) => CONSONANTS.includes(txt);

	static presentSimpleVerb = (txt: string) => {
		if (
			txt.slice(-2) === 'sh' ||
			txt.slice(-2) === 'ch' ||
			txt.slice(-1) === 's' ||
			txt.slice(-1) === 'x' ||
			txt.slice(-1) === 'o'
		)
			return (
				<b>
					{txt}
					{Sentence.red('es')}
				</b>
			);
		if (txt.slice(-1) === 'y')
			if (this.isVowels(txt.slice(-2, -1)))
				return (
					<b>
						{txt}
						{Sentence.red('s')}
					</b>
				);
			else
				return (
					<b>
						{txt.slice(0, -1)}
						{Sentence.red('ies')}
					</b>
				);
		return (
			<b>
				{txt}
				{Sentence.red('s')}
			</b>
		);
	};

	toPresentSimple() {
		const predicatePresentSimple = Sentence.isThirdPersonSingular(this.sentence.subject) ? (
			Sentence.presentSimpleVerb(this.sentence.predicate)
		) : (
			<b>{`${this.sentence.predicate}`}</b>
		);
		const adverbialModifierOfIndefiniteTime = Sentence.isAdverbialModifierOfIndefiniteTime(
			this.sentence.adverbialModifierOfTime ?? '',
		)
			? this.adverbialModifierOfTimeTag()
			: '';
		const adverbialModifierOfNotIndefiniteTime = !Sentence.isAdverbialModifierOfIndefiniteTime(
			this.sentence.adverbialModifierOfTime ?? '',
		)
			? this.adverbialModifierOfTimeTag()
			: '';

		return (
			<p>
				{Sentence.blue(this.sentence.subject)} {adverbialModifierOfIndefiniteTime}{' '}
				{predicatePresentSimple} {this.sentence?.object ?? ''} {this.adverbialModifierOfPlaceTag()}
				{adverbialModifierOfNotIndefiniteTime}.
			</p>
		);
		// `${predicatePresentSimple} ${
		// 	this.sentence?.object ?? ''
		// }`;
	}

	toPresentSimpleNegative() {
		const predicatePresentSimple = Sentence.isThirdPersonSingular(this.sentence.subject)
			? `doesn't`
			: `don't`;
		return `${this.sentence.subject} ${predicatePresentSimple} ${this.sentence.predicate} ${
			this.sentence?.object ?? ''
		}`;
	}

	static pastSimpleVerb = (txt: string) => {
		if (txt.length < 2) return;
		const irregular = IRREGULAR_VERBS.find((item) => item[0] === txt);
		return irregular ? (
			irregular[1]
		) : (
			<b>
				{Sentence.bold(txt)}
				{Sentence.red('ed')}
			</b>
		);
	};

	static presentContinuousVerb = (txt: string) => (
		<b>
			{Sentence.bold(txt)}
			{Sentence.red('ing')}
		</b>
	);

	toPastSimple() {
		return (
			<p>
				{Sentence.blue(this.sentence.subject)} {Sentence.pastSimpleVerb(this.sentence.predicate)}{' '}
				{this.sentence?.object ?? ''}
			</p>
		);
	}

	toPresentContinuous() {
		return (
			<p>
				{Sentence.blue(this.sentence.subject)} {Sentence.getToBe(this.sentence.subject)}{' '}
				{Sentence.presentContinuousVerb(this.sentence.predicate)} {this.sentence?.object ?? ''}
			</p>
		);
	}
}
