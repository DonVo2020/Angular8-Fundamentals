export class City {
  constructor(
    public id: number = null,
    public name: string,
    public stateOrProvince: string = 'N/A',
    public rating: number = 0,
    public highlights: string[] = ['N/A'],
    public favorite?: boolean,
    public price: number = 0
  ) { }
}
