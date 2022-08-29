import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const emitter: Observable<number> = of(1, 2, 3, 4);

const modulus = emitter.pipe(
    map((value: number) => {
        console.log(`received: ${value}`);
        return value % 2;
    })
);

modulus.subscribe((value: number) => {
    console.log(`modulus: ${value}`);
});