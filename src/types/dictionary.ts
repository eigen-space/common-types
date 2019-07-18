export interface Dictionary<T> {
    [key: string]: T;
}

// tslint:disable-next-line:no-any
export interface AnyDictionary extends Dictionary<any> {
}
