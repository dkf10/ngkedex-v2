export namespace IGeneral {
  export interface Result {
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