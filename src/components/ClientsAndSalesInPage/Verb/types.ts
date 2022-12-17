import {
	AFFIRMATIVE_SENTENCE,
	CONTINUOUS_ASPECT,
	FUTURE_TENSE,
	NEGATIVE_SENTENCE,
	NOT_TO_BE,
	PAST_TENSE,
	PERFECT_ASPECT,
	PRESENT_TENSE,
	PRONOUN_HE,
	PRONOUN_I,
	PRONOUN_IT,
	PRONOUN_SHE,
	PRONOUN_THEY,
	PRONOUN_WE,
	PRONOUN_YUO,
	QUESTIONS_SENTENCE,
	SIMPLE_ASPECT,
	TO_BE,
	TO_BE_ASPECT,
} from './constants';

export type TPronoun =
	| typeof PRONOUN_I
	| typeof PRONOUN_YUO
	| typeof PRONOUN_HE
	| typeof PRONOUN_SHE
	| typeof PRONOUN_IT
	| typeof PRONOUN_YUO
	| typeof PRONOUN_WE
	| typeof PRONOUN_THEY;

export type TTenseVerb = typeof PAST_TENSE | typeof PRESENT_TENSE | typeof FUTURE_TENSE;
export type TAspectTenseVerb =
	| typeof SIMPLE_ASPECT
	| typeof CONTINUOUS_ASPECT
	| typeof PERFECT_ASPECT
	| typeof TO_BE_ASPECT;
export type TTypeOfSentence =
	| typeof AFFIRMATIVE_SENTENCE
	| typeof NEGATIVE_SENTENCE
	| typeof QUESTIONS_SENTENCE;
export type TToBeOrNotToBe = typeof TO_BE | typeof NOT_TO_BE;
