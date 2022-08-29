import test from "node:test";
import { expect, toBeFalsy } from 'jest';

test('should be false', () => {
    expect(true).toBeFalsy();
})