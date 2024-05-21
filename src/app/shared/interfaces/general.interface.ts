export namespace IGeneral {
  export interface Result {
    id?: number;
    name?: string;
    url?: string;
  }

  export interface Paginated {
    count: number;
    next: string;
    previous: string;
    results: Result[];
  }
}