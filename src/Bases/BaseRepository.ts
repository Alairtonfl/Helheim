export interface BaseRepository<T> {
    findById (id: string): Promise<T>;
    findAll (): Promise<Promise<T>[]>;
    create (entity: T): Promise<T>;
    update (id: string, entity: T): Promise<T>;
    delete (id: string): Promise<T>;
}
