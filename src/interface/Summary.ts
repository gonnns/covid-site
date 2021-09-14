import { CovidStatus } from './CovidStatus';
import { CovidSummaryStatus } from './CovidSummaryStatus';

export interface Summary {
  ID: string;
  Message: string;
  Global: CovidStatus;
  Countries: CovidSummaryStatus[];
}
