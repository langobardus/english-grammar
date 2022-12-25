/* eslint-disable no-nested-ternary */
import { FC } from 'react';
import { TPronoun } from './types';
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
	PRONOUN_YOU,
	QUESTIONS_SENTENCE,
	SIMPLE_ASPECT,
	TO_BE,
	TO_BE_ASPECT,
} from './constants';
import { Sentence } from './sentence';

const isPluralPronoun = (pron: TPronoun) =>
	pron === PRONOUN_YOU || pron === PRONOUN_WE || pron === PRONOUN_THEY;
const isHeSheItPronoun = (pron: TPronoun) =>
	pron === PRONOUN_HE || pron === PRONOUN_SHE || pron === PRONOUN_IT;
const red = (text: string) => <b style={{ color: '#a40101' }}>{text}</b>;
const blue = (text: string) => <b style={{ color: '#40a9ff' }}>{text}</b>;
const green = (text: string) => <b style={{ color: '#95be47' }}>{text}</b>;

const tag = (text: string, num?: number) => {
	// if (num) {
	// 	const textArray = text.split(' - ');
	// 	return (
	// 		<span className="tag">
	// 			{textArray.map((item, index) => (index === num ? <b>{item}</b> : item)).join(' - ')}
	// 		</span>
	// 	);
	// }
	return <span className="tag">{text}</span>;
};

const PastSimpleAffirmativeScheme: FC = () => <div>Subject + Verb + ~ed / irregular Verb</div>;
const PastSimpleNegativeScheme: FC = () => <div>Subject + did not + Verb</div>;
const PastSimpleQuestionScheme: FC = () => <div>Did + Subject + Verb</div>;

const sent = new Sentence({ subject: 'I', predicate: 'go', adverbialModifierOfPlace: 'home' });

const PastSimpleAffirmative: FC<{ pron: TPronoun }> = ({ pron }) => (
	<div>
		<p>
			{blue(pron)} play{red('ed')} the guitar yesterday.
		</p>
		<p>
			{blue(pron)} <b>went</b> home last night. {tag('go - went - gone', 1)}
		</p>
		<p>{sent.changeSubject(pron).toPastSimple()}</p>
	</div>
);

const PastSimpleNegative: FC<{ pron: TPronoun }> = ({ pron }) => (
	<div>
		<p>
			{blue(pron)}{' '}
			<b>
				<i>{red("didn't")}</i> play
			</b>{' '}
			the guitar yesterday.
		</p>
		<p>
			{blue(pron)}{' '}
			<b>
				<i style={{ color: '#a40101' }}>didn&apos;t</i> go
			</b>{' '}
			home last night.
		</p>
	</div>
);

const PastSimpleQuestion: FC<{ pron: TPronoun }> = ({ pron }) => (
	<div>
		<p>
			<b>
				<i style={{ color: '#a40101' }}>Did</i>
			</b>{' '}
			{blue(pron === PRONOUN_I ? pron : pron.toLowerCase())} <b>play</b> the guitar yesterday?
		</p>
		<p>
			<b>
				<i style={{ color: '#a40101' }}>Did</i>
			</b>{' '}
			{blue(pron === PRONOUN_I ? pron : pron.toLowerCase())} <b>go</b> home last night?
		</p>
		<p>
			{green('What time')}{' '}
			<b>
				<i style={{ color: '#a40101' }}>did</i>
			</b>{' '}
			{blue(pron === PRONOUN_I ? pron : pron.toLowerCase())} <b>go</b> home last night?
		</p>
	</div>
);

const PastToBeAffirmative: FC<{ pron: TPronoun }> = ({ pron }) => (
	<div>
		{blue(pron)}{' '}
		<b>
			<i style={{ color: '#a40101' }}>{isPluralPronoun(pron) ? 'were' : 'was'}</i>
		</b>{' '}
		sleepy at work today.
	</div>
);
const PastToBeNegative: FC<{ pron: TPronoun }> = ({ pron }) => (
	<div>
		{blue(pron)}{' '}
		<b>
			<i style={{ color: '#a40101' }}>{isPluralPronoun(pron) ? 'weren' : 'wasn'}&apos;t</i>
		</b>{' '}
		sleepy at work today.
	</div>
);
const PastToBeQuestion: FC<{ pron: TPronoun }> = ({ pron }) => (
	<div>
		<b>
			<i style={{ color: '#a40101' }}>{isPluralPronoun(pron) ? 'Were' : 'Was'}</i>
		</b>{' '}
		{blue(pron === PRONOUN_I ? pron : pron.toLowerCase())} sleepy at work today?
	</div>
);
// ======================
const PresentToBeAffirmative: FC<{ pron: TPronoun }> = ({ pron }) => (
	<div>
		<p>
			{blue(pron)}{' '}
			<b>
				<i style={{ color: '#a40101' }}>
					{pron === PRONOUN_I ? 'am' : isPluralPronoun(pron) ? 'are' : 'is'}
				</i>
			</b>{' '}
			sleepy at work.
		</p>
		{pron === PRONOUN_IT && (
			<p>
				<b>
					<i>There</i>
				</b>{' '}
				<b>
					<i style={{ color: '#a40101' }}>is</i>
				</b>{' '}
				a book on the desk.
			</p>
		)}
		{pron === PRONOUN_THEY && (
			<p>
				<b>
					<i>There</i>
				</b>{' '}
				<b>
					<i style={{ color: '#a40101' }}>are</i>
				</b>{' '}
				books on the desk.
			</p>
		)}
		{pron === PRONOUN_IT && (
			<p>
				<b>
					<i>There</i>
				</b>{' '}
				<b>
					<i style={{ color: '#a40101' }}>is</i>
				</b>{' '}
				<b>
					<i>some</i>
				</b>{' '}
				milk in the fridge.
			</p>
		)}
	</div>
);

const sentence = [
	{
		word: 'I',
		variable: true,
		type: 'pronoun',
	},
	{
		word: 'be',
		variable: true,
		type: 'verb',
	},
	{
		word: 'sleepy',
		variable: false,
		type: 'adjective',
	},
	{
		word: 'at',
		variable: false,
		type: 'pronoun',
	},
	{
		word: 'work',
		variable: false,
		type: 'noun',
	},
];
// const sentenceToPresent = ({sent:, pron}) =>
const PresentToBeNegative: FC<{ pron: TPronoun }> = ({ pron }) => (
	<div>
		<p>
			{blue(pron)}{' '}
			<b>
				<i style={{ color: '#a40101' }}>
					{pron === PRONOUN_I ? 'am not' : isPluralPronoun(pron) ? "aren't" : "isn't"}
				</i>
			</b>{' '}
			sleepy at work.
		</p>
		{pron === PRONOUN_IT && (
			<p>
				<b>
					<i>There</i>
				</b>{' '}
				<b>
					<i style={{ color: '#a40101' }}>isn&apos;t</i>
				</b>{' '}
				a book on the desk.
			</p>
		)}
		{pron === PRONOUN_THEY && (
			<p>
				<b>
					<i>There</i>
				</b>{' '}
				<b>
					<i style={{ color: '#a40101' }}>aren&apos;t</i>
				</b>{' '}
				books on the desk.
			</p>
		)}

		{pron === PRONOUN_IT && (
			<p>
				<b>
					<i>There</i>
				</b>{' '}
				<b>
					<i style={{ color: '#a40101' }}>isn&apos;t</i>
				</b>{' '}
				<b>
					<i>some</i>
				</b>{' '}
				milk in the fridge.
			</p>
		)}
	</div>
);
const PresentToBeQuestion: FC<{ pron: TPronoun }> = ({ pron }) => (
	<div>
		<b>
			<i style={{ color: '#a40101' }}>
				{pron === PRONOUN_I ? 'Am' : isPluralPronoun(pron) ? 'Are' : 'Is'}
			</i>
		</b>{' '}
		{blue(pron === PRONOUN_I ? pron : pron.toLowerCase())} sleepy at work?
	</div>
);

const PresentSimpleAffirmative: FC<{ pron: TPronoun }> = ({ pron }) => (
	<div>
		<p>
			{blue(pron)} <b>speak</b>
			{isHeSheItPronoun(pron) ? red('s') : ''} english.
		</p>

		<p>
			{blue(pron)} <b>go</b>
			{isHeSheItPronoun(pron) ? red('es') : ''} home every day.
		</p>
		<p>
			{blue(pron)} <b>can play</b> the guitar.
		</p>
		{sent.changeSubject(pron).setAdverbialModifierOfTime('always').toPresentSimple()}
		{sent.changeSubject(pron).setAdverbialModifierOfTime('at night').toPresentSimple()}
	</div>
);
const PresentSimpleNegative: FC<{ pron: TPronoun }> = ({ pron }) => (
	<div>
		<p>
			{blue(pron)}{' '}
			<b>
				<i style={{ color: '#a40101' }}>{isHeSheItPronoun(pron) ? "doesn't" : "don't"}</i> speak
			</b>{' '}
			english.
		</p>

		<p>
			{blue(pron)}{' '}
			<b>
				<i style={{ color: '#a40101' }}>{isHeSheItPronoun(pron) ? "doesn't" : "don't"}</i> go
			</b>{' '}
			home every day.
		</p>
		<p>
			{blue(pron)} <b>can&apos;t play</b> the guitar.
		</p>
	</div>
);

const PresentSimpleQuestion: FC<{ pron: TPronoun }> = ({ pron }) => (
	<div>
		<p>
			<b>
				<i style={{ color: '#a40101' }}>{isHeSheItPronoun(pron) ? 'Does' : 'Do'}</i>
			</b>{' '}
			{blue(pron === PRONOUN_I ? pron : pron.toLowerCase())} <b>go</b> home every day?
		</p>
		<p>
			{green('What time')}{' '}
			<b>
				<i style={{ color: '#a40101' }}>{isHeSheItPronoun(pron) ? 'does' : 'do'}</i>
			</b>{' '}
			{blue(pron === PRONOUN_I ? pron : pron.toLowerCase())} <b>go</b> home every day?
		</p>
		<p>
			<b>Can</b> {blue(pron === PRONOUN_I ? pron : pron.toLowerCase())} <b>play</b> the guitar?
		</p>
	</div>
);

const PresentContinuousAffirmative: FC<{ pron: TPronoun }> = ({ pron }) => (
	<div>{sent.changeSubject(pron).toPresentContinuous()}</div>
);

export const sentObj: any = {
	Past: {
		Simple: {
			'+ Affirmative sentence': {
				I: <PastSimpleAffirmative pron={PRONOUN_I} />,
				You: <PastSimpleAffirmative pron={PRONOUN_YOU} />,
				He: <PastSimpleAffirmative pron={PRONOUN_HE} />,
				She: <PastSimpleAffirmative pron={PRONOUN_SHE} />,
				It: <PastSimpleAffirmative pron={PRONOUN_IT} />,
				We: <PastSimpleAffirmative pron={PRONOUN_WE} />,
				They: <PastSimpleAffirmative pron={PRONOUN_THEY} />,
				Scheme: <PastSimpleAffirmativeScheme />,
			},
			'- Negative sentence': {
				I: <PastSimpleNegative pron={PRONOUN_I} />,
				You: <PastSimpleNegative pron={PRONOUN_YOU} />,
				He: <PastSimpleNegative pron={PRONOUN_HE} />,
				She: <PastSimpleNegative pron={PRONOUN_SHE} />,
				It: <PastSimpleNegative pron={PRONOUN_IT} />,
				We: <PastSimpleNegative pron={PRONOUN_WE} />,
				They: <PastSimpleNegative pron={PRONOUN_THEY} />,
				Scheme: <PastSimpleNegativeScheme />,
			},
			'? Questions sentence': {
				I: <PastSimpleQuestion pron={PRONOUN_I} />,
				You: <PastSimpleQuestion pron={PRONOUN_YOU} />,
				He: <PastSimpleQuestion pron={PRONOUN_HE} />,
				She: <PastSimpleQuestion pron={PRONOUN_SHE} />,
				It: <PastSimpleQuestion pron={PRONOUN_IT} />,
				We: <PastSimpleQuestion pron={PRONOUN_WE} />,
				They: <PastSimpleQuestion pron={PRONOUN_THEY} />,
				Scheme: <PastSimpleQuestionScheme />,
			},
		},
		'To be': {
			'+ Affirmative sentence': {
				I: <PastToBeAffirmative pron={PRONOUN_I} />,
				You: <PastToBeAffirmative pron={PRONOUN_YOU} />,
				He: <PastToBeAffirmative pron={PRONOUN_HE} />,
				She: <PastToBeAffirmative pron={PRONOUN_SHE} />,
				It: <PastToBeAffirmative pron={PRONOUN_IT} />,
				We: <PastToBeAffirmative pron={PRONOUN_WE} />,
				They: <PastToBeAffirmative pron={PRONOUN_THEY} />,
			},
			'- Negative sentence': {
				I: <PastToBeNegative pron={PRONOUN_I} />,
				You: <PastToBeNegative pron={PRONOUN_YOU} />,
				He: <PastToBeNegative pron={PRONOUN_HE} />,
				She: <PastToBeNegative pron={PRONOUN_SHE} />,
				It: <PastToBeNegative pron={PRONOUN_IT} />,
				We: <PastToBeNegative pron={PRONOUN_WE} />,
				They: <PastToBeNegative pron={PRONOUN_THEY} />,
			},
			'? Questions sentence': {
				I: <PastToBeQuestion pron={PRONOUN_I} />,
				You: <PastToBeQuestion pron={PRONOUN_YOU} />,
				He: <PastToBeQuestion pron={PRONOUN_HE} />,
				She: <PastToBeQuestion pron={PRONOUN_SHE} />,
				It: <PastToBeQuestion pron={PRONOUN_IT} />,
				We: <PastToBeQuestion pron={PRONOUN_WE} />,
				They: <PastToBeQuestion pron={PRONOUN_THEY} />,
			},
		},
	},
	Present: {
		Simple: {
			'+ Affirmative sentence': {
				I: <PresentSimpleAffirmative pron={PRONOUN_I} />,
				You: <PresentSimpleAffirmative pron={PRONOUN_YOU} />,
				He: <PresentSimpleAffirmative pron={PRONOUN_HE} />,
				She: <PresentSimpleAffirmative pron={PRONOUN_SHE} />,
				It: <PresentSimpleAffirmative pron={PRONOUN_IT} />,
				We: <PresentSimpleAffirmative pron={PRONOUN_WE} />,
				They: <PresentSimpleAffirmative pron={PRONOUN_THEY} />,
				Scheme: <PastSimpleAffirmativeScheme />,
			},
			'- Negative sentence': {
				I: <PresentSimpleNegative pron={PRONOUN_I} />,
				You: <PresentSimpleNegative pron={PRONOUN_YOU} />,
				He: <PresentSimpleNegative pron={PRONOUN_HE} />,
				She: <PresentSimpleNegative pron={PRONOUN_SHE} />,
				It: <PresentSimpleNegative pron={PRONOUN_IT} />,
				We: <PresentSimpleNegative pron={PRONOUN_WE} />,
				They: <PresentSimpleNegative pron={PRONOUN_THEY} />,
				Scheme: <PastSimpleNegativeScheme />,
			},
			'? Questions sentence': {
				I: <PresentSimpleQuestion pron={PRONOUN_I} />,
				You: <PresentSimpleQuestion pron={PRONOUN_YOU} />,
				He: <PresentSimpleQuestion pron={PRONOUN_HE} />,
				She: <PresentSimpleQuestion pron={PRONOUN_SHE} />,
				It: <PresentSimpleQuestion pron={PRONOUN_IT} />,
				We: <PresentSimpleQuestion pron={PRONOUN_WE} />,
				They: <PresentSimpleQuestion pron={PRONOUN_THEY} />,
			},
		},
		'To be': {
			'+ Affirmative sentence': {
				I: <PresentToBeAffirmative pron={PRONOUN_I} />,
				You: <PresentToBeAffirmative pron={PRONOUN_YOU} />,
				He: <PresentToBeAffirmative pron={PRONOUN_HE} />,
				She: <PresentToBeAffirmative pron={PRONOUN_SHE} />,
				It: <PresentToBeAffirmative pron={PRONOUN_IT} />,
				We: <PresentToBeAffirmative pron={PRONOUN_WE} />,
				They: <PresentToBeAffirmative pron={PRONOUN_THEY} />,
			},
			'- Negative sentence': {
				I: <PresentToBeNegative pron={PRONOUN_I} />,
				You: <PresentToBeNegative pron={PRONOUN_YOU} />,
				He: <PresentToBeNegative pron={PRONOUN_HE} />,
				She: <PresentToBeNegative pron={PRONOUN_SHE} />,
				It: <PresentToBeNegative pron={PRONOUN_IT} />,
				We: <PresentToBeNegative pron={PRONOUN_WE} />,
				They: <PresentToBeNegative pron={PRONOUN_THEY} />,
			},
			'? Questions sentence': {
				I: <PresentToBeQuestion pron={PRONOUN_I} />,
				You: <PresentToBeQuestion pron={PRONOUN_YOU} />,
				He: <PresentToBeQuestion pron={PRONOUN_HE} />,
				She: <PresentToBeQuestion pron={PRONOUN_SHE} />,
				It: <PresentToBeQuestion pron={PRONOUN_IT} />,
				We: <PresentToBeQuestion pron={PRONOUN_WE} />,
				They: <PresentToBeQuestion pron={PRONOUN_THEY} />,
			},
		},
		Continuous: {
			'+ Affirmative sentence': {
				I: <PresentContinuousAffirmative pron={PRONOUN_I} />,
				You: <PresentContinuousAffirmative pron={PRONOUN_YOU} />,
				He: <PresentContinuousAffirmative pron={PRONOUN_HE} />,
				She: <PresentContinuousAffirmative pron={PRONOUN_SHE} />,
				It: <PresentContinuousAffirmative pron={PRONOUN_IT} />,
				We: <PresentContinuousAffirmative pron={PRONOUN_WE} />,
				They: <PresentContinuousAffirmative pron={PRONOUN_THEY} />,
				Scheme: <PastSimpleAffirmativeScheme />,
			},
		},
	},
};
