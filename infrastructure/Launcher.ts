import { App } from 'aws-cdk-lib';
import { F1Bets } from './F1Stack';

const app = new App();
new F1Bets(app, 'Space-finder', {
	stackName: 'F1-BETS',
});
