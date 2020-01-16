export interface IMovie {
  title: string;
  year: string;
  image: string;
}

// Optional (more Java-like):
// export class MovieModel implements IMovie {
export class MovieModel {
  constructor(public title: string,
    public year: string,
    public image: string) {
  }
}

