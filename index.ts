import { combineLatest, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';
import { calculateMortgage } from './calculate';

combineLatest(
  fromEvent(document.getElementById('loanAmount'), 'input').pipe(
    map(e => {
      const arg: number = parseInt((e.target as HTMLInputElement).value);
      return parseInt((e.target as HTMLInputElement).value);
    })
  ),
  fromEvent(document.getElementById('loanInterest'), 'input').pipe(
    map(e => {
      const arg: number = parseInt((e.target as HTMLInputElement).value);
      return arg;
    })
  ),
  fromEvent(document.getElementById('loanLength'), 'input').pipe(
    map(e => {
      const arg: number = parseInt((e.target as HTMLInputElement).value);
      return arg;
    })
  )
).subscribe({
  next: args => {
    const res = calculateMortgage(...args);
    const resOut = document.getElementById('result');
    resOut.innerHTML = res;
  }
});
