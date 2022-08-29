import { of, Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

interface IProductId {
    id: number
};

interface IProductDescription {
    name: string;
    description: string;
};

const productList = <Observable<IProductId>> from(
    [
        {id: 1},
        {id: 2},
        {id: 3},
    ]
);

function getProductName(id: number):
    Observable<IProductDescription> {
        return of(
            {
                id: id,
                name: `Product_${id}`,
                description: `Description_${id}`
            }
        );
    };