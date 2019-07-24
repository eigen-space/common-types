export interface Dictionary<T> {
    [key: string]: T;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface AnyDictionary extends Dictionary<any> {
}
