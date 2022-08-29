import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const emitter = of(1, 2, 3, 4);

const stringMap = emitter.pipe(
    map((value: number) => { return value * 2 }),
    map((value: number) => { return `str_${value}` }),
);

stringMap.subscribe((value: string) => {
    console.log(`stringMap emitted: ${value}`);
});